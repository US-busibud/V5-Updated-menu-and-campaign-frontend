import React from 'react';

const MainTable = ({ selectedWorksheet }) => {
  const tableData = [
    { id: 1, firstName: 'John', created: 'March 17, 2025 at 5:11 PM', updated: 'March 17, 2025 at 5:11 PM', lastName: 'John' },
    { id: 2, firstName: 'Doe', created: 'March 17, 2025 at 5:11 PM', updated: 'March 17, 2025 at 5:11 PM', lastName: 'Doe' },
    { id: 3, firstName: 'Doe 1', created: 'March 17, 2025 at 5:11 PM', updated: 'March 17, 2025 at 5:11 PM', lastName: 'Doe 1' },
    { id: 4, firstName: 'John 1', created: 'March 17, 2025 at 5:11 PM', updated: 'March 17, 2025 at 5:11 PM', lastName: 'John 1' },
    { id: 5, firstName: 'Alexis', created: 'March 17, 2025 at 5:11 PM', updated: 'March 17, 2025 at 5:11 PM', lastName: 'Alexis' },
    { id: 6, firstName: 'John 1', created: 'March 17, 2025 at 5:11 PM', updated: 'March 17, 2025 at 5:11 PM', lastName: 'John 1' },
  ];

  // Dynamic Header Title Update Logic
  const displayTitle = selectedWorksheet ? selectedWorksheet.title.toUpperCase() : "UNTITLED WORKSHEET 06";

  return (
    <div className="flex-1 flex flex-col bg-white h-screen relative">
      
      {/* Header Area */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <h1 className="text-sm text-gray-500 font-medium tracking-wide">
          FLOW OVERVIEW &gt; <span className="text-gray-900 font-bold">{displayTitle}</span>
        </h1>
        <button className="bg-blue-100 text-blue-600 px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1">
          <span>✦</span> Available Credits 78
        </button>
      </div>

      <div className="px-6 py-4 flex justify-between items-start">
        
        {/* Left Side: Button on top, Columns/Rows at bottom */}
        <div className="flex flex-col gap-2">
          <button className="border border-gray-300 px-3 py-1.5 rounded-md text-[11px] font-medium text-gray-700 bg-gray-50 w-fit hover:bg-gray-100">
            Lead generation settings
          </button>
          <div className="text-[10px] text-gray-500 font-medium mt-1">
            Columns: 0/0 <span className="ml-4">Rows: 0/0</span>
          </div>
        </div>

        {/* Right Side: Action Buttons */}
        <div className="flex gap-2 items-start mt-0.5">
          {/* Search Icon Button */}
          <button className="border border-gray-300 p-1.5 rounded-md text-gray-500 bg-white hover:bg-gray-50">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
          
          {/* Filter/Sort Icon Button */}
          <button className="border border-gray-300 p-1.5 rounded-md text-gray-500 bg-white hover:bg-gray-50">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
          </button>
          
          {/* Blue Action Dropdown */}
          <button className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-[11px] font-medium flex items-center gap-1 hover:bg-blue-700">
            Action <span className="text-[9px] ml-1">▼</span>
          </button>
          
          {/* Yellow Save Use Case Button */}
          <button className="bg-[#FFF8E1] text-yellow-800 border border-yellow-200 px-3 py-1.5 rounded-md text-[11px] font-medium hover:bg-[#FFE082]">
            Save use case
          </button>
        </div>
      </div>

      {/* Main Data Table */}
      <div className="flex-1 overflow-auto px-6 pb-24 mt-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#EAF2FF] text-left text-xs font-bold text-gray-700">
              <th className="py-2.5 px-4 w-12 rounded-tl-md rounded-bl-md"><input type="checkbox" className="rounded border-gray-300" /></th>
              <th className="py-2.5 px-4 relative">First name</th>
              <th className="py-2.5 px-4">Created at</th>
              
              {/* UPDATED AT COLUMN ADDED */}
              <th className="py-2.5 px-4">Updated at</th>
              
              <th className="py-2.5 px-4 rounded-tr-md rounded-br-md">Last name</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => {
              const isRowSelected = selectedWorksheet && row.firstName.replace(/\s+/g, '').toLowerCase() === selectedWorksheet.user.toLowerCase();
              
              return (
                <tr key={row.id} className={`border-b border-gray-100 text-xs text-gray-600 transition-colors ${isRowSelected ? 'bg-[#EAF2FF]' : 'hover:bg-gray-50'}`}>
                  <td className="py-3 px-4"><input type="checkbox" className="rounded border-gray-300" /></td>
                  <td className="py-3 px-4 font-medium text-gray-900">{row.firstName}</td>
                  <td className="py-3 px-4">{row.created}</td>
                  
                  {/* UPDATED AT DATA ADDED */}
                  <td className="py-3 px-4">{row.updated}</td>
                  
                  <td className="py-3 px-4">{row.lastName}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainTable;