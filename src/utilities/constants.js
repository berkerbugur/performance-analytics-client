const githubAcc = 'https://github.com/berkerbugur';
const apiEndpoint = '{YOUR_API_FOR_FETCHING_METRICS_GOES_HERE}' //TODO

const chartVals = [
    {
        labelName: "Time To First Byte",
        varName: "ttfb",
    },
    {
        labelName: "First Contentful Paint",
        varName: "fcp",
    },
    {
        labelName: "DOM Load",
        varName: "domLoad",
    },
    {
        labelName: "Window Load",
        varName: "windowLoad",
    }
];

export {githubAcc, apiEndpoint, chartVals}