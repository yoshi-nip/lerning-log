export const DisplayStydyResultList = ({ records }) => {
  return (
    <>
      {records.map((data) => (
        <p key={data.title}>{`${data.title} ${data.time}時間`} </p>
      ))}
    </>
  );
};
