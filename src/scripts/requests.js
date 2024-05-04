export const baseUrl = "https://api.github.com/users"

export async function searchUsers(userName) {
    const user = await fetch(`${baseUrl}/${userName}`, {
        method: "GET"
    })
    .then(async (res) => {
        if(res.ok) {
            const response = await res.json()
            return response
        }else {
            return location.replace('./src/pages/error.html')
        }
    })
    return user
}

export async function searchUserRepository(userName) {
    const repository = await fetch(`${baseUrl}/${userName}/repos`, {
        method: "GET"
    })
    .then(async (res) => {       
        const responseRepos = await res.json()
        return responseRepos      
    })
    return repository
}