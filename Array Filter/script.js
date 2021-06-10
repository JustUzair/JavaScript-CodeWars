function filter_list(l) {
  let newl = l.filter(el => {
    return typeof el !== "string";
  });
  return newl;
}
const filteredArr = filter_list([1, 2, "Alex", "Jacob", "Mark", "Max", 3]);
console.log(filteredArr);
