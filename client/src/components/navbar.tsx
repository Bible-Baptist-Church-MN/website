import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/ministries", label: "Ministries" },
    { href: "/events", label: "Events" },
    { href: "/sermons", label: "Sermons" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold tracking-tight text-primary">
              Bible Baptist Church<span className="text-secondary">.</span>
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href
                    ? "text-primary font-bold"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Button className="font-semibold bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            Plan Your Visit
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-10">
                {links.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors hover:text-primary ${
                        location === link.href
                          ? "text-primary font-bold"
                          : "text-muted-foreground"
                      }`}
                    >
                      {link.label}
                    </a>
                  </Link>
                ))}
                <Button className="w-full mt-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Plan Your Visit
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
