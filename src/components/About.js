import React from 'react';
import Profile from '../assets/images/profile_image.jpg';

const About = () => (
  <section className="px-8 py-12 md:p-14 lg:p-24 text-slate-300" id="about">
    <div className="wow pulse flex justify-center mb-5 p-3">
      <h2 className="text-4xl p-3 border-0 border-b-2 border-b-green">About me</h2>
    </div>
    <div className="grid grid-cols-12 gap-3">
      <div className="wow fadeInUp opacity-5 md:opacity-100 col-[_1/_-1] md:col-[_1/_7] row-[_1/_-1] w-full h-full flex md:items-center">
        <img src={Profile} alt="Emmanuel Mensah" />
      </div>
      <div className="col-[_1/_-1] md:col-[_7/_-1] row-[_1/_-1] p-3 h-full">
        <div className="flex flex-col gap-5 h-full justify-center md:justify-start">
          <div>
            <h2 className="wow fadeInDown text-2xl text-center md:text-start">Full Stack Web Developer</h2>
          </div>
          <p className="wow fadeInDown text-md text-center md:text-start">
            I can help you build a product,
            feature or website. Look through some of my work and experience!
            If you like what you see and have a project you need coded,
            don’t hestiate to contact me.
          </p>
          <div className="flex flex-col gap-3">
            <h3>Technologies I have been working with:</h3>
            <ul className="wow rollIn flex flex-wrap gap-2 justify-center md:justify-start">
              <li className="border p-3 border-green">JavaScript</li>
              <li className="border p-3 border-green">React</li>
              <li className="border p-3 border-green">Redux</li>
              <li className="border p-3 border-green">Ruby</li>
              <li className="border p-3 border-green">Ruby on Rails</li>
              <li className="border p-3 border-green">Bootstrap</li>
              <li className="border p-3 border-green">Tailwind CSS</li>
              <li className="border p-3 border-green">Postgresql</li>
              <li className="border p-3 border-green">Mysql</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
