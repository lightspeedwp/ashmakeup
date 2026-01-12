type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[36px] left-[9px] not-italic text-[#374151] text-[22.5px] text-nowrap top-[5px]">{text}</p>
    </div>
  );
}

export default function MenuBar() {
  return (
    <div className="content-stretch flex gap-[36px] items-center relative size-full" data-name="Menu Bar">
      <div className="h-[45px] relative rounded-[7.65px] shrink-0 w-[77.883px]" data-name="Menu Item">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[36px] left-[9px] not-italic text-[#f6339a] text-[22.5px] text-nowrap top-[5px]">Home</p>
        </div>
      </div>
      <div className="h-[45px] relative rounded-[7.65px] shrink-0 w-[78.664px]" data-name="Menu Item">
        <Text text="About" />
      </div>
      <div className="basis-0 grow h-[45px] min-h-px min-w-px relative rounded-[7.65px] shrink-0" data-name="Menu Item">
        <Text text="Portfolio" />
      </div>
      <div className="h-[45px] relative rounded-[7.65px] shrink-0 w-[62.906px]" data-name="Menu Item">
        <Text text="Blog" />
      </div>
      <div className="h-[45px] relative rounded-[7.65px] shrink-0 w-[97.656px]" data-name="Menu Item">
        <Text text="Contact" />
      </div>
    </div>
  );
}