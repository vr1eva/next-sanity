import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {
  const projects = await getProjects()

  return (
    <div>
      {projects.map((project) => (
        <div className="font-bold" key={project._id}>{project.name}</div>
      ))}
    </div>
  );
}
