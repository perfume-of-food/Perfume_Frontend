import owl_owner from "@/assets/menuhero/owl_owner.png";
import sad_mood from "@/assets/menuhero/sad_mood.png";
import happy_mood from "@/assets/menuhero/happy_mood.png";
import angry_mood from "@/assets/menuhero/angry_mood.png";
import plane from "@/assets/menuhero/plane.png";
import receipt from "@/assets/menuhero/receipt.png";
import { useGameManagerStore } from "@/stores/useGameManagerStore";
import { Step } from "@/types/Step";

export function MenuHero() {
  const { step } = useGameManagerStore();

  let heroImage = owl_owner;
  if (step === Step.MOOD_INTRO_HAPPY) {
    heroImage = happy_mood;
  } else if (step === Step.MOOD_INTRO_ANGRY) {
    heroImage = angry_mood;
  } else if (step === Step.MOOD_INTRO_SAD) {
    heroImage = sad_mood;
  }

  return (
    <>
      {/* 一条竖线 */}
      <div className="row-[1_/_37] col-[8_/_20] border-r-[1px] border-orange"></div>
      {/* 文字上下的横线 */}
      <div className="row-[37_/_45] col-[8_/_38] border-t-[1px] border-b-[1px]  border-orange">
        <div
          className="font-playfair text-6xl leading-[0.9] text-orange [-webkit-text-stroke:_2.5px_#FFFFFF;] 
[paint-order:stroke_fill] -translate-y-[0.8rem]"
        >
          kokoro
          <br />
          noajiwai
        </div>
      </div>
      <div className="row-[8_/_51] col-[38_/_97] z-10">
        <img src={heroImage} alt="owl" />
      </div>
      <div className="row-[8_/_35] col-[11_/_48] relative">
        <img src={plane} alt="plane" />
        <img
          src={receipt}
          alt="receipt"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </>
  );
}
