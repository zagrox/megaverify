import React, { useState, useEffect } from 'react';
import CreditUsageChart from '../../components/dashboard/CreditUsageChart';
import type { DashboardStats, CreditUsageData, Stat } from '../../types';
import { fetchDashboardStats, fetchCreditUsageData } from '../../services/mockApi';
import { ChevronLeftIcon } from '../../constants';

// Icon components used in this page
const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
);
const RefreshCwIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>
);
const BarChartIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
);

// Helper component for Stat Items
const StatItem: React.FC<{ stat: Stat }> = ({ stat }) => (
    <div className="flex-1 p-4 text-right">
        <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
        <p className="text-sm text-slate-500">{stat.name}</p>
    </div>
);


const OverviewPage: React.FC = () => {
    const [stats, setStats] = useState<DashboardStats | null>(null);
    const [chartData, setChartData] = useState<CreditUsageData[]>([]);

    useEffect(() => {
        fetchDashboardStats().then(setStats);
        fetchCreditUsageData().then(setChartData);
    }, []);

    return (
        <>
            <p className="text-sm text-slate-500 text-right">داشبورد</p>
            <div className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2 text-right">
                    {/* Main Content Area */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg border border-slate-200">
                            <h2 className="text-lg text-teal-600 font-semibold">مجموع درخواست‌ها</h2>
                            <p className="text-6xl font-bold mt-2 text-slate-800">{stats?.totalRequests || '...'}</p>
                        </div>
                        <div className="bg-white p-2 rounded-lg border border-slate-200 flex flex-wrap">
                            {stats?.subStats.map((stat) => (
                                <div key={stat.name} className="w-1/2 md:w-1/3">
                                  <StatItem stat={stat} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 flex items-center gap-2">
                        <button className="bg-teal-600 text-white px-4 py-2.5 rounded-md font-semibold text-sm flex items-center gap-2 hover:bg-teal-700 transition-colors">
                            <RefreshCwIcon className="w-4 h-4" /> افزودن اعتبار
                        </button>
                        <button className="bg-slate-200 text-slate-700 px-4 py-2.5 rounded-md font-semibold text-sm flex items-center gap-2 hover:bg-slate-300 transition-colors">
                            <BarChartIcon className="w-4 h-4" /> آمار
                        </button>
                        <button className="bg-slate-200 text-slate-700 px-4 py-2.5 rounded-md font-semibold text-sm flex items-center gap-2 hover:bg-slate-300 transition-colors">
                            <BarChartIcon className="w-4 h-4" /> تغییرات موجودی
                        </button>
                    </div>

                    <div className="mt-8 bg-white p-6 rounded-lg border border-slate-200">
                        <div className="flex justify-between items-center">
                            <h2 className="font-bold text-lg">مصرف اعتبار</h2>
                            <div className="flex items-center gap-2 text-sm">
                                <span>نمایش دوره:</span>
                                <select className="bg-slate-100 border border-slate-200 rounded-md p-1.5 text-sm">
                                    <option>۷ روز گذشته</option>
                                    <option>۳۰ روز گذشته</option>
                                </select>
                            </div>
                        </div>
                        <div className="h-64 mt-4">
                            <CreditUsageChart data={chartData} />
                        </div>
                    </div>
                    
                    <div className="mt-8 bg-white p-6 rounded-lg border border-slate-200">
                        <h2 className="font-bold text-lg">اعتبارسنجی‌های گروهی اخیر</h2>
                        <div className="mt-4 overflow-x-auto">
                            <table className="w-full text-sm text-right">
                                <thead className="text-xs text-slate-500 uppercase">
                                    <tr>
                                        <th className="py-3 px-4">نام لیست</th>
                                        <th className="py-3 px-4">تاریخ</th>
                                        <th className="py-3 px-4">وضعیت</th>
                                        <th className="py-3 px-4">حذف خودکار</th>
                                        <th className="py-3 px-4">عملیات</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan={5} className="text-center py-10 text-slate-500">
                                            شما هیچ لیست ایمیل فعالی ندارید.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 space-y-6 text-right">
                    {/* Right Sidebar */}
                    <div className="bg-white p-6 rounded-lg border border-slate-200">
                        <h2 className="font-bold text-lg">اعتبارسنجی سریع</h2>
                        <div className="w-10 h-1 bg-teal-600 rounded-full mt-2"></div>
                        <div className="relative mt-4">
                            <input type="email" placeholder="آدرس ایمیل" className="w-full p-3 ps-4 pe-10 border border-slate-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none" />
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">@</span>
                        </div>
                        <div className="mt-4 flex gap-4">
                            <button className="flex-1 bg-slate-200 text-slate-700 px-4 py-2.5 rounded-md font-semibold text-sm flex items-center justify-center gap-2 hover:bg-slate-300 transition-colors">
                                <PlusIcon className="w-4 h-4" /> بارگذاری لیست
                            </button>
                            <button className="flex-1 bg-teal-600 text-white px-4 py-2.5 rounded-md font-semibold text-sm flex items-center justify-center gap-2 hover:bg-teal-700 transition-colors">
                                 اعتبارسنجی <ChevronLeftIcon className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg border border-slate-200">
                        <div className="flex justify-between items-center">
                            <h2 className="font-bold text-lg">اعضای تیم</h2>
                            <a href="#" className="text-sm text-teal-600 font-semibold hover:underline">مشاهده همه</a>
                        </div>
                        <div className="w-10 h-1 bg-teal-600 rounded-full mt-2"></div>
                        <p className="mt-6 text-center text-slate-500">شما هیچ عضوی در تیم خود ندارید. <a href="#" className="text-teal-600 font-semibold hover:underline">افزودن عضو جدید</a>.</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg border border-slate-200">
                        <h2 className="font-bold text-lg">وظایف امنیتی</h2>
                        <div className="w-10 h-1 bg-teal-600 rounded-full mt-2"></div>
                        <div className="mt-4 space-y-3">
                            <a href="#" className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-md hover:bg-slate-100">
                                <BarChartIcon className="w-5 h-5 text-slate-500"/>
                                <span className="text-sm font-medium text-slate-700">مدیریت 2FA</span>
                            </a>
                             <a href="#" className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-md hover:bg-slate-100">
                                <BarChartIcon className="w-5 h-5 text-slate-500"/>
                                <span className="text-sm font-medium text-slate-700">بررسی دستگاه‌های معتمد</span>
                            </a>
                             <a href="#" className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-md hover:bg-slate-100">
                                <BarChartIcon className="w-5 h-5 text-slate-500"/>
                                <span className="text-sm font-medium text-slate-700">اعلان هنگام ورود</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OverviewPage;