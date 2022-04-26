window.addEventListener("load", () => {
  let dialogs = document.getElementsByTagName("dialog");
  let inputs = document.getElementsByTagName("input");

  for (let i = 0; i < dialogs.length; i++) {
    let dialog = dialogs[i];
    let children = dialog.children;

    let flex = document.createElement("div");
    flex.classList.add("flex");

    let top = document.createElement("div");
    top.classList.add("top");

    let padder = document.createElement("div");

    let header = document.createElement("h3");
    header.innerText = dialog.dataset.title;
    padder.appendChild(header);

    let paragraph = document.createElement("p");
    paragraph.innerText = dialog.dataset.description;
    paragraph.classList.add("description");
    padder.appendChild(paragraph);

    top.appendChild(padder);

    let bottom = document.createElement("div");
    bottom.classList.add("bottom");

    while (children.length > 0) {
      bottom.appendChild(children[0]);
    }

    flex.appendChild(top);
    flex.appendChild(bottom);

    dialog.appendChild(flex);
  }

  for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    switch (input.type) {
      case "checkbox":
        input.outerHTML += ` <label>${input.dataset.label}</label>`;
    }
  }
});
