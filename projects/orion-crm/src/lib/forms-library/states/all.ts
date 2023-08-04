import { AuthState } from "./auth/auth.state";
import { PaperworkState } from "./paperwork/paperwork.state";

export function getStates() {
  return [
    AuthState,
    PaperworkState
  ]
}
