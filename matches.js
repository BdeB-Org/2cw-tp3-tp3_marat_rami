function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    return date.toLocaleDateString('en-US', options);
}
fetch('http://localhost:8080/ords/hr2/matches')
.then(response => response.json())
.then(data => {
    const matchesTableBody = document.getElementById('matchesTableBody');
    data.items.forEach(match => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${match.id_match}</td>
            <td>${match.adversaire}</td>
            <td>${formatDate(match.date_match)}</td>
            <td>${match.location}</td>
            <td>${match.result}</td>
        `;
        matchesTableBody.appendChild(row);
    });
});