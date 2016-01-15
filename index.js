var app = require('express')();
var server = require('http').createServer(app).listen(process.env.PORT || 5000);
var io = require('socket.io').listen(server);
var words = ["uzan", "Alumnol", "sumphy", "subjectivoidealistic", "blackbine", "incomposed", "waringin", "hesitatingly", "caraibe", "brachioganoid", "driftland", "wizardlike", "obsession", "graphy", "unyieldingly", "peckiness", "spickle", "unintitled", "prerequest", "trafflike", "pasting", "untouchableness", "bloodworm", "lodging", "Erythraea", "unarithmetically", "ulorrhea", "phyllobranchiate", "Barabra", "horopteric", "hagweed", "gastriloquism", "hemophthalmia", "hucklebone", "saxtuba", "Laramie", "marid", "slavocratic", "unridably", "greenbrier", "veldcraft", "pholcid", "efficacious", "hollo", "townman", "antidotism", "stridlins", "follow", "dispope", "planuria", "systemizable", "wheeled", "scyphistomoid", "Solarium", "die", "chondrectomy", "Pyrameis", "winnard", "limbat", "bombastic", "Tapajo", "blastid", "graisse", "Acinetina", "temporofacial", "scyllarian", "respiteless", "legpulling", "scirrhus", "subtenure", "birthnight", "autohypnotic", "sphaerocobaltite", "Ouija", "unsensitive", "cholinesterase", "tact", "adiposuria", "subgrade", "intermaxillar", "gastrohelcosis", "crimsony", "copaivic", "erythropoietic", "antiexporting", "attinge", "Ichthyopterygia", "logway", "monochordize", "dipole", "starmonger", "nightshine", "dissettlement", "autozooid", "moneyflower", "osmotherapy", "renascible", "epicyte", "volitient", "underpresser", "superofrontal", "umbral", "kurmburra", "relevy", "pyrryl", "quicksilverishness", "unshamableness", "dhyana", "unbewitch", "Paccanarist", "saprophagous", "Chelydra", "obfuscity", "uncereclothed", "undupable", "unfishlike", "Comitium", "discriminatory", "agriculturer", "cynopithecoid", "typobar", "necroscopy", "uncrystallizable", "exclusionist", "stamnos", "aflicker", "soaker", "iguanodontoid", "overtender", "unreversable", "overcomplacency", "Colletia", "tumescent", "Trollopean", "stibiconite", "dolomitize", "poorness", "vendace", "cophosis", "uncircumstanced", "glossophytia", "toolbuilding", "Charruas", "bitch", "ass", "penis", "anal", "anus", "arse", "ballsack", "balls", "bastard", "biatch", "bloody", "blowjob", "blow job", "bollock", "bollok", "boner", "boob", "bugger", "bum", "butt", "buttplug", "clitoris", "cock", "coon", "crap", "cunt", "damn", "dick", "omg", "penis", "piss", "poop", "prick", "pube", "pussy", "queer", "scrotum", "sex", "shit", "s hit", "sh1t", "slut", "smegma", "spunk", "tit", "tosser", "turd", "twat", "vagina", "wank", "whore"];

app.get('/', function(req, res) {
    res.sendFile(__dirname + '\\index.html');
});

setInterval(function() {


    for (var i = 0; i < 1000; i++) {

        io.sockets.emit('bcast', words[Math.floor(Math.random() * words.length)]);
    }
}, 5000);


io.on('connection', function(socket) {
    socket.on('chat message', function(msg) {
        io.emit('chat message', msg);

    });
});


