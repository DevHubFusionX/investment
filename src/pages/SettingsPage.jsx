import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBitcoin, FaArrowLeft, FaUser, FaLock, FaBell, FaUniversity, FaShieldAlt, FaEye, FaEyeSlash, FaCheckCircle } from 'react-icons/fa';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';

export const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: FaUser },
    { id: 'security', label: 'Security', icon: FaLock },
    { id: 'notifications', label: 'Notifications', icon: FaBell },
    { id: 'banking', label: 'Banking', icon: FaUniversity }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Navigation */}
      <nav className="bg-[var(--surface)] border-b border-[var(--border)] p-[var(--space-4)]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/dashboard" className="flex items-center gap-[var(--space-3)]">
            <FaArrowLeft className="text-[var(--text-secondary)]" />
            <FaBitcoin className="text-2xl text-[var(--primary)]" />
            <span className="text-xl font-bold text-gradient">CryptoVault</span>
          </Link>
          <div className="text-[var(--text-secondary)]">
            Account Settings
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-[var(--space-6)]">
        {/* Header */}
        <div className="mb-[var(--space-8)]">
          <h1 className="text-3xl font-bold text-[var(--text)] mb-[var(--space-2)]">
            Settings
          </h1>
          <p className="text-[var(--text-secondary)]">
            Manage your account preferences and security settings
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-[var(--space-8)]">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="p-[var(--space-4)]">
              <nav className="space-y-[var(--space-2)]">
                {tabs.map(tab => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-[var(--space-3)] p-[var(--space-3)] rounded-[var(--radius-lg)] transition-all ${
                        activeTab === tab.id
                          ? 'bg-[var(--primary)] text-white'
                          : 'text-[var(--text-secondary)] hover:bg-[var(--surface)] hover:text-[var(--text)]'
                      }`}
                    >
                      <IconComponent className="text-lg" />
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <Card className="p-[var(--space-6)]">
                <h2 className="text-xl font-bold text-[var(--text)] mb-[var(--space-6)]">Profile Information</h2>
                <div className="space-y-[var(--space-6)]">
                  <div className="grid md:grid-cols-2 gap-[var(--space-4)]">
                    <Input label="First Name" defaultValue="Alex" />
                    <Input label="Last Name" defaultValue="Johnson" />
                  </div>
                  <Input label="Email Address" defaultValue="alex@example.com" />
                  <Input label="Phone Number" defaultValue="+1 (555) 123-4567" />
                  <div className="grid md:grid-cols-2 gap-[var(--space-4)]">
                    <Input label="Date of Birth" type="date" defaultValue="1990-01-01" />
                    <Input label="Country" defaultValue="United States" />
                  </div>
                  <Button className="gradient-primary text-white">Save Changes</Button>
                </div>
              </Card>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div className="space-y-[var(--space-6)]">
                <Card className="p-[var(--space-6)]">
                  <h2 className="text-xl font-bold text-[var(--text)] mb-[var(--space-6)]">Change Password</h2>
                  <div className="space-y-[var(--space-4)]">
                    <Input label="Current Password" type="password" />
                    <div className="relative">
                      <Input 
                        label="New Password" 
                        type={showPassword ? 'text' : 'password'}
                        className="pr-12"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-9 text-[var(--text-secondary)]"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                    <Input label="Confirm New Password" type="password" />
                    <Button className="gradient-primary text-white">Update Password</Button>
                  </div>
                </Card>

                <Card className="p-[var(--space-6)]">
                  <h2 className="text-xl font-bold text-[var(--text)] mb-[var(--space-6)]">Two-Factor Authentication</h2>
                  <div className="flex items-center justify-between p-[var(--space-4)] bg-[var(--surface)] rounded-[var(--radius-lg)]">
                    <div className="flex items-center gap-[var(--space-3)]">
                      <FaShieldAlt className="text-[var(--success)] text-xl" />
                      <div>
                        <div className="font-semibold text-[var(--text)]">SMS Authentication</div>
                        <div className="text-sm text-[var(--text-secondary)]">Enabled for +1 (555) ***-4567</div>
                      </div>
                    </div>
                    <Button variant="outline">Disable</Button>
                  </div>
                </Card>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <Card className="p-[var(--space-6)]">
                <h2 className="text-xl font-bold text-[var(--text)] mb-[var(--space-6)]">Notification Preferences</h2>
                <div className="space-y-[var(--space-6)]">
                  {[
                    { key: 'email', label: 'Email Notifications', desc: 'Portfolio updates, deposits, withdrawals' },
                    { key: 'sms', label: 'SMS Notifications', desc: 'Security alerts and important updates' },
                    { key: 'push', label: 'Push Notifications', desc: 'Real-time market alerts and performance' }
                  ].map(item => (
                    <div key={item.key} className="flex items-center justify-between p-[var(--space-4)] bg-[var(--surface)] rounded-[var(--radius-lg)]">
                      <div>
                        <div className="font-semibold text-[var(--text)]">{item.label}</div>
                        <div className="text-sm text-[var(--text-secondary)]">{item.desc}</div>
                      </div>
                      <button
                        onClick={() => setNotifications({...notifications, [item.key]: !notifications[item.key]})}
                        className={`w-12 h-6 rounded-full transition-all ${
                          notifications[item.key] ? 'bg-[var(--primary)]' : 'bg-[var(--border)]'
                        }`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                          notifications[item.key] ? 'translate-x-6' : 'translate-x-0.5'
                        }`} />
                      </button>
                    </div>
                  ))}
                  <Button className="gradient-primary text-white">Save Preferences</Button>
                </div>
              </Card>
            )}

            {/* Banking Tab */}
            {activeTab === 'banking' && (
              <div className="space-y-[var(--space-6)]">
                <Card className="p-[var(--space-6)]">
                  <h2 className="text-xl font-bold text-[var(--text)] mb-[var(--space-6)]">Linked Bank Accounts</h2>
                  <div className="space-y-[var(--space-4)]">
                    <div className="flex items-center justify-between p-[var(--space-4)] bg-[var(--surface)] rounded-[var(--radius-lg)]">
                      <div className="flex items-center gap-[var(--space-3)]">
                        <FaUniversity className="text-[var(--primary)] text-xl" />
                        <div>
                          <div className="font-semibold text-[var(--text)]">Chase Bank</div>
                          <div className="text-sm text-[var(--text-secondary)]">****1234 • Primary</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCheckCircle className="text-[var(--success)]" />
                        <span className="text-sm text-[var(--success)]">Verified</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">Add New Bank Account</Button>
                  </div>
                </Card>

                <Card className="p-[var(--space-6)]">
                  <h2 className="text-xl font-bold text-[var(--text)] mb-[var(--space-6)]">Crypto Wallets</h2>
                  <div className="space-y-[var(--space-4)]">
                    <div className="flex items-center justify-between p-[var(--space-4)] bg-[var(--surface)] rounded-[var(--radius-lg)]">
                      <div className="flex items-center gap-[var(--space-3)]">
                        <FaBitcoin className="text-[var(--primary)] text-xl" />
                        <div>
                          <div className="font-semibold text-[var(--text)]">Bitcoin Wallet</div>
                          <div className="text-sm text-[var(--text-secondary)]">bc1q...7x8z • External</div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Remove</Button>
                    </div>
                    <Button variant="outline" className="w-full">Add Crypto Wallet</Button>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};