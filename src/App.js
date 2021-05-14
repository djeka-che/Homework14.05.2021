import React from "react";
import "./index.css";
import Small from './Small'
import Large from './Large'

function ParentBlock() {

    const Num = 50

    return (

        <div className='App'>
            {Num < 50 ? <Small/> : <Large/>}

            {Num < 50 ? console.log(<Small/>) : console.log(<Large/>)}
        </div>

    )

}


export default ParentBlock


/*function SomeBlock()
{
    const dark = true;

    const someBlock = this;
    return (
        <div className="dark">
            {dark === true ? <div className={'dark'}>Hello, ternary operator!</div> :
                <div className={'light'}>Hello, ternary operator!</div>}
        </div>
    );

}*/

/*export default SomeBlock*/