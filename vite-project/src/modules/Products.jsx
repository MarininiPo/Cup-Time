import { Product } from "./Product"

const products = [
    {
        id: 1,
        title: "Кокосовая матча",
        image: "./img/photo-2.jpg",
        price: 390,
    },
    {
        id: 2,
        title: "Зеленый индонезийский чай",
        image: "./img/photo-1.jpg",
        price: 340,
    },
    {
        id: 3,
        title: "Черный чай из Эфиопии",
        image: "./img/photo.jpg",
        price: 360,
    },
    {
        id: 4,
        title: "Черный чай из Калифорнии",
        image: "./img/1.jpg",
        price: 360,
    },
    {
        id: 5,
        title: "Органическая веганская матча",
        image: "./img/2.jpg",
        price: 400,
    },
    {
        id: 6,
        title: "Чай черный Лакандона",
        image: "./img/3.jpg",
        price: 390,
    }
]

export const Products = () => {
    return (
        <section className="products">
        <div className="container">
          <h2 className="products__title">Чай</h2>

          <ul className="products__list">
            {products.map((item) => (<Product key={item.id}  data={item} />))}
          </ul>
        </div>
      </section>
    )
}