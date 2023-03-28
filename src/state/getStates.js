import store from "./store";

function getRecentTaskData (state) {
    return store.RECENT_TASKS_TO_REVIEW[state]
}

function getTotals() {
    return store.TOTALS
}


export {
    getRecentTaskData,
    getTotals
}