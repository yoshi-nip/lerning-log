import { useState } from "react";
import { InputOfStudyResultTitle } from "../components/input/inputOfStudyResultTitle";
import { InputOfStudyResultTime } from "../components/input/InputOfStudyResultTime";
import { DisplayInputStudyTitle } from "../components/display/DisplayInputStudyTitle";
import { DisplayInputStudyTime } from "../components/display/DisplayInputStudyTime";
import { StudyResultSubmitButton } from "../components/button/StudyResultSubmitButton";
import { DisplayTotalStudyTime } from "../components/display/DisplayTotalStudyTime";
import { ErrorMessage } from "../components/error/ErrorMessage";
import { DisplayStydyResultList } from "../components/display/DisplayStydyResultList";
export const Home = () => {
  const [inputStudyResultTitle, setInputStudyResultTitle] = useState("");
  const [inputStudyResultTime, setInputStudyResultTime] = useState(0);
  const [totalStudyTime, setTotalStudyTime] = useState(0);
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
        <InputOfStudyResultTitle inputStudyResultTitle={inputStudyResultTitle} onChaneInputText={onChaneInputText} />
        <InputOfStudyResultTime inputStudyResultTime={inputStudyResultTime} onChaneInputTime={onChaneInputTime} />
        <DisplayInputStudyTitle inputStudyResultTitle={inputStudyResultTitle} />
        <DisplayInputStudyTime inputStudyResultTime={inputStudyResultTime} />
        <DisplayStydyResultList records={records} />
        <ErrorMessage error={error} />
        <StudyResultSubmitButton submitStudyResult={submitStudyResult} />
        <DisplayTotalStudyTime totalStudyTime={totalStudyTime} />
      </div>
    </>
  );
};
