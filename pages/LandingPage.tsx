import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../App';
import { LogoIcon } from '../constants';

const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="20 6 9 17 4 12"/></svg>
);

const ShieldCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
);

const ZapIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);

const LifeBuoyIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/></svg>
);

const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18" /></svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
);

const landingNavItems = [
    { name: 'ویژگی‌ها', href: '#features' },
    { name: 'روند کار', href: '#how-it-works' },
    { name: 'قیمت‌گذاری', href: '#pricing' },
    { name: 'سوالات متداول', href: '#faq' },
];

const LandingPage: React.FC = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLogin = (isAdmin: boolean) => {
        login(isAdmin);
        navigate(isAdmin ? '/admin' : '/dashboard');
    };

    return (
        <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5 flex items-center gap-3">
                            <LogoIcon />
                            <span className="font-bold text-2xl text-slate-800">MegaVerify</span>
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)}>
                            <span className="sr-only">باز کردن منوی اصلی</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {landingNavItems.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 hover:text-teal-600">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-4">
                        <button onClick={() => handleLogin(true)} className="text-sm font-semibold leading-6 text-slate-700 hover:text-teal-600">ورود ادمین</button>
                        <button onClick={() => handleLogin(false)} className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">داشبورد کاربر <span aria-hidden="true">&larr;</span></button>
                    </div>
                </nav>
                {mobileMenuOpen && (
                    <div className="lg:hidden" role="dialog" aria-modal="true">
                        <div className="fixed inset-0 z-50" />
                        <div className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                 <a href="#" className="-m-1.5 p-1.5 flex items-center gap-3">
                                    <LogoIcon />
                                    <span className="font-bold text-2xl text-slate-800">MegaVerify</span>
                                </a>
                                <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                                    <span className="sr-only">بستن منو</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        {landingNavItems.map((item) => (
                                            <a key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{item.name}</a>
                                        ))}
                                    </div>
                                    <div className="py-6 space-y-4">
                                        <button onClick={() => handleLogin(false)} className="w-full rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">داشبورد کاربر <span aria-hidden="true">&larr;</span></button>
                                        <button onClick={() => handleLogin(true)} className="w-full text-sm font-semibold leading-6 text-slate-700 hover:text-teal-600">ورود ادمین</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            <main>
                {/* Hero Section */}
                <div className="relative isolate pt-14">
                    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#5eead4] to-[#0f766e] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
                    </div>
                    <div className="py-24 sm:py-32 lg:pb-40">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl text-center">
                                <h1 className="text-4xl font-bold text-slate-900 sm:text-6xl">ایمیل‌ها را تأیید کنید، تحویل‌پذیری را افزایش دهید</h1>
                                <p className="mt-6 text-lg leading-8 text-slate-600">پلتفرم قدرتمند و دقیق اعتبارسنجی ایمیل ما، لیست‌های ایمیل شما را پاکسازی می‌کند، نرخ بازگشت را کاهش می‌دهد و از اعتبار فرستنده شما محافظت می‌کند. در چند ثانیه شروع کنید.</p>
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <button onClick={() => handleLogin(false)} className="rounded-md bg-teal-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">شروع رایگان</button>
                                    <a href="#pricing" className="text-base font-semibold leading-7 text-slate-900"> مشاهده قیمت‌ها <span aria-hidden="true">&larr;</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div id="features" className="bg-slate-50 py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:text-center">
                            <h2 className="text-base font-semibold leading-7 text-teal-600">چرا MegaVerify را انتخاب کنید؟</h2>
                            <p className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">ساخته شده برای دقت و سرعت</p>
                        </div>
                        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4 text-right">
                                <div className="flex flex-col items-center text-center">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-600 text-white"><CheckIcon/></div>
                                    <dt className="mt-4 text-lg font-semibold text-slate-900">دقت ۹۹٪</dt>
                                    <dd className="mt-2 text-base text-slate-600">به نتایج ما اطمینان کنید. الگوریتم‌های پیشرفته ما بالاترین دقت را در صنعت تضمین می‌کنند.</dd>
                                </div>
                                 <div className="flex flex-col items-center text-center">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-600 text-white"><ZapIcon/></div>
                                    <dt className="mt-4 text-lg font-semibold text-slate-900">سرعت بی‌نظیر</dt>
                                    <dd className="mt-2 text-base text-slate-600">لیست‌های بزرگ را در چند دقیقه پردازش کنید. زیرساخت قدرتمند ما برای مقیاس‌پذیری ساخته شده است.</dd>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-600 text-white"><ShieldCheckIcon/></div>
                                    <dt className="mt-4 text-lg font-semibold text-slate-900">امنیت داده‌ها</dt>
                                    <dd className="mt-2 text-base text-slate-600">داده‌های شما با رمزگذاری کامل، ایمن و محرمانه باقی می‌مانند. ما هرگز داده‌ها را به اشتراک نمی‌گذاریم.</dd>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-600 text-white"><LifeBuoyIcon/></div>
                                    <dt className="mt-4 text-lg font-semibold text-slate-900">پشتیبانی تخصصی</dt>
                                    <dd className="mt-2 text-base text-slate-600">تیم پشتیبانی ما همیشه آماده است تا به شما در هر مرحله کمک کند.</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>

                {/* How it Works Section */}
                 <div id="how-it-works" className="py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:text-center">
                            <h2 className="text-base font-semibold leading-7 text-teal-600">روند کار چگونه است؟</h2>
                            <p className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">اعتبارسنجی ایمیل در ۳ مرحله ساده</p>
                        </div>
                        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
                           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-right">
                               <div className="flex flex-col items-center text-center">
                                   <div className="text-5xl font-bold text-teal-200">۱</div>
                                   <h3 className="mt-2 text-xl font-semibold text-slate-900">بارگذاری لیست</h3>
                                   <p className="mt-2 text-slate-600">فایل CSV یا TXT حاوی ایمیل‌های خود را به سادگی بکشید و رها کنید یا از طریق یکپارچه‌سازی‌ها متصل شوید.</p>
                               </div>
                               <div className="flex flex-col items-center text-center">
                                   <div className="text-5xl font-bold text-teal-200">۲</div>
                                   <h3 className="mt-2 text-xl font-semibold text-slate-900">شروع اعتبارسنجی</h3>
                                   <p className="mt-2 text-slate-600">سیستم ما بررسی‌های چند لایه‌ای را انجام می‌دهد، از جمله بررسی سینتکس، دامنه، MX و SMTP.</p>
                               </div>
                               <div className="flex flex-col items-center text-center">
                                   <div className="text-5xl font-bold text-teal-200">۳</div>
                                   <h3 className="mt-2 text-xl font-semibold text-slate-900">دانلود نتایج</h3>
                                   <p className="mt-2 text-slate-600">لیست پاکسازی شده خود را دانلود کنید که به دسته‌های معتبر، نامعتبر و پرخطر تقسیم شده است.</p>
                               </div>
                           </div>
                        </div>
                    </div>
                </div>

                {/* Pricing Section */}
                <div id="pricing" className="bg-slate-50 py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl text-center">
                             <h2 className="text-base font-semibold leading-7 text-teal-600">قیمت‌گذاری</h2>
                             <p className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">قیمت‌گذاری ساده و مبتنی بر اعتبار</p>
                        </div>
                         <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">فقط برای آنچه استفاده می‌کنید پرداخت کنید. بسته‌های اعتباری ما هرگز منقضی نمی‌شوند. ۱ اعتبار = ۱ اعتبارسنجی ایمیل.</p>
                        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 text-right">
                           
                            {/* Pricing Tier 1 */}
                            <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10">
                                <div>
                                    <h3 className="text-lg font-semibold leading-8 text-gray-900">شروع</h3>
                                    <p className="mt-4 text-sm leading-6 text-gray-600">ایده‌آل برای پروژه‌های کوچک و استفاده گاه به گاه.</p>
                                    <p className="mt-6 flex items-baseline gap-x-1">
                                        <span className="text-4xl font-bold text-gray-900">۲۵ دلار</span>
                                    </p>
                                    <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                                        <li className="flex gap-x-3"><CheckIcon className="h-6 w-5 flex-none text-teal-600" aria-hidden="true"/>۵٬۰۰۰ اعتبار</li>
                                    </ul>
                                </div>
                                <a href="#" className="mt-8 block rounded-md bg-teal-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500">خرید</a>
                            </div>

                             {/* Pricing Tier 2 (Most Popular) */}
                            <div className="relative flex flex-col justify-between rounded-3xl bg-white p-8 ring-2 ring-teal-600 xl:p-10">
                                <div className="absolute top-0 right-0 m-4 text-xs font-semibold bg-teal-600 text-white py-1 px-3 rounded-full">محبوب</div>
                                <div>
                                    <h3 className="text-lg font-semibold leading-8 text-teal-600">حرفه‌ای</h3>
                                    <p className="mt-4 text-sm leading-6 text-gray-600">ایده‌آل برای کسب‌وکارهای در حال رشد و کمپین‌های منظم.</p>
                                    <p className="mt-6 flex items-baseline gap-x-1">
                                        <span className="text-4xl font-bold text-gray-900">۱۰۰ دلار</span>
                                    </p>
                                    <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                                        <li className="flex gap-x-3"><CheckIcon className="h-6 w-5 flex-none text-teal-600" aria-hidden="true"/>۵۰٬۰۰۰ اعتبار</li>
                                    </ul>
                                </div>
                                <a href="#" className="mt-8 block rounded-md bg-teal-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500">خرید</a>
                            </div>

                            {/* Pricing Tier 3 */}
                            <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10">
                                <div>
                                    <h3 className="text-lg font-semibold leading-8 text-gray-900">سازمانی</h3>
                                    <p className="mt-4 text-sm leading-6 text-gray-600">برای فرستندگان با حجم بالا و آژانس‌ها.</p>
                                    <p className="mt-6 flex items-baseline gap-x-1">
                                        <span className="text-4xl font-bold text-gray-900">۵۰۰ دلار</span>
                                    </p>
                                    <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                                        <li className="flex gap-x-3"><CheckIcon className="h-6 w-5 flex-none text-teal-600" aria-hidden="true"/>۱٬۰۰۰٬۰۰۰ اعتبار</li>
                                    </ul>
                                </div>
                                <a href="#" className="mt-8 block rounded-md bg-teal-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500">خرید</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* FAQ Section */}
                <div id="faq" className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                     <div className="mx-auto max-w-4xl text-center">
                        <h2 className="text-base font-semibold leading-7 text-teal-600">سوالات متداول</h2>
                        <p className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">پاسخ سوالات شما</p>
                    </div>
                    <div className="mt-16 max-w-3xl mx-auto space-y-6 text-right">
                        <div>
                            <h3 className="font-semibold text-lg">چرا باید لیست ایمیل خود را اعتبارسنجی کنم؟</h3>
                            <p className="mt-2 text-slate-600">اعتبارسنجی ایمیل نرخ بازگشت را کاهش می‌دهد، تحویل‌پذیری را بهبود می‌بخشد و از اعتبار فرستنده شما محافظت می‌کند که برای موفقیت کمپین‌های بازاریابی ایمیلی حیاتی است.</p>
                        </div>
                         <div>
                            <h3 className="font-semibold text-lg">اعتبارهای من منقضی می‌شوند؟</h3>
                            <p className="mt-2 text-slate-600">خیر، اعتبارهای خریداری شده هرگز منقضی نمی‌شوند. از آنها در هر زمانی که نیاز دارید استفاده کنید.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">چه نوع ایمیل‌هایی شناسایی می‌شوند؟</h3>
                            <p className="mt-2 text-slate-600">سیستم ما ایمیل‌های نامعتبر، یکبار مصرف، مبتنی بر نقش (مانند info@)، catch-all و ایمیل‌های هرزنامه را شناسایی می‌کند.</p>
                        </div>
                    </div>
                </div>

            </main>

            <footer className="bg-slate-900">
                <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 lg:px-8">
                     <p className="text-center text-xs leading-5 text-gray-400">&copy; ۲۰۲۴ MegaVerify Inc. تمام حقوق محفوظ است.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;