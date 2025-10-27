import { useEffect, memo } from "react";
import { Briefcase, Calendar, TrendingUp, Zap, BarChart3, Settings } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const ExperienceCard = memo(() => (
  <div
    data-aos="fade-up"
    data-aos-duration="1000"
    className="relative group"
  >
    <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="absolute -z-10 inset-0 bg-gradient-to-br from-[#6366f1]/10 to-[#a855f7]/10 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>

      <div className="flex items-start gap-6">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-[#6366f1] to-[#a855f7] transition-transform group-hover:rotate-6">
          <Briefcase className="w-8 h-8 text-white" />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6366f1] group-hover:to-[#a855f7] transition-all duration-300">
              FULL STACK DEVELOPER INTERN
            </h3>
            <span className="text-sm text-gray-400 bg-white/10 px-3 py-1 rounded-full flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              Jan 2024 - Sep 2024
            </span>
          </div>
          
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] flex items-center justify-center mt-1">
                <TrendingUp className="w-3 h-3 text-white" />
              </div>
              <p>One year of hands-on experience in full-stack development, implementing scalable and high-performance applications.</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] flex items-center justify-center mt-1">
                <Zap className="w-3 h-3 text-white" />
              </div>
              <p>Optimized database queries and API response handling, reducing data retrieval time by 20%, enhancing system efficiency.</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] flex items-center justify-center mt-1">
                <Settings className="w-3 h-3 text-white" />
              </div>
              <p>Developed automation solutions, increasing development productivity by 15% and streamlining workflows.</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] flex items-center justify-center mt-1">
                <BarChart3 className="w-3 h-3 text-white" />
              </div>
              <p>Designed and deployed 15+ interactive dashboards, delivering real-time insights for data-driven decision-making.</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] flex items-center justify-center mt-1">
                <TrendingUp className="w-3 h-3 text-white" />
              </div>
              <p>Enhanced application performance and scalability, identifying 10+ key improvements in frontend and backend architecture.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
));

// give memo'd component a displayName to satisfy eslint/react/display-name
ExperienceCard.displayName = "ExperienceCard";

const ExperiencePage = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <div className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0" id="Experience">
      {/* Header */}
      <div className="text-center lg:mb-8 mb-2 px-[5%]">
        <div className="inline-block relative group">
          <h2
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
            data-aos="zoom-in-up"
            data-aos-duration="600"
          >
            Experience
          </h2>
        </div>
        <p
          className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
          data-aos="zoom-in-up"
          data-aos-duration="800"
        >
          My professional journey and achievements
        </p>
      </div>

      {/* Experience Card */}
      <div className="w-full mx-auto pt-8 sm:pt-12 relative">
        <div className="max-w-4xl mx-auto">
          <ExperienceCard />
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
