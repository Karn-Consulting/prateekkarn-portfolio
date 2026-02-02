import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Globe, 
  Building2, 
  Lock,
  Save,
  Download,
  Eye,
  EyeOff,
  Home,
  MessageCircle,
  ExternalLink
} from "lucide-react";
import { toast } from "sonner";

// This page is intentionally not linked from navigation - access only via direct URL
// Route: /Chordia/Credentials

interface PlatformCredential {
  id: string;
  platform: string;
  url: string;
  username: string;
  password: string;
  notes: string;
}

interface PropertyPortal {
  id: string;
  portal: string;
  dashboardUrl: string;
  username: string;
  password: string;
  accountManager: string;
  managerPhone: string;
  managerEmail: string;
  monthlySpend: string;
  notes: string;
}

interface AgencyData {
  id: string;
  agencyName: string;
  agencyUrl: string;
  service: string;
  contactPerson: string;
  email: string;
  phone: string;
  whatsappGroup: string;
  workPortfolioUrl: string;
  contractStart: string;
  contractEnd: string;
  monthlyFee: string;
  notes: string;
}

const STORAGE_KEY = 'chordia-credentials-data-v6';

// Default agency data with pre-filled SOW from proposals
const DEFAULT_AGENCIES: AgencyData[] = [
  { 
    id: 'web', 
    agencyName: 'Parken Solution Pvt. Ltd.', 
    agencyUrl: 'https://www.par-ken.com', 
    service: 'Website Development & Maintenance', 
    contactPerson: 'Prashant Singh', 
    email: 'prashant@par-ken.com', 
    phone: '+91 78913-78915', 
    whatsappGroup: '',
    workPortfolioUrl: 'https://parkensolution.com/chordias',
    contractStart: '', 
    contractEnd: '', 
    monthlyFee: '', 
    notes: `SOW: Website Development (PHP Laravel Framework)

Key Deliverables:
• Modern UI/UX Design aligned with Chordia Group brand
• Responsive Web Design (Mobile, Tablet & Desktop)
• Complete Web Stack Setup (Front-end + Back-end)
• Robust CMS with Admin Dashboard
• Admin control: Projects, Galleries, Inquiry Management, Blog/News, User Management
• SEO-ready architecture
• Speed-optimized, secure and scalable
• Server Setup, Deployment & Testing
• 1 Year Free Maintenance

Phase-1 Features:
• Property pages with Google Maps, gallery, Contact Form + WhatsApp
• User login system
• Schema markup, Core Web Vitals ready
• Admin Panel with SEO controls
• Analytics tracking (GA, Meta Pixel)

Pages: Home, Property Listing, Property Details, About Us, Contact Us, T&C, Privacy, Cookies, FAQs

Tech Stack: React/Next.js (Frontend), Laravel/Node.js (Backend), MySQL/PostgreSQL, AWS S3

Timeline: 45-60 Days | Design mock-up within 1 week` 
  },
  { 
    id: 'smm', 
    agencyName: 'TechTail Inc.', 
    agencyUrl: 'https://techtail.in', 
    service: 'SMM, Creative & Video Production', 
    contactPerson: 'Ayush Sharma', 
    email: 'ayush@techtail.in', 
    phone: '+91-7821058873', 
    whatsappGroup: '', 
    workPortfolioUrl: '', 
    contractStart: '', 
    contractEnd: '', 
    monthlyFee: '₹67,500/month + taxes', 
    notes: `SOW: Digital Marketing Services (Chordia Group)

Lead Generation & Visibility:
• Tailored PPC campaigns, Sponsored Ads, I-Target AI Tool
• Facebook/Instagram Carousel Ads and Video Ads
• Google Ads (Display, Search, In-App placements)

Google & Meta Ad Management:
• Setup, management, optimization of paid campaigns

Social Media Management (FB, Instagram, LinkedIn):
• Showcase projects, before-and-after transformations
• Carousel ads, video ads, sponsored posts
• Instagram Stories and Reels
• Prompt response to comments and messages
• Effective hashtag strategies

Monthly Deliverables:
• 15-20 creative assets (stories, posts, carousels)
• 8-10 short videos + 2 detailed videos
• 20 creative posts (10 per project)
• 6-8 insightful blogs
• 1 drone shoot, 1 video/photo shoot, 1 model/influencer shoot

Additional Services:
• Project Landing Page creation/optimization
• Google My Business Management
• Real-Time Lead Management
• Influencer & Model Collaboration (fees separate)

Offline Branding (Additional):
• Banner/Flex/Pole Kiosk/Standee: ₹1,000
• Pamphlet: ₹500
• Mini Brochure: ₹5,000
• Brochure: ₹10,000

Notes:
• Package covers 2 projects; additional projects charged separately
• Ad spend NOT included (billed separately)
• Influencer/Model fees covered separately by client` 
  },
  { 
    id: 'seo', 
    agencyName: 'SEO Appoint', 
    agencyUrl: '', 
    service: 'SEO & Content Marketing', 
    contactPerson: 'Mukesh Prajapati', 
    email: 'seoappoint@gmail.com', 
    phone: '+91-9785009245', 
    whatsappGroup: '', 
    workPortfolioUrl: '', 
    contractStart: '', 
    contractEnd: '', 
    monthlyFee: '₹25,000/month', 
    notes: `SOW: Search Engine Optimization (chordiasgroup.com)
Proposal Date: November 22, 2025

Services & Approach:
• 360-degree Website Auditing
• Indexing and Crawling optimization
• Mobile Optimization and AMP
• On-page SEO (structure, content, speed)
• Off-page SEO (social media, link building, local SEO)
• Competitive Analysis
• Monthly reporting on current SEO status

Pricing:
• SEO + Link Building: ₹25,000/month
• Graphics (Poster & Banner): Depends on size
• Content Writing: ₹1-2 per word

Tools Used: SEMrush, Ahrefs

Payment Terms:
• All payments charged in advance
• 30 days termination notice required` 
  },
  { 
    id: 'vennet', 
    agencyName: 'Venets Media Pvt. Ltd.', 
    agencyUrl: '', 
    service: 'WhatsApp & RCS Messaging', 
    contactPerson: '', 
    email: 'accounts@venetsmedia.com', 
    phone: '80100085100, 9313425050', 
    whatsappGroup: '', 
    workPortfolioUrl: '', 
    contractStart: '', 
    contractEnd: '', 
    monthlyFee: '', 
    notes: `SOW: WhatsApp & RCS Messaging Services
Invoice: VMPL/25-26/PR-51 (10/12/2025)
GST: 07AAFCV9730NIZO

Message Rates:
┌─────────────────────────────┬──────────┬─────────────────┬───────────┐
│ Service                     │ Quantity │ Rate/Message    │ Amount    │
├─────────────────────────────┼──────────┼─────────────────┼───────────┤
│ Business WhatsApp Marketing │ 60,000   │ ₹0.075 (7.5p)   │ ₹45,000   │
│ Business WhatsApp Utility   │ 40,000   │ ₹0.020 (2p)     │ ₹8,000    │
│ RCS SMS                     │ 100,000  │ ₹0.015 (1.5p)   │ ₹15,000   │
└─────────────────────────────┴──────────┴─────────────────┴───────────┘

Total: ₹68,000 + GST (18%) = ₹80,240

Bank Details:
• Bank: ICICI Bank LTD
• Account: Venets Media Pvt. Ltd.
• A/C No: 007105007487
• Branch: Green Park New Delhi - 110016
• IFSC: ICIC0000071

Address: R-45 Faraz Complex, Ramesh Park Delhi-110092` 
  },
  { 
    id: 'leadgen', 
    agencyName: '', 
    agencyUrl: '', 
    service: 'Lead Generation (Property Portals)', 
    contactPerson: '', 
    email: '', 
    phone: '', 
    whatsappGroup: '', 
    workPortfolioUrl: '', 
    contractStart: '', 
    contractEnd: '', 
    monthlyFee: '', 
    notes: 'Magicbricks, Homeonline, 99acres - See Property Portals tab for details' 
  },
];

const DEFAULT_CREDENTIALS: PlatformCredential[] = [
  { id: 'cms', platform: 'Website CMS (WordPress/Other)', url: '', username: '', password: '', notes: '' },
  { id: 'hosting', platform: 'Website Hosting (cPanel)', url: '', username: '', password: '', notes: '' },
  { id: 'domain', platform: 'Domain Registrar', url: '', username: '', password: '', notes: '' },
  { id: 'ga', platform: 'Google Analytics', url: 'https://analytics.google.com', username: '', password: '', notes: '' },
  { id: 'gsc', platform: 'Google Search Console', url: 'https://search.google.com/search-console', username: '', password: '', notes: '' },
  { id: 'gads', platform: 'Google Ads', url: 'https://ads.google.com', username: '', password: '', notes: '' },
  { id: 'fbm', platform: 'Facebook Business Manager', url: 'https://business.facebook.com', username: '', password: '', notes: '' },
  { id: 'meta', platform: 'Meta Ads Manager', url: 'https://adsmanager.facebook.com', username: '', password: '', notes: '' },
  { id: 'instagram', platform: 'Instagram Business', url: 'https://instagram.com', username: '', password: '', notes: '' },
  { id: 'linkedin', platform: 'LinkedIn Company Page', url: '', username: '', password: '', notes: '' },
  { id: 'twitter', platform: 'Twitter/X', url: 'https://x.com', username: '', password: '', notes: '' },
  { id: 'youtube', platform: 'YouTube Channel', url: '', username: '', password: '', notes: '' },
  { id: 'gmb', platform: 'Google Business Profile', url: 'https://business.google.com', username: '', password: '', notes: '' },
  { id: 'email', platform: 'Email Marketing (MailChimp/ActiveCampaign)', url: '', username: '', password: '', notes: '' },
  { id: 'crm', platform: 'CRM System', url: '', username: '', password: '', notes: '' },
  { id: 'smm', platform: 'Social Media Management Tool', url: '', username: '', password: '', notes: '' },
  { id: 'whatsapp', platform: 'WhatsApp Business API', url: '', username: '', password: '', notes: '' },
];

const DEFAULT_PORTALS: PropertyPortal[] = [
  { id: 'magicbricks', portal: 'Magicbricks', dashboardUrl: 'https://www.magicbricks.com', username: '', password: '', accountManager: '', managerPhone: '', managerEmail: '', monthlySpend: '', notes: '' },
  { id: 'homeonline', portal: 'Homeonline', dashboardUrl: 'https://www.homeonline.com', username: '', password: '', accountManager: '', managerPhone: '', managerEmail: '', monthlySpend: '', notes: '' },
  { id: '99acres', portal: '99acres', dashboardUrl: 'https://www.99acres.com', username: '', password: '', accountManager: '', managerPhone: '', managerEmail: '', monthlySpend: '', notes: '' },
  { id: 'housing', portal: 'Housing.com', dashboardUrl: 'https://www.housing.com', username: '', password: '', accountManager: '', managerPhone: '', managerEmail: '', monthlySpend: '', notes: '' },
  { id: 'nobroker', portal: 'NoBroker', dashboardUrl: 'https://www.nobroker.in', username: '', password: '', accountManager: '', managerPhone: '', managerEmail: '', monthlySpend: '', notes: '' },
  { id: 'squareyards', portal: 'Square Yards', dashboardUrl: 'https://www.squareyards.com', username: '', password: '', accountManager: '', managerPhone: '', managerEmail: '', monthlySpend: '', notes: '' },
];

// Smart merge function - preserves user data, only fills empty fields with defaults
function mergeWithDefaults<T extends { id: string }>(saved: T[] | undefined, defaults: T[]): T[] {
  if (!saved || saved.length === 0) return defaults;
  
  return defaults.map(defaultItem => {
    const savedItem = saved.find(s => s.id === defaultItem.id);
    if (!savedItem) return defaultItem;
    
    // Merge: keep saved values, but fill empty fields with defaults
    const merged = { ...defaultItem };
    for (const key of Object.keys(savedItem) as (keyof T)[]) {
      const savedValue = savedItem[key];
      if (savedValue !== undefined && savedValue !== null && savedValue !== '') {
        (merged as any)[key] = savedValue;
      }
    }
    return merged;
  });
}

const ChordiaCredentials = () => {
  const [showPasswords, setShowPasswords] = useState<Record<string, boolean>>({});
  const [credentials, setCredentials] = useState<PlatformCredential[]>(DEFAULT_CREDENTIALS);
  const [propertyPortals, setPropertyPortals] = useState<PropertyPortal[]>(DEFAULT_PORTALS);
  const [agencies, setAgencies] = useState<AgencyData[]>(DEFAULT_AGENCIES);

  // Load data from localStorage with smart merge
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setCredentials(mergeWithDefaults(data.credentials, DEFAULT_CREDENTIALS));
        setPropertyPortals(mergeWithDefaults(data.propertyPortals, DEFAULT_PORTALS));
        setAgencies(mergeWithDefaults(data.agencies, DEFAULT_AGENCIES));
      } catch (e) {
        console.error('Failed to load saved data');
      }
    }
  }, []);

  // Save data
  const handleSave = () => {
    const data = { credentials, propertyPortals, agencies };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    toast.success('Data saved successfully!');
  };

  // Export data
  const handleExport = () => {
    const data = { credentials, propertyPortals, agencies, exportDate: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chordia-credentials-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success('Data exported!');
  };

  // Update credential
  const updateCredential = (id: string, field: keyof PlatformCredential, value: string) => {
    setCredentials(prev => prev.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  // Update property portal
  const updatePropertyPortal = (id: string, field: keyof PropertyPortal, value: string) => {
    setPropertyPortals(prev => prev.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  // Update agency
  const updateAgency = (id: string, field: keyof AgencyData, value: string) => {
    setAgencies(prev => prev.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  // Toggle password visibility
  const togglePassword = (id: string) => {
    setShowPasswords(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Calculate completion
  const calculateCompletion = () => {
    const filledCreds = credentials.filter(c => c.username.trim() !== '' || c.url.trim() !== '').length;
    const filledPortals = propertyPortals.filter(p => p.username.trim() !== '' || p.dashboardUrl.trim() !== '').length;
    const filledAgencies = agencies.filter(a => a.agencyName.trim() !== '' || a.contactPerson.trim() !== '').length;
    
    const total = credentials.length + propertyPortals.length + agencies.length;
    const filled = filledCreds + filledPortals + filledAgencies;
    
    return Math.round((filled / total) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header - Fully Responsive */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="p-1.5 sm:p-2 bg-amber-100 rounded-lg flex-shrink-0">
                <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
              </div>
              <div className="min-w-0">
                <h1 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 truncate">Chordia Marketing Credentials</h1>
                <p className="text-xs sm:text-sm text-slate-500 hidden sm:block">Internal Document - Restricted Access</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3">
              <div className="text-left sm:text-right">
                <div className="text-xs sm:text-sm text-slate-500">Completion</div>
                <div className="text-base sm:text-lg font-bold text-amber-600">{calculateCompletion()}%</div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={handleExport} size="sm" className="gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3">
                  <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline">Export</span>
                </Button>
                <Button onClick={handleSave} size="sm" className="gap-1 sm:gap-2 bg-amber-600 hover:bg-amber-700 text-xs sm:text-sm px-2 sm:px-3">
                  <Save className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline">Save</span>
                </Button>
              </div>
            </div>
          </div>
          <Progress value={calculateCompletion()} className="mt-3 h-1.5 sm:h-2" />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        <Tabs defaultValue="credentials" className="space-y-4 sm:space-y-6">
          <TabsList className="w-full grid grid-cols-3 bg-white h-auto p-1">
            <TabsTrigger value="credentials" className="gap-1 sm:gap-2 text-xs sm:text-sm py-2 sm:py-2.5 px-1 sm:px-3">
              <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Credentials</span>
              <span className="sm:hidden">Creds</span>
            </TabsTrigger>
            <TabsTrigger value="portals" className="gap-1 sm:gap-2 text-xs sm:text-sm py-2 sm:py-2.5 px-1 sm:px-3">
              <Home className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Property Portals</span>
              <span className="sm:hidden">Portals</span>
            </TabsTrigger>
            <TabsTrigger value="agencies" className="gap-1 sm:gap-2 text-xs sm:text-sm py-2 sm:py-2.5 px-1 sm:px-3">
              <Building2 className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Agencies</span>
              <span className="sm:hidden">Agency</span>
            </TabsTrigger>
          </TabsList>

          {/* Credentials Tab */}
          <TabsContent value="credentials">
            <div className="space-y-3 sm:space-y-4">
              {credentials.map((cred) => (
                <Card key={cred.id} className="bg-white">
                  <CardHeader className="pb-2 sm:pb-3 px-3 sm:px-6 pt-3 sm:pt-6">
                    <CardTitle className="text-sm sm:text-base font-semibold text-slate-800">
                      {cred.platform}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-3 sm:px-6 pb-3 sm:pb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] sm:text-xs font-medium text-slate-500 uppercase tracking-wide">Login URL</label>
                        <Input
                          type="url"
                          placeholder="https://..."
                          value={cred.url}
                          onChange={(e) => updateCredential(cred.id, 'url', e.target.value)}
                          className="bg-slate-50 text-sm h-9 sm:h-10"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] sm:text-xs font-medium text-slate-500 uppercase tracking-wide">Username / Email</label>
                        <Input
                          type="text"
                          placeholder="Username or email"
                          value={cred.username}
                          onChange={(e) => updateCredential(cred.id, 'username', e.target.value)}
                          className="bg-slate-50 text-sm h-9 sm:h-10"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] sm:text-xs font-medium text-slate-500 uppercase tracking-wide">Password</label>
                        <div className="relative">
                          <Input
                            type={showPasswords[cred.id] ? 'text' : 'password'}
                            placeholder="••••••••"
                            value={cred.password}
                            onChange={(e) => updateCredential(cred.id, 'password', e.target.value)}
                            className="bg-slate-50 pr-10 text-sm h-9 sm:h-10"
                          />
                          <button
                            type="button"
                            onClick={() => togglePassword(cred.id)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                          >
                            {showPasswords[cred.id] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] sm:text-xs font-medium text-slate-500 uppercase tracking-wide">Notes</label>
                        <Input
                          type="text"
                          placeholder="Additional info..."
                          value={cred.notes}
                          onChange={(e) => updateCredential(cred.id, 'notes', e.target.value)}
                          className="bg-slate-50 text-sm h-9 sm:h-10"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Property Portals Tab */}
          <TabsContent value="portals">
            <div className="space-y-4 sm:space-y-6">
              {propertyPortals.map((portal) => (
                <Card key={portal.id} className="bg-white">
                  <CardHeader className="pb-2 sm:pb-3 px-3 sm:px-6 pt-3 sm:pt-6">
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg font-semibold text-slate-800">
                      <Home className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 flex-shrink-0" />
                      {portal.portal}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-3 sm:px-6 pb-3 sm:pb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4">
                      <div className="space-y-1">
                        <label className="text-[10px] sm:text-xs font-medium text-slate-500 uppercase tracking-wide">Dashboard URL</label>
                        <Input
                          type="url"
                          placeholder="https://..."
                          value={portal.dashboardUrl}
                          onChange={(e) => updatePropertyPortal(portal.id, 'dashboardUrl', e.target.value)}
                          className="bg-slate-50 text-sm h-9 sm:h-10"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] sm:text-xs font-medium text-slate-500 uppercase tracking-wide">Username / Email</label>
                        <Input
                          type="text"
                          placeholder="Username or email"
                          value={portal.username}
                          onChange={(e) => updatePropertyPortal(portal.id, 'username', e.target.value)}
                          className="bg-slate-50 text-sm h-9 sm:h-10"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] sm:text-xs font-medium text-slate-500 uppercase tracking-wide">Password</label>
                        <div className="relative">
                          <Input
                            type={showPasswords[`portal-${portal.id}`] ? 'text' : 'password'}
                            placeholder="••••••••"
                            value={portal.password}
                            onChange={(e) => updatePropertyPortal(portal.id, 'password', e.target.value)}
                            className="bg-slate-50 pr-10 text-sm h-9 sm:h-10"
                          />
                          <button
                            type="button"
                            onClick={() => togglePassword(`portal-${portal.id}`)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                          >
                            {showPasswords[`portal-${portal.id}`] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t pt-3 sm:pt-4 mt-3 sm:mt-4">
                      <p className="text-xs sm:text-sm font-medium text-slate-600 mb-2 sm:mb-3">Account Manager Details</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] sm:text-xs font-medium text-slate-500 uppercase tracking-wide">Manager Name</label>
                          <Input
                            type="text"
                            placeholder="Name"
                            value={portal.accountManager}
                            onChange={(e) => updatePropertyPortal(portal.id, 'accountManager', e.target.value)}
                            className="bg-slate-50 text-sm h-9 sm:h-10"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] sm:text-xs font-medium text-slate-500 uppercase tracking-wide">Manager Phone</label>
                          <Input
                            type="tel"
                            placeholder="+91 XXXXX XXXXX"
                            value={portal.managerPhone}
                            onChange={(e) => updatePropertyPortal(portal.id, 'managerPhone', e.target.value)}
                            className="bg-slate-50 text-sm h-9 sm:h-10"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] sm:text-xs font-medium text-slate-500 uppercase tracking-wide">Manager Email</label>
                          <Input
                            type="email"
                            placeholder="email@portal.com"
                            value={portal.managerEmail}
                            onChange={(e) => updatePropertyPortal(portal.id, 'managerEmail', e.target.value)}
                            className="bg-slate-50 text-sm h-9 sm:h-10"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] sm:text-xs font-medium text-slate-500 uppercase tracking-wide">Monthly Spend</label>
                          <Input
                            type="text"
                            placeholder="₹ Amount"
                            value={portal.monthlySpend}
                            onChange={(e) => updatePropertyPortal(portal.id, 'monthlySpend', e.target.value)}
                            className="bg-slate-50 text-sm h-9 sm:h-10"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 sm:mt-4 space-y-1">
                      <label className="text-[10px] sm:text-xs font-medium text-slate-500 uppercase tracking-wide">Notes</label>
                      <Input
                        type="text"
                        placeholder="Package details, listing count, special arrangements..."
                        value={portal.notes}
                        onChange={(e) => updatePropertyPortal(portal.id, 'notes', e.target.value)}
                        className="bg-slate-50 text-sm h-9 sm:h-10"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Agencies Tab */}
          <TabsContent value="agencies">
            <div className="space-y-4 sm:space-y-6">
              {agencies.map((agency) => (
                <Card key={agency.id} className="bg-white">
                  <CardHeader className="px-3 sm:px-6 pt-3 sm:pt-6 pb-2 sm:pb-3">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm text-slate-500 mb-2">{agency.service}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                          <div className="space-y-1">
                            <label className="text-[10px] sm:text-xs font-medium text-slate-500 uppercase tracking-wide">Agency Name</label>
                            <Input
                              type="text"
                              placeholder="Enter agency name"
                              value={agency.agencyName}
                              onChange={(e) => updateAgency(agency.id, 'agencyName', e.target.value)}
                              className="bg-slate-50 font-semibold text-sm h-9 sm:h-10"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] sm:text-xs font-medium text-slate-500 uppercase tracking-wide">Agency Website</label>
                            <Input
                              type="url"
                              placeholder="https://..."
                              value={agency.agencyUrl}
                              onChange={(e) => updateAgency(agency.id, 'agencyUrl', e.target.value)}
                              className="bg-slate-50 text-sm h-9 sm:h-10"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="px-3 sm:px-6 pb-3 sm:pb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] sm:text-xs font-medium text-slate-500 uppercase tracking-wide">Contact Person</label>
                        <Input
                          placeholder="Name"
                          value={agency.contactPerson}
                          onChange={(e) => updateAgency(agency.id, 'contactPerson', e.target.value)}
                          className="text-sm h-9 sm:h-10"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] sm:text-xs font-medium text-slate-500 uppercase tracking-wide">Email</label>
                        <Input
                          type="email"
                          placeholder="email@agency.com"
                          value={agency.email}
                          onChange={(e) => updateAgency(agency.id, 'email', e.target.value)}
                          className="text-sm h-9 sm:h-10"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] sm:text-xs font-medium text-slate-500 uppercase tracking-wide">Phone</label>
                        <Input
                          placeholder="+91 XXXXX XXXXX"
                          value={agency.phone}
                          onChange={(e) => updateAgency(agency.id, 'phone', e.target.value)}
                          className="text-sm h-9 sm:h-10"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t">
                      <div className="space-y-1">
                        <label className="text-[10px] sm:text-xs font-medium text-slate-500 uppercase tracking-wide flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          WhatsApp Group Link
                        </label>
                        <Input
                          type="url"
                          placeholder="https://chat.whatsapp.com/..."
                          value={agency.whatsappGroup}
                          onChange={(e) => updateAgency(agency.id, 'whatsappGroup', e.target.value)}
                          className="bg-green-50 text-sm h-9 sm:h-10"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] sm:text-xs font-medium text-slate-500 uppercase tracking-wide flex items-center gap-1">
                          <ExternalLink className="w-3 h-3" />
                          Work Portfolio / Samples URL
                        </label>
                        <Input
                          type="url"
                          placeholder="https://agency.com/our-work"
                          value={agency.workPortfolioUrl}
                          onChange={(e) => updateAgency(agency.id, 'workPortfolioUrl', e.target.value)}
                          className="bg-blue-50 text-sm h-9 sm:h-10"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-3 sm:mt-4">
                      <div className="space-y-1">
                        <label className="text-[10px] sm:text-xs font-medium text-slate-500 uppercase tracking-wide">Contract Start</label>
                        <Input
                          type="date"
                          value={agency.contractStart}
                          onChange={(e) => updateAgency(agency.id, 'contractStart', e.target.value)}
                          className="text-sm h-9 sm:h-10"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] sm:text-xs font-medium text-slate-500 uppercase tracking-wide">Contract End</label>
                        <Input
                          type="date"
                          value={agency.contractEnd}
                          onChange={(e) => updateAgency(agency.id, 'contractEnd', e.target.value)}
                          className="text-sm h-9 sm:h-10"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] sm:text-xs font-medium text-slate-500 uppercase tracking-wide">Monthly Fee</label>
                        <Input
                          placeholder="₹ Amount"
                          value={agency.monthlyFee}
                          onChange={(e) => updateAgency(agency.id, 'monthlyFee', e.target.value)}
                          className="text-sm h-9 sm:h-10"
                        />
                      </div>
                    </div>

                    <div className="mt-3 sm:mt-4 space-y-1">
                      <label className="text-[10px] sm:text-xs font-medium text-slate-500 uppercase tracking-wide">Notes / SOW Details</label>
                      <Textarea
                        placeholder="Contract details, scope of work, SLAs, deliverables..."
                        value={agency.notes}
                        onChange={(e) => updateAgency(agency.id, 'notes', e.target.value)}
                        rows={agency.notes.length > 200 ? 12 : 4}
                        className="text-sm resize-y font-mono text-xs"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white mt-8 sm:mt-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-slate-500 text-center sm:text-left">
            <div>Internal Document - Chordia Real Estate</div>
            <div>Restricted Access Only</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChordiaCredentials;
