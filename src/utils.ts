export const getImgUrl = (path: unknown) => {
    return new URL(`assets/${path}`, import.meta.url).href
}