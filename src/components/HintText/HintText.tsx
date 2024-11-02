interface HintTextProps {
  children: React.ReactNode;
}

export function HintText({ children }: HintTextProps) {
  return (
    <div className="w-full h-full flex justify-center items-center font-dot text-3xl text-beige text-opacity-60">
      <span className="px-12">{children}</span>
    </div>
  );
}
