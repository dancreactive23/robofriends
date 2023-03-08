import React from 'react';

const Scroll = (props) =>{
    return(
        <div style={{overflowY:'scroll',border: '1px solid rgba(0,128,128,0.5)', height:'100vh'}}>
            {props.children}
        </div>
    );
}

export default Scroll;