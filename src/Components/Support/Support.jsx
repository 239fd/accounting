import React  from 'react';
import cssProperties from "./Support.css";

function Support() {
    return (

        <div style={cssProperties}>
            <h1 className="title">Поддержка</h1>
            <div className="support">
                <p className="head">
                    Контакты
                </p>
                <p className="list-1">
                    Контакный номер: +375291828130
                </p>
                <p className="list-2">
                        Telegram: @ac3321
                </p>
                <p className="list-3">
                    Потча: pavelkarliuk1@gmail.com
                </p>
            </div>
        </div>

    )
}



export default Support;