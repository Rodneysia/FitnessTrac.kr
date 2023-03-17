
import React from "react";
import { Link } from "react-router-dom";

export const Activities = ({ allActivities, error, setError, setAllActivities }) => {
  const handleActivityClick = async (activityId) => {
    try {
      const response = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/routines?activityId=${activityId}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  return (
    <div>
      {allActivities.map((activity) => {
        return (
          <div key={activity.id}>
            <h2>
              <Link to={`/activities/${activity.id}`} onClick={() => handleActivityClick(activity.id)}>
                {activity.name}
              </Link>
            </h2>
            <p>{activity.description}</p>
          </div>
        );
      })}
    </div>
  );
};

