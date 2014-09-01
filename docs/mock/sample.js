module.exports = {
    "/exact/match/1": "exact.json",
    "/exact/match/2": "exact.mockjson",
    "/exact/match/3": "http://",
    "/exact/match/4": "exact.js",
    rules: [
        {
            pattern: "/exact/match/5",
            respondwith: "exact.json",
            jsonp: "__jscallback"
        }
    ]
};
