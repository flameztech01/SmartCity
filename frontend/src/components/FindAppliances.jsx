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
  FiSettings 
} from 'react-icons/fi';

const FindAppliances = () => {
  return (
    <div className="find-appliances">
      {/* Main Content */}
      <main className="main-content">
        {/* Quick Actions Section */}
        <section className="quick-actions-section">
          <div className="section-header">
            <h2>Quick Actions</h2>
          </div>
          <div className="quick-actions-grid">
            <button className="primary-btn large-btn">
              <FiSearch className="btn-icon" />
              Pair Nearby Devices
            </button>
            <button className="floating-add-btn">
              <FiPlus className="add-icon" />
            </button>
          </div>
        </section>

        {/* Connected Devices Section */}
        <section className="content-section">
          <div className="section-header">
            <h2>Connected Devices</h2>
            <FiCheck className="checkmark" />
          </div>
          <div className="card-grid">
            <div className="feature-card">
              <div className="card-header">
                <FiSmartphone className="card-icon" />
                <h3>View Connected Devices</h3>
                <FiCheck className="checkmark" />
              </div>
              <p>Manage all your connected smart devices</p>
            </div>

            <div className="feature-card">
              <div className="card-header">
                <FiSliders className="card-icon" />
                <h3>Quick Controls</h3>
                <FiCheck className="checkmark" />
              </div>
              <p>Quick access to device controls</p>
            </div>

            <div className="feature-card">
              <div className="card-header">
                <FiHome className="card-icon" />
                <h3>Rooms Section</h3>
                <FiCheck className="checkmark" />
              </div>
              <p>Organize devices by rooms</p>
            </div>
          </div>
        </section>

        {/* Smart Features Section */}
        <section className="content-section">
          <div className="section-header">
            <h2>Smart Features</h2>
          </div>
          <div className="card-grid">
            <div className="feature-card">
              <div className="card-header">
                <FiZap className="card-icon" />
                <h3>Energy Usage Card</h3>
                <FiCheck className="checkmark" />
              </div>
              <p>Monitor and optimize energy consumption</p>
            </div>

            <div className="feature-card">
              <div className="card-header">
                <FiSettings className="card-icon" />
                <h3>Automations / Scenes</h3>
                <FiCheck className="checkmark" />
              </div>
              <p>Create and manage automations</p>
            </div>

            <div className="feature-card">
              <div className="card-header">
                <FiBell className="card-icon" />
                <h3>Notifications</h3>
                <FiCheck className="checkmark" />
              </div>
              <p>Stay updated with device alerts</p>
            </div>

            <div className="feature-card">
              <div className="card-header">
                <FiClock className="card-icon" />
                <h3>Recently Used</h3>
                <FiCheck className="checkmark" />
              </div>
              <p>Quick access to recent devices</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FindAppliances;