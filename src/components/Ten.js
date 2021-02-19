import React from 'react'
import background from "../assets/back.svg"
import "./Ten.css"
import tenYog from "../assets/tenYog.png"


const Ten = () => {
    return (
        <>
            <div className="ten">
                <div className="tenSloy">
                    {/*<div className="ten__content">*/}
                    {/*    <div className="ten__contentLeft">*/}
                    {/*        <h1 className="ten__contentLeftTitle">*/}
                    {/*            More than 10 years*/}
                    {/*            in the game!</h1>*/}
                    {/*    </div>*/}
                    {/*    <div className="ten__contentRight">*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <img src={background} className="ten__img"/>
                </div>
            </div>
            {/*<img src={tenYog} className="ten__yog"/>*/}
            {/*<div className="ellipse">*/}

            {/*</div>*/}
        </>
    )
}

export default Ten
