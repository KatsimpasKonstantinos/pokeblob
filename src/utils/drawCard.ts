import { Pokeglob, PokeglobTypeColor } from '../Classes/Pokeglob';
import { PokeglobCard } from '../Classes/PokeglobCard';
import { color } from './color';

async function drawCard(canvas: HTMLCanvasElement, card: PokeglobCard) {
    try {
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.imageSmoothingEnabled = true;
        prepareCanvas(ctx, canvas);
        let randomNumber = Math.floor(Math.random() * 4) + 6;
        let backgroundPath = `/media/blobs/cardBackground/blob-collision-rect-${randomNumber}.svg`;
        let svgText = await loadSVG(backgroundPath);
        await drawBackground(ctx, canvas, svgText, card);
        drawBorder(ctx, canvas);
        drawImageBox(ctx, canvas);
        await drawName(ctx, canvas, card);
        await drawBlobs(ctx, canvas, card);


    } catch (error) {
        console.error('Error drawing card:', error);
    }
}

export { drawCard };

function prepareCanvas(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color.background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

async function drawName(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, card: PokeglobCard) {
    // Calculate the font size based on canvas dimensions
    let fontSize = Math.min(canvas.width, canvas.height) / 15;
    ctx.font = `${fontSize}px pilowlava`;
    ctx.fillStyle = color.primary;
    const horizontalMargin = canvas.width * 0.1;
    const verticalMargin = canvas.height * 0.021;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    const x = horizontalMargin;
    const y = verticalMargin;
    ctx.fillText(card.name, x, y);
}



async function drawBlobs(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, card: PokeglobCard) {
    for (let i = 0; i < card.pokeglobs.length; i++) {
        let blobImagePath = `/media/blobs/blob/${card.pokeglobs[i].spikeness}.svg`;
        let svgText = await loadSVG(blobImagePath);
        drawBlob(ctx, canvas, svgText, card.pokeglobs.length, i, card.pokeglobs[i]);
    }
}

async function drawBlob(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, svgText: string, n: number, i: number, pokeblob: Pokeglob) {
    const sizeAdd = pokeblob.maxHealth / 500;
    const horizontalMargin = canvas.width * 0.05;
    const verticalMargin = canvas.height * 0.08;
    const boxHeight = 0;
    const horizontalArea = canvas.width - (horizontalMargin * 4);
    const blobArea = (horizontalArea / n) / 2;
    const blobWidth = canvas.width * (0.1 + sizeAdd);
    const blobHeight = canvas.height * (0.05 + sizeAdd);
    const horizontalOffset = i % 2 === 0 ? -(i * blobArea) : (i * blobArea);
    const randomVerticalOffset = Math.floor(Math.random() * 15);
    const x = canvas.width / 2 + horizontalOffset - horizontalMargin - sizeAdd * 300;
    const y = verticalMargin * 2 + boxHeight + randomVerticalOffset - sizeAdd * 300;
    await renderSVG(svgText, ctx, x, y, blobWidth, blobHeight, false, PokeglobTypeColor[pokeblob.type].main);
}


function drawImageBox(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    const horizontalMargin = canvas.width * 0.04;
    const verticalMargin = canvas.height * 0.06;
    const boxHeight = canvas.height * 0.3;
    ctx.fillStyle = `${color.background}80`; // Adding 80 for 50% transparency in hex
    //ctx.fillStyle = color.background;
    ctx.strokeStyle = color.accentB;
    ctx.lineWidth = 0.5;
    pathRoundedRect(ctx, horizontalMargin, verticalMargin, canvas.width - horizontalMargin * 2, boxHeight, 10);
    ctx.fill();
    ctx.stroke();
}

function pathRoundedRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
    ctx.lineTo(x + radius, y + height);
    ctx.arcTo(x, y + height, x, y + height - radius, radius);
    ctx.lineTo(x, y + radius);
    ctx.arcTo(x, y, x + radius, y, radius);
    ctx.closePath();
}

function drawBorder(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    ctx.strokeStyle = color.accentB;
    ctx.lineWidth = 0.8;
    pathRoundedRect(ctx, 1, 1, canvas.width - 1, canvas.height - 1, 5);
    ctx.stroke();
}

async function drawBackground(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, svgText: string, card: PokeglobCard) {

    const n = card.pokeglobs.length; // number of regions
    const midX = canvas.width / 2;
    const midY = canvas.height / 2;
    const radius = Math.max(canvas.width, canvas.height); // radius large enough to cover the canvas
    const baseAngleOffset = Math.PI / 2; // 90 degrees in radians (top-left)

    if (n === 1) {
        // Single region, fill entire canvas
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(canvas.width, 0);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.clip();
        await renderSVG(svgText, ctx, 0, 0, canvas.width, canvas.height, PokeglobTypeColor[card.pokeglobs[0].type].background, false);
        await renderSVG(svgText, ctx, 0, 0, canvas.width, canvas.height, PokeglobTypeColor[card.pokeglobs[0].type].background, false);
        ctx.restore();
    } else if (n === 2) {
        // Split canvas into two halves
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(canvas.width, 0);
        ctx.lineTo(canvas.width, canvas.height / 2);
        ctx.lineTo(0, canvas.height / 2);
        ctx.closePath();
        ctx.clip();
        await renderSVG(svgText, ctx, 0, 0, canvas.width, canvas.height, PokeglobTypeColor[card.pokeglobs[0].type].background, false);
        await renderSVG(svgText, ctx, 0, 0, canvas.width, canvas.height, PokeglobTypeColor[card.pokeglobs[0].type].background, false);
        ctx.restore();

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);
        ctx.lineTo(canvas.width, canvas.height / 2);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.clip();
        await renderSVG(svgText, ctx, 0, 0, canvas.width, canvas.height, PokeglobTypeColor[card.pokeglobs[1].type].background, false);
        await renderSVG(svgText, ctx, 0, 0, canvas.width, canvas.height, PokeglobTypeColor[card.pokeglobs[1].type].background, false);
        ctx.restore();
    } else {
        // Split canvas into 'n' equal slices
        const angleStep = (2 * Math.PI) / n;
        for (let i = 0; i < n; i++) {
            const startAngle = baseAngleOffset + (i * angleStep) + Math.PI;
            const endAngle = baseAngleOffset + ((i + 1) * angleStep) + Math.PI;

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(midX, midY);
            ctx.lineTo(midX + radius * Math.cos(startAngle), midY + radius * Math.sin(startAngle));
            ctx.lineTo(midX + radius * Math.cos(endAngle), midY + radius * Math.sin(endAngle));
            ctx.closePath();
            ctx.clip();
            await renderSVG(svgText, ctx, 0, 0, canvas.width, canvas.height, PokeglobTypeColor[card.pokeglobs[i].type].background, false);
            ctx.restore();
        }
    }
}


async function loadSVG(url: string,) {
    const response = await fetch(url);
    let svgText = await response.text();
    return svgText;
}


function renderSVG(svgText: string, ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, strokeColor: string | false, fillColor: string | false, random?: boolean) {
    return new Promise<void>((resolve, reject) => {
        // Replace stroke color if provided
        if (strokeColor) svgText = svgText.replace(/stroke="[^"]*"/g, `stroke="${strokeColor}"`);
        if (fillColor) svgText = svgText.replace(/fill="[^"]*"/g, `fill="${fillColor}"`);
        const svgBlob = new Blob([svgText], { type: 'image/svg+xml' });
        const urlBlob = URL.createObjectURL(svgBlob);

        const img = new Image();
        img.onload = () => {
            ctx.drawImage(img, x, y, width, height);
            URL.revokeObjectURL(urlBlob); // Release memory
            resolve();
        };
        img.onerror = reject;
        img.src = urlBlob;
    });
}
