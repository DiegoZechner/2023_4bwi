import React from "react";

export default function rectangle() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023")
      .then((result) => result.json())
      .then((data) => {
        const spielplanContainer = document.getElementById(
          "spielplan-container"
        );

        const now = new Date();
        let upcomingMatches = [];

        for (let i = 0; i < data.length; i++) {
          const match = data[i];
          const matchDateTime = new Date(match.matchDateTime);

          if (matchDateTime > now) {
            upcomingMatches.push(match);

            if (upcomingMatches.length >= 8) {
              break;
            }
          }
        }

        upcomingMatches.forEach((match, index) => {
          const rectangle = document.createElement("div");
          rectangle.className = "rectangle";
          rectangle.innerHTML = `
                <div class="team-info">
                    <img src="${match.team1.teamIconUrl}" alt="${match.team1.teamName}" width="40" height="40">
                </div>
                <div class="vs">vs</div>
                <div class="team-info">
                    <img src="${match.team2.teamIconUrl}" alt="${match.team2.teamName}" width="40" height="40">
                </div>
            `;
          spielplanContainer.appendChild(rectangle);
        });
      });
  });

  return (
    <div className="bg-fieldBG w-44 h-32 m-3 flex justify-center items-center"></div>
  );
}
