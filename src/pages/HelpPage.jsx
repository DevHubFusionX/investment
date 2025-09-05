import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBitcoin, FaArrowLeft, FaSearch, FaQuestionCircle, FaComments, FaEnvelope, FaPhone, FaChevronDown, FaChevronUp, FaBook, FaVideo, FaHeadset } from 'react-icons/fa';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';

export const HelpPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const faqCategories = [
    {
      title: 'Getting Started',
      faqs: [
        {
          question: 'How do I create an account?',
          answer: 'Click "Get Started" on our homepage, provide your email and create a password. You\'ll need to verify your email and complete identity verification to start investing.'
        },
        {
          question: 'What is the minimum investment amount?',
          answer: 'You can start investing with as little as $10. There are no maximum limits, and you can add funds to your account at any time.'
        },
        {
          question: 'How long does account verification take?',
          answer: 'Identity verification typically takes 24-48 hours. You can explore our demo mode while waiting for approval.'
        }
      ]
    },
    {
      title: 'Investing & Strategies',
      faqs: [
        {
          question: 'How do the AI investment strategies work?',
          answer: 'Our AI algorithms analyze market data 24/7 to optimize your portfolio. Based on your risk tolerance, the system automatically rebalances your investments to maximize returns while managing risk.'
        },
        {
          question: 'Can I change my investment strategy?',
          answer: 'Yes, you can switch between Conservative, Moderate, and Aggressive strategies at any time from your dashboard. Changes take effect within 24 hours.'
        },
        {
          question: 'What cryptocurrencies do you support?',
          answer: 'We support major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), and various DeFi tokens. Our AI selects the best assets based on your chosen strategy.'
        }
      ]
    },
    {
      title: 'Deposits & Withdrawals',
      faqs: [
        {
          question: 'How do I deposit funds?',
          answer: 'You can deposit via bank transfer (ACH), credit/debit card, or crypto wallet. Bank transfers are free but take 1-3 days, while card deposits are instant with a 2.9% fee.'
        },
        {
          question: 'How long do withdrawals take?',
          answer: 'Bank withdrawals take 1-3 business days and are free. Crypto withdrawals take 10-30 minutes with network fees only.'
        },
        {
          question: 'Are there any withdrawal limits?',
          answer: 'You can withdraw up to $5,000 per day without additional verification. Higher amounts may require manual approval for security.'
        }
      ]
    },
    {
      title: 'Security & Safety',
      faqs: [
        {
          question: 'How secure are my funds?',
          answer: 'Your funds are protected by multi-signature wallets, cold storage, and $50M insurance coverage. We use bank-grade security measures to protect your investments.'
        },
        {
          question: 'What is two-factor authentication?',
          answer: '2FA adds an extra security layer by requiring a code from your phone when logging in. We highly recommend enabling this feature in your security settings.'
        },
        {
          question: 'How do you protect my personal information?',
          answer: 'We use 256-bit SSL encryption and never share your data with third parties. All personal information is stored securely and encrypted.'
        }
      ]
    }
  ];

  const contactMethods = [
    {
      icon: FaComments,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      action: 'Start Chat',
      available: '24/7'
    },
    {
      icon: FaEnvelope,
      title: 'Email Support',
      description: 'Send us a detailed message',
      action: 'Send Email',
      available: 'Response within 2 hours'
    },
    {
      icon: FaPhone,
      title: 'Phone Support',
      description: 'Speak directly with our team',
      action: 'Call Now',
      available: 'Mon-Fri 9AM-6PM EST'
    }
  ];

  const resources = [
    {
      icon: FaBook,
      title: 'Knowledge Base',
      description: 'Comprehensive guides and tutorials',
      articles: '50+ articles'
    },
    {
      icon: FaVideo,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      articles: '15+ videos'
    },
    {
      icon: FaHeadset,
      title: 'Webinars',
      description: 'Live crypto investment education',
      articles: 'Weekly sessions'
    }
  ];

  const filteredFaqs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

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
            Help & Support
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-[var(--space-6)]">
        {/* Header */}
        <div className="text-center mb-[var(--space-8)]">
          <h1 className="text-3xl font-bold text-[var(--text)] mb-[var(--space-2)]">
            How can we help you?
          </h1>
          <p className="text-[var(--text-secondary)] mb-[var(--space-6)]">
            Find answers to common questions or get in touch with our support team
          </p>
          <div className="max-w-md mx-auto">
            <Input
              placeholder="Search for help articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={FaSearch}
            />
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-[var(--space-6)] mb-[var(--space-12)]">
          {contactMethods.map((method, i) => {
            const IconComponent = method.icon;
            return (
              <Card key={i} className="p-[var(--space-6)] text-center hover:shadow-[var(--shadow-xl)] transition-all">
                <IconComponent className="text-4xl text-[var(--primary)] mx-auto mb-[var(--space-4)]" />
                <h3 className="text-xl font-bold text-[var(--text)] mb-[var(--space-2)]">{method.title}</h3>
                <p className="text-[var(--text-secondary)] mb-[var(--space-4)]">{method.description}</p>
                <Button className="gradient-primary text-white mb-[var(--space-2)]">
                  {method.action}
                </Button>
                <div className="text-sm text-[var(--text-secondary)]">{method.available}</div>
              </Card>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="mb-[var(--space-12)]">
          <h2 className="text-2xl font-bold text-[var(--text)] mb-[var(--space-6)] text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-[var(--space-6)]">
            {filteredFaqs.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="p-[var(--space-6)]">
                <h3 className="text-xl font-bold text-[var(--text)] mb-[var(--space-4)]">
                  {category.title}
                </h3>
                <div className="space-y-[var(--space-3)]">
                  {category.faqs.map((faq, faqIndex) => {
                    const faqId = `${categoryIndex}-${faqIndex}`;
                    const isOpen = openFaq === faqId;
                    return (
                      <div key={faqIndex} className="border border-[var(--border)] rounded-[var(--radius-lg)]">
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : faqId)}
                          className="w-full flex items-center justify-between p-[var(--space-4)] text-left hover:bg-[var(--surface)] transition-colors"
                        >
                          <span className="font-semibold text-[var(--text)]">{faq.question}</span>
                          {isOpen ? (
                            <FaChevronUp className="text-[var(--text-secondary)]" />
                          ) : (
                            <FaChevronDown className="text-[var(--text-secondary)]" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="p-[var(--space-4)] pt-0 text-[var(--text-secondary)] leading-relaxed">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </Card>
            ))}
          </div>
          
          {filteredFaqs.length === 0 && searchTerm && (
            <div className="text-center py-[var(--space-12)]">
              <FaQuestionCircle className="text-4xl text-[var(--text-secondary)] mx-auto mb-4" />
              <p className="text-[var(--text-secondary)]">No FAQ found matching "{searchTerm}"</p>
              <p className="text-[var(--text-secondary)] mt-2">Try contacting our support team for help</p>
            </div>
          )}
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-2xl font-bold text-[var(--text)] mb-[var(--space-6)] text-center">
            Learning Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-[var(--space-6)]">
            {resources.map((resource, i) => {
              const IconComponent = resource.icon;
              return (
                <Card key={i} className="p-[var(--space-6)] text-center hover:shadow-[var(--shadow-xl)] transition-all cursor-pointer">
                  <IconComponent className="text-4xl text-[var(--secondary)] mx-auto mb-[var(--space-4)]" />
                  <h3 className="text-xl font-bold text-[var(--text)] mb-[var(--space-2)]">{resource.title}</h3>
                  <p className="text-[var(--text-secondary)] mb-[var(--space-4)]">{resource.description}</p>
                  <div className="text-sm font-semibold text-[var(--primary)]">{resource.articles}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};