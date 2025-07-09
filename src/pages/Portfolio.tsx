import React, { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, TrendingUp, BarChart3, Target, Users, MessageSquare, Monitor, MailIcon, Award, Heart, User, Lightbulb, Palette, Rocket, LineChart, ArrowRight, Play, Layers, PenTool, TrendingUp as TrendingUpIcon, Zap, Globe, Smartphone, Code, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { trackWebVitals, preloadCriticalResources } from '@/utils/performance';
import ScrollAnimations from '@/components/ScrollAnimations';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Lazy load components for better performance
const Navigation = lazy(() => import('@/components/Navigation'));
const HeroSection = lazy(() => import('@/components/HeroSection'));
const LazyImage = lazy(() => import('@/components/LazyImage'));
const ContactForm = lazy(() => import('@/components/ContactForm'));

const Portfolio = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [portfolioFilter, setPortfolioFilter] = useState('Social Media Marketing');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 100
    });

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
    
    // Initialize performance monitoring
    trackWebVitals();
    preloadCriticalResources();

    // Initialize EmailJS asynchronously
    if (typeof window !== 'undefined') {
      import('@emailjs/browser').then((emailjs) => {
        emailjs.default.init('dYEaCIqvts-TKYeXF');
      });
    }

    // GSAP scroll animations for sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      gsap.fromTo(section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Parallax effect for backgrounds
    gsap.to(".parallax-bg", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax-bg",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

  }, []);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<div className="fixed top-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-sm border-b shadow-sm z-50" />}>
        <Navigation 
          isMobileMenuOpen={isMobileMenuOpen} 
          setIsMobileMenuOpen={setIsMobileMenuOpen} 
          scrollToContact={scrollToContact} 
        />
      </Suspense>

      <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-white via-primary/5 to-secondary/5" />}>
        <HeroSection scrollToContact={scrollToContact} />
      </Suspense>

      {/* About Section */}
      <section id="about" className="mt-20 sm:mt-24 py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-primary/5 to-secondary/5 parallax-bg">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-20" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Build Trust & Connection
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16 sm:mb-20">
            {/* Values - Transform to compact badges */}
            {[{
            icon: TrendingUp,
            title: "Growth Focused",
            gradient: "from-primary to-secondary"
          }, {
            icon: BarChart3,
            title: "Data Driven",
            gradient: "from-secondary to-accent"
          }, {
            icon: Target,
            title: "Results Oriented",
            gradient: "from-accent to-primary"
          }, {
            icon: Users,
            title: "Client Focused",
            gradient: "from-primary to-accent"
          }, {
            icon: MessageSquare,
            title: "Communication",
            gradient: "from-secondary to-primary"
          }, {
            icon: Monitor,
            title: "Tech Savvy",
            gradient: "from-accent to-secondary"
          }].map((value, index) => (
            <div 
              key={index} 
              className={`group relative bg-gradient-to-r ${value.gradient} text-white px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:rotate-2 floating-animation cursor-pointer transform-gpu`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <value.icon className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-sm">{value.title}</span>
              </div>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-xl transition-all duration-300"></div>
            </div>
          ))}
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
              }].map((item, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-foreground">{item.skill}</span>
                      <span className="text-primary font-bold text-lg">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                      <div 
                        className={`bg-gradient-to-r ${item.color} h-3 rounded-full transition-all duration-1000 ease-out shadow-lg`} 
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6" data-aos="fade-left">
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
      <section id="portfolio" className="py-12 sm:py-16 lg:py-20">
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
              }].filter(project => project.category === portfolioFilter).map((project, index) => (
                <Card 
                  key={index} 
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
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
                           {project.metrics.map((metric, idx) => (
                             <Badge key={idx} variant="outline" className="text-xs px-2 py-1 border-primary/20 text-primary">
                               {metric}
                             </Badge>
                           ))}
                         </div>
                       </div>
                     </CardContent>
                   </Card>
                 )
              )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-secondary/5 to-accent/5">
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
      <section id="process" className="py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gradient">
              My Proven Process
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {[{
            step: "01",
            icon: Lightbulb,
            title: "Discovery",
            gradient: "from-primary to-secondary"
          }, {
            step: "02",
            icon: Palette,
            title: "Strategy",
            gradient: "from-secondary to-accent"
          }, {
            step: "03",
            icon: Rocket,
            title: "Launch",
            gradient: "from-accent to-primary"
          }, {
            step: "04",
            icon: LineChart,
            title: "Scale",
            gradient: "from-primary to-accent"
          }].map((process, index) => (
            <div 
              key={index} 
              className={`group relative bg-gradient-to-r ${process.gradient} text-white px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:rotate-1 floating-animation cursor-pointer transform-gpu overflow-hidden`} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="flex items-center space-x-3 relative z-10">
                <div className="text-lg font-black text-white/30 group-hover:text-white/50 transition-colors duration-300">{process.step}</div>
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <process.icon className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-sm">{process.title}</span>
              </div>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-primary/5 to-secondary/5">
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
              }].map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border-0 shadow-sm px-4 sm:px-6" data-aos="fade-left" data-aos-delay={index * 100}>
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
      <section id="services" className="py-20 sm:py-24 lg:py-28">
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
            }].map((service, index) => <Card 
              key={index} 
              className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 hover:rotate-1 cursor-pointer transform-gpu" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="p-6 relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                     {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <div className="h-4 w-4 bg-gradient-to-br from-primary to-secondary rounded-full mr-2 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </div>
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature}</span>
                        </li>
                      ))}
                   </ul>
                   <Button onClick={scrollToContact} className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                     Get Started
                   </Button>
                </div>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </Card>)}
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="py-20 bg-gradient-to-br from-slate-50 to-white" />}>
        <ContactForm contactRef={contactRef} />
      </Suspense>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[length:20px_20px]"></div>
        </div>
        
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            <div className="lg:col-span-2 space-y-6" data-aos="fade-right">
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
                {[
                  { icon: Facebook, href: 'https://www.facebook.com/rehomanalifofficial' },
                  { icon: Instagram, href: 'https://www.instagram.com/rehomanalif' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/rehomanalif' },
                  { icon: Twitter, href: 'https://www.x.com/rehomanalifs' }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group w-12 h-12 bg-slate-700 hover:bg-gradient-primary rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="space-y-6" data-aos="fade-up">
              <h4 className="text-xl font-bold text-white">Services</h4>
              <ul className="space-y-3">
                {['Meta Ads Management', 'Social Media Marketing', 'Web Design & Development', 'Email Marketing', 'eBook Writing & Design'].map((service, index) => (
                  <li key={index}>
                    <a href="#services" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center space-x-2 group">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:bg-white transition-colors"></div>
                      <span>{service}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
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
                <Button onClick={() => window.open('https://www.fiverr.com/alifpixelpro', '_blank')} className="bg-gradient-primary hover:opacity-90 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
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