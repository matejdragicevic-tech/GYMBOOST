

const trainings = [
    "Snaga",
    "Kardio",
    "Fleksibilnost",
    "HIIT",
    "Box",
    "Bicikl",
    "Bodybuilding",
    "Crossfit",
    "Powerlifting",
    "Calisthenics",
    "Pilates",
    "Plivanje"
];

function showTrainings(){

    const cards = document.querySelectorAll(".training-card");

    document.getElementById("trainingList").style.display = "flex";

    cards.forEach(card => {
        card.style.display = "block";
    });
}

function searchTraining(){

    const input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const suggestions = document.getElementById("suggestions");

    const cards = document.querySelectorAll(".training-card");

    suggestions.innerHTML = "";

    document.getElementById("trainingList").style.display = "flex";

    cards.forEach(card => {

        const title = card.querySelector("h2")
            .innerText
            .toLowerCase();

        if(title.includes(input)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

    if(input.length >= 1){

        const filtered = trainings.filter(training =>
            training.toLowerCase().includes(input)
        );

        filtered.forEach(item => {

            const div = document.createElement("div");

            div.classList.add("suggestion-item");

            div.innerText = item;

            div.onclick = function(){

                document.getElementById("searchInput").value = item;

                suggestions.innerHTML = "";

                cards.forEach(card => {

                    const title = card.querySelector("h2")
                        .innerText
                        .toLowerCase();

                    if(title.includes(item.toLowerCase())){
                        card.style.display = "block";
                    }else{
                        card.style.display = "none";
                    }

                });

            }

            suggestions.appendChild(div);

        });

    }

}

