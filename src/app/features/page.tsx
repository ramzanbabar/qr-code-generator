import { Metadata } from 'next';
import FeaturesSection from '@/components/sections/features-section';
import MainLayout from '@/components/main-layout';

export const metadata: Metadata = {
  title: 'Features - Custom QR Codes with Logo, Colors & More',
  description: 'Discover all features of FastQRGen: custom colors, logo upload, 6 pattern styles, PNG/SVG download, error correction, and more. 100% free.',
  openGraph: {
    title: 'Features - Custom QR Codes with Logo, Colors & More | FastQRGen',
    description: 'All features of FastQRGen free QR code generator.',
    url: 'https://fastqrcodegen.online/features',
  },
};

export default function FeaturesPage() {
  return (
    <MainLayout>
      <FeaturesSection />
    </MainLayout>
  );
}
