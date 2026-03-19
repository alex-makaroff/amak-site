import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { fetchFeaturedCases, getCoverUrl, type StrapiCase, type WebsiteDetails, type DesignDetails } from "@/app/lib/strapi";

type TabType = "web" | "design";

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

function getCtaInfo(c: StrapiCase): { label: string; href: string; isExternal: boolean } {
  const detail = c.attributes.details?.[0];
  if (detail && detail.__component === "case.website-details") {
    const wd = detail as WebsiteDetails;
    return {
      label: wd.ctaLabel || "ПЕРЕЙТИ НА САЙТ",
      href: wd.liveUrl || "#",
      isExternal: true,
    };
  }
  if (detail && detail.__component === "case.design-details") {
    const dd = detail as DesignDetails;
    return {
      label: dd.ctaLabel || "СМОТРЕТЬ КЕЙС",
      href: `/cases/${c.attributes.slug}`,
      isExternal: false,
    };
  }
  return { label: "СМОТРЕТЬ КЕЙС", href: `/cases/${c.attributes.slug}`, isExternal: false };
}

export function Cases() {
  const [activeTab, setActiveTab] = useState<TabType>("web");
  const [direction, setDirection] = useState(0);
  const [webCases, setWebCases] = useState<StrapiCase[]>([]);
  const [designCases, setDesignCases] = useState<StrapiCase[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    Promise.all([
      fetchFeaturedCases("website", controller.signal).catch(() => []),
      fetchFeaturedCases("design", controller.signal).catch(() => []),
    ]).then(([web, design]) => {
      setWebCases(web);
      setDesignCases(design);
      setLoading(false);
    });
    return () => controller.abort();
  }, []);

  const handleTabChange = (tab: TabType) => {
    if (tab === activeTab) return;
    const newDirection = tab === "design" ? 1 : -1;
    setDirection(newDirection);
    setActiveTab(tab);
  };

  const renderFeaturedContent = (cases: StrapiCase[]) => {
    if (cases.length === 0) {
      return (
        <div className="w-full flex items-center justify-center py-24">
          <p className="text-[#94a3b8] text-[18px]">Кейсы скоро появятся</p>
        </div>
      );
    }

    const hero = cases.find(c => c.attributes.featuredRank === 1) || cases[0];
    const grid = cases.filter(c => c.id !== hero.id).slice(0, 2);
    const heroCtaInfo = getCtaInfo(hero);

    return (
      <div className="w-full">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center mb-16">
          <div className="w-full lg:w-[645px] aspect-video lg:aspect-auto lg:h-[403px] rounded-[16px] overflow-hidden bg-[#f5f7fb] relative group">
            <img
              src={getCoverUrl(hero)}
              alt={hero.attributes.coverAlt || hero.attributes.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-[442px] flex flex-col items-start relative h-full justify-between py-2 lg:py-8 gap-6 lg:gap-0">
            <div className="hidden lg:block absolute top-0 left-0 w-full h-[2px] bg-[#2f5aff]" />
            
            <div className="mt-0 lg:mt-8 mb-0 lg:mb-8">
              <span className="text-[#94a3b8] font-semibold text-[12px] tracking-[0.08em] uppercase block mb-4">
                {hero.attributes.badge}
              </span>
              <h3 className="text-[28px] md:text-[40px] font-bold text-[#0f172a] leading-[1.1] tracking-[-0.02em] mb-4 md:mb-8">
                {hero.attributes.title}
              </h3>
              <p className="text-[#475569] text-[16px] md:text-[18px] leading-[1.6]">
                {hero.attributes.excerpt || hero.attributes.description}
              </p>
            </div>

            {heroCtaInfo.isExternal ? (
              <a href={heroCtaInfo.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 pb-1.5 border-b-2 border-[#0f172a] group no-underline hover:text-[#2f5aff] hover:border-[#2f5aff] transition-colors">
                <span className="text-[#0f172a] font-semibold text-[12px] tracking-[0.08em] group-hover:text-[#2f5aff] transition-colors">
                  {heroCtaInfo.label}
                </span>
              </a>
            ) : (
              <Link to={heroCtaInfo.href} className="flex items-center gap-2 pb-1.5 border-b-2 border-[#0f172a] group no-underline hover:text-[#2f5aff] hover:border-[#2f5aff] transition-colors">
                <span className="text-[#0f172a] font-semibold text-[12px] tracking-[0.08em] group-hover:text-[#2f5aff] transition-colors">
                  {heroCtaInfo.label}
                </span>
              </Link>
            )}
          </div>
        </div>

        {grid.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-8">
            {grid.map((c) => {
              const ctaInfo = getCtaInfo(c);
              const card = (
                <div key={c.id} className="flex flex-col gap-6 md:gap-8 group cursor-pointer">
                  <div className="w-full h-[240px] md:h-[320px] rounded-[16px] overflow-hidden bg-[#f5f7fb]">
                    <img
                      src={getCoverUrl(c)}
                      alt={c.attributes.coverAlt || c.attributes.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[#94a3b8] font-semibold text-[12px] tracking-[0.08em] uppercase">
                      {c.attributes.badge}
                    </span>
                    <h3 className="text-[24px] md:text-[30px] font-bold text-[#0f172a] tracking-[-0.02em] group-hover:text-[#2f5aff] transition-colors">
                      {c.attributes.title}
                    </h3>
                  </div>
                </div>
              );
              if (ctaInfo.isExternal) {
                return <a key={c.id} href={ctaInfo.href} target="_blank" rel="noopener noreferrer" className="no-underline">{card}</a>;
              }
              return <Link key={c.id} to={ctaInfo.href} className="no-underline">{card}</Link>;
            })}
          </div>
        )}
      </div>
    );
  };

  const loadingPlaceholder = (
    <div className="w-full flex items-center justify-center py-24">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2f5aff]" />
    </div>
  );

  return (
    <section className="py-16 md:py-24 px-6 max-w-[1200px] mx-auto font-sans overflow-hidden" id="кейсы">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-[36px] md:text-[64px] font-bold text-[#0f172a] leading-none tracking-[-0.03em]">
            Избранные кейсы
          </h2>
          <p className="text-[#475569] text-[16px] md:text-[18px]">
            Сайты «под ключ» и комплексные системы дизайна
          </p>
        </div>

        <div className="flex gap-8 border-b border-[#f1f5f9] w-full md:w-auto overflow-x-auto">
          <div 
            onClick={() => handleTabChange("web")}
            className={`pb-4 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${
              activeTab === "web" ? "border-[#2f5aff]" : "border-transparent hover:border-[#e2e8f0]"
            }`}
          >
            <span className={`font-semibold text-[12px] tracking-[0.08em] uppercase transition-colors ${
              activeTab === "web" ? "text-[#0f172a]" : "text-[#94a3b8]"
            }`}>
              Сайты
            </span>
          </div>
          <div 
            onClick={() => handleTabChange("design")}
            className={`pb-4 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${
              activeTab === "design" ? "border-[#2f5aff]" : "border-transparent hover:border-[#e2e8f0]"
            }`}
          >
            <span className={`font-semibold text-[12px] tracking-[0.08em] uppercase transition-colors ${
              activeTab === "design" ? "text-[#0f172a]" : "text-[#94a3b8]"
            }`}>
              Дизайн
            </span>
          </div>
        </div>
      </div>

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
          {loading ? loadingPlaceholder : (activeTab === "web" ? renderFeaturedContent(webCases) : renderFeaturedContent(designCases))}
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-end w-full mt-8">
        <Link to="/cases" className="flex items-center gap-2 group cursor-pointer bg-transparent border-none no-underline">
          <span className="text-[#2f5aff] font-semibold text-[14px] tracking-[0.08em] uppercase border-b border-transparent group-hover:border-[#2f5aff] transition-all">
            ко всем кейсам
          </span>
          <ArrowRight className="w-5 h-5 text-[#2f5aff] group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
