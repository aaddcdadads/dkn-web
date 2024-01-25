(function () {
    let thirdJsArr = [
        'OL6.4.3/ol.js',
        'OL6.4.3/ol-mozilla.js',
        '../resources/millib/masm/masm.js',
    ]
    let thirdCssArr = [
         'OL6.4.3/ol.css'     
    ]
    let scriptArr = Array.from(document.getElementsByTagName('script'))
    let host,targetScript;
    scriptArr.map(item => {
        let src = item.getAttribute('src')
        if (item.src.match('thirdParty.js')) {
            host = src.split('thirdParty.js')[0];
            targetScript = item;
        }
    })
    loadResource(thirdCssArr, "css")
    loadResource(thirdJsArr, "js")

    function loadResource(arr, type) {
        let head = document.getElementsByTagName('head')[0]
        let fragment = document.createDocumentFragment()
        if (type === "js") {
            for (let i = 0; i < arr.length; i++) {
                loadScript(`${host}${arr[i]}`); 
            }
        } else if (type === "css") {
            for (let i = 0; i < arr.length; i++) {
                loadCSS(`${host}${arr[i]}`) 
            }
            
        }
    }

    function loadScript(url) { 
        var script = '<script type="text/javascript" src="' + url + '"><' + '/script>';
        document.writeln(script);
    }

    function loadCSS(url) { 
        var css = '<link rel="stylesheet" href="' + url + '">';
        document.writeln(css);
    }

    function inArray(arr, item) {
        for (i in arr) {
            if (arr[i] == item) {
                return true;
            }
        }
        return false;
    }

    //加载第三方资源库 
    var includes = (targetScript.getAttribute('include') || '').split(','); 
    //mapv模块
    if (inArray(includes, 'mapv')) {
        loadScript(`${host}mapv/mapv.min.js`, "js");
    }
    //echarts模块
    if (inArray(includes, 'echarts')) {
        loadScript(`${host}echarts/echarts.min.js`, "js");
    }
    //ol3-echarts模块
    if (inArray(includes, 'ol3-echarts')) {
        loadScript(`${host}echarts/ol3Echarts.min.js`, "js");
    }
    //turf模块
    if (inArray(includes, 'turf')) {
        loadScript('https://cdn.bootcss.com/Turf.js/5.1.6/turf.min.js','js');
    }


})()



