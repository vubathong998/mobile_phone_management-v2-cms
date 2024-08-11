const dotAfter3Digits = function (x: number): string {
    x = Number(x);
    var parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return parts.join(',');
};

export { dotAfter3Digits };
