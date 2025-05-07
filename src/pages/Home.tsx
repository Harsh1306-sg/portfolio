import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";
import ScrollAnimation from "@/components/ScrollAnimation";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import LogoShowcase from "@/components/LogoShowcase";

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
                Mechanical Design <span className="text-ntu">Engineer</span>
              </h1>

              <p className="mt-6 text-xl text-dark-100/70">
                Result-Driven Mechanical Design Engineer with a First Class
                Honours and ongoing MSc student at NTU Singapore, blending
                advanced CAD and FEA skills with a passion for building smart,
                functional, and sustainable products. From drones to bulletproof
                vests, my designs are guided by purpose, engineered for
                precision, and built to deliver real-world value.
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
                    src="https://i.pinimg.com/736x/2e/a8/e1/2ea8e199982a9e06380c82891775eab5.jpg"
                    alt="Mechanical Engineer working on a project"
                    className="w-full h-full object-contain"
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

      <section className="flex flex-col gap-4 md:gap-6 justify-center items-center mt-20">
        <h1 className="text-3xl md:text-4xl font-bold text-dark-100 m-0">
          {" "}
          My Engineering <span className="text-ntu">Software Suite</span>
        </h1>
        <p className="mt-2 text-dark-100/70">
          Some tools and software that I am proficient at.
        </p>
        <LogoShowcase />
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-light-200">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 md:pr-10 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-100">
                Technical <span className="text-ntu">Skills</span>
              </h2>

              <p className="mt-4 text-dark-100/70">
                Specialized in mechanical design, military designs and robotics
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

            <div className=" relative w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1720879996903-24859d1df48f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="desk"
                className="rounded-xl hover:brightness-110 hover:scale-90 transition-transform duration-300"
              />

              {/* <div className="grid grid-cols-2 gap-6">
                <div className="rounded-lg bg-light-300 p-5 flex flex-col items-center justify-center hover:shadow-md transition-shadow h-40">
                  <img
                    src="https://www.pugetsystems.com/wp-content/uploads/2022/08/SOLIDWORKS-Logo.png"
                    alt="SolidWorks Logo"
                    className="h-12"
                  />
                  <p className="mt-4 font-medium text-center">SolidWorks</p>
                </div>
                <div className="rounded-lg bg-light-300 p-5 flex flex-col items-center justify-center hover:shadow-md transition-shadow h-40">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/701px-Python-logo-notext.svg.png"
                    alt="MATLAB Logo"
                    className="h-12"
                  />
                  <p className="mt-4 font-medium text-center">Python</p>
                </div>
                <div className="rounded-lg bg-light-300 p-5 flex flex-col items-center justify-center hover:shadow-md transition-shadow h-40">
                  <img
                    src="https://avatars.githubusercontent.com/u/29735195?s=280&v=4"
                    alt="ROS 2 Logo"
                    className="h-12"
                  />
                  <p className="mt-4 font-medium text-center">ROS 2</p>
                </div>
                <div className="rounded-lg bg-light-300 p-5 flex flex-col items-center justify-center hover:shadow-md transition-shadow h-40">
                  <img
                    src="https://images.seeklogo.com/logo-png/55/2/ansys-logo-png_seeklogo-551347.png"
                    alt="Ansys Logo"
                    className="h-12"
                  />
                  <p className="mt-4 font-medium text-center">Ansys</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
