import { Zoom } from "react-awesome-reveal";
import SectionTitle from '../SectionTitle/SectionTitle'
import sImg1 from '../../images/story/1.jpg'
import sImg2 from '../../images/story/2.jpg'
import sImg3 from '../../images/story/3.jpg'

import shape1 from '../../images/story/shape.png'
import shape2 from '../../images/story/shape2.png'
import shape3 from '../../images/story/shape3.png'


import bshape1 from '../../images/story/flower-shape1.svg'
import bshape2 from '../../images/story/flower-shape2.svg'
import bshape3 from '../../images/story/flower-shape3.svg'
import bshape4 from '../../images/story/flower-shape4.svg'

const Storys = [
    {
        sImg: sImg1,
        shape: shape1,
        title: 'Como nós conhecemos',
        date: 'Junho de 2016',
        description: 'Em 2016, nossos caminhos se cruzaram na academia. Ele, como estagiário, e eu, uma aluna dedicada. Naquela época, estávamos ambos envolvidos em relacionamentos diferentes, seguindo nossas vidas sem perceber que o destino estava nos aproximando.',
    },
    {
        sImg: sImg2,
        shape: shape2,
        title: 'De amizade à União',
        date: 'Agosto de 2018',
        description: 'Durante dois anos, fomos apenas amigos, compartilhando risadas e histórias enquanto cada um seguia seu próprio rumo. Mas em 2018, quando nos vimos solteiros ao mesmo tempo, algo mudou. As pessoas ao nosso redor começaram a notar uma química entre nós, algo que nós mesmos não tínhamos percebido antes.',
        order1: 'order-lg-2 order-1',
        order2: 'order-lg-1 order-2',
    },
    {
        sImg: sImg3,
        shape: shape3,
        title: 'O Florescer do Amor Verdadeiro',
        date: 'Setembro de 2018',
        description: 'Com o passar do tempo, os olhares se tornaram mais intensos, os gestos mais significativos. Foi então que finalmente entendemos que éramos feitos um para o outro. O amor que floresceu entre nós foi avassalador, como se estivéssemos revivendo a paixão dos primeiros amores, mas agora com a maturidade que só a vida adulta poderia trazer.',
    },
    {
        sImg: sImg1,
        shape: shape1,
        title: 'Superando a dor Juntos',
        date: 'Setembro de 2019',
        description: 'Em setembro de 2019, passamos por uma experiência que nos uniu ainda mais: enfrentamos juntos um aborto espontâneo. Foi um momento de profunda tristeza, mas também de conexão e apoio mútuo. Descobrimos uma força dentro de nós que nunca imaginamos possuir.',
    },
    {
        sImg: sImg2,
        shape: shape2,
        title: 'Unidos na Adversidade',
        date: 'Março de 2020',
        description: 'Quando a pandemia chegou em 2020, decidimos enfrentá-la juntos. Optamos por passar o isolamento social como um casal, compartilhando não apenas os momentos felizes, mas também as dificuldades e os desafios que surgiram.',
        order2: 'order-lg-2 order-1',
        order1: 'order-lg-1 order-2',
    },
    {
        sImg: sImg3,
        shape: shape3,
        title: 'Um Pedido Inesquecível',
        date: 'Dezembro de 2021',
        description: 'Em dezembro de 2021, durante uma celebração especial para comemorar três anos juntos, Duan me surpreendeu com o pedido de casamento mais emocionante que eu poderia imaginar. Foi um momento de pura felicidade e gratidão.',
    },
    {
        sImg: sImg1,
        shape: shape1,
        title: 'O Noivado e a Jornada de Crescimento',
        date: 'Maio de 2022',
        description: 'Em maio de 2022, oficializamos nosso noivado, marcando o início de uma nova etapa em nossas vidas. No ano seguinte, embarcamos em nossa primeira viagem internacional juntos. Foi uma jornada de descoberta e crescimento, onde fortalecemos ainda mais nossa fé em Deus e nosso compromisso um com o outro.',
    },
    {
        sImg: sImg2,
        shape: shape2,
        title: 'O Começo de uma Nova Jornada',
        date: 'Janeiro de 2024',
        description: 'E agora, em 2024, diante de Deus e de todos aqueles que amamos, nos tornamos marido e mulher. É o começo de uma nova jornada, cheia de promessas e sonhos compartilhados, prontos para enfrentar o que o futuro nos reserva, juntos, como um verdadeiro casal feito para estar lado a lado.',
        order2: 'order-lg-2 order-1',
        order1: 'order-lg-1 order-2',
    },

]


const StorySection2 = () => {

    return (
        <section className="wpo-story-section section-padding" id="story">
            <div className="container">
                <SectionTitle subTitle={'Nossa história'} MainTitle={'Como começou nossa União'} />
                <div className="wpo-story-wrap">
                    {
                        Storys.map((story, st) => (
                            <div className="wpo-story-item" key={st}>
                                <div className="wpo-story-img-wrap">
                                    <Zoom direction="up" duration="1000" triggerOnce="true">
                                        <div className="wpo-story-img">
                                            <img src={story.sImg} alt="" />
                                        </div>
                                    </Zoom>
                                    <div className="clip-shape">
                                        <svg viewBox="0 0 382 440" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M191 0L381.526 110V330L191 440L0.474411 330V110L191 0Z" />
                                        </svg>
                                    </div>
                                    <div className="wpo-img-shape">
                                        <img src={story.shape} alt="" />
                                    </div>
                                </div>
                                <div className="wpo-story-content">
                                    <div className="wpo-story-content-inner">
                                        <span>{story.date}</span>
                                        <h2>{story.title}</h2>
                                        <p>{story.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))

                    }
                </div>
            </div>
            <div className="flower-shape-1">
                <img src={bshape1} alt="" />
            </div>
            <div className="flower-shape-2">
                <img src={bshape2} alt="" />
            </div>
            <div className="flower-shape-3">
                <img src={bshape3} alt="" />
            </div>
            <div className="flower-shape-4">
                <img src={bshape4} alt="" />
            </div>
        </section>
    )
}

export default StorySection2;