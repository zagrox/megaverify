import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import type { NavItem } from '../types';
import { NAVIGATION_ITEMS, LogoIcon } from '../constants';

const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m6 9 6 6 6-6"/></svg>
);

const Sidebar: React.FC = () => {
    const location = useLocation();
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        'حساب کاربری': true,
    });
    
    const toggleSection = (sectionName: string) => {
        setOpenSections(prev => ({ ...prev, [sectionName]: !prev[sectionName] }));
    };

    const groupedItems = NAVIGATION_ITEMS.reduce((acc, item) => {
        const section = item.section || 'main';
        if (!acc[section]) {
            acc[section] = [];
        }
        acc[section].push(item);
        return acc;
    }, {} as Record<string, NavItem[]>);

    const isLinkActive = (item: NavItem) => {
        if (item.href === '/dashboard') {
            return location.pathname === '/dashboard';
        }
        return location.pathname.startsWith(item.href);
    };

    return (
        <aside className="w-64 flex-shrink-0 bg-white border-l border-slate-200 flex flex-col h-screen sticky top-0">
            <div className="h-16 flex items-center px-6 border-b border-slate-200">
                 <div className="flex items-center gap-2">
                    <LogoIcon />
                    <span className="font-bold text-xl text-slate-800">MegaVerify</span>
                </div>
            </div>

            <div className="flex items-center justify-between p-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        Z
                    </div>
                    <div>
                        <p className="font-semibold text-sm text-right">آژانس ZAGROX</p>
                        <p className="text-xs text-slate-500 text-right">مالک</p>
                    </div>
                </div>
                <button className="text-slate-400 hover:text-slate-600">
                    <ChevronDownIcon className="w-5 h-5" />
                </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-4">
                <ul className="text-right">
                    {groupedItems['main']?.map(item => {
                        const active = isLinkActive(item);
                        return (
                            <li key={item.name}>
                                <NavLink to={item.href} className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-md ${active ? 'bg-teal-50 text-teal-600' : 'text-slate-600 hover:bg-slate-100'}`}>
                                    <item.icon className={`w-5 h-5 ${active ? 'text-teal-600' : 'text-slate-500'}`} />
                                    <span>{item.name}</span>
                                </NavLink>
                            </li>
                        );
                    })}
                    
                    {Object.entries(groupedItems).filter(([section]) => section !== 'main').map(([section, items]) => (
                        <div key={section} className="mt-6">
                            <h3 className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">{section}</h3>
                             <ul className="mt-2 space-y-1">
                                {items.map(item => {
                                    const active = isLinkActive(item);
                                    return (
                                        <li key={item.name}>
                                            <NavLink to={item.href} className={`flex items-center justify-between gap-3 px-3 py-2.5 text-sm font-medium rounded-md w-full ${active ? 'bg-teal-50 text-teal-600' : 'text-slate-600 hover:bg-slate-100'}`}>
                                                <div className="flex items-center gap-3">
                                                        <item.icon className={`w-5 h-5 ${active ? 'text-teal-600' : 'text-slate-500'}`} />
                                                        <span>{item.name}</span>
                                                        {item.beta && <span className="text-xs font-bold text-teal-500 bg-teal-100 px-2 py-0.5 rounded-full">بتا</span>}
                                                </div>
                                                {item.children && (
                                                    <button onClick={(e) => { e.preventDefault(); toggleSection(item.name); }}>
                                                        <ChevronDownIcon className={`w-4 h-4 transition-transform ${openSections[item.name] ? 'rotate-180' : ''}`} />
                                                    </button>
                                                )}
                                            </NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;