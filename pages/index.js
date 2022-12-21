import Head from 'next/head';   
import Image from 'next/image';
import { useState } from 'react';

import buildspaceLogo from '../assets/buildspace-logo.png';

const Home = () => {
  const [userInput, setUserInput] = useState('');
  
  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  };
  const [apiOutput, setApiOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  
  const callGenerateEndpoint = async () => {
    setIsGenerating(true);
    
    console.log("Calling OpenAI...")
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });
  
    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text)
  
    setApiOutput(`${output.text}`);
    setIsGenerating(false);
    
    
  }
      
  return (
    <div className="root">
      <Head>
        <title>Cover Letter Builder</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Revolutionize Your Job Search with AI-Powered Cover Letters</h1>   
          </div>
          <div className="header-subtitle">
            <h2>Unlock the Future of Job Searching</h2>
          </div>
        </div>
        <div className="prompt-container">
          //  
          <textarea
              className="prompt-box"
              placeholder="What Is The Job Title ? "
              value={userInput}
              onChange={onUserChangedText}
              />
        </div>
        <div className="prompt-buttons">
            <a
              className={isGenerating ? 'generate-button loading' : 'generate-button'}
              onClick={callGenerateEndpoint}
            >
              <div className="generate">
              {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
              </div>
            </a>
  </div>
              
              {apiOutput && ( 
                <div className="output">
                  <div className="output-header-container">
                    <div className="output-header">
                      <h3>Your Cover Letter</h3>
                    </div>
                  </div>
                  <div className="output-content">
                    <p>{apiOutput}</p>
                  </div>
                </div> 
                
              )}
               {apiOutput && (
              <a href={`data:text/plain;charset=utf-8,${encodeURIComponent(apiOutput)}`} download="cover-letter.txt">
                <button className= "download-button">Download</button>
              </a>
            )}       
      </div>
      <div className="badge-container grow">
        <a
          href="https://twitter.com/Nodegree_techie"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>Connect with me!</p>
          </div>
        </a>
      </div>
    </div>
    

  );
};

export default Home;
