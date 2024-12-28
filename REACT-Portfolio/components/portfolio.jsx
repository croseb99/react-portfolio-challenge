function Portfolio() {
  return (
    <section id="portfolio">
      <h2>My Projects</h2>
      <div className="projects">
        <div className="project">
          <img src="project-image.jpg" alt="Project 1" />
          <a href="https://deployed-app.com">Deployed App</a>
          <a href="https://github.com/yourusername/project1">GitHub Repo</a>
        </div>
        {/* Repeat for other projects */}
      </div>
    </section>
  );
}

export default Portfolio;
