import ProjectCard from './ProjectCard';

// รูปภาพตัวอย่าง (ควร import จาก assets)
import ImgProject1 from '../assets/images/project-image-1.jpeg';
import ImgProject2 from '../assets/images/project-image-2.jpeg';
import ImgProject3 from '../assets/images/project-image-3.jpeg';

// ข้อมูลโปรเจกต์ตัวอย่าง
const myProjects = [
  {
    title: 'Restaurant Management System',
    description: 'A POS and inventory management system for restaurants, built with Laravel and React.',
    imageUrl: ImgProject1,
    tags: ['React', 'Laravel', 'Tailwind CSS', 'PostgreSQL'],
    repoUrl: 'https://github.com/arifeen008/restaurant-frontend',
    liveUrl: '',
  },
  {
    title: 'Football Pitch Booking',
    description: 'A web app for booking artificial turf football pitches, complete with member management.',
    imageUrl: ImgProject2,
    tags: ['Laravel', 'Bootstrap 5', 'MySQL', 'jQuery'],
    repoUrl: 'https://github.com/arifeen008/sportrental',
    liveUrl: '', // ไม่มี Live Demo
  },
  {
    title: 'Sakofah Islamic Website',
    description: 'News and public relations website for a cooperative (maintained and developed).',
    imageUrl: ImgProject3,
    tags: ['PHP', 'CMS', 'Bootstrap', 'SEO','Laravel'],
    repoUrl: '', // ไม่มี Repo
    liveUrl: 'https://sakofahislamic.com',
  },
  {
    title: 'Online Bookstore System',
    description: 'An e-commerce platform for browsing, searching, and purchasing books online. Features a shopping cart and checkout process.',
    imageUrl: ImgProject1,
    tags: ['Laravel', 'MDBootstrap', 'JavaScript','Mysql'],
    repoUrl: 'https://github.com/arifeen008/bookstore',
    liveUrl: '',
  }
];

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12">
        My Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {myProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            tags={project.tags}
            repoUrl={project.repoUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;