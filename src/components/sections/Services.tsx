import { motion } from "framer-motion";

const servicesList = [
  { name: "Haircut", price: "Starting at Rs 1,000", desc: "Precision cut tailored to your face shape and style preference." },
  { name: "Beard Trim", price: "Starting at Rs 500", desc: "Clean up and shape your beard with sharp lines." },
  { name: "Beard Styling", price: "Starting at Rs 800", desc: "Advanced sculpting, hot towel, and straight razor finish." },
  { name: "Hair Styling", price: "Starting at Rs 600", desc: "Blow dry and professional styling with premium products." },
  { name: "Hair Wash", price: "Starting at Rs 400", desc: "Invigorating shampoo and scalp massage." },
  { name: "Face Clean Up", price: "Starting at Rs 1,200", desc: "Deep cleanse, exfoliation, and hydration for glowing skin." },
  { name: "Facial", price: "Starting at Rs 2,500", desc: "Complete luxury facial treatment tailored to men's skin." },
  { name: "Hair Coloring", price: "Starting at Rs 1,500", desc: "Professional grey blending or full color transformation." },
  { name: "Shaving", price: "Starting at Rs 600", desc: "Classic straight razor wet shave with hot lather." },
  { name: "Kids Haircut", price: "Starting at Rs 800", desc: "Patient and precise styling for the young gentlemen." },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#050505] relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16 md:mb-24">
          <motion.div 
            className="flex items-center justify-center gap-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="h-[1px] w-8 bg-primary"></div>
            <span className="text-primary uppercase tracking-[0.3em] text-sm font-semibold">Menu</span>
            <div className="h-[1px] w-8 bg-primary"></div>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-serif font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            OUR SERVICES
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
          {servicesList.map((service, index) => (
            <motion.div 
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">{service.name}</h3>
                <div className="flex-grow mx-4 border-b border-dashed border-muted-foreground/30 relative top-[-6px]"></div>
                <span className="text-primary font-semibold tracking-wider text-sm">{service.price}</span>
              </div>
              <p className="text-muted-foreground text-sm font-light leading-relaxed pr-12">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-muted-foreground mb-6 italic">Looking for a comprehensive grooming package?</p>
          <a href="#contact" className="inline-flex items-center gap-2 text-foreground uppercase tracking-widest text-sm font-bold border-b border-primary pb-1 hover:text-primary transition-colors">
            Ask about our special packages
          </a>
        </motion.div>

      </div>
    </section>
  );
}
