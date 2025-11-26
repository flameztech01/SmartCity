import React from 'react';
import { 
  FiSearch, 
  FiPlus, 
  FiCheck, 
  FiSmartphone, 
  FiSliders, 
  FiHome, 
  FiZap, 
  FiClock, 
  FiBell,
  FiSettings,
  FiTrendingUp,
  FiActivity,
  FiPower,
  FiWifi,
  FiRefreshCw,
  FiCalendar,
  FiUser
} from 'react-icons/fi';

const FindAppliances = () => {
  // Mock data for the dashboard
  const statsData = [
    { value: '12', label: 'Connected Devices', trend: '+2', trendUp: true },
    { value: '8', label: 'Active Now', trend: null, trendUp: null },
    { value: '4', label: 'Rooms', trend: null, trendUp: null },
    { value: '92%', label: 'System Health', trend: '+5%', trendUp: true }
  ];

  const appliancesData = [
    { name: 'Living Room AC', type: 'Air Conditioner', status: 'online', icon: <FiZap />, room: 'Living Room' },
    { name: 'Kitchen Lights', type: 'Smart Bulb', status: 'online', icon: <FiZap />, room: 'Kitchen' },
    { name: 'Front Door Lock', type: 'Smart Lock', status: 'offline', icon: <FiSettings />, room: 'Entrance' },
    { name: 'Bedroom Thermostat', type: 'Thermostat', status: 'online', icon: <FiSliders />, room: 'Bedroom' },
    { name: 'Security Camera', type: 'Camera', status: 'online', icon: <FiVideo />, room: 'Living Room' },
    { name: 'Smart Speaker', type: 'Speaker', status: 'online', icon: <FiSmartphone />, room: 'Kitchen' }
  ];

  const recentActivity = [
    { action: 'Living Room AC turned on', time: '2 mins ago', icon: <FiPower /> },
    { action: 'Kitchen Lights adjusted', time: '15 mins ago', icon: <FiSliders /> },
    { action: 'New device paired', time: '1 hour ago', icon: <FiPlus /> },
    { action: 'System update completed', time: '2 hours ago', icon: <FiRefreshCw /> }
  ];

  const quickStats = [
    { value: '3.2kW', label: 'Energy Usage' },
    { value: '24°C', label: 'Avg Temp' },
    { value: '18', label: 'Automations' },
    { value: '5', label: 'Alerts Today' }
  ];

  return (
    <div className="find-appliances">
      {/* Main Content */}
      <main className="main-content">
        {/* Dashboard Header */}
        <div className="dashboard-header">
          <h1 className="dashboard-title">Smart Home Dashboard</h1>
          <div className="quick-actions">
            <button className="primary-btn">
              <FiSearch className="btn-icon" />
              Scan for Devices
            </button>
            <button className="secondary-btn">
              <FiSettings className="btn-icon" />
              Settings
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              {stat.trend && (
                <div className={`stat-trend ${stat.trendUp ? 'trend-up' : 'trend-down'}`}>
                  <FiTrendingUp />
                  {stat.trend}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Main Dashboard Grid */}
        <div className="dashboard-grid">
          {/* Left Column - Appliances */}
          <div className="appliances-section">
            <div className="section-header">
              <h2 className="section-title">Your Appliances</h2>
              <div className="quick-actions">
                <button className="primary-btn">
                  <FiPlus className="btn-icon" />
                  Add Device
                </button>
                <button className="secondary-btn">
                  <FiSliders className="btn-icon" />
                  Filter
                </button>
              </div>
            </div>

            <div className="appliances-grid">
              {appliancesData.map((appliance, index) => (
                <div key={index} className="appliance-card">
                  <div className="appliance-header">
                    <div className="appliance-icon">
                      {appliance.icon}
                    </div>
                    <div className="appliance-info">
                      <h4>{appliance.name}</h4>
                      <p>{appliance.type} • {appliance.room}</p>
                    </div>
                  </div>
                  <div className={`appliance-status ${appliance.status === 'offline' ? 'status-offline' : ''}`}>
                    <FiActivity />
                    {appliance.status === 'online' ? 'Online' : 'Offline'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="sidebar-sections">
            {/* Recent Activity */}
            <div className="recent-activity">
              <h3 className="section-title">Recent Activity</h3>
              <div className="activity-list">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="activity-item">
                    <div className="activity-icon">
                      {activity.icon}
                    </div>
                    <div className="activity-content">
                      <p>{activity.action}</p>
                      <span className="activity-time">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="quick-stats">
              <h3 className="section-title">Quick Stats</h3>
              <div className="quick-stats-grid">
                {quickStats.map((stat, index) => (
                  <div key={index} className="quick-stat-item">
                    <div className="quick-stat-value">{stat.value}</div>
                    <div className="quick-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <button className="floating-add-btn">
          <FiPlus className="add-icon" />
        </button>
      </main>
    </div>
  );
};

// Add missing FiVideo icon component
const FiVideo = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em">
    <polygon points="23 7 16 12 23 17 23 7"></polygon>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
  </svg>
);

export default FindAppliances;