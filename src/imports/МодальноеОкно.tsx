function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#0b0f17] text-[24px] tracking-[-0.6px] w-[257px]">
        <p className="leading-[32px] whitespace-pre-wrap">Обсудим ваш проект</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Material_Icons:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-[24px] text-[rgba(11,15,23,0.4)] text-center">
        <p className="leading-[24px] whitespace-pre-wrap">close</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Container />
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header Section">
      <Heading />
      <Button />
    </div>
  );
}

function Label() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="content-stretch flex flex-col items-start px-[4px] relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(11,15,23,0.6)] w-full">
          <p className="leading-[20px] whitespace-pre-wrap">Имя</p>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(11,15,23,0.3)] w-full">
          <p className="leading-[normal] whitespace-pre-wrap">Иван Иванович</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[rgba(25,120,229,0.05)] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[17px] py-[19px] relative w-full">
          <Container1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function NameField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Name Field">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="content-stretch flex flex-col items-start px-[4px] relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(11,15,23,0.6)] w-full">
          <p className="leading-[20px] whitespace-pre-wrap">Номер телефона</p>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(11,15,23,0.3)] w-full">
          <p className="leading-[normal] whitespace-pre-wrap">+7 (000) 000 00-00</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[rgba(25,120,229,0.05)] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[18px] py-[20px] relative w-full">
          <Container2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#1978e5] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_0px_4px_rgba(25,120,229,0.1)]" />
    </div>
  );
}

function EmailField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Email Field">
      <Label1 />
      <Input1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="content-stretch flex flex-col items-start px-[4px] relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(11,15,23,0.6)] w-full">
          <p className="leading-[20px] whitespace-pre-wrap">Project Type</p>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Material_Icons:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-[#1978e5] text-[24px] text-center">
        <p className="leading-[24px] whitespace-pre-wrap">web</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative">
        <Container4 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(11,15,23,0.4)] text-center tracking-[1px] uppercase w-[186px]">
        <p className="leading-[15px] whitespace-pre-wrap">Полный цикл разработк</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative">
        <Container5 />
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(25,120,229,0.05)] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-full" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border-2 border-[#1978e5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[18px] relative size-full">
          <Margin />
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0b0f17] text-[14px] text-center w-[113.53px]">
            <p className="leading-[20px] whitespace-pre-wrap">Сайт под ключ</p>
          </div>
          <Margin1 />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#1978e5] content-stretch flex flex-col items-start p-[2px] relative rounded-[9999px]" data-name="Background">
      <div className="flex flex-col font-['Material_Icons:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white w-[12px]">
        <p className="leading-[16px] whitespace-pre-wrap">check</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start px-[2px] py-[2.5px] right-[8px] top-[8px]" data-name="Container">
      <div className="flex h-[15px] items-center justify-center relative shrink-0 w-[12px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none scale-x-75 scale-y-75">
          <Background />
        </div>
      </div>
    </div>
  );
}

function LabelSelectionCard1Selected() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Label - Selection Card 1: Selected">
      <OverlayBorder />
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Material_Icons:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-[24px] text-[rgba(11,15,23,0.4)] text-center">
        <p className="leading-[24px] whitespace-pre-wrap">palette</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative">
        <Container7 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(11,15,23,0.4)] text-center tracking-[1px] uppercase w-[210px]">
        <p className="leading-[15px] whitespace-pre-wrap">Визуальная составляющая</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative">
        <Container8 />
      </div>
    </div>
  );
}

function LabelSelectionCard() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="Label - Selection Card 2">
      <div aria-hidden="true" className="absolute border border-[rgba(11,15,23,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[17px] relative size-full">
          <Margin2 />
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0b0f17] text-[14px] text-center w-[66.56px]">
            <p className="leading-[20px] whitespace-pre-wrap">Дизайн</p>
          </div>
          <Margin3 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <LabelSelectionCard1Selected />
      <LabelSelectionCard />
    </div>
  );
}

function ProjectTypeSelector() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pb-[16px] relative shrink-0 w-full" data-name="Project Type Selector">
      <Label2 />
      <Container3 />
    </div>
  );
}

function CtaButtonButton() {
  return (
    <div className="bg-[#1978e5] content-stretch flex items-center justify-center overflow-clip py-[16px] relative rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(25,120,229,0.2),0px_4px_6px_-4px_rgba(25,120,229,0.2)] shrink-0 w-full" data-name="CTA Button → Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[102.83px]">
        <p className="leading-[24px] whitespace-pre-wrap">Отправить</p>
      </div>
    </div>
  );
}

function FormContent() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Form Content">
      <NameField />
      <EmailField />
      <ProjectTypeSelector />
      <CtaButtonButton />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#1978e5] text-[14px] text-center w-[224px]">
        <p className="leading-[20px] whitespace-pre-wrap">Или напишите нам в Телеграм</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Material_Icons:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#1978e5] text-[14px] text-center w-[14px]">
        <p className="leading-[20px] whitespace-pre-wrap">arrow_forward</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[6px] relative shrink-0" data-name="Margin">
      <Container10 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Link">
      <Container9 />
      <Margin4 />
    </div>
  );
}

function FooterSection() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Footer Section">
      <Link />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_40px_0px_rgba(88,46,255,0.05)] shrink-0 w-full" data-name="Background+Shadow">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start p-[40px] relative w-full">
          <HeaderSection />
          <FormContent />
          <FooterSection />
        </div>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[1.2px] uppercase w-[99.63px]">
        <p className="leading-[16px] whitespace-pre-wrap">AMAK SITES</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="content-stretch flex items-center opacity-50 relative self-stretch shrink-0" data-name="Background">
      <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-saturation pointer-events-none" />
      <div className="bg-white rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Margin5 />
    </div>
  );
}

function BrandingBranding() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Branding Branding">
      <Background1 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative size-full" data-name="модальное окно">
      <BackgroundShadow />
      <BrandingBranding />
    </div>
  );
}