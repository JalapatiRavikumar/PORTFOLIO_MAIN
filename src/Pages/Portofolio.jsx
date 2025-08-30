import { useEffect, useState } from "react";
import { projects as sharedProjects, certificates as sharedCertificates } from "../data/siteData";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code, Award, Boxes, GraduationCap, MapPin, Calendar } from "lucide-react";

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const techStacks = [
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "Mernstack" },
  { icon: "tailwind.svg", language: "Fullstack" },
  { icon: "reactjs.svg", language: "Mernstack" },
  { icon: "vite.svg", language: "Vite" },
  { icon: "nodejs.svg", language: "Mernstack" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "firebase.svg", language: "Firebase" },
  { icon: "vercel.svg", language: "Vercel" },
  { icon: "java.svg", language: "Java" },
  { icon: "spring-boot.svg", language: "Spring Boot" },
  { icon: "sql.svg", language: "SQL" },
  { icon: "postman.svg", language: "Postman" },
];

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  useEffect(() => {
    AOS.init({
      once: false,
    });

    // Persist shared projects to localStorage so other pages can read counts
    try {
      if (Array.isArray(sharedProjects) && sharedProjects.length > 0) {
        localStorage.setItem("projects", JSON.stringify(sharedProjects));
      }
      if (Array.isArray(sharedCertificates) && sharedCertificates.length > 0) {
        localStorage.setItem("certificates", JSON.stringify(sharedCertificates));
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">
      {/* Header section */}
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span style={{
            color: '#6366f1',
            backgroundImage: 'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical expertise. 
          Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        {/* AppBar and Tabs section */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="md:px-4"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                  "& .lucide": {
                    transform: "scale(1.1) rotate(5deg)",
                  },
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                  "& .lucide": {
                    color: "#a78bfa",
                  },
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
            }}
          >
            <Tab
              icon={<Code className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={<Award className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Certificates"
              {...a11yProps(1)}
            />
            <Tab
              icon={<Boxes className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Tech Stack"
              {...a11yProps(2)}
            />
            <Tab
              icon={<GraduationCap className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Education"
              {...a11yProps(3)}
            />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          {/* Projects Tab */}
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {sharedProjects.map((proj, idx) => (
                  <div
                    key={proj.id}
                    data-aos="fade-up"
                    data-aos-duration={1000 + idx * 200}
                    className="relative group"
                  >
                    <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full">
                      <div className="absolute -z-10 inset-0 bg-gradient-to-br from-[#6366f1]/10 to-[#a855f7]/10 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>

                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={proj.img}
                          alt={proj.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-[#6366f1] to-[#a855f7] transition-transform group-hover:rotate-6">
                            <Code className="w-6 h-6 text-white" />
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                              <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6366f1] group-hover:to-[#a855f7] transition-all duration-300">
                                {proj.title}
                              </h3>
                              <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded-full">
                                {proj.period || 'MERN Stack'}
                              </span>
                            </div>

                            <div className="space-y-3 text-gray-300 mb-4 text-sm">
                              {proj.description.map((d, i) => (
                                <div className="flex items-start gap-2" key={i}>
                                  <span className="text-[#6366f1] mt-1">•</span>
                                  <p>{d}</p>
                                </div>
                              ))}
                            </div>

                            <div className="flex gap-2">
                              {proj.github && (
                                <a
                                  href={proj.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#6366f1]/20"
                                >
                                  <span>GitHub</span>
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                </a>
                              )}
                              {proj.live && (
                                <a
                                  href={proj.live}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-white/20 border border-white/20"
                                >
                                  <span>Live Demo</span>
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Gemini AI ChatBot */}
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="relative group"
                >
                  <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full">
                    <div className="absolute -z-10 inset-0 bg-gradient-to-br from-[#6366f1]/10 to-[#a855f7]/10 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>

                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBp0QyIotSrqrWD2wtm-U-lOjvSqLsONHlVg&s"
                        alt="Gemini AI ChatBot"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-[#6366f1] to-[#a855f7] transition-transform group-hover:rotate-6">
                          <Code className="w-6 h-6 text-white" />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6366f1] group-hover:to-[#a855f7] transition-all duration-300">
                              Gemini AI ChatBot
                            </h3>
                            <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded-full">
                              Feb 2025 - Apr 2025
                            </span>
                          </div>
                          
                          <div className="space-y-3 text-gray-300 mb-4 text-sm">
                            <div className="flex items-start gap-2">
                              <span className="text-[#6366f1] mt-1">•</span>
                              <p>Achieved 96% response accuracy by developing a smart conversation management system.</p>
                            </div>
                            
                            <div className="flex items-start gap-2">
                              <span className="text-[#6366f1] mt-1">•</span>
                              <p>Improved data quality by 33% by handling missing user input and organizing intent categories.</p>
                            </div>
                            
                            <div className="flex items-start gap-2">
                              <span className="text-[#6366f1] mt-1">•</span>
                              <p>Evaluated multiple response optimization techniques for quick replies and accurate answers.</p>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <a 
                              href="https://github.com/JalapatiRavikumar/easy-loan-visualizer.git"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#6366f1]/20"
                            >
                              <span>GitHub</span>
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                            <a 
                              href="https://echo-gemini-chat.vercel.app/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-white/20 border border-white/20"
                            >
                              <span>Live Demo</span>
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recipe Management */}
                <div
                  data-aos="fade-up"
                  data-aos-duration="1400"
                  className="relative group"
                >
                  <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full">
                    <div className="absolute -z-10 inset-0 bg-gradient-to-br from-[#6366f1]/10 to-[#a855f7]/10 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>

                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdpCwo8J8l2Pr4526JhJlntDMnetA1gfoQw&s"
                        alt="Recipe Management"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-[#6366f1] to-[#a855f7] transition-transform group-hover:rotate-6">
                          <Code className="w-6 h-6 text-white" />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6366f1] group-hover:to-[#a855f7] transition-all duration-300">
                              Recipe Management
                            </h3>
                            <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded-full">
                              MERN Stack
                            </span>
                          </div>
                          
                          <div className="space-y-3 text-gray-300 mb-4 text-sm">
                            <div className="flex items-start gap-2">
                              <span className="text-[#6366f1] mt-1">•</span>
                              <p>Developed a Recipe Management application using MERN stack.</p>
                            </div>
                            
                            <div className="flex items-start gap-2">
                              <span className="text-[#6366f1] mt-1">•</span>
                              <p>Implemented CRUD operations for recipes with images and ingredient details.</p>
                            </div>
                            
                            <div className="flex items-start gap-2">
                              <span className="text-[#6366f1] mt-1">•</span>
                              <p>Added search, filter, and categorization features for easy recipe navigation.</p>
                            </div>
                            
                            <div className="flex items-start gap-2">
                              <span className="text-[#6366f1] mt-1">•</span>
                              <p>Integrated user authentication and personal favorites.</p>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <a 
                              href="https://github.com/JalapatiRavikumar/recipe_management.git"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#6366f1]/20"
                            >
                              <span>GitHub</span>
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                            <a 
                              href="https://recipe-management-nu.vercel.app/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-white/20 border border-white/20"
                            >
                              <span>Live Demo</span>
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="max-w-4xl mx-auto">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="relative group"
                >
                  <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="absolute -z-10 inset-0 bg-gradient-to-br from-[#6366f1]/10 to-[#a855f7]/10 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>

                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-[#6366f1] to-[#a855f7] transition-transform group-hover:rotate-6">
                        <Award className="w-8 h-8 text-white" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6366f1] group-hover:to-[#a855f7] transition-all duration-300">
                            Fullstack Developer (Kodnest)
                          </h3>
                          <span className="text-sm text-gray-400 bg-white/10 px-3 py-1 rounded-full">
                            Feb 2024 - Nov 2024
                          </span>
                        </div>
                        
                        <div className="space-y-4 text-gray-300 mb-6">
                          <div className="flex items-start gap-3">
                            <span className="text-[#6366f1] mt-1">•</span>
                            <p>Mastered core Java and Full Stack development concepts, proficient in control flow, loops, functions, and data structures, applied in web applications</p>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <span className="text-[#6366f1] mt-1">•</span>
                            <p>Developed expertise in procedural programming and logical concepts, strengthening overall development skills</p>
                          </div>
                        </div>

                        <a 
                          href="https://drive.google.com/file/d/1zQlHMoJ387lwVreMMTUqyaWBYbAI1FWE/view?usp=drive_link"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#6366f1]/20"
                        >
                          <span>View Certificate</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                {techStacks.map((stack, index) => (
                  <div
                    key={index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>

          {/* Education Tab */}
          <TabPanel value={value} index={3} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {/* Santhiram Engineering College */}
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="relative group"
                >
                  <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full">
                    <div className="absolute -z-10 inset-0 bg-gradient-to-br from-[#6366f1]/10 to-[#a855f7]/10 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-[#6366f1] to-[#a855f7] transition-transform group-hover:rotate-6">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6366f1] group-hover:to-[#a855f7] transition-all duration-300 mb-2">
                          Santhiram Engineering College
                        </h3>
                        
                        <p className="text-gray-300 mb-2 font-medium">
                          Computer Science Engineering
                        </p>

                        <div className="space-y-2 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>Nandyal, India</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>Jun 2020 - Aug 2024</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            <span>GPA: 7.22</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* National Junior College */}
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="relative group"
                >
                  <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full">
                    <div className="absolute -z-10 inset-0 bg-gradient-to-br from-[#6366f1]/10 to-[#a855f7]/10 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-[#6366f1] to-[#a855f7] transition-transform group-hover:rotate-6">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6366f1] group-hover:to-[#a855f7] transition-all duration-300 mb-2">
                          National Junior College
                        </h3>
                        
                        <p className="text-gray-300 mb-2 font-medium">
                          Mathematics
                        </p>

                        <div className="space-y-2 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>Nandyal, India</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>Jun 2019 - Aug 2020</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            <span>GPA: 60.70</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ZPHS High School */}
                <div
                  data-aos="fade-up"
                  data-aos-duration="1400"
                  className="relative group"
                >
                  <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full">
                    <div className="absolute -z-10 inset-0 bg-gradient-to-br from-[#6366f1]/10 to-[#a855f7]/10 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-[#6366f1] to-[#a855f7] transition-transform group-hover:rotate-6">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6366f1] group-hover:to-[#a855f7] transition-all duration-300 mb-2">
                          ZPHS High School
                        </h3>
                        
                        <p className="text-gray-300 mb-2 font-medium">
                          General
                        </p>

                        <div className="space-y-2 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>Nandyal, India</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>Aug 2017 - Dec 2018</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            <span>GPA: 8.5</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>


        </SwipeableViews>
      </Box>
    </div>
  );
}