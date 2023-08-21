export interface Navbaritems {
  label: string;
  href: string;
  isDropDown: boolean;
  dropDownData?: any;
}

export const NavbarArray: Array<Navbaritems> = [
  {
    label: "Female",
    href: "/",
    isDropDown: true,
    dropDownData: [
      { label: "Sweaters", href: "/female/sweaters", isDropDown: false },
      { label: "Pents", href: "/female/pants", isDropDown: false },
      { label: "Jackets", href: "/female/jackets", isDropDown: false },
    ],
  },
  {
    label: "Male",
    href: "/",
    isDropDown: true,
    dropDownData: [
      { label: "Sweaters", href: "/male/sweaters", isDropDown: false },
      { label: "Pents", href: "/male/pants", isDropDown: false },
      { label: "Jackets", href: "/male/jackets", isDropDown: false },
    ],
  
  },
  {
    label: "Kids",
    href: "/Kids",
    isDropDown: false,
  },
  {
    label: "AllProducts",
    href: "/allproducts",
    isDropDown: false,
  },
];
