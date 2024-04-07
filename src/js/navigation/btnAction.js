import { redirect } from "./redirect.js";

export function btnAction() {
  const btnProfile = document.querySelector("#btn-profile");
  const btnLogout = document.querySelector("#btn-logout");
  const btnFeed = document.querySelector("#btn-feed");

  btnProfile.addEventListener("click", function () {
    redirect("/profile/");
  });
  btnLogout.addEventListener("click", function () {
    redirect("/");
  });
  btnFeed.addEventListener("click", function () {
    redirect("/feed/");
  });
}
