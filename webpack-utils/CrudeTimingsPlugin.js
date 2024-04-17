let CrudeTimingPlugin = function() {};

CrudeTimingPlugin.prototype.apply = function(compiler) {
	compiler.hooks.compilation.tap('CrudeTimingPlugin', (compilation) => {
        let startOptimizePhase = Date.now();
        compilation.hooks.processAssets.tap('CrudeTimingPlugin', () => {
            startOptimizePhase = Date.now();
        });
        compilation.hooks.afterProcessAssets.tap('CrudeTimingPlugin', () => {
            const optimizePhaseDuration = Date.now() - startOptimizePhase;
			console.log(`optimize-chunk-asset phase duration: ${optimizePhaseDuration}`);
        });
    });
};

module.exports = CrudeTimingPlugin;