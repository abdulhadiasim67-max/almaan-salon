import { Instagram, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary tracking-wider uppercase mb-6">
              ALMAAN<span className="text-foreground">.</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A premium men's grooming salon in Gulshan-e-Iqbal, Karachi. Where traditional barbering meets modern refinement.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/almaanmensalon" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold text-foreground uppercase tracking-wider mb-6">Contact Info</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 shrink-0" size={18} />
                <span>Shop No. B14, Matka Gali, Al-Ahsan Apartment, Rashid Minhas Rd, Block 11, Gulshan-e-Iqbal, Karachi 75300, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <a href="tel:+923091271586" className="hover:text-primary transition-colors">0309 1271586</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold text-foreground uppercase tracking-wider mb-6">Opening Hours</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex justify-between border-b border-border/50 pb-2">
                <span>Monday - Sunday</span>
                <span className="text-foreground">11:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-border/50 pb-2">
                <span>Friday</span>
                <span className="text-foreground">2:00 PM - 11:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold text-foreground uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors uppercase tracking-widest text-xs">Our Story</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors uppercase tracking-widest text-xs">Services</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors uppercase tracking-widest text-xs">Gallery</a></li>
              <li><a href="#booking" className="hover:text-primary transition-colors uppercase tracking-widest text-xs">Book Appointment</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© 2026 Almaan Men Salon. All Rights Reserved.</p>
          <div className="flex items-center gap-1 mt-4 md:mt-0">
            <span>Designed for the modern gentleman.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
