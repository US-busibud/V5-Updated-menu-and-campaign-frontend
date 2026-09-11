import React, { useState } from 'react';
import CampaignSidebar from './components/CampaignSidebar';
import MainTable from './components/MainTable';

function App() {
  // Ye state list item ki click ko track karegi
  const [selectedWorksheet, setSelectedWorksheet] = useState(null);

  return (
    <div className="flex h-screen bg-white font-sans text-gray-800 overflow-hidden">
      
      {/* 1. Leftmost Icon Navbar */}
      <div className="w-16 border-r border-gray-200 flex flex-col items-center py-4 bg-[#F8F9FA] flex-shrink-0">
         <div className="w-8 h-8 rounded-full bg-gray-300 mb-6"></div>
         <div className="mt-auto w-8 h-8 rounded-full bg-gray-400"></div> 
      </div>

      {/* 2. Secondary Sidebar (Yahan hum props pass kar rahe hain) */}
      <CampaignSidebar 
        selectedWorksheet={selectedWorksheet} 
        onSelectWorksheet={setSelectedWorksheet} 
      />
      
      {/* 3. Main Content Area (Yahan selected data bhej rahe hain) */}
      <MainTable selectedWorksheet={selectedWorksheet} />

    </div>
  );
}

export default App;