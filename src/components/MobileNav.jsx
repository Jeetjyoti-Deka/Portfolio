import { NAV_LINKS } from "../lib/constants";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="sm:hidden block w-6 h-6">
          <img
            src="src/assets/menu.svg"
            alt="menu"
            className="w-full h-full object-contain"
          />
        </div>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center gap-y-6">
          {NAV_LINKS.map((link) => (
            <SheetClose key={link.route} asChild>
              <a className="poppins-medium text-lg" href={link.route}>
                {link.label}
              </a>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
