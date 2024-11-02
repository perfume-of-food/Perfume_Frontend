import { HomeButton } from "../../components/HomeButton/HomeButton";

export function Cover() {
  return (
    <div className="w-screen h-screen bg-black relative bg-[url('/src/statics/home_background.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex w-full justify-center absolute top-[62vh]">
        <HomeButton />
      </div>
    </div>
  );
}
