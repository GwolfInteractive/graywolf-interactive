import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailPage from "@/components/ProjectDetailPage";
import { getProject, getProjectSlugs } from "@/lib/projects";
import { pickText } from "@/lib/projectLocale";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = true;

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${pickText(project.title, "tr")} | G-Wolf Interactive`,
    description: pickText(project.metaDesc, "tr"),
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <ProjectDetailPage project={project} />;
}
