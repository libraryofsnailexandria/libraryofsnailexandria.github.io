// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('characterForm');
    const output = document.getElementById('output');

    form.addEventListener('submit', (event) => {
        // Prevent the form from submitting the traditional way
        event.preventDefault();

        // Create a character object to store the form data
        const character = {
            name: form.name.value,
            age: form.age.value,
            gender: form.gender.value,
            physicalAppearance: form.appearance.value,
            eyes: form.eyes.value,
            hair: form.hair.value,
            attire: form.attire.value,
            personality: form.personality.value,
            mind: form.mind.value,
            backstory: form.backstory.value,
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