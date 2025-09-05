import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export const LoginForm = ({ onLogin, onSwitchToSignup }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
        placeholder="Enter your password"
        value={formData.password}
        onChange={(e) => setFormData({...formData, password: e.target.value})}
        required
      />

      <Button type="submit" className="w-full">
        Sign In
      </Button>

      <div className="text-center">
        <span className="text-[var(--muted)]">Don't have an account? </span>
        <Link to="/signup" className="text-[var(--primary)] hover:underline font-semibold">
          Sign up
        </Link>
      </div>
    </form>
  );
};