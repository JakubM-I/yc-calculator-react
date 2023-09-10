import { useState, useEffect } from 'react';

export const useRatesData = () => {
    const [calcState, setCalcState] = useState({
        status: "loading",
    });
    // console.log(calcState)
    useEffect(() => {
        const importRates = async () => {
            try{
                const response = await fetch("https://api.exchangerate.host/latest?base=PLN&source=ecb");
                if(!response.ok){
                    throw new Error(response.statusText);
                }

                const {date, rates} = await response.json();

                setCalcState({
                    status: "succes",
                    date,
                    rates,
                })

            } catch (error){
                console.error("Błąd pobrania", error)
            }
        }

        setTimeout(importRates, 1000)

    }, [])
    return calcState;
}