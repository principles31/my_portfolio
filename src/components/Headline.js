import React from 'react';

const Headline = () => (
  <section className="flex flex-col justify-center gap-10 flex-grow text-slate-300 px-8 md:p-14 text-xl max-h-screen">
    <div className="">
      <p className="wow fadeInLeft flex flex-col text-xl tracking-widest">
        HELLO, MY NAME IS
        <span className="text-yellow-300 text-5xl md:text-7xl my-5"> EMMANUEL MENSAH.</span>
      </p>
      <h2 className="wow fadeInRight text-3xl md:text-5xl mb-5 text-yellow-100">I Develop Application Softwares.</h2>
      <p className="wow fadeInUp lg:w-1/2 md:w-3/4 tracking-widest">
        Hello! I am a software Developer! I can help you build a product, feature or websit.
        Take a look at my works. If you like what you see and have a project you need coded,
        don't hesitate to contact me.
        I am based in Accra - Ghana.
      </p>
    </div>
    <div className="wow rollIn mt-5 flex flex-wrap">
      <a href="#contact" className="border px-10 py-3 border-green text-green hover:bg-slate-700">Contact me!</a>
    </div>
  </section>
);

export default Headline;
