// BD de acordes
export const AcordeGuitarraAcustica = (ac) => {
	let salida = []
	switch(ac){
		case 'C':
			salida = ['x', 3, 2, 0, 1, 0]
			break;
		case 'Cm':
			salida = ['x', 3, 5, 5, 4, 3]
			break;
		case 'C7':
			salida = ['x', 3, 2, 3, 1, 0]
			break;
		case 'Cm7':
			salida = ['x', 3, 5, 3, 4, 3]
			break;
		case 'Cmaj7':
			salida = ['x', 3, 2, 0, 0, 0]
			break;

		case 'D':
			salida = ['x', 'x', 0, 2, 3, 2]
			break;
		case 'Dm':
			salida = ['x', 'x', 0, 2, 3, 1]
			break;
		case 'D7':
			salida = ['x', 'x', 0, 2, 1, 2]
			break;
		case 'Dm7':
			salida = ['x', 'x', 0, 2, 1, 1]
			break;
		case 'Dmaj7':
			salida = ['x', 'x', 0, 2, 2, 2]
			break;

		case 'E':
			salida = [1, 3, 3, 2, 1, 1]
			break;
		case 'Em':
			salida = [0, 2, 2, 0, 0, 0]
			break;
		case 'E7':
			salida = [0, 2, 2, 1, 3, 0]
			break;
		case 'Em7':
			salida = [0, 2, 2, 0, 3, 0]
			break;
		case 'Emaj7':
			salida = [0, 2, 1, 1, 0, 0]
			break;

		case 'F':
			salida = [3, 2, 0, 0, 0, 3]
			break;
		case 'Fm':
			salida = [1, 3, 3, 1, 1, 1]
			break;
		case 'F7':
			salida = [1, 3, 1, 2, 1, 1]
			break;
		case 'Fm7':
			salida = [1, 3, 1, 1, 1, 1]
			break;
		case 'Fmaj7':
			salida = [1, 3, 2, 2, 1, 1]
			break;

		case 'G':
			salida = ['x', 0, 2, 2, 2, 0]
			break;
		case 'Gm':
			salida = [3, 5, 5, 3, 3, 3]
			break;
		case 'G7':
			salida = [3, 2, 0, 0, 0, 1]
			break;
		case 'Gm7':
			salida = [3, 5, 3, 3, 3, 3]
			break;
		case 'Gmaj7':
			salida = [3, 5, 4, 4, 3, 3]
			break;

		case 'A':
			salida = ['x', 0, 2, 2, 2, 0]
			break;
		case 'Am':
			salida = ['x', 0, 2, 2, 1, 0]
			break;
		case 'A7':
			salida = ['x', 2, 1, 2, 0, 2]
			break;
		case 'Am7':
			salida = ['x', 0, 2, 0, 1, 0]
			break;
		case 'Amaj7':
			salida = ['x', 0, 2, 1, 2, 0]
			break;

		case 'B':
			salida = ['x', 2, 4, 4, 4, 2]
			break;
		case 'Bm':
			salida = ['x', 2, 4, 4, 3, 2]
			break;
		case 'B7':
			salida = ['x', 2, 1, 2, 0, 2]
			break;
		case 'Bm7':
			salida = ['x', 2, 4, 2, 3, 2]
			break;
		case 'Bmaj7':
			salida = ['x', 2, 4, 3, 4, 2]
			break;

		default:
			salida = [0, 0, 0, 0, 0, 0]
			break;
	}
	return salida
}