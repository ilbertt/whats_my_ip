import { APIResponse } from "./../types/index";
import { ENV_VARIABLES } from "../constants";

export const getCanisterUrl = (): URL => {
  const url =
    ENV_VARIABLES.NODE_ENV === "production"
      ? new URL(`https://${ENV_VARIABLES.API_CANISTER_ID}.raw.ic0.app`)
      : new URL(
          `http://127.0.0.1:4943?canisterId=${ENV_VARIABLES.API_CANISTER_ID}`
        );
  return url;
};

export const fetchIP = async () => {
  try {
    const startTime = performance.now();

    const response = await fetch(getCanisterUrl());

    if (!response.ok) {
      console.error(
        "Error fetching IP",
        response.status,
        await response.text()
      );
      return;
    }

    const endTime = performance.now();
    const resContent = (await response.json()) as APIResponse;
    const duration = endTime - startTime;
    console.log("API canister response:", resContent);

    if (resContent) {
      return { resContent, duration };
    } else return;
  } catch (e) {
    console.error("Error fetching IP", e);
  }
};
