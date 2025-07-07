import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Star, CheckCircle, Target, BarChart3, Users, Zap, Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Monitor, Smartphone, Globe, PenTool, TrendingUp, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroImage from '@/assets/hero-image.png';

const Portfolio = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    
    // Initialize EmailJS
    emailjs.init('dYEaCIqvts-TKYeXF');
  }, []);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_my5qfig',
        'template_7jifj0k',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Rehoman Alif'
        }
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-2xl font-bold text-foreground">Rehoman Alif</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-all duration-300 font-medium">Home</a>
              <a href="#about" className="text-foreground hover:text-primary transition-all duration-300 font-medium">About</a>
              <a href="#services" className="text-foreground hover:text-primary transition-all duration-300 font-medium">Services</a>
              <a href="#portfolio" className="text-foreground hover:text-primary transition-all duration-300 font-medium">Portfolio</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-all duration-300 font-medium">Contact</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button 
                onClick={scrollToContact} 
                className="bg-gradient-primary hover:opacity-90 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-10 w-20 h-20 rounded-full bg-orange-400/20 animate-bounce"></div>
        <div className="absolute bottom-32 left-10 w-16 h-16 rounded-full bg-blue-400/20 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-green-400/40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-6 h-6 rounded-full bg-purple-400/30"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div data-aos="fade-right" className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-primary/10 border border-primary/20">
                <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
                <span className="text-primary font-semibold text-sm">Available for new projects</span>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                  Let's build{' '}
                  <span className="text-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Ads that Sell
                  </span>{' '}
                  and{' '}
                  <span className="text-gradient bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                    Design that Convert
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  I help businesses scale with strategic digital marketing, high-converting Meta ads, 
                  and stunning web designs that actually drive results.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={scrollToContact}
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Let's Scale Your Business
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-8 py-4 text-lg rounded-full border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                  onClick={() => window.open('https://www.fiverr.com/alifpixelpro', '_blank')}
                >
                  View My Work
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div data-aos="fade-left" className="relative">
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative z-10 bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl">
                  <img 
                    src={heroImage}
                    alt="Rehoman Alif - Digital Marketing Expert" 
                    className="w-full max-w-sm mx-auto rounded-2xl"
                  />
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 bg-gradient-primary text-white p-4 rounded-2xl shadow-lg">
                    <div className="text-xs font-semibold">Best Design Awards</div>
                    <div className="flex items-center mt-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                  
                  <div className="absolute top-1/2 -right-8 bg-white p-3 rounded-xl shadow-lg border">
                    <div className="text-xs text-muted-foreground">24 hours active</div>
                    <div className="text-sm font-semibold text-primary">Quick Response</div>
                  </div>
                </div>
                
                {/* Background Decorations */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-accent/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-primary/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Services That Scale Your Business
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing solutions designed to drive growth and maximize your ROI.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Meta Ads Expert",
                description: "High-converting Facebook & Instagram ads that drive real results and maximize your ROI.",
                features: ["Advanced audience targeting", "Creative optimization", "Conversion tracking", "A/B testing strategies", "Budget optimization"]
              },
              {
                icon: MessageSquare,
                title: "Social Media Marketing",
                description: "Complete social media strategy and management to build your brand and engage your audience.",
                features: ["Content strategy & creation", "Community management", "Brand storytelling", "Influencer partnerships", "Analytics & reporting"]
              },
              {
                icon: Monitor,
                title: "Web Design",
                description: "Stunning websites built on Framer, WordPress, and Wix that convert visitors into customers.",
                features: ["Custom design systems", "Mobile-first approach", "SEO optimization", "Speed optimization", "Conversion-focused design"]
              }
            ].map((service, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="p-6">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={scrollToContact}
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    Get Started
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Ready to Get Started?
            </Badge>
            <h2 className="text-5xl font-bold mb-6 text-foreground">
              Let's Create Something <span className="text-gradient">Amazing</span> Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transform your digital presence and scale your business with proven strategies that deliver results
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Left Side - CTA */}
            <div data-aos="fade-right" className="space-y-8">
              <div className="bg-gradient-to-br from-primary via-secondary to-accent p-8 rounded-3xl text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Start Your Project Today</h3>
                      <p className="text-white/90">Join 500+ satisfied clients</p>
                    </div>
                  </div>
                  
                  <p className="text-white/90 text-lg leading-relaxed">
                    Ready to scale your business with high-converting ads and stunning designs? 
                    Let's discuss your project on Fiverr where I've maintained a 5-star rating.
                  </p>
                  
                  <Button 
                    onClick={() => window.open('https://www.fiverr.com/alifpixelpro', '_blank')}
                    className="w-full bg-white text-primary hover:bg-white/90 py-4 text-lg font-semibold rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Visit My Fiverr Profile
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Right Side - Contact Form */}
            <div data-aos="fade-left" className="relative">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-primary via-secondary to-accent h-2"></div>
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Send Me a Message</h3>
                    <p className="text-muted-foreground">I'll get back to you within 24 hours</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">
                        Full Name
                      </label>
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="bg-gray-50 border-0 h-12 rounded-xl text-foreground placeholder:text-muted-foreground focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">
                        Email Address
                      </label>
                      <Input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="bg-gray-50 border-0 h-12 rounded-xl text-foreground placeholder:text-muted-foreground focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">
                        Project Details
                      </label>
                      <Textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, goals, and how I can help you succeed..."
                        rows={6}
                        className="bg-gray-50 border-0 rounded-xl text-foreground placeholder:text-muted-foreground focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary hover:opacity-90 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[length:20px_20px]"></div>
        </div>
        
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <h3 className="text-3xl font-bold">Rehoman Alif</h3>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Transforming businesses through strategic digital marketing, high-converting Meta ads, 
                and stunning web designs that drive real results.
              </p>
              
              <div className="flex space-x-4 pt-4">
                <a href="https://www.facebook.com/rehomanalifofficial" target="_blank" rel="noopener noreferrer" 
                   className="group w-12 h-12 bg-slate-700 hover:bg-gradient-primary rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <Facebook className="w-5 h-5 group-hover:text-white" />
                </a>
                <a href="https://www.instagram.com/rehomanalif" target="_blank" rel="noopener noreferrer"
                   className="group w-12 h-12 bg-slate-700 hover:bg-gradient-primary rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <Instagram className="w-5 h-5 group-hover:text-white" />
                </a>
                <a href="https://www.linkedin.com/rehomanalif" target="_blank" rel="noopener noreferrer"
                   className="group w-12 h-12 bg-slate-700 hover:bg-gradient-primary rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <Linkedin className="w-5 h-5 group-hover:text-white" />
                </a>
                <a href="https://www.x.com/rehomanalifs" target="_blank" rel="noopener noreferrer"
                   className="group w-12 h-12 bg-slate-700 hover:bg-gradient-primary rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <Twitter className="w-5 h-5 group-hover:text-white" />
                </a>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">Services</h4>
              <ul className="space-y-3">
                {[
                  'Meta Ads Management',
                  'Social Media Marketing', 
                  'Web Design & Development',
                  'Email Marketing',
                  'eBook Writing & Design'
                ].map((service, index) => (
                  <li key={index}>
                    <a href="#services" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center space-x-2 group">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:bg-white transition-colors"></div>
                      <span>{service}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: 'About Me', href: '#about' },
                  { name: 'Portfolio', href: '#portfolio' },
                  { name: 'Contact', href: '#contact' },
                  { name: 'Fiverr Profile', href: 'https://www.fiverr.com/alifpixelpro', external: true }
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center space-x-2 group"
                    >
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full group-hover:bg-white transition-colors"></div>
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-center md:text-left">
                <p>&copy; 2025 Rehoman Alif Digital Marketing. All rights reserved.</p>
              </div>
              
              <div className="flex items-center space-x-6">
                <Button 
                  onClick={() => window.open('https://www.fiverr.com/alifpixelpro', '_blank')}
                  className="bg-gradient-primary hover:opacity-90 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Hire Me on Fiverr
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;