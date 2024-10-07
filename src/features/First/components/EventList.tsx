import { RefreshControl, FlatList, FlatListProps, ActivityIndicator } from "react-native";
import React, { FC } from "react";
import { GitHubListItem } from "@/definitions/GitHubList";
import EventListItem from "./EventListItem";
import { RenderWithCondition } from "@/hoc/RenderWithCondition";
import { FlexCenterView } from "@/styled";

interface EventListProps extends Partial<FlatListProps<GitHubListItem>> {
    list: GitHubListItem[],
    isLoading: boolean
    onRefresh: () => void
    onItemPress: (item: GitHubListItem) => void
}

const EventList: FC<EventListProps> = React.forwardRef<FlatList ,EventListProps>((
    { list, isLoading, onRefresh, onItemPress, ...props }, 
    ref
) => (
    <FlatList
        {...props}
        ref={ref}
        data={list}
        refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
        }
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <EventListItem item={item} onPress={onItemPress} />}
        ListFooterComponent={() => (
            <RenderWithCondition condition={isLoading}>
                <FlexCenterView>
                    <ActivityIndicator />
                </FlexCenterView>
            </RenderWithCondition>
        )}
    />
));


//compare arrays of ids
function isEqual(prevProps: EventListProps, nextProps: EventListProps) {
    const listPrevFlat = prevProps.list.map(item => item.id);
    const listNextFlat = nextProps.list.map(item => item.id);

    return (
        listPrevFlat.length === listNextFlat.length 
        && listPrevFlat.every((value, index) => value === listNextFlat[index])
    );
}

export default React.memo(EventList, isEqual);