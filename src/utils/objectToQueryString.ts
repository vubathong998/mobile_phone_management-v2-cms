const objectToQueryString: (obj: Record<string, any>) => string = (obj) => {
    let str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
        }
    return str.join('&');
};

export default objectToQueryString;
