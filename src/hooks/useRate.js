import { useState, useEffect } from 'react';

export const useRates = () => {
    const [calcState, setCalcState] = useState({});
    // console.log(calcState)
    useEffect(() => {
        const importRates = async () => {
            try{
                const response = await fetch("https://api.exchangerate.host/latest?base=PLN&source=ecb");
                if(!response.ok){
                    throw new Error(response.statusText);
                }

                const data = await response.json();
                const rateDate = data.date;
                const rateRates = data.rates;

                setCalcState({
                    rateDate,
                    rateRates,
                })

            } catch (error){
                console.error("Błąd pobrania", error)
            }
        }

        setTimeout(importRates, 1000)

    }, [])
    return calcState;
}