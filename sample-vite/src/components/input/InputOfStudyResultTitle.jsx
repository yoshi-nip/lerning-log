export const InputOfStudyResultTitle = (props) => {
  const { inputStudyResultTitle, onChaneInputText } = props;
  return (
    <div>
      <label id="study-input">学習内容</label>
      <input value={inputStudyResultTitle} for="tudy-input" type="text" onChange={onChaneInputText} />
    </div>
  );
};
