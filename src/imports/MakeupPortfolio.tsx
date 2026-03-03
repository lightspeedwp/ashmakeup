import clsx from "clsx";
import svgPaths from "./svg-2pxh40l6ub";
import imgButton from "figma:asset/5027555f5649d3975fbbb18869a21eba7338ad0d.png";
import imgButton1 from "figma:asset/1bbba60b3a10dbba6c1d259aa91b8726ded830cf.png";
import imgButton2 from "figma:asset/74899cd858a03ec6cf124a3a6b39fad5fb00012b.png";
import imgImageWithFallback from "figma:asset/f9f6a36dfebcebc13541b34483a6a99305d319e1.png";
import imgImg from "figma:asset/428cc40e40184633483ae65f75ced5f46af6821d.png";
type BackgroundImage8Props = {
  additionalClassNames?: string;
  additionalClassNames1?: string;
};

function BackgroundImage8({ children, additionalClassNames = "", additionalClassNames1 = "" }: React.PropsWithChildren<BackgroundImage8Props>) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className={clsx("relative shrink-0", additionalClassNames)}>
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg} />
        </div>
      </div>
    </div>
  );
}
type SectionBackgroundImageProps = {
  additionalClassNames?: string;
};

function SectionBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<SectionBackgroundImageProps>) {
  return (
    <div className={clsx("bg-[rgba(255,16,240,0.08)] relative rounded-[16px] shrink-0 w-full", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#b300a4] border-l-4 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start pl-[29.992px] pr-[25.992px] pt-[43.836px] relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage7({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute h-[30.813px] left-0 top-[26.91px] w-[1783.484px]">
      <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[30.81px] left-0 text-[#0f0f0f] text-[23.7px] top-[0.5px] whitespace-nowrap">{children}</p>
    </div>
  );
}

function BackgroundImage6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute h-[30.594px] left-0 top-[65.72px] w-[1783.484px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30.6px] left-0 not-italic text-[#4b5563] text-[18px] top-0 whitespace-nowrap">{children}</p>
    </div>
  );
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
  return <BackgroundImage5 additionalClassNames={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>{children}</BackgroundImage5>;
}
type BackgroundImage3Props = {
  additionalClassNames?: string;
};

function BackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage3Props>) {
  return <BackgroundImage5 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</BackgroundImage5>;
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        {children}
      </svg>
    </div>
  );
}

function SvgBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage1>
      <g id="svg">{children}</g>
    </BackgroundImage1>
  );
}

function SvgBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute left-[10px] size-[16px] top-[11px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="svg" opacity="0.5">
          {children}
        </g>
      </svg>
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImageProps>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function IconBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <div className="absolute inset-[-8.33%_-12.5%_-16.67%_-12.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          {children}
        </svg>
      </div>
    </div>
  );
}
type ButtonBackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function ButtonBackgroundImageAndText1({ text, additionalClassNames = "" }: ButtonBackgroundImageAndText1Props) {
  return (
    <div className={clsx("absolute h-[38px] left-[-10px] rounded-[4px] top-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[10px] not-italic text-[#4b5563] text-[15px] top-[7px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type HBackgroundImageAndText1Props = {
  text: string;
};

function HBackgroundImageAndText1({ text }: HBackgroundImageAndText1Props) {
  return (
    <div className="h-[15.594px] relative shrink-0 w-full">
      <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[15.6px] left-0 text-[#9ca3af] text-[12px] top-[-0.5px] tracking-[1.8px] uppercase whitespace-nowrap">{text}</p>
    </div>
  );
}

function DivBackgroundImage() {
  return (
    <BackgroundImage2 additionalClassNames="size-[20px]">
      <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
            <div className="absolute inset-[-0.83px_-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.66667">
                <path d="M0.833333 0.833333H12.5" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
            <div className="absolute inset-[-7.14%_-0.83px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 13.3333">
                <path d="M0.833333 0.833333V12.5" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage2>
  );
}
type SpanBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function SpanBackgroundImageAndText({ text, additionalClassNames = "" }: SpanBackgroundImageAndTextProps) {
  return (
    <BackgroundImage5 additionalClassNames={clsx("h-[28.797px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[28.8px] left-0 text-[#0f0f0f] text-[18px] top-[-1px] whitespace-nowrap">{text}</p>
    </BackgroundImage5>
  );
}
type ContainerBackgroundImageAndText2Props = {
  text: string;
};

function ContainerBackgroundImageAndText2({ text }: ContainerBackgroundImageAndText2Props) {
  return <BackgroundImage6>{text}</BackgroundImage6>;
}
type ContainerBackgroundImageAndText1Props = {
  text: string;
};

function ContainerBackgroundImageAndText1({ text }: ContainerBackgroundImageAndText1Props) {
  return <BackgroundImage7>{text}</BackgroundImage7>;
}
type ContainerBackgroundImageAndTextProps = {
  text: string;
};

function ContainerBackgroundImageAndText({ text }: ContainerBackgroundImageAndTextProps) {
  return (
    <div className="absolute h-[22.906px] left-0 top-0 w-[1783.484px]">
      <p className="absolute font-['Righteous:Regular',sans-serif] leading-[22.916px] left-0 not-italic text-[#6b7280] text-[13.48px] top-[-0.5px] tracking-[0.674px] uppercase whitespace-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="h-[30.594px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30.6px] left-0 not-italic text-[#0f0f0f] text-[18px] top-0 whitespace-nowrap">{text}</p>
    </div>
  );
}
type PBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function PBackgroundImageAndText({ text, additionalClassNames = "" }: PBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute h-[30.594px] left-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30.6px] left-0 not-italic text-[#0f0f0f] text-[18px] top-0 whitespace-nowrap">{text}</p>
    </div>
  );
}
type HBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function HBackgroundImageAndText({ text, additionalClassNames = "" }: HBackgroundImageAndTextProps) {
  return (
    <BackgroundImage5 additionalClassNames={clsx("h-[41.367px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[41.376px] left-0 text-[#0f0f0f] text-[34.48px] top-[-0.5px] whitespace-nowrap">{text}</p>
    </BackgroundImage5>
  );
}
type ButtonBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ButtonBackgroundImageAndText({ text, additionalClassNames = "" }: ButtonBackgroundImageAndTextProps) {
  return (
    <div style={{ backgroundImage: "linear-gradient(168deg, rgb(255, 16, 240) 0%, rgb(31, 81, 255) 100%)" }} className={clsx("absolute content-stretch flex h-[55.5px] items-center justify-center overflow-clip px-[21.92px] py-[14.16px] rounded-[9999px] top-0 w-[261.117px]", additionalClassNames)}>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[27.187px] not-italic relative shrink-0 text-[22.656px] text-center text-white whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function MakeupPortfolio() {
  return (
    <div className="bg-white relative size-full" data-name="Makeup Portfolio">
      <div className="absolute bg-white content-stretch flex flex-col h-[915px] items-start left-0 top-0 w-full" data-name="Body">
        <div className="h-[10370.758px] overflow-clip relative shrink-0 w-full" data-name="div" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 616 10371\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -519.45 -519.45 0 308 5185.4)\\'><stop stop-color=\\'rgba(230,230,235,0.4)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(173,173,176,0.3)\\' offset=\\'0.175\\'/><stop stop-color=\\'rgba(115,115,118,0.2)\\' offset=\\'0.35\\'/><stop stop-color=\\'rgba(58,58,59,0.1)\\' offset=\\'0.525\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
          <div className="absolute h-0 left-0 top-0 w-full" data-name="Container" />
          <div className="absolute bg-white h-[8919.578px] left-0 overflow-clip top-0 w-full" data-name="Container">
            <div className="absolute bg-white h-[1083.906px] left-0 overflow-clip top-0 w-full" data-name="section">
              <div className="absolute h-[1083.906px] left-0 overflow-clip top-0 w-full" data-name="div">
                <div className="absolute h-0 left-0 top-0 w-full" data-name="Container" />
                <div className="absolute bg-[#ff10f0] blur-[80px] left-[254.41px] opacity-40 rounded-[150px] size-[300px] top-[108.34px]" data-name="Container" />
                <div className="absolute bg-[#1f51ff] blur-[80px] left-[30.8px] opacity-40 rounded-[125px] size-[250px] top-[609.52px]" data-name="Container" />
                <div className="absolute bg-[#be00fe] blur-[80px] left-[246.4px] opacity-65 rounded-[100px] size-[200px] top-[433.56px]" data-name="Container" />
              </div>
              <div className="absolute h-[951.922px] left-[25.99px] top-[105.99px] w-[calc(100%-52px)]" data-name="div">
                <div className="absolute h-[543.828px] left-0 top-0 w-full" data-name="Container">
                  <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none size-[min(500px,90vw)] top-[21.91px]" data-name="Container">
                    <div className="absolute h-[291.664px] left-[83.33px] rounded-[16px] top-0 w-[333.336px]" data-name="Button">
                      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[16px] size-full" src={imgButton} />
                      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 rounded-[16px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]" />
                    </div>
                    <div className="absolute h-[291.672px] left-[291.66px] rounded-[16px] top-[208.33px] w-[208.336px]" data-name="Button">
                      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[16px] size-full" src={imgButton1} />
                      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 rounded-[16px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]" />
                    </div>
                    <div className="absolute h-[208.336px] left-0 rounded-[16px] top-[291.66px] w-[208.328px]" data-name="Button">
                      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[16px] size-full" src={imgButton2} />
                      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 rounded-[16px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]" />
                    </div>
                  </div>
                </div>
                <div className="absolute h-[360.094px] left-0 top-[591.83px] w-[564.016px]" data-name="Container">
                  <div className="absolute h-[54.203px] left-0 top-0 w-[564.016px]" data-name="h1">
                    <p className="-translate-x-1/2 absolute bg-clip-text font-['Righteous:Regular',sans-serif] leading-[54.208px] left-[282.18px] not-italic text-[49.28px] text-[transparent] text-center top-[-0.5px] tracking-[-0.9856px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(173.974deg, rgb(255, 16, 240) 0%, rgb(31, 81, 255) 100%)" }}>
                      Global Psytrance Artist
                    </p>
                  </div>
                  <div className="absolute h-[26.5px] left-[88.12px] top-[94.7px] w-[387.781px]" data-name="span">
                    <div className="absolute content-stretch flex h-[26.5px] items-start left-0 top-0 w-[53.563px]" data-name="em">
                      <p className="bg-clip-text font-['Playfair_Display:Italic',sans-serif] font-normal italic leading-[28px] relative shrink-0 text-[20px] text-[transparent] text-center whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgb(75, 85, 99) 0%, rgb(75, 85, 99) 100%), linear-gradient(90deg, rgb(236, 72, 153) 0%, rgb(244, 63, 94) 100%)" }}>
                        colour
                      </p>
                    </div>
                    <p className="-translate-x-1/2 absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[28px] left-[58.56px] text-[#4b5563] text-[20px] text-center top-0 whitespace-nowrap">{`, `}</p>
                    <div className="absolute content-stretch flex h-[26.5px] items-start left-[63.77px] top-0 w-[81.602px]" data-name="em">
                      <p className="bg-clip-text font-['Playfair_Display:Italic',sans-serif] font-normal italic leading-[28px] relative shrink-0 text-[20px] text-[transparent] text-center whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgb(75, 85, 99) 0%, rgb(75, 85, 99) 100%), linear-gradient(90deg, rgb(168, 85, 247) 0%, rgb(139, 92, 246) 100%)" }}>
                        creativity
                      </p>
                    </div>
                    <p className="-translate-x-1/2 absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[28px] left-[169.38px] text-[#4b5563] text-[20px] text-center top-0 whitespace-nowrap">{`, and `}</p>
                    <div className="absolute content-stretch flex h-[26.5px] items-start left-[194.09px] top-0 w-[92.945px]" data-name="em">
                      <p className="bg-clip-text font-['Playfair_Display:Italic',sans-serif] font-normal italic leading-[28px] relative shrink-0 text-[20px] text-[transparent] text-center whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgb(75, 85, 99) 0%, rgb(75, 85, 99) 100%), linear-gradient(90deg, rgb(59, 130, 246) 0%, rgb(6, 182, 212) 100%)" }}>
                        connection
                      </p>
                    </div>
                    <p className="-translate-x-1/2 absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[28px] left-[337.53px] text-[#4b5563] text-[20px] text-center top-0 whitespace-nowrap">{` since 2019.`}</p>
                  </div>
                  <div className="absolute h-[86.391px] left-0 top-[162.2px] w-[564.016px]" data-name="p">
                    <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[28.8px] left-[282.03px] not-italic text-[#6b7280] text-[18px] text-center top-0 w-[552px]">A journey through sound and color. Based in Cape Town, chasing summers in Berlin and Thailand. I bring neon visions to life on the world’s biggest psytrance dancefloors.</p>
                  </div>
                  <div className="absolute h-[55.5px] left-0 top-[304.59px] w-[564.016px]" data-name="Container">
                    <ButtonBackgroundImageAndText text="Explore my portfolio" additionalClassNames="left-[151.45px]" />
                  </div>
                </div>
              </div>
              <div className="absolute left-[260px] rounded-[48px] size-[96px] top-[955.91px]" data-name="button">
                <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid left-0 rounded-[48px] size-[96px] top-0" data-name="div" />
                <div className="absolute content-stretch flex flex-col items-start left-[20px] size-[56px] top-[20px]" data-name="div">
                  <div className="h-[56px] overflow-clip relative shrink-0 w-full" data-name="svg">
                    <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                      <div className="absolute inset-[-16.67%_-8.33%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.6667 18.6667">
                          <path d={svgPaths.p18220a00} id="Vector" stroke="var(--stroke-0, #0F0F0F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.66667" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute h-[7835.672px] left-0 top-[1083.91px] w-[616px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 616 7835.7\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -392.99 -392.99 0 308 3917.8)\\'><stop stop-color=\\'rgba(230,230,235,0.4)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(173,173,176,0.3)\\' offset=\\'0.175\\'/><stop stop-color=\\'rgba(115,115,118,0.2)\\' offset=\\'0.35\\'/><stop stop-color=\\'rgba(58,58,59,0.1)\\' offset=\\'0.525\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
              <div className="absolute h-[7689.336px] left-0 top-[113.7px] w-full" data-name="Container">
                <div className="absolute content-stretch flex flex-col h-[528px] items-start left-0 pt-[31.398px] top-0 w-full" data-name="Container">
                  <div className="h-[465.211px] relative rounded-[16px] shrink-0 w-full" data-name="section">
                    <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-4 border-solid inset-0 pointer-events-none rounded-[16px]" />
                    <div className="content-stretch flex flex-col items-start pl-[29.992px] pr-[25.992px] pt-[43.836px] relative size-full">
                      <div className="content-stretch flex flex-col gap-[59.828px] h-[377.539px] items-start relative shrink-0 w-full" data-name="div">
                        <HBackgroundImageAndText text="The electric journey begins" additionalClassNames="w-full" />
                        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[31.398px] items-start relative size-full">
                            <div className="h-auto relative shrink-0 w-full" data-name="p">
                              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30.6px] left-0 not-italic text-[#0f0f0f] text-[18px] top-0 w-full">I am a global psytrance makeup artist. That’s the only way to describe the life I live. I don’t just attend festivals; I enhance them. My art is born from the beat, designed to glow under the UV lights of the world’s best trance floors. It’s a passion that has taken me from the tip of Africa to the clubs of Berlin and the jungles of Thailand.</p>
                            </div>
                            <div className="h-auto relative shrink-0 w-full p-4" data-name="blockquote">
                              <div aria-hidden="true" className="absolute border-[#ff10f0] border-b-4 border-solid border-t-4 inset-0 pointer-events-none" />
                              <div className="relative h-auto w-full py-8" data-name="cite">
                                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22.916px] not-italic text-[#6b7280] text-[13.48px] text-center whitespace-nowrap">— Ash Shaw</p>
                              </div>
                              <div className="absolute h-[60px] left-1/2 -translate-x-1/2 opacity-15 top-[-19.93px] w-[28px]" data-name="span">
                                <p className="font-['Playfair_Display:Bold',sans-serif] font-bold leading-[59.84px] text-[#0f0f0f] text-[59.84px] text-center whitespace-nowrap">“</p>
                              </div>
                              <div className="relative h-auto w-full" data-name="p">
                                <p className="font-['Playfair_Display:Medium_Italic',sans-serif] font-medium italic leading-[42.66px] text-[#0f0f0f] text-[28.44px] text-center">Every brush stroke ignites a story.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col h-auto items-start left-0 pt-[43.836px] px-[25.992px] top-[549.92px] w-full" data-name="Container">
                  <div className="content-stretch flex flex-col gap-[59.828px] h-auto items-start relative shrink-0 w-full" data-name="Section">
                    <HBackgroundImageAndText text="Festival euphoria" additionalClassNames="w-full" />
                    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30.6px] text-[#0f0f0f] text-[18px]">You’ll find me where the bass is deepest. I travel with my UV pigments, ready to transform fellow dancers. It’s about synchronicity—being in the right place with the right energy.</p>
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30.6px] text-[#0f0f0f] text-[18px]">My process is intuitive and electric. I see the potential for neon on your skin, how it will look when the lasers hit. It’s fast, intense, and deeply connected to the psychedelic experience.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col h-auto items-start left-0 pt-[43.836px] px-[25.992px] top-[853.89px] w-full" data-name="Container">
                  <div className="content-stretch flex flex-col gap-[59.828px] h-auto items-start relative shrink-0 w-full" data-name="Section">
                    <HBackgroundImageAndText text="UV explorations" additionalClassNames="w-full" />
                    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[31.398px] items-center relative size-full">
                        <div className="h-auto relative rounded-[16px] shrink-0 w-full" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                            <div className="h-auto relative rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="ImageWithFallback">
                              <img alt="" className="max-w-none object-cover rounded-[16px] w-full" src={imgImageWithFallback} />
                            </div>
                          </div>
                        </div>
                        <div className="w-full">
                          <PBackgroundImageAndText text="Between August and November, I shift to Thailand. The jungle parties and island festivals call for a wilder, more organic neon palette." additionalClassNames="top-0 w-[1414.945px]" />
                          <PBackgroundImageAndText text="Here, I experiment with tribal UV patterns and bioluminescent designs that mimic the nature around us, glowing intensely under the blacklights of the psytrance stage." additionalClassNames="top-[68.51px] w-[1414.945px]" />
                          <div className="absolute bg-[rgba(0,247,255,0.08)] border border-[rgba(0,247,255,0.25)] border-solid h-[142.258px] left-0 rounded-[16px] top-[158.93px] w-[1414.945px]" data-name="Container">
                            <div className="absolute h-[26px] left-[31.4px] top-[21.91px] w-[1350.148px]" data-name="h3">
                              <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[26px] left-0 text-[#008f94] text-[20px] top-[0.5px] whitespace-nowrap">Technical mastery</p>
                            </div>
                            <div className="absolute bg-[#008f94] h-[2px] left-[31.4px] opacity-80 top-[57.39px] w-[48px]" data-name="Container" />
                            <div className="absolute h-[28.797px] left-[31.4px] opacity-95 top-[73.55px] w-[1350.148px]" data-name="p">
                              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28.8px] left-0 not-italic text-[#374151] text-[18px] top-0 whitespace-nowrap">Specialized knowledge of UV-reactive pigments, application techniques, and dual-lighting design principles.</p>
                            </div>
                          </div>
                        </BackgroundImage4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col h-[446px] items-start left-0 pt-[43.836px] px-[25.992px] top-[3676.61px] w-[1875px]" data-name="Container">
                  <div className="content-stretch flex flex-col gap-[59.828px] h-[358.148px] items-start relative shrink-0 w-full" data-name="Section">
                    <HBackgroundImageAndText text="Professional mousse eyeshadows" additionalClassNames="w-[1823.484px]" />
                    <BackgroundImage4 additionalClassNames="w-[1823.484px]">
                      <PBackgroundImageAndText text="Cape Town is my origin and my anchor. But the world is my studio. I’m always open to international creative collaborations." additionalClassNames="top-0 w-[1823.484px]" />
                      <PBackgroundImageAndText text="Whether I’m in South Africa, Europe, or Asia, the mission is the same: to elevate the party through the power of UV color." additionalClassNames="top-[46.59px] w-[1823.484px]" />
                      <div className="absolute h-[148.367px] left-0 top-[108.59px] w-[1823.484px]" data-name="Container">
                        <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[23.633px] h-[148.367px] items-center left-0 px-px py-[22.914px] rounded-[8px] top-0 w-[347.164px]" data-name="Container">
                          <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
                          <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-[56px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgba(255, 16, 240, 0.15) 0%, rgba(190, 0, 254, 0.15) 100%)" }}>
                            <div aria-hidden="true" className="absolute border border-[rgba(255,16,240,0.25)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_15px_0px_rgba(255,16,240,0.3)]" />
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
                              <IconBackgroundImage>
                                <g filter="url(#filter0_d_2091_1343)" id="Icon">
                                  <path d={svgPaths.p2e216100} id="Vector" stroke="var(--stroke-0, #B300A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                  <path d={svgPaths.p35449980} fill="var(--fill-0, #B300A4)" id="Vector_2" stroke="var(--stroke-0, #B300A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                  <path d={svgPaths.p268c64f0} fill="var(--fill-0, #B300A4)" id="Vector_3" stroke="var(--stroke-0, #B300A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                  <path d={svgPaths.p25190800} fill="var(--fill-0, #B300A4)" id="Vector_4" stroke="var(--stroke-0, #B300A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                  <path d={svgPaths.p3424ae00} fill="var(--fill-0, #B300A4)" id="Vector_5" stroke="var(--stroke-0, #B300A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </g>
                                <defs>
                                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="32" id="filter0_d_2091_1343" width="32" x="-1" y="-1">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                    <feOffset dy="1" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2091_1343" />
                                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_2091_1343" mode="normal" result="shape" />
                                  </filter>
                                </defs>
                              </IconBackgroundImage>
                            </div>
                          </div>
                          <BackgroundImage3 additionalClassNames="h-[22.906px] opacity-90 w-[77.609px]">
                            <p className="-translate-x-1/2 absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[22.916px] left-[39px] text-[#1f2937] text-[13.48px] text-center top-0 whitespace-nowrap">Color theory</p>
                          </BackgroundImage3>
                        </div>
                        <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[23.633px] h-[148.367px] items-center left-[369.08px] px-px py-[22.914px] rounded-[8px] top-0 w-[347.164px]" data-name="Container">
                          <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
                          <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-[56px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgba(0, 247, 255, 0.15) 0%, rgba(31, 81, 255, 0.15) 100%)" }}>
                            <div aria-hidden="true" className="absolute border border-[rgba(0,247,255,0.25)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_15px_0px_rgba(0,247,255,0.3)]" />
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
                              <IconBackgroundImage>
                                <g filter="url(#filter0_d_2091_1418)" id="Icon">
                                  <path d={svgPaths.p148e5f40} id="Vector" stroke="var(--stroke-0, #008F94)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                  <path d={svgPaths.p19e73d00} id="Vector_2" stroke="var(--stroke-0, #008F94)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </g>
                                <defs>
                                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="32" id="filter0_d_2091_1418" width="32" x="-1" y="-1">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                    <feOffset dy="1" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2091_1418" />
                                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_2091_1418" mode="normal" result="shape" />
                                  </filter>
                                </defs>
                              </IconBackgroundImage>
                            </div>
                          </div>
                          <BackgroundImage3 additionalClassNames="h-[22.906px] opacity-90 w-[108.172px]">
                            <p className="-translate-x-1/2 absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[22.916px] left-[54.5px] text-[#1f2937] text-[13.48px] text-center top-0 whitespace-nowrap">Blending mastery</p>
                          </BackgroundImage3>
                        </div>
                        <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[23.633px] h-[148.367px] items-center left-[738.16px] px-px py-[22.914px] rounded-[8px] top-0 w-[347.164px]" data-name="Container">
                          <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
                          <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-[56px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgba(57, 255, 20, 0.15) 0%, rgba(255, 255, 0, 0.15) 100%)" }}>
                            <div aria-hidden="true" className="absolute border border-[rgba(57,255,20,0.25)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_15px_0px_rgba(57,255,20,0.3)]" />
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
                              <div className="relative shrink-0 size-[24px]" data-name="Icon">
                                <div className="absolute inset-[-8.33%_-12.57%_-16.66%_-12.5%]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.0166 29.9984">
                                    <g filter="url(#filter0_d_2091_1413)" id="Icon">
                                      <path d={svgPaths.p2142c780} id="Vector" stroke="var(--stroke-0, #008F00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                      <path d={svgPaths.p34310900} id="Vector_2" stroke="var(--stroke-0, #008F00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                      <path d={svgPaths.p5a25a00} id="Vector_3" stroke="var(--stroke-0, #008F00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                    </g>
                                    <defs>
                                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="32" id="filter0_d_2091_1413" width="32" x="-0.999997" y="-0.999643">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                        <feOffset dy="1" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                                        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2091_1413" />
                                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_2091_1413" mode="normal" result="shape" />
                                      </filter>
                                    </defs>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <BackgroundImage3 additionalClassNames="h-[22.906px] opacity-90 w-[81.906px]">
                            <p className="-translate-x-1/2 absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[22.916px] left-[41px] text-[#1f2937] text-[13.48px] text-center top-0 whitespace-nowrap">Texture work</p>
                          </BackgroundImage3>
                        </div>
                        <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[23.633px] h-[148.367px] items-center left-[1107.23px] px-px py-[22.914px] rounded-[8px] top-0 w-[347.164px]" data-name="Container">
                          <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
                          <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-[56px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgba(190, 0, 254, 0.15) 0%, rgba(255, 16, 240, 0.15) 100%)" }}>
                            <div aria-hidden="true" className="absolute border border-[rgba(190,0,254,0.25)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_15px_0px_rgba(190,0,254,0.3)]" />
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
                              <div className="relative shrink-0 size-[24px]" data-name="Icon">
                                <div className="absolute inset-[-8.33%_0_-16.67%_0]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 30">
                                    <g filter="url(#filter0_d_2091_1330)" id="Icon">
                                      <path d={svgPaths.p3c5f1228} id="Vector" stroke="var(--stroke-0, #7800A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                      <path d="M9 20H15" id="Vector_2" stroke="var(--stroke-0, #7800A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                      <path d="M10 24H14" id="Vector_3" stroke="var(--stroke-0, #7800A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                    </g>
                                    <defs>
                                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="32" id="filter0_d_2091_1330" width="32" x="-4" y="-1">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                        <feOffset dy="1" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                                        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2091_1330" />
                                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_2091_1330" mode="normal" result="shape" />
                                      </filter>
                                    </defs>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <BackgroundImage3 additionalClassNames="h-[22.906px] opacity-90 w-[88.297px]">
                            <p className="-translate-x-1/2 absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[22.916px] left-[44.5px] text-[#1f2937] text-[13.48px] text-center top-0 whitespace-nowrap">UV techniques</p>
                          </BackgroundImage3>
                        </div>
                        <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[23.633px] h-[148.367px] items-center left-[1476.31px] px-px py-[22.914px] rounded-[8px] top-0 w-[347.164px]" data-name="Container">
                          <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
                          <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-[56px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgba(31, 81, 255, 0.15) 0%, rgba(57, 255, 20, 0.15) 100%)" }}>
                            <div aria-hidden="true" className="absolute border border-[rgba(31,81,255,0.25)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_15px_0px_rgba(31,81,255,0.3)]" />
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
                              <div className="relative shrink-0 size-[24px]" data-name="Icon">
                                <div className="absolute inset-[-8.34%_-12.51%_-16.68%_-12.51%]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.0048 30.0048">
                                    <g clipPath="url(#clip0_2091_1407)" filter="url(#filter0_d_2091_1407)" id="Icon">
                                      <path d={svgPaths.p23774f00} id="Vector" stroke="var(--stroke-0, #002DB3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                      <path d="M23.0024 4.00239V8.00239" id="Vector_2" stroke="var(--stroke-0, #002DB3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                      <path d="M25.0024 6.00239H21.0024" id="Vector_3" stroke="var(--stroke-0, #002DB3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                      <path d={svgPaths.p24e62a80} id="Vector_4" stroke="var(--stroke-0, #002DB3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                    </g>
                                    <defs>
                                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="32" id="filter0_d_2091_1407" width="32" x="-0.997606" y="-0.997606">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                        <feOffset dy="1" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                                        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2091_1407" />
                                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_2091_1407" mode="normal" result="shape" />
                                      </filter>
                                      <clipPath id="clip0_2091_1407">
                                        <rect fill="white" height="24" transform="translate(3.00239 2.00239)" width="24" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <BackgroundImage3 additionalClassNames="h-[22.906px] opacity-90 w-[95.219px]">
                            <p className="-translate-x-1/2 absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[22.916px] left-[48px] text-[#1f2937] text-[13.48px] text-center top-0 whitespace-nowrap">Creative design</p>
                          </BackgroundImage3>
                        </div>
                      </div>
                    </BackgroundImage4>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col h-[410px] items-start left-0 pt-[31.398px] top-[4144.34px] w-[1875px]" data-name="Container">
                  <div className="bg-[rgba(190,0,254,0.08)] h-[347.469px] relative rounded-[16px] shrink-0 w-full" data-name="section">
                    <div aria-hidden="true" className="absolute border-[#7800a1] border-l-4 border-solid inset-0 pointer-events-none rounded-[16px]" />
                    <div className="content-stretch flex flex-col items-start pl-[29.992px] pr-[25.992px] pt-[43.836px] relative size-full">
                      <div className="content-stretch flex flex-col gap-[59.828px] h-[259.797px] items-start relative shrink-0 w-full" data-name="div">
                        <HBackgroundImageAndText text="UV makeup artistry" additionalClassNames="w-[1819.484px]" />
                        <BackgroundImage4 additionalClassNames="w-[1819.484px]">
                          <PBackgroundImageAndText text="Precision in chaos. That’s my specialty. I’ve mastered ambidextrous application to ensure I can work effectively in the middle of a crowded dancefloor." additionalClassNames="top-0 w-[1819.484px]" />
                          <PBackgroundImageAndText text="This skill allows me to paint complex symmetrical designs and third-eye patterns without you having to leave the immersion of the festival." additionalClassNames="top-[46.59px] w-[1819.484px]" />
                          <div className="absolute h-[59.5px] left-0 top-[99.1px] w-[1819.484px]" data-name="Container">
                            <div className="absolute h-[59.5px] left-[754.23px] rounded-[9999px] top-0 w-[311.023px]" data-name="button">
                              <div className="content-stretch flex items-center justify-center overflow-clip px-[23.92px] py-[16.16px] relative rounded-[inherit] size-full">
                                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[27.187px] not-italic relative shrink-0 text-[#b300a4] text-[22.656px] text-center whitespace-nowrap">View UV makeup gallery</p>
                              </div>
                              <div aria-hidden="true" className="absolute border-2 border-[#ff10f0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                            </div>
                          </div>
                        </BackgroundImage4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col h-[458px] items-start left-0 pt-[43.836px] px-[25.992px] top-[4576.52px] w-[1875px]" data-name="Container">
                  <div className="content-stretch flex flex-col gap-[59.828px] h-[370.633px] items-start relative shrink-0 w-full" data-name="Section">
                    <HBackgroundImageAndText text="Creative process" additionalClassNames="w-[1823.484px]" />
                    <BackgroundImage4 additionalClassNames="w-[1823.484px]">
                      <PBackgroundImageAndText text="I don’t just paint faces; I unlock avatars. I focus on eyes and face because that’s the center of connection on the dancefloor." additionalClassNames="top-0 w-[1823.484px]" />
                      <PBackgroundImageAndText text="After the transformation, you’re not just a spectator; you’re part of the visual spectacle of the event. I capture the moment, and we stay connected through the global tribe." additionalClassNames="top-[46.59px] w-[1823.484px]" />
                      <div className="absolute border-[#39ff14] border-b-4 border-solid border-t-4 h-[129.453px] left-0 top-[108.59px] w-[1823.484px]" data-name="blockquote">
                        <div className="absolute h-[60px] left-[897.85px] opacity-15 top-[-23.93px] w-[28px]" data-name="span">
                          <p className="-translate-x-1/2 absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[59.84px] left-[14px] text-[#39ff14] text-[59.84px] text-center top-0 whitespace-nowrap">“</p>
                        </div>
                        <div className="absolute h-[42.656px] left-[21.91px] top-[31.4px] w-[1779.656px]" data-name="p">
                          <p className="-translate-x-1/2 absolute font-['Playfair_Display:Medium_Italic',sans-serif] font-medium italic leading-[42.66px] left-[890.02px] text-[#0f0f0f] text-[28.44px] text-center top-0 whitespace-nowrap">True artistry lies in amplifying your inner light.</p>
                        </div>
                      </div>
                    </BackgroundImage4>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col h-[796px] items-start left-0 pt-[43.836px] px-[25.992px] top-[5056.74px] w-[1875px]" data-name="Container">
                  <div className="h-[708.352px] relative shrink-0 w-full" data-name="Section">
                    <div className="absolute h-[41.367px] left-0 top-0 w-[1823.484px]" data-name="h2">
                      <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[41.376px] left-0 text-[#0f0f0f] text-[34.48px] top-[-0.5px] whitespace-nowrap">The costume evolution</p>
                    </div>
                    <div className="absolute h-[607.156px] left-0 top-[101.2px] w-[1823.484px]" data-name="Container">
                      <div className="absolute bg-gradient-to-b from-[#ff10f0] h-[607.156px] left-[8px] to-[rgba(0,0,0,0)] top-0 w-[2px]" data-name="Container" />
                      <div className="absolute h-[127.711px] left-[40px] top-0 w-[1783.484px]" data-name="Container">
                        <ContainerBackgroundImageAndText text="1999" />
                        <ContainerBackgroundImageAndText1 text="The yellow suit" />
                        <BackgroundImage6>{`Found at a charity shop. First worn at Vortex 1999. Earned him the nickname "the Chicken Man." The beginning of standing out on purpose.`}</BackgroundImage6>
                        <div className="absolute bg-[#ff10f0] border-3 border-solid border-white left-[-36px] rounded-[10px] shadow-[0px_0px_8px_0px_rgba(255,16,240,0.4)] size-[20px] top-[4px]" data-name="Container" />
                      </div>
                      <div className="absolute h-[127.711px] left-[40px] top-[127.71px] w-[1783.484px]" data-name="Container">
                        <ContainerBackgroundImageAndText text="Early 2000s" />
                        <ContainerBackgroundImageAndText1 text="The red suit" />
                        <ContainerBackgroundImageAndText2 text="Escalation. Brighter, bolder, louder." />
                        <div className="absolute bg-[#ff10f0] border-3 border-solid border-white left-[-36px] rounded-[10px] shadow-[0px_0px_8px_0px_rgba(255,16,240,0.4)] size-[20px] top-[4px]" data-name="Container" />
                      </div>
                      <div className="absolute h-[127.711px] left-[40px] top-[255.42px] w-[1783.484px]" data-name="Container">
                        <ContainerBackgroundImageAndText text="Mid-2000s" />
                        <BackgroundImage7>{`White & black cow suit`}</BackgroundImage7>
                        <ContainerBackgroundImageAndText2 text="The pivot to character. Festival identity took shape." />
                        <div className="absolute bg-[#ff10f0] border-3 border-solid border-white left-[-36px] rounded-[10px] shadow-[0px_0px_8px_0px_rgba(255,16,240,0.4)] size-[20px] top-[4px]" data-name="Container" />
                      </div>
                      <div className="absolute h-[127.711px] left-[40px] top-[383.13px] w-[1783.484px]" data-name="Container">
                        <ContainerBackgroundImageAndText text="Late 2000s" />
                        <BackgroundImage7>{`Brown & beige cow suit`}</BackgroundImage7>
                        <BackgroundImage6>{`Became known as "the Cow Man" for years. People at festivals STILL ask if he’s the guy who used to dress as the cow man.`}</BackgroundImage6>
                        <div className="absolute bg-[#ff10f0] border-3 border-solid border-white left-[-36px] rounded-[10px] shadow-[0px_0px_8px_0px_rgba(255,16,240,0.4)] size-[20px] top-[4px]" data-name="Container" />
                      </div>
                      <div className="absolute h-[96.313px] left-[40px] top-[510.84px] w-[1783.484px]" data-name="Container">
                        <ContainerBackgroundImageAndText text="July 2019" />
                        <ContainerBackgroundImageAndText1 text="UV paint" />
                        <ContainerBackgroundImageAndText2 text="The final evolution. The costume became the art became the identity. No longer wearing something outrageous — now MAKING other people outrageous." />
                        <div className="absolute bg-[#ff10f0] border-3 border-solid border-white left-[-36px] rounded-[10px] shadow-[0px_0px_8px_0px_rgba(255,16,240,0.4)] size-[20px] top-[4px]" data-name="Container" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col h-[394px] items-start left-0 pt-[31.398px] top-[5874.68px] w-[1875px]" data-name="Container">
                  <SectionBackgroundImage additionalClassNames="h-[331.469px]">
                    <div className="content-stretch flex flex-col gap-[59.828px] h-[243.797px] items-start relative shrink-0 w-full" data-name="div">
                      <HBackgroundImageAndText text="Wired different" additionalClassNames="w-[1819.484px]" />
                      <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1819.484px]" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[21.914px] items-start relative size-full">
                          <div className="h-[61.188px] relative shrink-0 w-full" data-name="p">
                            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30.6px] left-0 not-italic text-[#0f0f0f] text-[18px] top-0 w-[1810px]">ADHD isn’t a deficit of attention — it’s a surplus of it, all going in directions that school was never designed to handle. Hyperfocus during painting sessions, spontaneous design without pre-sketching, ambidextrous technique in the chaos of a crowded dancefloor — it’s all connected to the way his brain processes the world.</p>
                          </div>
                          <div className="h-[59.5px] relative shrink-0 w-full" data-name="Container">
                            <div className="absolute h-[59.5px] left-[732.03px] rounded-[9999px] top-0 w-[355.422px]" data-name="button">
                              <div className="content-stretch flex gap-[16px] items-center justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
                                <BackgroundImage3 additionalClassNames="h-[27.188px] w-[268.945px]">
                                  <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[27.187px] left-[134.5px] not-italic text-[#b300a4] text-[22.656px] text-center top-[-0.5px] whitespace-nowrap">Read the full ADHD story</p>
                                </BackgroundImage3>
                                <div className="relative shrink-0 size-[22.648px]" data-name="ArrowRight">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.6484 22.6484">
                                    <g id="ArrowRight">
                                      <path d="M4.71842 11.3242H17.93" id="Vector" stroke="var(--stroke-0, #B300A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.88737" />
                                      <path d={svgPaths.p396e180} id="Vector_2" stroke="var(--stroke-0, #B300A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.88737" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div aria-hidden="true" className="absolute border-2 border-[#ff10f0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SectionBackgroundImage>
                </div>
                <div className="absolute content-stretch flex flex-col h-[521px] items-start left-0 pt-[31.398px] top-[6290.86px] w-[1875px]" data-name="Container">
                  <SectionBackgroundImage additionalClassNames="h-[458.305px]">
                    <div className="content-stretch flex flex-col gap-[59.828px] h-[370.633px] items-start relative shrink-0 w-full" data-name="div">
                      <HBackgroundImageAndText text="Making others shine" additionalClassNames="w-[1819.484px]" />
                      <BackgroundImage4 additionalClassNames="w-[1819.484px]">
                        <PBackgroundImageAndText text="Ash was bullied as a kid because he was small. The matric kids made him stand on stage and apologise to the entire school for not knowing the inter-school songs." additionalClassNames="top-0 w-[1819.484px]" />
                        <PBackgroundImageAndText text="This formative pain is directly connected to his makeup artistry. The kid who was publicly humiliated now creates moments of public celebration for others." additionalClassNames="top-[46.59px] w-[1819.484px]" />
                        <div className="absolute border-[#ff10f0] border-b-4 border-solid border-t-4 h-[129.453px] left-0 top-[108.59px] w-[1819.484px]" data-name="blockquote">
                          <div className="absolute h-[60px] left-[895.85px] opacity-15 top-[-23.93px] w-[28px]" data-name="span">
                            <p className="-translate-x-1/2 absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[59.84px] left-[14px] text-[#ff10f0] text-[59.84px] text-center top-0 whitespace-nowrap">“</p>
                          </div>
                          <div className="absolute h-[42.656px] left-[21.91px] top-[31.4px] w-[1775.656px]" data-name="p">
                            <p className="-translate-x-1/2 absolute font-['Playfair_Display:Medium_Italic',sans-serif] font-medium italic leading-[42.66px] left-[888.25px] text-[#0f0f0f] text-[28.44px] text-center top-0 whitespace-nowrap">The kid who was made to feel small now makes other people feel radiant, confident, and alive.</p>
                          </div>
                        </div>
                      </BackgroundImage4>
                    </div>
                  </SectionBackgroundImage>
                </div>
                <div className="absolute content-stretch flex flex-col h-[343px] items-start left-0 pt-[43.836px] px-[25.992px] top-[6833.88px] w-[1875px]" data-name="Container">
                  <div className="content-stretch flex flex-col gap-[59.828px] h-[255.797px] items-start relative shrink-0 w-full" data-name="Section">
                    <HBackgroundImageAndText text="Looking forward" additionalClassNames="w-[1823.484px]" />
                    <BackgroundImage4 additionalClassNames="w-[1823.484px]">
                      <PBackgroundImageAndText text="Every festival is a new gallery. I’m constantly evolving my techniques, exploring new UV pigments and reactive materials." additionalClassNames="top-0 w-[1823.484px]" />
                      <PBackgroundImageAndText text="I live for this art. If you see the neon-clad artist on the dancefloor, come say hi. Let’s create something that glows." additionalClassNames="top-[46.59px] w-[1823.484px]" />
                      <div className="absolute h-[55.5px] left-0 top-[99.1px] w-[1823.484px]" data-name="Container">
                        <ButtonBackgroundImageAndText text="Explore my portfolio" additionalClassNames="left-[781.18px]" />
                      </div>
                    </BackgroundImage4>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col h-[392.813px] items-center left-[243.73px] py-[21.914px] rounded-[24px] top-[7247.89px] w-[1388.016px]" data-name="Section" style={{ backgroundImage: "linear-gradient(164.198deg, rgba(190, 0, 254, 0.03) 0%, rgba(31, 81, 255, 0.03) 50%, rgba(57, 255, 20, 0.02) 100%)" }}>
                  <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-[1344.188px]" data-name="Container">
                    <div className="overflow-clip rounded-[inherit] size-full">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
                        <div className="bg-[#f9fafb] h-[90.594px] relative shrink-0 w-full" data-name="Container">
                          <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
                          <div className="content-stretch flex flex-col items-start pb-px pt-[24px] px-[32px] relative size-full">
                            <div className="h-[33.594px] relative shrink-0 w-full" data-name="h2">
                              <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[33.6px] left-0 text-[#0f0f0f] text-[28px] top-0 whitespace-nowrap">Frequently Asked Questions</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col h-[256.391px] items-start relative shrink-0 w-full" data-name="Container">
                          <div className="content-stretch flex flex-col h-[85.797px] items-start pb-px relative shrink-0 w-full" data-name="Container">
                            <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
                            <BackgroundImage additionalClassNames="h-[60.797px]">
                              <SpanBackgroundImageAndText text="Where is Ash based?" additionalClassNames="w-[165.313px]" />
                              <DivBackgroundImage />
                            </BackgroundImage>
                          </div>
                          <div className="content-stretch flex flex-col h-[85.797px] items-start pb-px relative shrink-0 w-full" data-name="Container">
                            <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
                            <BackgroundImage additionalClassNames="h-[60.797px]">
                              <SpanBackgroundImageAndText text="What festivals does he attend?" additionalClassNames="w-[243.242px]" />
                              <DivBackgroundImage />
                            </BackgroundImage>
                          </div>
                          <BackgroundImage additionalClassNames="h-[60.797px]">
                            <SpanBackgroundImageAndText text="Does he do commissions?" additionalClassNames="w-[209.125px]" />
                            <DivBackgroundImage />
                          </BackgroundImage>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white content-stretch flex flex-col h-[69.875px] items-start left-0 pb-px pt-[14.156px] px-[25.992px] top-[1105.82px] w-[1875.469px]" data-name="Container">
              <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex gap-[8px] h-[40.563px] items-start overflow-clip relative shrink-0 w-full" data-name="ul">
                <BackgroundImage3 additionalClassNames="h-[40.563px] w-[137.219px]">
                  <div className="absolute bg-[#be00fe] border-[#be00fe] border-[1.5px] border-solid h-[40.563px] left-0 rounded-[9999px] top-0 w-[137.219px]" data-name="button">
                    <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21.568px] left-[67px] not-italic text-[13.48px] text-center text-white top-[7.5px] tracking-[0.674px] uppercase whitespace-nowrap">The journey</p>
                  </div>
                </BackgroundImage3>
                <BackgroundImage3 additionalClassNames="h-[40.563px] w-[182.703px]">
                  <div className="absolute border-[#d1d5db] border-[1.5px] border-solid h-[40.563px] left-0 rounded-[9999px] top-0 w-[182.703px]" data-name="button">
                    <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21.568px] left-[90px] not-italic text-[#4b5563] text-[13.48px] text-center top-[7.5px] tracking-[0.674px] uppercase whitespace-nowrap">Festival euphoria</p>
                  </div>
                </BackgroundImage3>
                <BackgroundImage3 additionalClassNames="h-[40.563px] w-[171.094px]">
                  <div className="absolute border-[#d1d5db] border-[1.5px] border-solid h-[40.563px] left-0 rounded-[9999px] top-0 w-[171.094px]" data-name="button">
                    <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21.568px] left-[84px] not-italic text-[#4b5563] text-[13.48px] text-center top-[7.5px] tracking-[0.674px] uppercase whitespace-nowrap">UV explorations</p>
                  </div>
                </BackgroundImage3>
                <BackgroundImage3 additionalClassNames="h-[40.563px] w-[204.695px]">
                  <div className="absolute border-[#d1d5db] border-[1.5px] border-solid h-[40.563px] left-0 rounded-[9999px] top-0 w-[204.695px]" data-name="button">
                    <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21.568px] left-[101.5px] not-italic text-[#4b5563] text-[13.48px] text-center top-[7.5px] tracking-[0.674px] uppercase whitespace-nowrap">Mousse eyeshadows</p>
                  </div>
                </BackgroundImage3>
                <BackgroundImage3 additionalClassNames="h-[40.563px] w-[132.07px]">
                  <div className="absolute border-[#d1d5db] border-[1.5px] border-solid h-[40.563px] left-0 rounded-[9999px] top-0 w-[132.07px]" data-name="button">
                    <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21.568px] left-[65.5px] not-italic text-[#4b5563] text-[13.48px] text-center top-[7.5px] tracking-[0.674px] uppercase whitespace-nowrap">UV artistry</p>
                  </div>
                </BackgroundImage3>
                <BackgroundImage3 additionalClassNames="h-[40.563px] w-[178.852px]">
                  <div className="absolute border-[#d1d5db] border-[1.5px] border-solid h-[40.563px] left-0 rounded-[9999px] top-0 w-[178.852px]" data-name="button">
                    <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21.568px] left-[88px] not-italic text-[#4b5563] text-[13.48px] text-center top-[7.5px] tracking-[0.674px] uppercase whitespace-nowrap">Creative process</p>
                  </div>
                </BackgroundImage3>
                <BackgroundImage3 additionalClassNames="h-[40.563px] w-[196.648px]">
                  <div className="absolute border-[#d1d5db] border-[1.5px] border-solid h-[40.563px] left-0 rounded-[9999px] top-0 w-[196.648px]" data-name="button">
                    <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21.568px] left-[97.5px] not-italic text-[#4b5563] text-[13.48px] text-center top-[7.5px] tracking-[0.674px] uppercase whitespace-nowrap">Costume evolution</p>
                  </div>
                </BackgroundImage3>
                <BackgroundImage3 additionalClassNames="h-[40.563px] w-[165.758px]">
                  <div className="absolute border-[#d1d5db] border-[1.5px] border-solid h-[40.563px] left-0 rounded-[9999px] top-0 w-[165.758px]" data-name="button">
                    <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21.568px] left-[81.5px] not-italic text-[#4b5563] text-[13.48px] text-center top-[7.5px] tracking-[0.674px] uppercase whitespace-nowrap">Wired different</p>
                  </div>
                </BackgroundImage3>
                <BackgroundImage4 additionalClassNames="h-[40.563px]">
                  <div className="absolute border-[#d1d5db] border-[1.5px] border-solid h-[40.563px] left-0 rounded-[9999px] top-0 w-[204.797px]" data-name="button">
                    <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21.568px] left-[101px] not-italic text-[#4b5563] text-[13.48px] text-center top-[7.5px] tracking-[0.674px] uppercase whitespace-nowrap">Making others shine</p>
                  </div>
                </BackgroundImage4>
                <BackgroundImage3 additionalClassNames="h-[40.563px] w-[177.648px]">
                  <div className="absolute border-[#d1d5db] border-[1.5px] border-solid h-[40.563px] left-0 rounded-[9999px] top-0 w-[177.648px]" data-name="button">
                    <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21.568px] left-[87px] not-italic text-[#4b5563] text-[13.48px] text-center top-[7.5px] tracking-[0.674px] uppercase whitespace-nowrap">Looking forward</p>
                  </div>
                </BackgroundImage3>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#f9fafb] content-stretch flex flex-col h-[1451.18px] items-start left-0 overflow-clip top-[8919.58px] w-[616px]" data-name="footer">
            <div className="h-0 shrink-0 w-full" data-name="div" />
            <div className="h-0 shrink-0 w-full" data-name="div" />
            <div className="h-0 shrink-0 w-full" data-name="div" />
            <div className="h-[1451.18px] relative shrink-0 w-full" data-name="div">
              <div className="absolute h-[1124.961px] left-[25.99px] top-[70.2px] w-[564.016px]" data-name="Container">
                <div className="absolute h-[264.672px] left-0 top-0 w-[564.016px]" data-name="Container">
                  <div className="absolute content-stretch flex h-[79.5px] items-start left-0 rounded-[8px] top-0 w-[240px]" data-name="button">
                    <BackgroundImage8 additionalClassNames="h-[79.5px]" additionalClassNames1="h-[79.5px] w-[240px]" />
                  </div>
                  <div className="absolute h-[91.781px] left-0 top-[99.5px] w-[512px]" data-name="p">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30.6px] left-0 not-italic text-[#4b5563] text-[18px] top-0 w-[509px]">{`I'm Ash Shaw, a Global Psytrance Makeup Artist. From Cape Town to Berlin to Thailand, I create neon UV artistry that amplifies the energy of the dancefloor. Find me in the glow.`}</p>
                  </div>
                  <div className="absolute h-[33.391px] left-0 top-[231.28px] w-[564.016px]" data-name="Container">
                    <div className="absolute content-stretch flex h-[33.391px] items-center justify-center left-0 overflow-clip px-[11.31px] py-[5.655px] rounded-[8px] top-0 w-[113.43px]" data-name="button" style={{ backgroundImage: "linear-gradient(163.597deg, rgb(255, 16, 240) 0%, rgb(31, 81, 255) 100%)" }}>
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18.096px] not-italic relative shrink-0 text-[15.08px] text-center text-white whitespace-nowrap">Get in Touch</p>
                    </div>
                    <div className="absolute h-[33.391px] left-[125.43px] rounded-[8px] top-0 w-[96.203px]" data-name="button">
                      <div className="content-stretch flex items-center justify-center overflow-clip px-[13.31px] py-[7.655px] relative rounded-[inherit] size-full">
                        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18.096px] not-italic relative shrink-0 text-[#b300a4] text-[15.08px] text-center whitespace-nowrap">Read FAQ</p>
                      </div>
                      <div aria-hidden="true" className="absolute border-2 border-[#ff10f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col gap-[16px] h-[269.594px] items-start left-0 top-[308.51px] w-[564.016px]" data-name="nav">
                  <HBackgroundImageAndText1 text="Explore" />
                  <div className="content-stretch flex flex-col gap-[2px] h-[238px] items-start relative shrink-0 w-full" data-name="ul">
                    <BackgroundImage3 additionalClassNames="h-[38px] w-[564.016px]">
                      <div className="absolute h-[38px] left-[-10px] rounded-[4px] top-0 w-[85.828px]" data-name="button">
                        <SvgBackgroundImage>
                          <path d={svgPaths.p3763fc80} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d="M6 14.6667V8H10V14.6667" id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </SvgBackgroundImage>
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[34px] not-italic text-[#4b5563] text-[15px] top-[7px] whitespace-nowrap">Home</p>
                      </div>
                    </BackgroundImage3>
                    <BackgroundImage3 additionalClassNames="h-[38px] w-[564.016px]">
                      <div className="absolute h-[38px] left-[-10px] rounded-[4px] top-0 w-[86.578px]" data-name="button">
                        <SvgBackgroundImage>
                          <path d={svgPaths.p399eca00} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.pc93b400} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </SvgBackgroundImage>
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[34px] not-italic text-[#4b5563] text-[15px] top-[7px] whitespace-nowrap">About</p>
                      </div>
                    </BackgroundImage3>
                    <BackgroundImage3 additionalClassNames="h-[38px] w-[564.016px]">
                      <div className="absolute h-[38px] left-[-10px] rounded-[4px] top-0 w-[104.023px]" data-name="button">
                        <SvgBackgroundImage>
                          <path d={svgPaths.p19d57600} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p2fe1fe40} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p2c494540} id="Vector_3" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </SvgBackgroundImage>
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[34px] not-italic text-[#4b5563] text-[15px] top-[7px] whitespace-nowrap">Portfolio</p>
                      </div>
                    </BackgroundImage3>
                    <BackgroundImage3 additionalClassNames="h-[38px] w-[564.016px]">
                      <div className="absolute h-[38px] left-[-10px] rounded-[4px] top-0 w-[91.688px]" data-name="button">
                        <SvgBackgroundImage>
                          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </SvgBackgroundImage>
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[34px] not-italic text-[#4b5563] text-[15px] top-[7px] whitespace-nowrap">Events</p>
                      </div>
                    </BackgroundImage3>
                    <BackgroundImage3 additionalClassNames="h-[38px] w-[564.016px]">
                      <div className="absolute h-[38px] left-[-10px] rounded-[4px] top-0 w-[75.406px]" data-name="button">
                        <SvgBackgroundImage>
                          <path d={svgPaths.p38a89700} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p33079700} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </SvgBackgroundImage>
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[34px] not-italic text-[#4b5563] text-[15px] top-[7px] whitespace-nowrap">Blog</p>
                      </div>
                    </BackgroundImage3>
                    <BackgroundImage4 additionalClassNames="w-[564.016px]">
                      <div className="absolute h-[38px] left-[-10px] rounded-[4px] top-0 w-[100.383px]" data-name="button">
                        <SvgBackgroundImage>
                          <path d={svgPaths.p17070980} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p120c8200} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </SvgBackgroundImage>
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[34px] not-italic text-[#4b5563] text-[15px] top-[7px] whitespace-nowrap">Contact</p>
                      </div>
                    </BackgroundImage4>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col gap-[16px] h-[229.594px] items-start left-0 top-[621.94px] w-[564.016px]" data-name="nav">
                  <HBackgroundImageAndText1 text="Blog" />
                  <div className="content-stretch flex flex-col gap-[2px] h-[198px] items-start relative shrink-0 w-full" data-name="ul">
                    <BackgroundImage3 additionalClassNames="h-[38px] w-[564.016px]">
                      <ButtonBackgroundImageAndText1 text="Makeup Tips" additionalClassNames="w-[110.602px]" />
                    </BackgroundImage3>
                    <BackgroundImage3 additionalClassNames="h-[38px] w-[564.016px]">
                      <ButtonBackgroundImageAndText1 text="Tutorials" additionalClassNames="w-[80.555px]" />
                    </BackgroundImage3>
                    <BackgroundImage3 additionalClassNames="h-[38px] w-[564.016px]">
                      <ButtonBackgroundImageAndText1 text="Festival Tips" additionalClassNames="w-[108.297px]" />
                    </BackgroundImage3>
                    <BackgroundImage3 additionalClassNames="h-[38px] w-[564.016px]">
                      <ButtonBackgroundImageAndText1 text="Travel" additionalClassNames="w-[62.875px]" />
                    </BackgroundImage3>
                    <BackgroundImage4 additionalClassNames="w-[564.016px]">
                      <ButtonBackgroundImageAndText1 text="Education" additionalClassNames="w-[90.57px]" />
                    </BackgroundImage4>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col gap-[16px] h-[229.594px] items-start left-0 top-[895.37px] w-[564.016px]" data-name="nav">
                  <HBackgroundImageAndText1 text="Portfolio" />
                  <div className="content-stretch flex flex-col gap-[2px] h-[198px] items-start relative shrink-0 w-full" data-name="ul">
                    <BackgroundImage3 additionalClassNames="h-[38px] w-[564.016px]">
                      <ButtonBackgroundImageAndText1 text="Festival" additionalClassNames="w-[73.906px]" />
                    </BackgroundImage3>
                    <BackgroundImage3 additionalClassNames="h-[38px] w-[564.016px]">
                      <div className="absolute h-[38px] left-[-10px] rounded-[4px] top-0 w-[128.18px]" data-name="button">
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[10px] not-italic text-[#4b5563] text-[15px] top-[7px] whitespace-nowrap">{`UV & Blacklight`}</p>
                      </div>
                    </BackgroundImage3>
                    <BackgroundImage3 additionalClassNames="h-[38px] w-[564.016px]">
                      <ButtonBackgroundImageAndText1 text="Swiss Festivals" additionalClassNames="w-[126.961px]" />
                    </BackgroundImage3>
                    <BackgroundImage3 additionalClassNames="h-[38px] w-[564.016px]">
                      <ButtonBackgroundImageAndText1 text="Fusion Nails" additionalClassNames="w-[105.063px]" />
                    </BackgroundImage3>
                    <BackgroundImage4 additionalClassNames="w-[564.016px]">
                      <ButtonBackgroundImageAndText1 text="Thailand" additionalClassNames="w-[80.625px]" />
                    </BackgroundImage4>
                  </div>
                </div>
              </div>
              <div className="absolute h-px left-[25.99px] opacity-25 top-[1238.99px] w-[564.016px]" data-name="Container" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(190, 0, 254) 20%, rgb(255, 16, 240) 50%, rgb(31, 81, 255) 80%, rgba(0, 0, 0, 0) 100%)" }} />
              <div className="absolute content-stretch flex flex-col gap-[16px] h-[109.594px] items-center left-[25.99px] top-[1271.39px] w-[564.016px]" data-name="Container">
                <div className="flex-[1_0_0] min-h-px min-w-px relative w-[276px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
                    <BackgroundImage4 additionalClassNames="h-[36px]">
                      <div className="absolute content-stretch flex items-center justify-center left-0 overflow-clip rounded-[4px] size-[36px] top-0" data-name="a">
                        <BackgroundImage1>
                          <g clipPath="url(#clip0_2091_1379)" id="svg">
                            <path d={svgPaths.p3eb94a70} fill="var(--fill-0, #6B7280)" id="Vector" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2091_1379">
                              <rect fill="white" height="18" width="18" />
                            </clipPath>
                          </defs>
                        </BackgroundImage1>
                      </div>
                      <div className="absolute content-stretch flex items-center justify-center left-[40px] overflow-clip rounded-[4px] size-[36px] top-0" data-name="a">
                        <BackgroundImage1>
                          <g clipPath="url(#clip0_2091_1376)" id="svg">
                            <path d={svgPaths.p38127b00} fill="var(--fill-0, #6B7280)" id="Vector" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2091_1376">
                              <rect fill="white" height="18" width="18" />
                            </clipPath>
                          </defs>
                        </BackgroundImage1>
                      </div>
                      <div className="absolute content-stretch flex items-center justify-center left-[80px] overflow-clip rounded-[4px] size-[36px] top-0" data-name="a">
                        <BackgroundImage1>
                          <g clipPath="url(#clip0_2091_1368)" id="svg">
                            <path d={svgPaths.p1f524b00} fill="var(--fill-0, #6B7280)" id="Vector" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2091_1368">
                              <rect fill="white" height="18" width="18" />
                            </clipPath>
                          </defs>
                        </BackgroundImage1>
                      </div>
                      <div className="absolute content-stretch flex items-center justify-center left-[120px] overflow-clip rounded-[4px] size-[36px] top-0" data-name="a">
                        <BackgroundImage1>
                          <g clipPath="url(#clip0_2091_1400)" id="svg">
                            <path d={svgPaths.p7d0ab00} fill="var(--fill-0, #6B7280)" id="Vector" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2091_1400">
                              <rect fill="white" height="18" width="18" />
                            </clipPath>
                          </defs>
                        </BackgroundImage1>
                      </div>
                      <div className="absolute content-stretch flex items-center justify-center left-[160px] overflow-clip rounded-[4px] size-[36px] top-0" data-name="a">
                        <SvgBackgroundImage1>
                          <path d={svgPaths.p532d600} fill="var(--fill-0, #6B7280)" id="Vector" />
                        </SvgBackgroundImage1>
                      </div>
                      <div className="absolute content-stretch flex items-center justify-center left-[200px] overflow-clip rounded-[4px] size-[36px] top-0" data-name="a">
                        <SvgBackgroundImage1>
                          <path d={svgPaths.p3869cc00} fill="var(--fill-0, #6B7280)" id="Vector" />
                          <path d={svgPaths.p329f880} fill="var(--fill-0, #6B7280)" id="Vector_2" />
                        </SvgBackgroundImage1>
                      </div>
                    </BackgroundImage4>
                    <div className="relative rounded-[4px] shrink-0 size-[36px]" data-name="button">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                        <SvgBackgroundImage1>
                          <path d={svgPaths.pe4b0410} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgPaths.p14e74100} id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M6 9H12" id="Vector_3" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </SvgBackgroundImage1>
                      </div>
                    </div>
                  </div>
                </div>
                <BackgroundImage3 additionalClassNames="h-[20.797px] w-[240.336px]">
                  <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20.8px] left-[120.5px] not-italic text-[#9ca3af] text-[13px] text-center top-[0.5px] whitespace-nowrap">© 2026 Ash Shaw. All Rights Reserved.</p>
                </BackgroundImage3>
                <div className="h-[20.797px] relative shrink-0 w-[308.82px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
                    <BackgroundImage4 additionalClassNames="h-[20.797px]">
                      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20.8px] left-[60px] not-italic text-[#9ca3af] text-[13px] text-center top-[0.5px] whitespace-nowrap">{`Terms & Conditions`}</p>
                    </BackgroundImage4>
                    <div className="bg-[#d1d5db] rounded-[1.5px] shrink-0 size-[3px]" data-name="span" />
                    <BackgroundImage3 additionalClassNames="h-[20.797px] w-[85.281px]">
                      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20.8px] left-[43px] not-italic text-[#9ca3af] text-[13px] text-center top-[0.5px] whitespace-nowrap">Privacy Policy</p>
                    </BackgroundImage3>
                    <div className="bg-[#d1d5db] rounded-[1.5px] shrink-0 size-[3px]" data-name="span" />
                    <BackgroundImage3 additionalClassNames="h-[20.797px] w-[50.156px]">
                      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20.8px] left-[25.5px] not-italic text-[#9ca3af] text-[13px] text-center top-[0.5px] whitespace-nowrap">Sitemap</p>
                    </BackgroundImage3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[150px] left-0 top-0 w-[300px]" data-name="svg">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 150">
          <g clipPath="url(#clip0_2091_1361)" id="svg" opacity="0.03">
            <path d="M300 0H0V150H300V0Z" fill="var(--fill-0, black)" id="Vector" />
          </g>
          <defs>
            <clipPath id="clip0_2091_1361">
              <rect fill="white" height="150" width="300" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.85)] content-stretch flex flex-col h-[73px] items-start left-0 pb-px top-0 w-[616px]" data-name="nav">
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.05)] border-b border-solid inset-0 pointer-events-none" />
        <BackgroundImage additionalClassNames="h-[72px]">
          <BackgroundImage2 additionalClassNames="h-[48px] w-[140px]">
            <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="button">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                <BackgroundImage8 additionalClassNames="h-[48px]" additionalClassNames1="h-[46.375px] w-[140px]" />
              </div>
            </div>
          </BackgroundImage2>
          <BackgroundImage3 additionalClassNames="h-[48px] w-[108px]">
            <div className="absolute left-[60px] size-[48px] top-0" data-name="button">
              <div className="absolute content-stretch flex flex-col h-[20px] items-start justify-between left-[10px] top-[14px] w-[28px]" data-name="div">
                <div className="bg-[#0f0f0f] h-[2px] rounded-[2px] shrink-0 w-[28px]" data-name="span" />
                <div className="bg-[#0f0f0f] h-[2px] rounded-[2px] shrink-0 w-[28px]" data-name="span" />
                <div className="bg-[#0f0f0f] h-[2px] rounded-[2px] shrink-0 w-[28px]" data-name="span" />
              </div>
            </div>
            <div className="absolute bg-[#f9fafb] left-0 rounded-[22px] size-[44px] top-[2px]" data-name="button">
              <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
                <div className="relative shrink-0 size-[20px]" data-name="svg">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g clipPath="url(#clip0_2091_1350)" id="svg">
                      <path d={svgPaths.p20d10600} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5625" />
                      <path d="M10 1.66667V3.33333" id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5625" />
                      <path d="M10 16.6667V18.3333" id="Vector_3" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5625" />
                      <path d={svgPaths.p2561cd80} id="Vector_4" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5625" />
                      <path d={svgPaths.p1a2cf7c0} id="Vector_5" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5625" />
                      <path d="M1.66667 10H3.33333" id="Vector_6" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5625" />
                      <path d="M16.6667 10H18.3333" id="Vector_7" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5625" />
                      <path d={svgPaths.p3d0afd40} id="Vector_8" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5625" />
                      <path d={svgPaths.p18688e80} id="Vector_9" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5625" />
                    </g>
                    <defs>
                      <clipPath id="clip0_2091_1350">
                        <rect fill="white" height="20" width="20" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[22px]" />
            </div>
          </BackgroundImage3>
        </BackgroundImage>
      </div>
    </div>
  );
}