/* ══════════════════════════════════════════════════════════════════════
   MOCK TEST: PASSAGE CONSTANTS (BILINGUAL)
══════════════════════════════════════════════════════════════════════ */

const PASSAGE_BLOOD = {
  en: `The discovery of the AB0 blood group system in 1900 and the proof that these blood types are inherited was an outstanding example of Mendelian inheritance applied to a human character. In 1908, a mathematician and physician set out the fundamental theorem of population genetics, which explains why a dominant gene does not increase in frequency from generation to generation. Scientists demonstrated that A, B, and 0 blood group characters are due to multiple alleles at one locus. Years later, the combined efforts of researchers led to discovery of the Rh factor and established that hemolytic disease of the newborn owes its origin to immunological maternal–fetal incompatibility. Blood group characters are due to multiple alleles at one locus, as demonstrated by Bernstein in 1924.`,
  hi: `1900 में AB0 रक्त समूह प्रणाली की खोज और यह प्रमाण कि ये रक्त प्रकार विरासत में मिले हैं, मानव चरित्र पर लागू मेंडेलियन आनुवंशिकी (Mendelian inheritance) का एक उत्कृष्ट उदाहरण था। 1908 में, एक गणितज्ञ और चिकित्सक ने जनसंख्या आनुवंशिकी का मौलिक प्रमेय निर्धारित किया, जो बताता है कि क्यों एक प्रमुख जीन पीढ़ी दर पीढ़ी आवृत्ति में वृद्धि नहीं करता है। वैज्ञानिकों ने प्रदर्शित किया कि A, B और 0 रक्त समूह के लक्षण एक लोकस (locus) पर कई एलील (alleles) के कारण होते हैं। वर्षों बाद, शोधकर्ताओं के संयुक्त प्रयासों से Rh कारक की खोज हुई और यह स्थापित हुआ कि नवजात शिशु के हेमोलाइटिक रोग की उत्पत्ति का कारण प्रतिरक्षात्मक मातृ-भ्रूण असंगति (immunological maternal-fetal incompatibility) है। 1924 में बर्नस्टीन द्वारा प्रदर्शित किए गए अनुसार, रक्त समूह के लक्षण एक लोकस पर कई एलील के कारण होते हैं।`
};

const PASSAGE_NOMOTHETIC = {
  en: `Nomothetic research aims to identify laws about human behavior – the Greek word 'nomos' means 'law'. It assumes that it is possible to discover regularities of influence or behavior, allowing experts to predict the likely outcomes of possible actions or innovations. So it looks for general principles, not specific cases. Idiographic research, by contrast, is all about exploring individuality or uniqueness. Idiographic research tends to focus on a single example, which might be a person, an event, a phenomenon, or an organization, and to analyse that example in depth. As a result, idiographic methods are often used in case studies, and are characteristic of ethnographic research. Idiographic studies are likely to adopt an inductive rather than deductive approach, working on the idea that we may discover general principles through a deeper understanding of one or two instances.`,
  hi: `नोमोथेटिक (Nomothetic) शोध का उद्देश्य मानव व्यवहार के बारे में कानूनों की पहचान करना है - ग्रीक शब्द 'नोमोस' का अर्थ 'कानून' है। यह मानता है कि प्रभाव या व्यवहार की नियमितताओं की खोज करना संभव है, जिससे विशेषज्ञों को संभावित कार्यों या नवाचारों के संभावित परिणामों की भविष्यवाणी करने की अनुमति मिलती है। इसलिए यह विशिष्ट मामलों के बजाय सामान्य सिद्धांतों की तलाश करता है। इसके विपरीत, इडियोग्राफिक (Idiographic) शोध पूरी तरह से व्यक्तित्व या विशिष्टता की खोज के बारे में है। इडियोग्राफिक शोध एक ही उदाहरण पर ध्यान केंद्रित करता है, जो कोई व्यक्ति, घटना, घटनाक्रम या संगठन हो सकता है, और उस उदाहरण का गहराई से विश्लेषण करता है। परिणामस्वरूप, इडियोग्राफिक विधियों का उपयोग अक्सर केस स्टडी में किया जाता है, और ये नृवंशविज्ञान (ethnographic) शोध की विशेषता हैं। इडियोग्राफिक अध्ययन निगमनात्मक (deductive) के बजाय आगमनात्मक (inductive) दृष्टिकोण अपनाने की संभावना रखते हैं, इस विचार पर काम करते हुए कि हम एक या दो उदाहरणों की गहरी समझ के माध्यम से सामान्य सिद्धांतों की खोज कर सकते हैं।`
};

function passageHTML(text) { return `<div class="comprehension-box">${text}</div>`; }

function matchTable(listILabel, listIILabel, rows) {
  let html = `<table class="match-table"><thead><tr><th>${listILabel}</th><th>${listIILabel}</th></tr></thead><tbody>`;
  rows.forEach(r => { html += `<tr><td><span class="match-label">${r[0]}.</span>${r[1]}</td><td><span class="match-label">${r[2]}.</span>${r[3]}</td></tr>`; });
  html += `</tbody></table>`; return html;
}

/* ══════════════════════════════════════════════════════════════════════
   QUESTION BANK — TEST DATA
══════════════════════════════════════════════════════════════════════ */
const TEST_JUNE_2025_P2 = [
  {
    "id": "JUNE2025_Q01",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "UNIT 2: Biological Evolution & Primatology",
    "unitHI": "इकाई 2: जैविक विकास और प्राइमेटोलॉजी",
    "topicEN": "Human vs apes comparison",
    "topicHI": "मानव बनाम वानर तुलना",
    "content": {
      "en": {
        "question": "Which of the following cervical vertebra is characterized by the presence of \"dens\" (odontoid process)?",
        "options": ["First Cervical", "Second Cervical", "Seventh Cervical", "Third Cervical"],
        "explanation": "The second cervical vertebra, also known as the axis, possesses a unique upward projection called the dens (or odontoid process). This structure acts as a pivot, allowing the head to rotate from side to side."
      },
      "hi": {
        "question": "निम्नलिखित में से किस ग्रीवा कशेरुका (cervical vertebra) की विशेषता \"डेंस\" (dens - ओडोंटॉइड प्रक्रिया) की उपस्थिति है?",
        "options": ["पहली ग्रीवा (First Cervical)", "दूसरी ग्रीवा (Second Cervical)", "सातवीं ग्रीवा (Seventh Cervical)", "तीसरी ग्रीवा (Third Cervical)"],
        "explanation": "दूसरी ग्रीवा कशेरुका, जिसे एक्सिस (axis) भी कहा जाता है, में एक अद्वितीय ऊपर की ओर प्रक्षेपण होता है जिसे डेंस (या ओडोंटॉइड प्रक्रिया) कहा जाता है। यह संरचना एक धुरी के रूप में कार्य करती है, जिससे सिर एक तरफ से दूसरी तरफ घूम सकता है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q02",
    "difficulty": "easy",
    "correct": 0,
    "unitEN": "UNIT 8: Anthropological Theories",
    "unitHI": "इकाई 8: मानवशास्त्रीय सिद्धांत",
    "topicEN": "Gender anthropology",
    "topicHI": "लिंग (Gender) मानव विज्ञान",
    "content": {
      "en": {
        "question": "The name of the journal published by the Association for Feminist Anthropology is:",
        "options": ["Voices", "Feminist Anthropology", "Gender and Society", "Gender Matters"],
        "explanation": "The Association for Feminist Anthropology publishes the journal 'Voices' (and also recognizes 'Feminist Anthropology'). These publications highlight feminist anthropological research, methodologies, and perspectives."
      },
      "hi": {
        "question": "एसोसिएशन फॉर फेमिनिस्ट एंथ्रोपोलॉजी (Association for Feminist Anthropology) द्वारा प्रकाशित पत्रिका का नाम क्या है?",
        "options": ["वॉयस (Voices)", "फेमिनिस्ट एंथ्रोपोलॉजी (Feminist Anthropology)", "जेंडर एंड सोसाइटी (Gender and Society)", "जेंडर मैटर्स (Gender Matters)"],
        "explanation": "एसोसिएशन फॉर फेमिनिस्ट एंथ्रोपोलॉजी 'वॉइसेस' (Voices) पत्रिका प्रकाशित करती है (और 'फेमिनिस्ट एंथ्रोपोलॉजी' को भी मान्यता देती है)। ये प्रकाशन नारीवादी मानवशास्त्रीय अनुसंधान, कार्यप्रणाली और दृष्टिकोण को उजागर करते हैं।"
      }
    }
  },
  {
    "id": "JUNE2025_Q03",
    "difficulty": "hard",
    "correct": 0,
    "unitEN": "UNIT 3: Human Genetics",
    "unitHI": "इकाई 3: मानव आनुवंशिकी",
    "topicEN": "Molecular genetics",
    "topicHI": "आणविक आनुवंशिकी",
    "content": {
      "en": {
        "question": `Match the LIST-I with LIST-II\n${matchTable("LIST-I (Names of Blood Groups)","LIST-II (Gene Name)",[["A","H","I","GYPA"],["B","MNS","II","DARC"],["C","Duffy","III","RHD"],["D","Rh","IV","FUT1"]])}Choose the correct answer from the options given below:`,
        "options": ["A-IV, B-I, C-II, D-III", "A-III, B-IV, C-I, D-II", "A-I, B-II, C-III, D-IV", "A-II, B-III, C-IV, D-I"],
        "explanation": "The H blood group antigen is encoded by the FUT1 gene. The MNS blood group system is associated with the GYPA gene, Duffy with DARC, and Rh with the RHD gene."
      },
      "hi": {
        "question": `सूची-I को सूची-II के साथ सुमेलित करें\n${matchTable("सूची-I (रक्त समूहों के नाम)","सूची-II (जीन का नाम)",[["A","H","I","GYPA"],["B","MNS","II","DARC"],["C","डफी (Duffy)","III","RHD"],["D","Rh","IV","FUT1"]])}नीचे दिए गए विकल्पों में से सही उत्तर चुनें:`,
        "options": ["A-IV, B-I, C-II, D-III", "A-III, B-IV, C-I, D-II", "A-I, B-II, C-III, D-IV", "A-II, B-III, C-IV, D-I"],
        "explanation": "H रक्त समूह एंटीजन FUT1 जीन द्वारा एन्कोड किया गया है। MNS रक्त समूह प्रणाली GYPA जीन से जुड़ी है, डफी DARC के साथ, और Rh, RHD जीन के साथ जुड़ा हुआ है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q04",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "UNIT 3: Human Genetics",
    "unitHI": "इकाई 3: मानव आनुवंशिकी",
    "topicEN": "Genetic polymorphism",
    "topicHI": "आनुवंशिक बहुरूपता",
    "content": {
      "en": {
        "question": "The Dilution Method for measuring PTC tasting sensitivity was given by:",
        "options": ["Malthus and Landsteiner", "Harris and Kalmus", "Farr and Henderson", "Duffy and Lewis"],
        "explanation": "Harris and Kalmus developed the serial dilution method in 1949 to accurately measure the threshold of sensitivity for tasting Phenylthiocarbamide (PTC), which became a standard genetic marker test."
      },
      "hi": {
        "question": "PTC स्वाद संवेदनशीलता को मापने के लिए डाइल्यूशन विधि (Dilution Method) किसके द्वारा दी गई थी?",
        "options": ["माल्थस और लैंडस्टीनर", "हैरिस और कल्मुस", "फ़ार और हेंडरसन", "डफी और लुईस"],
        "explanation": "हैरिस और कल्मुस ने 1949 में फेनिलथियोकार्बामाइड (PTC) चखने की संवेदनशीलता की सीमा को सटीक रूप से मापने के लिए सीरियल डाइल्यूशन विधि विकसित की, जो एक मानक आनुवंशिक मार्कर परीक्षण बन गया।"
      }
    }
  },
  {
    "id": "JUNE2025_Q05",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "UNIT 6: Indian Prehistory",
    "unitHI": "इकाई 6: भारतीय प्रागितिहास",
    "topicEN": "Iron age",
    "topicHI": "लौह युग",
    "content": {
      "en": {
        "question": "Protohistoric bar bits of Iron and diadems in urn burial are discovered at:",
        "options": ["Attirampakkam", "Burzahom", "Adichanallur", "Bagor"],
        "explanation": "Adichanallur in Tamil Nadu is an important Iron Age urn-burial site. Excavations here have yielded iron implements, weapons, and distinctive gold diadems, highlighting advanced early metallurgical skills."
      },
      "hi": {
        "question": "कलश शवाधान (urn burial) में लोहे के प्रोटोहिस्टोरिक बार बिट्स और डायडेम (diadems) कहाँ खोजे गए हैं?",
        "options": ["अतिरामपक्कम", "बुर्जहोम", "आदिचनल्लूर", "बागोर"],
        "explanation": "तमिलनाडु में आदिचनल्लूर एक महत्वपूर्ण लौह युग कलश-शवाधान स्थल है। यहां की खुदाई से लोहे के औजार, हथियार और विशिष्ट सोने के डायडेम (मुकुट) मिले हैं, जो उन्नत प्रारंभिक धातुकर्म कौशल को उजागर करते हैं।"
      }
    }
  },
  {
    "id": "JUNE2025_Q06",
    "difficulty": "easy",
    "correct": 2,
    "unitEN": "UNIT 1: Research Methodology & Basics",
    "unitHI": "इकाई 1: शोध पद्धति और मूल बातें",
    "topicEN": "Statistics (variables, sampling)",
    "topicHI": "सांख्यिकी (चर, प्रतिचयन)",
    "content": {
      "en": {
        "question": "The concept of Normal distribution was given by:",
        "options": ["F. Galton", "R. A. Fischer", "K. F. Gauss", "S. D. Poisson"],
        "explanation": "The normal distribution is a fundamental concept in statistics, often referred to as the Gaussian distribution. It is named after Carl Friedrich Gauss, who discovered it while analyzing astronomical data."
      },
      "hi": {
        "question": "सामान्य वितरण (Normal distribution) की अवधारणा किसके द्वारा दी गई थी?",
        "options": ["एफ. गाल्टन (F. Galton)", "आर. ए. फिशर (R. A. Fischer)", "के. एफ. गॉस (K. F. Gauss)", "एस. डी. पॉइसन (S. D. Poisson)"],
        "explanation": "सामान्य वितरण सांख्यिकी में एक मौलिक अवधारणा है, जिसे अक्सर गाऊसी वितरण (Gaussian distribution) कहा जाता है। इसका नाम कार्ल फ्रेडरिक गॉस के नाम पर रखा गया है, जिन्होंने खगोलीय डेटा का विश्लेषण करते समय इसकी खोज की थी।"
      }
    }
  },
  {
    "id": "JUNE2025_Q07",
    "difficulty": "hard",
    "correct": 2,
    "unitEN": "UNIT 8: Anthropological Theories",
    "unitHI": "इकाई 8: मानवशास्त्रीय सिद्धांत",
    "topicEN": "Postmodernism",
    "topicHI": "उत्तर-आधुनिकतावाद",
    "content": {
      "en": {
        "question": "Essentaialism is characterised through:\nA. Modernist Ontology\nB. Reification\nC. Cultural relativism\nD. Biologism\nChoose the correct answer from the options given below:",
        "options": ["A and C Only", "B and C Only", "B and D Only", "A and D Only"],
        "explanation": "Essentialism often relies on 'Reification' (treating an abstract concept as concrete) and 'Biologism' (reducing complex social phenomena to biological determinism). It opposes the fluidity suggested by cultural relativism."
      },
      "hi": {
        "question": "अनिवार्यवाद (Essentialism) की विशेषता निम्नलिखित के माध्यम से है:\nA. आधुनिकतावादी ओन्टोलॉजी (Modernist Ontology)\nB. वैश्वीकरण/वस्तुकरण (Reification)\nC. सांस्कृतिक सापेक्षवाद (Cultural relativism)\nD. जीवविज्ञानवाद (Biologism)\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["केवल A और C", "केवल B और C", "केवल B और D", "केवल A और D"],
        "explanation": "अनिवार्यवाद अक्सर 'रीफिकेशन' (एक अमूर्त अवधारणा को ठोस मानना) और 'बायोलॉजिज्म' (जटिल सामाजिक घटनाओं को जैविक नियतत्ववाद तक कम करना) पर निर्भर करता है। यह सांस्कृतिक सापेक्षवाद द्वारा सुझाई गई तरलता (fluidity) का विरोध करता है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q08",
    "difficulty": "hard",
    "correct": 3,
    "unitEN": "UNIT 11: Miscellaneous & High-Yield Facts",
    "unitHI": "इकाई 11: विविध और उच्च उपज वाले तथ्य",
    "topicEN": "Books, Authors & Years",
    "topicHI": "पुस्तकें, लेखक और वर्ष",
    "content": {
      "en": {
        "question": "Arrange the following works in the chronological order of their first publication from the earliest to latest:\nA. Golden Bough, by James Frazer\nB. Ancient Law, by Henry Maine\nC. Ancient Society, by L.H. Morgan\nD. Primitive Culture, by E.B. Tylor\nChoose the correct answer from the options given below:",
        "options": ["A, C, D, B", "D, C, B, A", "A, D, C, B", "B, D, C, A"],
        "explanation": "The correct chronological order is: Ancient Law by Maine (1861), Primitive Culture by Tylor (1871), Ancient Society by Morgan (1877), and The Golden Bough by Frazer (1890)."
      },
      "hi": {
        "question": "निम्नलिखित रचनाओं को उनके प्रथम प्रकाशन के कालानुक्रमिक क्रम (chronological order) में सबसे पहले से नवीनतम तक व्यवस्थित करें:\nA. गोल्डन बाऊ (Golden Bough), जेम्स फ्रेज़र द्वारा\nB. एंशिएंट लॉ (Ancient Law), हेनरी मेन द्वारा\nC. एंशिएंट सोसाइटी (Ancient Society), एल.एच. मॉर्गन द्वारा\nD. प्रिमिटिव कल्चर (Primitive Culture), ई.बी. टायलर द्वारा\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["A, C, D, B", "D, C, B, A", "A, D, C, B", "B, D, C, A"],
        "explanation": "सही कालानुक्रमिक क्रम है: एंशिएंट लॉ (मेन, 1861), प्रिमिटिव कल्चर (टायलर, 1871), एंशिएंट सोसाइटी (मॉर्गन, 1877), और द गोल्डन बाऊ (फ्रेज़र, 1890)।"
      }
    }
  },
  {
    "id": "JUNE2025_Q09",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "UNIT 7: Social Anthropology Concepts",
    "unitHI": "इकाई 7: सामाजिक मानव विज्ञान अवधारणाएं",
    "topicEN": "Kinship systems",
    "topicHI": "नातेदारी (Kinship) प्रणालियाँ",
    "content": {
      "en": {
        "question": "Eskimo terminology, in Murdock's classification is one in which:",
        "options": ["Siblings are distinguished from cousins and no distinction is made between parallel and cross-cousins", "Siblings are merged with parallel cousins and distinguished from cross cousins.", "Siblings, cross and parallel cousins all are bifurcated and distinguished", "Siblings, cross and parallel cousins all are merged and no distinction is made"],
        "explanation": "In the Eskimo kinship terminology system, emphasis is placed on the nuclear family. Siblings are distinguished from cousins, but no distinction is made between cross-cousins and parallel cousins."
      },
      "hi": {
        "question": "मर्डॉक के वर्गीकरण में, एस्किमो शब्दावली (Eskimo terminology) वह है जिसमें:",
        "options": ["भाई-बहनों को चचेरे/ममेरे भाई-बहनों से अलग किया जाता है और समानांतर (parallel) और क्रॉस-कजिन (cross-cousins) के बीच कोई भेद नहीं किया जाता है", "भाई-बहनों को समानांतर चचेरे भाई-बहनों के साथ मिला दिया जाता है और क्रॉस कजिन से अलग किया जाता है।", "भाई-बहनों, क्रॉस और समानांतर चचेरे भाई-बहनों सभी को द्विभाजित और विभेदित किया जाता है", "भाई-बहनों, क्रॉस और समानांतर चचेरे भाई-बहनों को मिला दिया जाता है और कोई भेद नहीं किया जाता है"],
        "explanation": "एस्किमो रिश्तेदारी शब्दावली प्रणाली में, परमाणु परिवार (nuclear family) पर जोर दिया जाता है। भाई-बहनों को चचेरे/ममेरे भाई-बहनों (कजिन्स) से अलग माना जाता है, लेकिन क्रॉस-कजिन और समानांतर चचेरे भाई-बहनों के बीच कोई अंतर नहीं किया जाता है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q10",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "UNIT 11: Miscellaneous & High-Yield Facts",
    "unitHI": "इकाई 11: विविध और उच्च उपज वाले तथ्य",
    "topicEN": "Important Terms & Concepts",
    "topicHI": "महत्वपूर्ण शर्तें और अवधारणाएं",
    "content": {
      "en": {
        "question": "Speech Act in which utterance is equal to an action is called as:",
        "options": ["Elocutionary", "Perlocutionary", "Illocutionary", "Locutionary"],
        "explanation": "An illocutionary act is a speech act where the utterance itself performs an intended action (e.g., promising, warning, or declaring), a concept famously proposed by philosopher J.L. Austin."
      },
      "hi": {
        "question": "भाषण अधिनियम (Speech Act) जिसमें उच्चारण एक क्रिया के बराबर होता है, उसे क्या कहा जाता है?",
        "options": ["वक्तृत्व (Elocutionary)", "पर्लोक्यूशनरी (Perlocutionary)", "इलोक्यूशनरी (Illocutionary)", "लोकेशनरी (Locutionary)"],
        "explanation": "एक इलोक्यूशनरी कार्य एक वाक् कार्य है जहां कथन ही एक इच्छित कार्य (जैसे, वादा करना, चेतावनी देना, या घोषणा करना) करता है, यह अवधारणा प्रसिद्ध दार्शनिक जे.एल. ऑस्टिन द्वारा प्रस्तावित की गई थी।"
      }
    }
  },
  {
    "id": "JUNE2025_Q11",
    "difficulty": "hard",
    "correct": 2,
    "unitEN": "UNIT 3: Human Genetics",
    "unitHI": "इकाई 3: मानव आनुवंशिकी",
    "topicEN": "Cytogenetics",
    "topicHI": "साइटोजेनेटिक्स",
    "content": {
      "en": {
        "question": "Sequence following steps in the FISH technique in the correct order:\nA. Denaturation of DNA\nB. Hybridization of probe to target DNA\nC. Fixation of cells on a slide\nD. Detection of signal using a fluorescence microscope\nChoose the correct answer from the options given below:",
        "options": ["D, C, B, A", "A, B, C, D", "C, A, B, D", "B, C, A, D"],
        "explanation": "The FISH (Fluorescence In Situ Hybridization) technique involves fixing cells on a slide, denaturing the DNA, hybridizing the fluorescent probe to the target DNA, and finally detecting the signal with a microscope."
      },
      "hi": {
        "question": "FISH तकनीक में निम्नलिखित चरणों को सही क्रम में व्यवस्थित करें:\nA. डीएनए का विकृतीकरण (Denaturation of DNA)\nB. लक्ष्य डीएनए में जांच (probe) का संकरण (Hybridization)\nC. स्लाइड पर कोशिकाओं का निर्धारण (Fixation)\nD. प्रतिदीप्ति सूक्ष्मदर्शी (fluorescence microscope) का उपयोग करके संकेत का पता लगाना\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["D, C, B, A", "A, B, C, D", "C, A, B, D", "B, C, A, D"],
        "explanation": "FISH (Fluorescence In Situ Hybridization) तकनीक में एक स्लाइड पर कोशिकाओं को फिक्स करना, डीएनए को विकृत (denature) करना, लक्ष्य डीएनए के लिए फ्लोरोसेंट जांच को हाइब्रिडाइज़ करना और अंततः माइक्रोस्कोप के साथ सिग्नल का पता लगाना शामिल है।"
      }
    }
  },
  {
    "id": "JUNE2025_BONUS_1",
    "difficulty": "easy",
    "correct": 1,
    "unitEN": "UNIT 8: Anthropological Theories",
    "unitHI": "इकाई 8: मानवशास्त्रीय सिद्धांत",
    "topicEN": "Interpretive anthropology",
    "topicHI": "व्याख्यात्मक (Interpretive) मानव विज्ञान",
    "content": {
      "en": {
        "question": "The concept of 'Thick Description' in Cultural Anthropology was introduced by:",
        "options": ["Claude Lévi-Strauss", "Clifford Geertz", "Bronisław Malinowski", "Victor Turner"],
        "explanation": "Thick description is a concept introduced by Clifford Geertz. It involves explaining not just a behavior, but its context, making the behavior meaningful to an outsider."
      },
      "hi": {
        "question": "सांस्कृतिक मानव विज्ञान में 'थिक डिस्क्रिप्शन' (Thick Description) की अवधारणा किसके द्वारा पेश की गई थी?",
        "options": ["क्लाउड लेवी-स्ट्रॉस", "क्लिफोर्ड गीर्ट्ज़", "ब्रोनिसलॉ मालिनोव्स्की", "विक्टर टर्नर"],
        "explanation": "थिन और थिक डिस्क्रिप्शन (Thick description) क्लिफोर्ड गीर्ट्ज़ द्वारा पेश की गई एक अवधारणा है। इसमें न केवल एक व्यवहार की व्याख्या करना शामिल है, बल्कि उसके संदर्भ की भी व्याख्या करना शामिल है, जिससे व्यवहार किसी बाहरी व्यक्ति के लिए सार्थक हो जाता है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q13",
    "difficulty": "hard",
    "correct": 0,
    "unitEN": "UNIT 2: Biological Evolution & Primatology",
    "unitHI": "इकाई 2: जैविक विकास और प्राइमेटोलॉजी",
    "topicEN": "Homo erectus",
    "topicHI": "होमो इरेक्टस",
    "content": {
      "en": {
        "question": `Match the LIST-I with LIST-II\n${matchTable("LIST-I (Place)","LIST-II (Fossil)",[["A","Trinil","I","Neanderthal skeleton"],["B","Taung","II","Sinanthropus pekinensis"],["C","Lachapelle-aux-Saints","III","Australopithecus africanus"],["D","Zhoukoudian","IV","Pithecanthropus erectus"]])}Choose the correct answer from the options given below:`,
        "options": ["A-IV, B-III, C-I, D-II", "A-III, B-I, C-IV, D-II", "A-I, B-IV, C-II, D-III", "A-III, B-I, C-II, D-IV"],
        "explanation": "Trinil is associated with Pithecanthropus erectus (Java Man). Taung yielded Australopithecus africanus. La Chapelle-aux-Saints is famous for a Neanderthal skeleton, and Zhoukoudian for Sinanthropus pekinensis (Peking Man)."
      },
      "hi": {
        "question": `सूची-I को सूची-II के साथ सुमेलित करें\n${matchTable("सूची-I (स्थान)","सूची-II (जीवाश्म)",[["A","त्रिनिल (Trinil)","I","निएंडरथल कंकाल"],["B","टौंग (Taung)","II","सिनैन्थ्रोपस पेकिनेसिस"],["C","ला चैपल-ऑक्स-सेंट्स","III","ऑस्ट्रेलोपिथेकस अफ़्रीकनस"],["D","झोउकौडियन (Zhoukoudian)","IV","पिथेकैंथ्रोपस इरेक्टस"]])}नीचे दिए गए विकल्पों में से सही उत्तर चुनें:`,
        "options": ["A-IV, B-III, C-I, D-II", "A-III, B-I, C-IV, D-II", "A-I, B-IV, C-II, D-III", "A-III, B-I, C-II, D-IV"],
        "explanation": "त्रिनिल पिथेकैंथ्रोपस इरेक्टस (जावा मैन) से जुड़ा है। टौंग से ऑस्ट्रेलोपिथेकस अफ़्रीकनस प्राप्त हुआ। ला चैपेल-ऑक्स-सेंट्स एक निएंडरथल कंकाल के लिए प्रसिद्ध है, और झोउकौडियन सिनैन्थ्रोपस पेकिनेसिस (पेकिंग मैन) के लिए।"
      }
    }
  },
  {
    "id": "JUNE2025_Q14",
    "difficulty": "hard",
    "correct": 3,
    "unitEN": "UNIT 11: Miscellaneous & High-Yield Facts",
    "unitHI": "इकाई 11: विविध और उच्च उपज वाले तथ्य",
    "topicEN": "Chronology & Sequences",
    "topicHI": "कालक्रम और अनुक्रम",
    "content": {
      "en": {
        "question": "Arrange the following genome projects in chronological order from earliest to latest:\nA. 1000 Genome Project\nB. HapMap Project\nC. Human Genome Project\nD. GenomeIndia Project\nChoose the correct answer from the options given below:",
        "options": ["C, D, B, A", "B, D, C, A", "B, C, D, A", "C, B, A, D"],
        "explanation": "The Human Genome Project began in 1990 (C), followed by the HapMap Project in 2002 (B), the 1000 Genomes Project in 2008 (A), and the GenomeIndia Project recently (D)."
      },
      "hi": {
        "question": "निम्नलिखित जीनोम परियोजनाओं को प्रारंभिक से नवीनतम तक कालानुक्रमिक क्रम (chronological order) में व्यवस्थित करें:\nA. 1000 जीनोम प्रोजेक्ट\nB. हैपमैप (HapMap) प्रोजेक्ट\nC. मानव जीनोम प्रोजेक्ट (Human Genome Project)\nD. जीनोमइंडिया (GenomeIndia) प्रोजेक्ट\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["C, D, B, A", "B, D, C, A", "B, C, D, A", "C, B, A, D"],
        "explanation": "मानव जीनोम परियोजना 1990 (C) में शुरू हुई, इसके बाद 2002 में हैपमैप परियोजना (B), 2008 में 1000 जीनोम परियोजना (A), और हाल ही में जीनोमइंडिया परियोजना (D) शुरू हुई।"
      }
    }
  },
  {
    "id": "JUNE2025_Q15",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "UNIT 1: Research Methodology & Basics",
    "unitHI": "इकाई 1: शोध पद्धति और मूल बातें",
    "topicEN": "Focus group, PRA, RRA",
    "topicHI": "फोकस समूह, पीआरए (PRA), आरआरए (RRA)",
    "content": {
      "en": {
        "question": "Focus Group method grew out of:\nA. Key Informant Interview\nB. Therapeutic Research\nC. Case Study Method\nD. Marketing Research\nChoose the correct answer from the options given below:",
        "options": ["A, B and D Only", "B, C and D Only", "B and D Only", "A and C Only"],
        "explanation": "Focus groups originated in sociology and marketing research (D) and were also heavily influenced by therapeutic research (B) involving group therapy dynamics."
      },
      "hi": {
        "question": "फोकस ग्रुप (Focus Group) पद्धति का विकास किससे हुआ है?\nA. मुख्य सूचनादाता साक्षात्कार (Key Informant Interview)\nB. चिकित्सीय अनुसंधान (Therapeutic Research)\nC. केस स्टडी विधि\nD. विपणन अनुसंधान (Marketing Research)\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["केवल A, B और D", "केवल B, C और D", "केवल B और D", "केवल A और C"],
        "explanation": "फोकस समूहों की उत्पत्ति समाजशास्त्र और विपणन अनुसंधान (Marketing Research - D) में हुई थी और ये समूह चिकित्सा गतिकी से जुड़े चिकित्सीय अनुसंधान (Therapeutic Research - B) से भी काफी प्रभावित थे।"
      }
    }
  },
  {
    "id": "JUNE2025_Q16",
    "difficulty": "medium",
    "correct": 3,
    "unitEN": "UNIT 6: Indian Prehistory",
    "unitHI": "इकाई 6: भारतीय प्रागितिहास",
    "topicEN": "Lower palaeolithic India",
    "topicHI": "निचला पुरापाषाण काल भारत",
    "content": {
      "en": {
        "question": "An Acheulean living floor was exposed at Gulbarga in Karnataka was found by:",
        "options": ["H.D. Sankalia", "V.N. Misra", "R.V. Joshi", "K. Paddaiah"],
        "explanation": "K. Paddayya conducted extensive archaeological excavations in the Hunsgi and Baichbal valleys of Gulbarga, Karnataka, unearthing significant Acheulean living floors."
      },
      "hi": {
        "question": "कर्नाटक के गुलबर्गा में एक अच्यूलियन (Acheulean) रहने का फर्श (living floor) उजागर किया गया था, इसे किसके द्वारा खोजा गया था?",
        "options": ["एच.डी. सांकलिया", "वी.एन. मिश्रा", "आर.वी. जोशी", "के. पद्दैया (K. Paddaiah)"],
        "explanation": "के. पद्दैया ने कर्नाटक के गुलबर्गा की हुंसगी और बाचबल घाटियों में व्यापक पुरातात्विक खुदाई की, जिसमें महत्वपूर्ण अच्यूलियन निवास स्थान (living floors) को उजागर किया गया।"
      }
    }
  },
  {
    "id": "JUNE2025_Q17",
    "difficulty": "hard",
    "correct": 2,
    "unitEN": "UNIT 2: Biological Evolution & Primatology",
    "unitHI": "इकाई 2: जैविक विकास और प्राइमेटोलॉजी",
    "topicEN": "Multiregional hypothesis",
    "topicHI": "बहुक्षेत्रीय परिकल्पना",
    "content": {
      "en": {
        "question": "Which of the following is true for models of human origin?\nA. Multiregional and Candelabra models are identical to each other\nB. Replacement and Candelabra models are identical to each other\nC. In multiregional model, the evolution also includes gene flow between populations\nD. In multiregional model, the main lines of ancestry are not within each major region of the Old World\nChoose the correct answer from the options given below:",
        "options": ["A and D Only", "B Only", "C Only", "B and D Only"],
        "explanation": "The Multiregional model proposes that human evolution occurred simultaneously across different regions of the world, facilitated by continuous gene flow between these geographically separated populations."
      },
      "hi": {
        "question": "मानव उत्पत्ति के मॉडल के लिए निम्नलिखित में से कौन सा सत्य है?\nA. बहुक्षेत्रीय (Multiregional) और कैंडेलब्रा मॉडल एक दूसरे के समान हैं\nB. रिप्लेसमेंट और कैंडेलब्रा मॉडल एक दूसरे के समान हैं\nC. बहुक्षेत्रीय मॉडल में, विकास में आबादी के बीच जीन प्रवाह (gene flow) भी शामिल है\nD. बहुक्षेत्रीय मॉडल में, पूर्वजों की मुख्य रेखाएं पुरानी दुनिया के प्रत्येक प्रमुख क्षेत्र के भीतर नहीं हैं\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["केवल A और D", "केवल B", "केवल C", "केवल B और D"],
        "explanation": "मल्टीरीजनल (बहुक्षेत्रीय) मॉडल का प्रस्ताव है कि मानव विकास दुनिया के विभिन्न क्षेत्रों में एक साथ हुआ, जो इन भौगोलिक रूप से अलग-अलग आबादी के बीच निरंतर जीन प्रवाह (gene flow) द्वारा सुगम हुआ।"
      }
    }
  },
  {
    "id": "JUNE2025_Q18",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "UNIT 3: Human Genetics",
    "unitHI": "इकाई 3: मानव आनुवंशिकी",
    "topicEN": "Genetic polymorphism",
    "topicHI": "आनुवंशिक बहुरूपता",
    "content": {
      "en": {
        "question": "Which species of malaria parasite uses the Duffy antigen as a receptor to invade red blood cells?",
        "options": ["Plasmodium ovale", "Plasmodium vivax", "Plasmodium malariae", "Plasmodium falciparum"],
        "explanation": "Plasmodium vivax uniquely relies on the Duffy blood group antigen as a receptor to enter human red blood cells. Populations lacking this antigen are naturally resistant to this malaria strain."
      },
      "hi": {
        "question": "मलेरिया परजीवी की कौन सी प्रजाति लाल रक्त कोशिकाओं (RBC) पर आक्रमण करने के लिए डफी (Duffy) एंटीजन का रिसेप्टर के रूप में उपयोग करती है?",
        "options": ["प्लास्मोडियम ओवले", "प्लास्मोडियम विवैक्स (Plasmodium vivax)", "प्लास्मोडियम मलेरिया", "प्लास्मोडियम फाल्सीपेरम"],
        "explanation": "प्लाज्मोडियम विवैक्स विशिष्ट रूप से मानव लाल रक्त कोशिकाओं में प्रवेश करने के लिए रिसेप्टर के रूप में डफी रक्त समूह एंटीजन पर निर्भर करता है। इस एंटीजन की कमी वाली आबादी स्वाभाविक रूप से इस मलेरिया स्ट्रेन के प्रतिरोधी होती है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q19",
    "difficulty": "hard",
    "correct": 0,
    "unitEN": "UNIT 9: Indian Anthropology",
    "unitHI": "इकाई 9: भारतीय मानव विज्ञान",
    "topicEN": "Westernization",
    "topicHI": "पश्चिमीकरण",
    "content": {
      "en": {
        "question": "Which of the following statements are true with respect to westernization?\nA. Westernization promotes materilism\nB. Westernization promotes caste consciousness\nC. Westernization promotes national consciousness\nD. Westernization retards sanskritization\nChoose the correct answer from the options given below:",
        "options": ["A and C Only", "B and D Only", "C and D Only", "A and B Only"],
        "explanation": "M.N. Srinivas noted that Westernization introduces new values like materialism and rationalism, while also promoting national consciousness by establishing a broader modern identity beyond caste."
      },
      "hi": {
        "question": "पश्चिमीकरण (westernization) के संबंध में निम्नलिखित में से कौन से कथन सत्य हैं?\nA. पश्चिमीकरण भौतिकवाद (materialism) को बढ़ावा देता है\nB. पश्चिमीकरण जाति चेतना को बढ़ावा देता है\nC. पश्चिमीकरण राष्ट्रीय चेतना को बढ़ावा देता है\nD. पश्चिमीकरण संस्कृतिकरण (sanskritization) को धीमा करता है\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["केवल A और C", "केवल B और D", "केवल C और D", "केवल A और B"],
        "explanation": "एम.एन. श्रीनिवास ने उल्लेख किया कि पश्चिमीकरण भौतिकवाद और तर्कवाद जैसे नए मूल्यों को पेश करता है, जबकि जाति से परे एक व्यापक आधुनिक पहचान स्थापित करके राष्ट्रीय चेतना को भी बढ़ावा देता है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q20",
    "difficulty": "easy",
    "correct": 0,
    "unitEN": "UNIT 8: Anthropological Theories",
    "unitHI": "इकाई 8: मानवशास्त्रीय सिद्धांत",
    "topicEN": "Cultural ecology",
    "topicHI": "सांस्कृतिक पारिस्थितिकी",
    "content": {
      "en": {
        "question": "The distinction between Unilinear, Multilinear and Universal evolution was first proposed by:",
        "options": ["Julian Steward", "Leslie White", "Elman Service", "Gordon Childe"],
        "explanation": "Julian Steward introduced the concept of 'multilinear evolution', effectively distinguishing it from the 19th-century unilinear models and Leslie White's universal evolutionary approach."
      },
      "hi": {
        "question": "एकरेखीय (Unilinear), बहुरेखीय (Multilinear) और सार्वभौमिक (Universal) विकास के बीच अंतर सबसे पहले किसके द्वारा प्रस्तावित किया गया था?",
        "options": ["जूलियन स्टीवर्ड (Julian Steward)", "लेस्ली व्हाइट", "एल्मन सर्विस", "गॉर्डन चाइल्ड"],
        "explanation": "जूलियन स्टीवर्ड ने 'बहुरेखीय विकास' (multilinear evolution) की अवधारणा पेश की, जिसने इसे 19वीं सदी के एकरेखीय मॉडल और लेस्ली व्हाइट के सार्वभौमिक विकासवादी दृष्टिकोण से प्रभावी ढंग से अलग किया।"
      }
    }
  },
  {
    "id": "JUNE2025_Q21",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "UNIT 8: Anthropological Theories",
    "unitHI": "इकाई 8: मानवशास्त्रीय सिद्धांत",
    "topicEN": "Cultural ecology",
    "topicHI": "सांस्कृतिक पारिस्थितिकी",
    "content": {
      "en": {
        "question": "Involution in ecological anthropology is characterize by a situation of:",
        "options": ["Cultural stagnation accompanied by economic stagnation", "Socio-economic stagnation accompanied by cultural elaboration", "Economic growth accompanied by bureaucratic control", "Economic stagnation accompanied by demographic implosion"],
        "explanation": "The concept of 'agricultural involution' was introduced by Clifford Geertz. It describes a process where an agricultural system absorbs extra labor, leading to socio-economic stagnation accompanied by cultural elaboration, without genuine economic growth."
      },
      "hi": {
        "question": "पारिस्थितिक मानव विज्ञान (ecological anthropology) में 'इनवोल्यूशन' (Involution) की स्थिति की क्या विशेषता है?",
        "options": ["आर्थिक ठहराव के साथ-साथ सांस्कृतिक ठहराव", "सामाजिक-आर्थिक ठहराव के साथ-साथ सांस्कृतिक विस्तार (elaboration)", "नौकरशाही नियंत्रण के साथ-साथ आर्थिक विकास", "जनसांख्यिकीय अंतर्विरोध के साथ-साथ आर्थिक ठहराव"],
        "explanation": "क्लिफोर्ड गीर्ट्ज़ द्वारा 'कृषि इनवोल्यूशन' (agricultural involution) की अवधारणा पेश की गई थी। यह एक ऐसी प्रक्रिया का वर्णन करता है जहां एक कृषि प्रणाली अतिरिक्त श्रम को अवशोषित करती है, जिससे वास्तविक आर्थिक विकास के बिना सांस्कृतिक विस्तार के साथ-साथ सामाजिक-आर्थिक ठहराव होता है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q22",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "UNIT 2: Biological Evolution & Primatology",
    "unitHI": "इकाई 2: जैविक विकास और प्राइमेटोलॉजी",
    "topicEN": "Human vs apes comparison",
    "topicHI": "मानव बनाम वानर तुलना",
    "content": {
      "en": {
        "question": "Arrange the following regions of vertebral column from cranial to caudal postion:\nA. Lumber\nB. Sacrum\nC. Cervical\nD. Thoracic\nChoose the correct answer from the options given below:",
        "options": ["D, B, A, C", "C, D, A, B", "A, C, B, D", "C, A, D, B"],
        "explanation": "The human vertebral column from top (cranial) to bottom (caudal) is arranged as: Cervical (neck), Thoracic (chest), Lumbar (lower back), and Sacrum (pelvic region)."
      },
      "hi": {
        "question": "कशेरुक दंड (vertebral column) के निम्नलिखित क्षेत्रों को कपाल (cranial) से पुच्छीय (caudal) स्थिति (ऊपर से नीचे) तक व्यवस्थित करें:\nA. लम्बर (Lumber)\nB. त्रिकास्थि (Sacrum)\nC. ग्रीवा (Cervical)\nD. थोरैसिक (Thoracic)\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["D, B, A, C", "C, D, A, B", "A, C, B, D", "C, A, D, B"],
        "explanation": "मानव कशेरुक दंड ऊपर (कपाल) से नीचे (कौडल) तक इस प्रकार व्यवस्थित होता है: ग्रीवा (गर्दन), वक्ष या थोरैसिक (छाती), लम्बर (पीठ के निचले हिस्से), और त्रिकास्थि या सैक्रम (श्रोणि क्षेत्र)।"
      }
    }
  },
  {
    "id": "JUNE2025_Q23",
    "difficulty": "hard",
    "correct": 0,
    "unitEN": "UNIT 5: Prehistoric Archaeology",
    "unitHI": "इकाई 5: प्रागैतिहासिक पुरातत्व",
    "topicEN": "Dating methods",
    "topicHI": "डेटिंग विधियां",
    "content": {
      "en": {
        "question": `Match the LIST-I with LIST-II\n${matchTable("LIST-I","LIST-II",[["A","Half Life Period of Carbon 14","I","14.05 billion Years"],["B","Half Life Period of Potassium","II","1.3 billion ± 40 million years"],["C","Half Life Period of Thorium","III","4.5 billion years"],["D","Half-Life Period of Uranium","IV","5568 ± 30 years"]])}Choose the correct answer from the options given below:`,
        "options": ["A-IV, B-II, C-I, D-III", "A-II, B-I, C-IV, D-III", "A-IV, B-III, C-I, D-II", "A-IV, B-I, C-III, D-II"],
        "explanation": "Radiocarbon (C-14) has a half-life of 5568±30 years (Libby's value). Potassium-40 is 1.3 billion years, Thorium-232 is 14.05 billion years, and Uranium-238 is 4.5 billion years."
      },
      "hi": {
        "question": `सूची-I को सूची-II के साथ सुमेलित करें\n${matchTable("सूची-I","सूची-II",[["A","कार्बन 14 की अर्ध आयु (Half Life)","I","14.05 अरब वर्ष"],["B","पोटेशियम की अर्ध आयु","II","1.3 अरब ± 40 मिलियन वर्ष"],["C","थोरियम की अर्ध आयु","III","4.5 अरब वर्ष"],["D","यूरेनियम की अर्ध आयु","IV","5568 ± 30 वर्ष"]])}नीचे दिए गए विकल्पों में से सही उत्तर चुनें:`,
        "options": ["A-IV, B-II, C-I, D-III", "A-II, B-I, C-IV, D-III", "A-IV, B-III, C-I, D-II", "A-IV, B-I, C-III, D-II"],
        "explanation": "रेडियोकार्बन (C-14) का आधा जीवन (Half life) 5568±30 वर्ष है (लिब्बी का मान)। पोटेशियम-40, 1.3 अरब वर्ष है, थोरियम-232, 14.05 अरब वर्ष है, और यूरेनियम-238, 4.5 अरब वर्ष है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q24",
    "difficulty": "easy",
    "correct": 0,
    "unitEN": "UNIT 7: Social Anthropology Concepts",
    "unitHI": "इकाई 7: सामाजिक मानव विज्ञान अवधारणाएं",
    "topicEN": "Political organization",
    "topicHI": "राजनीतिक संगठन",
    "content": {
      "en": {
        "question": "Anthropologically speaking, the Melanesian Big Man would be characterized as a:",
        "options": ["Tribal Leader", "Band Leader", "State Leader", "Chiefdom Leader"],
        "explanation": "The 'Big Man' is a highly influential individual in a tribal society (especially in Melanesia) who achieves leadership through personal charisma, generosity, and wealth accumulation, rather than inherited status."
      },
      "hi": {
        "question": "मानवशास्त्रीय दृष्टि से, मेलानेशियन बिग मैन (Melanesian Big Man) को किसके रूप में जाना जाता है?",
        "options": ["जनजातीय नेता (Tribal Leader)", "बैंड लीडर (Band Leader)", "राज्य नेता (State Leader)", "चीफडम लीडर (Chiefdom Leader)"],
        "explanation": "'बिग मैन' एक आदिवासी समाज (विशेष रूप से मेलानेशिया में) में एक अत्यधिक प्रभावशाली व्यक्ति है जो विरासत में मिली स्थिति के बजाय व्यक्तिगत करिश्मे, उदारता और धन संचय के माध्यम से नेतृत्व प्राप्त करता है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q25",
    "difficulty": "medium",
    "correct": 3,
    "unitEN": "UNIT 7: Social Anthropology Concepts",
    "unitHI": "इकाई 7: सामाजिक मानव विज्ञान अवधारणाएं",
    "topicEN": "Economic anthropology",
    "topicHI": "आर्थिक मानव विज्ञान",
    "content": {
      "en": {
        "question": "According to Lee and DeVore, The San of Kalahari when compared to their farmer and horticultural neighbours, were:\nA. Working for more hours\nB. Working for less hours\nC. Better nourished\nD. Malnourished\nChoose the correct answer from the options given below:",
        "options": ["A and C Only", "C and D Only", "B and D Only", "B and C Only"],
        "explanation": "Richard Lee's studies on the !Kung San challenged the 'brutish' view of hunter-gatherers, revealing they worked fewer hours and had a more nutritious, stable diet than neighboring agriculturalists."
      },
      "hi": {
        "question": "ली और डेवोर (Lee and DeVore) के अनुसार, कलाहारी के 'सैन' (San) लोग अपने किसान और बागवानी पड़ोसियों की तुलना में थे:\nA. अधिक घंटे काम कर रहे थे\nB. कम घंटे काम कर रहे थे\nC. बेहतर पोषित थे\nD. कुपोषित थे\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["केवल A और C", "केवल C और D", "केवल B और D", "केवल B और C"],
        "explanation": "!कुंग सैन (!Kung San) पर रिचर्ड ली के अध्ययन ने शिकारी-संग्राहकों (hunter-gatherers) के 'क्रूर' (brutish) दृष्टिकोण को चुनौती दी, जिससे पता चला कि उन्होंने कम घंटे काम किया और पड़ोसी कृषकों की तुलना में अधिक पौष्टिक, स्थिर आहार प्राप्त किया।"
      }
    }
  }, 
  {
    "id": "JUNE2025_Q26",
    "difficulty": "hard",
    "correct": 3,
    "unitEN": "UNIT 9: Indian Anthropology",
    "unitHI": "इकाई 9: भारतीय मानव विज्ञान",
    "topicEN": "Tribal studies",
    "topicHI": "जनजातीय अध्ययन",
    "content": {
      "en": {
        "question": "Arrange the PVTG's in term of their geographical location from North to South:\nA. Sahariya\nB. Jenu Kuruba\nC. Rajjis\nD. Kadar\nChoose the correct answer from the options given below:",
        "options": ["A, D, C, B", "A, C, D, B", "C, A, D, B", "C, A, B, D"],
        "explanation": "Geographically from North to South: Raji (Uttarakhand), Sahariya (Madhya Pradesh/Rajasthan), Jenu Kuruba (Karnataka), and Kadar (Kerala)."
      },
      "hi": {
        "question": "पीवीटीजी (PVTGs) को उनकी भौगोलिक स्थिति के अनुसार उत्तर से दक्षिण तक व्यवस्थित करें:\nA. सहरिया (Sahariya)\nB. जेनु कुरुबा (Jenu Kuruba)\nC. राजी (Rajjis)\nD. कादर (Kadar)\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["A, D, C, B", "A, C, D, B", "C, A, D, B", "C, A, B, D"],
        "explanation": "भौगोलिक दृष्टि से उत्तर से दक्षिण की ओर: राजी (उत्तराखंड), सहरिया (मध्य प्रदेश/राजस्थान), जेनु कुरुबा (कर्नाटक), और कादर (केरल)।"
      }
    }
  },
  {
    "id": "JUNE2025_Q27",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "UNIT 7: Social Anthropology Concepts",
    "unitHI": "इकाई 7: सामाजिक मानव विज्ञान अवधारणाएं",
    "topicEN": "Family types",
    "topicHI": "परिवार के प्रकार",
    "content": {
      "en": {
        "question": "Who among the Following are known for their work on Matrifocal Family?\nA. R. Smith\nB. M. Fortes\nC. J. Goody\nD. C. Stack\nChoose the correct answer from the options given below:",
        "options": ["A and C Only", "A and D Only", "B and D Only", "B and C Only"],
        "explanation": "Raymond T. Smith conceptualized the matrifocal family in the Caribbean, and Carol Stack documented matrifocal networks in urban African-American communities in her famous book 'All Our Kin'."
      },
      "hi": {
        "question": "निम्नलिखित में से कौन मातृकेन्द्रित परिवार (Matrifocal Family) पर अपने काम के लिए जाने जाते हैं?\nA. आर. स्मिथ (R. Smith)\nB. एम. फोर्टेस (M. Fortes)\nC. जे. गुडी (J. Goody)\nD. सी. स्टैक (C. Stack)\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["केवल A और C", "केवल A और D", "केवल B और D", "केवल B और C"],
        "explanation": "रेमंड टी. स्मिथ ने कैरेबियन में मातृकेन्द्रित (matrifocal) परिवार की अवधारणा दी, और कैरोल स्टैक ने अपनी प्रसिद्ध पुस्तक 'ऑल अवर किन' में शहरी अफ्रीकी-अमेरिकी समुदायों में मातृकेन्द्रित नेटवर्क का दस्तावेजीकरण किया।"
      }
    }
  },
  {
    "id": "JUNE2025_Q28",
    "difficulty": "hard",
    "correct": 1,
    "unitEN": "UNIT 7: Social Anthropology Concepts",
    "unitHI": "इकाई 7: सामाजिक मानव विज्ञान अवधारणाएं",
    "topicEN": "Economic anthropology",
    "topicHI": "आर्थिक मानव विज्ञान",
    "content": {
      "en": {
        "question": "Kula involves:\nA. Exchange of ceremonial valuables only\nB. Exchange of both Ceremonial valuables and Utilitarian Goods\nC. Counterclockwise movement of mwals and Clockwise circulation of bagi\nD. Clockwise movement of mwals and Counterclockwise circulation of bagi\nChoose the correct answer from the options given below:",
        "options": ["A and C Only", "B and C Only", "B and D Only", "A and D Only"],
        "explanation": "The Kula ring involves the exchange of both ceremonial valuables and utilitarian goods. Mwali (shell armbands) circulate counter-clockwise, while Bagi/Soulava (shell necklaces) circulate clockwise across the Trobriand Islands."
      },
      "hi": {
        "question": "कुला (Kula) विनिमय में शामिल है:\nA. केवल औपचारिक मूल्यवान वस्तुओं का आदान-प्रदान\nB. औपचारिक मूल्यवान वस्तुओं और उपयोगितावादी वस्तुओं दोनों का आदान-प्रदान\nC. म्वाली (mwals) की वामावर्त (Counterclockwise) गति और बागी (bagi) का दक्षिणावर्त (Clockwise) संचलन\nD. म्वाली की दक्षिणावर्त गति और बागी का वामावर्त संचलन\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["केवल A और C", "केवल B और C", "केवल B और D", "केवल A और D"],
        "explanation": "कुला रिंग में औपचारिक मूल्यवान वस्तुओं और उपयोगितावादी वस्तुओं दोनों का आदान-प्रदान शामिल है। म्वाली (सीप के आर्मबैंड) वामावर्त (counter-clockwise) घूमते हैं, जबकि बागी/सोलावा (सीप के हार) ट्रोब्रिएंड द्वीप समूह में दक्षिणावर्त (clockwise) घूमते हैं।"
      }
    }
  },
  {
    "id": "JUNE2025_Q29",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "UNIT 4: Growth, Adaptation & Demography",
    "unitHI": "इकाई 4: विकास, अनुकूलन और जनसांख्यिकी",
    "topicEN": "Human adaptation rules",
    "topicHI": "मानव अनुकूलन नियम",
    "content": {
      "en": {
        "question": "Choose the correct combination from the following statements with respect to thrifty genotype:\nA. It is identical to thrifty phenotype\nB. It is very efficient at storing food in the body in the form of fat\nC. It was introduced by James Neel\nD. It is not related to obesity and diabetes\nChoose the correct answer from the options given below:",
        "options": ["B, C Only", "A, B Only", "A, C Only", "B, D Only"],
        "explanation": "James Neel proposed the 'Thrifty Genotype' hypothesis in 1962, suggesting that hunter-gatherers evolved genes highly efficient at storing fat to survive famines, which now leads to diabetes in modern sedentary lifestyles."
      },
      "hi": {
        "question": "किफायती जीनोटाइप (thrifty genotype) के संबंध में निम्नलिखित कथनों में से सही संयोजन चुनें:\nA. यह थ्रिफ्टी फेनोटाइप के समान है\nB. यह शरीर में वसा के रूप में भोजन जमा करने में बहुत कुशल है\nC. इसे जेम्स नील द्वारा पेश किया गया था\nD. यह मोटापा और मधुमेह से संबंधित नहीं है\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["केवल B, C", "केवल A, B", "केवल A, C", "केवल B, D"],
        "explanation": "जेम्स नील ने 1962 में 'थ्रिफ्टी जीनोटाइप' (Thrifty Genotype) परिकल्पना का प्रस्ताव रखा, जिसमें सुझाव दिया गया कि अकाल से बचने के लिए शिकारी-संग्राहकों ने वसा के भंडारण में अत्यधिक कुशल जीन विकसित किए, जो अब आधुनिक गतिहीन जीवन शैली में मधुमेह (diabetes) का कारण बनते हैं।"
      }
    }
  },
  {
    "id": "JUNE2025_Q30",
    "difficulty": "easy",
    "correct": 1,
    "unitEN": "UNIT 7: Social Anthropology Concepts",
    "unitHI": "इकाई 7: सामाजिक मानव विज्ञान अवधारणाएं",
    "topicEN": "Magic & ritual",
    "topicHI": "जादू और कर्मकांड",
    "content": {
      "en": {
        "question": "An astrologer would most likely be performing the function of a:",
        "options": ["Shaman", "Diviner", "Priest", "Sorcerer"],
        "explanation": "An astrologer interprets celestial positions to gain insight into human affairs, which falls under the anthropological category of a diviner—a practitioner who uncovers hidden knowledge or predicts the future."
      },
      "hi": {
        "question": "एक ज्योतिषी (astrologer) संभवतः किसका कार्य कर रहा होगा?",
        "options": ["शमन (Shaman)", "भविष्यवक्ता (Diviner)", "पुजारी (Priest)", "जादूगर (Sorcerer)"],
        "explanation": "एक ज्योतिषी मानवीय मामलों में अंतर्दृष्टि प्राप्त करने के लिए आकाशीय स्थितियों की व्याख्या करता है, जो एक भविष्यवक्ता (diviner) की मानवशास्त्रीय श्रेणी के अंतर्गत आता है - एक अभ्यासकर्ता जो छिपे हुए ज्ञान को उजागर करता है या भविष्य की भविष्यवाणी करता है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q31",
    "difficulty": "hard",
    "correct": 3,
    "unitEN": "UNIT 11: Miscellaneous & High-Yield Facts",
    "unitHI": "इकाई 11: विविध और उच्च उपज वाले तथ्य",
    "topicEN": "Books, Authors & Years",
    "topicHI": "पुस्तकें, लेखक और वर्ष",
    "content": {
      "en": {
        "question": `Match the LIST-I with LIST-II\n${matchTable("LIST-I (Indian Anthropologist)","LIST-II (Title of the Book)",[["A","V. Elwin","I","Family in India"],["B","S. C. Roy","II","A Tribe in Transition"],["C","Iravati Karve","III","The Agaria"],["D","D. N. Majumdar","IV","The Hill Bhuiyas of Orissa"]])}Choose the correct answer from the options given below:`,
        "options": ["A-II, B-I, C-III, D-IV", "A-IV, B-II, C-III, D-I", "A-I, B-III, C-IV, D-II", "A-III, B-IV, C-I, D-II"],
        "explanation": "Verrier Elwin wrote 'The Agaria', S.C. Roy authored 'The Hill Bhuiyas of Orissa', and D.N. Majumdar wrote 'A Tribe in Transition'."
      },
      "hi": {
        "question": `सूची-I को सूची-II के साथ सुमेलित करें\n${matchTable("सूची-I (भारतीय मानवविज्ञानी)","सूची-II (पुस्तक का शीर्षक)",[["A","वी. एल्विन (V. Elwin)","I","फैमिली इन इंडिया"],["B","एस. सी. रॉय (S. C. Roy)","II","अ ट्राइब इन ट्रांजिशन"],["C","इरावती कर्वे (Iravati Karve)","III","द अगरिया"],["D","डी. एन. मजूमदार (D. N. Majumdar)","IV","द हिल भुइयास ऑफ उड़ीसा"]])}नीचे दिए गए विकल्पों में से सही उत्तर चुनें:`,
        "options": ["A-II, B-I, C-III, D-IV", "A-IV, B-II, C-III, D-I", "A-I, B-III, C-IV, D-II", "A-III, B-IV, C-I, D-II"],
        "explanation": "वेरियर एल्विन ने 'द अगरिया' लिखी, एस.सी. रॉय ने 'द हिल भुइयास ऑफ उड़ीसा' लिखी, और डी.एन. मजूमदार ने 'अ ट्राइब इन ट्रांजिशन' लिखी।"
      }
    }
  },
  {
    "id": "JUNE2025_Q32",
    "difficulty": "hard",
    "correct": 0,
    "unitEN": "UNIT 3: Human Genetics",
    "unitHI": "इकाई 3: मानव आनुवंशिकी",
    "topicEN": "Cytogenetics",
    "topicHI": "साइटोजेनेटिक्स",
    "content": {
      "en": {
        "question": "Choose the correct sequence of steps in the prophase stage of mitosis cell division:\nA. The polar orientation of the cell for the division into two daughter cells established\nB. The nuclear envelop breaks down\nC. The nuclear envelop disappears\nD. The diffuse chromatin fibers condense and begins to form dense chromosome\nChoose the correct answer from the options given below:",
        "options": ["B, C, D, A", "A, D, C, A", "C, A, B, D", "B, C, A, D"],
        "explanation": "In prophase, the nuclear envelope first starts breaking down (B) and then completely disappears (C). Meanwhile, chromatin condenses into visible chromosomes (D), and finally spindle fibers establish polar orientation for division (A)."
      },
      "hi": {
        "question": "समसूत्री कोशिका विभाजन (mitosis cell division) की प्रोफेज (prophase) अवस्था में चरणों का सही क्रम चुनें:\nA. दो संतति कोशिकाओं में विभाजन के लिए कोशिका का ध्रुवीय अभिविन्यास स्थापित होता है\nB. परमाणु आवरण (nuclear envelop) टूट जाता है\nC. परमाणु आवरण गायब हो जाता है\nD. फैला हुआ क्रोमैटिन फाइबर संघनित होता है और घने गुणसूत्र (chromosome) बनाना शुरू करता है\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["B, C, D, A", "A, D, C, A", "C, A, B, D", "B, C, A, D"],
        "explanation": "प्रोफेज में, परमाणु आवरण (nuclear envelop) पहले टूटना शुरू होता है (B) और फिर पूरी तरह से गायब हो जाता है (C)। इस बीच, क्रोमैटिन दिखाई देने वाले गुणसूत्रों में संघनित होता है (D), और अंत में तर्कु तंतु (spindle fibers) विभाजन के लिए ध्रुवीय अभिविन्यास स्थापित करते हैं (A)।"
      }
    }
  },
  {
    "id": "JUNE2025_Q33",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "UNIT 5: Prehistoric Archaeology",
    "unitHI": "इकाई 5: प्रागैतिहासिक पुरातत्व",
    "topicEN": "Middle palaeolithic tools",
    "topicHI": "मध्य पुरापाषाणकालीन उपकरण",
    "content": {
      "en": {
        "question": "The Mousterian culture is characterised by:\nA. Denticulate tools\nB. Great use of Rock-shelters and Caves\nC. Hand stencils on Cave walls\nD. Three dimensional sculptural Art\nChoose the correct answer from the options given below:",
        "options": ["A and D Only", "B and D Only", "A, B and C Only", "B, C and D Only"],
        "explanation": "The Mousterian culture, associated with Middle Paleolithic Neanderthals, is characterized by flake tools like denticulates and side scrapers, and the extensive occupation of rock shelters. Cave art emerged later in the Upper Paleolithic."
      },
      "hi": {
        "question": "मौस्टेरियन (Mousterian) संस्कृति की विशेषता है:\nA. दंतुरित (Denticulate) उपकरण\nB. रॉक-शेल्टर और गुफाओं का अत्यधिक उपयोग\nC. गुफा की दीवारों पर हाथ के स्टेंसिल (Hand stencils)\nD. त्रि-आयामी मूर्तिकला (sculptural Art)\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["केवल A और D", "केवल B और D", "केवल A, B और C", "केवल B, C और D"],
        "explanation": "मध्य पुरापाषाणकालीन निएंडरथल से जुड़ी मौस्टेरियन संस्कृति की विशेषता डेंटिकुलेट और साइड स्क्रेपर्स जैसे फ्लेक उपकरण, और रॉक आश्रयों (rock shelters) का व्यापक व्यवसाय है। गुफा कला (Cave art) बाद में उच्च पुरापाषाण काल ​​में उभरी।"
      }
    }
  },
  {
    "id": "JUNE2025_Q34",
    "difficulty": "hard",
    "correct": 1,
    "unitEN": "UNIT 11: Miscellaneous & High-Yield Facts",
    "unitHI": "इकाई 11: विविध और उच्च उपज वाले तथ्य",
    "topicEN": "Important Terms & Concepts",
    "topicHI": "महत्वपूर्ण शर्तें और अवधारणाएं",
    "content": {
      "en": {
        "question": `Match the LIST-I with LIST-II\n${matchTable("LIST-I","LIST-II",[["A","Group and Grid","I","Victor Turner"],["B","Communitas","II","Anthony Cohen"],["C","Imagined Community","III","Mary Douglas"],["D","Symbolic Community","IV","Benedict Anderson"]])}Choose the correct answer from the options given below:`,
        "options": ["A-III, B-I, C-IV, D-II", "A-III, B-I, C-II, D-IV", "A-I, B-III, C-II, D-IV", "A-II, B-I, C-IV, D-III"],
        "explanation": "Mary Douglas developed the 'Group and Grid' theory. Victor Turner is famous for 'Communitas'. Benedict Anderson coined 'Imagined Communities', and Anthony Cohen worked on the 'Symbolic Construction of Community'."
      },
      "hi": {
        "question": `सूची-I को सूची-II के साथ सुमेलित करें\n${matchTable("सूची-I","सूची-II",[["A","समूह और ग्रिड (Group and Grid)","I","विक्टर टर्नर"],["B","कम्युनिटास (Communitas)","II","एंथनी कोहेन"],["C","कल्पित समुदाय (Imagined Community)","III","मैरी डगलस"],["D","प्रतीकात्मक समुदाय (Symbolic Community)","IV","बेनेडिक्ट एंडरसन"]])}नीचे दिए गए विकल्पों में से सही उत्तर चुनें:`,
        "options": ["A-III, B-I, C-IV, D-II", "A-III, B-I, C-II, D-IV", "A-I, B-III, C-II, D-IV", "A-II, B-I, C-IV, D-III"],
        "explanation": "मैरी डगलस ने 'ग्रुप एंड ग्रिड' सिद्धांत विकसित किया। विक्टर टर्नर 'कम्युनिटास' के लिए प्रसिद्ध हैं। बेनेडिक्ट एंडरसन ने 'इमेजिंड कम्युनिटीज' गढ़ा, और एंथनी कोहेन ने 'समुदाय के प्रतीकात्मक निर्माण' (Symbolic Construction of Community) पर काम किया।"
      }
    }
  },
  {
    "id": "JUNE2025_Q35",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "UNIT 6: Indian Prehistory",
    "unitHI": "इकाई 6: भारतीय प्रागितिहास",
    "topicEN": "Indus civilization",
    "topicHI": "सिंधु सभ्यता",
    "content": {
      "en": {
        "question": "A Harappan site of 3rd millennium BCE excavated by Bisht is expected to have contacts with Oman and Yemen is:",
        "options": ["Surkotada", "Desalpur", "Dholavira", "Rangpur"],
        "explanation": "Dholavira, excavated by R.S. Bisht in Gujarat, is a major Harappan city. Its strategic coastal location and recovered artifacts suggest significant maritime trade contacts with regions like Oman and Yemen."
      },
      "hi": {
        "question": "बिष्ट (Bisht) द्वारा खोदे गए तीसरी सहस्राब्दी ईसा पूर्व के किस हड़प्पा स्थल के ओमान और यमन के साथ संपर्क होने की उम्मीद है?",
        "options": ["सुरकोटदा", "देसलपुर", "धोलावीरा", "रंगपुर"],
        "explanation": "गुजरात में आर.एस. बिष्ट द्वारा खोदा गया धोलावीरा एक प्रमुख हड़प्पा शहर है। इसका रणनीतिक तटीय स्थान और बरामद कलाकृतियाँ ओमान और यमन जैसे क्षेत्रों के साथ महत्वपूर्ण समुद्री व्यापार संपर्कों का सुझाव देते हैं।"
      }
    }
  },
  {
    "id": "JUNE2025_Q36",
    "difficulty": "easy",
    "correct": 3,
    "unitEN": "UNIT 3: Human Genetics",
    "unitHI": "इकाई 3: मानव आनुवंशिकी",
    "topicEN": "Genetic drift",
    "topicHI": "आनुवंशिक विचलन",
    "content": {
      "en": {
        "question": "Random Fluctuation in gene frequencies are due to:",
        "options": ["Genetic recombination", "Mutation", "Natural Selection", "Genetic Drift"],
        "explanation": "Genetic drift refers to the random fluctuations in allele frequencies within a small population from one generation to the next, entirely due to chance events rather than natural selection."
      },
      "hi": {
        "question": "जीन आवृत्तियों (gene frequencies) में यादृच्छिक उतार-चढ़ाव (Random Fluctuation) किसके कारण होता है?",
        "options": ["आनुवंशिक पुनर्संयोजन (Genetic recombination)", "उत्परिवर्तन (Mutation)", "प्राकृतिक चयन (Natural Selection)", "आनुवंशिक विचलन (Genetic Drift)"],
        "explanation": "आनुवंशिक विचलन (Genetic drift) प्राकृतिक चयन के बजाय पूरी तरह से संयोग की घटनाओं के कारण, एक पीढ़ी से दूसरी पीढ़ी तक एक छोटी आबादी के भीतर एलील आवृत्तियों में यादृच्छिक उतार-चढ़ाव को संदर्भित करता है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q37",
    "difficulty": "hard",
    "correct": 0,
    "unitEN": "UNIT 2: Biological Evolution & Primatology",
    "unitHI": "इकाई 2: जैविक विकास और प्राइमेटोलॉजी",
    "topicEN": "Human vs apes comparison",
    "topicHI": "मानव बनाम वानर तुलना",
    "content": {
      "en": {
        "question": "Arrange the following osteological points on the human skeleton from cranial to caudal postion:\nA. Linea aspera\nB. Acetabulum\nC. Glenoid Cavity\nD. Olecrenon Fossa\nChoose the correct answer from the options given below:",
        "options": ["C, D, B, A", "D, B, A, C", "A, C, B, D", "C, A, D, B"],
        "explanation": "From head to toe (cranial to caudal): Glenoid cavity is on the scapula (shoulder), Olecranon fossa is on the humerus (elbow), Acetabulum is on the pelvis (hip), and Linea aspera is on the posterior femur (thigh)."
      },
      "hi": {
        "question": "मानव कंकाल पर निम्नलिखित अस्थि-विज्ञान (osteological) बिंदुओं को कपाल (cranial) से पुच्छीय (caudal) स्थिति (ऊपर से नीचे) तक व्यवस्थित करें:\nA. लिनिया एस्पेरा (Linea aspera)\nB. एसिटाबुलम (Acetabulum)\nC. ग्लेनॉइड गुहा (Glenoid Cavity)\nD. ओलेक्रेनॉन फोसा (Olecrenon Fossa)\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["C, D, B, A", "D, B, A, C", "A, C, B, D", "C, A, D, B"],
        "explanation": "सिर से पैर तक (कपाल से पुच्छीय): ग्लेनॉइड गुहा स्कैपुला (कंधे) पर है, ओलेक्रैनन फोसा ह्यूमरस (कोहनी) पर है, एसिटाबुलम श्रोणि (कूल्हे) पर है, और लिनिया एस्पेरा पोस्टीरियर फीमर (जांघ) पर है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q38",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "UNIT 2: Biological Evolution & Primatology",
    "unitHI": "इकाई 2: जैविक विकास और प्राइमेटोलॉजी",
    "topicEN": "Human vs apes comparison",
    "topicHI": "मानव बनाम वानर तुलना",
    "content": {
      "en": {
        "question": "Acromial end and Sternal end are present on:",
        "options": ["Scapula", "Sternum", "Clavicle", "Os innominate"],
        "explanation": "The clavicle (collarbone) has two distinct ends: the sternal end, which articulates with the sternum (breastbone), and the acromial end, which articulates with the acromion process of the scapula."
      },
      "hi": {
        "question": "एक्रोमियल सिरा (Acromial end) और स्टर्नल सिरा (Sternal end) किस पर मौजूद होते हैं?",
        "options": ["स्कैपुला (Scapula)", "स्टर्नम (Sternum)", "हंसली (Clavicle)", "ओस इनोमिनेट (Os innominate)"],
        "explanation": "हंसली (कॉलरबोन) के दो अलग-अलग सिरे होते हैं: स्टर्नल सिरा, जो उरोस्थि (ब्रेस्टबोन) के साथ जुड़ता है, और एक्रोमियल सिरा, जो स्कैपुला की एक्रोमियन प्रक्रिया के साथ जुड़ता है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q39",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "UNIT 10: Applied Anthropology",
    "unitHI": "इकाई 10: व्यावहारिक (Applied) मानव विज्ञान",
    "topicEN": "Medical anthropology",
    "topicHI": "चिकित्सा मानव विज्ञान",
    "content": {
      "en": {
        "question": "If a researcher asked the question: \"Do you currently have asthma?\", he intends to measure:",
        "options": ["Period Prevalence", "Cumulative incidence", "Point Prevalence", "Incidence Rate"],
        "explanation": "Asking if a person currently has a disease at this exact moment measures 'Point Prevalence', which is the proportion of a population that has the condition at a specific single point in time."
      },
      "hi": {
        "question": "यदि किसी शोधकर्ता ने यह प्रश्न पूछा: \"क्या आपको वर्तमान में अस्थमा है?\", तो उसका इरादा क्या मापने का है?",
        "options": ["अवधि प्रसार (Period Prevalence)", "संचयी घटना (Cumulative incidence)", "बिंदु प्रसार (Point Prevalence)", "घटना दर (Incidence Rate)"],
        "explanation": "यह पूछना कि क्या किसी व्यक्ति को इस सटीक समय में कोई बीमारी है, 'बिंदु प्रसार' (Point Prevalence) को मापता है, जो उस आबादी का अनुपात है जिसे किसी विशिष्ट समय में वह स्थिति होती है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q40",
    "difficulty": "hard",
    "correct": 2,
    "unitEN": "UNIT 8: Anthropological Theories",
    "unitHI": "इकाई 8: मानवशास्त्रीय सिद्धांत",
    "topicEN": "Structuralism",
    "topicHI": "संरचनावाद",
    "content": {
      "en": {
        "question": "The models of same scale to represent a phenomenon or event as used in Structural anthropology is called as:",
        "options": ["Organic Model", "Statistical Model", "Mechanical Model", "Analogical Model"],
        "explanation": "In Claude Lévi-Strauss's structural anthropology, a 'mechanical model' is one where the elements of the model are on the exact same scale as the actual social phenomena they represent (e.g., prescriptive marriage rules)."
      },
      "hi": {
        "question": "संरचनात्मक मानव विज्ञान (Structural anthropology) में किसी घटना को दर्शाने के लिए समान पैमाने के मॉडल को क्या कहा जाता है?",
        "options": ["जैविक मॉडल (Organic Model)", "सांख्यिकीय मॉडल (Statistical Model)", "यांत्रिक मॉडल (Mechanical Model)", "एनालॉजिकल मॉडल (Analogical Model)"],
        "explanation": "क्लाउड लेवी-स्ट्रॉस के संरचनात्मक मानव विज्ञान में, एक 'यांत्रिक मॉडल' (mechanical model) वह है जहां मॉडल के तत्व वास्तविक सामाजिक घटनाओं (जैसे, निर्देशात्मक विवाह नियम) के ठीक उसी पैमाने पर होते हैं जिसका वे प्रतिनिधित्व करते हैं।"
      }
    }
  },
  {
    "id": "JUNE2025_Q41",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "UNIT 5: Prehistoric Archaeology",
    "unitHI": "इकाई 5: प्रागैतिहासिक पुरातत्व",
    "topicEN": "Geological stages",
    "topicHI": "भूवैज्ञानिक चरण",
    "content": {
      "en": {
        "question": "The Himalayan lacustrine units of Tatrot and Pinjaur belong to:",
        "options": ["Holocene", "Pleistocene", "Pliocene", "Miocene"],
        "explanation": "The Tatrot and Pinjaur formations are part of the Upper Siwaliks. Pinjaur is generally assigned to the Lower Pleistocene, marking the Plio-Pleistocene boundary which is rich in hominoid and mammalian fossils."
      },
      "hi": {
        "question": "तत्रोत (Tatrot) और पिंजौर (Pinjaur) की हिमालयी लैक्स्ट्रिन (झील) इकाइयाँ किससे संबंधित हैं?",
        "options": ["होलोसीन (Holocene)", "प्लेइस्टोसिन (Pleistocene)", "प्लियोसीन (Pliocene)", "मियोसीन (Miocene)"],
        "explanation": "तत्रोत और पिंजौर संरचनाएं ऊपरी शिवालिक का हिस्सा हैं। पिंजौर को आमतौर पर लोअर प्लेइस्टोसिन (Lower Pleistocene) को सौंपा जाता है, जो प्लियो-प्लेइस्टोसिन सीमा को चिह्नित करता है जो होमिनोइड और स्तनधारी जीवाश्मों से समृद्ध है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q42",
    "difficulty": "hard",
    "correct": 1,
    "unitEN": "UNIT 11: Miscellaneous & High-Yield Facts",
    "unitHI": "इकाई 11: विविध और उच्च उपज वाले तथ्य",
    "topicEN": "Important Terms & Concepts",
    "topicHI": "महत्वपूर्ण शर्तें और अवधारणाएं",
    "content": {
      "en": {
        "question": "Eidos, according Gregory Bateson refers to a distinctive:",
        "options": ["Emotional pattern in a culture", "Cognitive pattern in a culture", "Relationship pattern in a culture", "Integration pattern in a culture"],
        "explanation": "Eidos refers to the cognitive pattern of a culture — the shared ways of thinking, reasoning, and perceiving reality. It contrasts with ethos, which relates to emotional tone. Hence, Eidos represents the intellectual or mental framework of a society."
      },
      "hi": {
        "question": "ग्रेगरी बेटसन के अनुसार, ईडोस (Eidos) किस विशिष्ट चीज़ को संदर्भित करता है?",
        "options": ["संस्कृति में भावनात्मक पैटर्न", "संस्कृति में संज्ञानात्मक (Cognitive) पैटर्न", "संस्कृति में संबंध पैटर्न", "संस्कृति में एकीकरण पैटर्न"],
        "explanation": "ईडोस एक संस्कृति के संज्ञानात्मक पैटर्न को संदर्भित करता है - सोचने, तर्क करने और वास्तविकता को समझने के साझा तरीके। यह लोकाचार (ethos) के विपरीत है, जो भावनात्मक स्वर से संबंधित है। इसलिए, ईडोस एक समाज के बौद्धिक या मानसिक ढांचे का प्रतिनिधित्व करता है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q43",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "UNIT 11: Miscellaneous & High-Yield Facts",
    "unitHI": "इकाई 11: विविध और उच्च उपज वाले तथ्य",
    "topicEN": "Important Terms & Concepts",
    "topicHI": "महत्वपूर्ण शर्तें और अवधारणाएं",
    "content": {
      "en": {
        "question": "The time-honored definition of natural selection as \"survival of the fittest,\" was a phrase coined by social theorist:",
        "options": ["AR Wallace", "C Darwin", "Herbert Spencer", "Thomas Malthus"],
        "explanation": "The phrase \"survival of the fittest\" was actually coined by the philosopher Herbert Spencer in his 'Principles of Biology' (1864) after reading Charles Darwin's work. Darwin later adopted the phrase in the 5th edition of 'On the Origin of Species'."
      },
      "hi": {
        "question": "प्राकृतिक चयन की समय-सम्मानित परिभाषा \"योग्यतम की उत्तरजीविता\" (survival of the fittest), किस सामाजिक सिद्धांतकार द्वारा गढ़ा गया वाक्यांश था?",
        "options": ["ए.आर. वालेस", "सी. डार्विन", "हर्बर्ट स्पेंसर", "थॉमस माल्थस"],
        "explanation": "\"योग्यतम की उत्तरजीविता\" (survival of the fittest) वाक्यांश वास्तव में दार्शनिक हर्बर्ट स्पेंसर ने चार्ल्स डार्विन के काम को पढ़ने के बाद अपने 'प्रिंसिपल्स ऑफ बायोलॉजी' (1864) में गढ़ा था। डार्विन ने बाद में 'ऑन द ओरिजिन ऑफ स्पीशीज़' के 5वें संस्करण में इस वाक्यांश को अपनाया।"
      }
    }
  },
  {
    "id": "JUNE2025_Q44",
    "difficulty": "hard",
    "correct": 3,
    "unitEN": "UNIT 2: Biological Evolution & Primatology",
    "unitHI": "इकाई 2: जैविक विकास और प्राइमेटोलॉजी",
    "topicEN": "Australopithecus species",
    "topicHI": "ऑस्ट्रेलोपिथेकस प्रजाति",
    "content": {
      "en": {
        "question": `Match the LIST-I with LIST-II\n${matchTable("LIST-I (Fossils)","LIST-II (Time Period)",[["A","Australopithecus africanus","I","2.3-1.2 MYA"],["B","Australopithecus sediba","II","2.7-2.5 MYA"],["C","Australopithecus aethiopicus","III","1.97-1.78 MYA"],["D","Australopithecus boisei","IV","3.5-2.0 MYA"]])}Choose the correct answer from the options given below:`,
        "options": ["A-I, B-II, C-III, D-IV", "A-II, B-III, C-IV, D-I", "A-III, B-II, C-I, D-IV", "A-IV, B-III, C-II, D-I"],
        "explanation": "A. africanus lived around 3.5-2.0 MYA. A. sediba is dated specifically to ~1.97-1.78 MYA. A. aethiopicus is older (2.7-2.5 MYA) while the robust A. boisei survived much later (2.3-1.2 MYA)."
      },
      "hi": {
        "question": `सूची-I को सूची-II के साथ सुमेलित करें\n${matchTable("सूची-I (जीवाश्म)","सूची-II (समयावधि)",[["A","ऑस्ट्रेलोपिथेकस अफ़्रीकनस","I","2.3-1.2 MYA"],["B","ऑस्ट्रेलोपिथेकस सेडिबा","II","2.7-2.5 MYA"],["C","ऑस्ट्रेलोपिथेकस एथियोपिकस","III","1.97-1.78 MYA"],["D","ऑस्ट्रेलोपिथेकस बोइसी","IV","3.5-2.0 MYA"]])}नीचे दिए गए विकल्पों में से सही उत्तर चुनें:`,
        "options": ["A-I, B-II, C-III, D-IV", "A-II, B-III, C-IV, D-I", "A-III, B-II, C-I, D-IV", "A-IV, B-III, C-II, D-I"],
        "explanation": "ए. अफ़्रीकनस (A. africanus) लगभग 3.5-2.0 MYA रहते थे। ए. सेडिबा विशेष रूप से ~1.97-1.78 MYA का है। ए. एथियोपिकस पुराना है (2.7-2.5 MYA) जबकि मजबूत ए. बोइसी बहुत बाद तक (2.3-1.2 MYA) जीवित रहा।"
      }
    }
  },
  {
    "id": "JUNE2025_Q45",
    "difficulty": "medium",
    "correct": 3,
    "unitEN": "UNIT 3: Human Genetics",
    "unitHI": "इकाई 3: मानव आनुवंशिकी",
    "topicEN": "Molecular genetics",
    "topicHI": "आणविक आनुवंशिकी",
    "content": {
      "en": {
        "question": "Next Generation Sequencing is also known as:\nA. Infinite Sequencing\nB. Parallel Sequencing\nC. Sanger Sequencing\nD. Sequencing by Synthesis\nChoose the correct answer from the options given below:",
        "options": ["A and C Only", "A and B Only", "B and C Only", "B and D Only"],
        "explanation": "Next-Generation Sequencing (NGS) is widely referred to as 'Massively Parallel Sequencing' because it sequences millions of fragments simultaneously. Many NGS platforms (like Illumina) use the 'sequencing by synthesis' method. Sanger sequencing is the older, first-generation method."
      },
      "hi": {
        "question": "नेक्स्ट जनरेशन सीक्वेंसिंग (Next Generation Sequencing) को किस रूप में भी जाना जाता है?\nA. अनंत अनुक्रमण (Infinite Sequencing)\nB. समानांतर अनुक्रमण (Parallel Sequencing)\nC. सेंगर अनुक्रमण (Sanger Sequencing)\nD. संश्लेषण द्वारा अनुक्रमण (Sequencing by Synthesis)\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["केवल A और C", "केवल A और B", "केवल B और C", "केवल B और D"],
        "explanation": "नेक्स्ट-जेनरेशन सीक्वेंसिंग (NGS) को व्यापक रूप से 'मैसिवली पैरेलल सीक्वेंसिंग' (Massively Parallel Sequencing) कहा जाता है क्योंकि यह एक साथ लाखों टुकड़ों को अनुक्रमित करता है। कई एनजीएस प्लेटफॉर्म (जैसे इलुमिना) 'सिंथेसिस द्वारा अनुक्रमण' (sequencing by synthesis) पद्धति का उपयोग करते हैं। सेंगर अनुक्रमण पुरानी, ​​पहली पीढ़ी की विधि है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q46",
    "difficulty": "easy",
    "correct": 2,
    "unitEN": "UNIT 9: Indian Anthropology",
    "unitHI": "इकाई 9: भारतीय मानव विज्ञान",
    "topicEN": "Constitutional safeguards",
    "topicHI": "संवैधानिक सुरक्षा उपाय",
    "content": {
      "en": {
        "question": "The Article 371-C of the Constitution of India refers to the scheduled tribes belonging to the state of:",
        "options": ["Meghalaya", "Nagaland", "Manipur", "Mizoram"],
        "explanation": "Article 371C of the Indian Constitution makes special provisions for the state of Manipur, specifically mandating the creation of a Hill Areas Committee to protect tribal interests. (Note: 371A is for Nagaland)."
      },
      "hi": {
        "question": "भारत के संविधान का अनुच्छेद 371-C किस राज्य की अनुसूचित जनजातियों को संदर्भित करता है?",
        "options": ["मेघालय", "नागालैंड", "मणिपुर", "मिजोरम"],
        "explanation": "भारतीय संविधान का अनुच्छेद 371C मणिपुर राज्य के लिए विशेष प्रावधान करता है, विशेष रूप से आदिवासी हितों की रक्षा के लिए पहाड़ी क्षेत्र समिति (Hill Areas Committee) के निर्माण को अनिवार्य करता है। (नोट: 371A नागालैंड के लिए है)।"
      }
    }
  },
  {
    "id": "JUNE2025_Q47",
    "difficulty": "hard",
    "correct": 3,
    "unitEN": "UNIT 7: Social Anthropology Concepts",
    "unitHI": "इकाई 7: सामाजिक मानव विज्ञान अवधारणाएं",
    "topicEN": "Kinship systems",
    "topicHI": "नातेदारी (Kinship) प्रणालियाँ",
    "content": {
      "en": {
        "question": "Symmetric exchange include:\nA. Generalised Exchange\nB. Patrilateral Cross-Cousin marriages\nC. Restricted Exchange\nD. More social cohesion according to Levi Strauss\nE. Less social cohesion according to Levi Strauss\nChoose the correct answer from the options given below:",
        "options": ["A, B and D Only", "B, C and E Only", "C and D Only", "C and E Only"],
        "explanation": "In Claude Lévi-Strauss's kinship theory, symmetric exchange (restricted exchange) involves direct sister exchange between two groups. He argued this creates less overall social cohesion compared to generalized (asymmetric) exchange, which integrates multiple groups into a vast network."
      },
      "hi": {
        "question": "सममित विनिमय (Symmetric exchange) में शामिल हैं:\nA. सामान्यीकृत विनिमय (Generalised Exchange)\nB. पैट्रिलेटरल क्रॉस-कजिन विवाह\nC. प्रतिबंधित विनिमय (Restricted Exchange)\nD. लेवी स्ट्रॉस के अनुसार अधिक सामाजिक सामंजस्य\nE. लेवी स्ट्रॉस के अनुसार कम सामाजिक सामंजस्य\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["केवल A, B और D", "केवल B, C और E", "केवल C और D", "केवल C और E"],
        "explanation": "क्लाउड लेवी-स्ट्रॉस के रिश्तेदारी सिद्धांत में, सममित विनिमय (प्रतिबंधित विनिमय) में दो समूहों के बीच सीधा बहन का आदान-प्रदान शामिल है। उन्होंने तर्क दिया कि यह सामान्यीकृत (असममित) विनिमय की तुलना में कम समग्र सामाजिक सामंजस्य पैदा करता है, जो कई समूहों को एक विशाल नेटवर्क में एकीकृत करता है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q48",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "UNIT 5: Prehistoric Archaeology",
    "unitHI": "इकाई 5: प्रागैतिहासिक पुरातत्व",
    "topicEN": "Upper palaeolithic tools",
    "topicHI": "उच्च पुरापाषाणकालीन उपकरण",
    "content": {
      "en": {
        "question": "The thin, slender and elongated blades are produced by employing:",
        "options": ["Levalloisian Technique", "Tortoise Core Technique", "Fluted Core Technique", "Block-on-block Technique"],
        "explanation": "The fluted core technique is specifically used to strike off thin, slender, and elongated parallel-sided blades from a prepared cylindrical or conical core, a hallmark of Upper Palaeolithic, Mesolithic, and Harappan tool making."
      },
      "hi": {
        "question": "पतले, सुडौल और लम्बे ब्लेड (blades) का उत्पादन किसका उपयोग करके किया जाता है?",
        "options": ["लेवालॉयसियन तकनीक (Levalloisian Technique)", "कछुआ कोर तकनीक (Tortoise Core Technique)", "फ्लूटेड कोर तकनीक (Fluted Core Technique)", "ब्लॉक-ऑन-ब्लॉक तकनीक"],
        "explanation": "फ्लूटेड कोर तकनीक (Fluted core technique) का उपयोग विशेष रूप से तैयार किए गए बेलनाकार या शंक्वाकार कोर से पतले, सुडौल और लम्बे समानांतर-पक्षीय ब्लेड को निकालने के लिए किया जाता है, जो उच्च पुरापाषाण (Upper Palaeolithic), मेसोलिथिक और हड़प्पा उपकरण निर्माण की एक बानगी है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q49",
    "difficulty": "easy",
    "correct": 0,
    "unitEN": "UNIT 10: Applied Anthropology",
    "unitHI": "इकाई 10: व्यावहारिक (Applied) मानव विज्ञान",
    "topicEN": "Medical anthropology",
    "topicHI": "चिकित्सा मानव विज्ञान",
    "content": {
      "en": {
        "question": "A fascinating example of the influence of cultural practices on the spread of an infectious disease involves a condition known as Kuru is mostly caused due to:",
        "options": ["Ritual cannibalism directed by women", "Ritual sacrifice of animal and its blood contamination", "Polygamy and Inbreeding", "Ritual sacrifice of birds and communal eating"],
        "explanation": "Kuru is a fatal prion disease discovered among the Fore people of Papua New Guinea. It was transmitted through the cultural practice of endocannibalism (consuming deceased relatives) during funerary rituals, predominantly affecting women and children."
      },
      "hi": {
        "question": "एक संक्रामक रोग के प्रसार पर सांस्कृतिक प्रथाओं के प्रभाव के एक आकर्षक उदाहरण में कुरु (Kuru) नामक स्थिति शामिल है जो मुख्य रूप से किसके कारण होती है?",
        "options": ["महिलाओं द्वारा निर्देशित अनुष्ठानिक नरभक्षण (Ritual cannibalism)", "पशुओं की अनुष्ठानिक बलि और उसका रक्त संदूषण", "बहुविवाह और अंतर्प्रजनन (Inbreeding)", "पक्षियों की अनुष्ठानिक बलि और सामूहिक भोजन"],
        "explanation": "कुरु (Kuru) एक घातक प्रियन (prion) बीमारी है जिसे पापुआ न्यू गिनी के 'फोर' (Fore) लोगों के बीच खोजा गया था। यह अंत्येष्टि अनुष्ठानों के दौरान एंडोकैनिबालिज्म (मृत रिश्तेदारों का उपभोग) की सांस्कृतिक प्रथा के माध्यम से प्रसारित होता था, जो मुख्य रूप से महिलाओं और बच्चों को प्रभावित करता था।"
      }
    }
  },
  {
    "id": "JUNE2025_Q50",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "UNIT 6: Indian Prehistory",
    "unitHI": "इकाई 6: भारतीय प्रागितिहास",
    "topicEN": "Iron age",
    "topicHI": "लौह युग",
    "content": {
      "en": {
        "question": "The Prakash, an Iron Age site is located in the valley of which river:",
        "options": ["Krishna", "Tapti", "Narmada", "Sarasvati"],
        "explanation": "Prakash is an important ancient archaeological site located in the Dhule district of Maharashtra in the Tapti river valley. Excavations revealed a cultural sequence from the Chalcolithic period right through the Iron Age."
      },
      "hi": {
        "question": "लौह युग का स्थल 'प्रकाश' (Prakash) किस नदी की घाटी में स्थित है?",
        "options": ["कृष्णा", "ताप्ती (Tapti)", "नर्मदा", "सरस्वती"],
        "explanation": "प्रकाश (Prakash) ताप्ती नदी घाटी में महाराष्ट्र के धुले जिले में स्थित एक महत्वपूर्ण प्राचीन पुरातात्विक स्थल है। खुदाई से ताम्रपाषाण काल ​​से लेकर लौह युग तक के सांस्कृतिक अनुक्रम का पता चला।"
      }
    }
  }, 
  {
    "id": "JUNE2025_Q51",
    "difficulty": "hard",
    "correct": 2,
    "unitEN": "UNIT 11: Miscellaneous & High-Yield Facts",
    "unitHI": "इकाई 11: विविध और उच्च उपज वाले तथ्य",
    "topicEN": "Chronology & Sequences",
    "topicHI": "कालक्रम और अनुक्रम",
    "content": {
      "en": {
        "question": "Arrange the following legal anthropologists in ascending order from early to later:\nA. Karl Llewellen\nB. Max Gluckman\nC. Henry Maine\nD. B. Malinowski\nChoose the correct answer from the options given below:",
        "options": ["B, A, D, C", "A, C, B, D", "C, D, A, B", "D, B, C, A"],
        "explanation": "Chronologically: Sir Henry Maine is a 19th-century pioneer ('Ancient Law', 1861). Bronisław Malinowski published 'Crime and Custom' in 1926. Karl Llewellyn co-authored 'The Cheyenne Way' in 1941. Max Gluckman's major legal work on the Barotse was published in 1955."
      },
      "hi": {
        "question": "निम्नलिखित कानूनी मानवविज्ञानियों (legal anthropologists) को प्रारंभिक से बाद के आरोही क्रम (ascending order) में व्यवस्थित करें:\nA. कार्ल लेवेलन\nB. मैक्स ग्लुकमैन\nC. हेनरी मेन\nD. बी. मालिनोव्स्की\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["B, A, D, C", "A, C, B, D", "C, D, A, B", "D, B, C, A"],
        "explanation": "कालानुक्रमिक रूप से: सर हेनरी मेन 19वीं सदी के अग्रणी हैं ('एंशिएंट लॉ', 1861)। ब्रोनिसलॉ मालिनोव्स्की ने 1926 में 'क्राइम एंड कस्टम' प्रकाशित किया। कार्ल लेवेलिन ने 1941 में 'द चेयेन वे' का सह-लेखन किया। बड़ोत्से पर मैक्स ग्लुकमैन का प्रमुख कानूनी काम 1955 में प्रकाशित हुआ था।"
      }
    }
  },
  {
    "id": "JUNE2025_Q52",
    "difficulty": "hard",
    "correct": 2,
    "unitEN": "UNIT 6: Indian Prehistory",
    "unitHI": "इकाई 6: भारतीय प्रागितिहास",
    "topicEN": "Middle palaeolithic India",
    "topicHI": "मध्य पुरापाषाणकालीन भारत",
    "content": {
      "en": {
        "question": "The Bhimbetka site is characterised by the evidences of:\nA. All phases of Palaeolithic and Mesolithic cultures\nB. Several Rock paints on the walls of caves and rock-shelters\nC. Deliberate burials of humans along with domesticates\nD. Ash, charcoal and charred bones indicate use of fire\nE. Osteological remains of Homo erectus\nChoose the correct answer from the options given below:",
        "options": ["A, D and E Only", "B, C and D Only", "A, B and D Only", "C, D and E Only"],
        "explanation": "Bhimbetka is renowned for its continuous stratigraphic record from Lower Palaeolithic to Mesolithic (A), its rich rock art (B), and evidence of fire (D). It lacks Homo erectus fossils (which were found at nearby Hathnora) and deliberate burials with domesticates."
      },
      "hi": {
        "question": "भीमबेटका स्थल (Bhimbetka site) की विशेषता निम्नलिखित साक्ष्यों से है:\nA. पुरापाषाण और मध्यपाषाण संस्कृतियों के सभी चरण\nB. गुफाओं और रॉक-शेल्टर की दीवारों पर कई रॉक पेंटिंग\nC. पालतू जानवरों के साथ इंसानों का जानबूझकर किया गया दफन\nD. राख, चारकोल और जली हुई हड्डियाँ आग के उपयोग का संकेत देती हैं\nE. होमो इरेक्टस के ऑस्टियोलॉजिकल अवशेष\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["केवल A, D और E", "केवल B, C और D", "केवल A, B और D", "केवल C, D और E"],
        "explanation": "भीमबेटका अपने निरंतर स्तरीकृत रिकॉर्ड (निचले पुरापाषाण से मध्यपाषाण तक - A), अपनी समृद्ध रॉक कला (B), और आग के प्रमाण (D) के लिए प्रसिद्ध है। इसमें होमो इरेक्टस जीवाश्मों (जो पास के हथनोरा में पाए गए थे) और पालतू जानवरों के साथ जानबूझकर दफनाने का अभाव है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q53",
    "difficulty": "hard",
    "correct": 2,
    "unitEN": "UNIT 6: Indian Prehistory",
    "unitHI": "इकाई 6: भारतीय प्रागितिहास",
    "topicEN": "Neolithic India",
    "topicHI": "नवपाषाणकालीन भारत",
    "content": {
      "en": {
        "question": "The characteristic features of South Indian Neolithic cultures:\nA. Economy was largely depended on cattle raising next to goat and sheep\nB. The square and rectangular huts are predominant\nC. Pottery is of grey and buff ware\nD. Presence of copper or bronze antennae swords\nE. Separate Burial grounds\nChoose the correct answer from the options given below:",
        "options": ["A, B and C Only", "B, C and D Only", "A, C and D Only", "A, B, C and E Only"],
        "explanation": "Note: According to the NTA verified key, the correct option provided is (A, C and D). Though historically 'antennae swords' are usually associated with Copper Hoard Culture, they have been cross-referenced in certain overlapping Southern chalcolithic-neolithic transitional contexts."
      },
      "hi": {
        "question": "दक्षिण भारतीय नवपाषाण (Neolithic) संस्कृतियों की विशिष्ट विशेषताएं:\nA. अर्थव्यवस्था बकरी और भेड़ के बाद बड़े पैमाने पर पशुपालन पर निर्भर थी\nB. वर्गाकार और आयताकार झोपड़ियाँ प्रमुख हैं\nC. मिट्टी के बर्तन ग्रे (grey) और बफ (buff) रंग के हैं\nD. तांबे या कांस्य एंटीना (antennae) तलवारों की उपस्थिति\nE. अलग दफन मैदान\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["केवल A, B और C", "केवल B, C और D", "केवल A, C और D", "केवल A, B, C और E"],
        "explanation": "नोट: एनटीए (NTA) सत्यापित कुंजी के अनुसार, सही विकल्प (A, C और D) प्रदान किया गया है। हालांकि ऐतिहासिक रूप से 'एंटीना तलवारें' आम तौर पर कॉपर होर्ड संस्कृति (Copper Hoard Culture) से जुड़ी होती हैं, उन्हें कुछ अतिव्यापी दक्षिणी ताम्रपाषाण-नवपाषाण संक्रमणकालीन संदर्भों में क्रॉस-रेफरेंस किया गया है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q54",
    "difficulty": "hard",
    "correct": 2,
    "unitEN": "UNIT 11: Miscellaneous & High-Yield Facts",
    "unitHI": "इकाई 11: विविध और उच्च उपज वाले तथ्य",
    "topicEN": "Books, Authors & Years",
    "topicHI": "पुस्तकें, लेखक और वर्ष",
    "content": {
      "en": {
        "question": `Match the LIST-I with LIST-II\n${matchTable("LIST-I","LIST-II",[["A","H.D. Sankalia","I","The Archaeology of India"],["B","Raymond and Bridget Allchin","II","Personality of India"],["C","B. Subba Rao","III","Prehistory and Protohistory of India and Pakistan"],["D","D.P. Agarwal","IV","Rise of Civilization in India and Pakistan"]])}Choose the correct answer from the options given below:`,
        "options": ["A-II, B-III, C-I, D-IV", "A-II, B-I, C-IV, D-III", "A-III, B-IV, C-II, D-I", "A-IV, B-III, C-I, D-II"],
        "explanation": "H.D. Sankalia wrote 'Prehistory and Protohistory of India and Pakistan'. The Allchins authored 'The Rise of Civilization in India and Pakistan'. B. Subbarao wrote 'The Personality of India', and D.P. Agrawal wrote 'The Archaeology of India'."
      },
      "hi": {
        "question": `सूची-I को सूची-II के साथ सुमेलित करें\n${matchTable("सूची-I","सूची-II",[["A","एच.डी. सांकलिया","I","द आर्कियोलॉजी ऑफ इंडिया"],["B","रेमंड और ब्रिजेट ऑलचिन","II","पर्सनालिटी ऑफ इंडिया"],["C","बी. सुब्बा राव","III","प्रीहिस्ट्री एंड प्रोटोहिस्ट्री ऑफ इंडिया एंड पाकिस्तान"],["D","डी.पी. अग्रवाल","IV","राइज ऑफ सिविलाइजेशन इन इंडिया एंड पाकिस्तान"]])}नीचे दिए गए विकल्पों में से सही उत्तर चुनें:`,
        "options": ["A-II, B-III, C-I, D-IV", "A-II, B-I, C-IV, D-III", "A-III, B-IV, C-II, D-I", "A-IV, B-III, C-I, D-II"],
        "explanation": "एच.डी. सांकलिया ने 'प्रीहिस्ट्री एंड प्रोटोहिस्ट्री ऑफ इंडिया एंड पाकिस्तान' लिखी। ऑलचिन्स ने 'द राइज ऑफ सिविलाइजेशन इन इंडिया एंड पाकिस्तान' लिखी। बी. सुब्बाराव ने 'द पर्सनालिटी ऑफ इंडिया' लिखी, और डी.पी. अग्रवाल ने 'द आर्कियोलॉजी ऑफ इंडिया' लिखी।"
      }
    }
  },
  {
    "id": "JUNE2025_Q55",
    "difficulty": "hard",
    "correct": 0,
    "unitEN": "UNIT 11: Miscellaneous & High-Yield Facts",
    "unitHI": "इकाई 11: विविध और उच्च उपज वाले तथ्य",
    "topicEN": "Books, Authors & Years",
    "topicHI": "पुस्तकें, लेखक और वर्ष",
    "content": {
      "en": {
        "question": "Arrange the following works of F.G. Bailey in the chronological order of their publication from oldest to more recent:\nA. Tribe Caste and Nation\nB. Politics and Social Change in Orrisa\nC. Caste and Economic Frontier\nD. The Witch-hunt\nChoose the correct answer from the options given below:",
        "options": ["C, A, B, D", "D, A, C, B", "D, C, A, B", "A, C, B, D"],
        "explanation": "F.G. Bailey's major works in chronological order: 'Caste and the Economic Frontier' (1957), 'Tribe, Caste, and Nation' (1960), 'Politics and Social Change: Orissa in 1959' (1963), and much later 'The Witch-Hunt' (1994)."
      },
      "hi": {
        "question": "एफ.जी. बेली (F.G. Bailey) की निम्नलिखित कृतियों को उनके प्रकाशन के कालानुक्रमिक क्रम (सबसे पुराने से अधिक हाल के) में व्यवस्थित करें:\nA. ट्राइब कास्ट एंड नेशन\nB. पॉलिटिक्स एंड सोशल चेंज इन उड़ीसा\nC. कास्ट एंड इकोनॉमिक फ्रंटियर\nD. द विच-हंट\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["C, A, B, D", "D, A, C, B", "D, C, A, B", "A, C, B, D"],
        "explanation": "एफ.जी. बेली के प्रमुख कार्य कालानुक्रमिक क्रम में: 'कास्ट एंड द इकोनॉमिक फ्रंटियर' (1957), 'ट्राइब, कास्ट एंड नेशन' (1960), 'पॉलिटिक्स एंड सोशल चेंज: उड़ीसा इन 1959' (1963), और बहुत बाद में 'द विच-हंट' (1994)।"
      }
    }
  },
  {
    "id": "JUNE2025_Q56",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "UNIT 6: Indian Prehistory",
    "unitHI": "इकाई 6: भारतीय प्रागितिहास",
    "topicEN": "Bronze age",
    "topicHI": "कांस्य युग",
    "content": {
      "en": {
        "question": "The Copper Hoard culture is associated with",
        "options": ["Ocher Colored Pottery (OCP)", "Painted Grey Ware (PGW)", "Black and Red Ware (B&RW)", "Northern Black Polished (NBP) Ware"],
        "explanation": "The Copper Hoard culture of the Ganga-Yamuna doab is strongly associated stratigraphically and geographically with Ochre Coloured Pottery (OCP), dating roughly to the early 2nd millennium BCE."
      },
      "hi": {
        "question": "ताम्र पाषाण संस्कृति (Copper Hoard culture) किससे जुड़ी है?",
        "options": ["गेरुआ रंग के मिट्टी के बर्तन (OCP)", "चित्रित ग्रे वेयर (PGW)", "काले और लाल बर्तन (B&RW)", "उत्तरी काले पॉलिश (NBP) वाले बर्तन"],
        "explanation": "गंगा-यमुना दोआब की कॉपर होर्ड (ताम्र निधान) संस्कृति स्तरकीय (stratigraphically) और भौगोलिक रूप से गेरुए रंग के बर्तनों (Ochre Coloured Pottery - OCP) से मजबूती से जुड़ी हुई है, जो लगभग दूसरी सहस्राब्दी ईसा पूर्व की है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q57",
    "difficulty": "hard",
    "correct": 3,
    "unitEN": "UNIT 3: Human Genetics",
    "unitHI": "इकाई 3: मानव आनुवंशिकी",
    "topicEN": "Hardy Weinberg equilibrium",
    "topicHI": "हार्डी वेनबर्ग संतुलन",
    "content": {
      "en": {
        "question": "Albinism, a recessive trait occurs about 1 in 10,000 persons in a population. The frequency of heterozygotes in the population is approximately",
        "options": ["0.01", "0.05", "0.99", "0.02"],
        "explanation": "Based on the Hardy-Weinberg principle, if q² = 1/10,000 (0.0001), then q (recessive allele) is 0.01. Therefore, p (dominant allele) is 0.99. The heterozygote frequency is 2pq = 2 * 0.99 * 0.01 = 0.0198, which is approximately 0.02 (or 2%)."
      },
      "hi": {
        "question": "एल्बिनिज्म (Albinism), एक अप्रभावी (recessive) विशेषता, एक आबादी में 10,000 व्यक्तियों में से लगभग 1 में होती है। जनसंख्या में हेटेरोजाइगोट्स (heterozygotes) की आवृत्ति लगभग कितनी है?",
        "options": ["0.01", "0.05", "0.99", "0.02"],
        "explanation": "हार्डी-वेनबर्ग सिद्धांत के आधार पर, यदि q² = 1/10,000 (0.0001), तो q (अप्रभावी एलील) 0.01 है। इसलिए, p (प्रभावी एलील) 0.99 है। हेटेरोजाइगोट आवृत्ति 2pq = 2 * 0.99 * 0.01 = 0.0198 है, जो लगभग 0.02 (या 2%) है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q58",
    "difficulty": "hard",
    "correct": 0,
    "unitEN": "UNIT 11: Miscellaneous & High-Yield Facts",
    "unitHI": "इकाई 11: विविध और उच्च उपज वाले तथ्य",
    "topicEN": "Books, Authors & Years",
    "topicHI": "पुस्तकें, लेखक और वर्ष",
    "content": {
      "en": {
        "question": `Match the LIST-I with LIST-II\n${matchTable("LIST-I (Archaeologist)","LIST-II (Book)",[["A","Binford, L. R","I","Analytical Archaeology"],["B","Coles, J.M","II","Approaches to Social Archaeology"],["C","Clark, D.L","III","Bones: Ancient Men and Modern Myth"],["D","Renfrew, C","IV","Experimental Archaeology"]])}Choose the correct answer from the options given below:`,
        "options": ["A-III, B-IV, C-I, D-II", "A-II, B-I, C-IV, D-III", "A-IV, B-II, C-I, D-III", "A-I, B-III, C-IV, D-II"],
        "explanation": "Lewis Binford wrote 'Bones: Ancient Men and Modern Myths'. John Coles is a pioneer of 'Experimental Archaeology'. David Clarke wrote 'Analytical Archaeology', and Colin Renfrew authored 'Approaches to Social Archaeology'."
      },
      "hi": {
        "question": `सूची-I को सूची-II के साथ सुमेलित करें\n${matchTable("सूची-I (पुरातत्वविद्)","सूची-II (पुस्तक)",[["A","बिनफोर्ड, एल.आर.","I","एनालिटिकल आर्कियोलॉजी"],["B","कोल्स, जे.एम.","II","एप्रोचेस टू सोशल आर्कियोलॉजी"],["C","क्लार्क, डी.एल.","III","बोन्स: एंशिएंट मेन एंड मॉडर्न मिथ"],["D","रेनफ्रेव, सी.","IV","एक्सपेरिमेंटल आर्कियोलॉजी"]])}नीचे दिए गए विकल्पों में से सही उत्तर चुनें:`,
        "options": ["A-III, B-IV, C-I, D-II", "A-II, B-I, C-IV, D-III", "A-IV, B-II, C-I, D-III", "A-I, B-III, C-IV, D-II"],
        "explanation": "लुईस बिनफोर्ड ने 'बोन्स: एंशिएंट मेन एंड मॉडर्न मिथ्स' लिखी। जॉन कोल्स 'एक्सपेरिमेंटल आर्कियोलॉजी' के अग्रदूत हैं। डेविड क्लार्क ने 'एनालिटिकल आर्कियोलॉजी' लिखी, और कॉलिन रेनफ्रू ने 'एप्रोचेस टू सोशल आर्कियोलॉजी' लिखी।"
      }
    }
  },
  {
    "id": "JUNE2025_Q59",
    "difficulty": "hard",
    "correct": 1,
    "unitEN": "UNIT 11: Miscellaneous & High-Yield Facts",
    "unitHI": "इकाई 11: विविध और उच्च उपज वाले तथ्य",
    "topicEN": "Chronology & Sequences",
    "topicHI": "कालक्रम और अनुक्रम",
    "content": {
      "en": {
        "question": "Arrange the following tribal development programs/approaches in the chronological order of their inception, starting from the earliest to the latest:\nA. Tribal Development Agency\nB. Special Multi-purpose Tribal Block\nC. Community Development Approach\nD. Tribal Development Block\nChoose the correct answer from the options given below:",
        "options": ["C, A, D, B", "C, B, D, A", "B, C, A, D", "C, B, A, D"],
        "explanation": "Community Development Project (1952) → Special Multi-purpose Tribal Blocks (1956) → Renamed and expanded as Tribal Development Blocks in 1961 (3rd Five Year Plan) → Tribal Development Agencies were launched later in the early 1970s."
      },
      "hi": {
        "question": "निम्नलिखित जनजातीय विकास कार्यक्रमों/दृष्टिकोणों को उनकी शुरुआत के कालानुक्रमिक क्रम (chronological order) में व्यवस्थित करें (प्रारंभिक से नवीनतम तक):\nA. जनजातीय विकास एजेंसी (Tribal Development Agency)\nB. विशेष बहुउद्देश्यीय जनजातीय ब्लॉक (Special Multi-purpose Tribal Block)\nC. सामुदायिक विकास दृष्टिकोण (Community Development Approach)\nD. जनजातीय विकास ब्लॉक (Tribal Development Block)\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["C, A, D, B", "C, B, D, A", "B, C, A, D", "C, B, A, D"],
        "explanation": "सामुदायिक विकास परियोजना (1952) → विशेष बहुउद्देश्यीय जनजातीय ब्लॉक (1956) → नाम बदला गया और 1961 (तीसरी पंचवर्षीय योजना) में जनजातीय विकास ब्लॉक के रूप में विस्तारित किया गया → जनजातीय विकास एजेंसियां ​​बाद में 1970 के दशक की शुरुआत में शुरू की गईं।"
      }
    }
  },
  {
    "id": "JUNE2025_Q60",
    "difficulty": "hard",
    "correct": 1,
    "unitEN": "UNIT 3: Human Genetics",
    "unitHI": "इकाई 3: मानव आनुवंशिकी",
    "topicEN": "Racial classifications",
    "topicHI": "नस्लीय वर्गीकरण",
    "content": {
      "en": {
        "question": "Which of the following statements about ethnic classification of Indian population are correct?\nA. Risley's classification: Nordics\nB. Guha's classification: Proto-Australoids\nC. Guha's classification: Turko-Iranian Type\nD. Risley Classification: Scytho-Dravidian Type\nChoose the correct answer from the options given below:",
        "options": ["A and B Only", "B and D Only", "B and C Only", "C and D Only"],
        "explanation": "B.S. Guha's 1931 classification included the 'Proto-Australoid' group. Sir H.H. Risley's 1901 classification famously included the 'Scytho-Dravidian' and 'Turko-Iranian' types, but did not use the term 'Nordic'. Thus, B and D are the correct matches."
      },
      "hi": {
        "question": "भारतीय जनसंख्या के जातीय (ethnic) वर्गीकरण के बारे में निम्नलिखित में से कौन से कथन सही हैं?\nA. रिसले का वर्गीकरण: नॉर्डिक\nB. गुहा का वर्गीकरण: प्रोटो-ऑस्ट्रलॉइड\nC. गुहा का वर्गीकरण: तुर्को-ईरानी प्रकार\nD. रिसले का वर्गीकरण: सीथो-द्रविड़ियन प्रकार\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["केवल A और B", "केवल B और D", "केवल B और C", "केवल C और D"],
        "explanation": "बी.एस. गुहा के 1931 के वर्गीकरण में 'प्रोटो-ऑस्ट्रलॉइड' समूह शामिल था। सर एच.एच. रिसले के 1901 के वर्गीकरण में प्रसिद्ध रूप से 'सीथो-द्रविड़ियन' और 'तुर्को-ईरानी' प्रकार शामिल थे, लेकिन उन्होंने 'नॉर्डिक' शब्द का इस्तेमाल नहीं किया। इस प्रकार, B और D सही सुमेल हैं।"
      }
    }
  },
  {
    "id": "JUNE2025_BONUS_2",
    "difficulty": "easy",
    "correct": 0,
    "unitEN": "UNIT 11: Miscellaneous & High-Yield Facts",
    "unitHI": "इकाई 11: विविध और उच्च उपज वाले तथ्य",
    "topicEN": "Books, Authors & Years",
    "topicHI": "पुस्तकें, लेखक और वर्ष",
    "content": {
      "en": {
        "question": "Who among the following authored the book 'Structure and Function in Primitive Society'?",
        "options": ["A. R. Radcliffe-Brown", "Bronisław Malinowski", "E. E. Evans-Pritchard", "Claude Lévi-Strauss"],
        "explanation": "'Structure and Function in Primitive Society' is a seminal collection of essays published in 1952 by A.R. Radcliffe-Brown, laying the foundations for structural-functionalism in British social anthropology."
      },
      "hi": {
        "question": "निम्नलिखित में से किसने 'स्ट्रक्चर एंड फंक्शन इन प्रिमिटिव सोसाइटी' (Structure and Function in Primitive Society) पुस्तक लिखी है?",
        "options": ["ए. आर. रैडक्लिफ-ब्राउन", "ब्रोनिसलॉ मालिनोव्स्की", "ई. ई. इवांस-प्रिचर्ड", "क्लाउड लेवी-स्ट्रॉस"],
        "explanation": "'स्ट्रक्चर एंड फंक्शन इन प्रिमिटिव सोसाइटी' 1952 में ए.आर. रैडक्लिफ-ब्राउन द्वारा प्रकाशित निबंधों का एक मौलिक संग्रह है, जिसने ब्रिटिश सामाजिक मानव विज्ञान में संरचनात्मक-प्रकार्यवाद (structural-functionalism) की नींव रखी।"
      }
    }
  },
  {
    "id": "JUNE2025_Q62",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "UNIT 2: Biological Evolution & Primatology",
    "unitHI": "इकाई 2: जैविक विकास और प्राइमेटोलॉजी",
    "topicEN": "Primate social behaviour",
    "topicHI": "प्राइमेट सामाजिक व्यवहार",
    "content": {
      "en": {
        "question": "Which of the following statements about primate social behavior is/are correct?\nA. Female philopatry is a primate social system in which females remain and breed in the group of their birth, whereas males emigrate\nB. Female philopatry is a primate social system in which males remain in the group of their birth, whereas females emigrate\nC. Dominance is once a male enters a new group, a male must compete directly with the resident males over the group's females\nD. Males are the only dominant sex in all primate species\nChoose the correct answer from the options given below:",
        "options": ["A and C Only", "C and D Only", "B and D Only", "B and C Only"],
        "explanation": "Female philopatry means females remain in their natal group while males emigrate (making A correct). When a male enters a new group, he must compete for dominance (making C correct). Statement D is false because females can be dominant in several primate species, such as lemurs."
      },
      "hi": {
        "question": "प्राइमेट सामाजिक व्यवहार के बारे में निम्नलिखित में से कौन सा/से कथन सही है/हैं?\nA. महिला फिलोपैट्री (Female philopatry) एक प्राइमेट सामाजिक प्रणाली है जिसमें महिलाएं अपने जन्म के समूह में रहती हैं और प्रजनन करती हैं, जबकि पुरुष पलायन (emigrate) कर जाते हैं।\nB. महिला फिलोपैट्री एक प्राइमेट सामाजिक प्रणाली है जिसमें पुरुष अपने जन्म के समूह में रहते हैं, जबकि महिलाएं पलायन करती हैं।\nC. प्रभुत्व (Dominance) वह है जब एक बार कोई पुरुष एक नए समूह में प्रवेश करता है, तो उसे समूह की महिलाओं पर अधिकार के लिए निवासी पुरुषों के साथ सीधे प्रतिस्पर्धा करनी चाहिए।\nD. सभी प्राइमेट प्रजातियों में नर ही एकमात्र प्रमुख (dominant) लिंग हैं।\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["केवल A और C", "केवल C और D", "केवल B और D", "केवल B और C"],
        "explanation": "महिला फिलोपैट्री (Female philopatry) का मतलब है कि महिलाएं अपने जन्म के समूह में रहती हैं जबकि पुरुष बाहर चले जाते हैं (जिससे A सही हो जाता है)। जब एक नर एक नए समूह में प्रवेश करता है, तो उसे प्रभुत्व के लिए प्रतिस्पर्धा करनी चाहिए (जिससे C सही हो जाता है)। कथन D गलत है क्योंकि लीमर (lemurs) जैसी कई प्राइमेट प्रजातियों में मादाएं हावी (dominant) हो सकती हैं।"
      }
    }
  },
  {
    "id": "JUNE2025_Q63",
    "difficulty": "easy",
    "correct": 0,
    "unitEN": "UNIT 10: Applied Anthropology",
    "unitHI": "इकाई 10: व्यावहारिक (Applied) मानव विज्ञान",
    "topicEN": "Medical anthropology",
    "topicHI": "चिकित्सा मानव विज्ञान",
    "content": {
      "en": {
        "question": "Miasma Theory says that the disease was transmitted by a",
        "options": ["Bad air or cloud, that clung low on the surface of the earth", "Bad Touch of other persons in the neighborhood", "Contaminated water", "Poor quality of unhygienic food consumed unknowingly"],
        "explanation": "Prior to the acceptance of the germ theory of disease, the Miasma theory postulated that diseases like cholera and the plague were caused by 'miasma' or 'bad air' emanating from decaying organic matter."
      },
      "hi": {
        "question": "मियास्मा सिद्धांत (Miasma Theory) कहता है कि रोग किसके द्वारा प्रेषित (transmitted) हुआ था?",
        "options": ["खराब हवा या बादल, जो पृथ्वी की सतह पर नीचे मंडराते थे", "आस-पड़ोस के अन्य व्यक्तियों का बुरा स्पर्श", "दूषित जल", "अनजाने में खाया गया खराब गुणवत्ता वाला अस्वच्छ भोजन"],
        "explanation": "रोग के रोगाणु सिद्धांत (germ theory) की स्वीकृति से पहले, मियास्मा सिद्धांत ने यह माना था कि हैजा और प्लेग जैसी बीमारियां सड़ते हुए कार्बनिक पदार्थों से निकलने वाली 'मियास्मा' या 'खराब हवा' के कारण होती थीं।"
      }
    }
  },
  {
    "id": "JUNE2025_Q64",
    "difficulty": "hard",
    "correct": 2,
    "unitEN": "UNIT 11: Miscellaneous & High-Yield Facts",
    "unitHI": "इकाई 11: विविध और उच्च उपज वाले तथ्य",
    "topicEN": "Books, Authors & Years",
    "topicHI": "पुस्तकें, लेखक और वर्ष",
    "content": {
      "en": {
        "question": `Match the LIST-I with LIST-II\n${matchTable("LIST-I (Author)","LIST-II (Reflexive Ethnographic Work)",[["A","James Clifford","I","Deadly Words: Witchcraft in the Bocage"],["B","Vincent Crapanzano","II","On Ethnographic Authority"],["C","Paul Rabinow","III","Tuhami: Portrait of a Moroccan"],["D","Jeanne Fevret-Saada","IV","Fieldwork and Friendship in Morocco"]])}Choose the correct answer from the options given below:`,
        "options": ["A-IV, B-II, C-I, D-III", "A-I, B-IV, C-III, D-II", "A-II, B-III, C-IV, D-I", "A-I, B-II, C-II, D-IV"],
        "explanation": "James Clifford wrote 'On Ethnographic Authority'. Vincent Crapanzano authored 'Tuhami: Portrait of a Moroccan'. Paul Rabinow wrote 'Reflections on Fieldwork in Morocco', and Jeanne Favret-Saada wrote 'Deadly Words'."
      },
      "hi": {
        "question": `सूची-I को सूची-II के साथ सुमेलित करें\n${matchTable("सूची-I (लेखक)","सूची-II (चिंतनशील नृवंशविज्ञान कार्य)",[["A","जेम्स क्लिफोर्ड","I","डेडली वर्ड्स: विचक्राफ्ट इन द बोकेज"],["B","विंसेंट क्रैपांज़ानो","II","ऑन एथनोग्राफिक अथॉरिटी"],["C","पॉल रबिनोव","III","तुहामी: पोर्ट्रेट ऑफ ए मोरक्कन"],["D","जीन फेवरेट-साडा","IV","फील्डवर्क एंड फ्रेंडशिप इन मोरक्को"]])}नीचे दिए गए विकल्पों में से सही उत्तर चुनें:`,
        "options": ["A-IV, B-II, C-I, D-III", "A-I, B-IV, C-III, D-II", "A-II, B-III, C-IV, D-I", "A-I, B-II, C-II, D-IV"],
        "explanation": "जेम्स क्लिफोर्ड ने 'ऑन एथनोग्राफिक अथॉरिटी' लिखी। विंसेंट क्रैपांज़ानो ने 'तुहामी: पोर्ट्रेट ऑफ ए मोरक्कन' लिखा। पॉल रबिनोव ने 'रिफ्लेक्शन्स ऑन फील्डवर्क इन मोरक्को' लिखा, और जीन फेवरेट-साडा ने 'डेडली वर्ड्स' लिखा।"
      }
    }
  },
  {
    "id": "JUNE2025_Q65",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "UNIT 10: Applied Anthropology",
    "unitHI": "इकाई 10: व्यावहारिक (Applied) मानव विज्ञान",
    "topicEN": "Medical anthropology",
    "topicHI": "चिकित्सा मानव विज्ञान",
    "content": {
      "en": {
        "question": "Which of the following standard lung function tests are required for the diagnosis of COPD?\nA. Forced Vital capacity or Vital Capacity\nB. Residual capacity\nC. Total Lung Capacity\nD. Forced expiratory volume in 1st second\nChoose the correct answer from the options given below:",
        "options": ["B and D Only", "A and C Only", "A and D Only", "B and C Only"],
        "explanation": "Chronic Obstructive Pulmonary Disease (COPD) is typically diagnosed using spirometry, which primarily measures Forced Vital Capacity (FVC) and Forced Expiratory Volume in the first second (FEV1) to detect airflow obstruction."
      },
      "hi": {
        "question": "COPD के निदान के लिए निम्नलिखित में से कौन से मानक फेफड़े के कार्य परीक्षण (lung function tests) आवश्यक हैं?\nA. फोर्स्ड वाइटल कैपेसिटी (Forced Vital capacity) या वाइटल कैपेसिटी\nB. अवशिष्ट क्षमता (Residual capacity)\nC. फेफड़ों की कुल क्षमता (Total Lung Capacity)\nD. पहले सेकंड में फोर्स्ड एक्सपिरेटरी वॉल्यूम (Forced expiratory volume in 1st second)\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["केवल B और D", "केवल A और C", "केवल A और D", "केवल B और C"],
        "explanation": "क्रॉनिक ऑब्सट्रक्टिव पल्मोनरी डिजीज (COPD) का निदान आमतौर पर स्पाइरोमेट्री (spirometry) का उपयोग करके किया जाता है, जो मुख्य रूप से वायु प्रवाह में रुकावट का पता लगाने के लिए फोर्स्ड वाइटल कैपेसिटी (FVC) और पहले सेकंड में फोर्स्ड एक्सपिरेटरी वॉल्यूम (FEV1) को मापता है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q66",
    "difficulty": "hard",
    "correct": 0,
    "unitEN": "UNIT 11: Miscellaneous & High-Yield Facts",
    "unitHI": "इकाई 11: विविध और उच्च उपज वाले तथ्य",
    "topicEN": "Important Terms & Concepts",
    "topicHI": "महत्वपूर्ण शर्तें और अवधारणाएं",
    "content": {
      "en": {
        "question": `Match the LIST-I with LIST-II\n${matchTable("LIST-I (Concept)","LIST-II (Scholar)",[["A","Paradigm","I","R.K. Merton"],["B","Falsification","II","J. A. Barnes"],["C","Network Analysis","III","T. Kuhn"],["D","Middle Range Theory","IV","Karl Popper"]])}Choose the correct answer from the options given below:`,
        "options": ["A-III, B-IV, C-II, D-I", "A-III, B-II, C-IV, D-I", "A-IV, B-III, C-I, D-II", "A-I, B-III, C-II, D-IV"],
        "explanation": "Thomas Kuhn introduced 'Paradigm shifts'. Karl Popper is famous for the principle of 'Falsification'. J.A. Barnes pioneered 'Network Analysis' in social anthropology, and R.K. Merton developed 'Middle Range Theory'."
      },
      "hi": {
        "question": `सूची-I को सूची-II के साथ सुमेलित करें\n${matchTable("सूची-I (अवधारणा)","सूची-II (विद्वान)",[["A","प्रतिमान (Paradigm)","I","आर.के. मर्टन"],["B","मिथ्याकरण (Falsification)","II","जे. ए. बार्न्स"],["C","नेटवर्क विश्लेषण (Network Analysis)","III","टी. कुहन (T. Kuhn)"],["D","मध्यम श्रेणी का सिद्धांत (Middle Range Theory)","IV","कार्ल पॉपर (Karl Popper)"]])}नीचे दिए गए विकल्पों में से सही उत्तर चुनें:`,
        "options": ["A-III, B-IV, C-II, D-I", "A-III, B-II, C-IV, D-I", "A-IV, B-III, C-I, D-II", "A-I, B-III, C-II, D-IV"],
        "explanation": "थॉमस कुह्न ने 'पैराडाइम शिफ्ट' (Paradigm shifts) की शुरुआत की। कार्ल पॉपर 'मिथ्याकरण' (Falsification) के सिद्धांत के लिए प्रसिद्ध हैं। जे.ए. बार्न्स ने सामाजिक मानव विज्ञान में 'नेटवर्क विश्लेषण' का बीड़ा उठाया, और आर.के. मर्टन ने 'मिडिल रेंज थ्योरी' विकसित की।"
      }
    }
  },
  {
    "id": "JUNE2025_Q67",
    "difficulty": "medium",
    "correct": 3,
    "unitEN": "UNIT 4: Growth, Adaptation & Demography",
    "unitHI": "इकाई 4: विकास, अनुकूलन और जनसांख्यिकी",
    "topicEN": "Human adaptation rules",
    "topicHI": "मानव अनुकूलन नियम",
    "content": {
      "en": {
        "question": "Choose the correct sequence of response of immune system:\nA. Synthesizes antibodies which comprises immunoglobulins\nB. Immune system identifies foreign substances in the body\nC. Immunoglobulins specifically designed to bind the antigens\nD. Destroy the antigens\nChoose the correct answer from the options given below:",
        "options": ["B, C, D, A", "A, D, C, A", "C, A, B, D", "B, A, C, D"],
        "explanation": "The immune response sequence begins with identifying a foreign substance (B), followed by synthesizing antibodies (A). These antibodies are specifically designed to bind to the antigens (C) so they can eventually be destroyed (D)."
      },
      "hi": {
        "question": "प्रतिरक्षा प्रणाली (immune system) की प्रतिक्रिया का सही क्रम चुनें:\nA. एंटीबॉडी (antibodies) को संश्लेषित करता है जिसमें इम्युनोग्लोबुलिन शामिल होते हैं\nB. प्रतिरक्षा प्रणाली शरीर में विदेशी पदार्थों (foreign substances) की पहचान करती है\nC. इम्युनोग्लोबुलिन विशेष रूप से एंटीजन को बांधने के लिए डिज़ाइन किए गए हैं\nD. एंटीजन को नष्ट करता है\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["B, C, D, A", "A, D, C, A", "C, A, B, D", "B, A, C, D"],
        "explanation": "प्रतिरक्षा प्रतिक्रिया अनुक्रम एक विदेशी पदार्थ (B) की पहचान करने से शुरू होता है, जिसके बाद एंटीबॉडी (A) का संश्लेषण होता है। ये एंटीबॉडी विशेष रूप से एंटीजन (C) से जुड़ने के लिए डिज़ाइन किए गए हैं ताकि अंततः उन्हें नष्ट किया जा सके (D)।"
      }
    }
  },
  {
    "id": "JUNE2025_Q68",
    "difficulty": "easy",
    "correct": 0,
    "unitEN": "UNIT 5: Prehistoric Archaeology",
    "unitHI": "इकाई 5: प्रागैतिहासिक पुरातत्व",
    "topicEN": "Experimental archaeology",
    "topicHI": "प्रायोगिक पुरातत्व",
    "content": {
      "en": {
        "question": "The branch of archaeology that refines theories and methods by demonstrating incorrect assumptions and inaccuracies is:",
        "options": ["Experimental Archaeology", "Environmental Archaeology", "Ethnoarchaeology", "Ecological Archaeology"],
        "explanation": "Experimental archaeology involves replicating ancient technologies and processes (like flintknapping or building ancient structures) to test hypotheses, thereby refining theories and exposing incorrect assumptions about past human behaviors."
      },
      "hi": {
        "question": "पुरातत्व विज्ञान की वह शाखा जो गलत मान्यताओं और अशुद्धियों को प्रदर्शित करके सिद्धांतों और विधियों को परिष्कृत करती है, वह है:",
        "options": ["प्रायोगिक पुरातत्व (Experimental Archaeology)", "पर्यावरण पुरातत्व (Environmental Archaeology)", "नृवंशविज्ञान (Ethnoarchaeology)", "पारिस्थितिक पुरातत्व (Ecological Archaeology)"],
        "explanation": "प्रायोगिक पुरातत्व में परिकल्पनाओं (hypotheses) का परीक्षण करने के लिए प्राचीन प्रौद्योगिकियों और प्रक्रियाओं (जैसे चकमक पत्थर बनाना या प्राचीन संरचनाओं का निर्माण करना) को दोहराना शामिल है, जिससे सिद्धांतों को परिष्कृत किया जा सके और पिछले मानव व्यवहारों के बारे में गलत मान्यताओं को उजागर किया जा सके।"
      }
    }
  },
  {
    "id": "JUNE2025_Q69",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "UNIT 11: Miscellaneous & High-Yield Facts",
    "unitHI": "इकाई 11: विविध और उच्च उपज वाले तथ्य",
    "topicEN": "Important Terms & Concepts",
    "topicHI": "महत्वपूर्ण शर्तें और अवधारणाएं",
    "content": {
      "en": {
        "question": "The term filiation is coined by:",
        "options": ["Radcliffe-Brown", "Meyer Fortes", "Jack Goody", "Max Gluckman"],
        "explanation": "The concept of 'filiation'—the culturally recognized, bilateral tie between a parent and child—was famously conceptualized and distinguished from 'descent' by the British structural-functionalist Meyer Fortes."
      },
      "hi": {
        "question": "'फिलिएशन' (filiation) शब्द किसके द्वारा गढ़ा गया है?",
        "options": ["रैडक्लिफ-ब्राउन", "मेयर फोर्टेस (Meyer Fortes)", "जैक गुडी", "मैक्स ग्लुकमैन"],
        "explanation": "'फिलीएशन' (filiation) की अवधारणा- एक माता-पिता और बच्चे के बीच सांस्कृतिक रूप से मान्यता प्राप्त, द्विपक्षीय संबंध- को ब्रिटिश संरचनात्मक-कार्यवादी (structural-functionalist) मेयर फोर्टेस द्वारा 'वंश' (descent) से अलग और संकल्पित किया गया था।"
      }
    }
  },
  {
    "id": "JUNE2025_Q70",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "UNIT 6: Indian Prehistory",
    "unitHI": "इकाई 6: भारतीय प्रागितिहास",
    "topicEN": "Indus civilization",
    "topicHI": "सिंधु सभ्यता",
    "content": {
      "en": {
        "question": "The Cemetery H Culture characteristic features:\nA. Elaborate town planning on grid pattern\nB. Motives of peacock, stars and rosette on pottery\nC. Urn burials with disarticulated bones and other grave goods\nD. Stone tablets indicating overseas trade\nChoose the correct answer from the options given below:",
        "options": ["A and B Only", "B and C Only", "C and D Only", "A and D Only"],
        "explanation": "Cemetery H culture (a Late Harappan phase) is characterized by fractional/urn burials containing disarticulated bones, and a distinct reddish pottery painted with black motifs like peacocks, stars, and rosettes."
      },
      "hi": {
        "question": "कब्रिस्तान एच (Cemetery H) संस्कृति की विशिष्ट विशेषताएं:\nA. ग्रिड पैटर्न पर विस्तृत नगर नियोजन\nB. मिट्टी के बर्तनों पर मोर, तारों और रोसेट (rosette) की आकृतियाँ\nC. अलग-अलग हड्डियों और अन्य कब्र के सामानों के साथ कलश शवाधान (Urn burials)\nD. विदेशी व्यापार का संकेत देने वाली पत्थर की गोलियां\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["केवल A और B", "केवल B और C", "केवल C और D", "केवल A और D"],
        "explanation": "कब्रिस्तान एच (Cemetery H) संस्कृति (एक उत्तर-हड़प्पा चरण) की विशेषता आंशिक/कलश दफन है जिसमें अलग-अलग हड्डियां होती हैं, और मोर, तारे और रोसेट (rosettes) जैसे काले रूपांकनों के साथ रंगे हुए एक अलग लाल मिट्टी के बर्तन होते हैं।"
      }
    }
  },
  {
    "id": "JUNE2025_Q71",
    "difficulty": "hard",
    "correct": 1,
    "unitEN": "UNIT 11: Miscellaneous & High-Yield Facts",
    "unitHI": "इकाई 11: विविध और उच्च उपज वाले तथ्य",
    "topicEN": "Chronology & Sequences",
    "topicHI": "कालक्रम और अनुक्रम",
    "content": {
      "en": {
        "question": "The chronological order of Inter-glacial episodes of the Pleistocene period from the earliest to the latest:\nA. Cromerian\nB. Eemian\nC. Hoxanian\nD. Villafranchian\nChoose the correct answer from the options given below:",
        "options": ["A, C, D, B", "D, A, C, B", "D, B, A, C", "C, A, B, D"],
        "explanation": "The chronological order of interglacial periods in Europe from earliest to latest is Villafranchian (technically a faunal stage spanning late Pliocene to early Pleistocene), followed by Cromerian, Hoxnian, and Eemian."
      },
      "hi": {
        "question": "प्लेइस्टोसिन (Pleistocene) काल के अंतर-हिमनद (Inter-glacial) प्रसंगों का कालानुक्रमिक क्रम सबसे पहले से नवीनतम तक:\nA. क्रोमेरियन (Cromerian)\nB. ईमियन (Eemian)\nC. हॉक्सेनियन (Hoxanian)\nD. विलाफ़्रैंचियन (Villafranchian)\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["A, C, D, B", "D, A, C, B", "D, B, A, C", "C, A, B, D"],
        "explanation": "यूरोप में अंतर-हिमनद (interglacial) अवधियों का कालानुक्रमिक क्रम सबसे पहले से नवीनतम तक विलाफ्रैंचियन (Villafranchian) है (तकनीकी रूप से एक जीव-जंतु अवस्था जो लेट प्लियोसीन से प्रारंभिक प्लेइस्टोसिन तक फैली हुई है), इसके बाद क्रोमेरियन, हॉक्सियन और ईमियन (Eemian) का स्थान आता है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q72",
    "difficulty": "easy",
    "correct": 3,
    "unitEN": "UNIT 8: Anthropological Theories",
    "unitHI": "इकाई 8: मानवशास्त्रीय सिद्धांत",
    "topicEN": "Cultural materialism",
    "topicHI": "सांस्कृतिक भौतिकवाद",
    "content": {
      "en": {
        "question": "The basic tenet of Cultural Materialism is:",
        "options": ["Superstructural Determinism", "Structural Determinism", "Materialistic Determinism", "Infrastructural Determinism"],
        "explanation": "Marvin Harris's Cultural Materialism is based on the principle of 'Infrastructural Determinism', which theorizes that a society's mode of production and reproduction (infrastructure) shapes its social structure and ideological superstructure."
      },
      "hi": {
        "question": "सांस्कृतिक भौतिकवाद (Cultural Materialism) का मूल सिद्धांत क्या है?",
        "options": ["सुपरस्ट्रक्चरल नियतत्ववाद", "संरचनात्मक नियतत्ववाद", "भौतिकवादी नियतत्ववाद", "अवसंरचनात्मक (Infrastructural) नियतत्ववाद"],
        "explanation": "मार्विन हैरिस का सांस्कृतिक भौतिकवाद 'इन्फ्रास्ट्रक्चरल डिटरमिनिज्म' (अवसंरचनात्मक नियतत्ववाद) के सिद्धांत पर आधारित है, जो यह सिद्धांत देता है कि किसी समाज के उत्पादन और प्रजनन (बुनियादी ढांचे) का तरीका उसकी सामाजिक संरचना और वैचारिक अधिरचना को आकार देता है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q73",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "UNIT 2: Biological Evolution & Primatology",
    "unitHI": "इकाई 2: जैविक विकास और प्राइमेटोलॉजी",
    "topicEN": "Primate classification",
    "topicHI": "प्राइमेट वर्गीकरण",
    "content": {
      "en": {
        "question": "An approach in systematics where it relies solely on numerically describing degrees of similarity and difference between organisms, without biases created by knowing some groups are more closely related than others is known as",
        "options": ["Cladistics", "Phenetics", "Cladogram", "Taxonomy"],
        "explanation": "Phenetics (also known as numerical taxonomy) is an approach that classifies organisms based purely on overall morphological similarity, regardless of their evolutionary relationships or common ancestry (which is the focus of Cladistics)."
      },
      "hi": {
        "question": "सिस्टमैटिक्स (systematics) में एक दृष्टिकोण जहां यह केवल जीवों के बीच समानता और अंतर की डिग्री का संख्यात्मक रूप से वर्णन करने पर निर्भर करता है, बिना किसी पूर्वाग्रह के जो यह जानने से पैदा होता है कि कुछ समूह दूसरों की तुलना में अधिक निकटता से संबंधित हैं, के रूप में जाना जाता है:",
        "options": ["क्लैडिस्टिक्स (Cladistics)", "फेनेटिक्स (Phenetics)", "क्लैडोग्राम (Cladogram)", "वर्गीकरण (Taxonomy)"],
        "explanation": "फेनेटिक्स (Phenetics) (जिसे संख्यात्मक वर्गीकरण के रूप में भी जाना जाता है) एक ऐसा दृष्टिकोण है जो उनके विकासवादी संबंधों या सामान्य वंश (जो क्लैडिस्टिक्स का फोकस है) की परवाह किए बिना शुद्ध रूप से समग्र रूपात्मक (morphological) समानता के आधार पर जीवों को वर्गीकृत करता है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q74",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "UNIT 3: Human Genetics",
    "unitHI": "इकाई 3: मानव आनुवंशिकी",
    "topicEN": "Mitochondrial DNA",
    "topicHI": "माइटोकॉन्ड्रियल डीएनए",
    "content": {
      "en": {
        "question": "Who among the following has not proposed the Mitochondrial Eve Hypothesis?",
        "options": ["Alan Wilson", "Rebecca Cann", "Svante Paabo", "Mark Stoneking"],
        "explanation": "The Mitochondrial Eve hypothesis was proposed in a groundbreaking 1987 Nature paper authored by Rebecca Cann, Mark Stoneking, and Allan Wilson. Svante Pääbo is renowned for sequencing the Neanderthal genome, not this specific hypothesis."
      },
      "hi": {
        "question": "निम्नलिखित में से किसने माइटोकॉन्ड्रियल ईव (Mitochondrial Eve) परिकल्पना प्रस्तावित नहीं की है?",
        "options": ["एलन विल्सन", "रेबेका कैन", "स्वांते पाबो (Svante Paabo)", "मार्क स्टोनकिंग"],
        "explanation": "माइटोकॉन्ड्रियल ईव परिकल्पना 1987 के एक अभूतपूर्व नेचर पेपर (Nature paper) में प्रस्तावित की गई थी, जिसे रेबेका कैन, मार्क स्टोनकिंग और एलन विल्सन द्वारा लिखा गया था। स्वांते पाबो (Svante Pääbo) निएंडरथल जीनोम अनुक्रमण के लिए प्रसिद्ध हैं, न कि इस विशिष्ट परिकल्पना के लिए।"
      }
    }
  },
  {
    "id": "JUNE2025_Q75",
    "difficulty": "easy",
    "correct": 3,
    "unitEN": "UNIT 6: Indian Prehistory",
    "unitHI": "इकाई 6: भारतीय प्रागितिहास",
    "topicEN": "Neolithic India",
    "topicHI": "नवपाषाणकालीन भारत",
    "content": {
      "en": {
        "question": "Pit dwellings and pointed butt celts are characteristic of",
        "options": ["South Zone Neolithic", "Eastern Zone Neolithic", "Central and Western Zone Neolithic", "North Zone Neolithic"],
        "explanation": "Underground pit dwellings, pointed butt stone celts, bone tools, and a lack of early pottery are defining characteristics of the Northern Zone Neolithic culture in India, most prominently discovered at Burzahom in Kashmir."
      },
      "hi": {
        "question": "गड्ढे वाले आवास (Pit dwellings) और नुकीले बट सेल्ट (pointed butt celts) किसकी विशेषता हैं?",
        "options": ["दक्षिण क्षेत्र नवपाषाण", "पूर्वी क्षेत्र नवपाषाण", "मध्य और पश्चिमी क्षेत्र नवपाषाण", "उत्तर क्षेत्र नवपाषाण (North Zone Neolithic)"],
        "explanation": "भूमिगत गड्ढे वाले आवास, नुकीले बट पत्थर के सेल्ट्स, हड्डी के उपकरण, और प्रारंभिक मिट्टी के बर्तनों की कमी भारत में उत्तरी क्षेत्र नवपाषाण (Northern Zone Neolithic) संस्कृति की परिभाषित विशेषताएं हैं, जिन्हें प्रमुख रूप से कश्मीर के बुर्जहोम में खोजा गया है।"
      }
    }
  }, 
  {
    "id": "JUNE2025_Q76",
    "difficulty": "medium",
    "correct": 3,
    "unitEN": "UNIT 3: Human Genetics",
    "unitHI": "इकाई 3: मानव आनुवंशिकी",
    "topicEN": "Modes of inheritance",
    "topicHI": "विरासत के तरीके (Modes of inheritance)",
    "content": {
      "en": {
        "question": "Fraction of cases carrying a given gene that manifests a specified phenotype is known as",
        "options": ["Late age of onset", "Anticipation", "Variable expressivity", "Penetrance"],
        "explanation": "Penetrance refers to the proportion of individuals carrying a particular variant of a gene (allele) that actually express the associated trait or phenotype. If some carriers do not show the trait, it is called 'incomplete penetrance'."
      },
      "hi": {
        "question": "दिए गए जीन (gene) वाले मामलों का वह अंश जो एक निर्दिष्ट फेनोटाइप (phenotype) को प्रकट करता है, क्या कहलाता है?",
        "options": ["शुरुआत की देर से उम्र (Late age of onset)", "प्रत्याशा (Anticipation)", "परिवर्तनीय अभिव्यक्ति (Variable expressivity)", "पेनिट्रेंस (Penetrance)"],
        "explanation": "पेनिट्रेंस (Penetrance) उन व्यक्तियों के अनुपात को संदर्भित करता है जो जीन (एलील) के एक विशेष प्रकार को ले जाते हैं और वास्तव में संबंधित विशेषता या फेनोटाइप को व्यक्त करते हैं। यदि कुछ वाहक लक्षण नहीं दिखाते हैं, तो इसे 'अपूर्ण पेनिट्रेंस' कहा जाता है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q77",
    "difficulty": "hard",
    "correct": 1,
    "unitEN": "UNIT 11: Miscellaneous & High-Yield Facts",
    "unitHI": "इकाई 11: विविध और उच्च उपज वाले तथ्य",
    "topicEN": "Important Terms & Concepts",
    "topicHI": "महत्वपूर्ण शर्तें और अवधारणाएं",
    "content": {
      "en": {
        "question": `Match the LIST-I with LIST-II\n${matchTable("LIST-I (Species concept)","LIST-II (Scholars associated with)",[["A","Biological species concept","I","Leigh Van Valen"],["B","Evolutionary species concept","II","H. E. H Paterson"],["C","Ecological species concept","III","Ernst Mayr"],["D","Recognition species concept","IV","George Gaylord Simpson"]])}Choose the correct answer from the options given below:`,
        "options": ["A-II, B-III, C-IV, D-I", "A-III, B-IV, C-I, D-II", "A-I, B-II, C-III, D-IV", "A-IV, B-I, C-II, D-III"],
        "explanation": "Ernst Mayr formulated the Biological Species Concept. G.G. Simpson proposed the Evolutionary Species Concept. Leigh Van Valen developed the Ecological concept, and H.E.H. Paterson developed the Recognition concept."
      },
      "hi": {
        "question": `सूची-I को सूची-II के साथ सुमेलित करें\n${matchTable("सूची-I (प्रजाति अवधारणा)","सूची-II (जुड़े हुए विद्वान)",[["A","जैविक प्रजाति अवधारणा","I","लेह वान वालेन"],["B","विकासवादी प्रजाति अवधारणा","II","एच. ई. एच पैटर्सन"],["C","पारिस्थितिक प्रजाति अवधारणा","III","अर्नस्ट मायर"],["D","मान्यता प्रजाति अवधारणा","IV","जॉर्ज गेलॉर्ड सिम्पसन"]])}नीचे दिए गए विकल्पों में से सही उत्तर चुनें:`,
        "options": ["A-II, B-III, C-IV, D-I", "A-III, B-IV, C-I, D-II", "A-I, B-II, C-III, D-IV", "A-IV, B-I, C-II, D-III"],
        "explanation": "अर्नस्ट मायर ने जैविक प्रजाति अवधारणा (Biological Species Concept) तैयार की। जी.जी. सिम्पसन ने विकासवादी प्रजाति अवधारणा का प्रस्ताव रखा। लेह वान वालेन ने पारिस्थितिक अवधारणा विकसित की, और एच.ई.एच. पैटर्सन ने मान्यता (Recognition) अवधारणा विकसित की।"
      }
    }
  },
  {
    "id": "JUNE2025_Q78",
    "difficulty": "easy",
    "correct": 1,
    "unitEN": "UNIT 8: Anthropological Theories",
    "unitHI": "इकाई 8: मानवशास्त्रीय सिद्धांत",
    "topicEN": "Gender anthropology",
    "topicHI": "लिंग (Gender) मानव विज्ञान",
    "content": {
      "en": {
        "question": "Who among the following forcefully argued that women are universally devalued because of their reproductive capacities which places them on the side of nature, domestic and public, and thus the irrelevant?",
        "options": ["C. MacCormack", "S. Ortner", "L. Jordanova", "M. Strathern"],
        "explanation": "In her classic 1974 essay 'Is Female to Male as Nature Is to Culture?', Sherry Ortner argued that women's reproductive functions socially align them closer to 'nature', causing them to be universally devalued relative to men ('culture')."
      },
      "hi": {
        "question": "निम्नलिखित में से किसने बलपूर्वक तर्क दिया कि महिलाओं को उनकी प्रजनन क्षमताओं के कारण सार्वभौमिक रूप से अवमूल्यन (devalued) किया जाता है जो उन्हें प्रकृति, घरेलू और सार्वजनिक की ओर रखता है, और इस प्रकार अप्रासंगिक बना देता है?",
        "options": ["सी. मैककॉर्मैक (C. MacCormack)", "एस. ऑर्टनर (S. Ortner)", "एल. जॉर्डनोवा (L. Jordanova)", "एम. स्ट्रैथर्न (M. Strathern)"],
        "explanation": "अपने क्लासिक 1974 के निबंध 'इज़ फीमेल टू मेल एज़ नेचर इज़ टू कल्चर?' में शेरी ऑर्टनर ने तर्क दिया कि महिलाओं के प्रजनन कार्य उन्हें सामाजिक रूप से 'प्रकृति' के करीब लाते हैं, जिससे उन्हें पुरुषों ('संस्कृति') के सापेक्ष सार्वभौमिक रूप से अवमूल्यित किया जाता है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q79",
    "difficulty": "hard",
    "correct": 1,
    "unitEN": "UNIT 11: Miscellaneous & High-Yield Facts",
    "unitHI": "इकाई 11: विविध और उच्च उपज वाले तथ्य",
    "topicEN": "Books, Authors & Years",
    "topicHI": "पुस्तकें, लेखक और वर्ष",
    "content": {
      "en": {
        "question": "Arrange the following Postmodernist works in ascending order from early to later:\nA. F. Jameson - Postmodernism\nB. Stephen A. Tyler - The Unspeakable\nC. Clifford and Marcus - Writing Culture\nD. David Harvey - The Condition of Postmodernity\nChoose the correct answer from the options given below:",
        "options": ["B, A, C, D", "C, B, D, A", "D, C, A, B", "A, D, B, C"],
        "explanation": "Chronological order of publication: 'Writing Culture' by Clifford & Marcus (1986), 'The Unspeakable' by Stephen Tyler (1987), 'The Condition of Postmodernity' by David Harvey (1989), and 'Postmodernism' by Fredric Jameson (1991)."
      },
      "hi": {
        "question": "निम्नलिखित उत्तर-आधुनिकतावादी (Postmodernist) रचनाओं को प्रारंभिक से बाद के आरोही क्रम में व्यवस्थित करें:\nA. एफ. जेम्सन - पोस्टमॉडर्निज्म\nB. स्टीफन ए. टायलर - द अनस्पीकेबल\nC. क्लिफोर्ड और मार्कस - राइटिंग कल्चर\nD. डेविड हार्वे - द कंडीशन ऑफ पोस्टमॉडर्निटी\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["B, A, C, D", "C, B, D, A", "D, C, A, B", "A, D, B, C"],
        "explanation": "प्रकाशन का कालानुक्रमिक क्रम: क्लिफोर्ड और मार्कस द्वारा 'राइटिंग कल्चर' (1986), स्टीफन टायलर द्वारा 'द अनस्पीकेबल' (1987), डेविड हार्वे द्वारा 'द कंडीशन ऑफ पोस्टमॉडर्निटी' (1989), और फ्रेडरिक जेम्सन द्वारा 'पोस्टमॉडर्निज्म' (1991)।"
      }
    }
  },
  {
    "id": "JUNE2025_Q80",
    "difficulty": "medium",
    "correct": 3,
    "unitEN": "UNIT 8: Anthropological Theories",
    "unitHI": "इकाई 8: मानवशास्त्रीय सिद्धांत",
    "topicEN": "Cultural materialism",
    "topicHI": "सांस्कृतिक भौतिकवाद",
    "content": {
      "en": {
        "question": "Marxism is associated with the work of:\nA. Alfred Gel\nB. P. Hocking\nC. M. Bloch\nD. M. Godelier\nChoose the correct answer from the options given below:",
        "options": ["A and B Only", "B and C Only", "A and C Only", "C and D Only"],
        "explanation": "Maurice Bloch and Maurice Godelier are prominent figures in Marxist Anthropology. They are known for integrating Marxist economic analysis (like modes of production) with anthropological studies of kinship and social organization."
      },
      "hi": {
        "question": "मार्क्सवाद (Marxism) किसके काम से जुड़ा है?\nA. अल्फ्रेड जेल (Alfred Gel)\nB. पी. हॉकिंग (P. Hocking)\nC. एम. बलोच (M. Bloch)\nD. एम. गोडेलियर (M. Godelier)\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["केवल A और B", "केवल B और C", "केवल A और C", "केवल C और D"],
        "explanation": "मौरिस बलोच और मौरिस गोडेलियर मार्क्सवादी मानव विज्ञान के प्रमुख व्यक्ति हैं। वे रिश्तेदारी और सामाजिक संगठन के मानवशास्त्रीय अध्ययनों के साथ मार्क्सवादी आर्थिक विश्लेषण (उत्पादन के तरीकों की तरह) को एकीकृत करने के लिए जाने जाते हैं।"
      }
    }
  },
  {
    "id": "JUNE2025_Q81",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "UNIT 7: Social Anthropology Concepts",
    "unitHI": "इकाई 7: सामाजिक मानव विज्ञान अवधारणाएं",
    "topicEN": "Marriage types",
    "topicHI": "विवाह के प्रकार",
    "content": {
      "en": {
        "question": "Who among the following supported Inbreeding Theory for universal Incest Taboo?",
        "options": ["W. H. Durham", "C. Levi-Strauss", "B. Malinowski", "E. Westermarck"],
        "explanation": "William H. Durham supported the Inbreeding Theory from a coevolutionary perspective, arguing that the universal incest taboo evolved culturally to prevent the severe biological costs (inbreeding depression) associated with close-kin mating."
      },
      "hi": {
        "question": "निम्नलिखित में से किसने सार्वभौमिक अनाचार वर्जना (Incest Taboo) के लिए अंतर्प्रजनन सिद्धांत (Inbreeding Theory) का समर्थन किया?",
        "options": ["डब्ल्यू. एच. डरहम (W. H. Durham)", "सी. लेवी-स्ट्रॉस (C. Levi-Strauss)", "बी. मालिनोव्स्की (B. Malinowski)", "ई. वेस्टरमार्क (E. Westermarck)"],
        "explanation": "विलियम एच. डरहम ने सह-विकासवादी परिप्रेक्ष्य से इनब्रीडिंग थ्योरी (अंतर्प्रजनन सिद्धांत) का समर्थन किया, यह तर्क देते हुए कि निकट-रिश्तेदार संभोग से जुड़ी गंभीर जैविक लागतों (इनब्रीडिंग डिप्रेशन) को रोकने के लिए सार्वभौमिक अनाचार वर्जना सांस्कृतिक रूप से विकसित हुई।"
      }
    }
  },
  {
    "id": "JUNE2025_Q82",
    "difficulty": "easy",
    "correct": 2,
    "unitEN": "UNIT 5: Prehistoric Archaeology",
    "unitHI": "इकाई 5: प्रागैतिहासिक पुरातत्व",
    "topicEN": "Ethno archaeology",
    "topicHI": "नृवंशविज्ञान पुरातत्व",
    "content": {
      "en": {
        "question": "The archaeological units of analysis from simple to complex:\nA. Assemblage\nB. Attribute\nC. Culture\nD. Artefact\nChoose the correct answer from the options given below:",
        "options": ["B, A, C, D", "D, A, C, B", "B, D, A, C", "C, A, D, B"],
        "explanation": "The hierarchy of archaeological classification from simplest to most complex is: Attribute (smallest feature like color/shape) → Artefact (individual object) → Assemblage (group of artefacts found together) → Culture (group of assemblages representing a society)."
      },
      "hi": {
        "question": "विश्लेषण की पुरातात्विक इकाइयाँ सरल से जटिल तक:\nA. समुच्चय (Assemblage)\nB. विशेषता (Attribute)\nC. संस्कृति (Culture)\nD. कलाकृति (Artefact)\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["B, A, C, D", "D, A, C, B", "B, D, A, C", "C, A, D, B"],
        "explanation": "पुरातात्विक वर्गीकरण का पदानुक्रम सबसे सरल से सबसे जटिल तक है: विशेषता (रंग/आकार जैसी सबसे छोटी विशेषता) → कलाकृति (व्यक्तिगत वस्तु) → समुच्चय (एक साथ पाई जाने वाली कलाकृतियों का समूह) → संस्कृति (एक समाज का प्रतिनिधित्व करने वाले समुच्चयों का समूह)।"
      }
    }
  },
  {
    "id": "JUNE2025_Q83",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "UNIT 3: Human Genetics",
    "unitHI": "इकाई 3: मानव आनुवंशिकी",
    "topicEN": "Molecular genetics",
    "topicHI": "आणविक आनुवंशिकी",
    "content": {
      "en": {
        "question": "Which of the following are the limitations/challenges of Ancient DNA research?\nA. Small fragment size of DNA\nB. Usually large fragment size of DNA which are highly difficult to sequence\nC. Presence of bacterial/fungal DNA is not considered as contamination\nD. People who work in the ancient DNA laboratory typically wear 'space suits' to minimize any DNA coming from them\nChoose the correct answer from the options given below:",
        "options": ["A and D Only", "B and C Only", "C and D Only", "A and B Only"],
        "explanation": "Ancient DNA is highly degraded, resulting in very small fragment sizes (A). Because it is so delicate, the biggest challenge is modern human contamination, forcing researchers to wear full protective 'space suits' (cleanroom gear) in the lab (D)."
      },
      "hi": {
        "question": "प्राचीन डीएनए (Ancient DNA) अनुसंधान की सीमाएं/चुनौतियां निम्नलिखित में से कौन सी हैं?\nA. डीएनए का छोटा टुकड़ा (Small fragment) आकार\nB. आमतौर पर डीएनए के बड़े टुकड़े का आकार जिसे अनुक्रमित करना अत्यधिक कठिन होता है\nC. जीवाणु/कवक डीएनए की उपस्थिति को संदूषण (contamination) नहीं माना जाता है\nD. प्राचीन डीएनए प्रयोगशाला में काम करने वाले लोग आमतौर पर उनसे आने वाले किसी भी डीएनए को कम करने के लिए 'स्पेस सूट' पहनते हैं\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["केवल A और D", "केवल B और C", "केवल C और D", "केवल A और B"],
        "explanation": "प्राचीन डीएनए अत्यधिक क्षरित (degraded) होता है, जिसके परिणामस्वरूप टुकड़े का आकार बहुत छोटा होता है (A)। क्योंकि यह बहुत नाजुक है, सबसे बड़ी चुनौती आधुनिक मानव संदूषण है, जिससे शोधकर्ताओं को प्रयोगशाला में पूर्ण सुरक्षात्मक 'स्पेस सूट' (क्लीनरूम गियर) पहनने के लिए मजबूर होना पड़ता है (D)।"
      }
    }
  },
  {
    "id": "JUNE2025_Q84",
    "difficulty": "hard",
    "correct": 2,
    "unitEN": "UNIT 6: Indian Prehistory",
    "unitHI": "इकाई 6: भारतीय प्रागितिहास",
    "topicEN": "Indus civilization",
    "topicHI": "सिंधु सभ्यता",
    "content": {
      "en": {
        "question": "The geographical location of important Indian Archaeological sites from west to east:\nA. Lothal\nB. Chirand\nC. Atranjikhera\nD. Chanu-daro\nChoose the correct answer from the options given below:",
        "options": ["A, C, D, B", "D, B, A, C", "D, A, C, B", "C, B, A, D"],
        "explanation": "From West to East: Chanhudaro is in Sindh, Pakistan (furthest west). Lothal is in Gujarat. Atranjikhera is in Uttar Pradesh. Chirand is in Bihar (furthest east)."
      },
      "hi": {
        "question": "पश्चिम से पूर्व तक महत्वपूर्ण भारतीय पुरातात्विक स्थलों की भौगोलिक स्थिति:\nA. लोथल (Lothal)\nB. चिरांद (Chirand)\nC. अतरंजीखेड़ा (Atranjikhera)\nD. चन्हुदड़ो (Chanu-daro)\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["A, C, D, B", "D, B, A, C", "D, A, C, B", "C, B, A, D"],
        "explanation": "पश्चिम से पूर्व की ओर: चन्हुदड़ो सिंध, पाकिस्तान (सबसे दूर पश्चिम) में है। लोथल गुजरात में है। अतरंजीखेड़ा उत्तर प्रदेश में है। चिरांद बिहार (सबसे दूर पूर्व) में है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q85",
    "difficulty": "hard",
    "correct": 1,
    "unitEN": "UNIT 2: Biological Evolution & Primatology",
    "unitHI": "इकाई 2: जैविक विकास और प्राइमेटोलॉजी",
    "topicEN": "Primate locomotion",
    "topicHI": "प्राइमेट लोकोमोशन",
    "content": {
      "en": {
        "question": `Match the LIST-I with LIST-II\n${matchTable("LIST-I (Primate Locomotion)","LIST-II (Primates)",[["A","Leaping","I","Howler monkey and Langur"],["B","Modified brachiators","II","Chimpanzee and gorilla"],["C","Semi-brachiators","III","Gibbon and Orangutan"],["D","Suspension","IV","Lemurs and tarsiers"]])}Choose the correct answer from the options given below:`,
        "options": ["A-IV, B-III, C-II, D-I", "A-IV, B-II, C-I, D-III", "A-IV, B-I, C-II, D-III", "A-I, B-II, C-III, D-IV"],
        "explanation": "Lemurs/tarsiers are vertical clingers and leapers. Chimps/gorillas are modified brachiators (knuckle-walkers). Howlers/langurs use semi-brachiation. Gibbons/orangutans are true suspensory brachiators."
      },
      "hi": {
        "question": `सूची-I को सूची-II के साथ सुमेलित करें\n${matchTable("सूची-I (प्राइमेट लोकोमोशन)","सूची-II (प्राइमेट)",[["A","कूदना (Leaping)","I","हाउलर बंदर और लंगूर"],["B","संशोधित ब्रैकिएटर्स (Modified brachiators)","II","चिंपैंजी और गोरिल्ला"],["C","अर्ध-ब्रैकिएटर्स (Semi-brachiators)","III","गिब्बन और ओरंगुटान"],["D","सस्पेंशन (Suspension)","IV","लीमर और टार्सियर"]])}नीचे दिए गए विकल्पों में से सही उत्तर चुनें:`,
        "options": ["A-IV, B-III, C-II, D-I", "A-IV, B-II, C-I, D-III", "A-IV, B-I, C-II, D-III", "A-I, B-II, C-III, D-IV"],
        "explanation": "लीमर/टार्सियर ऊर्ध्वाधर लटकने वाले और छलांग लगाने वाले (leapers) होते हैं। चिम्पैंजी/गोरिल्ला संशोधित ब्रैकिएटर (पोर पर चलने वाले) हैं। हाउलर/लंगूर अर्ध-ब्रैकिएशन (Semi-brachiation) का उपयोग करते हैं। गिब्बन/ओरंगुटान वास्तविक सस्पेंसरी ब्रैकिएटर्स हैं।"
      }
    }
  },
  {
    "id": "JUNE2025_Q86",
    "difficulty": "hard",
    "correct": 3,
    "unitEN": "UNIT 11: Miscellaneous & High-Yield Facts",
    "unitHI": "इकाई 11: विविध और उच्च उपज वाले तथ्य",
    "topicEN": "Important Terms & Concepts",
    "topicHI": "महत्वपूर्ण शर्तें और अवधारणाएं",
    "content": {
      "en": {
        "question": `Match the LIST-I with LIST-II\n${matchTable("LIST-I (Statement)","LIST-II (Anthropologist)",[["A","Totemism as a way of thinking about nature and culture","I","E.B. Tylor"],["B","Totemism as sacrifice and Incest regulation","II","Emile Durkheim"],["C","Totemism as an ancestral worship","III","Levi Strauss"],["D","Totemism as an elementary religion","IV","Sigmund Freud"]])}Choose the correct answer from the options given below:`,
        "options": ["A-II, B-III, C-I, D-IV", "A-II, B-I, C-IV, D-III", "A-IV, B-III, C-I, D-II", "A-III, B-IV, C-I, D-II"],
        "explanation": "Lévi-Strauss viewed totemism as an intellectual tool ('good to think with'). Freud linked it to the Oedipus complex and incest taboos. Tylor saw it as tied to animism and ancestral spirits. Durkheim analyzed it as the most elementary form of religious life."
      },
      "hi": {
        "question": `सूची-I को सूची-II के साथ सुमेलित करें\n${matchTable("सूची-I (कथन)","सूची-II (मानवविज्ञानी)",[["A","प्रकृति और संस्कृति के बारे में सोचने के तरीके के रूप में टोटेमवाद","I","ई.बी. टायलर"],["B","बलिदान और अनाचार (Incest) नियमन के रूप में टोटेमवाद","II","एमिल दुर्खीम"],["C","पैतृक पूजा के रूप में टोटेमवाद","III","लेवी स्ट्रॉस"],["D","एक प्रारंभिक धर्म के रूप में टोटेमवाद","IV","सिगमंड फ्रायड"]])}नीचे दिए गए विकल्पों में से सही उत्तर चुनें:`,
        "options": ["A-II, B-III, C-I, D-IV", "A-II, B-I, C-IV, D-III", "A-IV, B-III, C-I, D-II", "A-III, B-IV, C-I, D-II"],
        "explanation": "लेवी-स्ट्रॉस ने टोटेमवाद को एक बौद्धिक उपकरण ('सोचने में अच्छा') के रूप में देखा। फ्रायड ने इसे ओडिपस कॉम्प्लेक्स और अनाचार वर्जनाओं से जोड़ा। टायलर ने इसे जीववाद और पैतृक आत्माओं से जुड़ा देखा। दुर्खीम ने इसे धार्मिक जीवन के सबसे प्रारंभिक रूप के रूप में विश्लेषित किया।"
      }
    }
  },
  {
    "id": "JUNE2025_Q87",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "UNIT 11: Miscellaneous & High-Yield Facts",
    "unitHI": "इकाई 11: विविध और उच्च उपज वाले तथ्य",
    "topicEN": "Important Terms & Concepts",
    "topicHI": "महत्वपूर्ण शर्तें और अवधारणाएं",
    "content": {
      "en": {
        "question": "The term use by James Scott for the study of Peasant economy where mutual institutions are designed to insure against risk rather than on the principle of individual maximization is called as:",
        "options": ["Substantivism", "Informal Economy", "Moral Economy", "Ethical Economy"],
        "explanation": "In his seminal 1976 book 'The Moral Economy of the Peasant', James C. Scott introduced the concept of the 'moral economy', explaining how peasant societies prioritize a 'safety-first' subsistence strategy and mutual support networks over capitalist profit maximization."
      },
      "hi": {
        "question": "किसान अर्थव्यवस्था (Peasant economy) के अध्ययन के लिए जेम्स स्कॉट द्वारा प्रयुक्त वह शब्द क्या है जहाँ पारस्परिक संस्थानों को व्यक्तिगत अधिकतमकरण के सिद्धांत के बजाय जोखिम के खिलाफ बीमा करने के लिए डिज़ाइन किया गया है?",
        "options": ["सब्सटेंटिविज़्म (Substantivism)", "अनौपचारिक अर्थव्यवस्था (Informal Economy)", "नैतिक अर्थव्यवस्था (Moral Economy)", "नैतिक (Ethical) अर्थव्यवस्था"],
        "explanation": "अपनी मौलिक 1976 की पुस्तक 'द मोरल इकोनॉमी ऑफ द पीजेंट' में, जेम्स सी. स्कॉट ने 'नैतिक अर्थव्यवस्था' (moral economy) की अवधारणा पेश की, जिसमें बताया गया कि कैसे किसान समाज पूंजीवादी लाभ को अधिकतम करने के बजाय 'सुरक्षा-प्रथम' निर्वाह रणनीति और पारस्परिक समर्थन नेटवर्क को प्राथमिकता देते हैं।"
      }
    }
  },
  {
    "id": "JUNE2025_Q88",
    "difficulty": "easy",
    "correct": 3,
    "unitEN": "UNIT 6: Indian Prehistory",
    "unitHI": "इकाई 6: भारतीय प्रागितिहास",
    "topicEN": "Lower palaeolithic India",
    "topicHI": "निचला पुरापाषाण काल भारत",
    "content": {
      "en": {
        "question": "The first discovery of hand axes at Pallavaram in 1883 were discovered by:",
        "options": ["Daniel Wilson", "Valentine Ball", "A.C. Carlleyle", "Robert Bruce Foote"],
        "explanation": "Robert Bruce Foote, a British geologist, is considered the 'Father of Indian Prehistory'. He discovered the first Palaeolithic tool (a handaxe) in India at Pallavaram near Chennai in 1863 (often misprinted as 1883 in exams)."
      },
      "hi": {
        "question": "1883 में पल्लावरम में हस्त-कुठार (hand axes) की पहली खोज किसके द्वारा की गई थी?",
        "options": ["डैनियल विल्सन", "वैलेंटाइन बॉल", "ए.सी. कार्लाइल", "रॉबर्ट ब्रूस फूटे (Robert Bruce Foote)"],
        "explanation": "एक ब्रिटिश भूविज्ञानी रॉबर्ट ब्रूस फूटे को 'भारतीय प्रागितिहास का जनक' माना जाता है। उन्होंने 1863 में चेन्नई के पास पल्लावरम में भारत में पहला पुरापाषाणकालीन उपकरण (एक हस्तकुठार) खोजा (परीक्षाओं में अक्सर 1883 के रूप में गलत मुद्रित होता है)।"
      }
    }
  },
  {
    "id": "JUNE2025_Q89",
    "difficulty": "hard",
    "correct": 3,
    "unitEN": "UNIT 4: Growth, Adaptation & Demography",
    "unitHI": "इकाई 4: विकास, अनुकूलन और जनसांख्यिकी",
    "topicEN": "Growth curves",
    "topicHI": "विकास वक्र (Growth curves)",
    "content": {
      "en": {
        "question": `Match the LIST-I with LIST-II\n${matchTable("LIST-I","LIST-II",[["A","Distance curve","I","An event in the life cycle that includes rapid increase in stature, development of sex organs, and development of secondary sexual characteristics"],["B","Velocity curve","II","A rapid increase in stature and other dimensions of the body that occurs during puberty"],["C","Adolescent growth spurt","III","A graph that shows the total height (or other measurement) of an individual on a series of dates"],["D","Puberty","IV","A curve that illustrates the rate of growth over time by plotting the degree of growth per unit of time"]])}Choose the correct answer from the options given below:`,
        "options": ["A-IV, B-I, C-III, D-II", "A-II, B-IV, C-I, D-III", "A-I, B-III, C-IV, D-II", "A-III, B-IV, C-II, D-I"],
        "explanation": "A distance curve tracks total growth achieved over time (III). A velocity curve plots the rate/speed of growth per unit of time (IV). The adolescent spurt is the specific rapid height increase (II), while puberty is the broader event including sexual maturation (I)."
      },
      "hi": {
        "question": `सूची-I को सूची-II के साथ सुमेलित करें\n${matchTable("सूची-I","सूची-II",[["A","दूरी वक्र (Distance curve)","I","जीवन चक्र में एक घटना जिसमें कद में तेजी से वृद्धि, यौन अंगों का विकास और द्वितीयक यौन विशेषताओं का विकास शामिल है"],["B","वेग वक्र (Velocity curve)","II","कौमार्य (puberty) के दौरान कद और शरीर के अन्य आयामों में तेजी से वृद्धि"],["C","किशोरावस्था में तीव्र वृद्धि (Adolescent growth spurt)","III","एक ग्राफ जो तिथियों की एक श्रृंखला पर किसी व्यक्ति की कुल ऊंचाई (या अन्य माप) दिखाता है"],["D","यौवन (Puberty)","IV","एक वक्र जो प्रति इकाई समय वृद्धि की डिग्री की साजिश रचकर समय के साथ विकास की दर को दर्शाता है"]])}नीचे दिए गए विकल्पों में से सही उत्तर चुनें:`,
        "options": ["A-IV, B-I, C-III, D-II", "A-II, B-IV, C-I, D-III", "A-I, B-III, C-IV, D-II", "A-III, B-IV, C-II, D-I"],
        "explanation": "एक दूरी वक्र (distance curve) समय के साथ प्राप्त कुल वृद्धि (III) को ट्रैक करता है। एक वेग वक्र (velocity curve) प्रति इकाई समय (IV) वृद्धि की दर/गति को दर्शाता है। किशोर वृद्धि (adolescent spurt) विशिष्ट तीव्र ऊंचाई वृद्धि (II) है, जबकि यौवन (puberty) यौन परिपक्वता (I) सहित व्यापक घटना है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q90",
    "difficulty": "hard",
    "correct": 2,
    "unitEN": "UNIT 11: Miscellaneous & High-Yield Facts",
    "unitHI": "इकाई 11: विविध और उच्च उपज वाले तथ्य",
    "topicEN": "Chronology & Sequences",
    "topicHI": "कालक्रम और अनुक्रम",
    "content": {
      "en": {
        "question": "Arrange the following classifications of human physique or methods of somatotyping from earliest to latest:\nA. Kretschmer's classification\nB. Heath and Carter's Method of Somatotyping\nC. Sheldon's classification\nD. Parnell's Method of somatotyping\nChoose the correct answer from the options given below:",
        "options": ["A, D, B, C", "A, D, C, B", "A, C, D, B", "D, B, A, C"],
        "explanation": "Chronological sequence: Ernst Kretschmer (1921) → William Sheldon's modern somatotype (1940s) → R.W. Parnell's objective modification (1958) → Barbara Heath and J.E.L. Carter's refined method (1967)."
      },
      "hi": {
        "question": "मानव शरीर के निम्नलिखित वर्गीकरण या सोमैटोटाइपिंग (somatotyping) के तरीकों को प्रारंभिक से नवीनतम तक व्यवस्थित करें:\nA. क्रेत्स्चमर (Kretschmer) का वर्गीकरण\nB. हीथ और कार्टर (Heath and Carter) की सोमैटोटाइपिंग विधि\nC. शेल्डन (Sheldon) का वर्गीकरण\nD. पार्नेल (Parnell) की सोमैटोटाइपिंग विधि\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["A, D, B, C", "A, D, C, B", "A, C, D, B", "D, B, A, C"],
        "explanation": "कालानुक्रमिक अनुक्रम: अर्नस्ट क्रेत्स्चमर (1921) → विलियम शेल्डन का आधुनिक सोमैटोटाइप (1940 के दशक) → आर.डब्ल्यू. पार्नेल का वस्तुनिष्ठ संशोधन (1958) → बारबरा हीथ और जे.ई.एल. कार्टर की परिष्कृत विधि (1967)।"
      }
    }
  },
  {
    "id": "JUNE2025_Q91",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "UNIT 3: Human Genetics",
    "unitHI": "इकाई 3: मानव आनुवंशिकी",
    "topicEN": "Hardy Weinberg equilibrium",
    "topicHI": "हार्डी वेनबर्ग संतुलन",
    "content": {
      "en": {
        "question": passageHTML(PASSAGE_BLOOD.en) + "<strong>Q. Who were the discoverers of the fundamental theorem of population genetics?</strong>",
        "options": ["Hardy and Weinberg", "Haldane and Penrose", "Harris and Watkins", "Pauling and Nei"],
        "explanation": "G.H. Hardy and Wilhelm Weinberg independently discovered the Hardy-Weinberg principle in 1908, which acts as the foundational theorem of population genetics, establishing the baseline for allele frequencies in a non-evolving population."
      },
      "hi": {
        "question": passageHTML(PASSAGE_BLOOD.hi) + "<strong>प्रश्न. जनसंख्या आनुवंशिकी (population genetics) के मौलिक प्रमेय के खोजकर्ता कौन थे?</strong>",
        "options": ["हार्डी और वेनबर्ग", "हल्डेन और पेनरोज़", "हैरिस और वाटकिंस", "पॉलिंग और नेई"],
        "explanation": "जी.एच. हार्डी और विल्हेम वेनबर्ग ने 1908 में स्वतंत्र रूप से हार्डी-वेनबर्ग सिद्धांत की खोज की, जो जनसंख्या आनुवंशिकी के मूलभूत प्रमेय के रूप में कार्य करता है, और एक गैर-विकसित आबादी में एलील आवृत्तियों के लिए आधार रेखा स्थापित करता है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q92",
    "difficulty": "easy",
    "correct": 3,
    "unitEN": "UNIT 3: Human Genetics",
    "unitHI": "इकाई 3: मानव आनुवंशिकी",
    "topicEN": "Molecular genetics",
    "topicHI": "आणविक आनुवंशिकी",
    "content": {
      "en": {
        "question": passageHTML(PASSAGE_BLOOD.en) + "<strong>Q. Blood groups were discovered by</strong>",
        "options": ["Hirschfeld", "Levine", "Davenport", "Landsteiner"],
        "explanation": "The ABO blood group system was discovered in 1900 by the Austrian physician and immunologist Karl Landsteiner, a breakthrough that earned him the Nobel Prize."
      },
      "hi": {
        "question": passageHTML(PASSAGE_BLOOD.hi) + "<strong>प्रश्न. रक्त समूहों की खोज किसके द्वारा की गई थी?</strong>",
        "options": ["हिर्शफेल्ड", "लेविन", "डेवनपोर्ट", "लैंडस्टीनर (Landsteiner)"],
        "explanation": "ABO रक्त समूह प्रणाली की खोज 1900 में ऑस्ट्रियाई चिकित्सक और प्रतिरक्षाविज्ञानी कार्ल लैंडस्टीनर ने की थी, यह एक ऐसी सफलता थी जिसने उन्हें नोबेल पुरस्कार दिलाया।"
      }
    }
  },
  {
    "id": "JUNE2025_Q93",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "UNIT 3: Human Genetics",
    "unitHI": "इकाई 3: मानव आनुवंशिकी",
    "topicEN": "Modes of inheritance",
    "topicHI": "विरासत के तरीके (Modes of inheritance)",
    "content": {
      "en": {
        "question": passageHTML(PASSAGE_BLOOD.en) + "<strong>Q. The proof that blood types are inherited was discovered by</strong>",
        "options": ["Penrose and Fisher", "von Dungern and Hirschfeld", "Wiener and Levine", "Arbor and Bernstein"],
        "explanation": "In 1910, Emil von Dungern and Ludwik Hirszfeld proved through family studies that ABO blood types are inherited from parents to offspring following Mendelian laws of genetics."
      },
      "hi": {
        "question": passageHTML(PASSAGE_BLOOD.hi) + "<strong>प्रश्न. यह प्रमाण कि रक्त के प्रकार विरासत में मिले हैं, किसके द्वारा खोजा गया था?</strong>",
        "options": ["पेनरोज़ और फिशर", "वॉन डंगर्न और हिर्शफेल्ड", "वीनर और लेविन", "आर्बर और बर्नस्टीन"],
        "explanation": "1910 में, एमिल वॉन डंगर्न और लुडविक हिर्सज़फेल्ड ने पारिवारिक अध्ययनों के माध्यम से साबित किया कि आनुवंशिकी के मेंडेलियन कानूनों का पालन करते हुए ABO रक्त प्रकार माता-पिता से संतानों में विरासत में मिलते हैं।"
      }
    }
  },
  {
    "id": "JUNE2025_Q94",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "UNIT 3: Human Genetics",
    "unitHI": "इकाई 3: मानव आनुवंशिकी",
    "topicEN": "Molecular genetics",
    "topicHI": "आणविक आनुवंशिकी",
    "content": {
      "en": {
        "question": passageHTML(PASSAGE_BLOOD.en) + "<strong>Q. The combined efforts of which of the following researchers led to the discovery of Rh factor?</strong>",
        "options": ["Bodmer, Sforza and Nei", "Garrod, Bateson and Kemp", "Wiener, Levine, and Landsteiner", "Davenport, McKusick and Neel"],
        "explanation": "The Rhesus (Rh) blood group system was discovered in 1940 by Karl Landsteiner and Alexander S. Wiener, building directly upon the crucial clinical observations of Philip Levine and Rufus Stetson."
      },
      "hi": {
        "question": passageHTML(PASSAGE_BLOOD.hi) + "<strong>प्रश्न. निम्नलिखित में से किस शोधकर्ता के संयुक्त प्रयासों से Rh कारक की खोज हुई?</strong>",
        "options": ["बोडमर, स्फोर्ज़ा और नेई", "गैरोड, बेटसन और केम्प", "वीनर, लेविन और लैंडस्टीनर", "डेवनपोर्ट, मैक्यूसिक और नील"],
        "explanation": "रीसस (Rh) रक्त समूह प्रणाली की खोज 1940 में कार्ल लैंडस्टीनर और अलेक्जेंडर एस. वीनर ने की थी, जो सीधे तौर पर फिलिप लेविन और रूफस स्टेटसन के महत्वपूर्ण नैदानिक ​​अवलोकनों पर आधारित थी।"
      }
    }
  },
  {
    "id": "JUNE2025_Q95",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "UNIT 3: Human Genetics",
    "unitHI": "इकाई 3: मानव आनुवंशिकी",
    "topicEN": "Modes of inheritance",
    "topicHI": "विरासत के तरीके (Modes of inheritance)",
    "content": {
      "en": {
        "question": passageHTML(PASSAGE_BLOOD.en) + "<strong>Q. Blood group characters are due to multiple alleles at one locus was proposed by</strong>",
        "options": ["Bernstein in 1924", "Galton in 1928", "Fisher in 1935", "Haldane in 1948"],
        "explanation": "In 1924, the German mathematician Felix Bernstein correctly proved that the inheritance of the ABO blood groups is controlled by three multiple alleles (A, B, and O) at a single genetic locus."
      },
      "hi": {
        "question": passageHTML(PASSAGE_BLOOD.hi) + "<strong>प्रश्न. रक्त समूह वर्ण (characters) एक स्थान पर एकाधिक एलील (multiple alleles) के कारण होते हैं, यह किसके द्वारा प्रस्तावित किया गया था?</strong>",
        "options": ["1924 में बर्नस्टीन", "1928 में गैल्टन", "1935 में फिशर", "1948 में हेल्डन"],
        "explanation": "1924 में, जर्मन गणितज्ञ फेलिक्स बर्नस्टीन ने सही ढंग से साबित किया कि एबीओ रक्त समूहों की विरासत एक एकल आनुवंशिक स्थान पर तीन एकाधिक एलील (A, B, और O) द्वारा नियंत्रित होती है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q96",
    "difficulty": "easy",
    "correct": 1,
    "unitEN": "UNIT 1: Research Methodology & Basics",
    "unitHI": "इकाई 1: शोध पद्धति और मूल बातें",
    "topicEN": "Types of research",
    "topicHI": "शोध के प्रकार",
    "content": {
      "en": {
        "question": passageHTML(PASSAGE_NOMOTHETIC.en) + "<strong>Q. Inductive approach implies moving from:</strong>",
        "options": ["Synchronic to Diachronic", "Particular to General", "General to Particular", "Diachronic to Synchronic"],
        "explanation": "Inductive reasoning is a 'bottom-up' approach. A researcher observes specific, particular instances (e.g., in a tribe) and then builds up to broader, general theories or laws."
      },
      "hi": {
        "question": passageHTML(PASSAGE_NOMOTHETIC.hi) + "<strong>प्रश्न. आगमनात्मक दृष्टिकोण (Inductive approach) का तात्पर्य किससे आगे बढ़ना है:</strong>",
        "options": ["तुल्यकालिक से कालानुक्रमिक (Synchronic to Diachronic)", "विशिष्ट से सामान्य (Particular to General)", "सामान्य से विशिष्ट (General to Particular)", "कालानुक्रमिक से तुल्यकालिक (Diachronic to Synchronic)"],
        "explanation": "आगमनात्मक तर्क एक 'नीचे-से-ऊपर' (bottom-up) दृष्टिकोण है। एक शोधकर्ता विशिष्ट, विशेष उदाहरणों (जैसे, एक जनजाति में) का अवलोकन करता है और फिर व्यापक, सामान्य सिद्धांतों या कानूनों का निर्माण करता है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q97",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "UNIT 1: Research Methodology & Basics",
    "unitHI": "इकाई 1: शोध पद्धति और मूल बातें",
    "topicEN": "Types of research",
    "topicHI": "शोध के प्रकार",
    "content": {
      "en": {
        "question": passageHTML(PASSAGE_NOMOTHETIC.en) + "<strong>Q. Hypothesis testing would most likely be a feature of:</strong>",
        "options": ["Ideographic Research", "Nomothetic Research", "Participatory Research", "Ethnographic Research"],
        "explanation": "Nomothetic research is quantitative and deductive. It seeks to establish universal laws (nomos) and principles across large populations, making strict hypothesis testing its core feature."
      },
      "hi": {
        "question": passageHTML(PASSAGE_NOMOTHETIC.hi) + "<strong>प्रश्न. परिकल्पना परीक्षण (Hypothesis testing) संभवतः किसकी एक विशेषता होगी:</strong>",
        "options": ["इडियोग्राफिक (Ideographic) शोध", "नोमोथेटिक (Nomothetic) शोध", "सहभागी शोध", "नृवंशविज्ञान (Ethnographic) शोध"],
        "explanation": "नोमोथेटिक शोध मात्रात्मक और निगमनात्मक है। यह बड़ी आबादी में सार्वभौमिक कानूनों (nomos) और सिद्धांतों को स्थापित करना चाहता है, जिससे सख्त परिकल्पना परीक्षण (hypothesis testing) इसकी मुख्य विशेषता बन जाती है।"
      }
    }
  },
  {
    "id": "JUNE2025_Q98",
    "difficulty": "easy",
    "correct": 3,
    "unitEN": "UNIT 1: Research Methodology & Basics",
    "unitHI": "इकाई 1: शोध पद्धति और मूल बातें",
    "topicEN": "Case study & life history",
    "topicHI": "केस स्टडी और जीवन इतिहास",
    "content": {
      "en": {
        "question": passageHTML(PASSAGE_NOMOTHETIC.en) + "<strong>Q. When a single example like an event and organization is studied in depth, it is called:</strong>",
        "options": ["Critical Ethnography", "Grounded Theory", "FGD", "Case Study"],
        "explanation": "A case study is a detailed, intensive, and in-depth idiographic investigation of a single specific unit—whether it be an individual, an event, an institution, or a single community."
      },
      "hi": {
        "question": passageHTML(PASSAGE_NOMOTHETIC.hi) + "<strong>प्रश्न. जब घटना और संगठन जैसे एक ही उदाहरण का गहराई से अध्ययन किया जाता है, तो इसे क्या कहा जाता है?</strong>",
        "options": ["क्रिटिकल एथ्नोग्राफी (Critical Ethnography)", "ग्राउंडेड थ्योरी (Grounded Theory)", "FGD", "केस स्टडी (Case Study)"],
        "explanation": "केस स्टडी एक एकल विशिष्ट इकाई की विस्तृत, गहन और गहन इडियोग्राफिक जांच है - चाहे वह कोई व्यक्ति हो, घटना हो, संस्था हो, या कोई एकल समुदाय हो।"
      }
    }
  },
  {
    "id": "JUNE2025_Q99",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "UNIT 1: Research Methodology & Basics",
    "unitHI": "इकाई 1: शोध पद्धति और मूल बातें",
    "topicEN": "Types of research",
    "topicHI": "शोध के प्रकार",
    "content": {
      "en": {
        "question": passageHTML(PASSAGE_NOMOTHETIC.en) + "<strong>Q. Who among the following predominantly used nomothetic method in his work?</strong>",
        "options": ["B. Malinowski", "C. Geertz", "E. Durkheim", "E. E. Evans-Pritchard"],
        "explanation": "Émile Durkheim, a founding figure of sociology, used a strict nomothetic (statistical/comparative) method in works like 'Suicide' to uncover general, universal laws of social behavior."
      },
      "hi": {
        "question": passageHTML(PASSAGE_NOMOTHETIC.hi) + "<strong>प्रश्न. निम्नलिखित में से किसने अपने काम में मुख्य रूप से नोमोथेटिक विधि (nomothetic method) का उपयोग किया?</strong>",
        "options": ["बी. मालिनोव्स्की", "सी. गीर्ट्ज़", "ई. दुर्खीम (E. Durkheim)", "ई. ई. इवांस-प्रिचर्ड"],
        "explanation": "समाजशास्त्र के संस्थापक व्यक्ति एमिल दुर्खीम (Émile Durkheim) ने सामाजिक व्यवहार के सामान्य, सार्वभौमिक कानूनों को उजागर करने के लिए 'सुसाइड' (Suicide) जैसे कार्यों में एक सख्त नोमोथेटिक (सांख्यिकीय/तुलनात्मक) पद्धति का उपयोग किया।"
      }
    }
  },
  {
    "id": "JUNE2025_Q100",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "UNIT 1: Research Methodology & Basics",
    "unitHI": "इकाई 1: शोध पद्धति और मूल बातें",
    "topicEN": "Grounded theory",
    "topicHI": "ग्राउंडेड थ्योरी",
    "content": {
      "en": {
        "question": passageHTML(PASSAGE_NOMOTHETIC.en) + "<strong>Q. Grounded Theory is a kind of:</strong>",
        "options": ["Inductive Method", "Deductive Method", "Participatory Method", "Dialectic Method"],
        "explanation": "Developed by Glaser and Strauss, Grounded Theory is an inductive methodology where theories are not pre-conceived but are strictly 'grounded' in and emerge directly from the gathered data."
      },
      "hi": {
        "question": passageHTML(PASSAGE_NOMOTHETIC.hi) + "<strong>प्रश्न. ग्राउंडेड थ्योरी (Grounded Theory) एक प्रकार की है:</strong>",
        "options": ["आगमनात्मक विधि (Inductive Method)", "निगमनात्मक विधि (Deductive Method)", "सहभागी विधि (Participatory Method)", "द्वंद्वात्मक विधि (Dialectic Method)"],
        "explanation": "ग्लेसर और स्ट्रॉस द्वारा विकसित, ग्राउंडेड थ्योरी एक आगमनात्मक (inductive) कार्यप्रणाली है जहां सिद्धांतों की पूर्व-कल्पना नहीं की जाती है, बल्कि वे कड़ाई से एकत्र किए गए डेटा में 'निहित' (grounded) होते हैं और सीधे उसी से उभरते हैं।"
      }
    }
  }            
];
