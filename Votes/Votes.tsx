import React, { useState } from "react";
import "./Votes.css"; // Import CSS for styling

const Votes = () => {
  const [votes, setVotes] = useState({
    Vanilla: 0,
    Chocolate: 0,
    Strawberry: 0,
  });
  const totalVotes = Object.values(votes).reduce(
    (total, count) => total + count,
    0
  );

  const handleVote = (flavor) => {
    const updatedVotes = { ...votes };
    updatedVotes[flavor]++;
    setVotes(updatedVotes);
  };

  return (
    <div className="votes">
      <h2>Votes</h2>
      {totalVotes === 0 ? (
        <p>No votes yet.</p>
      ) : (
        <div>
          {Object.entries(votes).map(([flavor, count]) => (
            <div key={flavor} className="vote-item">
              <button onClick={() => handleVote(flavor)}>{flavor}</button>
              <div
                className="vote-bar"
                style={{ width: `${(count / totalVotes) * 100}%` }}
              >
                {count} ({((count / totalVotes) * 100).toFixed(2)}%)
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Votes;
