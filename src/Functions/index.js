const $ = document;

let hashtags = [];

const hashtagInput = $.querySelector("#post-hashtags");
const hashtagsWrapper = $.querySelector("#hashtags-wrap");
const uploadBtn = $.querySelector("#upload-button");
const modal = $.querySelector("#modal-card");
const modalScreen = $.querySelector("#modal");
const verifyNeedButton = $.querySelector("#send-verification-request");

const moreButtons = $.querySelectorAll(".more-button");
const dropdowns = $.querySelectorAll(".dropdown");
const removeButton = $.querySelectorAll(".remove-button");

const modalCloseHandler = () => {
  modalScreen.classList.remove("visible");
};

const modalOpenHandler = (action) => {
  modalScreen.classList.add("visible");
  if (action == "comment") {
    modal.classList.add("comments-modal");
  } else {
    modal.classList.remove("comments-modal");
  }
};

moreButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    button.nextElementSibling.classList.toggle("visible");
    button.nextElementSibling
      .querySelector("button")
      .addEventListener("click", (event) => {
        modal.innerHTML = "";
        modalOpenHandler();
        const postRemoved = () => {
          modal.innerHTML = "";
          // Modal Call - Post Removed Successfully
          modal.insertAdjacentHTML(
            "afterbegin",
            `
        <div class="text-center">
        <p class="mx-auto font-bold">Post removed successfully</p>
        </div>

        <div class="mt-4 flex gap-1 justify-center">
        <button class="button  cancel-button success">OK</button>
        </div>
        `
          );
          const cancelButton = document.querySelector(".cancel-button");
          cancelButton.addEventListener("click", () => {
            modalCloseHandler();
          });
        };
        // Modal - Returns Are you sure to remove the post?
        modal.innerHTML = "";
        modal.insertAdjacentHTML(
          "afterbegin",
          `
          <div class="text-center">
          <p class="mx-auto font-bold">Are you sure you want to delete this?</p>
          </div>
          
          <div class="mt-4 flex gap-1 justify-center">
          <button  class="button cancel-button error">
          Cancel
          </button>
          <button id="continueBtn" class="button success">Continue</button>
          </div>
          `
        );

        const cancelButton = document.querySelector(".cancel-button");
        cancelButton.addEventListener("click", modalCloseHandler);

        document
          .getElementById("continueBtn")
          .addEventListener("click", () => postRemoved());
      });
  });
});

document.body.addEventListener("click", (event) => {
  dropdowns.forEach((element) => {
    if (element.classList.contains("visible")) {
      element.classList.remove("visible");
    }
  });
});

if (modal) {
  modal.addEventListener("click", (event) => {
    event.stopPropagation();
  });
  modalScreen.addEventListener("click", (event) => {
    modalCloseHandler();
  });
}

const codeSentHandler = (event) => {
  modalOpenHandler();
  modal.innerHTML = "";
  modal.insertAdjacentHTML(
    "afterbegin",
    `
    <header id="modal-header" class="w-full pb-4 flex items-center justify-between">
    <div></div>
    <div class="pl-5">
    Enter the code
    </div>
    <button onclick="modalCloseHandler()" id="close-button" class="max-w-max flex-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    </button>
</header>
<main class="px-4 my-2 border-b">
<div class="alert success">
<span>
Code sent successfully !
</span>
</div>
<p class="font-Poppins-SemiBold text-sm">
 Verification code <span class="requre-symbol">*</span>
</p>
<input type="email" placeholder="*****" class="email-input text-center"/>
</main>
<footer class="mt-2">
<button onclick="verifyCodeHandler()" id="send-verify-code">
VERIFY
</button>
</footer>
`
  );
};

const redirector = () => {
  window.location.reload();
};

const successfullyVerification = () => {
  modalOpenHandler();
  modal.innerHTML = "";
  modal.insertAdjacentHTML(
    "afterbegin",
    `
    <header id="modal-header" class="w-full pb-4 flex items-center justify-between">
    <div></div>
    <div class="pl-5">
    Successful
    </div>
    <button onclick="modalCloseHandler()" id="close-button" class="max-w-max flex-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    </button>
</header>
<main class="px-4 my-2 border-b">
    <div class="alert success" > Verification was successfully ! </div>
</main>
<footer class="mt-2">
<button onclick="redirector()"  id="send-verify-code">
CONTINUE
</button>
</footer>
`
  );
};

const failureVerification = () => {
  modalOpenHandler();
  modal.innerHTML = "";
  modal.insertAdjacentHTML(
    "afterbegin",
    `
    <header id="modal-header" class="w-full pb-4 flex items-center justify-between">
    <div></div>
    <div class="pl-5">
    Failed
    </div>
    <button onclick="modalCloseHandler()" id="close-button" class="max-w-max flex-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    </button>
</header>
<main class="px-4 my-2 border-b">
    <div class="alert error" > Verification was failure ! </div>
</main>
<footer class="mt-2">
<button onclick="redirector()"   id="send-verify-code">
CONTINUE
</button>
</footer>
`
  );
};

const verifyCodeHandler = (OTP) => {
  if (OTP) {
    successfullyVerification();
  } else {
    failureVerification();
  }
};

const hashtagCleaner = (event) => {
  let splitter = event.target.value.split(",");
  splitter = splitter.filter((tag) => tag.trim() !== ""); // Remove empty tags
  hashtagInput.value = "";
  console.log(splitter);
  hashtags.push(...splitter); // Push individual tags instead of the array
  pushElements(hashtags); // Update the displayed hashtags
};

const pushElements = (elements) => {
  hashtagsWrapper.innerHTML = "";
  elements.forEach((element) => {
    hashtagsWrapper.insertAdjacentHTML(
      "beforeend",
      `
            <a href="#" class="hashtag-link">
                #${element}
            </a>`
    );
  });
};

if (hashtagInput) {
  hashtagInput.addEventListener("keyup", (event) => {
    if (event.target.value.includes(",")) {
      hashtagCleaner(event);
    }
  });
}
if (verifyNeedButton) {
  verifyNeedButton.addEventListener("click", (event) => {
    modalOpenHandler();
    modal.innerHTML = "";
    modal.insertAdjacentHTML(
      "afterbegin",
      `
    <header id="modal-header" class="w-full pb-4 flex items-center justify-between">
    <div></div>
    <div class="pl-5">
        Verify Email
    </div>
    <button onclick="modalCloseHandler()" id="close-button" class="max-w-max flex-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    </button>
</header>
<main class="px-4 my-2 border-b">
<p class="font-Poppins-SemiBold text-sm">
 Email address <span class="requre-symbol">*</span>
</p>
<input type="email" placeholder="example@yahoo.com" class="email-input"/>
</main>
<footer class="mt-2">
<button onclick="codeSentHandler()" id="send-verify-code">
Send verification
</button>
</footer>

`
    );
  });
}
const comments = [
  {
    id: 1,
    image: "./../../public/images/profile-1.jpg",
    profileName: "John Doe",
    comment: "This is the first comment.",
  },
  {
    id: 2,
    image: "./../../public/images/profile-2.jpg",
    profileName: "Jane Smith",
    comment: "Second comment with an image.",
  },
  {
    id: 3,
    image: "./../../public/images/profile-3.jpg",
    profileName: "Alice Johnson",
    comment: "Third comment with another image.",
  },
  {
    id: 4,
    image: "./../../public/images/profile-4.jpg",
    profileName: "Bob Brown",
    comment: "Fourth comment without an image.",
  },
];
const commentsHanlder = ({ action }) => {
  modalOpenHandler(action);
  modal.innerHTML = "";
  modal.insertAdjacentHTML(
    `afterbegin`,
    `
    <div class="overflow-y-visible" id="comments_modal">
  <header class="w-full border-b pb-4 flex-center text-center">
    <p>
      Comments
    </p>
  </header>
  <main class="mt-4">
    <div>
      <p class="text-sm text-gray-700">
        Add a comment :
      </p>
      <div class="mt-2">
        <textarea class="w-full  bg-gray-100 p-5 rounded-lg font-light" placeholder="Write something to share ..."></textarea>
      </div>
      <div class="flex justify-end">
        <button class="button success text-base max-w-max px-3 py-1.5">
          SUBMIT
        </button>
      </div>
    </div>
  </main>
  <footer class="mt-5 pt-5 border-t">
  <div>
  <p class="text-sm text-gray-600 my-3">
  Comments</p>
  </div>
    ${comments
      .map(
        (element) => `
        <div class="border bg-gray-100 p-5 my-3 rounded-md shadow-sm">
        <div class="flex items-center gap-2 mb-1">
          <img
            src="${element.image}"
            class="w-9 rounded-full"
            alt="Profile Image"
          />
          <div>
            <span class="text-sm text-gray-600"> ${element.profileName} </span>
            <p class="text-xs text-gray-500">20 April 2024</p>
          </div>
        </div>
        <div class="ml-6 pl-4 mt-4">
          <q> ${element.comment} </q>
        </div>
        <div class="mt-4 flex-between">
          <div class="flex items-center gap-1">
            <button class="flex items-center gap-1">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 text-gray-600 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                  />
                </svg>
              </span>
              <span class="pb-1">+1</span>
            </button>
          </div>
          <button
            class="max-w-max w-8 h-8 flex-center bg-gray-100 rounded-md border"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 text-gray-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
          </button>
        </div>
      </div>
    `
      )
      .join("")}
  </footer>
  `
  );
};
