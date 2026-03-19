export function Footer() {
  return (
    <footer className="max-w-[1200px] mx-auto w-full px-6 pb-12 md:pb-24 font-sans" id="контакты">
      <div className="border-t border-[#f1f5f9] pt-12 md:pt-24 pb-12 md:pb-24 flex flex-col md:flex-row gap-12 md:gap-24">
        
        <div className="flex-1 flex flex-col gap-6">
          <span className="text-[#2f5aff] font-semibold text-[12px] tracking-[0.08em] uppercase">
            СВЯЗАТЬСЯ С НАМИ
          </span>
          <a
            href="mailto:hello@amak.site"
            className="text-[24px] md:text-[30px] font-bold text-[#0f172a] no-underline hover:text-[#2f5aff] transition-colors break-all md:break-normal"
          >
            hello@amak.site
          </a>
          <div className="flex gap-6 mt-2">
            <a href="https://t.me/m/nVzECBlaMmZi" target="_blank" rel="noopener noreferrer" className="text-[#475569] font-semibold text-[16px] no-underline hover:text-[#2f5aff] transition-colors">
              Telegram
            </a>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <span className="text-[#94a3b8] font-semibold text-[12px] tracking-[0.08em] uppercase">
            О СТУДИИ
          </span>
          <p className="text-[#475569] text-[16px] md:text-[18px] leading-[1.6]">
            AMAK SITES - это студия разработки и дизайна премиум-класса,
            ориентированная на скорость и структуру. Мы помогаем
            амбициозным основателям и брендам запускать высококачественные
            веб-сайты без типичной бюрократии агентств.
          </p>
        </div>
      </div>

      <div className="border-t border-[#f1f5f9] pt-8 md:pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
        <div className="flex items-center gap-2 font-bold text-[16px] text-[#0f172a] tracking-[-0.02em]">
          <img src="/logo.png" alt="AMAK SITES Logo" className="w-6 h-6 object-contain" />
          AMAK SITES © 2026
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 font-sans font-semibold text-[12px] tracking-[0.08em] text-[#94a3b8] uppercase">
          <span>МОСКВА / РАБОТАЕМ ПО ВСЕМУ МИРУ</span>
          <span>ВСЕ ПРАВА ЗАЩИЩЕНЫ</span>
        </div>
      </div>
    </footer>
  );
}
