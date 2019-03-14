
/*

loop

Function appendChildren should add a new child div to each existing div. New divs should be decorated by calling decorateDiv.

For example, after appendChildren is executed, the following divs:

<div id="a">
  <div id="b">
  </div>
</div>

should take the following form (assuming decorateDiv does nothing):

<div id="a">
  <div id="b">
    <div></div>
  </div>
  <div></div>
</div>

The code below should do the job, but for some reason it goes into an infinite loop. Fix the bugs.



*/



function appendChildren(decorateDivFunction) {
    var allDivs = Array.from(document.getElementsByTagName("div"));
    for (var i = 0; i < allDivs.length; i++) {
      var newDiv = document.createElement("div");
      decorateDivFunction(newDiv);
      allDivs[i].appendChild(newDiv);
    }
  }

// Example case. 
document.body.innerHTML = `
<div id="a">
  <div id="b">
  </div>
</div>`;

//appendChildren(function(div) {});
console.log(document.body.innerHTML);