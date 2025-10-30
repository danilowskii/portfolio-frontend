import Button from "../Button";

const Projects = () => {
  const cardProjects = [
    { id: "1", title: "Projeto X", details: "IA for something" },
    { id: "2", title: "Projeto Y", details: "Cloud database" },
    { id: "3", title: "Projeto Z", details: "Landing page for M" },
  ];

  return (
    <div className="w-full grid grid-cols-[auto_auto_auto] justify-between h-full">
      {cardProjects.map((project, index) => (
        <div
          key={index}
          className="bg-[#120620]/30 flex flex-col justify-between p-4 border-white/40 border hover:bg-[#120620] hover:border-[#FD485C] cursor-pointer h-full w-[230px] rounded-[20px] "
        >
          <div>
            <h2
              className="font-serif text-lg font-semibold text-[#FD485C]"
              key={index}
            >
              {project.title}
            </h2>
            <p className="text-[#F9FAF7] font-serif">{project.details}</p>
          </div>
          <Button variant="primary">Veja mais</Button>
        </div>
      ))}
    </div>
  );
};

export default Projects;
