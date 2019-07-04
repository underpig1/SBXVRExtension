(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    ext.alpha = function() {
        return instanceOfDeviceOrientationEvent.alpha;
    };
    ext.beta = function() {
        return instanceOfDeviceOrientationEvent.beta;
    };
    ext.gamma = function() {
        return orientationEvent.gamma;
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
        ['r','Alpha Rotation','alpha'],
        ['r','Beta Rotation','beta'],
        ['r','Gamma Rotation','gamma'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Virtual Reality', descriptor, ext);
})({});
