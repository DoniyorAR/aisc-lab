
import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
    
    // You would typically send this data to your backend here
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      content: 'yicho@gachon.ac.kr',
      link: ''
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      content: '+ 8210 3970 9302',
      link: ''
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-br from-accent/5 to-background">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in' : 'opacity-0 -translate-x-10'}`}>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-accent/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-ai-blue transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-accent/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-ai-blue transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-accent/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-ai-blue transition-all duration-300"
                    placeholder="Your company"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-accent/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-ai-blue transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-ai-blue to-ai-purple text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/20 transition-colors duration-300 group"
                  >
                    <div className="text-ai-blue group-hover:text-ai-purple transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-semibold">{info.title}</div>
                      <div className="text-foreground/70">{info.content}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

         <div className="mt-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.877320724494!2d127.13129667565386!3d37.45512543214005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca9223b7f1c5f%3A0x91acd5ebf975573b!2z64yA7ZWc64yA7ZWc6rWQIOyEnOyCrCDsiJnrtoHsgrDsl5AgQWkg6rCA7J6Q6rO17JuQ!5e0!3m2!1sko!2skr!4v1718189864675!5m2!1sko!2skr"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gachon University AI Engineering Hall Map"
                  className="rounded-lg shadow-xl"
                ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
