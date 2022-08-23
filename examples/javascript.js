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
