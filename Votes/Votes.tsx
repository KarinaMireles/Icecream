import React, { useState } from "react";
import "./Votes.css";

function Votes() {
  const [votes, setVotes] = useState({
    vanilla: 0,
    chocolate: 0,
    strawberry: 0,
  });

  const totalVotes = Object.values(votes).reduce((acc, curr) => acc + curr, 0);

  const voteFor = (flavor) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [flavor]: prevVotes[flavor] + 1,
    }));
  };

  return (
    <div className="votes">
      {Object.entries(votes).map(
        ([flavor, count]) =>
          count > 0 && (
            <div key={flavor}>
              <button onClick={() => voteFor(flavor)}>{flavor}</button>
              <div>
                {count} votes ({Math.round((count / totalVotes) * 100)}%)
              </div>
              <div
                className="bar"
                style={{ width: `${(count / totalVotes) * 100}%` }}
              ></div>
            </div>
          )
      )}
      {totalVotes === 0 && <div>No votes yet.</div>}
    </div>
  );
}

export default Votes;
