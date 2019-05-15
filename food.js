// 创建一个食物
// 用自调函数可以避免全局变量污染的问题,但是其他函数不能调用,可以暴露一个接口给
// window,让window来调用,这个函数在其他地方也可以用了
(function(window){
    function Food(width,height,bgColor,x,y){
    //   创建一个食物显示到地图上去,这个食物拥有宽高,背景色以及坐标
    // 并且是在地图上随机生成的
    this.width=width||20;
    this.height=height||20;
    this.bgColor=bgColor||'green';
    this.x=x||0;
    this.y=y||0;
    }
    // 将渲染的方法写在原型中,每一个随机方块都可以用这个方法
    Food.prototype.render=function(map){
        // 计算出这个方块的坐标  食物的宽度*食物的下标
        this.x=this.width* Math.floor(Math.random()* map.offsetWidth/this.width);
        this.y=this.height* Math.floor(Math.random()* map.offsetHeight/this.height);
        var div=document.createElement('div');
        div.style.position='absolute';
        div.style.width=this.width+'px';
        div.style.height=this.height+'px';
        div.style.left=this.x+'px';
        div.style.top=this.y+'px';
        div.style.backgroundColor=this.bgColor;
        map.appendChild(div);
        }
        window.Food=Food;
}(window))