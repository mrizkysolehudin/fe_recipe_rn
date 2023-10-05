import {SafeAreaView, SectionList, StyleSheet} from 'react-native';
import React from 'react';
import {dataRecipes} from '../dummy/recipes';
import BottomTabs from '../components/Global/BottomTabs';
import PopularForYouSection from '../components/Home/PopularForYouSection';
import NewRecipeSection from '../components/Home/NewRecipeSection';
import PopularRecipes from '../components/Home/PopularRecipes';
import SearchInput from '../components/Home/SearchInput';
// import axios from 'axios';
// import {REACT_APP_BACKEND_URL} from '../../env';

const HomeScreen = ({route}) => {
  const openTab = route.name || 'Home';

  const data = dataRecipes.data;
  const sections = [
    {title: 'SearchInput', data: [1]},
    {title: 'PopularForYouSection', data: [2]},
    {title: 'NewRecipeSection', data: [3]},
    {title: 'PopularRecipes', data: [4]},
  ];

  // React.useEffect(() => {
  //   axios.get(`${REACT_APP_BACKEND_URL}/recipe`).then(response => {
  //     console.log(response);
  //   });
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({section}) => {
          switch (section.title) {
            case 'SearchInput':
              return <SearchInput />;
            case 'PopularForYouSection':
              return <PopularForYouSection />;
            case 'NewRecipeSection':
              return <NewRecipeSection data={data} />;
            case 'PopularRecipes':
              return <PopularRecipes data={data} />;
            default:
              return null;
          }
        }}
      />

      <BottomTabs openTab={openTab} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
    backgroundColor: 'white',
  },
});
