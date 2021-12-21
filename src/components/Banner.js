const Banner = (props) => {
  const { text, imgSrc } = props;
  const gradient = 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),';
  const bgSize = ' center/cover ';
  const data = gradient + bgSize + imgSrc;
  console.log(data);
  return (
    <div
      style={{ background: data, backgroundSize: 'cover' }}
      className="page-banner"
    >
      <h1>{text}</h1>
    </div>
  );
};

export default Banner;
