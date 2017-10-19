var watson = require('watson-developer-cloud');

var conversation = watson.conversation({
    username: 'fc2855b6-6181-4980-8313-2e5950ebbae2',
    password: 'MBPPGAcrjcsR',
    version: 'v1',
    version_date: '2017-02-03'
});

var context = {};

conversation.message({
    workspace_id: 'e008905c-64fb-495b-92fa-59fd69702d6d',
    input: { 'text': 'Eae' },
    context: context
}, function (err, response) {
    if (err) {
        console.log('error:', err);
    }
    else {
        console.log(JSON.stringify(response, null, 2));
    }
});

