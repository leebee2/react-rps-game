import React from 'react';

const Box = (props) => {
    const { title, item, result } = props;

    let data;

    if (result !== "" && title === "컴퓨터" && result !== "비김") { 
        data = result === "승리" ? "패배" : "승리"
    } else {
        data = result;
    }

    const imgName = (data === "승리" ? "win" : data === "패배" ? "lose" : "tie");

    return (
        <div className='box'>
            <h1>{title}</h1>
            <img className={`item-img ${imgName}`} src={item && item.img} />
            <h2>{data}</h2>
        </div>
    );
};

export default Box;
