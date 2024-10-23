export const SettingButton = () => {
  return (
    <div className="w-full h-full p-[3px] ">
      <button className="btn btn-outline btn-primary w-full h-full p-[3px] bg-orange bg-opacity-20 ">
        <span className="text-white text-3xl font-serif font-medium w-1/3 [text-align-last:justify] [-webkit-text-stroke:_2px_#FEA237;] 
        [paint-order:stroke_fill]">設定</span>
      </button>
    </div>
  );
};

// const style = {

//       .c-button {
//         --shape-offset: 5px;
//         --shape-upper-left: 0  var(--shape-offset),var(--shape-offset) 0;
//         --shape-upper-right:calc(100% - var(--shape-offset)) 0, 100% var(--shape-offset);
//         --shape-lower-right:100% calc(100% - var(--shape-offset) ), calc(100% - var(--shape-offset)) 100%;
//         --shape-lower-left:var(--shape-offset) 100%,0  calc(100% - var(--shape-offset));
//         --octagon:polygon(var(--shape-upper-left), var(--shape-upper-right),var(--shape-lower-right),var(--shape-lower-left));

//         --base-color: #FFFAF7;
//         --main-color: #FF8F43;
//         --inset:3px;
//         position: relative;
//         display: inline-block;
//         padding:1rem;
//         background-color:currentcolor;
//         clip-path:var(--octagon);
//       }

//       .c-button::before {
//         content: "";
//         position: absolute;
//         inset:var(--inset);
//         background-color: var(--base-color);
//         clip-path:var(--octagon);
//         z-index: -1;
//       }
// };
