import { useParams, Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Tag from '../components/common/Tag';
import jobsData from '../data/jobs.json';

const JobDetail = () => {
  const { id } = useParams();
  const job = jobsData.find((j) => j.id === id);

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
    <div className="bg-gradient-to-b from-[#E8E8F5] to-[#D5D5F0] min-h-screen pt-40 pb-16">
      {/* Header Card */}
      <div className="px-4 mb-8">
        <div className="w-[98%] max-w-[1600px] mx-auto bg-white rounded-[30px] p-8 md:p-12 shadow-sm">
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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{job.title}</h1>
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
          <div className="flex gap-3">
            <Button variant="primary" className="px-6 py-2.5 rounded-full text-sm font-medium shadow-md">
              Apply →
            </Button>
            <Button variant="secondary" className="px-6 py-2.5 rounded-full text-sm font-medium bg-[#E8E8F5] text-[#5B5FE6] hover:bg-[#dadaea] border-none">
              Save
            </Button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="px-4">
        <div className="w-[98%] max-w-[1600px] mx-auto">
          {/* White Card for About Content */}
          <div className="bg-white rounded-[30px] p-8 md:p-12 shadow-sm">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br /><br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;

