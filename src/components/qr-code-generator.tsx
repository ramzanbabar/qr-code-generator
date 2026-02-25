'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Download, 
  Upload, 
  X, 
  Image as ImageIcon, 
  RefreshCw,
  Settings,
  Palette,
  Type,
  Sparkles
} from 'lucide-react';
import {
  type QRConfig,
  type QRData,
  type QRDataType,
  type QRStyleConfig,
  type QRLogoConfig,
  defaultQRConfig,
  defaultStyleConfig,
  defaultLogoConfig,
  generateQRDataString,
  qrDataTypeInfo,
  dotsStyleOptions,
  cornersStyleOptions,
  errorCorrectionOptions,
} from '@/lib/qr-types';
import QRCodeStyling from 'qr-code-styling';

// Dynamically import the QR renderer to avoid SSR issues
const QRCodeRenderer = dynamic(() => import('./qr-code-styling'), { 
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-[300px] h-[300px] bg-muted rounded-lg">
      <RefreshCw className="w-8 h-8 animate-spin text-muted-foreground" />
    </div>
  ),
});

export default function QRCodeGenerator() {
  const [config, setConfig] = useState<QRConfig>(defaultQRConfig);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const qrCodeRef = useRef<QRCodeStyling | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const updateData = useCallback((updates: Partial<QRData>) => {
    setConfig(prev => ({
      ...prev,
      data: { ...prev.data, ...updates } as QRData,
    }));
  }, []);

  const updateStyle = useCallback((updates: Partial<QRStyleConfig>) => {
    setConfig(prev => ({
      ...prev,
      style: { ...prev.style, ...updates },
    }));
  }, []);

  const updateLogo = useCallback((updates: Partial<QRLogoConfig>) => {
    setConfig(prev => ({
      ...prev,
      logo: { ...prev.logo, ...updates },
    }));
  }, []);

  const handleDataTypeChange = useCallback((type: QRDataType) => {
    const newData: QRData = { type } as QRData;
    switch (type) {
      case 'url':
        (newData as any).url = '';
        break;
      case 'text':
        (newData as any).text = '';
        break;
      case 'phone':
        (newData as any).phone = '';
        break;
      case 'email':
        (newData as any).email = '';
        (newData as any).subject = '';
        (newData as any).body = '';
        break;
      case 'whatsapp':
        (newData as any).phone = '';
        (newData as any).message = '';
        break;
      case 'wifi':
        (newData as any).ssid = '';
        (newData as any).password = '';
        (newData as any).encryption = 'WPA';
        (newData as any).hidden = false;
        break;
      case 'sms':
        (newData as any).phone = '';
        (newData as any).message = '';
        break;
    }
    setConfig(prev => ({ ...prev, data: newData }));
  }, []);

  const handleLogoUpload = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setLogoPreview(result);
      updateLogo({ image: result });
      // Set high error correction when adding logo
      updateStyle({ errorCorrectionLevel: 'H' });
    };
    reader.readAsDataURL(file);
  }, [updateLogo, updateStyle]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      handleLogoUpload(file);
    }
  }, [handleLogoUpload]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const removeLogo = useCallback(() => {
    setLogoPreview(null);
    updateLogo({ image: null });
  }, [updateLogo]);

  const handleQRReady = useCallback((qrCode: QRCodeStyling) => {
    qrCodeRef.current = qrCode;
  }, []);

  const downloadQR = useCallback(async (format: 'png' | 'svg') => {
    if (!qrCodeRef.current) return;
    
    const extension = format === 'png' ? 'png' : 'svg';
    const name = `qrcode-${Date.now()}.${extension}`;
    
    if (format === 'png') {
      await qrCodeRef.current.download({
        name: name.replace('.png', ''),
        extension: 'png',
      });
    } else {
      await qrCodeRef.current.download({
        name: name.replace('.svg', ''),
        extension: 'svg',
      });
    }
  }, []);

  const resetToDefaults = useCallback(() => {
    setConfig(defaultQRConfig);
    setLogoPreview(null);
  }, []);

  // Render data input fields based on type
  const renderDataInputs = () => {
    const { data } = config;
    
    switch (data.type) {
      case 'url':
        return (
          <div className="space-y-3">
            <div>
              <Label htmlFor="url" className="text-sm font-medium">Website URL</Label>
              <Input
                id="url"
                type="url"
                placeholder="https://example.com"
                value={data.url || ''}
                onChange={(e) => updateData({ url: e.target.value })}
                className="mt-1.5"
              />
            </div>
          </div>
        );
      case 'text':
        return (
          <div className="space-y-3">
            <div>
              <Label htmlFor="text" className="text-sm font-medium">Text Content</Label>
              <Textarea
                id="text"
                placeholder="Enter your text message here..."
                value={data.text || ''}
                onChange={(e) => updateData({ text: e.target.value })}
                className="mt-1.5 min-h-[100px]"
              />
            </div>
          </div>
        );
      case 'phone':
        return (
          <div className="space-y-3">
            <div>
              <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 234 567 8900"
                value={data.phone || ''}
                onChange={(e) => updateData({ phone: e.target.value })}
                className="mt-1.5"
              />
            </div>
          </div>
        );
      case 'email':
        return (
          <div className="space-y-3">
            <div>
              <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                value={data.email || ''}
                onChange={(e) => updateData({ email: e.target.value })}
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="subject" className="text-sm font-medium">Subject (Optional)</Label>
              <Input
                id="subject"
                type="text"
                placeholder="Email subject"
                value={data.subject || ''}
                onChange={(e) => updateData({ subject: e.target.value })}
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="body" className="text-sm font-medium">Message (Optional)</Label>
              <Textarea
                id="body"
                placeholder="Email body content..."
                value={data.body || ''}
                onChange={(e) => updateData({ body: e.target.value })}
                className="mt-1.5 min-h-[80px]"
              />
            </div>
          </div>
        );
      case 'whatsapp':
        return (
          <div className="space-y-3">
            <div>
              <Label htmlFor="wa-phone" className="text-sm font-medium">Phone Number (with country code)</Label>
              <Input
                id="wa-phone"
                type="tel"
                placeholder="1234567890 (no + sign)"
                value={data.phone || ''}
                onChange={(e) => updateData({ phone: e.target.value })}
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="wa-message" className="text-sm font-medium">Message (Optional)</Label>
              <Textarea
                id="wa-message"
                placeholder="Hello! I'm interested in..."
                value={data.message || ''}
                onChange={(e) => updateData({ message: e.target.value })}
                className="mt-1.5 min-h-[80px]"
              />
            </div>
          </div>
        );
      case 'wifi':
        return (
          <div className="space-y-3">
            <div>
              <Label htmlFor="ssid" className="text-sm font-medium">Network Name (SSID)</Label>
              <Input
                id="ssid"
                type="text"
                placeholder="Your WiFi network name"
                value={data.ssid || ''}
                onChange={(e) => updateData({ ssid: e.target.value })}
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="wifi-password" className="text-sm font-medium">Password</Label>
              <Input
                id="wifi-password"
                type="password"
                placeholder="WiFi password"
                value={data.password || ''}
                onChange={(e) => updateData({ password: e.target.value })}
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="encryption" className="text-sm font-medium">Security Type</Label>
              <Select
                value={data.encryption || 'WPA'}
                onValueChange={(value: 'WPA' | 'WEP' | 'nopass' | 'WPA3') => updateData({ encryption: value })}
              >
                <SelectTrigger className="mt-1.5">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="WPA">WPA/WPA2</SelectItem>
                  <SelectItem value="WPA3">WPA3</SelectItem>
                  <SelectItem value="WEP">WEP</SelectItem>
                  <SelectItem value="nopass">No Password</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2 pt-1">
              <Switch
                id="hidden"
                checked={data.hidden || false}
                onCheckedChange={(checked) => updateData({ hidden: checked })}
              />
              <Label htmlFor="hidden" className="text-sm">Hidden Network</Label>
            </div>
          </div>
        );
      case 'sms':
        return (
          <div className="space-y-3">
            <div>
              <Label htmlFor="sms-phone" className="text-sm font-medium">Phone Number</Label>
              <Input
                id="sms-phone"
                type="tel"
                placeholder="+1 234 567 8900"
                value={data.phone || ''}
                onChange={(e) => updateData({ phone: e.target.value })}
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="sms-message" className="text-sm font-medium">Message</Label>
              <Textarea
                id="sms-message"
                placeholder="Your SMS message..."
                value={data.message || ''}
                onChange={(e) => updateData({ message: e.target.value })}
                className="mt-1.5 min-h-[80px]"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
      {/* Left Panel - Controls */}
      <div className="space-y-6">
        {/* Data Type Selection */}
        <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Type className="w-5 h-5" />
              QR Code Content
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
              {(Object.keys(qrDataTypeInfo) as QRDataType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => handleDataTypeChange(type)}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg border-2 transition-all duration-200 ${
                    config.data.type === type
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border hover:border-primary/50 hover:bg-muted/50'
                  }`}
                >
                  <span className="text-lg">{qrDataTypeInfo[type].icon}</span>
                  <span className="text-xs mt-1 font-medium capitalize hidden sm:block">{type}</span>
                </button>
              ))}
            </div>
            {renderDataInputs()}
          </CardContent>
        </Card>

        {/* Customization Tabs */}
        <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Customization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="colors" className="w-full">
              <TabsList className="grid grid-cols-3 w-full mb-4">
                <TabsTrigger value="colors" className="flex items-center gap-1.5">
                  <Palette className="w-4 h-4" />
                  Colors
                </TabsTrigger>
                <TabsTrigger value="style" className="flex items-center gap-1.5">
                  <Settings className="w-4 h-4" />
                  Style
                </TabsTrigger>
                <TabsTrigger value="logo" className="flex items-center gap-1.5">
                  <ImageIcon className="w-4 h-4" />
                  Logo
                </TabsTrigger>
              </TabsList>

              {/* Colors Tab */}
              <TabsContent value="colors" className="space-y-4 mt-0">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium">QR Code Color</Label>
                    <div className="flex items-center gap-2 mt-1.5">
                      <Input
                        type="color"
                        value={config.style.dotsColor}
                        onChange={(e) => {
                          updateStyle({ 
                            dotsColor: e.target.value,
                            cornersColor: e.target.value,
                            cornersDotsColor: e.target.value,
                          });
                        }}
                        className="w-12 h-10 p-1 cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={config.style.dotsColor}
                        onChange={(e) => updateStyle({ dotsColor: e.target.value })}
                        className="flex-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Background</Label>
                    <div className="flex items-center gap-2 mt-1.5">
                      <Input
                        type="color"
                        value={config.style.backgroundColor}
                        onChange={(e) => updateStyle({ backgroundColor: e.target.value })}
                        className="w-12 h-10 p-1 cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={config.style.backgroundColor}
                        onChange={(e) => updateStyle({ backgroundColor: e.target.value })}
                        className="flex-1"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Style Tab */}
              <TabsContent value="style" className="space-y-4 mt-0">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium">Pattern Style</Label>
                    <Select
                      value={config.style.dotsType}
                      onValueChange={(value: QRStyleConfig['dotsType']) => updateStyle({ dotsType: value })}
                    >
                      <SelectTrigger className="mt-1.5">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {dotsStyleOptions.map(option => (
                          <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Corner Style</Label>
                    <Select
                      value={config.style.cornersType}
                      onValueChange={(value: QRStyleConfig['cornersType']) => updateStyle({ cornersType: value })}
                    >
                      <SelectTrigger className="mt-1.5">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {cornersStyleOptions.map(option => (
                          <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label className="text-sm font-medium">Size: {config.style.size}px</Label>
                  </div>
                  <Slider
                    value={[config.style.size]}
                    onValueChange={([value]) => updateStyle({ size: value })}
                    min={150}
                    max={600}
                    step={10}
                    className="w-full"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label className="text-sm font-medium">Margin: {config.style.margin}px</Label>
                  </div>
                  <Slider
                    value={[config.style.margin]}
                    onValueChange={([value]) => updateStyle({ margin: value })}
                    min={0}
                    max={50}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium">Error Correction Level</Label>
                  <Select
                    value={config.style.errorCorrectionLevel}
                    onValueChange={(value: QRStyleConfig['errorCorrectionLevel']) => updateStyle({ errorCorrectionLevel: value })}
                  >
                    <SelectTrigger className="mt-1.5">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {errorCorrectionOptions.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground mt-1">
                    {errorCorrectionOptions.find(o => o.value === config.style.errorCorrectionLevel)?.description}
                  </p>
                </div>
              </TabsContent>

              {/* Logo Tab */}
              <TabsContent value="logo" className="space-y-4 mt-0">
                {logoPreview ? (
                  <div className="relative inline-block">
                    <img
                      src={logoPreview}
                      alt="Logo preview"
                      className="w-24 h-24 object-contain rounded-lg border"
                    />
                    <button
                      onClick={removeLogo}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center hover:bg-destructive/80 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                      isDragging ? 'border-primary bg-primary/10' : 'border-muted-foreground/30 hover:border-primary/50'
                    }`}
                  >
                    <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Drag & drop an image or click to upload
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      PNG, JPG, SVG (max 5MB)
                    </p>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleLogoUpload(file);
                  }}
                  className="hidden"
                />

                {logoPreview && (
                  <>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label className="text-sm font-medium">Logo Size: {Math.round(config.logo.size * 100)}%</Label>
                      </div>
                      <Slider
                        value={[config.logo.size * 100]}
                        onValueChange={([value]) => updateLogo({ size: value / 100 })}
                        min={10}
                        max={40}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label className="text-sm font-medium">Logo Margin: {config.logo.margin}px</Label>
                      </div>
                      <Slider
                        value={[config.logo.margin]}
                        onValueChange={([value]) => updateLogo({ margin: value })}
                        min={0}
                        max={20}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label className="text-sm font-medium">Border Radius: {config.logo.borderRadius}%</Label>
                      </div>
                      <Slider
                        value={[config.logo.borderRadius]}
                        onValueChange={([value]) => updateLogo({ borderRadius: value })}
                        min={0}
                        max={50}
                        step={1}
                        className="w-full"
                      />
                    </div>
                  </>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

      </div>

      {/* Right Panel - Preview & Download */}
      <div className="lg:sticky lg:top-4 space-y-4 h-fit">
        <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Preview</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="p-4 bg-white rounded-xl shadow-inner border mb-4 overflow-hidden">
              <QRCodeRenderer
                config={config}
                getDataString={generateQRDataString}
                onReady={handleQRReady}
              />
            </div>

            {/* Download Buttons */}
            <div className="flex flex-wrap gap-3 justify-center w-full">
              <Button
                onClick={() => downloadQR('png')}
                className="flex-1 min-w-[140px] gap-2"
                size="lg"
              >
                <Download className="w-4 h-4" />
                Download PNG
              </Button>
              <Button
                onClick={() => downloadQR('svg')}
                variant="secondary"
                className="flex-1 min-w-[140px] gap-2"
                size="lg"
              >
                <Download className="w-4 h-4" />
                Download SVG
              </Button>
            </div>

            {/* Reset Button */}
            <Button
              onClick={resetToDefaults}
              variant="ghost"
              className="mt-3 gap-2"
              size="sm"
            >
              <RefreshCw className="w-4 h-4" />
              Reset to Defaults
            </Button>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-3 bg-card/50 backdrop-blur-sm rounded-lg border">
            <div className="text-2xl font-bold text-primary">7</div>
            <div className="text-xs text-muted-foreground">Content Types</div>
          </div>
          <div className="p-3 bg-card/50 backdrop-blur-sm rounded-lg border">
            <div className="text-2xl font-bold text-primary">6</div>
            <div className="text-xs text-muted-foreground">Pattern Styles</div>
          </div>
          <div className="p-3 bg-card/50 backdrop-blur-sm rounded-lg border">
            <div className="text-2xl font-bold text-primary">∞</div>
            <div className="text-xs text-muted-foreground">Custom Colors</div>
          </div>
        </div>
      </div>
    </div>
  );
}
