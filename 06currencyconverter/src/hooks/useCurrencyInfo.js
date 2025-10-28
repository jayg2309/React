// this is like a fn
// fetch api, get data and return val

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => {
        res.json();
      })
      .then((res) => {
        setData(res[currency]);
      });
  }, [currency]); // any change in the currency, re fetch

  console.log(data);
  return data;
}

export default useCurrencyInfo;
