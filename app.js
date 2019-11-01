const sliders = document.querySelectorAll(".slide");
let index = 0;

sliders[index].style.display = "block";

document.body.addEventListener("keydown", event => {
    if (event.key == "ArrowRight")
    {
        nextSlide(1);
    }

    else if (event.key == "ArrowLeft")
    {
        nextSlide(-1);
    }
});

function nextSlide(val)
{
    if (index + val >= 0 && index + val < sliders.length)
    {
        index += val;
    }

    sliders[index].style.display = "block";

    if (sliders[index + 1])
    {
        sliders[index + 1].style.display = "none";
    }
    
    if (sliders[index - 1])
    {
        sliders[index - 1].style.display = "none";
    }

    console.log(index);
}