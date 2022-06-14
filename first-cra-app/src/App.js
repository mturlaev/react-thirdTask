import React from "react";
import Main from "./components/Product/Container";
import Header from "./components/Header/Header";
import Text from "./components/NavBar/Text";
import css from "../src/App.module.css";

const data = [
  {
    image:
      "https://www.tradeinn.com/f/13787/137870852/apple-macbook-pro-13-m1-8gb-512gb-ssd-%D0%9D%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA.jpg",
    price: "97000р",
    name: "MacBook",
  },
  {
    image: "https://uralcases.ru/wp-content/uploads/2020/11/i12-pro-blue.jpg",
    price: "89999р",
    name: "IPhone",
  },
  {
    image:
      "https://mototeka.su/upload/iblock/bb9/bb9b535db3231bdc9164695ae06fd0eb.jpg",
    price: "58950р",
    name: "Скутер",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJzxq16dbwZcLpkPpJHoZ1Ko1ftIbvFlgoww&usqp=CAU",
    price: "12000",
    name: "Монитор Samsung",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHFjb9XxlTRuArH3EATWL9cFI0SBvw8SlW2g&usqp=CAU",
    price: "500р",
    name: "Респераторная маска",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTByX8rIGGC1YVNrGNhqsoRvK6abGTldyo34w&usqp=CAU",
    price: "75000р",
    name: "Стиральная машина",
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={css.roditel}>
        <Text />
        <div className={css.main__container}>
          {data.map((item) => (
            <Main image={item.image} price={item.price} name={item.name} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
