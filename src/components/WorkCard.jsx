const WorkCard = ({ title, technology, img, link }) => {
  return (
    <div className="card uppercase font-light -tracking-wider">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={img}
          alt={title}
          className="object-cover filter grayscale hover:grayscale-0 transition-all duration-500 md:opacity-80 md:hover:opacity-100"
        />

        <div className="py-5">
          <h3 className="mb-5">{title}</h3>
          <div className="gap-5 md:flex">
            {technology.map((tech, idx) => (
              <span key={idx} className="border px-3 md:px-5 rounded-xl">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};

export default WorkCard;
