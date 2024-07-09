export const getImgUrl = (path: any) => {
    return new URL(`assets/${path}`, import.meta.url).href
}