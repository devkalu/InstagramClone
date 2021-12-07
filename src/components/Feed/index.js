import React from "react";
import { FlatList, Text } from "react-native";

import Post from "../Post";
import Stories from "../Stories";

const data = [
  {
    name: "Andrea_White",
    authorImage:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    imagePost:
      "https://media.istockphoto.com/photos/we-are-going-to-party-as-if-theres-no-tomorrow-picture-id1279483477?b=1&k=20&m=1279483477&s=170667a&w=0&h=cWwEBw0uErqkzeCHcJnoih7dU_Gr_DnKdYitDgSvhqw=",
    like: "2,333 Likes",
    comments: [
      {
        name: "Manni",
        comment: "Last night was awesome",
      },
      {
        name: "Pete",
        comment: "I am so BORED",
      },
    ],
  },
  {
    name: "Andrea_White",
    authorImage:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    imagePost:
      "https://images.unsplash.com/photo-1638650947157-49e881951fd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    like: "2,333 Likes",
    comments: [
      {
        name: "Manni",
        comment: "Last night was awesome",
      },
      {
        name: "Pete",
        comment: "I am so BORED",
      },
    ],
  },
  {
    name: "Andrea_White",
    authorImage:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    imagePost:
      "https://images.unsplash.com/photo-1633114129669-78b1ff09902b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    like: "2,333 Likes",
    comments: [
      {
        name: "Manni",
        comment: "Last night was awesome",
      },
      {
        name: "Pete",
        comment: "I am so BORED ",
      },
    ],
  },
];

const Feed = () => {
  return (
    <>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Post
            name={item.name}
            imageUri={item.authorImage}
            imagePost={item.imagePost}
            likes={item.like}
            comments={item.comments}
          />
        )}
        keyExtractor={(item) => item.imagePost}
        ListHeaderComponent={Stories}
      />
    </>
  );
};

export default Feed;
