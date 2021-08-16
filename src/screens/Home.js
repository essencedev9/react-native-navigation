import React from 'react';
import styled from 'styled-components/native';
import Button from '../components/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Container = styled.View`
  align-items: center;
  /* background-color: #ffffff; */
  padding-top: ${({ insets: { top } }) => top}px;
  padding-left: ${({ insets: { left } }) => left}px;
  padding-right: ${({ insets: { right } }) => right}px;
  padding-bottom: ${({ insets: { bottom } }) => bottom}px;
`;
const StyledText = styled.Text`
  font-size: 30px;
  margin: 10px;
`;

const Home = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <Container insets={insets}>
      <StyledText>Home</StyledText>
      <Button title="List" onPress={() => navigation.navigate('List')} />
    </Container>
  );
};

export default Home;
