//
//
//
//
//
//
//
//
export const COLORS = {
  background: "#13151B",
  color: "#fff",
  theme: [{ navBar: "#ffcd28" }, { navBar: "red" }],
};
export const Theme = (num = 0) => {
  return COLORS.theme[num].navBar;
};
