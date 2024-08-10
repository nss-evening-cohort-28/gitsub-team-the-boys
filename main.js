import { pinnedRepos } from "../pinnedRepos.js";
import { repos } from "../reposArray.js";
import { projects } from "../projects.js";

if (("#repoCards") === true) {
  reposOnDom(repos); 
} else if (("#pinnedRepos") === true) {
    pinsOnDom(pinnedRepos); 
} else if (("#projectDisplay") === true) {
    projectsOnDom(projects); 
} else if (("#Tony'sDiv") === true) {
    TonysOnDom(taco); 
}

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const renderProjectsToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const projectsOnDom = (array) => {
  let domString = "";
  for (const project of array) {
    domString += 
   `<div class="card" style="width: 40rem;">
      <ul class="list-group list-group-flush">
        <div class = "projectsRow">
          <li class="list-group-item">${project.title}</li>
          <li class="list-group-item">${project.description}</li>
        </div>
      </ul>
    </div>`;
  }
  renderProjectsToDom("#projectDisplay", domString);
};

projectsOnDom(projects);



























































// const repos = [
//   {
//     id: 1,
//     name: "Buddy Guy",
//     description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cras phasellus tempus gravida sed condimentum posuere tempor phasellus arcu."
//   },
//   {
//     id: 2,
//     name: "Jason Bonham",
//     description: "Lorem ipsum dolor sit amet. A voluptatum quos est impedit cumque et similique vero. Et eius delectus eum consequuntur exercitationem eum exercitationem temporibus."
//   },
//   {
//     id: 3,
//     name: "Steven Tyler",
//     description: "At iure nesciunt ut doloremque nihil qui perferendis veniam rem porro molestiae ab sunt minus aut quisquam inventore. Est explicabo dolore ut molestiae rerum qui quidem autem est modi dolor ut sunt error qui quia explicabo."
//   }
// ]

// Creating array to put sample repo data onto DOM

const reposOnDom = (array) => {
  let domString = "";
  for (const repo of array) {
    domString += 
  `<div class="card" style="width: 18rem;">
    <h3 class="repo-name">${repo.name}</h3>
    <h3 class="repo-description">${repo.description}</h3>
    <button class="btn btn-danger" id="delete--${repo.id}">Delete</button>
  </div>`;
  }

  renderToDom("#repoCards", domString);
};


// Creating createRepo student function to add new repo cards

const form = document.querySelector("form");

const createRepo = (e) => {
  e.preventDefault;
  const newRepoObj = {
    id: repos.length +1,
    name: document.querySelector("#exampleFormControlInput1").value,
    description: document.querySelector("#exampleFormControlInput1").value
  };
  repos.push(newRepoObj);
  reposOnDom(repos);
  form.reset();
}
form.addEventListener("submit", createRepo);

// Creating function to delete repo card

const repoCards = document.querySelector("#repoCards");
repoCards.addEventListener("click", (e) => {
  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");
    const index = repos.findIndex((e) => e.id === Number(id));
    repos.splice(index, 1);
    reposOnDom(repos);
  }
})

const reposSubmit = document.querySelector("#reposSubmitBtn");

reposSubmit.addEventListener("click", () => {
  reposOnDom(repos);
});

reposOnDom(repos);





























// Line 201: Josh

const pinsOnDom = (pinnedRepos) => {
  let domString = "Pinned";
  for (const pin of pinnedRepos) {
    domString +=
    
    `<div class="card" style="width: 18rem;">
      
      <div class="card-body">
        <h5 class="card-title">${pin.name}</h5>
        <p class="card-text">${pin.description}</p>
        <p class="card-text">${pin.language}</p>
        <div class="card-footer text-body-secondary"> Stars: ${pin.stars} Forks: ${pin.forks} </div>
        <button type="button" class="btn btn-outline-danger" id="delete--${pin.id}">Unpin</button>
      </div>
    </div>`;
  }

  renderToDom("#pinnedRepos", domString);
};



const newForm = document.querySelector("form");

const createRepos = (e) => {
  e.preventDefault();

  // Creates a new item for the array based on what the user entered into the form.
  const newRepoObj = {
    id: pinnedRepos.length + 1,
    name: document.querySelector("#newProjectInput").value,
    description: document.querySelector("#newProjectDescription").value,
    language: "JavaScript",
    stars: 0,
    forks: 0,
  }

  pinnedRepos.push(newRepoObj);
  pinsOnDom(pinnedRepos);
  newForm.reset();
}
newForm.addEventListener("submit", createRepos);

// This should render the cards as soon as the overview page is loaded. Possibly will cause conflicts with the other pages.
// const autoRender = () => {
//   pinsOnDom(pinnedRepos);
// }
// autoRender();

const pinnedListener = document.querySelector("#pinnedRepos"); //Looks at the repo cards
pinnedListener.addEventListener("click", (e) => {
  if (e.target.id.includes("delete")) { // Looks for the delete button on a particular card.
    const [, id] = e.target.id.split("--");
    const index = pinnedRepos.findIndex((e) => e.id === Number(id));
    pinnedRepos.splice(index, 1);
    pinsOnDom(pinnedRepos); // Renders everything again, this time with the new array object.
  }
});
