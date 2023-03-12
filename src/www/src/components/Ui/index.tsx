import { UIProps } from "../../types";
import IpContainer from "../IpContainer";

export default function Ui({
  result,
  ipRef,
  loading,
  elapsedTime,
  handleCopyToClipboard,
  copyCompleted,
}: UIProps) {
  return (
    <div className="flex relative z-0 flex-col items-center justify-center h-full w-full gap-10">
      <div className="gap-[20px] sm:gap-3 absolute w-full top-[10%] flex flex-col items-center justify-center">
        <h3 className="text-3xl sm:text-4xl text-center bg-[linear-gradient(rgb(255,28,247)_25%,rgb(178,73,248)_100%)] bg-clip-text opacity-100 text-fill-color font-bold leading-10 sm:leading-[50px]">
          YOUR <br /> PUBLIC IPv4
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-12 h-12 stroke-[rgb(255,28,247)] mt-6 rounded-full bg-[rgba(255,255,255,0.07)] backdrop-blur-[20px] backdrop-saturate-[180%] p-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <IpContainer
        result={result}
        ipRef={ipRef}
        handleCopyToClipboard={handleCopyToClipboard}
        loading={loading}
        copyCompleted={copyCompleted}
      />
      {(loading || (!loading && result.ip)) && <div className="flex flex-col items-center justify-center absolute left-1/2 -translate-x-2/4 bottom-[30%] sm:bottom-[25%]">
        <h3 className="text-1xl sm:text-2xl font-[300]">{loading ? 'Obtaining...' : 'Obtained in just'}</h3>
        <h4 className={`text-2xl sm:text-3xl font-bold
          ${loading
            ? 'bg-[linear-gradient(180deg,rgb(168,168,168),rgb(50,50,50)_100%)]'
            : 'bg-[linear-gradient(rgb(0,133,255)_25%,rgb(0,215,255)_100%)]'
          } bg-clip-text opacity-100 text-fill-color`
        }>
          {elapsedTime}ms
        </h4>
      </div>}
    </div>
  );
}
