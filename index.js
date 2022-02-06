let header = document.querySelector('#page-header')
// Select some elements...
header.style.textAlign = "right"


let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
}

let footer = document.querySelector('.footer')
footer.style.borderStyle = 'solid'
