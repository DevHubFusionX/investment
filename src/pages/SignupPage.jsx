import { FaBitcoin, FaShieldAlt, FaChartLine, FaRocket, FaUsers, FaLock, FaDollarSign, FaClock } from 'react-icons/fa';
import { Card } from '../components/ui/Card';
import { SignupForm } from '../components/auth/SignupForm';

export const SignupPage = () => {
  const handleSignup = (data) => {
    console.log('Signup:', data);
  };

  const handleSwitchToLogin = () => {
    console.log('Switch to login');
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] lg:grid lg:grid-cols-2">
      {/* Content Column */}
      <div className="hidden lg:flex bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-16 flex-col justify-center text-white">
        <div className="max-w-lg">
          <FaBitcoin className="text-6xl mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Start Your Crypto Journey Today
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of smart investors building wealth through automated crypto strategies. No experience required.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaDollarSign className="text-2xl" />
              <div>
                <h3 className="font-semibold">Start with $10</h3>
                <p className="opacity-80">No minimum investment required - begin your journey today</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <FaRocket className="text-2xl" />
              <div>
                <h3 className="font-semibold">Automated Investing</h3>
                <p className="opacity-80">AI manages your portfolio while you focus on life</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <FaChartLine className="text-2xl" />
              <div>
                <h3 className="font-semibold">24% Average Returns</h3>
                <p className="opacity-80">Outperform traditional investments with crypto strategies</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <FaShieldAlt className="text-2xl" />
              <div>
                <h3 className="font-semibold">Fully Insured</h3>
                <p className="opacity-80">$50M insurance coverage protects your investments</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <FaClock className="text-2xl" />
              <div>
                <h3 className="font-semibold">2-Minute Setup</h3>
                <p className="opacity-80">Get started in minutes, not hours</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <FaUsers className="text-2xl" />
              <div>
                <h3 className="font-semibold">50,000+ Happy Investors</h3>
                <p className="opacity-80">Join a community of successful crypto investors</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-opacity-20 rounded-xl">
            <p className="text-sm opacity-90">
              "I've earned more in 6 months with CryptoVault than my savings account earned in 5 years." - Sarah M.
            </p>
          </div>
        </div>
      </div>

      {/* Form Column */}
      <div className="p-6 sm:p-8 lg:p-16 flex flex-col justify-center min-h-screen lg:min-h-0">
        <div className="max-w-md mx-auto w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[var(--text)] mb-2">
              Create Your Account
            </h2>
            <p className="text-[var(--muted)]">
              Join the future of investing - setup takes less than 2 minutes
            </p>
          </div>

          <Card>
            <SignupForm
              onSignup={handleSignup}
              onSwitchToLogin={handleSwitchToLogin}
            />
          </Card>
          
          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-center gap-2 text-sm text-[var(--muted)]">
              <FaLock />
              <span>Bank-level encryption protects your data</span>
            </div>
            
            <div className="text-center text-xs text-[var(--muted)]">
              By signing up, you agree to our Terms of Service and Privacy Policy.
              Your investments are protected by FDIC insurance up to $250,000.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};