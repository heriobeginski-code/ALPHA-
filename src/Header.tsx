import React, { useState } from 'react';
import { Calendar, ChevronDown, Zap } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  setView: (view: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

// RINZLER V6.0 Weekly Protocol
const weeklyPlanner = {
    MON: { mission: "Run + Video Client A (Vid 1/1)", length: "1-2 Hours" },
    TUE: { mission: "Gym (Arms/Back/Core) + App Dev", length: "2-3 Hours" },
    WED: { mission: "Run + Video Client B (Vid 1/2)", length: "1-2 Hours" },
    THU: { mission: "Gym (Legs) + App Dev", length: "2-3 Hours" },
    FRI: { mission: "Run + Video Client B (Vid 2/2)", length: "1-2 Hours" },
    SAT: { mission: "Planning & Review + Course Prep", length: "2-4 Hours" },
    SUN: { mission: "Gym (Pilates) + Job/Grant Apps", length: "2 Hours" }
};

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
        <div className="absolute top-16 left-0 w-full bg-white border-b border-grid-border p-6 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 max-w-7xl mx-auto">
            {Object.entries(weeklyPlanner).map(([day, data]) => (
              <div key={day} className="p-3 border border-grid-border rounded hover:border-tron-blue transition-all group">
                <p className="text-[10px] uppercase text-tron-blue font-bold mb-1">{day}</p>
                <p className="text-[11px] leading-tight text-slate-600 mb-2 min-h-[30px]">{data.mission}</p>
                <div className="flex items-center gap-1">
                  <Zap size={10} className="text-slate-300 group-hover:text-tron-blue" />
                  <span className="text-[9px] font-mono text-slate-400">{data.length}</span>
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