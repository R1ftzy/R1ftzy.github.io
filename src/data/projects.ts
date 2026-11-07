import type { IconType } from "react-icons";
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiOpengl,
  SiReact,
  SiGo,
  SiRust,
} from "react-icons/si";
import { FaWindows } from "react-icons/fa";

export type Brand = {
  icon: IconType;
  color: string;
};

export const BRANDS = {
  C: { icon: SiC, color: "#659be7" },
  "C++": { icon: SiCplusplus, color: "#687ec9" },
  Rust: { icon: SiRust, color: "#CE422B" },
  JS: { icon: SiJavascript, color: "#F0DB4F" },
  OpenGL: { icon: SiOpengl, color: "#41c13d" },
  React: { icon: SiReact, color: "#61DAFB" },
  Go: { icon: SiGo, color: "#00ADD8" },
  Win32: { icon: FaWindows, color: "#6ec439" },
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
    title: "pkmng5pc",
    description: "Native PC recomp of Pokémon Gen 5 games.",
    brand: "C++",
    tech: ["Static Recompilation", "C/C++"],
    github: "https://github.com/R1ftzy/pkmng5pc",
    featured: true,
    video: "/videos/pkmng5pc.mp4",
  },
  {
    id: 2,
    title: "Rasterbator",
    description: "A Software rasterizer.",
    brand: "C",
    tech: ["Win32", "Software Rendering"],
    github: "https://github.com/R1ftzy/rasterbator",
    featured: true,
    video: "/videos/raster.mp4",
  },
  {
    id: 3,
    title: "r1ytm",
    description: "A modern skin for YouTube Music.",
    brand: "JS",
    tech: ["Web", "Chrome", "Firefox"],
    github: "https://github.com/R1ftzy/r1ytm-player",
    demo: "https://addons.mozilla.org/en-US/firefox/addon/r1ytm/",
    featured: true,
    image: "/images/r1ytm.png",
  },
  {
    id: 4,
    title: "MissingNo",
    description: "A Game Boy emulator (WIP).",
    brand: "C",
    tech: ["C99", "No libc", "ESP32"],
    github: "https://github.com/MissingNoEmu/MissingNo-core",
    featured: true,
    image: "/images/WIP.png",
  },
  {
    id: 5,
    title: "R1P-8",
    description: "A Chip-8 interpreter.",
    brand: "C",
    tech: ["CHIP-8", "SDL"],
    github: "https://github.com/R1ftzy/R1P-8",
    featured: true,
    image: "/images/c8.png",
  },
  {
    id: 6,
    title: "R1sh_",
    description: "A POSIX shell.",
    brand: "C",
    tech: ["POSIX", "Win32"],
    github: "https://github.com/R1ftzy/R1sh_",
    featured: true,
    image: "/images/shell.png",
  },
  {
    id: 7,
    title: "R1FC",
    description: "image/video converter.",
    brand: "Rust",
    tech: ["Win11", "FFmpeg", "C++", "MSIX"],
    github: "https://github.com/R1ftzy/R1FC",
    featured: false,
    video: "/videos/sonion.mp4",
  },
  {
    id: 8,
    title: "WinFetch",
    description: "A Win32 sysinfo tool.",
    brand: "C",
    tech: ["Win32"],
    github: "https://github.com/R1ftzy/WinFetchPlus",
    featured: false,
    image: "/images/winfetch.png",
  },
  {
    id: 9,
    title: "Simple Edit",
    description: "TUI text editor.",
    brand: "C",
    tech: ["Win32"],
    github: "https://github.com/R1ftzy/simple-edit",
    featured: false,
    image: "/images/simple-edit.png",
  },
  {
    id: 10,
    title: "Minesweeper",
    description: "TUI Minesweeper.",
    brand: "Go",
    tech: ["Bubble Tea"],
    github: "https://github.com/R1ftzy/Minesweeper",
    featured: false,
    image: "/images/minesweeper.png",
  },
  {
    id: 11,
    title: "Last.fm-card",
    description: "Now playing song card.",
    brand: "JS",
    tech: ["Web"],
    github: "https://github.com/R1ftzy/Last.fm-card",
    demo: "https://last-fm-card.vercel.app",
    featured: false,
    image: "/images/playing.png",
  },
];
