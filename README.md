# PowerAppsPortal-WrapperAjaxTemplate
PowerApps Template to use save ajax

## How To Use
1. Create new Web Template.
2. Copy Content to Template.
3. Call template in existing template by '{% include "Wrapper AJAX Template" %}'
4. include in JS File *see examples/javascript.js* 

## Javascript Example
```JavaScript
if (window.jQuery)
{
    (function (webapi, $)
    {
        function request(url)
        {
            return webapi.saveAjax({
                type:"GET",
                url: url,
                contentType: "application/json",
                success: function (res) {
                    console.log(res);
                }
            });
        }
    }(window.webapi = window.webapi || {}, jQuery));
}
```
