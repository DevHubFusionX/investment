import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBitcoin, FaArrowLeft, FaGraduationCap, FaBook, FaVideo, FaPlay, FaClock, FaUsers, FaStar, FaChevronRight, FaLightbulb, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export const EducationPage = () => {
  const [activeCategory, setActiveCategory] = useState('beginner');

  const categories = [
    { id: 'beginner', label: 'Beginner', icon: FaLightbulb },
    { id: 'intermediate', label: 'Intermediate', icon: FaChartLine },
    { id: 'advanced', label: 'Advanced', icon: FaGraduationCap },
    { id: 'security', label: 'Security', icon: FaShieldAlt }
  ];

  const courses = {
    beginner: [
      {
        title: 'Cryptocurrency Basics',
        description: 'Learn the fundamentals of Bitcoin, blockchain, and digital currencies',
        duration: '45 min',
        lessons: 8,
        rating: 4.9,
        students: 12500,
        type: 'course',
        progress: 0
      },
      {
        title: 'Getting Started with CryptoVault',
        description: 'Complete guide to using our platform and investment strategies',
        duration: '30 min',
        lessons: 6,
        rating: 4.8,
        students: 8900,
        type: 'course',
        progress: 25
      },
      {
        title: 'Understanding Market Volatility',
        description: 'Why crypto prices fluctuate and how to manage risk',
        duration: '20 min',
        lessons: 4,
        rating: 4.7,
        students: 6700,
        type: 'course',
        progress: 0
      }
    ],
    intermediate: [
      {
        title: 'DeFi and Yield Farming',
        description: 'Explore decentralized finance protocols and earning strategies',
        duration: '60 min',
        lessons: 10,
        rating: 4.8,
        students: 5400,
        type: 'course',
        progress: 0
      },
      {
        title: 'Technical Analysis for Crypto',
        description: 'Chart patterns, indicators, and trading strategies',
        duration: '90 min',
        lessons: 12,
        rating: 4.6,
        students: 4200,
        type: 'course',
        progress: 0
      },
      {
        title: 'Portfolio Diversification',
        description: 'Building a balanced crypto investment portfolio',
        duration: '40 min',
        lessons: 7,
        rating: 4.9,
        students: 3800,
        type: 'course',
        progress: 60
      }
    ],
    advanced: [
      {
        title: 'Algorithmic Trading Strategies',
        description: 'Advanced AI and machine learning trading concepts',
        duration: '120 min',
        lessons: 15,
        rating: 4.7,
        students: 2100,
        type: 'course',
        progress: 0
      },
      {
        title: 'Institutional Investment Approaches',
        description: 'How large funds and institutions invest in crypto',
        duration: '75 min',
        lessons: 9,
        rating: 4.8,
        students: 1800,
        type: 'course',
        progress: 0
      }
    ],
    security: [
      {
        title: 'Crypto Security Best Practices',
        description: 'Protect your investments from hacks and scams',
        duration: '35 min',
        lessons: 6,
        rating: 4.9,
        students: 9200,
        type: 'course',
        progress: 100
      },
      {
        title: 'Wallet Security and Backup',
        description: 'Secure storage and recovery of your crypto assets',
        duration: '25 min',
        lessons: 5,
        rating: 4.8,
        students: 7600,
        type: 'course',
        progress: 0
      }
    ]
  };

  const webinars = [
    {
      title: 'Market Outlook 2024: Crypto Trends',
      date: 'Feb 15, 2024',
      time: '2:00 PM EST',
      speaker: 'Sarah Chen, Chief Analyst',
      attendees: 1200,
      status: 'upcoming'
    },
    {
      title: 'AI in Crypto Trading',
      date: 'Feb 8, 2024',
      time: '3:00 PM EST',
      speaker: 'Dr. Mike Rodriguez',
      attendees: 890,
      status: 'recorded'
    },
    {
      title: 'DeFi Yield Strategies',
      date: 'Feb 1, 2024',
      time: '1:00 PM EST',
      speaker: 'Alex Thompson, DeFi Expert',
      attendees: 750,
      status: 'recorded'
    }
  ];

  const glossaryTerms = [
    { term: 'HODL', definition: 'Hold On for Dear Life - Long-term investment strategy' },
    { term: 'DeFi', definition: 'Decentralized Finance - Financial services on blockchain' },
    { term: 'Staking', definition: 'Earning rewards by holding and validating crypto' },
    { term: 'Market Cap', definition: 'Total value of all coins in circulation' }
  ];

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
          <div className="flex items-center gap-2 text-[var(--text-secondary)]">
            <FaGraduationCap />
            <span>Learning Center</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-[var(--space-6)]">
        {/* Header */}
        <div className="text-center mb-[var(--space-8)]">
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text)] mb-[var(--space-4)]">
            Crypto Investment Education
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            Master cryptocurrency investing with our comprehensive courses, webinars, and resources
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--space-4)] mb-[var(--space-12)]">
          <Card className="p-[var(--space-4)] text-center">
            <div className="text-2xl font-bold text-[var(--primary)]">50+</div>
            <div className="text-sm text-[var(--text-secondary)]">Courses</div>
          </Card>
          <Card className="p-[var(--space-4)] text-center">
            <div className="text-2xl font-bold text-[var(--secondary)]">25K+</div>
            <div className="text-sm text-[var(--text-secondary)]">Students</div>
          </Card>
          <Card className="p-[var(--space-4)] text-center">
            <div className="text-2xl font-bold text-[var(--accent)]">4.8</div>
            <div className="text-sm text-[var(--text-secondary)]">Avg Rating</div>
          </Card>
          <Card className="p-[var(--space-4)] text-center">
            <div className="text-2xl font-bold text-[var(--success)]">100%</div>
            <div className="text-sm text-[var(--text-secondary)]">Free</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-4 gap-[var(--space-8)]">
          {/* Course Categories */}
          <div className="lg:col-span-3">
            <div className="flex flex-wrap gap-[var(--space-3)] mb-[var(--space-6)]">
              {categories.map(category => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-[var(--radius-lg)] font-medium transition-all ${
                      activeCategory === category.id
                        ? 'bg-[var(--primary)] text-white'
                        : 'text-[var(--text-secondary)] hover:bg-[var(--surface)] border border-[var(--border)]'
                    }`}
                  >
                    <IconComponent />
                    {category.label}
                  </button>
                );
              })}
            </div>

            {/* Courses Grid */}
            <div className="grid md:grid-cols-2 gap-[var(--space-6)] mb-[var(--space-12)]">
              {courses[activeCategory]?.map((course, i) => (
                <Card key={i} className="p-[var(--space-6)] hover:shadow-[var(--shadow-xl)] transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-[var(--space-4)]">
                    <div className="flex items-center gap-2">
                      <FaBook className="text-[var(--primary)]" />
                      <span className="text-sm font-medium text-[var(--primary)]">Course</span>
                    </div>
                    {course.progress > 0 && (
                      <div className="text-sm text-[var(--success)]">{course.progress}% Complete</div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-[var(--text)] mb-[var(--space-2)]">
                    {course.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-[var(--space-4)]">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center gap-[var(--space-4)] mb-[var(--space-4)] text-sm text-[var(--text-secondary)]">
                    <div className="flex items-center gap-1">
                      <FaClock />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <FaBook />
                      {course.lessons} lessons
                    </div>
                    <div className="flex items-center gap-1">
                      <FaUsers />
                      {course.students.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <FaStar className="text-[var(--warning)]" />
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                    <Button className="gradient-primary text-white">
                      {course.progress > 0 ? 'Continue' : 'Start Course'}
                      <FaChevronRight className="ml-2" />
                    </Button>
                  </div>
                  
                  {course.progress > 0 && (
                    <div className="mt-[var(--space-3)]">
                      <div className="w-full bg-[var(--border)] rounded-full h-2">
                        <div 
                          className="gradient-primary h-2 rounded-full transition-all"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-[var(--space-6)]">
            {/* Upcoming Webinars */}
            <Card className="p-[var(--space-6)]">
              <h3 className="text-lg font-bold text-[var(--text)] mb-[var(--space-4)] flex items-center gap-2">
                <FaVideo className="text-[var(--accent)]" />
                Live Webinars
              </h3>
              <div className="space-y-[var(--space-4)]">
                {webinars.map((webinar, i) => (
                  <div key={i} className="border-b border-[var(--border)] pb-[var(--space-3)] last:border-b-0">
                    <h4 className="font-semibold text-[var(--text)] mb-1">{webinar.title}</h4>
                    <div className="text-sm text-[var(--text-secondary)] mb-2">
                      {webinar.date} • {webinar.time}
                    </div>
                    <div className="text-sm text-[var(--text-secondary)] mb-2">
                      by {webinar.speaker}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[var(--text-secondary)]">
                        {webinar.attendees} attendees
                      </span>
                      <Button variant="outline" size="sm">
                        {webinar.status === 'upcoming' ? 'Register' : 'Watch'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Crypto Glossary */}
            <Card className="p-[var(--space-6)]">
              <h3 className="text-lg font-bold text-[var(--text)] mb-[var(--space-4)]">
                Crypto Glossary
              </h3>
              <div className="space-y-[var(--space-3)]">
                {glossaryTerms.map((item, i) => (
                  <div key={i} className="border-b border-[var(--border)] pb-[var(--space-2)] last:border-b-0">
                    <div className="font-semibold text-[var(--text)]">{item.term}</div>
                    <div className="text-sm text-[var(--text-secondary)]">{item.definition}</div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-[var(--space-4)]">
                View All Terms
              </Button>
            </Card>

            {/* Quick Links */}
            <Card className="p-[var(--space-6)]">
              <h3 className="text-lg font-bold text-[var(--text)] mb-[var(--space-4)]">
                Quick Links
              </h3>
              <div className="space-y-[var(--space-2)]">
                <Link to="/help" className="block text-[var(--primary)] hover:underline">
                  Help & Support
                </Link>
                <Link to="/market" className="block text-[var(--primary)] hover:underline">
                  Market Analysis
                </Link>
                <Link to="/strategies" className="block text-[var(--primary)] hover:underline">
                  Investment Strategies
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};