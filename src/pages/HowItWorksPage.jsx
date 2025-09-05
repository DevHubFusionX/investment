import { Link } from 'react-router-dom';
import { FaBitcoin, FaUserPlus, FaWallet, FaRobot, FaChartLine, FaArrowRight, FaCheckCircle, FaShieldAlt, FaClock } from 'react-icons/fa';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Navigation */}
      <nav className="p-[var(--space-6)] flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-[var(--space-3)]">
          <FaBitcoin className="text-3xl text-[var(--primary)] animate-float" />
          <span className="text-2xl font-bold text-gradient">CryptoVault</span>
        </Link>
        <div className="flex items-center gap-[var(--space-3)]">
          <Link to="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
          <Link to="/signup">
            <Button className="gradient-primary text-white">Get Started</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-[var(--space-6)] py-[var(--space-16)] text-center max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-[var(--space-6)] text-[var(--text)]">
          How <span className="text-gradient">CryptoVault</span> Works
        </h1>
        <p className="text-xl text-[var(--text-secondary)] mb-[var(--space-8)] max-w-4xl mx-auto">
          Start earning crypto returns in 4 simple steps. Our AI handles the complexity while you watch your wealth grow.
        </p>
      </section>

      {/* Steps Section */}
      <section className="px-[var(--space-6)] py-[var(--space-16)] max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-8)]">
          <Card className="text-center p-[var(--space-8)] relative animate-fadeIn">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <FaUserPlus className="text-5xl text-[var(--primary)] mx-auto mb-[var(--space-4)] mt-[var(--space-2)]" />
            <h3 className="text-xl font-bold text-[var(--text)] mb-[var(--space-3)]">Sign Up</h3>
            <p className="text-[var(--text-secondary)]">Create your account in under 2 minutes. No complex forms or lengthy verification.</p>
          </Card>

          <Card className="text-center p-[var(--space-8)] relative animate-fadeIn">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[var(--secondary)] text-white rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <FaWallet className="text-5xl text-[var(--secondary)] mx-auto mb-[var(--space-4)] mt-[var(--space-2)]" />
            <h3 className="text-xl font-bold text-[var(--text)] mb-[var(--space-3)]">Deposit Funds</h3>
            <p className="text-[var(--text-secondary)]">Start with as little as $10. Deposit via bank transfer, card, or crypto wallet.</p>
          </Card>

          <Card className="text-center p-[var(--space-8)] relative animate-fadeIn">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[var(--accent)] text-white rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <FaRobot className="text-5xl text-[var(--accent)] mx-auto mb-[var(--space-4)] mt-[var(--space-2)]" />
            <h3 className="text-xl font-bold text-[var(--text)] mb-[var(--space-3)]">AI Takes Over</h3>
            <p className="text-[var(--text-secondary)]">Our algorithms analyze markets 24/7 and execute optimal trading strategies automatically.</p>
          </Card>

          <Card className="text-center p-[var(--space-8)] relative animate-fadeIn">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[var(--success)] text-white rounded-full flex items-center justify-center font-bold">
              4
            </div>
            <FaChartLine className="text-5xl text-[var(--success)] mx-auto mb-[var(--space-4)] mt-[var(--space-2)]" />
            <h3 className="text-xl font-bold text-[var(--text)] mb-[var(--space-3)]">Watch Growth</h3>
            <p className="text-[var(--text-secondary)]">Track your portfolio performance in real-time and withdraw profits anytime.</p>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-[var(--space-6)] py-[var(--space-16)] bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-[var(--space-12)]">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text)] mb-[var(--space-4)]">
              Why Our System Works
            </h2>
            <p className="text-xl text-[var(--text-secondary)]">
              Advanced technology meets proven investment strategies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-[var(--space-8)]">
            <Card className="p-[var(--space-8)] animate-fadeIn">
              <FaShieldAlt className="text-4xl text-[var(--primary)] mb-[var(--space-4)]" />
              <h3 className="text-xl font-bold text-[var(--text)] mb-[var(--space-3)]">Institutional Security</h3>
              <ul className="space-y-2 text-[var(--text-secondary)]">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[var(--success)] text-sm" />
                  Multi-signature wallets
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[var(--success)] text-sm" />
                  Cold storage protection
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[var(--success)] text-sm" />
                  $50M insurance coverage
                </li>
              </ul>
            </Card>

            <Card className="p-[var(--space-8)] animate-fadeIn">
              <FaRobot className="text-4xl text-[var(--secondary)] mb-[var(--space-4)]" />
              <h3 className="text-xl font-bold text-[var(--text)] mb-[var(--space-3)]">Smart Algorithms</h3>
              <ul className="space-y-2 text-[var(--text-secondary)]">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[var(--success)] text-sm" />
                  24/7 market monitoring
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[var(--success)] text-sm" />
                  Risk-adjusted strategies
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[var(--success)] text-sm" />
                  Automatic rebalancing
                </li>
              </ul>
            </Card>

            <Card className="p-[var(--space-8)] animate-fadeIn">
              <FaClock className="text-4xl text-[var(--accent)] mb-[var(--space-4)]" />
              <h3 className="text-xl font-bold text-[var(--text)] mb-[var(--space-3)]">Proven Results</h3>
              <ul className="space-y-2 text-[var(--text-secondary)]">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[var(--success)] text-sm" />
                  24% average annual returns
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[var(--success)] text-sm" />
                  99.9% uptime guarantee
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[var(--success)] text-sm" />
                  50,000+ satisfied investors
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-[var(--space-6)] py-[var(--space-16)] gradient-primary text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-[var(--space-6)]">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-[var(--space-8)] opacity-90">
            Join thousands of investors already building wealth with CryptoVault
          </p>
          <Link to="/signup">
            <Button className="text-lg px-[var(--space-8)] py-[var(--space-4)] text-[var(--primary)]  shadow-[var(--shadow-lg)] font-bold">
              Start Investing Now
              <FaArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};