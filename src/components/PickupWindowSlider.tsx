import React, { useRef, useEffect, useCallback } from 'react';
import noUiSlider, { API } from 'nouislider';
import 'nouislider/dist/nouislider.css';

interface PickupWindowSliderProps {
  readyTime: string;
  closeTime: string;
  shipDate: string;
  formatTime: (minutes: number) => string;
  toMinutes: (time: string) => number;
  toTimeString: (minutes: number) => string;
  getMinReadyTime: () => number;
  onChange: (readyTime: string, closeTime: string) => void;
  hintText: string;
  label: string;
}

const PickupWindowSlider: React.FC<PickupWindowSliderProps> = ({
  readyTime,
  closeTime,
  shipDate,
  formatTime,
  toMinutes,
  toTimeString,
  getMinReadyTime,
  onChange,
  hintText,
  label,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderInstance = useRef<API | null>(null);
  const onChangeRef = useRef(onChange);
  const getMinReadyTimeRef = useRef(getMinReadyTime);
  const toTimeStringRef = useRef(toTimeString);

  onChangeRef.current = onChange;
  getMinReadyTimeRef.current = getMinReadyTime;
  toTimeStringRef.current = toTimeString;

  const initSlider = useCallback(() => {
    if (!sliderRef.current) return;

    // Destroy previous instance
    if (sliderInstance.current) {
      sliderInstance.current.destroy();
      sliderInstance.current = null;
    }

    const startReady = toMinutes(readyTime);
    const startClose = toMinutes(closeTime);

    const slider = noUiSlider.create(sliderRef.current, {
      start: [startReady, startClose],
      connect: true,
      step: 15,
      margin: 90,
      behaviour: 'tap-drag',
      range: {
        min: 570,  // 09:30
        max: 1080  // 18:00
      },
      tooltips: [
        { to: (v: number) => formatTime(Math.round(v)), from: (v: string) => Number(v) },
        { to: (v: number) => formatTime(Math.round(v)), from: (v: string) => Number(v) },
      ],
      pips: {
        mode: 'values' as any,
        values: [600, 660, 720, 780, 840, 900, 960, 1020, 1080],
        density: 4,
        format: {
          to: (value: number) => {
            const tick = Math.round(value);
            // Only show text labels for every other major tick
            return [600, 720, 840, 960].includes(tick) ? formatTime(tick) : '';
          },
          from: (value: string) => Number(value),
        },
      },
    });

    sliderInstance.current = slider;

    // onChange — fires when user finishes dragging
    slider.on('change', (values: (string | number)[]) => {
      const ready = parseFloat(String(values[0]));
      const close = parseFloat(String(values[1]));
      onChangeRef.current(toTimeStringRef.current(ready), toTimeStringRef.current(close));
    });

    // onUpdate — enforce minimum ready time
    slider.on('update', (values: (string | number)[], handle: number) => {
      if (handle === 0) {
        const minReadyRaw = getMinReadyTimeRef.current();
        // Snap minReady to the nearest 15-min increment upwards to prevent infinite loops with the slider step
        const snappedMinReady = Math.ceil(minReadyRaw / 15) * 15;
        
        // Safety: If it's too late in the day, don't push past 1.5h before dead-end
        const safeMinReady = Math.min(snappedMinReady, 1080 - 90);

        const currentVal = parseFloat(String(values[0]));
        
        // Only call set if the value is actually below the limit to avoid feedback loops
        if (currentVal < safeMinReady) {
          slider.set([safeMinReady, null]);
        }
      }
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // We intentionally have an empty dep array — we only want to create 
  // the slider once on mount, not re-create on every prop change.

  useEffect(() => {
    initSlider();
    return () => {
      if (sliderInstance.current) {
        sliderInstance.current.destroy();
        sliderInstance.current = null;
      }
    };
  }, [initSlider]);

  // Sync external prop changes back to slider (e.g. if Step 2 logic forces a change)
  useEffect(() => {
    if (sliderInstance.current) {
      const currentValues = sliderInstance.current.get() as string[];
      const propReady = toMinutes(readyTime);
      const propClose = toMinutes(closeTime);
      const sliderReady = parseFloat(currentValues[0]);
      const sliderClose = parseFloat(currentValues[1]);

      if (Math.abs(propReady - sliderReady) > 1 || Math.abs(propClose - sliderClose) > 1) {
        sliderInstance.current.set([propReady, propClose]);
      }
    }
  }, [readyTime, closeTime, toMinutes]);

  return (
    <div style={{ position: 'relative', padding: '24px 0 64px 0' }}>
      <label
        style={{
          display: 'block',
          fontSize: '0.875rem',
          fontWeight: 500,
          marginBottom: '8px',
        }}
      >
        {label}
      </label>
      <div
        style={{
          position: 'relative',
          marginTop: '40px',
          marginBottom: '12px',
          paddingLeft: '14px',
          paddingRight: '14px',
        }}
      >
        <div ref={sliderRef} />
      </div>
      <p
        style={{
          textAlign: 'center',
          fontSize: '0.75rem',
          color: '#6b7280',
          marginTop: '48px',
        }}
      >
        {hintText}
      </p>
    </div>
  );
};

export default PickupWindowSlider;
