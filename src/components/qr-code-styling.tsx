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
  const prevConfigRef = useRef<string>('');

  const createQRCode = useCallback(() => {
    if (!ref.current) return null;

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
      },
      ...(config.logo.image && { image: config.logo.image }),
    });

    return qrCode;
  }, [config, getDataString]);

  const updateQRCode = useCallback(() => {
    if (!qrCodeRef.current) return;

    const dataString = getDataString(config.data);

    qrCodeRef.current.update({
      width: config.style.size,
      height: config.style.size,
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
      },
      ...(config.logo.image && { image: config.logo.image }),
    });
  }, [config, getDataString]);

  useEffect(() => {
    const configString = JSON.stringify(config);
    
    if (!qrCodeRef.current && ref.current) {
      // Initial creation
      const qrCode = createQRCode();
      if (qrCode) {
        qrCodeRef.current = qrCode;
        ref.current.innerHTML = '';
        qrCode.append(ref.current);
        prevConfigRef.current = configString;
        
        if (onReady) {
          onReady(qrCode);
        }
      }
    } else if (qrCodeRef.current && prevConfigRef.current !== configString) {
      // Update existing QR code
      updateQRCode();
      prevConfigRef.current = configString;
    }
  }, [config, createQRCode, updateQRCode, onReady]);

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
