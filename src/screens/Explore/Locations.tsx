import { useScrollToTop } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native-gesture-handler';

import { SafeAreaWrapper } from '_app/components';
// import { HorizontalCardList } from '_app/components';
import { OrderDirection, useCitiesQuery } from '_app/generated/graphql';

export const LocationsScreen = () => {
  const { t } = useTranslation();
  const ref = useRef<ScrollView>(null);
  const [capital, setCapital] = useState([]);
  const [europe, setEurope] = useState([]);
  const [asia, setAsia] = useState([]);
  const [australia, setAustralia] = useState([]);
  const [americas, setAmericas] = useState([]);
  const [africa, setAfrica] = useState([]);

  const {
    data: dataCapital,
    loading: loadingCapital,
    error: errorCapital,
    fetchMore: fetchMoreCapital,
  } = useCitiesQuery({
    variables: {
      first: 5,
      orderBy: {
        direction: OrderDirection.Asc,
      },
      isCapital: true,
    },
    notifyOnNetworkStatusChange: true,
  });

  const {
    data: dataEurope,
    loading: loadingEurope,
    error: errorEurope,
    fetchMore: fetchMoreEurope,
  } = useCitiesQuery({
    variables: {
      first: 5,
      orderBy: {
        direction: OrderDirection.Asc,
      },
      continent: 'EUROPE',
    },
    notifyOnNetworkStatusChange: true,
  });

  const {
    data: dataAsia,
    loading: loadingAsia,
    error: errorAsia,
    fetchMore: fetchMoreAsia,
  } = useCitiesQuery({
    variables: {
      first: 5,
      orderBy: {
        direction: OrderDirection.Asc,
      },
      continent: 'ASIA',
    },
    notifyOnNetworkStatusChange: true,
  });

  const {
    data: dataAustralia,
    loading: loadingAustralia,
    error: errorAustralia,
    fetchMore: fetchMoreAustralia,
  } = useCitiesQuery({
    variables: {
      first: 5,
      orderBy: {
        direction: OrderDirection.Asc,
      },
      continent: 'OCEANIA',
    },
    notifyOnNetworkStatusChange: true,
  });

  const {
    data: dataAmericas,
    loading: loadingAmericas,
    error: errorAmericas,
    fetchMore: fetchMoreAmericas,
  } = useCitiesQuery({
    variables: {
      first: 5,
      orderBy: {
        direction: OrderDirection.Asc,
      },
      continent: 'AMERICAS',
    },
    notifyOnNetworkStatusChange: true,
  });

  const {
    data: dataAfrica,
    loading: loadingAfrica,
    error: errorAfrica,
    fetchMore: fetchMoreAfrica,
  } = useCitiesQuery({
    variables: {
      first: 5,
      orderBy: {
        direction: OrderDirection.Asc,
      },
      continent: 'AFRICA',
    },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    if (dataCapital && capital.length === 0) {
      setCapital(dataCapital.cities.edges);
    }
  }, [dataCapital]);

  useEffect(() => {
    if (dataEurope && europe.length === 0) {
      setEurope(dataEurope.cities.edges);
    }
  }, [dataEurope]);

  useEffect(() => {
    if (dataAsia && asia.length === 0) {
      setAsia(dataAsia.cities.edges);
    }
  }, [dataAsia]);

  useEffect(() => {
    if (dataAustralia && australia.length === 0) {
      setAustralia(dataAustralia.cities.edges);
    }
  }, [dataAustralia]);

  useEffect(() => {
    if (dataAmericas && americas.length === 0) {
      setAmericas(dataAmericas.cities.edges);
    }
  }, [dataAmericas]);

  useEffect(() => {
    if (dataAfrica && africa.length === 0) {
      setAfrica(dataAfrica.cities.edges);
    }
  }, [dataAfrica]);

  useScrollToTop(ref);

  const capitalEndReached = async () => {
    if (capital) {
      const lastCapital = capital[capital.length - 1].node.id;
      const newData = await fetchMoreCapital({
        variables: {
          first: 5,
          after: lastCapital,
          orderBy: {
            direction: OrderDirection.Asc,
          },
          isCapital: true,
        },
      });
      setCapital(prevState => [...prevState, ...newData.data.cities.edges]);
    }
  };

  const europeEndReached = async () => {
    if (europe) {
      const lastEurope = europe[europe.length - 1].node.id;
      const newData = await fetchMoreEurope({
        variables: {
          first: 5,
          after: lastEurope,
          orderBy: {
            direction: OrderDirection.Asc,
          },
          continent: 'EUROPE',
        },
      });
      setEurope(prevState => [...prevState, ...newData.data.cities.edges]);
    }
  };

  const asiaEndReached = async () => {
    if (asia) {
      const lastAsia = asia[asia.length - 1].node.id;
      const newData = await fetchMoreAsia({
        variables: {
          first: 5,
          after: lastAsia,
          orderBy: {
            direction: OrderDirection.Asc,
          },
          continent: 'ASIA',
        },
      });
      setAsia(prevState => [...prevState, ...newData.data.cities.edges]);
    }
  };

  const australiaEndReached = async () => {
    if (australia) {
      const lastAustralia = australia[australia.length - 1].node.id;
      const newData = await fetchMoreAustralia({
        variables: {
          first: 5,
          after: lastAustralia,
          orderBy: {
            direction: OrderDirection.Asc,
          },
          continent: 'OCEANIA',
        },
      });
      setAustralia(prevState => [...prevState, ...newData.data.cities.edges]);
    }
  };

  const americasEndReached = async () => {
    if (americas) {
      const lastAmericas = americas[americas.length - 1].node.id;
      const newData = await fetchMoreAmericas({
        variables: {
          first: 5,
          after: lastAmericas,
          orderBy: {
            direction: OrderDirection.Asc,
          },
          continent: 'AMERICAS',
        },
      });
      setAmericas(prevState => [...prevState, ...newData.data.cities.edges]);
    }
  };

  const africaEndReached = async () => {
    if (africa) {
      const lastAfrica = africa[africa.length - 1].node.id;
      const newData = await fetchMoreAfrica({
        variables: {
          first: 5,
          after: lastAfrica,
          orderBy: {
            direction: OrderDirection.Asc,
          },
          continent: 'AFRICA',
        },
      });
      setAfrica(prevState => [...prevState, ...newData.data.cities.edges]);
    }
  };

  return (
    <SafeAreaWrapper>
      <ScrollView ref={ref} showsVerticalScrollIndicator={false} scrollsToTop={true}>
        {/* <HorizontalCardList
          title={`${t('explore:capital')}`}
          data={capital}
          size="wide"
          handleEndReached={capitalEndReached}
          loading={loadingCapital}
          type="capital"
        />
        <HorizontalCardList
          title={`${t('explore:europe')}`}
          data={europe}
          size="small"
          handleEndReached={europeEndReached}
          loading={loadingEurope}
          type="europe"
        />
        <HorizontalCardList
          title={`${t('explore:asia')}`}
          data={asia}
          size="small"
          handleEndReached={asiaEndReached}
          loading={loadingAsia}
          type="asia"
        />
        <HorizontalCardList
          title={`${t('explore:australia')}`}
          data={australia}
          size="small"
          handleEndReached={australiaEndReached}
          loading={loadingAustralia}
          type="oceania"
        />
        <HorizontalCardList
          title={`${t('explore:americas')}`}
          data={americas}
          size="small"
          handleEndReached={americasEndReached}
          loading={loadingAmericas}
          type="americas"
        />
        <HorizontalCardList
          title={`${t('explore:africa')}`}
          data={africa}
          size="small"
          handleEndReached={africaEndReached}
          loading={loadingAfrica}
          type="africa"
        />*/}
      </ScrollView>
    </SafeAreaWrapper>
  );
};
