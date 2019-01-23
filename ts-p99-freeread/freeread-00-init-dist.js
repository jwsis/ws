
let tool_freeread_ui =
    <ScrollView>
        <vertical>
            <text text="====说明v2====" marginTop="10" textColor="blue" gravity="center" typeface="monospace" />
        </vertical>
    </ScrollView>;

(function () {

    let code = "tool_freeread";
    let mth = threads.start(function () {
        ctx.ts[code] = {
            ui: ui.inflate(tool_freeread_ui),
            run: function () {
                toastLog(123);
                toastLog(ui.web != null);
            },
            init: () => {

            }
        };
    }
})();
