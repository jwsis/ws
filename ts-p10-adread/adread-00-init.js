"ui";
let tool_adread_ui =
    <ScrollView>
        <vertical>
            <linear >
                <checkbox id="wt" margin="5 0 5 5" w="28" checked="false" />
                <button id="btn_test" textSize="10sp" text="测试" w="auto" h="40" />
            </linear>
        </vertical>
    </ScrollView>;

(function () {
    let code = "tool_adread";

    let fly = 1;

    let test = function () {
        try{
        importClass(android.provider.Settings);
        Settings.Global.putInt(
            context.getContentResolver(),
            Settings.Global.AIRPLANE_MODE_ON,fly);
        let intent = new Intent();
        intent.setAction("android.settings.ACTION_AIRPLANE_MODE_CHANGED");
        intent.putExtra("state", !fly);
        context.sendBroadcast(intent);
        fly = fly?0:1;}
        catch(e){
            toastLog(e);
        }
    }

    ctx.ts[code] = {
        ui: ui.inflate(tool_adread_ui),
        run: function () {
            alert("请选择其他工具运行1");
        },
        init: () => {
            ui.btn_test.click(function () {
                test();
            });
        }
    };
})();

