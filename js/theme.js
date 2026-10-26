/* Applies the saved light/dark choice before the page paints (avoids a flash). */
try { var t = localStorage.getItem('svv-theme'); if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t); } catch (e) {}
document.documentElement.classList.add('js');
