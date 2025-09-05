import { useState } from 'react';
import { FaBitcoin, FaShieldAlt, FaChartLine, FaRocket, FaUsers, FaLock } from 'react-icons/fa';
import { Card } from '../components/ui/Card';
import { LoginForm } from '../components/auth/LoginForm';
import { SignupForm } from '../components/auth/SignupForm';

import { Link } from 'react-router-dom';

export const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (data) => {
    console.log('Login:', data);
  };

  const handleSignup = (data) => {
    console.log('Signup:', data);
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] lg:grid lg:grid-cols-2">
      {/* Content Column */}
      <div className="hidden lg:flex gradient-primary p-16 flex-col justify-center text-white animate-fadeIn">
        <div className="max-w-lg">
          <FaBitcoin className="text-6xl mb-6 animate-float" />
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">
            {isLogin ? 'Welcome Back to CryptoVault' : 'Join the Crypto Revolution'}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-6 lg:mb-8 opacity-90">
            {isLogin 
              ? 'Continue building your digital wealth with our AI-powered investment strategies.'
              : 'Start your journey to financial freedom with automated crypto investing.'}
          </p>
          
          <div className="space-y-[var(--space-6)]">
            <div className="flex items-center gap-[var(--space-4)] animate-fadeIn">
              <FaShieldAlt className="text-2xl" />
              <div>
                <h3 className="font-semibold">Bank-Grade Security</h3>
                <p className="opacity-80">Multi-signature wallets with $50M insurance coverage</p>
              </div>
            </div>
            
            <div className="flex items-center gap-[var(--space-4)] animate-fadeIn">
              <FaChartLine className="text-2xl" />
              <div>
                <h3 className="font-semibold">Proven Returns</h3>
                <p className="opacity-80">Average 24% annual returns with transparent reporting</p>
              </div>
            </div>
            
            <div className="flex items-center gap-[var(--space-4)] animate-fadeIn">
              <FaRocket className="text-2xl" />
              <div>
                <h3 className="font-semibold">AI-Powered Strategies</h3>
                <p className="opacity-80">Machine learning optimizes your portfolio 24/7</p>
              </div>
            </div>
            
            {!isLogin && (
              <div className="flex items-center gap-[var(--space-4)] animate-fadeIn">
                <FaUsers className="text-2xl" />
                <div>
                  <h3 className="font-semibold">Join 50,000+ Investors</h3>
                  <p className="opacity-80">Trusted by crypto enthusiasts worldwide</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Form Column */}
      <div className="p-[var(--space-6)] sm:p-[var(--space-8)] lg:p-[var(--space-16)] flex flex-col justify-center min-h-screen lg:min-h-0 animate-fadeIn">
        <div className="max-w-md mx-auto w-full">
          <div className="text-center mb-[var(--space-8)]">
            <h2 className="text-3xl font-bold text-[var(--text)] mb-[var(--space-2)]">
              {isLogin ? 'Sign In' : 'Create Account'}
            </h2>
            <p className="text-[var(--muted)]">
              {isLogin 
                ? 'Access your crypto portfolio dashboard'
                : 'Start with as little as $10 - no minimum required'}
            </p>
          </div>

          <Card>
            {isLogin ? (
              <LoginForm
                onLogin={handleLogin}
                onSwitchToSignup={() => setIsLogin(false)}
              />
            ) : (
              <SignupForm
                onSignup={handleSignup}
                onSwitchToLogin={() => setIsLogin(true)}
              />
            )}
          </Card>
          
          <div className="mt-6 text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-[var(--muted)]">
              <FaLock />
              <span>Your data is encrypted and secure</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};