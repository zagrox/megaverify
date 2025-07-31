import React from 'react';

interface PlaceholderPageProps {
    title: string;
    description: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title, description }) => {
    return (
        <div className="text-right">
            <h1 className="text-3xl font-bold text-slate-800">{title}</h1>
            <p className="mt-2 text-slate-600">{description}</p>
            <div className="mt-8 bg-white p-12 rounded-lg border border-slate-200 text-center flex flex-col items-center">
                 <svg className="w-16 h-16 text-slate-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
                <p className="text-slate-600 font-semibold mt-4 text-lg">این ویژگی به زودی ارائه می‌شود</p>
                <p className="text-sm text-slate-400 mt-1 max-w-md">این بخش در حال ساخت است. ما سخت در تلاشیم تا این ویژگی را برای شما به ارمغان بیاوریم. برای به‌روزرسانی‌ها بعداً دوباره سر بزنید!</p>
            </div>
        </div>
    );
};

export default PlaceholderPage;