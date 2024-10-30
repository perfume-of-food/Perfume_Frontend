import "./HomeButton.css";
import { useNavigate } from "react-router-dom";

export const HomeButton = () => {
  const navigate = useNavigate();

    return(
     <div className="flex flex-col w-full h-full justify-around items-center p-[2px] relative space-y-[50px]">
       <div className="w-[247px] h-[87px] flex justify-center items-center relative"
            onClick={()=>navigate("/menu")}
            style = {{cursor:"pointer"}}
       >
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 247 87"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.18924 5.38553L9.86979 0.5H237.13L246.5 10.2801V76.7199L241.811 81.6145L237.13 86.5H9.86979L5.18924 81.6145L0.5 76.7199V10.2801L5.18924 5.38553Z"
            fill="#FEA237"
            fill-opacity="0.2"
            stroke="#FEA237"
          />
        </svg>

        <span className="button-text">
          スタート
        </span>

        </div>
        <div className="w-[247px] h-[87px] flex justify-center items-center relative">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 247 87"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.18924 5.38553L9.86979 0.5H237.13L246.5 10.2801V76.7199L241.811 81.6145L237.13 86.5H9.86979L5.18924 81.6145L0.5 76.7199V10.2801L5.18924 5.38553Z"
            fill="#FEA237"
            fill-opacity="0.2"
            stroke="#FEA237"
          />
        </svg>
        <span className="button-text">
          使用説明
        </span>
        </div>
    </div>

    );
};