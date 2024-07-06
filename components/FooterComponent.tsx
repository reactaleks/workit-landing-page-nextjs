import SocialLinks from "./SocialLinksComponent";
import LogoComponent from "./LogoComponent";

export default function PageFooter() {
  return (
    <footer className="flex justify-center">
      <div
        className="flex flex-col justify-between place-items-center 
    h-[102.22px] 
    w-[116px] 
    "
      >
        <div>
          <LogoComponent logotype="dark" />
        </div>
        <div className="">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
