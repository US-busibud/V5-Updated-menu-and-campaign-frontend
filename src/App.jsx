import React, { useState } from 'react';
import CampaignSidebar from './components/CampaignSidebar';
import MainTable from './components/MainTable';

const App = () => {
  const [selectedWorksheet, setSelectedWorksheet] = useState(null);
  const [activeView, setActiveView] = useState('worksheet'); // 'worksheet', 'blank1', 'blank2'

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      
      {/* 1. Sidebar (Icons + List) */}
      <CampaignSidebar 
        selectedWorksheet={selectedWorksheet} 
        onSelectWorksheet={setSelectedWorksheet}
        activeView={activeView}
        setActiveView={setActiveView}
      />
      
      {/* 2. Main Data Table (Conditional Rendering) */}
      {activeView === 'worksheet' ? (
        <MainTable selectedWorksheet={selectedWorksheet} />
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 h-screen border-l border-gray-200">
          <svg className="w-16 h-16 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
          <h2 className="text-xl font-semibold text-gray-500">Right Side Blank</h2>
          <p className="text-sm text-gray-400 mt-2">Content hum baad mein implement karenge.</p>
        </div>
      )}

    </div>
  );
};

export default App;