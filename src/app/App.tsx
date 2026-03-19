import { Routes, Route, useNavigate } from "react-router";
import { ContactModal } from "./components/ContactModal";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";
import { Cases } from "./components/Cases";
import { Process } from "./components/Process";
import { CTA } from "./components/CTA";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { AllCasesView } from "./components/AllCasesPage";
import { CasePage } from "./components/CasePage";
import { useState } from "react";

function HomePage({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <>
      <Hero onOpenModal={onOpenModal} />
      <Benefits />
      <Cases />
      <Process />
      <CTA onOpenModal={onOpenModal} />
      <FAQ />
    </>
  );
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (section: string) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden selection:bg-[#2f5aff] selection:text-white relative">
      <Header 
        onOpenModal={openModal} 
        onLogoClick={handleLogoClick}
        onNavigate={handleNavigate}
      />
      <main className="flex flex-col w-full">
        <Routes>
          <Route path="/" element={<HomePage onOpenModal={openModal} />} />
          <Route path="/cases" element={<AllCasesView onOpenModal={openModal} />} />
          <Route path="/cases/:slug" element={<CasePage onOpenModal={openModal} />} />
        </Routes>
      </main>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
