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
  Home
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
  contractStart: string;
  contractEnd: string;
  monthlyFee: string;
  notes: string;
}

const STORAGE_KEY = 'chordia-credentials-data-v4';

const ChordiaCredentials = () => {
  const [showPasswords, setShowPasswords] = useState<Record<string, boolean>>({});

  // Platform Credentials - Digital Marketing Assets
  const [credentials, setCredentials] = useState<PlatformCredential[]>([
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
  ]);

  // Property Portals - Separate Section
  const [propertyPortals, setPropertyPortals] = useState<PropertyPortal[]>([
    { id: 'magicbricks', portal: 'Magicbricks', dashboardUrl: 'https://www.magicbricks.com', username: '', password: '', accountManager: '', managerPhone: '', managerEmail: '', monthlySpend: '', notes: '' },
    { id: 'homeonline', portal: 'Homeonline', dashboardUrl: 'https://www.homeonline.com', username: '', password: '', accountManager: '', managerPhone: '', managerEmail: '', monthlySpend: '', notes: '' },
    { id: '99acres', portal: '99acres', dashboardUrl: 'https://www.99acres.com', username: '', password: '', accountManager: '', managerPhone: '', managerEmail: '', monthlySpend: '', notes: '' },
    { id: 'housing', portal: 'Housing.com', dashboardUrl: 'https://www.housing.com', username: '', password: '', accountManager: '', managerPhone: '', managerEmail: '', monthlySpend: '', notes: '' },
    { id: 'nobroker', portal: 'NoBroker', dashboardUrl: 'https://www.nobroker.in', username: '', password: '', accountManager: '', managerPhone: '', managerEmail: '', monthlySpend: '', notes: '' },
    { id: 'squareyards', portal: 'Square Yards', dashboardUrl: 'https://www.squareyards.com', username: '', password: '', accountManager: '', managerPhone: '', managerEmail: '', monthlySpend: '', notes: '' },
  ]);

  // Agency Data - With editable name and URL
  const [agencies, setAgencies] = useState<AgencyData[]>([
    { id: 'web', agencyName: '', agencyUrl: '', service: 'Website Development & Maintenance', contactPerson: '', email: '', phone: '', contractStart: '', contractEnd: '', monthlyFee: '', notes: '' },
    { id: 'smm', agencyName: '', agencyUrl: '', service: 'SMM, Creative & Video Production', contactPerson: '', email: '', phone: '', contractStart: '', contractEnd: '', monthlyFee: '', notes: '' },
    { id: 'seo', agencyName: '', agencyUrl: '', service: 'SEO & Content Marketing', contactPerson: '', email: '', phone: '', contractStart: '', contractEnd: '', monthlyFee: '', notes: '' },
    { id: 'vennet', agencyName: 'Vennet Media', agencyUrl: '', service: 'WhatsApp & RCS Messaging', contactPerson: '', email: '', phone: '', contractStart: '', contractEnd: '', monthlyFee: '', notes: '' },
    { id: 'ppc', agencyName: '', agencyUrl: '', service: 'PPC / Performance Marketing', contactPerson: '', email: '', phone: '', contractStart: '', contractEnd: '', monthlyFee: '', notes: '' },
  ]);

  // Load data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (data.credentials) setCredentials(data.credentials);
        if (data.propertyPortals) setPropertyPortals(data.propertyPortals);
        if (data.agencies) setAgencies(data.agencies);
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
          {/* Mobile: Stack vertically, Desktop: Side by side */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            {/* Logo and Title */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="p-1.5 sm:p-2 bg-amber-100 rounded-lg flex-shrink-0">
                <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
              </div>
              <div className="min-w-0">
                <h1 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 truncate">Chordia Marketing Credentials</h1>
                <p className="text-xs sm:text-sm text-slate-500 hidden sm:block">Internal Document - Restricted Access</p>
              </div>
            </div>
            
            {/* Actions - Responsive */}
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

      {/* Main Content - Fully Responsive */}
      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        <Tabs defaultValue="credentials" className="space-y-4 sm:space-y-6">
          {/* Tabs - Responsive */}
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

          {/* Credentials Tab - Responsive */}
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

          {/* Property Portals Tab - Responsive */}
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
                    {/* Login Details */}
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
                    
                    {/* Account Manager Details */}
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

                    {/* Notes */}
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

          {/* Agencies Tab - Responsive */}
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
                    {/* Contact Details */}
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
                    {/* Notes */}
                    <div className="mt-3 sm:mt-4 space-y-1">
                      <label className="text-[10px] sm:text-xs font-medium text-slate-500 uppercase tracking-wide">Notes / SOW Details</label>
                      <Textarea
                        placeholder="Contract details, scope of work, SLAs..."
                        value={agency.notes}
                        onChange={(e) => updateAgency(agency.id, 'notes', e.target.value)}
                        rows={2}
                        className="text-sm resize-none sm:resize-y"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer - Responsive */}
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
