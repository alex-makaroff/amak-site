import { useState, useEffect } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { CTA } from "./CTA";
import { fetchAllCases, getCoverUrl, type StrapiCase, type WebsiteDetails, type DesignDetails } from "@/app/lib/strapi";

interface AllCasesViewProps {
  onOpenModal: () => void;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
  }),
};

export function AllCasesView({ onOpenModal }: AllCasesViewProps) {
  const [activeTab, setActiveTab] = useState<"web" | "design">("web");
  const [direction, setDirection] = useState(0);
  const [webCases, setWebCases] = useState<StrapiCase[]>([]);
  const [designCases, setDesignCases] = useState<StrapiCase[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    Promise.all([
      fetchAllCases("website", controller.signal).catch(() => []),
      fetchAllCases("design", controller.signal).catch(() => []),
    ]).then(([web, design]) => {
      setWebCases(web);
      setDesignCases(design);
      setLoading(false);
    });
    return () => controller.abort();
  }, []);

  const handleTabChange = (tab: "web" | "design") => {
    if (tab === activeTab) return;
    const newDirection = tab === "design" ? 1 : -1;
    setDirection(newDirection);
    setActiveTab(tab);
  };

  const renderGrid = (items: StrapiCase[], type: "web" | "design") => {
    if (items.length === 0) {
      return (
        <div className="w-full flex items-center justify-center py-24">
          <p className="text-[#94a3b8] text-[18px]">Кейсы скоро появятся</p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12">
        {items.map((item) => {
          const detail = item.attributes.details?.[0];
          let liveUrl = "#";
          let ctaLabel = type === "web" ? "ПЕРЕЙТИ" : "СМОТРЕТЬ КЕЙС";
          if (detail && detail.__component === "case.website-details") {
            const wd = detail as WebsiteDetails;
            liveUrl = wd.liveUrl || "#";
            if (wd.ctaLabel) ctaLabel = wd.ctaLabel;
          }
          if (detail && detail.__component === "case.design-details") {
            const dd = detail as DesignDetails;
            if (dd.ctaLabel) ctaLabel = dd.ctaLabel;
          }

          return (
            <div key={item.id} className="flex flex-col h-full gap-3 md:gap-5 group cursor-pointer border border-[#f1f5f9] rounded-[20px] p-3 md:p-4 hover:border-[#e2e8f0] hover:shadow-sm transition-all duration-300 bg-white">
              <div className="w-full aspect-[4/3] rounded-[12px] md:rounded-[16px] overflow-hidden bg-[#f8fafc] relative shrink-0">
                <img
                  src={getCoverUrl(item)}
                  alt={item.attributes.coverAlt || item.attributes.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="flex flex-col flex-1 gap-2 md:gap-4 px-1">
                <div className="flex flex-col gap-1">
                  <span className="text-[#2f5aff] font-semibold text-[10px] md:text-[12px] tracking-[0.08em] uppercase truncate">
                    {item.attributes.badge}
                  </span>
                  <h3 className="text-[16px] md:text-[20px] font-semibold text-[#0f172a] leading-[1.3] md:leading-[1.4] line-clamp-2">
                    {item.attributes.title}
                  </h3>
                  <p className="text-[#475569] text-[12px] md:text-[14px] leading-[1.4] md:leading-[1.5] line-clamp-2 md:line-clamp-none">
                    {item.attributes.excerpt || item.attributes.description}
                  </p>
                </div>

                <div className={`mt-auto flex items-center pt-3 md:pt-4 border-t border-[#f8fafc] ${type === 'web' ? 'justify-end' : 'justify-start'}`}>
                  {type === "design" && (
                    <Link 
                      to={`/cases/${item.attributes.slug}`}
                      className="bg-[#0f172a] text-white px-3 md:px-5 py-2 md:py-2.5 rounded-[12px] md:rounded-[16px] font-semibold text-[10px] md:text-[12px] tracking-[0.08em] uppercase hover:bg-[#1e293b] transition-colors w-full md:w-auto text-center no-underline"
                    >
                      {ctaLabel}
                    </Link>
                  )}
                  
                  {type === "web" && (
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 group/link no-underline">
                      <span className="text-[#94a3b8] font-semibold text-[10px] md:text-[12px] tracking-[0.08em] uppercase border-b border-transparent group-hover/link:text-[#2f5aff] group-hover/link:border-[#2f5aff] transition-all">
                        ПЕРЕЙТИ
                      </span>
                      <ExternalLink size={12} className="text-[#94a3b8] group-hover/link:text-[#2f5aff] transition-colors" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const loadingPlaceholder = (
    <div className="w-full flex items-center justify-center py-24">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2f5aff]" />
    </div>
  );

  return (
    <>
      <div className="pt-[100px] md:pt-[120px] pb-12 md:pb-24 px-4 md:px-6 max-w-[1200px] mx-auto font-sans flex flex-col items-center w-full">
        <div className="w-full flex justify-start mb-6 md:mb-8">
          <Link 
            to="/"
            className="flex items-center gap-2 text-[#94a3b8] hover:text-[#0f172a] transition-colors group no-underline"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold text-[14px]">Вернуться на главную</span>
          </Link>
        </div>

        <div className="flex flex-col items-center text-center gap-4 md:gap-6 mb-8 md:mb-12 max-w-[672px]">
          <h1 className="text-[36px] md:text-[72px] font-bold text-[#0f172a] leading-none tracking-[-0.03em]">
            Кейсы
          </h1>
          <p className="text-[#475569] text-[16px] md:text-[20px] leading-[1.4] px-4 md:px-0">
            Концепты сайтов и дизайна, разработанные с учетом принципа «структура прежде всего»
          </p>
        </div>

        <div className="bg-[#f1f5f9] p-1 md:p-1.5 rounded-full flex items-center mb-10 md:mb-16">
          <button
            onClick={() => handleTabChange("web")}
            className={`px-6 md:px-8 py-2 md:py-2.5 rounded-full text-[12px] md:text-[14px] font-semibold transition-all duration-300 ${
              activeTab === "web"
                ? "bg-white text-[#2f5aff] shadow-sm"
                : "bg-transparent text-[#94a3b8] hover:text-[#475569]"
            }`}
          >
            Сайты
          </button>
          <button
            onClick={() => handleTabChange("design")}
            className={`px-6 md:px-8 py-2 md:py-2.5 rounded-full text-[12px] md:text-[14px] font-semibold transition-all duration-300 ${
              activeTab === "design"
                ? "bg-white text-[#2f5aff] shadow-sm"
                : "bg-transparent text-[#94a3b8] hover:text-[#475569]"
            }`}
          >
            Дизайн
          </button>
        </div>

        <div className="w-full relative min-h-[600px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeTab}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="w-full"
            >
              {loading ? loadingPlaceholder : (activeTab === "web" ? renderGrid(webCases, "web") : renderGrid(designCases, "design"))}
            </motion.div>
          </AnimatePresence>
        </div>
        
      </div>

      <CTA onOpenModal={onOpenModal} />
    </>
  );
}
