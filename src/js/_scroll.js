/**
 *
 * Scroll Effect
 *
 * @author Takuto Yanagida
 * @version 2021-10-25
 *
 */


function initialize(cs, opts = {}) {
	if (cs.length === 0) return;

	opts = Object.assign({
		styleScroll : ':ncScroll',
		styleVisible: ':ncScrollVisible',
	}, opts);

	onIntersect(doIntersect, cs, 0.5);
	function doIntersect(vs) {
		for (let i = 0; i < cs.length; i += 1) {
			if (vs[i]) enableClass(true, cs[i], opts['styleVisible']);
		}
	}

	window.addEventListener('beforeprint', () => {
		for (const c of cs) {
			enableClass(true, c, opts['styleVisible']);
		}
	});
}
