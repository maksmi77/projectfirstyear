import imgHero from "./fed77ffc6786739e3971a39614aefe46b6fae80f.png";
import imgBenefits1 from "./0e5798615859830318ee230a04dd4e528bd7990c.png";

function Hero() {
  return (
    <div className="h-[600px] relative shrink-0 w-full" data-name="hero">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute bg-[rgba(255,255,255,0.8)] inset-0" />
      </div>
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[20px] items-center justify-center leading-[normal] pb-[40px] pt-[70px] px-[20px] relative size-full text-center">
          <p className="font-['Cormorant_Garamond:Regular',sans-serif] max-w-[500px] relative shrink-0 text-[#003c93] text-[47.78px] w-full">Частное небо</p>
          <p className="font-['Inter:Regular',sans-serif] max-w-[600px] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Ciel Privé переводится с французского как «частное небо». Это идея сервиса, в котором перелёт становится личным пространством клиента.</p>
        </div>
      </div>
    </div>
  );
}

function BenefitCard() {
  return (
    <div className="backdrop-blur-[15px] bg-[rgba(255,255,255,0.6)] content-stretch flex flex-col gap-[10px] h-[231px] items-start px-[32px] py-[24px] relative rounded-[8px] shrink-0 w-[250px]" data-name="benefit_card">
      <p className="font-['Cormorant_Garamond:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#003c93] text-[33.18px] w-full">Не про это</p>
      <div className="font-['Inter:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">
        <p className="leading-[normal] mb-0">Показная роскошь</p>
        <p className="leading-[normal] mb-0">Громкие обещания</p>
        <p className="leading-[normal] mb-0">Сложная коммуникация</p>
        <p className="leading-[normal] mb-0">Случайные подрядчики</p>
        <p className="leading-[normal]">Лишняя суета</p>
      </div>
    </div>
  );
}

function BenefitCard1() {
  return (
    <div className="backdrop-blur-[15px] bg-[rgba(255,255,255,0.6)] content-stretch flex flex-col gap-[10px] h-[231px] items-start px-[32px] py-[24px] relative rounded-[8px] shrink-0 w-[250px]" data-name="benefit_card">
      <p className="font-['Cormorant_Garamond:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#003c93] text-[33.18px] w-full">Про это</p>
      <div className="font-['Inter:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">
        <p className="leading-[normal] mb-0">Приватность</p>
        <p className="leading-[normal] mb-0">Точность</p>
        <p className="leading-[normal] mb-0">Личный маршрут</p>
        <p className="leading-[normal] mb-0">Один контакт</p>
        <p className="leading-[normal]">Спокойное сопровождение</p>
      </div>
    </div>
  );
}

function Benefits() {
  return (
    <div className="h-[515px] relative shrink-0 w-full" data-name="benefits_1">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgBenefits1} />
        <div className="absolute bg-[rgba(255,255,255,0.8)] inset-0" />
      </div>
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex font-normal gap-[200px] items-center justify-center px-[20px] py-[40px] relative size-full">
          <BenefitCard />
          <BenefitCard1 />
        </div>
      </div>
    </div>
  );
}

function BenefitCard2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[400px]" data-name="benefit_card">
      <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#003c93] text-[33.18px] w-full">Приватность</p>
      <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Для клиента важна возможность перемещаться без лишнего внимания.</p>
    </div>
  );
}

function BenefitCard3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[400px]" data-name="benefit_card">
      <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#003c93] text-[33.18px] w-full">Точность</p>
      <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Время вылета, готовность борта, документы и трансфер должны быть согласованы заранее.</p>
    </div>
  );
}

function BenefitCard4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[400px]" data-name="benefit_card">
      <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#003c93] text-[33.18px] w-full">Индивидуальный подход</p>
      <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Каждая поездка требует своего решения: по маршруту, срочности, пассажирам и уровню комфорта.</p>
    </div>
  );
}

function BenefitCard5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[400px]" data-name="benefit_card">
      <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#003c93] text-[33.18px] w-full">Ответственность</p>
      <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Клиент не должен разбираться, кто отвечает за каждую часть процесса.</p>
    </div>
  );
}

function BenefitCard6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[400px]" data-name="benefit_card">
      <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#003c93] text-[33.18px] w-full">Спокойный премиум</p>
      <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Дорогим сервис делает не внешняя роскошь, а качество взаимодействия.</p>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="[word-break:break-word] content-center flex flex-wrap font-normal gap-[100px] items-center justify-center leading-[normal] max-w-[1000px] relative shrink-0 text-center w-full" data-name="wrapper">
      <BenefitCard2 />
      <BenefitCard3 />
      <BenefitCard4 />
      <BenefitCard5 />
      <BenefitCard6 />
    </div>
  );
}

function Benefits1() {
  return (
    <div className="relative shrink-0 w-full" data-name="benefits_2">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[80px] items-center justify-center pb-[60px] pt-[100px] px-[20px] relative size-full">
          <p className="[word-break:break-word] font-['Cormorant_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#003c93] text-[39.81px] text-center w-full">Ценности</p>
          <Wrapper />
          <div className="bg-[#003c93] max-w-[300px] relative rounded-[4px] shrink-0 w-full" data-name="cta_btn">
            <div className="flex flex-row items-center justify-center max-w-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center max-w-[inherit] p-[10px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">Перейти к услугам</p>
              </div>
            </div>
          </div>
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

export default function AboutDesktop() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="About-Desktop">
      <Hero />
      <Benefits />
      <Benefits1 />
      <div className="[word-break:break-word] bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[40px] items-center justify-center leading-[normal] not-italic py-[40px] relative shrink-0 text-[#000b1c] text-[16px] text-center w-full whitespace-nowrap" data-name="footer">
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