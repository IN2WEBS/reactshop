import React from 'react';
import IconBack from '../assets/gobackarrow.svg';
import {Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            {props.showHomeLink && <Link to="/"><img src={IconBack} alt=""/>Home</Link>}
            {props.headerTitle}
        </header>
    );
};

export default Header;