import React from 'react';

function Objective() {
  return (
    <div>
      <h1 className="page-header">Aim and Objectives</h1>
      <div className="section">
        <p>The main objectives of this OFB (Output Feedback) mode implementation project are:</p>
        <h3>🎯 Primary Objectives:</h3>
        <ol>
          <li><strong>Understand OFB Mode Theory:</strong> Learn the mathematical foundation and working principle of OFB mode operation.</li>
          <li><strong>Implement OFB Encryption Algorithm:</strong> Build a complete OFB encryption system that can handle variable-length input data.</li>
          <li><strong>Implement OFB Decryption Algorithm:</strong> Develop the corresponding decryption process to recover original plaintext.</li>
          <li><strong>Demonstrate Stream Cipher Behavior:</strong> Show how OFB transforms a block cipher into a stream cipher.</li>
          <li><strong>Interactive Simulation:</strong> Create a user-friendly interface for encrypting/decrypting text and understanding the process.</li>
        </ol>

        <h3>🔍 Learning Outcomes:</h3>
        <ul>
          <li>Master the concept of <strong>block cipher modes of operation</strong></li>
          <li>Understand the difference between <strong>block ciphers</strong> and <strong>stream ciphers</strong></li>
          <li>Learn about <strong>initialization vectors (IV)</strong> and their importance</li>
          <li>Comprehend <strong>error propagation</strong> characteristics in OFB mode</li>
          <li>Gain practical experience in <strong>cryptographic algorithm implementation</strong></li>
          <li>Understand <strong>security considerations</strong> specific to OFB mode</li>
        </ul>

        <h3>💡 Practical Applications:</h3>
        <ul>
          <li>Real-time data encryption for network communications</li>
          <li>Secure transmission over error-prone channels</li>
          <li>Understanding modern cryptographic protocols</li>
          <li>Foundation for advanced cryptographic studies</li>
        </ul>
      </div>
    </div>
  );
}

export default Objective;