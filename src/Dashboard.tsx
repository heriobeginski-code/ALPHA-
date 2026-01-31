import React from 'react';
import DailyTaskCard from './DailyTaskCard';
import CategoryCard from './CategoryCard';
import SubscriptionLauncher from './SubscriptionLauncher';
import { Shield, Activity, CreditCard, BookOpen } from 'lucide-react';

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
        className="tron-card tron-halo p-6 cursor-pointer flex flex-col justify-between min-h-[200px] border border-grid-border rounded-lg"
      >
        <BookOpen className="text-tron-blue" size={32} />
        <div>
          <h2 className="text-lg font-light tracking-wide uppercase">Initiate Study</h2>
          <p className="text-xs text-slate-400 font-mono">Access RAG Agent & Daily Review</p>
        </div>
      </div>

      {/* Secondary Row: The Spokes */}
      <CategoryCard title="Chores" icon={<Shield size={20} />} items={['Laundry', 'Kitchen', 'Vacuum']} />
      <CategoryCard title="Fitness" icon={<Activity size={20} />} items={['Run 5k', 'Yoga', 'Weights']} />
      <CategoryCard title="Bills" icon={<CreditCard size={20} />} items={['Internet', 'Rent', 'Utilities']} />
      
      <div className="lg:col-span-3">
        <SubscriptionLauncher />
      </div>
    </div>
  );
};

export default Dashboard;