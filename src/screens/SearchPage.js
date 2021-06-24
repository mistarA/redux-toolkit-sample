import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SearchBar, Button } from 'react-native-elements';

const styles = StyleSheet.create({
  buttonStyle: {
    width: 200,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    margin: 20,
  },
});
const SearchPage = props => {
  const [query, setQuery] = useState('');
  const searchQuery = () => {
    // Open List Page
    props.navigation.navigate('SearchListPage', {
      query,
    });
  };

  const handleTextChange = queryText => setQuery(queryText);

  return (
    <View>
      <SearchBar
        placeholder="Type your Query..."
        onChangeText={handleTextChange}
        lightTheme
        value={query}
      />

      <Button
        buttonStyle={styles.buttonStyle}
        title="Search"
        type="outline"
        raised
        onPress={searchQuery}
      />
    </View>
  );
};

export default SearchPage;
