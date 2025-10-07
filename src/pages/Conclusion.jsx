import React from 'react';

const comparisonData = [
  { mode: "ECB", parallelEncrypt: "✅", parallelDecrypt: "✅", errorProp: "None", padding: "✅", stream: "❌" },
  { mode: "CBC", parallelEncrypt: "❌", parallelDecrypt: "✅", errorProp: "2 blocks", padding: "✅", stream: "❌" },
  { mode: "CFB", parallelEncrypt: "❌", parallelDecrypt: "✅", errorProp: "2 blocks", padding: "❌", stream: "✅" },
  { mode: "OFB", parallelEncrypt: "✅", parallelDecrypt: "✅", errorProp: "1 block", padding: "❌", stream: "✅" },
  { mode: "CTR", parallelEncrypt: "✅", parallelDecrypt: "✅", errorProp: "1 block", padding: "❌", stream: "✅" },
];

function Conclusion() {
  return (
    <div>
      <h1 className="main-header" style={{color: '#117A65'}}>Conclusion</h1>
      <p>This project successfully demonstrated the implementation and practical application of <strong>OFB (Output Feedback) mode</strong>, a fundamental block cipher mode of operation that transforms block ciphers into secure stream ciphers.</p>
      <hr />

      <h2 className="section-header">🎯 Key Achievements</h2>
      <div className="two-column-layout">
        <div className="section">
          <h4>Technical Implementation</h4>
          <ul>
            <li>✅ Complete OFB encryption/decryption algorithm.</li>
            <li>✅ AES-256 integration with secure key generation.</li>
            <li>✅ Interactive web-based simulation.</li>
          </ul>
        </div>
        <div className="section">
          <h4>Educational Outcomes</h4>
          <ul>
            <li>✅ Understanding of block vs. stream ciphers.</li>
            <li>✅ Importance of Initialization Vectors (IV).</li>
            <li>✅ Insights into error propagation.</li>
          </ul>
        </div>
      </div>

      <h2 className="section-header">⚖️ OFB vs Other Block Cipher Modes</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Mode</th>
            <th>Parallel Encryption</th>
            <th>Parallel Decryption</th>
            <th>Error Propagation</th>
            <th>Padding Required</th>
            <th>Stream Behavior</th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map(row => (
            <tr key={row.mode}>
              <td><strong>{row.mode}</strong></td>
              <td>{row.parallelEncrypt}</td>
              <td>{row.parallelDecrypt}</td>
              <td>{row.errorProp}</td>
              <td>{row.padding}</td>
              <td>{row.stream}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="section-header">🚀 Future Enhancements</h2>
      <div className="section">
        <ul>
          <li><strong>Authenticated Encryption:</strong> Integrate HMAC or use an AEAD mode like GCM for production-level security.</li>
          <li><strong>Performance Optimizations:</strong> Utilize Web Workers for parallel processing of large files without freezing the UI.</li>
          <li><strong>Key Derivation:</strong> Implement PBKDF2 or Argon2 to derive keys from user passwords.</li>
        </ul>
      </div>
    </div>
  );
}

export default Conclusion;