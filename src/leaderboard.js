const leaderboardData = [
  { name: 'Player 1', score: 100 },
  { name: 'Player 2', score: 20 },
  { name: 'Player 3', score: 50 },
  { name: 'Player 4', score: 78 },
  { name: 'Player 5', score: 125 },
  { name: 'Player 6', score: 77 },
  { name: 'Player 7', score: 42 },
];

function renderLeaderboard() {
  const leaderboardTable = document.getElementById('leaderboard').getElementsByTagName('tbody')[0];

  leaderboardData.forEach((player) => {
    const row = leaderboardTable.insertRow();
    const nameCell = row.insertCell(0);
    const scoreCell = row.insertCell(1);

    nameCell.textContent = player.name;
    scoreCell.textContent = player.score;
  });
}

export default renderLeaderboard;
