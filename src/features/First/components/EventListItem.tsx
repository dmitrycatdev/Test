import React, { FC } from "react";
import styled from "styled-components/native";
import { GitHubListItem } from "@/definitions/GitHubList";
import { FlexColumnView, FlexStartView } from "@/styled";
import { Text } from "react-native";

const Avatar = styled.Image`
    height: ${50}px;
    width: ${50}px;
    border-radius: ${100}px;
    border-width: ${1}px;
    border-color: black;
    margin-right: ${20}px;
`;

const ListItemWrapper = styled.TouchableOpacity`
    margin: ${10}px;
    background-color: white;
    flex-direction: row;
    padding: ${10}px;
    border-radius: ${10}px;
`;
const SubText = styled.Text`
    color: darkgray;
    font-size: ${10}px;
`;

type EventListItemProps = {
    item: GitHubListItem,
    onPress: (item: GitHubListItem) => void
}

const EventListItem: FC<EventListItemProps> = ({ item, onPress }) => {    
    const handlePress = () => {
        onPress(item); 
    };
    
    return (
        <ListItemWrapper onPress={handlePress}>
            <FlexStartView>
                <Avatar source={{ uri: item.actor.avatar_url }} />
            </FlexStartView>
            <FlexColumnView>
                <Text>{item.actor.display_login}</Text>
                <SubText>id: {item.id}</SubText>
            </FlexColumnView>
        </ListItemWrapper>
    );
};

function isEqual(prevProps: EventListItemProps, nextProps: EventListItemProps) {
    return (
        prevProps.item.id === nextProps.item.id 
        && prevProps.item.actor.avatar_url === nextProps.item.actor.avatar_url 
        && prevProps.item.actor.display_login === nextProps.item.actor.display_login 

    );
}

export default React.memo(EventListItem, isEqual);
