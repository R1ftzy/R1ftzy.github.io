import type { IconType } from "react-icons";
import { SiC, SiJavascript, SiOpengl, SiReact, SiGo } from "react-icons/si";
import { FaWindows } from "react-icons/fa";

export type Brand = {
  icon: IconType;
  color: string;
};

export const BRANDS = {
  C: {
    icon: SiC,
    color: "#659be7",
  },
  JS: {
    icon: SiJavascript,
    color: "#F0DB4F",
  },
  OpenGL: {
    icon: SiOpengl,
    color: "#41c13d",
  },
  React: {
    icon: SiReact,
    color: "#61DAFB",
  },
  Go: {
    icon: SiGo,
    color: "#00ADD8",
  },
  Win32: {
    icon: FaWindows,
    color: "#6ec439",
  },
} as const;

export type BrandName = keyof typeof BRANDS;

export type Project = {
  id: number;

  title: string;
  description: string;

  brand: BrandName;

  tech: string[];

  github: string;
  demo?: string;

  featured: boolean;

  video?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Rasterbator",
    description: "A Software rasterizer.",

    brand: "C",

    tech: ["Win32", "Software Rendering"],

    github: "https://github.com/R1ftzy/rasterbator",
    featured: true,
    video: "/videos/raster.mp4",
  },
  {
    id: 2,

    title: "R1P-8",
    description: "A Chip-8 interpreter.",

    brand: "C",

    tech: ["CHIP-8", "SDL"],

    github: "https://github.com/R1ftzy/R1P-8",
    featured: true,
    image: "/images/c8.png",
  },
  {
    id: 3,

    title: "R1sh_",
    description: "A POSIX shell.",

    brand: "C",

    tech: ["POSIX", "Win32"],

    github: "https://github.com/R1ftzy/R1sh_",
    featured: true,
    image: "/images/shell.png",
  },
  {
    id: 4,

    title: "WinFetch",
    description: "A Win32 sysinfo tool.",

    brand: "C",

    tech: ["Win32"],

    github: "https://github.com/R1ftzy/WinFetchPlus",
    featured: false,
    image: "/images/winfetch.png",
  },
  {
    id: 5,

    title: "Minesweeper",
    description: "TUI Minesweeper.",

    brand: "Go",

    tech: ["Bubble Tea"],

    github: "https://github.com/R1ftzy/Minesweeper",
    featured: false,
    image: "/images/minesweeper.png",
  },
  {
    id: 6,

    title: "Last.fm-card",
    description: "Now playing song card.",

    brand: "JS",

    tech: ["Web"],

    github: "https://github.com/R1ftzy/Last.fm-card",
    featured: false,
    image: "/images/playing.png",
  },
  {
    id: 7,

    title: "Simple Edit",
    description: "TUI text editor.",

    brand: "C",

    tech: ["Win32"],

    github: "https://github.com/R1ftzy/simple-edit",
    featured: false,
    image: "/images/simple-edit.png",
  },
];
