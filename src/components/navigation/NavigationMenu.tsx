import NavigationMenuDesktop from "./NavigationMenuDesktop";
import { NavigationMenuMobile } from "./NavigationMenuMobile";

const NavigationMenu: React.FC = () => {
  return (
    <div>
      {/* Desktop navigation menu */}
      <nav className="hidden md:block font-inter">
        <NavigationMenuDesktop />
      </nav>

      {/* Hamburger button mobile */}
      <nav className="md:hidden font-inter">
        <NavigationMenuMobile />
      </nav>
    </div>
  );
};

export default NavigationMenu;

