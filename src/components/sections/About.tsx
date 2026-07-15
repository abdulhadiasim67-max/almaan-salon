import { motion } from "framer-motion";

const stats = [
  { value: "5.0", label: "Google Rating", sub: "Out of 5 Stars" },
  { value: "98+", label: "Verified Reviews", sub: "Happy Clients" },
  { value: "10+", label: "Expert Services", sub: "Grooming Solutions" },
  { value: "7", label: "Days a Week", sub: "Always Open" },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <img 
                src="/about.png" 
                alt="Master barber at Almaan Men Salon" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 border border-primary/30 translate-x-4 translate-y-4 -z-10"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute bottom-10 -right-4 md:-right-10 bg-card border border-border p-6 shadow-2xl max-w-[200px] z-20">
              <p className="text-4xl font-serif font-bold text-primary mb-2">5.0★</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Top Rated Barbershop in Gulshan-e-Iqbal</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-primary"></div>
              <span className="text-primary uppercase tracking-[0.3em] text-sm font-semibold">Our Story</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-foreground leading-tight">
              MORE THAN A HAIRCUT. <br />
              <span className="italic font-light text-primary">A RITUAL.</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed mb-12">
              <p>
                Almaan Men Salon was built on a simple philosophy: men deserve a dedicated space for premium grooming. Located in the heart of Gulshan-e-Iqbal, we've curated an environment that speaks to the modern gentleman.
              </p>
              <p>
                Our master barbers combine classic techniques with contemporary styling to deliver unmatched results. Whether you need a sharp fade, a meticulous beard sculpt, or a rejuvenating facial, every service is executed with absolute precision.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border/50">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-serif font-bold text-foreground mb-1">{stat.value}</p>
                  <p className="text-primary uppercase tracking-wider text-xs font-semibold mb-1">{stat.label}</p>
                  <p className="text-muted-foreground text-sm">{stat.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
