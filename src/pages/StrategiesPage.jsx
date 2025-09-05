import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBitcoin, FaArrowLeft, FaRocket, FaShieldAlt, FaChartLine, FaCheckCircle, FaClock, FaExclamationTriangle } from 'react-icons/fa';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export const StrategiesPage = () => {
  const [selectedStrategy, setSelectedStrategy] = useState('moderate');

  const strategies = [
    {
      id: 'conservative',
      title: 'Conservative Growth',
      subtitle: 'Steady & Secure',
      icon: FaShieldAlt,
      expectedReturn: '8-12%',
      risk: 'Low',
      description: 'Focus on stable coins and established protocols with minimal volatility',
      features: [
        'Stablecoin yield farming',
        'Blue-chip crypto staking',
        'Low volatility exposure',
        'Capital preservation focus'
      ],
      allocation: {
        'Stablecoins': 60,
        'Bitcoin': 25,
        'Ethereum': 15
      },
      minAmount: 10,
      color: 'var(--success)'
    },
    {
      id: 'moderate',
      title: 'Moderate Growth',
      subtitle: 'Balanced Approach',
      icon: FaRocket,
      expectedReturn: '15-25%',
      risk: 'Medium',
      description: 'Balanced portfolio with growth potential and managed risk exposure',
      features: [
        'Diversified DeFi protocols',
        'Smart rebalancing',
        'Growth-focused allocation',
        'Risk-adjusted returns'
      ],
      allocation: {
        'DeFi Tokens': 40,
        'Bitcoin': 30,
        'Ethereum': 20,
        'Stablecoins': 10
      },
      minAmount: 50,
      color: 'var(--primary)',
      popular: true
    },
    {
      id: 'aggressive',
      title: 'Aggressive Growth',
      subtitle: 'Maximum Returns',
      icon: FaChartLine,
      expectedReturn: '25-40%',
      risk: 'High',
      description: 'High-growth strategy targeting emerging opportunities and trends',
      features: [
        'Emerging altcoins',
        'Yield farming optimization',
        'Trend-following algorithms',
        'Maximum growth potential'
      ],
      allocation: {
        'Altcoins': 50,
        'DeFi Tokens': 30,
        'Bitcoin': 15,
        'Ethereum': 5
      },
      minAmount: 100,
      color: 'var(--accent)'
    }
  ];

  const currentStrategy = strategies.find(s => s.id === selectedStrategy);

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
            Investment Strategies
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-[var(--space-6)]">
        {/* Header */}
        <div className="text-center mb-[var(--space-8)]">
          <h1 className="text-3xl font-bold text-[var(--text)] mb-[var(--space-2)]">
            Choose Your Strategy
          </h1>
          <p className="text-[var(--text-secondary)]">
            AI-powered investment strategies tailored to your risk tolerance
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-[var(--space-8)]">
          {/* Strategy Selection */}
          <div className="lg:col-span-2">
            <div className="grid gap-[var(--space-6)]">
              {strategies.map(strategy => {
                const IconComponent = strategy.icon;
                return (
                  <Card
                    key={strategy.id}
                    className={`p-[var(--space-6)] cursor-pointer transition-all relative ${
                      selectedStrategy === strategy.id
                        ? 'border-[var(--primary)] bg-[var(--primary)]/5'
                        : 'hover:border-[var(--primary)]/50'
                    }`}
                    onClick={() => setSelectedStrategy(strategy.id)}
                  >
                    {strategy.popular && (
                      <div className="absolute -top-3 left-6 bg-[var(--primary)] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    
                    <div className="flex items-start gap-[var(--space-4)]">
                      <div className="p-3 rounded-xl" style={{ backgroundColor: `${strategy.color}20` }}>
                        <IconComponent className="text-2xl" style={{ color: strategy.color }} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-[var(--space-2)]">
                          <div>
                            <h3 className="text-xl font-bold text-[var(--text)]">{strategy.title}</h3>
                            <p className="text-[var(--text-secondary)]">{strategy.subtitle}</p>
                          </div>
                          {selectedStrategy === strategy.id && (
                            <FaCheckCircle className="text-[var(--primary)] text-xl" />
                          )}
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 mb-[var(--space-4)]">
                          <div>
                            <div className="text-sm text-[var(--text-secondary)]">Expected Return</div>
                            <div className="font-bold text-[var(--text)]">{strategy.expectedReturn}</div>
                          </div>
                          <div>
                            <div className="text-sm text-[var(--text-secondary)]">Risk Level</div>
                            <div className="font-bold" style={{ color: strategy.color }}>{strategy.risk}</div>
                          </div>
                          <div>
                            <div className="text-sm text-[var(--text-secondary)]">Min. Amount</div>
                            <div className="font-bold text-[var(--text)]">${strategy.minAmount}</div>
                          </div>
                        </div>
                        
                        <p className="text-[var(--text-secondary)] mb-[var(--space-4)]">
                          {strategy.description}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-2">
                          {strategy.features.map(feature => (
                            <div key={feature} className="flex items-center gap-2 text-sm">
                              <FaCheckCircle className="text-[var(--success)] text-xs" />
                              <span className="text-[var(--text-secondary)]">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Strategy Details Sidebar */}
          <div>
            <Card className="p-[var(--space-6)] sticky top-[var(--space-6)]">
              <h3 className="text-lg font-bold text-[var(--text)] mb-[var(--space-4)]">
                {currentStrategy?.title} Details
              </h3>
              
              {/* Asset Allocation */}
              <div className="mb-[var(--space-6)]">
                <h4 className="font-semibold text-[var(--text)] mb-[var(--space-3)]">Asset Allocation</h4>
                <div className="space-y-[var(--space-2)]">
                  {Object.entries(currentStrategy?.allocation || {}).map(([asset, percentage]) => (
                    <div key={asset} className="flex justify-between items-center">
                      <span className="text-[var(--text-secondary)]">{asset}</span>
                      <span className="font-semibold text-[var(--text)]">{percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="mb-[var(--space-6)]">
                <h4 className="font-semibold text-[var(--text)] mb-[var(--space-3)]">Performance</h4>
                <div className="space-y-[var(--space-2)]">
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">Expected Return:</span>
                    <span className="font-bold" style={{ color: currentStrategy?.color }}>
                      {currentStrategy?.expectedReturn}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">Risk Level:</span>
                    <span className="font-semibold text-[var(--text)]">{currentStrategy?.risk}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">Rebalancing:</span>
                    <span className="font-semibold text-[var(--text)]">Daily</span>
                  </div>
                </div>
              </div>

              <Button className="w-full gradient-primary text-white mb-[var(--space-4)]">
                Switch to {currentStrategy?.title}
              </Button>

              {/* Disclaimer */}
              <Card className="p-[var(--space-4)] bg-[var(--warning)]/10 border-[var(--warning)]/20">
                <div className="flex items-start gap-[var(--space-2)]">
                  <FaExclamationTriangle className="text-[var(--warning)] mt-1 text-sm" />
                  <div className="text-xs text-[var(--text-secondary)]">
                    <p className="font-semibold mb-1">Risk Disclaimer</p>
                    <p>Past performance doesn't guarantee future results. All investments carry risk of loss.</p>
                  </div>
                </div>
              </Card>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};