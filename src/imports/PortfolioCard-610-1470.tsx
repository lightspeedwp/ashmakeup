import svgPaths from "./svg-7gekkznd0a";
import imgContainer from "figma:asset/b057e762132da4e361c3c307f114ea49bbdbd2ef.png";

function IconBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[27px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

export default function PortfolioCard() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] relative rounded-[18.45px] size-full" data-name="PortfolioCard">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start overflow-clip p-px relative size-full">
          <div className="h-[599.234px] overflow-clip relative shrink-0 w-full" data-name="Container">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgContainer} />
            <div className="absolute h-0 left-0 top-0 w-[599.234px]" data-name="Container" />
            <div className="absolute bg-[rgba(0,0,0,0.6)] h-[30px] left-[13.5px] opacity-0 rounded-[1.67772e+07px] top-[13.5px] w-[39.75px]" data-name="Container">
              <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[9px] not-italic text-[15.75px] text-white top-[4.5px] w-[22px]">1/3</p>
            </div>
            <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex items-center justify-center left-[13.5px] opacity-0 rounded-[1.67772e+07px] size-[45px] top-[277.12px]" data-name="Button">
              <IconBackgroundImage>
                <path d={svgPaths.p2d293b80} id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
              </IconBackgroundImage>
            </div>
            <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex items-center justify-center left-[540.73px] opacity-0 rounded-[1.67772e+07px] size-[45px] top-[277.12px]" data-name="Button">
              <IconBackgroundImage>
                <path d={svgPaths.pd45d180} id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
              </IconBackgroundImage>
            </div>
            <div className="absolute content-stretch flex gap-[5.95px] h-[16px] items-start left-[268.87px] pb-0 pl-[-0.8px] pr-0 pt-[-0.8px] top-[569.73px] w-[61.5px]" data-name="Container">
              <div className="bg-white rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[17.6px]" data-name="Button" />
              {[...Array(2).keys()].map((_, i) => (
                <div className="bg-[rgba(255,255,255,0.6)] rounded-[1.67772e+07px] shrink-0 size-[16px]" data-name="Button" />
              ))}
            </div>
            <div className="absolute h-[43.195px] left-[465.93px] rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[9px] w-[124.305px]" data-name="Text" style={{ backgroundImage: "linear-gradient(160.838deg, rgb(255, 102, 204) 0%, rgb(153, 51, 255) 50%, rgb(51, 153, 255) 100%)" }}>
              <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[25.2px] left-[18px] not-italic text-[15.75px] text-nowrap text-white top-[9px]">Fusion Nails</p>
            </div>
          </div>
          <div className="h-[320.156px] relative shrink-0 w-full" data-name="Container">
            <div className="size-full">
              <div className="content-stretch flex flex-col gap-[18px] items-start pb-0 pt-[36px] px-[36px] relative size-full">
                <div className="h-[58.5px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
                  <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[58.5px] left-0 text-[#1f2937] text-[45px] text-nowrap top-[5.5px]">Galaxy Fusion</p>
                </div>
                <div className="h-[34.422px] relative shrink-0 w-full" data-name="Paragraph">
                  <p className="absolute bg-clip-text font-['Inter:Medium',sans-serif] font-medium leading-[34.425px] left-0 not-italic text-[#0f172a] text-[20.25px] text-nowrap top-0" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgb(15, 23, 42) 0%, rgb(15, 23, 42) 100%), linear-gradient(172.124deg, rgb(0, 191, 255) 0%, rgb(32, 201, 151) 50%, rgb(50, 205, 50) 100%)" }}>
                    Cosmic Nail Art Collection
                  </p>
                </div>
                <div className="h-[65.813px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#374151] text-[20.25px] top-0 w-[482px]">Iridescent cosmic nail designs featuring galaxy effects, holographic finishes, and stellar color combinations.</p>
                </div>
                <div className="content-stretch flex flex-col h-[35.422px] items-start pb-0 pt-px px-0 relative shrink-0 w-full" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
                  <div className="h-[34.422px] relative shrink-0 w-full" data-name="Paragraph">
                    <div className="absolute left-0 rounded-[1.67772e+07px] size-[9px] top-[12.71px]" data-name="Text" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 102, 204) 0%, rgb(153, 51, 255) 50%, rgb(51, 153, 255) 100%)" }} />
                    <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[34.425px] left-[27px] not-italic text-[#6a7282] text-[20.25px] top-0 w-[281px]">3 images • Click to view gallery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[18.45px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}