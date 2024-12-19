let url = $request.url;
let body = $response.body;

if (/^https:\/\/api\.coolapk\.com\/v6\/main\/init/.test(url)) {
    let obj = JSON.parse(body);
    if (obj.data) {
        const filterEntityIds = new Set([1681, 1633, 1710, 1754, 1966, 2261, 413, 1229, 417, 845, 2258, 1170, 2018, 2274, 944]);
        obj.data.forEach(item => {
            if (item.extraDataArr) {
                for (let key in item.extraDataArr) {
                    if (item.extraDataArr.hasOwnProperty(key) && !Array.isArray(item.extraDataArr[key])) {
                        item.extraDataArr[key] = "0";
                    }
                }
            }
            if (item.entities) {
                item.entities = item.entities.filter(entity => entity && !filterEntityIds.has(entity.entityId));
            }
        });
    }
    body = JSON.stringify(obj);
    $done({ body });
}

if (/^https:\/\/api\.coolapk\.com\/v6\/main\/indexV8/.test(url)) {
    let obj = JSON.parse(body);
    if (obj.data && Array.isArray(obj.data)) {
        obj.data = obj.data.filter(item => item.entityType === "feed");
    }
    body = JSON.stringify(obj);
    $done({ body });
}

if (/^https:\/\/api\.coolapk\.com\/v6\/feed\/detail\?id/.test(url)) {
    let obj = JSON.parse(body);
    if (obj.data) {
        obj.data.detailSponsorCard = "";
        obj.data.include_goods = "";
    }
    body = JSON.stringify(obj);
    $done({ body });
}

if (/^https:\/\/api\.coolapk\.com\/v6\/page\/dataList/.test(url)) {
    let obj = JSON.parse(body);
    if (obj.data && Array.isArray(obj.data)) {
        const filterEntityIds = new Set([24309, 12889, 29176, 36279, 36278, 29213, 29178, 37755, 40133]);
        obj.data = obj.data.filter(item => item.entityId && !filterEntityIds.has(item.entityId));
    }
    body = JSON.stringify(obj);
    $done({ body });
}

if (/^https:\/\/api\.coolapk\.com\/v6\/account\/loadConfig/.test(url)) {
    let obj = JSON.parse(body);
    if (obj.data && Array.isArray(obj.data)) {
        const filterEntityIds = new Set([14809, 1002]);
        obj.data = obj.data.filter(item => item.entityId && !filterEntityIds.has(item.entityId));
    }
    body = JSON.stringify(obj);
    $done({ body });
}
