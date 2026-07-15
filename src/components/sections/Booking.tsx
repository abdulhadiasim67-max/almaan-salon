import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  service: z.string().min(1, "Please select a service"),
  date: z.date({
    required_error: "A date of appointment is required.",
  }),
  time: z.string().min(1, "Please select a preferred time"),
  message: z.string().optional(),
});

const services = [
  "Haircut",
  "Beard Trim & Styling",
  "Hair Styling",
  "Face Clean Up",
  "Luxury Facial",
  "Hair Coloring",
  "Classic Shave",
  "Complete Package (Hair, Beard, Facial)"
];

const timeSlots = [
  "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", 
  "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", 
  "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM"
];

export function Booking() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: "",
      time: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Appointment Requested",
        description: "We have received your booking request. We will contact you shortly to confirm.",
      });
      form.reset();
    }, 1500);
  }

  return (
    <section id="booking" className="py-24 md:py-32 bg-[#050505] relative border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24">
          
          <motion.div 
            className="lg:col-span-2 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-primary"></div>
              <span className="text-primary uppercase tracking-[0.3em] text-sm font-semibold">Reservation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
              BOOK YOUR <br/><span className="text-primary italic font-light">CHAIR.</span>
            </h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed mb-8">
              Secure your appointment at Almaan Men Salon. Select your preferred service and time, and our master barbers will ensure you leave looking your absolute best.
            </p>
            
            <div className="bg-card border border-border p-6 mt-4">
              <h4 className="font-serif text-lg font-semibold text-foreground uppercase tracking-wider mb-2">Walk-ins Welcome</h4>
              <p className="text-muted-foreground text-sm">While we highly recommend booking in advance to avoid wait times, we always try to accommodate walk-in clients.</p>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-3 bg-background border border-border p-8 md:p-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground uppercase tracking-wider text-xs">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="rounded-none border-border bg-card focus-visible:ring-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground uppercase tracking-wider text-xs">Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="0300 1234567" className="rounded-none border-border bg-card focus-visible:ring-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground uppercase tracking-wider text-xs">Select Service</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="rounded-none border-border bg-card focus-visible:ring-primary">
                            <SelectValue placeholder="Choose a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="rounded-none border-border">
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>{service}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="text-foreground uppercase tracking-wider text-xs mb-1">Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal rounded-none border-border bg-card hover:bg-card hover:text-foreground",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 rounded-none border-border bg-card" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date < new Date(new Date().setHours(0, 0, 0, 0))
                              }
                              initialFocus
                              className="bg-card text-foreground"
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground uppercase tracking-wider text-xs">Time</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-none border-border bg-card focus-visible:ring-primary">
                              <SelectValue placeholder="Select time" />
                              <Clock className="ml-auto h-4 w-4 opacity-50 absolute right-3" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="rounded-none border-border max-h-[200px]">
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>{time}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground uppercase tracking-wider text-xs">Additional Notes (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Any specific requests for your barber?" 
                          className="resize-none rounded-none border-border bg-card focus-visible:ring-primary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full rounded-none uppercase tracking-widest font-bold py-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Confirm Booking"}
                </Button>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
