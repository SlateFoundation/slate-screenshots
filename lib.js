const Pageres = require('pageres');

exports.capture = function(destination, urls) {
    const sizes = ['1366x768'];
    const sessionToken = (process.argv[2]||'').trim();

    if (!sessionToken) {
        console.log('Warning: no session token provided');
    }

    const pageres = new Pageres({
        cookies: [{
            name: 's_sla-cc-live',
            value: sessionToken
        }],
        delay: 2,
        filename: '<%= url %>'
    });

    Object.keys(urls).forEach((page) => pageres.src(urls[page], sizes, {filename: page}));

    pageres.dest(destination).run().then(function() {
        console.log('done');
    }).catch(function(error) {
        console.log('failed:', error);
    });
};