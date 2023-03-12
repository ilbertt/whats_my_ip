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
  const [loading, setLoading] = useState(true);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [copyCompleted, setCopyCompleted] = useState(false);

  const devToolsRef = useRef<HTMLDivElement>(null);
  const ipRef = useRef<HTMLHeadingElement>(null);

  const getIP = async () => {
    const startTime = Date.now();
    setElapsedTime(0);

    const intervalId = setInterval(() => {
      setElapsedTime(Date.now() - startTime);
    }, 1);

    const response = await fetchIP();

    setLoading(false);
    clearInterval(intervalId);
    setElapsedTime(Date.now() - startTime);

    if (response?.resContent["x-forwarded-for"]) {
      setResult({
        res: response.resContent,
        ip: response.resContent["x-forwarded-for"],
        latency: response.duration,
      });
    } else if (response?.resContent)
      setResult({
        res: response.resContent,
        ip: null,
        latency: null,
      });
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

  const handleCopyToClipboard = () => {
    if (ipRef.current) {
      navigator.clipboard.writeText(ipRef.current.innerText);
      setCopyCompleted(true);
      setTimeout(() => {
        setCopyCompleted(false);
      }, 800);
    }
  };

  return {
    result,
    devToolsRef,
    showDevTools,
    handleDevTools,
    handleCopyToClipboard,
    ipRef,
    loading,
    elapsedTime,
    copyCompleted,
  };
}
