import React from 'react'
import "./Jobs.css"
import pryamugolnik from "../assets/Прямоугольник3.svg"
import shadow from "../assets/shadow.png"
import sloygoPrint from "../assets/sloygoPrint.svg"
import goPrintOriginal from "../assets/goPrintOriginal.svg"
import inmore  from "../assets/inmore.svg"
import shadow2 from "../assets/shadowTwo.png"
import tableTwoTwo from "../assets/tableTwoTwo.svg"
import table1pryamogolnik from "../assets/table1Pryamogolnik.svg"
import tableThree1 from "../assets/tableThree1.png"
import tableTree2 from "../assets/tableThree2.svg"
import tableThree3 from "../assets/tableThree3.svg"
import tableThree4 from "../assets/tableThree4.svg"

const Jobs = ({id}) => {
    return (
        <>
            <div className="bootstrap__table" id={id}>
                <div className="bootstrap__tableLeft">
                    <div className="bootstrap__tableLineOne"></div>
                    <div className="bootstrap__tableLineOne"></div>
                    <div className="bootstrap__tableLineOne"></div>
                    <div className="bootstrap__tableLineOne"></div>
                    <div className="bootstrap__tableLineOne"></div>
                    <div className="bootstrap__tableLineOne"></div>
                    <div className="bootstrap__tableLineOne"></div>
                    <img src={shadow} className="icon2"/>
                    <img src={table1pryamogolnik} className="icon"/>
                    <img src={sloygoPrint} className="icon3"/>
                    <img src={goPrintOriginal} className="icon4"/>
                </div>
                <div className="bootstrap__tableRight">
                    <div className="bootstrap__tableLineOne"></div>
                    <div className="bootstrap__tableLineOne"></div>
                    <div className="bootstrap__tableLineOne"></div>
                    <div className="bootstrap__tableLineOne"></div>
                    <div className="bootstrap__tableLineOne"></div>
                    <div className="bootstrap__tableRightInfo">
                        <h1 className="bootstrap__tableTitle bootstrap__marginTop" style={{ marginBottom: "23px"}}>
                            Project name
                        </h1>
                        <p className="bootstrap__tableText" style={{marginBottom: "90px"}}>No matter what type of your
                            work you do, NMS customized
                            software development will fulfill your needs. No matter
                            what type of your work you do, NMS customized software
                            development will fulfill your needstjxfyk uirtftyityerytyt.
                            software development will fulfill your needs. No matter
                            what type of your work you do, NMS customized software
                            development will fulfill your needstjxfyk uirtftyityerytyt.</p>
                        <h1 className="bootstrap__tableTwoTitle">
                            Design, UX, UI, Java
                            Web, Logo, Brend
                        </h1>
                    </div>
                </div>
            </div>


            <div className="bootstrap__tableTwo">
                <div className="bootstrap__tableTwoLeft">
                    <div className="bootstrap__tableLineTwo"></div>
                    <div className="bootstrap__tableLineTwo"></div>
                    <div className="bootstrap__tableLineTwo"></div>
                    <div className="bootstrap__tableLineTwo"></div>
                    <div className="bootstrap__tableLineTwo"></div>
                    <div className="bootstrap__tableTwoLeftInfo">
                        <h1 className="bootstrap__tableTitle" style={{marginTop: "180px", marginBottom: "23px"}}>
                            Project name
                        </h1>
                        <p className="bootstrap__tableText" style={{marginBottom: "90px"}}>
                            No matter what type of your work you do, NMS customized
                            software development will fulfill your needs. No matter
                            what type of your work you do, NMS customized software
                            development will fulfill your needstjxfyk uirtftyityerytyt.
                            software development will fulfill your needs. No matter
                            what type of your work you do, NMS customized software
                            development will fulfill your needstjxfyk uirtftyityerytyt.
                        </p>
                        <h1 className="bootstrap__tableTwoTitle">
                            Dev, Design, UX
                            Java, UI
                        </h1>
                    </div>
                </div>
                <div className="bootstrap__tableLeft">
                    <div className="bootstrap__tableLineTwo"></div>
                    <div className="bootstrap__tableLineTwo"></div>
                    <div className="bootstrap__tableLineTwo"></div>
                    <div className="bootstrap__tableLineTwo"></div>
                    <div className="bootstrap__tableLineTwo"></div>
                    <div className="bootstrap__tableLineTwo"></div>
                    <div className="bootstrap__tableLineTwo"></div>
                    <img src={shadow2} className="iconTableTwo"/>
                    <img src={tableTwoTwo} className="icon2TableTwo"/>
                    <img src={inmore} className="icon3TableTwo"/>
                </div>
            </div>


            <div className="bootstrap__table">
                <div className="bootstrap__tableLeft">
                    <div className="bootstrap__tableLineThree"></div>
                    <div className="bootstrap__tableLineThree"></div>
                    <div className="bootstrap__tableLineThree"></div>
                    <div className="bootstrap__tableLineThree"></div>
                    <div className="bootstrap__tableLineThree"></div>
                    <div className="bootstrap__tableLineThree"></div>
                    <div className="bootstrap__tableLineThree"></div>
                    <img src={tableThree1} className="iconTableThree"/>
                    <img src={tableTree2} className="icon2TableThree"/>
                    <img src={tableThree3} className="icon3TableThree"/>
                    <img src={tableThree4} className="icon4TableThree"/>
                </div>
                <div className="bootstrap__tableRight">
                    <div className="bootstrap__tableLineThree"></div>
                    <div className="bootstrap__tableLineThree"></div>
                    <div className="bootstrap__tableLineThree"></div>
                    <div className="bootstrap__tableLineThree"></div>
                    <div className="bootstrap__tableLineThree"></div>
                    <div className="bootstrap__tableRightInfo">
                        <h1 className="bootstrap__tableTitle" style={{marginTop: "180px", marginBottom: "23px"}}>
                            Project name
                        </h1>
                        <p className="bootstrap__tableText" style={{marginBottom: "90px"}}>
                            No matter what type of your work you do, NMS customized
                            software development will fulfill your needs. No matter
                            what type of your work you do, NMS customized software
                            development will fulfill your needstjxfyk uirtftyityerytyt.
                            software development will fulfill your needs. No matter
                            what type of your work you do, NMS customized software
                            development will fulfill your needstjxfyk uirtftyityerytyt.
                        </p>
                        <h1 className="bootstrap__tableTwoTitle">
                            Dev, Design, UX
                            Java, UI
                        </h1>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Jobs
