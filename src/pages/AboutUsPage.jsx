import { FaLightbulb, FaUsers, FaCogs } from "react-icons/fa";
import rowan from '../images/rowan.jpeg'
import didier from '../images/didier.jpg'
import founder from '../images/founder.jpg'
import {motion} from 'framer-motion'
const AboutUsPage = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
     className= " bg-gradient-to-r from-purple-600 via-violet-500 to-green-400 min-h-screen text-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-black mb-4">About PixPick</h1>
          <p className="text-xl text-gray-100">
            Discover and vote for the best images in your school, share your creativity, and connect with others!
          </p>
        </div>

        {/* Our Mission Section */}
        <div className="mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
            <FaLightbulb size={40} className="text-violet-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-center mb-4">Our Mission</h3>
            <p className="text-lg text-center">
              PixPick aims to inspire creativity by providing a platform for students to showcase their photography, art, and
              creative projects. Our mission is to create a community where every student’s work is celebrated and voted for by
              their peers.
            </p>
          </div>

          <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
            <FaUsers size={40} className="text-violet-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-center mb-4">Our Community</h3>
            <p className="text-lg text-center">
              At PixPick, we believe in building a strong, inclusive community. Our platform connects students, fosters
              collaboration, and promotes healthy competition through the celebration of art, photography, and creativity.
            </p>
          </div>

          <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
            <FaCogs size={40} className="text-violet-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-center mb-4">Our Vision</h3>
            <p className="text-lg text-center">
              We envision PixPick as a go-to app for showcasing school creativity, where every student can participate,
              explore, and vote. Our goal is to make PixPick the ultimate platform for high school creativity.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mt-16 mb-12">
          <h2 className="text-4xl font-bold text-black mb-6">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
              <img
                src={founder}
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center">Bobo_Dev</h3>
              <p className="text-lg text-center text-gray-600">Founder & CEO</p>

              <div>
                <p className=" text-gray-400">Tel: +250 794 082 154</p>
                <p></p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
              <img
                src={didier}
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center">Hirwa Didier</h3>
              <p className="text-lg text-center text-gray-600">Lead Designer</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
              <img
                src={rowan}
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center">Eric Rowan</h3>
              <p className="text-lg text-center text-gray-600">Mentor & Advisor</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUsPage;
