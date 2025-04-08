export function formatCurrency(price: number) {
    return new Intl.NumberFormat('es-CL', {
        style: 'currency', currency: 'CLP'
    }).format(price)
}