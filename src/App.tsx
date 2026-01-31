import React, { useState } from 'react';
import Header from './Header';
import Dashboard from './Dashboard';
import FocusMode from './FocusMode';

// Defining types for our application views
export type ViewState = 'HUB' | 'FOCUS';

function App() {
  // State to track if the user is in the main Hub or Study Focus mode
  const [view, setView] = useState<ViewState>('HUB');

  // Toggle function to switch between views
  const toggleFocus = () => {
    setView(view === 'HUB' ? 'FOCUS' : 'HUB');
  };

  return (
    <div className="min-h-screen bg-white transition-colors duration-500">
      {/* Persistent Header: The Pulse */}
      <Header currentView={view} setView={setView} />
      
      <main className="p-4 md:p-8">
        {/* Conditional Rendering based on the current view state */}
        {view === 'HUB' ? (
          <Dashboard toggleFocus={toggleFocus} />
        ) : (
          <FocusMode exitFocus={() => setView('HUB')} />
        )}
      </main>
    </div>
  );
}

export default App;