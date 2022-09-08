
async function fetchProfileData() {
    const url = 'https://api.github.com/users/igorolivrs';
    const response = await fetch(url)
    const photoData = await response.json()
    console.log(photoData)
    return photoData 
}

async function fetchReposData() {
    const url = 'https://api.github.com/users/igorolivrs/repos';
    const response = await fetch(url)
    const reposData = await response.json()
    console.log(reposData)
    return reposData 
}


