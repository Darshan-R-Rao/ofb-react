import React from 'react';

const FeatureCard = ({ icon, title, description }) => (
  <div className="feature-card">
    <div className="feature-icon">{icon}</div>
    <div className="feature-title">{title}</div>
    <div className="feature-desc">{description}</div>
  </div>
);

function Introduction() {
  return (
    <div>
      <h1 className="main-header">Introduction to OFB Mode</h1>
      <h2 className="section-header">⚙️ Key Characteristics</h2>

      <div className="two-column-layout">
        <div>
          <FeatureCard
            icon="🌊"
            title="Stream-like Operation"
            description="Processes data in segments, allowing flexible handling of data streams without waiting for a complete block to be filled."
          />
          <FeatureCard
            icon="🛡️"
            title="Limited Error Propagation"
            description="A bit error in the ciphertext only affects the corresponding plaintext bit. Errors do not propagate to subsequent blocks, making it suitable for noisy channels."
          />
        </div>
        <div>
          <FeatureCard
            icon="⚡"
            title="Pre-computation"
            description="The entire keystream can be generated in advance, before any plaintext is available. This can be a huge performance boost for real-time applications."
          />
          <FeatureCard
            icon="↔️"
            title="Symmetric Operation"
            description="Encryption and decryption are identical processes, both using the XOR operation. The same function can be used for both, simplifying implementation."
          />
        </div>
      </div>
    </div>
  );
}

export default Introduction;