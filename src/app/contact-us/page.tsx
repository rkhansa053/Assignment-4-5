import Header from "../components/header";
import styles from "./page.module.css"

export default function Contact() {
    return(
        <div className= {styles.formBackground}>
            <Header/>
            <h1>For Contact:</h1>
            <form action= "/action.php">
                <input type="text" placeholder="Enter your name"></input>
                <br/>
                <br/>
                <input type="text" placeholder="Enter your email"></input>
                <br/>
                <br/>
                <textarea name="Your Question" placeholder="Ask whatever you want"></textarea>
            </form>
        </div>
    )
}

