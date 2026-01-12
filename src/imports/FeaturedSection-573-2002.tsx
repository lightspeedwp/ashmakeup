import svgPaths from "./svg-nnru4xa1ut";
import clsx from "clsx";
import imgContainer from "figma:asset/74b708f3be9c02b929444ed900d4217477ac45ad.png";
import imgContainer1 from "figma:asset/6d85f7fae71068f4df2871708416452ac3fc47cf.png";

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[22.5px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 22.5">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type ParagraphBackgroundImageAndTextProps = {
  text: string;
};

function ParagraphBackgroundImageAndText({ text }: ParagraphBackgroundImageAndTextProps) {
  return (
    <div className="h-[34.422px] relative shrink-0 w-full">
      <p className="absolute bg-clip-text font-['Inter:Medium',sans-serif] font-medium leading-[34.425px] left-0 not-italic text-[20.25px] text-[rgba(0,0,0,0)] text-nowrap top-0" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(198, 0, 92) 0%, rgb(152, 16, 250) 100%)" }}>
        {text}
      </p>
    </div>
  );
}
type ContainerBackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function ContainerBackgroundImageAndText1({ text, additionalClassNames = "" }: ContainerBackgroundImageAndText1Props) {
  return (
    <div style={{ backgroundImage: "linear-gradient(166.607deg, rgb(255, 102, 204) 0%, rgb(153, 51, 255) 50%, rgb(51, 153, 255) 100%)" }} className={clsx("absolute h-[34.5px] rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[13.5px] w-[144.898px]", additionalClassNames)}>
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

export default function FeaturedSection() {
  return (
    <div className="relative size-full" data-name="FeaturedSection" style={{ backgroundImage: "linear-gradient(128.332deg, rgb(252, 231, 243) 0%, rgb(243, 232, 255) 50%, rgb(219, 234, 254) 100%)" }}>
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pt-[144px] px-[51.523px] relative size-full">
          <div className="h-[1389.078px] relative shrink-0 w-full" data-name="Container">
            <div className="absolute h-[166.609px] left-0 top-0 w-[1222.953px]" data-name="Container">
              <div className="absolute h-[64.797px] left-0 top-0 w-[1222.953px]" data-name="Heading 2">
                <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[64.8px] left-[611.73px] text-[#1f2937] text-[54px] text-center text-nowrap top-[5.5px] tracking-[-0.54px] translate-x-[-50%]">Featured Work</p>
              </div>
              <div className="absolute h-[65.813px] left-[179.48px] top-[100.8px] w-[864px]" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-[432.2px] not-italic text-[#374151] text-[20.25px] text-center top-0 translate-x-[-50%] w-[856px]">Discover the artistry and passion behind each creation — from vibrant festival face art to stunning UV-reactive designs that bring joy and connection to every celebration.</p>
              </div>
            </div>
            <div className="absolute h-[937.664px] left-0 top-[274.61px] w-[1222.953px]" data-name="Container">
              <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col gap-[36px] h-[937.664px] items-start left-0 pb-px pt-[37px] px-[37px] rounded-[18.45px] top-0 w-[585.711px]" data-name="SliderCard">
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[18.45px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
                <div className="h-[511.711px] overflow-clip relative rounded-[11.25px] shadow-[0px_0px_0px_4px_rgba(255,255,255,0.5),0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[11.25px] size-full" src={imgContainer} />
                  <div className="absolute h-0 left-0 top-0 w-[511.711px]" data-name="Container" />
                  <ContainerBackgroundImageAndText text="1/3" additionalClassNames="w-[39.75px]" />
                  <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[13.5px] opacity-0 rounded-[1.67772e+07px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[36px] top-[237.85px]" data-name="Button">
                    <IconBackgroundImage />
                  </div>
                  <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[462.21px] opacity-0 rounded-[1.67772e+07px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[36px] top-[237.85px]" data-name="Button">
                    <IconBackgroundImage1 />
                  </div>
                  <div className="absolute content-stretch flex gap-[4.5px] h-[12px] items-start left-[233.35px] top-[486.21px] w-[45px]" data-name="Container">
                    <div className="bg-[rgba(255,255,255,0.8)] rounded-[1.67772e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 size-[12px]" data-name="Button" />
                    <div className="bg-[rgba(255,255,255,0.4)] rounded-[1.67772e+07px] shrink-0 size-[12px]" data-name="Button" />
                    <div className="basis-0 bg-[rgba(255,255,255,0.4)] grow h-[12px] min-h-px min-w-px rounded-[1.67772e+07px] shrink-0" data-name="Button" />
                  </div>
                  <ContainerBackgroundImageAndText1 text="Festival Makeup" additionalClassNames="left-[353.31px]" />
                </div>
                <div className="content-stretch flex flex-col h-[315.953px] items-start relative shrink-0 w-full" data-name="Container">
                  <div className="h-[117px] relative shrink-0 w-full" data-name="Heading 3">
                    <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[58.5px] left-0 text-[#1f2937] text-[45px] top-[5.5px] w-[401px]">Nation of Gondwana Festival</p>
                  </div>
                  <ParagraphBackgroundImageAndText text="19 July 2025" />
                  <div className="h-[164.531px] relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#6a7282] text-[20.25px] top-0 w-[504px]">The Irish crew, having some UV fun with beautiful people. Electric festival artistry featuring vibrant rainbow streaks, creative UV designs, and glowing accents that celebrate connection and joy at one of the most vibrant festival experiences.</p>
                  </div>
                </div>
              </div>
              <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col gap-[36px] h-[937.664px] items-start left-[637.23px] pb-px pt-[37px] px-[37px] rounded-[18.45px] top-0 w-[585.719px]" data-name="SliderCard">
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[18.45px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
                <div className="h-[511.719px] overflow-clip relative rounded-[11.25px] shadow-[0px_0px_0px_4px_rgba(255,255,255,0.5),0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[11.25px] size-full" src={imgContainer1} />
                  <div className="absolute h-0 left-0 top-0 w-[511.719px]" data-name="Container" />
                  <ContainerBackgroundImageAndText text="1/2" additionalClassNames="w-[39.359px]" />
                  <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[13.5px] opacity-0 rounded-[1.67772e+07px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[36px] top-[237.86px]" data-name="Button">
                    <IconBackgroundImage />
                  </div>
                  <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[462.22px] opacity-0 rounded-[1.67772e+07px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[36px] top-[237.86px]" data-name="Button">
                    <IconBackgroundImage1 />
                  </div>
                  <div className="absolute content-stretch flex gap-[4.5px] h-[12px] items-start left-[241.61px] top-[486.22px] w-[28.5px]" data-name="Container">
                    <div className="bg-[rgba(255,255,255,0.8)] rounded-[1.67772e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 size-[12px]" data-name="Button" />
                    <div className="basis-0 bg-[rgba(255,255,255,0.4)] grow h-[12px] min-h-px min-w-px rounded-[1.67772e+07px] shrink-0" data-name="Button" />
                  </div>
                  <ContainerBackgroundImageAndText1 text="Festival Makeup" additionalClassNames="left-[353.32px]" />
                </div>
                <div className="content-stretch flex flex-col h-[158.734px] items-start relative shrink-0 w-full" data-name="Container">
                  <div className="h-[58.5px] relative shrink-0 w-full" data-name="Heading 3">
                    <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[58.5px] left-0 text-[#1f2937] text-[45px] text-nowrap top-[5.5px]">Forest Warrior</p>
                  </div>
                  <ParagraphBackgroundImageAndText text="Origin Festival 2024" />
                  <div className="h-[65.813px] relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#6a7282] text-[20.25px] top-0 w-[464px]">Bold red and purple face design with glittery accents creating a fierce yet beautiful festival look.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute h-[104.805px] left-[445.34px] rounded-[11.25px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[1284.27px] w-[332.273px]" data-name="Button" style={{ backgroundImage: "linear-gradient(162.494deg, rgb(255, 102, 204) 0%, rgb(153, 51, 255) 50%, rgb(51, 153, 255) 100%)" }}>
              <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[46.584px] left-[167.02px] not-italic text-[29.115px] text-center text-nowrap text-white top-[29.11px] translate-x-[-50%]">View Full Portfolio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}