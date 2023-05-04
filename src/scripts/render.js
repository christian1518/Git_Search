// Função para renderizar o atavar e o nome do MediaStreamAudioSourceNode, na pagina showUserProfile.js
export function renderUser(user) {
    
    const headerContainer = document.querySelector(".header-user__container")
    headerContainer.innerHTML = ''

    const div = document.createElement('div')
    const image = document.createElement('img')
    const h3 = document.createElement('h3')
    const nav = document.createElement('nav')
    const button = document.createElement('button')

    div.classList.add("div__user")
    image.classList.add("image__user")
    h3.classList.add("name__user")
    nav.classList.add("nav__change-user")
    button.classList.add("btn__change-user")
    button.id = "backButton"

    image.src = user.avatar_url
    image.alt = "Imagem usuário"
    h3.innerText = user.name
    button.innerText = "Trocar de usuário"

    div.append(image, h3)
    nav.appendChild(button)
    headerContainer.append(div, nav)

}



// Criando e renderizando os cards de repositório
export function renderUserRepository(user) {
    const cardRepos = document.querySelector(".cards__list")
    cardRepos.innerHTML = ''

    user.repositories.forEach(repo => {
        const card = createCardRepos(repo)

        cardRepos.append(card)
    }) 
}


export function createCardRepos(repos) {
    const li = document.createElement("li")
    const h3 = document.createElement("h3")
    const p = document.createElement("p")
    const button = document.createElement("button")
    const anchor = document.createElement("a")
    const span  = document.createElement("span")


    li.classList.add("list__item")
    h3.classList.add("repos__title")
    p.classList.add("repos__description")
    button.classList.add("btn__repos")
    anchor.classList.add("link__repos")
    span.classList.add("span__repos")


    h3.innerText = repos.name
    p.innerText = repos.description
    anchor.target = "_blank"
    anchor.href = repos.html_url
    span.innerText = "Repositório"

    anchor.appendChild(span)
    button.appendChild(anchor)
    li.append(h3, p, button)


    return li
}