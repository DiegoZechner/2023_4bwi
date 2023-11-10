function insertRow(data) {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    data.slice(0, 13).forEach((team, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <img src="${team.teamIconUrl}" alt="${team.teamName}" width="20" height="20">
                ${team.teamName}
            </td>
            <td>${team.matches}</td>
            <td>${team.won}</td>
            <td>${team.draw}</td>
            <td>${team.lost}</td>
            <td>${team.goals}</td>
            <td>${team.opponentGoals}</td>
            <td>${team.points}</td>
        `;
        tableBody.appendChild(row);
    });
}

function loadData() {
    fetch("https://api.openligadb.de/getbltable/öbl1/2023").then((result) =>
        result.json().then((data) => {
            insertRow(data);
        })
    );
}

loadData();