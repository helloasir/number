// app/number-to-words/page.tsx

'use client';

import React, { useState } from 'react';
import { numberToWords } from './utils/numberToWords';
import './styles.css';

export default function NumberToWordsPage() {
  const [number, setNumber] = useState<number>(0);
  const [words, setWords] = useState<string>("");

  const handleConvert = (): void => {
    setWords(numberToWords(number));
  };

  return (
    <div style={{ padding: '50px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Number to Words Converter</h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value, 10) || 0)}
        placeholder="Enter a number"
        style={{ width: '50%', padding: '10px', marginBottom: '10px' }}
      />
      <div>
      <button onClick={handleConvert} style={{ padding: '10px ', cursor: 'pointer' }}> Convert</button>
      </div>
      <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
        {words && <p> Words: {words}</p>}
      </div>
    </div>
  );
}
