const setClickFoodIdInLs = value => {
  localStorage.setItem("clickFoodId", JSON.stringify(value));
};

const getClickFoodIdInLs = () => {
  const storedBrand = localStorage.getItem("clickFoodId");
  return JSON.parse(storedBrand);
};

export { setClickFoodIdInLs, getClickFoodIdInLs };
