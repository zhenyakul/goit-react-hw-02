import css from "./Feedback.module.css";
const Feedback = ({
  stats: { good, neutral, bad },
  totalFeedback,
  positiveFeedback,
}) => {
  return (
    <ul className={css.list}>
      <li className={css.listItem}>
        <p>Good: {good}</p>
      </li>
      <li className={css.listItem}>
        <p>Neutral: {neutral}</p>
      </li>
      <li className={css.listItem}>
        <p>Bad: {bad}</p>
      </li>
      <li className={css.listItem}>
        <p>Total: {totalFeedback}</p>
      </li>
      <li className={css.listItem}>
        <p>Positive: {positiveFeedback}%</p>
      </li>
    </ul>
  );
};

export default Feedback;
