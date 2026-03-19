import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const steps = [
  {
    id: "structure",
    label: "СТРУКТУРА",
    description: "Начинаем всегда со структуры. Правильная структура — залог успешного сайта",
  },
  {
    id: "design",
    label: "ДИЗАЙН",
    description: "Собираем визуал, который ведёт к действию: смыслы, акценты, микро-логика экранов.",
  },
  {
    id: "code",
    label: "КОД",
    description: "Верстаем и подключаем всё нужное: формы, трекинг, интеграции",
  },
];

export function Benefits() {
  const [activeStep, setActiveStep] = useState("structure");

  const activeDescription = steps.find((s) => s.id === activeStep)?.description || "";

  return (
    <section className="bg-[#dceaf8] w-full pt-6 pb-12 md:pt-8 md:pb-16 px-6 font-sans text-center">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <span className="text-[#475569] text-[12px] md:text-[12px] font-semibold uppercase tracking-[0.08em] mb-4 md:mb-6">
          всегда работаем по сценарию:
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-3 md:gap-x-5 gap-y-2">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center gap-3 md:gap-5">
              <button
                onClick={() => setActiveStep(step.id)}
                className={`
                  font-bold text-[24px] md:text-[40px] lg:text-[48px] tracking-[-0.02em] leading-none cursor-pointer
                  transition-colors duration-300 bg-transparent border-none p-0
                  ${activeStep === step.id ? "text-[#2f5aff]" : "text-[#0f172a]"}
                `}
              >
                {step.label}
              </button>
              {index < steps.length - 1 && (
                <span className="text-[#94a3b8] font-bold text-[24px] md:text-[40px] lg:text-[48px] leading-none select-none">
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 md:mt-8 h-[24px] md:h-[28px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="text-[#475569] text-[14px] md:text-[16px] font-normal text-center leading-relaxed"
            >
              {activeDescription}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
