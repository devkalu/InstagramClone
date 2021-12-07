import React from "react";
import { View } from "react-native";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import styles from "./styles";

const Post = ({ name, imageUri, imagePost, likes, comments }) => {
  console.log(name, imageUri, imagePost, likes, comments);

  return (
    <View style={styles.container}>
      <Header name={name} imageUri={imageUri} />
      <Body image={imagePost} />
      <Footer likes={likes} comments={comments} />
    </View>
  );
};

export default Post;
