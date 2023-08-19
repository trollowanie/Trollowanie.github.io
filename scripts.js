const czas = document.getElementById("czas");
const wskazowkah = document.getElementById("wskazowkah");
const wskazowkas = document.getElementById("wskazowkas");
const wskazowkam = document.getElementById("wskazowkam");
const info = document.getElementById("info");
const video = document.getElementById("video");

const update = () => {
    //get current time
    var date = new Date;
    var hours=date.getHours();
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();

    //update ui
    if(hours<10){
        czas.innerHTML="0"+hours;
    }
    else{
        czas.innerHTML=hours;
    }

    if(minutes<10){
        czas.innerHTML+=":0"+minutes;
    }
    else{
        czas.innerHTML+=":"+minutes;
    }

    //rotate the clock hands
    wskazowkah.style.rotate=360*(hours+minutes/60+seconds/3600)/12-180+"deg";
    wskazowkam.style.rotate=360*(minutes+seconds/60)/60-180+"deg"
    wskazowkas.style.rotate=360*seconds/60-180+"deg"

    if(hours==21 && minutes==37){
        info.innerHTML="WYBIŁA GODZINA TROLLOWANIA";
        video.style.display="block";
        document.body.style.animationDuration="0.1s"
    }
    else{
        //calculate remaining time
        if(hours<=21){
            var remainingHours=21-hours;
        }
        else{
            var remainingHours=24-hours+21;
        }

        if(minutes<37){
            var remainingMinutes=37-minutes;
        }
        else{
            if(hours==21){
                remainingHours=24-hours+21;
            }
            remainingHours--;
            var remainingMinutes=60-minutes+37;
        }

        info.innerHTML="DO TROLLOWANIA POZOSTAŁO: "+remainingHours+"H, "+remainingMinutes+"MIN"; 
        video.style.display="none";
        document.body.style.animationDuration="0s"
    }
};

setInterval(update, 10);
