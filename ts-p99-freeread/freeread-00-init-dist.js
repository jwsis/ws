let tool_freeread_ui =
    (function () {
        return <frame>
            <ScrollView>
                <vertical>
                <text text="====视频类====" marginTop="10" textColor="blue" gravity="center" typeface="monospace" />
                </vertical>
            </ScrollView>
        </frame>
    })();


(function () {
    let code = "tool_freeread";
    let mth = threads.start(function () {

        try {
            ctx.ts[code] = {
                th: mth,
                ui: ui.inflate(tool_freeread_ui),
                run: function () { },
                init: () => {

                }
            };

        } catch (e) {
        }
    });

    setTimeout(() => {
        // ui.layout(tool_freeread_ui);
    }, 1000);

})();
