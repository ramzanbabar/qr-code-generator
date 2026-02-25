'use client';

import { useEffect, useRef, useCallback } from 'react';
import QRCodeStyling from 'qr-code-styling';
import type { QRConfig, generateQRDataString } from '@/lib/qr-types';

interface QRCodeRendererProps {
  config: QRConfig;
  getDataString: typeof generateQRDataString;
  onReady?: (qrCode: QRCodeStyling) => void;
}

export default function QRCodeRenderer({ config, getDataString, onReady }: QRCodeRendererProps) {
  const ref = useRef<HTMLDivElement>(null);
  const qrCodeRef = useRef<QRCodeStyling | null>(null);

  const initializeQRCode = useCallback(() => {
    if (!ref.current) return;

    const dataString = getDataString(config.data);

    const qrCode = new QRCodeStyling({
      width: config.style.size,
      height: config.style.size,
      type: 'svg',
      data: dataString,
      margin: config.style.margin,
      qrOptions: {
        errorCorrectionLevel: config.style.errorCorrectionLevel,
      },
      dotsOptions: {
        type: config.style.dotsType,
        color: config.style.dotsColor,
      },
      cornersSquareOptions: {
        type: config.style.cornersType,
        color: config.style.cornersColor,
      },
      cornersDotOptions: {
        type: config.style.cornersDotsType,
        color: config.style.cornersDotsColor,
      },
      backgroundOptions: {
        color: config.style.backgroundColor,
      },
      imageOptions: {
        crossOrigin: 'anonymous',
        margin: config.logo.margin,
        imageSize: config.logo.size,
        hideBackgroundDots: true,
        ...(config.logo.borderRadius > 0 && { borderRadius: `${config.logo.borderRadius}%` }),
      },
      ...(config.logo.image && { image: config.logo.image }),
    });

    qrCodeRef.current = qrCode;
    ref.current.innerHTML = '';
    qrCode.append(ref.current);
    
    if (onReady) {
      onReady(qrCode);
    }
  }, [config, getDataString, onReady]);

  useEffect(() => {
    initializeQRCode();
  }, [initializeQRCode]);

  return (
    <div 
      ref={ref} 
      className="inline-flex items-center justify-center"
      style={{ 
        backgroundColor: config.style.backgroundColor,
        borderRadius: '8px',
      }}
    />
  );
}
