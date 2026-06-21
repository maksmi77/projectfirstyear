function Wrapper() {
  return (
    <div className="content-stretch flex flex-col font-['Cormorant_Garamond:Regular',sans-serif] items-center py-[100px] relative shrink-0 w-full" data-name="wrapper">
      <p className="relative shrink-0 text-[200px] whitespace-nowrap">404</p>
      <p className="min-w-full relative shrink-0 text-[50px] w-[min-content]">Flight not found</p>
    </div>
  );
}

export default function Component404Mobile() {
  return (
    <div className="[word-break:break-word] bg-white content-stretch flex flex-col font-normal items-start leading-[normal] relative size-full text-[#000b1c] text-center" data-name="404-Mobile">
      <Wrapper />
      <div className="bg-white content-center flex flex-wrap font-['Inter:Regular',sans-serif] gap-[10px] items-center justify-center not-italic py-[40px] relative shrink-0 text-[16px] w-full whitespace-nowrap" data-name="footer">
        <p className="relative shrink-0">©copyright2026</p>
        <p className="relative shrink-0">договор</p>
        <p className="relative shrink-0">контакты</p>
        <p className="relative shrink-0">+7 (495) 123-45-67</p>
      </div>
    </div>
  );
}