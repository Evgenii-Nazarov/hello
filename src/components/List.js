import React from 'react';


function List(props) {
    const {list = [], listLength, moveUp, moveDown} = props;

    return (
        <ul id='location-list' data-testid='location-list'>
            {list.map((el, i) => {
                return (
                    <li key={el} data-testid={`location-${i}`}>
                        <p data-testid={`location`}>{el}</p>

                        {i !== 0 && <button data-testid={`up-button`} onClick={() => moveUp(i)}>↑</button>}

                        {i !== listLength - 1 &&
                        <button data-testid={`down-button`} onClick={() => moveDown(i)}>↓</button>}

                    </li>
                )
            })}
        </ul>
    )
}

export default List