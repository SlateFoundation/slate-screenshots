const path = require('path');
const puppeteer = require('puppeteer');

exports.capture = async function(destination, host, pages) {
    const sessionToken = (process.argv[2]||'').trim();

    if (!sessionToken) {
        console.log('Warning: no session token provided');
    }

    console.log('Capturing %s to %s', host, destination);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.on('pageerror', function(err) {
        console.log('Page error: %s', err.toString());
    });

    page.on('error', function(err) {
        console.log('Error: %s', err.toString());
    });

    await page.setViewport({
        width: 1366,
        height: 768
    });

    await page.setExtraHTTPHeaders({
        Authorization: 'Token '+sessionToken
    });

    for (const pageKey of Object.keys(pages)) {
        const pagePath = pages[pageKey];
        const pageFilename = `${pageKey}.png`;

        console.log('\tRendering %s to %s', pagePath, pageFilename);

        await page.goto(path.join(host, pagePath), {
            waitUntil: 'networkidle'
        });

        await page.screenshot({
            path: path.join(destination, pageFilename),
            fullPage: true
        });
    }

    await browser.close();

    console.log('done');7
};