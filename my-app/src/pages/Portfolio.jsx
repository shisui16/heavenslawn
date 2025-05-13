import Layout from '../components/Layout';
import { useState } from 'react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('design');
  const tabs = ['design', 'writing', 'coding'];

  const renderContent = () => {
    return (
      <div className="mt-6 text-lg text-gray-700">
        Showing <span className="font-semibold">{activeTab}</span> projects here.
      </div>
    );
  };

  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-6">Portfolio</h2>

      <div className="flex space-x-4">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md transition-all duration-200 ${
              activeTab === tab
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {renderContent()}
    </Layout>
  );
};

export default Portfolio;
