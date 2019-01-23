"ui";
let tool_freeread_ui =
    (function () {
        return <frame>
            <ScrollView>
                <vertical>
                    <webview id="web" w="1000" h="1000" size="6" margin="0 0 1 0"></webview>
                </vertical>
            </ScrollView>
        </frame>
    })();


(function () {
    let myui = ui.inflate(tool_freeread_ui);

    let mth = threads.start(function () {

        try {
            ctx.ts[code] = {
                th: mth,
                ui: myui,
                run: function () { 
                    ui.web.loadUrl("http://www.baidu.com");
                },
                init: () => {
                    
                }
            };

        } catch (e) {
        }
    });

})();
