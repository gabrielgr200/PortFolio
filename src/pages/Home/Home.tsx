import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './Home.css'
import './Home_Mobile.css'
import Person from '../../img/G.svg'


const Home: React.FC = () => {
    return (
        <>
            <NavBar />

            <section className='banner'>
                <div>
                    <h2>Gabriel Gomes</h2>
                    <h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, maiores!
                    </h3>
                </div>
                <img src={Person} />
            </section>
            <section className='teste'>
                <h2>Sobre mim</h2>
                <br />
                <br />
                <p>Lorem, ipsum dolor.</p>
                <p className="color">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dignissimos at
                    beatae debitis eveniet magnam voluptatibus, quia aliquid quae ad?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, mollitia.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid, iure libero
                    incidunt ipsum asperiores, sapiente voluptatem error laudantium voluptatibus suscipit
                    assumenda dicta animi corporis. Sunt similique itaque modi atque.
                </p>
                <p className="color">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dignissimos at
                    beatae debitis eveniet magnam voluptatibus, quia aliquid quae ad?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, mollitia.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid, iure libero
                    incidunt ipsum asperiores, sapiente voluptatem error laudantium voluptatibus suscipit
                    assumenda dicta animi corporis. Sunt similique itaque modi atque.
                </p>
                <p className="color">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dignissimos at
                    beatae debitis eveniet magnam voluptatibus, quia aliquid quae ad?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, mollitia.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid, iure libero
                    incidunt ipsum asperiores, sapiente voluptatem error laudantium voluptatibus suscipit
                    assumenda dicta animi corporis. Sunt similique itaque modi atque.
                </p>
            </section>

            <div className="project-container">
                <h2 className='project'>Projetos</h2>
            </div>
            <div className="wrapper">
                <div className="container">
                    <input type="radio" name="slide" id="c1" checked />
                    <label htmlFor="c1" className="card">
                        <div className="row">
                            <div className="icon">1</div>
                            <div className="description">
                                <h4>Site lexicorm</h4>
                                <p>Winter has so much to offer -
                                    creative activities</p>
                            </div>
                        </div>
                    </label>
                    <input type="radio" name="slide" id="c2" />
                    <label htmlFor="c2" className="card">
                        <div className="row">
                            <div className="icon">2</div>
                            <div className="description">
                                <h4>ggcoffee</h4>
                                <p>Gets better every day -
                                    stay tuned</p>
                            </div>
                        </div>
                    </label>
                    <input type="radio" name="slide" id="c3" />
                    <label htmlFor="c3" className="card">
                        <div className="row">
                            <div className="icon">3</div>
                            <div className="description">
                                <h4>Clone Apple</h4>
                                <p>Help people all over the world</p>
                            </div>
                        </div>
                    </label>
                    <input type="radio" name="slide" id="c4" />
                    <label htmlFor="c4" className="card">
                        <div className="row">
                            <div className="icon">4</div>
                            <div className="description">
                                <h4>Polystation</h4>
                                <p>Space engineering becomes
                                    more and more advanced</p>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </>
    )
}

export default Home