import React from 'react';

const pythonEncryptCode = `
def ofb_encrypt(plaintext, key, iv, block_size=16):
    cipher = AES.new(key, AES.MODE_ECB)
    ciphertext = b''
    feedback = iv
    for i in range(0, len(plaintext), block_size):
        feedback = cipher.encrypt(feedback)
        plaintext_block = plaintext[i:i+block_size]
        ciphertext_block = bytes(a ^ b for a, b in zip(plaintext_block, feedback[:len(plaintext_block)]))
        ciphertext += ciphertext_block
    return ciphertext
`;

const pythonDecryptCode = `
def ofb_decrypt(ciphertext, key, iv, block_size=16):
    cipher = AES.new(key, AES.MODE_ECB)
    plaintext = b''
    feedback = iv
    for i in range(0, len(ciphertext), block_size):
        feedback = cipher.encrypt(feedback)
        ciphertext_block = ciphertext[i:i+block_size]
        plaintext_block = bytes(a ^ b for a, b in zip(ciphertext_block, feedback[:len(ciphertext_block)]))
        plaintext += plaintext_block
    return plaintext
`;

function Theory() {
  return (
    <div>
      <h1 className="main-header">OFB Mode Theory</h1>
      <div className="section">
        <h3>Block Ciphers vs Stream Ciphers</h3>
        <p><strong>Block Ciphers</strong> (like AES) encrypt fixed-size blocks of data (typically 128 bits). <strong>Stream Ciphers</strong> encrypt data bit-by-bit or byte-by-byte.</p>
        <p>OFB mode converts a block cipher into a stream cipher, allowing encryption of arbitrary-length data.</p>
      </div>

      <hr />

      <h2 className="section-header">🔐 OFB Encryption Process</h2>
      <p>OFB mode uses the block cipher in <strong>encryption mode only</strong> for both encryption and decryption. The plaintext is XORed with the output of the encrypted feedback register (block cipher output).</p>
      <h3>Mathematical Representation:</h3>
      <p>For encryption and decryption:</p>
      <ul>
        <li>{'$I₁ = IV$ (Initialization Vector)'}</li>
        <li>{'$O₁ = E(K, I₁)$ (Encrypt the IV with key K)'}</li>
        <li>{'$C₁ = P₁ \oplus O₁$ (XOR plaintext with encrypted output)'}</li>
        <li>{'$I₂ = O₁$ (Feedback: use previous output as next input)'}</li>
      </ul>

      {/* CORRECTED LINE BELOW */}
      <p>{'For subsequent blocks ($i > 1$):'}</p>
      
      <ul>
        <li>{'$Iᵢ = Oᵢ₋₁$ (Previous output becomes next input)'}</li>
        <li>{'$Oᵢ = E(K, Iᵢ)$ (Encrypt the input)'}</li>
        <li>{'$Cᵢ = Pᵢ \oplus Oᵢ$ (XOR plaintext with encrypted output)'}</li>
      </ul>

      <hr />

      <h2 className="section-header">🔹 Core OFB Functions</h2>
      <pre><code>{pythonEncryptCode.trim()}</code></pre>
      <pre><code>{pythonDecryptCode.trim()}</code></pre>

      <hr />

      <h2 className="section-header">📊 Security Considerations</h2>
      <ol>
        <li><strong>IV Uniqueness:</strong> Each encryption must use a unique IV to prevent identical plaintext blocks from producing identical ciphertext.</li>
        <li><strong>Error Propagation:</strong> A single bit error in ciphertext only affects the corresponding block of plaintext.</li>
        <li><strong>Bit-flipping Attacks:</strong> Attackers can flip specific bits in the ciphertext to cause predictable changes in the plaintext.</li>
      </ol>
    </div>
  );
}

export default Theory;