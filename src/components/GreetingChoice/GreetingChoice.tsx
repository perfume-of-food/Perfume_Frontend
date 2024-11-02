export const GreetingChoice = () => {
  return (
    <div className="flex flex-col justify-around h-full py-10">
      <span className="flex justify-around font-dot text-[1.75rem] leading-[1.5] text-beige">
        <span>・「…ここは？」</span>
        <span className="pl-10">--------</span>
        <span> 1</span>
      </span>
      <span className="flex justify-around font-dot text-[1.75rem] leading-[1.5] text-beige">
        <span>・「…きみは？」</span>
        <span className="pl-10">--------</span>
        <span> 2</span>
      </span>
    </div>
  );
};
