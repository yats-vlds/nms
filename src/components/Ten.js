import React from 'react'
import background from "../assets/back.svg"
import "./Ten.css"
import tenYog from "../assets/tenYog.png"


const Ten = () => {
    return (
        <>
            <div className="ten">
                <div className="tenSloy">
                    <div className="row ten__content">
                        <div className="col-6 ten__contentLeft">
                            <h1 className="ten__contentLeftTitle display-3">
                                More than 10 years
                                in the game!</h1>
                        </div>
                        <div className="col-6 ten__contentRight">

                        </div>
                    </div>
                    {/*<img src={tenYog} className="ten__yog"/>*/}
                    <img src={background} className="ten__img"/>
                </div>
            </div>
            {/*<div className="ellipse">*/}

            {/*</div>*/}
        </>
    )
}

export default Ten
