import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBitcoin, FaCheckCircle, FaWallet, FaCreditCard, FaUniversity, FaArrowRight } from 'react-icons/fa';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';

export const OnboardingPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    investmentAmount: '',
    riskLevel: 'moderate',
    depositMethod: ''
  });

  const handleNext = () => setStep(step + 1);

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Navigation */}
      <nav className="p-[var(--space-6)] flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-[var(--space-3)]">
          <FaBitcoin className="text-3xl text-[var(--primary)] animate-float" />
          <span className="text-2xl font-bold text-gradient">CryptoVault</span>
        </Link>
        <div className="text-[var(--text-secondary)]">
          Step {step} of 3
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-[var(--space-6)] py-[var(--space-8)]">
        {/* Progress Bar */}
        <div className="mb-[var(--space-12)]">
          <div className="flex justify-between items-center mb-[var(--space-4)]">
            <span className="text-sm font-medium text-[var(--text-secondary)]">Setup Progress</span>
            <span className="text-sm font-medium text-[var(--text-secondary)]">{Math.round((step / 3) * 100)}%</span>
          </div>
          <div className="w-full bg-[var(--border)] rounded-full h-2">
            <div 
              className="gradient-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step 1: Investment Amount */}
        {step === 1 && (
          <Card className="max-w-2xl mx-auto p-[var(--space-8)] animate-fadeIn">
            <div className="text-center mb-[var(--space-8)]">
              <h1 className="text-3xl font-bold text-[var(--text)] mb-[var(--space-4)]">
                Welcome to CryptoVault! 🎉
              </h1>
              <p className="text-[var(--text-secondary)]">
                Let's set up your investment profile. This will help our AI optimize your returns.
              </p>
            </div>

            <div className="space-y-[var(--space-6)]">
              <div>
                <label className="block text-lg font-semibold text-[var(--text)] mb-[var(--space-3)]">
                  How much would you like to start with?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-[var(--space-3)] mb-[var(--space-4)]">
                  {['$10', '$50', '$100', '$500'].map(amount => (
                    <button
                      key={amount}
                      onClick={() => setFormData({...formData, investmentAmount: amount})}
                      className={`p-[var(--space-4)] rounded-[var(--radius-xl)] border-2 font-semibold transition-all ${
                        formData.investmentAmount === amount
                          ? 'border-[var(--primary)] bg-[var(--primary)] text-white'
                          : 'border-[var(--border)] text-[var(--text)] hover:border-[var(--primary)]'
                      }`}
                    >
                      {amount}
                    </button>
                  ))}
                </div>
                <Input
                  placeholder="Or enter custom amount"
                  value={formData.investmentAmount.startsWith('$') ? '' : formData.investmentAmount}
                  onChange={(e) => setFormData({...formData, investmentAmount: e.target.value})}
                />
              </div>

              <div className="bg-[var(--surface)] p-[var(--space-4)] rounded-[var(--radius-xl)]">
                <p className="text-sm text-[var(--text-secondary)]">
                  💡 <strong>Tip:</strong> Start small and add more as you see results. Our AI works with any amount!
                </p>
              </div>

              <Button 
                onClick={handleNext} 
                disabled={!formData.investmentAmount}
                className="w-full gradient-primary text-white"
              >
                Continue
                <FaArrowRight className="ml-2" />
              </Button>
            </div>
          </Card>
        )}

        {/* Step 2: Risk Preference */}
        {step === 2 && (
          <Card className="max-w-2xl mx-auto p-[var(--space-8)] animate-fadeIn">
            <div className="text-center mb-[var(--space-8)]">
              <h1 className="text-3xl font-bold text-[var(--text)] mb-[var(--space-4)]">
                Choose Your Strategy
              </h1>
              <p className="text-[var(--text-secondary)]">
                Select the investment approach that matches your comfort level
              </p>
            </div>

            <div className="space-y-[var(--space-4)]">
              {[
                {
                  id: 'conservative',
                  title: 'Conservative',
                  description: 'Lower risk, steady 8-12% returns',
                  features: ['Stable coins focus', 'Low volatility', 'Capital preservation']
                },
                {
                  id: 'moderate',
                  title: 'Moderate',
                  description: 'Balanced approach, 15-25% returns',
                  features: ['Mixed portfolio', 'Moderate risk', 'Growth focused']
                },
                {
                  id: 'aggressive',
                  title: 'Aggressive',
                  description: 'Higher risk, 25-40% potential returns',
                  features: ['High growth tokens', 'Active trading', 'Maximum returns']
                }
              ].map(strategy => (
                <button
                  key={strategy.id}
                  onClick={() => setFormData({...formData, riskLevel: strategy.id})}
                  className={`w-full p-[var(--space-6)] rounded-[var(--radius-xl)] border-2 text-left transition-all ${
                    formData.riskLevel === strategy.id
                      ? 'border-[var(--primary)] bg-[var(--primary)]/10'
                      : 'border-[var(--border)] hover:border-[var(--primary)]'
                  }`}
                >
                  <div className="flex justify-between items-start mb-[var(--space-2)]">
                    <h3 className="text-xl font-bold text-[var(--text)]">{strategy.title}</h3>
                    {formData.riskLevel === strategy.id && (
                      <FaCheckCircle className="text-[var(--primary)] text-xl" />
                    )}
                  </div>
                  <p className="text-[var(--text-secondary)] mb-[var(--space-3)]">{strategy.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {strategy.features.map(feature => (
                      <span key={feature} className="text-xs bg-[var(--surface)] px-2 py-1 rounded-full text-[var(--text-secondary)]">
                        {feature}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>

            <Button onClick={handleNext} className="w-full mt-[var(--space-6)] gradient-primary text-white">
              Continue
              <FaArrowRight className="ml-2" />
            </Button>
          </Card>
        )}

        {/* Step 3: Deposit Method */}
        {step === 3 && (
          <Card className="max-w-2xl mx-auto p-[var(--space-8)] animate-fadeIn">
            <div className="text-center mb-[var(--space-8)]">
              <h1 className="text-3xl font-bold text-[var(--text)] mb-[var(--space-4)]">
                Fund Your Account
              </h1>
              <p className="text-[var(--text-secondary)]">
                Choose how you'd like to deposit your initial investment
              </p>
            </div>

            <div className="space-y-[var(--space-4)]">
              {[
                {
                  id: 'card',
                  icon: FaCreditCard,
                  title: 'Credit/Debit Card',
                  description: 'Instant deposit, 2.9% fee',
                  time: 'Instant'
                },
                {
                  id: 'bank',
                  icon: FaUniversity,
                  title: 'Bank Transfer',
                  description: 'No fees, takes 1-3 business days',
                  time: '1-3 days'
                },
                {
                  id: 'crypto',
                  icon: FaBitcoin,
                  title: 'Crypto Wallet',
                  description: 'Transfer from your existing wallet',
                  time: '10-30 min'
                }
              ].map(method => {
                const IconComponent = method.icon;
                return (
                  <button
                    key={method.id}
                    onClick={() => setFormData({...formData, depositMethod: method.id})}
                    className={`w-full p-[var(--space-6)] rounded-[var(--radius-xl)] border-2 text-left transition-all ${
                      formData.depositMethod === method.id
                        ? 'border-[var(--primary)] bg-[var(--primary)]/10'
                        : 'border-[var(--border)] hover:border-[var(--primary)]'
                    }`}
                  >
                    <div className="flex items-center gap-[var(--space-4)]">
                      <IconComponent className="text-3xl text-[var(--primary)]" />
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="text-lg font-bold text-[var(--text)]">{method.title}</h3>
                          <span className="text-sm text-[var(--text-secondary)]">{method.time}</span>
                        </div>
                        <p className="text-[var(--text-secondary)]">{method.description}</p>
                      </div>
                      {formData.depositMethod === method.id && (
                        <FaCheckCircle className="text-[var(--primary)] text-xl" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            <Link to="/dashboard">
              <Button 
                disabled={!formData.depositMethod}
                className="w-full mt-[var(--space-6)] gradient-primary text-white"
              >
                Complete Setup & Deposit
                <FaArrowRight className="ml-2" />
              </Button>
            </Link>
          </Card>
        )}
      </div>
    </div>
  );
};