import { HomeMenuButton } from "@/components/HomeMenuButton/HomeMenuButton";

export function Cover() {
  return (
    <div className="w-screen h-screen bg-black relative bg-[url('/home_background.webp')] bg-cover bg-center bg-no-repeat">
      <div className="flex w-full justify-center absolute top-[62vh]">
        <HomeMenuButton />
      </div>
    </div>
  );
}
