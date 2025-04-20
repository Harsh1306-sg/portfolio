import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";
import ScrollAnimation from "@/components/ScrollAnimation";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const featuredProjects = projects.filter((project) => project.featured);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center">
            <div
              className={cn(
                "w-full lg:w-1/2 mt-10 lg:mt-0 lg:pr-10",
                "opacity-0 transition-all duration-1000 ease-out transform translate-y-8",
                isVisible && "opacity-100 translate-y-0"
              )}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-100 leading-tight">
                Mechanical Engineer <span className="text-ntu">& Designer</span>
              </h1>

              <p className="mt-6 text-xl text-dark-100/70">
                Master's student at NTU Singapore specializing in robotics
                design and engineering fundamentals.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/projects">
                  <Button size="lg">View Projects</Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg">
                    About Me
                  </Button>
                </Link>
              </div>
            </div>

            <div
              className={cn(
                "w-full lg:w-1/2",
                "opacity-0 transition-all duration-1000 delay-300 ease-out",
                isVisible && "opacity-100"
              )}
            >
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-light-200">
                  <img
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1470&auto=format&fit=crop"
                    alt="Mechanical Engineer working on a project"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 hidden md:block w-40 h-40 bg-ntu rounded-tr-3xl z-[-1]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 bg-light-200">
        <div className="container mx-auto">
          <SectionHeader
            title="Featured Projects"
            subtitle="Explore some of my recent work in mechanical engineering, robotics, and sustainable design."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ScrollAnimation key={project.id} delay={index * 150}>
                <ProjectCard project={project} featured />
              </ScrollAnimation>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/projects">
              <Button variant="secondary">View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 md:pr-10 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-100">
                Technical <span className="text-ntu">Skills</span>
              </h2>

              <p className="mt-4 text-dark-100/70">
                Specialized in mechanical design, thermal systems, and robotics
                with experience in various engineering tools and software.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-ntu mr-3"></div>
                  <span>CAD/CAM Software</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-ntu mr-3"></div>
                  <span>Simulink & AutoCAD</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-ntu mr-3"></div>
                  <span>Robotics & Automation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-ntu mr-3"></div>
                  <span>FEA & CFD Analysis</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-ntu mr-3"></div>
                  <span>Prototyping</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-ntu mr-3"></div>
                  <span>Materials Science</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-ntu mr-3"></div>
                  <span>Engineering Mathematics</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-ntu mr-3"></div>
                  <span>Technical Documentation</span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-lg bg-light-300 p-5 flex flex-col items-center justify-center hover:shadow-md transition-shadow h-40">
                  <img
                    src="https://cdn.worldvectorlogo.com/logos/solidworks.svg"
                    alt="SolidWorks"
                    className="h-12"
                  />
                  <p className="mt-4 font-medium text-center">SolidWorks</p>
                </div>
                <div className="rounded-lg bg-light-300 p-5 flex flex-col items-center justify-center hover:shadow-md transition-shadow h-40">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png"
                    alt="MATLAB"
                    className="h-12"
                  />
                  <p className="mt-4 font-medium text-center">MATLAB</p>
                </div>
                <div className="rounded-lg bg-light-300 p-5 flex flex-col items-center justify-center hover:shadow-md transition-shadow h-40">
                  <img
                    src="https://logos-world.net/wp-content/uploads/2020/12/Autocad-Logo.png"
                    alt="ANSYS"
                    className="h-12"
                  />
                  <p className="mt-4 font-medium text-center">AutoCad</p>
                </div>
                <div className="rounded-lg bg-light-300 p-5 flex flex-col items-center justify-center hover:shadow-md transition-shadow h-40">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/1024px-Arduino_Logo.svg.png"
                    alt="Arduino"
                    className="h-12"
                  />
                  <p className="mt-4 font-medium text-center">Arduino</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
