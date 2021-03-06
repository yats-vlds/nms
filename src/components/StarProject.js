import React, {useState} from 'react'
import "./StarProject.css"
import background from "../assets/back.svg"
import iconDown from "../assets/iconDown.svg"
import vectorSmart from "../assets/vectorSmart.png"
import {Link} from "react-router-dom";


const StarProject = ({id}) => {
    const [ellipse, setEllipse] = useState(false)
    return (
        <div className="star__project container-fluid">
            <div className="container-fluid star__projectSloy" id={id}>
                <div className="row star__projectRowContent">
                    {/*<div className="col-6 star__projectRowContentLeft">*/}
                    {/*    <h1 className="star__projectLeftTitle"><Link to='/custom' className="link__starPorject">*/}
                    {/*        Custom SaaS <img className="iconDown img-fluid" src={iconDown}/> </Link></h1>*/}
                    {/*    <h1 className="star__projectLeftTitle"><Link to='/mobile-and-web' className="link__starPorject">*/}
                    {/*        Mobile and Web Development <img className="iconDown img-fluid"*/}
                    {/*                                 src={iconDown}/> </Link></h1>*/}
                    {/*    <h1 className="star__projectLeftTitle"><Link to='/ui-ux' className="link__starPorject">UI/UX*/}
                    {/*        Design <img className="iconDown img-fluid" src={iconDown}/> </Link></h1>*/}
                    {/*</div>*/}
                    {/*<div className="col-6 star__projectRowContentRight">*/}
                    {/*    <img src={vectorSmart} className="vectorSmart"/>*/}
                    {/*    <div className="btnStar">*/}
                    {/*        <div className="btnStar-twoSloy">*/}
                    {/*            <div className={ellipse ? "btnStar-threeSloyAfter" : "btnStar-threeSloyBefore"}>*/}
                    {/*                <div className={ellipse? "btnStar-fourSloyAfter" : "btnStar-fourSloyBefore" }>*/}
                    {/*                    <h6 className="btnStar-fourSloyTitle">*/}
                    {/*                        Start project*/}
                    {/*                    </h6>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className={ellipse ? "ellipse-btnStarAfter" : "ellipse-btnStarBefore"} onClick={() => setEllipse(!ellipse)}>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                <img src={background} alt="" className="star__imageBack"/>
            </div>
        </div>
    )
}

export default StarProject
