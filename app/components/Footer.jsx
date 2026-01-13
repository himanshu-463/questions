"use client";

const Footer = () => {
  return (
    
    <footer className=" bg-gray-900 text-gray-300 py-6">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} College PYQ Portal. All rights reserved.
        </p>

        {/* Middle */}
        <p className="text-sm text-gray-400">
          Made for student • By Himanshu
        </p>

        {/* Right */}
        <div className="flex gap-4 text-sm">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>

      </div>
    </footer>

  );
};

export default Footer;
