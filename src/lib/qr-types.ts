// QR Code Generator Types

export type QRDataType = 'url' | 'text' | 'phone' | 'email' | 'whatsapp' | 'wifi' | 'sms';

export interface QRDataBase {
  type: QRDataType;
}

export interface QRUrlData extends QRDataBase {
  type: 'url';
  url: string;
}

export interface QRTextData extends QRDataBase {
  type: 'text';
  text: string;
}

export interface QRPhoneData extends QRDataBase {
  type: 'phone';
  phone: string;
}

export interface QREmailData extends QRDataBase {
  type: 'email';
  email: string;
  subject: string;
  body: string;
}

export interface QRWhatsappData extends QRDataBase {
  type: 'whatsapp';
  phone: string;
  message: string;
}

export interface QRWifiData extends QRDataBase {
  type: 'wifi';
  ssid: string;
  password: string;
  encryption: 'WPA' | 'WEP' | 'nopass' | 'WPA3';
  hidden: boolean;
}

export interface QRSmsData extends QRDataBase {
  type: 'sms';
  phone: string;
  message: string;
}

export type QRData = QRUrlData | QRTextData | QRPhoneData | QREmailData | QRWhatsappData | QRWifiData | QRSmsData;

export interface QRStyleConfig {
  dotsColor: string;
  cornersColor: string;
  cornersDotsColor: string;
  backgroundColor: string;
  size: number;
  dotsType: 'dots' | 'rounded' | 'classy' | 'classy-rounded' | 'square' | 'extra-rounded';
  cornersType: 'dot' | 'square' | 'extra-rounded';
  cornersDotsType: 'dot' | 'square' | 'extra-rounded';
  errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H';
  margin: number;
}

export interface QRLogoConfig {
  image: string | null;
  margin: number;
  size: number;
  backgroundColor?: string;
  borderRadius: number;
}

export interface QRConfig {
  data: QRData;
  style: QRStyleConfig;
  logo: QRLogoConfig;
}

export const defaultStyleConfig: QRStyleConfig = {
  dotsColor: '#000000',
  cornersColor: '#000000',
  cornersDotsColor: '#000000',
  backgroundColor: '#FFFFFF',
  size: 300,
  dotsType: 'rounded',
  cornersType: 'extra-rounded',
  cornersDotsType: 'dot',
  errorCorrectionLevel: 'M',
  margin: 10,
};

export const defaultLogoConfig: QRLogoConfig = {
  image: null,
  margin: 5,
  size: 0.25,
  borderRadius: 0,
};

export const defaultQRConfig: QRConfig = {
  data: { type: 'url', url: 'https://example.com' },
  style: defaultStyleConfig,
  logo: defaultLogoConfig,
};

// Helper function to generate QR data string
export function generateQRDataString(data: QRData): string {
  switch (data.type) {
    case 'url':
      return data.url || 'https://example.com';
    case 'text':
      return data.text || 'Hello World';
    case 'phone':
      return data.phone ? `tel:${data.phone}` : 'tel:+1234567890';
    case 'email':
      const emailParts = [];
      if (data.subject) emailParts.push(`subject=${encodeURIComponent(data.subject)}`);
      if (data.body) emailParts.push(`body=${encodeURIComponent(data.body)}`);
      const emailQuery = emailParts.length > 0 ? `?${emailParts.join('&')}` : '';
      return data.email ? `mailto:${data.email}${emailQuery}` : 'mailto:example@email.com';
    case 'whatsapp':
      const phone = data.phone?.replace(/\D/g, '') || '';
      const message = data.message || '';
      return `https://wa.me/${phone}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
    case 'wifi':
      const hidden = data.hidden ? 'H:true;' : '';
      return `WIFI:T:${data.encryption || 'WPA'};S:${data.ssid || 'Network'};P:${data.password || ''};${hidden};`;
    case 'sms':
      const smsPhone = data.phone || '';
      const smsMessage = data.message || '';
      return smsMessage ? `sms:${smsPhone}?body=${encodeURIComponent(smsMessage)}` : `sms:${smsPhone}`;
    default:
      return 'https://example.com';
  }
}

// QR data type labels and icons
export const qrDataTypeInfo: Record<QRDataType, { label: string; description: string; icon: string }> = {
  url: { label: 'Website URL', description: 'Link to any website or webpage', icon: '🌐' },
  text: { label: 'Plain Text', description: 'Display any text message', icon: '📝' },
  phone: { label: 'Phone Number', description: 'Make a phone call', icon: '📞' },
  email: { label: 'Email', description: 'Send an email message', icon: '📧' },
  whatsapp: { label: 'WhatsApp', description: 'Start a WhatsApp chat', icon: '💬' },
  wifi: { label: 'WiFi', description: 'Share WiFi credentials', icon: '📶' },
  sms: { label: 'SMS', description: 'Send a text message', icon: '📱' },
};

// Dots style options
export const dotsStyleOptions: { value: QRStyleConfig['dotsType']; label: string }[] = [
  { value: 'dots', label: 'Dots' },
  { value: 'rounded', label: 'Rounded' },
  { value: 'classy', label: 'Classy' },
  { value: 'classy-rounded', label: 'Classy Rounded' },
  { value: 'square', label: 'Square' },
  { value: 'extra-rounded', label: 'Extra Rounded' },
];

// Corners style options
export const cornersStyleOptions: { value: QRStyleConfig['cornersType']; label: string }[] = [
  { value: 'dot', label: 'Dot' },
  { value: 'square', label: 'Square' },
  { value: 'extra-rounded', label: 'Extra Rounded' },
];

// Error correction levels
export const errorCorrectionOptions: { value: QRStyleConfig['errorCorrectionLevel']; label: string; description: string }[] = [
  { value: 'L', label: 'Low (7%)', description: 'Up to 7% damage tolerance' },
  { value: 'M', label: 'Medium (15%)', description: 'Up to 15% damage tolerance' },
  { value: 'Q', label: 'Quartile (25%)', description: 'Up to 25% damage tolerance' },
  { value: 'H', label: 'High (30%)', description: 'Up to 30% damage tolerance - Recommended for logos' },
];
