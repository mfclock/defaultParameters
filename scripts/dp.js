window.onload = function(){
    function link(height,color,url){
        var height = height || 50;
        var color = color || 'red';
        var url = url || 'http://localhost';
        return {'height':height, 'color':color, 'url':url};
    }
    console.log(link(0));
    console.log('zero resolves to falsy');


    //ES6
    function link2(height = 50, color = 'red', url = 'http://localhost'){
        return {'height':height, 'color':color, 'url':url};
    }
    console.log(link2(0,'silver','http://'));
};

