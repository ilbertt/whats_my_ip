import ConfettiExplosion, { ConfettiProps } from "react-confetti-explosion";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";

defineElement(lottie.loadAnimation);

import "./App.css";
import { DfinityBadge } from "./assets/svg/DfinityBadge";
import DevTools from "./components/DevTools";
import useHandler from "./hooks/useHandler";
import Ui from "./components/Ui";

const largeProps: ConfettiProps = {
  force: 0.8,
  duration: 3000,
  particleCount: 80,
  width: 1600,
};

export default function App() {
  const { result, showDevTools, devToolsRef, handleDevTools } = useHandler();

  return (
    <>
      <div className="w-full h-full ">
        <div className="flex items-center flex-col justify-center w-full h-full ">
          <Ui result={result} />
          <div className="absolute w-[35%] h-[10%] sm:w-[20%] flex flex-col justify-end items-left bottom-[3%] left-[3%] cursor-pointer">
            <a className="no-underline" href="https://internetcomputer.org/">
              <DfinityBadge />
            </a>
          </div>
          <div
            onClick={handleDevTools}
            className="absolute w-[35%] h-[10%] sm:w-[20%] sm:h-[15%] flex flex-col justify-center items-center bottom-[3%] right-[3%] cursor-pointer"
          >
            <lord-icon
              src="https://cdn.lordicon.com/kxrhwtdg.json"
              trigger="loop"
              size={2}
              delay={2800}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
            <p>Are you a dev?</p>
          </div>
          {result.ip && (
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
