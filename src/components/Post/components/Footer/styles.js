import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  innerContainer: {
    flexDirection: "row",
    width: "30%",
    justifyContent: "space-between",
  },
  iconStyle: {
    fontWeight: "bold",
  },
  textStyle: {
    fontSize: 15,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  CommentsStyle: {
    flexDirection: "row",
    marginHorizontal: 10,
  },
  commentAuthor: {
    fontWeight: "bold",
    marginRight: 5,
  },
  comment: {
    marginVertical: 5,
  },
});

export default styles;
