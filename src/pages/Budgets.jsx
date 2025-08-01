import React from 'react';
import { budgetsData } from '../data/dummy';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

// A presentational component for displaying a single budget's status.
const BudgetCard = ({ Category, Allocated, Spent, Icon, color }) => {
  // Calculate the spending percentage, ensuring no division by zero if Allocated is 0.
  const percentage = Allocated > 0 ? (Spent / Allocated) * 100 : 0;
  
  return(
    <div className="bg-white p-6 rounded-2xl shadow-md">
        <div className="flex items-center justify-between mb-4">
            <p className="text-2xl font-bold">{Icon} {Category}</p>
            <p className="text-gray-500">${Spent.toFixed(2)} / ${Allocated.toFixed(2)}</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="h-2.5 rounded-full" style={{ width: `${percentage}%`, backgroundColor: color }}></div>
        </div>
        <p className="text-right mt-2 text-sm text-gray-600">{percentage.toFixed(0)}% Spent</p>
    </div>
  );
}

// Main page component for the Budgets view.
const Budgets = () => {
  const { currentColor } = useStateContext();
  
  // TODO: Fetch budgetsData from a backend API instead of the dummy file.
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Data" title="Budgets" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {budgetsData.map((budget, index) => (
          <BudgetCard 
            key={index} 
            {...budget}
            color={currentColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Budgets;