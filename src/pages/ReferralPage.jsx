import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBitcoin, FaArrowLeft, FaGift, FaUsers, FaCopy, FaShare, FaTrophy, FaCoins, FaCheckCircle, FaTwitter, FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';

export const ReferralPage = () => {
  const [copied, setCopied] = useState(false);
  
  const referralCode = 'ALEX2024';
  const referralLink = `https://cryptovault.com/signup?ref=${referralCode}`;

  const stats = {
    totalReferrals: 12,
    activeReferrals: 8,
    totalEarned: 485.50,
    pendingRewards: 125.00,
    thisMonth: 85.50
  };

  const recentReferrals = [
    { name: 'Sarah M.', date: '2024-01-15', status: 'active', reward: 50.00, investment: 1000 },
    { name: 'Mike R.', date: '2024-01-12', status: 'active', reward: 25.00, investment: 500 },
    { name: 'Lisa K.', date: '2024-01-10', status: 'pending', reward: 75.00, investment: 1500 },
    { name: 'John D.', date: '2024-01-08', status: 'active', reward: 30.00, investment: 600 }
  ];

  const rewardTiers = [
    { min: 0, max: 999, rate: '2.5%', bonus: '$25' },
    { min: 1000, max: 4999, rate: '3.0%', bonus: '$50' },
    { min: 5000, max: 9999, rate: '3.5%', bonus: '$100' },
    { min: 10000, max: null, rate: '4.0%', bonus: '$200' }
  ];

  const leaderboard = [
    { rank: 1, name: 'CryptoKing', referrals: 47, earnings: 2850 },
    { rank: 2, name: 'InvestorPro', referrals: 39, earnings: 2340 },
    { rank: 3, name: 'Alex J. (You)', referrals: 12, earnings: 485.50 },
    { rank: 4, name: 'TradeMaster', referrals: 11, earnings: 445 },
    { rank: 5, name: 'CoinWhale', referrals: 9, earnings: 380 }
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOptions = [
    { name: 'Twitter', icon: FaTwitter, color: '#1DA1F2', url: `https://twitter.com/intent/tweet?text=Join me on CryptoVault and start earning crypto returns!&url=${referralLink}` },
    { name: 'Facebook', icon: FaFacebook, color: '#4267B2', url: `https://www.facebook.com/sharer/sharer.php?u=${referralLink}` },
    { name: 'LinkedIn', icon: FaLinkedin, color: '#0077B5', url: `https://www.linkedin.com/sharing/share-offsite/?url=${referralLink}` },
    { name: 'WhatsApp', icon: FaWhatsapp, color: '#25D366', url: `https://wa.me/?text=Join me on CryptoVault and start earning crypto returns! ${referralLink}` }
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
          <div className="flex items-center gap-2 text-[var(--text-secondary)]">
            <FaGift />
            <span>Referral Program</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-[var(--space-6)]">
        {/* Header */}
        <div className="text-center mb-[var(--space-8)]">
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text)] mb-[var(--space-4)]">
            Earn with Every Referral 🎁
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            Share CryptoVault with friends and earn up to 4% of their investment plus bonus rewards
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-[var(--space-4)] mb-[var(--space-8)]">
          <Card className="p-[var(--space-4)] text-center">
            <div className="text-2xl font-bold text-[var(--primary)]">{stats.totalReferrals}</div>
            <div className="text-sm text-[var(--text-secondary)]">Total Referrals</div>
          </Card>
          <Card className="p-[var(--space-4)] text-center">
            <div className="text-2xl font-bold text-[var(--success)]">{stats.activeReferrals}</div>
            <div className="text-sm text-[var(--text-secondary)]">Active Users</div>
          </Card>
          <Card className="p-[var(--space-4)] text-center">
            <div className="text-2xl font-bold text-[var(--secondary)]">${stats.totalEarned}</div>
            <div className="text-sm text-[var(--text-secondary)]">Total Earned</div>
          </Card>
          <Card className="p-[var(--space-4)] text-center">
            <div className="text-2xl font-bold text-[var(--warning)]">${stats.pendingRewards}</div>
            <div className="text-sm text-[var(--text-secondary)]">Pending</div>
          </Card>
          <Card className="p-[var(--space-4)] text-center">
            <div className="text-2xl font-bold text-[var(--accent)]">${stats.thisMonth}</div>
            <div className="text-sm text-[var(--text-secondary)]">This Month</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-[var(--space-8)]">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-[var(--space-6)]">
            {/* Referral Link */}
            <Card className="p-[var(--space-6)]">
              <h2 className="text-xl font-bold text-[var(--text)] mb-[var(--space-4)]">Your Referral Link</h2>
              <div className="flex gap-[var(--space-3)] mb-[var(--space-4)]">
                <Input
                  value={referralLink}
                  readOnly
                  className="flex-1"
                />
                <Button
                  onClick={copyToClipboard}
                  className="gradient-primary text-white flex items-center gap-2"
                >
                  {copied ? <FaCheckCircle /> : <FaCopy />}
                  {copied ? 'Copied!' : 'Copy'}
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-[var(--space-3)]">
                {shareOptions.map((option, i) => {
                  const IconComponent = option.icon;
                  return (
                    <a
                      key={i}
                      href={option.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-[var(--radius-lg)] border border-[var(--border)] hover:shadow-[var(--shadow-md)] transition-all"
                      style={{ color: option.color }}
                    >
                      <IconComponent />
                      {option.name}
                    </a>
                  );
                })}
              </div>
            </Card>

            {/* How It Works */}
            <Card className="p-[var(--space-6)]">
              <h2 className="text-xl font-bold text-[var(--text)] mb-[var(--space-6)]">How It Works</h2>
              <div className="grid md:grid-cols-3 gap-[var(--space-6)]">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-[var(--space-3)]">
                    <FaShare className="text-2xl text-[var(--primary)]" />
                  </div>
                  <h3 className="font-bold text-[var(--text)] mb-[var(--space-2)]">1. Share Your Link</h3>
                  <p className="text-sm text-[var(--text-secondary)]">Send your unique referral link to friends and family</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--secondary)]/10 rounded-full flex items-center justify-center mx-auto mb-[var(--space-3)]">
                    <FaUsers className="text-2xl text-[var(--secondary)]" />
                  </div>
                  <h3 className="font-bold text-[var(--text)] mb-[var(--space-2)]">2. They Sign Up</h3>
                  <p className="text-sm text-[var(--text-secondary)]">Your friends create an account and start investing</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--success)]/10 rounded-full flex items-center justify-center mx-auto mb-[var(--space-3)]">
                    <FaCoins className="text-2xl text-[var(--success)]" />
                  </div>
                  <h3 className="font-bold text-[var(--text)] mb-[var(--space-2)]">3. You Earn Rewards</h3>
                  <p className="text-sm text-[var(--text-secondary)]">Get percentage of their investment plus bonuses</p>
                </div>
              </div>
            </Card>

            {/* Recent Referrals */}
            <Card className="p-[var(--space-6)]">
              <h2 className="text-xl font-bold text-[var(--text)] mb-[var(--space-6)]">Recent Referrals</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      <th className="text-left p-[var(--space-3)] text-[var(--text-secondary)] font-medium">Friend</th>
                      <th className="text-left p-[var(--space-3)] text-[var(--text-secondary)] font-medium">Date</th>
                      <th className="text-center p-[var(--space-3)] text-[var(--text-secondary)] font-medium">Status</th>
                      <th className="text-right p-[var(--space-3)] text-[var(--text-secondary)] font-medium">Investment</th>
                      <th className="text-right p-[var(--space-3)] text-[var(--text-secondary)] font-medium">Your Reward</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentReferrals.map((referral, i) => (
                      <tr key={i} className="border-b border-[var(--border)] hover:bg-[var(--surface)]">
                        <td className="p-[var(--space-3)] font-semibold text-[var(--text)]">{referral.name}</td>
                        <td className="p-[var(--space-3)] text-[var(--text-secondary)]">{referral.date}</td>
                        <td className="p-[var(--space-3)] text-center">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            referral.status === 'active' 
                              ? 'bg-[var(--success)]/10 text-[var(--success)]'
                              : 'bg-[var(--warning)]/10 text-[var(--warning)]'
                          }`}>
                            {referral.status}
                          </span>
                        </td>
                        <td className="p-[var(--space-3)] text-right font-semibold text-[var(--text)]">
                          ${referral.investment}
                        </td>
                        <td className="p-[var(--space-3)] text-right font-bold text-[var(--success)]">
                          ${referral.reward}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-[var(--space-6)]">
            {/* Reward Tiers */}
            <Card className="p-[var(--space-6)]">
              <h3 className="text-lg font-bold text-[var(--text)] mb-[var(--space-4)]">Reward Tiers</h3>
              <div className="space-y-[var(--space-3)]">
                {rewardTiers.map((tier, i) => (
                  <div key={i} className="p-[var(--space-3)] bg-[var(--surface)] rounded-[var(--radius-lg)]">
                    <div className="font-semibold text-[var(--text)]">
                      ${tier.min.toLocaleString()}{tier.max ? ` - $${tier.max.toLocaleString()}` : '+'}
                    </div>
                    <div className="text-sm text-[var(--text-secondary)]">
                      {tier.rate} commission + {tier.bonus} bonus
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Leaderboard */}
            <Card className="p-[var(--space-6)]">
              <h3 className="text-lg font-bold text-[var(--text)] mb-[var(--space-4)] flex items-center gap-2">
                <FaTrophy className="text-[var(--warning)]" />
                Leaderboard
              </h3>
              <div className="space-y-[var(--space-3)]">
                {leaderboard.map((user, i) => (
                  <div key={i} className={`flex items-center justify-between p-[var(--space-3)] rounded-[var(--radius-lg)] ${
                    user.name.includes('You') ? 'bg-[var(--primary)]/10 border border-[var(--primary)]/20' : 'bg-[var(--surface)]'
                  }`}>
                    <div className="flex items-center gap-[var(--space-3)]">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        user.rank === 1 ? 'bg-[var(--warning)] text-white' :
                        user.rank === 2 ? 'bg-[var(--text-secondary)] text-white' :
                        user.rank === 3 ? 'bg-[var(--accent)] text-white' :
                        'bg-[var(--surface)] text-[var(--text)]'
                      }`}>
                        {user.rank}
                      </div>
                      <div>
                        <div className="font-semibold text-[var(--text)]">{user.name}</div>
                        <div className="text-xs text-[var(--text-secondary)]">{user.referrals} referrals</div>
                      </div>
                    </div>
                    <div className="font-bold text-[var(--success)]">${user.earnings}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-[var(--space-6)]">
              <h3 className="text-lg font-bold text-[var(--text)] mb-[var(--space-4)]">Quick Actions</h3>
              <div className="space-y-[var(--space-3)]">
                <Button variant="outline" className="w-full justify-start">
                  View All Referrals
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Withdraw Rewards
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Program Terms
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};