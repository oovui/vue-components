function ArrayObjectHasValue(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i].value === "undefined") {
      throw new Error("array args invalid");
    }
    if (array[i].value == value) {
      return true;
    }
  }
  return false;
}

function ArrayObjectDeleteByValue(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i].value === "undefined") {
      throw new Error("array args invalid");
    }
    if (array[i].value == value) {
      array.splice(i, 1);
    }
  }
  return array;
}

function ArrayDeleteByValue(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      array.splice(i, 1);
    }
  }
  return array;
}

export { ArrayObjectHasValue, ArrayObjectDeleteByValue, ArrayDeleteByValue }