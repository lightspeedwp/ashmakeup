import svgPaths from "./svg-08na6shk6p";
import clsx from "clsx";
import imgButton from "figma:asset/50476acb79925d767cba015762227ce8eab370ba.png";
import imgButton1 from "figma:asset/5c21985d90e8378567256308ba8e92db4fb0470e.png";
import imgButton2 from "figma:asset/59c6601f89a162071b206e7ef534838e90ec2c82.png";
type AboutPageBackgroundImageProps = {
  additionalClassNames?: string;
};

function AboutPageBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<AboutPageBackgroundImageProps>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#374151] text-[20.25px] top-0 w-[1070px]">{children}</p>
    </div>
  );
}
type BackgroundImage4Props = {
  additionalClassNames?: string;
};

function BackgroundImage4({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage4Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage3Props = {
  additionalClassNames?: string;
};

function BackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage3Props>) {
  return <BackgroundImage4 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</BackgroundImage4>;
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  return <BackgroundImage4 additionalClassNames={clsx("basis-0 grow min-h-px min-w-px relative shrink-0", additionalClassNames)}>{children}</BackgroundImage4>;
}

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[27px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImageProps>) {
  return (
    <div className={clsx("bg-[rgba(255,255,255,0.7)] relative rounded-[11.25px] shrink-0 w-full", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[11.25px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImageProps = {
  text: string;
};

function ContainerBackgroundImage({ children, text }: React.PropsWithChildren<ContainerBackgroundImageProps>) {
  return (
    <BackgroundImage additionalClassNames="h-[136.547px]">
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <div className="h-[134.547px] relative rounded-[11.25px] shrink-0 w-full">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center p-[51.525px] relative size-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4a5565] text-[19.692px] text-nowrap">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
}

function IconBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage1>
      <g id="Icon">{children}</g>
    </BackgroundImage1>
  );
}
type HeadingBackgroundImageAndTextProps = {
  text: string;
};

function HeadingBackgroundImageAndText({ text }: HeadingBackgroundImageAndTextProps) {
  return (
    <div className="h-[58.5px] relative shrink-0 w-full">
      <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[58.5px] left-0 text-[#1f2937] text-[45px] text-nowrap top-[5.5px]">{text}</p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[36px] left-[9px] not-italic text-[#374151] text-[22.5px] text-nowrap top-[5px]">{text}</p>
    </div>
  );
}

export default function MakeupPortfolioAbout() {
  return (
    <div className="bg-white relative size-full" data-name="Makeup Portfolio - About">
      <div className="absolute bg-white content-stretch flex flex-col h-[9348.078px] items-start left-0 top-0 w-[1326px]" data-name="App">
        <div className="bg-[rgba(255,255,255,0.95)] h-[108px] relative shrink-0 w-full" data-name="Header">
          <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between pb-px pt-0 px-[36px] relative size-full">
              <div className="h-[73.922px] relative rounded-[7.65px] shrink-0 w-[211.578px]" data-name="Button">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[4.5px] py-0 relative size-full">
                  <BackgroundImage2 additionalClassNames="h-[64.922px]">
                    <div className="absolute content-stretch flex flex-col h-[64.922px] items-start left-[58.5px] top-0 w-[144.078px]" data-name="Container">
                      <BackgroundImage2 additionalClassNames="w-[144.078px]">
                        <div className="absolute content-stretch flex h-[40px] items-start left-0 top-[-2px] w-[60.031px]" data-name="Text">
                          <p className="font-['Playfair_Display:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#1f2937] text-[36px] text-nowrap">Ash</p>
                        </div>
                        <div className="absolute content-stretch flex h-[40px] items-start left-[60.03px] top-[-2px] w-[84.047px]" data-name="Text">
                          <p className="font-['Playfair_Display:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#e91e63] text-[36px] text-nowrap">Shaw</p>
                        </div>
                      </BackgroundImage2>
                      <BackgroundImage3 additionalClassNames="h-[28.922px] w-[144.078px]">
                        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28.929px] left-0 not-italic text-[#e91e63] text-[20.25px] text-nowrap top-0">makeup artist</p>
                      </BackgroundImage3>
                    </div>
                    <div className="absolute left-0 size-[45px] top-[9.96px]" data-name="Container">
                      <div className="absolute left-[-4.19px] size-[53.373px] top-[-4.19px]" data-name="Icon">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53.3727 53.3727">
                          <g id="Icon">
                            <path d={svgPaths.p2e5caa80} fill="url(#paint0_linear_571_642)" id="Vector" />
                            <path d={svgPaths.p39119200} fill="var(--fill-0, #C0C0C0)" id="Vector_2" />
                            <g id="Group">
                              <path d={svgPaths.p3583a400} fill="var(--fill-0, #E91E63)" id="Vector_3" />
                              <path d={svgPaths.p26bd280} fill="var(--fill-0, #9C27B0)" id="Vector_4" />
                              <path d={svgPaths.p210f07f0} fill="var(--fill-0, #3F51B5)" id="Vector_5" />
                              <path d={svgPaths.pc480900} fill="var(--fill-0, #2196F3)" id="Vector_6" />
                              <path d={svgPaths.p16d17f00} fill="var(--fill-0, #00BCD4)" id="Vector_7" />
                              <path d={svgPaths.p13f62900} fill="var(--fill-0, #4CAF50)" id="Vector_8" />
                            </g>
                            <path d={svgPaths.p39c661c0} fill="var(--fill-0, #E91E63)" id="Vector_9" opacity="0.7" />
                            <path d={svgPaths.pc435f80} fill="var(--fill-0, #E91E63)" id="Vector_10" opacity="0.7" />
                          </g>
                          <defs>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_571_642" x1="33.3579" x2="1000.11" y1="13.3432" y2="194.609">
                              <stop stopColor="#D4AF37" />
                              <stop offset="1" stopColor="#8B4513" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div className="absolute bg-[#fb64b6] left-[-4.5px] opacity-[0.501] rounded-[1.67772e+07px] size-[9px] top-[-4.5px]" data-name="Container" />
                      <div className="absolute bg-[#c27aff] left-[42.75px] opacity-[0.51] rounded-[1.67772e+07px] size-[6.75px] top-[42.75px]" data-name="Container" />
                    </div>
                  </BackgroundImage2>
                </div>
              </div>
              <div className="h-[45px] relative shrink-0 w-[562.82px]" data-name="Menu Bar">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[36px] items-center relative size-full">
                  <div className="h-[45px] relative rounded-[7.65px] shrink-0 w-[77.883px]" data-name="Menu Item">
                    <BackgroundImageAndText text="Home" />
                  </div>
                  <BackgroundImage3 additionalClassNames="h-[45px] rounded-[7.65px] w-[78.664px]">
                    <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[36px] left-[9px] not-italic text-[#f6339a] text-[22.5px] text-nowrap top-[5px]">About</p>
                  </BackgroundImage3>
                  <div className="basis-0 grow h-[45px] min-h-px min-w-px relative rounded-[7.65px] shrink-0" data-name="Menu Item">
                    <BackgroundImageAndText text="Portfolio" />
                  </div>
                  <div className="h-[45px] relative rounded-[7.65px] shrink-0 w-[62.906px]" data-name="Menu Item">
                    <BackgroundImageAndText text="Blog" />
                  </div>
                  <div className="h-[45px] relative rounded-[7.65px] shrink-0 w-[97.656px]" data-name="Menu Item">
                    <BackgroundImageAndText text="Contact" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[9240.078px] items-start relative shrink-0 w-full" data-name="AboutPage" style={{ backgroundImage: "linear-gradient(98.1665deg, rgb(255, 255, 255) 0%, rgb(253, 242, 248) 50%, rgb(250, 245, 255) 100%)" }}>
          <div className="h-[982px] overflow-clip relative shrink-0 w-full" data-name="HeroLayout" style={{ backgroundImage: "linear-gradient(143.477deg, rgb(253, 242, 248) 0%, rgb(250, 245, 255) 50%, rgb(239, 246, 255) 100%)" }}>
            <div className="absolute h-[982px] left-0 top-0 w-[1326px]" data-name="Container">
              <div className="absolute left-[45px] opacity-[0.23] rounded-[1.67772e+07px] size-[144px] top-[45px]" data-name="AboutPage" style={{ backgroundImage: "linear-gradient(135deg, rgb(253, 165, 213) 0%, rgb(194, 122, 255) 100%)" }} />
              <div className="absolute left-[1128px] opacity-[0.475] rounded-[1.67772e+07px] size-[108px] top-[90px]" data-name="AboutPage" style={{ backgroundImage: "linear-gradient(135deg, rgb(142, 197, 255) 0%, rgb(0, 213, 190) 100%)" }} />
              <div className="absolute left-[331.5px] opacity-[0.186] rounded-[1.67772e+07px] size-[180px] top-[730px]" data-name="AboutPage" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 223, 32) 0%, rgb(251, 100, 182) 100%)" }} />
            </div>
            <div className="absolute h-[700px] left-[36px] top-[141px] w-[1254px]" data-name="Container">
              <div className="absolute content-stretch flex flex-col gap-[51.523px] h-[444.477px] items-start left-0 top-[127.76px] w-[591px]" data-name="Container">
                <div className="h-[89.094px] relative shrink-0 w-full" data-name="Heading 1">
                  <p className="absolute bg-clip-text font-['Playfair_Display:Regular',sans-serif] font-normal leading-[89.1px] left-0 text-[81px] text-[rgba(0,0,0,0)] text-nowrap top-[0.5px] tracking-[-1.62px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(246, 51, 154) 0%, rgb(152, 16, 250) 100%)" }}>
                    About Ash Shaw
                  </p>
                </div>
                <div className="h-[135px] relative shrink-0 w-full" data-name="Heading 2">
                  <div className="absolute content-stretch flex h-[59.5px] items-start left-0 top-[4px] w-[140.781px]" data-name="AboutPage">
                    <p className="bg-clip-text font-['Playfair_Display:Bold_Italic',sans-serif] font-bold italic leading-[67.5px] relative shrink-0 text-[54px] text-[rgba(0,0,0,0)] text-nowrap tracking-[-0.54px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(246, 51, 154) 0%, rgb(255, 32, 86) 100%)" }}>
                      colour
                    </p>
                  </div>
                  <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[67.5px] left-[140.78px] text-[#0f172a] text-[54px] top-[6px] tracking-[-0.54px] w-[26px]">,</p>
                  <div className="absolute content-stretch flex h-[59.5px] items-start left-[166.7px] top-[4px] w-[198.5px]" data-name="AboutPage">
                    <p className="bg-clip-text font-['Playfair_Display:Bold_Italic',sans-serif] font-bold italic leading-[67.5px] relative shrink-0 text-[54px] text-[rgba(0,0,0,0)] text-nowrap tracking-[-0.54px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(173, 70, 255) 0%, rgb(142, 81, 255) 100%)" }}>
                      creativity
                    </p>
                  </div>
                  <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[67.5px] left-[377.2px] text-[#0f172a] text-[54px] text-nowrap top-[5px] tracking-[-0.54px]">, and</p>
                  <div className="absolute content-stretch flex h-[59.5px] items-start left-0 top-[71.5px] w-[240.609px]" data-name="AboutPage">
                    <p className="bg-clip-text font-['Playfair_Display:Bold_Italic',sans-serif] font-bold italic leading-[67.5px] relative shrink-0 text-[54px] text-[rgba(0,0,0,0)] text-nowrap tracking-[-0.54px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(43, 127, 255) 0%, rgb(0, 184, 219) 100%)" }}>
                      connection
                    </p>
                  </div>
                  <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[67.5px] left-[267px] text-[#0f172a] text-[54px] top-[71.63px] tracking-[-0.54px] w-[302px]">since 2019.</p>
                </div>
                <div className="h-[65.813px] relative shrink-0 w-full" data-name="Paragraph">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#4b5563] text-[20.25px] top-0 w-[589px]">Passionate about creating bold, expressive makeup that celebrates individuality and artistic expression.</p>
                </div>
              </div>
              <div className="absolute h-[700px] left-[735px] top-0 w-[591px]" data-name="HeroMediaWithLightbox">
                <div className="absolute h-[700px] left-0 rounded-[27px] top-0 w-[591px]" data-name="Container" style={{ backgroundImage: "linear-gradient(130.174deg, rgba(253, 242, 248, 0.2) 0%, rgba(250, 245, 255, 0.15) 50%, rgba(239, 246, 255, 0.2) 100%)" }} />
                <div className="absolute h-[391.895px] left-[249.07px] pointer-events-none rounded-[18px] top-[-15.95px] w-[359.855px]" data-name="Button">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[18px] size-full" src={imgButton} />
                  <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 rounded-[18px] shadow-[0px_0px_0px_4px_rgba(164,244,207,0.5),0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
                </div>
                <div className="absolute h-[380.541px] left-[-30.34px] pointer-events-none rounded-[18px] top-[347.73px] w-[366.677px]" data-name="Button">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[18px] size-full" src={imgButton1} />
                  <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 rounded-[18px] shadow-[0px_0px_0px_4px_rgba(150,247,228,0.5),0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
                </div>
                <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.05)] h-[700px] left-0 rounded-[27px] to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0)] w-[591px]" data-name="Container" />
                <div className="absolute h-[450.249px] left-[24.94px] pointer-events-none rounded-[18px] top-[44.88px] w-[382.116px]" data-name="Button">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[18px] size-full" src={imgButton2} />
                  <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 rounded-[18px] shadow-[0px_0px_0px_4px_rgba(255,214,167,0.5),0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
                </div>
                <div className="absolute left-[510px] opacity-[0.68] rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[27px] top-[72px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(251, 100, 182) 0%, rgb(255, 32, 86) 100%)" }} />
                <div className="absolute left-[555px] opacity-[0.594] rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[18px] top-[574px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(194, 122, 255) 0%, rgb(142, 81, 255) 100%)" }} />
                <div className="absolute left-[4.5px] opacity-[0.503] rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[13.5px] top-[144px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(81, 162, 255) 0%, rgb(0, 184, 219) 100%)" }} />
                <div className="absolute left-[72px] opacity-[0.52] rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[18px] top-[628px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(253, 199, 0) 0%, rgb(255, 105, 0) 100%)" }} />
                <div className="absolute left-[295.5px] opacity-[0.583] rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[11.25px] top-[233.33px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 213, 190) 0%, rgb(0, 201, 80) 100%)" }} />
                <div className="absolute left-[147.75px] opacity-[0.59] rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[13.5px] top-[511.5px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(124, 134, 255) 0%, rgb(152, 16, 250) 100%)" }} />
                <div className="absolute left-[434.25px] opacity-50 rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[9px] top-[466.66px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 99, 126) 0%, rgb(230, 0, 118) 100%)" }} />
              </div>
            </div>
            <div className="absolute bg-[rgba(255,255,255,0.95)] border border-[rgba(252,206,232,0.5)] border-solid left-[591px] rounded-[1.67772e+07px] shadow-[0px_4px_6px_-1px_rgba(252,206,232,0.2),0px_2px_4px_-2px_rgba(252,206,232,0.2)] size-[72px] top-[819.67px]" data-name="ScrollDownArrow">
              <div className="absolute bg-gradient-to-r from-[#fccee8] left-0 opacity-30 rounded-[1.67772e+07px] size-[70px] to-[#bedbff] top-0 via-50% via-[#e9d4ff]" data-name="Container" />
              <div className="absolute bg-[rgba(255,255,255,0.98)] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[70px] top-0" data-name="Container">
                <IconBackgroundImage>
                  <path d={svgPaths.p2c7fca80} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                </IconBackgroundImage>
              </div>
              <div className="absolute bg-gradient-to-r from-[#fda5d5] left-[-35px] opacity-0 rounded-[1.67772e+07px] size-[140px] to-[#8ec5ff] top-[-35px] via-50% via-[#dab2ff]" data-name="Container" />
            </div>
          </div>
          <div className="h-[836.039px] overflow-clip relative shrink-0 w-full" data-name="SectionCard" style={{ backgroundImage: "linear-gradient(147.769deg, rgb(255, 237, 212) 0%, rgb(254, 249, 194) 50%, rgba(0, 0, 0, 0) 100%)" }}>
            <div className="absolute bg-[rgba(255,255,255,0.8)] border-2 border-[#e5e7eb] border-solid h-[548.039px] left-[72px] rounded-[18.45px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[144px] w-[1182px]" data-name="Container">
              <div className="absolute h-[546.039px] left-[-1px] opacity-30 rounded-[18.45px] top-[-1px] w-[1180px]" data-name="Container" />
              <div className="absolute content-stretch flex flex-col gap-[51.523px] h-[472.039px] items-start left-[36px] top-[36px] w-[1106px]" data-name="Container">
                <div className="h-[87.297px] relative shrink-0 w-full" data-name="Heading 2">
                  <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[64.8px] left-0 text-[#9f2d00] text-[54px] text-nowrap top-[5.5px] tracking-[-0.54px]">The Journey Begins</p>
                  <div className="absolute h-[4.5px] left-0 rounded-[1.67772e+07px] top-[82.8px] w-[72px]" data-name="Container" />
                </div>
                <div className="content-stretch flex flex-col h-[131.625px] items-start relative shrink-0 w-full" data-name="Container">
                  <div className="h-[65.813px] relative shrink-0 w-full" data-name="AboutPage">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#374151] text-[20.25px] top-0 w-[1100px]">In 2019, I discovered something magical about makeup that went beyond just applying products. It was about transformation, expression, and the incredible moment when someone sees themselves in a completely new light.</p>
                  </div>
                  <div className="h-[65.813px] relative shrink-0 w-full" data-name="AboutPage">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#374151] text-[20.25px] top-0 w-[1059px]">What started as curiosity became obsession, then passion, then purpose. Each face became a canvas, each event a new adventure, each technique a step forward in my artistic evolution.</p>
                  </div>
                </div>
                <div className="h-[201.594px] relative shrink-0 w-full" data-name="Quote">
                  <p className="absolute font-['Playfair_Display:Medium_Italic',sans-serif] font-medium italic leading-[57.6px] left-[552.7px] text-[#bb4d00] text-[36px] text-center text-nowrap top-[75.5px] translate-x-[-50%]">Every brush stroke tells a story.</p>
                  <div className="absolute h-[4.5px] left-[535px] rounded-[1.67772e+07px] top-[18px] w-[36px]" data-name="Container" />
                  <div className="absolute h-[4.5px] left-[535px] rounded-[1.67772e+07px] top-[179.09px] w-[36px]" data-name="Container" />
                </div>
              </div>
            </div>
            <div className="absolute left-[331.5px] opacity-[0.275] rounded-[1.67772e+07px] size-[144px] top-[278.67px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 184, 106) 0%, rgb(255, 185, 0) 100%)" }} />
          </div>
          <div className="h-[817.367px] overflow-clip relative shrink-0 w-full" data-name="SectionCard" style={{ backgroundImage: "linear-gradient(148.35deg, rgb(220, 252, 231) 0%, rgb(208, 250, 229) 50%, rgb(203, 251, 241) 100%)" }}>
            <div className="absolute bg-[rgba(255,255,255,0.8)] border-2 border-[#e5e7eb] border-solid h-[529.367px] left-[72px] rounded-[18.45px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[144px] w-[1182px]" data-name="Container">
              <div className="absolute h-[527.367px] left-[-1px] opacity-30 rounded-[18.45px] top-[-1px] w-[1180px]" data-name="Container" />
              <div className="absolute content-stretch flex flex-col gap-[51.523px] h-[453.367px] items-start left-[36px] top-[36px] w-[1106px]" data-name="Container">
                <div className="h-[87.297px] relative shrink-0 w-full" data-name="Heading 2">
                  <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[64.8px] left-0 text-[#006045] text-[54px] text-nowrap top-[5.5px] tracking-[-0.54px]">Festival Magic</p>
                  <div className="absolute bg-gradient-to-r from-[#00c950] h-[4.5px] left-0 rounded-[1.67772e+07px] to-[#00bba7] top-[82.8px] w-[72px]" data-name="Container" />
                </div>
                <div className="content-stretch flex flex-col h-[314.547px] items-start relative shrink-0 w-full" data-name="Container">
                  <div className="h-[65.813px] relative shrink-0 w-full" data-name="AboutPage">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#374151] text-[20.25px] top-0 w-[1085px]">{`Festivals became my laboratory. There's something about the outdoor energy, the music, the freedom that brings out the most creative sides of people. Festival makeup isn't just about looking good – it's about embodying the spirit of celebration.`}</p>
                  </div>
                  <div className="h-[65.813px] relative shrink-0 w-full" data-name="AboutPage">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#374151] text-[20.25px] top-0 w-[1104px]">From intimate gatherings to massive multi-day events, I learned to read the crowd, adapt to the environment, and create looks that would photograph beautifully under any lighting condition while staying vibrant through hours of dancing.</p>
                  </div>
                  <div className="h-[110.922px] relative shrink-0 w-full" data-name="AboutPage">
                    <div className="absolute content-stretch flex flex-col gap-[18px] h-[110.922px] items-start left-0 top-0 w-[527.234px]" data-name="Container">
                      <div className="h-[58.5px] relative shrink-0 w-full" data-name="Heading 3">
                        <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[58.5px] left-[263.88px] text-[#1f2937] text-[45px] text-center text-nowrap top-[5.5px] translate-x-[-50%]">Outdoor Durability</p>
                      </div>
                      <div className="h-[34.422px] relative shrink-0 w-full" data-name="Paragraph">
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[34.425px] left-[263.44px] not-italic text-[#4b5563] text-[20.25px] text-center text-nowrap top-0 translate-x-[-50%]">Weather-resistant techniques that last all day</p>
                      </div>
                    </div>
                    <div className="absolute content-stretch flex flex-col gap-[18px] h-[110.922px] items-start left-[578.76px] top-0 w-[527.242px]" data-name="Container">
                      <div className="h-[58.5px] relative shrink-0 w-full" data-name="Heading 3">
                        <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[58.5px] left-[264.11px] text-[#1f2937] text-[45px] text-center text-nowrap top-[5.5px] translate-x-[-50%]">Bold Expression</p>
                      </div>
                      <div className="h-[34.422px] relative shrink-0 w-full" data-name="Paragraph">
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[34.425px] left-[263.74px] not-italic text-[#4b5563] text-[20.25px] text-center text-nowrap top-0 translate-x-[-50%]">Vibrant looks that match the festival energy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-[331.5px] opacity-[0.275] rounded-[1.67772e+07px] size-[144px] top-[272.45px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(123, 241, 168) 0%, rgb(0, 213, 190) 100%)" }} />
          </div>
          <div className="h-[868.945px] overflow-clip relative shrink-0 w-full" data-name="SectionCard">
            <div className="absolute bg-[rgba(255,255,255,0.8)] border-2 border-[#e5e7eb] border-solid h-[580.945px] left-[72px] rounded-[18.45px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[144px] w-[1182px]" data-name="Container">
              <div className="absolute bg-gradient-to-r from-[#e9d4ff] h-[578.945px] left-[-1px] opacity-30 rounded-[18.45px] to-[rgba(0,0,0,0)] top-[-1px] w-[1180px]" data-name="Container" />
              <div className="absolute content-stretch flex flex-col gap-[51.523px] h-[504.945px] items-start left-[36px] top-[36px] w-[1106px]" data-name="Container">
                <div className="h-[87.297px] relative shrink-0 w-full" data-name="Heading 2">
                  <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[64.8px] left-0 text-[#59168b] text-[54px] text-nowrap top-[5.5px] tracking-[-0.54px]">Berlin Nightclub Scene</p>
                  <div className="absolute bg-gradient-to-r from-[#ad46ff] h-[4.5px] left-0 rounded-[1.67772e+07px] to-[#f6339a] top-[82.8px] w-[72px]" data-name="Container" />
                </div>
                <div className="content-stretch flex flex-col h-[164.531px] items-start relative shrink-0 w-full" data-name="Container">
                  <div className="h-[65.813px] relative shrink-0 w-full" data-name="AboutPage">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#374151] text-[20.25px] top-0 w-[1048px]">{`Berlin's underground scene opened my eyes to a completely different side of makeup artistry. Here, creativity knows no bounds, and self-expression is not just encouraged – it's expected.`}</p>
                  </div>
                  <AboutPageBackgroundImage additionalClassNames="h-[98.719px]">{`Working in Berlin's clubs taught me about dramatic lighting, bold contrasts, and the art of creating looks that transform completely under different lighting conditions. The city's creative energy pushed my boundaries and expanded my artistic vocabulary.`}</AboutPageBackgroundImage>
                </div>
                <div className="h-[201.594px] relative shrink-0 w-full" data-name="Quote">
                  <p className="absolute font-['Playfair_Display:Medium_Italic',sans-serif] font-medium italic leading-[57.6px] left-[553.73px] text-[#7008e7] text-[36px] text-center text-nowrap top-[75.5px] translate-x-[-50%]">In Berlin, makeup becomes pure art.</p>
                  <div className="absolute bg-gradient-to-r from-[#ad46ff] h-[4.5px] left-[535px] rounded-[1.67772e+07px] to-[#f6339a] top-[18px] w-[36px]" data-name="Container" />
                  <div className="absolute bg-gradient-to-r from-[#ad46ff] h-[4.5px] left-[535px] rounded-[1.67772e+07px] to-[#f6339a] top-[179.09px] w-[36px]" data-name="Container" />
                </div>
              </div>
            </div>
            <div className="absolute left-[331.5px] opacity-[0.275] rounded-[1.67772e+07px] size-[144px] top-[289.64px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(194, 122, 255) 0%, rgb(246, 51, 154) 100%)" }} />
          </div>
          <div className="h-[955.18px] overflow-clip relative shrink-0 w-full" data-name="SectionCard" style={{ backgroundImage: "linear-gradient(144.233deg, rgb(206, 250, 254) 0%, rgba(0, 0, 0, 0) 100%)" }}>
            <div className="absolute bg-[rgba(255,255,255,0.8)] border-2 border-[#e5e7eb] border-solid h-[667.18px] left-[72px] rounded-[18.45px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[144px] w-[1182px]" data-name="Container">
              <div className="absolute h-[665.18px] left-[-1px] opacity-30 rounded-[18.45px] top-[-1px] w-[1180px]" data-name="Container" />
              <div className="absolute content-stretch flex flex-col gap-[51.523px] h-[591.18px] items-start left-[36px] top-[36px] w-[1106px]" data-name="Container">
                <div className="h-[87.297px] relative shrink-0 w-full" data-name="Heading 2">
                  <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[64.8px] left-0 text-[#312c85] text-[54px] text-nowrap top-[5.5px] tracking-[-0.54px]">UV Explorations</p>
                  <div className="absolute h-[4.5px] left-0 rounded-[1.67772e+07px] top-[82.8px] w-[72px]" data-name="Container" />
                </div>
                <div className="content-stretch flex flex-col h-[452.359px] items-start relative shrink-0 w-full" data-name="Container">
                  <div className="h-[98.719px] relative shrink-0 w-full" data-name="AboutPage">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#374151] text-[20.25px] top-0 w-[1066px]">{`UV reactive makeup opened up an entirely new dimension to my work. The science behind fluorescent pigments, the way colors behave under blacklight, the magical transformation that happens when the lights change – it's like discovering a secret world.`}</p>
                  </div>
                  <div className="h-[98.719px] relative shrink-0 w-full" data-name="AboutPage">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#374151] text-[20.25px] top-0 w-[1087px]">This work requires precision in both application and color theory. Understanding how different pigments react, layering techniques, and creating designs that look stunning in both natural and UV light became a specialty that sets my work apart in the festival circuit.</p>
                  </div>
                  <div className="bg-gradient-to-r from-[#ecfeff] h-[182.922px] relative rounded-[18.45px] shrink-0 to-[#eef2ff] w-full" data-name="AboutPage">
                    <div className="size-full">
                      <div className="content-stretch flex flex-col gap-[18px] items-start pb-0 pt-[36px] px-[36px] relative size-full">
                        <HeadingBackgroundImageAndText text="Technical Mastery" />
                        <div className="h-[34.422px] relative shrink-0 w-full" data-name="Paragraph">
                          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[34.425px] left-0 not-italic text-[#4b5563] text-[20.25px] text-nowrap top-0">Specialized knowledge of UV-reactive pigments, application techniques, and dual-lighting design principles.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-[331.5px] opacity-[0.275] rounded-[1.67772e+07px] size-[144px] top-[318.39px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(83, 234, 253) 0%, rgb(124, 134, 255) 100%)" }} />
          </div>
          <div className="h-[828.844px] overflow-clip relative shrink-0 w-full" data-name="SectionCard" style={{ backgroundImage: "linear-gradient(147.992deg, rgb(255, 228, 230) 0%, rgb(252, 231, 243) 50%, rgb(255, 226, 226) 100%)" }}>
            <div className="absolute bg-[rgba(255,255,255,0.8)] border-2 border-[#e5e7eb] border-solid h-[540.844px] left-[72px] rounded-[18.45px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[144px] w-[1182px]" data-name="Container">
              <div className="absolute h-[538.844px] left-[-1px] opacity-30 rounded-[18.45px] top-[-1px] w-[1180px]" data-name="Container" />
              <div className="absolute content-stretch flex flex-col gap-[51.523px] h-[464.844px] items-start left-[36px] top-[36px] w-[1106px]" data-name="Container">
                <div className="h-[87.297px] relative shrink-0 w-full" data-name="Heading 2">
                  <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[64.8px] left-0 text-[#8b0836] text-[54px] text-nowrap top-[5.5px] tracking-[-0.54px]">Professional Mousse Eyeshadows</p>
                  <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-[4.5px] left-0 rounded-[1.67772e+07px] to-[#fb2c36] top-[82.8px] w-[72px]" data-name="Container" />
                </div>
                <div className="content-stretch flex flex-col h-[326.023px] items-start relative shrink-0 w-full" data-name="Container">
                  <div className="h-[65.813px] relative shrink-0 w-full" data-name="AboutPage">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#374151] text-[20.25px] top-0 w-[1018px]">Working with professional mousse eyeshadows taught me the importance of texture in makeup artistry. The creamy, blendable consistency allows for seamless color transitions and the ability to build intensity gradually.</p>
                  </div>
                  <div className="h-[65.813px] relative shrink-0 w-full" data-name="AboutPage">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#374151] text-[20.25px] top-0 w-[1098px]">This medium became perfect for creating those Instagram-worthy gradient looks that photograph beautifully and provide the color payoff that festival environments demand. The techniques I developed here became fundamental to my signature style.</p>
                  </div>
                  <div className="h-[122.398px] relative shrink-0 w-full" data-name="AboutPage">
                    <div className="absolute h-[122.398px] left-0 top-0 w-[344.664px]" data-name="Container">
                      <div className="absolute left-[145.33px] rounded-[1.67772e+07px] size-[54px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 99, 126) 0%, rgb(251, 44, 54) 100%)" }} />
                      <div className="absolute h-[50.398px] left-0 top-[72px] w-[344.664px]" data-name="Heading 4">
                        <p className="absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[50.4px] left-[172.67px] text-[#1f2937] text-[36px] text-center text-nowrap top-[4px] translate-x-[-50%]">Color Theory</p>
                      </div>
                    </div>
                    <div className="absolute h-[122.398px] left-[380.66px] top-0 w-[344.664px]" data-name="Container">
                      <div className="absolute left-[145.33px] rounded-[1.67772e+07px] size-[54px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(251, 100, 182) 0%, rgb(255, 32, 86) 100%)" }} />
                      <div className="absolute h-[50.398px] left-0 top-[72px] w-[344.664px]" data-name="Heading 4">
                        <p className="absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[50.4px] left-[171.85px] text-[#1f2937] text-[36px] text-center text-nowrap top-[4px] translate-x-[-50%]">Blending Mastery</p>
                      </div>
                    </div>
                    <div className="absolute h-[122.398px] left-[761.33px] top-0 w-[344.664px]" data-name="Container">
                      <div className="absolute left-[145.33px] rounded-[1.67772e+07px] size-[54px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 100, 103) 0%, rgb(255, 32, 86) 100%)" }} />
                      <div className="absolute h-[50.398px] left-0 top-[72px] w-[344.664px]" data-name="Heading 4">
                        <p className="absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[50.4px] left-[171.9px] text-[#1f2937] text-[36px] text-center text-nowrap top-[4px] translate-x-[-50%]">Texture Work</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-[331.5px] opacity-[0.275] rounded-[1.67772e+07px] size-[144px] top-[276.27px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 161, 173) 0%, rgb(255, 100, 103) 100%)" }} />
          </div>
          <div className="h-[797.063px] overflow-clip relative shrink-0 w-full" data-name="SectionCard" style={{ backgroundImage: "linear-gradient(148.99deg, rgba(0, 0, 0, 0) 0%, rgb(208, 250, 229) 50%, rgb(220, 252, 231) 100%)" }}>
            <div className="absolute bg-[rgba(255,255,255,0.8)] border-2 border-[#e5e7eb] border-solid h-[509.063px] left-[72px] rounded-[18.45px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[144px] w-[1182px]" data-name="Container">
              <div className="absolute h-[507.063px] left-[-1px] opacity-30 rounded-[18.45px] top-[-1px] w-[1180px]" data-name="Container" />
              <div className="absolute h-[433.063px] left-[36px] top-[36px] w-[1106px]" data-name="Container">
                <div className="absolute h-[87.297px] left-0 top-0 w-[1106px]" data-name="Heading 2">
                  <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[64.8px] left-0 text-[#0b4f4a] text-[54px] text-nowrap top-[5.5px] tracking-[-0.54px]">Fusion Nails Artistry</p>
                  <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-[4.5px] left-0 rounded-[1.67772e+07px] to-[#00c950] top-[82.8px] w-[72px]" data-name="Container" />
                </div>
                <div className="absolute content-stretch flex flex-col h-[131.625px] items-start left-0 top-[138.82px] w-[1106px]" data-name="Container">
                  <div className="h-[65.813px] relative shrink-0 w-full" data-name="AboutPage">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#374151] text-[20.25px] top-0 w-[1088px]">Expanding into nail art was a natural progression that allowed me to explore color and design on an entirely different canvas. Fusion Nails became an opportunity to push creative boundaries while mastering precision techniques.</p>
                  </div>
                  <AboutPageBackgroundImage additionalClassNames="h-[65.813px]">The detailed work required for nail artistry improved my precision in all areas of my makeup work. Working on such a small scale taught me patience, steady-hand techniques, and the importance of planning complex designs before execution.</AboutPageBackgroundImage>
                </div>
                <div className="absolute h-[90.617px] left-[388.06px] rounded-[11.25px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[342.45px] w-[329.875px]" data-name="AboutPage" style={{ backgroundImage: "linear-gradient(164.64deg, rgb(0, 191, 255) 0%, rgb(32, 201, 151) 50%, rgb(50, 205, 50) 100%)" }}>
                  <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[32.4px] left-[164.52px] not-italic text-[20.25px] text-center text-nowrap text-white top-[29.11px] translate-x-[-50%]">View Fusion Nails Gallery</p>
                </div>
              </div>
            </div>
            <div className="absolute left-[331.5px] opacity-[0.275] rounded-[1.67772e+07px] size-[144px] top-[265.68px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(70, 236, 213) 0%, rgb(5, 223, 114) 100%)" }} />
          </div>
          <div className="h-[836.039px] overflow-clip relative shrink-0 w-full" data-name="SectionCard" style={{ backgroundImage: "linear-gradient(147.769deg, rgba(0, 0, 0, 0) 0%, rgb(243, 232, 255) 50%, rgba(0, 0, 0, 0) 100%)" }}>
            <div className="absolute bg-[rgba(255,255,255,0.8)] border-2 border-[#e5e7eb] border-solid h-[548.039px] left-[72px] rounded-[18.45px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[144px] w-[1182px]" data-name="Container">
              <div className="absolute h-[546.039px] left-[-1px] opacity-30 rounded-[18.45px] top-[-1px] w-[1180px]" data-name="Container" />
              <div className="absolute content-stretch flex flex-col gap-[51.523px] h-[472.039px] items-start left-[36px] top-[36px] w-[1106px]" data-name="Container">
                <div className="h-[87.297px] relative shrink-0 w-full" data-name="Heading 2">
                  <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[64.8px] left-0 text-[#312c85] text-[54px] text-nowrap top-[5.5px] tracking-[-0.54px]">Creative Process</p>
                  <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-[4.5px] left-0 rounded-[1.67772e+07px] to-[#8e51ff] top-[82.8px] w-[72px]" data-name="Container" />
                </div>
                <div className="content-stretch flex flex-col h-[131.625px] items-start relative shrink-0 w-full" data-name="Container">
                  <div className="h-[65.813px] relative shrink-0 w-full" data-name="AboutPage">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#374151] text-[20.25px] top-0 w-[1058px]">{`My creative process always begins with connection. Whether it's understanding a client's vision, feeling the energy of an event, or exploring a new technique, everything starts with that moment of inspiration and understanding.`}</p>
                  </div>
                  <div className="h-[65.813px] relative shrink-0 w-full" data-name="AboutPage">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#374151] text-[20.25px] top-0 w-[1083px]">{`I believe in collaborative creativity – working with each person to enhance their natural beauty while expressing their unique personality. It's not about imposing a style, but about finding the perfect intersection of artistry and individual expression.`}</p>
                  </div>
                </div>
                <div className="h-[201.594px] relative shrink-0 w-full" data-name="Quote">
                  <p className="absolute font-['Playfair_Display:Medium_Italic',sans-serif] font-medium italic leading-[57.6px] left-[553px] text-[#7008e7] text-[36px] text-center text-nowrap top-[75.5px] translate-x-[-50%]">True artistry lies in making others shine.</p>
                  <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-[4.5px] left-[535px] rounded-[1.67772e+07px] to-[#8e51ff] top-[18px] w-[36px]" data-name="Container" />
                  <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-[4.5px] left-[535px] rounded-[1.67772e+07px] to-[#8e51ff] top-[179.09px] w-[36px]" data-name="Container" />
                </div>
              </div>
            </div>
            <div className="absolute left-[331.5px] opacity-[0.275] rounded-[1.67772e+07px] size-[144px] top-[278.67px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(163, 179, 255) 0%, rgb(166, 132, 255) 100%)" }} />
          </div>
          <div className="h-[797.063px] overflow-clip relative shrink-0 w-full" data-name="SectionCard" style={{ backgroundImage: "linear-gradient(148.99deg, rgba(0, 0, 0, 0) 0%, rgb(243, 232, 255) 50%, rgba(0, 0, 0, 0) 100%)" }}>
            <div className="absolute bg-[rgba(255,255,255,0.8)] border-2 border-[#e5e7eb] border-solid h-[509.063px] left-[72px] rounded-[18.45px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[144px] w-[1182px]" data-name="Container">
              <div className="absolute h-[507.063px] left-[-1px] opacity-30 rounded-[18.45px] top-[-1px] w-[1180px]" data-name="Container" />
              <div className="absolute h-[433.063px] left-[36px] top-[36px] w-[1106px]" data-name="Container">
                <div className="absolute h-[87.297px] left-0 top-0 w-[1106px]" data-name="Heading 2">
                  <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[64.8px] left-0 text-[#4d179a] text-[54px] text-nowrap top-[5.5px] tracking-[-0.54px]">Looking Forward</p>
                  <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-[4.5px] left-0 rounded-[1.67772e+07px] to-[#f6339a] top-[82.8px] w-[72px]" data-name="Container" />
                </div>
                <div className="absolute content-stretch flex flex-col h-[131.625px] items-start left-0 top-[138.82px] w-[1106px]" data-name="Container">
                  <div className="h-[65.813px] relative shrink-0 w-full" data-name="AboutPage">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#374151] text-[20.25px] top-0 w-[1080px]">{`The makeup industry continues to evolve, and I'm excited to grow with it. New techniques, sustainable products, innovative applications – there's always something new to explore and master.`}</p>
                  </div>
                  <div className="h-[65.813px] relative shrink-0 w-full" data-name="AboutPage">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#374151] text-[20.25px] top-0 w-[1077px]">My goal is to continue pushing creative boundaries while staying true to what drew me to this art form in the first place: the joy of helping people express their most confident, creative selves.</p>
                  </div>
                </div>
                <div className="absolute h-[90.617px] left-[408.7px] rounded-[11.25px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[342.45px] w-[288.602px]" data-name="AboutPage" style={{ backgroundImage: "linear-gradient(162.568deg, rgb(255, 102, 204) 0%, rgb(153, 51, 255) 50%, rgb(51, 153, 255) 100%)" }}>
                  <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[32.4px] left-[145.02px] not-italic text-[20.25px] text-center text-nowrap text-white top-[29.11px] translate-x-[-50%]">Explore Full Portfolio</p>
                </div>
              </div>
            </div>
            <div className="absolute left-[331.5px] opacity-[0.275] rounded-[1.67772e+07px] size-[144px] top-[265.68px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(196, 180, 255) 0%, rgb(251, 100, 182) 100%)" }} />
          </div>
          <div className="h-[1521.539px] relative shrink-0 w-full" data-name="Footer" style={{ backgroundImage: "linear-gradient(131.072deg, rgb(249, 250, 251) 0%, rgb(250, 245, 255) 50%, rgb(253, 242, 248) 100%)" }}>
            <div className="absolute blur-3xl filter left-[778.5px] opacity-10 rounded-[1.67772e+07px] size-[216px] top-[380.38px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(252, 206, 232) 0%, rgb(218, 178, 255) 100%)" }} />
            <div className="absolute blur-3xl filter left-[331.5px] opacity-10 rounded-[1.67772e+07px] size-[288px] top-[853.16px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(233, 212, 255) 0%, rgb(142, 197, 255) 100%)" }} />
            <div className="absolute h-[1233.539px] left-[36px] top-[144px] w-[1254px]" data-name="Container">
              <div className="absolute content-stretch flex gap-[72px] h-[926.539px] items-start left-0 top-0 w-[1254px]" data-name="Container">
                <div className="basis-0 grow h-[926.539px] min-h-px min-w-px relative shrink-0" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[51.523px] items-start relative size-full">
                    <div className="h-[64.797px] relative shrink-0 w-full" data-name="Heading 2">
                      <p className="absolute bg-clip-text font-['Playfair_Display:Bold',sans-serif] font-bold leading-[64.8px] left-0 text-[#0f172a] text-[54px] text-nowrap top-[5.5px] tracking-[-0.54px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgb(15, 23, 42) 0%, rgb(15, 23, 42) 100%), linear-gradient(165.426deg, rgb(0, 191, 255) 0%, rgb(32, 201, 151) 50%, rgb(50, 205, 50) 100%)" }}>
                        About Ash
                      </p>
                    </div>
                    <div className="h-[98.719px] relative shrink-0 w-full" data-name="Paragraph">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#4b5563] text-[20.25px] top-0 w-[655px]">{`I'm Ash Shaw, a makeup artist who started this journey in 2019. Over the years, my work has grown from festival artistry to UV explorations, mousse palettes, and Fusion Nails.`}</p>
                    </div>
                    <div className="h-[34.422px] relative shrink-0 w-full" data-name="Paragraph">
                      <p className="absolute bg-clip-text font-['Inter:Medium',sans-serif] font-medium leading-[34.425px] left-0 not-italic text-[#0f172a] text-[20.25px] text-nowrap top-0" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgb(15, 23, 42) 0%, rgb(15, 23, 42) 100%), linear-gradient(176.332deg, rgb(255, 102, 204) 0%, rgb(153, 51, 255) 50%, rgb(51, 153, 255) 100%)" }}>
                        Makeup that shines with colour, energy, and connection.
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col gap-[51.523px] h-[175.836px] items-start relative shrink-0 w-full" data-name="Container">
                      <HeadingBackgroundImageAndText text="Get in Touch" />
                      <div className="h-[65.813px] relative shrink-0 w-full" data-name="Paragraph">
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#4b5563] text-[20.25px] top-0 w-[668px]">{`I'd love to hear from you — whether you want to collaborate, connect, or just share some love.`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="basis-0 grow h-[926.539px] min-h-px min-w-px relative shrink-0" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[72px] items-start relative size-full">
                    <div className="h-[58.5px] relative shrink-0 w-full" data-name="Heading 3">
                      <p className="absolute bg-clip-text font-['Playfair_Display:Bold',sans-serif] font-bold leading-[58.5px] left-0 text-[#0f172a] text-[45px] text-nowrap top-[5.5px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgb(15, 23, 42) 0%, rgb(15, 23, 42) 100%), linear-gradient(168.304deg, rgb(255, 215, 0) 0%, rgb(255, 153, 102) 50%, rgb(255, 94, 98) 100%)" }}>
                        Contact Form
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col gap-[22.5px] h-[773.539px] items-start relative shrink-0 w-full" data-name="ContactForm">
                      <ContainerBackgroundImage text="Name *" />
                      <ContainerBackgroundImage text="Email *" />
                      <BackgroundImage additionalClassNames="h-[328.141px]">
                        <div className="content-stretch flex flex-col gap-[8.898px] items-start p-px relative size-full">
                          <div className="h-[292.047px] relative rounded-[11.25px] shrink-0 w-full" data-name="Text Area">
                            <div className="overflow-clip rounded-[inherit] size-full">
                              <div className="content-stretch flex items-start p-[51.525px] relative size-full">
                                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[31.507px] not-italic relative shrink-0 text-[#4a5565] text-[19.692px] text-nowrap">Message *</p>
                              </div>
                            </div>
                          </div>
                          <div className="h-[25.195px] relative shrink-0 w-full" data-name="Container">
                            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.2px] left-[484.42px] not-italic text-[#6a7282] text-[15.75px] text-right top-0 translate-x-[-100%] w-[133px]">0/2000 characters</p>
                          </div>
                        </div>
                      </BackgroundImage>
                      <div className="content-stretch flex gap-[4.5px] h-[104.805px] items-center justify-center relative rounded-[11.25px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button" style={{ backgroundImage: "linear-gradient(169.944deg, rgb(255, 102, 204) 0%, rgb(153, 51, 255) 50%, rgb(51, 153, 255) 100%)" }}>
                        <div className="relative shrink-0 size-[22.5px]" data-name="Icon">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 22.5">
                            <g id="Icon">
                              <path d={svgPaths.p21253820} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
                            </g>
                          </svg>
                        </div>
                        <BackgroundImage3 additionalClassNames="h-[46.586px] w-[190.578px]">
                          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[46.584px] left-[95px] not-italic text-[29.115px] text-center text-nowrap text-white top-0 translate-x-[-50%]">Send Message</p>
                        </BackgroundImage3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gradient-to-r from-[#fccee8] h-px left-0 to-[#bedbff] top-[1070.54px] via-50% via-[#e9d4ff] w-[1254px]" data-name="Container" />
              <div className="absolute content-stretch flex h-[54px] items-center justify-between left-0 top-[1179.54px] w-[1254px]" data-name="Container">
                <BackgroundImage3 additionalClassNames="h-[54px] w-[168.898px]">
                  <div className="absolute content-stretch flex flex-col h-[54px] items-start left-[45px] top-0 w-[123.898px]" data-name="Container">
                    <BackgroundImage3 additionalClassNames="h-[27px] w-[123.898px]">
                      <div className="absolute content-stretch flex h-[30px] items-start left-0 top-[-1.5px] w-[45.023px]" data-name="Text">
                        <p className="font-['Playfair_Display:Bold',sans-serif] font-bold leading-[27px] relative shrink-0 text-[#1f2937] text-[27px] text-nowrap">Ash</p>
                      </div>
                      <div className="absolute content-stretch flex h-[30px] items-start left-[45.02px] top-[-1.5px] w-[63.031px]" data-name="Text">
                        <p className="font-['Playfair_Display:Bold',sans-serif] font-bold leading-[27px] relative shrink-0 text-[#e91e63] text-[27px] text-nowrap">Shaw</p>
                      </div>
                    </BackgroundImage3>
                    <BackgroundImage2 additionalClassNames="w-[123.898px]">
                      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[#e91e63] text-[20.25px] text-nowrap top-[0.5px]">makeup artist</p>
                    </BackgroundImage2>
                  </div>
                  <div className="absolute left-0 size-[36px] top-[9px]" data-name="Container">
                    <div className="absolute left-[-3.35px] size-[42.698px] top-[-3.35px]" data-name="Icon">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.6981 42.6981">
                        <g id="Icon">
                          <path d={svgPaths.pb7c9e72} fill="url(#paint0_linear_571_601)" id="Vector" />
                          <path d={svgPaths.p1fb6f8f0} fill="var(--fill-0, #C0C0C0)" id="Vector_2" />
                          <g id="Group">
                            <path d={svgPaths.p3eb06a00} fill="var(--fill-0, #E91E63)" id="Vector_3" />
                            <path d={svgPaths.p3366cf00} fill="var(--fill-0, #9C27B0)" id="Vector_4" />
                            <path d={svgPaths.p25871c00} fill="var(--fill-0, #3F51B5)" id="Vector_5" />
                            <path d={svgPaths.p3164f000} fill="var(--fill-0, #2196F3)" id="Vector_6" />
                            <path d={svgPaths.p340a200} fill="var(--fill-0, #00BCD4)" id="Vector_7" />
                            <path d={svgPaths.p16e59300} fill="var(--fill-0, #4CAF50)" id="Vector_8" />
                          </g>
                          <path d={svgPaths.p354ae280} fill="var(--fill-0, #E91E63)" id="Vector_9" opacity="0.7" />
                          <path d={svgPaths.p21011700} fill="var(--fill-0, #E91E63)" id="Vector_10" opacity="0.7" />
                        </g>
                        <defs>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_571_601" x1="26.6863" x2="800.087" y1="10.6745" y2="155.687">
                            <stop stopColor="#D4AF37" />
                            <stop offset="1" stopColor="#8B4513" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="absolute bg-[#fb64b6] left-[-4.5px] opacity-[0.59] rounded-[1.67772e+07px] size-[9px] top-[-4.5px]" data-name="Container" />
                    <div className="absolute bg-[#c27aff] left-[33.75px] opacity-[0.547] rounded-[1.67772e+07px] size-[6.75px] top-[33.75px]" data-name="Container" />
                  </div>
                </BackgroundImage3>
                <div className="h-[54px] relative shrink-0 w-[324px]" data-name="SocialLinks">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[36px] items-start relative size-full">
                    <div className="relative rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[54px]" data-name="Link" style={{ backgroundImage: "linear-gradient(135deg, rgb(225, 48, 108) 0%, rgb(253, 29, 29) 50%, rgb(252, 175, 69) 100%)" }}>
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                        <IconBackgroundImage>
                          <path d={svgPaths.p9715b00} fill="var(--fill-0, white)" id="Vector" />
                          <path d={svgPaths.p27964300} fill="var(--fill-0, white)" id="Vector_2" />
                          <path d={svgPaths.pb129dc0} fill="var(--fill-0, white)" id="Vector_3" />
                        </IconBackgroundImage>
                      </div>
                    </div>
                    <div className="relative rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[54px]" data-name="Link" style={{ backgroundImage: "linear-gradient(135deg, rgb(24, 119, 242) 0%, rgb(66, 165, 245) 100%)" }}>
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                        <IconBackgroundImage>
                          <path d={svgPaths.p3843bbf0} fill="var(--fill-0, white)" id="Vector" />
                        </IconBackgroundImage>
                      </div>
                    </div>
                    <div className="relative rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[54px]" data-name="Link" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 119, 181) 0%, rgb(0, 160, 220) 100%)" }}>
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                        <BackgroundImage1>
                          <g clipPath="url(#clip0_571_633)" id="Icon">
                            <path d={svgPaths.p1fdc6000} fill="var(--fill-0, white)" id="Vector" />
                          </g>
                          <defs>
                            <clipPath id="clip0_571_633">
                              <rect fill="white" height="27" width="27" />
                            </clipPath>
                          </defs>
                        </BackgroundImage1>
                      </div>
                    </div>
                    <div className="basis-0 grow h-[54px] min-h-px min-w-px relative rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0" data-name="Link" style={{ backgroundImage: "linear-gradient(135deg, rgb(16, 185, 129) 0%, rgb(5, 150, 105) 100%)" }}>
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                        <IconBackgroundImage>
                          <path d={svgPaths.pb204200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                        </IconBackgroundImage>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}