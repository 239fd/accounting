import React  from 'react';

function Storekeeper(){
    return (
        <div>
            <p className="Navigation">Навигация</p>
            <ul className=" list-unstyled">
                <li><a href="/storekeeper/take" className="link-dark rounded">Принять товар</a></li>
                <li><a href="/storekeeper/ship" className="link-dark rounded">Отгрузить товар</a></li>
            </ul>
        </div>
    )
}

export default Storekeeper;