import React from 'react';
import { Book, X, MessageSquare, ExternalLink } from 'lucide-react';

// RINZLER V6.0 Study Nodes
const studyNodes = [
  { name: "Mathematics", url: "https://www.khanacademy.org/math/", icon: <Book size={16} /> },
  { name: "AI Specialization", url: "https://platform.outskill.com/", icon: <Book size={16} /> },
  { name: "Language Protocol", url: "https://learn.mangolanguages.com/login", icon: <Book size={16} /> },
  { name: "Writing Analysis", url: "#", icon: <Book size={16} /> }
];

interface FocusModeProps {
  exitFocus: () => void;
}

const FocusMode: React.FC<FocusModeProps> = ({ exitFocus }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto h-[80vh] animate-in fade-in duration-500">
      
      {/* Sidebar: Education Portals */}
      <aside className="w-full md:w-64 space-y-4">
        <h2 className="text-xs font-mono uppercase tracking-tighter text-slate-400">Education Portals</h2>
        <div className="space-y-2">
          {studyNodes.map((node) => (
            <a
              key={node.name}
              href={node.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 border border-grid-border rounded hover:border-tron-blue hover:shadow-halo bg-white transition-all group"
            >
              <div className="flex items-center gap-3">
                <span className="text-slate-400 group-hover:text-tron-blue">{node.icon}</span>
                <span className="text-xs font-medium uppercase tracking-tight">{node.name}</span>
              </div>
              <ExternalLink size={12} className="text-slate-200 group-hover:text-tron-blue" />
            </a>
          ))}
        </div>

        <button 
          onClick={exitFocus}
          className="w-full mt-8 flex items-center justify-center gap-2 p-3 border border-red-100 text-red-400 rounded hover:bg-red-50 transition-colors uppercase text-[10px] font-bold tracking-widest"
        >
          <X size={14} />
          Terminate Session
        </button>
      </aside>

      {/* Main: AI RAG Agent Placeholder */}
      <section className="flex-1 border border-grid-border rounded-lg bg-white p-6 flex flex-col relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-tron-blue animate-pulse"></div>
            <span className="text-[10px] font-mono text-tron-blue uppercase tracking-tighter">AI Uplink Active</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center text-center space-y-4">
          <div className="p-4 rounded-full border border-grid-border shadow-halo">
            <MessageSquare size={32} className="text-tron-blue" />
          </div>
          <div>
            <h3 className="text-lg font-light uppercase tracking-widest">RAG Agent Interface</h3>
            <p className="text-xs text-slate-400 font-mono max-w-sm mx-auto mt-2">
              Connect to Gemini API / Google AI Studio to serve "5-minute daily reviews" based on your NotebookLM corpus.
            </p>
          </div>
        </div>

        <div className="mt-auto border-t border-grid-border pt-4">
          <div className="flex gap-2">
            <input 
              disabled
              type="text" 
              placeholder="AI initialization required in Phase 4..."
              className="flex-1 bg-slate-50 border border-grid-border rounded px-4 py-2 text-xs focus:outline-none"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FocusMode;