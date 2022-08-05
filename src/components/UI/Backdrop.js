import React from 'react';
import ReactDom from 'react-dom';
import BackdropContent from './BackdropContent';

const Backdrop = props => {
    return (
        <React.Fragment>
        {ReactDom.createPortal(<BackdropContent onClick={props.onClick}>{props.children}</BackdropContent>, document.getElementById("backdrop-root"))}
        </React.Fragment>
    )
    
}

export default Backdrop