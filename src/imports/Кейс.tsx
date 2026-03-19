import imgImage1 from "figma:asset/584e3499640e764486b7388c27ee1d4176ef81b6.png";

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[14.02px]">
        <p className="leading-[20px] whitespace-pre-wrap">arrow_back</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Link">
      <Container1 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[162px]">
        <p className="leading-[20px] whitespace-pre-wrap">Вернутся на главную</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[14.02px]">
        <p className="leading-[20px] whitespace-pre-wrap">arrow_back</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Link">
      <Container2 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[247px]">
        <p className="leading-[20px] whitespace-pre-wrap">Перейти ко всем дизайн кейсам</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Container4() {
  return <div className="h-[16px] shrink-0 w-full" data-name="Container" />;
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[48px] tracking-[-1.92px] w-full">
          <p className="leading-[45.6px] whitespace-pre-wrap">Ресторан FORUM</p>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.75px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[20px] w-full">
          <p className="leading-[27.5px] whitespace-pre-wrap">Концепт дизайна для ресторана в сколково</p>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[86px]">
          <p className="leading-[20px] whitespace-pre-wrap">Платформа</p>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[129px]">
          <p className="leading-[20px] whitespace-pre-wrap">Веб-приложение</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[17px] pt-[16px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[63px]">
          <p className="leading-[20px] whitespace-pre-wrap">Экраны</p>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[82px]">
          <p className="leading-[20px] whitespace-pre-wrap">12 Экранов</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[17px] pt-[16px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container12() {
  return <div className="h-[20px] shrink-0 w-full" data-name="Container" />;
}

function Container13() {
  return <div className="h-[23px] shrink-0 w-full" data-name="Container" />;
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[32.7px] pt-[24.7px] relative w-full">
        <HorizontalBorder1 />
        <HorizontalBorder2 />
        <Container11 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#2f5aff] relative rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(47,90,255,0.2),0px_8px_10px_-6px_rgba(47,90,255,0.2)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[32px] py-[20px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[215px]">
            <p className="leading-[24px] whitespace-pre-wrap">Создать похожий проект</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex flex-col gap-[15.3px] items-start pt-[34px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#2f5aff] border-solid border-t-2 inset-0 pointer-events-none" />
      <Container4 />
      <Heading />
      <Container5 />
      <Container6 />
      <Button />
    </div>
  );
}

function Aside() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[320px]" data-name="Aside">
      <HorizontalBorder />
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex gap-[6px] h-[40px] items-center left-px pb-px px-[16px] right-px top-px" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[rgba(248,113,113,0.2)] relative rounded-[9999px] shrink-0 size-[10px]" data-name="Overlay+Border">
        <div aria-hidden="true" className="absolute border border-[rgba(248,113,113,0.4)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
      <div className="bg-[rgba(251,191,36,0.2)] relative rounded-[9999px] shrink-0 size-[10px]" data-name="Overlay+Border">
        <div aria-hidden="true" className="absolute border border-[rgba(251,191,36,0.4)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
      <div className="bg-[rgba(74,222,128,0.2)] relative rounded-[9999px] shrink-0 size-[10px]" data-name="Overlay+Border">
        <div aria-hidden="true" className="absolute border border-[rgba(74,222,128,0.4)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col h-[734px] items-start left-px right-px top-[41px]" data-name="Container">
      <div className="h-[677px] relative shrink-0 w-[734px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="absolute bg-gradient-to-t bottom-[174px] from-white h-[128px] left-0 right-0 to-[rgba(255,255,255,0)]" data-name="Gradient" />
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white h-[602px] relative rounded-[16px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <BackgroundHorizontalBorder />
        <Container15 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_50px_100px_-20px_rgba(0,0,0,0.12),0px_30px_60px_-30px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative">
        <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[20px] text-[#0f172a] text-[20px] text-center">
          <p className="leading-[20px] whitespace-pre-wrap">chevron_left</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container17 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Container">
      <div className="bg-[#2f5aff] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <div className="bg-[#e2e8f0] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <div className="bg-[#e2e8f0] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <div className="bg-[#e2e8f0] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <div className="bg-[#e2e8f0] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <div className="bg-[#e2e8f0] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative">
        <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[20px] text-[#0f172a] text-[20px] text-center">
          <p className="leading-[20px] whitespace-pre-wrap">chevron_right</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container19 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Container18 />
      <Button2 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[736px]" data-name="Container">
      <BackgroundBorderShadow />
      <Container16 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[96px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Aside />
      <Container14 />
    </div>
  );
}

function Section() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[inherit] pb-[128px] pt-[48px] px-[24px] relative w-full">
        <Container />
        <Container3 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2f5aff] text-[10.4px] tracking-[1.04px] w-full">
        <p className="leading-[15.6px] whitespace-pre-wrap">СВЯЗАТЬСЯ С НАМИ</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[30px] w-full">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[36px] underline whitespace-pre-wrap">hello@amak.studio</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] w-[76px]">
        <p className="leading-[24px] whitespace-pre-wrap">Telegram</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[36px]" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] w-[65px]">
        <p className="leading-[24px] whitespace-pre-wrap">VK</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[24px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Link3 />
      <Link4 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Link2 />
      <Container23 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading1 />
      <Container22 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10.4px] tracking-[1.04px] uppercase w-full">
        <p className="leading-[15.6px] whitespace-pre-wrap">О СТУДИИ</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[18px] w-full">
        <p className="leading-[29.25px] whitespace-pre-wrap">AMAK SITES - это студия дизайна премиум-класса в минималистичном стиле, ориентированная на скорость и структуру. Мы помогаем амбициозным основателям и брендам запускать высококачественные веб-сайты без типичной бюрократии агентств.</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading2 />
      <Container25 />
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[64px] items-start justify-center relative w-full">
        <Container21 />
        <Container24 />
      </div>
    </div>
  );
}

function Container26() {
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

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Ubuntu_Sans_Mono:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] w-[244.84px]">
        <p className="leading-[16px] whitespace-pre-wrap">МОСКВА / РАБОТАЕМ ПО ВСЕМУ МИРУ</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Ubuntu_Sans_Mono:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] w-[136.83px]">
        <p className="leading-[16px] whitespace-pre-wrap">ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-start relative">
        <Container28 />
        <Container29 />
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f8fafc] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[49px] relative w-full">
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[96px] items-start max-w-[inherit] pb-[96px] pt-[97px] px-[24px] relative w-full">
        <Container20 />
        <HorizontalBorder3 />
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main">
      <div className="content-stretch flex flex-col items-start pt-[80px] px-[40px] relative w-full">
        <Section />
        <Footer />
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] tracking-[-1px] w-[143px]">
        <p className="leading-[28px] whitespace-pre-wrap">AMAK SITES</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[47px]">
        <p className="leading-[20px] whitespace-pre-wrap">Кейсы</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[68px]">
        <p className="leading-[20px] whitespace-pre-wrap">Процесс</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[72px]">
        <p className="leading-[20px] whitespace-pre-wrap">Контакты</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[27.16px]">
        <p className="leading-[20px] whitespace-pre-wrap">FAQ</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <Link6 />
      <Link7 />
      <Link8 />
      <Link9 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Container">
      <Link5 />
      <Container31 />
    </div>
  );
}

function Button3() {
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

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <Button3 />
      <Margin />
    </div>
  );
}

function Nav() {
  return (
    <div className="h-[80px] max-w-[1200px] relative shrink-0 w-full" data-name="Nav">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[24px] relative size-full">
          <Container30 />
          <Container32 />
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
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="кейс">
      <Main />
      <Header />
    </div>
  );
}