import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import { ModalControl, CardList, SafeAreaWrapper } from '_app/components';
import { PLATFORM, tTitle } from '_app/constants';
import { OrderDirection, useCitiesQuery } from '_app/generated/graphql';
import { VerticalListPlaceholder } from '_app/layout';

export const CitiesListScreen = ({ route }) => {
  const { name, type } = route.params.item;
  const [loadingCounter, setLoadingCount] = useState(0);
  const [cities, setCities] = useState([]);

  const { data, loading, fetchMore } = useCitiesQuery({
    variables: {
      first: 5,
      skip: 1,
      orderBy: {
        direction: OrderDirection.Asc,
      },
      continent: type !== 'capital' && type !== 'popular' ? type.toUpperCase() : null,
      isCapital: type === 'capital' && type !== 'popular' ? true : null,
    },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    if (!loading) {
      setLoadingCount(1);
    }
  }, [loading]);

  useEffect(() => {
    if (data && cities.length === 0) {
      setCities(data.cities.edges);
    }
  }, [data]);

  const handleEndReached = async () => {
    if (cities) {
      const lastCity = cities[cities.length - 1].node.id;
      const newData = await fetchMore({
        variables: {
          first: 5,
          after: lastCity,
          orderBy: {
            direction: OrderDirection.Asc,
          },
          continent: type !== 'capital' && type !== 'popular' ? type.toUpperCase() : null,
          isCapital: type === 'capital' && type !== 'popular' ? true : null,
        },
      });
      setCities(prevState => [...prevState, ...newData.data.cities.edges]);
    }
  };

  return (
    <SafeAreaWrapper>
      {PLATFORM.IS_IOS && <ModalControl />}
      {PLATFORM.IS_IOS && (
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
          <Text style={tTitle}>{name}</Text>
        </View>
      )}
      <View>
        {loadingCounter === 0 && <VerticalListPlaceholder />}
        {loadingCounter > 0 && <CardList data={cities} onEndReached={handleEndReached} />}
      </View>
    </SafeAreaWrapper>
  );
};
