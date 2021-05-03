
// UI

UI.AddLabel("Welcome to F4STZSense");
UI.AddHotkey("DodgeBruteforce");
UI.AddCheckbox("F4STZyaw");
UI.AddCheckbox("Fastest DT");
UI.AddCheckbox("Jitter pitch (Untrusted Mode)");
UI.AddCheckbox("LagSync Breaker");
UI.AddCheckbox("Slow walk Breaker(Not have dt)");
UI.AddCheckbox("leg breaker");

// watermark


function indicator() {
	var h = [];
	var distance = 35;
	var screen_size = Global.GetScreenSize();
	
	const indicator_font = Render.AddFont("Calibri", 18, 600);
	
	if (!Entity.IsAlive(Entity.GetLocalPlayer()))
		return;


    Render.StringCustom(screen_size[0] / 2 - 30, screen_size[1] - 20, 0, "F4STZSense", [100, 0, 255, 199], Render.AddFont("Verdana", 12, 600));


	
}

// functions 

Inverted = UI['IsHotkeyActive']('Anti-Aim', 'Fake angles', 'Inverter');

function randomIntFrom(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}


function DodgeBruteforce(){

    if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "DodgeBruteforce")){
        AntiAim.SetOverride(1);
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0);
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 5);
        AntiAim.SetFakeOffset(0);
        AntiAim.SetRealOffset(-17);
        AntiAim.SetLBYOffset(0);

    }else{
        var tick = Globals.Tickcount();
        if (tick % 2 == 0){
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", -3);
        }else{
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 3);
        }
        AntiAim.SetOverride(0);
    }


}

function lagsync(){

    if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "LagSync Breaker")){

        var tick = Globals.Tickcount(); 

        var RandomfakeLag = Math.random() * (16 - 8) + 8;

        UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", RandomfakeLag);

        if (tick % 2 == 0){

            UI.SetValue("Anti-Aim", "Fake-Lag", "Jitter", 0);
            UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", false);



        }else{
            UI.SetValue("Anti-Aim", "Fake-Lag", "Jitter", 32);
            UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", true);
        }


    }


}



function Flip(){

    AntiAim.SetOverride(1);
    UI.ToggleHotkey("Anti-Aim", "Fake angles", "inverter");
    AntiAim.SetOverride(0);

    
    
}


function betterYAW1(){


    if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "F4STZyaw")){

        if(Inverted){
            AntiAim.SetOverride(1);
            AntiAim.SetFakeOffset(0x1a);
            AntiAim['SetRealOffset'](-0x55);
            AntiAim['SetLBYOffset'](0x76);
            UI.ToggleHotkey("Anti-Aim", "Fake angles", "inverter");
            AntiAim.SetOverride(0);
        }else{
            AntiAim.SetOverride(1);
            AntiAim['SetFakeOffset'](-0x10);
            AntiAim['SetRealOffset'](0xa2);
            AntiAim['SetLBYOffset'](-0x84);
            UI.ToggleHotkey("Anti-Aim", "Fake angles", "inverter");
            AntiAim.SetOverride(0);
        }


        
    }

}




function betterYaw2(){


    if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "F4STZyaw")){

        var tick = Globals.Tickcount();

        if (tick % 2 == 0){
            AntiAim.SetOverride(1);
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 3);
            UI.SetValue("Anti-Aim", "Fake angles","Desync on shot", true);
            UI.SetValue("Anti-Aim", "Fake angles","Hide real angle", true);
            UI.SetValue("Anti-Aim",  "Fake angles","Avoid overlap", true);
            UI.SetValue("Anti-Aim", "Extra", "Jitter move", true);
            UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 0);
            UI.SetValue("Anti-Aim", "Fake angles", "Inverter flip", ["Walk", "Run", " In air"]);
            UI.ToggleHotkey("Anti-Aim", "Fake angles", "inverter");
            AntiAim.SetOverride(0);
            
        }else{
            AntiAim.SetOverride(1);
            UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", -3);
            UI.SetValue("Anti-Aim", "Fake angles","Desync on shot", false);
            UI.SetValue("Anti-Aim", "Fake angles","Hide real angle", false);
            UI.SetValue("Anti-Aim", "Fake angles","Avoid overlap", false);
            UI.SetValue("Anti-Aim", "Extra", "Jitter move", false);
            UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 1);
            UI.SetValue("Anti-Aim", "Fake angles", "Inverter flip", []);
            UI.ToggleHotkey("Anti-Aim", "Fake angles", "inverter");
            AntiAim.SetOverride(0);
            
           
        }
        

    }


}



function JitterPitch(){

    if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Jitter pitch (Untrusted Mode)")){

        var tick = Globals.Tickcount();
        
        if(tick % 2 == 0){
            UI.SetValue("Anti-Aim", "Extra", "Pitch", 1);
        }else{
            UI.SetValue("Anti-Aim", "Extra", "Pitch", 6);
        }

        

    }


}


function legBreaker(){


    if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "leg breaker")){
        var tick = Globals.Tickcount();
            
        if(tick % 2 == 0){
            UI.SetValue("Misc", "General", "Movement", "Slide walk", true);
            UI.SetValue("Misc", "General", "Movement", "Accurate walk", true);
        }else{
            UI.SetValue("Misc", "General", "Movement", "Slide walk", false);
            UI.SetValue("Misc", "General", "Movement", "Accurate walk", false);
        }
    }else{
        UI.SetValue("Misc", "General", "Movement", "Slide walk", true);
        UI.SetValue("Misc", "General", "Movement", "Accurate walk", true);
    }

}

function SlowWalk_EXPLOIT(){

    if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Slow walk Breaker(Not have dt)")){

        var tick = Globals.Tickcount();

        if (tick % 2 == 0){

            UI.SetValue("Anti-Aim", "Extra", "Slow walk mode", 2);

        }else{
            UI.SetValue("Anti-Aim", "Extra", "Slow walk mode", 1);
        }

    }else{
        UI.SetValue("Anti-Aim", "Extra", "Slow walk mode", 0);
    }



}


function DT(){

    if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Fastest DT")){

        function can_shift_shot(ticks_to_shift) {
            var me = Entity.GetLocalPlayer();
            var wpn = Entity.GetWeapon(me);
        
            if (me == null || wpn == null)
                return false;
        
            var tickbase = Entity.GetProp(me, "CCSPlayer", "m_nTickBase");
            var curtime = Globals.TickInterval() * (tickbase-1-ticks_to_shift)
        
            if (curtime < Entity.GetProp(me, "CCSPlayer", "m_flNextAttack"))
                return false;
        
            if (curtime < Entity.GetProp(wpn, "CBaseCombatWeapon", "m_flNextPrimaryAttack"))
                return false;
        
            return true;
        }
        
        function _TBC_CREATE_MOVE() {
            var is_charged = Exploit.GetCharge()
            var reserve = 1
            Exploit[(is_charged != 1 ? "Enable" : "Disable") + "Recharge"]()
        
            if (can_shift_shot(22) && is_charged != 1) {
                Exploit.DisableRecharge();
                Exploit.Recharge()
            }
        
            Exploit.OverrideTolerance(14-reserve);
            Exploit.OverrideShift(16-reserve);
        }
        
        function _TBC_UNLOAD() {
            Exploit.EnableRecharge(1);
        }
        
        Cheat.RegisterCallback("CreateMove", "_TBC_CREATE_MOVE");
        Cheat.RegisterCallback("Unload", "_TBC_UNLOAD");


    }


}


// callbacks
Cheat.RegisterCallback("CreateMove", "JitterPitch");
Cheat.RegisterCallback("CreateMove", "betterYAW1");
Cheat.RegisterCallback("CreateMove", "betterYaw2");
Cheat.RegisterCallback("CreateMove", "DodgeBruteforce");
Cheat.RegisterCallback("CreateMove", "DT");
Cheat.RegisterCallback("CreateMove", "lagsync");
Cheat.RegisterCallback("CreateMove", "SlowWalk_EXPLOIT");
Cheat.RegisterCallback("CreateMove", "legBreaker");
Cheat.RegisterCallback("Draw", "indicator");
Cheat.RegisterCallback("weapon_fire", "Flip");
Global.RegisterCallback("ragebot_fire", "Flip");
