import { useState } from "react";

const RecentViews = ({ details_id = null }) => {
  let recentitems = localStorage.getItem("recentview") ? JSON.parse(localStorage.getItem("recentview")) : []
  // console.log(typeof recentitems, 'rec_pr')
  recentitems.sort().reverse()
  return (
    <div className="flex flex-row">
      <div>Recent View</div>
      {Object.keys(recentitems).map((i) => (
        <li className="travelcompany-input" key={i}>
          <span className="input-label">Name: {recentitems[i].name} </span>
        </li>
      ))}
    </div>
  );
};

export default RecentViews;
