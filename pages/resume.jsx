import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Farid | Resume</title>
        <meta
          name='description'
          content='I’m a lead developer, specializing in infrastructure and backend development.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Farid Sheikh</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/farid-sheikh/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href='https://github.com/facebook/react'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Infrastructure
              as Code <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Infrastructure as Code</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          gravida ultricies ipsum, eget aliquet lacus. Aenean faucibus non dui
          in dapibus. Morbi tempus libero vel tincidunt pharetra. Integer quis
          dolor a justo iaculis laoreet. Donec rutrum sem sapien, at molestie
          ante faucibus aliquet. Morbi eleifend libero sit amet imperdiet
          facilisis.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
            <span className='px-2'>|</span> RESTAPI
          </p>
          <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>Farid Sheikh</span>
            <span className='px-2'>|</span>Munich, Germany
          </p>
          <p className='py-1 italic'>
            Master of Science from the best University in Germany (TUM) (2009 -
            2011)
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              gravida ultricies ipsum, eget aliquet lacus. Aenean faucibus non
              dui in dapibus.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              gravida ultricies ipsum, eget aliquet lacus. Aenean faucibus non
              dui in dapibus.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              gravida ultricies ipsum, eget aliquet lacus. Aenean faucibus non
              dui in dapibus.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              gravida ultricies ipsum, eget aliquet lacus. Aenean faucibus non
              dui in dapibus.
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>Project Experience</span>
            <span className='px-2'>|</span>Munich, Germany
          </p>
          <p className='py-1 italic'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            gravida ultricies ipsum, eget aliquet lacus. Aenean faucibus non dui
            in dapibus.
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              gravida ultricies ipsum, eget aliquet lacus. Aenean faucibus non
              dui in dapibus.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              gravida ultricies ipsum, eget aliquet lacus. Aenean faucibus non
              dui in dapibus.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>

        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>PROJECT-X</span>
            <span className='px-2'>|</span>Munich, Germany
          </p>
          <p className='py-1 italic'>Paramedic / Firefighter (2021 – 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              gravida ultricies ipsum, eget aliquet lacus. Aenean faucibus non
              dui in dapibus.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              gravida ultricies ipsum, eget aliquet lacus. Aenean faucibus non
              dui in dapibus.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              gravida ultricies ipsum, eget aliquet lacus. Aenean faucibus non
              dui in dapibus.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              gravida ultricies ipsum, eget aliquet lacus. Aenean faucibus non
              dui in dapibus.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              gravida ultricies ipsum, eget aliquet lacus. Aenean faucibus non
              dui in dapibus.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
