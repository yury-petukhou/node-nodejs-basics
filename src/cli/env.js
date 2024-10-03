const parseEnv = () => {
    // Write your code here 
    const rssVariables = Object.entries(process.env)
        .filter(([key]) => key.startsWith('RSS_'))
        .map(([key, value]) => `${key}=${value}`)
        .join(' ');
        console.log(rssVariables)
};
process.env.RSS_TEST1 = 'value1';
process.env.RSS_TEST2 = 'value2';
process.env.OTHER_VAR = 'not included';

parseEnv();