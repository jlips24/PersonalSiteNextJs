"use client"

import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const ViewPDF: React.FC = () => {
  const [iframeHeight, setIframeHeight] = useState('100vh'); // Initial height
  const [showFallback, setShowFallback] = useState(false); // State to control the visibility of the fallback message

  useEffect(() => {
    const adjustIframeHeight = () => {
      const aspectRatio = 1.4142; // A4 aspect ratio
      const width = document.documentElement.clientWidth || window.innerWidth;
      const height = width / aspectRatio;
      setIframeHeight(`${height}px`);
    };

    adjustIframeHeight();
    window.addEventListener('resize', adjustIframeHeight);

    return () => window.removeEventListener('resize', adjustIframeHeight);
  }, []);

  // Function to show the fallback message
  const handleIframeError = () => {
    setShowFallback(true);
  };

  return (
    <>
      <Head>
        <title>View PDF</title>
      </Head>
      <div style={{ overflow: 'hidden' }}>
        <iframe
          src="/pdfs/JakeLipsonResume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=Fit"
          width="100%"
          height={iframeHeight}
          style={{ border: 'none' }}
          title="Resume PDF"
          onError={handleIframeError} // Attempt to handle loading errors
          className='pb-4'
        />
        <div className='container'>
          <p style={{ textAlign: 'center' }}>Click <a href="/pdfs/JakeLipsonResume.pdf" className='link-secondary'>here</a> to download a copy of the resume.</p>
        </div>
        {showFallback && ( // Conditionally render the fallback message
          <p style={{ textAlign: 'center' }}>
            This browser does not support PDFs. Please download the PDF to view it: <a href="/pdfs/JakeLipsonResume.pdf" className='link-secondary'>Download Resume</a>.
          </p>
        )}
      </div>
    </>
  );
};

export default ViewPDF;
