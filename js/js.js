/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log("All systems operational");

/* I am a comment :D
it's true
*/

//This is only one line tho

/* Variableeees */
let myCow = "Mike";
var anotherCow = "Sasha";
let myBook =
  "Ralof: Hey you, you’re finally awake. You were trying to cross the border right? Walked right into that Imperial ambush same as us and that thief over there. Lokir: Damn you Stormcloaks... Skyrim was fine until you came along! Empire was nice and lazy. If they hadn’t been looking for you I’d have stolen that horse and been halfway to Hammerfell. Looks at Dragonborn You there, you and me, we shouldn’t be here. It’s these Stormcloaks the Empire wants. Ralof: We’re all brothers and sisters in binds now. Driver: Shut up back there. Lokir: looks at Ulfric What’s wrong with him, huh? Ralof: Watch your tongue! You’re speaking to Ulfric Stormcloak, the true High King. Lokir: Ulfric? The Jarl of Windhelm? You’re the leader of the rebellion... if they’ve captured you... oh gods, where are they taking us? Ralof: I don’t know where we’re going, but Sovngarde awaits. Lokir: No, This can’t be happening! This isn’t happening! Ralof: Hey, what village are you from horse-thief? Lokir: Why do you care? Ralof: A Nord’s last thoughts should be of home. Lokir: Rorikstead. I’m from Rorikstead. Hadvar: General Tullius sir! The headsman is waiting. Tullius: Good, let's get this over with. Lokir: Shor, Mara, Dibella, Kynareth, Akatosh! Divines, please help me! Ralof: Sees Tullius Look at him! General Tullius, the Military. And it looks like the Thalmor are with him. Damn elves, I bet they had something to do with this. notices where they are This is Helgen... I used to be sweet on a girl from here. I wonder if Velod is still making that mead with juniper berries mixed in... Funny, when I was a boy Imperial walls and towers used to make me feel so safe. Child: Who are they, daddy? Where are they going? Father: You need to go inside, little cub. Child: Why? I want to watch the soldiers! Father: Inside the house, now. Child: Yes papa... heads inside Driver: Woah... pulls in reins Female Captain: walks up to cart Get these prisoners out of the cart! Lokir: Why are we stopping? Ralof: Why do you think? End of the line. stands up Let’s go, we shouldn’t keep the gods waiting for us. Lokir: No! Wait! We’re not rebels! Ralof: Face your death with some courage, thief. Lokir: You’ve got to tell them we weren’t with you! This is a mistake! Female Captain: Step towards the block when we call your name, one at a time! Ralof: Empire loves their damned lists. Hadvar: Ulfric Stormcloak, Jarl of Windhelm. Ulfric: moves towards block Ralof: it has been an honor, Jarl Ulfric Hadvar: Ralof of Riverwood. Ralof moves forward Lokir of Rorikstead. Lokir: No! I’m not a rebel! You can’t do this! runs Female Captain: Halt! Lokir: you’re not going to kill me! Female Captain: Archers! archers shoot Lokir: hit in the knee Aaa..! Female Captain: glares at rest of prisoners Anyone else feel like running? Hadvar: Wait... You there. Looks at Dragonborn Step forward. Dragonborn steps forward Who are you? Dragonborn: Dragonborn Long-Shadow. Hadvar: Not many wood elves would choose to come alone to Skyrim. Captain, what should we do? He’s not on the list. Female Captain: Forget the list. He goes straight to the block. Hadvar: By your orders, Captain. I’m sorry. We’ll make sure your remains get returned to Valenwood. Follow the captain, prisoner. Dragonborn: moves to stand next to Ralof Tullius: steps up to Ulfric Ulfric Stormcloak. Some here in Helgen call you a hero, but a hero doesn’t use a power like the voice to murder his king and usurp the throne. Ulfric: growl Tullius: You started this war, flung skyrim into chaos. And now the Empire is going to put you down and restore the peace. Alduin: distant roar Hadvar: looks around What was that? Tullius: It’s nothing. Carry on. Female Captain: Yes, General Tullius! turns to priestess Give them their last rights. Priestess: As we commend your souls to Aetherius, blessings of the 8 divines upon you- Stormcloak Soldier: For the love of Talos, shut up and let's get this over with. marches forward Priestess: hesitates … as you wish. Stormcloak Soldier: Come on! I haven’t got all morning! kneels at block, looks up at Captain/Headsman … My ancestors are smiling at me, Imperials. Can you say the same?? Captain: steps on his back Headsman: beheads soldier Stormcloak Soldier B: You Imperial bastards! Townsfolk: Justice! Townsfolk B: Death to the Stormcloaks! Ralof: ...As fearless in death as he was in life. Female Captain: Next, the wood elf! Hadvar: There it is again... did you hear that? Female Captain: I said... Next. Prisoner. Imperial Soldier: to Dragonborn To the block prisoner. Nice and easy. Dragonborn: moves to the block, kneels at block Headsman: moves to swing axe Alduin: lands, roars Hadvar: What in Oblivion is that!?! Female Captain: Sentries, what do you see? Imperial Soldier: It’s in the clouds...! Townsfolk: Dragon!! Alduin: roar Tullius: Guards! Get the townsfolk to safety! Ralof: Grabs Dragonborn come on! The guards won’t give us another chance! This way! Pulls Dragonborn towards a towerfinds dagger and unbinds his own handsunbinds Dragonborn's handsmoves to unbind Ulfric, who followed* Jarl Ulfric, what is that thing? Could the legends be true? Ulfric: spits out gag Legends don’t burn down villages. Alduin: roar!! Ralof: We need to move, now! runs up stairs, reach dead end See the inn on the other side? Jump through the roof and keep going! We’ll follow when we can! Dragonborn: jumps";

const grandMa = "Bert";
console.log(myCow + " " + grandMa + " " + anotherCow);

// Numbers
let lucky = 7;
let disaster = 13;
let answer = 42;
const noChange = 333;

console.log("Addition: " + lucky + " + " + disaster + " =");
console.log(lucky + disaster);

// Booleans (true or false)
const santaExists = true;
console.log(santaExists);

//Compare
console.log(lucky >= disaster);

//Write to html id
hi.innerHTML = "<p>" + myBook + "<p>";

//several lines in var
let pizza = `
    <article>
    <h2> Gorgonzola </h2>
    <img src="images/Pizza.png" alt="Gorgonzola">
    <p> This wonderfull... </p>
    </article>
`;

//inject this into #hi
hi.innerHTML = pizza

//Functions n stuuuffff
let boom = function(){
    alert("We use cookies, and we track all you do! Consent?");
    console.log("Cookie info fired off!")
    return true;
}