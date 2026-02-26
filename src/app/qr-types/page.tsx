import { Metadata } from 'next';
import QRTypesSection from '@/components/sections/qr-types-section';
import MainLayout from '@/components/main-layout';

export const metadata: Metadata = {
  title: 'QR Code Types - URL, WiFi, WhatsApp, Email & More',
  description: 'Explore 7 different QR code types: URL, Text, Phone, Email, WhatsApp, WiFi, and SMS. Learn how each type works and when to use them.',
  openGraph: {
    title: 'QR Code Types - URL, WiFi, WhatsApp, Email & More | FastQRGen',
    description: 'Explore 7 different QR code types for various use cases.',
    url: 'https://fastqrcodegen.online/qr-types',
  },
};

export default function QRTypesPage() {
  return (
    <MainLayout>
      <QRTypesSection />
    </MainLayout>
  );
}
