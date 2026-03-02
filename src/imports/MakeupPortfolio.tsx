import clsx from "clsx";
import svgPaths from "./svg-pcq1xyxxqy";
import imgDiv from "figma:asset/ec2ff0b104e487251ae28aeedd81e2d3f7f816e1.png";
import imgDiv1 from "figma:asset/c46c7cf26a9ffc3bc9b3687df3fa220107f579a1.png";
import imgDiv2 from "figma:asset/965325c3b479aab244692de8159edadbe5423c42.png";
import imgOptimizedImage from "figma:asset/933766215c52741007753f296a9b8b35d8534a12.png";
type BackgroundImage9Props = {
  additionalClassNames?: string;
};

function BackgroundImage9({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage9Props>) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">{children}</div>
    </div>
  );
}

function DivBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[157.188px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[12px] items-start pl-[16px] py-[16px] relative size-full">{children}</div>
    </div>
  );
}

function ContainerBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[640px]">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[13px] relative size-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImageProps = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImageProps>) {
  return (
    <div className={clsx("h-[22.398px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">{children}</div>
    </div>
  );
}
type ButtonBackgroundImageProps = {
  additionalClassNames?: string;
};

function ButtonBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<ButtonBackgroundImageProps>) {
  return (
    <div className={clsx("h-[32.398px] relative rounded-[9999px] shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#374151] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage8Props = {
  additionalClassNames?: string;
};

function BackgroundImage8({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage8Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage7Props = {
  additionalClassNames?: string;
};

function BackgroundImage7({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage7Props>) {
  return <BackgroundImage8 additionalClassNames={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>{children}</BackgroundImage8>;
}
type BackgroundImage6Props = {
  additionalClassNames?: string;
};

function BackgroundImage6({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage6Props>) {
  return <BackgroundImage8 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</BackgroundImage8>;
}
type BackgroundImage5Props = {
  additionalClassNames?: string;
};

function BackgroundImage5({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage5Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">{children}</div>
    </div>
  );
}
type BackgroundImage4Props = {
  additionalClassNames?: string;
};

function BackgroundImage4({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage4Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
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
    <div className={clsx("size-[16px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}
type SvgBackgroundImage4Props = {
  additionalClassNames?: string;
};

function SvgBackgroundImage4({ children, additionalClassNames = "" }: React.PropsWithChildren<SvgBackgroundImage4Props>) {
  return (
    <BackgroundImage2 additionalClassNames={additionalClassNames}>
      <g id="svg">{children}</g>
    </BackgroundImage2>
  );
}

function SvgBackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage2 additionalClassNames="absolute left-[8px] top-[12.8px]">
      <g id="svg" opacity="0.6">
        {children}
      </g>
    </BackgroundImage2>
  );
}

function SvgBackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage3>
      <g id="svg">{children}</g>
    </BackgroundImage3>
  );
}

function SvgBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage2 additionalClassNames="absolute left-[10px] top-[11px]">
      <g id="svg" opacity="0.5">
        {children}
      </g>
    </BackgroundImage2>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImageProps>) {
  return (
    <div className={clsx("size-[14px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="svg">{children}</g>
      </svg>
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
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[10px] not-italic text-[#9ca3af] text-[15px] top-[7px]">{text}</p>
    </div>
  );
}
type HBackgroundImageAndText1Props = {
  text: string;
};

function HBackgroundImageAndText1({ text }: HBackgroundImageAndText1Props) {
  return (
    <div className="h-[15.594px] relative shrink-0 w-full">
      <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[15.6px] left-0 text-[#6b7280] text-[12px] top-[-0.5px] tracking-[1.8px] uppercase">{text}</p>
    </div>
  );
}

function DivBackgroundImage() {
  return (
    <BackgroundImage4 additionalClassNames="size-[20px]">
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
    </BackgroundImage4>
  );
}
type SpanBackgroundImageAndText2Props = {
  text: string;
  additionalClassNames?: string;
};

function SpanBackgroundImageAndText2({ text, additionalClassNames = "" }: SpanBackgroundImageAndText2Props) {
  return (
    <BackgroundImage8 additionalClassNames={clsx("h-[28.797px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[28.8px] left-0 text-[18px] text-white top-[-1px]">{text}</p>
    </BackgroundImage8>
  );
}
type DivBackgroundImageAndTextProps = {
  text: string;
};

function DivBackgroundImageAndText({ text }: DivBackgroundImageAndTextProps) {
  return (
    <div className="h-[25.594px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[16px] text-white top-[-1px]">{text}</p>
    </div>
  );
}
type ButtonBackgroundImageAndTextProps = {
  text: string;
};

function ButtonBackgroundImageAndText({ text }: ButtonBackgroundImageAndTextProps) {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[37.398px] relative rounded-[9999px] shrink-0 w-[127.375px]">
      <div aria-hidden="true" className="absolute border-[#be00fe] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_0px_10px_0px_rgba(190,0,254,0.2)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.4px] left-[54px] not-italic text-[#be00fe] text-[14px] text-center top-[8px]">{text}</p>
        <BackgroundImage additionalClassNames="absolute left-[95.88px] top-[11.7px]">
          <path d={svgPaths.p86f6380} id="Vector" stroke="var(--stroke-0, #BE00FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </BackgroundImage>
      </div>
    </div>
  );
}
type TimeBackgroundImageAndTextProps = {
  text: string;
};

function TimeBackgroundImageAndText({ text }: TimeBackgroundImageAndTextProps) {
  return (
    <BackgroundImage7 additionalClassNames="h-[22.398px]">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.4px] left-0 not-italic text-[#ff10f0] text-[14px] top-[0.5px]">{text}</p>
    </BackgroundImage7>
  );
}

function SvgBackgroundImage() {
  return (
    <BackgroundImage additionalClassNames="relative shrink-0">
      <path d="M4.66667 1.16667V3.5" id="Vector" stroke="var(--stroke-0, #FF10F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
      <path d="M9.33333 1.16667V3.5" id="Vector_2" stroke="var(--stroke-0, #FF10F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
      <path d={svgPaths.p24a2b500} id="Vector_3" stroke="var(--stroke-0, #FF10F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
      <path d="M1.75 5.83333H12.25" id="Vector_4" stroke="var(--stroke-0, #FF10F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
    </BackgroundImage>
  );
}
type PBackgroundImageAndTextProps = {
  text: string;
};

function PBackgroundImageAndText({ text }: PBackgroundImageAndTextProps) {
  return (
    <BackgroundImage6 additionalClassNames="h-[19.594px] w-[640px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.6px] left-0 not-italic text-[#9ca3af] text-[14px] top-0 tracking-[0.7px] uppercase">{text}</p>
    </BackgroundImage6>
  );
}
type HBackgroundImageAndTextProps = {
  text: string;
};

function HBackgroundImageAndText({ text }: HBackgroundImageAndTextProps) {
  return (
    <BackgroundImage6 additionalClassNames="h-[31.195px] w-[640px]">
      <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[31.2px] left-0 text-[24px] text-white top-[-0.5px]">{text}</p>
    </BackgroundImage6>
  );
}
type SpanBackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function SpanBackgroundImageAndText1({ text, additionalClassNames = "" }: SpanBackgroundImageAndText1Props) {
  return (
    <div className={clsx("absolute h-[16.797px] opacity-70 top-[10.8px]", additionalClassNames)}>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.8px] left-[3.5px] not-italic text-[#d1d5db] text-[10.5px] text-center top-0">{text}</p>
    </div>
  );
}
type SpanBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function SpanBackgroundImageAndText({ text, additionalClassNames = "" }: SpanBackgroundImageAndTextProps) {
  return (
    <BackgroundImage8 additionalClassNames={clsx("h-[22.398px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] left-0 not-italic text-[#9ca3af] text-[14px] top-[0.5px] tracking-[1.12px] uppercase">{text}</p>
    </BackgroundImage8>
  );
}

export default function MakeupPortfolio() {
  return (
    <div className="bg-white relative size-full" data-name="Makeup Portfolio">
      <div className="absolute bg-[#0f0f0f] content-stretch flex flex-col h-[915px] items-start left-0 top-0 w-[1579px]" data-name="Body">
        <div className="h-[2520.484px] overflow-clip relative shrink-0 w-full" data-name="div" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1579 2520.5\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -148.71 -148.71 0 789.5 1260.2)\\'><stop stop-color=\\'rgba(50,50,50,0.2)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(15, 15, 15) 0%, rgb(15, 15, 15) 100%)" }}>
          <div className="absolute h-0 left-0 top-0 w-[1579px]" data-name="Container" />
          <div className="absolute h-[1909.891px] left-0 overflow-clip top-0 w-[1579px]" data-name="main" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1579 1909.9\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -123.9 -123.9 0 789.5 954.95)\\'><stop stop-color=\\'rgba(50,50,50,0.2)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(15, 15, 15) 0%, rgb(15, 15, 15) 100%)" }}>
            <div className="absolute h-[114.398px] left-[421.5px] top-[112px] w-[736px]" data-name="h1">
              <p className="-translate-x-1/2 absolute bg-clip-text font-['Righteous:Regular',sans-serif] leading-[114.4px] left-[368.21px] not-italic text-[104px] text-[transparent] text-center top-[-0.5px] tracking-[-2.08px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(164.295deg, rgb(255, 16, 240) 0%, rgb(31, 81, 255) 100%)" }}>
                Portfolio
              </p>
            </div>
            <div className="absolute content-stretch flex flex-col h-[187.992px] items-start left-[181.5px] top-[306.4px] w-[1216px]" data-name="div">
              <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1216px]" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
                  <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1216px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-start relative size-full">
                      <div className="flex-[1_0_0] h-[70.797px] min-h-px min-w-px relative" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
                          <SpanBackgroundImageAndText text="Categories:" additionalClassNames="w-[819px]" />
                          <BackgroundImage7 additionalClassNames="w-[819px]">
                            <div className="absolute border border-[#374151] border-solid h-[40.398px] left-0 rounded-[9999px] top-0 w-[96.703px]" data-name="button">
                              <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] left-[41.5px] not-italic text-[#d1d5db] text-[14px] text-center top-[8.5px]">Festival</p>
                              <SpanBackgroundImageAndText1 text="5" additionalClassNames="left-[72.31px] w-[6.391px]" />
                            </div>
                            <div className="absolute bg-[#be00fe] border border-[#be00fe] border-solid h-[40.398px] left-[104.7px] rounded-[9999px] shadow-[0px_0px_16px_0px_rgba(190,0,254,0.5)] top-0 w-[147.523px]" data-name="button">
                              <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] left-[66.5px] not-italic text-[14px] text-center text-white top-[8.5px]">{`UV & Blacklight`}</p>
                              <div className="absolute h-[16.797px] left-[122.97px] opacity-70 top-[10.8px] w-[6.555px]" data-name="span">
                                <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.8px] left-[3.5px] not-italic text-[10.5px] text-center text-white top-0">6</p>
                              </div>
                            </div>
                            <div className="absolute border border-[#374151] border-solid h-[40.398px] left-[260.23px] rounded-[9999px] top-0 w-[146.391px]" data-name="button">
                              <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] left-[66px] not-italic text-[#d1d5db] text-[14px] text-center top-[8.5px]">Swiss Festivals</p>
                              <SpanBackgroundImageAndText1 text="6" additionalClassNames="left-[121.84px] w-[6.555px]" />
                            </div>
                            <div className="absolute border border-[#374151] border-solid h-[40.398px] left-[414.62px] rounded-[9999px] top-0 w-[126.078px]" data-name="button">
                              <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] left-[56px] not-italic text-[#d1d5db] text-[14px] text-center top-[8.5px]">Fusion Nails</p>
                              <SpanBackgroundImageAndText1 text="3" additionalClassNames="left-[101.39px] w-[6.688px]" />
                            </div>
                            <div className="absolute border border-[#374151] border-solid h-[40.398px] left-[548.7px] rounded-[9999px] top-0 w-[103.32px]" data-name="button">
                              <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] left-[44.5px] not-italic text-[#d1d5db] text-[14px] text-center top-[8.5px]">Thailand</p>
                              <SpanBackgroundImageAndText1 text="4" additionalClassNames="left-[78.58px] w-[6.742px]" />
                            </div>
                          </BackgroundImage7>
                        </div>
                      </div>
                      <div className="bg-[rgba(20,20,20,0.5)] flex-[1_0_0] h-[131.195px] min-h-px min-w-px relative rounded-[8px]" data-name="Container">
                        <div aria-hidden="true" className="absolute border border-[#374151] border-solid inset-0 pointer-events-none rounded-[8px]" />
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pl-[13px] pr-px py-[13px] relative size-full">
                          <SpanBackgroundImageAndText text="Active Filters" additionalClassNames="w-[351px]" />
                          <BackgroundImage6 additionalClassNames="h-[30.398px] w-[351px]">
                            <div className="absolute bg-[#1f2937] h-[30.398px] left-0 rounded-[9999px] top-0 w-[132.813px]" data-name="button">
                              <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] left-[60.5px] not-italic text-[#e5e7eb] text-[14px] text-center top-[4.5px]">{`UV & Blacklight`}</p>
                              <div className="absolute h-[19.031px] left-[114.97px] opacity-60 top-[5.68px] w-[7.844px]" data-name="span">
                                <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.04px] left-[4px] not-italic text-[#e5e7eb] text-[11.9px] text-center top-[-1px]">×</p>
                              </div>
                            </div>
                          </BackgroundImage6>
                          <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[9999px] w-[351px]" data-name="button">
                            <div aria-hidden="true" className="absolute border border-[#ff10f0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                            <div className="flex flex-row items-center size-full">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[13px] py-[7px] relative size-full">
                                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] not-italic relative shrink-0 text-[#ff10f0] text-[14px] text-center">Clear All</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <BackgroundImage6 additionalClassNames="h-[44.797px] w-[1216px]">
                    <div className="absolute h-[28.797px] left-0 top-0 w-[328.813px]" data-name="p">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28.8px] left-0 not-italic text-[#9ca3af] text-[18px] top-0">{`Number of results: `}</p>
                      <div className="absolute h-[28.797px] left-[162.18px] top-0 w-[11.891px]" data-name="strong">
                        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28.8px] left-0 not-italic text-[#be00fe] text-[18px] top-0">6</p>
                      </div>
                      <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[28.8px] left-[174.07px] text-[#9ca3af] text-[18px] top-0">{` in UV & Blacklight`}</p>
                    </div>
                    <div className="absolute content-stretch flex gap-[6px] h-[32.398px] items-center left-[913.09px] top-[6.2px] w-[302.914px]" data-name="Container">
                      <BackgroundImage6 additionalClassNames="h-[22.398px] w-[52.07px]">
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] left-0 not-italic text-[#9ca3af] text-[14px] top-[0.5px]">Sort by:</p>
                      </BackgroundImage6>
                      <div className="bg-[#00f7ff] flex-[1_0_0] h-[32.398px] min-h-px min-w-px relative rounded-[9999px]" data-name="button">
                        <div aria-hidden="true" className="absolute border border-[#00f7ff] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_0px_12px_0px_rgba(0,247,255,0.3)]" />
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] left-[53px] not-italic text-[#0f0f0f] text-[14px] text-center top-[5.5px]">Most Recent</p>
                        </div>
                      </div>
                      <ButtonBackgroundImage additionalClassNames="w-[46.664px]">
                        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] left-[23.5px] not-italic text-[#9ca3af] text-[14px] text-center top-[5.5px]">A-Z</p>
                      </ButtonBackgroundImage>
                      <ButtonBackgroundImage additionalClassNames="w-[80.75px]">
                        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] left-[40.5px] not-italic text-[#9ca3af] text-[14px] text-center top-[5.5px]">Featured</p>
                      </ButtonBackgroundImage>
                    </div>
                  </BackgroundImage6>
                </div>
              </div>
            </div>
            <div className="absolute h-[612.344px] left-[101.5px] top-[542.39px] w-[1376px]" data-name="div">
              <div className="absolute content-stretch flex flex-col h-[182.781px] items-start left-0 top-0 w-[672px]" data-name="article">
                <div className="h-[25.594px] relative shrink-0 w-full" data-name="div">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[1875.46%] left-0 max-w-none top-0 w-[71.43%]" src={imgDiv} />
                  </div>
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[16px] text-white top-[-1px]">UV Makeup</p>
                </div>
                <DivBackgroundImage1>
                  <HBackgroundImageAndText text="Electric blue" />
                  <PBackgroundImageAndText text="Playful rainbow UV patterns" />
                  <ContainerBackgroundImage1>
                    <div className="content-stretch flex h-[37.398px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                      <ContainerBackgroundImage additionalClassNames="w-[104.422px]">
                        <SvgBackgroundImage />
                        <TimeBackgroundImageAndText text="15 Nov 2024" />
                      </ContainerBackgroundImage>
                      <ButtonBackgroundImageAndText text="Read More" />
                    </div>
                  </ContainerBackgroundImage1>
                </DivBackgroundImage1>
              </div>
              <div className="absolute content-stretch flex flex-col h-[182.781px] items-start left-[704px] top-0 w-[672px]" data-name="article">
                <div className="h-[25.594px] relative shrink-0 w-full" data-name="div">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[1875.46%] left-0 max-w-none top-0 w-[71.43%]" src={imgDiv1} />
                  </div>
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[16px] text-white top-[-1px]">UV Makeup</p>
                </div>
                <DivBackgroundImage1>
                  <HBackgroundImageAndText text="Rainbow lightning" />
                  <PBackgroundImageAndText text="Electric rainbow UV art" />
                  <ContainerBackgroundImage1>
                    <div className="content-stretch flex h-[37.398px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                      <ContainerBackgroundImage additionalClassNames="w-[97.711px]">
                        <SvgBackgroundImage />
                        <TimeBackgroundImageAndText text="2 Nov 2024" />
                      </ContainerBackgroundImage>
                      <ButtonBackgroundImageAndText text="Read More" />
                    </div>
                  </ContainerBackgroundImage1>
                </DivBackgroundImage1>
              </div>
              <div className="absolute content-stretch flex flex-col h-[182.781px] items-start left-0 top-[214.78px] w-[672px]" data-name="article">
                <DivBackgroundImageAndText text="UV Makeup" />
                <DivBackgroundImage1>
                  <HBackgroundImageAndText text="Neon galaxy" />
                  <PBackgroundImageAndText text="Cosmic UV masterpiece" />
                  <ContainerBackgroundImage1>
                    <div className="content-stretch flex h-[37.398px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                      <ContainerBackgroundImage additionalClassNames="w-[104.117px]">
                        <SvgBackgroundImage />
                        <TimeBackgroundImageAndText text="20 Oct 2024" />
                      </ContainerBackgroundImage>
                      <ButtonBackgroundImageAndText text="Read More" />
                    </div>
                  </ContainerBackgroundImage1>
                </DivBackgroundImage1>
              </div>
              <div className="absolute content-stretch flex flex-col h-[182.781px] items-start left-[704px] top-[214.78px] w-[672px]" data-name="article">
                <DivBackgroundImageAndText text="UV Makeup" />
                <DivBackgroundImage1>
                  <HBackgroundImageAndText text="Toxic green" />
                  <PBackgroundImageAndText text="Intense green tribal UV" />
                  <ContainerBackgroundImage1>
                    <div className="content-stretch flex h-[37.398px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                      <ContainerBackgroundImage additionalClassNames="w-[95.164px]">
                        <SvgBackgroundImage />
                        <TimeBackgroundImageAndText text="5 Oct 2024" />
                      </ContainerBackgroundImage>
                      <ButtonBackgroundImageAndText text="Read More" />
                    </div>
                  </ContainerBackgroundImage1>
                </DivBackgroundImage1>
              </div>
              <div className="absolute content-stretch flex flex-col h-[182.781px] items-start left-0 top-[429.56px] w-[672px]" data-name="article">
                <DivBackgroundImageAndText text="UV Makeup" />
                <DivBackgroundImage1>
                  <HBackgroundImageAndText text="Pink cyberpunk" />
                  <PBackgroundImageAndText text="Futuristic pink UV geometry" />
                  <ContainerBackgroundImage1>
                    <div className="content-stretch flex h-[37.398px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                      <ContainerBackgroundImage additionalClassNames="w-[110.828px]">
                        <SvgBackgroundImage />
                        <TimeBackgroundImageAndText text="22 Sept 2024" />
                      </ContainerBackgroundImage>
                      <ButtonBackgroundImageAndText text="Read More" />
                    </div>
                  </ContainerBackgroundImage1>
                </DivBackgroundImage1>
              </div>
              <div className="absolute content-stretch flex flex-col h-[182.781px] items-start left-[704px] top-[429.56px] w-[672px]" data-name="article">
                <div className="h-[25.594px] relative shrink-0 w-full" data-name="div">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[4688.64%] left-0 max-w-none top-0 w-[119.05%]" src={imgDiv2} />
                  </div>
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[16px] text-white top-[-1px]">UV Makeup</p>
                </div>
                <DivBackgroundImage1>
                  <HBackgroundImageAndText text="Aqua waves" />
                  <PBackgroundImageAndText text="Flowing cyan UV waves" />
                  <ContainerBackgroundImage1>
                    <div className="content-stretch flex h-[37.398px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                      <ContainerBackgroundImage additionalClassNames="w-[109.313px]">
                        <SvgBackgroundImage />
                        <TimeBackgroundImageAndText text="10 Sept 2024" />
                      </ContainerBackgroundImage>
                      <ButtonBackgroundImageAndText text="Read More" />
                    </div>
                  </ContainerBackgroundImage1>
                </DivBackgroundImage1>
              </div>
            </div>
            <div className="absolute h-[588px] left-[101.5px] rounded-[24px] top-[1273.89px] w-[1376px]" data-name="div" style={{ backgroundImage: "linear-gradient(156.862deg, rgba(190, 0, 254, 0.06) 0%, rgba(31, 81, 255, 0.06) 50%, rgba(57, 255, 20, 0.03) 100%)" }}>
              <div className="absolute bg-[rgba(255,255,255,0.02)] h-[492px] left-[48px] rounded-[16px] top-[48px] w-[740px]" data-name="Container">
                <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
                  <div className="bg-[rgba(255,255,255,0.03)] h-[135.391px] relative shrink-0 w-full" data-name="Container">
                    <div aria-hidden="true" className="absolute border-[#1f2937] border-b border-solid inset-0 pointer-events-none" />
                    <div className="content-stretch flex flex-col gap-[8px] items-start pb-px pt-[24px] px-[32px] relative size-full">
                      <div className="h-[33.594px] relative shrink-0 w-full" data-name="h2">
                        <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[33.6px] left-0 text-[28px] text-white top-0">Portfolio — FAQ</p>
                      </div>
                      <div className="h-[28.797px] relative shrink-0 w-full" data-name="p">
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28.8px] left-0 not-italic text-[#9ca3af] text-[18px] top-0">Questions about the work shown here.</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col h-[256.391px] items-start relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex flex-col h-[85.797px] items-start pb-px relative shrink-0 w-full" data-name="Container">
                      <div aria-hidden="true" className="absolute border-[#1f2937] border-b border-solid inset-0 pointer-events-none" />
                      <BackgroundImage1 additionalClassNames="h-[60.797px]">
                        <SpanBackgroundImageAndText2 text="Can I use your images?" additionalClassNames="w-[186.75px]" />
                        <DivBackgroundImage />
                      </BackgroundImage1>
                    </div>
                    <div className="content-stretch flex flex-col h-[85.797px] items-start pb-px relative shrink-0 w-full" data-name="Container">
                      <div aria-hidden="true" className="absolute border-[#1f2937] border-b border-solid inset-0 pointer-events-none" />
                      <BackgroundImage1 additionalClassNames="h-[60.797px]">
                        <SpanBackgroundImageAndText2 text="What camera does he use?" additionalClassNames="w-[213.258px]" />
                        <DivBackgroundImage />
                      </BackgroundImage1>
                    </div>
                    <BackgroundImage1 additionalClassNames="h-[60.797px]">
                      <SpanBackgroundImageAndText2 text="How do I get featured?" additionalClassNames="w-[182.844px]" />
                      <DivBackgroundImage />
                    </BackgroundImage1>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#1f2937] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_15px_0px_rgba(190,0,254,0.05)]" />
              </div>
              <div className="absolute left-[836px] size-[492px] top-[48px]" data-name="Container">
                <div className="absolute blur-[30px] left-[49.2px] rounded-[196.805px] size-[393.609px] top-[49.2px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 393.61 393.61\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -27.832 -27.832 0 196.8 196.8)\\'><stop stop-color=\\'rgba(190,0,254,0.25)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(111,41,255,0.2)\\' offset=\\'0.2\\'/><stop stop-color=\\'rgba(31,81,255,0.15)\\' offset=\\'0.4\\'/><stop stop-color=\\'rgba(16,41,128,0.075)\\' offset=\\'0.55\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
                <div className="absolute left-0 rounded-[16px] size-[492px] top-0" data-name="OptimizedImage">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgOptimizedImage} />
                </div>
              </div>
            </div>
            <div className="absolute content-stretch flex gap-[3.4px] h-[6px] items-start left-[781.5px] pl-[-0.6px] pt-[-0.6px] top-[1887.89px] w-[16px]" data-name="div">
              <div className="bg-white rounded-[3.6px] shrink-0 size-[7.2px]" data-name="button" />
              <div className="bg-[rgba(255,255,255,0.4)] rounded-[3px] shrink-0 size-[6px]" data-name="button" />
            </div>
            <div className="absolute content-stretch flex gap-[3.4px] h-[6px] items-start left-[781.5px] pl-[-0.6px] pt-[-0.6px] top-[1887.89px] w-[16px]" data-name="div">
              <div className="bg-white rounded-[3.6px] shrink-0 size-[7.2px]" data-name="button" />
              <div className="bg-[rgba(255,255,255,0.4)] rounded-[3px] shrink-0 size-[6px]" data-name="button" />
            </div>
            <div className="absolute content-stretch flex gap-[3.4px] h-[6px] items-start left-[781.5px] pl-[-0.6px] pt-[-0.6px] top-[1887.89px] w-[16px]" data-name="div">
              <div className="bg-white rounded-[3.6px] shrink-0 size-[7.2px]" data-name="button" />
              <div className="bg-[rgba(255,255,255,0.4)] rounded-[3px] shrink-0 size-[6px]" data-name="button" />
            </div>
            <div className="absolute content-stretch flex gap-[3.4px] h-[6px] items-start left-[781.5px] pl-[-0.6px] pt-[-0.6px] top-[1887.89px] w-[16px]" data-name="div">
              <div className="bg-white rounded-[3.6px] shrink-0 size-[7.2px]" data-name="button" />
              <div className="bg-[rgba(255,255,255,0.4)] rounded-[3px] shrink-0 size-[6px]" data-name="button" />
            </div>
            <div className="absolute content-stretch flex gap-[3.4px] h-[6px] items-start left-[781.5px] pl-[-0.6px] pt-[-0.6px] top-[1887.89px] w-[16px]" data-name="div">
              <div className="bg-white rounded-[3.6px] shrink-0 size-[7.2px]" data-name="button" />
              <div className="bg-[rgba(255,255,255,0.4)] rounded-[3px] shrink-0 size-[6px]" data-name="button" />
            </div>
            <div className="absolute content-stretch flex gap-[3.4px] h-[6px] items-start left-[781.5px] pl-[-0.6px] pt-[-0.6px] top-[1887.89px] w-[16px]" data-name="div">
              <div className="bg-white rounded-[3.6px] shrink-0 size-[7.2px]" data-name="button" />
              <div className="bg-[rgba(255,255,255,0.4)] rounded-[3px] shrink-0 size-[6px]" data-name="button" />
            </div>
          </div>
          <div className="absolute bg-[#0f0f0f] h-[610.594px] left-0 overflow-clip top-[1909.89px] w-[1579px]" data-name="footer">
            <div className="absolute h-0 left-0 top-0 w-[1579px]" data-name="div" />
            <div className="absolute h-0 left-0 top-0 w-[1579px]" data-name="div" />
            <div className="absolute h-0 left-0 top-0 w-[1579px]" data-name="div" />
            <div className="absolute h-[610.594px] left-[69.5px] top-0 w-[1440px]" data-name="div">
              <div className="absolute h-[269.594px] left-[32px] top-[96px] w-[1376px]" data-name="Container">
                <div className="absolute h-[269.594px] left-0 top-0 w-[538.18px]" data-name="Container">
                  <div className="absolute content-stretch flex h-[68.07px] items-start left-0 rounded-[8px] top-0 w-[240px]" data-name="button">
                    <BackgroundImage9 additionalClassNames="h-[68.07px]">
                      <BackgroundImage5 additionalClassNames="h-[68.07px] w-[240px]">
                        <div className="absolute inset-[2.78%_73.46%_4.59%_1.28%]" data-name="Group">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60.6261 63.0591">
                            <g id="Group" opacity="0.9">
                              <path d={svgPaths.p229477c0} fill="url(#paint0_linear_2032_1554)" id="Vector" />
                              <path d={svgPaths.p55f600} fill="var(--fill-0, #C0C0C0)" id="Vector_2" />
                              <path d={svgPaths.p1b02c900} fill="var(--fill-0, #E91E63)" id="Vector_3" />
                              <path d={svgPaths.p3e1ec178} fill="var(--fill-0, #9C27B0)" id="Vector_4" />
                              <path d={svgPaths.p22526080} fill="var(--fill-0, #3F51B5)" id="Vector_5" />
                              <path d={svgPaths.p2ad77f80} fill="var(--fill-0, #2196F3)" id="Vector_6" />
                              <path d={svgPaths.p2c9fe00} fill="var(--fill-0, #00BCD4)" id="Vector_7" />
                              <path d={svgPaths.p6b8f600} fill="var(--fill-0, #4CAF50)" id="Vector_8" />
                              <path d={svgPaths.pbb5abb0} fill="var(--fill-0, #E91E63)" id="Vector_9" />
                              <path d={svgPaths.p1ee9b1f0} fill="var(--fill-0, #C27AFF)" id="Vector_10" />
                              <path d={svgPaths.pb092940} fill="var(--fill-0, #3F51B5)" id="Vector_11" />
                              <path d={svgPaths.p1ffdc080} fill="var(--fill-0, #9C27B0)" id="Vector_12" />
                              <path d={svgPaths.p33d0c480} fill="var(--fill-0, #00BCD4)" id="Vector_13" />
                              <path d={svgPaths.p3ff11600} fill="var(--fill-0, #4CAF50)" id="Vector_14" />
                            </g>
                            <defs>
                              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2032_1554" x1="59.0293" x2="22.3717" y1="7.56235" y2="34.0645">
                                <stop stopColor="#FF66CC" />
                                <stop offset="0.5" stopColor="#9933FF" />
                                <stop offset="1" stopColor="#3399FF" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[55.45%_64.58%_40.14%_30%] leading-[normal] not-italic text-[2.618px] text-white">Ash Shaw</p>
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[71.47%_60.79%_24.12%_30.46%] leading-[normal] not-italic text-[2.618px] text-[rgba(255,255,255,0.8)]">MAKEUP ARTIST</p>
                      </BackgroundImage5>
                    </BackgroundImage9>
                  </div>
                  <div className="absolute h-[91.781px] left-0 top-[88.07px] w-[512px]" data-name="p">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30.6px] left-0 not-italic text-[#9ca3af] text-[18px] top-0 w-[509px] whitespace-pre-wrap">{`I'm Ash Shaw, a Global Psytrance Makeup Artist. From Cape Town to Berlin to Thailand, I create neon UV artistry that amplifies the energy of the dancefloor. Find me in the glow.`}</p>
                  </div>
                  <div className="absolute h-[42.781px] left-0 top-[219.85px] w-[538.18px]" data-name="Container">
                    <div className="absolute content-stretch flex h-[42.781px] items-center justify-center left-0 overflow-clip px-[14.921px] py-[7.461px] rounded-[8px] top-0 w-[149.641px]" data-name="button" style={{ backgroundImage: "linear-gradient(164.045deg, rgb(255, 16, 240) 0%, rgb(31, 81, 255) 100%)" }}>
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[23.874px] not-italic relative shrink-0 text-[19.895px] text-center text-white">Get in Touch</p>
                    </div>
                    <div className="absolute h-[42.781px] left-[161.64px] rounded-[8px] top-0 w-[125.641px]" data-name="button">
                      <div className="content-stretch flex items-center justify-center overflow-clip px-[16.921px] py-[9.461px] relative rounded-[inherit] size-full">
                        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[23.874px] not-italic relative shrink-0 text-[#ff10f0] text-[19.895px] text-center">Read FAQ</p>
                      </div>
                      <div aria-hidden="true" className="absolute border-2 border-[#ff10f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col gap-[16px] h-[269.594px] items-start left-[602.18px] top-0 w-[215.273px]" data-name="nav">
                  <HBackgroundImageAndText1 text="Explore" />
                  <div className="content-stretch flex flex-col gap-[2px] h-[238px] items-start relative shrink-0 w-full" data-name="ul">
                    <BackgroundImage6 additionalClassNames="h-[38px] w-[215.273px]">
                      <div className="absolute h-[38px] left-[-10px] rounded-[4px] top-0 w-[85.828px]" data-name="button">
                        <SvgBackgroundImage1>
                          <path d={svgPaths.p3763fc80} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d="M6 14.6667V8H10V14.6667" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </SvgBackgroundImage1>
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[34px] not-italic text-[#9ca3af] text-[15px] top-[7px]">Home</p>
                      </div>
                    </BackgroundImage6>
                    <BackgroundImage6 additionalClassNames="h-[38px] w-[215.273px]">
                      <div className="absolute h-[38px] left-[-10px] rounded-[4px] top-0 w-[86.578px]" data-name="button">
                        <SvgBackgroundImage1>
                          <path d={svgPaths.p399eca00} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.pc93b400} id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </SvgBackgroundImage1>
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[34px] not-italic text-[#9ca3af] text-[15px] top-[7px]">About</p>
                      </div>
                    </BackgroundImage6>
                    <BackgroundImage6 additionalClassNames="h-[38px] w-[215.273px]">
                      <div className="absolute h-[38px] left-[-10px] rounded-[4px] top-0 w-[104.023px]" data-name="button">
                        <SvgBackgroundImage1>
                          <path d={svgPaths.p19d57600} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p2fe1fe40} id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p2c494540} id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </SvgBackgroundImage1>
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[34px] not-italic text-[#9ca3af] text-[15px] top-[7px]">Portfolio</p>
                      </div>
                    </BackgroundImage6>
                    <BackgroundImage6 additionalClassNames="h-[38px] w-[215.273px]">
                      <div className="absolute h-[38px] left-[-10px] rounded-[4px] top-0 w-[91.688px]" data-name="button">
                        <SvgBackgroundImage1>
                          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </SvgBackgroundImage1>
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[34px] not-italic text-[#9ca3af] text-[15px] top-[7px]">Events</p>
                      </div>
                    </BackgroundImage6>
                    <BackgroundImage6 additionalClassNames="h-[38px] w-[215.273px]">
                      <div className="absolute h-[38px] left-[-10px] rounded-[4px] top-0 w-[75.406px]" data-name="button">
                        <SvgBackgroundImage1>
                          <path d={svgPaths.p38a89700} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p33079700} id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </SvgBackgroundImage1>
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[34px] not-italic text-[#9ca3af] text-[15px] top-[7px]">Blog</p>
                      </div>
                    </BackgroundImage6>
                    <BackgroundImage7 additionalClassNames="w-[215.273px]">
                      <div className="absolute h-[38px] left-[-10px] rounded-[4px] top-0 w-[100.383px]" data-name="button">
                        <SvgBackgroundImage1>
                          <path d={svgPaths.p17070980} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p120c8200} id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </SvgBackgroundImage1>
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[34px] not-italic text-[#9ca3af] text-[15px] top-[7px]">Contact</p>
                      </div>
                    </BackgroundImage7>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col gap-[16px] h-[269.594px] items-start left-[881.45px] top-0 w-[215.273px]" data-name="nav">
                  <HBackgroundImageAndText1 text="Blog" />
                  <div className="content-stretch flex flex-col gap-[2px] h-[198px] items-start relative shrink-0 w-full" data-name="ul">
                    <BackgroundImage6 additionalClassNames="h-[38px] w-[215.273px]">
                      <ButtonBackgroundImageAndText1 text="Makeup Tips" additionalClassNames="w-[110.602px]" />
                    </BackgroundImage6>
                    <BackgroundImage6 additionalClassNames="h-[38px] w-[215.273px]">
                      <ButtonBackgroundImageAndText1 text="Tutorials" additionalClassNames="w-[80.555px]" />
                    </BackgroundImage6>
                    <BackgroundImage6 additionalClassNames="h-[38px] w-[215.273px]">
                      <ButtonBackgroundImageAndText1 text="Festival Tips" additionalClassNames="w-[108.297px]" />
                    </BackgroundImage6>
                    <BackgroundImage6 additionalClassNames="h-[38px] w-[215.273px]">
                      <ButtonBackgroundImageAndText1 text="Travel" additionalClassNames="w-[62.875px]" />
                    </BackgroundImage6>
                    <BackgroundImage7 additionalClassNames="w-[215.273px]">
                      <ButtonBackgroundImageAndText1 text="Education" additionalClassNames="w-[90.57px]" />
                    </BackgroundImage7>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col gap-[16px] h-[269.594px] items-start left-[1160.73px] top-0 w-[215.266px]" data-name="nav">
                  <HBackgroundImageAndText1 text="Portfolio" />
                  <div className="content-stretch flex flex-col gap-[2px] h-[198px] items-start relative shrink-0 w-full" data-name="ul">
                    <BackgroundImage6 additionalClassNames="h-[38px] w-[215.266px]">
                      <ButtonBackgroundImageAndText1 text="Festival" additionalClassNames="w-[73.906px]" />
                    </BackgroundImage6>
                    <BackgroundImage6 additionalClassNames="h-[38px] w-[215.266px]">
                      <div className="absolute h-[38px] left-[-10px] rounded-[4px] top-0 w-[128.18px]" data-name="button">
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[10px] not-italic text-[#9ca3af] text-[15px] top-[7px]">{`UV & Blacklight`}</p>
                      </div>
                    </BackgroundImage6>
                    <BackgroundImage6 additionalClassNames="h-[38px] w-[215.266px]">
                      <ButtonBackgroundImageAndText1 text="Swiss Festivals" additionalClassNames="w-[126.961px]" />
                    </BackgroundImage6>
                    <BackgroundImage6 additionalClassNames="h-[38px] w-[215.266px]">
                      <ButtonBackgroundImageAndText1 text="Fusion Nails" additionalClassNames="w-[105.063px]" />
                    </BackgroundImage6>
                    <BackgroundImage7 additionalClassNames="w-[215.266px]">
                      <ButtonBackgroundImageAndText1 text="Thailand" additionalClassNames="w-[80.625px]" />
                    </BackgroundImage7>
                  </div>
                </div>
              </div>
              <div className="absolute h-px left-[32px] opacity-35 top-[429.59px] w-[1376px]" data-name="Container" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(190, 0, 254) 20%, rgb(255, 16, 240) 50%, rgb(31, 81, 255) 80%, rgba(0, 0, 0, 0) 100%)" }} />
              <div className="absolute content-stretch flex h-[36px] items-center justify-between left-[32px] top-[478.59px] w-[1376px]" data-name="Container">
                <BackgroundImage6 additionalClassNames="h-[20.797px] w-[240.336px]">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20.8px] left-0 not-italic text-[#6b7280] text-[13px] top-[0.5px]">© 2026 Ash Shaw. All Rights Reserved.</p>
                </BackgroundImage6>
                <div className="h-[36px] relative shrink-0 w-[276px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
                    <BackgroundImage7 additionalClassNames="h-[36px]">
                      <div className="absolute content-stretch flex items-center justify-center left-0 overflow-clip rounded-[4px] size-[36px] top-0" data-name="a">
                        <BackgroundImage3>
                          <g clipPath="url(#clip0_2032_1583)" id="svg">
                            <path d={svgPaths.p3eb94a70} fill="var(--fill-0, #9CA3AF)" id="Vector" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2032_1583">
                              <rect fill="white" height="18" width="18" />
                            </clipPath>
                          </defs>
                        </BackgroundImage3>
                      </div>
                      <div className="absolute content-stretch flex items-center justify-center left-[40px] overflow-clip rounded-[4px] size-[36px] top-0" data-name="a">
                        <BackgroundImage3>
                          <g clipPath="url(#clip0_2032_1551)" id="svg">
                            <path d={svgPaths.p38127b00} fill="var(--fill-0, #9CA3AF)" id="Vector" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2032_1551">
                              <rect fill="white" height="18" width="18" />
                            </clipPath>
                          </defs>
                        </BackgroundImage3>
                      </div>
                      <div className="absolute content-stretch flex items-center justify-center left-[80px] overflow-clip rounded-[4px] size-[36px] top-0" data-name="a">
                        <BackgroundImage3>
                          <g clipPath="url(#clip0_2032_1597)" id="svg">
                            <path d={svgPaths.p1f524b00} fill="var(--fill-0, #9CA3AF)" id="Vector" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2032_1597">
                              <rect fill="white" height="18" width="18" />
                            </clipPath>
                          </defs>
                        </BackgroundImage3>
                      </div>
                      <div className="absolute content-stretch flex items-center justify-center left-[120px] overflow-clip rounded-[4px] size-[36px] top-0" data-name="a">
                        <BackgroundImage3>
                          <g clipPath="url(#clip0_2032_1498)" id="svg">
                            <path d={svgPaths.p7d0ab00} fill="var(--fill-0, #9CA3AF)" id="Vector" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2032_1498">
                              <rect fill="white" height="18" width="18" />
                            </clipPath>
                          </defs>
                        </BackgroundImage3>
                      </div>
                      <div className="absolute content-stretch flex items-center justify-center left-[160px] overflow-clip rounded-[4px] size-[36px] top-0" data-name="a">
                        <SvgBackgroundImage2>
                          <path d={svgPaths.p532d600} fill="var(--fill-0, #9CA3AF)" id="Vector" />
                        </SvgBackgroundImage2>
                      </div>
                      <div className="absolute content-stretch flex items-center justify-center left-[200px] overflow-clip rounded-[4px] size-[36px] top-0" data-name="a">
                        <SvgBackgroundImage2>
                          <path d={svgPaths.p3869cc00} fill="var(--fill-0, #9CA3AF)" id="Vector" />
                          <path d={svgPaths.p329f880} fill="var(--fill-0, #9CA3AF)" id="Vector_2" />
                        </SvgBackgroundImage2>
                      </div>
                    </BackgroundImage7>
                    <div className="relative rounded-[4px] shrink-0 size-[36px]" data-name="button">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                        <SvgBackgroundImage2>
                          <path d={svgPaths.pe4b0410} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgPaths.p14e74100} id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M6 9H12" id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </SvgBackgroundImage2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[20.797px] relative shrink-0 w-[308.82px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
                    <BackgroundImage7 additionalClassNames="h-[20.797px]">
                      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20.8px] left-[60px] not-italic text-[#6b7280] text-[13px] text-center top-[0.5px]">{`Terms & Conditions`}</p>
                    </BackgroundImage7>
                    <div className="bg-[#4b5563] rounded-[1.5px] shrink-0 size-[3px]" data-name="span" />
                    <BackgroundImage6 additionalClassNames="h-[20.797px] w-[85.281px]">
                      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20.8px] left-[43px] not-italic text-[#6b7280] text-[13px] text-center top-[0.5px]">Privacy Policy</p>
                    </BackgroundImage6>
                    <div className="bg-[#4b5563] rounded-[1.5px] shrink-0 size-[3px]" data-name="span" />
                    <BackgroundImage6 additionalClassNames="h-[20.797px] w-[50.156px]">
                      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20.8px] left-[25.5px] not-italic text-[#6b7280] text-[13px] text-center top-[0.5px]">Sitemap</p>
                    </BackgroundImage6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[150px] left-0 top-0 w-[300px]" data-name="svg">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 150">
          <g clipPath="url(#clip0_2032_1476)" id="svg" opacity="0.045">
            <path d="M300 0H0V150H300V0Z" fill="var(--fill-0, black)" id="Vector" />
          </g>
          <defs>
            <clipPath id="clip0_2032_1476">
              <rect fill="white" height="150" width="300" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="absolute bg-[rgba(15,15,15,0.7)] content-stretch flex flex-col h-[73px] items-start left-0 pb-px px-[69.5px] top-0 w-[1579px]" data-name="nav">
        <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
        <BackgroundImage1 additionalClassNames="h-[72px]">
          <BackgroundImage4 additionalClassNames="h-[48px] w-[180px]">
            <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="button">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                <BackgroundImage9 additionalClassNames="h-[48px]">
                  <BackgroundImage5 additionalClassNames="h-[51.047px] w-[180px]">
                    <div className="absolute inset-[2.78%_73.46%_4.59%_1.28%]" data-name="Group">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.4644 47.2889">
                        <g id="Group" opacity="0.9">
                          <path d={svgPaths.p3eaf500} fill="url(#paint0_linear_2032_1482)" id="Vector" />
                          <path d={svgPaths.p28037d00} fill="var(--fill-0, #C0C0C0)" id="Vector_2" />
                          <path d={svgPaths.p1bb89200} fill="var(--fill-0, #E91E63)" id="Vector_3" />
                          <path d={svgPaths.p2fbafd72} fill="var(--fill-0, #9C27B0)" id="Vector_4" />
                          <path d={svgPaths.p3b088770} fill="var(--fill-0, #3F51B5)" id="Vector_5" />
                          <path d={svgPaths.p29e2b000} fill="var(--fill-0, #2196F3)" id="Vector_6" />
                          <path d={svgPaths.p16aadf80} fill="var(--fill-0, #00BCD4)" id="Vector_7" />
                          <path d={svgPaths.p51ed280} fill="var(--fill-0, #4CAF50)" id="Vector_8" />
                          <path d={svgPaths.p111eb300} fill="var(--fill-0, #E91E63)" id="Vector_9" />
                          <path d={svgPaths.p108fe500} fill="var(--fill-0, #C27AFF)" id="Vector_10" />
                          <path d={svgPaths.p13a41a80} fill="var(--fill-0, #3F51B5)" id="Vector_11" />
                          <path d={svgPaths.p23016d80} fill="var(--fill-0, #9C27B0)" id="Vector_12" />
                          <path d={svgPaths.p31ff7880} fill="var(--fill-0, #00BCD4)" id="Vector_13" />
                          <path d={svgPaths.p9a2e100} fill="var(--fill-0, #4CAF50)" id="Vector_14" />
                        </g>
                        <defs>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2032_1482" x1="44.2669" x2="16.7769" y1="5.67111" y2="25.5454">
                            <stop stopColor="#FF66CC" />
                            <stop offset="0.5" stopColor="#9933FF" />
                            <stop offset="1" stopColor="#3399FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[55.45%_64.44%_40.63%_30%] leading-[normal] not-italic text-[1.963px] text-white">Ash Shaw</p>
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[71.47%_60.65%_24.61%_30.46%] leading-[normal] not-italic text-[1.963px] text-[rgba(255,255,255,0.8)]">MAKEUP ARTIST</p>
                  </BackgroundImage5>
                </BackgroundImage9>
              </div>
            </div>
          </BackgroundImage4>
          <BackgroundImage7 additionalClassNames="h-[41.594px]">
            <div className="absolute h-[41.594px] left-[517.04px] top-0 w-[81.297px]" data-name="button">
              <SvgBackgroundImage3>
                <path d={svgPaths.p3763fc80} id="Vector" stroke="var(--stroke-0, #D1D5DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d="M6 14.6667V8H10V14.6667" id="Vector_2" stroke="var(--stroke-0, #D1D5DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </SvgBackgroundImage3>
              <p className="-translate-x-1/2 absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[25.6px] left-[52px] text-[#d1d5db] text-[16px] text-center top-[8px]">Home</p>
            </div>
            <div className="absolute h-[41.594px] left-[630.34px] top-0 w-[81.352px]" data-name="Container">
              <div className="absolute h-[41.594px] left-0 top-0 w-[81.352px]" data-name="button">
                <SvgBackgroundImage3>
                  <path d={svgPaths.p399eca00} id="Vector" stroke="var(--stroke-0, #D1D5DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.pc93b400} id="Vector_2" stroke="var(--stroke-0, #D1D5DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </SvgBackgroundImage3>
                <p className="-translate-x-1/2 absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[25.6px] left-[52px] text-[#d1d5db] text-[16px] text-center top-[8px]">About</p>
              </div>
            </div>
            <div className="absolute h-[41.594px] left-[743.69px] top-0 w-[101.414px]" data-name="Container">
              <div className="absolute h-[41.594px] left-0 top-0 w-[101.414px]" data-name="button">
                <SvgBackgroundImage4 additionalClassNames="absolute left-[8px] top-[12.8px]">
                  <path d={svgPaths.p19d57600} id="Vector" stroke="var(--stroke-0, #BE00FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p2fe1fe40} id="Vector_2" stroke="var(--stroke-0, #BE00FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p2c494540} id="Vector_3" stroke="var(--stroke-0, #BE00FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </SvgBackgroundImage4>
                <p className="-translate-x-1/2 absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[25.6px] left-[62px] text-[#be00fe] text-[16px] text-center top-[8px]">Portfolio</p>
              </div>
            </div>
            <div className="absolute h-[41.594px] left-[877.1px] top-0 w-[70.086px]" data-name="Container">
              <div className="absolute h-[41.594px] left-0 top-0 w-[70.086px]" data-name="button">
                <SvgBackgroundImage3>
                  <path d={svgPaths.p38a89700} id="Vector" stroke="var(--stroke-0, #D1D5DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p33079700} id="Vector_2" stroke="var(--stroke-0, #D1D5DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </SvgBackgroundImage3>
                <p className="-translate-x-1/2 absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[25.6px] left-[46.5px] text-[#d1d5db] text-[16px] text-center top-[8px]">Blog</p>
              </div>
            </div>
            <div className="absolute h-[41.594px] left-[979.19px] top-0 w-[94.813px]" data-name="Container">
              <div className="absolute h-[41.594px] left-0 top-0 w-[94.813px]" data-name="button">
                <SvgBackgroundImage3>
                  <path d={svgPaths.p17070980} id="Vector" stroke="var(--stroke-0, #D1D5DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p120c8200} id="Vector_2" stroke="var(--stroke-0, #D1D5DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </SvgBackgroundImage3>
                <p className="-translate-x-1/2 absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[25.6px] left-[58.5px] text-[#d1d5db] text-[16px] text-center top-[8px]">Contact</p>
              </div>
            </div>
            <div className="absolute content-stretch flex h-[32px] items-center left-[1106px] top-[4.8px] w-[34px]" data-name="Search">
              <div className="h-[24.398px] relative rounded-[9999px] shrink-0 w-[2px]" data-name="input">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)]">Search...</p>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
              </div>
              <BackgroundImage9 additionalClassNames="h-[32px]">
                <SvgBackgroundImage4 additionalClassNames="relative shrink-0">
                  <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </SvgBackgroundImage4>
              </BackgroundImage9>
            </div>
            <div className="absolute bg-[rgba(255,255,255,0.05)] left-[1172px] rounded-[20px] size-[40px] top-[0.8px]" data-name="button">
              <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
                <div className="relative shrink-0 size-[20px]" data-name="svg">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="svg">
                      <path d={svgPaths.pccb100} id="Vector" stroke="var(--stroke-0, #BE00FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5625" />
                    </g>
                  </svg>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[20px]" />
            </div>
          </BackgroundImage7>
        </BackgroundImage1>
      </div>
    </div>
  );
}