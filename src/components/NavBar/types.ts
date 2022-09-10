export interface INavbar {
  toggleTheme: () => void;
}

export interface IMobileNav extends INavbar {}
export interface IDesktopNav extends INavbar {}
