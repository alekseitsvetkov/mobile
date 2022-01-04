import React from 'react';

import { Card } from '_app/components';

export const renderItem = ({ item }: any) => {
  return <Card item={item.node} size="base" />;
};
