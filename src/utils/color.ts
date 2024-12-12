const r = document.querySelector(':root');
const rs = getComputedStyle(r);

const color = {
    primary: rs.getPropertyValue('--color-primary').trim(),
    highlight: rs.getPropertyValue('--color-highlight').trim(),
    accentA: rs.getPropertyValue('--color-accent-a').trim(),
    accentB: rs.getPropertyValue('--color-accent-b').trim(),
    accentC: rs.getPropertyValue('--color-accent-c').trim(),
    accentD: rs.getPropertyValue('--color-accent-d').trim(),
    accentE: rs.getPropertyValue('--color-accent-e').trim(),
    background: rs.getPropertyValue('--color-background').trim()
}

export { color };
