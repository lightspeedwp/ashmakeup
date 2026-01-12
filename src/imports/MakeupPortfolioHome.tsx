import svgPaths from "./svg-1kdo0ep1ha";
import clsx from "clsx";
import imgButton from "figma:asset/378acbf4a7518ca6c40b44540bd7a121a91375fe.png";
import imgButton1 from "figma:asset/e82a7d901c5a28bf9313c7535228e647eaf06b75.png";
import imgButton2 from "figma:asset/f4a28f747d49fc9d37311b17f513b62e2b95a73e.png";
import imgContainer from "figma:asset/74b708f3be9c02b929444ed900d4217477ac45ad.png";
import imgContainer1 from "figma:asset/6d85f7fae71068f4df2871708416452ac3fc47cf.png";
import imgImageWithFallback from "figma:asset/b52399362ea12554557ec6b26d7f24e825770faa.png";
import imgContainer2 from "figma:asset/7d24210757b1648e6cf71467bdefb992b07a1208.png";
import imgContainer3 from "figma:asset/3883b564fbf249b3ebecaa749dfcc792a509fc24.png";
import imgContainer4 from "figma:asset/157cbbfbc5d6660c1119b4c4568d5e688a8e0318.png";
type ContainerBackgroundImage2Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage2Props>) {
  return (
    <div className={clsx("h-[28.797px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4.5px] items-center relative size-full">{children}</div>
    </div>
  );
}

function IconBackgroundImage5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[144px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144 144">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImage7Props = {
  additionalClassNames?: string;
};

function BackgroundImage7({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage7Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage6Props = {
  additionalClassNames?: string;
};

function BackgroundImage6({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage6Props>) {
  return <BackgroundImage7 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</BackgroundImage7>;
}
type BackgroundImage5Props = {
  additionalClassNames?: string;
};

function BackgroundImage5({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage5Props>) {
  return <BackgroundImage7 additionalClassNames={clsx("basis-0 grow min-h-px min-w-px relative shrink-0", additionalClassNames)}>{children}</BackgroundImage7>;
}
type BackgroundImage4Props = {
  additionalClassNames?: string;
};

function BackgroundImage4({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage4Props>) {
  return (
    <div className={clsx("size-[18px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[27px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
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
    <BackgroundImage2 additionalClassNames="h-[136.547px]">
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <div className="h-[134.547px] relative rounded-[11.25px] shrink-0 w-full">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center p-[51.525px] relative size-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4a5565] text-[19.692px] text-nowrap">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage2>
  );
}

function IconBackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage3>
      <g id="Icon">{children}</g>
    </BackgroundImage3>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div className={clsx("size-[22.5px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 22.5">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImageProps>) {
  return (
    <BackgroundImage4 additionalClassNames={additionalClassNames}>
      <g id="Icon">{children}</g>
    </BackgroundImage4>
  );
}
type ContainerBackgroundImageAndText2Props = {
  text: string;
};

function ContainerBackgroundImageAndText2({ text }: ContainerBackgroundImageAndText2Props) {
  return (
    <div style={{ backgroundImage: "linear-gradient(163.342deg, rgb(255, 102, 204) 0%, rgb(153, 51, 255) 50%, rgb(51, 153, 255) 100%)" }} className="absolute h-[34.5px] left-[180.84px] rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[13.5px] w-[115.305px]">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[13.5px] not-italic text-[15.75px] text-nowrap text-white top-[6.75px]">{text}</p>
    </div>
  );
}
type ContainerBackgroundImageProps = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage({ additionalClassNames = "" }: ContainerBackgroundImageProps) {
  return (
    <div className={clsx("absolute content-stretch flex h-[29.797px] items-center justify-end left-[36px] pb-0 pt-px px-0 top-[435.31px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <BackgroundImage6 additionalClassNames="h-[28.797px] rounded-[4.05px] w-[110.883px]">
        <p className="absolute bg-clip-text font-['Inter:Medium',sans-serif] font-medium leading-[28.8px] left-0 not-italic text-[#0f172a] text-[18px] text-nowrap top-[0.5px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgb(15, 23, 42) 0%, rgb(15, 23, 42) 100%), linear-gradient(162.681deg, rgb(255, 102, 204) 0%, rgb(153, 51, 255) 50%, rgb(51, 153, 255) 100%)" }}>
          {"Read more"}
        </p>
        <BackgroundImage additionalClassNames="absolute left-[92.88px] top-[5.4px]">
          <path d="M3.75 9H14.25" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9 3.75L14.25 9L9 14.25" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </BackgroundImage>
      </BackgroundImage6>
    </div>
  );
}

function ButtonBackgroundImage() {
  return (
    <div className="h-[27px] relative rounded-[11.25px] shrink-0 w-[36px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[9px] py-0 relative size-full">
        <div className="basis-0 grow h-[18px] min-h-px min-w-px relative shrink-0">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
            <VectorBackgroundImage additionalClassNames="inset-[8.33%_12.5%_66.67%_62.5%]" />
            <VectorBackgroundImage additionalClassNames="inset-[37.5%_62.5%_37.5%_12.5%]" />
            <VectorBackgroundImage additionalClassNames="inset-[66.67%_12.5%_8.33%_62.5%]" />
            <div className="absolute inset-[56.29%_35.75%_27.13%_35.79%]" data-name="Vector">
              <div className="absolute inset-[-25.13%_-14.64%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.62275 4.48524">
                  <path d={svgPaths.p92c1ee0} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-[27.12%_35.79%_56.29%_35.79%]" data-name="Vector">
              <div className="absolute inset-[-25.13%_-14.67%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.61524 4.48524">
                  <path d={svgPaths.p25543d00} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type VectorBackgroundImageProps = {
  additionalClassNames?: string;
};

function VectorBackgroundImage({ additionalClassNames = "" }: VectorBackgroundImageProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-16.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <path d={svgPaths.p93ea200} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
}
type TextBackgroundImageAndText1Props = {
  text: string;
};

function TextBackgroundImageAndText1({ text }: TextBackgroundImageAndText1Props) {
  return (
    <BackgroundImage6 additionalClassNames="h-[28.797px] w-[82.219px]">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28.8px] left-0 not-italic text-[#374151] text-[18px] text-nowrap top-[0.5px]">{text}</p>
    </BackgroundImage6>
  );
}
type TimeBackgroundImageAndTextProps = {
  text: string;
};

function TimeBackgroundImageAndText({ text }: TimeBackgroundImageAndTextProps) {
  return (
    <BackgroundImage5 additionalClassNames="h-[28.797px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28.8px] left-0 not-italic text-[#6a7282] text-[18px] text-nowrap top-[0.5px]">{text}</p>
    </BackgroundImage5>
  );
}

function IconBackgroundImage3() {
  return (
    <BackgroundImage additionalClassNames="relative shrink-0">
      <path d="M6 1.5V4.5" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M12 1.5V4.5" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d={svgPaths.p13693a10} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M2.25 7.5H15.75" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </BackgroundImage>
  );
}
type TextBackgroundImageAndTextProps = {
  text: string;
};

function TextBackgroundImageAndText({ text }: TextBackgroundImageAndTextProps) {
  return (
    <BackgroundImage5 additionalClassNames="h-[28.797px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28.8px] left-0 not-italic text-[#6a7282] text-[18px] top-[0.5px] w-[26px]">{text}</p>
    </BackgroundImage5>
  );
}

function IconBackgroundImage2() {
  return (
    <BackgroundImage4 additionalClassNames="relative shrink-0">
      <g clipPath="url(#clip0_571_592)" id="Icon">
        <path d="M9 4.5V9L12 10.5" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={svgPaths.p3dc49580} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </g>
      <defs>
        <clipPath id="clip0_571_592">
          <rect fill="white" height="18" width="18" />
        </clipPath>
      </defs>
    </BackgroundImage4>
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
    <BackgroundImage1 additionalClassNames="relative shrink-0">
      <path d={svgPaths.p1ed06500} id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
    </BackgroundImage1>
  );
}

function IconBackgroundImage() {
  return (
    <BackgroundImage1 additionalClassNames="relative shrink-0">
      <path d={svgPaths.p553b4d0} id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
    </BackgroundImage1>
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
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[36px] left-[9px] not-italic text-[#374151] text-[22.5px] text-nowrap top-[5px]">{text}</p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <p style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(198, 0, 92) 0%, rgb(152, 16, 250) 100%)" }} className="absolute bg-clip-text font-['Inter:Medium',sans-serif] font-medium leading-[34.425px] left-0 not-italic text-[20.25px] text-[rgba(0,0,0,0)] text-nowrap top-0">
      {text}
    </p>
  );
}

export default function MakeupPortfolioHome() {
  return (
    <div className="bg-white relative size-full" data-name="Makeup Portfolio - Home">
      <div className="absolute bg-white content-stretch flex flex-col h-[8764.781px] items-start left-0 top-0 w-[1326px]" data-name="App">
        <div className="bg-[rgba(255,255,255,0.95)] h-[108px] relative shrink-0 w-full" data-name="Header">
          <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between pb-px pt-0 px-[36px] relative size-full">
              <div className="h-[73.922px] relative rounded-[7.65px] shrink-0 w-[211.578px]" data-name="Button">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[4.5px] py-0 relative size-full">
                  <BackgroundImage5 additionalClassNames="h-[64.922px]">
                    <div className="absolute content-stretch flex flex-col h-[64.922px] items-start left-[58.5px] top-0 w-[144.078px]" data-name="Container">
                      <BackgroundImage5 additionalClassNames="w-[144.078px]">
                        <div className="absolute content-stretch flex h-[40px] items-start left-0 top-[-2px] w-[60.031px]" data-name="Text">
                          <p className="font-['Playfair_Display:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#1f2937] text-[36px] text-nowrap">Ash</p>
                        </div>
                        <div className="absolute content-stretch flex h-[40px] items-start left-[60.03px] top-[-2px] w-[84.047px]" data-name="Text">
                          <p className="font-['Playfair_Display:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#e91e63] text-[36px] text-nowrap">Shaw</p>
                        </div>
                      </BackgroundImage5>
                      <BackgroundImage6 additionalClassNames="h-[28.922px] w-[144.078px]">
                        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28.929px] left-0 not-italic text-[#e91e63] text-[20.25px] text-nowrap top-0">makeup artist</p>
                      </BackgroundImage6>
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
                      <div className="absolute bg-[#fb64b6] left-[-4.5px] opacity-[0.578] rounded-[1.67772e+07px] size-[9px] top-[-4.5px]" data-name="Container" />
                      <div className="absolute bg-[#c27aff] left-[42.75px] opacity-60 rounded-[1.67772e+07px] size-[6.75px] top-[42.75px]" data-name="Container" />
                    </div>
                  </BackgroundImage5>
                </div>
              </div>
              <div className="h-[45px] relative shrink-0 w-[562.82px]" data-name="Menu Bar">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[36px] items-center relative size-full">
                  <BackgroundImage6 additionalClassNames="h-[45px] rounded-[7.65px] w-[77.883px]">
                    <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[36px] left-[9px] not-italic text-[#f6339a] text-[22.5px] text-nowrap top-[5px]">Home</p>
                  </BackgroundImage6>
                  <div className="h-[45px] relative rounded-[7.65px] shrink-0 w-[78.664px]" data-name="Menu Item">
                    <BackgroundImageAndText1 text="About" />
                  </div>
                  <div className="basis-0 grow h-[45px] min-h-px min-w-px relative rounded-[7.65px] shrink-0" data-name="Menu Item">
                    <BackgroundImageAndText1 text="Portfolio" />
                  </div>
                  <div className="h-[45px] relative rounded-[7.65px] shrink-0 w-[62.906px]" data-name="Menu Item">
                    <BackgroundImageAndText1 text="Blog" />
                  </div>
                  <div className="h-[45px] relative rounded-[7.65px] shrink-0 w-[97.656px]" data-name="Menu Item">
                    <BackgroundImageAndText1 text="Contact" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[8656.781px] items-start relative shrink-0 w-full" data-name="HomePage">
          <div className="h-[1210.297px] overflow-clip relative shrink-0 w-full" data-name="HeroLayout" style={{ backgroundImage: "linear-gradient(137.612deg, rgb(253, 242, 248) 0%, rgb(250, 245, 255) 50%, rgb(239, 246, 255) 100%)" }}>
            <div className="absolute h-[1210.297px] left-0 top-0 w-[1326px]" data-name="Container">
              <div className="absolute left-[45px] opacity-[0.241] rounded-[1.67772e+07px] size-[144px] top-[45px]" data-name="HomePage" style={{ backgroundImage: "linear-gradient(135deg, rgb(253, 165, 213) 0%, rgb(194, 122, 255) 100%)" }} />
              <div className="absolute left-[1128px] opacity-[0.466] rounded-[1.67772e+07px] size-[108px] top-[90px]" data-name="HomePage" style={{ backgroundImage: "linear-gradient(135deg, rgb(142, 197, 255) 0%, rgb(0, 213, 190) 100%)" }} />
              <div className="absolute left-[331.5px] opacity-[0.198] rounded-[1.67772e+07px] size-[180px] top-[958.3px]" data-name="HomePage" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 223, 32) 0%, rgb(251, 100, 182) 100%)" }} />
            </div>
            <div className="absolute h-[700px] left-[36px] top-[255.15px] w-[1254px]" data-name="Container">
              <div className="absolute h-[569.688px] left-0 top-[65.16px] w-[591px]" data-name="Container">
                <div className="absolute h-[89.094px] left-0 top-0 w-[591px]" data-name="Heading 1">
                  <p className="absolute bg-clip-text font-['Playfair_Display:Regular',sans-serif] font-normal leading-[89.1px] left-0 text-[81px] text-[rgba(0,0,0,0)] text-nowrap top-[0.5px] tracking-[-1.62px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(246, 51, 154) 0%, rgb(152, 16, 250) 100%)" }}>{`Hi, I'm Ash Shaw`}</p>
                </div>
                <div className="absolute h-[202.5px] left-0 top-[140.62px] w-[591px]" data-name="Heading 2">
                  <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[67.5px] left-0 text-[#0f172a] text-[54px] text-nowrap top-[6px] tracking-[-0.54px]">Makeup that shines with</p>
                  <div className="absolute content-stretch flex h-[59.5px] items-start left-0 top-[71.5px] w-[140.781px]" data-name="HomePage">
                    <p className="bg-clip-text font-['Playfair_Display:Bold_Italic',sans-serif] font-bold italic leading-[67.5px] relative shrink-0 text-[54px] text-[rgba(0,0,0,0)] text-nowrap tracking-[-0.54px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(246, 51, 154) 0%, rgb(255, 32, 86) 100%)" }}>
                      colour
                    </p>
                  </div>
                  <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[67.5px] left-[140.78px] text-[#0f172a] text-[54px] top-[73.5px] tracking-[-0.54px] w-[26px]">,</p>
                  <div className="absolute content-stretch flex h-[59.5px] items-start left-[166.7px] top-[71.5px] w-[146.711px]" data-name="HomePage">
                    <p className="bg-clip-text font-['Playfair_Display:Bold_Italic',sans-serif] font-bold italic leading-[67.5px] relative shrink-0 text-[54px] text-[rgba(0,0,0,0)] text-nowrap tracking-[-0.54px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(173, 70, 255) 0%, rgb(142, 81, 255) 100%)" }}>
                      energy
                    </p>
                  </div>
                  <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[67.5px] left-[313.41px] text-[#0f172a] text-[54px] text-nowrap top-[73.5px] tracking-[-0.54px]">, and</p>
                  <div className="absolute content-stretch flex h-[59.5px] items-start left-0 top-[139px] w-[240.609px]" data-name="HomePage">
                    <p className="bg-clip-text font-['Playfair_Display:Bold_Italic',sans-serif] font-bold italic leading-[67.5px] relative shrink-0 text-[54px] text-[rgba(0,0,0,0)] text-nowrap tracking-[-0.54px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(43, 127, 255) 0%, rgb(0, 184, 219) 100%)" }}>
                      connection
                    </p>
                  </div>
                  <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[67.5px] left-[240.61px] text-[#0f172a] text-[54px] text-nowrap top-[141px] tracking-[-0.54px]">.</p>
                </div>
                <div className="absolute h-[32.906px] left-0 top-[394.64px] w-[591px]" data-name="Paragraph">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#4b5563] text-[20.25px] text-nowrap top-0">Creating bold, expressive makeup that celebrates individuality.</p>
                </div>
                <div className="absolute h-[90.617px] left-0 rounded-[11.25px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[479.07px] w-[284.609px]" data-name="HomePage" style={{ backgroundImage: "linear-gradient(162.339deg, rgb(255, 102, 204) 0%, rgb(153, 51, 255) 50%, rgb(51, 153, 255) 100%)" }}>
                  <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[32.4px] left-[142.52px] not-italic text-[20.25px] text-center text-nowrap text-white top-[29.11px] translate-x-[-50%]">Explore My Portfolio</p>
                </div>
              </div>
              <div className="absolute h-[700px] left-[735px] top-0 w-[591px]" data-name="HeroMediaWithLightbox">
                <div className="absolute h-[700px] left-0 rounded-[27px] top-0 w-[591px]" data-name="Container" style={{ backgroundImage: "linear-gradient(130.174deg, rgba(253, 242, 248, 0.2) 0%, rgba(250, 245, 255, 0.15) 50%, rgba(239, 246, 255, 0.2) 100%)" }} />
                <div className="absolute h-[391.895px] left-[249.07px] pointer-events-none rounded-[18px] top-[-15.95px] w-[359.855px]" data-name="Button">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[18px] size-full" src={imgButton} />
                  <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 rounded-[18px] shadow-[0px_0px_0px_4px_rgba(233,212,255,0.5),0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
                </div>
                <div className="absolute h-[380.541px] left-[-30.34px] pointer-events-none rounded-[18px] top-[347.73px] w-[366.677px]" data-name="Button">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[18px] size-full" src={imgButton1} />
                  <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 rounded-[18px] shadow-[0px_0px_0px_4px_rgba(190,219,255,0.5),0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
                </div>
                <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.05)] h-[700px] left-0 rounded-[27px] to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0)] w-[591px]" data-name="Container" />
                <div className="absolute h-[450.249px] left-[24.94px] pointer-events-none rounded-[18px] top-[44.88px] w-[382.116px]" data-name="Button">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[18px] size-full" src={imgButton2} />
                  <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 rounded-[18px] shadow-[0px_0px_0px_4px_rgba(252,206,232,0.5),0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
                </div>
                <div className="absolute left-[510px] opacity-[0.673] rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[27px] top-[72px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(251, 100, 182) 0%, rgb(255, 32, 86) 100%)" }} />
                <div className="absolute left-[555px] opacity-[0.699] rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[18px] top-[574px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(194, 122, 255) 0%, rgb(142, 81, 255) 100%)" }} />
                <div className="absolute left-[4.5px] opacity-[0.617] rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[13.5px] top-[144px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(81, 162, 255) 0%, rgb(0, 184, 219) 100%)" }} />
                <div className="absolute left-[72px] opacity-[0.527] rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[18px] top-[628px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(253, 199, 0) 0%, rgb(255, 105, 0) 100%)" }} />
                <div className="absolute left-[295.5px] opacity-[0.513] rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[11.25px] top-[233.33px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 213, 190) 0%, rgb(0, 201, 80) 100%)" }} />
                <div className="absolute left-[147.75px] opacity-[0.586] rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[13.5px] top-[511.5px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(124, 134, 255) 0%, rgb(152, 16, 250) 100%)" }} />
                <div className="absolute left-[434.25px] opacity-50 rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[9px] top-[466.66px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 99, 126) 0%, rgb(230, 0, 118) 100%)" }} />
              </div>
            </div>
            <div className="absolute bg-[rgba(255,255,255,0.95)] border border-[rgba(252,206,232,0.5)] border-solid left-[591px] rounded-[1.67772e+07px] shadow-[0px_4px_6px_-1px_rgba(252,206,232,0.2),0px_2px_4px_-2px_rgba(252,206,232,0.2)] size-[72px] top-[1040.74px]" data-name="ScrollDownArrow">
              <div className="absolute bg-gradient-to-r from-[#fccee8] left-0 opacity-30 rounded-[1.67772e+07px] size-[70px] to-[#bedbff] top-0 via-50% via-[#e9d4ff]" data-name="Container" />
              <div className="absolute bg-[rgba(255,255,255,0.98)] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[70px] top-0" data-name="Container">
                <IconBackgroundImage4>
                  <path d={svgPaths.p2c7fca80} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                </IconBackgroundImage4>
              </div>
              <div className="absolute bg-gradient-to-r from-[#fda5d5] left-[-33.75px] opacity-[0.004] rounded-[1.67772e+07px] size-[137.502px] to-[#8ec5ff] top-[-33.75px] via-50% via-[#dab2ff]" data-name="Container" />
            </div>
          </div>
          <div className="h-[1271.68px] overflow-clip relative shrink-0 w-full" data-name="ThreeColumnLayout" style={{ backgroundImage: "linear-gradient(136.198deg, rgba(0, 0, 0, 0) 0%, rgb(253, 242, 248) 50%, rgba(0, 0, 0, 0) 100%)" }}>
            <div className="absolute h-[1271.68px] left-0 top-0 w-[1326px]" data-name="Container">
              <div className="absolute blur-3xl filter left-[331.5px] opacity-5 rounded-[1.67772e+07px] size-[288px] top-[317.91px]" data-name="WhySection" style={{ backgroundImage: "linear-gradient(135deg, rgb(251, 100, 182) 0%, rgb(173, 70, 255) 100%)" }} />
              <div className="absolute blur-3xl filter left-[778.5px] opacity-5 rounded-[1.67772e+07px] size-[216px] top-[953.76px]" data-name="WhySection" style={{ backgroundImage: "linear-gradient(135deg, rgb(81, 162, 255) 0%, rgb(0, 187, 167) 100%)" }} />
            </div>
            <div className="absolute h-[983.68px] left-[36px] top-[144px] w-[1254px]" data-name="Container">
              <div className="absolute h-[64.797px] left-0 top-0 w-[1254px]" data-name="WhySection">
                <p className="absolute bg-clip-text font-['Playfair_Display:Bold',sans-serif] font-bold leading-[64.8px] left-[626.76px] text-[#0f172a] text-[54px] text-center text-nowrap top-[5.5px] tracking-[-0.54px] translate-x-[-50%]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgb(15, 23, 42) 0%, rgb(15, 23, 42) 100%), linear-gradient(171.482deg, rgb(255, 102, 204) 0%, rgb(153, 51, 255) 50%, rgb(51, 153, 255) 100%)" }}>
                  Why I Do Makeup
                </p>
              </div>
              <div className="absolute h-[598.078px] left-0 top-[172.8px] w-[1254px]" data-name="Container">
                <div className="absolute bg-[rgba(255,255,255,0.6)] border border-[rgba(255,255,255,0.5)] border-solid h-[598.078px] left-0 rounded-[18.45px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[383.648px]" data-name="WhySection">
                  <div className="absolute content-stretch flex items-center justify-center left-[118.82px] size-[144px] top-[36px]" data-name="Container">
                    <IconBackgroundImage5>
                      <g id="Icon">
                        <path d={svgPaths.p338ee780} fill="url(#paint0_radial_571_566)" id="Vector" opacity="0.9" />
                        <g id="Group">
                          <path d={svgPaths.pbe06ec0} fill="url(#paint1_linear_571_566)" id="Vector_2" opacity="0.8" />
                          <path d={svgPaths.p3e310700} fill="url(#paint2_linear_571_566)" id="Vector_3" opacity="0.8" />
                          <path d={svgPaths.p3ae40e00} fill="url(#paint3_linear_571_566)" id="Vector_4" opacity="0.8" />
                          <path d={svgPaths.p3dd632f0} fill="url(#paint4_linear_571_566)" id="Vector_5" opacity="0.8" />
                          <path d={svgPaths.p39697800} fill="url(#paint5_linear_571_566)" id="Vector_6" opacity="0.7" />
                          <path d={svgPaths.p27cf0d00} fill="url(#paint6_linear_571_566)" id="Vector_7" opacity="0.7" />
                          <path d={svgPaths.pb874880} fill="url(#paint7_linear_571_566)" id="Vector_8" opacity="0.7" />
                          <path d={svgPaths.p4e9ca00} fill="url(#paint8_linear_571_566)" id="Vector_9" opacity="0.7" />
                        </g>
                        <path d={svgPaths.p1547ec00} fill="var(--fill-0, #FFD700)" id="Vector_10" opacity="0.650049" />
                        <path d={svgPaths.p3141bd00} fill="var(--fill-0, #FF69B4)" id="Vector_11" opacity="0.766601" />
                        <path d={svgPaths.p3529d480} fill="var(--fill-0, #00CED1)" id="Vector_12" opacity="0.580039" />
                        <path d={svgPaths.p1f4e1000} fill="var(--fill-0, #9932CC)" id="Vector_13" opacity="0.522168" />
                      </g>
                      <defs>
                        <radialGradient cx="0" cy="0" gradientTransform="translate(2448 2448) scale(24)" gradientUnits="userSpaceOnUse" id="paint0_radial_571_566" r="1">
                          <stop stopColor="#FFD700" />
                          <stop offset="0.25" stopColor="#FF69B4" />
                          <stop offset="0.5" stopColor="#FF1493" />
                          <stop offset="0.75" stopColor="#9932CC" />
                          <stop offset="1" stopColor="#4B0082" />
                        </radialGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_571_566" x1="68.4" x2="1429.97" y1="30" y2="356.778">
                          <stop stopColor="#FFD700" />
                          <stop offset="0.5" stopColor="#FF69B4" />
                          <stop offset="1" stopColor="#FF1493" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_571_566" x1="84" x2="410.778" y1="68.4" y2="1429.97">
                          <stop stopColor="#FFD700" />
                          <stop offset="0.5" stopColor="#FF69B4" />
                          <stop offset="1" stopColor="#FF1493" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_571_566" x1="68.4" x2="1429.97" y1="84" y2="410.778">
                          <stop stopColor="#FFD700" />
                          <stop offset="0.5" stopColor="#FF69B4" />
                          <stop offset="1" stopColor="#FF1493" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_571_566" x1="30" x2="356.778" y1="68.4" y2="1429.97">
                          <stop stopColor="#FFD700" />
                          <stop offset="0.5" stopColor="#FF69B4" />
                          <stop offset="1" stopColor="#FF1493" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_571_566" x1="81.6" x2="2121.6" y1="2077.2" y2="37.2">
                          <stop stopColor="#00CED1" />
                          <stop offset="0.5" stopColor="#FF69B4" />
                          <stop offset="1" stopColor="#FFD700" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_571_566" x1="86.4" x2="2126.4" y1="2121.6" y2="81.6">
                          <stop stopColor="#00CED1" />
                          <stop offset="0.5" stopColor="#FF69B4" />
                          <stop offset="1" stopColor="#FFD700" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_571_566" x1="42" x2="2082" y1="2126.4" y2="86.4">
                          <stop stopColor="#00CED1" />
                          <stop offset="0.5" stopColor="#FF69B4" />
                          <stop offset="1" stopColor="#FFD700" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_571_566" x1="37.2" x2="2077.2" y1="2082" y2="42">
                          <stop stopColor="#00CED1" />
                          <stop offset="0.5" stopColor="#FF69B4" />
                          <stop offset="1" stopColor="#FFD700" />
                        </linearGradient>
                      </defs>
                    </IconBackgroundImage5>
                  </div>
                  <div className="absolute h-[56.25px] left-[36px] top-[231.52px] w-[309.648px]" data-name="Heading 3">
                    <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[56.25px] left-[155.59px] text-[#1f2937] text-[45px] text-center text-nowrap top-[5px] translate-x-[-50%]">Spread Joy</p>
                  </div>
                  <div className="absolute h-[164.531px] left-[36px] top-[339.3px] w-[309.648px]" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-[155.23px] not-italic text-[#4b5563] text-[20.25px] text-center top-0 translate-x-[-50%] w-[309px]">When I do makeup for others, it lights them up. They feel special, happy, and confident — and seeing that sparkle in their eyes inspires me to keep creating.</p>
                  </div>
                </div>
                <div className="absolute bg-[rgba(255,255,255,0.6)] border border-[rgba(255,255,255,0.5)] border-solid h-[598.078px] left-[435.17px] rounded-[18.45px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[383.648px]" data-name="WhySection">
                  <div className="absolute content-stretch flex items-center justify-center left-[118.82px] size-[144px] top-[36px]" data-name="Container">
                    <IconBackgroundImage5>
                      <g clipPath="url(#clip0_571_519)" id="Icon">
                        <path d={svgPaths.p23d95a00} fill="url(#paint0_linear_571_519)" id="Vector" opacity="0.8" />
                        <path d={svgPaths.p3f94c280} fill="url(#paint1_linear_571_519)" id="Vector_2" opacity="0.9" />
                        <g id="Group">
                          <path d={svgPaths.p10d8e400} fill="var(--fill-0, #8B4513)" id="Vector_3" />
                          <path d={svgPaths.p35a3f280} fill="var(--fill-0, #C0C0C0)" id="Vector_4" />
                          <g id="Group_2">
                            <path d={svgPaths.pa418300} fill="var(--fill-0, #FF69B4)" id="Vector_5" />
                            <path d={svgPaths.p202b0800} fill="var(--fill-0, #9932CC)" id="Vector_6" />
                            <path d={svgPaths.p78d8b80} fill="var(--fill-0, #00CED1)" id="Vector_7" />
                            <path d={svgPaths.p197cff80} fill="var(--fill-0, #FFD700)" id="Vector_8" />
                            <path d={svgPaths.p3968400} fill="var(--fill-0, #32CD32)" id="Vector_9" />
                            <path d={svgPaths.p12d8a400} fill="var(--fill-0, #FF4500)" id="Vector_10" />
                          </g>
                        </g>
                        <path d={svgPaths.p1e13000} fill="var(--fill-0, #FF69B4)" id="Vector_11" opacity="0.7" />
                        <path d={svgPaths.p2ac28200} fill="var(--fill-0, #00CED1)" id="Vector_12" opacity="0.8" />
                        <path d={svgPaths.pce26100} fill="var(--fill-0, #32CD32)" id="Vector_13" opacity="0.6" />
                        <path d={svgPaths.p65eeb00} fill="var(--fill-0, #9932CC)" id="Vector_14" opacity="0.7" />
                        <path d={svgPaths.p29173d00} fill="var(--fill-0, #FFD700)" id="Vector_15" opacity="0.813242" />
                        <path d={svgPaths.p29726770} fill="var(--fill-0, #FF69B4)" id="Vector_16" opacity="0.620059" />
                      </g>
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_571_519" x1="18" x2="10818" y1="48" y2="48">
                          <stop stopColor="#FF69B4" />
                          <stop offset="0.2" stopColor="#FFD700" />
                          <stop offset="0.4" stopColor="#00CED1" />
                          <stop offset="0.6" stopColor="#9932CC" />
                          <stop offset="0.8" stopColor="#32CD32" />
                          <stop offset="1" stopColor="#FF4500" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_571_519" x1="54" x2="3941.54" y1="45" y2="3633.5">
                          <stop stopColor="#FF69B4" />
                          <stop offset="0.25" stopColor="#FF1493" />
                          <stop offset="0.5" stopColor="#DC143C" />
                          <stop offset="0.75" stopColor="#FF4500" />
                          <stop offset="1" stopColor="#FFD700" />
                        </linearGradient>
                        <clipPath id="clip0_571_519">
                          <rect fill="white" height="144" width="144" />
                        </clipPath>
                      </defs>
                    </IconBackgroundImage5>
                  </div>
                  <div className="absolute h-[56.25px] left-[36px] top-[231.52px] w-[309.648px]" data-name="Heading 3">
                    <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[56.25px] left-[155.34px] text-[#1f2937] text-[45px] text-center text-nowrap top-[5px] translate-x-[-50%]">Brings Me Joy</p>
                  </div>
                  <div className="absolute h-[164.531px] left-[36px] top-[339.3px] w-[309.648px]" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-[154.95px] not-italic text-[#4b5563] text-[20.25px] text-center top-0 translate-x-[-50%] w-[308px]">{`Makeup is my creative playground. Whether it's festival glitter, glowing UV paints, or bold eyeshadow blends, I love the process of experimenting and expressing.`}</p>
                  </div>
                </div>
                <div className="absolute bg-[rgba(255,255,255,0.6)] border border-[rgba(255,255,255,0.5)] border-solid h-[598.078px] left-[870.34px] rounded-[18.45px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[383.648px]" data-name="WhySection">
                  <div className="absolute content-stretch flex items-center justify-center left-[118.82px] size-[144px] top-[36px]" data-name="Container">
                    <IconBackgroundImage5>
                      <g id="Icon">
                        <path d={svgPaths.p1f916d00} fill="url(#paint0_linear_571_542)" id="Vector" />
                        <g id="Group">
                          <path d={svgPaths.p3eae1c80} fill="url(#paint1_linear_571_542)" id="Vector_2" opacity="0.9" />
                        </g>
                        <g id="Group_2">
                          <path d={svgPaths.pa7f2600} fill="url(#paint2_radial_571_542)" id="Vector_3" opacity="0.8" />
                          <path d={svgPaths.p6e24a00} fill="var(--fill-0, #FF69B4)" id="Vector_4" opacity="0.7" />
                          <path d={svgPaths.p6c2bd80} fill="var(--fill-0, #00CED1)" id="Vector_5" opacity="0.7" />
                          <path d={svgPaths.p15772b00} fill="var(--fill-0, #FFD700)" id="Vector_6" opacity="0.7" />
                          <path d={svgPaths.pc7700f0} fill="var(--fill-0, #9932CC)" id="Vector_7" opacity="0.7" />
                          <path d={svgPaths.p6384800} fill="var(--fill-0, #FFD700)" id="Vector_8" opacity="0.9" />
                        </g>
                        <path d={svgPaths.p3d487200} fill="url(#paint3_linear_571_542)" id="Vector_9" opacity="0.8" />
                        <path d={svgPaths.p37d45180} fill="url(#paint4_linear_571_542)" id="Vector_10" opacity="0.7" />
                        <g id="Group_3" opacity="0.6">
                          <path d={svgPaths.p306ff100} fill="var(--fill-0, #32CD32)" id="Vector_11" />
                          <path d={svgPaths.p2ef3bf70} fill="var(--fill-0, #228B22)" id="Vector_12" />
                        </g>
                        <g id="Group_4" opacity="0.7">
                          <path d={svgPaths.p268b2580} fill="var(--fill-0, #7CFC00)" id="Vector_13" />
                          <path d="M44.4 102H39.6V120H44.4V102Z" fill="var(--fill-0, #32CD32)" id="Vector_14" />
                          <path d={svgPaths.pb7ef200} fill="var(--fill-0, #ADFF2F)" id="Vector_15" opacity="0.8" />
                        </g>
                        <path d={svgPaths.p1cf5c300} fill="var(--fill-0, #FFD700)" id="Vector_16" opacity="0.760078" />
                        <path d={svgPaths.p39bec00} fill="var(--fill-0, #FF69B4)" id="Vector_17" opacity="0.411035" />
                        <path d={svgPaths.p26a78500} fill="var(--fill-0, #00CED1)" id="Vector_18" opacity="0.518128" />
                      </g>
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_571_542" x1="66" x2="1480.85" y1="5472" y2="5283.35">
                          <stop stopColor="#228B22" />
                          <stop offset="0.5" stopColor="#32CD32" />
                          <stop offset="1" stopColor="#7CFC00" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_571_542" x1="62.4" x2="3238.63" y1="18" y2="1469.99">
                          <stop stopColor="#00CED1" />
                          <stop offset="0.25" stopColor="#1E90FF" />
                          <stop offset="0.5" stopColor="#9932CC" />
                          <stop offset="0.75" stopColor="#FF69B4" />
                          <stop offset="1" stopColor="#FFD700" />
                        </linearGradient>
                        <radialGradient cx="0" cy="0" gradientTransform="translate(1497.6 1491.6) scale(14.4)" gradientUnits="userSpaceOnUse" id="paint2_radial_571_542" r="1">
                          <stop stopColor="#FFD700" />
                          <stop offset="0.3" stopColor="#FF69B4" />
                          <stop offset="0.6" stopColor="#FF1493" />
                          <stop offset="1" stopColor="#9932CC" />
                        </radialGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_571_542" x1="36.6862" x2="3423" y1="79.2115" y2="-34.7521">
                          <stop stopColor="#32CD32" />
                          <stop offset="0.5" stopColor="#00FF7F" />
                          <stop offset="1" stopColor="#ADFF2F" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_571_542" x1="95.0912" x2="909.678" y1="86.7265" y2="2530.49">
                          <stop stopColor="#32CD32" />
                          <stop offset="0.5" stopColor="#00FF7F" />
                          <stop offset="1" stopColor="#ADFF2F" />
                        </linearGradient>
                      </defs>
                    </IconBackgroundImage5>
                  </div>
                  <div className="absolute h-[112.5px] left-[36px] top-[231.52px] w-[309.648px]" data-name="Heading 3">
                    <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[56.25px] left-[155.23px] text-[#1f2937] text-[45px] text-center top-[5px] translate-x-[-50%] w-[170px]">To Keep Growing</p>
                  </div>
                  <div className="absolute h-[164.531px] left-[36px] top-[395.55px] w-[309.648px]" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-[155.19px] not-italic text-[#4b5563] text-[20.25px] text-center top-0 translate-x-[-50%] w-[297px]">Every face, every colour, every night out is a chance to evolve. Makeup is a journey — and I treat each session as an opportunity to learn and expand my artistry.</p>
                  </div>
                </div>
              </div>
              <div className="absolute h-[104.805px] left-[455.63px] rounded-[11.25px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[878.88px] w-[342.742px]" data-name="WhySection" style={{ backgroundImage: "linear-gradient(162.997deg, rgb(255, 102, 204) 0%, rgb(153, 51, 255) 50%, rgb(51, 153, 255) 100%)" }}>
                <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[46.584px] left-[171.52px] not-italic text-[29.115px] text-center text-nowrap text-white top-[29.11px] translate-x-[-50%]">Read My Full Story</p>
              </div>
            </div>
          </div>
          <div className="h-[1677.078px] relative shrink-0 w-full" data-name="FeaturedSection" style={{ backgroundImage: "linear-gradient(128.332deg, rgb(252, 231, 243) 0%, rgb(243, 232, 255) 50%, rgb(219, 234, 254) 100%)" }}>
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
                        <div className="h-[34.422px] relative shrink-0 w-full" data-name="Paragraph">
                          <BackgroundImageAndText text="19 July 2025" />
                        </div>
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
                        <HeadingBackgroundImageAndText text="Forest Warrior" />
                        <div className="h-[34.422px] relative shrink-0 w-full" data-name="Paragraph">
                          <BackgroundImageAndText text="Origin Festival 2024" />
                        </div>
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
          <div className="content-stretch flex flex-col h-[1579.594px] items-start pb-0 pt-[144px] px-0 relative shrink-0 w-full" data-name="BlogPreviewSection" style={{ backgroundImage: "linear-gradient(130.012deg, rgb(239, 246, 255) 0%, rgb(250, 245, 255) 50%, rgb(253, 242, 248) 100%)" }}>
            <div className="h-[1291.594px] relative shrink-0 w-full" data-name="Container">
              <div className="absolute h-[166.609px] left-[36px] top-0 w-[1254px]" data-name="Container">
                <div className="absolute h-[64.797px] left-0 top-0 w-[1254px]" data-name="Heading 2">
                  <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[64.8px] left-[575.68px] text-[#1f2937] text-[54px] text-center top-[5.5px] tracking-[-0.54px] translate-x-[-50%] w-[361px]">Latest from the</p>
                  <div className="absolute content-stretch flex h-[59.5px] items-start left-[755.95px] top-[2.5px] w-[102.867px]" data-name="Text">
                    <p className="bg-clip-text font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[64.8px] relative shrink-0 text-[#1f2937] text-[54px] text-center text-nowrap tracking-[-0.54px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgb(31, 41, 55) 0%, rgb(31, 41, 55) 100%), linear-gradient(149.191deg, rgb(255, 102, 204) 0%, rgb(153, 51, 255) 50%, rgb(51, 153, 255) 100%)" }}>
                      Blog
                    </p>
                  </div>
                </div>
                <div className="absolute h-[65.813px] left-[249px] top-[100.8px] w-[756px]" data-name="Paragraph">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-[378.15px] not-italic text-[#374151] text-[20.25px] text-center top-0 translate-x-[-50%] w-[754px]">Discover tutorials, behind-the-scenes insights, and creative inspiration from the world of festival and UV makeup artistry.</p>
                </div>
              </div>
              <div className="absolute h-[840.18px] left-[36px] top-[274.61px] w-[1254px]" data-name="Container">
                <div className="absolute bg-[rgba(255,255,255,0.8)] border border-[rgba(255,255,255,0.5)] border-solid h-[840.18px] left-0 overflow-clip rounded-[18.45px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[601.234px]" data-name="BlogPostCard">
                  <div className="absolute content-stretch flex flex-col h-[337.063px] items-start left-0 overflow-clip top-0 w-[599.234px]" data-name="Button">
                    <div className="h-[337.063px] relative rounded-tl-[18.45px] rounded-tr-[18.45px] shrink-0 w-full" data-name="ImageWithFallback">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[18.45px] rounded-tr-[18.45px] size-full" src={imgImageWithFallback} />
                    </div>
                  </div>
                  <div className="absolute h-[501.109px] left-0 top-[337.06px] w-[599.234px]" data-name="Container">
                    <div className="absolute h-0 left-[36px] top-[36px] w-[527.234px]" data-name="Container" />
                    <div className="absolute h-[117px] left-[36px] overflow-clip top-[54px] w-[527.234px]" data-name="Heading 3">
                      <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[58.5px] left-0 text-[#1f2937] text-[45px] top-[5.5px] w-[483px]">Festival Makeup: A Complete Guide for 2024</p>
                    </div>
                    <div className="absolute content-stretch flex h-[28.797px] items-center justify-between left-[36px] top-[189px] w-[527.234px]" data-name="Container">
                      <ContainerBackgroundImage2 additionalClassNames="w-[48.336px]">
                        <IconBackgroundImage2 />
                        <TextBackgroundImageAndText text="5m" />
                      </ContainerBackgroundImage2>
                      <ContainerBackgroundImage2 additionalClassNames="w-[127.945px]">
                        <IconBackgroundImage3 />
                        <TimeBackgroundImageAndText text="Mar 15, 2024" />
                      </ContainerBackgroundImage2>
                    </div>
                    <div className="absolute content-stretch flex gap-[18px] h-[28.797px] items-center left-[36px] top-[235.8px] w-[527.234px]" data-name="ShareComponent">
                      <TextBackgroundImageAndText1 text="Share this" />
                      <ButtonBackgroundImage />
                    </div>
                    <div className="absolute h-[98.719px] left-[36px] overflow-clip top-[300.59px] w-[527.234px]" data-name="Paragraph">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#374151] text-[20.25px] top-0 w-[500px]">Everything you need to know about creating stunning festival makeup looks that last all day and glow under UV lights.</p>
                    </div>
                    <ContainerBackgroundImage additionalClassNames="w-[527.234px]" />
                  </div>
                  <div className="absolute content-stretch flex h-[43.195px] items-center left-[494.16px] px-[18px] py-[9px] rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[9px] w-[96.07px]" data-name="Text" style={{ backgroundImage: "linear-gradient(155.79deg, rgb(0, 191, 255) 0%, rgb(32, 201, 151) 50%, rgb(50, 205, 50) 100%)" }}>
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[25.2px] not-italic relative shrink-0 text-[15.75px] text-nowrap text-white">tutorials</p>
                  </div>
                </div>
                <div className="absolute bg-[rgba(255,255,255,0.8)] border border-[rgba(255,255,255,0.5)] border-solid h-[840.18px] left-[652.76px] overflow-clip rounded-[18.45px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[601.242px]" data-name="BlogPostCard">
                  <div className="absolute bg-[#f3f4f6] h-[337.07px] left-0 overflow-clip rounded-tl-[18.45px] rounded-tr-[18.45px] top-0 w-[599.242px]" data-name="ImageWithFallback">
                    <div className="absolute left-[255.62px] size-[88px] top-[124.53px]" data-name="Image (Error loading image)" />
                  </div>
                  <div className="absolute h-[501.109px] left-0 top-[337.07px] w-[599.242px]" data-name="Container">
                    <div className="absolute h-0 left-[36px] top-[36px] w-[527.242px]" data-name="Container" />
                    <div className="absolute h-[117px] left-[36px] overflow-clip top-[54px] w-[527.242px]" data-name="Heading 3">
                      <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[58.5px] left-0 text-[#1f2937] text-[45px] top-[5.5px] w-[494px]">Behind the Scenes: Berlin Nightclub Makeup</p>
                    </div>
                    <div className="absolute content-stretch flex h-[28.797px] items-center justify-between left-[36px] top-[189px] w-[527.242px]" data-name="Container">
                      <ContainerBackgroundImage2 additionalClassNames="w-[48.492px]">
                        <IconBackgroundImage2 />
                        <TextBackgroundImageAndText text="3m" />
                      </ContainerBackgroundImage2>
                      <ContainerBackgroundImage2 additionalClassNames="w-[129.922px]">
                        <IconBackgroundImage3 />
                        <TimeBackgroundImageAndText text="Feb 28, 2024" />
                      </ContainerBackgroundImage2>
                    </div>
                    <div className="absolute content-stretch flex gap-[18px] h-[28.797px] items-center left-[36px] top-[235.8px] w-[527.242px]" data-name="ShareComponent">
                      <TextBackgroundImageAndText1 text="Share this" />
                      <ButtonBackgroundImage />
                    </div>
                    <div className="absolute h-[98.719px] left-[36px] overflow-clip top-[300.59px] w-[527.242px]" data-name="Paragraph">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.906px] left-0 not-italic text-[#374151] text-[20.25px] top-0 w-[516px]">{`Take a peek behind the curtain of Berlin's vibrant nightclub scene and discover the artistry that goes into creating unforgettable looks.`}</p>
                    </div>
                    <ContainerBackgroundImage additionalClassNames="w-[527.242px]" />
                  </div>
                  <div className="absolute content-stretch flex h-[43.195px] items-center left-[414.31px] px-[18px] py-[9px] rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[9px] w-[175.93px]" data-name="Text" style={{ backgroundImage: "linear-gradient(166.205deg, rgb(0, 191, 255) 0%, rgb(32, 201, 151) 50%, rgb(50, 205, 50) 100%)" }}>
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[25.2px] not-italic relative shrink-0 text-[15.75px] text-nowrap text-white">behind-the-scenes</p>
                  </div>
                </div>
              </div>
              <div className="absolute h-[104.805px] left-[468.84px] rounded-[11.25px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[1186.79px] w-[388.313px]" data-name="Button" style={{ backgroundImage: "linear-gradient(164.896deg, rgb(0, 191, 255) 0%, rgb(32, 201, 151) 50%, rgb(50, 205, 50) 100%)" }}>
                <div className="absolute h-[46.586px] left-[51.52px] top-[29.11px] w-[244.766px]" data-name="Text">
                  <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[46.584px] left-0 not-italic text-[29.115px] text-nowrap text-white top-0">View All Blog Posts</p>
                </div>
                <BackgroundImage1 additionalClassNames="absolute left-[314.29px] top-[41.15px]">
                  <path d="M4.6875 11.25H17.8125" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
                  <path d={svgPaths.p9273580} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
                </BackgroundImage1>
              </div>
            </div>
          </div>
          <div className="h-[1396.594px] relative shrink-0 w-full" data-name="FusionNailsSection" style={{ backgroundImage: "linear-gradient(133.515deg, rgb(255, 228, 230) 0%, rgb(252, 231, 243) 50%, rgb(255, 237, 212) 100%)" }}>
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
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[11.25px] size-full" src={imgContainer2} />
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
                    <ContainerBackgroundImageAndText2 text="Fusion Nails" />
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
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[11.25px] size-full" src={imgContainer3} />
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
                    <ContainerBackgroundImageAndText2 text="Fusion Nails" />
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
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[11.25px] size-full" src={imgContainer4} />
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
                    <ContainerBackgroundImageAndText2 text="Fusion Nails" />
                  </div>
                  <div className="content-stretch flex flex-col h-[157.219px] items-start relative shrink-0 w-full" data-name="Container">
                    <HeadingBackgroundImageAndText text="Festival Glow" />
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
                      <BackgroundImage2 additionalClassNames="h-[328.141px]">
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
                      </BackgroundImage2>
                      <div className="content-stretch flex gap-[4.5px] h-[104.805px] items-center justify-center relative rounded-[11.25px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button" style={{ backgroundImage: "linear-gradient(169.944deg, rgb(255, 102, 204) 0%, rgb(153, 51, 255) 50%, rgb(51, 153, 255) 100%)" }}>
                        <BackgroundImage1 additionalClassNames="relative shrink-0">
                          <path d={svgPaths.p21253820} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
                        </BackgroundImage1>
                        <BackgroundImage6 additionalClassNames="h-[46.586px] w-[190.578px]">
                          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[46.584px] left-[95px] not-italic text-[29.115px] text-center text-nowrap text-white top-0 translate-x-[-50%]">Send Message</p>
                        </BackgroundImage6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gradient-to-r from-[#fccee8] h-px left-0 to-[#bedbff] top-[1070.54px] via-50% via-[#e9d4ff] w-[1254px]" data-name="Container" />
              <div className="absolute content-stretch flex h-[54px] items-center justify-between left-0 top-[1179.54px] w-[1254px]" data-name="Container">
                <BackgroundImage6 additionalClassNames="h-[54px] w-[168.898px]">
                  <div className="absolute content-stretch flex flex-col h-[54px] items-start left-[45px] top-0 w-[123.898px]" data-name="Container">
                    <BackgroundImage6 additionalClassNames="h-[27px] w-[123.898px]">
                      <div className="absolute content-stretch flex h-[30px] items-start left-0 top-[-1.5px] w-[45.023px]" data-name="Text">
                        <p className="font-['Playfair_Display:Bold',sans-serif] font-bold leading-[27px] relative shrink-0 text-[#1f2937] text-[27px] text-nowrap">Ash</p>
                      </div>
                      <div className="absolute content-stretch flex h-[30px] items-start left-[45.02px] top-[-1.5px] w-[63.031px]" data-name="Text">
                        <p className="font-['Playfair_Display:Bold',sans-serif] font-bold leading-[27px] relative shrink-0 text-[#e91e63] text-[27px] text-nowrap">Shaw</p>
                      </div>
                    </BackgroundImage6>
                    <BackgroundImage5 additionalClassNames="w-[123.898px]">
                      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[#e91e63] text-[20.25px] text-nowrap top-[0.5px]">makeup artist</p>
                    </BackgroundImage5>
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
                    <div className="absolute bg-[#fb64b6] left-[-4.5px] opacity-[0.586] rounded-[1.67772e+07px] size-[9px] top-[-4.5px]" data-name="Container" />
                    <div className="absolute bg-[#c27aff] left-[33.75px] opacity-[0.599] rounded-[1.67772e+07px] size-[6.75px] top-[33.75px]" data-name="Container" />
                  </div>
                </BackgroundImage6>
                <div className="h-[54px] relative shrink-0 w-[324px]" data-name="SocialLinks">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[36px] items-start relative size-full">
                    <div className="relative rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[54px]" data-name="Link" style={{ backgroundImage: "linear-gradient(135deg, rgb(225, 48, 108) 0%, rgb(253, 29, 29) 50%, rgb(252, 175, 69) 100%)" }}>
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                        <IconBackgroundImage4>
                          <path d={svgPaths.p9715b00} fill="var(--fill-0, white)" id="Vector" />
                          <path d={svgPaths.p27964300} fill="var(--fill-0, white)" id="Vector_2" />
                          <path d={svgPaths.pb129dc0} fill="var(--fill-0, white)" id="Vector_3" />
                        </IconBackgroundImage4>
                      </div>
                    </div>
                    <div className="relative rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[54px]" data-name="Link" style={{ backgroundImage: "linear-gradient(135deg, rgb(24, 119, 242) 0%, rgb(66, 165, 245) 100%)" }}>
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                        <IconBackgroundImage4>
                          <path d={svgPaths.p3843bbf0} fill="var(--fill-0, white)" id="Vector" />
                        </IconBackgroundImage4>
                      </div>
                    </div>
                    <div className="relative rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[54px]" data-name="Link" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 119, 181) 0%, rgb(0, 160, 220) 100%)" }}>
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                        <BackgroundImage3>
                          <g clipPath="url(#clip0_571_633)" id="Icon">
                            <path d={svgPaths.p1fdc6000} fill="var(--fill-0, white)" id="Vector" />
                          </g>
                          <defs>
                            <clipPath id="clip0_571_633">
                              <rect fill="white" height="27" width="27" />
                            </clipPath>
                          </defs>
                        </BackgroundImage3>
                      </div>
                    </div>
                    <div className="basis-0 grow h-[54px] min-h-px min-w-px relative rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0" data-name="Link" style={{ backgroundImage: "linear-gradient(135deg, rgb(16, 185, 129) 0%, rgb(5, 150, 105) 100%)" }}>
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                        <IconBackgroundImage4>
                          <path d={svgPaths.pb204200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                        </IconBackgroundImage4>
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