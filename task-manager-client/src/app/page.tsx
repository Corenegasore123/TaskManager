'use client';

import Image from "next/image";
import Link from "next/link";
import '@fontsource/poppins';
import { Menu, X, CheckCircle, Clock, Target, Users, ArrowRight, Play, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

// About Us Section
const AboutSection = () => (
  <section id="about" className="py-20 bg-gradient-to-br from-white via-purple-50 to-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col items-center mb-12 text-center">
        <span className="text-purple1 text-sm font-semibold tracking-wider uppercase mb-2">Why Choose Us</span>
        <h3 className="text-4xl font-bold text-gray-900 mb-4">Transforming Task Management</h3>
        <div className="w-20 h-1 bg-gradient-to-r from-purple1 to-purple2 rounded-full"></div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-16 items-center justify-between">
        <div className="w-full md:w-1/2 relative">
          <div className="relative z-10">
            <Image
              src="/landing/about.png"
              alt="About Us"
              width={500}
              height={400}
              className="rounded-2xl shadow-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="space-y-8 w-full md:w-1/2">
          <div className="space-y-6">
            <h4 className="text-2xl font-bold text-gray-900">Your Productivity Partner</h4>
            <p className="text-lg text-gray-600 leading-relaxed">
              At TaskManager, we believe in making task management intuitive and efficient. Our platform combines powerful features with simplicity to help you achieve more.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: <CheckCircle className="w-6 h-6 text-purple1" />, title: "Smart Organization", desc: "Intelligent task categorization" },
              { icon: <Clock className="w-6 h-6 text-purple1" />, title: "Time Tracking", desc: "Monitor project progress" },
              { icon: <Target className="w-6 h-6 text-purple1" />, title: "Goal Setting", desc: "Set and achieve milestones" },
              { icon: <Users className="w-6 h-6 text-purple1" />, title: "Team Collaboration", desc: "Work together seamlessly" }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">{item.title}</h5>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Features Section
const FeaturesSection = () => (
  <section id="features" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-purple1 text-sm font-semibold tracking-wider uppercase mb-2 block">Features</span>
        <h3 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need</h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Powerful features to help you manage tasks, collaborate with your team, and achieve your goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          {
            title: "Create Tasks",
            description: "Create, organize, and prioritize tasks with ease. Add descriptions, attachments, and tags.",
            icon: <CheckCircle className="w-8 h-8" />,
            color: "from-blue-500 to-blue-600"
          },
          {
            title: "Set Reminders",
            description: "Never miss a deadline with customizable notifications and reminders.",
            icon: <Clock className="w-8 h-8" />,
            color: "from-purple1 to-purple2"
          },
          {
            title: "Track Progress",
            description: "Monitor task completion with visual progress bars and status updates.",
            icon: <Target className="w-8 h-8" />,
            color: "from-green-500 to-green-600"
          },
          {
            title: "Kanban Boards",
            description: "Visualize your workflow with customizable Kanban boards and columns.",
            icon: <Users className="w-8 h-8" />,
            color: "from-orange-500 to-orange-600"
          }
        ].map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-6`}>
              {feature.icon}
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            <Link
              href="#"
              className="inline-flex items-center text-purple1 hover:text-purple2 transition-colors"
            >
              Learn more <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// How We Work Section
const HowWeWorkSection = () => (
  <section id="how" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2 relative">
          <div className="relative z-10">
            <Image
              src="/landing/how.png"
              alt="How We Work"
              width={500}
              height={400}
              className="rounded-2xl shadow-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-8">
          <div>
            <span className="text-purple1 text-sm font-semibold tracking-wider uppercase mb-2 block">Our Process</span>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">How We Work</h3>
            <p className="text-lg text-gray-600 mb-8">
              Our streamlined process makes task management simple and efficient. From creating tasks to completing projects, we're here to help every step of the way.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { number: "01", title: "Create Your Workspace", desc: "Set up your personal or team workspace in seconds" },
              { number: "02", title: "Add Your Tasks", desc: "Quickly add and organize tasks with our intuitive interface" },
              { number: "03", title: "Track Progress", desc: "Monitor progress and celebrate completions" }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <span className="text-2xl font-bold text-purple1">{step.number}</span>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/(auth)/register"
            className="inline-flex items-center gap-2 bg-purple-50 border-2 border-purple1 text-purple1 px-6 py-3 rounded-lg hover:bg-purple-100 transition-colors"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

// Footer Section
const FooterSection = () => (
  <footer className="bg-footercolor pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-900">
            <span className="text-purple1">Task</span>Manager
          </h1>
          <p className="text-gray-600">Your Tasks Simplified, For Peace of Mind</p>
        </div>

        <div>
          <h5 className="font-semibold text-gray-900 mb-4">Quick Links</h5>
          <ul className="space-y-3">
            {["Home", "About", "Features", "Contact"].map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-purple1 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-gray-900 mb-4">Features</h5>
          <ul className="space-y-3">
            {["Task Creation", "Time Tracking", "Team Management", "Analytics"].map((item) => (
              <li key={item}>
                <Link href="#" className="text-gray-600 hover:text-purple1 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-gray-900 mb-4">Contact Us</h5>
          <ul className="space-y-3">
            {[
              { icon: <Mail className="w-5 h-5" />, text: "support@taskmanager.com" },
              { icon: <Phone className="w-5 h-5" />, text: "+1 (555) 123-4567" },
              { icon: <MapPin className="w-5 h-5" />, text: "123 Task Street, Rwanda" }
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-gray-600">
                {item.icon}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© 2025 TaskManager. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="#privacy" className="text-gray-600 hover:text-purple1 transition-colors">Privacy Policy</Link>
            <Link href="#terms" className="text-gray-600 hover:text-purple1 transition-colors">Terms of Service</Link>
            <Link href="#cookies" className="text-gray-600 hover:text-purple1 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="group">
              <h1 className="text-2xl font-bold text-black tracking-wide transition-colors duration-200">
                <span className="text-purple1 group-hover:text-purple2 transition-colors duration-200">Task</span>
                <span className="group-hover:text-purple1 transition-colors duration-200">Manager</span>
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {["Home", "About", "Features", "Contact"].map((item, index) => (
                <Link 
                  key={index} 
                  href={`#${item.toLowerCase()}`} 
                  className="relative text-gray-700 font-medium transition-colors duration-200
                    hover:text-purple1 py-2
                    after:content-[''] after:absolute after:bottom-0 after:left-0 
                    after:w-full after:h-0.5 after:bg-purple1
                    after:transform after:scale-x-0 after:origin-left
                    after:transition-transform after:duration-300
                    hover:after:scale-x-100"
                >
                  {item}
                </Link>
              ))}
              <Link
                href = '/auth/login'
                className="relative overflow-hidden group bg-gradient-to-r from-purple1 to-purple2 
                  text-white py-2 px-6 rounded-lg transition-all duration-300
                  hover:shadow-lg hover:-translate-y-0.5
                  after:absolute after:inset-0 after:bg-white 
                  after:opacity-0 after:transition-opacity 
                  after:duration-300 hover:after:opacity-20"
              >
                <span className="relative z-10">Login</span>
              </Link>
            </nav>

            <button 
              className="md:hidden p-2 rounded-md transition-colors duration-200 
                hover:bg-purple-50 group"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600 group-hover:text-purple1 transition-colors duration-200" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600 group-hover:text-purple1 transition-colors duration-200" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                {["Home", "About", "Features", "Contact"].map((item, index) => (
                  <Link
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 font-medium px-2 py-1
                      transition-all duration-200
                      hover:text-purple1 hover:pl-4
                      hover:bg-purple-50 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
                <Link
                  href = ''
                  className="bg-gradient-to-r from-purple1 to-purple2 
                    text-white py-2 px-6 rounded-lg
                    transition-all duration-200
                    hover:shadow-lg hover:opacity-90
                    transform hover:-translate-y-0.5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-gray-50 py-16 overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-purple-50 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-200 to-purple-100 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 px-6 relative">
          <div className="text-center md:text-left md:w-1/2 space-y-8 z-10">
            <div className="inline-block px-6 py-2 bg-purple-50 rounded-full mb-4 border border-purple-100">
              <p className="text-purple-600 text-sm font-medium flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
                Get More Done with TaskManager
              </p>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Organize Your
              <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple1 to-purple2">
                Work & Life
              </span>
            </h2>

            <p className="text-lg text-gray-600 max-w-xl">
              Transform your task management experience with our powerful yet simple platform. 
              Stay organized, meet deadlines, and achieve your goals with ease.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/(auth)/register"
                className="group bg-gradient-to-r from-purple1 to-purple3 text-white py-4 px-8 rounded-lg hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#features"
                className="group bg-white text-gray-800 border-2 border-gray-200 py-4 px-8 rounded-lg hover:border-purple-200 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Learn More
                <ArrowRight className="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Image with floating elements */}
          <div className="relative md:w-1/2">
            {/* Main image */}
            <div className="relative z-10 rounded-2xl shadow-2xl bg-white p-2">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl"></div>
              <Image
                src="/landing/32.png"
                alt="Task Manager Dashboard"
                width={600}
                height={700}
                className="rounded-xl"
                priority
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg z-20 hidden md:block transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Task Completed</p>
                  <p className="text-sm text-gray-500">Project milestone reached</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg z-20 hidden md:block transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple1 to-purple2 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">New Task</p>
                  <p className="text-sm text-gray-500">Added to your workspace</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* How We Work Section */}
      <HowWeWorkSection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}