import styled from "styled-components/native";

export const FlexCenterView = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ScreenCenterView = styled(FlexCenterView)`
    flex: 1;
`;

export const ErrorText = styled.Text`
    background-color: red;
    color: white;
    padding: 10px;
`;
export const FlexStartView = styled.View`
    display: flex;
    justify-content: flex-start;
`;

export const FlexStartCenterView = styled.View`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const FlexColumnView = styled.View`
    display: flex;
    flex-direction: column;
`;

export const FlexRowView = styled.View`
    display: flex;
    flex-direction: row;
`;

export const FlexColumnCenterView = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
