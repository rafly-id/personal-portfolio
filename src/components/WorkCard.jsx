const WorkCard = ({ title, technology, img, link }) => {
  return (
    <div className="card uppercase font-light -tracking-wider text-sm md:text-base">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={img}
          alt={title}
          className="object-cover filter grayscale hover:grayscale-0 transition-all duration-500 md:opacity-80 md:hover:opacity-100"
        />

        <div className="py-3 md:py-5">
          <h3 className="mb-3 md:mb-5 text-base md:text-lg">{title}</h3>
          <div className="gap-3 md:gap-5 flex flex-wrap">
            {technology.map((tech, idx) => (
              <span
                key={idx}
                className="border px-2 py-1 md:px-5 rounded-xl text-xs md:text-sm"
              >
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
