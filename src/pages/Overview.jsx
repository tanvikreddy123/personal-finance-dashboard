import React from 'react';
import { Bar, Pie } from '../components';
import { incomeVsExpenseData, expenseData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Overview = () => {
  const { currentColor } = useStateContext();

  // TODO: Calculate these stats dynamically from the transactions data instead of hardcoding.
  const currentBalance = 63448.78;
  const totalIncome = 5750.00;
  const totalExpenses = 3200.00;

  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
            {/* This div is intended for a featured image or a welcome message. */}
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
            {/* Key Performance Indicator (KPI) cards for a quick financial summary. */}
            <div className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <p className="font-bold text-gray-400">Current Balance</p>
              <p className="text-2xl">${currentBalance.toLocaleString('en-US')}</p>
            </div>
             <div className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <p className="font-bold text-gray-400">Total Income</p>
              <p className="text-2xl text-green-500">+${totalIncome.toFixed(2)}</p>
            </div>
             <div className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <p className="font-bold text-gray-400">Total Expenses</p>
              <p className="text-2xl text-red-500">-${totalExpenses.toFixed(2)}</p>
            </div>
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Income vs. Expense</p>
          </div>
          <div className="mt-10">
            <Bar data={incomeVsExpenseData} height="320px" width="100%" />
          </div>
        </div>
        <div>
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center flex-col">
            <p className="text-xl font-semibold ">Expense by Category</p>
            <Pie id="pie-chart" data={expenseData} legendVisiblity={false} height="200px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;