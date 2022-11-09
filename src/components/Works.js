import React, { useEffect, useState } from 'react';
import projectDetails from '../data/details';
import githubIcon from '../assets/icons/Icon_Github.svg';
import liveIcon from '../assets/icons/see_live.svg';
import folderIcon from '../assets/icons/folder.svg';
import CovidStatistics from '../assets/images/Covid-19 Statistics.png';
import leaderboard from '../assets/images/leaderboard.png';
import bookstore from '../assets/images/bookstore.png';

const Works = () => {
  const projects = projectDetails;
  const [images, setImages] = useState([]);
  useEffect(() => {
    setImages([...images, CovidStatistics, leaderboard, bookstore]);
  }, []);

  return (
    <section className="px-8 py-12 md:p-14 lg:p-24 text-slate-300" id="work">
      <div>
        <div className="wow pulse flex justify-center p-3" data-wow-delay="0.5s">
          <h1 className="text-4xl p-3 border-0 border-b-2 border-b-green">My Recent Works</h1>
        </div>
        <ul className="my-16 flex flex-col gap-5">
          { projects.map((project) => (
            project.id <= 3
              ? (
                <li key={project.id} className="wow fadeInUp grid grid-cols-12 gap-2 mb-7 relative items-center">
                  <div className={`flex flex-col gap-4 p-7 md-p-0 relative col-[1_/_-1] ${project.id % 2 === 0 ? 'md:col-[1_/_9] lg:col-[1_/_7]' : 'md:col-[5_/_-1] lg:col-[7_/_-1]'} row-[1_/_-1] z-20`}>
                    <h2 className={`flex justify-start ${project.id % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} text-3xl`}>
                      <a href={project['live-version-link']['link-href']} className="hover:text-green focus:text-green " target="_blank" rel="noopener noreferrer">
                        {project.name}
                      </a>
                    </h2>
                    <div className="md:bg-ligth-navy py-5 md:px-4 min-h-fit text-slate-400">
                      <p>{project.description}</p>
                    </div>
                    <ul className={`flex gap-2 flex-wrap justify-start ${project.id % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} text-slate-400"`}>
                      {project.technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                    <div className={`flex gap-2 justify-start ${project.id % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                      <a href={project['source-link']['source-href']} target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="Github" />
                      </a>
                      <a href={project['live-version-link']['link-href']} target="_blank" rel="noopener noreferrer">
                        <img src={liveIcon} alt="Live" />
                      </a>
                    </div>
                  </div>
                  <div className={`h-full opacity-25 md:opacity-50 hover:md:opacity-100 w-full md:bg-green bg-slate-200 relative col-[1_/_-1] ${project.id % 2 === 0 ? 'md:col-[6_/_-1]' : 'md:col-[1_/_8]'} row-[1_/_-1] z-10`}>
                    <a className="h-full focus:md:opacity-100" href={project['live-version-link']['link-href']} target="_blank" rel="noopener noreferrer">
                      <img
                        className="h-full"
                        src={images && images[project.id - 1]}
                        alt={project.name}
                      />
                    </a>
                  </div>
                </li>
              ) : ''
          ))}
        </ul>
      </div>
      <div>
        <div className="wow pulse flex justify-center">
          <h1 className="text-4xl p-3 border-0 border-b-2 border-b-green">Other Works</h1>
        </div>
        <ul className="my-10 gap-2 grid md:grid-cols-2 lg:grid-cols-3">
          {
            projects.map((project) => (
              project.id > 3
                ? (
                  <a key={project.id} href={project['live-version-link']['link-href']} target="_blank" rel="noopener noreferrer" className="flex">
                    <li className="wow fadeInUp flex flex-col justify-between gap-3 bg-ligth-navy p-5">
                      <header className="flex flex-col gap-3">
                        <div className="flex justify-between items-center pb-4">
                          <img src={folderIcon} className="" alt="folder" />
                          <div className="flex gap-2 justify-end">
                            <a href={project['source-link']['source-href']} target="_blank" rel="noopener noreferrer">
                              <img src={githubIcon} alt="Github" />
                            </a>
                            <a href={project['live-version-link']['link-href']} target="_blank" rel="noopener noreferrer">
                              <img src={liveIcon} alt="Live" />
                            </a>
                          </div>
                        </div>
                        <div className="flex justify-start text-2xl text-slate-300">
                          <h2>{project.name}</h2>
                        </div>
                        <div>
                          <p>{project.description}</p>
                        </div>
                      </header>
                      <ul className="flex gap-2 flex-wrap justify-start text-slate-400">
                        {project.technologies.map((tech) => (
                          <li key={tech}>{tech}</li>
                        ))}
                      </ul>
                    </li>
                  </a>
                ) : ''
            ))
          }
        </ul>
      </div>
    </section>
  );
};

export default Works;
