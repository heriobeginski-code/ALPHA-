import React, { useState } from 'react';
import { Calendar, ChevronDown, User } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  setView: (view: 'HUB' | 'FOCUS') => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-grid-border bg-white/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="h-8 w-8 rounded-full border border-tron-blue flex items-center justify-center shadow-halo">
            <User size={18} className="text-tron-blue" />
          </div>
          <h1 className="text-sm font-medium tracking-widest uppercase">Greetings, User</h1>
        </div>

        <button 
          onClick={() => setIsCalendarOpen(!isCalendarOpen)}
          className="flex items-center gap-2 px-4 py-2 rounded-full tron-halo text-xs font-mono uppercase tracking-tighter"
        >
          <Calendar size={14} className="text-tron-blue" />
          The Pulse
          <ChevronDown size={14} className={`transition-transform ${isCalendarOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {isCalendarOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-grid-border p-6 animate-in slide-in-from-top duration-300">
          <div className="flex justify-between max-w-4xl mx-auto">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <div key={day} className="text-center group cursor-pointer">
                <p className="text-[10px] uppercase text-slate-400 mb-2">{day}</p>
                <div className="w-10 h-10 rounded-full border border-grid-border flex items-center justify-center group-hover:border-tron-blue group-hover:shadow-halo transition-all">
                  <span className="text-xs font-mono">—</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;