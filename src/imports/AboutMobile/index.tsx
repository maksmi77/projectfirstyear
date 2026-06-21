import imgHero from "./fed77ffc6786739e3971a39614aefe46b6fae80f.png";
import imgBenefits1 from "./0e5798615859830318ee230a04dd4e528bd7990c.png";

function Hero() {
  return (
    <div className="h-[600px] relative shrink-0 w-full" data-name="hero">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute bg-[rgba(255,255,255,0.8)] inset-0" />
      </div>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[20px] items-start leading-[normal] pb-[40px] pt-[150px] px-[20px] relative size-full">
          <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#003c93] text-[47.78px] w-full">Частное небо</p>
          <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Ciel Privé переводится с французского как «частное небо». Это идея сервиса, в котором перелёт становится личным пространством клиента.</p>
        </div>
      </div>
    </div>
  );
}

function BenefitCard() {
  return (
    <div className="backdrop-blur-[15px] bg-[rgba(255,255,255,0.6)] relative rounded-[8px] shrink-0 w-full" data-name="benefit_card">
      <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[10px] items-start p-[10px] relative size-full">
        <p className="font-['Cormorant_Garamond:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#003c93] text-[33.18px] w-full">Не про это</p>
        <div className="font-['Inter:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">
          <p className="leading-[normal] mb-0">Показная роскошь</p>
          <p className="leading-[normal] mb-0">Громкие обещания</p>
          <p className="leading-[normal] mb-0">Сложная коммуникация</p>
          <p className="leading-[normal] mb-0">Случайные подрядчики</p>
          <p className="leading-[normal]">Лишняя суета</p>
        </div>
      </div>
    </div>
  );
}

function BenefitCard1() {
  return (
    <div className="backdrop-blur-[15px] bg-[rgba(255,255,255,0.6)] relative rounded-[8px] shrink-0 w-full" data-name="benefit_card">
      <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[10px] items-start p-[10px] relative size-full">
        <p className="font-['Cormorant_Garamond:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#003c93] text-[33.18px] w-full">Про это</p>
        <div className="font-['Inter:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">
          <p className="leading-[normal] mb-0">Приватность</p>
          <p className="leading-[normal] mb-0">Точность</p>
          <p className="leading-[normal] mb-0">Личный маршрут</p>
          <p className="leading-[normal] mb-0">Один контакт</p>
          <p className="leading-[normal]">Спокойное сопровождение</p>
        </div>
      </div>
    </div>
  );
}

function Benefits() {
  return (
    <div className="relative shrink-0 w-full" data-name="benefits_1">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgBenefits1} />
        <div className="absolute bg-[rgba(255,255,255,0.9)] inset-0" />
      </div>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start px-[20px] py-[40px] relative size-full">
          <BenefitCard />
          <BenefitCard1 />
        </div>
      </div>
    </div>
  );
}

function FeatureCard() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="feature_card">
      <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#003c93] text-[33.18px] w-full">Приватность</p>
      <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Для клиента важна возможность перемещаться без лишнего внимания.</p>
    </div>
  );
}

function FeatureCard1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="feature_card">
      <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#003c93] text-[33.18px] w-full">Точность</p>
      <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Время вылета, готовность борта, документы и трансфер должны быть согласованы заранее.</p>
    </div>
  );
}

function FeatureCard2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="feature_card">
      <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#003c93] text-[33.18px] w-full">Индивидуальный подход</p>
      <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Каждая поездка требует своего решения: по маршруту, срочности, пассажирам и уровню комфорта.</p>
    </div>
  );
}

function FeatureCard3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="feature_card">
      <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#003c93] text-[33.18px] w-full">Ответственность</p>
      <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Клиент не должен разбираться, кто отвечает за каждую часть процесса.</p>
    </div>
  );
}

function FeatureCard4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="feature_card">
      <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#003c93] text-[33.18px] w-full">Спокойный премиум</p>
      <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Дорогим сервис делает не внешняя роскошь, а качество взаимодействия.</p>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[30px] items-start leading-[normal] relative shrink-0 w-full" data-name="wrapper">
      <FeatureCard />
      <FeatureCard1 />
      <FeatureCard2 />
      <FeatureCard3 />
      <FeatureCard4 />
    </div>
  );
}

function Benefits1() {
  return (
    <div className="relative shrink-0 w-full" data-name="benefits_2">
      <div className="content-stretch flex flex-col gap-[40px] items-start px-[20px] py-[40px] relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#003c93] text-[39.81px] w-full">Ценности</p>
        <Wrapper />
        <div className="bg-[#003c93] relative rounded-[4px] shrink-0 w-full" data-name="cta_btn">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
              <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Перейти к услугам</p>
            </div>
          </div>
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

export default function AboutMobile() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="About-Mobile">
      <Hero />
      <Benefits />
      <Benefits1 />
      <div className="[word-break:break-word] bg-white content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-center justify-center leading-[normal] not-italic py-[40px] relative shrink-0 text-[#000b1c] text-[16px] text-center w-full whitespace-nowrap" data-name="footer">
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