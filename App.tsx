
import React, { useState, createContext, useContext } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import DashboardPage from './pages/DashboardPage';
import OverviewPage from './pages/dashboard/OverviewPage';
import BulkValidationPage from './pages/dashboard/BulkValidationPage';
import SingleValidationPage from './pages/dashboard/SingleValidationPage';
import ListMonitoringPage from './pages/dashboard/ListMonitoringPage';
import ApiPage from './pages/dashboard/ApiPage';
import RealTimeWidgetPage from './pages/dashboard/RealTimeWidgetPage';
import LeadFinderPage from './pages/dashboard/LeadFinderPage';
import DataEnrichmentPage from './pages/dashboard/DataEnrichmentPage';
import StatisticsPage from './pages/dashboard/StatisticsPage';
import PlansPage from './pages/dashboard/PlansPage';
import PaymentsPage from './pages/dashboard/PaymentsPage';
import IntegrationsPage from './pages/dashboard/IntegrationsPage';
import AccountOptionsPage from './pages/dashboard/AccountOptionsPage';
import DocsPage from './pages/dashboard/DocsPage';

type AuthContextType = {
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (admin: boolean) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const login = (admin = false) => {
    setIsAuthenticated(true);
    setIsAdmin(admin);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const PrivateRoute: React.FC<{ children: React.ReactNode, adminOnly?: boolean }> = ({ children, adminOnly = false }) => {
    const auth = useAuth();
    const location = useLocation();

    if (!auth.isAuthenticated) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    if (adminOnly && !auth.isAdmin) {
         return <Navigate to="/dashboard" state={{ from: location }} replace />;
    }
    
    if (!adminOnly && auth.isAdmin) {
        return <Navigate to="/admin" state={{ from: location }} replace />;
    }

    return <>{children}</>;
};

function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }>
            <Route index element={<OverviewPage />} />
            <Route path="bulk-validation" element={<BulkValidationPage />} />
            <Route path="single-validation" element={<SingleValidationPage />} />
            <Route path="list-monitoring" element={<ListMonitoringPage />} />
            <Route path="api" element={<ApiPage />} />
            <Route path="real-time-widget" element={<RealTimeWidgetPage />} />
            <Route path="lead-finder" element={<LeadFinderPage />} />
            <Route path="data-enrichment" element={<DataEnrichmentPage />} />
            <Route path="statistics" element={<StatisticsPage />} />
            <Route path="plans" element={<PlansPage />} />
            <Route path="payments" element={<PaymentsPage />} />
            <Route path="integrations" element={<IntegrationsPage />} />
            <Route path="account-options" element={<AccountOptionsPage />} />
            <Route path="docs" element={<DocsPage />} />
          </Route>
          <Route path="/admin" element={
            <PrivateRoute adminOnly={true}>
              <AdminDashboardPage />
            </PrivateRoute>
          } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
}

export default App;
