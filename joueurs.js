function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    return date.toLocaleDateString('en-US', options);
}

fetch('http://localhost:8080/ords/hr2/joueurs')
.then(response => response.json())
.then(data => {
    const joueursTableBody = document.getElementById('joueursTableBody');

    data.items.forEach(joueurs => {
        const row = document.createElement('tr');
        row.innerHTML = `
                     <td>${joueurs.id_joueur}</td>
                     <td>${joueurs.nom_joueur}</td>
                     <td>${joueurs.position}</td>
                     <td>${joueurs.numero_maillot}</td>
                     <td>${formatDate(joueurs.date_naissance)}</td>
                     <td>${joueurs.contact}</td>
                 `;
                 joueursTableBody.appendChild(row);
             });
         });