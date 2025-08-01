import React from 'react';
import { FiPieChart, FiGrid, FiBarChart } from 'react-icons/fi';
import { BiMoney } from 'react-icons/bi';

// Defines the structure and icons for the sidebar navigation
export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'overview',
        icon: <FiPieChart />,
      },
    ],
  },
  {
    title: 'Data',
    links: [
      {
        name: 'transactions',
        icon: <BiMoney />,
      },
      {
        name: 'budgets',
        icon: <FiGrid />,
      },
    ],
  },
  {
    title: 'Charts',
    links: [
      {
        name: 'analytics',
        icon: <FiBarChart />,
      },
    ],
  },
];

// Mock data for the transactions grid
export const transactionsData = [
  {
    TransactionID: 'T1001',
    Date: '2023-05-01',
    Description: 'Monthly Salary',
    Category: 'Income',
    Amount: 5000.00,
    Type: 'Income',
  },
  {
    TransactionID: 'T1002',
    Date: '2023-05-01',
    Description: 'Rent Payment',
    Category: 'Housing',
    Amount: -1500.00,
    Type: 'Expense',
  },
  {
    TransactionID: 'T1003',
    Date: '2023-05-02',
    Description: 'Groceries at Walmart',
    Category: 'Food',
    Amount: -125.50,
    Type: 'Expense',
  },
  {
    TransactionID: 'T1004',
    Date: '2023-05-03',
    Description: 'Starbucks Coffee',
    Category: 'Food',
    Amount: -5.75,
    Type: 'Expense',
  },
    {
    TransactionID: 'T1005',
    Date: '2023-05-05',
    Description: 'Freelance Project Payment',
    Category: 'Income',
    Amount: 750.00,
    Type: 'Income',
  },
  {
    TransactionID: 'T1006',
    Date: '2023-05-06',
    Description: 'Gasoline for Car',
    Category: 'Transport',
    Amount: -60.00,
    Type: 'Expense',
  },
  {
    TransactionID: 'T1007',
    Date: '2023-05-08',
    Description: 'Netflix Subscription',
    Category: 'Entertainment',
    Amount: -15.99,
    Type: 'Expense',
  },
  {
    TransactionID: 'T1008',
    Date: '2023-05-10',
    Description: 'Dinner with friends',
    Category: 'Social',
    Amount: -85.20,
    Type: 'Expense',
  },
];

// Mock data for the budget tracking cards
export const budgetsData = [
  {
    Category: 'Food',
    Allocated: 500,
    Spent: 345.50,
    Icon: '🍔',
  },
  {
    Category: 'Housing',
    Allocated: 1500,
    Spent: 1500,
    Icon: '🏠',
  },
  {
    Category: 'Transport',
    Allocated: 200,
    Spent: 110.00,
    Icon: '🚗',
  },
  {
    Category: 'Entertainment',
    Allocated: 150,
    Spent: 95.99,
    Icon: '🎬',
  },
  {
    Category: 'Shopping',
    Allocated: 300,
    Spent: 150.75,
    Icon: '🛍️',
  },
];

// Mock data for the bar chart on the overview page
export const incomeVsExpenseData = [
  { month: 'Jan', income: 4500, expense: 2200 },
  { month: 'Feb', income: 4800, expense: 2500 },
  { month: 'Mar', income: 5200, expense: 2800 },
  { month: 'Apr', income: 4900, expense: 2600 },
  { month: 'May', income: 5750, expense: 3200 },
  { month: 'Jun', income: 5500, expense: 3000 },
];

// Mock data for the pie chart on the overview page
export const expenseData = [
  { category: 'Housing', value: 35 },
  { category: 'Food', value: 25 },
  { category: 'Transport', value: 15 },
  { category: 'Entertainment', value: 10 },
  { category: 'Other', value: 15 },
];