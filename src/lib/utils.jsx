export function formatNumber(number) {
    return Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(number);
}

export function formatNumberEn(number) {
    const formattedNumber = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(number);

    // Remove a vírgula dos milhares
    const formattedNumberWithoutComma = formattedNumber.replace(/,/g, '');

    return formattedNumberWithoutComma;
}