import heroImage from "@assets/generated_images/warm_church_worship_atmosphere.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <div className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <span className="mb-4 inline-block rounded-full bg-secondary/90 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-secondary-foreground animate-in fade-in slide-in-from-bottom-4 duration-700">
          Welcome Home
        </span>
        
        <h1 className="mb-6 max-w-4xl font-serif text-5xl font-bold leading-tight text-white sm:text-7xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
          Love God. Love People. <br/>
          <span className="italic font-light text-secondary">Serve the World.</span>
        </h1>
        
        <p className="mb-10 max-w-2xl text-lg text-white/90 sm:text-xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          We are a community of believers dedicated to following Jesus and making Him known. Join us this Sunday.
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
          <Button size="lg" className="h-14 px-8 text-lg bg-white text-primary hover:bg-white/90">
            Watch Online <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white text-white hover:bg-white hover:text-primary">
            Get Directions <MapPin className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
