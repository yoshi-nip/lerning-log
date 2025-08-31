export const InputOfStudyResultTime = (props) => {
  const { inputStudyResultTime, onChaneInputTime } = props;
  return (
    <div>
      <label id="study-input">学習時間</label>
      <input value={inputStudyResultTime} for="tudy-input" type="number" onChange={onChaneInputTime} />
    </div>
  );
};
