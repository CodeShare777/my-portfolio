import Image from "next/image";
import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import Firebase from "../public/assets/skills/firebase.png";
import NextJS from "../public/assets/skills/nextjs.png";
import AWS from "../public/assets/skills/aws.png";
import Python from "../public/assets/skills/python.png";
import Terraform from "../public/assets/skills/terraform.png";
import Kubernetes from "../public/assets/skills/kubernetes.png";
import Jenkins from "../public/assets/skills/jenkins.png";
import Cpp from "../public/assets/skills/cpp.png";
import Docker from "../public/assets/skills/docker.png";
import Nodejs from "../public/assets/skills/nodejs.png";
import Django from "../public/assets/skills/django.png";
import Bash from "../public/assets/skills/bash.png";

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-6 justify-center items-center'>
              <div className='m-auto'>
                <Image src={AWS} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-left'>
                <h3>AWS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-6 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Terraform} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-left'>
                <h3>Terraform</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-6 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Kubernetes} width='48px' height='48px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-left'>
                <h3>Kubernetes</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-6 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Docker} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-left'>
                <h3>Docker</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-6 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Python} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-left'>
                <h3>Python</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-6 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Django} width='52px' height='52px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-left'>
                <h3>Django</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-6 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Javascript} width='56px' height='56px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-left'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-6 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Nodejs} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-left'>
                <h3>Node.js</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-6 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Cpp} width='56px' height='56px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-left'>
                <h3>C++</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-6 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Bash} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-left'>
                <h3>Bash</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-6 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Jenkins} width='56px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-left'>
                <h3>Jenkins</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-6 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Github} width='60px' height='60px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-left'>
                <h3>Actions</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
