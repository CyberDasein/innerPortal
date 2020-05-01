import React from "react";
import img from "../img/unnamed.jpg"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  img: {
   maxWidth: 320
  }
});

export const About = () => {
  const classes = useStyles();
  return (
    <>
        <div className="col-12 mb-5">
          <div className="text-center">
            <h2>Внутренний портал для сотрудников компаний</h2>
            <h3>Краткое описание проекта:</h3>
          </div>
        </div>

        <div className="col-12 mb-3 col-md-4">
            <img className={classes.img} src={img} alt=""/>
        </div>
        <div className="col-8 d-flex">
            <p>
              Приложение создано с помощью create-react-app, в качестве state management использована бибилиотека Redux. В некоторых компонентах задействованы React Hooks. <br/>
              В настоящее время присутствуют 2 основных страницы - чат и рубрика задаваемых вопросов. В чате можно удалять сообщения и прикреплять к ним смайлики,
              реализован preloader(крутилка) для имитации запросов к серверу. В рубрике вопросов можно добавлять вопросы и удалять их соответственно. (Планируется добавить возможность редактирования) <br/>
              Для визуализации использована библиотека компонентов Material Ui, Bootstrap и Styled components.
          </p>
  
        </div>
    </>
  );
};
export default About;
