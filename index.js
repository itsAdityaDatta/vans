
let curr = 0;
let msgs = [" MOMO! Happy birthday love! I love and adore you, and I'm so proud of you. I hope you celebrate this day like you celebrated your first birthday, naked and screaming hehe. Looking forward to many more birthdays together xoxo", 
"Itna badi ho gayi ho abhi tak biyah nahi hua? Happy 23rd you lovely lovely human. I love you.  Looking forward to many more seshes and trips.", 
"There is a Gartner Hype cycle which defines following phases: Technology Trigger, Peak of Inflated Expectation, Trough of Disillusionment, Slope of Enlightenment and finally Plateau of Productivity. I have seen you go from every phase in your life and I can say, there's no plateau of Productivity for you..... sike ... only a steep slope of productivity and I love this opportunity to be a part of your life journey.  While this journey makes me a better person, I hope I add value to your life as well. Thank you VansXOXO and Happy Birthday. PS: Marry Aditya.",
"Happy Birthday Aru di, you're the coolest person ever, I love you and miss you so much. I hope you get all that u wish for and more. Have a blast <3",
"A very happy birthday to our beautiful Aru. We love you so much! May your confidence always stay high as you and may you get everything you ever wish for in your life. You’re perfect in every way, a party starter, curator of amazing music and the chillest human alive. we love you. Stay blessed"];
let authors = ["Datta", "Foram", "Anuj", "Peehu", "Shivika bhabhi & Golu bhaiya"];

$(document).ready(function () {
    function parallax() {
    var s = document.getElementById("floater1");
    var s2 = document.getElementById("floater2");
    var s3 = document.getElementById("floater3");
      var yPos = 0 - window.pageYOffset/12;	
      var yPos2 = 0 - window.pageYOffset/4;	
      var yPos3 = 0 - window.pageYOffset/6;	
      s.style.top = 100 + yPos + "%";
      s2.style.top = 100 + yPos2 + "%";
      s3.style.top = 260 + yPos3 + "%";
    }
    
    window.addEventListener("scroll", function(){
        parallax();	
    });
 });



 function playMusic1(){
  var music = new Audio('vansdatta.mp3');
  music.play();
  }

  function playMusic2(){
    var music = new Audio('jaa.mp3');
    music.play();
    }


 function scrollRight(){
    curr = (curr+1)%(msgs.length);
    document.getElementById('msg').innerHTML = msgs[curr];
    document.getElementById('author').innerHTML = authors[curr];
 }
 
 function scrollToLeft(){
    if(curr == 0) curr = msgs.length - 1;
    else curr = curr-1;
    document.getElementById('msg').innerHTML = msgs[curr];
    document.getElementById('author').innerHTML = authors[curr];
 }

 
 const typedTextSpan = document.querySelector(".typed-text");
 const cursorSpan = document.querySelector(".cursor");


 const typedTextSpan2 = document.querySelector(".typed-text2");
 const cursorSpan2 = document.querySelector(".cursor2");


 const typedTextSpan3 = document.querySelector(".typed-text3");
 const cursorSpan3 = document.querySelector(".cursor3");
 
 const textArray = ["Birthday Wishes", "जन्मदिन की शुभकामनाएं", "سالگرہ کی مبارکبادیں"];
 const textArray2 = ["Spin The Wheel", "पहिया घुमाएं", "وہیل گھماؤ"];
 const textArray3 = ["Spotlight Sagas", "स्पॉटलाइट सागास", "اسپاٹ لائٹ ساگاس"];

 const typingDelay = 200;
 const erasingDelay = 100;
 const newTextDelay = 2000; // Delay between current and next text
 const typingDelay2 = 200;
 const erasingDelay2 = 100;
 const newTextDelay2 = 2000; // Delay between current and next text
 const typingDelay3 = 200;
 const erasingDelay3 = 100;
 const newTextDelay3 = 2000; // Delay between current and next text
 let textArrayIndex = 0;
 let charIndex = 0;
 let textArrayIndex2 = 0;
 let charIndex2 = 0;
 let textArrayIndex3 = 0;
 let charIndex3 = 0;
 
 
 function type() {
   if (charIndex < textArray[textArrayIndex].length) {
     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
     typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
     charIndex++;
     setTimeout(type, typingDelay);
   } 
   else {
     cursorSpan.classList.remove("typing");
       setTimeout(erase, newTextDelay);
   }
 }
 function type2() {
    if (charIndex2 < textArray2[textArrayIndex2].length) {
      if(!cursorSpan2.classList.contains("typing")) cursorSpan2.classList.add("typing");
      typedTextSpan2.textContent += textArray2[textArrayIndex2].charAt(charIndex2);
      charIndex2++;
      setTimeout(type2, typingDelay2);
    } 
    else {
      cursorSpan2.classList.remove("typing");
        setTimeout(erase2, newTextDelay2);
    }
  }
  
 function type3() {
    if (charIndex3 < textArray3[textArrayIndex3].length) {
      if(!cursorSpan3.classList.contains("typing")) cursorSpan3.classList.add("typing");
      typedTextSpan3.textContent += textArray3[textArrayIndex3].charAt(charIndex3);
      charIndex3++;
      setTimeout(type3, typingDelay3);
    } 
    else {
      cursorSpan3.classList.remove("typing");
        setTimeout(erase3, newTextDelay3);
    }
  }
  
 
 function erase() {
     if (charIndex > 0) {
     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
     typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
     charIndex--;
     setTimeout(erase, erasingDelay);
   } 
   else {
     cursorSpan.classList.remove("typing");
     textArrayIndex++;
     if(textArrayIndex>=textArray.length) textArrayIndex=0;
     setTimeout(type, typingDelay + 1100);
   }
 }

 function erase2() {
    if (charIndex2 > 0) {
    if(!cursorSpan2.classList.contains("typing")) cursorSpan2.classList.add("typing");
    typedTextSpan2.textContent = textArray2[textArrayIndex2].substring(0, charIndex2-1);
    charIndex2--;
    setTimeout(erase2, erasingDelay2);
  } 
  else {
    cursorSpan2.classList.remove("typing");
    textArrayIndex2++;
    if(textArrayIndex2>=textArray2.length) textArrayIndex2=0;
    setTimeout(type2, typingDelay2 + 1100);
  }
}
function erase3() {
    if (charIndex3 > 0) {
    if(!cursorSpan3.classList.contains("typing")) cursorSpan3.classList.add("typing");
    typedTextSpan3.textContent = textArray3[textArrayIndex3].substring(0, charIndex3-1);
    charIndex3--;
    setTimeout(erase3, erasingDelay3);
  } 
  else {
    cursorSpan3.classList.remove("typing");
    textArrayIndex3++;
    if(textArrayIndex3>=textArray3.length) textArrayIndex3=0;
    setTimeout(type3, typingDelay3 + 1100);
  }
}
 
 document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
   if(textArray.length) setTimeout(type, newTextDelay + 250);
   if(textArray2.length) setTimeout(type2, newTextDelay2 + 250);
   if(textArray3.length) setTimeout(type3, newTextDelay3 + 250);
 });

 function animate(){
  
    function rndRange(start, end){
      let diff = end - start;
      let chunk = diff * Math.random();
      let rnd = Math.floor(chunk);
      return rnd;
    }
    
    class ColorHandler {
      constructor({el}){
        this.el = el;
      }
  
      randomColor(){
        let [ start, end ] = [ 0, 255 ];
        return {
          r: rndRange(start, end),
          g: rndRange(start, end),
          b: rndRange(start, end)
        }
      }
  
      randomRgbaColorString(){
        let rndColor = this.randomColor();
        let {
          r, g, b,
        } = rndColor;
        let colorStr = `rgba(${r}, ${g}, ${b}, 0.4)`;
        return colorStr;
      }
  
      randomizeElementBgColor(el){
        this.el.style.backgroundColor = this.randomRgbaColorString();
      }
    }
    
    class ImageHandler {
      constructor({el}){
        this.el = el;
      }
      async getRandomImage(keyword){
        let baseUrl = 'https://api.giphy.com/v1/gifs/random';
        let imageUrl;
        try {
          let res = await axios.get(baseUrl + `?api_key=dc6zaTOxFJmzC&tag=${keyword}`);
          imageUrl = res.data.data.image_url;
        } catch(error){
          imageUrl = 'https://media.giphy.com/media/I2sZ6qckkhfLG/giphy.gif';
        }
        return imageUrl;
      }
      
      async randomizeElementBgImage(){
        let imageUrl;
        try{
          imageUrl = await this.getRandomImage('trippy');
        } catch(error){
          imageUrl = '';
        }
        
        this.el.style.backgroundImage = `url('${imageUrl}')`
      }
      
      randomizeElementBgSize(){
        let rndSize = window.innerWidth * Math.random();
        let sizeStr = Math.floor(rndSize) + 'px';
        this.el.style.backgroundSize = sizeStr;
      }
    }
  
    function* wordGenerator(text){
      let wordArr = text.split('|');
      let i = 0;
      while(true){
        let index = i%wordArr.length;
        i++;
        yield wordArr[index]
      }
    }
    
    class TextHandler {
      constructor({text, el}){
        this.text = text;
        this.generator = wordGenerator(text);
        this.el = el;
      }
      
      insertNextWord(){
        this.el.innerText = this.generator.next().value;
      }
      
    }
  
    function initializeAnimation(){
      const imageEl = document.getElementById('hallucination');
      const colorEl = document.getElementById('colors');
      const textEl = document.getElementById('text');
      
      const text = `I wanna be your vacuum cleaner|Breathing in your dust|I wanna be your Ford Cortina|I will never rust|If you like your coffee hot|Let me be your coffee pot|You call the shots, babe|I just wanna be yours|Secrets I have held in my heart|Are harder to hide than I thought|Maybe I just wanna be yours|I wanna be yours|- I wanna be yours|Wanna be yours|- Wanna be yours| Wanna be yours`
      const th = new TextHandler({el:textEl, text})
      const ch = new ColorHandler({el:colorEl});
      const ih = new ImageHandler({el:imageEl});
      
      ih.randomizeElementBgImage();
      const interval1 = setInterval(
        ()=>{
           ih.randomizeElementBgImage();
        },
        10000
      );
      const interval2 = setInterval(
        ()=>{
          ih.randomizeElementBgSize();
          ch.randomizeElementBgColor();
        },
        1000
      );
      
      
      setInterval(()=>{
         th.insertNextWord();
      }, 3005)
    }
  
    initializeAnimation();
    
  };
  
  animate();
  var padding = {top:20, right:40, bottom:0, left:0},
    w = 500 - padding.left - padding.right,
    h = 500 - padding.top  - padding.bottom,
    r = Math.min(w, h)/2,
    rotation = 0,
    oldrotation = 0,
    picked = 100000,
    oldpick = [],
    color = d3.scale.category20();//category20c()
    //randomNumbers = getRandomNumbers();
//http://osric.com/bingo-card-generator/?title=HTML+and+CSS+BINGO!&words=padding%2Cfont-family%2Ccolor%2Cfont-weight%2Cfont-size%2Cbackground-color%2Cnesting%2Cbottom%2Csans-serif%2Cperiod%2Cpound+sign%2C%EF%B9%A4body%EF%B9%A5%2C%EF%B9%A4ul%EF%B9%A5%2C%EF%B9%A4h1%EF%B9%A5%2Cmargin%2C%3C++%3E%2C{+}%2C%EF%B9%A4p%EF%B9%A5%2C%EF%B9%A4!DOCTYPE+html%EF%B9%A5%2C%EF%B9%A4head%EF%B9%A5%2Ccolon%2C%EF%B9%A4style%EF%B9%A5%2C.html%2CHTML%2CCSS%2CJavaScript%2Cborder&freespace=true&freespaceValue=Web+Design+Master&freespaceRandom=false&width=5&height=5&number=35#results
var data = [
            {"label":"Nikes",  "value":1,  "question":"Grand Prize! You've won yourself a new pair of nikes!"}, // padding
            {"label":"Pick Your Own Prize",  "value":2,  "question":"Congratulations! You get to pick your own birthday gift"}, //font-family
            {"label":"Well wishes",  "value":3,  "question":"Hah, this is the worst one! You win nothing, you pathetic loser"}, //color
            {"label":"New Dress",  "value":4,  "question":"You win a dress of your choice from your nearest mall for FREE!"}, //font-weight
            {"label":"Nyka",  "value":5,  "question":"You win a Nyka gift voucher worth Rs. 2500"}, //font-size
            {"label":"Watch",  "value":6,  "question":"Congrats! You have won yourself a brand new watch!"}, //background-color
];
var svg = d3.select('#chart')
    .append("svg")
    .data([data])
    .attr("width",  w + padding.left + padding.right)
    .attr("height", h + padding.top + padding.bottom);
var container = svg.append("g")
    .attr("class", "chartholder")
    .attr("transform", "translate(" + (w/2 + padding.left) + "," + (h/2 + padding.top) + ")");
var vis = container
    .append("g");
    
var pie = d3.layout.pie().sort(null).value(function(d){return 1;});
// declare an arc generator function
var arc = d3.svg.arc().outerRadius(r);
// select paths, use arc generator to draw
var arcs = vis.selectAll("g.slice")
    .data(pie)
    .enter()
    .append("g")
    .attr("class", "slice");
    
arcs.append("path")
    .attr("fill", function(d, i){ return color(i); })
    .attr("d", function (d) { return arc(d); });
// add the text
arcs.append("text").attr("transform", function(d){
        d.innerRadius = 0;
        d.outerRadius = r;
        d.angle = (d.startAngle + d.endAngle)/2;
        return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius -10) +")";
    })
    .attr("text-anchor", "end")
    .text( function(d, i) {
        return data[i].label;
    });
container.on("click", spin);
function spin(d){
    container.on("click", null);
    //all slices have been seen, all done
    console.log("OldPick: " + oldpick.length, "Data length: " + data.length);
    if(oldpick.length == data.length){
        console.log("done");
        container.on("click", null);
        return;
    }
    var  ps       = 360/data.length,
          pieslice = Math.round(1440/data.length),
          rng      = Math.floor((Math.random() * 1440) + 360);
        
    rotation = (Math.round(rng / ps) * ps);
    
    picked = Math.round(data.length - (rotation % 360)/ps);
    picked = picked >= data.length ? (picked % data.length) : picked;
    if(oldpick.indexOf(picked) !== -1){
        d3.select(this).call(spin);
        return;
    } else {
        oldpick.push(picked);
    }
    rotation += 90 - Math.round(ps/2);
    vis.transition()
        .duration(3000)
        .attrTween("transform", rotTween)
        .each("end", function(){
            //mark question as seen
            d3.select(".slice:nth-child(" + (picked + 1) + ") path")
                .attr("fill", "#111");
            //populate question
            d3.select("#question h1")
                .text(data[picked].question);
            oldrotation = rotation;
      
            /* Get the result value from object "data" */
            console.log(data[picked].value);

      
            /* Comment the below line for restrict spin to sngle time */
            container.on("click", spin);
        });
}
//make arrow
svg.append("g")
    .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h/2)+padding.top) + ")")
    .append("path")
    .attr("d", "M-" + (r*.15) + ",0L0," + (r*.05) + "L0,-" + (r*.05) + "Z")
    .style({"fill":"black"});
//draw spin circle
container.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 60)
    .style({"fill":"white","cursor":"pointer"});
//spin text
container.append("text")
    .attr("x", 0)
    .attr("y", 15)
    .attr("text-anchor", "middle")
    .text("SPIN")
    .style({"font-weight":"bold", "font-size":"30px"});


function rotTween(to) {
  var i = d3.interpolate(oldrotation % 360, rotation);
  return function(t) {
    return "rotate(" + i(t) + ")";
  };
}


function getRandomNumbers(){
    var array = new Uint16Array(1000);
    var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);
    if(window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function"){
        window.crypto.getRandomValues(array);
        console.log("works");
    } else {
        //no support for crypto, get crappy random numbers
        for(var i=0; i < 1000; i++){
            array[i] = Math.floor(Math.random() * 100000) + 1;
        }
    }
    return array;
}







    // CONFETTI


    var retina = window.devicePixelRatio,

    // Math shorthands
    PI = Math.PI,
    sqrt = Math.sqrt,
    round = Math.round,
    random = Math.random,
    cos = Math.cos,
    sin = Math.sin,

    // Local WindowAnimationTiming interface
    rAF = window.requestAnimationFrame,
    cAF = window.cancelAnimationFrame || window.cancelRequestAnimationFrame,
    _now = Date.now || function () {return new Date().getTime();};

// Local WindowAnimationTiming interface polyfill
(function (w) {
  /**
        * Fallback implementation.
        */
  var prev = _now();
  function fallback(fn) {
    var curr = _now();
    var ms = Math.max(0, 16 - (curr - prev));
    var req = setTimeout(fn, ms);
    prev = curr;
    return req;
  }

  /**
        * Cancel.
        */
  var cancel = w.cancelAnimationFrame
  || w.webkitCancelAnimationFrame
  || w.clearTimeout;

  rAF = w.requestAnimationFrame
  || w.webkitRequestAnimationFrame
  || fallback;

  cAF = function(id){
    cancel.call(w, id);
  };
}(window));

document.addEventListener("DOMContentLoaded", function() {
  var speed = 50,
      duration = (1.0 / speed),
      confettiRibbonCount = 21,
      ribbonPaperCount = 20,
      ribbonPaperDist = 8.0,
      ribbonPaperThick = 8.0,
      confettiPaperCount = 145,
      DEG_TO_RAD = PI / 180,
      RAD_TO_DEG = 180 / PI,
      colors = [
        ["#df0049", "#660671"],
        ["#00e857", "#005291"],
        ["#2bebbc", "#05798a"],
        ["#ffd200", "#b06c00"]
      ];

  function Vector2(_x, _y) {
    this.x = _x, this.y = _y;
    this.Length = function() {
      return sqrt(this.SqrLength());
    }
    this.SqrLength = function() {
      return this.x * this.x + this.y * this.y;
    }
    this.Add = function(_vec) {
      this.x += _vec.x;
      this.y += _vec.y;
    }
    this.Sub = function(_vec) {
      this.x -= _vec.x;
      this.y -= _vec.y;
    }
    this.Div = function(_f) {
      this.x /= _f;
      this.y /= _f;
    }
    this.Mul = function(_f) {
      this.x *= _f;
      this.y *= _f;
    }
    this.Normalize = function() {
      var sqrLen = this.SqrLength();
      if (sqrLen != 0) {
        var factor = 1.0 / sqrt(sqrLen);
        this.x *= factor;
        this.y *= factor;
      }
    }
    this.Normalized = function() {
      var sqrLen = this.SqrLength();
      if (sqrLen != 0) {
        var factor = 1.0 / sqrt(sqrLen);
        return new Vector2(this.x * factor, this.y * factor);
      }
      return new Vector2(0, 0);
    }
  }
  Vector2.Lerp = function(_vec0, _vec1, _t) {
    return new Vector2((_vec1.x - _vec0.x) * _t + _vec0.x, (_vec1.y - _vec0.y) * _t + _vec0.y);
  }
  Vector2.Distance = function(_vec0, _vec1) {
    return sqrt(Vector2.SqrDistance(_vec0, _vec1));
  }
  Vector2.SqrDistance = function(_vec0, _vec1) {
    var x = _vec0.x - _vec1.x;
    var y = _vec0.y - _vec1.y;
    return (x * x + y * y + z * z);
  }
  Vector2.Scale = function(_vec0, _vec1) {
    return new Vector2(_vec0.x * _vec1.x, _vec0.y * _vec1.y);
  }
  Vector2.Min = function(_vec0, _vec1) {
    return new Vector2(Math.min(_vec0.x, _vec1.x), Math.min(_vec0.y, _vec1.y));
  }
  Vector2.Max = function(_vec0, _vec1) {
    return new Vector2(Math.max(_vec0.x, _vec1.x), Math.max(_vec0.y, _vec1.y));
  }
  Vector2.ClampMagnitude = function(_vec0, _len) {
    var vecNorm = _vec0.Normalized;
    return new Vector2(vecNorm.x * _len, vecNorm.y * _len);
  }
  Vector2.Sub = function(_vec0, _vec1) {
    return new Vector2(_vec0.x - _vec1.x, _vec0.y - _vec1.y, _vec0.z - _vec1.z);
  }

  function EulerMass(_x, _y, _mass, _drag) {
    this.position = new Vector2(_x, _y);
    this.mass = _mass;
    this.drag = _drag;
    this.force = new Vector2(0, 0);
    this.velocity = new Vector2(0, 0);
    this.AddForce = function(_f) {
      this.force.Add(_f);
    }
    this.Integrate = function(_dt) {
      var acc = this.CurrentForce(this.position);
      acc.Div(this.mass);
      var posDelta = new Vector2(this.velocity.x, this.velocity.y);
      posDelta.Mul(_dt);
      this.position.Add(posDelta);
      acc.Mul(_dt);
      this.velocity.Add(acc);
      this.force = new Vector2(0, 0);
    }
    this.CurrentForce = function(_pos, _vel) {
      var totalForce = new Vector2(this.force.x, this.force.y);
      var speed = this.velocity.Length();
      var dragVel = new Vector2(this.velocity.x, this.velocity.y);
      dragVel.Mul(this.drag * this.mass * speed);
      totalForce.Sub(dragVel);
      return totalForce;
    }
  }

  function ConfettiPaper(_x, _y) {
    this.pos = new Vector2(_x, _y);
    this.rotationSpeed = (random() * 600 + 800);
    this.angle = DEG_TO_RAD * random() * 360;
    this.rotation = DEG_TO_RAD * random() * 360;
    this.cosA = 1.0;
    this.size = 5.0;
    this.oscillationSpeed = (random() * 1.5 + 0.5);
    this.xSpeed = 40.0;
    this.ySpeed = (random() * 60 + 50.0);
    this.corners = new Array();
    this.time = random();
    var ci = round(random() * (colors.length - 1));
    this.frontColor = colors[ci][0];
    this.backColor = colors[ci][1];
    for (var i = 0; i < 4; i++) {
      var dx = cos(this.angle + DEG_TO_RAD * (i * 90 + 45));
      var dy = sin(this.angle + DEG_TO_RAD * (i * 90 + 45));
      this.corners[i] = new Vector2(dx, dy);
    }
    this.Update = function(_dt) {
      this.time += _dt;
      this.rotation += this.rotationSpeed * _dt;
      this.cosA = cos(DEG_TO_RAD * this.rotation);
      this.pos.x += cos(this.time * this.oscillationSpeed) * this.xSpeed * _dt
      this.pos.y += this.ySpeed * _dt;
      if (this.pos.y > ConfettiPaper.bounds.y) {
        this.pos.x = random() * ConfettiPaper.bounds.x;
        this.pos.y = 0;
      }
    }
    this.Draw = function(_g) {
      if (this.cosA > 0) {
        _g.fillStyle = this.frontColor;
      } else {
        _g.fillStyle = this.backColor;
      }
      _g.beginPath();
      _g.moveTo((this.pos.x + this.corners[0].x * this.size) * retina, (this.pos.y + this.corners[0].y * this.size * this.cosA) * retina);
      for (var i = 1; i < 4; i++) {
        _g.lineTo((this.pos.x + this.corners[i].x * this.size) * retina, (this.pos.y + this.corners[i].y * this.size * this.cosA) * retina);
      }
      _g.closePath();
      _g.fill();
    }
  }
  ConfettiPaper.bounds = new Vector2(0, 0);

  function ConfettiRibbon(_x, _y, _count, _dist, _thickness, _angle, _mass, _drag) {
    this.particleDist = _dist;
    this.particleCount = _count;
    this.particleMass = _mass;
    this.particleDrag = _drag;
    this.particles = new Array();
    var ci = round(random() * (colors.length - 1));
    this.frontColor = colors[ci][0];
    this.backColor = colors[ci][1];
    this.xOff = (cos(DEG_TO_RAD * _angle) * _thickness);
    this.yOff = (sin(DEG_TO_RAD * _angle) * _thickness);
    this.position = new Vector2(_x, _y);
    this.prevPosition = new Vector2(_x, _y);
    this.velocityInherit = (random() * 2 + 4);
    this.time = random() * 100;
    this.oscillationSpeed = (random() * 2 + 2);
    this.oscillationDistance = (random() * 40 + 40);
    this.ySpeed = (random() * 40 + 80);
    for (var i = 0; i < this.particleCount; i++) {
      this.particles[i] = new EulerMass(_x, _y - i * this.particleDist, this.particleMass, this.particleDrag);
    }
    this.Update = function(_dt) {
      var i = 0;
      this.time += _dt * this.oscillationSpeed;
      this.position.y += this.ySpeed * _dt;
      this.position.x += cos(this.time) * this.oscillationDistance * _dt;
      this.particles[0].position = this.position;
      var dX = this.prevPosition.x - this.position.x;
      var dY = this.prevPosition.y - this.position.y;
      var delta = sqrt(dX * dX + dY * dY);
      this.prevPosition = new Vector2(this.position.x, this.position.y);
      for (i = 1; i < this.particleCount; i++) {
        var dirP = Vector2.Sub(this.particles[i - 1].position, this.particles[i].position);
        dirP.Normalize();
        dirP.Mul((delta / _dt) * this.velocityInherit);
        this.particles[i].AddForce(dirP);
      }
      for (i = 1; i < this.particleCount; i++) {
        this.particles[i].Integrate(_dt);
      }
      for (i = 1; i < this.particleCount; i++) {
        var rp2 = new Vector2(this.particles[i].position.x, this.particles[i].position.y);
        rp2.Sub(this.particles[i - 1].position);
        rp2.Normalize();
        rp2.Mul(this.particleDist);
        rp2.Add(this.particles[i - 1].position);
        this.particles[i].position = rp2;
      }
      if (this.position.y > ConfettiRibbon.bounds.y + this.particleDist * this.particleCount) {
        this.Reset();
      }
    }
    this.Reset = function() {
      this.position.y = -random() * ConfettiRibbon.bounds.y;
      this.position.x = random() * ConfettiRibbon.bounds.x;
      this.prevPosition = new Vector2(this.position.x, this.position.y);
      this.velocityInherit = random() * 2 + 4;
      this.time = random() * 100;
      this.oscillationSpeed = random() * 2.0 + 1.5;
      this.oscillationDistance = (random() * 40 + 40);
      this.ySpeed = random() * 40 + 80;
      var ci = round(random() * (colors.length - 1));
      this.frontColor = colors[ci][0];
      this.backColor = colors[ci][1];
      this.particles = new Array();
      for (var i = 0; i < this.particleCount; i++) {
        this.particles[i] = new EulerMass(this.position.x, this.position.y - i * this.particleDist, this.particleMass, this.particleDrag);
      }
    }
    this.Draw = function(_g) {
      for (var i = 0; i < this.particleCount - 1; i++) {
        var p0 = new Vector2(this.particles[i].position.x + this.xOff, this.particles[i].position.y + this.yOff);
        var p1 = new Vector2(this.particles[i + 1].position.x + this.xOff, this.particles[i + 1].position.y + this.yOff);
        if (this.Side(this.particles[i].position.x, this.particles[i].position.y, this.particles[i + 1].position.x, this.particles[i + 1].position.y, p1.x, p1.y) < 0) {
          _g.fillStyle = this.frontColor;
          _g.strokeStyle = this.frontColor;
        } else {
          _g.fillStyle = this.backColor;
          _g.strokeStyle = this.backColor;
        }
        if (i == 0) {
          _g.beginPath();
          _g.moveTo(this.particles[i].position.x * retina, this.particles[i].position.y * retina);
          _g.lineTo(this.particles[i + 1].position.x * retina, this.particles[i + 1].position.y * retina);
          _g.lineTo(((this.particles[i + 1].position.x + p1.x) * 0.5) * retina, ((this.particles[i + 1].position.y + p1.y) * 0.5) * retina);
          _g.closePath();
          _g.stroke();
          _g.fill();
          _g.beginPath();
          _g.moveTo(p1.x * retina, p1.y * retina);
          _g.lineTo(p0.x * retina, p0.y * retina);
          _g.lineTo(((this.particles[i + 1].position.x + p1.x) * 0.5) * retina, ((this.particles[i + 1].position.y + p1.y) * 0.5) * retina);
          _g.closePath();
          _g.stroke();
          _g.fill();
        } else if (i == this.particleCount - 2) {
          _g.beginPath();
          _g.moveTo(this.particles[i].position.x * retina, this.particles[i].position.y * retina);
          _g.lineTo(this.particles[i + 1].position.x * retina, this.particles[i + 1].position.y * retina);
          _g.lineTo(((this.particles[i].position.x + p0.x) * 0.5) * retina, ((this.particles[i].position.y + p0.y) * 0.5) * retina);
          _g.closePath();
          _g.stroke();
          _g.fill();
          _g.beginPath();
          _g.moveTo(p1.x * retina, p1.y * retina);
          _g.lineTo(p0.x * retina, p0.y * retina);
          _g.lineTo(((this.particles[i].position.x + p0.x) * 0.5) * retina, ((this.particles[i].position.y + p0.y) * 0.5) * retina);
          _g.closePath();
          _g.stroke();
          _g.fill();
        } else {
          _g.beginPath();
          _g.moveTo(this.particles[i].position.x * retina, this.particles[i].position.y * retina);
          _g.lineTo(this.particles[i + 1].position.x * retina, this.particles[i + 1].position.y * retina);
          _g.lineTo(p1.x * retina, p1.y * retina);
          _g.lineTo(p0.x * retina, p0.y * retina);
          _g.closePath();
          _g.stroke();
          _g.fill();
        }
      }
    }
    this.Side = function(x1, y1, x2, y2, x3, y3) {
      return ((x1 - x2) * (y3 - y2) - (y1 - y2) * (x3 - x2));
    }
  }
  ConfettiRibbon.bounds = new Vector2(0, 0);
  confetti = {};
  confetti.Context = function(id) {
    var i = 0;
    var canvas = document.getElementById(id);
    var canvasParent = canvas.parentNode;
    var canvasWidth = canvasParent.offsetWidth;
    var canvasHeight = canvasParent.offsetHeight;
    canvas.width = canvasWidth * retina;
    canvas.height = canvasHeight * retina;
    var context = canvas.getContext('2d');
    var interval = null;
    var confettiRibbons = new Array();
    ConfettiRibbon.bounds = new Vector2(canvasWidth, canvasHeight);
    for (i = 0; i < confettiRibbonCount; i++) {
      confettiRibbons[i] = new ConfettiRibbon(random() * canvasWidth, -random() * canvasHeight * 2, ribbonPaperCount, ribbonPaperDist, ribbonPaperThick, 45, 1, 0.05);
    }
    var confettiPapers = new Array();
    ConfettiPaper.bounds = new Vector2(canvasWidth, canvasHeight);
    for (i = 0; i < confettiPaperCount; i++) {
      confettiPapers[i] = new ConfettiPaper(random() * canvasWidth, random() * canvasHeight);
    }
    this.resize = function() {
      canvasWidth = canvasParent.offsetWidth;
      canvasHeight = canvasParent.offsetHeight;
      canvas.width = canvasWidth * retina;
      canvas.height = canvasHeight * retina;
      ConfettiPaper.bounds = new Vector2(canvasWidth, canvasHeight);
      ConfettiRibbon.bounds = new Vector2(canvasWidth, canvasHeight);
    }
    this.start = function() {
      this.stop()
      var context = this;
      this.update();
    }
    this.stop = function() {
      cAF(this.interval);
    }
    this.update = function() {
      var i = 0;
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (i = 0; i < confettiPaperCount; i++) {
        confettiPapers[i].Update(duration);
        confettiPapers[i].Draw(context);
      }
      for (i = 0; i < confettiRibbonCount; i++) {
        confettiRibbons[i].Update(duration);
        confettiRibbons[i].Draw(context);
      }
      this.interval = rAF(function() {
        confetti.update();
      });
    }
  }
  var confetti = new confetti.Context('confetti');
  confetti.start();
  window.addEventListener('resize', function(event){
    confetti.resize();
  });
});