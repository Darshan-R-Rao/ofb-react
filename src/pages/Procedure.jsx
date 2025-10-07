import React from 'react';

function Procedure() {
  return (
    <div>
      <h1 className="page-header">OFB Mode Implementation Procedure</h1>
      <p>This section outlines the step-by-step procedure for implementing OFB mode.</p>
      <hr/>

      <h2 className="section-header">🔧 Phase 1: Setup and Initialization</h2>
      <div className="section">
        <strong>Step 1.1: Generate Cryptographic Parameters</strong>
        <ul>
          <li>Generate a <strong>256-bit AES key</strong> (32 bytes).</li>
          <li>Generate a <strong>128-bit Initialization Vector (IV)</strong> (16 bytes) - must be unique.</li>
        </ul>
        <strong>Step 1.2: Initialize the System</strong>
        <ul>
          <li>Import required cryptographic libraries.</li>
          <li>Set up the AES cipher in ECB mode for single block operations.</li>
        </ul>
      </div>

      <h2 className="section-header">🔒 Phase 2: OFB Encryption Process</h2>
       <div className="section">
         <strong>For each segment of plaintext:</strong>
         <ol>
           <li>{'Encrypt feedback register: O = E(K, feedback_register)'}</li>
           <li>{'XOR with plaintext: C = P ⊕ O'}</li>
           <li>{'Update feedback register: The output O becomes the input for the next round.'}</li>
           <li>{'Append to result: Add ciphertext segment to the final output.'}</li>
         </ol>
       </div>
      
      <h2 className="section-header">🔓 Phase 3: OFB Decryption Process</h2>
      <div className="section">
        <p>The decryption process is identical to encryption.</p>
        <strong>For each segment of ciphertext:</strong>
         <ol>
           <li>{'Encrypt feedback register: O = E(K, feedback_register)'}</li>
           <li>{'XOR with ciphertext: P = C ⊕ O'}</li>
           <li>{'Update feedback register: The output O becomes the input for the next round.'}</li>
         </ol>
      </div>

      <h2 className="section-header">📋 Phase 4: Practical Usage Guidelines</h2>
      <div className="two-column-layout">
        <div className="success-box" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
          <h4>✅ Do:</h4>
          <ul>
            <li>Always use a unique IV for each encryption.</li>
            <li>Use cryptographically secure random generators.</li>
            <li>Transmit the IV with the ciphertext.</li>
            <li>Use authenticated encryption (like HMAC) in production.</li>
          </ul>
        </div>
        <div className="info-box" style={{borderColor: '#dc3545', flexDirection: 'column', alignItems: 'flex-start'}}>
          <h4>❌ Don't:</h4>
          <ul>
            <li>Reuse IVs with the same key.</li>
            <li>Use predictable IVs (like counters in some scenarios).</li>
            <li>Use OFB for authentication without a MAC.</li>
            <li>Use weak or short keys.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Procedure;