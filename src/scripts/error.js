export function handleNavigation() {
    const backButton = document.querySelector(".button__new-search")

    backButton.addEventListener("click", () => {
        localStorage.clear()
        location.replace("../../index.html")
    })
}

handleNavigation()