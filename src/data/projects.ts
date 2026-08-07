export type Brand = {
  name: string;
  color: string;
};

export const BRANDS = {
  C: {
    name: "C",
    color: "#7097cd",
  },
  OpenGL: {
    name: "OpenGL",
    color: "#41c13d",
  },
  React: {
    name: "React",
    color: "#61DAFB",
  },
  Go: {
    name: "Go",
    color: "#00ADD8",
  },
  Win32: {
    name: "Win32",
    color: "#6ec439",
  },
  SDL2: {
    name: "SDL2",
    color: "#F59E0B",
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
    title: "Simple Edit",
    description: "A lightweight terminal text editor.",

    brand: "C",

    tech: ["Win32"],

    github: "https://github.com/R1ftzy/simple-edit",
    featured: true,
    image: "/images/simple-edit.png",
  },
];
