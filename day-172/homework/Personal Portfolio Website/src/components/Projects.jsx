
const projects = [
    { name: "Weather App", description: "A React app that shows real-time weather updates." },
    { name: "Task Manager", description: "A to-do list app with local storage support." },
    { name: "Movie Finder", description: "Search for movies and get details dynamically." },
    { name: "Portfolio Website", description: "A personal website showcasing projects and skills." },
    { name: "Quiz Game", description: "A JavaScript-based quiz game with multiple-choice questions." }
];

const Projects = () => {
  return (
    <div>
      {
        projects.map((project, index) => (
            <div>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
            </div>
        ))
      }
    </div>
  )
}

export default Projects
