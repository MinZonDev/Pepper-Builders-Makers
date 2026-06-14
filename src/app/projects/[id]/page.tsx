import type { Metadata } from 'next';
import { allProjects } from '@/data/projects';
import { ProjectDetail } from '@/components/pages/ProjectDetail';

export function generateStaticParams() {
  return allProjects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = allProjects.find((p) => p.id === id);

  if (!project) {
    return { title: 'Dự án không tìm thấy' };
  }

  return {
    title: `${project.name} — ${project.category}`,
    description: project.description.vi.slice(0, 160),
    openGraph: {
      title: `${project.name} | Pepper Builders & Makers`,
      description: project.description.vi.slice(0, 160),
      images: [{ url: project.img, width: 1080, height: 720 }],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ProjectDetail id={id} />;
}
