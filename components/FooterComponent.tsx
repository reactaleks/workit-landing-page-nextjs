import SocialLinks from "./SocialLinksComponent";
import LogoComponent from "./LogoComponent";

export default function PageFooter() {
  return (
    <footer className="flex flex-col h-24 justify-center place-items-center w-full py-24">
      <div>
        <LogoComponent logotype="dark" />
        
      </div>
      <div className="mt-12 w-32">
          <SocialLinks />
        </div>
    </footer>
  );
}
