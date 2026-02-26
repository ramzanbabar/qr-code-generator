import { Metadata } from 'next';
import PrivacySection from '@/components/sections/privacy-section';
import MainLayout from '@/components/main-layout';

export const metadata: Metadata = {
  title: 'Privacy Policy - Free QR Code Generator',
  description: 'Read our Privacy Policy for FastQRGen. Learn how we protect your privacy with client-side QR code generation and zero data storage.',
  openGraph: {
    title: 'Privacy Policy | FastQRGen - Free QR Code Generator',
    description: 'Privacy Policy for FastQRGen - your privacy is our priority.',
    url: 'https://fastqrcodegen.online/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <MainLayout>
      <PrivacySection />
    </MainLayout>
  );
}
