async function preLoadBlobs() {
    const pokeblob = await preLoad("/media/blobs/blob/", 13);
    const background = await preLoad("/media/blobs/cardBackground/", 4);
    return { pokeblob, background };
}
//BlobSVGTexts = preloadBlob but resolved
type BlobSVGTexts = typeof preLoadBlobs extends () => Promise<infer T> ? T : never;

async function loadSVG(url: string,) {
    const response = await fetch(url);
    let svgText = await response.text();
    return svgText;
}


async function preLoad(url: string, amount: number) {
    const svgTexts: { [key: number]: string } = {};
    const loadPromises = [];
    for (let i = 0; i < amount; i++) {
        const blobImagePath = `${url}${i}.svg`;
        loadPromises.push(
            loadSVG(blobImagePath).then(svgText => {
                svgTexts[i] = svgText;
            })
        );
    }
    await Promise.all(loadPromises);
    return svgTexts;
}

export { loadSVG, preLoadBlobs, BlobSVGTexts };