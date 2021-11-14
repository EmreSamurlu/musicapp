import React, {useState} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';

import SongCard from './components/SongCard/SongCard';
import styles from './style/App.style';
import music_data from './music-data.json';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  const [list, setList] = useState(music_data);

  const renderSong = ({item}) => <SongCard song={item} />;
  const renderSeperator = () => <View style={styles.seperator} />;

  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const seachedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      const currentArtist = song.artist.toLowerCase();
      const currentAlbum = song.album.toLowerCase();

      return (
        currentTitle.indexOf(seachedText) > -1 ||
        currentArtist.indexOf(seachedText) > -1 ||
        currentAlbum.indexOf(seachedText) > -1
      );
    });
    setList(filteredList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator}
      />
    </SafeAreaView>
  );
};

export default App;
