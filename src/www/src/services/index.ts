import { ENV_VARIABLES } from "../constants";

export const getCanisterUrl = (): URL => {
  const url = ENV_VARIABLES.NODE_ENV === "production" ?
    new URL(`https://${ENV_VARIABLES.API_CANISTER_ID}.raw.ic0.app`) :
    new URL(`http://127.0.0.1:4943?canisterId=${ENV_VARIABLES.API_CANISTER_ID}`);
  return url;
}