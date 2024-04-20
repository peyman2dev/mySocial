const $ = document;

const tabs = [
  {
    id: 1,
    title: "Posts",
    items: [
      {
        profile: "/public/images/profile-1.jpg",
        cover: "/public/images/feed-3.jpg",
        caption:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque mollitia deleniti cum similique unde atque sapiente! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque mollitia deleniti cum similique unde atque sapiente! 💖🙌",
      },
      {
        profile: "/public/images/profile-1.jpg",
        cover: "/public/images/feed-1.jpg",
        caption:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque mollitia deleniti cum similique unde atque sapiente! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque mollitia deleniti cum similique unde atque sapiente! 💖🙌",
      },
      {
        profile: "/public/images/profile-1.jpg",
        cover: "/public/images/feed-4.jpg",
        caption:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque mollitia deleniti cum similique unde atque sapiente! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque mollitia deleniti cum similique unde atque sapiente! 💖🙌",
      },
    ],
  },
  {
    id: 2,
    title: "Reels",
    items: [
      { cover: "/public/images/feed-1.jpg" },
      { cover: "/public/images/feed-2.jpg" },
      { cover: "/public/images/feed-3.jpg" },
      { cover: "/public/images/feed-4.jpg" },
      { cover: "/public/images/feed-5.jpg" },
      { cover: "/public/images/feed-6.jpg" },
    ],
  },
  {
    id: 3,
    title: "Pictures",
    items: [],
  },
  {
    id: 4,
    title: "Reposts",
    items: [],
  },
];

const comments = [
  {
    id: 1,
    image: "/public/images/profile-1.jpg",
    profileName: "John Doe",
    comment: "This is the first comment.",
  },
  {
    id: 2,
    image: "/public/images/profile-2.jpg",
    profileName: "Jane Smith",
    comment: "Second comment with an image.",
  },
  {
    id: 3,
    image: "/public/images/profile-3.jpg",
    profileName: "Alice Johnson",
    comment: "Third comment with another image.",
  },
  {
    id: 4,
    image: "/public/images/profile-4.jpg",
    profileName: "Bob Brown",
    comment: "Fourth comment without an image.",
  },
];

let currentTab = "Posts";

// Elements
const buttonsContainer = $.querySelector("#buttons-container");
const feedsContainer = $.querySelector("#feeds-container");

// Modal
const modal = $.querySelector("#modal-card");
const modalScreen = $.querySelector("#modal");

const followingsButton = $.querySelector("#followings");
const closeButton = $.querySelector("#close-button");

const sendVerificationButton = $.querySelector(".send-verification");

modal.addEventListener("click", (event) => {
  event.stopPropagation();
});

// Followers / Followings
followingsButton.addEventListener("click", () => {
  modalScreen.classList.contains("visible")
    ? modalScreen.classList.remove("visible")
    : modalScreen.classList.add("visible");

  modal.innerHTML = "";
  modal.insertAdjacentHTML(
    "afterbegin",
    `
    <header id="modal-header" class="w-full pb-4 flex items-center justify-between">
    <div></div>
    <div class="pl-5">
        Following
    </div>
    <button onclick="modalCloseHandler()" id="close-button" class="max-w-max flex-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>

    </button>
</header>
<main class="mt-2">
    <article class="following-card ">
        <div class="flex items-center gap-1">
            <div class="flex items-center gap-2">
                <div class="w-12 h-12 rounded-full overflow-hidden">
                    <img src="/public/images/feed-3.jpg" class="w-full object-cover h-full" alt="">
                </div>
                <div>
                    <h6 class="">
                        Elisabet Jackson
                    </h6>
                    <p class="text-sm font-Poppins-Light text-gray-600">
                        @elisabet
                    </p>
                </div>
            </div>
        </div>
        <div>
            <button class="follow-button text-xs">
                Follow
            </button>
        </div>
    </article>
    <article class="following-card ">
        <div class="flex items-center gap-1">
            <div class="flex items-center gap-2">
                <div class="w-12 h-12 rounded-full overflow-hidden">
                    <img src="/public/images/profile-18.jpg" class="w-full object-cover h-full" alt="">
                </div>
                <div>
                    <h6 class="">
                        Noah Taylor
                    </h6>
                    <p class="text-sm font-Poppins-Light text-gray-600">
                        @noah_gamer
                    </p>
                </div>
            </div>
        </div>
        <div>
            <button class="follow-button text-xs">
                Follow
            </button>
        </div>
    </article>
    <article class="following-card ">
        <div class="flex items-center gap-1">
            <div class="flex items-center gap-2">
                <div class="w-12 h-12 rounded-full overflow-hidden">
                    <img src="/public/images/profile-6.jpg" class="w-full object-cover h-full" alt="">
                </div>
                <div>
                    <h6 class="">
                        Hannah Smith
                    </h6>
                    <p class="text-sm font-Poppins-Light text-gray-600">
                        @mrs.smith
                    </p>
                </div>
            </div>
        </div>
        <div>
            <button class="follow-button text-xs">
                Follow
            </button>
        </div>
    </article>
    <article class="following-card ">
        <div class="flex items-center gap-1">
            <div class="flex items-center gap-2">
                <div class="w-12 h-12 rounded-full overflow-hidden">
                    <img src="/public/images/profile-1.jpg" class="w-full object-cover h-full" alt="">
                </div>
                <div>
                    <h6 class="">
                        Lena Mc'Queen
                    </h6>
                    <p class="text-sm font-Poppins-Light text-gray-600">
                        @the_lena
                    </p>
                </div>
            </div>
        </div>
        <div>
            <button class="follow-button text-xs">
                Follow
            </button>
        </div>
    </article>
</main>`
  );
});

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

// Modal Send Verification
sendVerificationButton.addEventListener("click", (event) => {
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
  console.log("hi");
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

const changePage = (title) => {
  currentTab = title;
  tabsFunc();
};

modalScreen.addEventListener("click", (event) => {
  modalCloseHandler();
});

document.onkeydown = (event) => {
  const { keyCode } = event;
  keyCode === 27 && modalScreen.classList.remove("visible");
};

const tabsFunc = () => {
  buttonsContainer.innerHTML = "";
  feedsContainer.innerHTML = "";
  tabs.forEach((element) => {
    buttonsContainer.insertAdjacentHTML(
      "beforeend",
      `<button onclick="changePage('${
        element.title
      }')" class='profile-feed__button ${
        currentTab === element.title ? "isActive" : ""
      }'>
        ${element.title}
    </button>`
    );

    if (currentTab === element.title) {
      if (element.items.length && element.title === "Posts") {
        feedsContainer.className = "";
        const commentsHandler = ({ action }) => {
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
        element.items.forEach((item) => {
          // نمایش محتوای هر آیتم
          feedsContainer.insertAdjacentHTML(
            "beforeend",
            `
            <article class="feed-card shadow">
            <!-- Feed header -->
            <header class="flex-between">
              <div>
                <a
                  href="./src/Pages/Profiles/Hosna/index.html"
                  class="flex items-center gap-3"
                >
                  <div>
                    <img
                      src="${item.profile}"
                      alt="Profile card"
                      class="w-8 rounded-full"
                    />
                  </div>
                  <div>
                    <p class="font-Poppins-Medium text-sm twitter-name">
                      Lena Mc'Queen
                    </p>
                    <p class="tweet-time">
                      <span>Dubai</span>
                      ,
                      <span>6 Minutes Ago</span>
                    </p>
                  </div>
                </a>
              </div>
              <div class="relative">
                <button class="profile-more-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                    />
                  </svg>
                </button>

                <div class="dropdown">
                  <button class="remove-button dropdown-item">
                    <span class="text-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </span>
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            </header>

            <!-- Feed body -->
            <main class="tweet-body">
              <img
                clas
                src="${item.cover}"
                class="tweet-image object-cover"
                alt=""
              />
            </main>

            <!-- Feed footer -->
            <footer class="px-4">
              <!-- Like & Comment Share / Views & Save Button -->
              <section class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <button title="like" class="max-w-max">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </button>
                  <button title="comment" class="max-w-max">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                      />
                    </svg>
                  </button>
                  <button title="comment" class="max-w-max">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                      />
                    </svg>
                  </button>
                </div>

                <!-- Views, Save -->
                <div class="flex items-center gap-2 justify-between">
                  <!-- Views -->
                  <div class="flex items-center gap-1 text-xs text-gray-700">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    </span>
                    <span class="text-xs"> 29,428 </span>
                  </div>

                  <!-- save button -->
                  <div class="max-h-max">
                    <button class="save-button">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-4 h-4"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <span> save </span>
                    </button>
                  </div>
                </div>
              </section>

              <!-- Likes count -->
              <div class="mt-1 flex items-center relative">
                <div class="liked-by-wrapper relative block">
                  <span>
                    <img
                      src="/public/images/profile-5.jpg"
                      class="likedBy"
                      alt=""
                    />
                  </span>
                  <span>
                    <img
                      src="/public/images/profile-6.jpg"
                      class="likedBy left-3 z-10"
                      alt=""
                    />
                  </span>
                  <span> </span>
                  <img
                    src="/public/images/profile-7.jpg"
                    class="likedBy left-6 z-20"
                    alt=""
                  />
                </div>

                <div class="text-sm">
                  <span> Liked by </span>
                  <span>
                    <strong> rad_front </strong>
                  </span>
                  <span> and </span>
                  <span>
                    <strong> 2,923 others </strong>
                  </span>
                </div>
              </div>

              <!-- User Infos (name, description) -->
              <div class="mt-1 text-sm gap-1">
                <span>
                  <strong> Lena Mc'Queen </strong>
                </span>
                <p class="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>

              <!-- View all comments -->
              <div>
                <button
          
                class="text-xs max-w-max read-comments text-gray-500">
                  View all 294 comments ..
                </button>
              </div>
            </footer>
          </article>
        `
          );
        });
        document.querySelectorAll(".read-comments").forEach((element) => {
          element.addEventListener("click", (event) => {
            commentsHandler({ action: "comment" });
          });
        });
      }

      if (element.items.length && element.title === "Reels") {
        element.items.forEach((item) => {
          // نمایش محتوای هر آیتم
          feedsContainer.className =
            "flex items-center reels_container flex-wrap gap-3 mt-5";
          feedsContainer.insertAdjacentHTML(
            "beforeend",
            `
                    <article class="reel">
                    <div class="reel-details">
                        <div>
                            <span class="text-sm">
                            <img src="/public/images/video.svg" class="w-9  "/>
        
                            </span>
                        </div>
                        <div class="flex items-center gap-1 text-xs">
                            <span class="flex-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </span>
                            <span>
                                29k
                            </span>
        
                        </div>
                    </div>
                    <div class="reel-shade">
        
                    </div>
                    <img src="${item.cover}" alt="" class="content">
                </article>
        `
          );
        });
      }
    }
  });

  document.querySelectorAll(".profile-more-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      console.log(button);
      console.log(button.nextElementSibling.classList.toggle("visible"));
    });
    button.nextElementSibling.addEventListener("click", (event) => {
      button.nextElementSibling.classList.toggle("visible");
      modalOpenHandler();
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
      <button id="continueBtn" class="button confirm-button success">Continue</button>
      </div>
      `
      );
      document
        .querySelector(".cancel-button")
        .addEventListener("click", (event) => {
          modalCloseHandler();
        });
      document
        .querySelector(".confirm-button")
        .addEventListener("click", (event) => {
          modal.innerHTML = "";
          modal.insertAdjacentHTML(
            "afterbegin",
            `
          <div class="text-center">
          <p class="mx-auto font-bold">Post removed successfully</p>
          </div>
  
          <div class="mt-4 flex gap-1 justify-center">
          <button class="button  confirm-close-button success">OK</button>
          </div>`
          );

          document
            .querySelector(".confirm-close-button")
            .addEventListener("click", (event) => {
              redirector();
            });
        });
    });
  });

  const emptySections = tabs.filter((element) => !element.items.length);

  emptySections.forEach((element) => {
    if (element.title === currentTab) {
      feedsContainer.className = "";
      feedsContainer.insertAdjacentHTML(
        "beforeend",
        `
            <div class="its-empty">
            <div class="font-Poppins-Bold text-lg text-gray-900">
                Aww, Nothing to show :(
            </div>
            <div>
                <img src="/public/images/notfound.png" class="not-found-image" alt="">
            </div>
            </div>
    `
      );
    }
  });
};

tabsFunc();
