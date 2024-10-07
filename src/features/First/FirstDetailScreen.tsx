import { Text } from "react-native";
import React, { FC } from "react";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppRouteNames, AppStackParamList } from "@/router/types";
import { FlexColumnView, FlexRowView } from "@/styled";

const Container = styled.View`
    padding: ${16}px;
    margin: ${16}px;
    background-color: white;
    border-radius: ${10}px;
`;

const Avatar = styled.Image`
    height: ${50}px;
    width: ${50}px;
    border-radius: ${100}px;
    border: 1px solid black;
    margin-right: ${20}px;
`;

const SubText = styled.Text`
    color: darkgray;
    font-size: ${10}px;
`;

export type FirstDetailScreenProps = NativeStackScreenProps<AppStackParamList, AppRouteNames.FirstDetail>;

const FirstDetailScreen: FC<FirstDetailScreenProps> = ({ route: { params: { details } } }) => {
    return (
        <Container>
            <FlexRowView>
                <Avatar source={{ uri: details.actor.avatar_url }} />

                <FlexColumnView>
                    <Text>{details.actor.display_login}</Text>
                    <SubText>id: {details.id}</SubText>
                </FlexColumnView>
            </FlexRowView>
            <Text style={{ marginTop: 16 }}>
                {JSON.stringify(details, null, 4)}
            </Text>
        </Container>
    );
};

export default FirstDetailScreen;