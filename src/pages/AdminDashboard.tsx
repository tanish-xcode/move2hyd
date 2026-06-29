import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Search, Lock, Users, Calendar, Share2, Phone } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD as string;

interface Lead {
  id: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  created_at: string;
}

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [ambassadorLeads, setAmbassadorLeads] = useState<Lead[]>([]);
  const [filteredAmbassadorLeads, setFilteredAmbassadorLeads] = useState<Lead[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [ambassadorSearch, setAmbassadorSearch] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [loading, setLoading] = useState(false);
  const [ambassadorShares, setAmbassadorShares] = useState(0);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      fetchLeads();
      fetchAmbassadorShares();
    } else {
      toast.error("Incorrect password");
    }
  };

  const fetchAmbassadorShares = async () => {
    const { count, error } = await supabase
      .from("ambassador_shares")
      .select("*", { count: "exact", head: true });
    if (!error && count !== null) setAmbassadorShares(count);
  };

  const fetchLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("move_guide_leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Failed to fetch leads");
      console.error(error);
    } else {
      const all = data || [];
      const planLeads = all.filter((l) => !l.name?.startsWith("ambassador:"));
      const ambLeads = all.filter((l) => l.name?.startsWith("ambassador:"));
      setLeads(planLeads);
      setFilteredLeads(planLeads);
      setAmbassadorLeads(ambLeads);
      setFilteredAmbassadorLeads(ambLeads);
    }
    setLoading(false);
  };

  useEffect(() => {
    let filtered = leads;
    if (searchTerm) {
      filtered = filtered.filter(
        (l) =>
          (l.phone && l.phone.includes(searchTerm)) ||
          (l.email && l.email.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    if (dateFrom) filtered = filtered.filter((l) => new Date(l.created_at) >= new Date(dateFrom));
    if (dateTo) filtered = filtered.filter((l) => new Date(l.created_at) <= new Date(dateTo + "T23:59:59"));
    setFilteredLeads(filtered);
  }, [searchTerm, dateFrom, dateTo, leads]);

  useEffect(() => {
    let filtered = ambassadorLeads;
    if (ambassadorSearch) {
      filtered = filtered.filter((l) => l.phone && l.phone.includes(ambassadorSearch));
    }
    setFilteredAmbassadorLeads(filtered);
  }, [ambassadorSearch, ambassadorLeads]);

  const downloadCSV = (rows: Lead[], filename: string, isAmbassador = false) => {
    const headers = isAmbassador
      ? ["Phone", "Share Method", "Date"]
      : ["Phone", "Email", "Date"];
    const csvContent = [
      headers.join(","),
      ...rows.map((l) =>
        isAmbassador
          ? [
              l.phone || "N/A",
              l.name?.replace("ambassador:", "") || "N/A",
              format(new Date(l.created_at), "yyyy-MM-dd HH:mm:ss"),
            ].join(",")
          : [
              l.phone || "N/A",
              l.email || "N/A",
              format(new Date(l.created_at), "yyyy-MM-dd HH:mm:ss"),
            ].join(",")
      ),
    ].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    toast.success(`Exported ${rows.length} records`);
  };

  const exportToCSV = () =>
    downloadCSV(filteredLeads, `leads_${format(new Date(), "yyyy-MM-dd")}.csv`);

  const exportAmbassadorCSV = () =>
    downloadCSV(
      filteredAmbassadorLeads,
      `ambassador_shares_${format(new Date(), "yyyy-MM-dd")}.csv`,
      true
    );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Admin Access</CardTitle>
            <CardDescription>Enter the admin password to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit" className="w-full">
                Access Dashboard
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage and export your collected leads</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-primary/10 rounded-lg"><Users className="h-5 w-5 text-primary" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">Plan Leads</p>
                  <p className="text-2xl font-bold">{leads.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-purple-500/10 rounded-lg"><Phone className="h-5 w-5 text-purple-500" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">Ambassador Phones</p>
                  <p className="text-2xl font-bold">{ambassadorLeads.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-green-500/10 rounded-lg"><Calendar className="h-5 w-5 text-green-500" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">This Week</p>
                  <p className="text-2xl font-bold">
                    {[...leads, ...ambassadorLeads].filter((l) => {
                      const weekAgo = new Date(); weekAgo.setDate(weekAgo.getDate() - 7);
                      return new Date(l.created_at) >= weekAgo;
                    }).length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-500/10 rounded-lg"><Share2 className="h-5 w-5 text-blue-500" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">Total Shares</p>
                  <p className="text-2xl font-bold">{ambassadorShares}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="plan">
          <TabsList>
            <TabsTrigger value="plan">Plan Your Move Leads ({leads.length})</TabsTrigger>
            <TabsTrigger value="ambassador">Ambassador Shares ({ambassadorLeads.length})</TabsTrigger>
          </TabsList>

          {/* ── Plan Your Move tab ── */}
          <TabsContent value="plan" className="space-y-4 mt-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search phone or email…" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
              </div>
              <Input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} className="w-auto" />
              <Input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} className="w-auto" />
              <Button onClick={exportToCSV} className="gap-2 shrink-0">
                <Download className="h-4 w-4" />Export CSV
              </Button>
            </div>
            <Card>
              <CardContent className="p-0">
                {loading ? (
                  <div className="p-8 text-center text-muted-foreground">Loading…</div>
                ) : filteredLeads.length === 0 ? (
                  <div className="p-8 text-center text-muted-foreground">No leads found</div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Phone</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredLeads.map((l) => (
                          <TableRow key={l.id}>
                            <TableCell className="font-medium">{l.phone || <span className="text-muted-foreground">—</span>}</TableCell>
                            <TableCell>{l.email || <span className="text-muted-foreground">—</span>}</TableCell>
                            <TableCell>{format(new Date(l.created_at), "MMM d, yyyy 'at' h:mm a")}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* ── Ambassador Shares tab ── */}
          <TabsContent value="ambassador" className="space-y-4 mt-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search phone…" value={ambassadorSearch} onChange={(e) => setAmbassadorSearch(e.target.value)} className="pl-10" />
              </div>
              <Button onClick={exportAmbassadorCSV} className="gap-2 shrink-0">
                <Download className="h-4 w-4" />Export CSV
              </Button>
            </div>
            <Card>
              <CardContent className="p-0">
                {loading ? (
                  <div className="p-8 text-center text-muted-foreground">Loading…</div>
                ) : filteredAmbassadorLeads.length === 0 ? (
                  <div className="p-8 text-center text-muted-foreground">No ambassador shares yet</div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Phone</TableHead>
                          <TableHead>Share Method</TableHead>
                          <TableHead>Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredAmbassadorLeads.map((l) => (
                          <TableRow key={l.id}>
                            <TableCell className="font-medium">{l.phone || <span className="text-muted-foreground">—</span>}</TableCell>
                            <TableCell className="capitalize">{l.name?.replace("ambassador:", "") || "—"}</TableCell>
                            <TableCell>{format(new Date(l.created_at), "MMM d, yyyy 'at' h:mm a")}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
