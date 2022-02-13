
import React, { FC, useState, useCallback } from 'react'

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function useRefresh(initialState) {
    const [refreshing, setRefresh] = useState(initialState)
    const onRefresh = useCallback(() => {
        setRefresh(true);
        wait(2000).then(() => setRefresh(false));
    }, []);
    return {
        refreshing, onRefresh
    }
}