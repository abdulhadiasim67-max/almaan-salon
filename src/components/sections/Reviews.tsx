import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ahmed Raza",
    text: "Absolutely the best barbershop in Gulshan. The attention to detail is unmatched, and the ambiance is premium. I won't go anywhere else for my fade and beard styling.",
    rating: 5,
  },
  {
    name: "Bilal Hussain",
    text: "Got a haircut and a facial here before my wedding. The staff is extremely professional and skilled. The hot towel shave was an experience in itself.",
    rating: 5,
  },
  {
    name: "Usman Tariq",
    text: "Very clean, hygienic, and they really take their time. You don't feel rushed like other places. Truly a 5-star service.",
    rating: 5,
  },
  {
    name: "Hassan Ali",
    text: "Been a regular for 6 months. Consistent quality every single time. The interior gives a very luxury vibe but the prices are quite reasonable for the service you get.",
    rating: 5,
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-card relative border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between mb-16">
          <motion.div 
            className="max-w-xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-primary"></div>
              <span className="text-primary uppercase tracking-[0.3em] text-sm font-semibold">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
              HEAR FROM THE <br/>GENTLEMEN.
            </h2>
            <p className="text-muted-foreground">
              Don't just take our word for it. We pride ourselves on maintaining the highest standards of grooming.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center md:items-end text-center md:text-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-1 text-primary mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" size={32} />
              ))}
            </div>
            <p className="text-5xl font-serif font-bold text-foreground mb-2">5.0</p>
            <p className="text-muted-foreground uppercase tracking-widest text-sm">Based on 98 Google Reviews</p>
            <a href="https://google.com" target="_blank" rel="noreferrer" className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary hover:underline underline-offset-4">Read more on Google</a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              className="bg-background border border-border p-8 hover:border-primary/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex gap-1 text-primary mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={16} />
                ))}
              </div>
              <p className="text-muted-foreground font-serif italic text-lg leading-relaxed mb-6">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold font-serif">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground uppercase tracking-wider text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground">Verified Client</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
