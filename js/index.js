let skillsSection = document.querySelector("#our-skills"),
    progressbars = document.querySelectorAll(".progressbar"),
    timeline = document.querySelectorAll(".timeline li .time"),
    days = document.querySelector("#days"),
    hours = document.querySelector("#hours"),
    minutes = document.querySelector("#minutes"),
    seconds = document.querySelector("#seconds"),
    stateSection = document.querySelector("#stats"),
    stats = document.querySelectorAll("#stats .content .box h1");

let started = false;

// adding animation on scrolling into progress bars
window.addEventListener("scroll", () => {
    progressbars.forEach(progress => {
        if (window.scrollY >= skillsSection.offsetTop - 200) {
            progress.firstElementChild.style.width = `${progress.dataset.value}%`;
            progress.style.setProperty("--opacity", `1`);
            progress.style.setProperty("--left", `${progress.dataset.value}%`);

        }
    });

    if (window.scrollY >= stateSection.offsetTop - 200) {
        if (!started) {
            stats.forEach(state => {

                let incrementGoal = setInterval(() => {
                    state.textContent++;

                    if (state.textContent == state.dataset.goal) {
                        clearInterval(incrementGoal);
                    }

                }, 2000 / parseInt(state.dataset.goal));
            });
        }
        started = true;
    }
});


// adding countdown

let eventTime = new Date("3/1/2023 0:0:0").getTime();
let countDown = setInterval(() => {

    let dateNow = new Date().getTime();
    let differentDate = eventTime - dateNow;
    if (Math.floor(differentDate / 1000) <= 0) {
        clearInterval(countDown);
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
    }
    else {
        days.textContent = (Math.floor(differentDate / (1000 * 60 * 60 * 24))).toString();
        hours.textContent = (Math.floor((differentDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).toString();
        minutes.textContent = (Math.floor((differentDate % (1000 * 60 * 60)) / (1000 * 60))).toString().padStart(2, "0");
        seconds.textContent = (Math.floor((differentDate % (1000 * 60)) / (1000))).toString().padStart(2, "0");
    }

}, 1000);

