import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBitcoin, FaArrowLeft, FaBell, FaCheckCircle, FaExclamationTriangle, FaInfoCircle, FaShieldAlt, FaWallet, FaChartLine, FaRocket, FaTrash, FaCheck } from 'react-icons/fa';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export const NotificationsPage = () => {
  const [filter, setFilter] = useState('all');

  const notifications = [
    {
      id: 1,
      type: 'success',
      icon: FaCheckCircle,
      title: 'Deposit Confirmed',
      message: 'Your $1,000 deposit has been successfully processed and added to your portfolio.',
      time: '2 hours ago',
      read: false,
      category: 'transaction'
    },
    {
      id: 2,
      type: 'info',
      icon: FaRocket,
      title: 'Portfolio Rebalanced',
      message: 'AI has automatically rebalanced your portfolio for optimal performance (+2.1% gain).',
      time: '4 hours ago',
      read: false,
      category: 'portfolio'
    },
    {
      id: 3,
      type: 'warning',
      icon: FaExclamationTriangle,
      title: 'Market Alert',
      message: 'Bitcoin price dropped 5% in the last hour. Your stop-loss orders remain active.',
      time: '6 hours ago',
      read: true,
      category: 'market'
    },
    {
      id: 4,
      type: 'success',
      icon: FaChartLine,
      title: 'Monthly Report Ready',
      message: 'Your January investment report is now available. Portfolio gained 24.7% this month.',
      time: '1 day ago',
      read: true,
      category: 'report'
    },
    {
      id: 5,
      type: 'info',
      icon: FaShieldAlt,
      title: 'Security Update',
      message: 'New security features have been added to your account. Review your settings.',
      time: '2 days ago',
      read: false,
      category: 'security'
    },
    {
      id: 6,
      type: 'success',
      icon: FaWallet,
      title: 'Yield Earned',
      message: 'You earned $47.20 in DeFi yield rewards. Funds have been added to your portfolio.',
      time: '3 days ago',
      read: true,
      category: 'transaction'
    },
    {
      id: 7,
      type: 'info',
      icon: FaInfoCircle,
      title: 'Strategy Optimization',
      message: 'Your Moderate Growth strategy has been updated with new market conditions.',
      time: '5 days ago',
      read: true,
      category: 'portfolio'
    }
  ];

  const filterOptions = [
    { id: 'all', label: 'All Notifications', count: notifications.length },
    { id: 'unread', label: 'Unread', count: notifications.filter(n => !n.read).length },
    { id: 'transaction', label: 'Transactions', count: notifications.filter(n => n.category === 'transaction').length },
    { id: 'portfolio', label: 'Portfolio', count: notifications.filter(n => n.category === 'portfolio').length },
    { id: 'security', label: 'Security', count: notifications.filter(n => n.category === 'security').length }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'success': return 'text-[var(--success)] bg-[var(--success)]/10';
      case 'warning': return 'text-[var(--warning)] bg-[var(--warning)]/10';
      case 'info': return 'text-[var(--primary)] bg-[var(--primary)]/10';
      default: return 'text-[var(--text-secondary)] bg-[var(--surface)]';
    }
  };

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !notification.read;
    return notification.category === filter;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

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
          <div className="flex items-center gap-2 text-[var(--text-secondary)]">
            <FaBell />
            <span>Notifications</span>
            {unreadCount > 0 && (
              <span className="bg-[var(--primary)] text-white text-xs px-2 py-1 rounded-full">
                {unreadCount}
              </span>
            )}
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto p-[var(--space-6)]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-[var(--space-8)]">
          <div>
            <h1 className="text-3xl font-bold text-[var(--text)] mb-[var(--space-2)]">
              Notifications
            </h1>
            <p className="text-[var(--text-secondary)]">
              Stay updated with your portfolio and account activity
            </p>
          </div>
          <div className="flex gap-[var(--space-3)] mt-4 sm:mt-0">
            <Button variant="outline" className="flex items-center gap-2">
              <FaCheck />
              Mark All Read
            </Button>
            <Button variant="outline" className="flex items-center gap-2 text-[var(--error)] border-[var(--error)] hover:bg-[var(--error)] hover:text-white">
              <FaTrash />
              Clear All
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card className="p-[var(--space-4)] mb-[var(--space-6)]">
          <div className="flex flex-wrap gap-[var(--space-2)]">
            {filterOptions.map(option => (
              <button
                key={option.id}
                onClick={() => setFilter(option.id)}
                className={`px-4 py-2 rounded-[var(--radius-lg)] text-sm font-medium transition-all flex items-center gap-2 ${
                  filter === option.id
                    ? 'bg-[var(--primary)] text-white'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--surface)] border border-[var(--border)]'
                }`}
              >
                {option.label}
                <span className={`text-xs px-2 py-1 rounded-full ${
                  filter === option.id ? 'bg-white/20' : 'bg-[var(--surface)]'
                }`}>
                  {option.count}
                </span>
              </button>
            ))}
          </div>
        </Card>

        {/* Notifications List */}
        <div className="space-y-[var(--space-4)]">
          {filteredNotifications.map((notification, i) => {
            const IconComponent = notification.icon;
            return (
              <Card 
                key={i} 
                className={`p-[var(--space-6)] transition-all hover:shadow-[var(--shadow-lg)] ${
                  !notification.read ? 'border-l-4 border-l-[var(--primary)] bg-[var(--primary)]/5' : ''
                }`}
              >
                <div className="flex items-start gap-[var(--space-4)]">
                  <div className={`p-3 rounded-full ${getTypeColor(notification.type)}`}>
                    <IconComponent className="text-lg" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-[var(--space-2)]">
                      <h3 className="font-bold text-[var(--text)]">{notification.title}</h3>
                      <div className="flex items-center gap-[var(--space-2)]">
                        {!notification.read && (
                          <div className="w-2 h-2 bg-[var(--primary)] rounded-full"></div>
                        )}
                        <span className="text-sm text-[var(--text-secondary)]">{notification.time}</span>
                      </div>
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-[var(--space-3)]">
                      {notification.message}
                    </p>
                    
                    <div className="flex items-center gap-[var(--space-3)]">
                      {!notification.read && (
                        <button className="text-sm text-[var(--primary)] hover:underline font-medium">
                          Mark as Read
                        </button>
                      )}
                      <button className="text-sm text-[var(--text-secondary)] hover:text-[var(--error)]">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {filteredNotifications.length === 0 && (
          <Card className="p-[var(--space-12)] text-center">
            <FaBell className="text-4xl text-[var(--text-secondary)] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[var(--text)] mb-2">No Notifications</h3>
            <p className="text-[var(--text-secondary)]">
              {filter === 'unread' 
                ? "You're all caught up! No unread notifications."
                : `No ${filter} notifications found.`}
            </p>
          </Card>
        )}

        {/* Notification Settings */}
        <Card className="p-[var(--space-6)] mt-[var(--space-8)]">
          <h3 className="text-lg font-bold text-[var(--text)] mb-[var(--space-4)]">
            Notification Preferences
          </h3>
          <p className="text-[var(--text-secondary)] mb-[var(--space-4)]">
            Manage how you receive notifications about your account and portfolio.
          </p>
          <Link to="/settings">
            <Button variant="outline">
              Manage Preferences
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};