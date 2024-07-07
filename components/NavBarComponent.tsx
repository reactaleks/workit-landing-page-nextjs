import LogoComponent from "./LogoComponent";
import Button from "./ButtonComponent";

export default function NavBar() {
  return (
    <nav className="flex w-full justify-between bg-dark-purple 
    
    py-4
    pt-8
    md:py-8
    lg:px-48
    
    ">
      <div className="
      mx-auto
      items-center
      flex justify-between
      w-[343px] h-[34px]
      md:w-[689px] md:h-[34px]
      lg:w-[1029px]
      xl:w-[2058px]
      ">
        <LogoComponent logotype="light" />
        <Button btnText="Apply for access" btnType="secondary" btnStyling="" />
      </div>
    </nav>
  );
}
