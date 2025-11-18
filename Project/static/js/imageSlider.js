let images = ["images/cantorbuildingoutside.jpg","images/StayBright.jpg","images/TallBuilding.jpg"]
let altTags = ["The outside of Cantor College","A building that says \"Stay Bright\" on the side","Tall red brick building in the sun"]

let imgSlider = document.getElementById("imgSlider")
console.info(imgSlider)

let imageIndex = 0

let hover = false

function slide()
{
    if (hover)
    {
        imageIndex +=1
        if (imageIndex> images.length-1)
        {
            imageIndex = 0
        }
        imgSlider.src = images[imageIndex]
        imgSlider.alt = altTags[imageIndex]
    }

}
imgSlider.addEventListener('click',function(ev){
    slide()
})
imgSlider.addEventListener('mouseover',function(ev){
    hover = true
})
imgSlider.addEventListener('mouseleave',function(ev){
    hover = false
})

setInterval(slide,2000)