启动 fekit server 时，可以通过读取配置，进行不同的mock处理    
如: fekit server -m [mock.js](http://)

    module.exports = {
        rules: [
            {
                pattern: /\/english\/good\/\d+/,
                respondwith: "http://review.qunar.com/api/h/beijing_city_1917/detail/rank/v1/page/1?rate=all&onlyGuru=false"
            }
        ]
    };
