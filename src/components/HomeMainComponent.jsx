import homepage from "../images/homepage.png";

function HomeMainComponent() {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-between pt-10 px-5 sm:px-10">
      <div className="w-full sm:w-1/3 pt-10">
        <h1 className="font-thin text-4xl sm:text-7xl spacedtext mb-5">Electronic</h1>
        <h1 className="font-bold text-5xl sm:text-6xl underline">Voting</h1>

        <div className="pt-10">
          <p className="text-lg sm:text-xl mb-5">
            PixPick is the app for voting on the best images in your school! Share your photos, discover amazing talent, and cast your vote for
            the top picks. It's fun, easy, and a great way to celebrate
            creativity! Join the community and let the best images shine.
          </p>
          <button className="ease-in-out duration-500 hover:text-black px-10 py-2 outline-none bg-gradient-to-r from-purple-600 via-violet-500 to-green-400 text-white rounded-lg">
            <a href="/vote-page">Get Started</a>
          </button>
        </div>
      </div>

      <div className="w-full sm:w-2/3 px-5 sm:px-10 select-none flex justify-center">
        <img
          src={homepage}
          alt="Homepage"
          className="rounded-full w-full max-w-lg sm:max-w-none" // Ensuring the image scales correctly on mobile
        />
      </div>
    </div>
  );
}

export default HomeMainComponent;
