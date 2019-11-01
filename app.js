const sliders = document.querySelectorAll(".slide");
let index = 0;

sliders[index].style.display = "block";

function nextSlide(val)
{
    if (index + val >= 0)
    {
        index += val;
    }

    sliders[index].style.display = "block";

    if (sliders[index - 1])
    {
        sliders[index - 1].style.display = "none";
    }
}