import React, { useCallback, useEffect } from 'react';
import { useGlobalContext } from '../../../context';
import CryptoCard from './subcomponentscrypto/cryptocard';
import Table from 'react-bootstrap/table';
//import Card from 'react-bootstrap/card'

const urlCrypto = "https://data.messari.io/api"
const dataCall = "/v2/assets?limit=10&fields=id,name,symbol,metrics/market_data/price_usd,metrics/market_data/real_volume_last_24_hours,metrics/market_data/ohlcv_last_1_hour,metrics/market_data/ohlcv_last_24_hour,metrics/marketcap/current_marketcap_usd,metrics/marketcap/marketcap_dominance_percent"

function CryptoPrice() {
    const {succesfulFetchCryptoPrice, setSuccesfulFetchCryptoPrice, fetchDataCryptoPrice, setFetchDataCryptoPrice} = useGlobalContext();
    

    const getCryptoPrice = useCallback( async () => {
        try {
            //API call
            const url = urlCrypto+dataCall;
            const response = await fetch(url);
            const data = await response.json();
            //console.log(data)
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
                    {succesfulFetchCryptoPrice ? fetchDataCryptoPrice.data.map((data) => (<CryptoCard {...data} key={data.id}/>)) : <tr><td>Loading</td></tr>}
                </tbody>
            </Table>
            </div>
        </div>
        
    )
}


export default CryptoPrice;
/*
<Card style={{width:"90%", height:733}}>
</Card>
*/