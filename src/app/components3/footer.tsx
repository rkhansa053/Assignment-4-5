import Link from "next/link"

export default function Footer() {
    return(
        <div className="footer">
            <ul className="footer-buttons">
            <Link href={"https://github.com/rkhansa053"}>
            <li>Github</li>
            </Link>


            <Link href={"https://www.linkedin.com/in/syeda-khansa-rahman-1882332ba/"}>
            <li>LinkedIn</li>
            </Link>
            </ul>
        </div>
    )
}