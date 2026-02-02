import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { 
  Globe, 
  FileText, 
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

const STORAGE_KEY = 'chordia-credentials-data-v3';

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

  // Strategy Documents
  const [strategyDocs, setStrategyDocs] = useState([
    { id: 'plan', name: 'Marketing Plan', location: '', lastUpdated: '', status: 'pending' },
    { id: 'brand', name: 'Brand Guidelines', location: '', lastUpdated: '', status: 'pending' },
    { id: 'content', name: 'Content Strategy', location: '', lastUpdated: '', status: 'pending' },
    { id: 'social', name: 'Social Media Strategy', location: '', lastUpdated: '', status: 'pending' },
    { id: 'seo', name: 'SEO Strategy', location: '', lastUpdated: '', status: 'pending' },
    { id: 'paid', name: 'Paid Advertising Strategy', location: '', lastUpdated: '', status: 'pending' },
    { id: 'research', name: 'Market Research', location: '', lastUpdated: '', status: 'pending' },
    { id: 'budget', name: 'Marketing Budget', location: '', lastUpdated: '', status: 'pending' },
  ]);

  // Additional Notes
  const [additionalNotes, setAdditionalNotes] = useState('');

  // Load data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (data.credentials) setCredentials(data.credentials);
        if (data.propertyPortals) setPropertyPortals(data.propertyPortals);
        if (data.agencies) setAgencies(data.agencies);
        if (data.strategyDocs) setStrategyDocs(data.strategyDocs);
        if (data.additionalNotes) setAdditionalNotes(data.additionalNotes);
      } catch (e) {
        console.error('Failed to load saved data');
      }
    }
  }, []);

  // Save data
  const handleSave = () => {
    const data = { credentials, propertyPortals, agencies, strategyDocs, additionalNotes };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    toast.success('Data saved successfully!');
  };

  // Export data
  const handleExport = () => {
    const data = { credentials, propertyPortals, agencies, strategyDocs, additionalNotes, exportDate: new Date().toISOString() };
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

  // Update strategy doc
  const updateStrategyDoc = (id: string, field: string, value: string) => {
    setStrategyDocs(prev => prev.map(item => item.id === id ? { ...item, [field]: value } : item));
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
    const filledDocs = strategyDocs.filter(d => d.location.trim() !== '').length;
    
    const total = credentials.length + propertyPortals.length + agencies.length + strategyDocs.length;
    const filled = filledCreds + filledPortals + filledAgencies + filledDocs;
    
    return Math.round((filled / total) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-100 rounded-lg">
                <Lock className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Chordia Marketing Credentials</h1>
                <p className="text-sm text-slate-500">Internal Document - Restricted Access</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right mr-4">
                <div className="text-sm text-slate-500">Completion</div>
                <div className="text-lg font-bold text-amber-600">{calculateCompletion()}%</div>
              </div>
              <Button variant="outline" onClick={handleExport} className="gap-2">
                <Download className="w-4 h-4" />
                Export
              </Button>
              <Button onClick={handleSave} className="gap-2 bg-amber-600 hover:bg-amber-700">
                <Save className="w-4 h-4" />
                Save
              </Button>
            </div>
          </div>
          <Progress value={calculateCompletion()} className="mt-3 h-2" />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="credentials" className="space-y-6">
          <TabsList className="grid w-full max-w-3xl grid-cols-4 bg-white">
            <TabsTrigger value="credentials" className="gap-2">
              <Globe className="w-4 h-4" />
              Credentials
            </TabsTrigger>
            <TabsTrigger value="portals" className="gap-2">
              <Home className="w-4 h-4" />
              Property Portals
            </TabsTrigger>
            <TabsTrigger value="agencies" className="gap-2">
              <Building2 className="w-4 h-4" />
              Agencies
            </TabsTrigger>
            <TabsTrigger value="strategy" className="gap-2">
              <FileText className="w-4 h-4" />
              Strategy
            </TabsTrigger>
          </TabsList>

          {/* Credentials Tab */}
          <TabsContent value="credentials">
            <div className="space-y-4">
              {credentials.map((cred) => (
                <Card key={cred.id} className="bg-white">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base font-semibold text-slate-800">
                      {cred.platform}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Login URL</label>
                        <Input
                          type="url"
                          placeholder="https://..."
                          value={cred.url}
                          onChange={(e) => updateCredential(cred.id, 'url', e.target.value)}
                          className="bg-slate-50"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Username / Email</label>
                        <Input
                          type="text"
                          placeholder="Username or email"
                          value={cred.username}
                          onChange={(e) => updateCredential(cred.id, 'username', e.target.value)}
                          className="bg-slate-50"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Password</label>
                        <div className="relative">
                          <Input
                            type={showPasswords[cred.id] ? 'text' : 'password'}
                            placeholder="••••••••"
                            value={cred.password}
                            onChange={(e) => updateCredential(cred.id, 'password', e.target.value)}
                            className="bg-slate-50 pr-10"
                          />
                          <button
                            type="button"
                            onClick={() => togglePassword(cred.id)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                          >
                            {showPasswords[cred.id] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Notes</label>
                        <Input
                          type="text"
                          placeholder="Additional info..."
                          value={cred.notes}
                          onChange={(e) => updateCredential(cred.id, 'notes', e.target.value)}
                          className="bg-slate-50"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Property Portals Tab - NEW SEPARATE SECTION */}
          <TabsContent value="portals">
            <div className="space-y-6">
              {propertyPortals.map((portal) => (
                <Card key={portal.id} className="bg-white">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg font-semibold text-slate-800">
                      <Home className="w-5 h-5 text-amber-600" />
                      {portal.portal}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Dashboard URL</label>
                        <Input
                          type="url"
                          placeholder="https://..."
                          value={portal.dashboardUrl}
                          onChange={(e) => updatePropertyPortal(portal.id, 'dashboardUrl', e.target.value)}
                          className="bg-slate-50"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Username / Email</label>
                        <Input
                          type="text"
                          placeholder="Username or email"
                          value={portal.username}
                          onChange={(e) => updatePropertyPortal(portal.id, 'username', e.target.value)}
                          className="bg-slate-50"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Password</label>
                        <div className="relative">
                          <Input
                            type={showPasswords[`portal-${portal.id}`] ? 'text' : 'password'}
                            placeholder="••••••••"
                            value={portal.password}
                            onChange={(e) => updatePropertyPortal(portal.id, 'password', e.target.value)}
                            className="bg-slate-50 pr-10"
                          />
                          <button
                            type="button"
                            onClick={() => togglePassword(`portal-${portal.id}`)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                          >
                            {showPasswords[`portal-${portal.id}`] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4 mt-4">
                      <p className="text-sm font-medium text-slate-600 mb-3">Account Manager Details</p>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="space-y-1">
                          <label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Account Manager Name</label>
                          <Input
                            type="text"
                            placeholder="Name"
                            value={portal.accountManager}
                            onChange={(e) => updatePropertyPortal(portal.id, 'accountManager', e.target.value)}
                            className="bg-slate-50"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Manager Phone</label>
                          <Input
                            type="tel"
                            placeholder="+91 XXXXX XXXXX"
                            value={portal.managerPhone}
                            onChange={(e) => updatePropertyPortal(portal.id, 'managerPhone', e.target.value)}
                            className="bg-slate-50"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Manager Email</label>
                          <Input
                            type="email"
                            placeholder="email@portal.com"
                            value={portal.managerEmail}
                            onChange={(e) => updatePropertyPortal(portal.id, 'managerEmail', e.target.value)}
                            className="bg-slate-50"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Monthly Spend</label>
                          <Input
                            type="text"
                            placeholder="₹ Amount"
                            value={portal.monthlySpend}
                            onChange={(e) => updatePropertyPortal(portal.id, 'monthlySpend', e.target.value)}
                            className="bg-slate-50"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 space-y-1">
                      <label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Notes</label>
                      <Input
                        type="text"
                        placeholder="Package details, listing count, special arrangements..."
                        value={portal.notes}
                        onChange={(e) => updatePropertyPortal(portal.id, 'notes', e.target.value)}
                        className="bg-slate-50"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Agencies Tab - With Agency Name and URL */}
          <TabsContent value="agencies">
            <div className="space-y-6">
              {agencies.map((agency) => (
                <Card key={agency.id}>
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <Building2 className="w-5 h-5 text-amber-600 mt-1" />
                      <div className="flex-1">
                        <p className="text-sm text-slate-500 mb-2">{agency.service}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Agency Name</label>
                            <Input
                              type="text"
                              placeholder="Enter agency name"
                              value={agency.agencyName}
                              onChange={(e) => updateAgency(agency.id, 'agencyName', e.target.value)}
                              className="bg-slate-50 font-semibold"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Agency Website</label>
                            <Input
                              type="url"
                              placeholder="https://..."
                              value={agency.agencyUrl}
                              onChange={(e) => updateAgency(agency.id, 'agencyUrl', e.target.value)}
                              className="bg-slate-50"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Contact Person</label>
                        <Input
                          placeholder="Name"
                          value={agency.contactPerson}
                          onChange={(e) => updateAgency(agency.id, 'contactPerson', e.target.value)}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Email</label>
                        <Input
                          type="email"
                          placeholder="email@agency.com"
                          value={agency.email}
                          onChange={(e) => updateAgency(agency.id, 'email', e.target.value)}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Phone</label>
                        <Input
                          placeholder="+91 XXXXX XXXXX"
                          value={agency.phone}
                          onChange={(e) => updateAgency(agency.id, 'phone', e.target.value)}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Contract Start</label>
                        <Input
                          type="date"
                          value={agency.contractStart}
                          onChange={(e) => updateAgency(agency.id, 'contractStart', e.target.value)}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Contract End</label>
                        <Input
                          type="date"
                          value={agency.contractEnd}
                          onChange={(e) => updateAgency(agency.id, 'contractEnd', e.target.value)}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Monthly Fee</label>
                        <Input
                          placeholder="₹ Amount"
                          value={agency.monthlyFee}
                          onChange={(e) => updateAgency(agency.id, 'monthlyFee', e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="mt-4 space-y-1">
                      <label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Notes / SOW Details</label>
                      <Textarea
                        placeholder="Contract details, scope of work, SLAs..."
                        value={agency.notes}
                        onChange={(e) => updateAgency(agency.id, 'notes', e.target.value)}
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Strategy Tab */}
          <TabsContent value="strategy">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-amber-600" />
                  Strategy Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Document</TableHead>
                      <TableHead>Location / Link</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {strategyDocs.map((doc) => (
                      <TableRow key={doc.id}>
                        <TableCell className="font-medium">{doc.name}</TableCell>
                        <TableCell>
                          <Input
                            placeholder="Drive link / folder path"
                            value={doc.location}
                            onChange={(e) => updateStrategyDoc(doc.id, 'location', e.target.value)}
                            className="max-w-xs"
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            type="date"
                            value={doc.lastUpdated}
                            onChange={(e) => updateStrategyDoc(doc.id, 'lastUpdated', e.target.value)}
                            className="max-w-[150px]"
                          />
                        </TableCell>
                        <TableCell>
                          <select
                            value={doc.status}
                            onChange={(e) => updateStrategyDoc(doc.id, 'status', e.target.value)}
                            className="px-2 py-1 border rounded text-sm"
                          >
                            <option value="pending">Pending</option>
                            <option value="received">Received</option>
                            <option value="na">N/A</option>
                          </select>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Additional Notes */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Additional Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Any other important information, pending items, upcoming deadlines..."
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  rows={6}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between text-sm text-slate-500">
            <div>Internal Document - Chordia Real Estate Marketing Handover</div>
            <div>Access restricted to authorized personnel only</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChordiaCredentials;
