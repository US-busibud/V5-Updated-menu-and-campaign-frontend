import React, { useState } from 'react';
import StatCard from './StatCard';

const CampaignSidebar = ({ selectedWorksheet, onSelectWorksheet, activeView, setActiveView }) => {
  const [activeTab, setActiveTab] = useState('analytics');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState('Last 30 days');
  const [selectedMetric, setSelectedMetric] = useState(null); 
  const [activeWorksheetDetail, setActiveWorksheetDetail] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const timeOptions = ['All time', 'Last 30 days', 'Last 7 days'];

  const mockDetailsList = [
    { id: 1, title: 'Untitled Worksheet 04', sent: 124, user: 'John', email: 'john@gmail.com' },
    { id: 2, title: 'Untitled Worksheet 15', sent: 124, user: 'Doe', email: 'Doe@gmail.com' },
    { id: 3, title: 'Untitled Worksheet 04', sent: 124, user: 'john1', email: 'john@gmail.com' },
    { id: 4, title: 'Sale campaign 01', sent: 124, user: 'Doe', email: 'Doe@gmail.com' },
  ];

  const mockWorksheetUsers = [
    { id: 1, user: 'john', email: 'john@gmail.com' },
    { id: 2, user: 'john1', email: 'johndoe@gmail.com' },
    { id: 3, user: 'Doe', email: 'Doe@gmail.com' },
  ];

  const filteredList = mockDetailsList.filter((item) => {
    const query = searchQuery.toLowerCase();
    return item.user.toLowerCase().includes(query) || item.email.toLowerCase().includes(query) || item.title.toLowerCase().includes(query);
  });

  const handleBackToGrid = () => {
    setSelectedMetric(null); 
    setActiveWorksheetDetail(null);
    onSelectWorksheet(null);
    setSearchQuery(''); 
  };

  return (
    <div className="flex h-screen border-r border-gray-200 bg-white">
      <div className="w-14 bg-white border-r border-gray-200 flex flex-col items-center py-5 justify-between flex-shrink-0 z-20">
        
        <div className="flex flex-col items-center w-full">
          <div className="w-8 h-8 rounded-full bg-gray-200 border border-gray-300 mb-8"></div>
          
          {/* 3 ICONS STRIP */}
          <div className="flex flex-col gap-4 items-center w-full">
            <button 
              onClick={() => setActiveView('worksheet')}
              className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors ${activeView === 'worksheet' ? 'bg-pink-100 ring-1 ring-pink-300' : 'hover:bg-gray-100'}`}
            >
              <div className="w-3.5 h-3.5 bg-pink-500 rounded-sm"></div>
            </button>

            <button 
              onClick={() => setActiveView('blank1')}
              className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors ${activeView === 'blank1' ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
            </button>

            <button 
              onClick={() => setActiveView('blank2')}
              className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors ${activeView === 'blank2' ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </button>
          </div>
        </div>

        {/* BOTTOM GRAY CIRCLE */}
        <div className="w-8 h-8 rounded-full bg-gray-300 border border-gray-400"></div>
      </div>

      <div className="w-80 h-full bg-[#F8F9FA] flex flex-col flex-shrink-0 overflow-x-hidden relative">
        
        {activeView === 'worksheet' ? (
          <>
            <div className="flex p-2 gap-1 border-b border-gray-200 bg-white">
              <button onClick={() => setActiveTab('worksheet')} className={`flex-1 py-1.5 text-xs font-medium rounded-md ${activeTab === 'worksheet' ? 'bg-gray-100 text-gray-800' : 'text-gray-500 hover:bg-gray-50'}`}>Worksheet List</button>
              <button onClick={() => { setActiveTab('analytics'); handleBackToGrid(); }} className={`flex-1 py-1.5 text-xs font-medium rounded-md ${activeTab === 'analytics' ? 'bg-gray-100 text-gray-800' : 'text-gray-500 hover:bg-gray-50'}`}>All campaigns analytics</button>
            </div>

            {activeTab === 'analytics' && (
              <div className="p-4 flex flex-col gap-4 overflow-y-auto overflow-x-hidden bg-white flex-1 relative">
                
                {!activeWorksheetDetail && (
                  <div>
                    {selectedMetric ? (
                      <h2 className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">
                        <span className="cursor-pointer hover:text-blue-500 transition-colors" onClick={handleBackToGrid}>ALL CAMPAIGNS ANALYTICS (600)</span>
                        <span className="text-blue-600"> &gt; {selectedMetric.title.toUpperCase()}</span>
                      </h2>
                    ) : (
                      <>
                        <h2 className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">ALL CAMPAIGNS ANALYTICS (1200)</h2>
                        <p className="text-[10px] text-gray-400 mt-0.5">Combined performance across all campaigns</p>
                      </>
                    )}
                  </div>
                )}

                {!selectedMetric ? (
                  <>
                    <div className="relative">
                      <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="w-full text-left bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm flex justify-between items-center hover:border-gray-400">
                        {selectedTime} ▾
                      </button>
                      {isDropdownOpen && (
                        <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                          {timeOptions.map((option) => (
                            <div key={option} onClick={() => { setSelectedTime(option); setIsDropdownOpen(false); }} className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">{option}</div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <h3 className="text-blue-600 text-[11px] font-medium">Reply percentage</h3>
                      <div className="text-xl font-bold text-gray-900 mt-1">16.9 %</div>
                      <p className="text-[10px] text-gray-500 mt-1">298 replies from 1,842 sent</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 pb-4">
                      <StatCard title="Opened" value="500" onView={setSelectedMetric} />
                      <StatCard title="Open percentage" value="68%" onView={setSelectedMetric} />
                      <StatCard title="Sent" value="200" onView={setSelectedMetric} />
                      <StatCard title="Replied" value="250" onView={setSelectedMetric} />
                      <StatCard title="Bounced" value="250" onView={setSelectedMetric} />
                      <StatCard title="Unsubscribed" value="250" onView={setSelectedMetric} />
                    </div>
                  </>
                ) : !activeWorksheetDetail ? (
                  <div className="flex flex-col h-full -mt-2">
                    <div className="bg-[#EAF2FF] border border-blue-100 rounded-md px-3 py-2 flex justify-between items-center text-blue-600">
                      <span className="text-sm font-medium">{selectedMetric.title}</span>
                      <span className="text-sm font-bold">{selectedMetric.value}</span>
                    </div>
                    
                    <div className="mt-3 relative">
                      <span className="absolute inset-y-0 left-2.5 flex items-center text-gray-400">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                      </span>
                      <input 
                        type="text" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by name, email or campaign" 
                        className="w-full pl-8 pr-3 py-1.5 text-xs border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
                      />
                    </div>
                    
                    <div className="mt-3 flex-1 overflow-y-auto overflow-x-hidden -mx-4">
                      {filteredList.length > 0 ? (
                        filteredList.map((item) => {
                          const isSelected = selectedWorksheet?.id === item.id;
                          return (
                            <div key={item.id} onClick={() => onSelectWorksheet(item)} className={`px-4 py-3 border-b border-gray-100 cursor-pointer transition-colors ${isSelected ? 'bg-gray-200' : 'hover:bg-gray-50'}`}>
                              <div className="flex justify-between items-center mb-1">
                                <span onClick={(e) => { e.stopPropagation(); setActiveWorksheetDetail(item); onSelectWorksheet(item); }} className="text-xs font-semibold text-gray-900 underline hover:text-blue-600 cursor-pointer">{item.title}</span>
                                <span className="text-[10px] text-gray-500">Sent: {item.sent}</span>
                              </div>
                              <div className="text-[11px] text-gray-500 mt-1">User name: <span className="font-medium text-gray-800">{item.user}</span></div>
                              <div className="text-[11px] text-gray-500 mb-2.5">Email: <span className="font-medium text-gray-800">{item.email}</span></div>
                            </div>
                          );
                        })
                      ) : (
                        <div className="text-center text-xs text-gray-500 py-6">No results found</div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="absolute top-0 left-0 w-full h-full bg-white z-10 flex flex-col">
                    <div className="px-4 pt-6 pb-3 border-b border-gray-100">
                      <button onClick={() => setActiveWorksheetDetail(null)} className="text-blue-600 text-[11.5px] font-semibold flex items-center gap-1 hover:underline mb-3">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg> Back
                      </button>
                      <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">{activeWorksheetDetail.title}</h3>
                    </div>
                    <div className="bg-[#EAF2FF] px-4 py-2 border-b border-blue-100 flex justify-between items-center">
                      <span className="text-sm font-medium text-blue-600">{selectedMetric.title}</span>
                      <span className="text-sm font-medium text-gray-500">17</span>
                    </div>
                    <div className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-50">
                      {mockWorksheetUsers.map((u) => (
                        <div key={u.id} className="bg-white border-b border-gray-200 px-4 py-3">
                          <div className="text-[11px] text-gray-500">User name: <span className="font-medium text-gray-800">{u.user}</span></div>
                          <div className="text-[11px] text-gray-500 mb-2">Email: <span className="font-medium text-gray-800">{u.email}</span></div>
                          <button onClick={() => window.open('#ticket-url', '_blank')} className="border border-blue-400 text-blue-500 hover:bg-blue-50 transition-colors rounded-full px-3 py-1 text-[10px] font-medium">View conversation</button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-400 bg-white px-4 text-center">
             <svg className="w-12 h-12 mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
             <p className="text-sm font-semibold text-gray-500">Left Side Blank</p>
             <p className="text-[11px] mt-1 text-gray-400">Content hum baad mein implement karenge.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default CampaignSidebar;