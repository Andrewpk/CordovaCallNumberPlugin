var AKCallNumber = function(){};

AKCallNumber.prototype.callNumber = function(success, failure, number, bypassAppChooser){
    cordova.exec(success, failure, "AKCallNumber", "callNumber", [number, bypassAppChooser]);
};

AKCallNumber.prototype.isCallSupported = function(success, failure){
    cordova.exec(success, failure, "AKCallNumber", "isCallSupported");
}

//Plug in to Cordova
cordova.addConstructor(function() {

    if (!window.Cordova) {
        window.Cordova = cordova;
    };

    if(!window.plugins) window.plugins = {};
    window.plugins.CallNumber = new AKCallNumber();
});
