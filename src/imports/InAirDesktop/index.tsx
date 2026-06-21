import imgHero from "./479937d20623c0771007bac858c99f764fc8b6d1.png";
import imgInAir1 from "./b2c236d97380b02cfbd48baa33dec08b2b3ceefb.png";

function Hero() {
  return (
    <div className="h-[600px] relative shrink-0 w-full" data-name="hero">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute bg-[rgba(0,0,0,0.6)] inset-0" />
      </div>
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[20px] items-center justify-center leading-[normal] pb-[40px] pt-[70px] px-[20px] relative size-full text-center">
          <p className="font-['Cormorant_Garamond:Regular',sans-serif] max-w-[600px] relative shrink-0 text-[#b5d4ff] text-[47.78px] w-[500px]">В воздухе</p>
          <p className="font-['Inter:Regular',sans-serif] max-w-[600px] not-italic relative shrink-0 text-[16px] text-white w-[600px]">Салон частного самолёта — это личное пространство в пути: здесь можно работать, отдыхать, говорить без посторонних и сохранять привычный ритм.</p>
        </div>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center max-w-[600px] relative shrink-0 w-full" data-name="wrapper">
      <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#b5d4ff] text-[33.18px] w-full">Для деловой поездки</p>
      <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[16px] text-white w-full">Возможность не терять рабочее время.</p>
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center max-w-[600px] relative shrink-0 w-full" data-name="wrapper">
      <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#b5d4ff] text-[33.18px] w-full">Для семейного перелёта</p>
      <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[16px] text-white w-full">Спокойная дорога без лишнего стресса.</p>
    </div>
  );
}

function Wrapper2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center max-w-[600px] relative shrink-0 w-full" data-name="wrapper">
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
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[40px] items-center justify-center leading-[normal] px-[10px] py-[40px] relative size-full text-center">
          <Wrapper />
          <Wrapper1 />
          <Wrapper2 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[15px] items-center leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">
      <p className="relative shrink-0">О сервисе</p>
      <p className="relative shrink-0">Услуги</p>
      <p className="relative shrink-0">Маршрут</p>
      <p className="relative shrink-0">До вылета</p>
      <p className="relative shrink-0">В воздухе</p>
      <p className="relative shrink-0">Контакты</p>
    </div>
  );
}

export default function InAirDesktop() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="in_air-Desktop">
      <Hero />
      <InAir />
      <div className="[word-break:break-word] bg-[#6d6d6d] content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[40px] items-center justify-center leading-[normal] not-italic py-[40px] relative shrink-0 text-[16px] text-center text-white w-full whitespace-nowrap" data-name="footer">
        <p className="relative shrink-0">©copyright2026</p>
        <p className="relative shrink-0">договор</p>
        <p className="relative shrink-0">контакты</p>
        <p className="relative shrink-0">+7 (495) 123-45-67</p>
      </div>
      <div className="-translate-x-1/2 absolute backdrop-blur-[10px] bg-[rgba(181,212,255,0.4)] content-stretch flex items-center justify-between left-1/2 overflow-clip pl-[22px] pr-[10px] py-[10px] rounded-[12px] top-[10px] w-[1108px]" data-name="Header">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">Ciel Privé</p>
        <Frame />
        <div className="bg-[#003c93] content-stretch flex items-center justify-center px-[16px] py-[10px] relative rounded-[2px] shrink-0" data-name="Btn">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">Оставить запрос</p>
        </div>
      </div>
    </div>
  );
}