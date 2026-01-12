import svgPaths from "./svg-godtranuka";
import clsx from "clsx";
import imgContainer from "figma:asset/7d24210757b1648e6cf71467bdefb992b07a1208.png";
import imgContainer1 from "figma:asset/3883b564fbf249b3ebecaa749dfcc792a509fc24.png";
import imgContainer2 from "figma:asset/157cbbfbc5d6660c1119b4c4568d5e688a8e0318.png";

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[22.5px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 22.5">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type ContainerBackgroundImageAndText1Props = {
  text: string;
};

function ContainerBackgroundImageAndText1({ text }: ContainerBackgroundImageAndText1Props) {
  return (
    <div style={{ backgroundImage: "linear-gradient(163.342deg, rgb(255, 102, 204) 0%, rgb(153, 51, 255) 50%, rgb(51, 153, 255) 100%)" }} className="absolute h-[34.5px] left-[180.84px] rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[13.5px] w-[115.305px]">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[13.5px] not-italic text-[15.75px] text-nowrap text-white top-[6.75px]">{text}</p>
    </div>
  );
}

function IconBackgroundImage1() {
  return (
    <BackgroundImage>
      <path d={svgPaths.p1ed06500} id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
    </BackgroundImage>
  );
}

function IconBackgroundImage() {
  return (
    <BackgroundImage>
      <path d={svgPaths.p553b4d0} id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
    </BackgroundImage>
  );
}
type ContainerBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ContainerBackgroundImageAndText({ text, additionalClassNames = "" }: ContainerBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute bg-[rgba(0,0,0,0.6)] h-[30px] left-[13.5px] opacity-0 rounded-[1.67772e+07px] top-[13.5px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[9px] not-italic text-[15.75px] text-white top-[4.5px] w-[22px]">{text}</p>
    </div>
  );
}

export default function FusionNailsSection() {
  return (
    <div className="relative size-full" data-name="FusionNailsSection" style={{ backgroundImage: "linear-gradient(133.515deg, rgb(255, 228, 230) 0%, rgb(252, 231, 243) 50%, rgb(255, 237, 212) 100%)" }}>
      <div className="absolute left-[331.5px] opacity-[0.198] rounded-[1.67772e+07px] size-[180px] top-[90px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 161, 173) 0%, rgb(251, 100, 182) 100%)" }} />
      <div className="absolute left-[850.5px] opacity-[0.459] rounded-[1.67772e+07px] size-[144px] top-[1162.59px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 184, 106) 0%, rgb(255, 100, 103) 100%)" }} />
      <div className="absolute h-[1108.594px] left-[36px] top-[144px] w-[1254px]" data-name="Container">
        <div className="absolute h-[202.609px] left-0 top-0 w-[1254px]" data-name="Container">
          <div className="absolute h-[64.797px] left-0 top-0 w-[1254px]" data-name="Heading 2">
            <p className="absolute bg-clip-text font-['Playfair_Display:Bold',sans-serif] font-bold leading-[64.8px] left-[626.95px] text-[#0f172a] text-[54px] text-center text-nowrap top-[5.5px] tracking-[-0.54px] translate-x-[-50%]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgb(15, 23, 42) 0%, rgb(15, 23, 42) 100%), linear-gradient(167.853deg, rgb(255, 215, 0) 0%, rgb(255, 153, 102) 50%, rgb(255, 94, 98) 100%)" }}>
              Fusion Nails
            </p>
          </div>
          <div className="absolute h-[65.813px] left-[195px] top-[136.8px] w-[864px]" data-name="Paragraph">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-[432.34px] not-italic text-[#4b5563] text-[20.25px] text-center top-0 translate-x-[-50%] w-[830px]">Creative nail artistry combining colors, stickers, and topcoats for unique, eye-catching designs that complement my makeup work.</p>
          </div>
        </div>
        <div className="absolute h-[635.367px] left-0 top-[310.61px] w-[1254px]" data-name="Container">
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col gap-[36px] h-[635.367px] items-start left-0 pb-px pt-[37px] px-[37px] rounded-[18.45px] top-0 w-[383.648px]" data-name="SliderCard">
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[18.45px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
            <div className="h-[309.648px] overflow-clip relative rounded-[11.25px] shadow-[0px_0px_0px_4px_rgba(255,255,255,0.5),0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[11.25px] size-full" src={imgContainer} />
              <div className="absolute h-0 left-0 top-0 w-[309.648px]" data-name="Container" />
              <ContainerBackgroundImageAndText text="1/4" additionalClassNames="w-[39.758px]" />
              <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[13.5px] opacity-0 rounded-[1.67772e+07px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[36px] top-[136.82px]" data-name="Button">
                <IconBackgroundImage />
              </div>
              <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[260.15px] opacity-0 rounded-[1.67772e+07px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[36px] top-[136.82px]" data-name="Button">
                <IconBackgroundImage1 />
              </div>
              <div className="absolute content-stretch flex gap-[4.5px] h-[12px] items-start left-[124.07px] top-[284.15px] w-[61.5px]" data-name="Container">
                <div className="bg-[rgba(255,255,255,0.8)] rounded-[1.67772e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 size-[12px]" data-name="Button" />
                {[...Array(2).keys()].map((_, i) => (
                  <div className="bg-[rgba(255,255,255,0.4)] rounded-[1.67772e+07px] shrink-0 size-[12px]" data-name="Button" />
                ))}
                <div className="basis-0 bg-[rgba(255,255,255,0.4)] grow h-[12px] min-h-px min-w-px rounded-[1.67772e+07px] shrink-0" data-name="Button" />
              </div>
              <ContainerBackgroundImageAndText1 text="Fusion Nails" />
            </div>
            <div className="content-stretch flex flex-col h-[215.719px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="h-[117px] relative shrink-0 w-full" data-name="Heading 3">
                <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[58.5px] left-0 text-[#1f2937] text-[45px] top-[5.5px] w-[157px]">Cosmic Chrome</p>
              </div>
              <div className="h-[98.719px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#6a7282] text-[20.25px] top-0 w-[257px]">Holographic galaxy nails with iridescent chrome finish and cosmic shimmer</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col gap-[36px] h-[635.367px] items-start left-[435.17px] pb-px pt-[37px] px-[37px] rounded-[18.45px] top-0 w-[383.648px]" data-name="SliderCard">
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[18.45px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
            <div className="h-[309.648px] overflow-clip relative rounded-[11.25px] shadow-[0px_0px_0px_4px_rgba(255,255,255,0.5),0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[11.25px] size-full" src={imgContainer1} />
              <div className="absolute h-0 left-0 top-0 w-[309.648px]" data-name="Container" />
              <ContainerBackgroundImageAndText text="1/3" additionalClassNames="w-[39.75px]" />
              <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[13.5px] opacity-0 rounded-[1.67772e+07px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[36px] top-[136.82px]" data-name="Button">
                <IconBackgroundImage />
              </div>
              <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[260.15px] opacity-0 rounded-[1.67772e+07px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[36px] top-[136.82px]" data-name="Button">
                <IconBackgroundImage1 />
              </div>
              <div className="absolute content-stretch flex gap-[4.5px] h-[12px] items-start left-[132.32px] top-[284.15px] w-[45px]" data-name="Container">
                <div className="bg-[rgba(255,255,255,0.8)] rounded-[1.67772e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 size-[12px]" data-name="Button" />
                <div className="bg-[rgba(255,255,255,0.4)] rounded-[1.67772e+07px] shrink-0 size-[12px]" data-name="Button" />
                <div className="basis-0 bg-[rgba(255,255,255,0.4)] grow h-[12px] min-h-px min-w-px rounded-[1.67772e+07px] shrink-0" data-name="Button" />
              </div>
              <ContainerBackgroundImageAndText1 text="Fusion Nails" />
            </div>
            <div className="content-stretch flex flex-col h-[215.719px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="h-[117px] relative shrink-0 w-full" data-name="Heading 3">
                <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[58.5px] left-0 text-[#1f2937] text-[45px] top-[5.5px] w-[173px]">Rainbow Fusion</p>
              </div>
              <div className="h-[98.719px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#6a7282] text-[20.25px] top-0 w-[291px]">Vibrant rainbow gradient design with metallic accents and festival energy</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col gap-[36px] h-[635.367px] items-start left-[870.34px] pb-px pt-[37px] px-[37px] rounded-[18.45px] top-0 w-[383.648px]" data-name="SliderCard">
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[18.45px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
            <div className="h-[309.648px] overflow-clip relative rounded-[11.25px] shadow-[0px_0px_0px_4px_rgba(255,255,255,0.5),0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[11.25px] size-full" src={imgContainer2} />
              <div className="absolute h-0 left-0 top-0 w-[309.648px]" data-name="Container" />
              <ContainerBackgroundImageAndText text="1/3" additionalClassNames="w-[39.75px]" />
              <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[13.5px] opacity-0 rounded-[1.67772e+07px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[36px] top-[136.82px]" data-name="Button">
                <IconBackgroundImage />
              </div>
              <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[260.15px] opacity-0 rounded-[1.67772e+07px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[36px] top-[136.82px]" data-name="Button">
                <IconBackgroundImage1 />
              </div>
              <div className="absolute content-stretch flex gap-[4.5px] h-[12px] items-start left-[132.32px] top-[284.15px] w-[45px]" data-name="Container">
                <div className="bg-[rgba(255,255,255,0.8)] rounded-[1.67772e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 size-[12px]" data-name="Button" />
                <div className="bg-[rgba(255,255,255,0.4)] rounded-[1.67772e+07px] shrink-0 size-[12px]" data-name="Button" />
                <div className="basis-0 bg-[rgba(255,255,255,0.4)] grow h-[12px] min-h-px min-w-px rounded-[1.67772e+07px] shrink-0" data-name="Button" />
              </div>
              <ContainerBackgroundImageAndText1 text="Fusion Nails" />
            </div>
            <div className="content-stretch flex flex-col h-[157.219px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="h-[58.5px] relative shrink-0 w-full" data-name="Heading 3">
                <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[58.5px] left-0 text-[#1f2937] text-[45px] text-nowrap top-[5.5px]">Festival Glow</p>
              </div>
              <div className="h-[98.719px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#6a7282] text-[20.25px] top-0 w-[259px]">UV-reactive neon nails with festival-inspired patterns and holographic details</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[90.617px] left-[507.83px] rounded-[11.25px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[1017.98px] w-[238.344px]" data-name="Button" style={{ backgroundImage: "linear-gradient(159.183deg, rgb(255, 215, 0) 0%, rgb(255, 153, 102) 50%, rgb(255, 94, 98) 100%)" }}>
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[32.4px] left-[120.02px] not-italic text-[20.25px] text-center text-nowrap text-white top-[29.11px] translate-x-[-50%]">See More Nails</p>
        </div>
      </div>
    </div>
  );
}