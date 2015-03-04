var bwb = document.getElementById('bwb');
var bwbBall = document.getElementById('bwb-ball');

var colorInd = false; // black



function bwbAction(event) {
	if (colorInd){
		// white -> black
		document.body.style.backgroundColor = 'black';
		cont.style.borderColor = 'white';

		// removeClass(meme, 'semicircle-w');
		// addClass(meme, 'semicircle-b');
		$( 'div.semicircle' ).css( 'background-color', 'white' );

		$( 'div.button' ).css( 'background-color', 'white' );
		$( 'div.button' ).css( 'color', 'black' );



		bwb.style.backgroundColor = 'white';
		bwbBall.setAttribute('class', 'bwb-ball-1');

		colorInd = false;

	}else {
		// black -> white
		document.body.style.backgroundColor = 'white';
		cont.style.borderColor = 'black';

		// removeClass($('.semicircle'), 'semicircle-b');
		// addClass($('.semicircle'), 'semicircle-w');

		$( 'div.semicircle' ).css( 'background-color', 'black' );

		$( 'div.button' ).css( 'background-color', 'black' );
		$( 'div.button' ).css( 'color', 'white' );
		


		bwb.style.backgroundColor = 'black';
		bwbBall.setAttribute('class', 'bwb-ball-2');

		colorInd = true;
	}
}

bwb.onclick = bwbAction;