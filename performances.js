fetch('http://localhost:8080/ords/hr2/performance')
.then(response => response.json())
.then(data => {
    const performancesTableBody = document.getElementById('performancesTableBody');
    data.items.forEach(performance => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${performance.id_performance}</td>
            <td>${performance.joueurs_id_joueur}</td>
            <td>${performance.matches_id_match}</td>
            <td>${performance.buts}</td>
            <td>${performance.assists}</td>
            <td>${performance.temps_joue}</td>
        `;
        performancesTableBody.appendChild(row);
    });
});



