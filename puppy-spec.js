document.addEventListener("DOMContentLoaded", () => {
    const testCases = [
        { category: "Main Page", description: "Check that the main page displays a formatted list of all players." },
        { category: "Main Page", description: "Verify each player has a 'See details' button." },
        { category: "Main Page", description: "Verify clicking 'See details' shows player's name, breed, team status, and image." },
        { category: "Main Page", description: "Check if 'Go Back' button returns to the main list." },
        { category: "Main Page", description: "Verify each player has a 'Remove' button." },
        { category: "Adding Players", description: "Check that the add player form has name, breed inputs, and a submit button." },
        { category: "Adding Players", description: "Enter valid name and breed, click submit, verify player appears in the roster." },
        { category: "Adding Players", description: "Check that the new player appears without a page refresh." },
        { category: "Adding Players", description: "Try adding a player without a name or breed, verify an error message appears." },
        { category: "Removing Players", description: "Click 'Remove' button on a player, verify the player disappears from the roster." },
        { category: "Removing Players", description: "Ensure removal happens without a page refresh." },
        { category: "Stretch Goals - Single Player View", description: "Check if teammates are displayed when viewing a player's details." },
        { category: "Stretch Goals - Single Player View", description: "Change team assignment via dropdown, verify changes immediately in the roster." },
        { category: "Stretch Goals - Adding Players", description: "Add a player with an image URL, verify the image appears as the portrait." }
    ];

    const testList = document.getElementById("test-list");
    testCases.forEach(test => {
        const li = document.createElement("li");
        li.textContent = `[${test.category}] ${test.description}`;
        testList.appendChild(li);
    });
});
