import axios from 'axios';

const BaseUrl = 'https://api.exchangeratesapi.io/latest';
class Currency {
    static async createProxy(req, res) {
        try {
        const {base, currency } = req.params;
        const resp = await axios.get(BaseUrl);
        const result = await resp.json();
        const currencyParams = currency.split(',');
        const firstParams = currencyParams[0];
        const secondParams = currencyParams[1];
        const thirdParams = currencyParams[2];
        // EUR, GBP, USD
        const firstParamsValue = result["rates"][firstParams];
        const secondParamsValue = result["rates"][secondParams];
        const thirdParamsValue = result["rates"][thirdParams];
        
        if(result){
        return res.status(200).send({
            "results": {
                "base": `${base}`,
                "date": new Date(),
                "rates": {
                    "EUR": firstParamsValue,
                    "GBP": secondParamsValue,
                    "USD": thirdParamsValue,
                }
            }
        })
        } else{

        }
    } catch(e){
        
    }

    }
}

export default Currency