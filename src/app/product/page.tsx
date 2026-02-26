import { Metadata } from 'next';
import ProductSection from '@/components/sections/product-section';
import MainLayout from '@/components/main-layout';

export const metadata: Metadata = {
  title: 'Product - Free QR Code Generator Online',
  description: 'Discover FastQRGen - a professional-grade free QR code generator. Create custom QR codes with logos, colors, and multiple patterns. No registration required.',
  openGraph: {
    title: 'Product - Free QR Code Generator | FastQRGen',
    description: 'Professional-grade free QR code generator with advanced features.',
    url: 'https://fastqrcodegen.online/product',
  },
};

export default function ProductPage() {
  return (
    <MainLayout>
      <ProductSection />
    </MainLayout>
  );
}
