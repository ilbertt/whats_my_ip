import { useEffect, useRef, useState } from "react";
import { fetchIP } from "../services";
import { Result } from "../types";

const RES_INITIAL_STATE = {
  res: null,
  ip: null,
  latency: null,
};

export default function useHandler() {
  const [result, setResult] = useState<Result>(RES_INITIAL_STATE);
  const [showDevTools, setShowDevTools] = useState(false);

  const devToolsRef = useRef<HTMLDivElement>(null);

  const getIP = async () => {
    const response = await fetchIP();
    if (response) {
      setResult({
        res: response.resContent,
        ip: response.resContent["x-forwarded-for"],
        latency: response.duration,
      });
    } else setResult(RES_INITIAL_STATE);
  };

  useEffect(() => {
    getIP();
  }, []);

  const handleDevTools = () => {
    setShowDevTools(!showDevTools);
    setTimeout(() => {
      if (devToolsRef.current) {
        devToolsRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  return { result, devToolsRef, showDevTools, handleDevTools };
}
