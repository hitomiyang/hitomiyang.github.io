import React from 'react';

const CardFooter = ({ inputValue }) => {
    let colors = {}
    let { title, bgColors } = colors;

    if (!inputValue) {
        title = '---';
        bgColors = "!bg-neutral-400";
    } else if (inputValue < 15) {
        title = 'SLOW';
        bgColors = "!bg-red-400";
    } else if (inputValue < 40) {
        title = "GOOD";
        bgColors = "!bg-sky-400";
    } else if (inputValue >= 40) {
        title = "FAST";
        bgColors = "!bg-green-400";
    }


    return (
        <div className={`card-footer ${bgColors}`}>{title}</div>
    );
}

// const CardFooter = (props) => {
//     const { inputValue } = props;
//     console.log(props);
//     return (
//         <div className={`card-footer ${inputValue}`}>FAST</div>
//     );
// }

export default CardFooter;
