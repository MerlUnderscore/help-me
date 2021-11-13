(function(){
    Game.SINGLE_CONTROL = true;

    Engine.Assets.root = "../Package/";

    Game.addAction("preloadchangecolor", function(){
        Engine.Renderer.clearColor(0 / 255, 0 / 255, 0 / 255);
        document.getElementById("gameDiv").style.backgroundColor = "black";
    });

    Game.MAIN_MENU_OFFSET_A = 3;
    Game.MAIN_MENU_OFFSET_B = -1 + 0.5;

    Game.addAction("postinit", function(){
        Game.SceneFade.setColor(0, 0, 0);
    });

})();