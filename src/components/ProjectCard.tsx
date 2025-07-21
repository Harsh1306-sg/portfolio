import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export type ProjectType = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string[];
  tools: string[];
  featured?: boolean;
  duration: number;
  para1: string;
  para2: string;
  teamSize: number;
  keyFeatures: string[];
  technicalChallenges: string;
  documentation?: boolean;
  github?: boolean;
  
};

interface ProjectCardProps {
  project: ProjectType;
  className?: string;
  featured?: boolean;
}

const ProjectCard = ({
  project,
  className,
  featured = false,
}: ProjectCardProps) => {
  return (
    <Link
      to={`/projects/${project.id}`}
      className={cn(
        "group block overflow-hidden rounded-lg border border-light-300 bg-white transition-all duration-300 hover:shadow-lg",
        featured ? "hover:scale-[1.02]" : "hover:scale-[1.01]",
        className
      )}
    >
      <div className="relative overflow-hidden">
        <div className="aspect-video w-full overflow-hidden bg-light-300">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {project.featured && (
          <div className="absolute right-4 top-4 rounded bg-ntu px-2 py-1 text-xs font-medium text-white">
            Featured
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-dark-100 group-hover:text-ntu">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-dark-100/70 line-clamp-2">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tools.slice(0, 3).map((tool, index) => (
            <span
              key={index}
              className="rounded-full bg-light-300 px-3 py-1 text-xs font-medium text-dark-200"
            >
              {tool}
            </span>
          ))}
          {project.tools.length > 3 && (
            <span className="rounded-full bg-light-300 px-3 py-1 text-xs font-medium text-dark-200">
              +{project.tools.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
