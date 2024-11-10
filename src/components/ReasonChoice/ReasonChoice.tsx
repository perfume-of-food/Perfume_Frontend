export const ReasonChoice = () => {
  return (
    <div className="flex flex-col justify-around h-full py-10 px-6">
      <span className="flex justify-between font-dot text-[1.75rem] leading-[1.5] text-beige">
        <span className="">・この料理の匂いが自分の感情にぴったりだから</span>
        <span className="pl-[4rem] pr-[4rem] whitespace-nowrap">--------</span>
        <span> 1</span>
      </span>
      <span className="flex justify-between font-dot text-[1.75rem] leading-[1.5] text-beige">
        <span>・匂いが好きだから</span>
        <span className="pl-16">--------</span>
        <span> 2</span>
      </span>
      <span className="flex justify-between font-dot text-[1.75rem] leading-[1.5] text-beige">
        <span>・その他（自由入力）</span>
        <span className="pl-10">--------</span>
        <span> 1</span>
      </span>
    </div>
  );
};
