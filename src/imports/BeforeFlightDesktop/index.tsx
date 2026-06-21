import imgHero from "./167c1f696929a2129fe8b774b74e09dcbfc9e578.png";
import imgFrame8 from "./0e5798615859830318ee230a04dd4e528bd7990c.png";

function Hero() {
  return (
    <div className="h-[600px] relative shrink-0 w-full" data-name="hero">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute bg-[rgba(255,255,255,0.4)] inset-0" />
      </div>
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[20px] items-center justify-center leading-[normal] pb-[40px] pt-[70px] px-[20px] relative size-full text-center">
          <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#003c93] text-[47.78px] w-[500px]">До вылета</p>
          <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-[600px]">Хороший перелёт начинается до посадки. Ciel Privé заранее собирает детали, чтобы клиенту не приходилось контролировать каждый этап.</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Cormorant_Garamond:Regular',sans-serif] max-w-[600px] relative shrink-0 text-[#003c93] text-[33.18px] w-full">Что уточняет команда</p>
      <p className="font-['Inter:Regular',sans-serif] max-w-[600px] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Дата</p>
      <p className="font-['Inter:Regular',sans-serif] max-w-[600px] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Количество пассажиров</p>
      <p className="font-['Inter:Regular',sans-serif] max-w-[600px] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Цель поездки</p>
      <p className="font-['Inter:Regular',sans-serif] max-w-[600px] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Уровень комфорта</p>
      <p className="font-['Inter:Regular',sans-serif] max-w-[600px] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Дополнительные пожелания</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#a5a5a5] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[40px] items-center justify-center leading-[normal] px-[10px] py-[40px] relative size-full text-center">
          <Frame3 />
          <p className="font-['Inter:Regular',sans-serif] max-w-[600px] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">На первом этапе важно понять не только направление, но и контекст поездки: деловая встреча, семейная поездка, закрытое событие или срочный вылет.</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[normal] max-w-[500px] relative shrink-0 text-center w-full">
      <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#4c96ff] text-[33.18px] w-full">Подбор и согласование</p>
      <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[16px] text-white w-full">После запроса подбирается подходящий борт, согласуется время, стоимость, трансфер, терминал и дополнительные детали. Клиент получает понятный сценарий поездки, а не набор отдельных организационных задач.</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center max-w-[600px] relative shrink-0 w-[400px]">
      <p className="font-['Cormorant_Garamond:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[#4c96ff] text-[33.18px] text-center w-[min-content]">Что берёт на себя сервис</p>
      <ul className="block font-['Inter:Regular',sans-serif] leading-[0] list-disc not-italic relative shrink-0 text-[16px] text-white w-[280px]">
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

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame8} />
        <div className="absolute bg-[rgba(0,0,0,0.8)] inset-0" />
      </div>
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[40px] items-center justify-center px-[10px] py-[40px] relative size-full">
          <Frame4 />
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#003c93] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[10px] py-[40px] relative size-full">
          <p className="[word-break:break-word] font-['Cormorant_Garamond:Regular',sans-serif] font-normal leading-[normal] max-w-[800px] relative shrink-0 text-[#b5d4ff] text-[39.81px] text-center w-full">Сервис ощущается тогда, когда о деталях не приходится спрашивать.</p>
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

export default function BeforeFlightDesktop() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="before_flight-desktop">
      <Hero />
      <Frame2 />
      <Frame1 />
      <Frame6 />
      <div className="[word-break:break-word] bg-[#003c93] content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[40px] items-center justify-center leading-[normal] not-italic py-[40px] relative shrink-0 text-[#b5d4ff] text-[16px] text-center w-full whitespace-nowrap" data-name="footer">
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