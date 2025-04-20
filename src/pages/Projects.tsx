
import { useState, useEffect } from "react";
import { projects, categories } from "@/data/projects";
import { ProjectType } from "@/components/ProjectCard";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import ScrollAnimation from "@/components/ScrollAnimation";
import { cn } from "@/lib/utils";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(projects);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Filter projects based on selected category
    if (activeCategory === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        project.category.some(
          (cat) => cat.toLowerCase() === activeCategory.toLowerCase()
        )
      );
      setFilteredProjects(filtered);
    }
    
    // Simulate loading for smooth transitions
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [activeCategory]);
  
  return (
    <div className="pt-24 md:pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <SectionHeader
          title="My Projects"
          subtitle="Explore my engineering projects spanning from robotics and thermal systems to sustainable design."
        />
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === category
                  ? "bg-ntu text-white"
                  : "bg-light-300 text-dark-200 hover:bg-light-400"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Project loading skeletons
            Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="rounded-lg border border-light-300 bg-white overflow-hidden"
              >
                <div className="aspect-video w-full bg-light-300 animate-pulse"></div>
                <div className="p-5">
                  <div className="h-6 bg-light-300 animate-pulse rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-light-300 animate-pulse rounded w-full mb-2"></div>
                  <div className="h-4 bg-light-300 animate-pulse rounded w-2/3"></div>
                  <div className="mt-4 flex gap-2">
                    <div className="h-6 bg-light-300 animate-pulse rounded-full w-16"></div>
                    <div className="h-6 bg-light-300 animate-pulse rounded-full w-16"></div>
                  </div>
                </div>
              </div>
            ))
          ) : filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ScrollAnimation key={project.id} delay={index * 100}>
                <ProjectCard project={project} />
              </ScrollAnimation>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-medium text-dark-100">No projects found</h3>
              <p className="mt-2 text-dark-100/70">
                Try selecting a different category.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
