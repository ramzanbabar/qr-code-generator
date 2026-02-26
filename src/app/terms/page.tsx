import { Metadata } from 'next';
import TermsSection from '@/components/sections/terms-section';
import MainLayout from '@/components/main-layout';

export const metadata: Metadata = {
  title: 'Terms of Service - Free QR Code Generator',
  description: 'Read our Terms of Service for FastQRGen free QR code generator. Understand the terms and conditions for using our QR code generation service.',
  openGraph: {
    title: 'Terms of Service | FastQRGen - Free QR Code Generator',
    description: 'Terms of Service for FastQRGen free QR code generator.',
    url: 'https://fastqrcodegen.online/terms',
  },
};

export default function TermsPage() {
  return (
    <MainLayout>
      <TermsSection />
    </MainLayout>
  );
}
