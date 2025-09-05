import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBitcoin, FaArrowLeft, FaFilter, FaDownload, FaSearch, FaArrowUp, FaArrowDown, FaCoins, FaExchangeAlt, FaWallet } from 'react-icons/fa';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';

export const TransactionsPage = () => {
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const transactions = [
    { id: 'TX001', type: 'deposit', asset: 'USD', amount: '+$1,000.00', fee: '$0.00', status: 'completed', date: '2024-01-15 14:30', hash: '0x1a2b3c...', icon: FaWallet },
    { id: 'TX002', type: 'buy', asset: 'BTC', amount: '+0.0287 BTC', fee: '$2.50', status: 'completed', date: '2024-01-15 14:35', hash: '0x4d5e6f...', icon: FaBitcoin },
    { id: 'TX003', type: 'buy', asset: 'ETH', amount: '+0.1456 ETH', fee: '$1.80', status: 'completed', date: '2024-01-15 14:40', hash: '0x7g8h9i...', icon: FaCoins },
    { id: 'TX004', type: 'rebalance', asset: 'Portfolio', amount: 'Auto', fee: '$0.00', status: 'completed', date: '2024-01-14 09:15', hash: '0xabc123...', icon: FaExchangeAlt },
    { id: 'TX005', type: 'yield', asset: 'DEFI', amount: '+47.2 USDC', fee: '$0.00', status: 'completed', date: '2024-01-13 16:22', hash: '0xdef456...', icon: FaArrowUp },
    { id: 'TX006', type: 'buy', asset: 'ETH', amount: '+0.0250 ETH', fee: '$1.20', status: 'completed', date: '2024-01-12 11:45', hash: '0x789abc...', icon: FaCoins },
    { id: 'TX007', type: 'withdraw', asset: 'USD', amount: '-$500.00', fee: '$0.00', status: 'completed', date: '2024-01-10 13:20', hash: '0x456def...', icon: FaArrowDown },
    { id: 'TX008', type: 'deposit', asset: 'USD', amount: '+$2,000.00', fee: '$0.00', status: 'completed', date: '2024-01-08 10:15', hash: '0x123ghi...', icon: FaWallet },
    { id: 'TX009', type: 'yield', asset: 'BTC', amount: '+0.0012 BTC', fee: '$0.00', status: 'completed', date: '2024-01-07 08:30', hash: '0x987jkl...', icon: FaArrowUp },
    { id: 'TX010', type: 'rebalance', asset: 'Portfolio', amount: 'Auto', fee: '$0.00', status: 'completed', date: '2024-01-05 12:00', hash: '0x654mno...', icon: FaExchangeAlt }
  ];

  const filterTypes = [
    { id: 'all', label: 'All Transactions' },
    { id: 'deposit', label: 'Deposits' },
    { id: 'withdraw', label: 'Withdrawals' },
    { id: 'buy', label: 'Purchases' },
    { id: 'yield', label: 'Yield Earned' },
    { id: 'rebalance', label: 'Rebalancing' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-[var(--success)] bg-[var(--success)]/10';
      case 'pending': return 'text-[var(--warning)] bg-[var(--warning)]/10';
      case 'failed': return 'text-[var(--error)] bg-[var(--error)]/10';
      default: return 'text-[var(--text-secondary)] bg-[var(--surface)]';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'deposit': return 'text-[var(--success)] bg-[var(--success)]/20';
      case 'withdraw': return 'text-[var(--error)] bg-[var(--error)]/20';
      case 'buy': return 'text-[var(--primary)] bg-[var(--primary)]/20';
      case 'yield': return 'text-[var(--secondary)] bg-[var(--secondary)]/20';
      case 'rebalance': return 'text-[var(--accent)] bg-[var(--accent)]/20';
      default: return 'text-[var(--text-secondary)] bg-[var(--surface)]';
    }
  };

  const filteredTransactions = transactions.filter(tx => {
    const matchesType = filterType === 'all' || tx.type === filterType;
    const matchesSearch = tx.asset.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tx.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

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
            Transaction History
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-[var(--space-6)]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-[var(--space-8)]">
          <div>
            <h1 className="text-3xl font-bold text-[var(--text)] mb-[var(--space-2)]">
              Transaction History
            </h1>
            <p className="text-[var(--text-secondary)]">
              Complete record of all your investment activities
            </p>
          </div>
          <div className="flex gap-[var(--space-3)] mt-4 sm:mt-0">
            <Button variant="outline" className="flex items-center gap-2">
              <FaDownload />
              Export CSV
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card className="p-[var(--space-6)] mb-[var(--space-6)]">
          <div className="flex flex-col lg:flex-row gap-[var(--space-4)]">
            <div className="flex-1">
              <Input
                placeholder="Search by transaction ID or asset..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon={FaSearch}
              />
            </div>
            <div className="flex gap-[var(--space-2)] overflow-x-auto">
              {filterTypes.map(type => (
                <button
                  key={type.id}
                  onClick={() => setFilterType(type.id)}
                  className={`px-4 py-2 rounded-[var(--radius-lg)] text-sm font-medium whitespace-nowrap transition-all ${
                    filterType === type.id
                      ? 'bg-[var(--primary)] text-white'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--surface)] border border-[var(--border)]'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>
        </Card>

        {/* Transactions Table */}
        <Card className="p-[var(--space-6)]">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="text-left p-[var(--space-3)] text-[var(--text-secondary)] font-medium">Transaction</th>
                  <th className="text-left p-[var(--space-3)] text-[var(--text-secondary)] font-medium">Type</th>
                  <th className="text-right p-[var(--space-3)] text-[var(--text-secondary)] font-medium">Amount</th>
                  <th className="text-right p-[var(--space-3)] text-[var(--text-secondary)] font-medium">Fee</th>
                  <th className="text-center p-[var(--space-3)] text-[var(--text-secondary)] font-medium">Status</th>
                  <th className="text-right p-[var(--space-3)] text-[var(--text-secondary)] font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((tx, i) => {
                  const IconComponent = tx.icon;
                  return (
                    <tr key={i} className="border-b border-[var(--border)] hover:bg-[var(--surface)] transition-colors">
                      <td className="p-[var(--space-3)]">
                        <div className="flex items-center gap-[var(--space-3)]">
                          <div className={`p-2 rounded-lg ${getTypeColor(tx.type)}`}>
                            <IconComponent className="text-lg" />
                          </div>
                          <div>
                            <div className="font-semibold text-[var(--text)]">{tx.id}</div>
                            <div className="text-sm text-[var(--text-secondary)]">{tx.asset}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-[var(--space-3)]">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getTypeColor(tx.type)}`}>
                          {tx.type}
                        </span>
                      </td>
                      <td className="text-right p-[var(--space-3)] font-bold text-[var(--text)]">
                        {tx.amount}
                      </td>
                      <td className="text-right p-[var(--space-3)] text-[var(--text-secondary)]">
                        {tx.fee}
                      </td>
                      <td className="text-center p-[var(--space-3)]">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getStatusColor(tx.status)}`}>
                          {tx.status}
                        </span>
                      </td>
                      <td className="text-right p-[var(--space-3)] text-[var(--text-secondary)]">
                        <div className="text-sm">
                          {new Date(tx.date).toLocaleDateString()}
                        </div>
                        <div className="text-xs text-[var(--text-secondary)]">
                          {new Date(tx.date).toLocaleTimeString()}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          
          {filteredTransactions.length === 0 && (
            <div className="text-center py-[var(--space-12)]">
              <FaSearch className="text-4xl text-[var(--text-secondary)] mx-auto mb-4" />
              <p className="text-[var(--text-secondary)]">No transactions found matching your criteria</p>
            </div>
          )}
        </Card>

        {/* Transaction Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[var(--space-4)] mt-[var(--space-8)]">
          <Card className="p-[var(--space-4)] text-center">
            <div className="text-2xl font-bold text-[var(--success)]">
              {transactions.filter(tx => tx.type === 'deposit').length}
            </div>
            <div className="text-sm text-[var(--text-secondary)]">Total Deposits</div>
          </Card>
          <Card className="p-[var(--space-4)] text-center">
            <div className="text-2xl font-bold text-[var(--error)]">
              {transactions.filter(tx => tx.type === 'withdraw').length}
            </div>
            <div className="text-sm text-[var(--text-secondary)]">Total Withdrawals</div>
          </Card>
          <Card className="p-[var(--space-4)] text-center">
            <div className="text-2xl font-bold text-[var(--primary)]">
              {transactions.filter(tx => tx.type === 'buy').length}
            </div>
            <div className="text-sm text-[var(--text-secondary)]">Purchases</div>
          </Card>
          <Card className="p-[var(--space-4)] text-center">
            <div className="text-2xl font-bold text-[var(--secondary)]">
              {transactions.filter(tx => tx.type === 'yield').length}
            </div>
            <div className="text-sm text-[var(--text-secondary)]">Yield Earned</div>
          </Card>
        </div>
      </div>
    </div>
  );
};