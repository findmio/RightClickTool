chrome.contextMenus.removeAll(async () => {

  // chrome.storage.sync.set({ config: Array(10).fill(0) });

  const config = await chrome.storage.sync.get('config')

  chrome.contextMenus.create({
    id: 'baidu-search',
    title: '使用度娘搜索：%s',
    contexts: ['selection']
  });

  chrome.contextMenus.onClicked.addListener(function (info, tab) {
    switch (info.menuItemId) {
      case 'baidu-search':
        chrome.tabs.create({ url: 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(info.selectionText) });
        break;
    }
  });

});
