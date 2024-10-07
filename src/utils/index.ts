import { Platform } from "react-native";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export function uuid() {
    let u = "",
        i = 0;
    while (i++ < 36) {
        const c = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"[i - 1],
            r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
        u += c == "-" || c == "4" ? c : v.toString(16);
    }
    return u;
}

export function isNullOrEmpty(value: unknown) {
    if (!value) return;
    return !!Object.keys(value);
}

export function isIos() {
    return Platform.OS === "ios";
}

export function isFetchBaseQueryError(
    error: unknown
): error is FetchBaseQueryError {
    return typeof error === "object" && error != null && "status" in error;
}

export function isErrorWithMessage(
    error: unknown
): error is { message: string } {
    return (
        typeof error === "object" &&
        error != null &&
        "message" in error &&
        typeof (error as any).message === "string"
    );
}
