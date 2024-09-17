import React, { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const ViewWeekly = () => {
  const [habits, setHabits] = useState(() => {
    const storedHabits = localStorage.getItem("habits");
    return storedHabits ? JSON.parse(storedHabits) : [];
  });

  const toggleStatus = (habitIndex, day) => {
    const updatedHabits = [...habits];
    updatedHabits[habitIndex].status[day] =
      !updatedHabits[habitIndex].status[day];
    setHabits(updatedHabits);
    localStorage.setItem("habits", JSON.stringify(updatedHabits));
  };

  const getPreviousDates = () => {
    const currentDate = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const previousDates = [];
    for (let i = 6; i >= 0; i--) {
      const prevDate = new Date(currentDate);
      prevDate.setDate(currentDate.getDate() - i);
      const dayOfWeek = days[prevDate.getDay()];
      const date = prevDate.getDate();
      const month = prevDate.getMonth() + 1;
      previousDates.push({ dayOfWeek, date, month });
    }
    return previousDates;
  };

  const previousDates = getPreviousDates();

  return (
    <div>
      <h4>Weekly Habits Progress:</h4>
      <table className="table table-bordered mt-5">
        <thead>
          <tr>
            <th className="bg-success text-white">Habit</th>
            {previousDates.map((date, index) => (
              <th className="bg-success text-white" key={index}>
                {date.dayOfWeek} - {date.date}/{date.month}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {habits.map((habit, habitIndex) => (
            <tr key={habitIndex}>
              <td>
                <h4>{habit.name}</h4>
                <small>{habit.description}</small>
              </td>
              {Object.keys(habit.status).map((day) => (
                <td
                  key={day}
                  className="text-center"
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleStatus(habitIndex, day)}
                >
                  {habit.status[day] ? (
                    <FaCheck
                      className="text-success"
                      title="Mark undone"
                      size={40}
                    />
                  ) : (
                    <FaTimes
                      className="text-danger"
                      title="Mark Done"
                      size={40}
                    />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewWeekly;
