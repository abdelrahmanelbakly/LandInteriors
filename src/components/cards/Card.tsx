import "./Card.css";
interface Props {
  imgUrl: string;
  title: string;
  description?: string;
}
const Card = ({ imgUrl, title, description }: Props) => {
  return (
    <div className='card'>
      <img src={imgUrl} alt={title} />
      {description ? (
        <div className='blogs'>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      ) : (
        <div className='what'>
          <h4>{title}</h4>
        </div>
      )}
    </div>
  );
};
export default Card;
