import { DevToolsProps } from "../../types";

export default function DevTools({
  showDevTools,
  result,
  devToolsRef,
}: DevToolsProps) {
  return (
    <div
      ref={devToolsRef}
      className="flex flex-col justify-center items-center"
    >
      {showDevTools && result.res && (
        <div className="w-[98%] h-full flex flex-col gap-8 items-center justify-center m-3 p-10 rounded-lg bg-[#1c1c1c85]">
          <h1 className="p-2 text-3xl sm:text-5xl">API canister response:</h1>
          <div className="w-full sm:w-[50%] h-full flex flex-col justify-center items-center">
            {Object.entries(result.res).map(([key, value]) => (
              <div key={key} className="flex items-start justify-start w-full ">
                <p className="font-extrabold text-base text-[rgb(178,73,248)] whitespace-nowrap">
                  {key}:
                </p>
                <p className="pl-2">{value}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
