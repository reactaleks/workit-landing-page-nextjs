interface Props {
  featurenumber: number;
  featuretitle: string;
  featuredescription: string;
}

export default function PageFeatures({
  featurenumber,
  featuretitle,
  featuredescription,
}: Props) {
  return (
    <div
      className="flex flex-col items-center mx-auto
     h-[234px] md:h-[108px] lg:h-[308px]
     w-[343px] md:w-[573px] lg:w-[1114px]
     md:flex-row md:justify-between
     lg:flex-col
    "
    >
      <div
        className="flex border-2 items-center justify-center border-dark-purple rounded-full  font-fraunces
      h-[46px] lg:h-[56px]
      w-[48px] lg:w-[56px]
      text-[20px] md:text-[] lg:text-[24px]
      "
      >
        {featurenumber}
      </div>

      <div
        className="text-center flex flex-col justify-around
      h-[164px] md:h-[136px] lg:h-[]
      w-[343px] md:max-w-[493px] lg:w-[]
      md:justify-center md:text-start
      lg:text-center
      "
      >
        <div
          className="font-semibold font-fraunces 
        text-[28px] md:text-[] lg:text-[32px]"
        >
          {featuretitle}
        </div>
        <div
          className="font-manrope 
        text-[16px] md:text-[] lg:text-[18px]"
        >
          {featuredescription}
        </div>
      </div>
    </div>
  );
}
