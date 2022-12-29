//import classes from './NavBar.module.css';
import s from './NavBar.module.css';



function NavBar() {
    return (<nav className={s.nav}>
        <div>
            <a> Profile </a>
        </div>

        <div className={`${s.item} ${s.active}`}>
            <a> Messages </a>
        </div>

        <div className={s.item}>
            <a> News </a>
        </div>

        <div className={s.item}>
            <a> Music </a>
        </div>
        <div className={s.item}>
            <a> Settings </a>
        </div>

    </nav>);
}
export default NavBar;