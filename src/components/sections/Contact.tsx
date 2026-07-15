import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <motion.div 
            className="flex items-center justify-center gap-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="h-[1px] w-8 bg-primary"></div>
            <span className="text-primary uppercase tracking-[0.3em] text-sm font-semibold">Location</span>
            <div className="h-[1px] w-8 bg-primary"></div>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-serif font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            VISIT US
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <motion.div 
            className="h-full min-h-[400px] border border-border"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.354145946853!2d67.091157!3d24.919934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f3bc6e0d3cb%3A0xc4c5e317c4587c6!2sGulshan-e-Iqbal%20Block%2011%20Karachi!5e0!3m2!1sen!2s!4v1714589255678!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          <motion.div 
            className="bg-card border border-border p-8 md:p-12 flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-serif font-bold text-foreground mb-8">Almaan Men Salon</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold uppercase tracking-wider text-sm mb-2">Address</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Shop No. B14, Matka Gali, Al-Ahsan Apartment, <br />
                    Rashid Minhas Rd, Block 11, <br />
                    Gulshan-e-Iqbal, Karachi 75300, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold uppercase tracking-wider text-sm mb-2">Phone / WhatsApp</h4>
                  <a href="tel:+923091271586" className="text-3xl font-serif text-foreground hover:text-primary transition-colors block">
                    0309 1271586
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold uppercase tracking-wider text-sm mb-2">Hours</h4>
                  <p className="text-muted-foreground">Mon - Sun: 11:00 AM - 11:00 PM</p>
                  <p className="text-muted-foreground">Friday: 2:00 PM - 11:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <a 
                href="https://wa.me/923091271586" 
                target="_blank" 
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 font-bold uppercase tracking-wider hover:bg-[#20bd5a] transition-colors"
              >
                Message on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
