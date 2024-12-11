// app/number-to-words/page.tsx

'use client';

import React, { useState } from 'react';
import { numberToWords } from './utils/numberToWords';

export default function NumberToWordsPage() {
  const [number, setNumber] = useState<number>(0);
  const [words, setWords] = useState<string>("");

  const handleConvert = (): void => {
    setWords(numberToWords(number));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Number to Words Converter</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value, 10) || 0)}
        placeholder="Enter a number"
      />
      <button onClick={handleConvert}>Convert</button>
      <p>{words}</p>
    </div>
  );
}
