
import { useState } from 'react';
import JobCard from '../common/JobCard';
import Button from '../common/Button';
import jobsData from '../../data/jobs.json';

const BrowseJobs = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Full-time', 'Internship', 'Remote'];

  // Use imported job data
  const jobs = jobsData;

  const filteredJobs = activeFilter === 'All' 
    ? jobs 
    : jobs.filter(job => job.type === activeFilter);

  return (
    <section className="bg-[#F5F5FA] p-2 md:p-4">
      <div className="w-full mx-auto bg-[#E8E8F5] rounded-[50px] min-h-screen p-12 md:p-32 relative overflow-hidden">
        {/* Decorative shape */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white rounded-full -translate-y-1/2 -translate-x-1/2 opacity-40 blur-3xl" />
        </div>
        
        <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-6xl font-bold text-gray-900 mb-3">
            Browse Open Positions
          </h2>
          <p className="text-gray-500 text-lg">
            Explore opportunities from companies actively hiring
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'primary' : 'outline'}
              onClick={() => setActiveFilter(filter)}
              className="px-6 py-2 text-sm"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              id={job.id}
              title={job.title}
              company={job.company}
              location={job.location}
              type={job.type}
              skills={job.skills}
            />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseJobs;
