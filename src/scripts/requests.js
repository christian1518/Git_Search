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





// export async function searchUserRepository(userName) {
//     const repository = await fetch(`${baseUrl}/${userName}/repos`, {
//         method: "GET"
//     })
//     .then(async (res) => {
//         if(res.ok) {
//             const responseRepos = await res.json()
//             // localStorage.setItem('repos', JSON.stringify(responseRepos))
//             // location.replace('./src/pages/profile.html')
            
//             repository.forEach(element => {
//                 const cardRepos = document.querySelector(".cards__list")
//                 cardRepos.innerHTML = ''
                
//                 const listItem = document.createElement("li")
//                 listItem.classList.add("list__item")
//                 listItem.innerHTML = `
                
//                 <h3 class="repos__title">${element[0].name}</h3>
//                 <p class="repos__description">${element.description}</p>
//                 <button class="btn__repos"><a href="${element.html-url}" class="link__repos" target="_blank"><span class="span__repos">Repositório</span></a></button>
                
//                 `
        
//                 cardRepos.appendChild(listItem)
//                 return cardRepos
//             })  
//             return responseRepos
//         }
//     })
//     return repository
// }














