import React from 'react';


function CryptoCardXMR({data }) {
    const {id, market_data, marketcap, name, symbol} = data
    

    const displayBilionsAndTrilions = (number) => {
        var svar;
        number = parseInt(number,10)
        number = number.toFixed(0);
        if (number < 10**9) {
            svar = parseFloat((number/(10**6)).toFixed(1)) +"M"
            return svar;
        }        
        if (number < 10**12) {
            svar = parseFloat((number/(10**9)).toFixed(2)) +"B"
            return svar;
        }
        if (number < 10**15) {
            svar = parseFloat((number/(10**12)).toFixed(2)) +"T"
            return svar;
        }
        return number;
    }

    const roundNumberToLength = (number) => {
        var svar;
        if (number < 1) {
            svar = parseFloat(number.toFixed(3));
            return svar;
        }        
        if (number < 100) {
            svar = parseFloat(number.toFixed(2));
            return svar;
        }
        if (number < 1000) {
            svar = parseFloat(number.toFixed(1));
            return svar;
        }
        if (number < 10000) {
            svar = parseFloat(number.toFixed(0));
            return svar;
        }
        if (number < 100000) {
            svar = parseFloat(number.toFixed(0));
            return svar;
        }
        svar = parseFloat(number.toFixed(0));
        return svar;
    }

    return (
        <tr>
            <td>{/*icon*/}
                <img title={symbol} src={`https://messari.io/asset-images/${id}/32.png?v=2`} alt="crypto coin icon" style={{width:"1.8em"}}/>
            </td>
            <td>{/*Name*/}
                {name}
            </td>
            <td>{/*USD price*/}
                {"$"+roundNumberToLength(market_data.price_usd)}
            </td>
            <td>{/*1h Range*/}
                {roundNumberToLength(market_data.ohlcv_last_1_hour.low) +"-"+ roundNumberToLength(market_data.ohlcv_last_1_hour.high)}
            </td>
            <td>{/*24h Range*/}
                {roundNumberToLength(market_data.ohlcv_last_24_hour.low) +"-"+ roundNumberToLength(market_data.ohlcv_last_24_hour.high)}
            </td>
            <td>{/*Market cap*/}
                {displayBilionsAndTrilions(marketcap.current_marketcap_usd)}
            </td>
            <td>{/*Market dominance %*/}
                {marketcap.marketcap_dominance_percent.toFixed(1)+"%"}
            </td>
            <td>{/*volume*/}
                {displayBilionsAndTrilions(market_data.real_volume_last_24_hours)}
            </td>
        </tr>
        
    )
}


export default CryptoCardXMR;