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
  onChangeRef.current = onChange;

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
      onChangeRef.current(toTimeString(ready), toTimeString(close));
    });

    // onUpdate — enforce minimum ready time
    slider.on('update', (values: (string | number)[], handle: number) => {
      const minReady = getMinReadyTime();
      if (handle === 0) {
        const currentVal = parseFloat(String(values[0]));
        if (currentVal < minReady) {
          slider.set([minReady, null]);
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
