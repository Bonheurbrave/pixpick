import { IoMdWarning } from "react-icons/io";
import { FaSadTear } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="w-screen w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 via-violet-500 to-green-400 text-white text-center px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="mb-6">
        <FaSadTear size={80} className="animate-bounce" />
      </div>
      <div className="flex flex-col items-center">
        <IoMdWarning size={50} className="text-yellow-400 mb-4" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Oops! Something went wrong</h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 max-w-md sm:max-w-lg md:max-w-xl px-4">
          We couldn't find the page you were looking for. Please try again later.
        </p>
        <Link to={"/"}>
          <button className="px-6 py-3 bg-violet-700 hover:bg-violet-600 rounded-lg text-lg sm:text-xl transition">
            Go back home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
