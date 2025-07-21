import { ProjectType } from "@/components/ProjectCard";
import f1TenthGif from "../images/ftenth.gif";

export const logoIconsList = [
  {
    imgPath: "/logos/python_logo.png",
  },
  {
    imgPath: "https://1000logos.net/wp-content/uploads/2021/04/MATLAB-logo.png",
  },
  {
    imgPath:
      "https://robotnik.eu/wp-content/uploads/2025/03/ROS-2_logo-2392x9999-1.webp",
  },
  {
    imgPath:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Docker_logo.png",
  },
  {
    imgPath:
      "https://1000logos.net/wp-content/uploads/2020/08/SolidWorks-Logo.png",
  },
  {
    imgPath:
      "https://upload.wikimedia.org/wikipedia/commons/7/78/Fusion360_Logo.png",
  },
  {
    imgPath:
      "https://upload.wikimedia.org/wikipedia/commons/e/e5/ANSYS_logo.png",
  },
  {
    imgPath:
      "https://www.okan.edu.tr/uploads/c_1920x760/slider/matlab-simulink/mlsl-12062018.jpg",
  },
  {
    imgPath:
      "https://upload.wikimedia.org/wikipedia/commons/6/6e/AutoCad_new_logo.svg",
  },
  {
    imgPath:
      "https://rockwellautomation.scene7.com/is/image/rockwellautomation/FT-logo_Arena_FTblue_SubNav?wid=1280&fmt=png-alpha",
  },
  {
    imgPath:
      "https://cdn.prod.website-files.com/66e9195e34f86072dbff4dbb/66f2a80a45a4d10de39aca18_Shapr3D_Logo_RGB_Blue.png",
  },
  {
    imgPath: "https://www.cdnlogo.com/logos/s/89/sketchup-2020.svg",
  },
];

// python
// matlab
// ros 2
// docker
// solidworks
// fusion 360
// ansys
// simulink
// autocad
// rockwell arena
// shapr 3D
// Sketchup

export const projects: ProjectType[] = [
  {
    id: "bullet-proof",
    title: "Bullet-Proof Vest Innovation",
    description:
      "Designed modular vest that enhanced bullet resistance, repairability, and sustainability while reducing material waste and overall weight by 20%, improving maintenance efficiency and ensuring full coverage of all vital organs.",
    image: "/bullet.jpeg",
    category: ["Materials", "Design", "Simulation", "Ergonomics"],
    tools: ["SolidWorks", "CAD", "FEA"],
    featured: true,
    duration: 8,
    teamSize: 1,
    para1:
      "This project aimed to rethink conventional bulletproof vests by introducing a modular, lightweight, and sustainable body armour system. Using advanced Finite Element Analysis (FEA), the design focused on enhancing impact resistance while maintaining structural integrity across critical zones of the body. The final outcome was a novel modular vest system that reduces material waste, improves repairability, and ensures full coverage of vital organs. Combining carbon steel and Kevlar in a unique composite layering structure, the armour achieved a weight reduction of approximately 20% compared to traditional vests, while maintaining ballistic resistance at the NIJ Level III-A standard.",
    para2:
      "The project culminated in a modular vest design that significantly improved upon existing solutions, enhancing bullet resistance while simultaneously reducing overall weight by 20%. The innovative modular approach improved field repairability and sustainability by minimizing material waste, while the comprehensive design ensured complete coverage of all vital organs. Throughout development, I produced detailed sketches and precise CAD models that maintained design integrity and facilitated efficient manufacturing processes.",
    keyFeatures: [
      "Modular Armour System with Lightweight Composites: Designed interchangeable plates using hybrid layering of 2mm carbon steel and 6mm Kevlar, reducing overall weight while preserving high impact resistance and improving field serviceability.",
      "Comprehensive Vital Protection: CAD-driven geometry ensured full protection for head, neck, and torso regions, tailored to anthropometric landmarks with detailed component-level drawings to ensure precise assembly.",
      "Engineering Validation Through Simulation: Conducted extensive FEA simulations using ANSYS to test bullet impact (e.g., 7.62 NATO rounds at 500 m/s), guiding iterative design refinements and validating protection capabilities.",
      "Sustainable Engineering Approach: Focused on recyclability of components and responsible material usage in compliance with modern environmental standards, reducing long-term waste.",
      "Advanced Digital Design Implementation: Created detailed 3D models and technical drawings leveraging CAD software to ensure manufacturability, precise assembly tolerances, and efficient production processes.",
    ],
    technicalChallenges:
      "The primary technical challenges involved optimising the vest’s structure to balance protection and weight, especially after early hollow plate designs failed under ballistic impact. FEA simulations required precise material modelling and boundary conditions to accurately capture high-velocity bullet behaviour. Integrating carbon steel and Kevlar introduced challenges in material compatibility and energy absorption, while ensuring modular plates maintained structural integrity without creating weak points. Additionally, achieving full vital organ coverage without compromising mobility demanded careful ergonomic consideration.",
  documentation: false,
  },
  {
    id: "drone-development",
    title: "NTU REXUS Team Drone Development",
    description:
      'Designed and developed a high-performance 11" RC Quadrotor with 10kg MTOW, integrating advanced navigation systems for autonomous flight while optimizing structural integrity through CAD design and FEA simulations.',
    image:
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1470&auto=format&fit=crop",
    category: ["Aerospace", "Robotics", "Design"],
    tools: ["CAD", "FEA", "Pixhawk 6X", "GNSS Navigation"],
    featured: true,
    duration: 4,
    teamSize: 3,
    para1:
      'As a member of the NTU REXUS Drone Department, I played a central role in the design and development of an advanced 11" RC Quad-rotor in X-Configuration, built to support a 10kg Maximum Take-Off Weight (MTOW). The project aimed to create a robust, competition-ready drone platform for autonomous operation, leveraging the Pixhawk 6X flight controller and a GNSS-based navigation system for reliable positioning and precise control in complex environments.',
    para2:
      "My contributions focused on designing multiple drone frame configurations using professional CAD tools such as SolidWorks and Fusion 360, exploring variations in arm geometry, motor positioning, and structural reinforcements to optimise aerodynamics and load distribution. Each design iteration was subjected to detailed Finite Element Analysis (FEA) simulations to assess stress distribution, deformation under load, and overall structural stability. Through this iterative process, I fine-tuned the frames to reduce weight without compromising strength, ensuring that the final design satisfied strict performance requirements related to payload capacity, flight endurance, and mechanical resilience during high maneuverability operations.",
    keyFeatures: [
      '11" RC Quad-rotor with X-Configuration and 10kg MTOW capability',
      "Integration of Pixhawk 6X flight controller for autonomous flight control",
      "GNSS-based navigation system enabling precise positioning in real-time",
      "Structural integrity optimised through advanced FEA simulations",
      "Custom frame design iterations to balance strength, weight, and aerodynamics",
    ],
    technicalChallenges:
      "Designing the drone involved several complex engineering challenges. One of the primary difficulties was achieving a lightweight yet structurally robust frame capable of supporting a 10kg MTOW without compromising flight stability or agility. This required careful material selection, efficient load path design, and extensive FEA-based structural optimisation to prevent stress concentrations and mechanical failure under dynamic conditions.",
  documentation: false,
  },
  {
    id: "f1tenth-hackathon",
    title: "F1Tenth Virtual Hackathon - 3rd Place",
    description:
      "Developed an award-winning autonomous racing algorithm utilizing wall-tracing techniques for precise navigation and obstacle avoidance, implemented within the ROS 2 framework for real-time control and sensor integration.",
    image: f1TenthGif,
    category: [
      "autonomous",
      "robotics",
      "real-time systems",
      "algorithm development",
      "programming",
    ],
    tools: [
      "ROS 2",
      "Python",
      " Lidar-based Wall-following",
      "Pid Control",
      "Docker",
      "Sensor Fusion",
    ],
    featured: true,
    duration: 2,
    teamSize: 1,
    para1:
      "In the highly competitive F1TENTH Virtual Hackathon, I engineered a refined autonomous racing algorithm grounded in wall-tracing principles, enabling precise path navigation and efficient obstacle handling. This strategy allowed the virtual car to dynamically maintain optimal proximity to track boundaries, adapting swiftly to real-time environmental changes. By carefully balancing aggressive speed with stability, the system consistently calculated ideal steering angles and distances using live LiDAR data input.",
    para2:
      "The solution was built on ROS 2 (Robot Operating System), utilising its modular node-based structure to ensure fast, reliable communication between sensing, control, and processing units. This architecture supported real-time decision-making, which was critical for maintaining performance under time-sensitive racing conditions. The final algorithm delivered a strong balance between speed and control, earning third place in the competition by minimising lap times without compromising on consistency or safety. ",
    keyFeatures: [
      "Wall-Following Algorithm: Utilises LiDAR data to detect walls and maintain a set distance, ensuring the vehicle navigates curves and straight paths effectively.",
      "PID Control Mechanism: Implements a Proportional-Integral-Derivative controller to adjust the steering angle based on the error between the desired and actual distances from the wall.",
      "Dynamic Speed Adjustment: Modulates the vehicle's speed in response to the proximity of obstacles, enhancing safety and performance.",
      "Modular ROS 2 Nodes: The system is structured into distinct nodes for laser scan processing, error computation, PID control, and speed regulation, promoting scalability and maintainability.",
      "Mathematical Modelling: Incorporates precise mathematical formulations to calculate angles of deviation and distances, ensuring accurate control decisions.",
    ],
    technicalChallenges:
      "A key challenge was developing a racing algorithm tailored to a specific track, capable of making split-second decisions using imperfect sensor data. This involved implementing advanced filtering and prediction methods to handle sensor noise and latency, all while preserving competitive speed. Another major hurdle was fine-tuning the trade-off between aggressive racing lines and safe manoeuvring. An overly conservative strategy resulted in slower lap times, while being too aggressive increased the likelihood of crashes. Through rigorous simulations focused on this particular track, we achieved an optimal balance—contributing to our 3rd place finish.",
  documentation: false,
    github: true,
  },
  {
    id: "ergonomic-mouse",
    title: "Ergonomic Mouse Development",
    description:
      "Conducted comprehensive analysis of the Kensington wired USB 3.0 Mouse and created improved ergonomic models focused on enhancing user comfort, reducing strain injuries, and improving overall usability through human-centered design principles.",
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1470&auto=format&fit=crop",
    category: ["Product Design", "Ergonomics", "Human Factors"],
    tools: ["CAD", "Ergonomic Analysis", "Prototyping", "User Testing"],
    featured: false,
    duration: 3,
    teamSize: 4,
    para1:
      "Working within a four-person development team, we undertook a detailed analysis of the Kensington wired USB 3.0 Mouse to identify ergonomic shortcomings and opportunities for improvement. Our assessment involved evaluating user interaction patterns, hand positioning, pressure points, and extended usage comfort factors. This comprehensive evaluation provided critical insights into how standard mouse designs often contribute to repetitive strain injuries and user discomfort during prolonged computer use.",
    para2:
      "Based on our findings, we developed multiple improved mouse models focused on natural hand positioning, reduced muscle tension, and enhanced control precision. Using iterative design methodologies, we created prototypes that featured contoured surfaces matching natural hand curvature, optimized button placement for reduced finger strain, and improved weight distribution for smoother movement. The final design significantly reduced wrist pronation and addressed common pressure points, demonstrating how thoughtful ergonomic design can both improve user comfort and potentially reduce repetitive strain injuries associated with computer peripherals.",
    keyFeatures: [
      "Anatomically optimized contoured surface for natural hand positioning",
      "Strategic button placement to minimize finger and wrist strain",
      "Balanced weight distribution for improved control and reduced fatigue",
      "Textured grip surfaces for enhanced comfort during extended use",
    ],
    technicalChallenges:
      "A key challenge in this project was designing a mouse that would accommodate various hand sizes and grip styles while still providing optimal ergonomic benefits. This required multiple prototyping iterations and extensive user testing to find the ideal compromise. Another technical hurdle involved balancing the ergonomic improvements with manufacturing feasibility and cost constraints. Creating the complex contoured surfaces demanded innovative approaches to both the design and the potential manufacturing processes to ensure the product could be produced at a reasonable price point.",
  documentation: true,
  },
];

export const categories = [
  "All",
  "Robotics",
  "Design",
  "Simulation",
  "Materials",
  "Ergonomics",
  "Programming",
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
