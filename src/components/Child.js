import React from 'react'


const Child = ({value,setItems}) =>{

    function handleClick(e){
     let clickedButton = e.target;
     clickedButton.classList.add("none");
    }


    return(
        <div>
           
           <h3>Child Component</h3>

            {
                value.map((val,index) =>(
                    <ul>
                        <li key={index}>{val}
                            <button onClick={handleClick}>Complete</button>
                        </li>
                    </ul>
                ))
            }

        </div>
    )
}


export default Child;