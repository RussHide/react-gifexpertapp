export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=t9MFSV1LtPX9vFXORv7kktwGkc2WFiKG`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifInfo = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url,
        }
    })
    console.log(gifInfo);
    return gifInfo;
}