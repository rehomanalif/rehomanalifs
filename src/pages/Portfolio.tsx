import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter, Check, Target, Megaphone, Palette, Mail, BookOpen, Star, Users, TrendingUp, Search, Zap } from 'lucide-react';
const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);
  const services = [{
    icon: Target,
    title: "Meta Ads Expert",
    description: "High-converting Facebook & Instagram ads that drive real results and maximize your ROI.",
    features: ["Advanced audience targeting", "Creative optimization", "Conversion tracking", "A/B testing strategies", "Budget optimization"],
    link: "https://www.fiverr.com/alifpixelpro"
  }, {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Complete social media strategy and management to build your brand and engage your audience.",
    features: ["Content strategy & creation", "Community management", "Brand storytelling", "Influencer partnerships", "Analytics & reporting"],
    link: "https://www.fiverr.com/alifpixelpro"
  }, {
    icon: Palette,
    title: "Web Design",
    description: "Stunning websites built on Framer, WordPress, and Wix that convert visitors into customers.",
    features: ["Custom design systems", "Mobile-first approach", "SEO optimization", "Speed optimization", "Conversion-focused design"],
    link: "https://www.fiverr.com/alifpixelpro"
  }, {
    icon: Mail,
    title: "Email Marketing",
    description: "Automated email campaigns that nurture leads and drive sales with personalized messaging.",
    features: ["Email automation", "List segmentation", "Campaign design", "Performance tracking", "A/B testing"],
    link: "https://www.fiverr.com/alifpixelpro"
  }, {
    icon: BookOpen,
    title: "eBook Writing & Design",
    description: "Professional eBooks that establish authority and generate leads for your business.",
    features: ["Content research & writing", "Professional design", "Interactive elements", "Lead magnets", "Distribution strategy"],
    link: "https://www.fiverr.com/alifpixelpro"
  }];
  const portfolioCategories = ["All Projects", "Meta Ads", "Social Media", "Web Design", "Email Marketing", "eBooks"];
  const portfolioItems = [{
    category: "Meta Ads",
    title: "E-commerce Store - 300% ROAS",
    description: "Scaled monthly revenue from $10K to $45K with strategic Facebook ads",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    results: "300% ROAS, 450% Revenue Growth"
  }, {
    category: "Web Design",
    title: "SaaS Landing Page",
    description: "Modern, conversion-optimized landing page built with Framer",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    results: "65% Conversion Rate Increase"
  }, {
    category: "Social Media",
    title: "Personal Brand Growth",
    description: "Grew Instagram following from 5K to 50K in 6 months",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    results: "900% Follower Growth"
  }, {
    category: "Email Marketing",
    title: "B2B Lead Nurturing",
    description: "Automated email sequence that converts 35% of leads",
    image: "https://images.unsplash.com/photo-1596526131077-f5b73c4e8e0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    results: "35% Lead Conversion Rate"
  }];
  const testimonials = [{
    name: "Sarah Johnson",
    role: "E-commerce Owner",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b829?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    review: "Alif transformed our ad performance completely. Our ROAS went from 1.2x to 4.5x in just 3 months. Incredible results!"
  }, {
    name: "Michael Chen",
    role: "SaaS Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    review: "The website Alif designed for us is stunning and converts amazingly well. Our demo requests increased by 200%."
  }, {
    name: "Emily Rodriguez",
    role: "Digital Agency Owner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    review: "Professional, creative, and results-driven. Alif's social media strategies helped us land 5 major clients."
  }, {
    name: "David Thompson",
    role: "Online Coach",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    review: "The email campaigns Alif created for me have a 45% open rate and 12% conversion rate. Best investment ever!"
  }, {
    name: "Lisa Wang",
    role: "Tech Startup CEO",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    review: "Alif's expertise in Meta ads helped us acquire customers 60% cheaper than our previous agency. Highly recommended!"
  }, {
    name: "James Miller",
    role: "Real Estate Agent",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    review: "The lead generation campaigns Alif set up brought me 50+ qualified leads per month. My business has never been better."
  }];
  const processSteps = [{
    icon: Search,
    title: "Discovery & Goal Mapping",
    description: "Deep dive into your business, audience, and objectives to create a tailored strategy."
  }, {
    icon: Target,
    title: "Strategy & Creative Setup",
    description: "Develop comprehensive campaigns with compelling creatives and precise targeting."
  }, {
    icon: Zap,
    title: "Launch & Optimize",
    description: "Execute campaigns with real-time monitoring and continuous optimization."
  }, {
    icon: TrendingUp,
    title: "Analyze & Scale",
    description: "Measure results, identify opportunities, and scale what works best."
  }];
  return <div className="min-h-screen bg-background">
      {/* Modern Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gradient">
              Rehoman Alif
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Portfolio</a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            <Button className="gradient-primary text-white" asChild>
              <a href="https://www.fiverr.com/alifpixelpro" target="_blank" rel="noopener noreferrer">
                Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 gradient-primary text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8" data-aos="fade-right">
              <h1 className="text-5xl font-bold leading-tight md:text-4xl">
                Let's build Ads that <span className="text-yellow-300">Sell</span><br />
                and Design that <span className="text-yellow-300">Convert</span>
              </h1>
              <p className="text-xl opacity-90 leading-relaxed md:text-xl">
                I help ambitious businesses scale with high-converting Meta ads, 
                stunning web design, and strategic digital marketing that drives real results.
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6" asChild>
                <a href="https://www.fiverr.com/alifpixelpro" target="_blank" rel="noopener noreferrer">
                  Let's Scale Your Business <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                 <img src="/hero-image.png" alt="Rehoman Alif - Digital Marketing Expert" className="w-full h-auto object-cover" />
              </div>
              <div className="absolute inset-0 gradient-accent rounded-3xl blur-2xl opacity-30 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
              Building Trust Through Results
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8 text-muted-foreground">
              I'm a passionate digital marketing specialist with over 5 years of experience helping businesses 
              scale through strategic Meta ads, compelling web design, and data-driven marketing. My expertise 
              spans across Facebook & Instagram advertising, social media strategy, web development, email marketing, 
              and content creation.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Growth</h3>
                <p className="text-muted-foreground">Focused on sustainable, measurable business growth</p>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Performance</h3>
                <p className="text-muted-foreground">Every campaign optimized for maximum ROI and results</p>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Clarity</h3>
                <p className="text-muted-foreground">Clear communication and transparent reporting always</p>
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
            {services.map((service, index) => <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <CardHeader>
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => <li key={idx} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>)}
                  </ul>
                  <Button className="w-full gradient-primary text-white" asChild>
                    <a href="#contact">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Portfolio & Case Studies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from real clients. See how I've helped businesses achieve their goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filter Sidebar */}
            <div className="lg:col-span-1" data-aos="fade-right">
              <div className="sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Filter Projects</h3>
                <div className="space-y-2">
                  {portfolioCategories.map((category, index) => <Button key={index} variant={index === 0 ? "default" : "outline"} className="w-full justify-start">
                      {category}
                    </Button>)}
                </div>
              </div>
            </div>

            {/* Portfolio Grid */}
            <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
              {portfolioItems.map((item, index) => <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="relative overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-white">{item.category}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-primary">{item.results}</span>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              What Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take my word for it. Here's what my clients have to say.
            </p>
          </div>

          <Carousel className="max-w-6xl mx-auto" data-aos="fade-up">
            <CarouselContent>
              {testimonials.map((testimonial, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                      </div>
                      <p className="italic">"{testimonial.review}"</p>
                    </CardContent>
                  </Card>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              My Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that delivers consistent results for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="relative mb-6">
                  <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get answers to common questions about my services and process.
              </p>
              <Button size="lg" className="gradient-primary text-white" asChild>
                <a href="https://www.fiverr.com/alifpixelpro" target="_blank" rel="noopener noreferrer">
                  View My Fiverr Profile <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="space-y-6" data-aos="fade-left">
              <Card>
                <CardHeader>
                  <CardTitle>How quickly will I see results?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Most clients see initial results within 2-4 weeks, with significant improvements by month 2. 
                    However, the timeline can vary based on your industry and campaign complexity.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Do you work with small businesses?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolutely! I work with businesses of all sizes, from startups to established companies. 
                    My strategies are scalable and adapted to your budget and goals.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>What's included in your service packages?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Each package is customized to your needs and includes strategy development, implementation, 
                    ongoing optimization, and detailed reporting. Check my Fiverr profile for specific package details.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how I can help you achieve your digital marketing goals.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* CTA Side */}
            <div className="relative" data-aos="fade-right">
              <div className="sticky top-24">
                <Card className="p-8 gradient-primary text-white border-none shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                      <Zap className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold">Let's Scale Your Business</h3>
                    <p className="text-lg opacity-90">
                      Ready to see 3x ROI on your ad spend? Let's turn your marketing into a profit machine.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-yellow-300" />
                        <span>Free Strategy Session</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-yellow-300" />
                        <span>Custom Action Plan</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-yellow-300" />
                        <span>30-Day Money Back Guarantee</span>
                      </div>
                    </div>
                    <Button size="lg" className="bg-white text-primary hover:bg-gray-100 w-full font-bold text-lg py-6" asChild>
                      <a href="https://www.fiverr.com/alifpixelpro" target="_blank" rel="noopener noreferrer">
                        Start My Project <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div data-aos="fade-left">
              <Card className="p-8 shadow-2xl border-2 border-primary/10 rounded-3xl bg-gradient-to-br from-background to-muted/20">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl text-center">Get Your Free Consultation</CardTitle>
                  <CardDescription className="text-center">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name *</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" placeholder="Your first name" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name *</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" placeholder="Your last name" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address *</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" placeholder="your@email.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Business/Company</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" placeholder="Your business name" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Service Interested In *</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" required>
                      <option value="">Select a service</option>
                      <option value="meta-ads">Meta Ads Expert</option>
                      <option value="social-media">Social Media Marketing</option>
                      <option value="web-design">Web Design</option>
                      <option value="email-marketing">Email Marketing</option>
                      <option value="ebook">eBook Writing & Design</option>
                      <option value="multiple">Multiple Services</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Current Monthly Ad Spend</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200">
                      <option value="">Select range</option>
                      <option value="0-1k">$0 - $1,000</option>
                      <option value="1k-5k">$1,000 - $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k+">$10,000+</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Project Details *</label>
                    <textarea className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 min-h-[120px]" placeholder="Tell me about your business goals, current challenges, and what you're looking to achieve..." required></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full gradient-primary text-white font-bold text-lg py-6 rounded-xl">
                    Send My Project Details <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to receive communication from me about your project.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-2xl font-bold mb-4 md:mb-0 text-gradient">
              Rehoman Alif
            </div>
            <div className="flex space-x-6">
              <a href="https://www.fiverr.com/alifpixelpro" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                Fiverr
              </a>
              <a href="https://www.facebook.com/rehomanalifofficial" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/rehomanalif" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/rehomanalif" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.x.com/rehomanalifs" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-muted-foreground/20">
            <p className="text-muted-foreground">
              © 2024 Rehoman Alif Digital Marketing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Portfolio;