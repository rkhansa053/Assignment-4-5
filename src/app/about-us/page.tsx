import Head from "next/head";
import Header from "../components/header";
import styles from "./page.module.css";

export default function About() {
    return(
        <div>
            <Header/>
       
        <div className={styles.containerBackground}>
        <div 
            className={`${styles.card} w-[99vw] sm:w-[500px] flex justify-center items-center`}>
        <div className="w-4/5 flex justify-between items-center flex-col sm:flex-row">
        <div>
            <h1 className="text-[35px] font-bold text">Hey, I am Syeda Khansa Rahman.</h1>
            <br/>
            <p>This website is build by me. This shows you all about our Pakiatani culture, it's nationality and beauty.
            </p>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}
