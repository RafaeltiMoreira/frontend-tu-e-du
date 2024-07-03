import PropTypes from 'prop-types';
import { formatNumber } from '../../lib/utils';
import './ListItem.css';
//import { useContext } from 'react';
//import { StoreContext } from '../../context/StoreContext';

const productLinks = {
  "1": {
    url: "https://mpago.li/2pPUW6T",
    script: "202634584-122c2ed7-78be-44d2-a0aa-0dee9741062a"
  },
  "2": {
    url: "https://mpago.la/1EqNFg2",
    script: "202634584-fbd3789f-9e90-4826-9045-f7390eb4023e"
  },
  "3": {
    url: "https://mpago.la/22tcHR6",
    script: "202634584-66cc2476-e668-44f4-8dfc-41a3c0d6b0d1"
  },
  "4": {
    url: "https://mpago.la/1M72Buv",
    script: "202634584-504e18ac-8650-4741-a056-099ddaeb4768"
  },
  "5": {
    url: "https://mpago.la/1mTZsgy",
    script: "202634584-50391b6f-c48f-4cab-be7b-233dc020b7d3"
  },
  "6": {
    url: "https://mpago.la/21F3NZX",
    script: "202634584-36359125-49a7-411e-b1b2-5a5790aa266d"
  },
  "7": {
    url: "https://mpago.la/2ijpWHh",
    script: "202634584-548d9b40-a333-4398-b9b6-0684c920f368"
  },
  "8": {
    url: "https://mpago.la/1UqWSSs",
    script: "202634584-ef6a4ed1-3cc3-4fc6-8773-41c43566ac28"
  },
  "9": {
    url: "https://mpago.la/1Fe1iyE",
    script: "202634584-faa47713-f9cf-4410-aeb6-75c461507b7d"
  },
  "10": {
    url: "https://mpago.la/2zeUifr",
    script: "202634584-cc054fda-fb7a-4716-826a-b65654a4dab7"
  },
  "11": {
    url: "https://mpago.la/1WsHq55",
    script: "202634584-f7bf5217-aad5-4666-a35b-4a55316df026"
  },
  "12": {
    url: "https://mpago.la/2cM2dny",
    script: "202634584-ce4154ea-7099-40fd-b946-9189b88e84fc"
  },
  "13": {
    url: "https://mpago.la/18GiXwH",
    script: "202634584-8df59e94-484c-4cb5-b8a8-ec17dcf1962b"
  },
  "14": {
    url: "https://mpago.la/1DbJeCh",
    script: "202634584-e31e5f19-7bf2-4bec-83a7-0e83bf52942c"
  },
  "15": {
    url: "https://mpago.la/1UBjoJn",
    script: "202634584-9fc81a34-1d25-4c89-8f16-66b97df1fc06"
  },
  "16": {
    url: "https://mpago.la/2NyeEXX",
    script: "202634584-580c8221-2206-464e-9823-c98b1c697d8e"
  },
  "17": {
    url: "https://mpago.la/2dnTr3y",
    script: "202634584-dce33099-2860-42fe-8eb2-8488aba1e069"
  },
  "18": {
    url: "https://mpago.la/1hPP73T",
    script: "202634584-657d635d-8834-499f-8525-5d7ff5aff774"
  },
  "19": {
    url: "https://mpago.la/165qw55",
    script: "202634584-44d0a8c2-7a6c-4dfc-a840-2d09284bbdbe"
  },
  "20": {
    url: "https://mpago.la/1kTSvJP",
    script: "202634584-a094e53b-126b-4eea-bd97-1d078f656cc0"
  },
  "21": {
    url: "https://mpago.la/1dm7kX7",
    script: "202634584-94055c61-aa6b-4238-8be1-ee83378eff1c"
  },
  "22": {
    url: "https://mpago.la/1JSP7wt",
    script: "202634584-845bb4c8-2c40-47ba-9c1b-73b348c08ca9"
  },
  "23": {
    url: "https://mpago.la/1U1HYnG",
    script: "202634584-2a6f77b6-76e9-4883-820d-daeaec05f574"
  },
  "24": {
    url: "",
    script: ""
  },
  "25": {
    url: "https://mpago.la/1un5Lg1",
    script: "202634584-bea9dbda-9397-46fe-9f6a-cb34cfa59237"
  },
  "26": {
    url: "https://mpago.la/2c96yeF",
    script: "202634584-566a6915-c20a-46c3-b661-88315eabac5e"
  },
  "27": {
    url: "https://mpago.la/2YMarpk",
    script: "202634584-8e974748-5acd-4a5e-9cac-9597994b1d19"
  },
  "28": {
    url: "https://mpago.la/2fjVnS3",
    script: "202634584-a5cb202b-3529-49f1-b01c-b76b107040cd"
  },
  "29": {
    url: "https://mpago.la/2Syf3R5",
    script: "202634584-77aff83c-4ef9-4dc0-b709-8053475a266d"
  },
  "30": {
    url: "https://mpago.la/2VnZsra",
    script: "202634584-c489bd93-0608-4124-934e-8f9133e5726c"
  },
  "31": {
    url: "https://mpago.la/2Vd9Jbu",
    script: "202634584-7c6e2174-a569-4768-be3f-93bb713d1e5c"
  },
  "32": {
    url: "https://mpago.la/1WdG8Qe",
    script: "202634584-c5c2f822-327d-462b-b505-bee0dd08b3f9"
  },
  "33": {
    url: "http://link.mercadopago.com.br/tuaneeduan"
  },
  "34": {
    url: "",
    script: ""
  },
};

const ListItem = ({ id, name, price, description, image }) => {
  //const { cartItems } = useContext(StoreContext);  

  const productLink = productLinks[id];
  const isOutOfStock = !productLink.url || !productLink.script;
  const hasOnlyUrl = productLink.url && !productLink.script;

  return (
    <div className='list-item'>
      <div>
        <img className='list-item-image' src={image} alt="Imagens dos produtos" />
      </div>
      <div className="list-item-info list-item-img-container">
        <div className="list-item-name-rating">
          <p>{name}</p>
        </div>
        <p className="list-item-desc">{description}</p>
        {price !== undefined ? (
          <p className="list-item-price">{formatNumber(price)}</p>
        ) : (
          <p className="list-item-price">R$ Livre</p>
        )}
        {
          hasOnlyUrl ? (
            <div>
              <button className='add list-item-counter'>
                <i className="fa fa-shopping-bag"></i>{" "}
                <a href={productLink.url} target="_blank" rel="noopener noreferrer">Presentear</a>
              </button>
            </div>
          ) : isOutOfStock ? (
            
              <button className='out-of-stock'>Presenteados</button>
            
          ) : (
            <div>
              <button className='add list-item-counter'>
                <i className="fa fa-shopping-bag"></i>{" "}
                <a href={productLink.url} target="_blank" rel="noopener noreferrer">Presentear</a>
              </button>
              {productLink.script && (
                <script 
                  src="https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js"
                  data-preference-id={productLink.script}
                  data-source="button">
                </script>
              )}
            </div>
          )
        }
      </div>
    </div>
  )
}

ListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ListItem
