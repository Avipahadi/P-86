var canvas = new fabric.Canvas("myCanvas");
var player_x = 10;
var player_y = 10;
var block_h = 30;
var block_w = 30;
var player_object = "";
var block_object = "";

function refresh() {
    location.reload();
}

function player() {
    fabric.Image.fromURL("player.png", function (img) {
        player_object = img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
    });
}

function face(getface) {
    fabric.Image.fromURL(getface, function (img) {
        block_object = img;
        block_object.scaleToWidth(block_w);
        block_object.scaleToHeight(block_h);
        block_object.set({
            top: player_y,
            left: player_x
        });
    });
}

function body(getbody) {
    fabric.Image.fromURL(getbody, function (img) {
        block_object = img;
        block_object.scaleToWidth(block_w);
        block_object.scaleToHeight(block_h);
        block_object.set({
            top: player_y,
            left: player_x
        });
    });
}

function armr(getrarm) {
    fabric.Image.fromURL(getrarm, function (img) {
        block_object = img;
        block_object.scaleToWidth(block_w);
        block_object.scaleToHeight(block_h);
        block_object.set({
            top: player_y,
            left: player_x
        });
    });
}

function arml(getlarm) {
    fabric.Image.fromURL(getlarm, function (img) {
        block_object = img;
        block_object.scaleToWidth(block_w);
        block_object.scaleToHeight(block_h);
        block_object.set({
            top: player_y,
            left: player_x
        });
    });
}

function leg(getleg) {
    fabric.Image.fromURL(getleg, function (img) {
        block_object = img;
        block_object.scaleToWidth(block_w);
        block_object.scaleToHeight(block_h);
        block_object.set({
            top: player_y,
            left: player_x
        });
    });
}
window.addEventListener("keydown", mykeydown);

function mykeydown(e) {

    var keypressed = e.keyCode;

    if (e.shiftKey == true & keypressed == "80") {
        console.log(keypressed);
        block_h = block_h + 10;
        block_w = block_w + 10;
        console.log("Shift and P Pressed");
        document.getElementById("block_height").innerHTML = block_h;
        document.getElementById("block_width").innerHTML = block_w;
    }
    if (e.shiftKey == true & keypressed == "77") {
        console.log(keypressed);
        block_h = block_h - 10;
        block_w = block_w - 10;
        console.log("Shift and M Pressed");
        document.getElementById("block_height").innerHTML = block_h;
        document.getElementById("block_width").innerHTML = block_w;
    }
    if (e.ctrlKey == true & keypressed == "66") {
        console.log(keypressed);
        block_h = "30";
        block_w = "30";
        console.log("CTRL and B Pressed");
        document.getElementById("block_height").innerHTML = block_h;
        document.getElementById("block_width").innerHTML = block_w;
    }
    if (e.ctrlKey == false & e.shiftKey == false & keypressed == "70" & keypressed == "72") {
        face("hulk_face.png");
        console.log("HULK FACE");
    }
    if (e.ctrlKey == false & e.shiftKey == false & keypressed == "70" & keypressed == "73") {
        face("ironman_face.jpg");
        console.log("IRON MAN FACE");
    }
    if (e.ctrlKey == false & e.shiftKey == false & keypressed == "70" & keypressed == "83") {
        face("spiderman_face.png");
        console.log("SPIDER MAN FACE");
    }
    if (e.ctrlKey == false & e.shiftKey == false & keypressed == "70" & keypressed == "84") {
        face("thor_face.png");
        console.log("THOR FACE");
    }
    if (e.ctrlKey == false & e.shiftKey == false & keypressed == "66" & keypressed == "72") {
        body("hulk_body.png");
        console.log("HULK BODY");
    }
    if (e.ctrlKey == false & e.shiftKey == false & keypressed == "66" & keypressed == "73") {
        body("ironman_body.png");
        console.log("IRON MAN BODY");
    }
    if (e.ctrlKey == false & e.shiftKey == false & keypressed == "66" & keypressed == "83") {
        body("spiderman_body.png");
        console.log("SPIDER MAN BODY");
    }
    if (e.ctrlKey == false & e.shiftKey == false & keypressed == "82" & keypressed == "72") {
        armr("hulk_right_hand.png");
        console.log("HULK RIGHT ARM");
    }
    if (e.ctrlKey == false & e.shiftKey == false & keypressed == "82" & keypressed == "73") {
        armr("ironman_right_hand.png");
        console.log("IRON MAN RIGHT ARM");
    }
    if (e.ctrlKey == false & e.shiftKey == false & keypressed == "82" & keypressed == "83") {
        armr("spiderman_right_hand.png");
        console.log("SPIDER MAN RIGHT ARM");
    }
    if (e.ctrlKey == false & e.shiftKey == false & keypressed == "82" & keypressed == "84") {
        armr("thor_right_hand.png");
        console.log("THOR RIGHT ARM");
    }
    if (e.ctrlKey == false & e.shiftKey == false & keypressed == "76" & keypressed == "72") {
        arml("hulk_left_hand.png");
        console.log("HULK LEFT ARM");
    }
    if (e.ctrlKey == false & e.shiftKey == false & keypressed == "76" & keypressed == "73") {
        arml("ironman_left_hand.png");
        console.log("IRON MAN LEFT ARM");
    }
    if (e.ctrlKey == false & e.shiftKey == false & keypressed == "76" & keypressed == "83") {
        arml("spiderman_left_hand.png");
        console.log("SPIDER MAN LEFT ARM");
    }
    if (e.ctrlKey == false & e.shiftKey == false & keypressed == "76" & keypressed == "84") {
        arml("thor_left_hand.png");
        console.log("THOR LEFT ARM");
    }
    if (e.ctrlKey == false & e.shiftKey == true & keypressed == "76" & keypressed == "72") {
        leg("hulk_legs.png");
    }
    if (e.ctrlKey == false & e.shiftKey == true & keypressed == "76" & keypressed == "73") {
        leg("ironman_legs.png");
    }
    if (e.ctrlKey == false & e.shiftKey == true & keypressed == "76" & keypressed == "83") {
        leg("spiderman_legs.png");
    }
    if (e.shiftKey == true & keypressed == "91") {
        refresh();
    }
    if (keypressed == "38") {
        console.log("UP");
    }
    if (keypressed == "40") {
        console.log("DOWN");
    }
    if (keypressed == "37") {
        console.log("RIGHT");
    }
    if (keypressed == "39") {
        console.log("LEFT");
    }
}