var developMode = false;

if (developMode) {
    require.config({
        baseUrl: '../Source',
        paths: {

        },
        shim: {

        }
    });
} else {
    require.config({
        paths: {
            'GEOVIS': '../GEOVIS'
        }
    });
}

if (typeof GEOVIS !== "undefined") {
    onload(GEOVIS);
} else if (typeof require === "function") {
    require(["GEOVIS", "config"], onload);
}
