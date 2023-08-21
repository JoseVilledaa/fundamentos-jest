const fetchDataOverApi = require('./fetchData.js');

test('the user data for user 1', async() => { 
    const data  = await fetchDataOverApi();
    expect(data).toBe("Jose");
 });