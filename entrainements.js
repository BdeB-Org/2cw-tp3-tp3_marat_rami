function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    return date.toLocaleDateString('en-US', options);
}

fetch('http://localhost:8080/ords/hr2/entrainements/')
.then(response => response.json())
.then(data => {
    const joueursTableBody = document.getElementById('entrainementsTableBody');

    data.items.forEach(entrainements => {
        const row = document.createElement('tr');
        row.innerHTML = `
                     <td>${entrainements.id_entrainement}</td>
                     <td>${formatDate(entrainements.date_entrainement)}</td>
                     <td>${entrainements.focus_entrainement}</td>
                     <td>${entrainements.notes}</td>
                     <td>${entrainements.matches_id_match}</td>

                 `;
                 joueursTableBody.appendChild(row);
             });
         });
