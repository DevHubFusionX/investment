import { Link } from 'react-router-dom';
import { FaBitcoin, FaArrowLeft, FaUser, FaCamera, FaCheckCircle, FaExclamationTriangle, FaShieldAlt, FaCalendar, FaMapMarkerAlt, FaEnvelope, FaPhone, FaEdit } from 'react-icons/fa';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export const ProfilePage = () => {
  const userProfile = {
    name: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    phone: '+1 (555) 123-4567',
    joinDate: 'January 2024',
    location: 'New York, USA',
    avatar: null,
    verification: {
      email: true,
      phone: true,
      identity: true,
      address: false
    },
    stats: {
      totalInvested: 3000,
      totalReturns: 847.50,
      portfolioValue: 1247.50,
      activeStrategy: 'Moderate Growth'
    },
    preferences: {
      riskTolerance: 'Moderate',
      investmentGoal: 'Long-term Growth',
      autoRebalance: true,
      notifications: true
    }
  };

  const verificationItems = [
    { key: 'email', label: 'Email Verification', status: userProfile.verification.email, icon: FaEnvelope },
    { key: 'phone', label: 'Phone Verification', status: userProfile.verification.phone, icon: FaPhone },
    { key: 'identity', label: 'Identity Verification', status: userProfile.verification.identity, icon: FaUser },
    { key: 'address', label: 'Address Verification', status: userProfile.verification.address, icon: FaMapMarkerAlt }
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
            My Profile
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-[var(--space-6)]">
        {/* Header */}
        <div className="mb-[var(--space-8)]">
          <h1 className="text-3xl font-bold text-[var(--text)] mb-[var(--space-2)]">
            My Profile
          </h1>
          <p className="text-[var(--text-secondary)]">
            Manage your account information and investment preferences
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-[var(--space-8)]">
          {/* Profile Info */}
          <div className="lg:col-span-2 space-y-[var(--space-6)]">
            {/* Basic Information */}
            <Card className="p-[var(--space-6)]">
              <div className="flex items-center justify-between mb-[var(--space-6)]">
                <h2 className="text-xl font-bold text-[var(--text)]">Personal Information</h2>
                <Button variant="outline" className="flex items-center gap-2">
                  <FaEdit />
                  Edit
                </Button>
              </div>
              
              <div className="flex items-start gap-[var(--space-6)]">
                <div className="relative">
                  <div className="w-24 h-24 bg-[var(--surface)] rounded-full flex items-center justify-center border-2 border-[var(--border)]">
                    {userProfile.avatar ? (
                      <img src={userProfile.avatar} alt="Profile" className="w-full h-full rounded-full object-cover" />
                    ) : (
                      <FaUser className="text-3xl text-[var(--text-secondary)]" />
                    )}
                  </div>
                  <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-[var(--primary)] text-white rounded-full flex items-center justify-center hover:bg-[var(--primary-dark)] transition-colors">
                    <FaCamera className="text-sm" />
                  </button>
                </div>
                
                <div className="flex-1 grid md:grid-cols-2 gap-[var(--space-4)]">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Full Name</label>
                    <div className="text-[var(--text)] font-semibold">{userProfile.name}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Email</label>
                    <div className="text-[var(--text)]">{userProfile.email}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Phone</label>
                    <div className="text-[var(--text)]">{userProfile.phone}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Location</label>
                    <div className="text-[var(--text)]">{userProfile.location}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Member Since</label>
                    <div className="text-[var(--text)]">{userProfile.joinDate}</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Investment Summary */}
            <Card className="p-[var(--space-6)]">
              <h2 className="text-xl font-bold text-[var(--text)] mb-[var(--space-6)]">Investment Summary</h2>
              <div className="grid md:grid-cols-2 gap-[var(--space-6)]">
                <div className="space-y-[var(--space-4)]">
                  <div className="flex justify-between items-center p-[var(--space-4)] bg-[var(--surface)] rounded-[var(--radius-lg)]">
                    <span className="text-[var(--text-secondary)]">Total Invested</span>
                    <span className="font-bold text-[var(--text)]">${userProfile.stats.totalInvested.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-[var(--space-4)] bg-[var(--surface)] rounded-[var(--radius-lg)]">
                    <span className="text-[var(--text-secondary)]">Total Returns</span>
                    <span className="font-bold text-[var(--success)]">+${userProfile.stats.totalReturns}</span>
                  </div>
                </div>
                <div className="space-y-[var(--space-4)]">
                  <div className="flex justify-between items-center p-[var(--space-4)] bg-[var(--surface)] rounded-[var(--radius-lg)]">
                    <span className="text-[var(--text-secondary)]">Portfolio Value</span>
                    <span className="font-bold text-[var(--text)]">${userProfile.stats.portfolioValue}</span>
                  </div>
                  <div className="flex justify-between items-center p-[var(--space-4)] bg-[var(--surface)] rounded-[var(--radius-lg)]">
                    <span className="text-[var(--text-secondary)]">Active Strategy</span>
                    <span className="font-bold text-[var(--text)]">{userProfile.stats.activeStrategy}</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Investment Preferences */}
            <Card className="p-[var(--space-6)]">
              <div className="flex items-center justify-between mb-[var(--space-6)]">
                <h2 className="text-xl font-bold text-[var(--text)]">Investment Preferences</h2>
                <Button variant="outline" className="flex items-center gap-2">
                  <FaEdit />
                  Modify
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-[var(--space-4)]">
                <div className="p-[var(--space-4)] bg-[var(--surface)] rounded-[var(--radius-lg)]">
                  <div className="text-sm text-[var(--text-secondary)] mb-1">Risk Tolerance</div>
                  <div className="font-semibold text-[var(--text)]">{userProfile.preferences.riskTolerance}</div>
                </div>
                <div className="p-[var(--space-4)] bg-[var(--surface)] rounded-[var(--radius-lg)]">
                  <div className="text-sm text-[var(--text-secondary)] mb-1">Investment Goal</div>
                  <div className="font-semibold text-[var(--text)]">{userProfile.preferences.investmentGoal}</div>
                </div>
                <div className="p-[var(--space-4)] bg-[var(--surface)] rounded-[var(--radius-lg)]">
                  <div className="text-sm text-[var(--text-secondary)] mb-1">Auto Rebalancing</div>
                  <div className="font-semibold text-[var(--success)]">
                    {userProfile.preferences.autoRebalance ? 'Enabled' : 'Disabled'}
                  </div>
                </div>
                <div className="p-[var(--space-4)] bg-[var(--surface)] rounded-[var(--radius-lg)]">
                  <div className="text-sm text-[var(--text-secondary)] mb-1">Notifications</div>
                  <div className="font-semibold text-[var(--success)]">
                    {userProfile.preferences.notifications ? 'Enabled' : 'Disabled'}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-[var(--space-6)]">
            {/* Account Status */}
            <Card className="p-[var(--space-6)]">
              <h3 className="text-lg font-bold text-[var(--text)] mb-[var(--space-4)] flex items-center gap-2">
                <FaShieldAlt className="text-[var(--primary)]" />
                Account Status
              </h3>
              <div className="space-y-[var(--space-3)]">
                {verificationItems.map((item, i) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={i} className="flex items-center justify-between p-[var(--space-3)] bg-[var(--surface)] rounded-[var(--radius-lg)]">
                      <div className="flex items-center gap-[var(--space-3)]">
                        <IconComponent className="text-[var(--text-secondary)]" />
                        <span className="text-sm text-[var(--text)]">{item.label}</span>
                      </div>
                      {item.status ? (
                        <FaCheckCircle className="text-[var(--success)]" />
                      ) : (
                        <FaExclamationTriangle className="text-[var(--warning)]" />
                      )}
                    </div>
                  );
                })}
              </div>
              
              {!userProfile.verification.address && (
                <div className="mt-[var(--space-4)]">
                  <Button className="w-full gradient-primary text-white">
                    Complete Verification
                  </Button>
                </div>
              )}
            </Card>

            {/* Quick Actions */}
            <Card className="p-[var(--space-6)]">
              <h3 className="text-lg font-bold text-[var(--text)] mb-[var(--space-4)]">Quick Actions</h3>
              <div className="space-y-[var(--space-3)]">
                <Link to="/settings">
                  <Button variant="outline" className="w-full justify-start">
                    Account Settings
                  </Button>
                </Link>
                <Link to="/help">
                  <Button variant="outline" className="w-full justify-start">
                    Help & Support
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start text-[var(--error)] border-[var(--error)] hover:bg-[var(--error)] hover:text-white">
                  Sign Out
                </Button>
              </div>
            </Card>

            {/* Account Stats */}
            <Card className="p-[var(--space-6)]">
              <h3 className="text-lg font-bold text-[var(--text)] mb-[var(--space-4)]">Account Stats</h3>
              <div className="space-y-[var(--space-3)]">
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Total Transactions</span>
                  <span className="font-semibold text-[var(--text)]">47</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Success Rate</span>
                  <span className="font-semibold text-[var(--success)]">100%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Avg Monthly Return</span>
                  <span className="font-semibold text-[var(--success)]">+24.7%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};