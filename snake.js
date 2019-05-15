// 创建一个蛇对象
(function(window){
    function Snake(width,height,direction){
    //   有宽高,有身体,有移动的方向
    this.width=width ||20;
    this.height=height||20;
    this.direction=direction||'right';
    this.body=[
        {x:3,y:1,color:'red'},
        {x:2,y:1,color:'pink'},
        {x:1,y:1,color:'skyblue'},
    ];
    }
    // 渲染蛇身体的方法写在原型中,后面渲染都可以用
    Snake.prototype.render=function(map){
        // 添加蛇身体到页面
        for(var i = 0;i<this.body.length;i++){
            var div=document.createElement('div');
            div.style.position='absolute';
            div.style.width=this.width+'px';
            div.style.height=this.height+'px';
            div.style.backgroundColor=this.body[i].color;
            div.style.left=this.body[i].x*this.width+'px';
            div.style.top=this.body[i].y*this.height+'px';
            map.appendChild(div);
        
        }
    }
    window.Snake=Snake;

}(window))