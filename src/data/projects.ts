import { ProjectType } from "@/components/ProjectCard";

export const projects: ProjectType[] = [
  {
    id: "bullet-proof",
    title: "Bullet-Proof Vest Innovation",
    description:
      "Designed modular vest that enhanced bullet resistance, repairability, and sustainability while reducing material waste and overall weight by 20%, improving maintenance efficiency and ensuring full coverage of all vital organs.",
    image:
      "https://images.unsplash.com/photo-1638104977265-8e8ea24aa2aa?q=80&w=3087&fit=crop",
    category: ["Materials", "Design", "Simulation", "Ergonomics"],
    tools: ["SolidWorks", "CAD", "FEA"],
    featured: true,
    duration: 8,
    teamSize: 1,
    para1:
      "Through rigorous Finite Element Analysis (FEA), I evaluated various materials to determine optimal impact resistance and structural integrity properties for body armor applications. This analytical approach provided crucial data that informed subsequent design decisions and material selections, ensuring performance requirements would be met under real-world conditions.",
    para2:
      "The project culminated in a modular vest design that significantly improved upon existing solutions, enhancing bullet resistance while simultaneously reducing overall weight by 20%. The innovative modular approach improved field repairability and sustainability by minimizing material waste, while the comprehensive design ensured complete coverage of all vital organs. Throughout development, I produced detailed sketches and precise CAD models that maintained design integrity and facilitated efficient manufacturing processes.",
    keyFeatures: [
      "Modular design for enhanced repairability and field maintenance",
      "20% weight reduction while maintaining ballistic protection",
      "Optimized coverage of vital organs with ergonomic considerations",
      "Sustainable material selection with reduced environmental impact",
    ],
    technicalChallenges:
      "A significant challenge was balancing enhanced ballistic protection with weight reduction goals. This required extensive material research and innovative structural designs to maintain protection standards while reducing overall mass by 20%. Additionally, creating a truly modular system presented design complexities around connection points and interchangeable panels. Multiple prototypes and stress tests were needed to ensure structural integrity at module interfaces while maintaining ballistic performance across the entire vest assembly.",
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
    duration: 3,
    teamSize: 5,
    para1:
      'As a member of the NTU REXUS Drone Department, I played a key role in designing and developing an advanced 11" RC Quadrotor in X-Configuration with a 10kg Maximum Take-Off Weight (MTOW). The project focused on creating a high-performance drone platform capable of autonomous operations through integration of the Pixhawk 6X flight controller and GNSS-based navigation systems, providing reliable positioning and flight capabilities even in challenging environments.',
    para2:
      "My primary contributions involved generating multiple drone frame concepts using sophisticated CAD tools, followed by rigorous structural integrity optimization through Finite Element Analysis (FEA) simulations. These engineering processes ensured the final design balanced strength, weight, and functionality requirements. Additionally, I assisted the team in optimizing overall drone performance specifically for the University Rover Challenge, fine-tuning flight characteristics and control systems to achieve superior stability and responsiveness during competition scenarios.",
    keyFeatures: [
      '11" RC Quadrotor with X-Configuration and 10kg MTOW capability',
      "Integration of Pixhawk 6X flight controller for advanced flight control",
      "GNSS-based navigation system for precise autonomous positioning",
      "Optimized structural integrity through iterative FEA simulations",
    ],
    technicalChallenges:
      "The primary technical challenge involved optimizing the drone's structural design to support the 10kg MTOW while maintaining maneuverability and flight stability. Multiple frame iterations were required to achieve the optimal strength-to-weight ratio, with FEA simulations revealing stress concentrations that needed targeted reinforcement. Another significant challenge was integrating the Pixhawk 6X with custom flight parameters and GNSS navigation to ensure reliable autonomous operation. This required extensive calibration and field testing to account for sensor fusion accuracy and environmental interference factors.",
  },
  {
    id: "f1tenth-hackathon",
    title: "F1Tenth Virtual Hackathon - 3rd Place",
    description:
      "Developed an award-winning autonomous racing algorithm utilizing wall-tracing techniques for precise navigation and obstacle avoidance, implemented within the ROS 2 framework for real-time control and sensor integration.",
    image: "https://stevengong.co/attachments/Pasted-image-20230106181649.png",
    category: ["Robotics", "Programming", "Autonomous Systems"],
    tools: ["ROS 2", "Python", "Wall-tracing Algorithm", "Sensor Integration"],
    featured: true,
    duration: 2,
    teamSize: 12,
    para1:
      "In the highly competitive F1Tenth Virtual Hackathon, I developed a sophisticated autonomous racing algorithm centered around wall-tracing principles for precise navigation and effective obstacle avoidance. This approach allowed our virtual vehicle to maintain optimal racing lines while adapting to the dynamic course conditions in real-time. The algorithm balanced aggressive performance with necessary safety parameters, continuously calculating optimal distances from track boundaries based on incoming sensor data.",
    para2:
      "Implementation was accomplished using ROS 2 (Robot Operating System), leveraging its robust modular framework to create efficient communication between sensing, processing, and control modules. This architecture enabled seamless real-time control and sensor data integration, crucial for split-second decision making in racing scenarios. Our solution's effectiveness was validated by securing 3rd place in the competition, achieved through methodical optimization of lap times while ensuring consistent stability across varying track conditions and racing situations.",
    keyFeatures: [
      "Wall-tracing algorithm for precision navigation and obstacle avoidance",
      "ROS 2 implementation for modular sensing and control architecture",
      "Real-time sensor data processing for dynamic racing decisions",
      "Optimized performance balancing speed and stability for consistent lap times",
    ],
    technicalChallenges:
      "A major challenge was developing a racing algorithm that could make split-second decisions based on imperfect sensor data. This required sophisticated filtering and prediction algorithms to account for sensor noise and latency while maintaining racing speed. Another significant obstacle was optimizing the balance between aggressive racing lines and safety margins. Too conservative an approach would result in slower lap times, while too aggressive a strategy led to crashes. Extensive simulations across various track conditions were necessary to find the optimal balance that ultimately secured our 3rd place finish.",
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
