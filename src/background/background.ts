// chrome.runtime.onMessage.addListener((title, sender, sendResponse) => {
//   return true;
// })




chrome.contextMenus.create({
  id: 'baidu-search',
  title: '使用度娘搜索：%s',
  contexts: ['selection']
});

// chrome.contextMenus.create({
//   id: 'baidu-search2',
//   title: '使用度娘搜索图片：%s',
//   contexts: ['image']
// });

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  // console.log(info);
  // console.log(tab);
  switch (info.menuItemId) {
    case 'baidu-search':

      chrome.tabs.create({ url: 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(info.selectionText) });
      break;
  }
});


