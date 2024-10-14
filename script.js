import { handleFormSubmit } from './formHandler.js';

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('upload-form');
    uploadForm.addEventListener('submit', handleFormSubmit);
});
