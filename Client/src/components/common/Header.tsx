import { NavLink } from "react-router-dom"
import "./Header.css"

export default function Header(){
    return(
        <header>
            <NavLink to={"/Url"}><p className="brand-name">URL Shortener</p></NavLink>
        </header>
    )
}