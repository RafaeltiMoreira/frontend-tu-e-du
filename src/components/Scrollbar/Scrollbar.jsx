import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Scrollbar.css'

const Scrollbar = () => {

    return(
        <div className="col-lg-12">
            <div className="header-menu">
                <ul className="smothscroll">
                    <li><AnchorLink href='#scrool'><i className="ti-arrow-up"></i></AnchorLink></li>
                </ul>
            </div>
        </div>
        
    )
}

export default Scrollbar;