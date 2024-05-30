// Fetch performance data
fetch('http://localhost:8080/ords/hr2/performance')
    .then(response => response.json())
    .then(performanceData => {
        console.log('Performance Data:', performanceData);  // Debugging line

        // Fetch players data
        return fetch('http://localhost:8080/ords/hr2/joueurs')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch players data');
                }
                return response.json();
            })
            .then(playersData => {
                console.log('Players Data:', playersData);  // Debugging line

                // Fetch matches data
                return fetch('http://localhost:8080/ords/hr2/matches')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Failed to fetch matches data');
                        }
                        return response.json();
                    })
                    .then(matchesData => {
                        console.log('Matches Data:', matchesData);  // Debugging line

                        const performancesTableBody = document.getElementById('performancesTableBody');
                        console.log('Performances Table Body:', performancesTableBody);  // Debugging line

                        performanceData.items.forEach(performance => {
                            console.log('Current Performance:', performance);  // Debugging line
                            const player = playersData.items.find(p => p.id_player === performance.joueurs_id_joueur);
                            const match = matchesData.items.find(m => m.id_match === performance.matches_id_match);

                            console.log('Found Player:', player);  // Debugging line
                            console.log('Found Match:', match);  // Debugging line

                            const row = document.createElement('tr');
                            row.innerHTML = `
                                <td>${performance.id_performance}</td>
                                <td>${player ? player.player_name : 'Unknown Player'}</td>
                                <td>${match ? match.opponent_team : 'Unknown Opponent'}</td>
                                <td>${performance.buts}</td>
                                <td>${performance.assists}</td>
                                <td>${performance.temps_joue}</td>
                            `;
                            performancesTableBody.appendChild(row);
                        });
                    });
            });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
