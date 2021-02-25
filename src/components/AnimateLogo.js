import React from "react"
import "./AnimateLogo.css"
import ct from "../assets/logo/CT.svg"
import danfoss from "../assets/logo/danfoss.svg"
import goPrint from "../assets/logo/go_print.svg"
import inMore from "../assets/logo/InMore.svg"
import listery from "../assets/logo/Listery.svg"
import ukt from "../assets/logo/UKT.svg"
import total from "../assets/logo/Total.svg"
import lactalis from "../assets/logo/lactalis.svg"
import karcher from "../assets/karher.svg"
import lactel from "../assets/lactel.png"


const AnimateLogo = () => {
    return <div className="logo-icons">
        <img src={karcher} className="logo__style logo__karcher"/>
        <img src={lactel} className="logo__style" />
        {/*<img src={danfoss} className="logo__style"/>*/}
        {/*<img src={ct} className="logo__style"/>*/}
        {/*<img src={goPrint} className="logo__style"/>*/}
        {/*<img src={inMore} className="logo__style" />*/}
        {/*<img src={listery} className="logo__style" />*/}
        {/*<img src={ukt} className="logo__style"/>*/}
        {/*<img src={total} className="logo__style"/>*/}
        {/*<img src={lactalis} className="logo__style"/>*/}
    </div>
}

export default AnimateLogo