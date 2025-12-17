import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-serif text-2xl font-bold tracking-tight text-white">
              Bible Baptist Church<span className="text-secondary">.</span>
            </span>
            <p className="mt-4 text-white/70 leading-relaxed">
              A community of believers dedicated to following Jesus, loving people, and serving the world.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-6 font-serif text-lg font-bold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Sermons', 'Events', 'Give', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 font-serif text-lg font-bold text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="h-5 w-5 shrink-0 text-secondary" />
                <span>19700 Akin Road<br/>Farmington, MN 55024</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="h-5 w-5 shrink-0 text-secondary" />
                <span>651-460-6433</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="h-5 w-5 shrink-0 text-secondary" />
                <span>bbcoffice@bbcfarmington.org</span>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="mb-6 font-serif text-lg font-bold text-white">Service Times</h4>
            <div className="space-y-2 text-white/70">
              <p><strong className="text-white">Sundays</strong></p>
              <p>9:00 AM — Sunday School</p>
              <p>10:30 AM — Worship Service</p>
              <p className="mt-4"><strong className="text-white">Wednesdays</strong></p>
              <p>6:30 PM — Midweek Prayer</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Bible Baptist Church. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="rounded-full bg-white/5 p-2 text-white hover:bg-secondary hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="rounded-full bg-white/5 p-2 text-white hover:bg-secondary hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="rounded-full bg-white/5 p-2 text-white hover:bg-secondary hover:text-primary transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
