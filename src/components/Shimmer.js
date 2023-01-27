const Shimmer = () => {
  return (
    <div className="restaurent-list">
      {Array(10)
        .fill("")
        .map((e, index) => {
          return <div key={index} className="shimmer-card"></div>;
        })}
    </div>
  );
};

export default Shimmer;
