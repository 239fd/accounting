import React  from 'react';

function Manager(){
    return (
        <div>
            <p className="Navigation">Навигация</p>
            <ul className=" list-unstyled">
                <li><a href="/manager/timeinfo" className="link-dark rounded">Получить информацию за определнный период</a></li>
                <li><a href="/manager/goodinfo" className="link-dark rounded">Получить информацию по определнному товару</a></li>
                <li><a href="/manager/fullinfo" className="link-dark rounded">Получить общую информацию</a></li></ul>
        </div>
    )
}

export default Manager;