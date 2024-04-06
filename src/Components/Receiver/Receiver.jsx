import React  from 'react';
import cssProperties from "./Receiver.css"

function Receiver(){
    return(
        <div className="Main-page" style={cssProperties}>
            <div>
                <p className="Navigation">Навигация</p>
                <ul className=" list-unstyled">
                    <li><a href="/receiver/take" className="link-dark rounded">Принять товар</a></li>
                    <li><a href="/receiver/ship" className="link-dark rounded">Отгрузить товар</a></li>
                </ul>
            </div>
        </div>

    )

}

export default Receiver;