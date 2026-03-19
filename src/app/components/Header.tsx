import { useState, useEffect } from "react";
import { Link } from "react-router";

interface HeaderProps {
  onOpenModal: () => void;
  onNavigate?: (section: string) => void;
  onLogoClick?: () => void;
}

export function Header({ onOpenModal, onNavigate, onLogoClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md py-4 border-b border-slate-200"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer no-underline" onClick={handleLogoClick}>
          <img src="/logo.png" alt="AMAK SITES Logo" className="w-8 h-8 object-contain" />
          <span className="font-bold text-[20px] tracking-[-0.02em] text-[#0f172a] font-sans">
            AMAK SITES
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {["Кейсы", "Процесс", "Контакты", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => scrollToSection(e, item.toLowerCase())}
              className="font-semibold text-[14px] text-[#475569] hover:text-[#2f5aff] transition-colors font-sans cursor-pointer no-underline"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={onOpenModal}
            className="bg-[#2f5aff] text-white px-6 py-2.5 rounded-full font-semibold text-[14px] shadow-[0px_10px_15px_-3px_rgba(47,90,255,0.2)] hover:bg-[#2548cc] transition-colors font-sans cursor-pointer"
          >
            Обсудить сайт
          </button>
          <div className="hidden md:block font-semibold text-[10px] tracking-[0.08em] text-[#94a3b8] uppercase font-sans">
            10–15 МИН бриф
          </div>
        </div>
      </div>
    </header>
  );
}
