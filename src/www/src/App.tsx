import { useEffect, useState } from 'react';
import { APIResponse } from './types';
import { getCanisterUrl } from './services';

import './App.css';

function App() {
  const [result, setResult] = useState("");

  const fetchIP = async () => {
    try {
      const response = await fetch(getCanisterUrl());

      if (!response.ok) {
        console.error('Error fetching IP', response.status, await response.text());
        setResult('Error fetching IP. See console for details.');
        return;
      }

      const resContent = await response.json() as APIResponse;

      console.log('API canister response:', resContent);

      if (resContent["x-forwarded-for"]) {
        setResult(resContent["x-forwarded-for"]);
      } else {
        setResult('No IP found');
      }
    } catch (e) {
      console.error('Error fetching IP', e);
      setResult('Error fetching IP. See console for details.');
    }
  };

  useEffect(() => {
    fetchIP();
  }, []);

  return (
    <div className="App">
      <div className="flex flex-col items-center justify-center h-screen gap-10">
        <div className="text-2xl">Your IP is:</div>
        <div className="text-6xl font-bold my-2xl">{result}</div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={fetchIP}>Refetch</button>
      </div>
    </div>
  )
}

export default App
