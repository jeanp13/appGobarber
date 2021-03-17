import React from 'react';
import { View, Text } from 'react-native';
import { useAuth } from '../../hooks/auth';

import Button from '../../components/Button';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Nome:
        {user.name}
      </Text>
      <Button onPress={signOut}>Logout</Button>
    </View>
  );
};

export default Dashboard;
