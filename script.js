// Loads pro.* (profile) and bann.* (cover), trying common extensions.
// Put the image files in the same folder as index.html.
const EXTS = ['jpg', 'jpeg', 'png', 'webp', 'jfif'];

function loadImage(img) {
  const base = img.dataset.src;
  let i = 0;
  img.hidden = true;

  const tryNext = () => {
    if (i >= EXTS.length) return;          // none found: placeholder stays visible
    img.src = `${base}.${EXTS[i++]}`;
  };

  img.addEventListener('load', () => { img.hidden = false; });
  img.addEventListener('error', tryNext);
  tryNext();
}

document.querySelectorAll('img[data-src]').forEach(loadImage);
