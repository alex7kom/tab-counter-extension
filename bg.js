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

function start() {
  queryTabs();

  chrome.action.setBadgeBackgroundColor({
    color: "#333333",
  });
}

chrome.runtime.onInstalled.addListener(start);
chrome.runtime.onStartup.addListener(start);

chrome.tabs.onCreated.addListener(queryTabs);
chrome.tabs.onRemoved.addListener(queryTabs);
