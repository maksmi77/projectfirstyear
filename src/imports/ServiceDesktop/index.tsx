import imgHero from "./f123645402cbba6b5330a2604986f39512b3bdf3.png";
import imgServices from "./e4d191f02ac4adf5526617c0529a726dcbeb6023.png";

function Hero() {
  return (
    <div className="h-[600px] relative shrink-0 w-full" data-name="hero">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute bg-[rgba(255,255,255,0.8)] inset-0" />
      </div>
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[20px] items-center justify-center leading-[normal] pb-[40px] pt-[70px] px-[20px] relative size-full text-center">
          <p className="font-['Cormorant_Garamond:Regular',sans-serif] max-w-[900px] min-w-full relative shrink-0 text-[#003c93] text-[47.78px] w-[min-content]">Перелёты и сопровождение поездки</p>
          <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-[600px]">Ciel Privé собирает маршрут целиком: от подбора борта до трансфера, VIP-терминала и деталей на борту.</p>
        </div>
      </div>
    </div>
  );
}

function FeatureCard() {
  return (
    <div className="backdrop-blur-[15px] bg-[rgba(0,0,0,0.9)] h-full max-w-[500px] relative rounded-[8px] shrink-0 w-[500px]" data-name="feature_card">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[16px] items-center leading-[normal] max-w-[inherit] px-[32px] py-[24px] relative size-full text-center">
          <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#b5d4ff] text-[33.18px] w-full">Частный перелёт</p>
          <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[16px] text-white w-full">Подбор самолёта под маршрут, количество пассажиров и уровень комфорта.</p>
        </div>
      </div>
    </div>
  );
}

function FeatureCard1() {
  return (
    <div className="backdrop-blur-[15px] bg-[rgba(0,0,0,0.9)] h-full max-w-[500px] relative rounded-[8px] shrink-0 w-[500px]" data-name="feature_card">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[16px] items-center leading-[normal] max-w-[inherit] px-[32px] py-[24px] relative size-full text-center">
          <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#b5d4ff] text-[33.18px] w-full">Корпоративная поездка</p>
          <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[16px] text-white w-full">Организация перелётов для деловых встреч, команд и партнёров.</p>
        </div>
      </div>
    </div>
  );
}

function FeatureCard2() {
  return (
    <div className="backdrop-blur-[15px] bg-[rgba(0,0,0,0.9)] h-full max-w-[500px] relative rounded-[8px] shrink-0 w-[500px]" data-name="feature_card">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[16px] items-center leading-[normal] max-w-[inherit] px-[32px] py-[24px] relative size-full text-center">
          <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#b5d4ff] text-[33.18px] w-full">Семейное путешествие</p>
          <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[16px] text-white w-full">Комфортный маршрут для семьи, детей, сопровождающих и багажа.</p>
        </div>
      </div>
    </div>
  );
}

function FeatureCard3() {
  return (
    <div className="backdrop-blur-[15px] bg-[rgba(0,0,0,0.9)] h-full max-w-[500px] relative rounded-[8px] shrink-0 w-[500px]" data-name="feature_card">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[16px] items-center leading-[normal] max-w-[inherit] px-[32px] py-[24px] relative size-full text-center">
          <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#b5d4ff] text-[33.18px] w-full">Срочный вылет</p>
          <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[16px] text-white w-full">Решение для ситуаций, где время становится главным условием.</p>
        </div>
      </div>
    </div>
  );
}

function FeatureCard4() {
  return (
    <div className="backdrop-blur-[15px] bg-[rgba(0,0,0,0.9)] h-full max-w-[500px] relative rounded-[8px] shrink-0 w-[500px]" data-name="feature_card">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[16px] items-center leading-[normal] max-w-[inherit] px-[32px] py-[24px] relative size-full text-center">
          <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#b5d4ff] text-[33.18px] w-full">Международный маршрут</p>
          <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[16px] text-white w-full">Перелёты между странами и несколькими точками.</p>
        </div>
      </div>
    </div>
  );
}

function FeatureCard5() {
  return (
    <div className="backdrop-blur-[15px] bg-[rgba(0,0,0,0.9)] h-full max-w-[500px] relative rounded-[8px] shrink-0 w-[500px]" data-name="feature_card">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[16px] items-center leading-[normal] max-w-[inherit] px-[32px] py-[24px] relative size-full text-center">
          <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#b5d4ff] text-[33.18px] w-full">Закрытое событие</p>
          <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[16px] text-white w-full">Конфиденциальное перемещение для частных мероприятий.</p>
        </div>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex flex-wrap gap-[60px] h-[546px] items-center justify-center relative shrink-0 w-full" data-name="wrapper">
      <FeatureCard />
      <FeatureCard1 />
      <FeatureCard2 />
      <FeatureCard3 />
      <FeatureCard4 />
      <FeatureCard5 />
    </div>
  );
}

function FeatureCard6() {
  return (
    <div className="backdrop-blur-[15px] bg-[rgba(0,0,0,0.9)] content-stretch flex items-center justify-center px-[32px] py-[24px] relative rounded-[8px] shrink-0" data-name="feature_card">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-white w-[600px]">Подбор самолёта под маршрут, количество пассажиров и уровень комфорта.</p>
    </div>
  );
}

function Services() {
  return (
    <div className="content-stretch flex flex-col gap-[100px] items-center justify-center overflow-clip px-[10px] py-[100px] relative shrink-0 w-[1280px]" data-name="Services">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgServices} />
      <Wrapper />
      <FeatureCard6 />
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

export default function ServiceDesktop() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Service-Desktop">
      <Hero />
      <Services />
      <div className="[word-break:break-word] bg-black content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[40px] items-center justify-center leading-[normal] not-italic py-[40px] relative shrink-0 text-[16px] text-center text-white w-full whitespace-nowrap" data-name="footer">
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