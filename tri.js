var cont = document.getElementById('container');
var cellSize = 16;

var n = 16;
var m = n;
var s = n*m;
var w = 100;


function createDivMatrix(n, m){
	cont.style.width =  n*cellSize + 'px'; 
	for (var j = 0; j < m; j++) {
		var line = document.createElement('div');
		line.className = 'line';
		line.style.height = cellSize+'px';
		cont.insertAdjacentElement('beforeEnd', line);
		for (var i = 0; i < n; i++) {
			cell = document.createElement('div');
			semicircle = document.createElement('div');
			semicircle.className = 'semicircle rotate-1';
			cell.insertAdjacentElement('beforeEnd', semicircle);
			cell.className = 'cell';
			cell.id = i + '-' + j;
			cell.style.height = cellSize+'px';
			cell.style.width = cellSize+'px';
			line.insertAdjacentElement('beforeEnd', cell);
			// alert(i);
		};
	};
};




function createArrayMatrix(n,m){
	var arr = new Array();
	for(var i=0; i<m; i++){
		arr[i] = new Array();
		for(var j=0; j<n; j++){
			arr[i][j] = null;//вместо i+j+1 пишем любой наполнитель. В простейшем случае - null
		}
	}
	return arr;
};

var statusMatrix = createArrayMatrix(n, m);

createDivMatrix(n, m);


// --------------------------------------------------

function drawMatrix(){
	function randomStatus() {
		var rand = Math.random() * 4;
		var status = Math.floor(rand);
		return status + 1;
	};

	for (var j = 0; j < m; j++) {
		for (var i = 0; i < n; i++) {
			statusMatrix[i][j] = randomStatus();
		};
	};

	for (var j = 0; j < m; j++) {
		for (var i = 0; i < n; i++) {
			switch (statusMatrix[i][j]) {
				case 1:
					cont.children[j].children[i].firstChild.setAttribute('class', 'semicircle rotate-1');
					break
				case 2:
					cont.children[j].children[i].firstChild.setAttribute('class', 'semicircle rotate-2');
					break
				case 3:
					cont.children[j].children[i].firstChild.setAttribute('class', 'semicircle rotate-3');
					break
				case 4:
					cont.children[j].children[i].firstChild.setAttribute('class', 'semicircle rotate-4');
					break
			};
			// cont.children[j].children[i].firstChild.setAttribute('class', 'semicircle rotate-3');
		};
	};
};

// ------------------ Вкл\Выкл CYCLE --------------

var cycleInd = false;

function cyc(){
	var penis = setInterval(drawMatrix, 100);
	if (cycleInd) {
		function stopCYC(){
			clearInterval(penis);
			cycleInd = false;
		}
	};
};






function mouseHoverControl() {
	cont.onmouseover = function(e) {
		var e = e || window.event;
		// var backgroundItem = e.target;
		var activeItem = e.target.firstChild;

		if (e.target.className == 'cell') {
			var prevColor = getComputedStyle(activeItem, '').backgroundColor;
			activeItem.style.backgroundColor = '#EA104B';
			function resetBackgtound(){
				activeItem.style.backgroundColor = prevColor;
			};
			setTimeout(resetBackgtound, 800);
		}
		else return;
	}
};

// ------------- Обработчик событий -------------

var cycleInd = false;
var cycle;


document.onclick = function(e) {
	var target = e && e.target || window.event.srcElement;
	// if (target.id == 'show-button') {
	// 	createDivMatrix(n, m);
	// }
	if (target.id == 'rand-button') {
		drawMatrix();
		// var meow = randomStatus();
		// alert('meow');
	}
	if (target.id == 'cycle-button') {
		if (!cycleInd) {
			cycle = setInterval(drawMatrix, w);
			cycleInd = true;
		}else {
			clearInterval(cycle);
			cycleInd = false;
		}
	}
	if (target.id == 'mouse-control-button') {
		mouseHoverControl();
	}
	else return;
};


var sets = document.getElementById('sets');
var notice = document.getElementById('notice');

document.onmouseover = function(e) {
	var e = e || window.event;

	var noticeTxt = e.target.getAttribute('notice');
	if (!noticeTxt) {
		notice.innerHTML = '';
		return;
	}
	else {
		var cs = getComputedStyle(e.target, '');
		notice.style.color = cs.backgroundColor;
		notice.innerHTML = noticeTxt;
	}
}

// ---------------------------------------------



