"use client";

import { User, Lock, Bell, CreditCard, Globe, HelpCircle, Gavel, ChevronRight, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();

  return (
    <div className="max-w-[1280px] mx-auto w-full relative bg-[var(--background)] min-h-screen">
      {/* App Bar */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 sticky top-[64px] md:top-0 bg-[var(--background)]/80 backdrop-blur-md z-40 flex items-center">
        <button 
          onClick={() => router.back()}
          className="p-2 -ml-2 rounded-xl hover:bg-black/5 transition-default mr-auto"
        >
          <ArrowLeft className="w-6 h-6 text-[var(--text-primary)]" />
        </button>
        <h1 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] absolute left-1/2 -translate-x-1/2">
          Settings
        </h1>
        <div className="w-10 ml-auto" />
      </div>

      <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto space-y-6">
        <SettingsSection title="Account Settings" icon={User} items={[
          { title: 'Personal Information' },
          { title: 'Password' },
          { title: 'Security' },
        ]} />

        <SettingsSection title="Privacy Settings" icon={Lock} items={[
          { title: 'Visibility Controls' },
          { title: 'Blocked Users' },
        ]} />

        <SettingsSection title="Notification Settings" icon={Bell} items={[
          { title: 'Push', hasSwitch: true, initialValue: true },
          { title: 'Email', hasSwitch: true, initialValue: false },
          { title: 'SMS', hasSwitch: true, initialValue: false },
        ]} />

        <SettingsSection title="Payment Settings" icon={CreditCard} items={[
          { title: 'Bank Accounts' },
          { title: 'Cards' },
          { title: 'Wallet Preferences' },
        ]} />

        <SettingsSection title="Language Settings" icon={Globe} items={[
          { title: 'Multi-language Support', subtitle: 'English' },
        ]} />

        <SettingsSection title="Help & Support" icon={HelpCircle} items={[
          { title: 'FAQs' },
          { title: 'Contact Support' },
        ]} />

        <SettingsSection title="Legal" icon={Gavel} items={[
          { title: 'Privacy Policy' },
          { title: 'Terms & Conditions' },
          { title: 'Logout', isDestructive: true, onClick: () => router.push('/login') },
        ]} />
        
        <div className="h-10" />
      </div>
    </div>
  );
}

function SettingsSection({ title, icon: Icon, items }: { title: string, icon: any, items: any[] }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[var(--border-light)] overflow-hidden">
      <div className="px-5 py-4 flex items-center gap-3">
        <Icon className="w-5 h-5 text-[var(--primary)]" />
        <h2 className="text-base font-bold text-[var(--primary)]">{title}</h2>
      </div>
      <div className="flex flex-col">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div 
              className="px-5 py-3 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={item.onClick}
            >
              <div className="flex flex-col">
                <span className={`text-[15px] font-medium ${item.isDestructive ? 'text-red-500' : 'text-[var(--text-primary)]'}`}>
                  {item.title}
                </span>
                {item.subtitle && (
                  <span className="text-sm text-[var(--text-secondary)]">{item.subtitle}</span>
                )}
              </div>
              {item.hasSwitch ? (
                <div className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors ${item.initialValue ? 'bg-[var(--primary)]' : 'bg-gray-300'}`}>
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${item.initialValue ? 'translate-x-4' : 'translate-x-0'}`} />
                </div>
              ) : (
                <ChevronRight className="w-5 h-5 text-[var(--text-secondary)]/50" />
              )}
            </div>
            {index < items.length - 1 && (
              <div className="h-px bg-[var(--border-light)] ml-5 mr-5" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
