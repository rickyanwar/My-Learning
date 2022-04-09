import React from 'react'
import ImageHero from 'assets/images/img-hero.png'
import ImageHero_ from 'assets/images/img-hero-frame.png'
import IconCities from 'assets/images/icons/ic_cities.png'
import IconTraveler from 'assets/images/icons/ic_traveler.png'
import IconTreasure from 'assets/images/icons/ic_treasure.png'
import Button from 'elements/Buttons'
import formatNumber from 'utils/FormatNumber'
export default function Hero(props) {


    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth",
        })
    }

    return (
        <section className="container pt-4">
            <div className="row alignt-items-center mt-3">
                <div className="col-auto pr-5" style={{ width: 530 }}>
                    <h1 className="font-weight-bold line-height-1 mb-3">
                        Forget busy work, <br />
                        Start Next Vacation
                    </h1>
                    <p className="mb-4 font-weight-light text-gray-500 w75" style={{ lineHeight: "170%" }}>
                        We provide what you neeed to enjoy your holiday with family.
                        time to make another memorable moment
                    </p>
                    <Button className="btn px-5"
                        hasShadow
                        isPrimary
                        onClick={showMostPicked}
                        >
                        Show Me Now
                    </Button>
                    <div className="row mt-5">
                        <div className="col-auto" style={{ marginRight: 35 }}>
                            <img width="36" height="36"
                                src={IconTraveler} alt={`${props.data.traveler} Traveler`} />
                            <h6 className="mt-3">
                                {  formatNumber(props.data.travelers) }{" "}
                               
                                <span className="text-gray-500 font-weight-light">
                                    Traveler
                                </span>
                            </h6>
                        </div>
                        <div className="col-auto" style={{ marginRight: 35 }}>
                            <img width="36" height="36"
                                src={IconCities} alt={`${props.data.cities} Cities`} />
                            <h6 className="mt-3">
                                { formatNumber(props.data.cities)}{" "}
                                <span className="text-gray-500 font-weight-light">
                                    Cities
                                </span>
                            </h6>
                        </div>
                        <div className="col-auto" style={{ marginRight: 35 }}>
                            <img width="36" height="36"
                                src={IconTreasure} alt={`${props.data.treasures} Treasure`} />
                            <h6 className="mt-3">
                                {formatNumber(props.data.treasures)}{" "} 
                                <span className="text-gray-500 font-weight-light">
                                    Treasure
                                </span>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="col-6 pl-5">
                    <div style={{ width: 520, height: 410 }}>
                        <img
                            src={ImageHero}
                            alt="Room with couches"
                            className="img-fluid position-absolute"
                            style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
                        />
                        <img
                            src={ImageHero_}
                            alt="Room with couches frame"
                            className="img-fluid position-absolute"
                            style={{ margin: "0 -15px -15px 0" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
