import React, { useCallback, useEffect } from 'react';
import { useGlobalContext } from '../../../context';


const urlCrypto = "https://data.messari.io/api"
const dataCall = "/v2/assets?fields=id,slug,symbol,metrics/market_data/price_usd,metrics/market_data/real_volume_last_24_hours,metrics/market_data/ohlcv_last_1_hour,metrics/market_data/ohlcv_last_24_hour,metrics/marketcap/current_marketcap_usd,metrics/marketcap/marketcap_dominance_percent"

function CryptoPrice() {
    const {succesfulFetchCryptoPrice, setSuccesfulFetchCryptoPrice, fetchDataCryptoPrice, setFetchDataCryptoPrice} = useGlobalContext();
    

    const getCryptoPrice = useCallback( async () => {
        try {
            //API call
            const url = urlCrypto+dataCall;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            setFetchDataCryptoPrice(data)
            setSuccesfulFetchCryptoPrice(true);
        } catch (error) {
            if (error.message === "Failed to fetch") {
                setFetchDataCryptoPrice("Adblock")
                setSuccesfulFetchCryptoPrice(false);
            } else {
                console.log(error)
            }
            setSuccesfulFetchCryptoPrice(false);
        }

    },[setSuccesfulFetchCryptoPrice,setFetchDataCryptoPrice])

    useEffect(()=>{
        getCryptoPrice()
    },[getCryptoPrice])
    

    return (
        <div className="card" style={{width:"90%"}}>
            {succesfulFetchCryptoPrice ? "Done Loading": "Loading"}
        </div>
        
    )
}


export default CryptoPrice;