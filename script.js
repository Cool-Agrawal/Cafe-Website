// 1. Select all the buttons on the page that have the class 'btn-success'
const addButtons = document.querySelectorAll('.btn-success');

// 2. Loop through each button to give it a click instruction
addButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        
        // Prevent the button from immediately redirecting to signin.html
        event.preventDefault(); 
        
        // 3. Check what the button currently says and change it
        if (this.innerText === 'Add item') {
            this.innerText = 'Added ✓';
            
            // Swap the Bootstrap green color (success) for grey (secondary)
            this.classList.remove('btn-success');
            this.classList.add('btn-secondary'); 
            
        } else {
            // Change it back if they click it again
            this.innerText = 'Add item';
            
            // Swap the grey back to green
            this.classList.remove('btn-secondary');
            this.classList.add('btn-success');
        }
    });
});