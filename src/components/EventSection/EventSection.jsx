import { Slide } from "react-awesome-reveal";
import SectionTitle from '../SectionTitle/SectionTitle'
import sImg1 from '../../images/event/1.jpg'
import sImg2 from '../../images/event/2.jpg'
import sImg3 from '../../images/event/3.jpg'
import LocationMap from './Modal/LocationMap'


const Events = [
    {
        Simg: sImg1,
        title: 'A Cerimônia',
        li1: 'Monday, 12 Apr. 2023 1:00 PM – 2:30 PM',
        li2: '4517 Washington Ave. Manchester, Kentucky 39495',
        li3: '+1 234-567-8910',
        animation: '1200',
    },
    {
        Simg: sImg2,
        title: 'A Recepção',
        li1: 'Monday, 12 Apr. 2023 1:00 PM – 2:30 PM',
        li2: '4517 Washington Ave. Manchester, Kentucky 39495',
        li3: '+1 234-567-8910',
        animation: '1400',
    },
    {
        Simg: sImg3,
        title: 'A Festa',
        li1: 'Monday, 12 Apr. 2023 1:00 PM – 2:30 PM',
        li2: '4517 Washington Ave. Manchester, Kentucky 39495',
        li3: '+1 234-567-8910',
        animation: '1600',
    },

]

const EventSection = () => {

    return (
        <section className="wpo-event-section section-padding" id="event">
            <div className="container">
                <SectionTitle subTitle={'Our Wedding'} MainTitle={'When & Where'} />
                <div className="wpo-event-wrap">
                    <div className="row">
                        {Events.map((event, eitem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={eitem}>
                                <Slide direction="up" duration={event.animation} triggerOnce="true">
                                    <div className="wpo-event-item">
                                        <div className="wpo-event-img">
                                            <div className="wpo-event-img-inner">
                                                <img src={event.Simg} alt="" />
                                            </div>
                                        </div>
                                        <div className="wpo-event-text">
                                            <div className="title">
                                                <h2>{event.title}</h2>
                                            </div>
                                            <ul>
                                                <li>{event.li1}</li>
                                                <li>{event.li2}</li>
                                                <li>{event.li3}</li>
                                                <li><LocationMap
                                                    maxWidth="sm"
                                                    button="Ver Localização"
                                                    buttonClass="btn-primary"
                                                    onClose={() => { }}
                                                />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventSection;