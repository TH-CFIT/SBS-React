import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2, Download, AlertCircle, FileText, Printer, ArrowLeft, Plus } from 'lucide-react';

interface ConfirmationPageProps {
  response: any;
  onNewShipment: () => void;
  onBackHome: () => void;
}

export const ConfirmationPage: React.FC<ConfirmationPageProps> = ({ response, onNewShipment, onBackHome }) => {
  const { t, language } = useLanguage();

  if (!response) {
    return (
      <div className="card text-center py-20 space-y-6">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto" />
        <h2 className="text-2xl font-bold">{t('noShipmentData' as any)}</h2>
        <button onClick={onBackHome} className="btn-primary bg-gray-100 hover:bg-gray-200 text-gray-800">
           {t('backToMain')}
        </button>
      </div>
    );
  }

  const { shipmentTrackingNumber, warnings, dispatchConfirmationNumber, packages, documents } = response;

  const downloadFile = (base64: string, fileName: string) => {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
      <div className="card text-center space-y-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-green-500" />
        
        <div className="flex flex-col items-center">
           <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full mb-4">
             <CheckCircle2 className="w-16 h-16 text-green-500" />
           </div>
           <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tight">
             {t('confirmationTitle' as any)}
           </h2>
           <p className="text-gray-500 dark:text-gray-400 font-medium">
             {t('confirmationSubtitle' as any)}
           </p>
        </div>

        <div className="bg-yellow-50 dark:bg-gray-900 border-2 border-dhl-yellow/30 p-8 rounded-3xl group shadow-sm transition-all hover:bg-yellow-100/50">
           <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2" >
             {t('awbLabel' as any)}
           </p>
           <p className="text-4xl md:text-5xl font-black text-dhl-red italic tracking-tighter transition-transform group-hover:scale-105">
             {shipmentTrackingNumber || 'N/A'}
           </p>
        </div>

        {warnings && warnings.length > 0 && (
          <div className="bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-400 p-6 rounded-r-2xl text-left">
            <h3 className="flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400 mb-2">
              <AlertCircle className="w-5 h-5" />
              {t('warningsTitle' as any)}
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-amber-800 dark:text-amber-300">
              {warnings.map((w: string, i: number) => <li key={i}>{w}</li>)}
            </ul>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           {documents?.map((doc: any, i: number) => {
             const type = doc.typeCode?.toLowerCase();
             const isLabel = type === 'waybilldoc' || type === 'label';
             return (
                <button 
                  key={i}
                  onClick={() => downloadFile(doc.content, `${shipmentTrackingNumber}_${type}.pdf`)}
                  className={`flex items-center justify-between p-5 rounded-2xl font-bold transition-all active:scale-95 shadow-md ${isLabel ? 'bg-dhl-red text-white hover:bg-dhl-dark-red shadow-red-500/20' : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 opacity-80" />
                    <span className="uppercase tracking-tight text-sm">Download {type}</span>
                  </div>
                  <Download className="w-5 h-5 opacity-70" />
                </button>
             );
           })}
        </div>

        <div className="pt-8 border-t dark:border-gray-800 flex flex-col sm:flex-row gap-4">
          <button onClick={onNewShipment} className="flex-1 utility-button flex items-center justify-center gap-2 bg-dhl-yellow/10 border-dhl-yellow text-gray-800 font-black uppercase tracking-widest text-xs py-4">
            <Plus className="w-5 h-5" />
            {t('createNewShipment' as any)}
          </button>
          <button onClick={onBackHome} className="flex-1 utility-button flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 border-transparent text-gray-500 font-black uppercase tracking-widest text-xs py-4">
            <ArrowLeft className="w-5 h-5" />
            {t('backToMain')}
          </button>
        </div>
      </div>
    </div>
  );
};
