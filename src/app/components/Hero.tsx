interface HeroProps {
  onOpenModal: () => void;
}

export function Hero({ onOpenModal }: HeroProps) {
  const scrollToCases = () => {
    const element = document.getElementById("кейсы");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-[140px] md:pt-[160px] pb-[64px] px-6 max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 items-start font-sans">
      <div className="flex-1 w-full">
        <h1 className="text-[36px] sm:text-[48px] md:text-[72px] leading-[1.1] font-bold text-[#0f172a] tracking-[-0.03em] break-words">
          Сайты под ключ для{" "}
          <span className="text-[#2f5aff]">
            амбициозных
          </span>{" "}
          брендов
        </h1>
      </div>
      
      <div className="w-full lg:w-[452px] flex flex-col gap-8 md:gap-10 pt-2 md:pt-4">
        <p className="text-[16px] md:text-[20px] leading-[1.6] text-[#475569]">
          Мы сочетаем структурный подход с высококачественным дизайном
          пользовательского интерфейса для запуска цифровых проектов, которые
          действительно приводят к конверсиям. Быстрая разработка, нулевой
          компромисс в качестве.
        </p>
        
        <div className="flex flex-col gap-4 w-full">
          <button 
            onClick={onOpenModal}
            className="bg-[#2f5aff] text-white rounded-[24px] py-4 px-8 font-semibold text-[16px] hover:bg-[#2548cc] transition-colors w-full text-center shadow-lg shadow-[#2f5aff]/20 cursor-pointer"
          >
            Обсудить сайт
          </button>
          
          <button 
            onClick={scrollToCases}
            className="bg-white border-2 border-[#e2e8f0] text-[#0f172a] rounded-[24px] py-[18px] px-8 font-semibold text-[16px] hover:border-[#cbd5e1] hover:bg-slate-50 transition-all w-full text-center cursor-pointer"
          >
            Посмотреть избранные работы
          </button>
        </div>
      </div>
    </section>
  );
}
