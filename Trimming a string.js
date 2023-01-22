function trim(str, size) {
  if (size > 3 && size < str.length) {
    return str.slice(0, size - 3) + "..."
  }
  else if (size < str.length) {
    return str.slice(0, size) + "..."
  }
  else {
    return str
  }
}
