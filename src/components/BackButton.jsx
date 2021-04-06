export const BackButton = ({ history }) => {
  return (
    <button className="back-button" onClick={() => history.goBack()}></button>
  );
};
