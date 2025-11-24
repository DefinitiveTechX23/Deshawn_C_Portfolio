"use client"

import { useState } from "react"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const projects = [
    {
      id: 1,
      title: "About Me Page",
      description:
        "My first web development project built during the foundations portion of my bootcamp fellowship at The Knowledge House. A personal introduction page showcasing HTML structure and CSS styling fundamentals.",
      image: "/personal-about-me-webpage-with-clean-design.png",
      category: "HTML/CSS",
      technologies: ["HTML5", "CSS3"],
      status: "Completed",
      link: "https://rainbow-belekoy-1713ae.netlify.app/",
    },
    {
      id: 2,
      title: "Flash Feast",
      description:
        "A concept app developed for the Bloomberg hackathon focused on healthy eating. The app helps users create quick meals with ingredients they have at home and suggests healthier ingredient alternatives to promote better nutrition.",
      image: "/healthy-eating-mobile-app-interface-with-food-sugg.png",
      category: "App Concept",
      technologies: ["UI/UX Design", "Concept Development"],
      status: "Completed",
      link:
        "https://www.figma.com/design/6fOXZb5Ld7Sbn9tfhfzPQw/Flash-Feast-APP-HI-FI-Mock-Up?node-id=0-1&t=JWjirdGXFM12xvHL-1",
    },
    {
      id: 3,
      title: "Project Pokedex API Project",
      description:
        "An interactive Pokemon search application that fetches data from the Pokemon API. Users can search for any Pokemon by name to view their sprite image and hear their unique cry sound, creating an engaging Pokemon discovery experience.",
      image: "/pokemon-search-app-interface-with-pokemon-sprites.png",
      category: "JavaScript",
      technologies: ["HTML", "CSS", "JavaScript", "Pokemon API"],
      status: "Completed",
      link: "https://pokedexproject23.netlify.app/",
    },
    {
      id: 4,
      title: "Tabs Component (In Progress)",
      description:
        "Building a reusable tabs component with React, Next.js, and Tailwind CSS to enhance UI interactivity.",
      image: "/placeholder.svg",
      category: "React/Next.js",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      status: "In Progress",
      link: "#",
    },
    {
      id: 5,
      title: "Project Manager Contact Page (In Progress)",
      description:
        "Developing a contact page for project managers using React, Next.js, and Tailwind CSS, focusing on accessibility and responsive design.",
      image: "/placeholder.svg",
      category: "React/Next.js",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      status: "In Progress",
      link: "#",
    },
    {
      id: 6,
      title: "Technical Lead – User Info Team",
      description:
        "Guided teammates through component design, API integration, and code reviews as the technical lead for the User Info Team on the Prometheus Capstone Project.",
      image: "/placeholder.svg",
      category: "Leadership",
      technologies: ["React", "Next.js", "Team Leadership"],
      status: "In Progress",
      link: "#",
    },
  ]

  const categories = ["All", "HTML/CSS", "JavaScript", "App Concept", "React/Next.js", "Leadership"]

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="w-full bg-gradient-to-br from-orange-500 via-cyan-200 to-orange-400">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-8 lg:px-16 xl:px-24 min-h-screen flex items-center">
        <div className="w-full text-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
            My <span className="text-orange-500">Portfolio</span> Projects
          </h1>
          <p className="text-xl lg:text-2xl text-gray-700">
            Here are the projects I've built during my web development journey, from bootcamp foundations to hackathon
            concepts, API integrations, and ongoing React/Next.js development.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="pb-12 px-4 sm:px-8 lg:px-16 xl:px-24">
        <div className="w-full">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-orange-500 to-cyan-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4 sm:px-8 lg:px-16 xl:px-24">
        <div className="w-full">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : project.status === "In Progress"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-cyan-100 text-cyan-700"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-sm font-medium text-cyan-600 bg-cyan-200 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link !== "#" && (
                    <div className="flex items-center justify-between">
                      <a
                        href={project.link}
                        className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                      >
                        View Project
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Progress */}
      <section className="py-16 lg:py-24 px-4 sm:px-8 lg:px-16 xl:px-24 bg-gradient-to-r from-orange-500 to-cyan-300">
        <div className="w-full text-center">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-8">
            Current Learning <span className="text-cyan-500">Focus</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Next Projects */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Next Projects</h3>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• React Portfolio Enhancement</li>
                <li>• Full-Stack Web Application</li>
                <li>• Advanced API Integration Projects</li>
                <li>• Interactive JavaScript Games</li>
                <li>• Next.js Application Development</li>
              </ul>
            </div>

            {/* Skills I'm Developing */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills I'm Developing</h3>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• React Components and Hooks</li>
                <li>• Modern JavaScript (ES6+)</li>
                <li>• API Integration and Fetch</li>
                <li>• Responsive Web Design</li>
                <li>• Next.js (Server-Side Rendering, Static Site Generation, API Routes, File-Based Routing)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}