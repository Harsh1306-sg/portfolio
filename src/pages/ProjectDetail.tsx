import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { ProjectType } from "@/components/ProjectCard";
import Button from "@/components/Button";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<ProjectType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    // Find the project by ID
    const foundProject = projects.find((p) => p.id === id);

    if (foundProject) {
      setProject(foundProject);
    } else {
      // Redirect to projects page if project not found
      setTimeout(() => {
        navigate("/projects", { replace: true });
      }, 100);
    }

    // Simulate loading for smooth transitions
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [id, navigate]);

  if (isLoading) {
    return (
      <div className="pt-24 md:pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="animate-pulse">
            <div className="h-10 bg-light-300 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-light-300 rounded w-2/3 mb-12"></div>

            <div className="aspect-video w-full bg-light-300 rounded-lg mb-8"></div>

            <div className="h-6 bg-light-300 rounded w-full mb-4"></div>
            <div className="h-6 bg-light-300 rounded w-full mb-4"></div>
            <div className="h-6 bg-light-300 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return null;
  }

  return (
    <div className="pt-24 md:pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="mb-8">
          <Link
            to="/projects"
            className="text-dark-100/70 hover:text-ntu inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-dark-100">
            {project.title}
          </h1>
          <p className="mt-4 text-xl text-dark-100/70">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tools.map((tool, index) => (
              <span
                key={index}
                className="rounded-full bg-light-300 px-3 py-1 text-sm font-medium text-dark-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="aspect-video w-full rounded-lg overflow-hidden bg-light-300">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Project details - this would be populated with actual project data */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-dark-100 mb-4">
              Project Overview
            </h2>
            <p className="text-dark-100/80 mb-6">{project.para1}</p>

            <p className="text-dark-100/80 mb-6">{project.para2}</p>

            <h3 className="text-xl font-bold text-dark-100 mt-10 mb-4">
              Key Features
            </h3>
            <ul className="list-disc list-inside space-y-2 text-dark-100/80">
              <li>{project.keyFeatures[0]}</li>
              <li>{project.keyFeatures[1]}</li>
              <li>{project.keyFeatures[2]}</li>
              <li>{project.keyFeatures[3]}</li>
              <li>{project.keyFeatures[4]}</li>
            </ul>

            <h3 className="text-xl font-bold text-dark-100 mt-10 mb-4">
              Technical Challenges
            </h3>
            <p className="text-dark-100/80 mb-6">
              {project.technicalChallenges}
            </p>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="bg-light-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-dark-100 mb-4">
                  Project Details
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-dark-100/70">
                      Category
                    </h4>
                    <p>{project.category.join(", ")}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-dark-100/70">
                      Tools Used
                    </h4>
                    <p>{project.tools.join(", ")}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-dark-100/70">
                      Duration
                    </h4>
                    <p>{project.duration} months</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-dark-100/70">
                      Team Size
                    </h4>
                    <p>{project.teamSize} members</p>
                  </div>
                </div>

                <div className="mt-8">
                  { project.documentation && (
      <a href="https://drive.google.com/file/d/1p6HNEc7VAANmBqV_iCzWojMaCOV_PAQC/view?usp=sharing" >
                  <Button className="w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M14 9l6 6-6 6M4 4v7a4 4 0 0 0 4 4h11" />
                    </svg>
                    View Documentation
                  </Button>
        </a>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
