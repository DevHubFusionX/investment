import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBitcoin, FaUniversity, FaWallet, FaArrowLeft, FaExclamationTriangle, FaCheckCircle, FaClock, FaShieldAlt } from 'react-icons/fa';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';

export const WithdrawPage = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [processing, setProcessing] = useState(false);

  const availableBalance = 1247.50;
  const withdrawalMethods = [
    {
      id: 'bank',
      icon: FaUniversity,
      title: 'Bank Account (ACH)',
      description: 'Direct to your linked bank account',
      fee: 'Free',
      time: '1-3 business days',
      account: '****1234'
    },
    {
      id: 'crypto',
      icon: FaBitcoin,
      title: 'Crypto Wallet',
      description: 'Send to external wallet address',
      fee: 'Network fees',
      time: '10-30 minutes',
      account: 'External wallet'
    }
  ];

  const quickAmounts = ['25%', '50%', '75%', '100%'];

  const calculateAmount = (percentage) => {
    const percent = parseInt(percentage.replace('%', ''));
    return (availableBalance * percent / 100).toFixed(2);
  };

  const handleQuickAmount = (percentage) => {
    setAmount(calculateAmount(percentage));
  };

  const handleWithdraw = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      alert('Withdrawal request submitted successfully!');
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
            Secure Withdrawal
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto p-[var(--space-6)]">
        {/* Header */}
        <div className="text-center mb-[var(--space-8)]">
          <h1 className="text-3xl font-bold text-[var(--text)] mb-[var(--space-2)]">
            Withdraw Funds
          </h1>
          <p className="text-[var(--text-secondary)]">
            Transfer your profits and principal to your preferred account
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-[var(--space-8)]">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Available Balance */}
            <Card className="p-[var(--space-6)] mb-[var(--space-6)] gradient-primary text-white">
              <h3 className="text-lg font-medium mb-[var(--space-2)] opacity-90">Available Balance</h3>
              <div className="text-3xl font-bold mb-[var(--space-2)]">${availableBalance.toLocaleString()}</div>
              <div className="text-sm opacity-80">Ready for withdrawal</div>
            </Card>

            {/* Withdrawal Methods */}
            <h2 className="text-xl font-bold text-[var(--text)] mb-[var(--space-4)]">
              Select Withdrawal Method
            </h2>
            <div className="space-y-[var(--space-4)] mb-[var(--space-6)]">
              {withdrawalMethods.map(method => {
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
                          <h3 className="text-lg font-bold text-[var(--text)]">{method.title}</h3>
                          <p className="text-[var(--text-secondary)]">{method.description}</p>
                          <div className="flex gap-4 mt-1">
                            <span className="text-sm text-[var(--success)]">Fee: {method.fee}</span>
                            <span className="text-sm text-[var(--text-secondary)]">Time: {method.time}</span>
                          </div>
                          <div className="text-sm text-[var(--text-secondary)] mt-1">
                            To: {method.account}
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
            <h2 className="text-xl font-bold text-[var(--text)] mb-[var(--space-4)]">
              Withdrawal Amount
            </h2>
            <div className="grid grid-cols-4 gap-[var(--space-3)] mb-[var(--space-4)]">
              {quickAmounts.map(percentage => (
                <button
                  key={percentage}
                  onClick={() => handleQuickAmount(percentage)}
                  className={`p-[var(--space-3)] rounded-[var(--radius-lg)] border-2 font-semibold transition-all ${
                    amount === calculateAmount(percentage)
                      ? 'border-[var(--primary)] bg-[var(--primary)] text-white'
                      : 'border-[var(--border)] text-[var(--text)] hover:border-[var(--primary)]'
                  }`}
                >
                  {percentage}
                </button>
              ))}
            </div>
            <Input
              placeholder="Enter custom amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            {/* Warning */}
            <Card className="p-[var(--space-4)] mt-[var(--space-4)] bg-[var(--warning)]/10 border-[var(--warning)]/20">
              <div className="flex items-start gap-[var(--space-3)]">
                <FaExclamationTriangle className="text-[var(--warning)] mt-1" />
                <div className="text-sm">
                  <p className="font-semibold text-[var(--text)] mb-1">Important Notice</p>
                  <p className="text-[var(--text-secondary)]">
                    Withdrawals are processed during business hours. Large withdrawals may require additional verification.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Summary Sidebar */}
          <div>
            <Card className="p-[var(--space-6)] sticky top-[var(--space-6)]">
              <h3 className="text-lg font-bold text-[var(--text)] mb-[var(--space-4)]">
                Withdrawal Summary
              </h3>
              
              <div className="space-y-[var(--space-3)] mb-[var(--space-6)]">
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Amount:</span>
                  <span className="font-semibold text-[var(--text)]">
                    ${amount || '0.00'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Fee:</span>
                  <span className="font-semibold text-[var(--success)]">
                    Free
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Remaining:</span>
                  <span className="font-semibold text-[var(--text)]">
                    ${(availableBalance - parseFloat(amount || '0')).toFixed(2)}
                  </span>
                </div>
                <div className="border-t border-[var(--border)] pt-[var(--space-3)]">
                  <div className="flex justify-between">
                    <span className="font-semibold text-[var(--text)]">You'll Receive:</span>
                    <span className="font-bold text-[var(--text)]">
                      ${amount || '0.00'}
                    </span>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleWithdraw}
                disabled={!selectedMethod || !amount || processing}
                className="w-full gradient-primary text-white mb-[var(--space-4)]"
              >
                {processing ? (
                  <>
                    <FaClock className="mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Request Withdrawal'
                )}
              </Button>

              <div className="space-y-[var(--space-3)] text-sm text-[var(--text-secondary)]">
                <div className="flex items-center gap-2">
                  <FaShieldAlt className="text-[var(--success)]" />
                  <span>Secure processing</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-[var(--success)]" />
                  <span>No withdrawal fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="text-[var(--success)]" />
                  <span>1-3 business days</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};