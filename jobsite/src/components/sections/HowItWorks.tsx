

const HowItWorks = () => {
  const steps = [
    {
      step: 'Step 1',
      title: 'Create Your Profile',
      description: 'Sign up and build your professional profile with your skills, experience, and preferences.',
    },
    {
      step: 'Step 2',
      title: 'Browse Jobs',
      description: 'Search and filter through thousands of job listings that match your qualifications.',
    },
    {
      step: 'Step 3',
      title: 'Apply Easily',
      description: 'Submit your application with one click. Track all your applications in one place.',
    },
    {
      step: 'Step 4',
      title: 'Get Hired',
      description: 'Connect with employers, schedule interviews, and land your dream job.',
    },
  ];

  return (
    <section className="bg-[#F5F5FA] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl  text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-500 text-2xl">
            Get started with your job search in four simple steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div 
              key={index}
              className="bg-[#F5F5FA] rounded-[30px] p-10 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="mb-6 flex justify-start w-full">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-900"
                  >
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <span className="text-[#5B5FE6] font-medium text-lg mb-4">
                  {item.step}
                </span>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                
                <p className="text-gray-500 max-w-[240px] leading-tight text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
