import ISceneState from "../Utils/SceneManager/ISceneState";
import { SceneName } from "../Utils/SceneManager/SceneManager";
import { UIManager, UI_CONFIG, UI_TRANSITION_TYPE } from "../Utils/UIManager";
import { TweenFunc } from "../Utils/tweenfunc";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MainSceneState extends ISceneState {

    /**
     *
     */
    constructor() {
        super();
        this.stateName = SceneName.Main;
    }

    enterScene() {
        console.log("enter main scene");
        UIManager.get_inst().show(UI_CONFIG.GameStartUI, {
            transType: UI_TRANSITION_TYPE.RightIn,
            tweenFunc: TweenFunc.Cubic.easeOut,
            duration: 0.3,
        });
    }
    exitScene() {
        console.log("leave main scene");
    }
}
