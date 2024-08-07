import { pinnedRepos } from "../pinnedRepos.js";
import { repos } from "../reposArray.js";

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};
