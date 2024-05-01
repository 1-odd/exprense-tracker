export const Currencies = [

    {value: 'IND', label: '₹ Rupee',locale:'en-IN'},
    {value: 'USD', label: '$ Dollar',locale:'en-US'},
    {value: 'EUR', label: '€ Euro',locale:'de-DE'},
    {value: 'JPY', label: '¥ Yen',locale:'ja-JP'},
    {value: 'GBP', label: '£ Pound',locale:'en-GB'},
    
]



export type Currency = (typeof Currencies)[0];