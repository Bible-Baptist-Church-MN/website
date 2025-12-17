import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ServiceInfo } from "@/components/service-info";
import { Ministries } from "@/components/ministries";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ServiceInfo />
        <Ministries />
        
        {/* Quote/Scripture Section */}
        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="container relative mx-auto px-4 text-center">
            <blockquote className="max-w-4xl mx-auto">
              <p className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
                "For where two or three are gathered in my name, there am I among them."
              </p>
              <footer className="text-secondary font-sans font-semibold tracking-widest uppercase">
                Matthew 18:20
              </footer>
            </blockquote>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
