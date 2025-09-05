import { FaBitcoin, FaRocket, FaShieldAlt, FaChartLine, FaUsers, FaArrowRight, FaPlay, FaCheckCircle, FaStar } from 'react-icons/fa';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Navigation */}
      <nav className="p-[var(--space-6)] flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-[var(--space-3)]">
          <FaBitcoin className="text-3xl text-[var(--primary)] animate-float" />
          <span className="text-2xl font-bold text-gradient">CryptoVault</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-[var(--space-3)]">
          <Link to="/how-it-works">
            <Button variant="outline" className="hidden sm:block px-[var(--space-6)] py-[var(--space-3)]">
              How it Works
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="gradient-primary text-white px-[var(--space-6)] py-[var(--space-3)] shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-xl)]">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-[var(--space-6)] py-[var(--space-16)] text-center max-w-6xl mx-auto">
        <div className="animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-[var(--space-6)] text-[var(--text)]">
            Build Wealth with
            <span className="text-gradient block">Smart Crypto Investing</span>
          </h1>
          <p className="text-xl sm:text-2xl text-[var(--text-secondary)] mb-[var(--space-8)] max-w-4xl mx-auto leading-relaxed">
            Join 50,000+ investors earning 24% average returns through AI-powered crypto strategies. 
            Start with $10, no experience required.
          </p>
          <div className="flex flex-col sm:flex-row gap-[var(--space-4)] justify-center items-center">
            <Link to="/signup" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto gradient-primary text-white text-lg px-[var(--space-8)] py-[var(--space-4)] shadow-[var(--shadow-xl)] hover:shadow-[var(--shadow-lg)] animate-pulse">
                <FaRocket className="mr-2" />
                Start Investing Now
              </Button>
            </Link>
            <Button variant="outline" className="w-full sm:w-auto text-lg px-[var(--space-8)] py-[var(--space-4)] border-2 border-[var(--primary)] text-[var(--primary)] hover:gradient-primary hover:text-white">
              <FaPlay className="mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-[var(--space-6)] py-[var(--space-12)] bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-[var(--space-8)] text-center">
          <div className="animate-fadeIn">
            <div className="text-4xl font-bold text-[var(--primary)] mb-2">$2.5B+</div>
            <div className="text-[var(--text-secondary)]">Assets Managed</div>
          </div>
          <div className="animate-fadeIn">
            <div className="text-4xl font-bold text-[var(--secondary)] mb-2">50K+</div>
            <div className="text-[var(--text-secondary)]">Active Investors</div>
          </div>
          <div className="animate-fadeIn">
            <div className="text-4xl font-bold text-[var(--accent)] mb-2">24%</div>
            <div className="text-[var(--text-secondary)]">Avg Annual Return</div>
          </div>
          <div className="animate-fadeIn">
            <div className="text-4xl font-bold text-[var(--success)] mb-2">99.9%</div>
            <div className="text-[var(--text-secondary)]">Uptime</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-[var(--space-6)] py-[var(--space-16)] max-w-6xl mx-auto">
        <div className="text-center mb-[var(--space-12)]">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text)] mb-[var(--space-4)]">
            Why Choose CryptoVault?
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            Professional-grade crypto investing made simple for everyone
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-8)]">
          <Card className="text-center p-[var(--space-8)] hover:shadow-[var(--shadow-xl)] animate-fadeIn">
            <FaShieldAlt className="text-5xl text-[var(--primary)] mx-auto mb-[var(--space-4)]" />
            <h3 className="text-xl font-bold text-[var(--text)] mb-[var(--space-3)]">Bank-Level Security</h3>
            <p className="text-[var(--text-secondary)]">Multi-signature wallets, cold storage, and $50M insurance coverage protect your investments</p>
          </Card>
          
          <Card className="text-center p-[var(--space-8)] hover:shadow-[var(--shadow-xl)] animate-fadeIn">
            <FaRocket className="text-5xl text-[var(--secondary)] mx-auto mb-[var(--space-4)]" />
            <h3 className="text-xl font-bold text-[var(--text)] mb-[var(--space-3)]">AI-Powered Strategies</h3>
            <p className="text-[var(--text-secondary)]">Machine learning algorithms optimize your portfolio 24/7 for maximum returns</p>
          </Card>
          
          <Card className="text-center p-[var(--space-8)] hover:shadow-[var(--shadow-xl)] animate-fadeIn">
            <FaChartLine className="text-5xl text-[var(--accent)] mx-auto mb-[var(--space-4)]" />
            <h3 className="text-xl font-bold text-[var(--text)] mb-[var(--space-3)]">Proven Performance</h3>
            <p className="text-[var(--text-secondary)]">Track record of 24% average annual returns with full transparency and reporting</p>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-[var(--space-6)] py-[var(--space-16)] bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text)] mb-[var(--space-12)]">
            Trusted by Thousands
          </h2>
          <div className="grid md:grid-cols-3 gap-[var(--space-8)]">
            <Card className="p-[var(--space-6)] animate-fadeIn">
              <div className="flex mb-[var(--space-4)]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-[var(--warning)]" />
                ))}
              </div>
              <p className="text-[var(--text-secondary)] mb-[var(--space-4)]">
                "I've earned more in 6 months with CryptoVault than my savings account earned in 5 years."
              </p>
              <div className="font-semibold text-[var(--text)]">Sarah M.</div>
            </Card>
            
            <Card className="p-[var(--space-6)] animate-fadeIn">
              <div className="flex mb-[var(--space-4)]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-[var(--warning)]" />
                ))}
              </div>
              <p className="text-[var(--text-secondary)] mb-[var(--space-4)]">
                "The AI does all the work. I just watch my portfolio grow every month."
              </p>
              <div className="font-semibold text-[var(--text)]">Mike R.</div>
            </Card>
            
            <Card className="p-[var(--space-6)] animate-fadeIn">
              <div className="flex mb-[var(--space-4)]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-[var(--warning)]" />
                ))}
              </div>
              <p className="text-[var(--text-secondary)] mb-[var(--space-4)]">
                "Finally, crypto investing that actually makes sense. Simple and profitable."
              </p>
              <div className="font-semibold text-[var(--text)]">Alex K.</div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-[var(--space-6)] py-[var(--space-16)] gradient-primary text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-[var(--space-6)]">
            Ready to Build Your Crypto Wealth?
          </h2>
          <p className="text-xl mb-[var(--space-8)] opacity-90">
            Join 50,000+ investors already earning with CryptoVault. Start with as little as $10.
          </p>
          <div className="flex flex-col sm:flex-row gap-[var(--space-4)] justify-center">
            <Link to="/signup" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto text-lg px-[var(--space-8)] py-[var(--space-4)] text-[var(--primary)] hover:bg-grey-300 shadow-[var(--shadow-lg)] font-bold border-2 border-white">
                <FaRocket className="mr-2" />
                Start Investing Free
              </Button>
            </Link>
            <Button className="w-full sm:w-auto text-lg px-[var(--space-8)] py-[var(--space-4)] border-2 border-white  hover:bg-white hover:text-[var(--primary)] transition-all bg-transparent">
              Learn More
              <FaArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};