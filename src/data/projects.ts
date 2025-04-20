
import { ProjectType } from "@/components/ProjectCard";

export const projects: ProjectType[] = [
  {
    id: "autonomous-robot",
    title: "Autonomous Robot Design",
    description:
      "Designed and built an autonomous robot capable of navigating through complex environments using sensor fusion and custom control algorithms.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1470&auto=format&fit=crop",
    category: ["robotics", "design"],
    tools: ["SolidWorks", "Arduino", "Python", "ROS"],
    featured: true,
  },
  {
    id: "thermal-management",
    title: "Thermal Management System",
    description:
      "Developed a novel thermal management system for high-performance computing applications, reducing operating temperatures by 15% while maintaining optimal performance.",
    image: "https://images.unsplash.com/photo-1581093196277-9f608bb3b4bc?q=80&w=1470&auto=format&fit=crop",
    category: ["thermal", "design"],
    tools: ["ANSYS", "MATLAB", "AutoCAD"],
    featured: true,
  },
  {
    id: "sustainable-materials",
    title: "Sustainable Materials Research",
    description:
      "Researched and tested novel sustainable materials for manufacturing applications, focusing on biodegradable alternatives to traditional plastics.",
    image: "https://images.unsplash.com/photo-1530904613557-b5cf0d14faca?q=80&w=1470&auto=format&fit=crop",
    category: ["materials", "research"],
    tools: ["Material Testing", "CAD", "FEA"],
  },
  {
    id: "fluid-dynamics",
    title: "Fluid Dynamics Simulation",
    description:
      "Created advanced fluid dynamics simulations to optimize the design of hydraulic components for improved efficiency in industrial applications.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1470&auto=format&fit=crop",
    category: ["simulation", "fluid-dynamics"],
    tools: ["COMSOL", "MATLAB", "CFD"],
  },
  {
    id: "medical-device",
    title: "Medical Device Prototype",
    description:
      "Prototyped a novel medical device for non-invasive patient monitoring, incorporating ergonomic design principles and advanced sensor technology.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1480&auto=format&fit=crop",
    category: ["biomedical", "design"],
    tools: ["SolidWorks", "3D Printing", "Electronics"],
    featured: true,
  },
  {
    id: "renewable-energy",
    title: "Renewable Energy System",
    description:
      "Designed a hybrid renewable energy system for remote applications, combining solar and wind power with efficient energy storage solutions.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1470&auto=format&fit=crop",
    category: ["energy", "sustainability"],
    tools: ["CAD", "MATLAB", "Electronics"],
  },
];

export const categories = [
  "All",
  "Robotics",
  "Design",
  "Simulation",
  "Materials",
  "Energy",
  "Biomedical",
];

export const tools = [
  "SolidWorks",
  "ANSYS",
  "MATLAB",
  "Python",
  "AutoCAD",
  "3D Printing",
  "Arduino",
  "ROS",
  "CFD",
  "FEA",
  "Electronics",
  "COMSOL",
];
