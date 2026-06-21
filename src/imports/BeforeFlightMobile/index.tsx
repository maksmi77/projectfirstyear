import imgHero from "./167c1f696929a2129fe8b774b74e09dcbfc9e578.png";
import imgBeforeFlight2 from "./0e5798615859830318ee230a04dd4e528bd7990c.png";

function Hero() {
  return (
    <div className="h-[600px] relative shrink-0 w-full" data-name="hero">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute bg-[rgba(255,255,255,0.6)] inset-0" />
      </div>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[20px] items-start leading-[normal] pb-[40px] pt-[150px] px-[20px] relative size-full">
          <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#003c93] text-[47.78px] w-full">До вылета</p>
          <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Хороший перелёт начинается до посадки. Ciel Privé заранее собирает детали, чтобы клиенту не приходилось контролировать каждый этап.</p>
        </div>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="wrapper">
      <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#003c93] text-[33.18px] w-full">Что уточняет команда</p>
      <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Дата</p>
      <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Количество пассажиров</p>
      <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Цель поездки</p>
      <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Уровень комфорта</p>
      <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Дополнительные пожелания</p>
    </div>
  );
}

function BeforeFlight() {
  return (
    <div className="bg-[#a5a5a5] relative shrink-0 w-full" data-name="before_flight1">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[40px] items-start leading-[normal] px-[20px] py-[40px] relative size-full">
          <Wrapper />
          <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">На первом этапе важно понять не только направление, но и контекст поездки: деловая встреча, семейная поездка, закрытое событие или срочный вылет.</p>
        </div>
      </div>
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[normal] relative shrink-0 w-full" data-name="wrapper">
      <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#4c96ff] text-[33.18px] w-full">Подбор и согласование</p>
      <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[16px] text-white w-full">После запроса подбирается подходящий борт, согласуется время, стоимость, трансфер, терминал и дополнительные детали. Клиент получает понятный сценарий поездки, а не набор отдельных организационных задач.</p>
    </div>
  );
}

function Wrapper2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="wrapper">
      <p className="font-['Cormorant_Garamond:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#4c96ff] text-[33.18px] w-full">Что берёт на себя сервис</p>
      <ul className="block font-['Inter:Regular',sans-serif] leading-[0] list-disc not-italic relative shrink-0 text-[16px] text-white w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">подбор самолёта;</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">согласование времени вылета;</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">организация VIP-терминала;</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">трансфер до аэропорта;</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">питание на борту;</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">дополнительные пожелания;</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">связь с менеджером;</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[normal]">поддержка на всех этапах.</span>
        </li>
      </ul>
    </div>
  );
}

function BeforeFlight1() {
  return (
    <div className="relative shrink-0 w-full" data-name="before_flight2">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgBeforeFlight2} />
        <div className="absolute bg-[rgba(0,0,0,0.8)] inset-0" />
      </div>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[40px] items-start px-[20px] py-[40px] relative size-full">
          <Wrapper1 />
          <Wrapper2 />
        </div>
      </div>
    </div>
  );
}

function BeforeFlight2() {
  return (
    <div className="bg-[#003c93] relative shrink-0 w-full" data-name="before_flight3">
      <div className="content-stretch flex flex-col items-start px-[20px] py-[40px] relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#b5d4ff] text-[39.81px] text-center w-full">Сервис ощущается тогда, когда о деталях не приходится спрашивать</p>
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

export default function BeforeFlightMobile() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="before_flight-mobile">
      <Hero />
      <BeforeFlight />
      <BeforeFlight1 />
      <BeforeFlight2 />
      <div className="[word-break:break-word] bg-[#003c93] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-center justify-center leading-[normal] not-italic py-[40px] relative shrink-0 text-[#b5d4ff] text-[16px] text-center w-full whitespace-nowrap" data-name="footer">
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