var rainAudio = document.getElementById("rain-sound");
var lightAudio = document.getElementById("light-sound");
var windAudio = document.getElementById("wind-sound");
var snowAudio = document.getElementById("snow-sound");
var fireAudio = document.getElementById("fire-sound");
var birdAudio = document.getElementById("bird-sound");
var wavesAudio = document.getElementById("waves-sound");
var dropAudio = document.getElementById("drop-sound");

var rainPlaying = false;
var lightPlaying = false;
var windPlaying = false;
var snowPlaying = false;
var firePlaying = false;
var birdPlaying = false;
var wavesPlaying = false;
var dropPlaying = false;


function rain()
{
    var f = document.querySelector("section");
    // var Animation = document.
        if (rainPlaying) {
            f.classList.remove("toggle");
            rainAudio.pause();
        } else {
            f.classList.add("toggle");
            rainAudio.play();
        }
};
rainAudio.onplaying = function()
{
    rainPlaying = true;
};
rainAudio.onpause = function()
{
    rainPlaying = false;
};
    // return rainAudio.paused ? rainAudio.play() : rainAudio.pause();
//};

function lighting()
{
    var f = document.querySelectorAll("section")[1];
        if (lightPlaying)
            {
                f.classList.remove("toggle");
                lightAudio.pause();
            } 
        else
            {
                f.classList.add("toggle");
                lightAudio.play();
            }
}
lightAudio.onplaying = function()
{
    lightPlaying = true;
}
lightAudio.onpause = function()
{
    lightPlaying = false;
}
    //     return lightAudio.paused ? lightAudio.play() : lightAudio.pause();
// };

function wind()
{
        var f = document.querySelectorAll("section")[2];
        if (windPlaying)
            {
                f.classList.remove("toggle");
                windAudio.pause();
            }
        else
            {
                f.classList.add("toggle");
                windAudio.play();
            }
}
windAudio.onplaying = function()
{
    windPlaying = true;
};
windAudio.onpause = function()
{
    windPlaying = false;
};
    //     return windAudio.paused ? windAudio.play() : windAudio.pause();
// };

function snow()
{
    var f = document.querySelectorAll("section")[3];
    if (snowPlaying)
        {
            f.classList.remove("toggle");
            snowAudio.pause();
        }
    else
        {
            f.classList.add("toggle");
            snowAudio.play();
        }
}
snowAudio.onplaying = function()
{
    snowPlaying = true;
}
snowAudio.onpause = function()
{
    snowPlaying = false;
}
    //     return snowAudio.paused ? snowAudio.play() : snowAudio.pause();
// };

function fire()
{
    var f = document.querySelectorAll("section")[4];
        if (firePlaying)
            {
                f.classList.remove("toggle");
                fireAudio.pause();
            }
        else
            {
                f.classList.add("toggle");
                fireAudio.play();
            }
}
fireAudio.onplaying = function()
{
    firePlaying = true;
};
fireAudio.onpause = function()
{
    firePlaying = false;
}
    //     return fireAudio.paused ? fireAudio.play() : fireAudio.pause();
// };

function bird()
{
    var f = document.querySelectorAll("section")[5];
        if (birdPlaying)
            {
                f.classList.remove("toggle");
                birdAudio.pause();
            }
        else
            {
                f.classList.add("toggle");
                birdAudio.play();
            }
}
birdAudio.onplaying = function()
{
    birdPlaying = true;
}
birdAudio.onpause = function()
{
    birdPlaying = false;
}
    //     return birdAudio.paused ? birdAudio.play() : birdAudio.pause();
// };

function waves()
{
    var f = document.querySelectorAll("section")[6];
        if (wavesPlaying)
            {
                f.classList.remove("toggle");
                wavesAudio.pause();
            }
        else
            {
                f.classList.add("toggle");
                wavesAudio.play();
            }
}
wavesAudio.onplaying = function()
{
    wavesPlaying = true;
}
wavesAudio.onpause = function()
{
    wavesPlaying = false;
}
    //     return wavesAudio.paused ? wavesAudio.play() : wavesAudio.pause();
// };

function drop()
{
    var f = document.querySelectorAll("section")[7];
        if (dropPlaying)
            {
                f.classList.remove("toggle");
                dropAudio.pause();
            }
        else
            {
                f.classList.add("toggle");
                dropAudio.play();
            }
}
dropAudio.onplaying = function()
{
    dropPlaying = true;
}
dropAudio.onpause = function()
{
    dropPlaying = false;
}