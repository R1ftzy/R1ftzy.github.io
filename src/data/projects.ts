import type { IconType } from "react-icons";
import {
  SiC,
  SiJavascript,
  SiOpengl,
  SiReact,
  SiGo,
} from "react-icons/si";
import { FaWindows } from "react-icons/fa";

export type Brand = {
  icon: IconType;
  color: string;
};

export const BRANDS = {
  C: {
    icon: SiC,
    color: "#7097cd",
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
    title: "Rasterbator",
    description: "Software rasterizer written in C.",

    brand: "C",

    tech: ["Win32", "Software Rendering"],

    github: "https://github.com/R1ftzy/rasterbator",
    featured: true,
    video: "/videos/raster.mp4",
  },
  {
    title: "WinFetch",
    description: "A Windows system information tool.",

    brand: "C",

    tech: ["Win32"],

    github: "https://github.com/R1ftzy/WinFetchPlus",
    featured: true,
    image: "/images/winfetch.png",
  },
  {
    title: "Last.fm-card",
    description: "Now playing song card for GitHub profiles",

    brand: "JS",

    tech: [""],

    github: "https://github.com/R1ftzy/Last.fm-card",
    featured: true,
    image: "/images/playing.png",
  },
  {
    title: "Simple Edit",
    description: "A lightweight terminal text editor.",

    brand: "C",

    tech: ["Win32"],

    github: "https://github.com/R1ftzy/simple-edit",
    featured: true,
    image: "/images/simple-edit.png",
  },
];
