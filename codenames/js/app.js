/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

const associate = async () => {
  var img = document.getElementById('loading');
  img.style.visibility = 'visible';

  var words = document.getElementById('words').value;
  var wordsList = words.split(',');
  var noOfWords = wordsList.length;

  if(noOfWords<2 || noOfWords>4){
    display([]);
  }

  

  var setList = [];

  for(var i=0; i<wordsList.length; i++){
    var words = [];
    var response, jsoned;
  
    response = await fetch('https://api.datamuse.com/words\?rel_jja\='+wordsList[i].trim());
    jsoned = await response.json();
    for(var j=0; j<jsoned.length; j++){
      words.push(jsoned[j].word);
    }

    response = await fetch('https://api.datamuse.com/words\?rel_jjb\='+wordsList[i].trim());
    jsoned = await response.json();
    for(var j=0; j<jsoned.length; j++){
      words.push(jsoned[j].word);
    }

    response = await fetch('https://api.datamuse.com/words\?rel_syn\='+wordsList[i].trim());
    jsoned = await response.json();
    for(var j=0; j<jsoned.length; j++){
      words.push(jsoned[j].word);
    }

    response = await fetch('https://api.datamuse.com/words\?rel_trg\='+wordsList[i].trim());
    jsoned = await response.json();
    for(var j=0; j<jsoned.length; j++){
      words.push(jsoned[j].word);
    }

    response = await fetch('https://api.datamuse.com/words\?rel_ant\='+wordsList[i].trim());
    jsoned = await response.json();
    for(var j=0; j<jsoned.length; j++){
      words.push(jsoned[j].word);
    }

    response = await fetch('https://api.datamuse.com/words\?rel_spc\='+wordsList[i].trim());
    jsoned = await response.json();
    for(var j=0; j<jsoned.length; j++){
      words.push(jsoned[j].word);
    }

    response = await fetch('https://api.datamuse.com/words\?rel_gen\='+wordsList[i].trim());
    jsoned = await response.json();
    for(var j=0; j<jsoned.length; j++){
      words.push(jsoned[j].word);
    }

    response = await fetch('https://api.datamuse.com/words\?rel_com\='+wordsList[i].trim());
    jsoned = await response.json();
    for(var j=0; j<jsoned.length; j++){
      words.push(jsoned[j].word);
    }

    response = await fetch('https://api.datamuse.com/words\?rel_par\='+wordsList[i].trim());
    jsoned = await response.json();
    for(var j=0; j<jsoned.length; j++){
      words.push(jsoned[j].word);
    }

    // response = await fetch('https://api.datamuse.com/words\?rel_bga\='+wordsList[i].trim());
    // jsoned = await response.json();
    // for(var j=0; j<jsoned.length; j++){
    //   words.push(jsoned[j].word);
    // }

    // response = await fetch('https://api.datamuse.com/words\?rel_bgb\='+wordsList[i].trim());
    // jsoned = await response.json();
    // for(var j=0; j<jsoned.length; j++){
    //   words.push(jsoned[j].word);
    // }

    setList.push(words);
    
  }

  if(noOfWords==2)
    var intSet = setList[0].filter(value => setList[1].includes(value));
  if(noOfWords==3)
    var intSet = setList[0].filter(value => setList[1].includes(value) && setList[2].includes(value));
  if(noOfWords==4)
    var intSet = setList[0].filter(value => setList[1].includes(value) && setList[2].includes(value) && setList[3].includes(value));

    console.log(intSet);
    // var img = document.getElementById('loading');
    // img.style.visibility = 'hidden';

    display(intSet);
};

const display = async (words) => {
  var img = document.getElementById('loading');
  img.style.visibility = 'hidden';
  if(words.length == 0)
    document.getElementById('result').innerText = "no associated words found";
  else
    document.getElementById('result').innerText = words.join(', ');
}

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 20,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 30,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 200,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);