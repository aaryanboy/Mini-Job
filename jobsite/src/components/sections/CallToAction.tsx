import Button from '../common/Button';

const CallToAction = () => {
  return (
    <section id="about" className="w-full bg-gradient-to-r from-[#FDFDFF] to-[#D5D5F5] py-20 px-4 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto min-h-[400px] flex flex-col items-center justify-center text-center">
        
        <div className="relative z-10 max-w-3xl mx-auto select-none">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Your Job Search?
          </h2>
          <p className="text-gray-500 text-lg md:text-xl mb-12">
            Create your free account today and get access to thousands of job opportunities
          </p>
          
          <div className="w-full max-w-[300px] mx-auto">
             <Button 
              variant="primary" 
              className="w-full py-3 text-lg shadow-md transition-all duration-300"
             href="/"
            >
            Get Started - It's Free
          </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
