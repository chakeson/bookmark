import React from 'react';


function CryptoCard({id,metrics,name,slug,symbol}) {

    const displayBilionsAndTrilions = (number) => {
        var svar;
        number = parseInt(number,10)
        number = number.toFixed(0);
        if (number < 10**9) {
            svar = (number/(10**6)).toFixed(1) +"M"
            return svar;
        }        
        if (number < 10**12) {
            svar = (number/(10**9)).toFixed(2) +"B"
            return svar;
        }
        if (number < 10**15) {
            svar = (number/(10**12)).toFixed(2) +"T"
            return svar;
        }
        return number;

    }


    return (
        <div className="d-flex flex-row border-bottom justify-content-between align-items-center" style={{paddingTop:3,paddingBottom:3}}>
            <div style={{paddingRight:10, width:"3em"}}> {/*icon*/}
                <img title={symbol} src={`https://messari.io/asset-images/${id}/32.png?v=2`} alt="" />
            </div>
            <div style={{paddingRight:10}}> {/*Name*/}
                {name}
            </div>
            <div style={{paddingRight:10}}> {/*USD price*/}
                ${metrics.market_data.price_usd.toFixed(2)}
            </div>
            <div style={{paddingRight:10}}> {/*1h Range*/}
                {metrics.market_data.ohlcv_last_1_hour.low.toFixed(2)} - {metrics.market_data.ohlcv_last_1_hour.high.toFixed(2)}
            </div>
            <div style={{paddingRight:10}}> {/*24h Range*/}
                {metrics.market_data.ohlcv_last_24_hour.low.toFixed(2) + " - " + metrics.market_data.ohlcv_last_24_hour.high.toFixed(2)}
            </div>
            <div style={{paddingRight:10}}> {/*24h Range*/}
                {displayBilionsAndTrilions(metrics.marketcap.current_marketcap_usd)} {metrics.marketcap.marketcap_dominance_percent.toFixed(1)} %
            </div>
            <div style={{paddingRight:10}}> {/*volume*/}
                {displayBilionsAndTrilions(metrics.market_data.real_volume_last_24_hours)}
            </div>
        </div>
        
    )
}


export default CryptoCard;