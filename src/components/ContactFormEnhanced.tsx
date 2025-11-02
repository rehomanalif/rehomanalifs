import React, { useState, memo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select-enhanced';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactFormEnhancedProps {
  contactRef: React.RefObject<HTMLDivElement>;
}

const ContactFormEnhanced = memo(({ contactRef }: ContactFormEnhancedProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send('service_my5qfig', 'template_7jifj0k', {
        from_name: formData.name,
        from_email: formData.email,
        service: formData.service,
        budget: formData.budget,
        timeline: formData.timeline,
        message: formData.message,
        to_name: 'Rehoman Alif'
      });

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you within 1-2 hours!"
      });

      setFormData({
        name: '',
        email: '',
        service: '',
        budget: '',
        timeline: '',
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

  return (
    <section ref={contactRef} id="contact" className="py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to scale your business? Send me a message and let's discuss your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Fiverr Contact Info */}
          <div data-aos="fade-right" className="space-y-6">
            <Card className="p-6 sm:p-8 bg-gradient-to-br from-[#1DBF73]/10 to-[#1DBF73]/5 border-0 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#1DBF73] rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">f</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Connect on Fiverr</h3>
                    <p className="text-[#1DBF73] font-semibold">Performance Digital Marketer</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#1DBF73] to-[#19A463] text-white p-6 rounded-xl">
                  <h4 className="text-xl font-bold mb-2">🚀 Ready to Scale Your Business?</h4>
                  <p className="text-white/90 leading-relaxed mb-4">
                    Join 100+ satisfied clients who've achieved exceptional results with my proven strategies. 
                    Let's discuss your project and create something amazing together!
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-white/10 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold">5.0 ⭐</div>
                      <div className="text-xs text-white/80">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold">100+</div>
                      <div className="text-xs text-white/80">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold">1-2h</div>
                      <div className="text-xs text-white/80">Response</div>
                    </div>
                  </div>

                  <Button 
                    onClick={() => window.open('https://www.fiverr.com/alifpixelpro', '_blank')} 
                    className="w-full bg-white text-[#1DBF73] hover:bg-white/90 py-3 font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Visit My Fiverr Profile
                  </Button>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-foreground">🎯 What You Get:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#1DBF73] rounded-full mr-3"></div>
                      Professional consultation & strategy
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#1DBF73] rounded-full mr-3"></div>
                      Custom solutions for your business
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#1DBF73] rounded-full mr-3"></div>
                      Guaranteed satisfaction & support
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Enhanced Contact Form */}
          <div data-aos="fade-left">
            <Card className="p-6 sm:p-8 shadow-lg border-0">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                        Full Name
                      </label>
                      <Input 
                        id="name" 
                        name="name" 
                        type="text" 
                        required 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        className="h-12 border-border/50 focus:border-primary" 
                        placeholder="Your full name" 
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        Email Address
                      </label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        className="h-12 border-border/50 focus:border-primary" 
                        placeholder="your.email@example.com" 
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-2">
                      Service Interested In
                    </label>
                    <Select onValueChange={(value) => handleSelectChange('service', value)} value={formData.service}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="meta-ads">Meta Ads Management</SelectItem>
                        <SelectItem value="social-media">Social Media Marketing</SelectItem>
                        <SelectItem value="web-design">Web Design & Development</SelectItem>
                        <SelectItem value="email-marketing">Email Marketing</SelectItem>
                        <SelectItem value="full-package">Complete Marketing Package</SelectItem>
                        <SelectItem value="consultation">Consultation Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-semibold text-foreground mb-2">
                        Budget Range
                      </label>
                      <Select onValueChange={(value) => handleSelectChange('budget', value)} value={formData.budget}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-500">Under $500</SelectItem>
                          <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                          <SelectItem value="1000-3000">$1,000 - $3,000</SelectItem>
                          <SelectItem value="3000-5000">$3,000 - $5,000</SelectItem>
                          <SelectItem value="5000-plus">$5,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-semibold text-foreground mb-2">
                        Project Timeline
                      </label>
                      <Select onValueChange={(value) => handleSelectChange('timeline', value)} value={formData.timeline}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="When to start?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP / Urgent</SelectItem>
                          <SelectItem value="1-2weeks">Within 1-2 weeks</SelectItem>
                          <SelectItem value="1month">Within 1 month</SelectItem>
                          <SelectItem value="flexible">Flexible / Planning</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Project Details
                    </label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      required 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      rows={5} 
                      className="border-border/50 focus:border-primary resize-none" 
                      placeholder="Tell me about your project, goals, and how I can help you..." 
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting} 
                    variant="gradient" 
                    className="w-full h-12 rounded-xl font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    {isSubmitting ? "Sending..." : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
});

ContactFormEnhanced.displayName = 'ContactFormEnhanced';
export default ContactFormEnhanced;
