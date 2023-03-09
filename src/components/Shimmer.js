const Shimmer = () => {
  return (
    <div className='restaurant-list  bg-slate-200 w-56 h-56' data-testid="shimmer">
      {Array(10)
        .fill('')
        .map((e, index) => (
          <div key={index} className='shimmer-card'></div>
        ))}
    </div>
  );
};

export default Shimmer;
