console.log("Mood it");

var re = new RegExp(); // This isn't accurate RE
re.compile("like", "i");
var walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    function(node) {
        var matches = node.textContent.match(re);
        
        if(matches) { 
	    return NodeFilter.FILTER_ACCEPT;
        } else {
	    return NodeFilter.FILTER_SKIP;
        }
    },
    false);

var nodes = [];

while(walker.nextNode()) {
          nodes.push(walker.currentNode);
}

for(var i = 0; node=nodes[i] ; i++) {
    try {
	node.parentNode.innerHTML = node.parentNode.innerHTML.replace(re, "LOVE");
    } catch(err) {
	console.log("Error in:");
	console.log(node);
    }
}
