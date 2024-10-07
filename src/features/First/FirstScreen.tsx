import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { useLazyGetGitHubListQuery } from "@/api";
import { GitHubListItem, ListRequestParams } from "@/definitions/GitHubList";
import { isErrorWithMessage, isFetchBaseQueryError } from "@/utils";
import useTypedNavigation from "@/hooks/useTypedNavigation";
import { AppRouteNames } from "@/router/types";
import { useToast } from "react-native-toast-notifications";
import LoadingView from "./components/LoadingScreen";
import { useDispatch, useSelector } from "react-redux";
import { selectList, setList } from "./firstSlice";
import useTimer from "@/hooks/useTimer";
import EventList from "./components/EventList";
import { useIsFocused, useScrollToTop } from "@react-navigation/native";

const DEFAULT_PARAMS: ListRequestParams = {
    per_page: 25,
    page:     1,
};

const FirstScreen: FC = () => {
    const navigation = useTypedNavigation();
    const isFocused = useIsFocused();
    const dispatch = useDispatch();
    const list = useSelector(selectList);

    const toast = useToast();

    const [page, setPage] = useState(1);

    const [getList, { 
        isLoading,
        isFetching, 
        isError,
        error, 
    }] = useLazyGetGitHubListQuery();

    const eventListRef = useRef(null);

    useEffect(() => {
        timer.toggle(true);
        loadData();
    }, []);

    useEffect(() => {
        if (!isError) return;
        renderErrorNotify();
    }, [isError]);

    useEffect(() => {
        timer.toggle(isFocused);
    }, [isFocused]);

    const loadData = () => {
        getList(DEFAULT_PARAMS)
            .unwrap()
            .then(response => {
                dispatch(setList(response));
                setPage(1);
                useScrollToTop(eventListRef);
            });
    };

    const loadMoreData = useCallback(() => {
        getList({
            per_page: 25,
            page,
        })
            .unwrap()
            .then(response => {
                dispatch(setList([...list, ...response]));
                setPage(prev => prev + 1);
            });
    }, [page]);


    const onRefreshData = () => {
        timer.reset();
        loadData();
    };

    const timer = useTimer(30, onRefreshData);
    
    const renderErrorNotify = useCallback(() => {
        let message = "Something went wrong.";

        if (isErrorWithMessage(error)) {
            message = error.message;
        } else if (isFetchBaseQueryError(error)) {
            message = "error" in error ? error.error : JSON.stringify(error.data);
        }
        
        toast.show(message, {
            type:          "danger",
            placement:     "bottom",
            duration:      5000,
            animationType: "slide-in",
        });
    }, [error]);

    const handleItemPress = (item: GitHubListItem) => {
        navigation.navigate(
            AppRouteNames.FirstDetail, 
            { details: item }
        );
    };


    if (isLoading) {
        return <LoadingView />;
    }

    return (
        <EventList 
            ref={eventListRef}
            list={list}
            isLoading={isFetching}
            onItemPress={handleItemPress}
            onRefresh={onRefreshData}
            onEndReached={loadMoreData}
            onEndReachedThreshold={0}
        />
    );
};

export default FirstScreen;
