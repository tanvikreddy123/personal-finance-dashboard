import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Sidebar } from './components';
import { Overview, Transactions, Budgets, Analytics } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { activeMenu, currentColor } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative bg-gray-100">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'bg-gray-100 min-h-screen md:ml-72 w-full'
                : 'bg-gray-100 w-full min-h-screen flex-2'
            }
          >
            <div className="fixed md:static bg-gray-100 navbar w-full">
              <Navbar />
            </div>
            <div>
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={(<Overview />)} />
                <Route path="/overview" element={(<Overview />)} />

                {/* Pages */}
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/budgets" element={<Budgets />} />

                {/* Charts */}
                <Route path="/analytics" element={<Analytics />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;