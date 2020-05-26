export default async function fetchAndCache(url, options = {}) {
    let json


    if (process.env.NODE_ENV === 'development') {
        json = sessionStorage.getItem(url);
        if (json) {
            return JSON.parse(json);
        }
    }

    const resp = await fetch(url, options);
    json = await resp.json();

    if (resp.ok && process.env.NODE_ENV === 'development') {
        sessionStorage.setItem(url, JSON.stringify(json));
    }
    return json;
}
