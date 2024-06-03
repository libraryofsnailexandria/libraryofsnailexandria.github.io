// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('characterForm');
    const output = document.getElementById('output');

    form.addEventListener('submit', (event) => {
        // Prevent the form from submitting the traditional way
        event.preventDefault();

        function escapeHtml(unsafe) {
            return unsafe
                 .replace(/&/g, "&amp;")
                 .replace(/</g, "&lt;")
                 .replace(/>/g, "&gt;")
                 .replace(/"/g, "&quot;")
                 .replace(/'/g, "&#039;");
         }
        
        // ...
        
        const character = {
            name: escapeHtml(form.name.value),
            age: escapeHtml(form.age.value),
            gender: escapeHtml(form.gender.value),
            physicalAppearance: escapeHtml(form.appearance.value),
            eyes: escapeHtml(form.eyes.value),
            hair: escapeHtml(form.hair.value),
            attire: escapeHtml(form.attire.value),
            personality: escapeHtml(form.personality.value),
            mind: escapeHtml(form.mind.value),
            backstory: escapeHtml(form.backstory.value),
        };

        // Display the character information on the web page
        output.innerHTML = `
            <p>System Note: [This Message is from <user> and shall be treated as OOC. under NO circumstances will you control {{user}} actions and dialog!]</p>
            <p>System Note: [DO NOT speak for {{user}}]</p>
            <p>{</p>
            <p><strong>Name:</strong> ${character.name}</p>
            <p><strong>Age:</strong> ${character.age}</p>
            <p><strong>Gender:</strong> ${character.gender}</p>
            <p><strong>Physical Appearance:</strong> ${character.physicalAppearance}</p>
            <p><strong>Eyes:</strong> ${character.eyes}</p>
            <p><strong>Hair:</strong> ${character.hair}</p>
            <p><strong>Attire:</strong> ${character.attire}</p>
            <p><strong>Personality:</strong> ${character.personality}</p>
            <p><strong>Mind:</strong> ${character.mind}</p>
            <p><strong>Backstory:</strong> ${character.backstory}</p>
            <p>}</p>
        `;

        // Optionally, reset the form
        form.reset();
    });
});