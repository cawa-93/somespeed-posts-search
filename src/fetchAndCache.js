/**
 * Функция выполняет запрос и кэширует результат в sessionStorage
 * @param url
 * @param options
 * @return {Promise<any>}
 */
export default async function fetchAndCache(url, options = {}) {
    let json


    json = sessionStorage.getItem(url);
    if (json) {
        return JSON.parse(json);
    }

    const resp = await fetch(url, options);
    json = await resp.json();

    if (resp.ok) {
        sessionStorage.setItem(url, JSON.stringify(json));
    }


    return json;
}
