import { HomeButton } from "../../components/HomeButton/HomeButton";

export function Home() {
    return (
        <div className="w-screen min-h-screen bg-black bg-cover bg-center bg-no-repeat" 
             style={{ backgroundImage: "url('/src/statics/home_background.png')" ,
             height:"100svh"
             }}
             >
            <div className="flex justify-center items-center min-h-screen">
                <div className="flex justify-center items-center space-y-12 mt-auto mb-[300px]">
                    <HomeButton />
                </div>
            </div>
        </div>
    );
}
