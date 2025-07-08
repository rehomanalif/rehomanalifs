import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Star, CheckCircle, Target, BarChart3, Users, Zap, Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Monitor, Smartphone, Globe, PenTool, TrendingUp, MessageSquare, User, Award, Heart, Search, Settings, Rocket, BarChart, ChevronDown, ChevronUp, Filter, ExternalLink, Quote } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
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
  const [portfolioFilter, setPortfolioFilter] = useState('all');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    
    // Initialize EmailJS
    emailjs.init('dYEaCIqvts-TKYeXF');
    
    // Auto-slide testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 6);
    }, 3000);
    
    return () => clearInterval(interval);
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

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Build Trust & Connection
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About <span className="text-gradient">Rehoman Alif</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With 5+ years of experience in digital marketing and web design, I've helped 500+ businesses 
              scale their online presence and drive real results through strategic campaigns and stunning designs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Values */}
            {[
              {
                icon: TrendingUp,
                title: "Growth",
                description: "I focus on strategies that deliver measurable growth and long-term success for your business."
              },
              {
                icon: BarChart3,
                title: "Performance",
                description: "Every campaign is optimized for maximum performance and ROI using data-driven insights."
              },
              {
                icon: Target,
                title: "Clarity",
                description: "Clear communication and transparent reporting keep you informed every step of the way."
              }
            ].map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills Overview */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h3 className="text-3xl font-bold mb-6 text-foreground">Main Services & Skills</h3>
              <div className="space-y-6">
                {[
                  { skill: "Meta Ads Management", percentage: 98 },
                  { skill: "Social Media Marketing", percentage: 95 },
                  { skill: "Web Design & Development", percentage: 92 },
                  { skill: "Email Marketing", percentage: 88 }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-semibold text-foreground">{item.skill}</span>
                      <span className="text-primary font-bold">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-primary h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div data-aos="fade-left" className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2">5-Star Rated Professional</h4>
                    <p className="text-muted-foreground">Maintaining a perfect 5-star rating on Fiverr with 500+ completed projects and satisfied clients worldwide.</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-secondary/5 to-accent/5 border-secondary/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
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
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Recent Projects & Case Studies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore some of my recent work across different industries and see the results achieved.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="100">
            {['all', 'meta-ads', 'web-design', 'social-media', 'email-marketing'].map((filter) => (
              <Button
                key={filter}
                onClick={() => setPortfolioFilter(filter)}
                variant={portfolioFilter === filter ? 'default' : 'outline'}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  portfolioFilter === filter 
                    ? 'bg-gradient-primary text-white' 
                    : 'border-primary/20 hover:border-primary/40 hover:bg-primary/5'
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {filter === 'all' ? 'All Projects' : 
                 filter === 'meta-ads' ? 'Meta Ads' :
                 filter === 'web-design' ? 'Web Design' :
                 filter === 'social-media' ? 'Social Media' : 'Email Marketing'}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: 'meta-ads',
                title: 'E-commerce Meta Ads Campaign',
                description: 'Increased ROAS by 340% for online fashion store',
                result: '+340% ROAS',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400'
              },
              {
                category: 'web-design',
                title: 'Modern Business Website',
                description: 'Complete redesign increased conversions by 250%',
                result: '+250% Conversions',
                image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400'
              },
              {
                category: 'social-media',
                title: 'Restaurant Social Strategy',
                description: 'Grew Instagram following from 2K to 50K in 6 months',
                result: '+2400% Growth',
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400'
              },
              {
                category: 'email-marketing',
                title: 'SaaS Email Automation',
                description: 'Email sequences generated $500K in revenue',
                result: '$500K Revenue',
                image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400'
              },
              {
                category: 'meta-ads',
                title: 'Local Business Lead Gen',
                description: 'Generated 500+ qualified leads in 3 months',
                result: '500+ Leads',
                image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400'
              },
              {
                category: 'web-design',
                title: 'Portfolio Website Design',
                description: 'Modern portfolio that landed 10+ clients',
                result: '10+ New Clients',
                image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400'
              },
              {
                category: 'social-media',
                title: 'Tech Startup Branding',
                description: 'Built brand awareness across all platforms',
                result: '1M+ Impressions',
                image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400'
              },
              {
                category: 'email-marketing',
                title: 'E-learning Course Promotion',
                description: 'Email campaign sold 1000+ course enrollments',
                result: '1000+ Sales',
                image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400'
              }
            ].filter(project => portfolioFilter === 'all' || project.category === portfolioFilter)
            .map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="bg-white text-primary hover:bg-white/90">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
                    {project.result}
                  </Badge>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              What Clients Say About My Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take my word for it. Here's what my clients have to say about working with me.
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="max-w-6xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <CarouselContent className="-ml-4">
              {[
                {
                  name: "Sarah Johnson",
                  role: "E-commerce Store Owner",
                  content: "Rehoman transformed our Meta ads performance. Our ROAS increased by 340% within just 2 months. His strategic approach and attention to detail are exceptional.",
                  rating: 5
                },
                {
                  name: "Mark Thompson",
                  role: "Restaurant Chain Owner",
                  content: "The social media strategy Rehoman created for us was incredible. We went from 2K to 50K Instagram followers and saw a massive increase in foot traffic.",
                  rating: 5
                },
                {
                  name: "Lisa Chen",
                  role: "SaaS Founder",
                  content: "The website Rehoman designed for us not only looks amazing but also converts incredibly well. Our lead generation increased by 250% after the redesign.",
                  rating: 5
                },
                {
                  name: "David Rodriguez",
                  role: "Local Business Owner",
                  content: "Working with Rehoman was the best decision for our business. His Meta ads generated over 500 qualified leads in just 3 months. Highly recommended!",
                  rating: 5
                },
                {
                  name: "Emily Davis",
                  role: "Online Course Creator",
                  content: "The email marketing automation Rehoman set up for us generated over $500K in revenue. His expertise in conversion optimization is outstanding.",
                  rating: 5
                },
                {
                  name: "Michael Brown",
                  role: "Tech Startup CEO",
                  content: "Rehoman's comprehensive digital marketing strategy helped us build brand awareness and generated over 1M impressions across all platforms.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Quote className="w-8 h-8 text-primary/30 mr-3" />
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{testimonial.content}</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </Carousel>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              My Proven Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach that ensures consistent results and professional execution for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: Search,
                title: "Discovery & Goal Mapping",
                description: "We start by understanding your business, target audience, and specific goals to create a tailored strategy."
              },
              {
                step: "02",
                icon: Settings,
                title: "Strategy & Creative Setup",
                description: "I develop comprehensive strategies and create compelling creatives that resonate with your audience."
              },
              {
                step: "03",
                icon: Rocket,
                title: "Launch & Optimize",
                description: "Campaigns are launched with continuous monitoring and optimization to ensure peak performance."
              },
              {
                step: "04",
                icon: BarChart,
                title: "Analyze & Scale",
                description: "Regular analysis and reporting help scale successful campaigns and improve overall performance."
              }
            ].map((process, index) => (
              <Card key={index} className="relative text-center group hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardContent className="p-8">
                  <div className="text-6xl font-black text-primary/10 mb-4">{process.step}</div>
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <process.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{process.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Got questions? Here are answers to the most common questions about my services and process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4" data-aos="fade-up" data-aos-delay="200">
              {[
                {
                  question: "What makes your Meta ads different from others?",
                  answer: "I focus on data-driven strategies with advanced audience targeting, creative optimization, and continuous A/B testing. My 5+ years of experience and 98% client satisfaction rate speak to the effectiveness of my approach."
                },
                {
                  question: "How long does it take to see results from Meta ads?",
                  answer: "While initial data starts coming in within 24-48 hours, significant results typically show within 2-4 weeks. I optimize campaigns continuously to improve performance over time."
                },
                {
                  question: "Do you work with businesses in all industries?",
                  answer: "Yes, I've worked with businesses across various industries including e-commerce, restaurants, SaaS, local services, and more. My strategies are adaptable to different business models and target audiences."
                },
                {
                  question: "What's included in your web design services?",
                  answer: "My web design services include custom design, mobile-first approach, SEO optimization, speed optimization, and conversion-focused layouts. I work with Framer, WordPress, and Wix based on your needs."
                },
                {
                  question: "How do you ensure ROI from your campaigns?",
                  answer: "I use advanced tracking and analytics to monitor every aspect of your campaigns. Regular reporting, optimization, and transparent communication ensure you see clear ROI from our partnership."
                },
                {
                  question: "Can I work with you through Fiverr?",
                  answer: "Absolutely! I maintain a 5-star rating on Fiverr with 500+ completed projects. You can find me at fiverr.com/alifpixelpro for streamlined project management and secure payments."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border border-gray-200 px-6">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 p-8">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Ready to Get Started?</h3>
                    <p className="text-muted-foreground">Visit my Fiverr profile for detailed packages and easy ordering</p>
                  </div>
                </div>
                <Button 
                  onClick={() => window.open('https://www.fiverr.com/alifpixelpro', '_blank')}
                  className="bg-gradient-primary hover:opacity-90 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Visit My Fiverr Profile
                </Button>
              </Card>
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