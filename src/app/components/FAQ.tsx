import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "Сколько времени обычно занимает выполнение проекта?",
    answer:
      "Создание лендинга занимает от 3 до 5 дней. Создание более сложных проектов и мобильных приложений занимает от 1 до 3 недель.",
  },
  {
    question: "Какова ваша модель ценообразования?",
    answer:
      "Цены на сайты \"под ключ\" мы рассчитываем индивидуально под каждый отдельный проект. Цена зависит от сложности проекта, времени на разработку и необходимости искать и создавать какие-либо исходники.",
  },
  {
    question: "Какой технологический стек вы используете?",
    answer:
      "Для сайтов с большим объемом контента мы в основном используем современные веб-фреймворки, такие как Next.js, Tailwind CSS, Framer или Webflow, обеспечивая максимальную скорость.",
  },
  {
    question: "Вы предоставляете услуги по текущему техническому обслуживанию?",
    answer:
      "Да, мы предлагаем абонентское обслуживание, чтобы ваш сайт оставался актуальным, безопасным и работал на пике своих возможностей еще долго после запуска.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 px-6 max-w-[1200px] mx-auto flex flex-col items-center font-sans" id="faq">
      <h2 className="text-[28px] md:text-[40px] font-bold text-[#0f172a] mb-8 md:mb-16 tracking-[-0.02em] text-center md:text-left w-full md:max-w-[768px]">
        Частые вопросы
      </h2>

      <div className="w-full md:max-w-[768px] flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-[#f1f5f9] rounded-[24px] p-6 cursor-pointer transition-colors hover:border-[#e2e8f0]"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-[18px] font-semibold text-[#0f172a]">
                  {faq.question}
                </h3>
                {isOpen ? (
                  <ChevronUp className="w-6 h-6 text-[#2f5aff] shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#2f5aff] shrink-0" />
                )}
              </div>
              
              <div
                className="grid transition-all duration-300 ease-in-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="text-[#475569] text-[14px] leading-[1.6] pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
