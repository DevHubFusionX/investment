import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBitcoin, FaCreditCard, FaUniversity, FaWallet, FaShieldAlt, FaArrowLeft, FaCheckCircle, FaClock } from 'react-icons/fa';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';

export const DepositPage = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [processing, setProcessing] = useState(false);

  const paymentMethods = [
    {
      id: 'card',
      icon: FaCreditCard,
      title: 'Credit/Debit Card',
      description: 'Instant deposit with any major card',
      fee: '2.9%',
      time: 'Instant',
      popular: true
    },
    {
      id: 'bank',
      icon: FaUniversity,
      title: 'Bank Transfer (ACH)',
      description: 'Direct from your bank account',
      fee: 'Free',
      time: '1-3 days',
      popular: false
    },
    {
      id: 'crypto',
      icon: FaBitcoin,
      title: 'Crypto Wallet',
      description: 'Transfer from external wallet',
      fee: 'Network fees only',
      time: '10-30 min',
      popular: false
    }
  ];

  const suggestedAmounts = ['$50', '$100', '$250', '$500', '$1000'];

  const calculateFee = () => {
    if (!amount || !selectedMethod) return 0;
    const numAmount = parseFloat(amount.replace('$', ''));
    if (selectedMethod === 'card') return numAmount * 0.029;
    return 0;
  };

  const handleDeposit = () => {
    setProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setProcessing(false);
      alert('Deposit initiated successfully!');
    }, 2000);
  };

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
            Secure Deposit
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto p-[var(--space-6)]">
        {/* Header */}
        <div className="text-center mb-[var(--space-8)]">
          <h1 className="text-3xl font-bold text-[var(--text)] mb-[var(--space-2)]">
            Fund Your Account
          </h1>
          <p className="text-[var(--text-secondary)]">
            Choose your preferred deposit method and start investing
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-[var(--space-8)]">
          {/* Payment Methods */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-[var(--text)] mb-[var(--space-4)]">
              Select Payment Method
            </h2>
            <div className="space-y-[var(--space-4)]">
              {paymentMethods.map(method => {
                const IconComponent = method.icon;
                return (
                  <Card
                    key={method.id}
                    className={`p-[var(--space-6)] cursor-pointer transition-all ${
                      selectedMethod === method.id
                        ? 'border-[var(--primary)] bg-[var(--primary)]/5'
                        : 'hover:border-[var(--primary)]/50'
                    }`}
                    onClick={() => setSelectedMethod(method.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-[var(--space-4)]">
                        <IconComponent className="text-3xl text-[var(--primary)]" />
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-bold text-[var(--text)]">{method.title}</h3>
                            {method.popular && (
                              <span className="text-xs bg-[var(--primary)] text-white px-2 py-1 rounded-full">
                                Popular
                              </span>
                            )}
                          </div>
                          <p className="text-[var(--text-secondary)]">{method.description}</p>
                          <div className="flex gap-4 mt-1">
                            <span className="text-sm text-[var(--success)]">Fee: {method.fee}</span>
                            <span className="text-sm text-[var(--text-secondary)]">Time: {method.time}</span>
                          </div>
                        </div>
                      </div>
                      {selectedMethod === method.id && (
                        <FaCheckCircle className="text-[var(--primary)] text-xl" />
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Amount Selection */}
            <div className="mt-[var(--space-8)]">
              <h2 className="text-xl font-bold text-[var(--text)] mb-[var(--space-4)]">
                Deposit Amount
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-[var(--space-3)] mb-[var(--space-4)]">
                {suggestedAmounts.map(suggestedAmount => (
                  <button
                    key={suggestedAmount}
                    onClick={() => setAmount(suggestedAmount)}
                    className={`p-[var(--space-3)] rounded-[var(--radius-lg)] border-2 font-semibold transition-all ${
                      amount === suggestedAmount
                        ? 'border-[var(--primary)] bg-[var(--primary)] text-white'
                        : 'border-[var(--border)] text-[var(--text)] hover:border-[var(--primary)]'
                    }`}
                  >
                    {suggestedAmount}
                  </button>
                ))}
              </div>
              <Input
                placeholder="Enter custom amount (min $10)"
                value={amount.startsWith('$') ? '' : amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>

          {/* Summary Sidebar */}
          <div>
            <Card className="p-[var(--space-6)] sticky top-[var(--space-6)]">
              <h3 className="text-lg font-bold text-[var(--text)] mb-[var(--space-4)]">
                Deposit Summary
              </h3>
              
              <div className="space-y-[var(--space-3)] mb-[var(--space-6)]">
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Amount:</span>
                  <span className="font-semibold text-[var(--text)]">
                    {amount || '$0.00'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Fee:</span>
                  <span className="font-semibold text-[var(--text)]">
                    ${calculateFee().toFixed(2)}
                  </span>
                </div>
                <div className="border-t border-[var(--border)] pt-[var(--space-3)]">
                  <div className="flex justify-between">
                    <span className="font-semibold text-[var(--text)]">Total:</span>
                    <span className="font-bold text-[var(--text)]">
                      ${(parseFloat(amount.replace('$', '') || '0') + calculateFee()).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleDeposit}
                disabled={!selectedMethod || !amount || processing}
                className="w-full gradient-primary text-white mb-[var(--space-4)]"
              >
                {processing ? (
                  <>
                    <FaClock className="mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Complete Deposit'
                )}
              </Button>

              <div className="space-y-[var(--space-3)] text-sm text-[var(--text-secondary)]">
                <div className="flex items-center gap-2">
                  <FaShieldAlt className="text-[var(--success)]" />
                  <span>256-bit SSL encryption</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-[var(--success)]" />
                  <span>$50M insurance coverage</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaWallet className="text-[var(--success)]" />
                  <span>Funds available instantly</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};