function fetchAPI() {
    return new Promise((resolve, reject) => {
        const num = Math.random()
        if (num > 0.5) {
            resolve(`Good things`)
        } else {
            reject(`Oops, try again!`)
        }
    })
}


fetchAPI().then((message) => console.log(message)).catch((message) => console.log(message)).finally(()=> {console.log('All will be ok')})
