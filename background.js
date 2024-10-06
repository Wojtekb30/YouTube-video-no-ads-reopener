chrome.action.onClicked.addListener(function(tab) {

  getTab().then(url => {
        console.log(url);
        var yt = url.substr(0,32)
        if (yt!="https://www.youtube.com/watch?v="){
        url = "error.html"
        
        } else {
        url=url.replace("https://www.youtube.com/watch?v=","");
        url=url.split("&")[0];
        //url=url+"https://www.youtube-nocookie.com/embed/";
        //url=url+"ABCD";
        url="wideo.html?url="+url;
        console.log(url);
        
        
        
      }  
      
        chrome.tabs.create({
    url: url,
    index: tab.index + 1, 
    active: true
  });
  




        
    })
  
  
  
  
});


async function getTab() {
  let queryOptions = { active: true, currentWindow: true };
  let tabs = await chrome.tabs.query(queryOptions);
  var tablica = tabs[0];
  var tekst = tabs[0].url;
  tekst = tekst.substr(0,32)
  if (tekst=="https://www.youtube.com/watch?v="){
  chrome.tabs.remove(tablica.id);}
  return tabs[0].url;
}

