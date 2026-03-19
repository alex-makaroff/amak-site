import svgPaths from "./svg-xnpyx189l4";
import imgProjectPreview from "figma:asset/568b5c831ec8429d4ec387244fced5a46858f523.png";
import imgImage2 from "figma:asset/584e3499640e764486b7388c27ee1d4176ef81b6.png";

function Container() {
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
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Link">
      <Container />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[162px]">
        <p className="leading-[20px] whitespace-pre-wrap">Вернутся на главную</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center self-stretch">
        <Link1 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[96px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[96px] text-center tracking-[-3.84px] w-[364px]">
        <p className="leading-[96px] whitespace-pre-wrap">Кейсы</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col h-[89px] items-center max-w-[672px] pb-[24px] relative shrink-0 w-[672px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[20px] text-center w-[561.02px]">
        <p className="leading-[28px] whitespace-pre-wrap">Концепты сайтов и дизайна, разработанные с учетом принципа «структура прежде всего»</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[32px] py-[10px] relative rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2f5aff] text-[14px] text-center w-[63.81px]">
        <p className="leading-[20px] whitespace-pre-wrap">Сайты</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[32px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center w-[83.42px]">
        <p className="leading-[20px] whitespace-pre-wrap">Дизайн</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex items-center p-[6px] relative rounded-[9999px] shrink-0" data-name="Background">
      <Button />
      <Button1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container2 />
      <Background />
    </div>
  );
}

function Section() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] px-[24px] relative w-full">
        <Link />
        <Container1 />
      </div>
    </div>
  );
}

function ProjectPreview() {
  return (
    <div className="h-[270.48px] overflow-clip relative shrink-0 w-full" data-name="Project Preview">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[133.34%] left-0 max-w-none top-[-16.67%] w-full" src={imgProjectPreview} />
      </div>
      <div className="absolute h-[270px] left-0 top-0 w-[361px]" data-name="image 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[147.39%] left-[-9.84%] max-w-none top-[-15.38%] w-[119.42%]" src={imgImage2} />
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="aspect-[4/3] bg-[#f8fafc] relative shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] w-full">
        <ProjectPreview />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] w-full">
        <p className="leading-[28px] whitespace-pre-wrap">Ресторан FORUM</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[4.11px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#2f5aff] text-[10.4px] tracking-[1.04px] uppercase w-[159px]">
        <p className="leading-[15.6px] whitespace-pre-wrap">Ресторанный бизнес</p>
      </div>
      <Heading2 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Сайт “под ключ” за 5 дней</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="Margin">
      <Container6 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#0f172a] relative rounded-[16px] shrink-0 w-[133px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[20px] py-[10px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1.2px] uppercase w-[124px]">
          <p className="leading-[16px] whitespace-pre-wrap">смотреть кейс</p>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Container">
          <path d={svgPaths.p1bf28a40} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-right tracking-[1.2px] uppercase w-[135px]">
          <p className="decoration-solid leading-[16px] underline whitespace-pre-wrap">Перейти на сайт</p>
        </div>
        <Container7 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[25px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f8fafc] border-solid border-t inset-0 pointer-events-none" />
      <Button2 />
      <Link2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-[360.66px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between p-[32px] relative w-full">
        <Margin />
        <Margin1 />
        <HorizontalBorder />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="absolute bg-white left-0 right-[789.34px] rounded-[32px] top-0" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Background1 />
        <Container4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function ProjectPreview1() {
  return (
    <div className="h-[270.48px] overflow-clip relative shrink-0 w-full" data-name="Project Preview">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[133.34%] left-0 max-w-none top-[-16.67%] w-full" src={imgProjectPreview} />
      </div>
      <div className="absolute h-[270px] left-0 top-0 w-[361px]" data-name="image 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[147.39%] left-[-9.84%] max-w-none top-[-15.38%] w-[119.42%]" src={imgImage2} />
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="aspect-[4/3] bg-[#f8fafc] relative shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] w-full">
        <ProjectPreview1 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] w-full">
        <p className="leading-[28px] whitespace-pre-wrap">Ресторан FORUM</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[4.11px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#2f5aff] text-[10.4px] tracking-[1.04px] uppercase w-[159px]">
        <p className="leading-[15.6px] whitespace-pre-wrap">Ресторанный бизнес</p>
      </div>
      <Heading3 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Сайт “под ключ” за 5 дней</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="Margin">
      <Container10 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#0f172a] relative rounded-[16px] shrink-0 w-[133px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[20px] py-[10px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1.2px] uppercase w-[124px]">
          <p className="leading-[16px] whitespace-pre-wrap">смотреть кейс</p>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Container">
          <path d={svgPaths.p1bf28a40} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-right tracking-[1.2px] uppercase w-[135px]">
          <p className="decoration-solid leading-[16px] underline whitespace-pre-wrap">Перейти на сайт</p>
        </div>
        <Container11 />
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[25px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f8fafc] border-solid border-t inset-0 pointer-events-none" />
      <Button3 />
      <Link3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-[360.66px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between p-[32px] relative w-full">
        <Margin2 />
        <Margin3 />
        <HorizontalBorder1 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="absolute bg-white left-[790.33px] rounded-[32px] top-px w-[362.66px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Background2 />
        <Container8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function ProjectPreview2() {
  return (
    <div className="h-[270.48px] overflow-clip relative shrink-0 w-full" data-name="Project Preview">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[133.34%] left-0 max-w-none top-[-16.67%] w-full" src={imgProjectPreview} />
      </div>
      <div className="absolute h-[270px] left-0 top-0 w-[361px]" data-name="image 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[147.39%] left-[-9.84%] max-w-none top-[-15.38%] w-[119.42%]" src={imgImage2} />
        </div>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="aspect-[4/3] bg-[#f8fafc] relative shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] w-full">
        <ProjectPreview2 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] w-full">
        <p className="leading-[28px] whitespace-pre-wrap">Ресторан FORUM</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[4.11px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#2f5aff] text-[10.4px] tracking-[1.04px] uppercase w-[159px]">
        <p className="leading-[15.6px] whitespace-pre-wrap">Ресторанный бизнес</p>
      </div>
      <Heading4 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Сайт “под ключ” за 5 дней</p>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="Margin">
      <Container14 />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#0f172a] relative rounded-[16px] shrink-0 w-[133px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[20px] py-[10px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1.2px] uppercase w-[124px]">
          <p className="leading-[16px] whitespace-pre-wrap">смотреть кейс</p>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Container">
          <path d={svgPaths.p1bf28a40} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-right tracking-[1.2px] uppercase w-[135px]">
          <p className="decoration-solid leading-[16px] underline whitespace-pre-wrap">Перейти на сайт</p>
        </div>
        <Container15 />
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[25px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f8fafc] border-solid border-t inset-0 pointer-events-none" />
      <Button4 />
      <Link4 />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-[360.66px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between p-[32px] relative w-full">
        <Margin4 />
        <Margin5 />
        <HorizontalBorder2 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="absolute bg-white left-[393px] rounded-[32px] top-[538px] w-[362.66px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Background3 />
        <Container12 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function ProjectPreview3() {
  return (
    <div className="h-[270.48px] overflow-clip relative shrink-0 w-full" data-name="Project Preview">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[133.34%] left-0 max-w-none top-[-16.67%] w-full" src={imgProjectPreview} />
      </div>
      <div className="absolute h-[270px] left-0 top-0 w-[361px]" data-name="image 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[147.39%] left-[-9.84%] max-w-none top-[-15.38%] w-[119.42%]" src={imgImage2} />
        </div>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="aspect-[4/3] bg-[#f8fafc] relative shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] w-full">
        <ProjectPreview3 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] w-full">
        <p className="leading-[28px] whitespace-pre-wrap">Ресторан FORUM</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[4.11px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#2f5aff] text-[10.4px] tracking-[1.04px] uppercase w-[159px]">
        <p className="leading-[15.6px] whitespace-pre-wrap">Ресторанный бизнес</p>
      </div>
      <Heading5 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container17 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Сайт “под ключ” за 5 дней</p>
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="Margin">
      <Container18 />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#0f172a] relative rounded-[16px] shrink-0 w-[133px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[20px] py-[10px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1.2px] uppercase w-[124px]">
          <p className="leading-[16px] whitespace-pre-wrap">смотреть кейс</p>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Container">
          <path d={svgPaths.p1bf28a40} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-right tracking-[1.2px] uppercase w-[135px]">
          <p className="decoration-solid leading-[16px] underline whitespace-pre-wrap">Перейти на сайт</p>
        </div>
        <Container19 />
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[25px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f8fafc] border-solid border-t inset-0 pointer-events-none" />
      <Button5 />
      <Link5 />
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-[360.66px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between p-[32px] relative w-full">
        <Margin6 />
        <Margin7 />
        <HorizontalBorder3 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow3() {
  return (
    <div className="absolute bg-white left-[789px] rounded-[32px] top-[539px] w-[362.66px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Background4 />
        <Container16 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function ProjectPreview4() {
  return (
    <div className="h-[270.48px] overflow-clip relative shrink-0 w-full" data-name="Project Preview">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[133.34%] left-0 max-w-none top-[-16.67%] w-full" src={imgProjectPreview} />
      </div>
      <div className="absolute h-[270px] left-0 top-0 w-[361px]" data-name="image 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[147.39%] left-[-9.84%] max-w-none top-[-15.38%] w-[119.42%]" src={imgImage2} />
        </div>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="aspect-[4/3] bg-[#f8fafc] relative shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] w-full">
        <ProjectPreview4 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] w-full">
        <p className="leading-[28px] whitespace-pre-wrap">Ресторан FORUM</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[4.11px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#2f5aff] text-[10.4px] tracking-[1.04px] uppercase w-[159px]">
        <p className="leading-[15.6px] whitespace-pre-wrap">Ресторанный бизнес</p>
      </div>
      <Heading6 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container21 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Сайт “под ключ” за 5 дней</p>
      </div>
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="Margin">
      <Container22 />
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#0f172a] relative rounded-[16px] shrink-0 w-[133px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[20px] py-[10px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1.2px] uppercase w-[124px]">
          <p className="leading-[16px] whitespace-pre-wrap">смотреть кейс</p>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Container">
          <path d={svgPaths.p1bf28a40} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link6() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-right tracking-[1.2px] uppercase w-[135px]">
          <p className="decoration-solid leading-[16px] underline whitespace-pre-wrap">Перейти на сайт</p>
        </div>
        <Container23 />
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[25px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f8fafc] border-solid border-t inset-0 pointer-events-none" />
      <Button6 />
      <Link6 />
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-[360.66px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between p-[32px] relative w-full">
        <Margin8 />
        <Margin9 />
        <HorizontalBorder4 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow4() {
  return (
    <div className="absolute bg-white left-[393px] right-[396.34px] rounded-[32px] top-[-1px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Background5 />
        <Container20 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function ProjectPreview5() {
  return (
    <div className="h-[270.48px] overflow-clip relative shrink-0 w-full" data-name="Project Preview">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[133.34%] left-0 max-w-none top-[-16.67%] w-full" src={imgProjectPreview} />
      </div>
      <div className="absolute h-[270px] left-0 top-0 w-[361px]" data-name="image 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[147.39%] left-[-9.84%] max-w-none top-[-15.38%] w-[119.42%]" src={imgImage2} />
        </div>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="aspect-[4/3] bg-[#f8fafc] relative shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] w-full">
        <ProjectPreview5 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] w-full">
        <p className="leading-[28px] whitespace-pre-wrap">Ресторан FORUM</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[4.11px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#2f5aff] text-[10.4px] tracking-[1.04px] uppercase w-[159px]">
        <p className="leading-[15.6px] whitespace-pre-wrap">Ресторанный бизнес</p>
      </div>
      <Heading7 />
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container25 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Сайт “под ключ” за 5 дней</p>
      </div>
    </div>
  );
}

function Margin11() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="Margin">
      <Container26 />
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#0f172a] relative rounded-[16px] shrink-0 w-[133px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[20px] py-[10px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1.2px] uppercase w-[124px]">
          <p className="leading-[16px] whitespace-pre-wrap">смотреть кейс</p>
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Container">
          <path d={svgPaths.p1bf28a40} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link7() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-right tracking-[1.2px] uppercase w-[135px]">
          <p className="decoration-solid leading-[16px] underline whitespace-pre-wrap">Перейти на сайт</p>
        </div>
        <Container27 />
      </div>
    </div>
  );
}

function HorizontalBorder5() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[25px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f8fafc] border-solid border-t inset-0 pointer-events-none" />
      <Button7 />
      <Link7 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-[360.66px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between p-[32px] relative w-full">
        <Margin10 />
        <Margin11 />
        <HorizontalBorder5 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow5() {
  return (
    <div className="absolute bg-white left-[-4px] right-[793.34px] rounded-[32px] top-[536px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Background6 />
        <Container24 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[1042.22px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorderShadow />
      <BackgroundBorderShadow1 />
      <BackgroundBorderShadow2 />
      <BackgroundBorderShadow3 />
      <BackgroundBorderShadow4 />
      <BackgroundBorderShadow5 />
    </div>
  );
}

function Section1() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[24px] relative w-full">
        <Container3 />
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="h-[1622px] relative shrink-0 w-full" data-name="Main">
      <div className="content-stretch flex flex-col gap-[80px] items-start pb-[96px] pt-[128px] px-[40px] relative size-full">
        <Section />
        <Section1 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[672px] relative shrink-0 w-[672px]" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[120px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[60px] text-center tracking-[-2.4px] w-[648.27px]">
        <p className="leading-[60px] whitespace-pre-wrap">Обсудим ваш сайт за 10-15 минут</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#2f5aff] content-stretch flex flex-col items-center justify-center overflow-clip px-[48px] py-[20px] relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(47,90,255,0.3)] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white w-[187.77px]">
        <p className="leading-[28px] whitespace-pre-wrap">Обсудить сайт</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[15.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Button8 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10.4px] text-center tracking-[1.04px] w-[460px]">
        <p className="leading-[15.6px] whitespace-pre-wrap">НИКАКИХ ОБЯЗАТЕЛЬСТВ — ЛИШЬ НЕБОЛЬШОЙ БРИФ</p>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#f5f7fb] relative rounded-[40px] shrink-0 w-[1152px]" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-center overflow-clip p-[96px] relative rounded-[inherit] w-full">
        <Heading1 />
        <Container28 />
        <div className="absolute bg-[#2f5aff] h-[4px] left-0 right-0 top-0" data-name="Background" />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2f5aff] text-[10.4px] tracking-[1.04px] w-full">
        <p className="leading-[15.6px] whitespace-pre-wrap">СВЯЗАТЬСЯ С НАМИ</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[30px] w-full">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[36px] underline whitespace-pre-wrap">hello@amak.studio</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] w-[76px]">
        <p className="leading-[24px] whitespace-pre-wrap">Telegram</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[36px]" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] w-[65px]">
        <p className="leading-[24px] whitespace-pre-wrap">VK</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[24px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Link9 />
      <Link10 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Link8 />
      <Container32 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading8 />
      <Container31 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10.4px] tracking-[1.04px] uppercase w-full">
        <p className="leading-[15.6px] whitespace-pre-wrap">О СТУДИИ</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[18px] w-full">
        <p className="leading-[29.25px] whitespace-pre-wrap">AMAK SITES - это студия дизайна премиум-класса в минималистичном стиле, ориентированная на скорость и структуру. Мы помогаем амбициозным основателям и брендам запускать высококачественные веб-сайты без типичной бюрократии агентств.</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading9 />
      <Container34 />
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[64px] items-start justify-center relative w-full">
        <Container30 />
        <Container33 />
      </div>
    </div>
  );
}

function Container35() {
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

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Ubuntu_Sans_Mono:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] w-[244.84px]">
        <p className="leading-[16px] whitespace-pre-wrap">МОСКВА / РАБОТАЕМ ПО ВСЕМУ МИРУ</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Ubuntu_Sans_Mono:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] w-[136.83px]">
        <p className="leading-[16px] whitespace-pre-wrap">ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-start relative">
        <Container37 />
        <Container38 />
      </div>
    </div>
  );
}

function HorizontalBorder6() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f8fafc] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[49px] relative w-full">
        <Container35 />
        <Container36 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[96px] items-start max-w-[inherit] pb-[96px] pt-[97px] px-[24px] relative w-full">
        <Section2 />
        <Container29 />
        <HorizontalBorder6 />
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] tracking-[-1px] w-[143px]">
        <p className="leading-[28px] whitespace-pre-wrap">AMAK SITES</p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[47px]">
        <p className="leading-[20px] whitespace-pre-wrap">Кейсы</p>
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[68px]">
        <p className="leading-[20px] whitespace-pre-wrap">Процесс</p>
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[72px]">
        <p className="leading-[20px] whitespace-pre-wrap">Контакты</p>
      </div>
    </div>
  );
}

function Link15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[27.16px]">
        <p className="leading-[20px] whitespace-pre-wrap">FAQ</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <Link12 />
      <Link13 />
      <Link14 />
      <Link15 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Container">
      <Link11 />
      <Container40 />
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

function Margin12() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10.4px] tracking-[1.04px] uppercase w-[110px]">
        <p className="leading-[15.6px] whitespace-pre-wrap">10–15 МИН бриф</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <Button9 />
      <Margin12 />
    </div>
  );
}

function Nav() {
  return (
    <div className="h-[80px] max-w-[1200px] relative shrink-0 w-full" data-name="Nav">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[24px] relative size-full">
          <Container39 />
          <Container41 />
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
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="Все кейсы">
      <Main />
      <Footer />
      <Header />
    </div>
  );
}