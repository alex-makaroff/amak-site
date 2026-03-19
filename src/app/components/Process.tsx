export function Process() {
  const steps = [
    {
      title: "Бриф",
      description:
        "Мы проводим 15-минутную синхронизацию, чтобы определить цели, целевую аудиторию и основные характеристики вашего проекта.",
    },
    {
      title: "Структура",
      description:
        "Архитектура информации и высококачественные прототипы интерфейса с упором на пользовательский опыт и конверсию.",
    },
    {
      title: "Дизайн",
      description:
        "Применение высококачественного визуального языка, оригинальной типографики и уникальной фирменной идентичности.",
    },
    {
      title: "Разработка и запуск",
      description:
        "Разработка чистого кода и SEO-оптимизация для безупречного запуска в производство.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 max-w-[1200px] mx-auto font-sans" id="процесс">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 border-b border-[#f1f5f9] pb-8 gap-4 md:gap-0">
        <h2 className="text-[28px] md:text-[40px] font-bold text-[#0f172a] tracking-[-0.02em]">
          Процесс
        </h2>
        <span className="text-[#94a3b8] font-semibold text-[12px] tracking-[0.08em] uppercase mb-2">
          Процесс Шаг за шагом
        </span>
      </div>

      <div className="flex flex-col md:flex-row border-t border-[#f1f5f9]">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex-1 pt-6 md:pt-8 px-0 md:px-8 border-b md:border-b-0 md:border-r border-[#f1f5f9] last:border-r-0 last:border-b-0 pb-8 md:pb-0 ${
              index === 0 ? "md:pl-0" : ""
            } ${index === steps.length - 1 ? "md:pr-0" : ""}`}
          >
            <h3 className="text-[18px] md:text-[20px] font-semibold text-[#0f172a] mb-4">
              {step.title}
            </h3>
            <p className="text-[#475569] text-[14px] leading-[1.6]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
