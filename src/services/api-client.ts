import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: 'a85cf862be924d2088412d2e4e530a30'
    }
})