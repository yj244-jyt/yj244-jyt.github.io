(() => {
  document.querySelectorAll(".author-profile").forEach((profile) => {
    const wrapper = profile.querySelector(".author__urls-wrapper");
    const button = profile.querySelector("#author-contact-toggle");

    if (!wrapper || !button) return;

    const setOpen = (open) => {
      wrapper.classList.toggle("is-open", open);
      button.classList.toggle("open", open);
      button.setAttribute("aria-expanded", String(open));
    };

    button.addEventListener("click", () => {
      setOpen(button.getAttribute("aria-expanded") !== "true");
    });

    document.addEventListener("click", (event) => {
      if (!profile.contains(event.target)) setOpen(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        button.focus();
      }
    });

    button.dataset.contactReady = "true";
  });
})();
