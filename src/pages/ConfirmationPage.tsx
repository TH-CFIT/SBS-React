import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2, Download, AlertCircle, FileText, Printer, ArrowLeft, Plus, Truck, Box } from 'lucide-react';

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

  const getDocButtonText = (typeCode: string) => {
    const type = typeCode.toLowerCase();
    if (type === 'waybilldoc' || type === 'label') return t('downloadLabel' as any);
    if (type === 'invoice') return t('downloadInvoice' as any);
    if (type === 'shipmentreceipt' || type === 'receipt') return t('downloadReceipt' as any);
    return `Download ${typeCode}`;
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 pb-20">
      <div className="card text-center space-y-8 relative overflow-hidden">
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
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2" >
              {t('awbLabel' as any)}
            </p>
            <p className="text-4xl md:text-5xl font-black text-dhl-red italic tracking-tighter transition-transform group-hover:scale-105">
              {shipmentTrackingNumber || 'N/A'}
            </p>
        </div>

        {warnings && warnings.filter((w: string) => !w.includes('7987')).length > 0 && (
          <div className="bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-400 p-6 rounded-r-2xl text-left">
            <h3 className="flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400 mb-2 uppercase tracking-tight">
              <AlertCircle className="w-5 h-5" />
              {t('warningsTitle' as any)}
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-amber-800 dark:text-amber-300">
              {warnings.filter((w: string) => !w.includes('7987')).map((w: string, i: number) => <li key={i}>{w}</li>)}
            </ul>
          </div>
        )}

        {/* Download Buttons Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
           {documents?.map((doc: any, i: number) => {
             const type = doc.typeCode?.toLowerCase();
             const isLabel = type === 'waybilldoc' || type === 'label';
             return (
                <button 
                  key={i}
                  onClick={() => downloadFile(doc.content, `${shipmentTrackingNumber}_${type}.pdf`)}
                  className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-black transition-all active:scale-95 shadow-md flex-1 w-full sm:w-auto justify-center ${isLabel ? 'bg-dhl-red text-white hover:bg-dhl-dark-red shadow-red-500/20' : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                >
                  <FileText className="w-5 h-5 opacity-80" />
                  <span className="uppercase tracking-widest text-xs">{getDocButtonText(doc.typeCode)}</span>
                </button>
             );
           })}
        </div>

        {/* Pickup Confirmation Section */}
        {dispatchConfirmationNumber && (
          <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 text-left">
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
              <Truck className="w-5 h-5 text-dhl-red" />
              {t('pickupNumberTitle' as any)}
            </h3>
            <div className="bg-gray-50 dark:bg-gray-900 py-3 px-4 rounded-xl font-mono text-sm border border-gray-100 dark:border-gray-700 inline-block">
              {dispatchConfirmationNumber}
            </div>
          </div>
        )}

        {/* Piece Tracking Section */}
        {packages && packages.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 text-left">
             <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
               <Box className="w-5 h-5 text-dhl-red" />
               {t('pieceIdTitle' as any)} ({packages.length})
             </h3>
             <ul className="space-y-2">
               {packages.map((pkg: any, idx: number) => (
                 <li key={idx} className="bg-gray-50 dark:bg-gray-900 py-2 px-4 rounded-xl font-mono text-xs border border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-400">
                    {pkg.trackingNumber}
                 </li>
               ))}
             </ul>
          </div>
        )}

        <div className="pt-8 border-t dark:border-gray-800 flex flex-col sm:flex-row gap-4">
          <button onClick={onNewShipment} className="flex-1 utility-button flex items-center justify-center gap-2 bg-dhl-yellow text-gray-800 font-black uppercase tracking-widest text-xs py-5 rounded-2xl shadow-lg shadow-yellow-500/10 hover:scale-[1.02] active:scale-95 transition-all">
            <Plus className="w-5 h-5" />
            {t('createNewShipment' as any)}
          </button>
          <button onClick={onBackHome} className="flex-1 utility-button flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 border-transparent text-gray-500 font-black uppercase tracking-widest text-xs py-5 rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
            <ArrowLeft className="w-5 h-5" />
            {t('backToMain')}
          </button>
        </div>
      </div>
    </div>
  );
};
