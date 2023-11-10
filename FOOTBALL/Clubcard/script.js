document.addEventListener("DOMContentLoaded", function() {
    // Funktion zum Einfügen von Clubkarten
    function insertClubCards(data) {
        const clubsContainer = document.getElementById("clubs-container");

        data.slice(0, 12).forEach((team) => {
            const clubCard = createClubCard(team);
            clubsContainer.appendChild(clubCard);
        });
    }

    // Funktion zum Erstellen einer einzelnen Clubkarte
    function createClubCard(team) {
        const clubCard = document.createElement("div");
        clubCard.className = "club-card";

        const clubLogo = document.createElement("img");
        clubLogo.className = "club-logo";
        clubLogo.src = team.teamIconUrl;
        clubLogo.alt = team.teamName;

        const clubName = document.createElement("div");
        clubName.className = "club-name";
        clubName.textContent = team.teamName;

        clubCard.appendChild(clubLogo);
        clubCard.appendChild(clubName);

        return clubCard;
    }

    // Funktion zum Laden der Daten und Einsetzen der Clubkarten
    function loadClubCards() {
        fetch("https://api.openligadb.de/getbltable/öbl1/2023")
            .then((result) =>
                result.json().then((data) => {
                    insertClubCards(data);
                })
            )
            .catch((error) => {
                console.error("Fehler beim Laden der Daten:", error);
            });
    }

    loadClubCards();
});