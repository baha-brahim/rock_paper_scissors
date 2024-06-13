document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.toggle-button');
    let selectedChoice = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // If the button is already active, deactivate it and clear the selected choice
            if (button.classList.contains('active')) {
                button.classList.remove('active');
                selectedChoice = '';
            } else {
                // Remove the 'active' class from all buttons
                buttons.forEach(btn => btn.classList.remove('active'));
                
                // Add the 'active' class to the clicked button
                button.classList.add('active');
                
                // Set the selected choice
                selectedChoice = button.getAttribute('data-choice');
            }
        });
    });

    window.shoot = function() {
        if (!selectedChoice) {
            alert('Please make a selection first!');
            return;
        }

        const choices = ['rock', 'paper', 'scissors'];
        const demonsChoice = choices[Math.floor(Math.random() * choices.length)];
        let result = '';

        if (selectedChoice === demonsChoice) {
            result = 'It\'s a tie!';
        } else if (
            (selectedChoice === 'rock' && demonsChoice === 'scissors') ||
            (selectedChoice === 'paper' && demonsChoice === 'rock') ||
            (selectedChoice === 'scissors' && demonsChoice === 'paper')
        ) {
            result = 'You win!';
            document.querySelector('.you').innerText++;
        } else {
            result = 'Demons win!';
            document.querySelector('.demons').innerText++;
        }

        alert(`You chose: ${selectedChoice}\nDemons chose: ${demonsChoice}\n${result}`);
    }
});

