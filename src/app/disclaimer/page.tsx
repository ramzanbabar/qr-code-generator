import { Metadata } from 'next';
import DisclaimerSection from '@/components/sections/disclaimer-section';
import MainLayout from '@/components/main-layout';

export const metadata: Metadata = {
  title: 'Disclaimer - Free QR Code Generator',
  description: 'Read our disclaimer for FastQRGen free QR code generator. Important information about using our QR code generation service.',
  openGraph: {
    title: 'Disclaimer | FastQRGen - Free QR Code Generator',
    description: 'Disclaimer for FastQRGen free QR code generator.',
    url: 'https://fastqrcodegen.online/disclaimer',
  },
};

export default function DisclaimerPage() {
  return (
    <MainLayout>
      <DisclaimerSection />
    </MainLayout>
  );
}
