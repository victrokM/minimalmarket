import React from "react";
import "../css/Home.css";
import Card from "../components/Card";

function Home() {
  return (
    <>
      <div className="container_home">
        <div className="container_home_text">
          <div className="title">
            <h1>Home</h1>
          </div>
          <div className="subtitle">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              explicabo maiores, voluptate eius aut placeat voluptas, sequi
              asperiores eveniet tenetur voluptatibus! Quaerat quasi pariatur
              facilis corporis porro praesentium neque atque.
            </p>
          </div>
        </div>
        <div className="imagen_home">
          <img src="necesito.gif" alt="" />
        </div>
      </div>

      <section className="buy">
        <div className="buy_text">
          <h1>buy</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            maiores quasi perspiciatis quibusdam accusamus cumque deserunt
            minima totam tempore quisquam?
          </p>
        </div>

        <div className="container_card">


          <Card imagen="shopping (1).svg" />
          <Card imagen="shopping.svg" />
          <Card imagen="foot-shake.svg" />
          <Card imagen="bald-man.svg" />

          
        </div>
      </section>
    </>
  );
}

export default Home;
