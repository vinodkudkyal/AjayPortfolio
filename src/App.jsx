
import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, Phone, MapPin, Globe, ExternalLink, Award, Briefcase, 
  BookOpen, ChevronRight, X, TrendingUp, Target, Zap, 
  Star, Clock, Search, FileText, Users, Layers, Sparkles,
  Menu, Download, ArrowUpRight, Quote, Eye, Home, User, Code, Mail as MailIcon
} from 'lucide-react';

import resume from './assets/resume.pdf';
// import profile from './assets/profile.jpeg';
// import profile from './assets/profile1.jpeg';
import profile from './assets/profile2.jpeg';

import realme from './assets/realme.png';
import redmi from './assets/redmi.png';
import poco from './assets/poco.png';
import lava from './assets/lava.png';
import nothing from './assets/nothing.png';
import pocoF7 from './assets/poco_f7.png';
import samsung from './assets/samsung.png';
import vivo from './assets/vivo.png';

const Portfolio = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState('idle'); // idle, loading, success, error
  
  // Refs for sections
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  // Handle scroll effects and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = [
        { id: 'home', ref: homeRef },
        { id: 'experience', ref: experienceRef },
        { id: 'work', ref: workRef },
        { id: 'contact', ref: contactRef }
      ];

      const scrollPosition = window.scrollY + 200; // Offset for better detection

      for (const section of sections) {
        if (section.ref.current) {
          const element = section.ref.current;
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const refs = {
      home: homeRef,
      experience: experienceRef,
      work: workRef,
      contact: contactRef
    };

    const targetRef = refs[sectionId];
    if (targetRef && targetRef.current) {
      const offset = 80; // Offset for fixed navbar
      const elementPosition = targetRef.current.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
    setActiveSection(sectionId);
  };

  // Handle resume download
  const handleDownloadResume = async () => {
    setDownloadStatus('loading');
    try {
      // Path to resume file (adjust based on your actual file)
      // const resumePath = './src/assets/resume.pdf'; // or .doc, .docx
      const resumePath = resume;
      
      // Create a link element
      const link = document.createElement('a');
      link.href = resumePath;
      link.download = 'Ajay_Tukaram_Yangal_Resume.pdf'; // Filename for download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setDownloadStatus('success');
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setDownloadStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Download failed:', error);
      setDownloadStatus('error');
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setDownloadStatus('idle');
      }, 3000);
    }
  };

  const openModal = (caseStudy) => {
    setSelectedCase(caseStudy);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Sample bio text from Ajay
  const bioText = `Hi, I'm Ajay Tukaram Yangal, an SEO Content Writer with over 2 years of experience in creating SEO-optimized blog content that helps websites grow through organic search.

I have strong knowledge of on-page SEO, off-page SEO, and keyword research, using industry tools like SEMrush, Ahrefs, and Google Trends to identify high-potential topics and trending search queries. My goal is not just to write articles, but to create content that aligns with search intent and performs well in search engines.

Over time, I have written 300+ blog articles across multiple niches, including 100+ technology articles focused on smartphones, AI tools, comparisons, and buying guides. Many of my blogs have successfully ranked on Google's first page, even competing with large authority websites.

Some of my content has also been featured in Google AI Overviews, highlighting the credibility and search relevance of my work.

Through my experience, I focus on creating clear, structured, and engaging content that is optimized for search rankings, reader experience, and long-term organic growth.`;

  const caseStudies = [
    { 
      id: 1,
      title: 'Realme P4 Power', 
      result: 'Ranked on Page 1 within 2 HOURS of publishing.',
      img: realme,
      details: 'This article leveraged trending keywords and optimized structure to achieve lightning-fast rankings. The content focused on user intent and included high-value technical specifications that Google prioritized.',
      metrics: { time: '2 hours', position: '#1', traffic: '+450%', shares: '127' }
    },
    { 
      id: 2,
      title: 'Redmi Note 15 Pro+', 
      result: 'Top result within 7 HOURS.',
      img: redmi,
      details: 'Comprehensive comparison with competitor devices, optimized meta descriptions, and strategic internal linking helped this article dominate search results within hours.',
      metrics: { time: '7 hours', position: '#1', traffic: '+320%', shares: '89' }
    },
    { 
      id: 3,
      title: 'POCO M6 Pro', 
      result: 'Successfully ranked using on-page optimization and keyword strategy.',
      img: poco,
      details: 'In-depth keyword research revealed high-intent search terms. The article was structured with proper header tags, featured snippets optimization, and multimedia elements.',
      metrics: { time: '3 days', position: '#3', traffic: '+280%', shares: '156' }
    },
    { 
      id: 4,
      title: 'Lava Agni 4', 
      result: 'Ranking achieved through Google Discover optimization.',
      img: lava,
      details: 'Optimized for Google Discover with eye-catching featured images, trending topics, and engaging headlines that drove significant organic traffic.',
      metrics: { time: '1 day', position: '#2', traffic: '+520%', shares: '203' }
    },
    { 
      id: 5,
      title: 'Nothing Phone 3a', 
      result: 'SEO optimized content ranked organically.',
      img: nothing,
      details: 'Clean, authoritative content with proper schema markup and mobile optimization helped this article gain Google\'s trust and rank organically.',
      metrics: { time: '5 days', position: '#4', traffic: '+195%', shares: '67' }
    },
    { 
      id: 6,
      title: 'POCO F7', 
      result: 'Achieved ranking through competitor analysis.',
      img: pocoF7,
      details: 'Analyzed top-ranking competitor content and created a superior, more comprehensive guide that outperformed existing articles in depth and quality.',
      metrics: { time: '2 days', position: '#2', traffic: '+310%', shares: '142' }
    },
    { 
      id: 7,
      title: 'Samsung M36', 
      result: 'Organic ranking improvement through technical SEO.',
      img: samsung,
      details: 'Technical SEO improvements including page speed optimization, structured data, and improved internal linking structure boosted rankings significantly.',
      metrics: { time: '1 week', position: '#5', traffic: '+175%', shares: '94' }
    },
    { 
      id: 8,
      title: 'Vivo Y400', 
      result: 'Achieved search visibility via structured content. Multiple articles ranked simultaneously.',
      img: vivo,
      details: 'Created a content cluster around the topic with pillar page and supporting articles, dominating search results with multiple rankings on first page.',
      metrics: { time: '4 days', position: '#1, #3, #7', traffic: '+680%', shares: '278' }
    }
  ];

  const skills = [
    { name: 'SEO (On-page & Off-page)', level: 95, icon: <Search size={16} /> },
    { name: 'Google Discover Optimization', level: 90, icon: <Zap size={16} /> },
    { name: 'Blog Writing & Content Strategy', level: 98, icon: <FileText size={16} /> },
    { name: 'Keyword Research', level: 92, icon: <Target size={16} /> },
    { name: 'Competitor Analysis', level: 88, icon: <Users size={16} /> },
    { name: 'WordPress CMS', level: 85, icon: <Layers size={16} /> },
    { name: 'Google Analytics & Search Console', level: 87, icon: <TrendingUp size={16} /> },
    { name: 'SEMrush & Ahrefs', level: 89, icon: <Search size={16} /> },
    { name: 'Canva', level: 82, icon: <Sparkles size={16} /> }
  ];

  const achievements = [
    { number: '300+', label: 'Blog Articles Written', icon: <FileText size={24} /> },
    { number: '100+', label: 'Tech Articles', icon: <Zap size={24} /> },
    { number: '100+', label: 'Articles on TechSCR', icon: <Globe size={24} /> },
    { number: '15+', label: 'First Page Rankings', icon: <Award size={24} /> }
  ];

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={18} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
    { id: 'work', label: 'Work', icon: <Code size={18} /> },
    { id: 'contact', label: 'Contact', icon: <MailIcon size={18} /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 font-sans text-slate-800 selection:bg-blue-200 relative">
      
      {/* Navigation Bar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            AY<span className="text-slate-900">.</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative group flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                  activeSection === item.id 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50/50'
                }`}
              >
                <span className={`transition-transform group-hover:scale-110 ${
                  activeSection === item.id ? 'text-blue-600' : ''
                }`}>
                  {item.icon}
                </span>
                <span className="font-medium">{item.label}</span>
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Resume Download Button */}
          <button
            onClick={handleDownloadResume}
            disabled={downloadStatus === 'loading'}
            className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-all hover:scale-105 shadow-lg ${
              downloadStatus === 'loading'
                ? 'bg-blue-400 cursor-not-allowed'
                : downloadStatus === 'success'
                ? 'bg-green-600 hover:bg-green-700'
                : downloadStatus === 'error'
                ? 'bg-red-600 hover:bg-red-700'
                : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
            } text-white`}
          >
            {downloadStatus === 'loading' ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Downloading...
              </>
            ) : downloadStatus === 'success' ? (
              <>
                <Download size={16} /> Downloaded!
              </>
            ) : downloadStatus === 'error' ? (
              <>
                <X size={16} /> Retry
              </>
            ) : (
              <>
                <Download size={16} /> Resume
              </>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-blue-50 rounded-lg transition-colors"
          >
            <Menu size={24} className={scrolled ? 'text-slate-700' : 'text-slate-700'} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-xl transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 border-t border-slate-100' : 'max-h-0'
        }`}>
          <div className="p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  activeSection === item.id 
                    ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 border-l-4 border-blue-600' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <span className={activeSection === item.id ? 'text-blue-600' : ''}>
                  {item.icon}
                </span>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
            
            {/* Mobile Download Button */}
            <button
              onClick={handleDownloadResume}
              disabled={downloadStatus === 'loading'}
              className={`w-full flex items-center justify-center gap-2 mt-4 px-4 py-3 rounded-xl font-medium transition-all ${
                downloadStatus === 'loading'
                  ? 'bg-blue-400 text-white cursor-not-allowed'
                  : downloadStatus === 'success'
                  ? 'bg-green-600 text-white'
                  : downloadStatus === 'error'
                  ? 'bg-red-600 text-white'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
              }`}
            >
              {downloadStatus === 'loading' ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Downloading...
                </>
              ) : downloadStatus === 'success' ? (
                <>
                  <Download size={16} /> Resume Downloaded!
                </>
              ) : downloadStatus === 'error' ? (
                <>
                  <X size={16} /> Download Failed - Retry
                </>
              ) : (
                <>
                  <Download size={16} /> Download Resume
                </>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Modal Popup */}
      {isModalOpen && selectedCase && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
            >
              <X size={24} />
            </button>
            
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-2xl">
                  <Award className="text-blue-600" size={32} />
                </div>
                <div>
                  <span className="text-blue-600 text-sm font-semibold tracking-wider">CASE STUDY #{selectedCase.id}</span>
                  <h2 className="text-3xl font-bold text-slate-900">{selectedCase.title}</h2>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {Object.entries(selectedCase.metrics).map(([key, value]) => (
                  <div key={key} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{value}</div>
                    <div className="text-xs text-slate-600 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              {/* Image */}
              <div className="rounded-2xl overflow-hidden mb-8 shadow-xl">
                <img 
                  src={selectedCase.img} 
                  alt={selectedCase.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Details */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Target className="text-blue-600" /> Strategy & Results
                </h3>
                <p className="text-slate-600 leading-relaxed">{selectedCase.details}</p>
                <p className="text-slate-700 bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <Quote className="inline text-blue-400 mr-2" size={18} />
                  {selectedCase.result}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- HOME SECTION ---------------- */}
      <section id="home" ref={homeRef} className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32 scroll-mt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left space-y-8 animate-slideInLeft">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium animate-bounce-slow">
                <Sparkles size={16} />
                SEO Content Writer & Strategist
                <Sparkles size={16} />
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                  AJAY TUKARAM
                </span>
                <br />
                <span className="text-slate-900">YANGAL</span>
              </h1>
              
              <p className="text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fadeInUp">
                {bioText.split('.')[0]}. Creating content that ranks, engages, and converts.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fadeInUp animation-delay-200">
                <button 
                  onClick={() => scrollToSection('work')}
                  className="group bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-all hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-2"
                >
                  View My Work <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="group bg-white text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-all hover:scale-105 shadow-lg hover:shadow-xl border border-slate-200 flex items-center gap-2"
                >
                  <Mail size={20} /> Contact Me
                </button>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-slate-600 pt-4">
                <a href="mailto:ajayyangal4900@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors group">
                  <Mail size={16} className="group-hover:scale-110 transition-transform" /> ajayyangal4900@gmail.com
                </a>
                <a href="tel:+918010697161" className="flex items-center gap-2 hover:text-blue-600 transition-colors group">
                  <Phone size={16} className="group-hover:scale-110 transition-transform" /> +91 8010697161
                </a>
                <span className="flex items-center gap-2">
                  <MapPin size={16} /> Solapur, India
                </span>
                <a href="https://techscr.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition-colors group">
                  <Globe size={16} className="group-hover:scale-110 transition-transform" /> techscr.com
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex-1 flex justify-center animate-slideInRight">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full opacity-30 group-hover:opacity-50 blur-2xl transition-all duration-500 animate-pulse-slow"></div>
                <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                  <img
                    src={profile}
                    alt="Ajay Tukaram Yangal"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Badges */}
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl animate-float animation-delay-1000">
                  <div className="flex items-center gap-2">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <TrendingUp className="text-green-600" size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Content Written</div>
                      <div className="font-bold text-slate-900">300+ Articles</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl animate-float animation-delay-2000">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Star className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Success Rate</div>
                      <div className="font-bold text-slate-900">95% Rankings</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-20 space-y-32">

        {/* Professional Summary Card */}
        <div className="relative group animate-fadeInUp">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl opacity-25 group-hover:opacity-40 blur transition-all duration-500"></div>
          <div className="relative bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 p-4 rounded-2xl">
                <BookOpen size={32} className="text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Professional Summary
              </h2>
            </div>
            <p className="text-slate-700 leading-relaxed text-lg">
              {bioText}
            </p>
            
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-slate-100">
              {achievements.map((item, index) => (
                <div key={index} className="text-center group/stat">
                  <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover/stat:scale-110 group-hover/stat:bg-blue-100 transition-all">
                    <div className="text-blue-600">{item.icon}</div>
                  </div>
                  <div className="font-bold text-2xl text-slate-900">{item.number}</div>
                  <div className="text-xs text-slate-500">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---------------- EXPERIENCE SECTION ---------------- */}
        <section id="experience" ref={experienceRef} className="scroll-mt-20">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Experience Section with Timeline */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-4 rounded-2xl">
                  <Briefcase size={28} className="text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Professional Experience</h2>
              </div>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-8 before:w-0.5 before:bg-gradient-to-b before:from-blue-200 before:via-blue-400 before:to-transparent">
                
                {/* Job 1 */}
                <div className="relative flex gap-6 group animate-slideInLeft animation-delay-100">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Briefcase size={28} />
                    </div>
                    <div className="absolute -right-1 -top-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-slate-100">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h3 className="font-bold text-xl text-slate-900">Content Writer | SEO Content Writer</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">Present</span>
                    </div>
                    <p className="text-blue-600 font-medium mb-4">Remote</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-slate-600">
                        <ChevronRight size={18} className="mt-1 text-blue-400 shrink-0" />
                        <span>Write SEO-friendly tech articles based on Google Trends and niche keywords</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600">
                        <ChevronRight size={18} className="mt-1 text-blue-400 shrink-0" />
                        <span>Optimize content structure, headings, and images for Google Discover</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600">
                        <ChevronRight size={18} className="mt-1 text-blue-400 shrink-0" />
                        <span>Conduct on-page SEO and keyword optimization for better rankings</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Job 2 */}
                <div className="relative flex gap-6 group animate-slideInLeft animation-delay-200">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Globe size={28} />
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-slate-100">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h3 className="font-bold text-xl text-slate-900">Founder & Content Writer</h3>
                      <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">2024 – Present</span>
                    </div>
                    <p className="text-purple-600 font-medium mb-4">TechSCR.com</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-slate-600">
                        <ChevronRight size={18} className="mt-1 text-purple-400 shrink-0" />
                        <span>Created and published SEO content including reviews, comparisons, buying guides</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600">
                        <ChevronRight size={18} className="mt-1 text-purple-400 shrink-0" />
                        <span>Improved organic reach through Google Discover optimization</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600">
                        <ChevronRight size={18} className="mt-1 text-purple-400 shrink-0" />
                        <span>Conducted keyword research and competitor analysis</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Job 3 */}
                <div className="relative flex gap-6 group animate-slideInLeft animation-delay-300">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Users size={28} />
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-slate-100">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h3 className="font-bold text-xl text-slate-900">Freelance Content Writer</h3>
                      <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">2023 – 2024</span>
                    </div>
                    <p className="text-orange-600 font-medium mb-4">Self-Employed</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-slate-600">
                        <ChevronRight size={18} className="mt-1 text-orange-400 shrink-0" />
                        <span>Wrote SEO-optimized blogs for technology and education niches</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600">
                        <ChevronRight size={18} className="mt-1 text-orange-400 shrink-0" />
                        <span>Delivered well-researched content under tight deadlines</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600">
                        <ChevronRight size={18} className="mt-1 text-orange-400 shrink-0" />
                        <span>Helped clients improve Google ranking and organic visibility</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements & Skills Section */}
            <div className="space-y-12">
              
              {/* Key Achievements */}
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-yellow-100 p-4 rounded-2xl">
                    <Award size={28} className="text-yellow-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Key Achievements</h2>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                    <div className="bg-green-200 p-2 rounded-lg">
                      <FileText size={20} className="text-green-700" />
                    </div>
                    <div>
                      <span className="font-bold text-green-700">100+ technology articles</span>
                      <p className="text-slate-600 text-sm">on TechSCR.com with multiple first-page Google rankings</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                    <div className="bg-blue-200 p-2 rounded-lg">
                      <Zap size={20} className="text-blue-700" />
                    </div>
                    <div>
                      <span className="font-bold text-blue-700">Google Discover Optimization</span>
                      <p className="text-slate-600 text-sm">Boosted organic visibility and CTR significantly</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                    <div className="bg-purple-200 p-2 rounded-lg">
                      <Globe size={20} className="text-purple-700" />
                    </div>
                    <div>
                      <span className="font-bold text-purple-700">AdSense-approved blog</span>
                      <p className="text-slate-600 text-sm">Generating organic traffic and affiliate revenue</p>
                    </div>
                  </div>
                </div>

                <h4 className="font-bold text-lg text-slate-900 mb-4">Top-Ranking Articles:</h4>
                <div className="space-y-3">
                  {[
                    'IQOO Neo 10 Snapdragon 8s Gen 4 – Antutu Review',
                    'Realme GT 7 / GT 7T – Antutu Score & Review',
                    'Realme GT 7 vs IQOO Neo 10 – Comparison'
                  ].map((article, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-blue-50 rounded-xl transition-all group"
                    >
                      <ExternalLink size={16} className="text-blue-400 group-hover:rotate-12 transition-transform" />
                      <span className="text-sm text-slate-700 group-hover:text-blue-600">{article}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Skills with Progress Bars */}
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Skills & Tools</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-blue-600">{skill.icon}</span>
                          <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                        </div>
                        <span className="text-sm text-blue-600 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Education & Languages */}
                <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-100">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl">
                    <h4 className="font-bold text-slate-900 mb-2">Education</h4>
                    <p className="text-slate-600 text-sm">Bachelor of Computer Science</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl">
                    <h4 className="font-bold text-slate-900 mb-2">Languages</h4>
                    <p className="text-slate-600 text-sm">Marathi • Hindi • English • Telugu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- WORK SECTION (CASE STUDIES) ---------------- */}
        <section id="work" ref={workRef} className="scroll-mt-20 pt-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles size={16} />
              SEO Proof of Work
              <Sparkles size={16} />
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
              Real Results,{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Real Rankings
              </span>
            </h2>

            <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 border border-indigo-100 p-8 rounded-3xl text-left shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-indigo-200 p-3 rounded-xl">
                  <Target className="text-indigo-700" size={24} />
                </div>
                <h3 className="text-xl font-bold text-indigo-900">Pure SEO Methodology</h3>
              </div>
              <p className="text-indigo-800 leading-relaxed">
                TechSCR.com is a low-DA site, yet it's frequently cited as a <span className="font-bold text-indigo-900">"Source of Truth"</span> by Google's AI. This is the result of deep keyword research and technical optimization until every page dominates.
              </p>
              <div className="mt-4 pt-4 border-t border-indigo-200">
                <p className="text-indigo-700 font-medium flex items-center gap-2">
                  <Star size={16} /> Primary "Source of Truth" in Google AI Overviews for technical benchmarks
                </p>
              </div>
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index} 
                onClick={() => openModal(study)}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-slate-100 transition-all duration-500 cursor-pointer animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={study.img}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay with view button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-90">
                    <button className="bg-white text-slate-900 px-6 py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center gap-2">
                      <Eye size={18} /> View Case Study
                    </button>
                  </div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    Case #{study.id}
                  </div>
                  
                  {/* Time badge */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-medium px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                    <Clock size={12} /> {study.metrics.time}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {study.result}
                  </p>
                  
                  {/* Metrics preview */}
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <TrendingUp size={12} className="text-green-500" /> {study.metrics.position}
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap size={12} className="text-yellow-500" /> {study.metrics.traffic}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white text-center shadow-2xl">
          <Quote className="mx-auto mb-6 opacity-50" size={48} />
          <p className="text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            "Creating content that doesn't just read well, but performs well in search engines and drives real organic growth."
          </p>
          <div className="mt-8">
            <p className="font-bold text-lg">Ajay Tukaram Yangal</p>
            <p className="text-blue-200">SEO Content Writer & Strategist</p>
          </div>
        </section>

        {/* ---------------- CONTACT SECTION ---------------- */}
        <section id="contact" ref={contactRef} className="scroll-mt-20 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Let's Work Together</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Have a project in mind? Let's create content that ranks and converts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:ajayyangal4900@gmail.com"
              className="group bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-all hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-2"
            >
              <Mail size={20} /> Send Email
            </a>
            <a 
              href="https://techscr.com"
              target="_blank"
              rel="noreferrer"
              className="group bg-white text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-all hover:scale-105 shadow-xl hover:shadow-2xl border border-slate-200 flex items-center gap-2"
            >
              <Globe size={20} /> Visit TechSCR
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              AY.
            </button>
            <div className="flex gap-6">
              <a href="mailto:ajayyangal4900@gmail.com" className="hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://techscr.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <Globe size={20} />
              </a>
            </div>
            <p>© {new Date().getFullYear()} Ajay Tukaram Yangal. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-blob {
          animation: blob 15s infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-fadeInUp {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        
        .scroll-mt-20 {
          scroll-margin-top: 80px;
        }
        
        .animation-delay-100 {
          animation-delay: 100ms;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
        
        .animation-delay-4000 {
          animation-delay: 4000ms;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;