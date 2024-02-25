import "../components/PricingCard.css"
const PricingCard: React.FC<{
  title: string;
  price: string;
  description: string;
  features: string[];
  className?: string 
}> = (props) => {
  return (
    <div className={`card ${props?.className}`}>
      <p className="title">{props.title}</p>
      <h4 className="price">{props.price}</h4>
      <p className="description">{props.description}</p>

      <ul>
        {props.features.map((feature) => {
          return (
            <li key={feature}>
              <i className="bi bi-check2-circle"></i> {feature}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PricingCard;
