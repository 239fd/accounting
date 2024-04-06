import React  from 'react';
import boxesImage from "./boxes.png";
import cssProperties from "./Home.css"


function Home() {
    return (
        <div style={cssProperties}>
            <div className="card border-light  mb-3">
                <div className="row g-10">
                    <div className="col-md-4">
                        <img src={boxesImage} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title" align="left">Добро пожаловать на страницу веб-приложения
                                Accounting </h5>

                        </div>
                    </div>
                </div>
            </div>
            <div className="text">
                <p className="card-text-1" style={cssProperties}>Мы представляем вам передовое программное средство
                    автоматизации основных бизнес-процессов учета складской логистики. Accounting разработан для
                    упрощения и оптимизации учета, контроля и управления вашим складом, обеспечивая эффективность и
                    точность в каждом шаге вашей логистической цепи.
                </p>

                <p className="card-text-2" style={cssProperties}>
                    Не откладывайте автоматизацию и оптимизацию вашего учета складской логистики на потом.
                    Присоединяйтесь к нам и дайте Accounting возможность стать надежным партнером для вашего
                    бизнеса!
                </p>
            </div>
        </div>

)
}

export default Home;