import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './Home.css'
import './Home_Mobile.css'
import Person from '../../img/G.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import SlideCard from '../../components/SlideCard/SlideCard'


const Home: React.FC = () => {
    return (
        <>
            <NavBar />

            <section className='banner'>
                <div>
                    <h2>Gabriel Gomes</h2>
                    <h3>
                        Um Desenvolvedor Full Stack com ideias incríveis para sites e
                        aplicativos.

                        <div className="links">
                            <div className="icone">
                                <a href="https://github.com/gabrielgr200">
                                    <FontAwesomeIcon icon={faGithub} /> Github
                                </a>
                            </div>
                            <div className="icone">
                                <a href="https://www.linkedin.com/in/gabriel-gomes-bba609179/">
                                    <FontAwesomeIcon icon={faLinkedin} /> Linkedin
                                </a>
                            </div>
                        </div>
                    </h3>
                </div>
                <img src={Person} alt='imagem da logo' />
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
                                <p>Feito para tornar a pesquisa por medicamentos mais prática.
                                    <a href="https://lexicorm.vercel.app/" className='lexi'>Visitar site</a>
                                </p>
                            </div>
                        </div>
                    </label>
                    <input type="radio" name="slide" id="c2" />
                    <label htmlFor="c2" className="card">
                        <div className="row">
                            <div className="icon">2</div>
                            <div className="description">
                                <h4>ggcoffee</h4>
                                <p>Oferecemos os melhores cafés da região em nosso site.
                                    <a href="https://ggcoffee.vercel.app/"
                                        className='cafe'>Visitar site</a>
                                </p>
                            </div>
                        </div>
                    </label>
                    <input type="radio" name="slide" id="c3" />
                    <label htmlFor="c3" className="card">
                        <div className="row">
                            <div className="icon">3</div>
                            <div className="description">
                                <h4>Clone Apple</h4>
                                <p className='apple'>
                                    Site com o intuito de
                                    estudar, baseado no site da Apple.
                                    <a href="https://apple-ashy.vercel.app/"
                                        className='maca'>Visitar site</a>
                                </p>
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


            <section className='certificado'>
                <SlideCard/>
            </section>

            <section className='contato'>
                <h2>Contatos</h2>
            </section>
        </>
    )
}

export default Home