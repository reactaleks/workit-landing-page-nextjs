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
    <div className="flex flex-col  md:flex-row items-center justify-center h-page-feature-container w-page-feature-container md:w-page-feature-container-tablet md:h-page-feature-container-tablet md:justify-between  mx-auto mt-8 md:mt-18">
      <div className="flex items-center justify-center border-2 border-dark-purple rounded-full w-[46px] h-[48px] font-fraunces text-feature-number">
        {featurenumber}
      </div>

      <div className="text-center mt-6 md:text-start md:mt-0 w-page-feature-text-container h-page-feature-text-container md:h-page-feature-text-container-tablet md:w-page-feature-text-container-tablet">
        <div className="text-feature-heading font-semibold font-fraunces ">
          {featuretitle}
        </div>
        <div className="text-feature-description font-manrope ">
          {featuredescription}
        </div>
      </div>
    </div>
  );
}
