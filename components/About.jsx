import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who Am I</h2>
          <p className='py-2 text-gray-600'>
            I am a DevOps specialist who loves both backend and frontend. I am
            working at Thoughtworks as a Lead Developer, where I make use of my
            Python skills to code amazing tech. I am also working with AWS and
            Kubernetes to deploy and manage microservices on the cloud.
          </p>
          <p className='py-2 text-gray-600'>
            I started development in 2008, after graduating. During my
            Master&apos;s studies my love for programming started to get more
            intense, when I developed 4G simulators using C++ and Python. Then I
            explored multiple different technologies, like Qt, C# and Cuda. As
            Web Frameworks became more powerful, I started developing Web apps
            using Django and Node.js. Then I worked with React for some time and
            now exploring Next.js.
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
