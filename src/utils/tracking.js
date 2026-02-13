export function getTrackingUrl(shipmentId) {
    if (!shipmentId) return '';
    return `https://ng.myschenker.fi/npseuranta/tracking.aspx?id=${shipmentId}`;
}
