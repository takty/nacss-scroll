/**
 * Scroll Effect
 *
 * @author Takuto Yanagida
 * @version 2023-07-27
 */

function apply(ts, opts = {}) {
	if (ts.length === 0) return;

	opts = Object.assign({
		styleEffect: ':ncScrollEffect',
		threshold  : 0.5,
	}, opts);

	onIntersect(doIntersect, ts, opts['threshold'], '* 10000% 0px 10000%');
	function doIntersect(vs) {
		for (let i = 0; i < ts.length; i += 1) {
			if (vs[i]) setClass(ts[i], opts['styleEffect'], true, 'visible');
		}
	}

	window.addEventListener('beforeprint', () => {
		for (const c of ts) {
			setClass(c, opts['styleEffect'], true, 'visible');
		}
	});
}
