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

    if (window.scrollY >= stateSection.offsetTop - 150) {
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

// adding animation on countdown

let eventTime = new Date("3/1/2023").getTime()

let countDown = setInterval(() => {
    let dateNow = new Date().getTime();
    let differentDate = eventTime - dateNow;
    days.textContent = (differentDate / 1000 / 60 / 60 / 24).toFixed();
    hours.textContent = ((differentDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toFixed();
    minutes.textContent = (((differentDate % (1000 * 60 * 60)) / (1000 * 60))).toFixed().padStart(2, "0");
    seconds.textContent = (((differentDate % (1000 * 60)) / (1000))).toFixed().padStart(2, "0");
    if (differentDate === 0) {
        clearInterval(countDown);
    }

}, 1000);




