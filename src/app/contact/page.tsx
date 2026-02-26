import { Metadata } from 'next';
import ContactSection from '@/components/sections/contact-section';
import MainLayout from '@/components/main-layout';

export const metadata: Metadata = {
  title: 'Contact Us - Free QR Code Generator',
  description: 'Get in touch with FastQRGen team. Contact us for questions, feedback, or support regarding our free QR code generator service.',
  openGraph: {
    title: 'Contact Us | FastQRGen - Free QR Code Generator',
    description: 'Get in touch with FastQRGen team for questions, feedback, or support.',
    url: 'https://fastqrcodegen.online/contact',
  },
};

export default function ContactPage() {
  return (
    <MainLayout>
      <ContactSection />
    </MainLayout>
  );
}
