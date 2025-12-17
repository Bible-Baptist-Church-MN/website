import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import aboutHeader from "@assets/generated_images/open_bible_on_wooden_table.png";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="relative h-[400px] w-full overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${aboutHeader})` }}
          >
            <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
          </div>
          <div className="container relative z-10 flex h-full items-center justify-center text-center">
            <h1 className="font-serif text-5xl font-bold text-white md:text-6xl animate-in fade-in slide-in-from-bottom-4 duration-700">
              About Us
            </h1>
          </div>
        </div>

        {/* Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-12">
              
              {/* Who We Are */}
              <div className="text-center">
                <span className="mb-2 block text-sm font-bold uppercase tracking-widest text-secondary-foreground">Who We Are</span>
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">A Community of Faith</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Bible Baptist Church is a Bible-believing, Christ-centered community in Farmington, MN. 
                  We exist to glorify God by making disciples who love God, love people, and serve the world. 
                  Whether you have been a believer for decades or are just starting to explore faith, 
                  you will find a welcoming home here.
                </p>
              </div>

              <hr className="border-border" />

              {/* Our History (Placeholder) */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-4">Our History</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Founded in [Year], Bible Baptist Church has been serving the Farmington community for over [Number] years. 
                    What started as a small Bible study has grown into a vibrant congregation dedicated to the truth of Scripture.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Over the years, our methods may have changed, but our message remains the same: 
                    the life-transforming power of the Gospel of Jesus Christ.
                  </p>
                </div>
                <div className="bg-muted rounded-2xl p-8 h-full flex items-center justify-center">
                  <span className="text-muted-foreground italic">Historical photo or building image</span>
                </div>
              </div>

              <hr className="border-border" />

              {/* What We Believe */}
              <div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-6 text-center">What We Believe</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50">
                    <h4 className="font-bold text-primary mb-2">The Bible</h4>
                    <p className="text-sm text-muted-foreground">
                      We believe the Bible is the inspired, infallible, and authoritative Word of God. 
                      It is our final authority for faith and practice.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50">
                    <h4 className="font-bold text-primary mb-2">God</h4>
                    <p className="text-sm text-muted-foreground">
                      We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50">
                    <h4 className="font-bold text-primary mb-2">Salvation</h4>
                    <p className="text-sm text-muted-foreground">
                      We believe that salvation is by grace alone, through faith alone, in Christ alone. 
                      It is a free gift of God, not a result of works.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50">
                    <h4 className="font-bold text-primary mb-2">The Church</h4>
                    <p className="text-sm text-muted-foreground">
                      We believe the church is the body of Christ, composed of all believers, 
                      called to worship God and witness to the world.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
