import React from 'react';
import { useAuth } from '../App';

const LogOutIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
);


const AdminDashboardPage: React.FC = () => {
    const { logout } = useAuth();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h1 className="text-3xl font-bold text-slate-800">داشبورد ادمین</h1>
                <p className="mt-4 text-slate-600">
                    خوش آمدید، مدیر. در اینجا می‌توانید کاربران، تراکنش‌ها و تنظیمات برنامه را مدیریت کنید.
                </p>
                <div className="mt-8 space-y-4 text-right">
                    <div className="p-4 bg-slate-50 rounded-md border border-slate-200">
                        <h2 className="font-semibold">مدیریت کاربران</h2>
                        <p className="text-sm text-slate-500">مشاهده و مدیریت تمام حساب‌های کاربری.</p>
                    </div>
                     <div className="p-4 bg-slate-50 rounded-md border border-slate-200">
                        <h2 className="font-semibold">مدیریت کلید API</h2>
                        <p className="text-sm text-slate-500">کنترل کلیدهای اصلی API برای سرویس‌ها.</p>
                    </div>
                     <div className="p-4 bg-slate-50 rounded-md border border-slate-200">
                        <h2 className="font-semibold">گزارش تراکنش‌ها</h2>
                        <p className="text-sm text-slate-500">نظارت بر تمام خریدهای اعتبار و استفاده.</p>
                    </div>
                </div>
                <button 
                    onClick={logout} 
                    className="mt-8 inline-flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
                >
                    <LogOutIcon className="w-5 h-5 transform -scale-x-100"/>
                    خروج
                </button>
            </div>
        </div>
    );
};

export default AdminDashboardPage;