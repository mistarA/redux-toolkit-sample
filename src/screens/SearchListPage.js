import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ActivityIndicator, FlatList, Image, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, reset } from './searchlist/searchlistslice';

const screenWidth = Dimensions.get('screen').width;
const imageWidth = screenWidth / 2;
const imageHeight = imageWidth * (4 / 3);
const SearchListPage = ({ navigation, route }) => {
  const data = useSelector(state => state.searchlist.items);
  const status = useSelector(state => state.searchlist.status);
  const error = useSelector(state => state.searchlist.error);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('==== -1', route.params.query, status);
    if (status === 'idle') {
      console.log('==== 0', 'I was here');
      dispatch(fetchItems(route.params.query));
    }
    return function cleanup() {
      dispatch(reset());
    };
  }, []);

  const openDetailPage = item => {
    navigation.navigate('ItemDetailPage', { item });
  };

  const renderItem = ({ index, item }) => {
    const onPress = () => openDetailPage(item);
    if (
      item.pagemap &&
      item.pagemap.cse_image &&
      item.pagemap.cse_image.length > 0
    ) {
      return (
        <TouchableOpacity onPress={onPress}>
          <Image
            style={{ width: imageWidth, height: imageHeight }}
            source={{ uri: item.pagemap.cse_image[0].src }}
          />
        </TouchableOpacity>
      );
    }
  };

  const keyExtractor = item => {
    return item.cacheId + item.title;
  };

  let StatusView = null;
  switch (status) {
    case 'pending':
      StatusView = <ActivityIndicator size="large" color="#0000ff" />;
      break;
    case 'fulfilled':
      StatusView = (
        <FlatList
          data={data}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={keyExtractor}
        />
      );

      break;
    case 'rejected':
      StatusView = <Text>{error}</Text>;
      break;
  }
  return StatusView;
};

export default SearchListPage;
