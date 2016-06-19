gdjs.Level_322Code = {};


gdjs.Level_322Code.GDPlayerObjects1= [];
gdjs.Level_322Code.GDPlayerObjects2= [];
gdjs.Level_322Code.GDPlayerObjects3= [];
gdjs.Level_322Code.GDEtoileObjects1= [];
gdjs.Level_322Code.GDEtoileObjects2= [];
gdjs.Level_322Code.GDEtoileObjects3= [];
gdjs.Level_322Code.GDCameraObjects1= [];
gdjs.Level_322Code.GDCameraObjects2= [];
gdjs.Level_322Code.GDCameraObjects3= [];
gdjs.Level_322Code.GDRockObjects1= [];
gdjs.Level_322Code.GDRockObjects2= [];
gdjs.Level_322Code.GDRockObjects3= [];
gdjs.Level_322Code.GDPlayerBulletObjects1= [];
gdjs.Level_322Code.GDPlayerBulletObjects2= [];
gdjs.Level_322Code.GDPlayerBulletObjects3= [];
gdjs.Level_322Code.GDMiniRockObjects1= [];
gdjs.Level_322Code.GDMiniRockObjects2= [];
gdjs.Level_322Code.GDMiniRockObjects3= [];
gdjs.Level_322Code.GDBad1Objects1= [];
gdjs.Level_322Code.GDBad1Objects2= [];
gdjs.Level_322Code.GDBad1Objects3= [];
gdjs.Level_322Code.GDBadBulletObjects1= [];
gdjs.Level_322Code.GDBadBulletObjects2= [];
gdjs.Level_322Code.GDBadBulletObjects3= [];
gdjs.Level_322Code.GDHealthPanelObjects1= [];
gdjs.Level_322Code.GDHealthPanelObjects2= [];
gdjs.Level_322Code.GDHealthPanelObjects3= [];
gdjs.Level_322Code.GDHealthObjects1= [];
gdjs.Level_322Code.GDHealthObjects2= [];
gdjs.Level_322Code.GDHealthObjects3= [];
gdjs.Level_322Code.GDPowerPanelObjects1= [];
gdjs.Level_322Code.GDPowerPanelObjects2= [];
gdjs.Level_322Code.GDPowerPanelObjects3= [];
gdjs.Level_322Code.GDPowerObjects1= [];
gdjs.Level_322Code.GDPowerObjects2= [];
gdjs.Level_322Code.GDPowerObjects3= [];
gdjs.Level_322Code.GDExplosionObjects1= [];
gdjs.Level_322Code.GDExplosionObjects2= [];
gdjs.Level_322Code.GDExplosionObjects3= [];
gdjs.Level_322Code.GDBad2Objects1= [];
gdjs.Level_322Code.GDBad2Objects2= [];
gdjs.Level_322Code.GDBad2Objects3= [];
gdjs.Level_322Code.GDLifeBonusObjects1= [];
gdjs.Level_322Code.GDLifeBonusObjects2= [];
gdjs.Level_322Code.GDLifeBonusObjects3= [];
gdjs.Level_322Code.GDFinishLineObjects1= [];
gdjs.Level_322Code.GDFinishLineObjects2= [];
gdjs.Level_322Code.GDFinishLineObjects3= [];

gdjs.Level_322Code.conditionTrue_0 = {val:false};
gdjs.Level_322Code.condition0IsTrue_0 = {val:false};
gdjs.Level_322Code.condition1IsTrue_0 = {val:false};
gdjs.Level_322Code.condition2IsTrue_0 = {val:false};
gdjs.Level_322Code.condition3IsTrue_0 = {val:false};

gdjs.Level_322Code.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.Level_322Code.GDPlayerObjects1.length = 0;
gdjs.Level_322Code.GDPlayerObjects2.length = 0;
gdjs.Level_322Code.GDPlayerObjects3.length = 0;
gdjs.Level_322Code.GDEtoileObjects1.length = 0;
gdjs.Level_322Code.GDEtoileObjects2.length = 0;
gdjs.Level_322Code.GDEtoileObjects3.length = 0;
gdjs.Level_322Code.GDCameraObjects1.length = 0;
gdjs.Level_322Code.GDCameraObjects2.length = 0;
gdjs.Level_322Code.GDCameraObjects3.length = 0;
gdjs.Level_322Code.GDRockObjects1.length = 0;
gdjs.Level_322Code.GDRockObjects2.length = 0;
gdjs.Level_322Code.GDRockObjects3.length = 0;
gdjs.Level_322Code.GDPlayerBulletObjects1.length = 0;
gdjs.Level_322Code.GDPlayerBulletObjects2.length = 0;
gdjs.Level_322Code.GDPlayerBulletObjects3.length = 0;
gdjs.Level_322Code.GDMiniRockObjects1.length = 0;
gdjs.Level_322Code.GDMiniRockObjects2.length = 0;
gdjs.Level_322Code.GDMiniRockObjects3.length = 0;
gdjs.Level_322Code.GDBad1Objects1.length = 0;
gdjs.Level_322Code.GDBad1Objects2.length = 0;
gdjs.Level_322Code.GDBad1Objects3.length = 0;
gdjs.Level_322Code.GDBadBulletObjects1.length = 0;
gdjs.Level_322Code.GDBadBulletObjects2.length = 0;
gdjs.Level_322Code.GDBadBulletObjects3.length = 0;
gdjs.Level_322Code.GDHealthPanelObjects1.length = 0;
gdjs.Level_322Code.GDHealthPanelObjects2.length = 0;
gdjs.Level_322Code.GDHealthPanelObjects3.length = 0;
gdjs.Level_322Code.GDHealthObjects1.length = 0;
gdjs.Level_322Code.GDHealthObjects2.length = 0;
gdjs.Level_322Code.GDHealthObjects3.length = 0;
gdjs.Level_322Code.GDPowerPanelObjects1.length = 0;
gdjs.Level_322Code.GDPowerPanelObjects2.length = 0;
gdjs.Level_322Code.GDPowerPanelObjects3.length = 0;
gdjs.Level_322Code.GDPowerObjects1.length = 0;
gdjs.Level_322Code.GDPowerObjects2.length = 0;
gdjs.Level_322Code.GDPowerObjects3.length = 0;
gdjs.Level_322Code.GDExplosionObjects1.length = 0;
gdjs.Level_322Code.GDExplosionObjects2.length = 0;
gdjs.Level_322Code.GDExplosionObjects3.length = 0;
gdjs.Level_322Code.GDBad2Objects1.length = 0;
gdjs.Level_322Code.GDBad2Objects2.length = 0;
gdjs.Level_322Code.GDBad2Objects3.length = 0;
gdjs.Level_322Code.GDLifeBonusObjects1.length = 0;
gdjs.Level_322Code.GDLifeBonusObjects2.length = 0;
gdjs.Level_322Code.GDLifeBonusObjects3.length = 0;
gdjs.Level_322Code.GDFinishLineObjects1.length = 0;
gdjs.Level_322Code.GDFinishLineObjects2.length = 0;
gdjs.Level_322Code.GDFinishLineObjects3.length = 0;


{



}


{

gdjs.Level_322Code.GDCameraObjects1.createFrom(runtimeScene.getObjects("Camera"));
gdjs.Level_322Code.GDEtoileObjects1.createFrom(runtimeScene.getObjects("Etoile"));

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level_322Code.GDEtoileObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDEtoileObjects1[i].setZOrder(-5);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDCameraObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDCameraObjects1[i].hide();
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 10);
}}

}


{

gdjs.Level_322Code.GDRockObjects1.createFrom(runtimeScene.getObjects("Rock"));

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level_322Code.GDRockObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDRockObjects1[i].setDirectionOrAngle(gdjs.random(360));
}
}{for(var i = 0, len = gdjs.Level_322Code.GDRockObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDRockObjects1[i].setVariableNumber(gdjs.Level_322Code.GDRockObjects1[i].getVariables().get("RotationSpeed"), gdjs.random(50)-25);
}
}}

}


{



}


{

gdjs.Level_322Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDPlayerObjects1[i].getY() < 600-(gdjs.Level_322Code.GDPlayerObjects1[i].getHeight()) ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDPlayerObjects1[k] = gdjs.Level_322Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_322Code.GDPlayerObjects1.length = k;}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
gdjs.Level_322Code.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerObjects1[i].addForce(0, 300, 0);
}
}}

}


{

gdjs.Level_322Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDPlayerObjects1[i].getY() > 0 ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDPlayerObjects1[k] = gdjs.Level_322Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_322Code.GDPlayerObjects1.length = k;}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
gdjs.Level_322Code.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerObjects1[i].addForce(0, -300, 0);
}
}}

}


{



}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) != 1;
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.Level_322Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
gdjs.Level_322Code.GDPlayerBulletObjects2.length = 0;

gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
gdjs.Level_322Code.condition2IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
gdjs.Level_322Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) >= 12;
}if ( gdjs.Level_322Code.condition1IsTrue_0.val ) {
{
gdjs.Level_322Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.15, "MiniTir");
}}
}
if (gdjs.Level_322Code.condition2IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("PlayerBullet", gdjs.Level_322Code.GDPlayerBulletObjects2).getEventsObjectsMap(), (( gdjs.Level_322Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level_322Code.GDPlayerObjects2[0].getPointX("Bullet1"))+50, (( gdjs.Level_322Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level_322Code.GDPlayerObjects2[0].getPointY("Bullet1"))+60, "");
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("PlayerBullet", gdjs.Level_322Code.GDPlayerBulletObjects2).getEventsObjectsMap(), (( gdjs.Level_322Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level_322Code.GDPlayerObjects2[0].getPointX("Bullet2"))+50, (( gdjs.Level_322Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level_322Code.GDPlayerObjects2[0].getPointY("Bullet2"))+60, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "MiniTir");
}{for(var i = 0, len = gdjs.Level_322Code.GDPlayerBulletObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerBulletObjects2[i].addForce(500, 0, 1);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDPlayerBulletObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerBulletObjects2[i].setZOrder(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "MiniTir.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.Level_322Code.GDPlayerBulletObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerBulletObjects2[i].setBlendMode(1);
}
}{runtimeScene.getVariables().getFromIndex(2).sub(12);
}}

}

} //End of subevents
}

}


{



}


{

gdjs.Level_322Code.GDExplosionObjects1.createFrom(runtimeScene.getObjects("Explosion"));

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDExplosionObjects1.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDExplosionObjects1[i].hasAnimationEnded() ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDExplosionObjects1[k] = gdjs.Level_322Code.GDExplosionObjects1[i];
        ++k;
    }
}
gdjs.Level_322Code.GDExplosionObjects1.length = k;}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level_322Code.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDExplosionObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.Level_322Code.GDPlayerBulletObjects1.createFrom(runtimeScene.getObjects("PlayerBullet"));
gdjs.Level_322Code.GDRockObjects1.createFrom(runtimeScene.getObjects("Rock"));
gdjs.Level_322Code.GDMiniRockObjects1.length = 0;

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("Rock", gdjs.Level_322Code.GDRockObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("PlayerBullet", gdjs.Level_322Code.GDPlayerBulletObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level_322Code.GDPlayerBulletObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("MiniRock", gdjs.Level_322Code.GDMiniRockObjects1).getEventsObjectsMap(), (( gdjs.Level_322Code.GDRockObjects1.length === 0 ) ? 0 :gdjs.Level_322Code.GDRockObjects1[0].getPointX(""))+gdjs.random(30), (( gdjs.Level_322Code.GDRockObjects1.length === 0 ) ? 0 :gdjs.Level_322Code.GDRockObjects1[0].getPointY(""))+gdjs.random(30), "");
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("MiniRock", gdjs.Level_322Code.GDMiniRockObjects1).getEventsObjectsMap(), (( gdjs.Level_322Code.GDRockObjects1.length === 0 ) ? 0 :gdjs.Level_322Code.GDRockObjects1[0].getPointX(""))+gdjs.random(30), (( gdjs.Level_322Code.GDRockObjects1.length === 0 ) ? 0 :gdjs.Level_322Code.GDRockObjects1[0].getPointY(""))+gdjs.random(30), "");
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("MiniRock", gdjs.Level_322Code.GDMiniRockObjects1).getEventsObjectsMap(), (( gdjs.Level_322Code.GDRockObjects1.length === 0 ) ? 0 :gdjs.Level_322Code.GDRockObjects1[0].getPointX(""))+gdjs.random(30), (( gdjs.Level_322Code.GDRockObjects1.length === 0 ) ? 0 :gdjs.Level_322Code.GDRockObjects1[0].getPointY(""))+gdjs.random(30), "");
}{for(var i = 0, len = gdjs.Level_322Code.GDMiniRockObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDMiniRockObjects1[i].setDirectionOrAngle(gdjs.random(3));
}
}{for(var i = 0, len = gdjs.Level_322Code.GDMiniRockObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDMiniRockObjects1[i].addPolarForce(gdjs.random(360), gdjs.random(150), 0.5);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDRockObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDRockObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Explosion.wav", false, 100, 1);
}}

}


{

gdjs.Level_322Code.GDMiniRockObjects1.createFrom(runtimeScene.getObjects("MiniRock"));
gdjs.Level_322Code.GDPlayerBulletObjects1.createFrom(runtimeScene.getObjects("PlayerBullet"));

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("MiniRock", gdjs.Level_322Code.GDMiniRockObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("PlayerBullet", gdjs.Level_322Code.GDPlayerBulletObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level_322Code.GDPlayerBulletObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDMiniRockObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDMiniRockObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level_322Code.GDBadBulletObjects1.createFrom(runtimeScene.getObjects("BadBullet"));
gdjs.Level_322Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.Level_322Code.GDExplosionObjects1.length = 0;

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("BadBullet", gdjs.Level_322Code.GDBadBulletObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("Player", gdjs.Level_322Code.GDPlayerObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("Explosion", gdjs.Level_322Code.GDExplosionObjects1).getEventsObjectsMap(), (( gdjs.Level_322Code.GDBadBulletObjects1.length === 0 ) ? 0 :gdjs.Level_322Code.GDBadBulletObjects1[0].getPointX("")), (( gdjs.Level_322Code.GDBadBulletObjects1.length === 0 ) ? 0 :gdjs.Level_322Code.GDBadBulletObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Level_322Code.GDBadBulletObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDBadBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(1).sub(7);
}{for(var i = 0, len = gdjs.Level_322Code.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDExplosionObjects1[i].setScaleY(0.5);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDExplosionObjects1[i].setScaleX(0.5);
}
}}

}


{



}


{

gdjs.Level_322Code.GDPlayerBulletObjects1.createFrom(runtimeScene.getObjects("PlayerBullet"));

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDPlayerBulletObjects1.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDPlayerBulletObjects1[i].getX() > gdjs.evtTools.camera.getCameraX(runtimeScene, "",  0)+800 ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDPlayerBulletObjects1[k] = gdjs.Level_322Code.GDPlayerBulletObjects1[i];
        ++k;
    }
}
gdjs.Level_322Code.GDPlayerBulletObjects1.length = k;}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level_322Code.GDPlayerBulletObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerBulletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level_322Code.GDBadBulletObjects1.createFrom(runtimeScene.getObjects("BadBullet"));
gdjs.Level_322Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(context.clearEventsObjectsMap().addObjectsToEventsMap("Player", gdjs.Level_322Code.GDPlayerObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("BadBullet", gdjs.Level_322Code.GDBadBulletObjects1).getEventsObjectsMap(), 1000, true);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level_322Code.GDBadBulletObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDBadBulletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.Level_322Code.GDBad1Objects1.createFrom(runtimeScene.getObjects("Bad1"));
gdjs.Level_322Code.GDBad2Objects1.createFrom(runtimeScene.getObjects("Bad2"));
gdjs.Level_322Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(context.clearEventsObjectsMap().addObjectsToEventsMap("Player", gdjs.Level_322Code.GDPlayerObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("Bad1", gdjs.Level_322Code.GDBad1Objects1).addObjectsToEventsMap("Bad2", gdjs.Level_322Code.GDBad2Objects1).getEventsObjectsMap(), 800, false);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level_322Code.GDBad1Objects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDBad1Objects1[i].setVariableNumber(gdjs.Level_322Code.GDBad1Objects1[i].getVariables().get("Visible"), 1);
}
for(var i = 0, len = gdjs.Level_322Code.GDBad2Objects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDBad2Objects1[i].setVariableNumber(gdjs.Level_322Code.GDBad2Objects1[i].getVariables().get("Visible"), 1);
}
}}

}


{

gdjs.Level_322Code.GDBad1Objects1.createFrom(runtimeScene.getObjects("Bad1"));
gdjs.Level_322Code.GDBad2Objects1.createFrom(runtimeScene.getObjects("Bad2"));
gdjs.Level_322Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(context.clearEventsObjectsMap().addObjectsToEventsMap("Player", gdjs.Level_322Code.GDPlayerObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("Bad1", gdjs.Level_322Code.GDBad1Objects1).addObjectsToEventsMap("Bad2", gdjs.Level_322Code.GDBad2Objects1).getEventsObjectsMap(), 800, true);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level_322Code.GDBad1Objects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDBad1Objects1[i].setVariableNumber(gdjs.Level_322Code.GDBad1Objects1[i].getVariables().get("Visible"), 0);
}
for(var i = 0, len = gdjs.Level_322Code.GDBad2Objects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDBad2Objects1[i].setVariableNumber(gdjs.Level_322Code.GDBad2Objects1[i].getVariables().get("Visible"), 0);
}
}}

}


{

gdjs.Level_322Code.GDBad1Objects1.createFrom(runtimeScene.getObjects("Bad1"));
gdjs.Level_322Code.GDBad2Objects1.createFrom(runtimeScene.getObjects("Bad2"));

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDBad1Objects1.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDBad1Objects1[i].getVariableNumber(gdjs.Level_322Code.GDBad1Objects1[i].getVariables().get("Visible")) == 1 ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDBad1Objects1[k] = gdjs.Level_322Code.GDBad1Objects1[i];
        ++k;
    }
}
gdjs.Level_322Code.GDBad1Objects1.length = k;for(var i = 0, k = 0, l = gdjs.Level_322Code.GDBad2Objects1.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDBad2Objects1[i].getVariableNumber(gdjs.Level_322Code.GDBad2Objects1[i].getVariables().get("Visible")) == 1 ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDBad2Objects1[k] = gdjs.Level_322Code.GDBad2Objects1[i];
        ++k;
    }
}
gdjs.Level_322Code.GDBad2Objects1.length = k;}if (gdjs.Level_322Code.condition0IsTrue_0.val) {

{ //Subevents

{



}


{

gdjs.Level_322Code.GDBad1Objects2.createFrom(gdjs.Level_322Code.GDBad1Objects1);
gdjs.Level_322Code.GDBad2Objects2.createFrom(gdjs.Level_322Code.GDBad2Objects1);
gdjs.Level_322Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

{for(var i = 0, len = gdjs.Level_322Code.GDBad1Objects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDBad1Objects2[i].addForce(-50, 0, 0);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDBad2Objects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDBad2Objects2[i].addForce(-30, 0, 0);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDBad1Objects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDBad1Objects2[i].addForceTowardObject((gdjs.Level_322Code.GDPlayerObjects2.length !== 0 ? gdjs.Level_322Code.GDPlayerObjects2[0] : null), 12, 0);
}
}
}


{

gdjs.Level_322Code.GDBad1Objects2.createFrom(gdjs.Level_322Code.GDBad1Objects1);
gdjs.Level_322Code.GDBad2Objects2.createFrom(gdjs.Level_322Code.GDBad2Objects1);

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDBad1Objects2.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDBad1Objects2[i].getX() < gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0)+200 ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDBad1Objects2[k] = gdjs.Level_322Code.GDBad1Objects2[i];
        ++k;
    }
}
gdjs.Level_322Code.GDBad1Objects2.length = k;for(var i = 0, k = 0, l = gdjs.Level_322Code.GDBad2Objects2.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDBad2Objects2[i].getX() < gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0)+200 ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDBad2Objects2[k] = gdjs.Level_322Code.GDBad2Objects2[i];
        ++k;
    }
}
gdjs.Level_322Code.GDBad2Objects2.length = k;}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level_322Code.GDBad1Objects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDBad1Objects2[i].addForce(-20, 0, 0);
}
for(var i = 0, len = gdjs.Level_322Code.GDBad2Objects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDBad2Objects2[i].addForce(-20, 0, 0);
}
}}

}


{



}


{

gdjs.Level_322Code.GDBad1Objects2.createFrom(gdjs.Level_322Code.GDBad1Objects1);
gdjs.Level_322Code.GDBad2Objects2.createFrom(gdjs.Level_322Code.GDBad2Objects1);
gdjs.Level_322Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) > 0;
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDBad1Objects2.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDBad1Objects2[i].getX() > (( gdjs.Level_322Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level_322Code.GDPlayerObjects2[0].getPointX("")) ) {
        gdjs.Level_322Code.condition1IsTrue_0.val = true;
        gdjs.Level_322Code.GDBad1Objects2[k] = gdjs.Level_322Code.GDBad1Objects2[i];
        ++k;
    }
}
gdjs.Level_322Code.GDBad1Objects2.length = k;for(var i = 0, k = 0, l = gdjs.Level_322Code.GDBad2Objects2.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDBad2Objects2[i].getX() > (( gdjs.Level_322Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level_322Code.GDPlayerObjects2[0].getPointX("")) ) {
        gdjs.Level_322Code.condition1IsTrue_0.val = true;
        gdjs.Level_322Code.GDBad2Objects2[k] = gdjs.Level_322Code.GDBad2Objects2[i];
        ++k;
    }
}
gdjs.Level_322Code.GDBad2Objects2.length = k;}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {

{ //Subevents

{

gdjs.Level_322Code.GDBad1Objects3.createFrom(gdjs.Level_322Code.GDBad1Objects2);
gdjs.Level_322Code.GDBad2Objects3.createFrom(gdjs.Level_322Code.GDBad2Objects2);

{for(var i = 0, len = gdjs.Level_322Code.GDBad1Objects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDBad1Objects3[i].setVariableNumber(gdjs.Level_322Code.GDBad1Objects3[i].getVariables().get("FireRate"), gdjs.Level_322Code.GDBad1Objects3[i].getVariableNumber(gdjs.Level_322Code.GDBad1Objects3[i].getVariables().get("FireRate")) + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
for(var i = 0, len = gdjs.Level_322Code.GDBad2Objects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDBad2Objects3[i].setVariableNumber(gdjs.Level_322Code.GDBad2Objects3[i].getVariables().get("FireRate"), gdjs.Level_322Code.GDBad2Objects3[i].getVariableNumber(gdjs.Level_322Code.GDBad2Objects3[i].getVariables().get("FireRate")) + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
}


{

gdjs.Level_322Code.GDBad1Objects3.createFrom(gdjs.Level_322Code.GDBad1Objects2);
gdjs.Level_322Code.GDPlayerObjects3.createFrom(gdjs.Level_322Code.GDPlayerObjects2);
gdjs.Level_322Code.GDBadBulletObjects3.length = 0;

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDBad1Objects3.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDBad1Objects3[i].getVariableNumber(gdjs.Level_322Code.GDBad1Objects3[i].getVariables().get("FireRate")) >= 1.3 ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDBad1Objects3[k] = gdjs.Level_322Code.GDBad1Objects3[i];
        ++k;
    }
}
gdjs.Level_322Code.GDBad1Objects3.length = k;}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level_322Code.GDBad1Objects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDBad1Objects3[i].setVariableNumber(gdjs.Level_322Code.GDBad1Objects3[i].getVariables().get("FireRate"), 0+gdjs.random(50)/100);
}
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("BadBullet", gdjs.Level_322Code.GDBadBulletObjects3).getEventsObjectsMap(), (( gdjs.Level_322Code.GDBad1Objects3.length === 0 ) ? 0 :gdjs.Level_322Code.GDBad1Objects3[0].getPointX("BulletSpawn")), (( gdjs.Level_322Code.GDBad1Objects3.length === 0 ) ? 0 :gdjs.Level_322Code.GDBad1Objects3[0].getPointY("BulletSpawn")), "");
}{for(var i = 0, len = gdjs.Level_322Code.GDBadBulletObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDBadBulletObjects3[i].addForceTowardObject((gdjs.Level_322Code.GDPlayerObjects3.length !== 0 ? gdjs.Level_322Code.GDPlayerObjects3[0] : null), 410, 1);
}
}}

}


{

gdjs.Level_322Code.GDBad2Objects3.createFrom(gdjs.Level_322Code.GDBad2Objects2);
gdjs.Level_322Code.GDPlayerObjects3.createFrom(gdjs.Level_322Code.GDPlayerObjects2);
gdjs.Level_322Code.GDBadBulletObjects3.length = 0;

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDBad2Objects3.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDBad2Objects3[i].getVariableNumber(gdjs.Level_322Code.GDBad2Objects3[i].getVariables().get("FireRate")) >= 2 ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDBad2Objects3[k] = gdjs.Level_322Code.GDBad2Objects3[i];
        ++k;
    }
}
gdjs.Level_322Code.GDBad2Objects3.length = k;}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level_322Code.GDBad2Objects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDBad2Objects3[i].setVariableNumber(gdjs.Level_322Code.GDBad2Objects3[i].getVariables().get("FireRate"), 0+gdjs.random(70)/100);
}
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("BadBullet", gdjs.Level_322Code.GDBadBulletObjects3).getEventsObjectsMap(), (( gdjs.Level_322Code.GDBad2Objects3.length === 0 ) ? 0 :gdjs.Level_322Code.GDBad2Objects3[0].getPointX("BulletSpawn")), (( gdjs.Level_322Code.GDBad2Objects3.length === 0 ) ? 0 :gdjs.Level_322Code.GDBad2Objects3[0].getPointY("BulletSpawn")), "");
}{for(var i = 0, len = gdjs.Level_322Code.GDBadBulletObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDBadBulletObjects3[i].addForceTowardObject((gdjs.Level_322Code.GDPlayerObjects3.length !== 0 ? gdjs.Level_322Code.GDPlayerObjects3[0] : null), 310, 1);
}
}}

}

} //End of subevents
}

}


{

gdjs.Level_322Code.GDBad1Objects2.createFrom(gdjs.Level_322Code.GDBad1Objects1);
gdjs.Level_322Code.GDBad2Objects2.createFrom(gdjs.Level_322Code.GDBad2Objects1);
gdjs.Level_322Code.GDRockObjects2.createFrom(runtimeScene.getObjects("Rock"));
gdjs.Level_322Code.GDMiniRockObjects2.length = 0;

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("Rock", gdjs.Level_322Code.GDRockObjects2).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("Bad1", gdjs.Level_322Code.GDBad1Objects2).addObjectsToEventsMap("Bad2", gdjs.Level_322Code.GDBad2Objects2).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("MiniRock", gdjs.Level_322Code.GDMiniRockObjects2).getEventsObjectsMap(), (( gdjs.Level_322Code.GDRockObjects2.length === 0 ) ? 0 :gdjs.Level_322Code.GDRockObjects2[0].getPointX(""))+gdjs.random(30), (( gdjs.Level_322Code.GDRockObjects2.length === 0 ) ? 0 :gdjs.Level_322Code.GDRockObjects2[0].getPointY(""))+gdjs.random(30), "");
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("MiniRock", gdjs.Level_322Code.GDMiniRockObjects2).getEventsObjectsMap(), (( gdjs.Level_322Code.GDRockObjects2.length === 0 ) ? 0 :gdjs.Level_322Code.GDRockObjects2[0].getPointX(""))+gdjs.random(30), (( gdjs.Level_322Code.GDRockObjects2.length === 0 ) ? 0 :gdjs.Level_322Code.GDRockObjects2[0].getPointY(""))+gdjs.random(30), "");
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("MiniRock", gdjs.Level_322Code.GDMiniRockObjects2).getEventsObjectsMap(), (( gdjs.Level_322Code.GDRockObjects2.length === 0 ) ? 0 :gdjs.Level_322Code.GDRockObjects2[0].getPointX(""))+gdjs.random(30), (( gdjs.Level_322Code.GDRockObjects2.length === 0 ) ? 0 :gdjs.Level_322Code.GDRockObjects2[0].getPointY(""))+gdjs.random(30), "");
}{for(var i = 0, len = gdjs.Level_322Code.GDMiniRockObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDMiniRockObjects2[i].setDirectionOrAngle(gdjs.random(3));
}
}{for(var i = 0, len = gdjs.Level_322Code.GDMiniRockObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDMiniRockObjects2[i].addPolarForce(gdjs.random(360), gdjs.random(150), 0.5);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDRockObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDRockObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Explosion.wav", false, 100, 1);
}}

}


{

gdjs.Level_322Code.GDBad1Objects2.createFrom(gdjs.Level_322Code.GDBad1Objects1);
gdjs.Level_322Code.GDBad2Objects2.createFrom(gdjs.Level_322Code.GDBad2Objects1);
gdjs.Level_322Code.GDPlayerBulletObjects2.createFrom(runtimeScene.getObjects("PlayerBullet"));

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("PlayerBullet", gdjs.Level_322Code.GDPlayerBulletObjects2).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("Bad1", gdjs.Level_322Code.GDBad1Objects2).addObjectsToEventsMap("Bad2", gdjs.Level_322Code.GDBad2Objects2).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level_322Code.GDBad1Objects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDBad1Objects2[i].setVariableNumber(gdjs.Level_322Code.GDBad1Objects2[i].getVariables().get("Life"), gdjs.Level_322Code.GDBad1Objects2[i].getVariableNumber(gdjs.Level_322Code.GDBad1Objects2[i].getVariables().get("Life")) - (1));
}
for(var i = 0, len = gdjs.Level_322Code.GDBad2Objects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDBad2Objects2[i].setVariableNumber(gdjs.Level_322Code.GDBad2Objects2[i].getVariables().get("Life"), gdjs.Level_322Code.GDBad2Objects2[i].getVariableNumber(gdjs.Level_322Code.GDBad2Objects2[i].getVariables().get("Life")) - (1));
}
}{for(var i = 0, len = gdjs.Level_322Code.GDPlayerBulletObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerBulletObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level_322Code.GDBad1Objects2.createFrom(gdjs.Level_322Code.GDBad1Objects1);
gdjs.Level_322Code.GDBad2Objects2.createFrom(gdjs.Level_322Code.GDBad2Objects1);
gdjs.Level_322Code.GDExplosionObjects2.length = 0;

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_322Code.GDBad1Objects2.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDBad1Objects2[i].getVariableNumber(gdjs.Level_322Code.GDBad1Objects2[i].getVariables().get("Life")) <= 0 ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDBad1Objects2[k] = gdjs.Level_322Code.GDBad1Objects2[i];
        ++k;
    }
}
gdjs.Level_322Code.GDBad1Objects2.length = k;for(var i = 0, k = 0, l = gdjs.Level_322Code.GDBad2Objects2.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDBad2Objects2[i].getVariableNumber(gdjs.Level_322Code.GDBad2Objects2[i].getVariables().get("Life")) <= 0 ) {
        gdjs.Level_322Code.condition0IsTrue_0.val = true;
        gdjs.Level_322Code.GDBad2Objects2[k] = gdjs.Level_322Code.GDBad2Objects2[i];
        ++k;
    }
}
gdjs.Level_322Code.GDBad2Objects2.length = k;}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("Explosion", gdjs.Level_322Code.GDExplosionObjects2).getEventsObjectsMap(), (( gdjs.Level_322Code.GDBad2Objects2.length === 0 ) ? (( gdjs.Level_322Code.GDBad1Objects2.length === 0 ) ? 0 :gdjs.Level_322Code.GDBad1Objects2[0].getPointX("Centre")) :gdjs.Level_322Code.GDBad2Objects2[0].getPointX("Centre")), (( gdjs.Level_322Code.GDBad2Objects2.length === 0 ) ? (( gdjs.Level_322Code.GDBad1Objects2.length === 0 ) ? 0 :gdjs.Level_322Code.GDBad1Objects2[0].getPointY("Centre")) :gdjs.Level_322Code.GDBad2Objects2[0].getPointY("Centre")), "");
}{for(var i = 0, len = gdjs.Level_322Code.GDBad1Objects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDBad1Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level_322Code.GDBad2Objects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDBad2Objects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Explosion.wav", false, 100, 1);
}}

}

} //End of subevents
}

}


{



}


{

gdjs.Level_322Code.GDLifeBonusObjects1.createFrom(runtimeScene.getObjects("LifeBonus"));
gdjs.Level_322Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("Player", gdjs.Level_322Code.GDPlayerObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("LifeBonus", gdjs.Level_322Code.GDLifeBonusObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level_322Code.GDLifeBonusObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDLifeBonusObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(1).add(50);
}{runtimeScene.getVariables().getFromIndex(2).add(50);
}}

}


{



}


{

gdjs.Level_322Code.GDHealthObjects1.createFrom(runtimeScene.getObjects("Health"));
gdjs.Level_322Code.GDPowerObjects1.createFrom(runtimeScene.getObjects("Power"));

{for(var i = 0, len = gdjs.Level_322Code.GDHealthObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDHealthObjects1[i].setScaleX(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1))/100);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDPowerObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDPowerObjects1[i].setScaleX(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2))/100);
}
}
}


{


{runtimeScene.getVariables().getFromIndex(2).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)*33);
}
{ //Subevents

{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) >= 100;
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(100);
}}

}

} //End of subevents

}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) >= 100;
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(100);
}}

}


{



}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) <= 0;
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}
{ //Subevents

{

gdjs.Level_322Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
gdjs.Level_322Code.GDExplosionObjects2.length = 0;

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("Explosion", gdjs.Level_322Code.GDExplosionObjects2).getEventsObjectsMap(), (( gdjs.Level_322Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level_322Code.GDPlayerObjects2[0].getPointX("Centre")), (( gdjs.Level_322Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level_322Code.GDPlayerObjects2[0].getPointY("Centre")), "");
}{for(var i = 0, len = gdjs.Level_322Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}

} //End of subevents
}

}


{

gdjs.Level_322Code.GDLifeBonusObjects1.createFrom(runtimeScene.getObjects("LifeBonus"));

{for(var i = 0, len = gdjs.Level_322Code.GDLifeBonusObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDLifeBonusObjects1[i].setOpacity(128+Math.cos(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene)*3)*128);
}
}
}


{



}


{

gdjs.Level_322Code.GDRockObjects1.createFrom(runtimeScene.getObjects("Rock"));

{for(var i = 0, len = gdjs.Level_322Code.GDRockObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDRockObjects1[i].setDirectionOrAngle(gdjs.Level_322Code.GDRockObjects1[i].getDirectionOrAngle() + ((gdjs.RuntimeObject.getVariableNumber(gdjs.Level_322Code.GDRockObjects1[i].getVariables().get("RotationSpeed")))*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
}


{



}


{

gdjs.Level_322Code.GDCameraObjects1.createFrom(runtimeScene.getObjects("Camera"));
gdjs.Level_322Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) > 0;
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDPlayerObjects1[i].addForce(70, 0, 0);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDCameraObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDCameraObjects1[i].addForce(70, 0, 0);
}
}}

}


{

gdjs.Level_322Code.GDCameraObjects1.createFrom(runtimeScene.getObjects("Camera"));

{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level_322Code.GDCameraObjects1.length !== 0 ? gdjs.Level_322Code.GDCameraObjects1[0] : null), false, "", 0);
}
}


{

gdjs.Level_322Code.GDBad1Objects1.createFrom(runtimeScene.getObjects("Bad1"));
gdjs.Level_322Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("Player", gdjs.Level_322Code.GDPlayerObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("Bad1", gdjs.Level_322Code.GDBad1Objects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).sub(20);
}{for(var i = 0, len = gdjs.Level_322Code.GDBad1Objects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDBad1Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level_322Code.GDBad2Objects1.createFrom(runtimeScene.getObjects("Bad2"));
gdjs.Level_322Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("Player", gdjs.Level_322Code.GDPlayerObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("Bad2", gdjs.Level_322Code.GDBad2Objects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).sub(30);
}{for(var i = 0, len = gdjs.Level_322Code.GDBad2Objects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDBad2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Lives").sub(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), false);
}}

}


{


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 0;
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


{

gdjs.Level_322Code.GDBad1Objects1.createFrom(runtimeScene.getObjects("Bad1"));

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("Bad1", gdjs.Level_322Code.GDBad1Objects1).getEventsObjectsMap()) == 0;
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
}

}


{

gdjs.Level_322Code.GDFinishLineObjects1.createFrom(runtimeScene.getObjects("FinishLine"));
gdjs.Level_322Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("Player", gdjs.Level_322Code.GDPlayerObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("FinishLine", gdjs.Level_322Code.GDFinishLineObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.Level_322Code.GDBad1Objects2.createFrom(runtimeScene.getObjects("Bad1"));

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("Bad1", gdjs.Level_322Code.GDBad1Objects2).getEventsObjectsMap()) > 0;
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), false);
}}

}


{

gdjs.Level_322Code.GDBad1Objects2.createFrom(runtimeScene.getObjects("Bad1"));

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("Bad1", gdjs.Level_322Code.GDBad1Objects2).getEventsObjectsMap()) == 0;
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 3", false);
}}

}

} //End of subevents
}

}

return;
}
gdjs['Level_322Code']= gdjs.Level_322Code;
