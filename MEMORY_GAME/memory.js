var memory_array = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R'];
var memory_values = [];
var memory_tiles_ids = [];
var tiles_flipped = 0;

Array.prototype.shuffle = function () {
	var i = this.length - 1;
	while(i>=0) {
		var temp = '';
		var j = Math.floor(Math.random() * i);
		temp = this [j];
		this[j] = this [i];
		this[i] = temp;
		i--;
	}
};

function newBoard () {
	tiles_flipped = 0;
	var output = '';
	memory_array.shuffle();
	for(var i=0; i<memory_array.length; i++) {
		output += '<div class="tile" id="tile_' + i + '" onclick="memoryFlipTile(this,\'' + memory_array[i] + '\')"></div>';
	}
	document.getElementById('memory-board').innerHTML = output;
};

function memoryFlipTile(tile,val) {
	if (tile.innerHTML == '' && memory_values.length < 2) {
		tile.style.background = 'white';
		tile.innerHTML = val;
		if (memory_values.length == 0) {
			memory_values.push(val);
			memory_tiles_ids.push(tile.id);
		} else if (memory_values.length == 1) {
			memory_values.push(val);
			memory_tiles_ids.push(tile.id);
			if (memory_values[0] == memory_values[1]) {
				tiles_flipped += 2;
				memory_values = [];
				memory_tiles_ids = [];
				if (tiles_flipped == memory_array.length) {
					alert ('Board cleared...genereting new Board');
					document.getElementById('memory-board').innerHTML = '';
					newBoard();
				}
			} else {
				function flip2Back () {
					var tile_1 = document.getElementById(memory_tiles_ids[0]);
					var tile_2 = document.getElementById(memory_tiles_ids[1]);
					tile_1.style.background = '#45456B';
					tile_2.style.background = '#45456B';
					tile_1.innerHTML = '';
					tile_2.innerHTML = '';
					memory_values = [];
					memory_tiles_ids = [];
				}
				setTimeout (flip2Back, 700);
			}
		}

	}
};


window.onload = newBoard;

