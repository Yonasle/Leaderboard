const leaderboardData = [];

const renderLeaderboard = async () => {
  const leaderboardTable = document.getElementById('leaderboard').getElementsByTagName('tbody')[0];

  // Clear the existing table rows
  while (leaderboardTable.firstChild) {
    leaderboardTable.removeChild(leaderboardTable.firstChild);
  }

  try {
    // Fetch data from the API
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4y7IVkemOTTVg2fUdz/scores/');
    if (!response.ok) {
      throw new Error('Failed to fetch data from the API');
    }

    const data = await response.json();

    // Update leaderboardData with API data
    leaderboardData.length = 0;
    leaderboardData.push(...data.result);
  } catch (error) {
    console.error('Error fetching data from the API:', error);
    alert('Failed to fetch data from the API. Please try again.');
  }

  // Render the updated data
  leaderboardData.forEach((player) => {
    const row = leaderboardTable.insertRow();
    const nameCell = row.insertCell(0);
    const scoreCell = row.insertCell(1);

    nameCell.textContent = player.user;
    scoreCell.textContent = player.score;
  });
};

const addScoreToAPI = async (name, score) => {
  // Make a POST request to the API to add the score
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4y7IVkemOTTVg2fUdz/scores/';
  const data = { user: name, score };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to add score');
    }

    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    throw new Error(`Failed to add score: ${error.message}`);
  }
};

export { renderLeaderboard, addScoreToAPI };
