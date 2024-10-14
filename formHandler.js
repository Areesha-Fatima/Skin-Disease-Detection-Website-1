'use strict'; // Enforces strict mode

// Function to handle form submission
export function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const fileInput = document.getElementById('file-upload');
    const confirmationMessage = document.getElementById('confirmation-message');

    // Check if a file is selected
    if (fileInput.files.length > 0) {
        // Display success message if a file is selected
        confirmationMessage.style.display = 'block';
        confirmationMessage.textContent = 'Your file has been uploaded successfully!';
        confirmationMessage.style.color = 'green';
    } else {
        // Display error message if no file is selected
        confirmationMessage.style.display = 'block';
        confirmationMessage.textContent = 'Please select a file to upload.';
        confirmationMessage.style.color = 'red';
    }
}
