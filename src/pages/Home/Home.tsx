import { HomeButton } from "../../components/HomeButton/HomeButton";

export function Home() {
  const backgroundStyle = {
    backgroundImage: "url('/src/statics/home_background.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    // 最外层
    <div
      style={backgroundStyle}
      className="w-screen h-screen bg-black relative"
    >
      <div className="flex w-full justify-center absolute top-[62vh]">
        <HomeButton />
      </div>
    </div>
  );
}
