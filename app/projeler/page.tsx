import type { Metadata } from "next";
import ProjectsHub from "@/components/ProjectsHub";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projeler | G-Wolf Interactive",
  description:
    "G-Wolf Interactive ürünleri ve stüdyo konseptleri — Diet Tracking, Northline Ops, Aether Rush.",
};

export default function Page() {
  return <ProjectsHub projects={getProjects()} />;
}
