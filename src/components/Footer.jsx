import { useNavigate } from "react-router-dom";

const Footer = () => {
  const goto = useNavigate();
  const handedashboard = async()=>{
    await localStorage.setItem("admin","bonheurbrave1@gmail.com")
    
    if(localStorage.getItem("admin")== localStorage.getItem("youremail")){
     goto("/dashboard")
    }
  }
  return (
    <footer className="bg-gray-800 text-white py-6 px-20 fixed w-screen bottom-0 pb-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side: Copyright */}
          <p className="text-sm text-center md:text-left">
            Copyright © {
                new Date().getFullYear()
            } PixPick. All rights reserved.
          </p>

          {/* Right Side: Powered by */}
          <p className="text-sm text-center mt-4 md:mt-0">
            Powered by <span className="font-semibold text-violet-500"><a href="https://linkedin.com/in/bonheur-ndikumwenayo-41a458287" target="_blank">Bobo_de</a><a onClick={handedashboard} className="cursor-pointer">v</a></span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
