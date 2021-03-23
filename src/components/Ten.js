import React from 'react'
import tenBack from "../assets/tenBack.svg"
import "./Ten.css"
import tenYog from "../assets/tenYog.svg"
import {JsonLd} from "react-schemaorg";


const Ten = () => {
    const TenSchema = ({tenDataText}) => {
        return (
            <JsonLd
                item={{
                    "@context": "https://schema.org",
                    '@type': 'TenSchema',
                    title: tenDataText.title
                }}
            />
        )
    }
    const tenDataText = {
        title: "More than 10 years\n" +
            "                                    in the game!"
    }
    return (
        <>
            <img src={tenYog} className="ten__yog"/>
            <div className="ten">
                <div className="tenSloy">
                    <div className="ten__ROW">
                        <div className="row ten__content">
                            <div className="col-6 ten__contentLeft">
                                <TenSchema tenDataText={tenDataText}/>
                                <h1 className="ten__contentLeftTitle display-3">
                                    More than 10 years
                                    in the game!</h1>
                            </div>
                            <div className="col-6 ten__contentRight">

                            </div>
                        </div>
                    </div>
                    <img loading="lazy" src={tenBack} className="ten__img"/>
                </div>
                <div className="ellipse">
                </div>
            </div>
        </>
    )
}

export default Ten
