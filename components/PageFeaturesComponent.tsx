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
    <div className="flex flex-col items-center content-center justify-center h-page-feature-container w-page-feature-container mx-auto mt-8">
      <div className="flex items-center justify-center border-2 border-dark-purple rounded-full w-page-features-number h-page-features-number font-fraunces text-feature-number">
        {featurenumber}
      </div>

      <div className="text-center mt-6">
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
