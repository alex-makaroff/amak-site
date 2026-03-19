import { useState, useRef, useCallback } from "react";
import { X, Check, Monitor, Palette, ArrowRight, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function formatPhone(digits: string): string {
  let result = "+7";
  if (digits.length > 1) result += " (" + digits.slice(1, 4);
  if (digits.length >= 4) result += ")";
  if (digits.length > 4) result += " " + digits.slice(4, 7);
  if (digits.length > 7) result += " " + digits.slice(7, 9);
  if (digits.length > 9) result += "-" + digits.slice(9, 11);
  return result;
}

function extractDigits(value: string): string {
  return value.replace(/\D/g, "").slice(0, 11);
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [projectType, setProjectType] = useState<"web" | "design">("web");
  const [name, setName] = useState("");
  const [phoneDigits, setPhoneDigits] = useState("7");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const phoneRef = useRef<HTMLInputElement>(null);

  const resetForm = useCallback(() => {
    setName("");
    setPhoneDigits("7");
    setProjectType("web");
    setErrors({});
    setSubmitStatus("idle");
  }, []);

  const handleClose = useCallback(() => {
    resetForm();
    onClose();
  }, [onClose, resetForm]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    let digits = extractDigits(raw);
    if (digits.length === 0 || digits[0] !== "7") {
      digits = "7" + digits.replace(/^[78]/, "");
    }
    digits = digits.slice(0, 11);
    setPhoneDigits(digits);
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && phoneDigits.length <= 1) {
      e.preventDefault();
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: { name?: string; phone?: string } = {};
    const trimmedName = name.trim();
    if (!trimmedName) {
      newErrors.name = "Введите имя";
    } else if (trimmedName.length < 2) {
      newErrors.name = "Минимум 2 символа";
    }
    if (phoneDigits.length < 11) {
      newErrors.phone = "Введите полный номер телефона";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate() || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: formatPhone(phoneDigits),
          projectType,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setTimeout(() => {
          handleClose();
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBaseClass =
    "bg-[#1978e5]/5 rounded-[12px] px-4 py-4 md:px-[17px] md:py-[19px] border-2 transition-all duration-200";
  const inputNormalBorder = "border-transparent";
  const inputErrorBorder =
    "border-red-400 shadow-[0px_0px_0px_4px_rgba(239,68,68,0.1)]";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={handleClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_40px_0px_rgba(88,46,255,0.05)] w-full max-w-[480px] overflow-hidden my-auto"
          >
            <div className="flex flex-col gap-6 md:gap-8 p-6 md:p-10">

              <div className="flex items-start justify-between">
                <h2 className="text-[#0f172a] text-[20px] md:text-[24px] font-bold tracking-[-0.02em] leading-[1.2]">
                  Обсудим ваш проект
                </h2>
                <button
                  onClick={handleClose}
                  className="text-[#94a3b8] hover:text-[#0f172a] transition-colors p-1 -mr-2 -mt-1 md:mr-0 md:mt-0"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-4 md:gap-6">

                <div className="flex flex-col gap-2">
                  <label className="text-[12px] md:text-[14px] font-semibold text-[#475569] pl-1">
                    Имя
                  </label>
                  <div
                    className={`${inputBaseClass} ${errors.name ? inputErrorBorder : inputNormalBorder} focus-within:border-[#1978e5] focus-within:shadow-[0px_0px_0px_4px_rgba(25,120,229,0.1)]`}
                  >
                    <input
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                      placeholder="Иван Иванович"
                      className="w-full bg-transparent border-none outline-none text-[14px] md:text-[16px] text-[#0f172a] placeholder:text-[#94a3b8] font-normal p-0"
                    />
                  </div>
                  {errors.name && (
                    <span className="text-red-500 text-[12px] pl-1">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[12px] md:text-[14px] font-semibold text-[#475569] pl-1">
                    Номер телефона
                  </label>
                  <div
                    className={`${inputBaseClass} ${errors.phone ? inputErrorBorder : inputNormalBorder} focus-within:border-[#1978e5] focus-within:shadow-[0px_0px_0px_4px_rgba(25,120,229,0.1)]`}
                  >
                    <input
                      ref={phoneRef}
                      type="tel"
                      value={formatPhone(phoneDigits)}
                      onChange={handlePhoneChange}
                      onKeyDown={handlePhoneKeyDown}
                      placeholder="+7 (000) 000 00-00"
                      className="w-full bg-transparent border-none outline-none text-[14px] md:text-[16px] text-[#0f172a] placeholder:text-[#94a3b8] font-normal p-0"
                    />
                  </div>
                  {errors.phone && (
                    <span className="text-red-500 text-[12px] pl-1">
                      {errors.phone}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2 md:gap-3 pb-2 md:pb-4">
                  <label className="text-[12px] md:text-[14px] font-semibold text-[#475569] pl-1">
                    Тип проекта
                  </label>
                  <div className="flex gap-3 md:gap-4">

                    <div
                      className={`flex-1 relative rounded-[12px] cursor-pointer transition-all duration-200 ${
                        projectType === "web"
                          ? "bg-[#1978e5]/5 border-2 border-[#1978e5]"
                          : "bg-white border border-[#e2e8f0] hover:border-[#1978e5]/50"
                      }`}
                      onClick={() => setProjectType("web")}
                    >
                      {projectType === "web" && (
                        <div className="absolute top-2 right-2 flex items-center justify-center w-4 h-4 md:w-5 md:h-5">
                          <div className="bg-[#1978e5] rounded-full p-[2px]">
                            <Check size={10} className="text-white md:w-3 md:h-3" strokeWidth={3} />
                          </div>
                        </div>
                      )}
                      <div className="flex flex-col items-center p-3 md:p-[18px] gap-1 md:gap-2">
                        <Monitor
                          size={20}
                          className={`md:w-6 md:h-6 ${projectType === "web" ? "text-[#1978e5]" : "text-[#94a3b8]"}`}
                        />
                        <div className="text-center">
                          <div className="text-[#0f172a] text-[12px] md:text-[14px] font-semibold mb-0.5 md:mb-1">
                            Сайт под ключ
                          </div>
                          <div className="text-[10px] text-[#94a3b8] uppercase tracking-[0.08em] leading-tight font-semibold">
                            Полный цикл разработки
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`flex-1 relative rounded-[12px] cursor-pointer transition-all duration-200 ${
                        projectType === "design"
                          ? "bg-[#1978e5]/5 border-2 border-[#1978e5]"
                          : "bg-white border border-[#e2e8f0] hover:border-[#1978e5]/50"
                      }`}
                      onClick={() => setProjectType("design")}
                    >
                      {projectType === "design" && (
                        <div className="absolute top-2 right-2 flex items-center justify-center w-4 h-4 md:w-5 md:h-5">
                          <div className="bg-[#1978e5] rounded-full p-[2px]">
                            <Check size={10} className="text-white md:w-3 md:h-3" strokeWidth={3} />
                          </div>
                        </div>
                      )}
                      <div className="flex flex-col items-center p-3 md:p-[18px] gap-1 md:gap-2">
                        <Palette
                          size={20}
                          className={`md:w-6 md:h-6 ${projectType === "design" ? "text-[#1978e5]" : "text-[#94a3b8]"}`}
                        />
                        <div className="text-center">
                          <div className="text-[#0f172a] text-[12px] md:text-[14px] font-semibold mb-0.5 md:mb-1">
                            Дизайн
                          </div>
                          <div className="text-[10px] text-[#94a3b8] uppercase tracking-[0.08em] leading-tight font-semibold">
                            Визуальная составляющая
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || submitStatus === "success"}
                  className={`w-full font-semibold text-[14px] md:text-[16px] py-3 md:py-4 rounded-[12px] transition-all active:scale-[0.98] flex items-center justify-center gap-2 ${
                    submitStatus === "success"
                      ? "bg-green-500 text-white"
                      : submitStatus === "error"
                        ? "bg-red-500 text-white hover:bg-red-600"
                        : "bg-[#1978e5] text-white shadow-[0px_10px_15px_-3px_rgba(25,120,229,0.2),0px_4px_6px_-4px_rgba(25,120,229,0.2)] hover:bg-[#1567c5]"
                  } disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Отправка...
                    </>
                  ) : submitStatus === "success" ? (
                    <>
                      <Check size={18} />
                      Заявка отправлена!
                    </>
                  ) : submitStatus === "error" ? (
                    "Ошибка, попробуйте ещё раз"
                  ) : (
                    "Отправить"
                  )}
                </button>

              </div>

              <a
                href="https://t.me/m/nVzECBlaMmZi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 group cursor-pointer no-underline"
              >
                <span className="text-[#1978e5] text-[12px] md:text-[14px] font-semibold group-hover:underline text-center">
                  Или напишите нам в Телеграм
                </span>
                <ArrowRight size={14} className="text-[#1978e5] group-hover:translate-x-1 transition-transform md:w-4 md:h-4" />
              </a>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
