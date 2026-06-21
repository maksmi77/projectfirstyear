import imgHero from "./479937d20623c0771007bac858c99f764fc8b6d1.png";
import imgInAir1 from "./b2c236d97380b02cfbd48baa33dec08b2b3ceefb.png";

function Hero() {
  return (
    <div className="h-[600px] relative shrink-0 w-full" data-name="hero">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute bg-[rgba(0,0,0,0.6)] inset-0" />
      </div>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[20px] items-start leading-[normal] pb-[40px] pt-[150px] px-[20px] relative size-full">
          <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#b5d4ff] text-[47.78px] w-full">В воздухе</p>
          <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[16px] text-white w-full">Салон частного самолёта — это личное пространство в пути: здесь можно работать, отдыхать, говорить без посторонних и сохранять привычный ритм.</p>
        </div>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="wrapper">
      <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#b5d4ff] text-[33.18px] w-full">Для деловой поездки</p>
      <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[16px] text-white w-full">Возможность не терять рабочее время.</p>
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="wrapper">
      <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#b5d4ff] text-[33.18px] w-full">Для семейного перелёта</p>
      <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[16px] text-white w-full">Спокойная дорога без лишнего стресса.</p>
    </div>
  );
}

function Wrapper2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="wrapper">
      <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#b5d4ff] text-[33.18px] w-full">Для личного путешествия</p>
      <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[16px] text-white w-full">Ощущение приватности и свободы.</p>
    </div>
  );
}

function InAir() {
  return (
    <div className="relative shrink-0 w-full" data-name="in_air1">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgInAir1} />
        <div className="absolute bg-[rgba(73,73,73,0.7)] inset-0" />
      </div>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[40px] items-start leading-[normal] px-[20px] py-[40px] relative size-full">
          <Wrapper />
          <Wrapper1 />
          <Wrapper2 />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="-translate-y-1/2 absolute h-[18px] right-0 top-1/2 w-[32px]">
      <div className="absolute inset-[0_0_-5.56%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 19">
          <g id="Group 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" x1="32" x2="4.37114e-08" y1="0.500011" y2="0.500008" />
            <line id="Line 2" stroke="var(--stroke-0, black)" x1="32" x2="4.37114e-08" y1="9.50001" y2="9.50001" />
            <line id="Line 3" stroke="var(--stroke-0, black)" x1="32" x2="4.37114e-08" y1="18.5" y2="18.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[44px]">
      <Group />
    </div>
  );
}

export default function InAirMobile() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="in_air-Mobile">
      <Hero />
      <InAir />
      <div className="[word-break:break-word] bg-[#6d6d6d] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-center justify-center leading-[normal] not-italic py-[40px] relative shrink-0 text-[16px] text-center text-white w-full whitespace-nowrap" data-name="footer">
        <p className="relative shrink-0">©copyright2026</p>
        <p className="relative shrink-0">договор</p>
        <p className="relative shrink-0">контакты</p>
        <p className="relative shrink-0">+7 (495) 123-45-67</p>
      </div>
      <div className="absolute backdrop-blur-[10px] bg-[rgba(181,212,255,0.4)] content-stretch flex h-[44px] items-center justify-between left-[10px] overflow-clip p-[10px] right-[10px] rounded-[10px] top-[10px]" data-name="Header">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">Ciel Privé</p>
        <Frame />
      </div>
    </div>
  );
}