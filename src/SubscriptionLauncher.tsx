import React from 'react';
import { ExternalLink } from 'lucide-react';

const subscriptions = [
  { name: "Perplexity", url: "https://www.perplexity.ai/" },
  { name: "Canva", url: "https://www.canva.com/" },
  { name: "Julius AI", url: "https://julius.ai/" },
  { name: "Lovable", url: "https://lovable.dev" },
  { name: "Lyzr Studio", url: "https://studio.lyzr.ai/" },
  { name: "Fireflies", url: "https://app.fireflies.ai/" },
  { name: "Phot AI", url: "https://www.phot.ai" },
  { name: "Hailuo AI", url: "https://hailuoai.video/" },
  { name: "Vapi", url: "https://dashboard.vapi.ai/" },
  { name: "Writesonic", url: "https://app.writesonic.com/" },
  { name: "HeyGen", url: "https://app.heygen.com/" },
  { name: "Chronicle", url: "https://app.chroniclehq.com/" },
  { name: "Happenstance", url: "https://happenstance.ai/" },
  { name: "MultipleChat", url: "https://multiplechat.ai/" },
  { name: "Wispr Flow", url: "https://wisprflow.ai/" },
  { name: "Retell AI", url: "https://www.retellai.com/" },
  { name: "ElevenLabs", url: "https://elevenlabs.io/" },
  { name: "MeetEmily", url: "https://meetemily.ai/" },
  { name: "Bolt", url: "https://bolt.new/" },
  { name: "LinkedIn", url: "https://www.linkedin.com/" },
  { name: "OpenAI", url: "https://openai.com/" },
  { name: "Pinecone", url: "https://www.pinecone.io/" },
  { name: "n8n", url: "https://n8n.io/" },
  { name: "Dify", url: "https://dify.ai/" },
  { name: "Gumloop", url: "https://www.gumloop.com/" },
  { name: "Google Sheets", url: "https://docs.google.com/spreadsheets" },
  { name: "Google Labs", url: "https://labs.google/" },
  { name: "NotebookLM", url: "https://notebooklm.google/" },
  { name: "Apify", url: "https://apify.com/" },
  { name: "SocialSonic", url: "https://app.socialsonic.com/" },
  { name: "SuperGrow", url: "https://www.supergrow.ai/" },
  { name: "VTurb", url: "https://app.vturb.com/" },
  { name: "Kiwify", url: "https://dashboard.kiwify.com.br/" },
  { name: "GoDaddy", url: "https://dcc.godaddy.com/" },
  { name: "Hotmart", url: "https://app.hotmart.com/" },
  { name: "Atomicat", url: "https://app.atomicat.com.br/" },
  { name: "Supabase", url: "https://supabase.com/dashboard/" },
  { name: "Facebook", url: "https://www.facebook.com/" }
];

const SubscriptionLauncher = () => {
  return (
    <div className="tron-card p-6 border border-grid-border rounded-lg bg-white mt-6">
      <h2 className="text-sm font-medium tracking-widest uppercase mb-6">Subscription Nodes</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {subscriptions.map((tool) => (
          <a
            key={tool.name}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-3 py-2 border border-grid-border rounded hover:border-tron-blue hover:shadow-halo transition-all group"
          >
            <span className="text-[10px] font-mono uppercase tracking-tighter truncate">{tool.name}</span>
            <ExternalLink size={10} className="text-slate-300 group-hover:text-tron-blue" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionLauncher;