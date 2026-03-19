interface CTAProps {
  onOpenModal: () => void;
}

export function CTA({ onOpenModal }: CTAProps) {
  return (
    <section className="py-16 md:py-24 px-6 max-w-[1200px] mx-auto font-sans">
      <div className="bg-[#f5f7fb] rounded-[24px] md:rounded-[40px] p-8 md:p-24 flex flex-col items-center gap-6 md:gap-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#2f5aff]" />
        
        <h2 className="text-[28px] md:text-[48px] font-bold text-[#0f172a] text-center leading-[1.1] max-w-[650px] tracking-[-0.02em]">
          Обсудить ваш сайт за 10-15 минут
        </h2>
        
        <div className="flex flex-col items-center gap-4 mt-2 md:mt-4 w-full md:w-auto">
          <button 
            onClick={onOpenModal}
            className="bg-[#2f5aff] text-white px-8 md:px-12 py-4 md:py-5 rounded-[16px] font-semibold text-[16px] md:text-[18px] shadow-xl shadow-[#2f5aff]/30 hover:bg-[#2548cc] transition-colors cursor-pointer w-full md:w-auto"
          >
            Обсудить сайт
          </button>
          
          <span className="text-[#94a3b8] font-semibold text-[12px] tracking-[0.08em] uppercase text-center">
            НИКАКИХ ОБЯЗАТЕЛЬСТВ — ЛИШЬ НЕБОЛЬШОЙ БРИФ
          </span>
        </div>
      </div>
    </section>
  );
}
