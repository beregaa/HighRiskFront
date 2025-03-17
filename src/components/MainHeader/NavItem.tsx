export interface NavItem {
    path: string;
    label: string;
    hasStar?: boolean;
  }
  
  export const navItems: NavItem[] = [
    { path: "/", label: "Home" },
    { path: "/newIn", label: "new in" },
    { path: "/tops", label: "tops", hasStar: true },
    { path: "/bottoms", label: "bottoms", hasStar: true },
    { path: "/outwear", label: "outwear" },
    { path: "/accessory", label: "accessory" },
  ];
  