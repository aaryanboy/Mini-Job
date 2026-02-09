import Hero from '../components/sections/Hero';
import BrowseJobs from '../components/sections/BrowseJobs';
import HowItWorks from '../components/sections/HowItWorks';
import CallToAction from '../components/sections/CallToAction';

const Home = () => {
  return (
    <div id="home" className="pt-20">
      <Hero />
      <BrowseJobs />
      <HowItWorks />
      <CallToAction />
    </div>
  );
};

export default Home;

