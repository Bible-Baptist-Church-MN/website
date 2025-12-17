import { Clock, MapPin, Calendar, Coffee } from "lucide-react";

export function ServiceInfo() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1: Times */}
          <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-sm border border-border/50 hover:shadow-md transition-shadow">
            <div className="mb-6 rounded-full bg-primary/5 p-4 text-primary">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="mb-2 font-serif text-2xl font-bold text-primary">Service Times</h3>
            <p className="text-muted-foreground">
              Sunday School: <span className="font-semibold text-foreground">9:00 AM</span>
            </p>
            <p className="text-muted-foreground">
              Worship Service: <span className="font-semibold text-foreground">10:30 AM</span>
            </p>
            <p className="mt-2 text-sm text-secondary-foreground font-medium">coffee & fellowship before service</p>
          </div>

          {/* Card 2: Location */}
          <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-primary text-primary-foreground shadow-lg transform md:-translate-y-4">
            <div className="mb-6 rounded-full bg-white/10 p-4 text-white">
              <MapPin className="h-8 w-8" />
            </div>
            <h3 className="mb-2 font-serif text-2xl font-bold text-white">Visit Us</h3>
            <p className="text-white/80">
              19700 Akin Road
              <br />
              Farmington, MN 55024
            </p>
            <a href="#" className="mt-4 inline-block font-semibold text-secondary hover:text-white transition-colors underline decoration-2 underline-offset-4">
              Get Directions
            </a>
          </div>

          {/* Card 3: New Here */}
          <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-sm border border-border/50 hover:shadow-md transition-shadow">
            <div className="mb-6 rounded-full bg-primary/5 p-4 text-primary">
              <Coffee className="h-8 w-8" />
            </div>
            <h3 className="mb-2 font-serif text-2xl font-bold text-primary">I'm New</h3>
            <p className="text-muted-foreground mb-4">
              Planning your first visit? Let us know you're coming and we'll save you a seat!
            </p>
            <a href="#" className="text-sm font-bold text-primary hover:text-secondary transition-colors uppercase tracking-wide">
              Plan Your Visit &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
