import { useState } from "react";

export const Home = () => {
  const [inputStudyResultTitle, setInputStudyResultTitle] = useState("");
  const [inputStudyResultTime, setInputStudyResultTime] = useState(0);
  const [totalStudyTime, setTotalStudyTime] = useState(0);

  // const records = [
  //   { title: "勉強の記録1", time: 1 },
  //   { title: "勉強の記録2", time: 3 },
  //   { title: "勉強の記録3", time: 5 },
  // ];
  const [records, setRecords] = useState([]);
  const [error, setError] = useState("");

  console.log(inputStudyResultTime);
  console.log(typeof inputStudyResultTime);

  const onChaneInputText = (e) => setInputStudyResultTitle(e.target.value);
  const onChaneInputTime = (e) => setInputStudyResultTime(e.target.value);

  const submitStudyResult = () => {
    if (inputStudyResultTitle === "" || inputStudyResultTime === 0 || inputStudyResultTime === "") {
      setError(true);
      return;
    }
    setError(false);

    const newRecords = [...records, { title: inputStudyResultTitle, time: inputStudyResultTime }];
    setRecords(newRecords);
    setInputStudyResultTitle("");
    setInputStudyResultTime(0);
    setTotalStudyTime(newRecords.reduce((accumulator, record) => accumulator + parseInt(record.time), 0));
  };

  return (
    <>
      <div>
        <h1>学習記録一覧</h1>
        <div>
          <label id="study-input">学習内容</label>
          <input value={inputStudyResultTitle} for="tudy-input" type="text" onChange={onChaneInputText} />
        </div>
        <div>
          <label id="study-input">学習時間</label>
          <input value={inputStudyResultTime} for="tudy-input" type="number" onChange={onChaneInputTime} />
        </div>
        <div>
          <p>入力されている内容: {inputStudyResultTitle}</p>
        </div>
        <div>
          <p>入力されている時間: {inputStudyResultTime}時間</p>
        </div>
        {records.map((data) => (
          <p>{`${data.title} ${data.time}時間`} </p>
        ))}
        <div>
          <button onClick={submitStudyResult}>登録</button>
        </div>
        {error && (
          <div>
            <p>入力されていない項目があります</p>
          </div>
        )}
        <div>
          <p>合計時間: {totalStudyTime} /1000(h)</p>
        </div>
      </div>
    </>
  );
};
