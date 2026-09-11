import React from 'react';

// DHYAN DEIN: Yahan props (selectedWorksheet) receive hona chahiye!
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

      {/* Main Data Table */}
      <div className="flex-1 overflow-auto px-6 pb-24 mt-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#EAF2FF] text-left text-xs font-bold text-gray-700">
              <th className="py-2.5 px-4 w-12 rounded-tl-md rounded-bl-md"><input type="checkbox" className="rounded border-gray-300" /></th>
              <th className="py-2.5 px-4">First name</th>
              <th className="py-2.5 px-4">Created at</th>
              <th className="py-2.5 px-4 rounded-tr-md rounded-br-md">Last name</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => {
              // Highlight logic: Sidebar ka user name Table ke first name se match kare (spaces hata kar check kiya hai taaki strict match na phase)
              const isRowSelected = selectedWorksheet && row.firstName.replace(/\s+/g, '').toLowerCase() === selectedWorksheet.user.toLowerCase();
              
              return (
                <tr key={row.id} className={`border-b border-gray-100 text-xs text-gray-600 transition-colors ${isRowSelected ? 'bg-[#EAF2FF]' : 'hover:bg-gray-50'}`}>
                  <td className="py-3 px-4"><input type="checkbox" className="rounded border-gray-300" /></td>
                  <td className="py-3 px-4 font-medium text-gray-900">{row.firstName}</td>
                  <td className="py-3 px-4">{row.created}</td>
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