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
                    alert(111)
                },
                init: () => {
                    
                }
            };

        } catch (e) {
        }
    });

})();
