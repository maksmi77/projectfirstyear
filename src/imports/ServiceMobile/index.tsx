import imgHero from "./f123645402cbba6b5330a2604986f39512b3bdf3.png";
import imgServices from "./e4d191f02ac4adf5526617c0529a726dcbeb6023.png";

function Hero() {
  return (
    <div className="h-[600px] relative shrink-0 w-full" data-name="hero">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute bg-[rgba(255,255,255,0.8)] inset-0" />
      </div>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[20px] items-start leading-[normal] pb-[40px] pt-[150px] px-[20px] relative size-full">
          <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#003c93] text-[47.78px] w-full">Перелёты и сопровождение поездки</p>
          <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Ciel Privé собирает маршрут целиком: от подбора борта до трансфера, VIP-терминала и деталей на борту.</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="backdrop-blur-[15px] bg-[rgba(0,0,0,0.9)] relative rounded-[8px] shrink-0 w-full">
      <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[16px] items-start leading-[normal] p-[10px] relative size-full">
        <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#b5d4ff] text-[33.18px] w-full">Частный перелёт</p>
        <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[16px] text-white w-full">Подбор самолёта под маршрут, количество пассажиров и уровень комфорта.</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="backdrop-blur-[15px] bg-[rgba(0,0,0,0.9)] relative rounded-[8px] shrink-0 w-full">
      <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[16px] items-start leading-[normal] p-[10px] relative size-full">
        <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#b5d4ff] text-[33.18px] w-full">Корпоративная поездка</p>
        <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[16px] text-white w-full">Организация перелётов для деловых встреч, команд и партнёров.</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="backdrop-blur-[15px] bg-[rgba(0,0,0,0.9)] relative rounded-[8px] shrink-0 w-full">
      <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[16px] items-start leading-[normal] p-[10px] relative size-full">
        <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#b5d4ff] text-[33.18px] w-full">Семейное путешествие</p>
        <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[16px] text-white w-full">Комфортный маршрут для семьи, детей, сопровождающих и багажа.</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="backdrop-blur-[15px] bg-[rgba(0,0,0,0.9)] relative rounded-[8px] shrink-0 w-full">
      <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[16px] items-start leading-[normal] p-[10px] relative size-full">
        <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#b5d4ff] text-[33.18px] w-full">Срочный вылет</p>
        <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[16px] text-white w-full">Решение для ситуаций, где время становится главным условием.</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="backdrop-blur-[15px] bg-[rgba(0,0,0,0.9)] relative rounded-[8px] shrink-0 w-full">
      <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[16px] items-start leading-[normal] p-[10px] relative size-full">
        <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#b5d4ff] text-[33.18px] w-full">Международный маршрут</p>
        <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[16px] text-white w-full">Перелёты между странами и несколькими точками.</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="backdrop-blur-[15px] bg-[rgba(0,0,0,0.9)] relative rounded-[8px] shrink-0 w-full">
      <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[16px] items-start leading-[normal] p-[10px] relative size-full">
        <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#b5d4ff] text-[33.18px] w-full">Закрытое событие</p>
        <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[16px] text-white w-full">Конфиденциальное перемещение для частных мероприятий.</p>
      </div>
    </div>
  );
}

function FeatureCard() {
  return (
    <div className="backdrop-blur-[15px] bg-[rgba(0,0,0,0.9)] relative shrink-0 w-full" data-name="feature_card">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[10px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-white w-[350px]">Подбор самолёта под маршрут, количество пассажиров и уровень комфорта.</p>
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <div className="relative shrink-0 w-full" data-name="Services">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgServices} />
        <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0" />
      </div>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start px-[20px] py-[40px] relative size-full">
          <Frame />
          <Frame1 />
          <Frame2 />
          <Frame3 />
          <Frame4 />
          <Frame5 />
          <FeatureCard />
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

function Frame6() {
  return (
    <div className="relative shrink-0 size-[44px]">
      <Group />
    </div>
  );
}

export default function ServiceMobile() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Service-Mobile">
      <Hero />
      <Services />
      <div className="[word-break:break-word] bg-black content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-center justify-center leading-[normal] not-italic py-[40px] relative shrink-0 text-[16px] text-center text-white w-full whitespace-nowrap" data-name="footer">
        <p className="relative shrink-0">©copyright2026</p>
        <p className="relative shrink-0">договор</p>
        <p className="relative shrink-0">контакты</p>
        <p className="relative shrink-0">+7 (495) 123-45-67</p>
      </div>
      <div className="absolute backdrop-blur-[10px] bg-[rgba(181,212,255,0.4)] content-stretch flex h-[44px] items-center justify-between left-[10px] overflow-clip p-[10px] right-[10px] rounded-[10px] top-[10px]" data-name="Header">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">Ciel Privé</p>
        <Frame6 />
      </div>
    </div>
  );
}