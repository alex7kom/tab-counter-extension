function setBadgeText(text) {
  chrome.action.setBadgeText({
    text: text,
  });
}

function queryTabs() {
  chrome.tabs.query({}, function (tabs) {
    setBadgeText(String(tabs.length));
  });
}

chrome.runtime.onInstalled.addListener(function () {
  queryTabs();

  chrome.action.setBadgeBackgroundColor({
    color: "#333333",
  });
});

chrome.tabs.onCreated.addListener(queryTabs);
chrome.tabs.onRemoved.addListener(queryTabs);
