import { searchUsers, searchUserRepository, baseUrl } from "./requests.js"

function handleSearch() {
    const input = document.querySelector("#search")
    const button = document.querySelector(".button__search-user")

    button.addEventListener("click", async () => {
        createUserInfo(input.value)
    })
}
async function createUserInfo(nickName) {
    let userInfo = await searchUsers(nickName)
    let userRepositories = await searchUserRepository(nickName)
    let info = {
        avatar_url: userInfo.avatar_url,
        name: userInfo.name,
        repositories: userRepositories
    }
    localStorage.setItem('@gitsearch:userInfo', JSON.stringify(info))
    location.replace('./src/pages/profile.html')
}

handleSearch()