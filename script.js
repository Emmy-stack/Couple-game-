const emmyNumber = "2347041545267";
const mideNumber = "2348148556303";
let sendToMide = true;

const toggleBtn = document.getElementById("toggleModeBtn");
toggleBtn.onclick = () => {
  sendToMide = !sendToMide;
  toggleBtn.textContent = sendToMide ? "Send To: Mide ❤️" : "Send To: Emmy 💙";
};

const loveQuotes = [
  "I’d fight a chicken for you. 🐔❤️",
  "You’re the butter to my agege bread. 🧈🥖",
  "If loving you was a crime, I'd be serving life. 👮‍♂️💘",
  "You’re the only notification I never want to mute. 🔔💖",
  "Are you a magician? Because whenever I look at you, everyone else disappears. ✨😍",
  "You stole my heart, but I’ll let you keep it forever. 💘🔒",
  "If kisses were snowflakes, I’d send you a blizzard. ❄️😘",
  "You’re my favorite reason to lose sleep. 🌙❤️",
  "I love you more than coffee... and that’s saying a latte! ☕️💕",
  "You’re the cheese to my jollof rice. 🧀🍚",
  "Life without you is like a broken pencil... pointless. ✏️💔",
  "You’re my sunshine on a rainy day. ☀️🌧️",
  "I’m nuts about you like chin chin to Nigerian parties! 🥜🎉",
  "If loving you was a sport, I’d have all the gold medals. 🥇💞",
  "You + Me = The best team since Suya & pepper! 🔥❤️",
  "I’d cross any Lagos traffic jam just to see your smile. 🚦😊",
  "You light up my life more than the NEPA generator. 💡❤️",
  "Every love song suddenly makes sense when I think of you. 🎶😍",
  "I love you more than Naija loves suya on Saturdays. 🍢❤️",
  "Forever yours, no GPS needed. 🗺️💘",
];

const memes = [
  "https://i.imgur.com/3Z4RDrI.jpg",
  "https://i.imgur.com/8O4rG8R.jpg",
];

const dares = [
  "Send me a voice note confessing love... as a rapper.",
  "Text me a cheesy pickup line in 10 seconds.",
  "Send me your cutest “I love you” face on a selfie.",
  "Record a 10-second video saying your favorite thing about me.",
  "Send a voice note confessing your secret crush on me.",
  "Text me a cheesy pickup line and act like it’s serious.",
  "Send me a funny GIF that best describes our love life.",
  "Write a 3-line love poem and read it out loud on voice note.",
  "Dare me to send a flirty meme to your best friend.",
  "Text me the last dream you had about us.",
  "Share your most embarrassing love moment.",
  "Send a screenshot of your cutest pet and say it’s my spirit animal.",
  "Record yourself singing our favorite song.",
  "Send a voice note of you whispering my name.",
  "Describe your ideal date with me in 5 words.",
  "Send a random emoji and say why it reminds you of me.",
  "Text me your wildest fantasy (keep it PG if you want!).",
  "Send a selfie making your silliest face.",
  "Dare me to prank call your sibling and confess I’m in love.",
  "Share your first thought when you woke up today.",
  "Send me a photo of your messy hair and say it’s your “just for me” look.",
  "Text me your favorite nickname for me and why.",
  "Record a voice note saying a secret only I should know.",
  "Send a screenshot of the last text you sent to me.",
  "Describe me in only emojis.",
  "Text me a flirty question I have to answer truthfully.",
  "Send a silly love confession as a song lyric.",
  "Dare me to send a love poem I write in 5 minutes.",
  "Text me your perfect breakfast in bed order for me.",
  "Record yourself blowing a kiss.",
  "Share your go-to dance move and teach it to me via video.",
  "Send a photo of something that reminds you of me.",
  "Dare me to send a voice note saying “I’m yours” 3 times.",
  "Text me the weirdest thing you love about me.",
  "Record a 15-second “thank you for being you” message.",
  "Send me a riddle where the answer is “love.”",
  "Dare me to text you a random compliment every hour for 3 hours.",
  "Send a flirty joke and act like you’re the comedian.",
  "Record yourself saying “I miss you” in a funny accent.",
  "Send a screenshot of the most romantic movie you want us to watch.",
  "Describe the best kiss we ever had in 3 words.",
  "Send me a voice note pretending to be my future self.",
  "Text me a secret fantasy involving a superhero and me.",
  "Send a selfie with your “I’m thinking of you” face.",
  "Dare me to call you and sing “I Will Always Love You.”",
  "Send a photo of your favorite spot to cuddle.",
  "Record a voice note of you saying your favorite thing I do.",
  "Send a screenshot of your top 3 love songs.",
  "Text me the weirdest pet name you could give me.",
  "Send a voice note making a silly love confession.",
  "Dare me to send you a love letter via text.",
  "Text me your dream vacation spot for us.",
  "Send me a voice note saying “Good morning, beautiful/handsome” with a wink.",
  "Dare me to send you a GIF that sums up our relationship.",
  "Send me a photo of the outfit you’d wear for our date night.",
  "Text me what you’d cook for me on a perfect day.",
  "Send a voice note where you whisper 3 things you love about me.",
  "Dare me to text you the first thing I thought when I woke up.",
  "Send me a screenshot of a quote that reminds you of us.",
  "Record yourself saying your favorite thing I say to you.",
  "Text me the name of the first song that pops up in your head.",
  "Send me a voice note with your best impression of me.",
  "Dare me to text you a pickup line in a language you don’t speak.",
  "Send a photo of something that makes you smile when you think of me.",
  "Text me the silliest thing you’ve ever done for love.",
  "Send a voice note describing your perfect cuddle session.",
  "Dare me to text you a “good night” message with a rhyme.",
  "Send me a photo with your “love you more” face.",
  "Text me your favorite love quote and why.",
  "Record a 10-second video saying “You’re my favorite everything.”",
  "Dare me to send you a romantic meme with a caption.",
  "Text me what you want to do on our next date (no limits).",
];

const spicyDares = [
  "Describe in detail how you'd undress me slowly.",
  "Send a voice note whispering something you want me to do to you.",
  "Text me the wildest fantasy you’ve had about me.",
  "Pretend we’re alone right now—what’s the first thing you'd do to me?",
  "Tell me where you'd kiss me first if we were in bed together.",
  "Send me a naughty emoji combo and explain what it means 😉🔥🍑.",
  "If I were with you now, where would your hands be?",
  "Write a 3-line sexy story featuring both of us.",
  "Text me one thing you want me to whisper in your ear during sex.",
  "Describe what I'd see if I caught you thinking about me naked.",
  "If we were showering together, what would you do first?",
  "What’s your secret spot you’d want me to tease?",
  "Tell me one thing you’d love to hear me moan.",
  "Text me using only body part emojis and make it steamy.",
  "Write a cheeky ‘good morning’ message for me tomorrow.",
  "Dare: Tease me for 5 messages straight. No holding back.",
  "Describe how my lips taste—be imaginative.",
  "Text me like you’re undressing me with words.",
  "Send a fake sext. Make it believable 👀.",
  "Voice note me saying something filthy but sweet.",
  "Dare: Give me a naughty nickname and explain it.",
  "Confess something you’ve imagined doing to me in the dark.",
  "Send a made-up sexy code word and tell me what it means.",
  "Write me a one-line dirty poem.",
  "If you had me for 1 hour, what would you do? No filters.",
  "Say one flirty thing that always gets me in trouble 😉.",
  "Describe a kiss that turns into more...",
  "Send a ‘just got out of bed’ text pretending I was with you.",
  "Tell me where you’d kiss me besides my lips.",
  "Create a sexy dare for me and send it right now.",
  "Imagine we’re in a car—what happens when it gets too hot?",
  "What outfit would you want me to wear... or not wear?",
  "Send me a seductive message without using the word 'sex'.",
  "Text like you're pulling me into your lap. Then what?",
  "Dare: Be my dirty storyteller for 30 seconds.",
  "Message me like you’ve been missing my touch all day.",
  "Flirt with me like we're strangers who just locked eyes.",
  "Tell me what turns you on the most about my body.",
  "Send a line that would make me blush instantly.",
  "Describe how you'd tease me under the table.",
  "Roleplay a hotel hookup via text. Start now.",
  "Tell me your favorite place to be kissed—and why.",
  "Send a voice note whispering ‘I want you’ 3 different ways.",
  "Dare: Text me as if I just walked in wearing nothing.",
  "Send a message that's only 3 words but makes me *feel* things.",
  "Describe how you’d wake me up if we slept naked together.",
  "Write me a steamy line without using any vowels.",
  "Make a 5-word sentence that starts innocent and ends dirty.",
  "Flirt like you're trying to make me break first.",
  "Write a sexy riddle about us.",
  "Send an emoji combo that sums up our bedroom energy.",
  "Text like you’re slowly undoing my shirt.",
  "Send the phrase: 'You won’t last 10 minutes with me'... and mean it.",
  "Dare: Say something naughty with a cute face.",
  "Tell me what you'd whisper in my ear while cuddling naked.",
  "Write me a spicy bedtime story opening line.",
  "Send a sexy joke—but make it clever.",
  "Say something you’d do to me in the kitchen.",
  "Describe a silent moment between us that turns hot.",
  "If I kissed you for 10 seconds... what next?",
  "Message me like you’re pulling me into a dark corner.",
  "Make a flirty pun with 'banana', 'peach', or 'eggplant'.",
  "Text me a fantasy involving handcuffs or ties 😏.",
  "Describe how you’d distract me during a movie night.",
  "Dare: Say something dirty... and then play innocent.",
  "Text me as if you just finished a hot dream about me.",
  "What would you do if I said 'prove it' right now?",
  "Message like you’re tracing your fingers across me.",
  "Tell me your favorite naughty memory of us.",
  "Send a made-up pet name I should only use in bed.",
  "Dare: Start a countdown… and tease me after each number.",
  "If I were chocolate, how would you eat me?",
  "Describe how you’d tease me just to make me beg.",
  "Text me a dirty dare that you want me to complete later.",
  "Message me pretending I just moaned your name 😳.",
  "Say something that would definitely get us kicked out of a party.",
  "Send a one-word message that makes me crave you.",
  "Write one steamy text you’d never want leaked.",
  "Say the hottest sentence you can think of right now.",
  "Tell me what you’d want me to whisper back after ‘I want you.’",
  "Send a text pretending you just pulled me onto your lap.",
  "Say something sexy like it’s a secret only we know.",
  "Dare: Make me want you in under 15 words.",
  "Write a sensual text using only food terms 🍓🍯🍫.",
  "Text me like you’re guiding my hand right now.",
];

const loveNotes = [
  "If I had a star for every time I thought of you, I'd have a galaxy.",
  "You’re my favorite notification. 🔔❤️",
  "Every moment with you is my new favorite.",
  "You’re my home and adventure all at once.",
  "I love you more than coffee... and that’s saying something!",
  "With you, even the simplest days feel magical.",
  "You’re the reason my heart feels full.",
  "Being yours is the best thing I’ll ever do.",
  "Your smile is my favorite love story.",
  "I’d choose you over and over again, forever.",
  "You make my soul dance in ways words can’t explain.",
  "I’m grateful every day for your love.",
  "Your love is my greatest treasure.",
  "You’re the light in my darkest days.",
  "I fall more in love with you every sunrise.",
  "You make ordinary moments extraordinary.",
  "Loving you is the easiest thing I’ve ever done.",
  "You’re my forever and always.",
  "Every day with you is a new adventure.",
  "You complete the parts of me I didn’t know were missing.",
  "My heart beats your name in every rhythm.",
  "You’re my sweetest addiction.",
  "I carry your love in my heart everywhere I go.",
  "Your love makes my world brighter.",
  "Being with you feels like coming home.",
  "You are my dream come true.",
  "I love you more than words can say.",
  "With you, I’ve found my forever.",
  "You’re my best hello and hardest goodbye.",
  "My love for you grows deeper every day.",
  "You’re my favorite hello and my hardest goodbye.",
  "Together, we make the perfect team.",
  "You’re the calm to my storm.",
  "I’m yours — no take backs!",
  "You’re the reason I believe in magic.",
  "Your love is the music to my heart.",
  "You’re the sweetest chapter in my story.",
  "You’re my forever mood.",
  "I’m so lucky to have you by my side.",
  "You’re my favorite notification and my best surprise.",
  "I smile just thinking about you.",
  "You make my heart skip beats and then race.",
  "You’re the spark in my everyday life.",
  "Loving you feels like sunshine after the rain.",
  "You’re my heart’s home.",
  "I love you in every language, every way.",
  "You’re the sweetest part of my day.",
  "Forever yours, no refunds.",
  "You’re my happy place.",
  "With you, love feels effortless.",
  "You’re my favorite ‘what if’ turned ‘always.’",
  "I love the way you love me.",
  "You’re my forever and beyond.",
];

const neverHaveIEver = [
  "Never have I ever thought about kissing you in a boring meeting.",
  "Never have I ever taken a screenshot of our chats.",
  "Never have I ever re-read your messages just to smile.",
  "Never have I ever wanted to be stuck in traffic with you.",
  "Never have I ever imagined our wedding playlist.",
  "Never have I ever googled ‘cute date ideas’ for us.",
  "Never have I ever written your name in a heart ❤️.",
  "Never have I ever checked your last seen on WhatsApp.",
  "Never have I ever texted you from the bathroom.",
  "Never have I ever talked to myself pretending you were there.",
  "Never have I ever smiled like an idiot because of you.",
  "Never have I ever wanted to hold your hand in public.",
  "Never have I ever danced in my room thinking about you.",
  "Never have I ever faked being mad just for attention.",
  "Never have I ever sent you a cringy meme and laughed alone.",
  "Never have I ever imagined our future kids.",
  "Never have I ever wanted to pause time with you.",
  "Never have I ever written a love poem and never sent it.",
  "Never have I ever stalked your social media for hours.",
  "Never have I ever imagined us going viral for cuteness.",
  "Never have I ever practiced saying 'I love you' in the mirror.",
  "Never have I ever laughed during a serious moment with you.",
  "Never have I ever wanted to cuddle for 48 hours straight.",
  "Never have I ever watched our chat scroll like a movie.",
  "Never have I ever kissed the phone screen after your pic.",
  "Never have I ever saved your voice note for repeat listening.",
  "Never have I ever liked all your photos in a row.",
  "Never have I ever lied just to see you.",
  "Never have I ever made a playlist thinking of you.",
  "Never have I ever wished your hoodie smelled like you forever.",
  "Never have I ever practiced proposing in my head.",
  "Never have I ever wanted to pause a kiss.",
  "Never have I ever imagined us on a Netflix reality show.",
  "Never have I ever wanted a weekend with no phones, just us.",
  "Never have I ever wished we could nap on a call.",
  "Never have I ever doodled your initials in my notebook.",
  "Never have I ever spammed you with emojis for no reason.",
  "Never have I ever missed you while talking to you.",
  "Never have I ever played with your name in my mind.",
  "Never have I ever sent a risky flirty text and panicked.",
  "Never have I ever blushed while reading your text.",
  "Never have I ever wished I could teleport to you.",
  "Never have I ever used your name as my password 😉.",
  "Never have I ever screen recorded our cute moments.",
  "Never have I ever teared up missing your voice.",
  "Never have I ever planned an imaginary getaway with you.",
  "Never have I ever fought sleep to talk to you longer.",
  "Never have I ever saved our photo as wallpaper.",
  "Never have I ever worn something because you'd like it.",
  "Never have I ever memorized something random about you.",
  "Never have I ever laughed at your laugh.",
  "Never have I ever dreamed about us in another world.",
  "Never have I ever wanted to tickle you just for revenge.",
  "Never have I ever smiled mid-argument cause you're cute.",
  "Never have I ever planned a prank on you and chickened out.",
  "Never have I ever wished I could pause life with you.",
  "Never have I ever missed your annoying habits.",
  "Never have I ever binge-watched a show just for you.",
  "Never have I ever flirted with you in public on purpose.",
  "Never have I ever played a couple filter alone, pretending you’re with me.",
  "Never have I ever considered changing my last name early 😂.",
  "Never have I ever built a fantasy world with us in it.",
  "Never have I ever imagined us as anime characters.",
  "Never have I ever wrote your name in the sand.",
  "Never have I ever almost said 'I love you' too soon.",
  "Never have I ever wanted you in two places at once.",
  "Never have I ever got jealous over something silly.",
  "Never have I ever smiled reading old fights like 'aww we dumb'.",
  "Never have I ever tried to flirt in emojis.",
  "Never have I ever imagined your pet liking me more.",
  "Never have I ever missed a movie cause I was watching you.",
  "Never have I ever made a plan B just to include you in Plan A.",
  "Never have I ever wanted to write you a letter and send it with perfume.",
  "Never have I ever shared food with you like a rom-com scene.",
  "Never have I ever sung our song in the shower.",
  "Never have I ever joked about a wedding just to see your face.",
  "Never have I ever smiled on the road thinking of us in a car fight.",
  "Never have I ever waited online hoping you'd text first.",
  "Never have I ever imagined kissing you mid-fight.",
];

const wouldYouRather = [
  "Would you rather cuddle for 10 hours or kiss for 10 minutes?",
  "Would you rather be my personal chef or my personal masseuse?",
  "Would you rather take silly selfies or dance in the rain?",
  "Would you rather spend a night in a luxury hotel or camp under the stars?",
  "Would you rather go on a surprise date or plan one yourself?",
  "Would you rather have a couple's spa day or a game night?",
  "Would you rather never stop hugging or never stop talking?",
  "Would you rather wear matching outfits for a week or speak in love quotes?",
  "Would you rather get a handwritten letter or a video message?",
  "Would you rather bake cookies or cook dinner together?",
  "Would you rather get caught kissing or caught slow dancing?",
  "Would you rather be TikTok famous or locally admired as 'Cutest Couple'?",
  "Would you rather always win arguments or always get the last hug?",
  "Would you rather watch romantic comedies or horror movies together?",
  "Would you rather go on a picnic or a road trip?",
  "Would you rather get 100 texts a day or one long sweet voice note?",
  "Would you rather go back to our first date or see our future wedding?",
  "Would you rather give up chocolate or kisses from me?",
  "Would you rather go viral for a cute video or keep our moments private?",
  "Would you rather adopt a pet or buy matching rings?",
  "Would you rather build a pillow fort or a LEGO house together?",
  "Would you rather kiss me in public or whisper sweet things in private?",
  "Would you rather spend a day without your phone or without me?",
  "Would you rather write me a song or perform a silly dance for me?",
  "Would you rather wear couple onesies or matching jerseys?",
  "Would you rather wake up next to me every day or fall asleep on calls every night?",
  "Would you rather paint a portrait of me or write a poem about me?",
  "Would you rather prank me or get pranked by me?",
  "Would you rather walk 5km together or lie on the couch bingeing shows?",
  "Would you rather be stuck in traffic with me or lose internet for 3 hours?",
  "Would you rather kiss under fireworks or while it rains?",
  "Would you rather celebrate 100 small wins or 1 huge milestone?",
  "Would you rather win a couple's quiz or lose while laughing the hardest?",
  "Would you rather always laugh together or cry only when apart?",
  "Would you rather live in a cottage in the woods or a beach house?",
  "Would you rather go skinny dipping or sing karaoke together?",
  "Would you rather do all the dishes or all the kissing?",
  "Would you rather be my diary or my dream?",
  "Would you rather stay in a fantasy or live our real love story?",
  "Would you rather wake up to my texts or fall asleep to my voice?",
  "Would you rather be my forever or my next lifetime?",
  "Would you rather slow dance or fast dance with me?",
  "Would you rather take couple classes or teach one together?",
  "Would you rather grow old with me or live young forever with me?",
  "Would you rather skip dinner for kisses or skip kisses for dinner?",
  "Would you rather steal my hoodie or steal my heart (again)?",
  "Would you rather create a couple YouTube channel or secret love diary?",
  "Would you rather never argue or always make up quickly?",
  "Would you rather dream about me or daydream with me?",
  "Would you rather watch a sunset together or a sunrise?",
  "Would you rather eat only from my plate or share yours forever?",
  "Would you rather me surprise you with gifts or hugs?",
  "Would you rather get roses or handwritten notes every week?",
  "Would you rather love me more each day or never have to miss me?",
  "Would you rather take silly quizzes or write each other dares?",
  "Would you rather cry during a love movie or laugh during horror?",
  "Would you rather teleport to Paris or time travel to our first date?",
  "Would you rather get locked in an elevator or trapped in traffic together?",
  "Would you rather always say 'I love you' or always show it?",
  "Would you rather share a toothbrush or a spoon forever?",
  "Would you rather binge cheesy romance or epic fantasy with me?",
  "Would you rather cook naked or dance in PJs?",
  "Would you rather confess love via megaphone or airplane banner?",
  "Would you rather paint a wall together or break a piñata?",
  "Would you rather go on a love reality show or be our own rom-com?",
  "Would you rather be late to a party or early to our date?",
  "Would you rather build a blanket fort or go camping?",
  "Would you rather get stuck in the rain or miss the last bus?",
  "Would you rather fight over food or cuddle over movies?",
  "Would you rather match your ringtones or your passwords?",
  "Would you rather have love songs or memes saved from me?",
  "Would you rather live in a fairytale or write one with me?",
  "Would you rather win a dance-off or a kiss-off?",
  "Would you rather be partners in love or partners in crime?",
  "Would you rather have your love story turned into a novel or a movie?",
  "Would you rather argue over silly things or never fight at all?",
  "Would you rather go on a trip every month or stay home in bliss?",
  "Would you rather be serenaded or whispered to every night?",
  "Would you rather eat burnt toast I made or starve with me?",
];

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function openWhatsApp(text) {
  const phone = sendToMide ? mideNumber : emmyNumber;
  const encodedText = encodeURIComponent(text);
  const url = `https://wa.me/${phone}?text=${encodedText}`;
  window.open(url, "_blank");
}

document.getElementById("loveBtn").onclick = () => {
  openWhatsApp(randomFrom(loveQuotes));
};

document.getElementById("memeBtn").onclick = () => {
  openWhatsApp(randomFrom(memes));
};

document.getElementById("dareBtn").onclick = () => {
  openWhatsApp(randomFrom(dares));
};

document.getElementById("spicyDaresBtn").onclick = () => {
  openWhatsApp(randomFrom(spicyDares));
};

document.getElementById("loveNoteBtn").onclick = () => {
  openWhatsApp(randomFrom(loveNotes));
};

document.getElementById("neverBtn").onclick = () => {
  openWhatsApp(randomFrom(neverHaveIEver));
};

document.getElementById("wouldBtn").onclick = () => {
  openWhatsApp(randomFrom(wouldYouRather));
};

// === Countdown Logic ===
const longDistanceDate = new Date();
longDistanceDate.setDate(longDistanceDate.getDate() + 9); // adjust if needed

function updateCountdown() {
  const now = new Date();
  const diff = longDistanceDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById(
    "countdown"
  ).innerHTML = `💔 Long Distance Starts In: <strong>${days}d ${hours}h ${minutes}m ${seconds}s</strong>`;
}

setInterval(updateCountdown, 1000);

// === Daily Video Call Reminder ===
const reminderPopup = document.getElementById("reminderPopup");

function checkReminder() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();

  // Set to any time you want here (e.g., 20:30 = 8:30 PM)
  if (hour === 20 && minute === 30) {
    reminderPopup.style.display = "block";
  } else {
    reminderPopup.style.display = "none";
  }
}

setInterval(checkReminder, 60000); // check every minute
