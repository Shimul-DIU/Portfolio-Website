const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-gray-400 mt-3">
            Get to know me and what I do.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <img
              src="/images/profile.png" // নিজের ছবি দিন
              alt="Shimul"
              className="w-80 rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Side - Text */}
          <div>
            <h3 className="text-3xl font-bold mb-4">
              Full Stack Web Developer
            </h3>

            <p className="text-gray-300 leading-8 mb-6">
              Hi, I'm <span className="text-cyan-400 font-semibold">Shimul</span>.
              I build responsive, fast, and modern web applications using
              React, Node.js, Express.js, MongoDB, and Tailwind CSS.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-semibold text-cyan-400">Name</h4>
                <p className="text-gray-300">Shimul Mia</p>
              </div>

              <div>
                <h4 className="font-semibold text-cyan-400">Email</h4>
                <p className="text-gray-300">shimul@example.com</p>
              </div>

              <div>
                <h4 className="font-semibold text-cyan-400">Location</h4>
                <p className="text-gray-300">Dhaka, Bangladesh</p>
              </div>

              <div>
                <h4 className="font-semibold text-cyan-400">Experience</h4>
                <p className="text-gray-300">Full Stack Developer</p>
              </div>
            </div>

            <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;