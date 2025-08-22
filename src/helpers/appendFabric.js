export function appendFabric(arr) {
  arr.forEach((arrItem) => {
    if (Array.isArray(arrItem[1])) {
      arrItem[1].forEach((item) => arrItem[0].appendChild(item));
    } else {
      arrItem[0].appendChild(arrItem[1]);
    }
  });
}
