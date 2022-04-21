import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Clickeado {count} veces
      </button>

      <button onClick={() => setCount(0)}> resetear </button>
    </div>
  );
}
