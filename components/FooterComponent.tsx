import SocialLinks from "./SocialLinksComponent";
import LogoComponent from "./LogoComponent";

export default function PageFooter() {
  return ( 
    <footer className="flex justify-center h-[100px] pb-40">
      <div
        className="flex flex-col justify-center place-items-center 
 
  
    "
      >
        <div className="mb-12">
          <LogoComponent logotype="dark" />
        </div>
        <div className="w-full">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
