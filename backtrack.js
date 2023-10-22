const permutation = function(data) {
    data = data.split("");
    const result = [];

    const findPermutation = function(data, partial=[], used=data.map(_ => false)) {
        if (data.length == partial.length) {
            result.push(partial.join(""));
            return;
        }

        for (let index = 0; index < data.length; index++) {
            if (!used[index]) {
                partial.push(data[index]);
                used[index] = true;
                findPermutation(data, partial, used);
                partial.splice(partial.length - 1, 1);
                used[index] = false;
            }
        }

    }

    findPermutation(data);

    return [...new Set(result)];
}

const combination = function(data=[]) {
    const result = [];

    const findCombination = function(data, limit, set=[], nextIndex) {
        if (set.length == limit) {
            result.push(set.join(""));
            return;
        }

        if (nextIndex == data.length) {
            return;
        }

        for (let index = nextIndex; index < data.length; index ++) {
            set.push(data[index]);
            findCombination(data, limit, set, index + 1);
            set.splice(set.length - 1, 1);
        }
    }

    findCombination(data, 3, [], 0);

    return result;
}

module.exports = {permutation, combination};