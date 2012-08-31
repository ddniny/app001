
/*
 * GET home page.
 */

exports.index = function(req, res) {
    var now = new Date();
    var jsdom = require('jsdom');
    
    jsdom.env(
        'http://www.china.com.cn',
        ['http://code.jquery.com/jquery-1.8.0.min.js'],
        function(errors, window) {
            var list = [];
            window.$('a').each(function(i, e) {
                list.push(window.$(e).attr('href'));
            });
            res.render('index', { 'title': 'Test', 'alist': list });
        }
    );
};