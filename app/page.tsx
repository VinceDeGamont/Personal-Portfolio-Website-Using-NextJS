import Image from 'next/image';

export const metadata = {
  title: 'Portfolio Vincen Okta Ramadhan',
  description: 'This website is created using Next.js and Tailwind CSS',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white font-sans">
      
      <nav className="bg-gray-800/70 backdrop-blur-md p-4 sticky top-0 shadow-lg z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-cyan-400">Vincen O. Ramadhan</h1>
          <div className="space-x-4 md:space-x-6">
            <a href="#about" className="hover:text-cyan-400 transition-colors text-sm md:text-base">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors text-sm md:text-base">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors text-sm md:text-base">Contact</a>
          </div>
        </div>
      </nav>

      <header id="hero" className="container mx-auto text-center py-24 md:py-32 px-6">
        
        <Image 
          src="/profile.jpg" 
          alt="Profile Photo"
          width={150} 
          height={150} 
          className="rounded-full mx-auto mb-6 border-4 border-cyan-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/50" 
        /> 
        
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Vincen Okta Ramadhan
        </h2>
        <p className="text-xl text-gray-400">
          An Undergraduate Student of Computer Science
        </p>
        <p className="text-xl text-gray-400">
          at Tarumanagara University
        </p>
        <p className="text-lg text-gray-500 mt-2">
          Machine Learning Engineer | Python | R | Data Analyst
        </p>
      </header>

      <section id="about" className="py-20 bg-gray-800 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-3xl font-bold mb-6 text-cyan-400">About Me</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            I am a Computer Science student who is incredibly interested in AI development, Machine Learning, and Data Analysis. 
            I have experience with Python, C++, R, Java, and Prolog. 
            I am always enthusiastic about learning new technologies and building useful AI and Robotics to help human life.
          </p>
        </div>
      </section>

      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10 text-cyan-400">Featured Projects</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl transform transition-transform hover:scale-105 duration-300">
              <h4 className="text-xl font-bold mb-2">Sentiment Analysis (NLP)</h4>
              <p className="text-gray-400 mb-4">
                A project analyzing public sentiment on a social media topic using Python and NLP techniques.
              </p>
              <a 
                href="#"
                target="_blank" rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-2 px-4 rounded transition-all duration-300 hover:from-cyan-400 hover:to-blue-500 hover:shadow-lg hover:shadow-cyan-500/50"
              >
                View Code
              </a>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl transform transition-transform hover:scale-105 duration-300">
              <h4 className="text-xl font-bold mb-2">Image Classification (CNN)</h4>
              <p className="text-gray-400 mb-4">
                Building a Convolutional Neural Network (CNN) model to classify images (e.g., plant disease detection).
              </p>
              <a 
                href="#"
                target="_blank" rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-2 px-4 rounded transition-all duration-300 hover:from-cyan-400 hover:to-blue-500 hover:shadow-lg hover:shadow-cyan-500/50"
              >
                View Demo
              </a>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-xl transform transition-transform hover:scale-105 duration-300">
              <h4 className="text-xl font-bold mb-2">Data Visualization (R)</h4>
              <p className="text-gray-400 mb-4">
                Creating an interactive dashboard using R Shiny to visualize data (e.g., population data).
              </p>
              <a 
                href="#"
                target="_blank" rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-2 px-4 rounded transition-all duration-300 hover:from-cyan-400 hover:to-blue-500 hover:shadow-lg hover:shadow-cyan-500/50"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="py-10 bg-gray-950 text-center">
        <div className="container mx-auto">
          <p className="text-lg mb-4">Connect with me:</p>
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:vincenoktaramadan02@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Email
            </a>
            <a 
              href="https://github.com/vincedegamont"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/vincen-okta-ramadhan-1975ab322"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-gray-600 mt-8">
            &copy; {new Date().getFullYear()} Vincen Okta Ramadhan. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </footer>

    </main>
  );
}