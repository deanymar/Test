
function initTreepodia(player) {
            player.show({
                //Required Parameters
                account: "UA-SHUFER-SAL",
                sku: "e0450759a203ca4193d499d4eb62ec93",
                container: "treepodiaPlayerMain",

                // Optional Video Parameters
                autoplay: false,
                loop: false,
                muted: false,

                // Optional Player Parameters
                controls: true,
                showJumboPlay: true,
                blueJumboPlay: true,
                responsive: true,
                showTime: true,
                showDuration: true,
                pictureInPicture: false,

                // // Popup
                popup: false,
                popupBtnWidth: 50, // pixels
                popupBtnHeight: 50, // pixels
                popupBtnImg: null, // string:URL

                // // Poster
                showPoster: false,
                posterUrl: null, // string:URL

                gaEnabled: false,
                gaId: null, //STRING: GTAG ID (UA-XXXXXXX-XX)

                //CALLBACKS
                onReady: function (treepodiaPlayer) {
                },

                onError: function (error) {
                },
            });
        }