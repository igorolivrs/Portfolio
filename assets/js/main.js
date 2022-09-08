function updatePhotoInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.avatar_url
    photo.alt = profileData.name
}

function updatePortfolio(reposData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = reposData.map(project => {
        return `
            <li>
                <h3 class="github">${project.name}</h3>
                <a href="${project.html_url}" target="_blank">${project.html_url}</a>
            </li>
        `
    }).join('')
}

(async () => {
    const reposData = await fetchReposData()
    const photoData = await fetchProfileData()
    updatePhotoInfo(photoData)
    updatePortfolio(reposData)
})()