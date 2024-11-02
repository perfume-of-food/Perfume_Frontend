import owl from "../../assets/owl.png";
import plane from "../../assets/plane.png";
import receipt from "../../assets/receipt.png";

export function MenuHero() {
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
        <img src={owl} alt="owl" />
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
