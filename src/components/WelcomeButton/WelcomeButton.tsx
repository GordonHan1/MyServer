import classes from "./WelcomeButton.module.css";


export function WelcomeButton (){
    return (
        <div className={classes.welcomebuttondiv}>
        <button className={classes.welcomebutton}>
        About Me
        </button>
        </div>
        
    );
}