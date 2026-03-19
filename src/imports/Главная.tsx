import imgImage2 from "figma:asset/584e3499640e764486b7388c27ee1d4176ef81b6.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[0px] text-[90px] tracking-[-3.84px] w-[675px] whitespace-pre-wrap">
        <p className="leading-[96px] mb-0">Сайты под ключ для</p>
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[96px] mb-0 text-[#2f5aff] underline">амбициозных</p>
        <p>
          <span className="leading-[96px]">б</span>
          <span className="leading-[96px]">рендов</span>
        </p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-[652px]" data-name="Container">
      <Heading />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[20px] w-full">
        <p className="leading-[32.5px] whitespace-pre-wrap">Мы сочетаем структурный подход с высококачественным дизайном пользовательского интерфейса для запуска цифровых проектов, которые действительно приводят к конверсиям. Быстрая разработка, нулевой компромисс в качестве.</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#2f5aff] content-stretch flex flex-col items-center justify-center px-[32px] py-[16px] relative rounded-[24px] shrink-0 w-[335px]" data-name="Button">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[166.91px]">
        <p className="leading-[24px] whitespace-pre-wrap">Обсудить сайт</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[34px] py-[18px] relative rounded-[24px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] text-center w-[267px]">
        <p className="leading-[24px] whitespace-pre-wrap">Посмотреть избранные работы</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start pt-[16px] relative shrink-0 w-[452px]" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[48px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1200px] pb-[64px] pt-[160px] px-[24px] relative shrink-0 w-[1200px]" data-name="Section">
      <Container />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[20px] text-[#2f5aff] text-[20px]">
        <p className="leading-[20px] whitespace-pre-wrap">schedule</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[14px] tracking-[-0.35px] w-[222px]">
        <p className="leading-[20px] whitespace-pre-wrap">От идеи до результат 3-14 дней</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[20px] text-[#2f5aff] text-[20px]">
        <p className="leading-[20px] whitespace-pre-wrap">chat_bubble</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[14px] tracking-[-0.35px] w-[312px]">
        <p className="leading-[20px] whitespace-pre-wrap">Плотная коммуникация в течении разработки</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[20px] text-[#2f5aff] text-[20px]">
        <p className="leading-[20px] whitespace-pre-wrap">api</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[14px] tracking-[-0.35px] w-[261px]">
        <p className="leading-[20px] whitespace-pre-wrap">Интеграция любых внешних сервисов</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[0.04px] relative w-full">
          <Container6 />
          <div className="bg-[#e2e8f0] h-[16px] shrink-0 w-px" data-name="Vertical Divider" />
          <Container9 />
          <div className="bg-[#e2e8f0] h-[16px] shrink-0 w-px" data-name="Vertical Divider" />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f5f7fb] relative shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[64px] py-[40px] relative w-full">
        <Container5 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[72px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[72px] tracking-[-2.88px] w-[689px]">
        <p className="leading-[72px] whitespace-pre-wrap">Избранные кейсы</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[18px] w-[638px]">
        <p className="leading-[28px] whitespace-pre-wrap">Сайты «под ключ» и комплексные системы дизайна</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Heading1 />
      <Container17 />
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#2f5aff] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[18px] relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center tracking-[2.4px] uppercase w-[81.27px]">
          <p className="leading-[16px] whitespace-pre-wrap">Сайты</p>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[16px] relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-center tracking-[2.4px] uppercase w-[111.11px]">
          <p className="leading-[16px] whitespace-pre-wrap">Дизайн</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex gap-[31.99px] items-center pb-px relative shrink-0" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <HorizontalBorder />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f5f7fb] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[16px] shrink-0 w-[645.33px]" data-name="Background">
      <div className="h-[403px] relative shrink-0 w-[643px]" data-name="image 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[147.39%] left-[-0.12%] max-w-none top-[-15.38%] w-[100.25%]" src={imgImage2} />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[34px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10.4px] tracking-[1.04px] uppercase w-[198px]">
        <p className="leading-[15.6px] whitespace-pre-wrap">ресторанный бизнес</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[65.61px]" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[96px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[48px] tracking-[-1.92px] w-[443px]">
        <p className="leading-[48px] whitespace-pre-wrap">Сайт для ресторана FORUM</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 max-w-[448px] right-0 top-[185.61px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[84px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[18px] w-[428.87px]">
        <p className="leading-[28px] whitespace-pre-wrap">Создание сайта ресторана в Сколково с нуля — от структуры и UI до конверсионной страницы бронирования.</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex items-start left-0 pb-[6px] top-[301.11px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#0f172a] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] tracking-[1.2px] w-[148px]">
        <p className="leading-[16px] whitespace-pre-wrap">ПЕРЕЙТИ НА САЙТ</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[323.61px] relative shrink-0 w-[442.66px]" data-name="Container">
      <div className="absolute bg-[#2f5aff] h-[2px] left-0 right-0 top-0" data-name="Horizontal Divider" />
      <Container20 />
      <Heading2 />
      <Container21 />
      <Link />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[64px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Background1 />
      <Container19 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f5f7fb] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="h-[319px] relative shrink-0 w-full" data-name="image 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[157.14%] left-0 max-w-none top-[-21.67%] w-full" src={imgImage2} />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10.4px] tracking-[1.04px] uppercase w-[172px]">
        <p className="leading-[15.6px] whitespace-pre-wrap">Сайт для ресторана</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[30px] tracking-[-1.2px] w-[422px]">
        <p className="leading-[36px] whitespace-pre-wrap">Сайт для ресторана FORUM</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Container26 />
      <Heading3 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container25 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Background2 />
      <Container24 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f5f7fb] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="h-[319px] relative shrink-0 w-[544px]" data-name="image 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[157.14%] left-0 max-w-none top-[-21.67%] w-full" src={imgImage2} />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10.4px] tracking-[1.04px] uppercase w-[167px]">
        <p className="leading-[15.6px] whitespace-pre-wrap">Сайт для ресторана</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[30px] tracking-[-1.2px] w-[422px]">
        <p className="leading-[36px] whitespace-pre-wrap">Сайт для ресторана FORUM</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Container30 />
      <Heading4 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container29 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Background3 />
      <Container28 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[64px] items-start justify-center pt-[32px] relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Container27 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2f5aff] text-[14px] tracking-[2.1px] uppercase w-[169px]">
        <p className="decoration-solid leading-[20px] underline whitespace-pre-wrap">ко всем кейсам</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[20px] text-[#2f5aff] text-[20px]">
        <p className="leading-[20px] whitespace-pre-wrap">arrow_forward</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[1200px] px-[24px] py-[96px] relative shrink-0 w-[1200px]" data-name="Section">
      <Container15 />
      <Container18 />
      <Container22 />
      <Container31 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-baseline justify-between leading-[0] not-italic relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[40px] justify-center relative shrink-0 text-[#0f172a] text-[36px] tracking-[-1.44px] w-[202.05px]">
        <p className="leading-[40px] whitespace-pre-wrap">Процесс</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center relative shrink-0 text-[#94a3b8] text-[10.4px] tracking-[1.04px] uppercase w-[187.03px]">
        <p className="leading-[15.6px] whitespace-pre-wrap">Процесс Шаг за шагом</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-[223px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] w-[76px]">
          <p className="leading-[28px] whitespace-pre-wrap">Бриф</p>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-[223px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal h-[158px] justify-center leading-[22.75px] not-italic relative shrink-0 text-[#64748b] text-[14px] w-full whitespace-pre-wrap">
          <p className="mb-0">{`Мы проводим 15-минутную синхронизацию, чтобы определить `}</p>
          <p className="mb-0">{`цели, целевую аудиторию и основные `}</p>
          <p>характеристики вашего проекта.</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[14.75px] items-start pl-[32px] pr-[33px] py-[32px] relative w-full">
        <Heading5 />
        <Container34 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0 w-[223px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] w-[122px]">
          <p className="leading-[28px] whitespace-pre-wrap">Структура</p>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-[223px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal h-[152px] justify-center leading-[22.75px] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[219px] whitespace-pre-wrap">
          <p className="mb-0">{`Архитектура информации и `}</p>
          <p className="mb-0">{`высококачественные прототипы интерфейса с упором на `}</p>
          <p>пользовательский опыт и конверсию.</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[14.75px] items-start pl-[32px] pr-[33px] py-[32px] relative w-full">
        <Heading6 />
        <Container35 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="relative shrink-0 w-[223px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] w-[93.06px]">
          <p className="leading-[28px] whitespace-pre-wrap">Дизайн</p>
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 w-[223px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[160px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[206px]">
          <p className="leading-[22.75px] whitespace-pre-wrap">Применение высококачественного визуального языка, оригинальной типографики и уникальной фирменной идентичности.</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[14.75px] items-start pl-[32px] pr-[33px] py-[32px] relative w-full">
        <Heading7 />
        <Container36 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] w-full">
        <p className="leading-[28px] whitespace-pre-wrap">Разработка и запуск</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#64748b] text-[14px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Разработка чистого кода и `}</p>
        <p className="mb-0">{`SEO-оптимизация для безупречного `}</p>
        <p>запуска в производство.</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[14.75px] items-start p-[32px] relative w-full">
        <Heading8 />
        <Container38 />
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex items-start justify-center pt-px relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <VerticalBorder />
      <VerticalBorder1 />
      <VerticalBorder2 />
      <Container37 />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[1200px] pb-[192px] pt-[96px] px-[24px] relative shrink-0 w-[1200px]" data-name="Section">
      <Paragraph />
      <HorizontalBorder1 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[672px] relative shrink-0 w-[672px]" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[120px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[60px] text-center tracking-[-2.4px] w-[648.27px]">
        <p className="leading-[60px] whitespace-pre-wrap">Обсудим ваш сайт за 10-15 минут</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#2f5aff] content-stretch flex flex-col items-center justify-center overflow-clip px-[48px] py-[20px] relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(47,90,255,0.3)] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white w-[187.77px]">
        <p className="leading-[28px] whitespace-pre-wrap">Обсудить сайт</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[15.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Button4 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10.4px] text-center tracking-[1.04px] w-[460px]">
        <p className="leading-[15.6px] whitespace-pre-wrap">НИКАКИХ ОБЯЗАТЕЛЬСТВ — ЛИШЬ НЕБОЛЬШОЙ БРИФ</p>
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-[#f5f7fb] content-stretch flex flex-col gap-[32px] items-center overflow-clip p-[96px] relative rounded-[40px] shrink-0 w-[1152px]" data-name="Section">
      <Heading9 />
      <Container39 />
      <div className="absolute bg-[#2f5aff] h-[4px] left-0 right-0 top-0" data-name="Background" />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[36px] tracking-[-1.44px] w-[328.84px]">
        <p className="leading-[40px] whitespace-pre-wrap">Частые вопросы</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-[550px]">
        <p className="leading-[28px] whitespace-pre-wrap">Сколько времени обычно занимает выполнение проекта?</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Material_Icons:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-[#2f5aff] text-[24px]">
        <p className="leading-[24px] whitespace-pre-wrap">expand_more</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative shrink-0 w-[718px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container42 />
        <Container43 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0 w-[718px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.625px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[46px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[693.44px]">
          <p className="leading-[22.75px] whitespace-pre-wrap">Создание сайтов «под ключ» обычно занимает от 3 до 10 рабочих дней, в зависимости от сложности и готовности контента.</p>
        </div>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[14.875px] items-start p-[25px] relative w-full">
        <Button5 />
        <Container44 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-[396px]">
        <p className="leading-[28px] whitespace-pre-wrap">Какова ваша модель ценообразования?</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Material_Icons:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-[#2f5aff] text-[24px]">
        <p className="leading-[24px] whitespace-pre-wrap">expand_more</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative shrink-0 w-[718px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container45 />
        <Container46 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 w-[718px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.625px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[46px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[667.23px]">
          <p className="leading-[22.75px] whitespace-pre-wrap">Мы работаем с пакетами услуг по фиксированной цене для проектов «под ключ» и почасовой оплатой для разработки пользовательских интерфейсов. Это гарантирует отсутствие неожиданностей в бюджете.</p>
        </div>
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[14.875px] items-start p-[25px] relative w-full">
        <Button6 />
        <Container47 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-[442px]">
        <p className="leading-[28px] whitespace-pre-wrap">Какой технологический стек вы используете?</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Material_Icons:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-[#2f5aff] text-[24px]">
        <p className="leading-[24px] whitespace-pre-wrap">expand_more</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative shrink-0 w-[718px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container48 />
        <Container49 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 w-[718px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.625px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[46px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[695.89px]">
          <p className="leading-[22.75px] whitespace-pre-wrap">Для сайтов с большим объемом контента мы в основном используем современные веб-фреймворки, такие как Next.js, Tailwind CSS, Framer или Webflow, обеспечивая максимальную скорость.</p>
        </div>
      </div>
    </div>
  );
}

function Border2() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[14.875px] items-start p-[25px] relative w-full">
        <Button7 />
        <Container50 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-[669px]">
        <p className="leading-[28px] whitespace-pre-wrap">Вы предоставляете услуги по текущему техническому обслуживанию?</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Material_Icons:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-[#2f5aff] text-[24px]">
        <p className="leading-[24px] whitespace-pre-wrap">expand_more</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative shrink-0 w-[718px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container51 />
        <Container52 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 w-[718px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.625px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[46px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[711.55px]">
          <p className="leading-[22.75px] whitespace-pre-wrap">Да, мы предлагаем абонентское обслуживание, чтобы ваш сайт оставался актуальным, безопасным и работал на пике своих возможностей еще долго после запуска.</p>
        </div>
      </div>
    </div>
  );
}

function Border3() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[14.875px] items-start p-[25px] relative w-full">
        <Button8 />
        <Container53 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[768px] relative shrink-0 w-[768px]" data-name="Container">
      <Border />
      <Border1 />
      <Border2 />
      <Border3 />
    </div>
  );
}

function Section4() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center max-w-[1200px] pb-[96px] pt-[192px] px-[24px] relative shrink-0 w-[1200px]" data-name="Section">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2f5aff] text-[10.4px] tracking-[1.04px] w-full">
        <p className="leading-[15.6px] whitespace-pre-wrap">СВЯЗАТЬСЯ С НАМИ</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[30px] w-full">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[36px] underline whitespace-pre-wrap">hello@amak.studio</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] w-[76px]">
        <p className="leading-[24px] whitespace-pre-wrap">Telegram</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[36px]" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] w-[65px]">
        <p className="leading-[24px] whitespace-pre-wrap">VK</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex gap-[24px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Link2 />
      <Link3 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Link1 />
      <Container57 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading10 />
      <Container56 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10.4px] tracking-[1.04px] uppercase w-full">
        <p className="leading-[15.6px] whitespace-pre-wrap">О СТУДИИ</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[18px] w-full">
        <p className="leading-[29.25px] whitespace-pre-wrap">AMAK SITES - это студия дизайна премиум-класса в минималистичном стиле, ориентированная на скорость и структуру. Мы помогаем амбициозным основателям и брендам запускать высококачественные веб-сайты без типичной бюрократии агентств.</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading11 />
      <Container59 />
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[64px] items-start justify-center relative w-full">
        <Container55 />
        <Container58 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] tracking-[-0.8px] w-[205px]">
          <p className="leading-[24px] whitespace-pre-wrap">AMAK SITES © 2026</p>
        </div>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Ubuntu_Sans_Mono:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] w-[244.84px]">
        <p className="leading-[16px] whitespace-pre-wrap">МОСКВА / РАБОТАЕМ ПО ВСЕМУ МИРУ</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Ubuntu_Sans_Mono:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] w-[136.83px]">
        <p className="leading-[16px] whitespace-pre-wrap">ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-start relative">
        <Container62 />
        <Container63 />
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f8fafc] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[49px] relative w-full">
        <Container60 />
        <Container61 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[96px] items-start max-w-[inherit] pb-[96px] pt-[97px] px-[24px] relative w-full">
        <Container54 />
        <HorizontalBorder2 />
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[80px] relative shrink-0 w-full" data-name="Main">
      <Section />
      <Background />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] tracking-[-1px] w-[143px]">
        <p className="leading-[28px] whitespace-pre-wrap">AMAK SITES</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[47px]">
        <p className="leading-[20px] whitespace-pre-wrap">Кейсы</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[68px]">
        <p className="leading-[20px] whitespace-pre-wrap">Процесс</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[72px]">
        <p className="leading-[20px] whitespace-pre-wrap">Контакты</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[27.16px]">
        <p className="leading-[20px] whitespace-pre-wrap">FAQ</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <Link5 />
      <Link6 />
      <Link7 />
      <Link8 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Container">
      <Link4 />
      <Container65 />
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#2f5aff] content-stretch flex flex-col items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(47,90,255,0.2),0px_4px_6px_-4px_rgba(47,90,255,0.2)] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[144.27px]">
        <p className="leading-[20px] whitespace-pre-wrap">Обсудить сайт</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10.4px] tracking-[1.04px] uppercase w-[110px]">
        <p className="leading-[15.6px] whitespace-pre-wrap">10–15 МИН бриф</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <Button9 />
      <Margin />
    </div>
  );
}

function Nav() {
  return (
    <div className="h-[80px] max-w-[1200px] relative shrink-0 w-full" data-name="Nav">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[24px] relative size-full">
          <Container64 />
          <Container66 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col items-start left-0 pb-px px-[40px] top-0 w-[1280px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Nav />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-[2.98px] relative size-full" data-name="главная">
      <Main />
      <Header />
    </div>
  );
}