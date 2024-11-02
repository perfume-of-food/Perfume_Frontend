export const MoodChoice = () => {
  return (
    <div className="flex flex-col justify-around h-full py-10 px-7">
      <span className="flex justify-between font-dot text-[1.75rem] leading-[1.5] text-beige">
        <span>・「はい！」</span>
        <span>
          <span className="pr-16">--------</span>
          <span> 1</span>
        </span>
      </span>
      <span className="flex justify-between font-dot text-[1.75rem] leading-[1.5] text-beige">
        <span>・「違う気がする…」</span>
        <span>
          <span className="pr-16">--------</span>
          <span> 2</span>
        </span>
      </span>
    </div>
  );
};
