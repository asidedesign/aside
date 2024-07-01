// Encode URLs
const editableHeading = document.getElementById("editableHeading"),
    routes = { 
      a7X9p: btoa("portfolio/"), 
      k3L2m: btoa("static/500.html"),
      cYp1A2: btoa("jlopera/") 
    },
    keywordToRoute = { 
      portfolio: "a7X9p", 
      info: "k3L2m",
      julian: "cYp1A2",
      julián: "cYp1A2" 
    };

    function decodeAndRedirect(e) {
    window.location.href = atob(e);
}

// Decode and redirect
function decodeAndRedirect(e) {
    let t = atob(e);
    window.location.href = t.replace(".html", "");
}

editableHeading.addEventListener("keydown", function (e) {
    if ("Enter" === e.key) {
        e.preventDefault();
        let t = this.textContent.trim().toLowerCase(),
            o = keywordToRoute[t];
        o && routes[o] && decodeAndRedirect(routes[o]);
    }
});
