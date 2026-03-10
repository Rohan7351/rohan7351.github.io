// // src/components/Certifications.js
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import {  FaBrain, FaLaptopCode } from 'react-icons/fa';
import { SiGooglecloud } from 'react-icons/si';
import { certifications } from '../data/certifications';

const Certifications = () => {
  const [isFlipped, setIsFlipped] = useState({
    awsDev: false,
    awsCloud: false,
    github: false,
  });

  const handleFlip = (key) => {
    setIsFlipped((prevState) => ({ ...prevState, [key]: !prevState[key] }));
  };

  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-24 bg-foreground/[0.02]">
      <div className="container text-center">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Certifications</h2>
          <p className="mt-2 text-muted-foreground">Recognized achievements in the field of technology.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {/* AWS Developer Certification */}
          {/* Item 1 */}
          <ReactCardFlip isFlipped={isFlipped.awsDev} flipDirection="horizontal">
            {/* Front Side */}
            <div className="rounded-md border border-border bg-card p-6 shadow-sm cursor-pointer" onClick={() => handleFlip('awsDev')}>
              <FaLaptopCode size={40} className="mx-auto mb-3 text-blue-500" />
              <h3 className="text-lg font-semibold">Website Development Internship</h3>
              <p className="text-sm text-muted-foreground">Issued By: Intership Studio</p>
              <p className="text-sm text-muted-foreground">08-July-2021</p>
              <a href="https://drive.google.com/file/d/1CmsaIfr97nWTYpX8wx_kyPsnpAqZoKuH/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-primary font-medium">View Certificate</a>
            </div>

            {/* Back Side */}
            <div className="rounded-md border border-border bg-[#FF9900] p-4 text-white cursor-pointer" onClick={() => handleFlip('awsDev')}>
              <img src={certifications[0].image} alt="AWS Certified Developer Certificate" className="w-full h-auto rounded-md" loading="lazy" />
            </div>
          </ReactCardFlip>

          {/* Google Cloud Certification */}
          {/* Item 2 */}
          <ReactCardFlip isFlipped={isFlipped.awsCloud} flipDirection="horizontal">
            {/* Front Side */}
            <div className="rounded-md border border-border bg-card p-6 shadow-sm cursor-pointer" onClick={() => handleFlip('awsCloud')}>
              <SiGooglecloud size={40} className="mx-auto mb-3 text-[#4285F4]" />
              <h3 className="text-lg font-semibold">Google Cloud for AWS Professionals</h3>
              <p className="text-sm text-muted-foreground">Issued By: Coursera</p>
              <p className="text-sm text-muted-foreground">02-Apr-2022</p>
              <a href="https://drive.google.com/file/d/15yMl5Yl6kIrBab2oA0xl9nBbziG40FW_/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-primary font-medium">View Certificate</a>
            </div>

            {/* Back Side */}
            <div className="rounded-md border border-border bg-[#FF9900] p-4 text-white cursor-pointer" onClick={() => handleFlip('awsCloud')}>
              <img src={certifications[1].image} alt="AWS Certified Cloud Practitioner Certificate" className="w-full h-auto rounded-md" loading="lazy" />
            </div>
          </ReactCardFlip>

          {/* AI Hackathon Certification */}
          {/* Item 3 */}
          <ReactCardFlip isFlipped={isFlipped.github} flipDirection="horizontal">
            {/* Front Side */}
            <div className="rounded-md border border-border bg-card p-6 shadow-sm cursor-pointer" onClick={() => handleFlip('github')}>
              <FaBrain size={40} className="mx-auto mb-3 text-purple-500" />
              <h3 className="text-lg font-semibold">AI Hackathon</h3>
              <p className="text-sm text-muted-foreground">Issued By: TCS</p>
              <p className="text-sm text-muted-foreground">24-Aug-2025</p>
              <a href="https://drive.google.com/file/d/1llqBtzldMSfPzCwEkt4YNjaZR-zyzv8k/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-primary font-medium">View Certificate</a>
            </div>

            {/* Back Side */}
            <div className="rounded-md border border-border bg-foreground p-4 text-white cursor-pointer" onClick={() => handleFlip('github')}>
              <img src={certifications[2].image} alt="GitHub Foundations Certificate" className="w-full h-auto rounded-md" loading="lazy" />
            </div>
          </ReactCardFlip>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
