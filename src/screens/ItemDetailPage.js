import React from 'react';
import { Image, Text, Dimensions, ScrollView } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const imageWidth = screenWidth;
const imageHeight = imageWidth * (4 / 3);

const ItemDetailPage = ({ navigation, route }) => {
  const item = route.params.item;
  if (
    item &&
    item.pagemap &&
    item.pagemap.cse_image &&
    item.pagemap.cse_image.length > 0
  ) {
    return (
      <ScrollView>
        <Image
          style={{ width: imageWidth, height: imageHeight }}
          source={{ uri: item.pagemap.cse_image[0].src }}
        />
        <Text style={{ padding: 10, fontSize: 20 }}>{item.title}</Text>
        <Text style={{ padding: 10, fontSize: 15 }}>{item.snippet}</Text>
      </ScrollView>
    );
  }
  return null;
};

export default ItemDetailPage;
