import React, { useEffect, useState } from "react";

function Upcominggame() {
  const [upcomingMatches, setUpcomingMatches] = useState([]);

  useEffect(() => {
    const fetchSpielplan = async () => {
      try {
        const response = await fetch(
          "https://api.openligadb.de/getmatchdata/öbl1/2023"
        );
        const data = await response.json();

        const now = new Date();
        const matches = data.filter(
          (match) => new Date(match.matchDateTime) > now
        );

        setUpcomingMatches(matches.slice(0, 8));
      } catch (error) {
        console.error("Fehler beim Laden des Spielplans:", error);
      }
    };

    fetchSpielplan();
  }, []);

  return (
    <div>
      <div className="bg-fieldBG  w-44 h-32 m-3 flex justify-center items-center">
        {upcomingMatches.map((match, index) => (
          <div className="rectangle" key={index}>
            <div className="team-info">
              <img
                src={match.team1.teamIconUrl}
                alt={match.team1.teamName}
                width="40"
                height="40"
              />
            </div>
            <div className="vs">vs</div>
            <div className="team-info">
              <img
                src={match.team2.teamIconUrl}
                alt={match.team2.teamName}
                width="40"
                height="40"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Upcominggame;
