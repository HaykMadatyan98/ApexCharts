const store = {
    RECENT_TASKS_TO_REVIEW: {
        1: {
            title: 'Title of the task with a short description',
            creator: 'UI/UX DESIGNER',
            date: 'OCT 6TH, 2020',
            name: 'NAME OF THE PROJECT',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in',
            commentsTotal: 10,
            attachmentsTotal: 5,
            priority: 'Normal',
            criticality: 'High'
        },
        2: {
            title: 'Title of the task with a short description',
            creator: 'TEAM LEAD',
            date: 'OCT 12TH, 2020',
            name: 'NAME OF THE PROJECT',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in',
            commentsTotal: 5,
            attachmentsTotal: 3,
            priority: 'Low',
            criticality: 'Normal'
        }
    },
    TOTALS: {
        TOTAL_TRANSICTIONS: 15,
        INITIATED: 2,
        IN_PROGRESS: 5,
        COMPLATED: 2
    },
}

export default store