import { renderUser, renderUserRepository } from "./render.js"
const user = JSON.parse(localStorage.getItem('@gitsearch:userInfo'))

export async function showUserProfile(userInfo) {

    renderUser(userInfo)
}

// Renderizando os repositórios
export async function showUserRepos(userInfo) {
    renderUserRepository(userInfo)
}

export function handleNavigation() {
    const backButton = document.querySelector("#backButton")

    backButton.addEventListener("click", () => {
        localStorage.clear()
        location.replace("../../index.html")
    })
}

showUserProfile(user)
showUserRepos(user)
handleNavigation()