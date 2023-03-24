const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {currency:"AUD",style:'currency'})
export const formatCurrency = (number) => {
     return CURRENCY_FORMATTER.format(number)
}