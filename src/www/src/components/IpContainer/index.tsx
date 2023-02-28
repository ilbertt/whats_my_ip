import { GenericProps } from "../../types";

export default function IpContainer({ result }: GenericProps) {
  return (
    <>
      <div
        className={`${
          !result.ip && "hidden"
        } bg-[#39393942] absolute left-1/2 -translate-x-2/4 translate-y-[0%] w-[71%] z-0 h-[12.5%] md:h-[21%] flex sm:w-[60.6%] overflow-hidden justify-center items-center font-bold my-2xl backdrop-blur-[20px] backdrop-saturate-[180%] rounded-xl tracking-wide custom-clip-path 
    before:content-[''] before:absolute before:w-[105%] before:bg-[linear-gradient(180deg,rgb(0,183,255),rgb(255,48,255))] before:h-[75%] before:animate-[rotBGimg_3s_linear_infinite] before:transition-all before:duration-[0.2s] before:ease-linear`}
      />
      <div
        className={`${
          result.ip && "bg-transparent"
        } w-[70%] absolute left-1/2 -translate-x-2/4 translate-y-[0%] rounded-lg  sm:w-3/5 h-[12%] md:h-[20%] z-10 overflow-hidden flex justify-center items-center font-bold my-2xl bg-[#1c1c1c85] backdrop-blur-[20px] backdrop-saturate-[180%] tracking-wide`}
      >
        <h1
          className={`${
            result.ip
              ? "text-4xl sm:text-5xl md:text-6xl lg:text-8xl"
              : "text-4xl"
          }`}
        >
          {result.ip ? result.ip : "No IP found"}
        </h1>
      </div>
    </>
  );
}
