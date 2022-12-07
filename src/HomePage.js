import CardItem from "./Components/Card";
import UncontrolledExample from "./Components/Caroussel";
import { productsData } from "./ProductsData";

function HomePage() {
  return (
    <div>
      <UncontrolledExample />
      <div className="d-flex">
        {productsData.map((product, key) => (
          <CardItem
            key={key}
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
