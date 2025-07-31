
export interface NavItem {
  name: string;
  href: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactNode;
  section: string;
  beta?: boolean;
  children?: Omit<NavItem, 'section' | 'children'>[];
}

export interface CreditUsageData {
  name: string;
  uv: number;
}

export interface Stat {
    name: string;
    value: string;
}

export interface DashboardStats {
    totalRequests: string;
    subStats: Stat[];
}
