启动 fekit server 时，可以通过读取配置，进行不同的 mock 处理    
如: fekit server -m [mock.js](https://raw.githubusercontent.com/rinh/fekit/master/docs/mock/sample.js)

    module.exports = {
        "/exact/match/1": "exact.json",
        "/exact/match/2": "exact.mockjson",
        "/exact/match/3": "https://raw.githubusercontent.com/rinh/fekit/master/docs/mock/exact.json",
        "/exact/match/4": "exact.js",
        rules: [{
            pattern: "/exact/match/5",
            respondwith: "exact.json"
        }, {
            pattern: /^\/regex\/match\/a\/\d+/,
            respondwith: "regex.json",
            jsonp: "__jscallback"
        }, {
            pattern: /^\/regex\/match\/b\/\d+/,
            respondwith: {
                action: function(req, res, context) {
                    res.end(JSON.stringify(Object.keys(context)));
                }
            }
        }]
    };

* 配置文件定义一个 node 模块
* key 或 pattern 属性是字符串，准确匹配 url（包括 query）
* pattern 属性是正则表达式，正则匹配 url
* value 或 respondwith 属性有解决方案：


### raw
