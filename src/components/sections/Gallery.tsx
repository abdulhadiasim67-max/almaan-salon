import { motion } from "framer-motion";

const images = [
  { src: "/gallery1.png", alt: "Straight razor shave" },
  { src: "/gallery2.png", alt: "Modern fade haircut" },
  { src: "/gallery3.png", alt: "Styling beard with scissors" },
  { src: "/gallery4.png", alt: "Luxury salon interior tools" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <motion.div 
            className="flex items-center justify-center gap-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="h-[1px] w-8 bg-primary"></div>
            <span className="text-primary uppercase tracking-[0.3em] text-sm font-semibold">Portfolio</span>
            <div className="h-[1px] w-8 bg-primary"></div>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-serif font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            THE CRAFT
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              className="relative aspect-square overflow-hidden group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="https://instagram.com/almaanmensalon" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-foreground uppercase tracking-widest text-sm font-bold hover:text-primary transition-colors">
            Follow us on Instagram for more
          </a>
        </div>
        
      </div>
    </section>
  );
}
