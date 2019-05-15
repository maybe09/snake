// 控制游戏的方法
(function(window){
    function Game(map){
        // 将地图显示到页面上
        this.map=map;
        // 将食物显示到页面上
        this.food=new Food();
        // 将蛇显示到页面上
        this.snake=new Snake();
        
    }
    Game.prototype.start=function(){
        // 渲染食物
        this.food.render( this.map);
        this.snake.render(this.map)
        // 渲染蛇
        
    }
    window.Game=Game;
}(window))