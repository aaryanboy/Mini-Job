import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from '../components/common/Button';
import Tag from '../components/common/Tag';
import NotificationToast from '../components/common/NotificationToast';
import jobsData from '../data/jobs.json';

const JobDetail = () => {
  const { id } = useParams();
  const job = jobsData.find((j) => j.id === id);
  const [showNotification, setShowNotification] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // Scroll to top when navigating to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleApply = () => {
    setShowNotification(true);
    setIsExiting(false);
    
    // Start exit animation after 3 seconds
    setTimeout(() => {
      setIsExiting(true);
      // Remove from DOM after animation completes (0.5s)
      setTimeout(() => {
        setShowNotification(false);
        setIsExiting(false);
      }, 500);
    }, 3000);
  };

  if (!job) {
    return (
      <div className="pt-32 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Job not found</h2>
        <Link to="/" className="text-[#5B5FE6] hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <NotificationToast 
        message="Application submitted" 
        isVisible={showNotification} 
        isExiting={isExiting} 
      />


      <div className="bg-gradient-to-b from-[#E8E8F5] to-[#D5D5F0] min-h-screen pt-24 md:pt-40 pb-12 md:pb-16">
        {/* Header Card */}
        <div className="px-3 md:px-4 mb-6 md:mb-8">
          <div className="w-full md:w-[98%] max-w-[1600px] mx-auto bg-white rounded-[20px] md:rounded-[30px] p-5 md:p-12 shadow-sm">
            {/* Company Name with Icon */}
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={job.logo} 
                alt={`${job.company} logo`} 
                className="w-8 h-8 object-contain"
              />
              <span className="text-gray-600 font-medium text-lg">{job.company}</span>
            </div>

            {/* Job Title & Skills */}
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900">{job.title}</h1>
              <div className="flex gap-2">
                {job.skills.map(skill => (
                  <Tag key={skill} variant="outline" className="bg-[#F0F0F8] text-[#5B5FE6] border-[#E0E0F0] text-sm px-4 py-1.5">
                    {skill}
                  </Tag>
                ))}
              </div>
            </div>

            {/* Location */}
            <p className="text-gray-500 text-lg mb-4">{job.location}</p>

            {/* Job Type Tag */}
            <div className="mb-6">
              <Tag variant="primary" className="px-5 py-2 text-sm bg-[#E8E8F5] text-[#5B5FE6] rounded-full">
                {job.type}
              </Tag>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button 
                variant="primary" 
                className="px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-bold shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto"
                onClick={handleApply}
              >
                Apply →
              </Button>
              <Button variant="secondary" className="px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-bold bg-[#E8E8F5] text-[#5B5FE6] hover:bg-[#dadaea] border-none shadow-sm hover:shadow-md transition-shadow w-full sm:w-auto">
                Save
              </Button>
            </div>
          </div>
        </div>

      {/* About Section */}
      <div className="px-3 md:px-4">
        <div className="w-full md:w-[98%] max-w-[1600px] mx-auto">
          {/* White Card for About Content */}
          <div className="bg-white rounded-[20px] md:rounded-[30px] p-5 md:p-12 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About the job</h2>
            
            <div className="text-gray-600 leading-relaxed select-none">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">About The Company...</h3>
              <p className="mb-8 text-lg leading-relaxed">
                {job.aboutCompany}
                <br /><br />
                {job.description}
              </p>

              <h3 className="text-lg font-semibold text-gray-700 mb-3">About The Role...</h3>
              <p className="text-lg leading-relaxed">
                {job.role}
                <br /><br />
                {job.roleDetails}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default JobDetail;

