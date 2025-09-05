import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export const SignupForm = ({ onSignup, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    onSignup(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Full Name"
        type="text"
        icon={FaUser}
        placeholder="John Doe"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        required
      />

      <Input
        label="Email"
        type="email"
        icon={FaEnvelope}
        placeholder="your@email.com"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        required
      />
      
      <Input
        label="Password"
        type="password"
        icon={FaLock}
        placeholder="Create a strong password"
        value={formData.password}
        onChange={(e) => setFormData({...formData, password: e.target.value})}
        required
      />

      <Input
        label="Confirm Password"
        type="password"
        icon={FaLock}
        placeholder="Confirm your password"
        value={formData.confirmPassword}
        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
        required
      />

      <Link to="/onboarding">
        <Button type="submit" className="w-full">
          Create Account
        </Button>
      </Link>

      <div className="text-center">
        <span className="text-[var(--muted)]">Already have an account? </span>
        <Link to="/login" className="text-[var(--primary)] hover:underline font-semibold">
          Sign in
        </Link>
      </div>
    </form>
  );
};