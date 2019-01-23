
let tool_freeread_ui =
    <ScrollView>
        <vertical>
            <text text="====说明====" marginTop="10" textColor="blue" gravity="center" typeface="monospace" />
        </vertical>
    </ScrollView>;

(function () {

    let code = "tool_freeread";

    ctx.ts[code] = {
        ui: ui.inflate(tool_intro_ui),
        run: function () {
            alert("请选择其他工具运行");
        },
        init: () => {
            
        }
    };
})();
