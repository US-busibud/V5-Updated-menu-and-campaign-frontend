import React from 'react';

const StatCard = ({ title, value, onView }) => {
  return (
    <div className="border border-gray-200 rounded-md p-3 bg-white flex flex-col justify-between hover:border-blue-300 transition-colors">
      <h3 className="text-blue-600 text-[11px] font-medium mb-3">{title}</h3>
      <div className="flex justify-between items-center mt-auto">
        <span className="text-lg font-bold text-gray-900">{value}</span>
        
        {/* VIEW BUTTON - Ab ye default gray background ke sath aayega */}
        {onView && (
          <button 
            onClick={() => onView({ title, value })}
            className="flex items-center gap-1 text-[10px] text-gray-700 bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-sm font-medium border border-gray-200 transition-colors"
          >
            View <span className="text-gray-400 font-bold">→</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default StatCard;