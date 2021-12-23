import { Link } from 'react-router-dom';

const ViewCollectionBtn = (props) => {
  const { bikes, data } = props;
  return (
    <Link
      to={`/bikes/${data.type}_collection`}
      style={{ textDecoration: 'none' }}
      state={{ data: data, bikes: bikes }}
      className="view-collection-btn"
    >
      <p>View Collection</p>
    </Link>
  );
};

export default ViewCollectionBtn;
