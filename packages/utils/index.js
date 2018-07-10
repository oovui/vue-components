const Utils={
  // 判断参数是否是其中之一
  oneOf (value, validList) {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true;
        }
    }
    return false;
  }

}

export default Utils