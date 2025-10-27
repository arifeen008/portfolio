const ProjectCard = ({
  title,
  description,
  imageUrl,
  tags,
  repoUrl,
  liveUrl,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-start space-x-4 mt-auto">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Live Demo
              {/* <FaExternalLinkAlt className="inline ml-1" /> */}
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:underline font-medium"
            >
              GitHub
              {/* <FaGithub className="inline ml-1" /> */}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
