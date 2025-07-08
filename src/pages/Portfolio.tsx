import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Star, CheckCircle, Target, BarChart3, Users, Zap, Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Monitor, Smartphone, Globe, PenTool, TrendingUp, MessageSquare, User, Award, Heart, Search, Settings, Rocket, BarChart, ChevronDown, ChevronUp, Filter, ExternalLink, Quote, Eye, Camera, Send, ArrowRight, Play, Layers, Palette, Code, Mail as MailIcon, Lightbulb, Clock, CheckSquare, LineChart } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroImage from '@/assets/hero-image.png';
import MobileMenu from '@/components/MobileMenu';
const Portfolio = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [portfolioFilter, setPortfolioFilter] = useState('Social Media Marketing');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {
    toast
  } = useToast();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });

    // Initialize EmailJS
    emailjs.init('dYEaCIqvts-TKYeXF');

    // Auto-slide testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
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
      await emailjs.send('service_my5qfig', 'template_7jifj0k', {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Rehoman Alif'
      });
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!"
      });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-foreground">Rehoman Alif</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-all duration-300 font-medium">Home</a>
              <a href="#about" className="text-foreground hover:text-primary transition-all duration-300 font-medium">About</a>
              <a href="#services" className="text-foreground hover:text-primary transition-all duration-300 font-medium">Services</a>
              <a href="#portfolio" className="text-foreground hover:text-primary transition-all duration-300 font-medium">Portfolio</a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-all duration-300 font-medium">Reviews</a>
              <a href="#process" className="text-foreground hover:text-primary transition-all duration-300 font-medium">Process</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-all duration-300 font-medium">Contact</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button onClick={scrollToContact} variant="gradient" className="hidden sm:flex px-4 sm:px-6 py-2 rounded-full font-semibold">
                Let's Talk
              </Button>
              <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} scrollToContact={scrollToContact} />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-white via-primary/5 to-secondary/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-10 w-12 sm:w-20 h-12 sm:h-20 rounded-full bg-primary/20 animate-bounce"></div>
        <div className="absolute bottom-32 left-10 w-10 sm:w-16 h-10 sm:h-16 rounded-full bg-secondary/20 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-accent/40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-6 h-6 rounded-full bg-primary/30"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div data-aos="fade-right" className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-primary/10 border border-primary/20">
                <div className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></div>
                <span className="text-primary font-semibold text-sm">Available for new projects</span>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-5xl font-black leading-tight lg:text-5xl">
                  Let's build{' '}
                  <span className="text-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Ads that Sell
                  </span>{' '}
                  and{' '}
                  <span className="text-gradient bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                    Design that Convert
                  </span>
                </h1>
                
                <p className="text-lg leading-relaxed max-w-lg sm:text-xl font-medium text-gray-600 text-justify">
                  I help businesses scale with strategic digital marketing, high-converting Meta ads, 
                  and stunning web designs that actually drive results.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToContact} size="lg" variant="gradient" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full transform hover:scale-105">
                  Let's Scale Your Business
                </Button>
                <Button variant="gradient-outline" size="lg" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full" onClick={() => window.open('https://www.fiverr.com/alifpixelpro', '_blank')}>
                  View My Work
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">99%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div data-aos="fade-left" className="relative">
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative z-10 bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl">
                  <img src={heroImage} alt="Rehoman Alif - Digital Marketing Expert" className="w-full max-w-sm mx-auto rounded-2xl" />
                  
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

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Build Trust & Connection
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
            {/* Values */}
            {[{
            icon: TrendingUp,
            title: "Growth",
            gradient: "from-primary to-secondary"
          }, {
            icon: BarChart3,
            title: "Performance",
            gradient: "from-secondary to-accent"
          }, {
            icon: Target,
            title: "Clarity",
            gradient: "from-accent to-primary"
          }].map((value, index) => <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 border-0 shadow-lg" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardContent className="p-6 sm:p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                </CardContent>
              </Card>)}
          </div>

          {/* Skills Overview */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div data-aos="fade-right">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">Main Services & Skills</h3>
              <div className="space-y-6">
                {[{
                skill: "Meta Ads Management",
                percentage: 98,
                color: "from-primary to-secondary"
              }, {
                skill: "Social Media Marketing",
                percentage: 95,
                color: "from-secondary to-accent"
              }, {
                skill: "Web Design & Development",
                percentage: 92,
                color: "from-accent to-primary"
              }, {
                skill: "Email Marketing",
                percentage: 88,
                color: "from-primary to-accent"
              }].map((item, index) => <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-foreground">{item.skill}</span>
                      <span className="text-primary font-bold text-lg">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                      <div className={`bg-gradient-to-r ${item.color} h-3 rounded-full transition-all duration-1000 ease-out shadow-lg`} style={{
                    width: `${item.percentage}%`
                  }}></div>
                    </div>
                  </div>)}
              </div>
            </div>

            <div data-aos="fade-left" className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2">5-Star Rated Professional</h4>
                    <p className="text-muted-foreground">Maintaining a perfect 5-star rating on Fiverr with 500+ completed projects and satisfied clients worldwide.</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-secondary/10 to-accent/10 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2">Client-Focused Approach</h4>
                    <p className="text-muted-foreground">Every project is treated with care and attention to detail, ensuring results that exceed expectations.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Recent Projects & Case Studies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore some of my recent work across different industries and see the results achieved.
            </p>
          </div>

          {/* Two Grid Layout: Categories + Projects */}
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Left Sidebar - Categories (Sticky) */}
            <div className="lg:sticky lg:top-24 lg:h-fit space-y-4" data-aos="fade-right">
              <h3 className="text-xl font-bold text-foreground mb-6">Categories</h3>
              {[{
              key: 'Social Media Marketing',
              icon: MessageSquare,
              label: 'Social Media Marketing'
            }, {
              key: 'Meta Ad Campaigns',
              icon: Target,
              label: 'Meta Ad Campaigns'
            }, {
              key: 'Web Design',
              icon: Monitor,
              label: 'Web Design'
            }, {
              key: 'Email Marketing',
              icon: MailIcon,
              label: 'Email Marketing'
            }].map(category => <Button key={category.key} onClick={() => setPortfolioFilter(category.key)} variant="ghost" className={`w-full justify-start p-4 h-auto transition-all duration-300 ${portfolioFilter === category.key ? 'bg-gradient-primary text-white shadow-lg' : 'hover:bg-primary/5 hover:text-primary border border-border'}`}>
                  <category.icon className="w-5 h-5 mr-3" />
                  <span className="font-medium">{category.label}</span>
                </Button>)}
            </div>

            {/* Right Content - Projects */}
            <div className="lg:col-span-3 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {[{
                category: 'Social Media Marketing',
                title: 'Restaurant Social Strategy',
                description: 'Grew Instagram following from 2K to 50K in 6 months with engaging content strategy',
                result: '+2400% Growth',
                metrics: ['50K Followers', '2.5M Reach', '400% Engagement'],
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500'
              }, {
                category: 'Social Media Marketing',
                title: 'Tech Startup Branding',
                description: 'Built comprehensive brand awareness across all social platforms',
                result: '1M+ Impressions',
                metrics: ['1M+ Impressions', '25K Followers', '500+ Shares'],
                image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500'
              }, {
                category: 'Meta Ad Campaigns',
                title: 'E-commerce ROAS Success',
                description: 'Achieved exceptional return on ad spend for online fashion retailer',
                result: '+340% ROAS',
                metrics: ['340% ROAS', '$50K Revenue', '2.5K Conversions'],
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500'
              }, {
                category: 'Meta Ad Campaigns',
                title: 'Local Business Lead Gen',
                description: 'Generated high-quality leads for service-based business',
                result: '500+ Leads',
                metrics: ['500+ Leads', '12% CTR', '$3.50 CPL'],
                image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500'
              }, {
                category: 'Web Design',
                title: 'Modern Portfolio Website',
                description: 'Conversion-focused design that increased client acquisition',
                result: '10+ New Clients',
                metrics: ['10+ Clients', '250% Conversion', '3.2s Load Time'],
                image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500'
              }, {
                category: 'Web Design',
                title: 'Business Website Redesign',
                description: 'Complete redesign focused on user experience and conversions',
                result: '+250% Conversions',
                metrics: ['250% Conversions', '40% Bounce Rate', '95 Page Speed'],
                image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500'
              }, {
                category: 'Email Marketing',
                title: 'SaaS Email Automation',
                description: 'Automated email sequences that drove significant revenue growth',
                result: '$500K Revenue',
                metrics: ['$500K Revenue', '35% Open Rate', '8% CTR'],
                image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500'
              }, {
                category: 'Email Marketing',
                title: 'Course Promotion Campaign',
                description: 'Email marketing campaign that sold out online course enrollment',
                result: '1000+ Sales',
                metrics: ['1000+ Sales', '42% Open Rate', '$125K Revenue'],
                image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500'
              }].filter(project => project.category === portfolioFilter).map((project, index) => <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="relative overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Badge className="absolute top-4 left-4 bg-white/90 text-primary border-0 shadow-lg">
                        {project.result}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide">Key Metrics</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.metrics.map((metric, idx) => <Badge key={idx} variant="outline" className="text-xs px-2 py-1 border-primary/20 text-primary">
                              {metric}
                            </Badge>)}
                        </div>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 sm:py-20 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Client Reviews
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real feedback from satisfied clients who achieved amazing results.
            </p>
          </div>

          <Carousel opts={{
          align: "start",
          loop: true
        }} className="max-w-7xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            <CarouselContent className="-ml-2 sm:-ml-4">
              {[{
              name: "Sarah Johnson",
              role: "E-commerce Owner",
              content: "Rehoman transformed our Meta ads performance. ROAS increased 340% in 2 months!",
              rating: 5,
              result: "+340% ROAS"
            }, {
              name: "Mark Thompson",
              role: "Restaurant Owner",
              content: "Incredible social media strategy. Went from 2K to 50K Instagram followers!",
              rating: 5,
              result: "+2400% Growth"
            }, {
              name: "Lisa Chen",
              role: "SaaS Founder",
              content: "Amazing website design that converts. Lead generation increased by 250%!",
              rating: 5,
              result: "+250% Leads"
            }, {
              name: "David Rodriguez",
              role: "Local Business",
              content: "Best decision for our business. Generated 500+ qualified leads in 3 months!",
              rating: 5,
              result: "500+ Leads"
            }, {
              name: "Emily Davis",
              role: "Course Creator",
              content: "Email automation generated $500K revenue. Outstanding conversion optimization!",
              rating: 5,
              result: "$500K Revenue"
            }, {
              name: "Michael Brown",
              role: "Tech Startup CEO",
              content: "Comprehensive strategy built brand awareness with 1M+ impressions across platforms.",
              rating: 5,
              result: "1M+ Impressions"
            }].map((testimonial, index) => <CarouselItem key={index} className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                        </div>
                        <Badge className="bg-primary/10 text-primary border-0 text-xs px-2 py-1">
                          {testimonial.result}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{testimonial.content}</p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-3">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                          <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="-left-2 sm:-left-4" />
            <CarouselNext className="-right-2 sm:-right-4" />
          </Carousel>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gradient">
              My Proven Process
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[{
            step: "01",
            icon: Lightbulb,
            title: "Discovery & Goal Mapping"
          }, {
            step: "02",
            icon: Palette,
            title: "Strategy & Creative Setup"
          }, {
            step: "03",
            icon: Rocket,
            title: "Launch & Optimize"
          }, {
            step: "04",
            icon: LineChart,
            title: "Analyze & Scale"
          }].map((process, index) => <Card key={index} className="relative text-center group hover:shadow-lg transition-all duration-300 border-0 shadow-md" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardContent className="p-4 sm:p-6">
                  <div className="text-2xl font-black text-primary/20 mb-2">{process.step}</div>
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <process.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-foreground">{process.title}</h3>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Got questions? Here are answers to the most common questions about my services and process.
            </p>
          </div>

          {/* Two Grid Layout: Ready to Get Started + FAQ */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* Left - Ready to Get Started */}
            <div data-aos="fade-right" className="space-y-6">
              <Card className="bg-gradient-to-br from-primary via-secondary to-accent text-white p-6 sm:p-8 border-0 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold">Ready to Get Started?</h3>
                      <p className="text-white/90">Join 500+ satisfied clients</p>
                    </div>
                  </div>
                  
                  <p className="text-white/90 leading-relaxed">
                    Ready to scale your business with high-converting ads and stunning designs? 
                    Let's discuss your project on Fiverr where I've maintained a 5-star rating.
                  </p>
                  
                  <Button onClick={() => window.open('https://www.fiverr.com/alifpixelpro', '_blank')} className="w-full bg-white text-primary hover:bg-white/90 py-3 font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                    Visit My Fiverr Profile
                  </Button>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
                    <div className="text-center">
                      <div className="text-lg font-bold">100+</div>
                      <div className="text-xs text-white/80">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold">5.0 ★</div>
                      <div className="text-xs text-white/80">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold">24h</div>
                      <div className="text-xs text-white/80">Response</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right - FAQ */}
            <div data-aos="fade-left">
              <Accordion type="single" collapsible className="space-y-3">
                {[{
                question: "What makes your Meta ads different?",
                answer: "I focus on data-driven strategies with advanced audience targeting, creative optimization, and continuous A/B testing. My 5+ years of experience and 98% client satisfaction rate speak to the effectiveness of my approach."
              }, {
                question: "How long to see results?",
                answer: "While initial data starts coming in within 24-48 hours, significant results typically show within 2-4 weeks. I optimize campaigns continuously to improve performance over time."
              }, {
                question: "Which industries do you work with?",
                answer: "I've worked across various industries including e-commerce, restaurants, SaaS, local services, and more. My strategies are adaptable to different business models and target audiences."
              }, {
                question: "What's included in web design?",
                answer: "Custom design, mobile-first approach, SEO optimization, speed optimization, and conversion-focused layouts. I work with Framer, WordPress, and Wix based on your needs."
              }, {
                question: "How do you ensure ROI?",
                answer: "I use advanced tracking and analytics to monitor every aspect of your campaigns. Regular reporting, optimization, and transparent communication ensure you see clear ROI."
              }].map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border-0 shadow-sm px-4 sm:px-6">
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>)}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Services That Scale Your Business
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing solutions designed to drive growth and maximize your ROI.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[{
            icon: Target,
            title: "Meta Ads Expert",
            description: "High-converting Facebook & Instagram ads that drive real results and maximize your ROI.",
            features: ["Advanced audience targeting", "Creative optimization", "Conversion tracking", "A/B testing strategies", "Budget optimization"],
            gradient: "from-primary to-secondary"
          }, {
            icon: MessageSquare,
            title: "Social Media Marketing",
            description: "Complete social media strategy and management to build your brand and engage your audience.",
            features: ["Content strategy & creation", "Community management", "Brand storytelling", "Influencer partnerships", "Analytics & reporting"],
            gradient: "from-secondary to-accent"
          }, {
            icon: Monitor,
            title: "Web Design",
            description: "Stunning websites built on Framer, WordPress, and Wix that convert visitors into customers.",
            features: ["Custom design systems", "Mobile-first approach", "SEO optimization", "Speed optimization", "Conversion-focused design"],
            gradient: "from-accent to-primary"
          }].map((service, index) => <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 shadow-lg" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>)}
                  </ul>
                  <Button onClick={scrollToContact} className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                    Get Started
                  </Button>
                </div>
              </Card>)}
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
                  
                  <Button onClick={() => window.open('https://www.fiverr.com/alifpixelpro', '_blank')} className="w-full bg-white text-primary hover:bg-white/90 py-4 text-lg font-semibold rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
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
                      <Input name="name" value={formData.name} onChange={handleInputChange} placeholder="Your full name" className="bg-gray-50 border-0 h-12 rounded-xl text-foreground placeholder:text-muted-foreground focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all duration-300" required />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">
                        Email Address
                      </label>
                      <Input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" className="bg-gray-50 border-0 h-12 rounded-xl text-foreground placeholder:text-muted-foreground focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all duration-300" required />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">
                        Project Details
                      </label>
                      <Textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell me about your project, goals, and how I can help you succeed..." rows={6} required className="bg-gray-50 border-0 rounded-xl text-foreground placeholder:text-muted-foreground focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none border-2 " />
                    </div>
                    
                    <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-primary hover:opacity-90 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
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
                <a href="https://www.facebook.com/rehomanalifofficial" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 bg-slate-700 hover:bg-gradient-primary rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <Facebook className="w-5 h-5 group-hover:text-white" />
                </a>
                <a href="https://www.instagram.com/rehomanalif" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 bg-slate-700 hover:bg-gradient-primary rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <Instagram className="w-5 h-5 group-hover:text-white" />
                </a>
                <a href="https://www.linkedin.com/rehomanalif" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 bg-slate-700 hover:bg-gradient-primary rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <Linkedin className="w-5 h-5 group-hover:text-white" />
                </a>
                <a href="https://www.x.com/rehomanalifs" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 bg-slate-700 hover:bg-gradient-primary rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <Twitter className="w-5 h-5 group-hover:text-white" />
                </a>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">Services</h4>
              <ul className="space-y-3">
                {['Meta Ads Management', 'Social Media Marketing', 'Web Design & Development', 'Email Marketing', 'eBook Writing & Design'].map((service, index) => <li key={index}>
                    <a href="#services" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center space-x-2 group">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:bg-white transition-colors"></div>
                      <span>{service}</span>
                    </a>
                  </li>)}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">Quick Links</h4>
              <ul className="space-y-3">
                {[{
                name: 'About Me',
                href: '#about'
              }, {
                name: 'Portfolio',
                href: '#portfolio'
              }, {
                name: 'Contact',
                href: '#contact'
              }, {
                name: 'Fiverr Profile',
                href: 'https://www.fiverr.com/alifpixelpro',
                external: true
              }].map((link, index) => <li key={index}>
                    <a href={link.href} {...link.external ? {
                  target: '_blank',
                  rel: 'noopener noreferrer'
                } : {}} className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center space-x-2 group">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full group-hover:bg-white transition-colors"></div>
                      <span>{link.name}</span>
                    </a>
                  </li>)}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-center md:text-left">
                <p>&copy; 2025 Rehoman Alif Digital Marketing. All rights reserved.</p>
              </div>
              
              <div className="flex items-center space-x-6">
                <Button onClick={() => window.open('https://www.fiverr.com/alifpixelpro', '_blank')} className="bg-gradient-primary hover:opacity-90 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                  Hire Me on Fiverr
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Portfolio;