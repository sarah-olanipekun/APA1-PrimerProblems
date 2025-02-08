//Define required node structure
class Node {
  constructor(textData, timestampData, authorData, next = null) {
    this.data = {
      text : textData,
      timestamp : timestampData,
      author : authorData
    };
    this.next = next;
  }
}

function createLinkedList(posts) {
  let head = null;

  if (posts.length === 0) {
    return head;
  }

  // Error handling
  for (const post of posts) {
    const keyArray = Object.keys(post);
    if (keyArray.length !== 3) {
      throw new error(`Invalid number of keys.`)
    }
    if (!(keyArray.includes('text') && keyArray.includes('timestamp') && keyArray.includes('author'))) {
      throw new error(`Invalid key.`)
    }
    if (post.text.trim()==='' || typeof(post.text)!=='string' || post.author.trim()==='' || typeof(post.author)!=='string') {
      throw new error(`Invalid value.`)
    } 
    if (new Date(post.timestamp)=='Invalid Date') {
      throw new error(`Invalid timestamp.`)
    }
  }

  //Create linked list
  head = new Node(posts[0].text, posts[0].timestamp, posts[0].author);
  let current = head;
  for (let i = 1; i < posts.length; i++) {
    current.next = new Node(posts[i].text, posts[i].timestamp, posts[i].author);
    current = current.next;
  }
  
  return head;
}


function searchSocialMediaFeed(feed, keyword) {
  if (feed === null) {
    throw new Error(`The feed is empty`);
  }
  
  //Transform the keyword input into an array of keywords now in lowercase ready for comparison
  let keywordArray = [keyword.toLowerCase().trim()];
  if (keywordArray[0].search(" ") !== -1) {
     keywordArray = keyword.split(" ");
  }

  let result = [];

  let current = feed;

  //conduct search, pushing any matches found into the 'result' array
  while (current) {
    const currentText = (current.data.text).toLowerCase();

    for (let i = 0; i<keywordArray.length; i++) {
      if (currentText.search(keywordArray[i]) !== -1) {
        result.push(current.data);
        i = keywordArray.length;
      }
    }
    current = current.next;
  }

  return result;
}

export {createLinkedList, searchSocialMediaFeed};
