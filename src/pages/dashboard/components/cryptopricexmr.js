import React, { useCallback, useEffect } from 'react';
import { useGlobalContext } from '../../../context';
import CryptoCardXMR from './subcomponentscrypto/cryptocardxmr';
import Table from 'react-bootstrap/table';
//import Card from 'react-bootstrap/card'

const urlXMR = "https://data.messari.io/api/v1/assets/xmr/metrics?fields=id,name,slug,symbol,market_data/price_usd,market_data/real_volume_last_24_hours,market_data/ohlcv_last_1_hour,market_data/ohlcv_last_24_hour,marketcap/current_marketcap_usd,marketcap/marketcap_dominance_percent"


function CryptoPriceXMR() {
    const {succesfulFetchCryptoPriceXMR, setSuccesfulFetchCryptoPriceXMR,fetchDataCryptoPriceXMR, setFetchDataCryptoPriceXMR} = useGlobalContext();
    

    const getCryptoPrice = useCallback( async () => {
        try {
            //API call
            const response = await fetch(urlXMR);
            const data = await response.json();
            console.log(data)
            setFetchDataCryptoPriceXMR(data)
            setSuccesfulFetchCryptoPriceXMR(true);
        } catch (error) {
            if (error.message === "Failed to fetch") {
                setFetchDataCryptoPriceXMR("Adblock")
                setSuccesfulFetchCryptoPriceXMR(false);
            } else {
                console.log(error)
            }
            setSuccesfulFetchCryptoPriceXMR(false);
        }

    },[setSuccesfulFetchCryptoPriceXMR,setFetchDataCryptoPriceXMR])

    useEffect(()=>{
        getCryptoPrice()
    },[getCryptoPrice])
    

    return (
        <div>
            <div className="table-responsive">
            <Table className="card-table table-bordeless table-striped">
                <thead className="table-dark">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">1H range</th>
                        <th scope="col">24H range</th>
                        <th scope="col">Marketcap</th>
                        <th scope="col">Dominance%</th>
                        <th scope="col">Volume Real(24h)</th>
                    </tr>
                </thead>
                <tbody>
                    {succesfulFetchCryptoPriceXMR ? <CryptoCardXMR {...fetchDataCryptoPriceXMR} /> : "Loading"}
                </tbody>
            </Table>
            </div>
        </div>
        
    )
}
// <CryptoCard {...fetchDataCryptoPriceXMR} key={fetchDataCryptoPriceXMR.data.id}/>
//fetchDataCryptoPriceXMR.data.map((data) => (<CryptoCard {...data} key={data.id}/>))
export default CryptoPriceXMR;