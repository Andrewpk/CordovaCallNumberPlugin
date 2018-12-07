CordovaCallNumberPlugin
=======================

*Forked from https://github.com/rohfosho/CordovaCallNumberPlugin because it was not getting updates on npmjs. As soon as it gets updated I'll take this down.*

Cordova repo decided to cache/save some weird relationship to another call number plugin so I renamed a bunch of stuff here.

Call a number directly from your cordova application.

Install the plugin using:


``` 
npm install call-number
```

or

```
yarn add call-number
```

Use the plugin in your JS file:
``` javascript
window.plugins.CallNumber.callNumber(onSuccess, onError, number, bypassAppChooser);
```

**number:** *String;* phone number to call (e.g. "1234567890")

**bypassAppChooser:** *boolean;* true if you always wish to bypass the app chooser if user has multiple applications installed that can handle calls

Make sure to create onSuccess and onError call back functions.

Example:
``` java
function onSuccess(result){
  console.log("Success:"+result);
}

function onError(result) {
  console.log("Error:"+result);
}
```
