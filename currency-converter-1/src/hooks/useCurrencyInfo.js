import React, { useEffect, useState } from "react";

/*
currency {
usd:2
inr:3
dnr:5
iqd:7
}
response.currency output 2 3 5 7
response[currency] output usd, inr, dnr, iqd
*/
function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@facy-api@latest/v1/currencies/${currency}.json`)
            .then((response) => response.json())
            .then((response) => setData(response[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}   
export default useCurrencyInfo