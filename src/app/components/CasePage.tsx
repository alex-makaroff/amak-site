import { useState, useEffect } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Link, useParams } from "react-router";
import { fetchCaseBySlug, getCoverUrl, getScreenUrl, type StrapiCase, type DesignDetails, type DesignScreen } from "@/app/lib/strapi";
import imgCaseFull from "@/assets/584e3499640e764486b7388c27ee1d4176ef81b6.png";

interface CasePageProps {
  onOpenModal: () => void;
}

export function CasePage({ onOpenModal }: CasePageProps) {
  const { slug } = useParams<{ slug: string }>();
  const [caseData, setCaseData] = useState<StrapiCase | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeScreen, setActiveScreen] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (!slug) return;
    const controller = new AbortController();
    setLoading(true);
    fetchCaseBySlug(slug, controller.signal)
      .then((data) => {
        setCaseData(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
    return () => controller.abort();
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-[100px] md:pt-[120px] pb-12 md:pb-24 px-4 md:px-6 max-w-[1200px] mx-auto font-sans w-full flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2f5aff]" />
      </div>
    );
  }

  const detail = caseData?.attributes.details?.[0] as DesignDetails | undefined;
  const screens: DesignScreen[] = detail?.screens || [];
  const title = caseData?.attributes.title || "Кейс";
  const description = caseData?.attributes.description || caseData?.attributes.excerpt || "";
  const platform = detail?.platform || "Веб-приложение";
  const screensCount = detail?.screensCount || screens.length || 0;

  const currentScreenUrl = screens.length > 0 
    ? getScreenUrl(screens[activeScreen] || screens[0]) 
    : (caseData ? getCoverUrl(caseData) : imgCaseFull);

  const handlePrev = () => {
    setActiveScreen((prev) => (prev > 0 ? prev - 1 : (screens.length > 0 ? screens.length - 1 : 0)));
  };

  const handleNext = () => {
    setActiveScreen((prev) => (screens.length > 0 ? (prev < screens.length - 1 ? prev + 1 : 0) : 0));
  };

  const totalDots = screens.length || 1;

  return (
    <div className="pt-[100px] md:pt-[120px] pb-12 md:pb-24 px-4 md:px-6 max-w-[1200px] mx-auto font-sans w-full">
      <div className="flex flex-col md:flex-row gap-3 md:gap-8 mb-8 md:mb-12">
        <Link 
          to="/"
          className="flex items-center gap-2 text-[#94a3b8] hover:text-[#0f172a] transition-colors group no-underline"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold text-[12px] md:text-[14px]">Вернуться на главную</span>
        </Link>
        
        <Link 
          to="/cases"
          className="flex items-center gap-2 text-[#94a3b8] hover:text-[#0f172a] transition-colors group no-underline"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold text-[12px] md:text-[14px]">Перейти ко всем дизайн кейсам</span>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">
        <div className="w-full lg:w-[320px] shrink-0 flex flex-col pt-0 lg:pt-8 order-2 lg:order-1">
          <div className="w-full h-[2px] bg-[#2f5aff] mb-6 md:mb-8 hidden lg:block" />
          
          <div className="flex flex-col lg:block">
            <h1 className="text-[28px] md:text-[40px] font-bold text-[#0f172a] leading-[1.1] tracking-[-0.02em] mb-4 md:mb-6">
              {title}
            </h1>
            
            <p className="text-[#475569] text-[16px] md:text-[20px] mb-6 md:mb-8 leading-[1.5]">
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-4 md:gap-6 py-4 md:py-6 border-y border-[#f1f5f9] mb-6 md:mb-8">
            <div className="flex justify-between items-center">
              <span className="text-[#94a3b8] font-semibold text-[12px] md:text-[14px]">Платформа</span>
              <span className="text-[#0f172a] font-semibold text-[12px] md:text-[14px]">{platform}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#94a3b8] font-semibold text-[12px] md:text-[14px]">Экраны</span>
              <span className="text-[#0f172a] font-semibold text-[12px] md:text-[14px]">{screensCount}</span>
            </div>
          </div>

          <div className="h-0 md:h-6" />

          <button 
            onClick={onOpenModal}
            className="w-full bg-[#2f5aff] text-white py-4 md:py-5 rounded-[20px] md:rounded-[24px] font-semibold text-[14px] md:text-[16px] shadow-[0px_20px_25px_-5px_rgba(47,90,255,0.2),0px_8px_10px_-6px_rgba(47,90,255,0.2)] hover:bg-[#2548cc] transition-colors cursor-pointer"
          >
            Создать похожий проект
          </button>
        </div>

        <div className="w-full flex flex-col gap-6 md:gap-8 order-1 lg:order-2">
          <div className="relative w-full bg-white rounded-[12px] md:rounded-[16px] shadow-[0px_50px_100px_-20px_rgba(0,0,0,0.12),0px_30px_60px_-30px_rgba(0,0,0,0.15)] overflow-hidden border border-[#e2e8f0]/50">
            <div className="h-8 md:h-10 bg-[#f8fafc] border-b border-[#f1f5f9] flex items-center px-3 md:px-4 gap-1.5">
              <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-red-400/80 border border-red-400/40" />
              <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-amber-400/80 border border-amber-400/40" />
              <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-green-400/80 border border-green-400/40" />
            </div>

            <button
              onClick={() => setIsFullscreen(true)}
              className="absolute top-12 md:top-14 right-3 md:right-4 z-10 w-8 h-8 flex items-center justify-center rounded-lg bg-white/80 backdrop-blur-sm border border-[#e2e8f0]/50 hover:bg-white transition-colors cursor-pointer"
              title="Открыть во весь экран"
            >
              <Maximize2 size={16} className="text-[#2f5aff]" />
            </button>

            <div className="h-[350px] md:h-[600px] overflow-y-auto case-browser-scroll">
              <img 
                src={currentScreenUrl} 
                alt={screens[activeScreen]?.alt || screens[activeScreen]?.title || title}
                className="w-full h-auto block"
              />
            </div>
          </div>

          {totalDots > 1 && (
            <div className="flex justify-center items-center gap-6 md:gap-8">
              <button onClick={handlePrev} className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#e2e8f0] flex items-center justify-center hover:bg-[#f8fafc] transition-colors text-[#0f172a]">
                <ChevronLeft size={16} className="md:w-5 md:h-5" />
              </button>
              
              <div className="flex gap-2 md:gap-2.5">
                {Array.from({ length: totalDots }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full cursor-pointer ${i === activeScreen ? "bg-[#2f5aff]" : "bg-[#e2e8f0]"}`}
                    onClick={() => setActiveScreen(i)}
                  />
                ))}
              </div>

              <button onClick={handleNext} className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#e2e8f0] flex items-center justify-center hover:bg-[#f8fafc] transition-colors text-[#0f172a]">
                <ChevronRight size={16} className="md:w-5 md:h-5" />
              </button>
            </div>
          )}

          {totalDots <= 1 && (
            <div className="flex justify-center items-center gap-6 md:gap-8">
              <button className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#e2e8f0] flex items-center justify-center hover:bg-[#f8fafc] transition-colors text-[#0f172a]">
                <ChevronLeft size={16} className="md:w-5 md:h-5" />
              </button>
              
              <div className="flex gap-2 md:gap-2.5">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#2f5aff]" />
              </div>

              <button className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#e2e8f0] flex items-center justify-center hover:bg-[#f8fafc] transition-colors text-[#0f172a]">
                <ChevronRight size={16} className="md:w-5 md:h-5" />
              </button>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setIsFullscreen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-[80vw] max-h-[90vh] bg-white rounded-[16px] shadow-2xl overflow-hidden border border-[#e2e8f0]/50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-10 bg-[#f8fafc] border-b border-[#f1f5f9] flex items-center justify-between px-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80 border border-red-400/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80 border border-amber-400/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80 border border-green-400/40" />
                </div>
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#e2e8f0]/50 transition-colors cursor-pointer"
                >
                  <X size={16} className="text-[#2f5aff]" />
                </button>
              </div>
              <div className="overflow-y-auto case-browser-scroll" style={{ maxHeight: 'calc(90vh - 40px)' }}>
                <img
                  src={currentScreenUrl}
                  alt={screens[activeScreen]?.alt || screens[activeScreen]?.title || title}
                  className="w-full h-auto block"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
