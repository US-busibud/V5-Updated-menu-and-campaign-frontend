import React from 'react';

const StatCard = ({ title, value, onView }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-2.5 hover:border-blue-400 hover:shadow-sm transition-all group flex flex-col justify-between h-20 bg-white">
      <div>
        <h4 className="text-blue-600 text-[11px] font-medium leading-tight">{title}</h4>
        <div className="text-sm font-bold text-gray-900 mt-0.5">{value}</div>
      </div>
      <div className="flex justify-end">
        <button 
          onClick={() => onView({ title, value })}
          className="text-[10px] text-gray-500 hover:text-blue-600 flex items-center gap-1 cursor-pointer relative z-10"
        >
          View <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default StatCard;