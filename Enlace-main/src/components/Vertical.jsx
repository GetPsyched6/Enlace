import styles from "./vertical.module.css";
import Nav from "./Navbar.jsx";
import Body from "./body.jsx";

const Vertical = () => {
    return (
        <div className = {styles.VerticalWrapper}>
            <Nav/>
            <Body/>
            <div className = {styles.page}>Vertical - 1</div>
            <div className = {styles.page}>Vertical - 2</div>
            <div className = {styles.page}>Vertical - 3</div>
            <div className = {styles.page}>Vertical - 4</div>
        </div>
    )
}

export default Vertical
