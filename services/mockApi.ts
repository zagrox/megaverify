import type { CreditUsageData, DashboardStats } from '../types';

export const fetchDashboardStats = (): Promise<DashboardStats> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        totalRequests: '۹۷۵٬۶۷۰',
        subStats: [
          { name: 'گروهی', value: '۹۷۴٬۲۹۵' },
          { name: 'API', value: '۱٬۱۸۵' },
          { name: 'تکی', value: '۱۰' },
          { name: 'غنی‌سازی', value: '۱۸۰' },
          { name: 'Clean+', value: '۰' },
          { name: 'DeliveryKit', value: '۰' },
        ],
      });
    }, 500);
  });
};

export const fetchCreditUsageData = (): Promise<CreditUsageData[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const data = [
        { name: '24 Jul. 25', uv: 4000 },
        { name: '25 Jul. 25', uv: 3000 },
        { name: '26 Jul. 25', uv: 2000 },
        { name: '27 Jul. 25', uv: 2780 },
        { name: '28 Jul. 25', uv: 1890 },
        { name: '29 Jul. 25', uv: 2390 },
        { name: '30 Jul. 25', uv: 3490 },
      ];
      // Reverse data for RTL chart display
      resolve([...data].reverse());
    }, 500);
  });
};