import imgHero from "./95e623b363718e2b0f376ef0c789619552fe8e86.png";
import imgRoute1 from "./7b58da817ac14f7bb63446e2aee072dd13ace3bb.png";
import imgRoute2 from "./0e5798615859830318ee230a04dd4e528bd7990c.png";

function Hero() {
  return (
    <div className="h-[600px] relative shrink-0 w-full" data-name="hero">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute bg-[rgba(255,255,255,0.5)] inset-0" />
      </div>
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[20px] items-center justify-center leading-[normal] pb-[40px] pt-[70px] px-[20px] relative size-full text-center">
          <p className="font-['Cormorant_Garamond:Regular',sans-serif] relative shrink-0 text-[#003c93] text-[47.78px] w-[800px]">Не просто маршрут, а индивидуальный план</p>
          <p className="font-['Inter:Regular',sans-serif] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-[600px]">Каждая поездка собирается под задачу клиента: время, направление, состав пассажиров, уровень приватности и детали сопровождения.</p>
        </div>
      </div>
    </div>
  );
}

function FeatureCard() {
  return (
    <div className="backdrop-blur-[15px] bg-[rgba(255,255,255,0.7)] content-stretch flex flex-col gap-[16px] items-center justify-center max-w-[600px] py-[24px] relative rounded-[8px] shrink-0 w-full" data-name="feature_card">
      <p className="font-['Cormorant_Garamond:Regular',sans-serif] max-w-[600px] relative shrink-0 text-[#003c93] text-[33.18px] w-full">Точка отправления</p>
      <p className="font-['Inter:Regular',sans-serif] max-w-[600px] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Подбор самолёта под маршрут, количество пассажиров и уровень комфорта.</p>
    </div>
  );
}

function FeatureCard1() {
  return (
    <div className="backdrop-blur-[15px] bg-[rgba(255,255,255,0.7)] content-stretch flex flex-col gap-[16px] items-center justify-center max-w-[600px] py-[24px] relative rounded-[8px] shrink-0 w-full" data-name="feature_card">
      <p className="font-['Cormorant_Garamond:Regular',sans-serif] max-w-[600px] relative shrink-0 text-[#003c93] text-[33.18px] w-full">Подбор борта</p>
      <p className="font-['Inter:Regular',sans-serif] max-w-[600px] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Команда выбирает подходящий самолёт под маршрут и состав пассажиров.</p>
    </div>
  );
}

function FeatureCard2() {
  return (
    <div className="backdrop-blur-[15px] bg-[rgba(255,255,255,0.7)] content-stretch flex flex-col gap-[16px] items-center justify-center max-w-[600px] py-[24px] relative rounded-[8px] shrink-0 w-full" data-name="feature_card">
      <p className="font-['Cormorant_Garamond:Regular',sans-serif] max-w-[600px] relative shrink-0 text-[#003c93] text-[33.18px] w-full">Земля до вылета</p>
      <p className="font-['Inter:Regular',sans-serif] max-w-[600px] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Организуются трансфер, терминал, багаж и сопровождение.</p>
    </div>
  );
}

function FeatureCard3() {
  return (
    <div className="backdrop-blur-[15px] bg-[rgba(255,255,255,0.7)] content-stretch flex flex-col gap-[16px] items-center justify-center max-w-[600px] py-[24px] relative rounded-[8px] shrink-0 w-full" data-name="feature_card">
      <p className="font-['Cormorant_Garamond:Regular',sans-serif] max-w-[600px] relative shrink-0 text-[#003c93] text-[33.18px] w-full">Срочный вылет</p>
      <p className="font-['Inter:Regular',sans-serif] max-w-[600px] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Решение для ситуаций, где время становится главным условием.</p>
    </div>
  );
}

function FeatureCard4() {
  return (
    <div className="backdrop-blur-[15px] bg-[rgba(255,255,255,0.7)] content-stretch flex flex-col gap-[16px] items-center justify-center max-w-[600px] py-[24px] relative rounded-[8px] shrink-0 w-full" data-name="feature_card">
      <p className="font-['Cormorant_Garamond:Regular',sans-serif] max-w-[600px] relative shrink-0 text-[#003c93] text-[33.18px] w-full">Перелёт</p>
      <p className="font-['Inter:Regular',sans-serif] max-w-[600px] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">На борту учитываются комфорт, питание, приватность и рабочее пространство.</p>
    </div>
  );
}

function FeatureCard5() {
  return (
    <div className="backdrop-blur-[15px] bg-[rgba(255,255,255,0.7)] content-stretch flex flex-col gap-[16px] items-center justify-center max-w-[600px] py-[24px] relative rounded-[8px] shrink-0 w-full" data-name="feature_card">
      <p className="font-['Cormorant_Garamond:Regular',sans-serif] max-w-[600px] relative shrink-0 text-[#003c93] text-[33.18px] w-full">После посадки</p>
      <p className="font-['Inter:Regular',sans-serif] max-w-[600px] not-italic relative shrink-0 text-[#000b1c] text-[16px] w-full">Трансфер, встреча, дальнейший маршрут или размещение.</p>
    </div>
  );
}

function Route() {
  return (
    <div className="relative shrink-0 w-full" data-name="route1">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgRoute1} />
        <div className="absolute bg-[rgba(255,255,255,0.47)] inset-0" />
      </div>
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[60px] items-center justify-center leading-[normal] px-[10px] py-[100px] relative size-full text-center">
          <FeatureCard />
          <FeatureCard1 />
          <FeatureCard2 />
          <FeatureCard3 />
          <FeatureCard4 />
          <FeatureCard5 />
        </div>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 text-center w-full" data-name="wrapper">
      <p className="font-['Cormorant_Garamond:Regular',sans-serif] max-w-[600px] relative shrink-0 text-[#4c96ff] text-[33.18px] w-full">Сценарии маршрутов</p>
      <p className="font-['Inter:Regular',sans-serif] max-w-[600px] not-italic relative shrink-0 text-[16px] text-white w-full">Подбор самолёта под маршрут, количество пассажиров и уровень комфорта.</p>
    </div>
  );
}

function FeatureCard6() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[370px]" data-name="feature_card">
      <p className="relative shrink-0 w-[177px]">Москва → Дубай</p>
      <p className="relative shrink-0 w-[177px]">Деловая поездка с точным временем прибытия.</p>
    </div>
  );
}

function FeatureCard7() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[370px]" data-name="feature_card">
      <p className="relative shrink-0 w-[177px]">Париж → Женева</p>
      <p className="relative shrink-0 w-[177px]">Короткий маршрут для закрытой встречи.</p>
    </div>
  );
}

function FeatureCard8() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[370px]" data-name="feature_card">
      <p className="relative shrink-0 w-[177px]">Милан → Лондон</p>
      <p className="relative shrink-0 w-[177px]">Путешествие с сопровождением и трансфером.</p>
    </div>
  );
}

function FeatureCard9() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[370px]" data-name="feature_card">
      <p className="relative shrink-0 w-[177px]">Нью-Йорк → Майами</p>
      <p className="relative shrink-0 w-[177px]">Личный перелёт с акцентом на комфорт и приватность.</p>
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] gap-[16px] items-center justify-center not-italic relative shrink-0 text-[16px] text-white w-full" data-name="wrapper">
      <FeatureCard6 />
      <FeatureCard7 />
      <FeatureCard8 />
      <FeatureCard9 />
    </div>
  );
}

function Route1() {
  return (
    <div className="relative shrink-0 w-full" data-name="route2">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgRoute2} />
        <div className="absolute bg-[rgba(0,0,0,0.8)] inset-0" />
      </div>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[40px] items-start leading-[normal] px-[10px] py-[120px] relative size-full">
          <Wrapper />
          <Wrapper1 />
        </div>
      </div>
    </div>
  );
}

function Route2() {
  return (
    <div className="bg-[#003c93] relative shrink-0 w-full" data-name="route3">
      <div className="content-stretch flex flex-col items-start px-[10px] py-[40px] relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#b5d4ff] text-[39.81px] text-center w-full">Маршрут — это не линия на карте, а сценарий движения.</p>
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

export default function RouteDesktop() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Route-Desktop">
      <Hero />
      <Route />
      <Route1 />
      <Route2 />
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