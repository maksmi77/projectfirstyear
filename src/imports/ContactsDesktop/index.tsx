import svgPaths from "./svg-4zbbcoccyl";
import imgHero from "./5fe97668ef8e3bae313364bd98c3765fd0ab085a.png";

function Hero() {
  return (
    <div className="h-[600px] relative shrink-0 w-full" data-name="hero">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute bg-[rgba(0,0,0,0.6)] inset-0" />
      </div>
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[20px] items-center justify-center leading-[normal] pb-[40px] pt-[70px] px-[20px] relative size-full text-center whitespace-nowrap">
          <p className="font-['Cormorant_Garamond:Regular',sans-serif] max-w-[600px] relative shrink-0 text-[#b5d4ff] text-[47.78px]">Связаться с Ciel Privé</p>
          <p className="font-['Inter:Regular',sans-serif] max-w-[600px] not-italic relative shrink-0 text-[16px] text-white">Опишите маршрут или оставьте контакт, чтобы обсудить подходящий формат поездки.</p>
        </div>
      </div>
    </div>
  );
}

function TablerCalendar() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="tabler:calendar">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tabler:calendar">
          <path d={svgPaths.p2dc26000} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function InputWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[400px]" data-name="input_wrapper">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-full">Комментарий</p>
      <div className="bg-white h-[80px] relative rounded-[8px] shrink-0 w-full" data-name="Text field МНОГОСТРОК">
        <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[10px] items-start justify-center pl-[17px] pr-[10px] py-[10px] relative size-full">
            <div className="flex-[1_0_0] h-[19px] min-w-px relative" data-name="Текст инпута">
              <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-0 leading-[normal] not-italic opacity-30 text-[16px] text-black whitespace-nowrap">Дополнительная информация</p>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="content-start flex flex-wrap gap-[40px] items-start justify-center relative shrink-0 w-full" data-name="wrapper">
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[400px]" data-name="input_wrapper">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-full">ФИО</p>
        <div className="bg-white h-[39px] relative rounded-[8px] shrink-0 w-full" data-name="Text field 1строка">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[10px] items-center pl-[17px] pr-[10px] py-[10px] relative size-full">
              <div className="h-[19px] relative shrink-0 w-[78px]" data-name="Текст инпута">
                <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-0 leading-[normal] not-italic opacity-30 text-[16px] text-black whitespace-nowrap">Иван Иванов Иванович</p>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[400px]" data-name="input_wrapper">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-full">Телефон</p>
        <div className="bg-white h-[39px] relative rounded-[8px] shrink-0 w-full" data-name="Text field 1строка">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[10px] items-center pl-[17px] pr-[10px] py-[10px] relative size-full">
              <div className="flex-[1_0_0] h-[19px] min-w-px relative" data-name="Текст инпута">
                <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-0 leading-[normal] not-italic opacity-30 text-[16px] text-black whitespace-pre">{`+7 _ _ _  _ _ _-_ _-_ _`}</p>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[400px]" data-name="input_wrapper">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-full">Email</p>
        <div className="bg-white h-[39px] relative rounded-[8px] shrink-0 w-full" data-name="Text field 1строка">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[10px] items-center pl-[17px] pr-[10px] py-[10px] relative size-full">
              <div className="h-[19px] relative shrink-0 w-[78px]" data-name="Текст инпута">
                <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-0 leading-[normal] not-italic opacity-30 text-[16px] text-black whitespace-nowrap">yourname@company.com</p>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[400px]" data-name="input_wrapper">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-full">Аэропорт вылета</p>
        <div className="bg-white h-[39px] relative rounded-[8px] shrink-0 w-full" data-name="Text field 1строка">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[10px] items-center pl-[17px] pr-[10px] py-[10px] relative size-full">
              <div className="h-[19px] relative shrink-0 w-[78px]" data-name="Текст инпута">
                <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-0 leading-[normal] not-italic opacity-30 text-[16px] text-black whitespace-nowrap">SVO</p>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[400px]" data-name="input_wrapper">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-full">Аэропорт прилета</p>
        <div className="bg-white h-[39px] relative rounded-[8px] shrink-0 w-full" data-name="Text field 1строка">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[10px] items-center pl-[17px] pr-[10px] py-[10px] relative size-full">
              <div className="h-[19px] relative shrink-0 w-[78px]" data-name="Текст инпута">
                <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-0 leading-[normal] not-italic opacity-30 text-[16px] text-black whitespace-nowrap">DME</p>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[400px]" data-name="input_wrapper">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-full">Дата</p>
        <div className="bg-white h-[39px] relative rounded-[8px] shrink-0 w-full" data-name="Text field 1строка">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-between pl-[17px] pr-[10px] py-[10px] relative size-full">
              <div className="h-[19px] relative shrink-0 w-[78px]" data-name="Текст инпута">
                <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[0_-13.33%_0_0] leading-[normal] not-italic opacity-30 text-[16px] text-black whitespace-nowrap">DD.MM.YYYY</p>
              </div>
              <TablerCalendar />
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[400px]" data-name="input_wrapper">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-full">Количество пассажиров</p>
        <div className="bg-white h-[39px] relative rounded-[8px] shrink-0 w-full" data-name="Text field 1строка">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[10px] items-center pl-[17px] pr-[10px] py-[10px] relative size-full">
              <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Текст инпута">
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">- 1 +</p>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
      </div>
      <InputWrapper />
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[45px] items-center justify-center relative shrink-0 w-[856px]" data-name="wrapper">
      <Wrapper1 />
      <div className="bg-[#003c93] content-stretch flex items-start justify-center p-[10px] relative rounded-[4px] shrink-0 w-[350px]" data-name="cta_btn">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Отправить форму</p>
      </div>
    </div>
  );
}

function Contacts() {
  return (
    <div className="bg-[#e3e3e3] relative shrink-0 w-full" data-name="contacts1">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[40px] relative size-full">
          <Wrapper />
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

export default function ContactsDesktop() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Contacts-Desktop">
      <Hero />
      <Contacts />
      <div className="[word-break:break-word] bg-[#e3e3e3] content-center flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-center justify-center leading-[normal] not-italic py-[40px] relative shrink-0 text-[#000b1c] text-[16px] text-center w-full whitespace-nowrap" data-name="footer">
        <p className="relative shrink-0">©copyright2026</p>
        <p className="relative shrink-0">договор</p>
        <p className="relative shrink-0">контакты</p>
        <p className="relative shrink-0">+7 (495) 123-45-67</p>
      </div>
      <div className="absolute backdrop-blur-[10px] bg-[rgba(181,212,255,0.4)] content-stretch flex items-center justify-between left-[86px] overflow-clip pl-[22px] pr-[10px] py-[10px] right-[86px] rounded-[12px] top-[10px]" data-name="Header">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">Ciel Privé</p>
        <Frame />
        <div className="bg-[#003c93] content-stretch flex items-center justify-center px-[16px] py-[10px] relative rounded-[2px] shrink-0" data-name="Btn">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">Оставить запрос</p>
        </div>
      </div>
    </div>
  );
}