import { configure } from '@kadira/storybook';

function loadStories() {
  var normalizedPath = require("path").join(__dirname, "routes");

  require("fs").readdirSync(normalizedPath).forEach(function(file) {
    require('../imports/ui/stories/' + file);
  });
}

configure(loadStories, module);