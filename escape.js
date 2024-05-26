const goToTop = () => window.scrollTo(0, 0);
const timeFromDate = date => date.toTimeString().slice(0, 8);
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';