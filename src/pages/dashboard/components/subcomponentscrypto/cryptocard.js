import React from 'react';


function CryptoCard({id,metrics,name,symbol}) {
    
    //API sometimes doesnt give concistent data.
    const inputVerification = ()=> {
        if (!id) {
            id ="N/A"
        }
        if (!metrics.market_data.ohlcv_last_1_hour) {
            metrics.market_data.ohlcv_last_1_hour = {"low":"N/A","high":"N/A"}
        }
        if (!metrics.market_data.ohlcv_last_24_hour) {
            metrics.market_data.ohlcv_last_24_hour = {"low":"N/A","high":"N/A"}
        }
        if (!metrics.market_data.price_usd) {
            metrics.market_data.price_usd = "N/A"
        }
        if (!metrics.market_data.real_volume_last_24_hours) {
            metrics.market_data.real_volume_last_24_hours = "N/A"
        }
        if (!metrics.marketcap) {
            metrics.marketcap = {"current_marketcap_usd":"N/A","marketcap_dominance_percent":"N/A"}
        }
        if (!name) {
            name ="N/A"
        }
        if (!symbol) {
            symbol ="N/A"
        }
    }
    inputVerification()
    
    const displayBilionsAndTrilions = (number) => {
        if (typeof number !== "number") {
            return "N/A"
        }
        var svar;
        
        if (number < 10**7) { //Return if less then 
            svar = number.toFixed(2);
            return svar+" usd";
        }
        
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
        if (typeof number !== "number") {
            return "N/A"
        }

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
                <img title={symbol} src={`https://messari.io/asset-images/${id}/32.png?v=2`} alt="icon" style={{width:"1.8em"}}/>
            </td>
            <td>{/*Name*/}
                {name}
            </td>
            <td>{/*USD price*/}
                {"$"+roundNumberToLength(metrics.market_data.price_usd)}
            </td>
            <td>{/*1h Range*/}
                {roundNumberToLength(metrics.market_data.ohlcv_last_1_hour.low) +"-"+ roundNumberToLength(metrics.market_data.ohlcv_last_1_hour.high)}
            </td>
            <td>{/*24h Range*/}
                {roundNumberToLength(metrics.market_data.ohlcv_last_24_hour.low) +"-"+ roundNumberToLength(metrics.market_data.ohlcv_last_24_hour.high)}
            </td>
            <td>{/*Market cap*/}
                {displayBilionsAndTrilions(metrics.marketcap.current_marketcap_usd)}
            </td>
            <td>{/*Market dominance %*/}
                {metrics.marketcap.marketcap_dominance_percent.toFixed(1)+"%"}
            </td>
            <td>{/*volume*/}
                {displayBilionsAndTrilions(metrics.market_data.real_volume_last_24_hours)}
            </td>
        </tr>
        
    )
}


export default CryptoCard;