import { Link } from 'react-router-dom';
import { FaBitcoin, FaWallet, FaChartLine, FaRocket, FaCog, FaBell, FaUser, FaArrowUp, FaArrowDown, FaGlobe, FaGraduationCap, FaGift } from 'react-icons/fa';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Navigation */}
      <nav className="bg-[var(--surface)] border-b border-[var(--border)] p-[var(--space-4)]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-[var(--space-3)]">
            <FaBitcoin className="text-2xl text-[var(--primary)]" />
            <span className="text-xl font-bold text-gradient">CryptoVault</span>
          </Link>
          <div className="flex items-center gap-[var(--space-4)]">
            <Link to="/notifications">
              <FaBell className="text-xl text-[var(--text-secondary)] cursor-pointer hover:text-[var(--primary)]" />
            </Link>
            <Link to="/profile">
              <FaUser className="text-xl text-[var(--text-secondary)] cursor-pointer hover:text-[var(--primary)]" />
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-[var(--space-6)]">
        {/* Welcome Header */}
        <div className="mb-[var(--space-8)]">
          <h1 className="text-3xl font-bold text-[var(--text)] mb-[var(--space-2)]">
            Welcome back, Alex! 👋
          </h1>
          <p className="text-[var(--text-secondary)]">
            Your portfolio is performing well. Here's your latest update.
          </p>
        </div>

        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-6)] mb-[var(--space-8)]">
          <Card className="p-[var(--space-6)] gradient-primary text-white">
            <h3 className="text-lg font-medium mb-[var(--space-2)] opacity-90">Total Portfolio Value</h3>
            <div className="text-3xl font-bold mb-[var(--space-2)]">$1,247.50</div>
            <div className="flex items-center gap-2 text-sm">
              <FaArrowUp className="text-green-300" />
              <span>+12.5% (24h)</span>
            </div>
          </Card>

          <Card className="p-[var(--space-6)]">
            <h3 className="text-lg font-medium text-[var(--text)] mb-[var(--space-2)]">Monthly Profit</h3>
            <div className="text-3xl font-bold text-[var(--success)] mb-[var(--space-2)]">+$247.50</div>
            <div className="text-sm text-[var(--text-secondary)]">24.75% return</div>
          </Card>

          <Card className="p-[var(--space-6)]">
            <h3 className="text-lg font-medium text-[var(--text)] mb-[var(--space-2)]">Active Strategy</h3>
            <div className="text-xl font-bold text-[var(--text)] mb-[var(--space-2)]">Moderate Growth</div>
            <div className="text-sm text-[var(--success)]">● AI Optimizing</div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-[var(--space-4)] mb-[var(--space-8)]">
          <Link to="/deposit" className="w-full">
            <Button className="w-full h-16 sm:h-20 flex-col gap-1 sm:gap-2 gradient-primary text-white text-sm sm:text-base">
              <FaWallet className="text-lg sm:text-xl" />
              <span>Deposit</span>
            </Button>
          </Link>
          <Link to="/withdraw" className="w-full">
            <Button variant="outline" className="w-full h-16 sm:h-20 flex-col gap-1 sm:gap-2 text-sm sm:text-base">
              <FaArrowDown className="text-lg sm:text-xl" />
              <span>Withdraw</span>
            </Button>
          </Link>
          <Link to="/strategies" className="w-full">
            <Button variant="outline" className="w-full h-16 sm:h-20 flex-col gap-1 sm:gap-2 text-sm sm:text-base">
              <FaRocket className="text-lg sm:text-xl" />
              <span>Strategies</span>
            </Button>
          </Link>
          <Link to="/market" className="w-full">
            <Button variant="outline" className="w-full h-16 sm:h-20 flex-col gap-1 sm:gap-2 text-sm sm:text-base">
              <FaGlobe className="text-lg sm:text-xl" />
              <span>Market</span>
            </Button>
          </Link>
          <Link to="/education" className="w-full">
            <Button variant="outline" className="w-full h-16 sm:h-20 flex-col gap-1 sm:gap-2 text-sm sm:text-base">
              <FaGraduationCap className="text-lg sm:text-xl" />
              <span>Learn</span>
            </Button>
          </Link>
          <Link to="/referral" className="w-full">
            <Button variant="outline" className="w-full h-16 sm:h-20 flex-col gap-1 sm:gap-2 text-sm sm:text-base">
              <FaGift className="text-lg sm:text-xl" />
              <span>Refer</span>
            </Button>
          </Link>
          <Link to="/settings" className="w-full">
            <Button variant="outline" className="w-full h-16 sm:h-20 flex-col gap-1 sm:gap-2 text-sm sm:text-base">
              <FaCog className="text-lg sm:text-xl" />
              <span>Settings</span>
            </Button>
          </Link>
        </div>

        {/* Portfolio Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-6)]">
          <Link to="/portfolio">
            <Card className="p-[var(--space-6)] cursor-pointer hover:shadow-[var(--shadow-xl)] transition-all">
              <h3 className="text-xl font-bold text-[var(--text)] mb-[var(--space-4)]">Portfolio Performance</h3>
              <div className="h-48 bg-[var(--surface)] rounded-[var(--radius-lg)] flex items-center justify-center">
                <div className="text-center">
                  <FaChartLine className="text-4xl text-[var(--primary)] mx-auto mb-2" />
                  <p className="text-[var(--text-secondary)]">Click to view detailed portfolio</p>
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/transactions">
            <Card className="p-[var(--space-6)] cursor-pointer hover:shadow-[var(--shadow-xl)] transition-all">
              <h3 className="text-xl font-bold text-[var(--text)] mb-[var(--space-4)]">Recent Activity</h3>
              <div className="space-y-[var(--space-4)]">
                {[
                  { action: 'AI Rebalanced Portfolio', amount: '+2.1%', time: '2 hours ago', type: 'success' },
                  { action: 'Deposit Processed', amount: '+$1,000', time: '1 day ago', type: 'success' },
                  { action: 'Strategy Optimized', amount: '+1.8%', time: '2 days ago', type: 'success' }
                ].map((activity, i) => (
                  <div key={i} className="flex justify-between items-center p-[var(--space-3)] bg-[var(--surface)] rounded-[var(--radius-lg)]">
                    <div>
                      <div className="font-medium text-[var(--text)]">{activity.action}</div>
                      <div className="text-sm text-[var(--text-secondary)]">{activity.time}</div>
                    </div>
                    <div className="text-[var(--success)] font-bold">{activity.amount}</div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-4 text-[var(--text-secondary)] text-sm">
                Click to view all transactions
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};