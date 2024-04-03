import { btnAction } from "./btnAction.js";

export function btnRedirect() {
  switch (location.pathname) {
    case "/profile/":
    case "/feed/":
      btnAction();
      break;
  }
}
