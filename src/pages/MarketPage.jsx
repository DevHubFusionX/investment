import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBitcoin, FaArrowLeft, FaArrowUp, FaArrowDown, FaEthereum, FaCoins, FaFire, FaSnowflake, FaNewspaper } from 'react-icons/fa';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export const MarketPage = () => {
  const [timeframe, setTimeframe] = useState('24h');

  const marketData = {
    totalMarketCap: 2.1,
    totalVolume: 89.5,
    btcDominance: 52.3,
    fearGreedIndex: 74
  };

  const topCryptos = [
    { symbol: 'BTC', name: 'Bitcoin', price: 43250, change: 5.2, volume: 28.5, marketCap: 847, icon: FaBitcoin },
    { symbol: 'ETH', name: 'Ethereum', price: 2580, change: 8.7, volume: 15.2, marketCap: 310, icon: FaEthereum },
    { symbol: 'BNB', name: 'BNB', price: 315, change: -2.1, volume: 2.1, marketCap: 48, icon: FaCoins },
    { symbol: 'SOL', name: 'Solana', price: 98, change: 12.4, volume: 3.8, marketCap: 42, icon: FaCoins },
    { symbol: 'ADA', name: 'Cardano', price: 0.52, change: 6.8, volume: 1.2, marketCap: 18, icon: FaCoins },
    { symbol: 'AVAX', name: 'Avalanche', price: 36.8, change: -4.2, volume: 0.8, marketCap: 14, icon: FaSnowflake },
    { symbol: 'DOT', name: 'Polkadot', price: 7.2, change: 3.5, volume: 0.6, marketCap: 9, icon: FaCoins },
    { symbol: 'MATIC', name: 'Polygon', price: 0.89, change: 9.1, volume: 0.5, marketCap: 8, icon: FaCoins }
  ];

  const trendingCoins = [
    { symbol: 'PEPE', name: 'Pepe', change: 45.2, reason: 'Meme coin rally' },
    { symbol: 'ARB', name: 'Arbitrum', change: 23.8, reason: 'L2 adoption' },
    { symbol: 'OP', name: 'Optimism', change: 18.5, reason: 'Network upgrade' }
  ];

  const news = [
    {
      title: 'Bitcoin ETF Approval Drives Market Rally',
      summary: 'Major institutional adoption signals continue to boost crypto markets...',
      time: '2 hours ago',
      category: 'Regulation'
    },
    {
      title: 'Ethereum Layer 2 Solutions See Record Usage',
      summary: 'Arbitrum and Optimism report highest transaction volumes...',
      time: '4 hours ago',
      category: 'Technology'
    },
    {
      title: 'DeFi Total Value Locked Reaches New High',
      summary: 'Decentralized finance protocols attract $120B in locked assets...',
      time: '6 hours ago',
      category: 'DeFi'
    }
  ];

  const timeframes = ['1h', '24h', '7d', '30d'];

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
            Market Overview
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-[var(--space-6)]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-[var(--space-8)]">
          <div>
            <h1 className="text-3xl font-bold text-[var(--text)] mb-[var(--space-2)]">
              Crypto Market Overview
            </h1>
            <p className="text-[var(--text-secondary)]">
              Real-time cryptocurrency market data and trends
            </p>
          </div>
          <div className="flex gap-[var(--space-2)] mt-4 sm:mt-0">
            {timeframes.map(tf => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-4 py-2 rounded-[var(--radius-lg)] text-sm font-medium transition-all ${
                  timeframe === tf
                    ? 'bg-[var(--primary)] text-white'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--surface)] border border-[var(--border)]'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>

        {/* Market Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[var(--space-6)] mb-[var(--space-8)]">
          <Card className="p-[var(--space-6)] text-center">
            <h3 className="text-sm font-medium text-[var(--text-secondary)] mb-[var(--space-2)]">Total Market Cap</h3>
            <div className="text-2xl font-bold text-[var(--text)] mb-[var(--space-1)]">
              ${marketData.totalMarketCap}T
            </div>
            <div className="flex items-center justify-center gap-1 text-[var(--success)]">
              <FaArrowUp className="text-sm" />
              <span className="text-sm">+3.2%</span>
            </div>
          </Card>

          <Card className="p-[var(--space-6)] text-center">
            <h3 className="text-sm font-medium text-[var(--text-secondary)] mb-[var(--space-2)]">24h Volume</h3>
            <div className="text-2xl font-bold text-[var(--text)] mb-[var(--space-1)]">
              ${marketData.totalVolume}B
            </div>
            <div className="flex items-center justify-center gap-1 text-[var(--success)]">
              <FaArrowUp className="text-sm" />
              <span className="text-sm">+8.5%</span>
            </div>
          </Card>

          <Card className="p-[var(--space-6)] text-center">
            <h3 className="text-sm font-medium text-[var(--text-secondary)] mb-[var(--space-2)]">BTC Dominance</h3>
            <div className="text-2xl font-bold text-[var(--text)] mb-[var(--space-1)]">
              {marketData.btcDominance}%
            </div>
            <div className="flex items-center justify-center gap-1 text-[var(--error)]">
              <FaArrowDown className="text-sm" />
              <span className="text-sm">-0.8%</span>
            </div>
          </Card>

          <Card className="p-[var(--space-6)] text-center">
            <h3 className="text-sm font-medium text-[var(--text-secondary)] mb-[var(--space-2)]">Fear & Greed</h3>
            <div className="text-2xl font-bold text-[var(--success)] mb-[var(--space-1)]">
              {marketData.fearGreedIndex}
            </div>
            <div className="text-sm text-[var(--success)]">Greed</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-[var(--space-8)]">
          {/* Top Cryptocurrencies */}
          <div className="lg:col-span-2">
            <Card className="p-[var(--space-6)]">
              <h3 className="text-xl font-bold text-[var(--text)] mb-[var(--space-6)]">Top Cryptocurrencies</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      <th className="text-left p-[var(--space-3)] text-[var(--text-secondary)] font-medium">#</th>
                      <th className="text-left p-[var(--space-3)] text-[var(--text-secondary)] font-medium">Name</th>
                      <th className="text-right p-[var(--space-3)] text-[var(--text-secondary)] font-medium">Price</th>
                      <th className="text-right p-[var(--space-3)] text-[var(--text-secondary)] font-medium">24h %</th>
                      <th className="text-right p-[var(--space-3)] text-[var(--text-secondary)] font-medium">Volume</th>
                      <th className="text-right p-[var(--space-3)] text-[var(--text-secondary)] font-medium">Market Cap</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topCryptos.map((crypto, i) => {
                      const IconComponent = crypto.icon;
                      return (
                        <tr key={i} className="border-b border-[var(--border)] hover:bg-[var(--surface)] transition-colors">
                          <td className="p-[var(--space-3)] text-[var(--text-secondary)]">{i + 1}</td>
                          <td className="p-[var(--space-3)]">
                            <div className="flex items-center gap-[var(--space-3)]">
                              <IconComponent className="text-xl text-[var(--primary)]" />
                              <div>
                                <div className="font-semibold text-[var(--text)]">{crypto.symbol}</div>
                                <div className="text-sm text-[var(--text-secondary)]">{crypto.name}</div>
                              </div>
                            </div>
                          </td>
                          <td className="text-right p-[var(--space-3)] font-bold text-[var(--text)]">
                            ${crypto.price.toLocaleString()}
                          </td>
                          <td className="text-right p-[var(--space-3)]">
                            <div className={`flex items-center justify-end gap-1 ${
                              crypto.change >= 0 ? 'text-[var(--success)]' : 'text-[var(--error)]'
                            }`}>
                              {crypto.change >= 0 ? <FaArrowUp /> : <FaArrowDown />}
                              <span className="font-medium">{Math.abs(crypto.change)}%</span>
                            </div>
                          </td>
                          <td className="text-right p-[var(--space-3)] text-[var(--text-secondary)]">
                            ${crypto.volume}B
                          </td>
                          <td className="text-right p-[var(--space-3)] text-[var(--text-secondary)]">
                            ${crypto.marketCap}B
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-[var(--space-6)]">
            {/* Trending */}
            <Card className="p-[var(--space-6)]">
              <h3 className="text-lg font-bold text-[var(--text)] mb-[var(--space-4)] flex items-center gap-2">
                <FaFire className="text-[var(--warning)]" />
                Trending
              </h3>
              <div className="space-y-[var(--space-3)]">
                {trendingCoins.map((coin, i) => (
                  <div key={i} className="flex items-center justify-between p-[var(--space-3)] bg-[var(--surface)] rounded-[var(--radius-lg)]">
                    <div>
                      <div className="font-semibold text-[var(--text)]">{coin.symbol}</div>
                      <div className="text-xs text-[var(--text-secondary)]">{coin.reason}</div>
                    </div>
                    <div className="text-[var(--success)] font-bold">+{coin.change}%</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Market News */}
            <Card className="p-[var(--space-6)]">
              <h3 className="text-lg font-bold text-[var(--text)] mb-[var(--space-4)] flex items-center gap-2">
                <FaNewspaper className="text-[var(--accent)]" />
                Latest News
              </h3>
              <div className="space-y-[var(--space-4)]">
                {news.map((article, i) => (
                  <div key={i} className="border-b border-[var(--border)] pb-[var(--space-3)] last:border-b-0">
                    <div className="font-semibold text-[var(--text)] mb-[var(--space-1)] text-sm leading-tight">
                      {article.title}
                    </div>
                    <div className="text-xs text-[var(--text-secondary)] mb-[var(--space-2)]">
                      {article.summary}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs bg-[var(--primary)]/10 text-[var(--primary)] px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-[var(--text-secondary)]">{article.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};