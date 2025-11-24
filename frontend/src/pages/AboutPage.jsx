export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-orange-300 via-cyan-500 to-orange-500 text-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-sky-500">Deshawn Curtis</span>
            </h1>
            <p className="text-xl leading-relaxed">
              I'm a passionate web developer on an exciting journey of learning and growth. Currently mastering the
              fundamentals of web development through HTML, CSS, JavaScript, and most recently diving deep into React.
            </p>
            <p className="text-lg leading-relaxed">
              My goal is to create cool, functional, and aesthetically pleasing web experiences that bring ideas to life
              and impact the physical world. Every day brings new challenges and opportunities to expand my skills —
              and that’s what excites me most. Overcoming challenges and acquiring new skills is exhilarating!
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-400 to-cyan-400 rounded-2xl p-1">
              <img
                src="images\Deshawn photo Glasses in the forest.png"
                alt="Deshawn Curtis - Web Developer"
                className="w-full max-h-[1000px] object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white w-full">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technologies I'm <span className="text-cyan-500">Learning</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {[
  { name: "HTML5", level: "Intermediate", color: "from-orange-400 to-orange-600" },
  { name: "CSS", level: "Intermediate", color: "from-cyan-400 to-cyan-600" },
  { name: "JavaScript", level: "Learning", color: "from-orange-500 to-cyan-500" },
  { name: "React", level: "Beginner", color: "from-cyan-500 to-orange-500" },
  { name: "Next.js", level: "Beginner", color: "from-orange-500 to-cyan-500" }
].map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-lg mb-4 flex items-center justify-center`}
              >
                <span className="text-white font-bold text-lg">{skill.name.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-600">{skill.level}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Journey */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-100 to-cyan-100 w-full">
        <h2 className="text-3xl font-bold text-center mb-12">
          My Learning <span className="text-orange-500">Journey</span>
        </h2>
        <div className="space-y-8 w-full">
          {[
            {
              phase: "Foundation",
              title: "HTML & CSS Efficiency",
              description:
                "Started with the building blocks of web development, learning semantic HTML and responsive CSS design.",
              status: "In Progress",
            },
            {
              phase: "Interactivity",
              title: "JavaScript Fundamentals",
              description:
                "Currently diving deep into JavaScript to add dynamic functionality and interactivity to web pages.",
              status: "In Progress",
            },
            {
              phase: "Modern Development",
              title: "React Framework",
              description: "Recently began learning React to build modern, component-based user interfaces.",
              status: "Learning",
            },
            {
              phase: "Modern Development",
              title: "Next.js",
              description: "Currently learning Next.js to strengthen my React foundation and gain experience building production-ready, full-stack applications with server-side rendering and SEO optimization.",
              status: "Learning",
            },
            {
              phase: "Future Goals",
              title: "Full-Stack Development",
              description:
                "Planning to expand into backend technologies and become a well-rounded full-stack developer.",
              status: "Planned",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-cyan-600 bg-cyan-100 px-3 py-1 rounded-full">
                  {item.phase}
                </span>
                <span
                  className={`text-sm font-medium px-3 py-1 rounded-full ${
                    item.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : item.status === "In Progress"
                      ? "bg-orange-100 text-orange-700"
                      : item.status === "Learning"
                      ? "bg-cyan-100 text-cyan-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Goals Section */}
<section className="py-16 px-4 sm:px-6 lg:px-8 bg-white w-full">
  <h2 className="text-3xl font-bold text-center mb-8">
    My <span className="text-orange-500">Goals</span>
  </h2>
  <div className="grid md:grid-cols-3 gap-8 w-full">
    {[
      {
        title: "Master React",
        description: "Become proficient in React and its ecosystem to build modern web applications.",
        icon: "⚛️",
      },
      {
        title: "Master Next.js",
        description: "Gain expertise in Next.js to build fast, scalable, and SEO-friendly full-stack applications.",
        icon: "🌐",
      },
      {
        title: "Build and Create Projects",
        description: "Create a portfolio of diverse projects that showcase my growing skills and creativity.",
        icon: "🚀",
      },
      {
        title: "Join the Movement",
        description:
          "Empower developers, build together, and contribute to open-source projects that matter.",
        icon: "✊🏿",
      },
    ].map((goal, index) => (
      <div
        key={index}
        className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
      >
        <div className="text-4xl mb-4">{goal.icon}</div>
        <h3 className="text-xl font-semibold mb-3">{goal.title}</h3>
        <p className="text-gray-600">{goal.description}</p>
      </div>
    ))}
  </div>
</section>
    </div>
  );
}