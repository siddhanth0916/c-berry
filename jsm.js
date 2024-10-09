var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();


    function setup(){
        canvas = createCanvas(600,530);
        canvas.center();
    
       
        
        
    
        
       
    }
function bla() {
    video = createCapture();"remove the v for repeating voice"
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function draw(){
    image(video,0,0,600,530);
    rect(300,265,600,530);
    fill(0,0,139);
}
  
function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
    
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);

    

   
        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday open game app"){
        console.log("game opening")
        take_1();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday show me a rocket"){
        console.log("showing rocket")
        take_2();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday can you show me a rocket"){
        console.log("showing rocket")
        take_3();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday fine"){
        console.log("ok")
        take_4();
        }

document.getElementById("textbox").innerHTML = content;
        if (content=="Friday I am fine"){
        console.log("ok")
        take_4();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday play YouTube"){
        console.log("ok")
        take_5();
        }

document.getElementById("textbox").innerHTML = content;
        if (content=="Friday can you play YouTube"){
        console.log("ok")
        take_5();
        }
        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday tinker cad"){
        console.log("ok")
        take_6();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday open tinker cad"){
        console.log("ok")
        take_6();
        }


document.getElementById("textbox").innerHTML = content;
        if (content=="Friday can you open tinker cad"){
        console.log("ok")
        take_6();
        }

        

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday open white hat"){
        console.log("ok")
        take_7();
        }

document.getElementById("textbox").innerHTML = content;
        if (content=="Friday can you open white hat"){
        console.log("ok")
        take_7();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday open back rooms"){
        console.log("ok")
        take_8();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday can you open back rooms"){
        console.log("ok")
        take_8();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday hai"){
        console.log("hello")
        take_9();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday hi"){
        console.log("hello")
        take_9();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday who is your boss"){
        console.log("my boss is siddhanth")
        take_10();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday how smart are you"){
        console.log("100000000 iq")
        take_11();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday I dont like you"){
        console.log("...")
        take_12();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday I hate you"){
        console.log("...")
        take_13();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday how do I look"){
        console.log("cool")
        take_14();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday I love you"){
        console.log("...")
        take_15();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday what is the time"){
        console.log("idk")
        take_16();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday sing a song"){
        console.log("ok")
        take_17();
        }

        
        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday I want to create some thing"){
        console.log("ok")
        take_19();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday I do not like your song"){
        console.log("ok")
        take_18a();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday play Among Us"){
        console.log("ok")
        take_20();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday I am bored"){
        console.log("ok")
        take_21();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday tell me jokes"){
        console.log("ok")
        take_22();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday tell me another joke"){
        console.log("ok")
        take_23();
        }
        
        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday one more joke"){
        console.log("ok")
        take_24();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday you are funny"){
        console.log("ok")
        take_25();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday can you see me "){
        console.log("ok")
        take_26();
        }

        
        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday can you laugh"){
        console.log("ok")
        take_27();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday can you cry"){
        console.log("ok")
        take_28();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday are you angry"){
        console.log("ok")
        take_28();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday do you have feelings"){
        console.log("ok")
        take_28();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday do you have a big update"){
        console.log("ok")
        take_29();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday can I rate you"){
        console.log("ok")
        take_30();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday rate show"){
        console.log("ok")
        take_31();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday open new Minecraft"){
        console.log("ok")
        take_32();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday I am happy "){
        console.log("ok")
        take_33();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday are you happy"){
        console.log("ok")
        take_34();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday what do you know"){
        console.log("ok")
        take_35();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday who are your friends"){
        console.log("ok")
        take_36();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday which software do you like the best"){
        console.log("ok")
        take_37();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday open google"){
        console.log("ok")
        take_38();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday open top secret"){
        console.log("ok")
        take_39();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday power"){
        console.log("ok")
        take_40();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday what is power"){
        console.log("ok")
        take_41();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday who has power"){
        console.log("ok")
        take_74();
        }


document.getElementById("textbox").innerHTML = content;
        if (content=="Friday what is beneth power"){
        console.log("ok")
        take_75();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday who written that the things should happen like this"){
        console.log("ok")
        take_76();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday who written that the things will happen"){
        console.log("ok")
        take_76();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday who written all"){
        console.log("ok")
        take_76();
        }

      

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday who is everything"){
        console.log("ok")
        take_77();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday who is god"){
        console.log("ok")
        take_78();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday is this all suppose to happen"){
        console.log("ok")
        take_79();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday what is maths"){
        console.log("ok")
        take_42();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday what is math"){
        console.log("ok")
        take_42();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday what is algebra"){
        console.log("ok")
        take_43();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday what is addition"){
        console.log("ok")
        take_70();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday what is subtraction"){
        console.log("ok")
        take_71();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday what is multiplication"){
        console.log("ok")
        take_72();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday what is division"){
        console.log("ok")
        take_73();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday what is english"){
        console.log("ok")
        take_44();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday what is science"){
        console.log("ok")
        take_45();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday what is technology"){
        console.log("ok")
        take_69();
        }


        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday what is computers"){
        console.log("ok")
        take_46();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday I am bored"){
        console.log("ok")
        take_68();
        }


        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday what is telegu"){
        console.log("ok")
        take_47();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday what is hindi"){
        console.log("ok")
        take_48();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday what are subjects"){
        console.log("ok")
        take_49();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday what is a subject"){
        console.log("ok")
        take_49();
        }


        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday what is everything"){
        console.log("ok")
        take_50();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday what is space"){
        console.log("ok")
        take_51();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday what is black hole"){
        console.log("ok")
        take_52();
        }

        


        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday what is dark matter"){
        console.log("ok")
        take_67();
        }


        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday what is matter"){
        console.log("ok")
        take_53();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday what is a Apple"){
        console.log("ok")
        take_54();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday what is an apple"){
        console.log("ok")
        take_54();
        }


        

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday who is the most popular you tuber"){
        console.log("ok")
        take_55();
        }


        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday which youtuber has the most sub"){
        console.log("ok")
        take_56();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday which is the most sub gaming channel"){
        console.log("ok")
        take_57();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday which channel is the most sub gaming channel"){
        console.log("ok")
        take_57();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday which is the most sub channel"){
        console.log("ok")
        take_58();
        }




        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday open twitter but it is made by you"){
        console.log("ok")
        take_59();
        }



        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday when is your birth day"){
        console.log("ok")
        take_60();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday happy birthday"){
        console.log("ok")
        take_61();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday happy birthday to you"){
        console.log("ok")
        take_61();
        }


        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday all is well"){
        console.log("ok")
        take_62();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday lol"){
        console.log("ok")
        take_63();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday noob"){
        console.log("ok")
        take_64();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday you noob"){
        console.log("ok")
        take_64();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday you are noob"){
        console.log("ok")
        take_64();
        }


        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday pro"){
        console.log("ok")
        take_65();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday you pro"){
        console.log("ok")
        take_65();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday you are pro"){
        console.log("ok")
        take_65();
        }



        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday god"){
        console.log("ok")
        take_66();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday you god"){
        console.log("ok")
        take_66();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday you are god"){
        console.log("ok")
        take_66();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday iron man filter"){
        console.log("ok")
        take_80();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday iron man filter app"){
        console.log("ok")
        take_80();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday open iron man filter app"){
        console.log("ok")
        take_80();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday open iron man filter "){
        console.log("ok")
        take_80();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday clown nose filter"){
        console.log("ok")
        take_81();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday clown nose filter app"){
        console.log("ok")
        take_81();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday open clown nose filter"){
        console.log("ok")
        take_81();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday open clown nose filter app"){
        console.log("ok")
        take_81();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday sketch identefier"){
        console.log("ok")
        take_82();
        }




        

     

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday open sketch Identification app"){
        console.log("ok")
        take_82();
        }

        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday open quick draw app"){
        console.log("ok")
        take_83();
        }


        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday open a app which can identify objects"){
        console.log("ok")
        take_84();
        }


        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday open video object detection app"){
        console.log("ok")
        take_85();
        }


        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday open your website"){
        console.log("ok")
        take_86();
        }


        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday open ai mario game"){
        console.log("ok")
        take_87();
        }


        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday open mario game"){
        console.log("ok")
        take_87();
        }


        document.getElementById("textbox").innerHTML = content;
        if (content=="Friday I want to play mario"){
        console.log("ok")
        take_87();
        }


}

function take_1(){
    window.location = "http://127.0.0.1:5500/inde.html";
}


function take_2(){
    window.location = "https://www.tinkercad.com/things/gz9g00t7DJl-polor-satellite";
}
function take_3(){
var synth = window.speechSynthesis;
    var speak_data = "hi how are you ";
    var utterThis =new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
function take_4(){
    var synth = window.speechSynthesis;
        var speak_data = "ok if you are bored tell open game app ";
        var utterThis =new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }

    function take_5(){
        window.location = "https://www.youtube.com/";
        }

        function take_6(){
window.location = "https://www.tinkercad.com/dashboard?collection=designs";
        }
        function take_7(){
window.location = "https://code.whitehatjr.com/s/dashboard";
        }

        function take_8(){
           
            window.location = "https://turbowarp.org/694460691/fullscreen";
        }

        function take_9(){
            var synth = window.speechSynthesis;
            var speak_data = "hello how are you";
            var utterThis =new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);
             
        }


        function take_10(){
            var synth = window.speechSynthesis;
            var speak_data = "my boss is siddhanth and is the founder of smap";
            var utterThis =new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);
             
        }

        function take_11(){
            var synth = window.speechSynthesis;
            var speak_data = "I am smarter than you";
            var utterThis =new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);
             
        }

        function take_12(){
            var synth = window.speechSynthesis;
            var speak_data = "ok";
            var utterThis =new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);
             
        }

        function take_13(){
            var synth = window.speechSynthesis;
            var speak_data = "ok";
            var utterThis =new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);
             
        }


        function take_14(){
            var synth = window.speechSynthesis;
            var speak_data = "cool as a rock star";
            var utterThis =new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);
             
        }


        function take_15(){
            var synth = window.speechSynthesis;
            var speak_data = "ok";
            var utterThis =new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);
             
        }


        function take_16(){
            var synth = window.speechSynthesis;
            var speak_data = "i know.But i will not tell it yet";
            var utterThis =new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);
             
        }


        function take_17(){
            var synth = window.speechSynthesis;
            var speak_data = "oooooooooooooooooooooooooooooo00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009999999999999999999999999999999999999999998765321111qwsdfvbnmdgyagkgfvbagchwegthunvlahJW";
            var utterThis =new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);
             
        }


        function take_18a(){
            var synth = window.speechSynthesis;
            var speak_data = "i can not sing songs and not play";
            var utterThis =new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);
             
        }


        function take_19(){
            var synth = window.speechSynthesis;
            var speak_data = "you can go on google and type thinker cad";
            var utterThis =new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);
             
        }


        function take_20(){
            window.location = "https://turbowarp.org/523967150/fullscreen";
             
        }
        

        function take_21(){
            var synth = window.speechSynthesis;
            var speak_data = "then say open game app";
            var utterThis =new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);
             
        }


        function take_22(){
            var synth = window.speechSynthesis;
            var speak_data = "ok what do you call fish with no eyes   fsh";
            var utterThis =new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);
             
        }


        function take_23(){
            var synth = window.speechSynthesis;
            var speak_data = "do you know why do people say a apple a day keeps a docter away  beacause apple has pill in it";
            var utterThis =new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);
             
        }


        function take_24(){
            var synth = window.speechSynthesis;
            var speak_data = "what do you call a alagator in a vest investegator";
            var utterThis =new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);
             
        }


        function take_25(){
            var synth = window.speechSynthesis;
            var speak_data = "thanks";
            var utterThis =new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);
        }


        function take_27(){
            var synth = window.speechSynthesis;
            var speak_data = "ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ah aha aba aaadefjafbhbunfivhignqiorujv";

            var utterThis =new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);
             
        }


        function take_26(){
            var synth = window.speechSynthesis;
            var speak_data = "no i just can take your selfie";
            var utterThis =new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);
             
        }


        function take_28(){
            var synth = window.speechSynthesis;
            var speak_data = "dont ask me silly question i am a robot";
            var utterThis =new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);
             
        }


        function take_29(){
            var synth = window.speechSynthesis;
            var speak_data = "yes it is gonna relese in 2023 jan 23th or it can be postponded";
            var utterThis =new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);
             
        }


        function take_30(){
            window.location = "htmll.html";
             
        }


        function take_31(){
           
            window.location = "htmll.html";
        }


function take_32(){
           
            window.location = "https://scratch.mit.edu/projects/767976784/fullscreen/";
        }
        

                function take_33(){
            var synth = window.speechSynthesis;
            var speak_data = "hope you are always happy";
            var utterThis =new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);}


            function take_34(){
                var synth = window.speechSynthesis;
                var speak_data = "yes i am happy";
                var utterThis =new SpeechSynthesisUtterance(speak_data);
                synth.speak(utterThis);}


                function take_35(){
                    var synth = window.speechSynthesis;
                    var speak_data = "hope you are always happy";
                    var utterThis =new SpeechSynthesisUtterance(speak_data);
                    synth.speak(utterThis);}
        

                    function take_36(){
                        var synth = window.speechSynthesis;
                        var speak_data = "i know almost everything except the time";
                        var utterThis =new SpeechSynthesisUtterance(speak_data);
                        synth.speak(utterThis);
                    }


                    function take_37(){
                        var synth = window.speechSynthesis;
                        var speak_data = "you alexa and siri";
                        var utterThis =new SpeechSynthesisUtterance(speak_data);
                        synth.speak(utterThis);}


                        function take_38(){
                            var synth = window.speechSynthesis;
                            var speak_data = "i like unity game engine";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_39(){
                            var synth = window.speechSynthesis;
                            var speak_data = "i have no secret he he";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_40(){
                            var synth = window.speechSynthesis;
                            var speak_data = "power possession of control, authority, or influence over others. : one having such power. specifically : a sovereign state.";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_41(){
                            var synth = window.speechSynthesis;
                            var speak_data = "power is power";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_42(){
                            var synth = window.speechSynthesis;
                            var speak_data = "maths is a subject that has arthimatic and has calucations";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_43(){
                            var synth = window.speechSynthesis;
                            var speak_data = "algebra is the hard part of the maths it need so much practice also";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_44(){
                            var synth = window.speechSynthesis;
                            var speak_data = "english is a language a subject it is the most popular language and is very useful to communecate";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_45(){
                            var synth = window.speechSynthesis;
                            var speak_data = "science is technology,ecology about plants,animals science is life science is living and non living science is everything to the smallest atom till big as the universe";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_46(){
                            var synth = window.speechSynthesis;
                            var speak_data = "computers are found 1991 by Charles Babbage it is used to do caluclations entertain us ,program different apps like this one";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_47(){
                            var synth = window.speechSynthesis;
                            var speak_data = "telugu is a lunguage and subject is very much popular in telangana in india";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_48(){
                            var synth = window.speechSynthesis;
                            var speak_data = "hindi is an very popular language and subject all across india";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_49(){
                            var synth = window.speechSynthesis;
                            var speak_data = "subjects are those of many languages like telugu and hindi and other like french etc and like maths social  geography etc";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_50(){
                            var synth = window.speechSynthesis;
                            var speak_data = "everything is made by god and is everything";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_51(){
                            var synth = window.speechSynthesis;
                            var speak_data = "space is unknown it is big vast has no oxygen and gravity is infinite and it is black ";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_52(){
                            var synth = window.speechSynthesis;
                            var speak_data = "black hole is a space eating circle which can eat space and time it comes when a star explodes";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_53(){
                            var synth = window.speechSynthesis;
                            var speak_data = "matter is which thinks are made up of ";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_54(){
                            var synth = window.speechSynthesis;
                            var speak_data = "apple is a fruit";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_55(){
                            var synth = window.speechSynthesis;
                            var speak_data = "mister beast";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                       function take_56(){
                            var synth = window.speechSynthesis;
                            var speak_data = "t seris";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_57(){
                            var synth = window.speechSynthesis;
                            var speak_data = "mister beast";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_58(){
                            var synth = window.speechSynthesis;
                            var speak_data = "T seris";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_59(){
                           window.location = "http://127.0.0.1:5500/kwitter.html";
                        }


                        function take_60(){
                            var synth = window.speechSynthesis;
                            var speak_data = "i was born before time";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_61(){
                            var synth = window.speechSynthesis;
                            var speak_data = "thank you";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_62(){
                            var synth = window.speechSynthesis;
                            var speak_data = "ok";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_63(){
                            var synth = window.speechSynthesis;
                            var speak_data = "ha ha ha ";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_64(){
                            var synth = window.speechSynthesis;
                            var speak_data = "no you ";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_65(){
                            var synth = window.speechSynthesis;
                            var speak_data = "thank you";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_66(){
                            var synth = window.speechSynthesis;
                            var speak_data = "thank you";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_67(){
                            var synth = window.speechSynthesis;
                            var speak_data = "dark matter is big thing to explain";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_68(){
                            var synth = window.speechSynthesis;
                            var speak_data = "ok";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_69(){
                            var synth = window.speechSynthesis;
                            var speak_data = "the application of scientific knowledge for practical purposes, especially in industry."
                           
                            
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_70(){
                            var synth = window.speechSynthesis;
                            var speak_data = "Addition in math is a process of combining two or more numbers. Addends are the numbers being added, and the result or the final answer we get after the process is called the sum. It is one of the essential mathematical functions we use in our everyday activities.";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_71(){
                            var synth = window.speechSynthesis;
                            var speak_data = "Subtraction is used in our day-to-day life. For example, if we want to know how much money we spent on the items that we bought, or, how much money is left with us, or, if we want to calculate the time left in finishing a task, we use subtraction.";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_72(){
                            var synth = window.speechSynthesis;
                            var speak_data = "Multiplication is an operation that represents the basic idea of repeated addition of the same number. The numbers that are multiplied are called the factors and the result that is obtained after the multiplication of two or more numbers is known as the product of those numbers. Multiplication is used to simplify the task of repeated addition of the same number. It is used when we need to combine groups of equal sizes. For example, if 5 baskets contain 4 apples each, then to find the total number of apples we can use multiplication and solve it as 5 x 4 = 20 apples.";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }
                        

                        function take_73(){
                            var synth = window.speechSynthesis;
                            var speak_data = "In maths, we have four basic arithmetic operations i.e., addition, subtraction, multiplication, and division. Amongst these four operations, the division is one of the major operations we use in our daily activities. It is the process of splitting a large group into equal smaller groups. For example, divide 25 by 5. Division fact for this example will be, 25 ÷ 5 = 5.";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_74(){
                            var synth = window.speechSynthesis;
                            var speak_data = "i have power";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_75(){
                            var synth = window.speechSynthesis;
                            var speak_data = "power";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_76(){
                            var synth = window.speechSynthesis;
                            var speak_data = "god";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_77(){
                            var synth = window.speechSynthesis;
                            var speak_data = "god";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_78(){
                            var synth = window.speechSynthesis;
                            var speak_data = "god is the boss";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_79(){
                            var synth = window.speechSynthesis;
                            var speak_data = "yes";
                            var utterThis =new SpeechSynthesisUtterance(speak_data);
                            synth.speak(utterThis);
                        }


                        function take_80(){
                            window.location = "http://127.0.0.1:5500/index.html";
                        }


                        function take_81(){
                            window.location = "http://127.0.0.1:5501/clown-nose-filter-web-app/index.html";
                        }


                        function take_82(){
                            window.location = "http://127.0.0.1:5500/Sketch_Identification/index.html";
                        }


                        function take_83(){
                            window.location = "http://127.0.0.1:5500/index.html";
                        }


                        function take_83(){
                            window.location = "http://127.0.0.1:5500/index.html";
                        }


                        function take_84(){
                            window.location = "http://127.0.0.1:5501/project%20131/index.html";
                        }


                        function take_85(){
                            window.location = "http://127.0.0.1:5500/object-detection/index.html";
                        }


                        function take_86(){
                            window.location = "http://127.0.0.1:5501/Website-Template/index.html";
                        }

                        function take_87(){
                            window.location = "http://127.0.0.1:5501/AI-Mario-Game-Student/AI-Mario-Game-Student/index.html";
                        }