import svgPaths from "./svg-2kral81bt1";
import clsx from "clsx";
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

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[27px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        {children}
      </svg>
    </div>
  );
}

function IconBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage>
      <g id="Icon">{children}</g>
    </BackgroundImage>
  );
}
type ContainerBackgroundImageProps = {
  text: string;
};

function ContainerBackgroundImage({ children, text }: React.PropsWithChildren<ContainerBackgroundImageProps>) {
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

export default function Footer() {
  return (
    <div className="relative size-full" data-name="Footer" style={{ backgroundImage: "linear-gradient(131.072deg, rgb(249, 250, 251) 0%, rgb(250, 245, 255) 50%, rgb(253, 242, 248) 100%)" }}>
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
                <div className="h-[58.5px] relative shrink-0 w-full" data-name="Heading 3">
                  <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[58.5px] left-0 text-[#1f2937] text-[45px] text-nowrap top-[5.5px]">Get in Touch</p>
                </div>
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
                  <div className="h-[46.586px] relative shrink-0 w-[190.578px]" data-name="Text">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[46.584px] left-[95px] not-italic text-[29.115px] text-center text-nowrap text-white top-0 translate-x-[-50%]">Send Message</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-gradient-to-r from-[#fccee8] h-px left-0 to-[#bedbff] top-[1070.54px] via-50% via-[#e9d4ff] w-[1254px]" data-name="Container" />
        <div className="absolute content-stretch flex h-[54px] items-center justify-between left-0 top-[1179.54px] w-[1254px]" data-name="Container">
          <div className="h-[54px] relative shrink-0 w-[168.898px]" data-name="Logo">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute content-stretch flex flex-col h-[54px] items-start left-[45px] top-0 w-[123.898px]" data-name="Container">
                <div className="h-[27px] relative shrink-0 w-[123.898px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <div className="absolute content-stretch flex h-[30px] items-start left-0 top-[-1.5px] w-[45.023px]" data-name="Text">
                      <p className="font-['Playfair_Display:Bold',sans-serif] font-bold leading-[27px] relative shrink-0 text-[#1f2937] text-[27px] text-nowrap">Ash</p>
                    </div>
                    <div className="absolute content-stretch flex h-[30px] items-start left-[45.02px] top-[-1.5px] w-[63.031px]" data-name="Text">
                      <p className="font-['Playfair_Display:Bold',sans-serif] font-bold leading-[27px] relative shrink-0 text-[#e91e63] text-[27px] text-nowrap">Shaw</p>
                    </div>
                  </div>
                </div>
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[123.898px]" data-name="Paragraph">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[#e91e63] text-[20.25px] text-nowrap top-[0.5px]">makeup artist</p>
                  </div>
                </div>
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
                <div className="absolute bg-[#fb64b6] left-[-4.5px] opacity-[0.597] rounded-[1.67772e+07px] size-[9px] top-[-4.5px]" data-name="Container" />
                <div className="absolute bg-[#c27aff] left-[33.75px] opacity-[0.564] rounded-[1.67772e+07px] size-[6.75px] top-[33.75px]" data-name="Container" />
              </div>
            </div>
          </div>
          <div className="h-[54px] relative shrink-0 w-[324px]" data-name="SocialLinks">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[36px] items-start relative size-full">
              <div className="relative rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[54px]" data-name="Link" style={{ backgroundImage: "linear-gradient(135deg, rgb(225, 48, 108) 0%, rgb(253, 29, 29) 50%, rgb(252, 175, 69) 100%)" }}>
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                  <IconBackgroundImage>
                    <path d={svgPaths.p1a49a800} fill="var(--fill-0, white)" id="Vector" />
                    <path d={svgPaths.p27afad00} fill="var(--fill-0, white)" id="Vector_2" />
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
                  <BackgroundImage>
                    <g clipPath="url(#clip0_571_633)" id="Icon">
                      <path d={svgPaths.p1fdc6000} fill="var(--fill-0, white)" id="Vector" />
                    </g>
                    <defs>
                      <clipPath id="clip0_571_633">
                        <rect fill="white" height="27" width="27" />
                      </clipPath>
                    </defs>
                  </BackgroundImage>
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
  );
}