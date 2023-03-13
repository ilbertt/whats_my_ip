import { CopyToClipboard } from "../../assets/svg/CtC";
import { IPContainer } from "../../types";

export default function IpContainer({
  result,
  ipRef,
  handleCopyToClipboard,
  loading,
  copyCompleted,
}: IPContainer) {
  return (
    <>
      <div
        className={`${!loading && !result.ip ? "hidden" : ""}
        bg-[#39393942] absolute left-1/2 -translate-x-2/4 translate-y-[0%] w-[91.5%] z-0 h-[12.5%] md:h-[21%] flex sm:w-[60.6%] overflow-hidden justify-center items-center font-bold my-2xl backdrop-blur-[20px] backdrop-saturate-[180%] rounded-xl tracking-wide custom-clip-path 
    before:content-[''] before:absolute before:w-[105%] 
    ${
      loading
        ? "before:bg-[linear-gradient(180deg,rgb(168,168,168),rgb(50,50,50))] before:animate-[rotBGimg_8s_linear_infinite]"
        : "before:bg-[linear-gradient(180deg,rgb(0,183,255),rgb(255,48,255))] before:animate-[rotBGimg_3s_linear_infinite]"
    }  
    before:h-[75%] before:transition-all before:duration-[0.2s] before:ease-linear`}
      />
      <div className="w-[90%] absolute left-1/2 -translate-x-2/4 translate-y-[0%] rounded-lg  sm:w-3/5 h-[12%] md:h-[20%] z-10 overflow-hidden flex justify-center items-center font-bold my-2xl bg-[#1c1c1c85] backdrop-blur-[20px] backdrop-saturate-[180%] tracking-wide">
        <h1
          ref={ipRef}
          className={`${
            result.ip
              ? "text-4xl sm:text-5xl md:text-6xl lg:text-8xl"
              : "text-4xl"
          }`}
        >
          {loading ? "" : result.ip ? result.ip : "No IP Found"}
        </h1>
        {result.ip && (
          <CopyToClipboard
            handleCopyToClipboard={handleCopyToClipboard}
            copyCompleted={copyCompleted}
          />
        )}
      </div>
    </>
  );
}
