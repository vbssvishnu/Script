document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('idForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const gameId = document.getElementById('gameId').value;

        const uniqueId = generateUniqueId(name, gameId);

        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `<p>Generated Unique ID: <strong>${uniqueId}</strong></p>`;
    });

    function generateUniqueId(name, gameId) {
        // Generate a unique ID using a combination of name, gameId, and timestamp
        const timestamp = new Date().getTime();
        const uniqueId = `${name}_${gameId}_${timestamp}`;
        return uniqueId;
    }
});
