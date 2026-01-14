import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import { CustomScreenWrapper, MapComponent } from 'src/components';

const MapsScreen = () => {
  const latitude = 48.2082;
  const longitude = 16.3738;

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <View style={styles.mapWrapper}>
        <MapComponent
          coordinates={{ latitude, longitude }}
          title="Austria"
          description="Explore Austria"
        />
      </View>
    </CustomScreenWrapper>
  );
};

export default MapsScreen;
