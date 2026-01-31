import React from 'react';
import DailyTaskCard from './DailyTaskCard';
import CategoryCard from './CategoryCard';
import SubscriptionLauncher from './SubscriptionLauncher';
import { Shield, Briefcase, Users, BookOpen } from 'lucide-react';

// RINZLER V6.0 Data Integration
const taskBank = {
  chores: ["Deep Clean House", "Inventory/Restock", "House Tidy", "Pets – Daily"],
  work: ["Instagram – Light", "AI Course – Theory", "Outreach", "Email Wipe"],
  clients: ["Video Client A", "Video Client B", "App Dev Sync"]
};

interface DashboardProps {
  toggleFocus: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ toggleFocus }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {/* Primary Row: The Master List */}
      <div className="lg:col-span-2">
        <DailyTaskCard />
      </div>

      {/* Sidebar: Study Mode Launcher */}
      <div 
        onClick={toggleFocus}
        className="tron-card tron-halo p-6 cursor-pointer flex flex-col justify-between min-h-[200px] border border-grid-border rounded-lg bg-white"
      >
        <BookOpen className="text-tron-blue" size={32} />
        <div>
          <h2 className="text-lg font-light tracking-wide uppercase">Initiate Study</h2>
          <p className="text-xs text-slate-400 font-mono">Access Education Portals</p>
        </div>
      </div>

      {/* The Armory (Static Templates) */}
      <CategoryCard title="Chores" icon={<Shield size={20} />} items={taskBank.chores} />
      <CategoryCard title="Work" icon={<Briefcase size={20} />} items={taskBank.work} />
      <CategoryCard title="Clients" icon={<Users size={20} />} items={taskBank.clients} />
      
      {/* 38-Tool Grid */}
      <div className="lg:col-span-3">
        <SubscriptionLauncher />
      </div>
    </div>
  );
};

export default Dashboard;