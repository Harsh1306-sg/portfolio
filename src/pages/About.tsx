
import SectionHeader from "@/components/SectionHeader";
import ScrollAnimation from "@/components/ScrollAnimation";
import Button from "@/components/Button";

const About = () => {
  return (
    <div className="pt-24 md:pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <SectionHeader
          title="About Me"
          subtitle="Mechanical engineering graduate student with a passion for innovative design and sustainable solutions."
        />
        
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {/* Profile Image */}
          <ScrollAnimation className="lg:w-1/3 relative">
            <div className="aspect-square overflow-hidden rounded-2xl bg-light-200">
              <img
                src="https://images.unsplash.com/photo-1580894742597-87bc8789db3d?q=80&w=1470&auto=format&fit=crop"
                alt="Mechanical Engineer Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-1/2 h-1/2 bg-ntu/10 rounded-tr-3xl -z-10"></div>
          </ScrollAnimation>
          
          {/* About Content */}
          <ScrollAnimation className="lg:w-2/3" delay={200}>
            <h3 className="text-2xl font-bold text-dark-100 mb-4">
              Mechanical Engineering Student at NTU Singapore
            </h3>
            
            <p className="text-dark-100/80 mb-4">
              I'm a Master's student specializing in mechanical engineering with a focus on robotics, thermal systems, and sustainable design. My academic journey has equipped me with a strong foundation in engineering principles and innovative problem-solving approaches.
            </p>
            
            <p className="text-dark-100/80 mb-6">
              Throughout my studies, I've developed expertise in CAD design, thermal analysis, and robotic systems. I'm passionate about creating solutions that combine technical excellence with environmental sustainability.
            </p>
            
            <h4 className="text-xl font-semibold text-dark-100 mb-3 mt-8">
              Academic Background
            </h4>
            
            <div className="space-y-4 mb-8">
              <div className="p-4 border-l-2 border-ntu">
                <p className="text-sm text-ntu font-medium">2023 - Present</p>
                <h5 className="text-lg font-medium">Master of Science in Mechanical Engineering</h5>
                <p className="text-dark-100/70">Nanyang Technological University, Singapore</p>
              </div>
              
              <div className="p-4 border-l-2 border-light-300">
                <p className="text-sm text-dark-100/70 font-medium">2019 - 2023</p>
                <h5 className="text-lg font-medium">Bachelor of Engineering in Mechanical Engineering</h5>
                <p className="text-dark-100/70">Prestigious University, Country</p>
              </div>
            </div>
            
            <h4 className="text-xl font-semibold text-dark-100 mb-3 mt-8">
              Research Interests
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-light-200 rounded-lg">
                <h5 className="font-medium">Robotics & Automation</h5>
                <p className="text-sm text-dark-100/70 mt-1">
                  Autonomous systems, robot design, and control systems
                </p>
              </div>
              
              <div className="p-4 bg-light-200 rounded-lg">
                <h5 className="font-medium">Thermal Systems Engineering</h5>
                <p className="text-sm text-dark-100/70 mt-1">
                  Heat transfer optimization and thermal management
                </p>
              </div>
              
              <div className="p-4 bg-light-200 rounded-lg">
                <h5 className="font-medium">Sustainable Design</h5>
                <p className="text-sm text-dark-100/70 mt-1">
                  Eco-friendly materials and energy-efficient systems
                </p>
              </div>
              
              <div className="p-4 bg-light-200 rounded-lg">
                <h5 className="font-medium">Advanced Manufacturing</h5>
                <p className="text-sm text-dark-100/70 mt-1">
                  3D printing, smart manufacturing processes
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              <a 
                href="/resume.pdf" 
                download 
                className="inline-flex items-center justify-center"
              >
                <Button>
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
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download Resume
                </Button>
              </a>
              <a href="mailto:example@ntu.edu.sg">
                <Button variant="outline">
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
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Contact Me
                </Button>
              </a>
            </div>
          </ScrollAnimation>
        </div>
        
        {/* Additional Experience Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-dark-100 mb-6 text-center">
            Experience & Skills
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h4 className="text-xl font-semibold text-dark-100 mb-4 pb-2 border-b border-light-300">
                Technical Skills
              </h4>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">CAD/CAM Software</span>
                    <span className="text-dark-100/70 text-sm">Advanced</span>
                  </div>
                  <div className="w-full bg-light-300 rounded-full h-2">
                    <div className="bg-ntu h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">FEA & CFD Analysis</span>
                    <span className="text-dark-100/70 text-sm">Intermediate</span>
                  </div>
                  <div className="w-full bg-light-300 rounded-full h-2">
                    <div className="bg-ntu h-2 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">MATLAB/Python</span>
                    <span className="text-dark-100/70 text-sm">Advanced</span>
                  </div>
                  <div className="w-full bg-light-300 rounded-full h-2">
                    <div className="bg-ntu h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Prototyping</span>
                    <span className="text-dark-100/70 text-sm">Advanced</span>
                  </div>
                  <div className="w-full bg-light-300 rounded-full h-2">
                    <div className="bg-ntu h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Technical Documentation</span>
                    <span className="text-dark-100/70 text-sm">Intermediate</span>
                  </div>
                  <div className="w-full bg-light-300 rounded-full h-2">
                    <div className="bg-ntu h-2 rounded-full" style={{ width: "70%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-dark-100 mb-4 pb-2 border-b border-light-300">
                Experience
              </h4>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start">
                    <h5 className="font-medium">Research Assistant</h5>
                    <span className="text-sm text-dark-100/70">2023 - Present</span>
                  </div>
                  <p className="text-dark-100/70">Nanyang Technological University</p>
                  <p className="text-sm mt-1">
                    Assisting with research on thermal management systems for electronic devices, conducting experiments and analyzing performance data.
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-between items-start">
                    <h5 className="font-medium">Engineering Intern</h5>
                    <span className="text-sm text-dark-100/70">Summer 2022</span>
                  </div>
                  <p className="text-dark-100/70">Leading Engineering Corporation</p>
                  <p className="text-sm mt-1">
                    Contributed to the design and testing of mechanical components for industrial automation systems.
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-between items-start">
                    <h5 className="font-medium">Project Team Lead</h5>
                    <span className="text-sm text-dark-100/70">2021 - 2023</span>
                  </div>
                  <p className="text-dark-100/70">University Engineering Club</p>
                  <p className="text-sm mt-1">
                    Led a team of 5 student engineers in designing and building a sustainable energy harvesting device for competition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
