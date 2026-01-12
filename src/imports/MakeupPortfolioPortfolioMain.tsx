import svgPaths from "./svg-iohghcgmku";
import clsx from "clsx";
import imgContainer from "figma:asset/74b708f3be9c02b929444ed900d4217477ac45ad.png";
import imgContainer1 from "figma:asset/6d85f7fae71068f4df2871708416452ac3fc47cf.png";
import imgContainer2 from "figma:asset/577de72252dace65ebc760f4d7e19c944b97acf1.png";
import imgContainer3 from "figma:asset/bf7ce684910b9711ce1124f435016ee3adc48aaa.png";
import imgContainer4 from "figma:asset/b057e762132da4e361c3c307f114ea49bbdbd2ef.png";
import imgContainer5 from "figma:asset/eede57bc434ae465c0915cc3294383fb58258c0d.png";
type BackgroundImage7Props = {
  additionalClassNames?: string;
};

function BackgroundImage7({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage7Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[18.45px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}
type BackgroundImage6Props = {
  additionalClassNames?: string;
};

function BackgroundImage6({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage6Props>) {
  return <BackgroundImage7 additionalClassNames={clsx("absolute bg-[rgba(255,255,255,0.8)] left-0 rounded-[18.45px] w-[601.234px]", additionalClassNames)}>{children}</BackgroundImage7>;
}
type PortfolioCardBackgroundImageProps = {
  additionalClassNames?: string;
};

function PortfolioCardBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<PortfolioCardBackgroundImageProps>) {
  return <BackgroundImage7 additionalClassNames={clsx("absolute bg-[rgba(255,255,255,0.8)] left-[652.76px] rounded-[18.45px] w-[601.242px]", additionalClassNames)}>{children}</BackgroundImage7>;
}
type BackgroundImage5Props = {
  additionalClassNames?: string;
};

function BackgroundImage5({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage5Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage4Props = {
  additionalClassNames?: string;
};

function BackgroundImage4({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage4Props>) {
  return <BackgroundImage5 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</BackgroundImage5>;
}
type BackgroundImage3Props = {
  additionalClassNames?: string;
};

function BackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage3Props>) {
  return <BackgroundImage5 additionalClassNames={clsx("basis-0 grow min-h-px min-w-px relative shrink-0", additionalClassNames)}>{children}</BackgroundImage5>;
}

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[27px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div className={clsx("bg-[rgba(255,255,255,0.7)] relative rounded-[11.25px] shrink-0 w-full", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[11.25px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImage1Props = {
  text: string;
};

function ContainerBackgroundImage1({ children, text }: React.PropsWithChildren<ContainerBackgroundImage1Props>) {
  return (
    <BackgroundImage1 additionalClassNames="h-[136.547px]">
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <div className="h-[134.547px] relative rounded-[11.25px] shrink-0 w-full">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center p-[51.525px] relative size-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4a5565] text-[19.692px] text-nowrap">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage1>
  );
}
type IconBackgroundImage2Props = {
  additionalClassNames?: string;
};

function IconBackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<IconBackgroundImage2Props>) {
  return (
    <div className={clsx("absolute size-[18px] top-[12.5px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type ContainerBackgroundImageProps = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImageProps>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[18px] items-start pb-0 pt-[36px] px-[36px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage2>
      <g id="Icon">{children}</g>
    </BackgroundImage2>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText({ text, additionalClassNames = "" }: BackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute h-[25.711px] top-[8.65px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[25.714px] left-0 not-italic text-[#374151] text-[18px] text-nowrap top-px">{text}</p>
    </div>
  );
}
type HeadingBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function HeadingBackgroundImageAndText({ text, additionalClassNames = "" }: HeadingBackgroundImageAndTextProps) {
  return (
    <div className={clsx("h-[58.5px] relative shrink-0 w-full", additionalClassNames)}>
      <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[58.5px] left-0 text-[#1f2937] text-[45px] text-nowrap top-[5.5px]">{text}</p>
    </div>
  );
}
type TextBackgroundImageAndTextProps = {
  text: string;
};

function TextBackgroundImageAndText({ text }: TextBackgroundImageAndTextProps) {
  return (
    <div style={{ backgroundImage: "linear-gradient(164.322deg, rgb(0, 191, 255) 0%, rgb(32, 201, 151) 50%, rgb(50, 205, 50) 100%)" }} className="absolute h-[43.195px] left-[436.34px] rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[9px] w-[153.898px]">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[25.2px] left-[18px] not-italic text-[15.75px] text-nowrap text-white top-[9px]">{text}</p>
    </div>
  );
}

function IconBackgroundImage1() {
  return (
    <BackgroundImage>
      <path d={svgPaths.pd45d180} id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
    </BackgroundImage>
  );
}

function IconBackgroundImage() {
  return (
    <BackgroundImage>
      <path d={svgPaths.p2d293b80} id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
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
type ButtonBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ButtonBackgroundImageAndText({ text, additionalClassNames = "" }: ButtonBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute bg-[#f3f4f6] border border-[#e5e7eb] border-solid h-[45.195px] rounded-[1.67772e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[25.2px] left-[18px] not-italic text-[#374151] text-[15.75px] text-nowrap top-[9px]">{text}</p>
    </div>
  );
}
type MenuItemBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function MenuItemBackgroundImageAndText({ text, additionalClassNames = "" }: MenuItemBackgroundImageAndTextProps) {
  return (
    <BackgroundImage5 additionalClassNames={clsx("h-[45px] relative rounded-[7.65px] shrink-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[36px] left-[9px] not-italic text-[#374151] text-[22.5px] text-nowrap top-[5px]">{text}</p>
    </BackgroundImage5>
  );
}

export default function MakeupPortfolioPortfolioMain() {
  return (
    <div className="bg-white relative size-full" data-name="Makeup Portfolio - Portfolio Main">
      <div className="absolute bg-white content-stretch flex flex-col h-[5428.906px] items-start left-0 top-0 w-[1326px]" data-name="App">
        <div className="bg-[rgba(255,255,255,0.95)] h-[108px] relative shrink-0 w-full" data-name="Header">
          <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between pb-px pt-0 px-[36px] relative size-full">
              <div className="h-[73.922px] relative rounded-[7.65px] shrink-0 w-[211.578px]" data-name="Button">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[4.5px] py-0 relative size-full">
                  <BackgroundImage3 additionalClassNames="h-[64.922px]">
                    <div className="absolute content-stretch flex flex-col h-[64.922px] items-start left-[58.5px] top-0 w-[144.078px]" data-name="Container">
                      <BackgroundImage3 additionalClassNames="w-[144.078px]">
                        <div className="absolute content-stretch flex h-[40px] items-start left-0 top-[-2px] w-[60.031px]" data-name="Text">
                          <p className="font-['Playfair_Display:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#1f2937] text-[36px] text-nowrap">Ash</p>
                        </div>
                        <div className="absolute content-stretch flex h-[40px] items-start left-[60.03px] top-[-2px] w-[84.047px]" data-name="Text">
                          <p className="font-['Playfair_Display:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#e91e63] text-[36px] text-nowrap">Shaw</p>
                        </div>
                      </BackgroundImage3>
                      <BackgroundImage4 additionalClassNames="h-[28.922px] w-[144.078px]">
                        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28.929px] left-0 not-italic text-[#e91e63] text-[20.25px] text-nowrap top-0">makeup artist</p>
                      </BackgroundImage4>
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
                      <div className="absolute bg-[#fb64b6] left-[-4.5px] opacity-[0.59] rounded-[1.67772e+07px] size-[9px] top-[-4.5px]" data-name="Container" />
                      <div className="absolute bg-[#c27aff] left-[42.75px] opacity-[0.599] rounded-[1.67772e+07px] size-[6.75px] top-[42.75px]" data-name="Container" />
                    </div>
                  </BackgroundImage3>
                </div>
              </div>
              <div className="h-[45px] relative shrink-0 w-[562.82px]" data-name="Menu Bar">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[36px] items-center relative size-full">
                  <MenuItemBackgroundImageAndText text="Home" additionalClassNames="w-[77.883px]" />
                  <MenuItemBackgroundImageAndText text="About" additionalClassNames="w-[78.664px]" />
                  <BackgroundImage3 additionalClassNames="h-[45px] rounded-[7.65px]">
                    <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[36px] left-[9px] not-italic text-[#f6339a] text-[22.5px] text-nowrap top-[5px]">Portfolio</p>
                  </BackgroundImage3>
                  <MenuItemBackgroundImageAndText text="Blog" additionalClassNames="w-[62.906px]" />
                  <MenuItemBackgroundImageAndText text="Contact" additionalClassNames="w-[97.656px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[5320.906px] items-start relative shrink-0 w-full" data-name="PortfolioMainPage">
          <div className="content-stretch flex flex-col h-[434.586px] items-start pb-0 pt-[108px] px-0 relative shrink-0 w-full" data-name="Section" style={{ backgroundImage: "linear-gradient(161.854deg, rgb(253, 242, 248) 0%, rgb(250, 245, 255) 50%, rgb(239, 246, 255) 100%)" }}>
            <div className="h-[218.586px] relative shrink-0 w-full" data-name="Container">
              <div className="absolute h-[101.25px] left-[36px] top-0 w-[1254px]" data-name="Heading 1">
                <p className="absolute bg-clip-text font-['Playfair_Display:Bold',sans-serif] font-bold leading-[101.25px] left-[627.16px] text-[#0f172a] text-[81px] text-center text-nowrap top-[9.5px] tracking-[-2.025px] translate-x-[-50%]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgb(15, 23, 42) 0%, rgb(15, 23, 42) 100%), linear-gradient(162.111deg, rgb(255, 102, 204) 0%, rgb(153, 51, 255) 50%, rgb(51, 153, 255) 100%)" }}>
                  Portfolio
                </p>
              </div>
              <div className="absolute h-[65.813px] left-[159px] top-[152.77px] w-[1008px]" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-[504.09px] not-italic text-[#374151] text-[20.25px] text-center top-0 translate-x-[-50%] w-[966px]">Discover the artistry and passion behind each creation — from vibrant festival face art to stunning UV-reactive designs that bring joy and connection to every celebration.</p>
              </div>
            </div>
          </div>
          <div className="bg-white h-[148.242px] relative shrink-0 w-full" data-name="Section">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[36px] items-center justify-center pl-0 pr-[0.008px] py-0 relative size-full">
                <BackgroundImage4 additionalClassNames="h-[36px] w-[117.945px]">
                  <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#1f2937] text-[22.5px] text-nowrap top-[0.5px]">Categories:</p>
                </BackgroundImage4>
                <BackgroundImage4 additionalClassNames="h-[45.195px] w-[809.172px]">
                  <div className="absolute border border-[rgba(255,255,255,0.3)] border-solid h-[45.195px] left-0 rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[98.547px]" data-name="Button" style={{ backgroundImage: "linear-gradient(155.363deg, rgb(255, 102, 204) 0%, rgb(153, 51, 255) 50%, rgb(51, 153, 255) 100%)" }}>
                    <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[25.2px] left-[18px] not-italic text-[15.75px] text-nowrap text-white top-[9px]">All Work</p>
                  </div>
                  <ButtonBackgroundImageAndText text="Festival" additionalClassNames="left-[116.55px] w-[94px]" />
                  <div className="absolute bg-[#f3f4f6] border border-[#e5e7eb] border-solid h-[45.195px] left-[228.55px] rounded-[1.67772e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[151.242px]" data-name="Button">
                    <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[25.2px] left-[18px] not-italic text-[#374151] text-[15.75px] text-nowrap top-[9px]">{`UV & Blacklight`}</p>
                  </div>
                  <ButtonBackgroundImageAndText text="Swiss Festivals" additionalClassNames="left-[397.79px] w-[148.422px]" />
                  <ButtonBackgroundImageAndText text="Fusion Nails" additionalClassNames="left-[564.21px] w-[126.305px]" />
                  <ButtonBackgroundImageAndText text="Thailand" additionalClassNames="left-[708.52px] w-[100.656px]" />
                </BackgroundImage4>
              </div>
            </div>
          </div>
          <div className="h-[3216.539px] relative shrink-0 w-full" data-name="Section">
            <div className="absolute h-[2991.539px] left-[36px] top-0 w-[1254px]" data-name="Container">
              <BackgroundImage6 additionalClassNames="h-[1012.797px] top-0">
                <div className="h-[599.234px] overflow-clip relative shrink-0 w-full" data-name="Container">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgContainer} />
                  <div className="absolute h-0 left-0 top-0 w-[599.234px]" data-name="Container" />
                  <ContainerBackgroundImageAndText text="1/4" additionalClassNames="w-[39.758px]" />
                  <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex items-center justify-center left-[13.5px] opacity-0 rounded-[1.67772e+07px] size-[45px] top-[277.12px]" data-name="Button">
                    <IconBackgroundImage />
                  </div>
                  <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex items-center justify-center left-[540.73px] opacity-0 rounded-[1.67772e+07px] size-[45px] top-[277.12px]" data-name="Button">
                    <IconBackgroundImage1 />
                  </div>
                  <div className="absolute h-[16px] left-[257.49px] top-[569.73px] w-[84.25px]" data-name="Container">
                    <div className="absolute bg-white left-[-0.8px] rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[17.6px] top-[-0.8px]" data-name="Button" />
                    <div className="absolute bg-[rgba(255,255,255,0.6)] left-[22.75px] rounded-[1.67772e+07px] size-[16px] top-0" data-name="Button" />
                    <div className="absolute bg-[rgba(255,255,255,0.6)] left-[45.5px] rounded-[1.67772e+07px] size-[16px] top-0" data-name="Button" />
                    <div className="absolute bg-[rgba(255,255,255,0.6)] left-[68.25px] rounded-[1.67772e+07px] size-[16px] top-0" data-name="Button" />
                  </div>
                  <TextBackgroundImageAndText text="Festival Makeup" />
                </div>
                <ContainerBackgroundImage additionalClassNames="h-[411.563px]">
                  <div className="h-[117px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
                    <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[58.5px] left-0 text-[#1f2937] text-[45px] top-[5.5px] w-[401px]">Nation of Gondwana Festival</p>
                  </div>
                  <div className="h-[34.422px] relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute bg-clip-text font-['Inter:Medium',sans-serif] font-medium leading-[34.425px] left-0 not-italic text-[#0f172a] text-[20.25px] text-nowrap top-0" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgb(15, 23, 42) 0%, rgb(15, 23, 42) 100%), linear-gradient(164.238deg, rgb(0, 191, 255) 0%, rgb(32, 201, 151) 50%, rgb(50, 205, 50) 100%)" }}>
                      19 July 2025
                    </p>
                  </div>
                  <div className="h-[98.719px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#374151] text-[20.25px] top-0 w-[504px]">The Irish crew, having some UV fun with beautiful people. Electric festival artistry featuring vibrant rainbow streaks, creative UV designs, and glowing accents that celebrate connection and joy at one of the most vibrant festival experiences.</p>
                  </div>
                  <div className="content-stretch flex flex-col h-[35.422px] items-start pb-0 pt-px px-0 relative shrink-0 w-full" data-name="Container">
                    <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
                    <div className="h-[34.422px] relative shrink-0 w-full" data-name="Paragraph">
                      <div className="absolute left-0 rounded-[1.67772e+07px] size-[9px] top-[12.71px]" data-name="Text" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 102, 204) 0%, rgb(153, 51, 255) 50%, rgb(51, 153, 255) 100%)" }} />
                      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[34.425px] left-[27px] not-italic text-[#6a7282] text-[20.25px] top-0 w-[282px]">4 images • Click to view gallery</p>
                    </div>
                  </div>
                </ContainerBackgroundImage>
              </BackgroundImage6>
              <PortfolioCardBackgroundImage additionalClassNames="h-[1012.797px] top-0">
                <div className="h-[599.242px] overflow-clip relative shrink-0 w-full" data-name="Container">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgContainer1} />
                  <div className="absolute h-0 left-0 top-0 w-[599.242px]" data-name="Container" />
                  <ContainerBackgroundImageAndText text="1/3" additionalClassNames="w-[39.75px]" />
                  <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex items-center justify-center left-[13.5px] opacity-0 rounded-[1.67772e+07px] size-[45px] top-[277.12px]" data-name="Button">
                    <IconBackgroundImage />
                  </div>
                  <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex items-center justify-center left-[540.74px] opacity-0 rounded-[1.67772e+07px] size-[45px] top-[277.12px]" data-name="Button">
                    <IconBackgroundImage1 />
                  </div>
                  <div className="absolute content-stretch flex gap-[5.95px] h-[16px] items-start left-[268.87px] pb-0 pl-[-0.8px] pr-0 pt-[-0.8px] top-[569.74px] w-[61.5px]" data-name="Container">
                    <div className="bg-white rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[17.6px]" data-name="Button" />
                    {[...Array(2).keys()].map((_, i) => (
                      <div className="bg-[rgba(255,255,255,0.6)] rounded-[1.67772e+07px] shrink-0 size-[16px]" data-name="Button" />
                    ))}
                  </div>
                  <TextBackgroundImageAndText text="Festival Makeup" />
                </div>
                <ContainerBackgroundImage additionalClassNames="h-[320.156px]">
                  <HeadingBackgroundImageAndText text="Forest Warrior" additionalClassNames="overflow-clip" />
                  <div className="h-[34.422px] relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute bg-clip-text font-['Inter:Medium',sans-serif] font-medium leading-[34.425px] left-0 not-italic text-[#0f172a] text-[20.25px] text-nowrap top-0" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgb(15, 23, 42) 0%, rgb(15, 23, 42) 100%), linear-gradient(169.773deg, rgb(0, 191, 255) 0%, rgb(32, 201, 151) 50%, rgb(50, 205, 50) 100%)" }}>
                      Origin Festival 2024
                    </p>
                  </div>
                  <div className="h-[65.813px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#374151] text-[20.25px] top-0 w-[464px]">Bold red and purple face design with glittery accents creating a fierce yet beautiful festival look.</p>
                  </div>
                  <div className="content-stretch flex flex-col h-[35.422px] items-start pb-0 pt-px px-0 relative shrink-0 w-full" data-name="Container">
                    <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
                    <div className="h-[34.422px] relative shrink-0 w-full" data-name="Paragraph">
                      <div className="absolute left-0 rounded-[1.67772e+07px] size-[9px] top-[12.71px]" data-name="Text" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 102, 204) 0%, rgb(153, 51, 255) 50%, rgb(51, 153, 255) 100%)" }} />
                      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[34.425px] left-[27px] not-italic text-[#6a7282] text-[20.25px] top-0 w-[281px]">3 images • Click to view gallery</p>
                    </div>
                  </div>
                </ContainerBackgroundImage>
              </PortfolioCardBackgroundImage>
              <BackgroundImage6 additionalClassNames="h-[954.297px] top-[1064.32px]">
                <div className="h-[599.234px] overflow-clip relative shrink-0 w-full" data-name="Container">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgContainer2} />
                  <div className="absolute h-0 left-0 top-0 w-[599.234px]" data-name="Container" />
                  <ContainerBackgroundImageAndText text="1/3" additionalClassNames="w-[39.75px]" />
                  <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex items-center justify-center left-[13.5px] opacity-0 rounded-[1.67772e+07px] size-[45px] top-[277.12px]" data-name="Button">
                    <IconBackgroundImage />
                  </div>
                  <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex items-center justify-center left-[540.73px] opacity-0 rounded-[1.67772e+07px] size-[45px] top-[277.12px]" data-name="Button">
                    <IconBackgroundImage1 />
                  </div>
                  <div className="absolute content-stretch flex gap-[5.95px] h-[16px] items-start left-[268.87px] pb-0 pl-[-0.8px] pr-0 pt-[-0.8px] top-[569.73px] w-[61.5px]" data-name="Container">
                    <div className="bg-white rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[17.6px]" data-name="Button" />
                    {[...Array(2).keys()].map((_, i) => (
                      <div className="bg-[rgba(255,255,255,0.6)] rounded-[1.67772e+07px] shrink-0 size-[16px]" data-name="Button" />
                    ))}
                  </div>
                  <div className="absolute h-[43.195px] left-[470.32px] rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[9px] w-[119.914px]" data-name="Text" style={{ backgroundImage: "linear-gradient(160.19deg, rgb(255, 215, 0) 0%, rgb(255, 153, 102) 50%, rgb(255, 94, 98) 100%)" }}>
                    <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[25.2px] left-[18px] not-italic text-[15.75px] text-nowrap text-white top-[9px]">UV Makeup</p>
                  </div>
                </div>
                <ContainerBackgroundImage additionalClassNames="h-[353.063px]">
                  <HeadingBackgroundImageAndText text="Electric Nights" additionalClassNames="overflow-clip" />
                  <div className="h-[34.422px] relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute bg-clip-text font-['Inter:Medium',sans-serif] font-medium leading-[34.425px] left-0 not-italic text-[#0f172a] text-[20.25px] text-nowrap top-0" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgb(15, 23, 42) 0%, rgb(15, 23, 42) 100%), linear-gradient(172.532deg, rgb(0, 191, 255) 0%, rgb(32, 201, 151) 50%, rgb(50, 205, 50) 100%)" }}>
                      UV Blacklight Session 2024
                    </p>
                  </div>
                  <div className="h-[98.719px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#374151] text-[20.25px] top-0 w-[488px]">Mesmerizing UV-reactive artistry that transforms under blacklight, creating an otherworldly glow perfect for nightlife events.</p>
                  </div>
                  <div className="content-stretch flex flex-col h-[35.422px] items-start pb-0 pt-px px-0 relative shrink-0 w-full" data-name="Container">
                    <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
                    <div className="h-[34.422px] relative shrink-0 w-full" data-name="Paragraph">
                      <div className="absolute left-0 rounded-[1.67772e+07px] size-[9px] top-[12.71px]" data-name="Text" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 102, 204) 0%, rgb(153, 51, 255) 50%, rgb(51, 153, 255) 100%)" }} />
                      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[34.425px] left-[27px] not-italic text-[#6a7282] text-[20.25px] top-0 w-[281px]">3 images • Click to view gallery</p>
                    </div>
                  </div>
                </ContainerBackgroundImage>
              </BackgroundImage6>
              <PortfolioCardBackgroundImage additionalClassNames="h-[954.297px] top-[1064.32px]">
                <div className="h-[599.242px] overflow-clip relative shrink-0 w-full" data-name="Container">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgContainer3} />
                  <div className="absolute h-0 left-0 top-0 w-[599.242px]" data-name="Container" />
                  <ContainerBackgroundImageAndText text="1/3" additionalClassNames="w-[39.75px]" />
                  <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex items-center justify-center left-[13.5px] opacity-0 rounded-[1.67772e+07px] size-[45px] top-[277.12px]" data-name="Button">
                    <IconBackgroundImage />
                  </div>
                  <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex items-center justify-center left-[540.74px] opacity-0 rounded-[1.67772e+07px] size-[45px] top-[277.12px]" data-name="Button">
                    <IconBackgroundImage1 />
                  </div>
                  <div className="absolute content-stretch flex gap-[5.95px] h-[16px] items-start left-[268.87px] pb-0 pl-[-0.8px] pr-0 pt-[-0.8px] top-[569.74px] w-[61.5px]" data-name="Container">
                    <div className="bg-white rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[17.6px]" data-name="Button" />
                    {[...Array(2).keys()].map((_, i) => (
                      <div className="bg-[rgba(255,255,255,0.6)] rounded-[1.67772e+07px] shrink-0 size-[16px]" data-name="Button" />
                    ))}
                  </div>
                  <div className="absolute h-[43.195px] left-[443.82px] rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[9px] w-[146.422px]" data-name="Text" style={{ backgroundImage: "linear-gradient(163.564deg, rgb(0, 191, 255) 0%, rgb(32, 201, 151) 50%, rgb(50, 205, 50) 100%)" }}>
                    <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[25.2px] left-[18px] not-italic text-[15.75px] text-nowrap text-white top-[9px]">Swiss Festivals</p>
                  </div>
                </div>
                <ContainerBackgroundImage additionalClassNames="h-[320.156px]">
                  <HeadingBackgroundImageAndText text="New Year Magic" additionalClassNames="overflow-clip" />
                  <div className="h-[34.422px] relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute bg-clip-text font-['Inter:Medium',sans-serif] font-medium leading-[34.425px] left-0 not-italic text-[#0f172a] text-[20.25px] text-nowrap top-0" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgb(15, 23, 42) 0%, rgb(15, 23, 42) 100%), linear-gradient(172.799deg, rgb(0, 191, 255) 0%, rgb(32, 201, 151) 50%, rgb(50, 205, 50) 100%)" }}>
                      Little Forest NYE 2023/2024
                    </p>
                  </div>
                  <div className="h-[65.813px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#374151] text-[20.25px] top-0 w-[462px]">Contemplative face art with golden and blue tones, welcoming the new year with peaceful forest energy.</p>
                  </div>
                  <div className="content-stretch flex flex-col h-[35.422px] items-start pb-0 pt-px px-0 relative shrink-0 w-full" data-name="Container">
                    <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
                    <div className="h-[34.422px] relative shrink-0 w-full" data-name="Paragraph">
                      <div className="absolute left-0 rounded-[1.67772e+07px] size-[9px] top-[12.71px]" data-name="Text" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 102, 204) 0%, rgb(153, 51, 255) 50%, rgb(51, 153, 255) 100%)" }} />
                      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[34.425px] left-[27px] not-italic text-[#6a7282] text-[20.25px] top-0 w-[281px]">3 images • Click to view gallery</p>
                    </div>
                  </div>
                </ContainerBackgroundImage>
              </PortfolioCardBackgroundImage>
              <BackgroundImage6 additionalClassNames="h-[921.398px] top-[2070.14px]">
                <div className="h-[599.234px] overflow-clip relative shrink-0 w-full" data-name="Container">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgContainer4} />
                  <div className="absolute h-0 left-0 top-0 w-[599.234px]" data-name="Container" />
                  <ContainerBackgroundImageAndText text="1/3" additionalClassNames="w-[39.75px]" />
                  <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex items-center justify-center left-[13.5px] opacity-0 rounded-[1.67772e+07px] size-[45px] top-[277.12px]" data-name="Button">
                    <IconBackgroundImage />
                  </div>
                  <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex items-center justify-center left-[540.73px] opacity-0 rounded-[1.67772e+07px] size-[45px] top-[277.12px]" data-name="Button">
                    <IconBackgroundImage1 />
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
                <ContainerBackgroundImage additionalClassNames="h-[320.156px]">
                  <HeadingBackgroundImageAndText text="Galaxy Fusion" additionalClassNames="overflow-clip" />
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
                </ContainerBackgroundImage>
              </BackgroundImage6>
              <PortfolioCardBackgroundImage additionalClassNames="h-[921.398px] top-[2070.14px]">
                <div className="h-[599.242px] overflow-clip relative shrink-0 w-full" data-name="Container">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgContainer5} />
                  <div className="absolute h-0 left-0 top-0 w-[599.242px]" data-name="Container" />
                  <ContainerBackgroundImageAndText text="1/3" additionalClassNames="w-[39.75px]" />
                  <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex items-center justify-center left-[13.5px] opacity-0 rounded-[1.67772e+07px] size-[45px] top-[277.12px]" data-name="Button">
                    <IconBackgroundImage />
                  </div>
                  <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex items-center justify-center left-[540.74px] opacity-0 rounded-[1.67772e+07px] size-[45px] top-[277.12px]" data-name="Button">
                    <IconBackgroundImage1 />
                  </div>
                  <div className="absolute content-stretch flex gap-[5.95px] h-[16px] items-start left-[268.87px] pb-0 pl-[-0.8px] pr-0 pt-[-0.8px] top-[569.74px] w-[61.5px]" data-name="Container">
                    <div className="bg-white rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[17.6px]" data-name="Button" />
                    {[...Array(2).keys()].map((_, i) => (
                      <div className="bg-[rgba(255,255,255,0.6)] rounded-[1.67772e+07px] shrink-0 size-[16px]" data-name="Button" />
                    ))}
                  </div>
                  <div className="absolute h-[43.195px] left-[404.08px] rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[9px] w-[186.164px]" data-name="Text" style={{ backgroundImage: "linear-gradient(166.937deg, rgb(255, 215, 0) 0%, rgb(255, 153, 102) 50%, rgb(255, 94, 98) 100%)" }}>
                    <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[25.2px] left-[18px] not-italic text-[15.75px] text-nowrap text-white top-[9px]">Thailand Adventures</p>
                  </div>
                </div>
                <ContainerBackgroundImage additionalClassNames="h-[320.156px]">
                  <HeadingBackgroundImageAndText text="Jungle Festival Magic" additionalClassNames="overflow-clip" />
                  <div className="h-[34.422px] relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute bg-clip-text font-['Inter:Medium',sans-serif] font-medium leading-[34.425px] left-0 not-italic text-[#0f172a] text-[20.25px] text-nowrap top-0" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgb(15, 23, 42) 0%, rgb(15, 23, 42) 100%), linear-gradient(174.157deg, rgb(0, 191, 255) 0%, rgb(32, 201, 151) 50%, rgb(50, 205, 50) 100%)" }}>
                      Koh Phangan, Friday 26 September
                    </p>
                  </div>
                  <div className="h-[65.813px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#374151] text-[20.25px] top-0 w-[493px]">{`Tropical UV artistry in the heart of Thailand's jungle paradise, blending neon glow with natural island energy.`}</p>
                  </div>
                  <div className="content-stretch flex flex-col h-[35.422px] items-start pb-0 pt-px px-0 relative shrink-0 w-full" data-name="Container">
                    <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
                    <div className="h-[34.422px] relative shrink-0 w-full" data-name="Paragraph">
                      <div className="absolute left-0 rounded-[1.67772e+07px] size-[9px] top-[12.71px]" data-name="Text" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 102, 204) 0%, rgb(153, 51, 255) 50%, rgb(51, 153, 255) 100%)" }} />
                      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[34.425px] left-[27px] not-italic text-[#6a7282] text-[20.25px] top-0 w-[281px]">3 images • Click to view gallery</p>
                    </div>
                  </div>
                </ContainerBackgroundImage>
              </PortfolioCardBackgroundImage>
            </div>
            <div className="absolute content-stretch flex gap-[9px] h-[45px] items-center left-[506.01px] top-[3063.54px] w-[313.984px]" data-name="PaginationContent">
              <BackgroundImage3 additionalClassNames="h-[45px]">
                <div className="absolute bg-[rgba(255,255,255,0.8)] border border-[rgba(255,255,255,0.5)] border-solid h-[45px] left-0 opacity-50 rounded-[11.25px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[122.383px]" data-name="PaginationLink">
                  <IconBackgroundImage2 additionalClassNames="left-[13.5px]">
                    <path d="M11.25 13.5L6.75 9L11.25 4.5" id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </IconBackgroundImage2>
                  <BackgroundImageAndText text="Previous" additionalClassNames="left-[36px] w-[70.883px]" />
                </div>
              </BackgroundImage3>
              <BackgroundImage4 additionalClassNames="h-[45px] w-[35.18px]">
                <div className="absolute h-[45px] left-0 rounded-[11.25px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[35.18px]" data-name="PaginationLink" style={{ backgroundImage: "linear-gradient(128.017deg, rgb(255, 102, 204) 0%, rgb(153, 51, 255) 50%, rgb(51, 153, 255) 100%)" }}>
                  <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[25.714px] left-[13.5px] not-italic text-[18px] text-nowrap text-white top-[10.64px]">1</p>
                </div>
              </BackgroundImage4>
              <BackgroundImage4 additionalClassNames="h-[45px] w-[39.633px]">
                <div className="absolute bg-[rgba(255,255,255,0.8)] border border-[rgba(255,255,255,0.5)] border-solid h-[45px] left-0 rounded-[11.25px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[39.633px]" data-name="PaginationLink">
                  <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[25.714px] left-[13.5px] not-italic text-[#374151] text-[18px] text-nowrap top-[9.65px]">2</p>
                </div>
              </BackgroundImage4>
              <BackgroundImage4 additionalClassNames="h-[45px] w-[89.789px]">
                <div className="absolute bg-[rgba(255,255,255,0.8)] border border-[rgba(255,255,255,0.5)] border-solid h-[45px] left-0 rounded-[11.25px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[89.789px]" data-name="PaginationLink">
                  <BackgroundImageAndText text="Next" additionalClassNames="left-[13.5px] w-[38.289px]" />
                  <IconBackgroundImage2 additionalClassNames="left-[56.29px]">
                    <path d="M6.75 13.5L11.25 9L6.75 4.5" id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </IconBackgroundImage2>
                </div>
              </BackgroundImage4>
            </div>
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
                      <ContainerBackgroundImage1 text="Name *" />
                      <ContainerBackgroundImage1 text="Email *" />
                      <BackgroundImage1 additionalClassNames="h-[328.141px]">
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
                      </BackgroundImage1>
                      <div className="content-stretch flex gap-[4.5px] h-[104.805px] items-center justify-center relative rounded-[11.25px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button" style={{ backgroundImage: "linear-gradient(169.944deg, rgb(255, 102, 204) 0%, rgb(153, 51, 255) 50%, rgb(51, 153, 255) 100%)" }}>
                        <div className="relative shrink-0 size-[22.5px]" data-name="Icon">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 22.5">
                            <g id="Icon">
                              <path d={svgPaths.p21253820} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
                            </g>
                          </svg>
                        </div>
                        <BackgroundImage4 additionalClassNames="h-[46.586px] w-[190.578px]">
                          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[46.584px] left-[95px] not-italic text-[29.115px] text-center text-nowrap text-white top-0 translate-x-[-50%]">Send Message</p>
                        </BackgroundImage4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gradient-to-r from-[#fccee8] h-px left-0 to-[#bedbff] top-[1070.54px] via-50% via-[#e9d4ff] w-[1254px]" data-name="Container" />
              <div className="absolute content-stretch flex h-[54px] items-center justify-between left-0 top-[1179.54px] w-[1254px]" data-name="Container">
                <BackgroundImage4 additionalClassNames="h-[54px] w-[168.898px]">
                  <div className="absolute content-stretch flex flex-col h-[54px] items-start left-[45px] top-0 w-[123.898px]" data-name="Container">
                    <BackgroundImage4 additionalClassNames="h-[27px] w-[123.898px]">
                      <div className="absolute content-stretch flex h-[30px] items-start left-0 top-[-1.5px] w-[45.023px]" data-name="Text">
                        <p className="font-['Playfair_Display:Bold',sans-serif] font-bold leading-[27px] relative shrink-0 text-[#1f2937] text-[27px] text-nowrap">Ash</p>
                      </div>
                      <div className="absolute content-stretch flex h-[30px] items-start left-[45.02px] top-[-1.5px] w-[63.031px]" data-name="Text">
                        <p className="font-['Playfair_Display:Bold',sans-serif] font-bold leading-[27px] relative shrink-0 text-[#e91e63] text-[27px] text-nowrap">Shaw</p>
                      </div>
                    </BackgroundImage4>
                    <BackgroundImage3 additionalClassNames="w-[123.898px]">
                      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[#e91e63] text-[20.25px] text-nowrap top-[0.5px]">makeup artist</p>
                    </BackgroundImage3>
                  </div>
                  <div className="absolute left-0 size-[36px] top-[9px]" data-name="Container">
                    <div className="absolute left-[-3.35px] size-[42.698px] top-[-3.35px]" data-name="Icon">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.6981 42.6981">
                        <g id="Icon">
                          <path d={svgPaths.pb7c9e72} fill="url(#paint0_linear_609_1027)" id="Vector" />
                          <path d={svgPaths.p1fb6f8f0} fill="var(--fill-0, #C0C0C0)" id="Vector_2" />
                          <g id="Group">
                            <path d={svgPaths.p18f28300} fill="var(--fill-0, #E91E63)" id="Vector_3" />
                            <path d={svgPaths.p20f6c600} fill="var(--fill-0, #9C27B0)" id="Vector_4" />
                            <path d={svgPaths.p22804a80} fill="var(--fill-0, #3F51B5)" id="Vector_5" />
                            <path d={svgPaths.p17346600} fill="var(--fill-0, #2196F3)" id="Vector_6" />
                            <path d={svgPaths.p2b061c00} fill="var(--fill-0, #00BCD4)" id="Vector_7" />
                            <path d={svgPaths.p33b4af00} fill="var(--fill-0, #4CAF50)" id="Vector_8" />
                          </g>
                          <path d={svgPaths.p354ae280} fill="var(--fill-0, #E91E63)" id="Vector_9" opacity="0.7" />
                          <path d={svgPaths.p27458600} fill="var(--fill-0, #E91E63)" id="Vector_10" opacity="0.7" />
                        </g>
                        <defs>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_609_1027" x1="26.6863" x2="800.087" y1="10.6745" y2="155.687">
                            <stop stopColor="#D4AF37" />
                            <stop offset="1" stopColor="#8B4513" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="absolute bg-[#fb64b6] left-[-4.5px] opacity-[0.506] rounded-[1.67772e+07px] size-[9px] top-[-4.5px]" data-name="Container" />
                    <div className="absolute bg-[#c27aff] left-[33.75px] opacity-[0.504] rounded-[1.67772e+07px] size-[6.75px] top-[33.75px]" data-name="Container" />
                  </div>
                </BackgroundImage4>
                <div className="h-[54px] relative shrink-0 w-[324px]" data-name="SocialLinks">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[36px] items-start relative size-full">
                    <div className="relative rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[54px]" data-name="Link" style={{ backgroundImage: "linear-gradient(135deg, rgb(225, 48, 108) 0%, rgb(253, 29, 29) 50%, rgb(252, 175, 69) 100%)" }}>
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                        <BackgroundImage>
                          <path d={svgPaths.p1a49a800} fill="var(--fill-0, white)" id="Vector" />
                          <path d={svgPaths.p27afad00} fill="var(--fill-0, white)" id="Vector_2" />
                          <path d={svgPaths.pb129dc0} fill="var(--fill-0, white)" id="Vector_3" />
                        </BackgroundImage>
                      </div>
                    </div>
                    <div className="relative rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[54px]" data-name="Link" style={{ backgroundImage: "linear-gradient(135deg, rgb(24, 119, 242) 0%, rgb(66, 165, 245) 100%)" }}>
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                        <BackgroundImage>
                          <path d={svgPaths.p3843bbf0} fill="var(--fill-0, white)" id="Vector" />
                        </BackgroundImage>
                      </div>
                    </div>
                    <div className="relative rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[54px]" data-name="Link" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 119, 181) 0%, rgb(0, 160, 220) 100%)" }}>
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                        <BackgroundImage2>
                          <g clipPath="url(#clip0_571_633)" id="Icon">
                            <path d={svgPaths.p1fdc6000} fill="var(--fill-0, white)" id="Vector" />
                          </g>
                          <defs>
                            <clipPath id="clip0_571_633">
                              <rect fill="white" height="27" width="27" />
                            </clipPath>
                          </defs>
                        </BackgroundImage2>
                      </div>
                    </div>
                    <div className="basis-0 grow h-[54px] min-h-px min-w-px relative rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0" data-name="Link" style={{ backgroundImage: "linear-gradient(135deg, rgb(16, 185, 129) 0%, rgb(5, 150, 105) 100%)" }}>
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                        <BackgroundImage>
                          <path d={svgPaths.pb204200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                        </BackgroundImage>
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