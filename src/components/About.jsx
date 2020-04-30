import React from "react";
import img from "../img/unnamed.jpg"

export const About = () => {
  return (
    <>
        <div className="col-12 mb-5">
          <div className="text-center">
            <h2>Внутренний портал для сотрудников компаний</h2>
          </div>
        </div>

        <div className="col-6">
            <img width='500' src={img} alt=""/>
        </div>
        <div className="col-6 d-flex align-items-center">
            <p >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit asperiores repellat nemo soluta libero consequuntur
              autem expedita, earum possimus enim architecto iusto voluptatem
              deleniti officiis sed dicta aperiam itaque iste maxime quis? Ea
              ipsa voluptas cumque ratione facilis illo maxime velit saepe ab
              beatae consequatur aspernatur a, consectetur quia veritatis?
              Perspiciatis quibusdam eos vero beatae assumenda. Neque tempore
              in, sit ex quod adipisci explicabo, culpa voluptatem commodi
              suscipit necessitatibus eligendi molestiae blanditiis dolores
              dolore fugiat ducimus accusamus dolorum? Qui itaque optio
              voluptatibus nobis! Consectetur accusantium ab dolore obcaecati
              ipsa laboriosam amet non, voluptatibus unde perferendis nesciunt
              eligendi fuga placeat reprehenderit.
          </p>
        </div>
    </>
  );
};
export default About;
