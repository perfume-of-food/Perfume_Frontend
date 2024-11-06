import { SettingButton } from "@/components/SettingButton/SettingButton";

export function Survey() {
  return (
    <div className="w-screen h-screen bg-black relative bg-[url('/end_background.webp')] bg-cover bg-center bg-no-repeat">
      <div className="flex w-full justify-center items-center pt-[71vh] ">
        <div className="flex w-[250px] h-[90px]">
          <SettingButton />
        </div>
      </div>
    </div>
  );
}
