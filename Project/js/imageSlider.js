let images = ["images/cantorbuildingoutside.jpg","images/StayBright.jpg"]

let imgSlider = document.getElementById("imgSlider")
console.info(imgSlider)

let imageIndex = 0

function slide()
{
    imageIndex +=1
    if (imageIndex> images.length-1)
    {
        imageIndex = 0
    }
    imgSlider.src = images[imageIndex]
}

imgSlider.addEventListener('click',function(ev){


    slide();
})

