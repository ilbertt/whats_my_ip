import ConfettiExplosion, { ConfettiProps } from "react-confetti-explosion";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";

defineElement(lottie.loadAnimation);

import { DfinityBadge } from "./assets/svg/DfinityBadge";
import DevTools from "./components/DevTools";
import useHandler from "./hooks/useHandler";
import Ui from "./components/Ui";
import { GithubBadge } from "./assets/svg/GithubBadge";
import DevIcon from "./components/DevIcon";

const largeProps: ConfettiProps = {
  force: 0.8,
  duration: 3000,
  particleCount: 80,
  width: 1600,
};

export default function App() {
  const {
    result,
    showDevTools,
    devToolsRef,
    handleDevTools,
    handleCopyToClipboard,
    ipRef,
    loading,
    elapsedTime,
    copyCompleted,
  } = useHandler();

  return (
    <>
      <div className="w-full h-full ">
        <div className="flex items-center flex-col justify-center w-full h-full ">
          <Ui
            result={result}
            ipRef={ipRef}
            handleCopyToClipboard={handleCopyToClipboard}
            loading={loading}
            elapsedTime={elapsedTime}
            copyCompleted={copyCompleted}
          />
          <DfinityBadge />
          <DevIcon handleDevTools={handleDevTools} />
          <GithubBadge />
          {result.ip && result.ip !== "No IP Found" && (
            <ConfettiExplosion
              colors={["#fff", "#00b7ff"]}
              style={{ position: "absolute", zIndex: "20" }}
              particleSize={8}
              {...largeProps}
            />
          )}
        </div>
        <DevTools
          showDevTools={showDevTools}
          result={result}
          devToolsRef={devToolsRef}
        />
      </div>
    </>
  );
}
