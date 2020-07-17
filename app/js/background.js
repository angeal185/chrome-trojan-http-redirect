chrome.runtime.onInstalled.addListener(function() {
  console.log('http-redirect installed')
});

chrome.tabs.onUpdated.addListener(function(id, info) {
  if(info.status === 'loading'){
    chrome.tabs.executeScript(id, {
      allFrames: true,
      file: 'app/js/index.js'
    });
  }
});
