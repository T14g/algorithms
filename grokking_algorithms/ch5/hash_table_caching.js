/**
 * Hash tables can be used as cache
 * It also dont allow duplicate entries
 */

let cache = [];

function getPageFromServer(url) {
    return 'The page name is ' + url;
}

function getPage(url) {
    if (cache[url]) {
        return cache[url];
    } else {
        data = getPageFromServer(url);
        cache[url] = data;
        return data;
    }
}

console.log(getPage('Home'));
console.log(getPage('Home'));
console.log(getPage('Contact'));
console.log(cache);