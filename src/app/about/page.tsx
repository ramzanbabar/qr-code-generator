import { Metadata } from 'next';
import AboutSection from '@/components/sections/about-section';
import MainLayout from '@/components/main-layout';

export const metadata: Metadata = {
  title: 'About Us - Free QR Code Generator',
  description: 'Learn about FastQRGen - your free online QR code generator. Discover our mission to make QR code generation accessible, private, and free for everyone.',
  openGraph: {
    title: 'About Us | FastQRGen - Free QR Code Generator',
    description: 'Learn about FastQRGen - your free online QR code generator.',
    url: 'https://fastqrcodegen.online/about',
  },
};

export default function AboutPage() {
  return (
    <MainLayout>
      <AboutSection />
    </MainLayout>
  );
}
