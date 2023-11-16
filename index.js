//https://www.omdbapi.com/?apikey=34a5c5d4&s=fast

async function main() {
    const users = await fetch("https://www.omdbapi.com/?apikey=34a5c5d4&s=fast")
    const usersData = await users.json()
   const userListEl = document.querySelector(".user-list") 

   userListEl.innerHTML = usersData.map((user) => userHTML(user)).join("")
    
}

main()

function showUserPost(id){
    localStorage.setItem("id", id)
window.location.href = `${window.location.origin}/user.html`
}

function userHTML (user) {
    return `<div class="user-card" onlick="showUserPost(${user.id})>
    <div class="user-card__container">
      <h3>${user.name}</h4>
        <p><b>Title:</b> ${user.title}</p>
        <p><b>Year:</b> ${user.year}</p>
        <p><b>ImdbID:</b> <a href="https://${user.imdbId}" target="_blank">
        ${user.website}
        <p><b>Type:</b> ${user.movie}</p>
        <p><b>Poster:</b> ${user.poster}</p>
        </a></p>
    </div>
    </div>`
}