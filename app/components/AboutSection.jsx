"use client";
import React, { useState, useTransition } from 'react'
import Image from "next/image";
import TabButton from './TabButton';

const TAB_DATA =[
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>React</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>C#</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Towson University, Towson MD</li>
                <li>Bs. Information Technology</li>
            </ul>
            )
    },
    {
        title: "Certifications",
        id: "certifications", 
        content: (
            <ul className="list-disc pl-2">
                <li>Towson University, Towson MD</li>
                <li>Bs. Information Technology</li>
            </ul>
            )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
    });
    }

  return(
    <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/about-image.png" width={500} height={500} />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base lg:text-lg">
                I am a proficient Web Developer with a focus on JavaScript, ReactJS, Tailwind CSS, and Angular. 
                My career is marked by a dedication to creating responsive and user-friendly websites and applications. 
                I blend technical skill with a keen eye for design, ensuring each project is not only functional but 
                also visually appealing. With a solid grasp of both front-end and back-end technologies, 
                I excel in developing efficient, scalable solutions tailored to the needs of the modern web. 
                Driven by a passion for continuous learning and staying abreast of the latest industry trends, 
                I am committed to delivering top-notch results, whether working solo or collaboratively within a team.
                </p>
                <div className="flex flex-row justify-start mt-8">
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}> {" "} Skills{" "} </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}> {" "} Education{" "} </TabButton>
                    <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}> {" "} Certifications{" "} </TabButton>
                </div>
                <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  );
};

export default AboutSection