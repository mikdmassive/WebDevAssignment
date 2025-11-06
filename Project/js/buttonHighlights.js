let buttons = document.getElementsByTagName('button')
for (let button of buttons) {
    button.addEventListener('mouseover',function(ev){
        console.info("hover")
    })
}
