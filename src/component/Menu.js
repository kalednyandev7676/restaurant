import React from "react";


const Menu = ({ menudata }) => {
    return (
        <>
            <section className="main-card-container">
                {
                    menudata.map((curEle, i) => {
                        return (
                            <div className="card-container" key={i}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number">{curEle.id}</span>
                                        <span className="card-author">{curEle.categary}</span>
                                        <h2 className="card-title">{curEle.menu}</h2>
                                        <hr></hr>
                                        <p>{curEle.discription}</p>
                                        <div className="card-read">Read</div>
                                    </div >
                                    <div className="allimg">
                                        <img src={curEle.image} alt="breakfast" />
                                        <span className="prise">prise--{curEle.prise}</span>
                                        <span className="card-tag">order now</span>
                                    </div>
                                </div>
                            </div>
                        )

                    })
                }
            </section>
        </>
    )
}
export default Menu;