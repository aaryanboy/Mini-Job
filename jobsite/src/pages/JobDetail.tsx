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
    <div className="bg-[#F5F5FA] min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Card */}
        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm relative overflow-hidden">
           {/* Decorative shape */}
           <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#E8E8F5] rounded-full -translate-y-1/2 translate-x-1/3 opacity-40 blur-3xl" />
           
           <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={job.logo} 
                  alt={`${job.company} logo`} 
                  className="w-16 h-16 rounded-xl object-contain bg-gray-50 border border-gray-100 p-2"
                />
                <h3 className="text-xl font-medium text-gray-700">{job.company}</h3>
              </div>

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-2">
                <div className="flex items-baseline gap-4 flex-wrap">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{job.title}</h1>
                  <div className="flex gap-2">
                    {job.skills.map(skill => (
                      <Tag key={skill} variant="outline" className="bg-[#E8E8F5] text-[#5B5FE6] border-none">
                        {skill}
                      </Tag>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-500 text-lg mb-6">{job.location}</p>

              <div className="mb-8">
                <Tag variant="primary" className="px-4 py-2 text-sm bg-[#E8E8F5] text-[#5B5FE6]">
                  {job.type}
                </Tag>
              </div>

              <div className="flex gap-4">
                <Button variant="primary" className="px-8 py-3 rounded-full shadow-lg shadow-[#5B5FE6]/20">
                  Apply &rarr;
                </Button>
                <Button variant="secondary" className="px-8 py-3 rounded-full bg-[#E8E8F5] text-[#5B5FE6] hover:bg-[#dadaea]">
                  Save
                </Button>
              </div>
           </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About the job</h2>
          
          <div className="prose prose-lg text-gray-600 max-w-none">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">About The Company...</h3>
            <p className="mb-8 leading-relaxed">
              {job.aboutCompany}
              <br/><br/>
              {job.description}
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">About The Role...</h3>
            <p className="leading-relaxed">
              {job.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
