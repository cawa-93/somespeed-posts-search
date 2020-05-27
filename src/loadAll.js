export default async function loadAll(url) {
    const resp = await fetch(url)

    const contentPromise = resp.json()
    let restPromise = Promise.resolve([])

    const linkHeader = resp.headers.get('link')

    if (linkHeader) {

        const match = linkHeader.match(/<([^>]+)>; rel="next"/)
        if (match && match[1]) {
            restPromise = loadAll(match[1])
        }
    }

    const postsPages = await Promise.all([contentPromise, restPromise])

    return postsPages.flat()

}
