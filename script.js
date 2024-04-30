function stringChop(str, size) {
    if (!str || size <= 0) return [];

    const chunks = [];
    let index = 0;

    while (index < str.length) {
        chunks.push(str.substr(index, size));
        index += size;
    }

    return chunks;
}


// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
