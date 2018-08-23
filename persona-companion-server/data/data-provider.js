var fileSystem = require('fs');

const MEDIA_ITEMS_JSON_FILE = './mockups/mediaItems.json';
const MEDIA_TYPE_JSON_FILE = './mockups/mediaTypes.json';
const SOCIAL_STAT_TYPE_JSON_FILE = './mockups/socialStatTypes.json';
const CONTRIBUTION_TYPE_JSON_FILE = './mockups/contributionTypes.json';

module.exports = {
    getMediaItems(isCompleted) {
        var fileContent = fileSystem.readFileSync(MEDIA_ITEMS_JSON_FILE, 'utf8');
        var mediaItems = JSON.parse(fileContent);

        var filtered = [];
        for (var i = 0; i < mediaItems.length; i++) {
            var media = mediaItems[i];
            if ((isCompleted && media.currentProgress == media.length) ||
                (!isCompleted && media.currentProgress < media.length)) {
                filtered.push(media);
            }
        }

        return filtered;
    },

    getMediaTypes() {
        var fileContent = fileSystem.readFileSync(MEDIA_TYPE_JSON_FILE, 'utf8');
        return JSON.parse(fileContent);
    },

    getSocialStatTypes() {
        var fileContent = fileSystem.readFileSync(SOCIAL_STAT_TYPE_JSON_FILE, 'utf8');
        return JSON.parse(fileContent);
    },

    getContributionTypes() {
        var fileContent = fileSystem.readFileSync(CONTRIBUTION_TYPE_JSON_FILE, 'utf8');
        return JSON.parse(fileContent);
    }
}