const form = document.getElementById('form')

form.addEventListener("submit", e =>{
    e.preventDefault()

    const formInfo = new FormData(form)
    let colour = formInfo.get('seed').slice(1,7)
    let scheme = formInfo.get('scheme')
    
    fetch('https://www.thecolorapi.com/scheme?hex='.concat(`${colour}&mode=${scheme}`))
    .then(response => response.json())
    .then(data => {
       render(data.colors)
       renderHex(data.colors)
    })
})


const render = (data)=>{
    let = coloursHtml = ``
    data.map(e=>{
        coloursHtml += `
        <div class"colour">
        <img height="557" src="${e.image.bare}">
        </div>
        `
    })
    document.getElementById('colours').innerHTML = coloursHtml
}


const renderHex = (data)=>{
    let hexHtml = ``
    data.map(e=>{
        hexHtml += `
        <div id="${e.hex.value}" class="col">${e.hex.value}</div>
        `
    })
    document.getElementById('names').innerHTML = hexHtml
}


document.getElementById('names').addEventListener("click", (e)=>{
    navigator.clipboard.writeText(e.target.id)
    document.getElementById('modal').style.display = "block"

    setTimeout(()=>{
        document.getElementById('modal').style.display = "none"
    },1000)
})

