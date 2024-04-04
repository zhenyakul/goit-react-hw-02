import "./App.css";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import { useEffect, useState } from "react";

function App() {
  const [stats, setStats] = useState(() => {
    const initStats = window.localStorage.getItem("stats");
    if (initStats != null) {
      return JSON.parse(initStats);
    } else {
      return { good: 0, neutral: 0, bad: 0 };
    }
  });

  useEffect(() => {
    window.localStorage.setItem("stats", JSON.stringify(stats));
  }, [stats]);

  const totalFeedback = stats.good + stats.neutral + stats.bad;
  const positiveFeedback = Math.round((stats.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    setStats({ ...stats, [feedbackType]: stats[feedbackType] + 1 });
  };
  const resetFeedback = () => {
    setStats({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
      <Description />
      <Options
        onClickUpdate={updateFeedback}
        onClickReset={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback == 0 ? (
        <Notification />
      ) : (
        <Feedback
          stats={stats}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
}

export default App;
