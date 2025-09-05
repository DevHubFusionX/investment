import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBitcoin, FaArrowLeft, FaEthereum, FaChartLine, FaArrowUp, FaArrowDown, FaDownload, FaFilter, FaCoins } from 'react-icons/fa';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export const PortfolioPage = () => {
  const [timeframe, setTimeframe] = useState('1M');

  const portfolioData = {
    totalValue: 1247.50,
    totalChange: 12.5,
    totalChangeAmount: 138.47,
    assets: [
      {
        symbol: 'BTC',
        name: 'Bitcoin',
        icon: FaBitcoin,
        amount: 0.0287,
        value: 498.90,
        percentage: 40.0,
        change: 8.2,
        color: 'var(--primary)'
      },
      {
        symbol: 'ETH',
        name: 'Ethereum',
        icon: FaEthereum,
        amount: 0.1456,
        value: 374.25,
        percentage: 30.0,
        change: 15.7,
        color: 'var(--accent)'
      },
      {
        symbol: 'DEFI',
        name: 'DeFi Tokens',
        icon: FaCoins,
        amount: 125.67,
        value: 249.50,
        percentage: 20.0,
        change: 22.1,
        color: 'var(--secondary)'
      },
      {
        symbol: 'USDC',
        name: 'USD Coin',
        icon: FaCoins,
        amount: 124.85,
        value: 124.85,
        percentage: 10.0,
        change: 0.1,
        color: 'var(--success)'
      }
    ],
    transactions: [
      { type: 'Buy', asset: 'BTC', amount: '+0.0050', value: '$173.50', date: '2024-01-15', status: 'Completed' },
      { type: 'Rebalance', asset: 'Portfolio', amount: 'Auto', value: '+2.1%', date: '2024-01-14', status: 'Completed' },
      { type: 'Yield', asset: 'DEFI', amount: '+12.5', value: '$47.20', date: '2024-01-13', status: 'Completed' },
      { type: 'Buy', asset: 'ETH', amount: '+0.0250', value: '$82.75', date: '2024-01-12', status: 'Completed' },
      { type: 'Deposit', asset: 'USD', amount: '+$1,000', value: '$1,000', date: '2024-01-10', status: 'Completed' }
    ]
  };

  const timeframes = ['1D', '1W', '1M', '3M', '1Y', 'ALL'];

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
            Portfolio Details
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-[var(--space-6)]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-[var(--space-8)]">
          <div>
            <h1 className="text-3xl font-bold text-[var(--text)] mb-[var(--space-2)]">
              Portfolio Overview
            </h1>
            <p className="text-[var(--text-secondary)]">
              Track your investments and performance metrics
            </p>
          </div>
          <div className="flex gap-[var(--space-3)] mt-4 sm:mt-0">
            <Button variant="outline" className="flex items-center gap-2">
              <FaDownload />
              Export
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <FaFilter />
              Filter
            </Button>
          </div>
        </div>

        {/* Portfolio Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-6)] mb-[var(--space-8)]">
          <Card className="p-[var(--space-6)] gradient-primary text-white">
            <h3 className="text-lg font-medium mb-[var(--space-2)] opacity-90">Total Portfolio Value</h3>
            <div className="text-4xl font-bold mb-[var(--space-2)]">
              ${portfolioData.totalValue.toLocaleString()}
            </div>
            <div className="flex items-center gap-2">
              <FaArrowUp className="text-green-300" />
              <span>+${portfolioData.totalChangeAmount} ({portfolioData.totalChange}%)</span>
            </div>
          </Card>

          <Card className="p-[var(--space-6)]">
            <h3 className="text-lg font-medium text-[var(--text)] mb-[var(--space-2)]">24h Performance</h3>
            <div className="text-3xl font-bold text-[var(--success)] mb-[var(--space-2)]">+12.5%</div>
            <div className="text-sm text-[var(--text-secondary)]">All assets performing well</div>
          </Card>

          <Card className="p-[var(--space-6)]">
            <h3 className="text-lg font-medium text-[var(--text)] mb-[var(--space-2)]">Total Assets</h3>
            <div className="text-3xl font-bold text-[var(--text)] mb-[var(--space-2)]">{portfolioData.assets.length}</div>
            <div className="text-sm text-[var(--text-secondary)]">Diversified portfolio</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-[var(--space-8)]">
          {/* Performance Chart */}
          <div className="lg:col-span-2">
            <Card className="p-[var(--space-6)]">
              <div className="flex justify-between items-center mb-[var(--space-6)]">
                <h3 className="text-xl font-bold text-[var(--text)]">Performance Chart</h3>
                <div className="flex gap-[var(--space-2)]">
                  {timeframes.map(tf => (
                    <button
                      key={tf}
                      onClick={() => setTimeframe(tf)}
                      className={`px-3 py-1 rounded-[var(--radius-lg)] text-sm font-medium transition-all ${
                        timeframe === tf
                          ? 'bg-[var(--primary)] text-white'
                          : 'text-[var(--text-secondary)] hover:bg-[var(--surface)]'
                      }`}
                    >
                      {tf}
                    </button>
                  ))}
                </div>
              </div>
              <div className="h-80 bg-[var(--surface)] rounded-[var(--radius-lg)] flex items-center justify-center">
                <div className="text-center">
                  <FaChartLine className="text-6xl text-[var(--primary)] mx-auto mb-4" />
                  <p className="text-[var(--text-secondary)] text-lg">Interactive Chart Coming Soon</p>
                  <p className="text-[var(--text-secondary)] text-sm mt-2">
                    Portfolio performance visualization for {timeframe} timeframe
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Asset Allocation */}
          <div>
            <Card className="p-[var(--space-6)]">
              <h3 className="text-xl font-bold text-[var(--text)] mb-[var(--space-6)]">Asset Allocation</h3>
              <div className="space-y-[var(--space-4)]">
                {portfolioData.assets.map((asset, i) => {
                  const IconComponent = asset.icon;
                  return (
                    <div key={i} className="flex items-center justify-between p-[var(--space-4)] bg-[var(--surface)] rounded-[var(--radius-lg)]">
                      <div className="flex items-center gap-[var(--space-3)]">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: `${asset.color}20` }}>
                          <IconComponent className="text-lg" style={{ color: asset.color }} />
                        </div>
                        <div>
                          <div className="font-semibold text-[var(--text)]">{asset.symbol}</div>
                          <div className="text-sm text-[var(--text-secondary)]">{asset.name}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-[var(--text)]">${asset.value}</div>
                        <div className="text-sm text-[var(--text-secondary)]">{asset.percentage}%</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>

        {/* Asset Details */}
        <Card className="p-[var(--space-6)] mt-[var(--space-8)]">
          <h3 className="text-xl font-bold text-[var(--text)] mb-[var(--space-6)]">Asset Holdings</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="text-left p-[var(--space-3)] text-[var(--text-secondary)] font-medium">Asset</th>
                  <th className="text-right p-[var(--space-3)] text-[var(--text-secondary)] font-medium">Holdings</th>
                  <th className="text-right p-[var(--space-3)] text-[var(--text-secondary)] font-medium">Value</th>
                  <th className="text-right p-[var(--space-3)] text-[var(--text-secondary)] font-medium">24h Change</th>
                  <th className="text-right p-[var(--space-3)] text-[var(--text-secondary)] font-medium">Allocation</th>
                </tr>
              </thead>
              <tbody>
                {portfolioData.assets.map((asset, i) => {
                  const IconComponent = asset.icon;
                  return (
                    <tr key={i} className="border-b border-[var(--border)] hover:bg-[var(--surface)]">
                      <td className="p-[var(--space-3)]">
                        <div className="flex items-center gap-[var(--space-3)]">
                          <IconComponent className="text-xl" style={{ color: asset.color }} />
                          <div>
                            <div className="font-semibold text-[var(--text)]">{asset.symbol}</div>
                            <div className="text-sm text-[var(--text-secondary)]">{asset.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="text-right p-[var(--space-3)] font-medium text-[var(--text)]">
                        {asset.amount}
                      </td>
                      <td className="text-right p-[var(--space-3)] font-bold text-[var(--text)]">
                        ${asset.value}
                      </td>
                      <td className="text-right p-[var(--space-3)]">
                        <div className={`flex items-center justify-end gap-1 ${
                          asset.change >= 0 ? 'text-[var(--success)]' : 'text-[var(--error)]'
                        }`}>
                          {asset.change >= 0 ? <FaArrowUp /> : <FaArrowDown />}
                          <span className="font-medium">+{asset.change}%</span>
                        </div>
                      </td>
                      <td className="text-right p-[var(--space-3)] font-medium text-[var(--text)]">
                        {asset.percentage}%
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Recent Transactions */}
        <Card className="p-[var(--space-6)] mt-[var(--space-8)]">
          <h3 className="text-xl font-bold text-[var(--text)] mb-[var(--space-6)]">Recent Transactions</h3>
          <div className="space-y-[var(--space-4)]">
            {portfolioData.transactions.map((tx, i) => (
              <div key={i} className="flex items-center justify-between p-[var(--space-4)] bg-[var(--surface)] rounded-[var(--radius-lg)]">
                <div className="flex items-center gap-[var(--space-4)]">
                  <div className={`p-2 rounded-lg ${
                    tx.type === 'Buy' ? 'bg-[var(--success)]/20 text-[var(--success)]' :
                    tx.type === 'Yield' ? 'bg-[var(--secondary)]/20 text-[var(--secondary)]' :
                    'bg-[var(--primary)]/20 text-[var(--primary)]'
                  }`}>
                    {tx.type === 'Buy' ? <FaArrowUp /> : 
                     tx.type === 'Yield' ? <FaCoins /> : <FaChartLine />}
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--text)]">{tx.type} {tx.asset}</div>
                    <div className="text-sm text-[var(--text-secondary)]">{tx.date}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-[var(--text)]">{tx.amount}</div>
                  <div className="text-sm text-[var(--text-secondary)]">{tx.value}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};