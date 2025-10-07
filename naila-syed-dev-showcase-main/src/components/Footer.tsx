import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm md:text-base">
              © {currentYear} Naila Syed. All rights reserved.
            </p>
            <p className="text-xs md:text-sm text-primary-foreground/80 mt-1 flex items-center justify-center md:justify-start gap-1">
              Made with <Heart className="h-3 w-3 text-red-400 fill-red-400" /> using ReactJS
              and Tailwind CSS
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/naila-syed-55927a210/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-primary-foreground/10 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/NailaFatima"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-primary-foreground/10 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:naila15june@gmail.com"
              className="p-2 hover:bg-primary-foreground/10 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
