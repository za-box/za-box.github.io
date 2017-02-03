var WHITE_ICON = './images/icon-white.svg';
var GRAY_ICON = './images/icon-gray.svg';

function openJiraTask(url) {
    debugOptions(url)
}

function debugOptions(options) {
    console.log(JSON.stringify(options));
}

function showAuthorBadge(trello) {
    trello.card('members')
        .then(result => {
            console.log(result);
            return [];
        })
}

function openSettings(options) {
    debugOptions(options)
}
TrelloPowerUp.initialize({
    'attachment-sections': function (t, options) {
        return []
    },
    'attachment-thumbnail': function (t, options) {
        throw t.NotHandled();
    },
    'board-buttons': function (t, options) {
        return [{
            icon: WHITE_ICON,
            text: 'Open Jira task',
            callback: () => openSettings(options)
        }];
    },
    'card-badges': function (t, options) {
        debugOptions(options);
        return [];
    },
    'card-buttons': function (t, options) {
        return [{
            icon: GRAY_ICON,
            text: 'Open Jira Task',
            callback: () => openJiraTask(options)
        }];
    },
    'card-detail-badges': function (t, options) {
        showAuthorBadge(t);
    },
    'card-from-url': function (t, options) {
        throw t.NotHandled();

    },

    'show-settings': function (t, options) {
        return t.popup({
            title: 'Settings',
            url: './settings.html',
            height: 184
        });
    }
});