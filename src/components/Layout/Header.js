import { Fragment } from "react";
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header =  (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <button>Cart</button>
        </header>
        <div>
            <img src={mealsImage} className={classes['main-image']}/>
        </div>
    </Fragment>
}
export default Header;