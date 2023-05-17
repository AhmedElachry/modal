const dialogABtn = document.querySelector(".btn-a");
const dialogBBtn = document.querySelector(".btn-b");
const dialogCBtn = document.querySelector(".btn-c");

class Dialog {
  constructor(title, body, doneMsg, cancelMsg) {
    title = title;
    body = body;
    this.onDone = function () {
      console.log(doneMsg);
    };
    this.onCancel = function () {
      console.log(cancelMsg);
    };
    this.close = function () {
      // Remove the modal from the document body
      document.body.removeChild(document.querySelector(".modal-background"));
    };
    const self = this; // Add a reference to "this"

    this.open = function () {
      const background = document.createElement("div");
      background.classList.add("modal-background");

      // Create the modal dialog
      const dialog = document.createElement("div");
      dialog.classList.add("modal-dialog");

      const dialogTitle = document.createElement("p");
      dialogTitle.innerHTML = title;
      dialog.appendChild(dialogTitle);

      // Create the articleCont
      const dialogBody = document.createElement("p");
      dialogBody.innerHTML = body;
      dialog.appendChild(dialogBody);

      // Create the Done button
      const doneButton = document.createElement("button");
      doneButton.textContent = "Done";
      doneButton.addEventListener("click", function () {
        // TODO: Handle Done button click
        self.onDone();
        self.close();
      });
      dialog.appendChild(doneButton);

      // Create the Cancel button
      const cancelButton = document.createElement("button");
      cancelButton.textContent = "Cancel";
      cancelButton.addEventListener("click", function () {
        // TODO: Handle Cancel button click
        self.onCancel();
        self.close();
      });
      dialog.appendChild(cancelButton);

      // Add the dialog to the background
      background.appendChild(dialog);

      // Add the background to the document body
      document.body.appendChild(background);
    };
  }
}

dialogABtn.addEventListener("click", () => {
  const dialogA = new Dialog(
    "Dialog A Title",
    "Dialog A body",
    "Dialog A done",
    "Dialog A canceled"
  );
  dialogA.open();
  //   console.log(dialogA);
});
dialogBBtn.addEventListener("click", () => {
  const dialogB = new Dialog(
    "Dialog B Title",
    "Dialog B body",
    "Dialog B done",
    "Dialog B canceled"
  );
  dialogB.open();
  //   console.log(dialogB);
});
dialogCBtn.addEventListener("click", () => {
  const dialogC = new Dialog(
    "Dialog C Title",
    "Dialog C body",
    "Dialog C done",
    "Dialog C canceled"
  );
  dialogC.open();
  //   console.log(dialogC);
});

// what is the benifits of using this way to create the modal ?
