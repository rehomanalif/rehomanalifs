import React, { useState, memo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
interface ContactFormProps {
  contactRef: React.RefObject<HTMLDivElement>;
}
const ContactForm = memo(({
  contactRef
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
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
  return <section ref={contactRef} id="contact" className="py-20 sm:py-24 lg:py-28">
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
                  <p className="text-white/90 leading-relaxed mb-4">Join 100+ satisfied clients who've achieved exceptional results with my proven strategies. Let's discuss your project and create something amazing together!</p>
                  
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

                  <Button onClick={() => window.open('https://www.fiverr.com/alifpixelpro', '_blank')} className="w-full bg-white text-[#1DBF73] hover:bg-white/90 py-3 font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
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

          {/* Contact Form */}
          <div data-aos="fade-left">
            <Card className="p-6 sm:p-8 shadow-lg border-0">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Full Name
                    </label>
                    <Input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange} className="h-12 border-border/50 focus:border-primary" placeholder="Your full name" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email Address
                    </label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className="h-12 border-border/50 focus:border-primary" placeholder="your.email@example.com" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Project Details
                    </label>
                    <Textarea id="message" name="message" required value={formData.message} onChange={handleInputChange} rows={5} className="border-border/50 focus:border-primary resize-none" placeholder="Tell me about your project, goals, and how I can help you..." />
                  </div>

                  <Button type="submit" disabled={isSubmitting} variant="gradient" className="w-full h-12 rounded-xl font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                    {isSubmitting ? "Sending..." : <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
});
ContactForm.displayName = 'ContactForm';
export default ContactForm;