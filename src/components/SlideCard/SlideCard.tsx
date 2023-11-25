import React from 'react'
import Slider from 'react-slick';
import './Slide.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import react from '../../img/react.svg';
import Html from '../../img/html.svg';
import Css from '../../img/css.svg';
import Js from '../../img/js.svg';
import Ts from '../../img/ts.svg';
import Node from '../../img/node.svg';
import Mysql from '../../img/mysql.svg';
import Java from '../../img/java.svg'



const SlideCard: React.FC = () => {


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='carousel'>
            <h2>Habilidades</h2>

            <Slider {...settings}>
                <div className="box">
                    <img src={react} />
                    <h3>React Js</h3>
                </div>
                <div className="box">
                    <img src={react} />
                    <h3>React Native</h3>
                </div>
                <div className="box">
                    <img src={Html} />
                    <h3>HTML</h3>
                </div>
                <div className="box">
                    <img src={Css} />
                    <h3>CSS</h3>
                </div>
                <div className="box">
                    <img src={Js} />
                    <h3>Javascript</h3>
                </div>
                <div className="box">
                    <img src={Ts} />
                    <h3>Typescript</h3>
                </div>
                <div className="box">
                    <img src={Node} />
                    <h3>Node Js</h3>
                </div>
                <div className="box">
                    <img src={Java} />
                    <h3>Java</h3>
                </div>
                <div className="box">
                    <img src={Mysql} />
                    <h3>Mysql</h3>
                </div>
            </Slider >
        </div>
    )
}


export default SlideCard