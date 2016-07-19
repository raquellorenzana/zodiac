
function zodiac() {
	var sign = document.getElementById("zodiac_sign").value
	var imgswitch = document.getElementById("sign_img")

	if (sign == "Aquarius" || sign == "aquarius") {
		document.getElementById("sign_title").innerHTML = "AQUARIUS"
		document.getElementById("sign_info").innerHTML = "Aquarius is the sign of visionaries, unconventionality and intellectual independence. Aquarius are the people who deviate from the crowd and go their own way. They are always after intellectual stimulation, constantly discovering something new, forming new opinions and stubbornly traveling their way regardless of what other people think."
		imgswitch.setAttribute ('src', 'img/aquarius.png')
		} 

	else if (sign == "Pisces" || sign == "pisces") {
		document.getElementById("sign_title").innerHTML = "PISCES"
		document.getElementById("sign_info").innerHTML = "Pisces have an intuitive and psychic ability more then any other zodiac signs. They trust their gut feelings and if they do not, they quickly learn to because they realize that their hunches are usually correct. Pisces downfall is their sensitivity and their inability to reject another person. They do not like rejection and they try to treat others the way they want to be treated so they will rarely say no to a person for fear of hurting their feelings."
		imgswitch.setAttribute ('src', 'img/pisces.png')
	}

	else if (sign == "Aries" || sign == "aries") {
		document.getElementById("sign_title").innerHTML = "ARIES"
		document.getElementById("sign_info").innerHTML = "Aries is the first of the zodiac signs. Aries is the sign of the self, people born under this sign strongly project their personalities onto others and can be very self-oriented. Aries tend to venture out into the world and leave impressions on others that they are exciting, vibrant and talkative. Aries tend to live adventurous lives and like to be the center of attention, but rightly so since they are natural, confident leaders."
		imgswitch.setAttribute ('src', 'img/aries.png')
	}
 
	else if (sign == "Taurus" || sign == "taurus") {
		document.getElementById("sign_title").innerHTML = "TAURUS"
		document.getElementById("sign_info").innerHTML = "Taurus is the one who has immense perseverance, even when others have given up, the Taurus rages on. Solid and persistent, just like the bull, which is Taurus' well suited symbol. Taurus's have a well known reputation for being stubborn, which is not necessarily a bad thing. The stubborn streak can cause Taurus to butt heads and conflict with other strong character types. Taurus are not fond of change. They like the familiar and routine comfort of life." 
		imgswitch.setAttribute ('src', 'img/taurus.png')
	} 

	else if (sign == "Gemini" || sign == "gemini") {
		document.getElementById("sign_title").innerHTML = "GEMINI"
		document.getElementById("sign_info").innerHTML = "Gemini people are many sided, quick both in the mind and physically. They are brimming with energy and vitality, they are clever with words. They are intelligent and very adaptable to every situation and every person. Gemini are curious and always want to know what's going on in the world around them. They are not one to sit back and watch the world go by, they want to be involved. This can sometimes make Gemini nosy, they do not mind their own business!"
		imgswitch.setAttribute ('src', 'img/gemini.png')
	} 

	else if (sign == "Cancer" || sign == "cancer") {
		document.getElementById("sign_title").innerHTML = "CANCER"
		document.getElementById("sign_info").innerHTML = "It is difficult for cancer to open up and have a close emotionally fulfilled relationship with someone because they are so closed off emotionally and physically to the world. This is driven by their fear of trust, Cancer has a difficult time trusting people. This causes built up anger and resentment inside, the contradictory nature really takes a toll on them and they can have a negative outlook on life, thinking that life is just too hard and miserable."
		imgswitch.setAttribute ('src', 'img/cancer.png')

	} 
	else if (sign == "Leo" || sign == "leo") {
		document.getElementById("sign_title").innerHTML = "LEO"
		document.getElementById("sign_info").innerHTML = "Leo is the lion, this well suited symbol represents Leo very well. They possess a kingdom which they protest and cherish. The are high esteemed, honorable and very devoted to themselves in particular! The kingdom could be anything from work to home to a partner, whatever it is, you rule it. Leo is always center stage and full of flair, they enjoy basking in the spotlight. A Leo always makes their presence known. Leo are full of energy that acts like a magnet for other people." 
		imgswitch.setAttribute ('src', 'img/leo.png')
	} 

	else if (sign == "Virgo" || sign == "virgo") {
		document.getElementById("sign_title").innerHTML = "VIRGO"
		document.getElementById("sign_info").innerHTML = "Virgo exists in the mind, everything is inside. To the world, Virgo presents a calm and collected exterior but on the inside, nervous uncontrolled intensity in the mind, trying to figure things out, how to improve everything, analyzing and thinking. Virgo can tire itself out without even moving! Virgo has a constant drive to improve and perfect, this can lead to extreme pickiness and finickiest. They are pure, their motives are honest never malicious and they want to accomplish something."
		imgswitch.setAttribute ('src', 'img/virgo.png')
	}

	else if (sign == "Libra" || sign == "libra") {
		document.getElementById("sign_title").innerHTML = "LIBRA"
		document.getElementById("sign_info").innerHTML = "Libras are the diplomat of the zodiac. They are able to put themselves in other's shoes and see things through another person's point of view. They are the ones that always want to make things right and have balance and harmony in their life, their surroundings and the lives of the people close to them. They have captivating charm, elegant taste and they are easy to like due to their eager-to-please, easygoing nature. In return for a Libra's amazing ability to be a good listener, sooth and calm people, they expect admiration."
		imgswitch.setAttribute ('src', 'img/libra.png')
	} 

	else if (sign == "Scorpio" || sign == "scorpio") {
		document.getElementById("sign_title").innerHTML = "SCORPIO"
		document.getElementById("sign_info").innerHTML = "Scorpio is the astrology sign of extremes and intensity. Scorpios are very deep, intense people, there is always more then meets the eye. They present a cool, detached and unemotional air to the world yet lying underneath is tremendous power, extreme strength, intense passion and a strong will and a persistent drive. Scorpios have a very penetrative mind, do not be surprised if they ask questions, they are trying to delve deeper and figure things out and survey the situation."
		imgswitch.setAttribute ('src', 'img/scorpio.png')
	} 

	else if (sign == "Sagittarius" || sign == "sagittarius") {
		document.getElementById("sign_title").innerHTML = "SAGITTARIUS"
		document.getElementById("sign_info").innerHTML = "Sagittarius seem to be guided by luck, good things happen to Sagittarius and this is usually because of their optimistic outlook and positive disposition which attracts good fortune. Despite hardships, Sagittarius is always optimistic that good things will happen tomorrow and the future carries good luck. Sagittarius have a vibrant, expansive personality that is free like a bird, Sagittarius cannot be contained. They are full of curiosity and they always look forward to the future, never dwelling on the past."
		imgswitch.setAttribute ('src', 'img/sagittarius.png')
	} 

	else if (sign == "Capricorn" || sign == "capricorn") {
		document.getElementById("sign_title").innerHTML = "CAPRICORN"
		document.getElementById("sign_info").innerHTML = "Capricorns are very ambitious people, they always have something they are pursuing and they want their lives to be fulfilled and important. Capricorns are extremely patient and will wait a long time for something they want, when the opportunity arises, they will plan their steps carefully to others, they might appear hesitant but this is not true, they know that there is only one chance to succeed and they are filing together their information to take the proper steps to accomplish their goal with flying colors, not just second rate."
		imgswitch.setAttribute ('src', 'img/capricorn.png')
	}
}

document.onkeydown = function(e){
	
   if(e.keyCode == 13){ 
   	e.preventDefault();
   	zodiac();
   }
};





















