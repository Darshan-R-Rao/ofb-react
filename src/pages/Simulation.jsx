import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

// --- More Robust OFB Implementation using crypto-js ---
const performOfb = (data, key, iv) => {
  // OFB uses the same process for encryption and decryption
  let feedback = iv.clone();
  const dataBytes = data.words;
  const keyStream = [];
  
  // 1. Generate the keystream
  const numBlocks = Math.ceil(data.sigBytes / 16);
  for (let i = 0; i < numBlocks; i++) {
    const encryptedFeedback = CryptoJS.AES.encrypt(feedback, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.NoPadding,
    }).ciphertext;
    
    // Add the 16 bytes (4 words) of the encrypted feedback to our keystream
    for(let j=0; j < 4; j++){
        keyStream.push(encryptedFeedback.words[j] || 0);
    }
    feedback = encryptedFeedback;
  }
  
  // 2. XOR the data with the keystream
  const resultWords = [];
  for (let i = 0; i < dataBytes.length; i++) {
    resultWords[i] = dataBytes[i] ^ keyStream[i];
  }
  
  return CryptoJS.lib.WordArray.create(resultWords, data.sigBytes);
};


function Simulation() {
  const [key, setKey] = useState(() => CryptoJS.lib.WordArray.random(32)); // 256-bit
  const [iv, setIv] = useState(() => CryptoJS.lib.WordArray.random(16));   // 128-bit
  const [activeTab, setActiveTab] = useState('text-encrypt');

  const [plaintext, setPlaintext] = useState('');
  const [ciphertext, setCiphertext] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const [lastPlaintext, setLastPlaintext] = useState('');
  const [error, setError] = useState('');

  const handleEncryptText = () => {
    if (!plaintext) return;
    setError('');
    setDecryptedText('');
    try {
      const plaintextWords = CryptoJS.enc.Utf8.parse(plaintext);
      const encrypted = performOfb(plaintextWords, key, iv);
      setCiphertext(encrypted.toString(CryptoJS.enc.Base64));
      setLastPlaintext(plaintext);
    } catch (e) {
      setError('Encryption failed: ' + e.message);
    }
  };

  const handleDecryptText = () => {
    if (!ciphertext) return;
    setError('');
    setDecryptedText('');
    try {
      const ciphertextWords = CryptoJS.enc.Base64.parse(ciphertext);
      const decrypted = performOfb(ciphertextWords, key, iv);
      setDecryptedText(decrypted.toString(CryptoJS.enc.Utf8));
    } catch (e) {
      setError('Decryption failed. Check if the ciphertext is valid Base64 and if the Key/IV are correct.');
      console.error(e);
    }
  };

  return (
    <div className="simulation-container">
      <h1 className="main-header">🔐 OFB Mode Simulation</h1>
      
      <div className="section">
        <h3>Cryptographic Parameters</h3>
        <div className="controls">
          <button onClick={() => setKey(CryptoJS.lib.WordArray.random(32))}>🔑 Generate New Key</button>
          <button onClick={() => setIv(CryptoJS.lib.WordArray.random(16))}>🎲 Generate New IV</button>
        </div>
        <div className="crypto-params">
          <div>
            <strong>AES Key (Base64):</strong>
            <code>{key.toString(CryptoJS.enc.Base64)}</code>
          </div>
          <div>
            <strong>IV (Base64):</strong>
            <code>{iv.toString(CryptoJS.enc.Base64)}</code>
          </div>
        </div>
      </div>
      
      <div className="tab-buttons">
        <button className={activeTab === 'text-encrypt' ? 'active' : ''} onClick={() => setActiveTab('text-encrypt')}>🔒 Text Encryption</button>
        <button className={activeTab === 'text-decrypt' ? 'active' : ''} onClick={() => setActiveTab('text-decrypt')}>🔓 Text Decryption</button>
      </div>

      {error && <div className="info-box" style={{borderColor: '#dc3545'}}>{error}</div>}

      {activeTab === 'text-encrypt' && (
        <div className="section">
          <h3>Encrypt Text</h3>
          <textarea
            rows="5"
            placeholder="Type your secret message here..."
            value={plaintext}
            onChange={(e) => setPlaintext(e.target.value)}
          />
          <br/><br/>
          <button onClick={handleEncryptText} disabled={!plaintext}>Encrypt</button>
          {ciphertext && (
            <>
              <h4>Ciphertext (Base64):</h4>
              <pre><code>{ciphertext}</code></pre>
            </>
          )}
        </div>
      )}

      {activeTab === 'text-decrypt' && (
        <div className="section">
          <h3>Decrypt Text</h3>
          <textarea
            rows="5"
            placeholder="Paste Base64 ciphertext here..."
            value={ciphertext}
            onChange={(e) => setCiphertext(e.target.value)}
          />
          <br/><br/>
          <button onClick={handleDecryptText} disabled={!ciphertext}>Decrypt</button>
          {decryptedText && (
            <>
              <h4>Decrypted Plaintext:</h4>
              <pre><code>{decryptedText}</code></pre>
              {lastPlaintext && (
                decryptedText === lastPlaintext 
                ? <div className="success-box">🎯 Round-trip verification: SUCCESS!</div>
                : <div className="info-box" style={{borderColor: '#dc3545'}}>❌ Round-trip verification: FAILED! Decrypted text does not match the original.</div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Simulation;