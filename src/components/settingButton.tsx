export const SettingButton = () => {
  return <button className="btn btn-outline btn-primary"><span className="text-white font-serif">設定</span></button>;
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
