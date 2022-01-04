import React, { useEffect, useRef, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, useColorScheme } from 'react-native';

import { SafeAreaWrapper } from '_app/components';
import { AppContext } from '_app/context';
import { useWantedQuery, OrderDirection, useVisitedQuery } from '_app/generated/graphql';
import { SCREEN_WIDTH } from '_app/utils/dimensions';

import { renderItem, renderHeader, Empty } from './elements';
import { s } from './styles';

export const ProfileUserScreen = ({ route }) => {
  const ref = useRef(null);
  const { t } = useTranslation();
  const scheme = useColorScheme();
  const { me, theme, selectedList, selectList } = useContext(AppContext);

  const [wanted, setWanted] = useState([]);
  const [visited, setVisited] = useState([]);

  const { user } = route.params;

  const isMe = me.id === user.id;

  const {
    data: dataWanted,
    loading: loadingWanted,
    error: errorWanted,
    refetch: refetchWanted,
    fetchMore: fetchMoreWanted,
  } = useWantedQuery({
    variables: {
      userId: user.id,
      first: 5,
      orderBy: {
        direction: OrderDirection.Asc,
      },
    },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    if (dataWanted && wanted.length === 0) {
      setWanted(dataWanted.wanted.edges);
    }
  }, [dataWanted]);

  const wantedEndReached = async () => {
    if (wanted) {
      const lastWanted = wanted[wanted.length - 1].node.id;
      const newData = await fetchMoreWanted({
        variables: {
          userId: user.id,
          first: 5,
          after: lastWanted,
          orderBy: {
            direction: OrderDirection.Asc,
          },
        },
      });
      setWanted(prevState => [...prevState, ...newData.data.wanted.edges]);
    }
  };

  const {
    data: dataVisited,
    loading: loadingVisited,
    error: errorVisited,
    refetch: refetchVisited,
    fetchMore: fetchMoreVisited,
  } = useVisitedQuery({
    variables: {
      userId: user.id,
      first: 5,
      orderBy: {
        direction: OrderDirection.Asc,
      },
    },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    if (dataVisited && visited.length === 0) {
      setVisited(dataVisited.visited.edges);
    }
  }, [dataVisited]);

  const visitedEndReached = async () => {
    if (wanted) {
      const lastVisited = visited[visited.length - 1].node.id;
      const newData = await fetchMoreVisited({
        variables: {
          userId: user.id,
          first: 5,
          after: lastVisited,
          orderBy: {
            direction: OrderDirection.Asc,
          },
        },
      });
      setVisited(prevState => [...prevState, ...newData.data.visited.edges]);
    }
  };

  const getData = () => {
    switch (selectedList) {
      case 'want':
        return wanted;
      case 'visited':
        return visited;

      default:
        return 'want';
    }
  };

  const type = selectedList === 'moments' ? 'moments' : 'list';

  return (
    <SafeAreaWrapper>
      <FlatList
        ref={ref}
        ListHeaderComponent={renderHeader({
          user,
          t,
          isMe,
          theme,
          scheme,
          route,
          selectList,
        })}
        ListEmptyComponent={() => <Empty t={t} theme={theme} type={type} />}
        numColumns={2}
        data={selectedList === 'moments' ? null : getData()}
        columnWrapperStyle={s.listWrapper}
        contentContainerStyle={{ width: SCREEN_WIDTH }}
        renderItem={renderItem}
        keyExtractor={item => item.node.id}
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
        onEndReached={() => (selectedList === 'want' ? wantedEndReached() : visitedEndReached())}
      />
    </SafeAreaWrapper>
  );
};
