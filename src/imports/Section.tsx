import svgPaths from "./svg-jvob18an0n";
import clsx from "clsx";
import imgContainer from "figma:asset/74b708f3be9c02b929444ed900d4217477ac45ad.png";
import imgContainer1 from "figma:asset/6d85f7fae71068f4df2871708416452ac3fc47cf.png";
import imgContainer2 from "figma:asset/577de72252dace65ebc760f4d7e19c944b97acf1.png";
import imgContainer3 from "figma:asset/bf7ce684910b9711ce1124f435016ee3adc48aaa.png";
import imgContainer4 from "figma:asset/b057e762132da4e361c3c307f114ea49bbdbd2ef.png";
import imgContainer5 from "figma:asset/eede57bc434ae465c0915cc3294383fb58258c0d.png";
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[18.45px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return <BackgroundImage2 additionalClassNames={clsx("absolute bg-[rgba(255,255,255,0.8)] left-0 rounded-[18.45px] w-[601.234px]", additionalClassNames)}>{children}</BackgroundImage2>;
}
type PortfolioCardBackgroundImageProps = {
  additionalClassNames?: string;
};

function PortfolioCardBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<PortfolioCardBackgroundImageProps>) {
  return <BackgroundImage2 additionalClassNames={clsx("absolute bg-[rgba(255,255,255,0.8)] left-[652.76px] rounded-[18.45px] w-[601.242px]", additionalClassNames)}>{children}</BackgroundImage2>;
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
    <div className="relative shrink-0 size-[27px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="Icon">{children}</g>
      </svg>
    </div>
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
};

function HeadingBackgroundImageAndText({ text }: HeadingBackgroundImageAndTextProps) {
  return (
    <div className="h-[58.5px] overflow-clip relative shrink-0 w-full">
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

export default function Section() {
  return (
    <div className="relative size-full" data-name="Section">
      <div className="absolute h-[2991.539px] left-[36px] top-0 w-[1254px]" data-name="Container">
        <BackgroundImage1 additionalClassNames="h-[1012.797px] top-0">
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
        </BackgroundImage1>
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
            <HeadingBackgroundImageAndText text="Forest Warrior" />
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
        <BackgroundImage1 additionalClassNames="h-[954.297px] top-[1064.32px]">
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
            <HeadingBackgroundImageAndText text="Electric Nights" />
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
        </BackgroundImage1>
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
            <HeadingBackgroundImageAndText text="New Year Magic" />
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
        <BackgroundImage1 additionalClassNames="h-[921.398px] top-[2070.14px]">
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
            <HeadingBackgroundImageAndText text="Galaxy Fusion" />
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
        </BackgroundImage1>
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
            <HeadingBackgroundImageAndText text="Jungle Festival Magic" />
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
        <div className="basis-0 grow h-[45px] min-h-px min-w-px relative shrink-0" data-name="PaginationItem">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <div className="absolute bg-[rgba(255,255,255,0.8)] border border-[rgba(255,255,255,0.5)] border-solid h-[45px] left-0 opacity-50 rounded-[11.25px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[122.383px]" data-name="PaginationLink">
              <IconBackgroundImage2 additionalClassNames="left-[13.5px]">
                <path d="M11.25 13.5L6.75 9L11.25 4.5" id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </IconBackgroundImage2>
              <BackgroundImageAndText text="Previous" additionalClassNames="left-[36px] w-[70.883px]" />
            </div>
          </div>
        </div>
        <div className="h-[45px] relative shrink-0 w-[35.18px]" data-name="PaginationItem">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <div className="absolute h-[45px] left-0 rounded-[11.25px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[35.18px]" data-name="PaginationLink" style={{ backgroundImage: "linear-gradient(128.017deg, rgb(255, 102, 204) 0%, rgb(153, 51, 255) 50%, rgb(51, 153, 255) 100%)" }}>
              <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[25.714px] left-[13.5px] not-italic text-[18px] text-nowrap text-white top-[10.64px]">1</p>
            </div>
          </div>
        </div>
        <div className="h-[45px] relative shrink-0 w-[39.633px]" data-name="PaginationItem">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <div className="absolute bg-[rgba(255,255,255,0.8)] border border-[rgba(255,255,255,0.5)] border-solid h-[45px] left-0 rounded-[11.25px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[39.633px]" data-name="PaginationLink">
              <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[25.714px] left-[13.5px] not-italic text-[#374151] text-[18px] text-nowrap top-[9.65px]">2</p>
            </div>
          </div>
        </div>
        <div className="h-[45px] relative shrink-0 w-[89.789px]" data-name="PaginationItem">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <div className="absolute bg-[rgba(255,255,255,0.8)] border border-[rgba(255,255,255,0.5)] border-solid h-[45px] left-0 rounded-[11.25px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[89.789px]" data-name="PaginationLink">
              <BackgroundImageAndText text="Next" additionalClassNames="left-[13.5px] w-[38.289px]" />
              <IconBackgroundImage2 additionalClassNames="left-[56.29px]">
                <path d="M6.75 13.5L11.25 9L6.75 4.5" id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </IconBackgroundImage2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}