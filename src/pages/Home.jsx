import React from 'react';

function Home() {
  return (
    <>
      <div className="main-header">Block Cipher Mode: OFB (Output Feedback)</div>

      <div className="section">
        <p>Welcome to the <b>OFB (Output Feedback) Mode</b> implementation project.</p>
        <p>This project demonstrates the implementation and working of OFB mode, one of the important block cipher modes of operation used in modern cryptography.</p>
        <p>Use the left sidebar to navigate through the sections:</p>
        <ul>
          <li><b>Introduction</b> - Overview of OFB mode and its significance</li>
          <li><b>Objective</b> - Goals and learning outcomes</li>
          <li><b>Theory</b> - Mathematical foundation and working principle</li>
          <li><b>Simulation</b> - Interactive OFB encryption/decryption tool</li>
          <li><b>Procedure</b> - Step-by-step implementation process</li>
          <li><b>Conclusion</b> - Summary and practical applications</li>
        </ul>
      </div>

      <div className="info-box">
        <span>🔐</span>
        <span>OFB mode converts block ciphers into stream ciphers, enabling encryption of data streams of any length.</span>
      </div>

      <div className="success-box">
        <span>Navigate using the sidebar →</span>
      </div>
    </>
  );
}

export default Home;