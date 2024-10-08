import { createContext, useState } from "react";
import { gift_list } from "../assets/assets";
import PropTypes from "prop-types";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

    const productLinks = {
        "1": {
            url: "",
            script: ""
        },
        "2": {
            url: "",
            script: ""
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
            url: "",
            script: ""
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
            url: "",
            script: ""
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
            url: "",
            script: ""
        },
        "16": {
            url: "",
            script: ""
        },
        "17": {
            url: "",
            script: ""
        },
        "18": {
            url: "https://mpago.la/1hPP73T",
            script: "202634584-657d635d-8834-499f-8525-5d7ff5aff774"
        },
        "19": {
            url: "",
            script: ""
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
            url: "",
            script: ""
        },
        "24": {
            url: "",
            script: ""
        },
        "25": {
            url: "",
            script: ""
        },
        "26": {
            url: "https://mpago.la/2c96yeF",
            script: "202634584-566a6915-c20a-46c3-b661-88315eabac5e"
        },
        "27": {
            url: "",
            script: ""
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

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = gift_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    // Função para obter a quantidade total de itens no carrinho
    const getTotalCartQuantity = () => {
        let totalQuantity = 0;
        for (const item in cartItems) {
            totalQuantity += cartItems[item];
        }
        return totalQuantity;
    };

    const contextValue = {
        gift_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartQuantity,
        productLinks
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

StoreContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default StoreContextProvider