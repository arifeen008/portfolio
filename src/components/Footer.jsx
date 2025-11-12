const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex space-x-6">
            <a
              href="https://github.com/arifeen008"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/arifeen-kundee-2a0301174/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
            >
              LinkedIn
            </a>
            
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {currentYear} Arifeen Kundee All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
