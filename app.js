const sliders = document.querySelectorAll(".slide");
let index = 0;

sliders[index].style.display = "block";

window.onkeydown = event => {
    switch (event.key) {
        case "ArrowRight":
            nextSlide(1);
            break;

        case "ArrowLeft":
            nextSlide(-1);
            break;

        case "ArrowUp":
            document.body.classList.toggle("no-cursor");
            break;
    }
}

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
