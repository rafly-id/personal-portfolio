const WorkCard = ({ title, technology, img, link }) => {
  return (
    <div className="card max-w-2xl uppercase font-light -tracking-wider">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={img}
          alt={title}
          className="object-cover rounded-xl"
        />

        <div className="py-5">
          <h3 className="mb-5">{title}</h3>
          <div className="gap-5 flex">
            {technology.map((tech, idx) => (
              <span key={idx} className="border px-5 rounded-xl">
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
