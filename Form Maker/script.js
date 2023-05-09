const insert = () => {
    let type = document.querySelector("#type").value;
    let label = document.querySelector("#label").value;
    let placeholder = document.querySelector("#placeholder").value;
  
    switch (type) {
      case "text":
        appendText(label, placeholder);
        break;
      case "radio":
        appendRadio(label, placeholder);
        break;
      case "button":
        appendButton(label);
        break;
    }
  };
  
  const appendText = (label = "No label", placeholder = "No placeholder") => {
    let el = document.createElement("div");
    el.setAttribute("class", "input-group mb-3");
    
    let inputEl = document.createElement("input");
    inputEl.setAttribute("type", "text");
    inputEl.setAttribute("class", "form-control");
    inputEl.setAttribute("placeholder", placeholder);
    inputEl.setAttribute("aria-label", label);
    el.appendChild(inputEl);
  
    let buttonEl = document.createElement("button");
    buttonEl.setAttribute("type", "button");
    buttonEl.setAttribute("class", "btn btn-danger");
    buttonEl.innerText = "Delete";
    buttonEl.addEventListener("click", () => {
      el.remove();
    });
    let buttonSpanEl = document.createElement("span");
    buttonSpanEl.setAttribute("class", "input-group-append");
    buttonSpanEl.appendChild(buttonEl);
  
    el.appendChild(buttonSpanEl);
  
    document.querySelector("#elements").appendChild(el);
  };
  
  const appendRadio = (label = "No label", placeholder = "No placeholder") => {
    let el = document.createElement("div");
    el.setAttribute("class", "input-group mb-3");
  
    let inputEl = document.createElement("input");
    inputEl.setAttribute("type", "radio");
    inputEl.setAttribute("class", "form-check-input");
    inputEl.setAttribute("name", "radio-group");
    el.appendChild(inputEl);
  
    let labelEl = document.createElement("label");
    labelEl.innerHTML = label;
    labelEl.setAttribute("class", "form-check-label");
    el.appendChild(labelEl);
  
    let buttonEl = document.createElement("button");
    buttonEl.setAttribute("type", "button");
    buttonEl.setAttribute("class", "btn btn-danger");
    buttonEl.innerText = "Delete";
    buttonEl.addEventListener("click", () => {
      el.remove();
    });
    let buttonSpanEl = document.createElement("span");
    buttonSpanEl.setAttribute("class", "input-group-append");
    buttonSpanEl.appendChild(buttonEl);
  
    el.appendChild(buttonSpanEl);
  
    document.querySelector("#elements").appendChild(el);
  };
  
  const appendButton = (label = "No label") => {
    let el = document.createElement("div");
    el.setAttribute("class", "input-group mb-3");
  
    let inputEl = document.createElement("button");
    inputEl.setAttribute("type", "button");
    inputEl.setAttribute("class", "btn btn-primary");
    inputEl.innerText = label;
    el.appendChild(inputEl);
  
    let buttonEl = document.createElement("button");
    buttonEl.setAttribute("type", "button");
    buttonEl.setAttribute("class", "btn btn-danger");
    buttonEl.innerText = "Delete";
    buttonEl.addEventListener("click", () => {
      el.remove();
    });
    let buttonSpanEl = document.createElement("span");
    buttonSpanEl.setAttribute("class", "input-group-append");
    buttonSpanEl.appendChild(buttonEl);
  
    el.appendChild(buttonSpanEl);
  
    document.querySelector("#elements").appendChild(el);
  };
  