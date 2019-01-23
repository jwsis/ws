"ui";
let tool_freeread_ui =
    (function () {
        return <frame>
            <ScrollView>
                <vertical>

                </vertical>
            </ScrollView>
        </frame>
    })();


(function () {
    let mth = threads.start(function () {

        try {
            ctx.ts[code] = {
                th: mth,
                ui: ui.inflate(tool_freeread_ui),
                run: function () { 
                    ui.web.loadData("<script>alert(111)</script>");
                },
                init: () => {
                    
                }
            };

        } catch (e) {
        }
    });

})();
