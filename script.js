/* =========================
   FIRST GIFT CLICK
========================= */

function startMagic() {

    const flash = document.getElementById("flash");

    if (flash) {

        flash.classList.add("active");

        setTimeout(function () {

            window.location.href = "dates.html";

        }, 700);

    }

}


/* =========================
   CHECK OCTOBER DATE
========================= */

function checkDate(date) {

    const result =
        document.getElementById("date-result");

    if (!result) {
        return;
    }

    /* Correct date */

    if (date === 5) {

        result.innerHTML = `
            <div class="correct-date">
                ✨ You found it! ✨
                <br><br>

                <a href="gift.html"
                   class="main-button">
                    Open the Gift 🎁
                </a>
            </div>
        `;

        return;
    }


    /* Wrong date */

    result.innerHTML = `
        <div class="wrong-date">
            Sorry! You didn't find the correct date 🤭
            <br>
            Try another little cloud ☁️
        </div>
    `;

}


/* =========================
   OPEN TEACHER MESSAGE
========================= */

function openMessage() {

    const message =
        document.getElementById("message-section");

    if (!message) {
        return;
    }

    message.classList.toggle("show");

}


/* =========================
   EXTRA CLOUD MOVEMENT
========================= */

const clouds =
    document.querySelectorAll(
        ".cloud-calendar button"
    );

clouds.forEach(function(cloud, index) {

    cloud.style.animationDelay =
        (index * 0.08) + "s";

});