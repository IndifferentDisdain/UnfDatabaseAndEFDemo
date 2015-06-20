if (!Array.prototype.findByProp) {
    Array.prototype.findByProp = function (prop, value) {
        return this.filter(function (item) {
            return item[prop] == value;
        });
    };
}
if (!Array.prototype.firstOrDefault) {
    Array.prototype.firstOrDefault = function (predicate) {
        var length = this.length;

        if (predicate) {
            for (var i = 0; i < length; i++) {
                var item = this[i];
                if (predicate(item))
                    return item;
            }
            return null;
        } else {
            return length > 0 ? this[0] : null;
        }
    };
}

if (!Array.prototype.first) {
    Array.prototype.first = function (predicate) {
        if (this.length === 0) throw 'Array contains no elements!';

        var item = this.firstOrDefault(predicate);

        if (item === null) throw 'No matching element found in array!';

        return item;
    };
}