import { HomeButton } from "../../components/HomeButton/HomeButton";

export function Home(){
    const backgroundStyle = {
        backgroundImage: "url('/src/statics/home_background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    };
    return(
        //最外层
             <div
            className="w-screen h-screen bg-black"
            style={backgroundStyle}
             >
                <div className="flex justify-center items-center pt-[843px] pb-[300px] space-y-[50px]">
                        <HomeButton />
                </div>
            </div>

    );
}