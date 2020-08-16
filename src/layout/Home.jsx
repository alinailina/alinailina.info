import React from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";

// Styles
import css from "./css/Home.module.scss";

const Home = () => {
  return (
    <div className={css.container}>
      <div>
        <img
          src={require("../assets/hero.jpg")}
          alt="finger-tapping-lightning"
        />
      </div>
      <section>
        <div>
          <h1>Alina Ilina</h1>
          <h2>
            {" "}
            Web and mobile apps <br />
            with a touch of <span>awe(some)</span>
          </h2>

          <div>
            {" "}
            <a href="mailto:ai.foreach@gmail.com?subject=App request for Alina Ilina">
              <input type="submit" value="Request app" />
            </a>
            <AnchorLink href="#hi">Learn more</AnchorLink>
          </div>
        </div>
      </section>

      <section id="hi">
        <h3>Hello,</h3>
        <div>
          <p>
            My name is Alina Ilina. I'm a Web Developer & UI Imagineer, based in
            Helsinki, Finland. I make <span>clean</span>,{" "}
            <span>predictable</span> and <span>simply awesome</span> user
            interfaces for web and mobile apps that meet high standards for
            usability, and scale.
          </p>
          <a href="/about">Read full story</a>
        </div>
      </section>

      {/* <section className="bottom-nav">
        <div>
          <Link to="/portfolio">My works</Link>
        </div>
        <div>
          <Link to="/faq">FAQs</Link>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
