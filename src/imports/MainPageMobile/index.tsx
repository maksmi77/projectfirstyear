import imgHero from "./b2aec4e792fe38640ae01daf3cb9cf9c8512e2b7.png";
import imgCustomFlight from "./f2930d11da0425763cd604878cfdaa173559ed18.png";
import imgFeatures from "./a344c81333f4cdd278f1d5c2b48af488134286b4.png";

function ButtonsGroupInHero() {
  return (
    <div className="content-center flex flex-wrap gap-[13px] items-center relative shrink-0 w-full" data-name="Buttons_group_in_hero">
      <div className="bg-[#003c93] flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="CTA-button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Оставить запрос</p>
          </div>
        </div>
      </div>
      <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.5)] content-stretch flex items-center justify-center p-[10px] relative rounded-[4px] shrink-0" data-name="Secondary-button">
        <div aria-hidden className="absolute border border-[#003c93] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#003c93] text-[20px] whitespace-nowrap">О сервисе</p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="h-[600px] relative shrink-0 w-full" data-name="hero">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHero} />
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start pb-[40px] pt-[150px] px-[20px] relative size-full">
          <p className="[word-break:break-word] font-['Cormorant_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#003c93] text-[47.78px] w-full">Частное небо для вашего маршрута</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Ciel Privé организует частные перелёты и сопровождение поездок для тех, кому важно свободно распоряжаться своим временем.</p>
          <ButtonsGroupInHero />
        </div>
      </div>
    </div>
  );
}

function CustomFlight() {
  return (
    <div className="h-[400px] relative shrink-0 w-full" data-name="Custom_flight">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgCustomFlight} />
        <div className="absolute bg-[rgba(0,0,0,0.6)] inset-0" />
      </div>
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[40px] items-start justify-center leading-[normal] px-[20px] py-[40px] relative size-full">
          <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#b5d4ff] text-[33.18px] w-full">Перелёт, собранный под ваш ритм</p>
          <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[16px] text-white w-full">Ciel Privé помогает организовать частный перелёт под конкретную задачу: деловую встречу, семейную поездку, закрытое событие или срочный маршрут. Команда подбирает борт, согласует время, трансфер, VIP-терминал и дополнительные детали.</p>
        </div>
      </div>
    </div>
  );
}

function FeatureCard() {
  return (
    <div className="backdrop-blur-[15px] bg-[rgba(255,255,255,0.6)] relative rounded-[8px] shrink-0 w-full" data-name="feature_card">
      <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[16px] items-start leading-[normal] p-[10px] relative size-full">
        <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#003c93] text-[33.18px] w-full">Индивидуальный маршрут</p>
        <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Перелёт собирается под задачу клиента, а не под стандартное расписание.</p>
      </div>
    </div>
  );
}

function FeatureCard1() {
  return (
    <div className="backdrop-blur-[15px] bg-[rgba(255,255,255,0.6)] relative rounded-[8px] shrink-0 w-full" data-name="feature_card">
      <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[16px] items-start leading-[normal] p-[10px] relative size-full">
        <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#003c93] text-[33.18px] w-full">Один контакт</p>
        <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Клиент не связывается с разными подрядчиками и не контролирует каждый этап самостоятельно.</p>
      </div>
    </div>
  );
}

function FeatureCard2() {
  return (
    <div className="backdrop-blur-[15px] bg-[rgba(255,255,255,0.6)] relative rounded-[8px] shrink-0 w-full" data-name="feature_card">
      <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[16px] items-start leading-[normal] p-[10px] relative size-full">
        <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#003c93] text-[33.18px] w-full">Приватность</p>
        <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Поездка проходит без лишнего внимания и постороннего участия.</p>
      </div>
    </div>
  );
}

function FeatureCard3() {
  return (
    <div className="backdrop-blur-[15px] bg-[rgba(255,255,255,0.6)] relative rounded-[8px] shrink-0 w-full" data-name="feature_card">
      <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[16px] items-start leading-[normal] p-[10px] relative size-full">
        <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#003c93] text-[33.18px] w-full">Сопровождение</p>
        <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Команда остаётся на связи до, во время и после перелёта.</p>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full" data-name="wrapper">
      <FeatureCard />
      <FeatureCard1 />
      <FeatureCard2 />
      <FeatureCard3 />
    </div>
  );
}

function Features() {
  return (
    <div className="relative shrink-0 w-full" data-name="Features">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFeatures} />
        <div className="absolute bg-[rgba(255,255,255,0.2)] inset-0" />
      </div>
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] py-[40px] relative size-full">
          <Wrapper />
        </div>
      </div>
    </div>
  );
}

function Slogan() {
  return (
    <div className="bg-[#003c93] relative shrink-0 w-full" data-name="slogan">
      <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[40px] items-start leading-[normal] px-[20px] py-[40px] relative size-full text-[#b5d4ff] text-center">
        <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[39.81px] w-full">Роскошь — это когда не нужно думать о лишнем</p>
        <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[16px] w-full">Ciel Privé собирает поездку целиком: от первого запроса до прибытия.</p>
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

export default function MainPageMobile() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Main_Page-mobile">
      <Hero />
      <CustomFlight />
      <Features />
      <Slogan />
      <div className="[word-break:break-word] bg-[#003c93] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-center justify-center leading-[normal] not-italic py-[40px] relative shrink-0 text-[#b5d4ff] text-[16px] text-center w-full whitespace-nowrap" data-name="footer">
        <p className="relative shrink-0">©copyright2026</p>
        <p className="relative shrink-0">договор</p>
        <p className="relative shrink-0">контакты</p>
        <p className="relative shrink-0">+7 (495) 123-45-67</p>
      </div>
      <div className="absolute backdrop-blur-[10px] bg-[rgba(181,212,255,0.4)] content-stretch flex h-[44px] items-center justify-between left-[10px] overflow-clip p-[10px] rounded-[10px] top-[10px] w-[370px]" data-name="Header">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">Ciel Privé</p>
        <Frame />
      </div>
    </div>
  );
}