export const ErrorMessage = ({ error }) => {
  return (
    <>
      {error && (
        <div>
          <p>入力されていない項目があります</p>
        </div>
      )}
    </>
  );
};
