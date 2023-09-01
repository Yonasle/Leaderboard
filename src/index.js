import './styles.css';
import { renderLeaderboard, addScoreToAPI } from './leaderboard.js';

document.addEventListener('DOMContentLoaded', async () => {
  // Initialize the leaderboard
  await renderLeaderboard();

  // Add event listeners for the "Refresh" and "Submit" buttons
  const refreshButton = document.querySelector('.refresh');
  const submitButton = document.querySelector('.submit');

  refreshButton.addEventListener('click', async () => {
    // Refresh the leaderboard by fetching scores from the API
    try {
      await renderLeaderboard();
    } catch (error) {
      console.error('Error refreshing leaderboard:', error);
      alert('Failed to refresh leaderboard. Please try again.');
    }
  });

  submitButton.addEventListener('click', async () => {
    const nameInput = document.getElementById('nameInput').value;
    const scoreInput = parseFloat(document.getElementById('scoreInput').value);

    if (!nameInput || Number.isNaN(scoreInput)) {
      alert('Please enter a valid name and score.');
      return;
    }

    // Call the API to add the score
    try {
      await addScoreToAPI(nameInput, scoreInput);
      // After successfully adding the score, refresh the leaderboard
      await renderLeaderboard();
      // Clear input fields
      document.getElementById('nameInput').value = '';
      document.getElementById('scoreInput').value = '';
    } catch (error) {
      console.error('Error adding score:', error);
      alert('Error adding score. Please try again.');
    }
  });
});
