
// Neu würfeln (Aufruf per Button-Klick)
function neuerWurf() {
	
	let num = 0;
	let num2 = 0;
	
	// Neue Zufallszahl bestimmen

		num = Math.random() * 6;
		num = Math.floor(num);
		num = num + 1;
	
		num2 = Math.random() * 6;
		num2= Math.floor(num2);
		num2 = num + 1;

		
	// Code missing ...

	// Ergebnis in DIV-Box schreiben	
	document.getElementById('erg').innerHTML = num;
	
	

}