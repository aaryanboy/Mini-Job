import Button from '../common/Button';
import StatCard from '../common/StatCard';

const Hero = () => {
  const stats = [
    { label: 'Active Jobs', value: '50,000+' },
    { label: 'Job Seekers', value: '20,000+' },
    { label: 'Company', value: '10,000+' },
    { label: 'Success Rate', value: '100%' },
  ];

  return (
    <section className="bg-[#F5F5FA] min-h-screen pt-24 pb-16 px-4 relative overflow-hidden flex flex-col justify-center">
      {/* Decorative curved shape */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E8E8F5] rounded-full -translate-y-1/2 translate-x-1/3 opacity-60" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10 select-none">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Find Your Next Opportunity
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-lg mb-1">
          Search through thousands of job openings from top companies.
        </p>
        <p className="text-gray-500 text-lg mb-10">
          Your dream job is waiting.
        </p>

        {/* Search Box */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex items-center bg-white border-2 border-[#5B5FE6] rounded-lg px-5 py-4">
            <input
              type="text"
              placeholder="Search jobs..."
              className="flex-1 outline-none text-gray-700 placeholder-gray-400 text-lg"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#5B5FE6]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Find Jobs Button - Centered */}
        <div className="flex justify-center mb-16">
          <Button
            variant="primary"
            width="300px"
            height="58px"
            text="22px"
            href="/find-jobs"
          >
            Find Jobs
          </Button>
        </div>
      </div>

      {/* Stats Section - Using StatCard component */}
      <div className="w-full max-w-6xl mx-auto px-8">
        <div className="flex justify-between items-center">
          {stats.map((stat) => (
            <StatCard key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

