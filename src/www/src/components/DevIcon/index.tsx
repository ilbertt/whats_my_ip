import { DevIconProps } from "../../types";

export default function DevIcon({ handleDevTools }: DevIconProps) {
  return (
    <div
      onClick={handleDevTools}
      className="absolute w-[35%] h-[10%] sm:w-[20%] sm:h-[15%] flex flex-col justify-center items-center bottom-[3%] right-0 cursor-pointer"
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
  );
}
