export type Project = {
  title: string;
  description: string;
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
    description: "A software rasterizer written in C.",
    tech: ["C", "3D Graphics", "Win32"],
    github: "https://github.com/R1ftzy/rasterbator",
    featured: true,
    video: "/videos/raster.mp4",
  },
  {
    title: "WinFetchPlus",
    description: "A Windows system information tool.",
    tech: ["C", "Win32"],
    github: "https://github.com/R1ftzy/WinFetchPlus",
    image: "/images/winfetch.png",
    featured: true,
  },
  {
    title: "Simple Edit",
    description: "A lightweight terminal text editor.",
    tech: ["C"],
    github: "https://github.com/R1ftzy/simple-edit",
    image: "/images/simple-edit.png",
    featured: false,
  },
];
