import css from "./Options.module.css";

const Options = ({ onClickUpdate, onClickReset, totalFeedback }) => {
  return (
    <div className={css.container}>
      <button
        className={css.item}
        onClick={() => {
          onClickUpdate("good");
        }}
      >
        Good
      </button>
      <button
        className={css.item}
        onClick={() => {
          onClickUpdate("neutral");
        }}
      >
        Neutral
      </button>
      <button
        className={css.item}
        onClick={() => {
          onClickUpdate("bad");
        }}
      >
        Bad
      </button>
      {totalFeedback != 0 && (
        <button className={css.item} onClick={onClickReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
