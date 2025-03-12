const Cards = () => {
  const products = [
    {
      title: 'Pastel de nata clásico',
      description: 'Disfruta de la receta tradicional con una crema suave y hojaldre crujiente.',
      imageUrl: "/src/img/pasteis.png",
    },
    {
      title: 'Pastel de nata de chocolate',
      description: 'Una deliciosa variante con un toque de chocolate para los más golosos.',
      imageUrl: "/src/img/pasteis.png",
    },
    {
      title: 'Pastel de nata de frutos rojos',
      description: 'Fusión perfecta entre la crema tradicional y el frescor de los frutos rojos.',
      imageUrl: "/src/img/pasteis.png",
    },
    {
      title: 'Pastel de nata de limón',
      description: 'Una opción refrescante con un sutil sabor a limón.',
      imageUrl: "/src/img/pasteis.png",
    },
  ];

  return (
    <div className="container my-4">
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-md-3">
            <div className="card shadow-sm">
              <img src={product.imageUrl} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <a href="#" className="btn btn-warning">Learn more...</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cards;
