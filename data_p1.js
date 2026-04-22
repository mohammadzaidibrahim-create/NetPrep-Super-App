/* ══════════════════════════════════════════════════════════════════════
   MOCK TEST: PASSAGE CONSTANTS (BILINGUAL)
══════════════════════════════════════════════════════════════════════ */

const PASSAGE_MANAGEMENT = {
  en: `Organized endeavors directed by people responsible for planning, organizing, leading and controlling activities have existed for thousands of years. The Egyptian pyramids and the Great Wall of China, for instance, are tangible evidence that projects of tremendous scope, employing tens of thousands of people, were undertaken well before modern times. The pyramids are a particularly interesting example. The construction of a single pyramid occupied more than 100,000 workers for 20 years. Who told each worker what to do? Who ensured that there would be enough stones at the site to keep workers busy? The answer to such questions is managers. Regardless of what managers were called at the time, someone had to plan what was to be done, organize people and materials to do it, lead and direct the workers, and impose some controls to ensure that everything was done as planned.\n\nAnother example of early management can be seen during the 1400s in the city of Venice, Italy, a major economic and trade center. The Venetians developed an early form of business enterprise and engaged in many activities common to today's organizations. For instance, at the arsenal of Venice, warships were floated along the canals, and at each stop materials and riggings were added to the ship. Doesn't that sound a lot like a car "floating" along an automobile assembly line while components are added to it? In addition to this assembly line, the Venetians also used warehouse and inventory systems to keep track of materials, human resource management systems to manage the labor force, and an accounting system to keep track of revenues and costs.`,
  hi: `योजना बनाने, आयोजन करने, नेतृत्व करने और गतिविधियों को नियंत्रित करने के लिए जिम्मेदार लोगों द्वारा निर्देशित संगठित प्रयास हजारों वर्षों से मौजूद हैं। उदाहरण के लिए, मिस्र के पिरामिड और चीन की महान दीवार इस बात के ठोस प्रमाण हैं कि आधुनिक समय से बहुत पहले हजारों लोगों को रोजगार देने वाली विशाल पैमाने की परियोजनाएं शुरू की गई थीं। पिरामिड विशेष रूप से दिलचस्प उदाहरण हैं। एक ही पिरामिड के निर्माण में 20 वर्षों तक 100,000 से अधिक श्रमिकों को लगाया गया था। प्रत्येक कार्यकर्ता को किसने बताया कि क्या करना है? किसने सुनिश्चित किया कि श्रमिकों को व्यस्त रखने के लिए साइट पर पर्याप्त पत्थर होंगे? ऐसे सवालों का जवाब 'प्रबंधक' (managers) है। उस समय प्रबंधकों को चाहे जो भी कहा जाता हो, किसी को यह योजना बनानी थी कि क्या किया जाना है, इसे करने के लिए लोगों और सामग्रियों को व्यवस्थित करना था, श्रमिकों का नेतृत्व और निर्देशन करना था, और यह सुनिश्चित करने के लिए कुछ नियंत्रण लागू करने थे कि सब कुछ योजना के अनुसार किया गया।\n\nप्रारंभिक प्रबंधन का एक अन्य उदाहरण 1400 के दशक के दौरान इटली के वेनिस शहर में देखा जा सकता है, जो एक प्रमुख आर्थिक और व्यापारिक केंद्र था। विनीशियन लोगों ने व्यावसायिक उद्यम का एक प्रारंभिक रूप विकसित किया और आज के संगठनों में आम कई गतिविधियों में संलग्न हुए। उदाहरण के लिए, वेनिस के शस्त्रागार में, युद्धपोतों को नहरों के किनारे तैराया जाता था, और प्रत्येक पड़ाव पर जहाज में सामग्री और रिगिंग जोड़ी जाती थी। क्या यह एक ऑटोमोबाइल असेंबली लाइन के साथ "तैरती" एक कार की तरह नहीं लगता है जबकि इसमें घटक जोड़े जाते हैं? इस असेंबली लाइन के अलावा, विनीशियन लोगों ने सामग्री पर नज़र रखने के लिए गोदाम और इन्वेंट्री सिस्टम, श्रम बल का प्रबंधन करने के लिए मानव संसाधन प्रबंधन प्रणाली, और राजस्व व लागत पर नज़र रखने के लिए एक लेखा प्रणाली (accounting system) का भी उपयोग किया।`
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
const TEST_JAN_2026_P1 = [
  {
    "id": "p1-jan2026-q1",
    "difficulty": "medium",
    "correct": 3,
    "unitEN": "Unit 7: Data Interpretation",
    "unitHI": "इकाई 7: आंकड़ों की व्याख्या",
    "topicEN": "Data interpretation",
    "topicHI": "आंकड़ों की व्याख्या",
    "content": {
      "en": {
        "question": "<strong>Comprehension:</strong><br>Study carefully the table given below and answer the question. A college has four programs B.A., B.Sc., B.Com. and B.B.A. The results of the mid-semester and end-semester tests are shown in the table given below.<br><br><table border='1' style='border-collapse:collapse; width:100%; text-align:center; background:rgba(255,255,255,0.05);'><tr><th style='padding:8px;'>Results</th><th style='padding:8px;'>B.A.</th><th style='padding:8px;'>B.Sc.</th><th style='padding:8px;'>B.Com.</th><th style='padding:8px;'>B.B.A.</th></tr><tr><td style='padding:8px;'>Failed in both tests</td><td>28</td><td>23</td><td>17</td><td>27</td></tr><tr><td style='padding:8px;'>Failed in mid-semester but passed in end-semester</td><td>14</td><td>12</td><td>8</td><td>13</td></tr><tr><td style='padding:8px;'>Passed in mid-semester but failed in end-semester</td><td>6</td><td>17</td><td>9</td><td>15</td></tr><tr><td style='padding:8px;'>Passed in both tests</td><td>64</td><td>55</td><td>46</td><td>76</td></tr></table><br><br><strong>Question:</strong><br>If the number of students passing a test be considered a criterion for comparison of difficulty level of two tests, then mid-semester test of which of the following programs was the least difficult?",
        "options": ["B.A.", "B.Sc.", "B.Com.", "B.B.A."],
        "explanation": "To find the least difficult test, we need to find the program with the HIGHEST passing percentage in the mid-semester test.<br>Total students in each program:<br>B.A. = 28+14+6+64 = 112<br>B.Sc. = 23+12+17+55 = 107<br>B.Com. = 17+8+9+46 = 80<br>B.B.A. = 27+13+15+76 = 131<br><br>Students who passed mid-semester = (Passed mid but failed end) + (Passed both).<br>B.A. = 6 + 64 = 70 (70/112 = 62.5%)<br>B.Sc. = 17 + 55 = 72 (72/107 = 67.2%)<br>B.Com. = 9 + 46 = 55 (55/80 = 68.75%)<br>B.B.A. = 15 + 76 = 91 (91/131 = 69.46%)<br><br>B.B.A. has the highest passing percentage (69.46%), making its mid-semester test the least difficult."
      },
      "hi": {
        "question": "<strong>गद्यांश:</strong><br>नीचे दी गई तालिका का ध्यानपूर्वक अध्ययन करें और प्रश्न का उत्तर दें। एक कॉलेज में चार कार्यक्रम हैं: B.A., B.Sc., B.Com. और B.B.A. मिड-सेमेस्टर और एंड-सेमेस्टर परीक्षाओं के परिणाम नीचे दी गई तालिका में दिखाए गए हैं।<br><br><table border='1' style='border-collapse:collapse; width:100%; text-align:center; background:rgba(255,255,255,0.05);'><tr><th style='padding:8px;'>परिणाम</th><th style='padding:8px;'>B.A.</th><th style='padding:8px;'>B.Sc.</th><th style='padding:8px;'>B.Com.</th><th style='padding:8px;'>B.B.A.</th></tr><tr><td style='padding:8px;'>दोनों परीक्षाओं में अनुत्तीर्ण</td><td>28</td><td>23</td><td>17</td><td>27</td></tr><tr><td style='padding:8px;'>मिड-सेमेस्टर में अनुत्तीर्ण लेकिन एंड-सेमेस्टर में उत्तीर्ण</td><td>14</td><td>12</td><td>8</td><td>13</td></tr><tr><td style='padding:8px;'>मिड-सेमेस्टर में उत्तीर्ण लेकिन एंड-सेमेस्टर में अनुत्तीर्ण</td><td>6</td><td>17</td><td>9</td><td>15</td></tr><tr><td style='padding:8px;'>दोनों परीक्षाओं में उत्तीर्ण</td><td>64</td><td>55</td><td>46</td><td>76</td></tr></table><br><br><strong>प्रश्न:</strong><br>यदि किसी परीक्षा में उत्तीर्ण होने वाले छात्रों की संख्या को दो परीक्षाओं के कठिनाई स्तर की तुलना के लिए मानदंड माना जाए, तो निम्नलिखित में से किस कार्यक्रम की मिड-सेमेस्टर परीक्षा सबसे कम कठिन थी?",
        "options": ["B.A.", "B.Sc.", "B.Com.", "B.B.A."],
        "explanation": "सबसे कम कठिन परीक्षा खोजने के लिए, हमें उस कार्यक्रम को खोजना होगा जिसमें मिड-सेमेस्टर परीक्षा में उत्तीर्ण प्रतिशत सबसे अधिक है।<br>प्रत्येक कार्यक्रम में कुल छात्र:<br>B.A. = 28+14+6+64 = 112<br>B.Sc. = 23+12+17+55 = 107<br>B.Com. = 17+8+9+46 = 80<br>B.B.A. = 27+13+15+76 = 131<br><br>मिड-सेमेस्टर उत्तीर्ण करने वाले छात्र = (मिड में उत्तीर्ण लेकिन एंड में अनुत्तीर्ण) + (दोनों में उत्तीर्ण)।<br>B.A. = 6 + 64 = 70 (70/112 = 62.5%)<br>B.Sc. = 17 + 55 = 72 (72/107 = 67.2%)<br>B.Com. = 9 + 46 = 55 (55/80 = 68.75%)<br>B.B.A. = 15 + 76 = 91 (91/131 = 69.46%)<br><br>B.B.A. का उत्तीर्ण प्रतिशत सबसे अधिक (69.46%) है, जो इसकी मिड-सेमेस्टर परीक्षा को सबसे कम कठिन बनाता है।"
      }
    }
  },
  {
    "id": "p1-jan2026-q2",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "Unit 7: Data Interpretation",
    "unitHI": "इकाई 7: आंकड़ों की व्याख्या",
    "topicEN": "Data interpretation",
    "topicHI": "आंकड़ों की व्याख्या",
    "content": {
      "en": {
        "question": "<strong>Comprehension:</strong><br><em>(Refer to the data table provided in Question 1)</em><br><br><strong>Question:</strong><br>Which program has the lowest passing percentage in end-semester test?",
        "options": ["B.A.", "B.Sc.", "B.Com.", "B.B.A."],
        "explanation": "To find the lowest passing percentage in the end-semester test, calculate the passed students for end-semester: (Failed mid but passed end) + (Passed both).<br><br>B.A.: 14 + 64 = 78 (78/112 = 69.6%)<br>B.Sc.: 12 + 55 = 67 (67/107 = 62.6%)<br>B.Com.: 8 + 46 = 54 (54/80 = 67.5%)<br>B.B.A.: 13 + 76 = 89 (89/131 = 67.9%)<br><br>B.Sc. has the lowest passing percentage in the end-semester test at 62.6%."
      },
      "hi": {
        "question": "<strong>गद्यांश:</strong><br><em>(प्रश्न 1 में दी गई डेटा तालिका का संदर्भ लें)</em><br><br><strong>प्रश्न:</strong><br>एंड-सेमेस्टर परीक्षा में किस कार्यक्रम का उत्तीर्ण प्रतिशत सबसे कम है?",
        "options": ["B.A.", "B.Sc.", "B.Com.", "B.B.A."],
        "explanation": "एंड-सेमेस्टर परीक्षा में सबसे कम उत्तीर्ण प्रतिशत ज्ञात करने के लिए, एंड-सेमेस्टर के लिए उत्तीर्ण छात्रों की गणना करें: (मिड में अनुत्तीर्ण लेकिन एंड में उत्तीर्ण) + (दोनों में उत्तीर्ण)।<br><br>B.A.: 14 + 64 = 78 (78/112 = 69.6%)<br>B.Sc.: 12 + 55 = 67 (67/107 = 62.6%)<br>B.Com.: 8 + 46 = 54 (54/80 = 67.5%)<br>B.B.A.: 13 + 76 = 89 (89/131 = 67.9%)<br><br>B.Sc. का एंड-सेमेस्टर परीक्षा में सबसे कम उत्तीर्ण प्रतिशत 62.6% है।"
      }
    }
  },
  {
    "id": "p1-jan2026-q3",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "Unit 7: Data Interpretation",
    "unitHI": "इकाई 7: आंकड़ों की व्याख्या",
    "topicEN": "Data interpretation",
    "topicHI": "आंकड़ों की व्याख्या",
    "content": {
      "en": {
        "question": "<strong>Comprehension:</strong><br><em>(Refer to the data table provided in Question 1)</em><br><br><strong>Question:</strong><br>Which program has the highest failure rate in the mid-semester test?",
        "options": ["B.A.", "B.Sc.", "B.Com.", "B.B.A."],
        "explanation": "Highest failure rate is the inverse of the passing percentage. We calculated the passing percentages for the mid-semester test in Question 1:<br><br>B.A. Pass % = 62.5% (Failure = 37.5%)<br>B.Sc. Pass % = 67.2% (Failure = 32.8%)<br>B.Com. Pass % = 68.75% (Failure = 31.25%)<br>B.B.A. Pass % = 69.46% (Failure = 30.54%)<br><br>Since B.A. had the lowest passing percentage, it naturally has the highest failure rate."
      },
      "hi": {
        "question": "<strong>गद्यांश:</strong><br><em>(प्रश्न 1 में दी गई डेटा तालिका का संदर्भ लें)</em><br><br><strong>प्रश्न:</strong><br>मिड-सेमेस्टर परीक्षा में किस कार्यक्रम की अनुत्तीर्ण दर सबसे अधिक है?",
        "options": ["B.A.", "B.Sc.", "B.Com.", "B.B.A."],
        "explanation": "उच्चतम अनुत्तीर्ण दर उत्तीर्ण प्रतिशत का व्युत्क्रम (उल्टा) है। हमने प्रश्न 1 में मिड-सेमेस्टर परीक्षा के लिए उत्तीर्ण प्रतिशत की गणना की थी:<br><br>B.A. उत्तीर्ण % = 62.5% (अनुत्तीर्ण = 37.5%)<br>B.Sc. उत्तीर्ण % = 67.2% (अनुत्तीर्ण = 32.8%)<br>B.Com. उत्तीर्ण % = 68.75% (अनुत्तीर्ण = 31.25%)<br>B.B.A. उत्तीर्ण % = 69.46% (अनुत्तीर्ण = 30.54%)<br><br>चूंकि B.A. का उत्तीर्ण प्रतिशत सबसे कम था, इसलिए स्वाभाविक रूप से इसकी अनुत्तीर्ण दर सबसे अधिक है।"
      }
    }
  },
  {
    "id": "p1-jan2026-q4",
    "difficulty": "easy",
    "correct": 1,
    "unitEN": "Unit 7: Data Interpretation",
    "unitHI": "इकाई 7: आंकड़ों की व्याख्या",
    "topicEN": "Quantitative data",
    "topicHI": "मात्रात्मक आंकड़े",
    "content": {
      "en": {
        "question": "<strong>Comprehension:</strong><br><em>(Refer to the data table provided in Question 1)</em><br><br><strong>Question:</strong><br>How many students are there in the four programs?",
        "options": ["420", "430", "320", "330"],
        "explanation": "To find the total number of students across all four programs, we simply sum the totals of each column:<br><br>Total B.A. students = 112<br>Total B.Sc. students = 107<br>Total B.Com. students = 80<br>Total B.B.A. students = 131<br><br>Total = 112 + 107 + 80 + 131 = 430 students."
      },
      "hi": {
        "question": "<strong>गद्यांश:</strong><br><em>(प्रश्न 1 में दी गई डेटा तालिका का संदर्भ लें)</em><br><br><strong>प्रश्न:</strong><br>चारों कार्यक्रमों में कुल कितने छात्र हैं?",
        "options": ["420", "430", "320", "330"],
        "explanation": "सभी चार कार्यक्रमों में छात्रों की कुल संख्या ज्ञात करने के लिए, हम केवल प्रत्येक कॉलम के योग को जोड़ते हैं:<br><br>B.A. के कुल छात्र = 112<br>B.Sc. के कुल छात्र = 107<br>B.Com. के कुल छात्र = 80<br>B.B.A. के कुल छात्र = 131<br><br>कुल = 112 + 107 + 80 + 131 = 430 छात्र।"
      }
    }
  },
  {
    "id": "p1-jan2026-q5",
    "difficulty": "easy",
    "correct": 2,
    "unitEN": "Unit 7: Data Interpretation",
    "unitHI": "इकाई 7: आंकड़ों की व्याख्या",
    "topicEN": "Data interpretation",
    "topicHI": "आंकड़ों की व्याख्या",
    "content": {
      "en": {
        "question": "<strong>Comprehension:</strong><br><em>(Refer to the data table provided in Question 1)</em><br><br><strong>Question:</strong><br>What is the ratio of number of students in B.Sc. program to the number of students in B.Com. program?",
        "options": ["80:107", "107:131", "107:80", "80:131"],
        "explanation": "From the calculations in previous questions, we know the total number of students in each specific program:<br><br>Total B.Sc. students = 23 + 12 + 17 + 55 = 107<br>Total B.Com. students = 17 + 8 + 9 + 46 = 80<br><br>The ratio of B.Sc. to B.Com. students is directly 107:80."
      },
      "hi": {
        "question": "<strong>गद्यांश:</strong><br><em>(प्रश्न 1 में दी गई डेटा तालिका का संदर्भ लें)</em><br><br><strong>प्रश्न:</strong><br>B.Sc. कार्यक्रम में छात्रों की संख्या और B.Com. कार्यक्रम में छात्रों की संख्या का अनुपात क्या है?",
        "options": ["80:107", "107:131", "107:80", "80:131"],
        "explanation": "पिछले प्रश्नों की गणना से, हम प्रत्येक विशिष्ट कार्यक्रम में छात्रों की कुल संख्या जानते हैं:<br><br>B.Sc. के कुल छात्र = 23 + 12 + 17 + 55 = 107<br>B.Com. के कुल छात्र = 17 + 8 + 9 + 46 = 80<br><br>B.Sc. और B.Com. के छात्रों का अनुपात सीधे 107:80 है।"
      }
    }
  },
  {
    "id": "p1-jan2026-q6",
    "difficulty": "hard",
    "correct": 0,
    "unitEN": "Unit 9: People, Development and Environment",
    "unitHI": "इकाई 9: लोग, विकास और पर्यावरण",
    "topicEN": "Climate change",
    "topicHI": "जलवायु परिवर्तन",
    "content": {
      "en": {
        "question": "Arrange the following greenhouse gases in the increasing order of their life time in the earth's atmosphere:<br><br>A. SF6<br>B. N2O<br>C. H2O vapor<br>D. CH4<br><br>Choose the correct answer from the options given below:",
        "options": ["C, D, B, A", "C, D, A, B", "A, B, C, D", "B, A, D, C"],
        "explanation": "The atmospheric lifetime determines how long a greenhouse gas remains active in the atmosphere:<br>1. <strong>H2O (Water Vapor):</strong> Very short lifetime (a few days).<br>2. <strong>CH4 (Methane):</strong> Approximately 12 years.<br>3. <strong>N2O (Nitrous Oxide):</strong> Approximately 114 years.<br>4. <strong>SF6 (Sulfur Hexafluoride):</strong> Extremely long lifetime, approximately 3,200 years.<br><br>Therefore, the correct increasing order is Water Vapor (C) < Methane (D) < Nitrous Oxide (B) < SF6 (A)."
      },
      "hi": {
        "question": "पृथ्वी के वायुमंडल में उनके जीवनकाल (life time) के बढ़ते क्रम में निम्नलिखित ग्रीनहाउस गैसों को व्यवस्थित करें:<br><br>A. SF6<br>B. N2O<br>C. H2O वाष्प (vapor)<br>D. CH4<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["C, D, B, A", "C, D, A, B", "A, B, C, D", "B, A, D, C"],
        "explanation": "वायुमंडलीय जीवनकाल यह निर्धारित करता है कि कोई ग्रीनहाउस गैस वायुमंडल में कितने समय तक सक्रिय रहती है:<br>1. <strong>H2O (जल वाष्प):</strong> बहुत कम जीवनकाल (कुछ दिन)।<br>2. <strong>CH4 (मीथेन):</strong> लगभग 12 वर्ष।<br>3. <strong>N2O (नाइट्रस ऑक्साइड):</strong> लगभग 114 वर्ष।<br>4. <strong>SF6 (सल्फर हेक्साफ्लोराइड):</strong> अत्यंत लंबा जीवनकाल, लगभग 3,200 वर्ष।<br><br>इसलिए, सही बढ़ता क्रम है जल वाष्प (C) < मीथेन (D) < नाइट्रस ऑक्साइड (B) < SF6 (A)।"
      }
    }
  },
  {
    "id": "p1-jan2026-q7",
    "difficulty": "hard",
    "correct": 2,
    "unitEN": "Unit 10: Higher Education System",
    "unitHI": "इकाई 10: उच्च शिक्षा प्रणाली",
    "topicEN": "Ancient Indian education",
    "topicHI": "प्राचीन भारतीय शिक्षा",
    "content": {
      "en": {
        "question": `Match List I with List II.\n${matchTable("List I (Department of Ashram)","List II (Subject)",[["A","Vishnu Sthana","I","Politics"],["B","Vivasta Sthana","II","Jyotish"],["C","Garun Sthana","III","Travel and Transport"],["D","Mahendra Sthana","IV","Military Education"]])}Choose the correct answer from the options given below:`,
        "options": ["A-II, B-IV, C-III, D-I", "A-I, B-III, C-II, D-IV", "A-III, B-II, C-IV, D-I", "A-I, B-II, C-III, D-IV"],
        "explanation": "In ancient Indian educational philosophy regarding Ashrams:<br>• <strong>Vishnu Sthana (A)</strong> corresponds to the study of Politics / Rajneeti (III).<br>• <strong>Vivasta Sthana (B)</strong> is related to the study of Jyotish or Astronomy (II).<br>• <strong>Garun Sthana (C)</strong> corresponds to the study of Travel and Transport (IV).<br>• <strong>Mahendra Sthana (D)</strong> is related to Military Education or Warfare (I).<br><br>Thus, the correct match is A-III, B-II, C-IV, D-I."
      },
      "hi": {
        "question": `सूची I को सूची II के साथ सुमेलित करें।\n${matchTable("सूची I (आश्रम का विभाग)","सूची II (विषय)",[["A","विष्णु स्थान","I","राजनीति"],["B","विवस्त स्थान","II","ज्योतिष"],["C","गरुड़ स्थान","III","यात्रा और परिवहन"],["D","महेंद्र स्थान","IV","सैन्य शिक्षा"]])}नीचे दिए गए विकल्पों में से सही उत्तर चुनें:`,
        "options": ["A-II, B-IV, C-III, D-I", "A-I, B-III, C-II, D-IV", "A-III, B-II, C-IV, D-I", "A-I, B-II, C-III, D-IV"],
        "explanation": "आश्रमों के संबंध में प्राचीन भारतीय शैक्षिक दर्शन में:<br>• <strong>विष्णु स्थान (A)</strong> राजनीति (Politics) के अध्ययन से संबंधित है (III)।<br>• <strong>विवस्त स्थान (B)</strong> ज्योतिष (Jyotish) या खगोल विज्ञान के अध्ययन से संबंधित है (II)।<br>• <strong>गरुड़ स्थान (C)</strong> यात्रा और परिवहन (Travel and Transport) के अध्ययन से संबंधित है (IV)।<br>• <strong>महेंद्र स्थान (D)</strong> सैन्य शिक्षा (Military Education) या युद्ध कला से संबंधित है (I)।<br><br>इस प्रकार, सही सुमेलन A-III, B-II, C-IV, D-I है।"
      }
    }
  },
  {
    "id": "p1-jan2026-q8",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "Unit 8: Information and Communication Technology (ICT)",
    "unitHI": "इकाई 8: सूचना और संचार प्रौद्योगिकी (ICT)",
    "topicEN": "Internet basics",
    "topicHI": "इंटरनेट मूल बातें",
    "content": {
      "en": {
        "question": `Match List I with List II.\n${matchTable("List I","List II",[["A","Phishing","I","Act of gaining unauthorized access"],["B","Hacking","II","Unsolicited email sent over the internet to a recipient on a mailing list"],["C","Spam","III","Small file or code stored on user's computer"],["D","Cookies","IV","The creator sends out legitimate-looking emails to target users"]])}Choose the correct answer from the options given below:`,
        "options": ["A-II, B-III, C-IV, D-I", "A-IV, B-I, C-III, D-II", "A-IV, B-I, C-II, D-III", "A-I, B-IV, C-II, D-III"],
        "explanation": "• <strong>Phishing (A):</strong> A social engineering attack where legitimate-looking emails are sent to trick users into revealing sensitive data (IV).<br>• <strong>Hacking (B):</strong> The act of gaining unauthorized access to data in a system or computer (I).<br>• <strong>Spam (C):</strong> Irrelevant or unsolicited emails sent over the internet (II).<br>• <strong>Cookies (D):</strong> Small blocks of data created by a web server while a user is browsing a website and placed on the user's computer (III).<br><br>Correct Match: A-IV, B-I, C-II, D-III."
      },
      "hi": {
        "question": `सूची I को सूची II के साथ सुमेलित करें।\n${matchTable("सूची I","सूची II",[["A","फिशिंग (Phishing)","I","अनधिकृत पहुँच प्राप्त करने का कार्य"],["B","हैकिंग (Hacking)","II","मेलिंग सूची पर प्राप्तकर्ता को इंटरनेट पर भेजा गया अवांछित ईमेल"],["C","स्पैम (Spam)","III","उपयोगकर्ता के कंप्यूटर पर संग्रहीत छोटी फ़ाइल या कोड"],["D","कुकीज़ (Cookies)","IV","निर्माता लक्षित उपयोगकर्ताओं को वैध दिखने वाले ईमेल भेजता है"]])}नीचे दिए गए विकल्पों में से सही उत्तर चुनें:`,
        "options": ["A-II, B-III, C-IV, D-I", "A-IV, B-I, C-III, D-II", "A-IV, B-I, C-II, D-III", "A-I, B-IV, C-II, D-III"],
        "explanation": "• <strong>फिशिंग (A):</strong> एक सोशल इंजीनियरिंग हमला जहां उपयोगकर्ताओं को संवेदनशील डेटा प्रकट करने के लिए छलने हेतु वैध दिखने वाले ईमेल भेजे जाते हैं (IV)।<br>• <strong>हैकिंग (B):</strong> किसी सिस्टम या कंप्यूटर में डेटा तक अनधिकृत पहुंच प्राप्त करने का कार्य (I)।<br>• <strong>स्पैम (C):</strong> इंटरनेट पर भेजे गए अप्रासंगिक या अवांछित ईमेल (II)।<br>• <strong>कुकीज़ (D):</strong> वेबसाइट ब्राउज़ करते समय वेब सर्वर द्वारा बनाए गए डेटा के छोटे ब्लॉक जिन्हें उपयोगकर्ता के कंप्यूटर पर रखा जाता है (III)।<br><br>सही सुमेलन: A-IV, B-I, C-II, D-III."
      }
    }
  },
  {
    "id": "p1-jan2026-q9",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "Unit 6: Logical Reasoning",
    "unitHI": "इकाई 6: युक्तिसंगत तर्क",
    "topicEN": "Categorical propositions",
    "topicHI": "निरपेक्ष तर्कवाक्य (Categorical propositions)",
    "content": {
      "en": {
        "question": `Match List I with List II.\n${matchTable("List I (Types of Categorical Propositions)","List II (Explanation)",[["A","A proposition","I","Distributes both subject and predicate terms"],["B","E proposition","II","Distributes only predicate term"],["C","I proposition","III","Distributes only subject term"],["D","O proposition","IV","Distributes neither subject nor predicate term"]])}Choose the correct answer from the options given below:`,
        "options": ["A-I, B-II, C-IV, D-III", "A-III, B-I, C-IV, D-II", "A-I, B-II, C-III, D-IV", "A-IV, B-III, C-II, D-I"],
        "explanation": "In Aristotelian logic, distribution refers to whether a proposition asserts something about every member of the class represented by the term:<br>• <strong>A Proposition (Universal Affirmative - 'All S is P'):</strong> Distributes the Subject only (III).<br>• <strong>E Proposition (Universal Negative - 'No S is P'):</strong> Distributes both the Subject and the Predicate (I).<br>• <strong>I Proposition (Particular Affirmative - 'Some S is P'):</strong> Distributes neither Subject nor Predicate (IV).<br>• <strong>O Proposition (Particular Negative - 'Some S is not P'):</strong> Distributes the Predicate only (II).<br><br>Therefore, the correct match is A-III, B-I, C-IV, D-II."
      },
      "hi": {
        "question": `सूची I को सूची II के साथ सुमेलित करें।\n${matchTable("सूची I (निरपेक्ष तर्कवाक्य के प्रकार)","सूची II (व्याख्या)",[["A","A तर्कवाक्य","I","उद्देश्य (subject) और विधेय (predicate) दोनों पदों को वितरित करता है"],["B","E तर्कवाक्य","II","केवल विधेय पद को वितरित करता है"],["C","I तर्कवाक्य","III","केवल उद्देश्य पद को वितरित करता है"],["D","O तर्कवाक्य","IV","न तो उद्देश्य और न ही विधेय पद को वितरित करता है"]])}नीचे दिए गए विकल्पों में से सही उत्तर चुनें:`,
        "options": ["A-I, B-II, C-IV, D-III", "A-III, B-I, C-IV, D-II", "A-I, B-II, C-III, D-IV", "A-IV, B-III, C-II, D-I"],
        "explanation": "अरस्तू के तर्क में, वितरण (distribution) इस बात को संदर्भित करता है कि क्या कोई तर्कवाक्य उस पद द्वारा दर्शाए गए वर्ग के प्रत्येक सदस्य के बारे में कुछ दावा करता है:<br>• <strong>A तर्कवाक्य (सार्वभौमिक सकारात्मक - 'सभी S, P हैं'):</strong> केवल उद्देश्य (Subject) को वितरित करता है (III)।<br>• <strong>E तर्कवाक्य (सार्वभौमिक नकारात्मक - 'कोई S, P नहीं है'):</strong> उद्देश्य और विधेय (Predicate) दोनों को वितरित करता है (I)।<br>• <strong>I तर्कवाक्य (विशिष्ट सकारात्मक - 'कुछ S, P हैं'):</strong> न तो उद्देश्य और न ही विधेय को वितरित करता है (IV)।<br>• <strong>O तर्कवाक्य (विशिष्ट नकारात्मक - 'कुछ S, P नहीं हैं'):</strong> केवल विधेय को वितरित करता है (II)।<br><br>इसलिए, सही सुमेलन A-III, B-I, C-IV, D-II है।"
      }
    }
  },
  {
    "id": "p1-jan2026-q10",
    "difficulty": "easy",
    "correct": 3,
    "unitEN": "Unit 8: Information and Communication Technology (ICT)",
    "unitHI": "इकाई 8: सूचना और संचार प्रौद्योगिकी (ICT)",
    "topicEN": "ICT abbreviations",
    "topicHI": "ICT संक्षिप्ताक्षर",
    "content": {
      "en": {
        "question": "The smallest unit of information, a computer can understand and process is known as:",
        "options": ["Digit", "Byte", "Nibble", "Bit"],
        "explanation": "A <strong>Bit</strong> (binary digit) is the most basic and smallest unit of information in computing and digital communications. It can have only one of two values: 0 or 1. <br><br>A Nibble is 4 bits, and a Byte is 8 bits. Therefore, 'Bit' is the foundational and smallest unit."
      },
      "hi": {
        "question": "सूचना की सबसे छोटी इकाई, जिसे कंप्यूटर समझ और संसाधित (process) कर सकता है, कहलाती है:",
        "options": ["डिजिट (Digit)", "बाइट (Byte)", "निबल (Nibble)", "बिट (Bit)"],
        "explanation": "एक <strong>बिट (Bit)</strong> (बाइनरी डिजिट) कंप्यूटिंग और डिजिटल संचार में जानकारी की सबसे बुनियादी और सबसे छोटी इकाई है। इसका मूल्य केवल दो में से एक हो सकता है: 0 या 1। <br><br>एक निबल (Nibble) 4 बिट्स का होता है, और एक बाइट (Byte) 8 बिट्स का होता है। इसलिए, 'बिट' आधारभूत और सबसे छोटी इकाई है।"
      }
    }
  }, 
  {
    "id": "p1-jan2026-q11",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "Unit 9: People, Development and Environment",
    "unitHI": "इकाई 9: लोग, विकास और पर्यावरण",
    "topicEN": "Pollution types",
    "topicHI": "प्रदूषण के प्रकार",
    "content": {
      "en": {
        "question": `Match List I with List II.\n${matchTable("List I","List II",[["A","Primary Air Pollutant","I","Peroxyacyl nitrate"],["B","Secondary Air Pollutant","II","Carbon monoxide"],["C","Ozone Depleting Substance","III","Aerosols"],["D","Cloud Condensation Nuclei","IV","Chlorofluorocarbons"]])}Choose the correct answer from the options given below:`,
        "options": ["A-I, B-II, C-III, D-IV", "A-II, B-I, C-IV, D-III", "A-I, B-II, C-IV, D-III", "A-II, B-I, C-III, D-IV"],
        "explanation": "Let's match the pollutants with their correct examples:<br>• <strong>Primary Air Pollutant (A)</strong>: Emitted directly from a source into the atmosphere. Example: Carbon monoxide (II).<br>• <strong>Secondary Air Pollutant (B)</strong>: Not emitted directly, but forms when primary pollutants react in the atmosphere. Example: Peroxyacyl nitrate (PAN) (I).<br>• <strong>Ozone Depleting Substance (C)</strong>: Chemicals that destroy the earth's protective ozone layer. Example: Chlorofluorocarbons (CFCs) (IV).<br>• <strong>Cloud Condensation Nuclei (D)</strong>: Small particles on which water vapor condenses. Example: Aerosols (III).<br><br>Correct match: A-II, B-I, C-IV, D-III."
      },
      "hi": {
        "question": `सूची I को सूची II के साथ सुमेलित करें।\n${matchTable("सूची I","सूची II",[["A","प्राथमिक वायु प्रदूषक","I","पेरोक्सीएसिल नाइट्रेट (PAN)"],["B","द्वितीयक वायु प्रदूषक","II","कार्बन मोनोऑक्साइड"],["C","ओजोन क्षयकारी पदार्थ","III","एरोसोल"],["D","क्लाउड कंडेंसेशन न्यूक्लिआई","IV","क्लोरोफ्लोरोकार्बन (CFCs)"]])}नीचे दिए गए विकल्पों में से सही उत्तर चुनें:`,
        "options": ["A-I, B-II, C-III, D-IV", "A-II, B-I, C-IV, D-III", "A-I, B-II, C-IV, D-III", "A-II, B-I, C-III, D-IV"],
        "explanation": "आइए प्रदूषकों का उनके सही उदाहरणों के साथ मिलान करें:<br>• <strong>प्राथमिक वायु प्रदूषक (A)</strong>: सीधे स्रोत से वायुमंडल में उत्सर्जित होते हैं। उदाहरण: कार्बन मोनोऑक्साइड (II)।<br>• <strong>द्वितीयक वायु प्रदूषक (B)</strong>: सीधे उत्सर्जित नहीं होते, बल्कि तब बनते हैं जब प्राथमिक प्रदूषक वायुमंडल में प्रतिक्रिया करते हैं। उदाहरण: पेरोक्सीएसिल नाइट्रेट (PAN) (I)।<br>• <strong>ओजोन क्षयकारी पदार्थ (C)</strong>: रसायन जो पृथ्वी की सुरक्षात्मक ओजोन परत को नष्ट करते हैं। उदाहरण: क्लोरोफ्लोरोकार्बन (CFCs) (IV)।<br>• <strong>क्लाउड कंडेंसेशन न्यूक्लिआई (D)</strong>: छोटे कण जिन पर जल वाष्प संघनित होता है। उदाहरण: एरोसोल (III)।<br><br>सही सुमेलन: A-II, B-I, C-IV, D-III।"
      }
    }
  },
  {
    "id": "p1-jan2026-q12",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "Unit 4: Communication",
    "unitHI": "इकाई 4: संप्रेषण",
    "topicEN": "Mass media & society",
    "topicHI": "जनसंचार माध्यम और समाज",
    "content": {
      "en": {
        "question": "Active Audience Theories focus on assessing what __________.",
        "options": ["people do with media", "media does with people", "administration does with media", "regulations impact media"],
        "explanation": "<strong>Active Audience Theory</strong> argues that media audiences do not just receive information passively but are actively involved, making sense of the message within their personal and social contexts. <br><br>Therefore, it focuses on <strong>\"what people do with media\"</strong> rather than \"what media does to people\" (which is the focus of older, passive theories like the Hypodermic Needle Theory)."
      },
      "hi": {
        "question": "सक्रिय श्रोता सिद्धांत (Active Audience Theories) यह आकलन करने पर ध्यान केंद्रित करते हैं कि __________।",
        "options": ["लोग मीडिया के साथ क्या करते हैं", "मीडिया लोगों के साथ क्या करता है", "प्रशासन मीडिया के साथ क्या करता है", "नियम मीडिया को कैसे प्रभावित करते हैं"],
        "explanation": "<strong>सक्रिय श्रोता सिद्धांत</strong> का तर्क है कि मीडिया दर्शक केवल निष्क्रिय रूप से जानकारी प्राप्त नहीं करते हैं, बल्कि सक्रिय रूप से शामिल होते हैं, और अपने व्यक्तिगत व सामाजिक संदर्भों में संदेश का अर्थ निकालते हैं। <br><br>इसलिए, यह इस बात पर केंद्रित है कि <strong>\"लोग मीडिया के साथ क्या करते हैं\"</strong> न कि \"मीडिया लोगों के साथ क्या करता है\" (जो कि हाइपोडर्मिक नीडल थ्योरी जैसे पुराने, निष्क्रिय सिद्धांतों का फोकस है)।"
      }
    }
  },
  {
    "id": "p1-jan2026-q13",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "Unit 1: Teaching Aptitude",
    "unitHI": "इकाई 1: शिक्षण अभिवृत्ति",
    "topicEN": "Learner characteristics (adolescent & adult)",
    "topicHI": "शिक्षार्थी की विशेषताएं (किशोर और वयस्क)",
    "content": {
      "en": {
        "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).<br><br><strong>Assertion (A):</strong> The projective techniques offer an approach to the measurement of the personality, which is different from the self-descriptive inventories.<br><strong>Reason (R):</strong> Self-descriptive inventories require the subject to describe himself/herself while assessing personality.<br><br>In the light of the above statements, choose the most appropriate answer from the options given below:",
        "options": ["Both (A) and (R) are correct and (R) is the correct explanation of (A)", "Both (A) and (R) are correct but (R) is not the correct explanation of (A)", "(A) is correct but (R) is not correct", "(A) is not correct but (R) is correct"],
        "explanation": "• <strong>Assertion (A) is correct:</strong> Projective techniques (like Rorschach inkblots) use ambiguous stimuli to uncover subconscious traits, which is completely different from self-descriptive inventories.<br>• <strong>Reason (R) is correct:</strong> Self-descriptive inventories (like MMPI) rely on direct self-reporting where the subject consciously describes themselves.<br><br>While both statements are factually correct, (R) merely defines what self-descriptive inventories are; it does not explain <em>why</em> projective techniques are structurally different (which is because they bypass conscious defenses). Hence, (R) is not the correct explanation of (A)."
      },
      "hi": {
        "question": "नीचे दो कथन दिए गए हैं: एक को अभिकथन (A) और दूसरे को कारण (R) के रूप में लेबल किया गया है।<br><br><strong>अभिकथन (A):</strong> प्रक्षेपी तकनीकें (projective techniques) व्यक्तित्व के मापन के लिए एक दृष्टिकोण प्रदान करती हैं, जो आत्म-वर्णनात्मक (self-descriptive) मालसूचियों से अलग है।<br><strong>कारण (R):</strong> आत्म-वर्णनात्मक मालसूचियों में विषय (व्यक्ति) को व्यक्तित्व का आकलन करते समय स्वयं का वर्णन करने की आवश्यकता होती है।<br><br>उपरोक्त कथनों के आलोक में, नीचे दिए गए विकल्पों में से सबसे उपयुक्त उत्तर चुनें:",
        "options": ["(A) और (R) दोनों सही हैं और (R), (A) की सही व्याख्या है", "(A) और (R) दोनों सही हैं लेकिन (R), (A) की सही व्याख्या नहीं है", "(A) सही है लेकिन (R) सही नहीं है", "(A) सही नहीं है लेकिन (R) सही है"],
        "explanation": "• <strong>अभिकथन (A) सही है:</strong> प्रक्षेपी तकनीकें (जैसे रोर्शाक इंकब्लॉट) अवचेतन लक्षणों को उजागर करने के लिए अस्पष्ट उत्तेजनाओं का उपयोग करती हैं, जो आत्म-वर्णनात्मक सूची से पूरी तरह अलग है।<br>• <strong>कारण (R) सही है:</strong> आत्म-वर्णनात्मक सूचियां (जैसे MMPI) प्रत्यक्ष आत्म-रिपोर्टिंग पर निर्भर करती हैं जहां विषय सचेत रूप से अपना वर्णन करता है।<br><br>हालांकि दोनों कथन तथ्यात्मक रूप से सही हैं, (R) केवल यह परिभाषित करता है कि आत्म-वर्णनात्मक सूचियां क्या हैं; यह स्पष्ट नहीं करता कि प्रक्षेपी तकनीकें संरचनात्मक रूप से अलग <em>क्यों</em> हैं। इसलिए, (R), (A) की सही व्याख्या नहीं है।"
      }
    }
  },
  {
    "id": "p1-jan2026-q14",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "Unit 5: Mathematical Reasoning and Aptitude",
    "unitHI": "इकाई 5: गणितीय तर्क और अभिवृत्ति",
    "topicEN": "Letter series",
    "topicHI": "अक्षर श्रृंखला",
    "content": {
      "en": {
        "question": "Complete the following series:<br>N7V, K9T, H12R, _?_, B21N",
        "options": ["E14R", "E13Q", "E16P", "F16R"],
        "explanation": "Let's break the series down into three separate components: First Letter, Number, and Last Letter.<br><br>1. <strong>First Letter (Pattern -3):</strong> N (-3) → K (-3) → H (-3) → <strong>E</strong> (-3) → B<br>2. <strong>Number (Pattern +2, +3, +4, +5):</strong> 7 (+2) → 9 (+3) → 12 (+4) → <strong>16</strong> (+5) → 21<br>3. <strong>Last Letter (Pattern -2):</strong> V (-2) → T (-2) → R (-2) → <strong>P</strong> (-2) → N<br><br>Combining them, the missing term is <strong>E16P</strong>."
      },
      "hi": {
        "question": "निम्नलिखित श्रृंखला को पूरा करें:<br>N7V, K9T, H12R, _?_, B21N",
        "options": ["E14R", "E13Q", "E16P", "F16R"],
        "explanation": "आइए श्रृंखला को तीन अलग-अलग घटकों में विभाजित करें: पहला अक्षर, संख्या और अंतिम अक्षर।<br><br>1. <strong>पहला अक्षर (पैटर्न -3):</strong> N (-3) → K (-3) → H (-3) → <strong>E</strong> (-3) → B<br>2. <strong>संख्या (पैटर्न +2, +3, +4, +5):</strong> 7 (+2) → 9 (+3) → 12 (+4) → <strong>16</strong> (+5) → 21<br>3. <strong>अंतिम अक्षर (पैटर्न -2):</strong> V (-2) → T (-2) → R (-2) → <strong>P</strong> (-2) → N<br><br>इन्हें मिलाने पर, लुप्त पद <strong>E16P</strong> है।"
      }
    }
  },
  {
    "id": "p1-jan2026-q15",
    "difficulty": "medium",
    "correct": 3,
    "unitEN": "Unit 2: Research Aptitude",
    "unitHI": "इकाई 2: शोध अभिवृत्ति",
    "topicEN": "Qualitative & quantitative methods",
    "topicHI": "गुणात्मक और मात्रात्मक विधियाँ",
    "content": {
      "en": {
        "question": "Which of the following represents the ontological orientation of qualitative research strategies?",
        "options": ["Deductive", "Positivism", "Objectivism", "Constructionism"],
        "explanation": "In research philosophy, <strong>Ontology</strong> refers to the nature of reality.<br><br>The ontological orientation of Qualitative research is <strong>Constructionism</strong> (or Constructivism), which asserts that social phenomena and their meanings are continually being created by social actors. In contrast, Objectivism and Positivism are typically associated with Quantitative research."
      },
      "hi": {
        "question": "निम्नलिखित में से कौन गुणात्मक शोध (qualitative research) रणनीतियों के सत्तामीमांसीय (ontological) अभिविन्यास का प्रतिनिधित्व करता है?",
        "options": ["निगमनात्मक (Deductive)", "प्रत्यक्षवाद (Positivism)", "वस्तुनिष्ठवाद (Objectivism)", "रचनावाद (Constructionism)"],
        "explanation": "शोध दर्शन में, <strong>सत्तामीमांसा (Ontology)</strong> वास्तविकता की प्रकृति को संदर्भित करता है।<br><br>गुणात्मक शोध का सत्तामीमांसीय अभिविन्यास <strong>रचनावाद (Constructionism)</strong> है, जो यह दावा करता है कि सामाजिक घटनाएं और उनके अर्थ सामाजिक अभिनेताओं द्वारा लगातार बनाए जा रहे हैं। इसके विपरीत, वस्तुनिष्ठवाद और प्रत्यक्षवाद आमतौर पर मात्रात्मक शोध से जुड़े होते हैं।"
      }
    }
  },
  {
    "id": "p1-jan2026-q16",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "Unit 5: Mathematical Reasoning and Aptitude",
    "unitHI": "इकाई 5: गणितीय तर्क और अभिवृत्ति",
    "topicEN": "Percentage",
    "topicHI": "प्रतिशत",
    "content": {
      "en": {
        "question": `Match List I with List II.\n${matchTable("List I (Successive Discounts)","List II (Equivalent Discount)",[["A","10% and 15%","I","28%"],["B","20% and 30%","II","32.5%"],["C","10% and 20%","III","23.5%"],["D","10% and 25%","IV","44%"]])}Choose the correct answer from the options given below:`,
        "options": ["A-I, B-II, C-IV, D-III", "A-II, B-III, C-I, D-IV", "A-III, B-IV, C-I, D-II", "A-IV, B-I, C-II, D-III"],
        "explanation": "The formula for equivalent successive discounts of a% and b% is: <strong>(a + b - ab/100)%</strong><br><br>• <strong>A. 10% & 15%:</strong> (10 + 15) - (150/100) = 25 - 1.5 = 23.5% (III)<br>• <strong>B. 20% & 30%:</strong> (20 + 30) - (600/100) = 50 - 6 = 44% (IV)<br>• <strong>C. 10% & 20%:</strong> (10 + 20) - (200/100) = 30 - 2 = 28% (I)<br>• <strong>D. 10% & 25%:</strong> (10 + 25) - (250/100) = 35 - 2.5 = 32.5% (II)<br><br>Correct match: A-III, B-IV, C-I, D-II."
      },
      "hi": {
        "question": `सूची I को सूची II के साथ सुमेलित करें।\n${matchTable("सूची I (क्रमिक छूट)","सूची II (समतुल्य छूट)",[["A","10% और 15%","I","28%"],["B","20% और 30%","II","32.5%"],["C","10% और 20%","III","23.5%"],["D","10% और 25%","IV","44%"]])}नीचे दिए गए विकल्पों में से सही उत्तर चुनें:`,
        "options": ["A-I, B-II, C-IV, D-III", "A-II, B-III, C-I, D-IV", "A-III, B-IV, C-I, D-II", "A-IV, B-I, C-II, D-III"],
        "explanation": "a% और b% की समतुल्य क्रमिक छूट का सूत्र है: <strong>(a + b - ab/100)%</strong><br><br>• <strong>A. 10% और 15%:</strong> (10 + 15) - (150/100) = 25 - 1.5 = 23.5% (III)<br>• <strong>B. 20% और 30%:</strong> (20 + 30) - (600/100) = 50 - 6 = 44% (IV)<br>• <strong>C. 10% और 20%:</strong> (10 + 20) - (200/100) = 30 - 2 = 28% (I)<br>• <strong>D. 10% और 25%:</strong> (10 + 25) - (250/100) = 35 - 2.5 = 32.5% (II)<br><br>सही सुमेलन: A-III, B-IV, C-I, D-II."
      }
    }
  },
  {
    "id": "p1-jan2026-q17",
    "difficulty": "easy",
    "correct": 3,
    "unitEN": "Unit 9: People, Development and Environment",
    "unitHI": "इकाई 9: लोग, विकास और पर्यावरण",
    "topicEN": "Environmental issues",
    "topicHI": "पर्यावरणीय मुद्दे",
    "content": {
      "en": {
        "question": "The oxygen consumed in the oxidation of an organic compound by microorganisms in the aquatic ecosystem is called __________.",
        "options": ["Dissolved oxygen", "Chemical oxygen demand", "Theoretical oxygen demand", "Biochemical oxygen demand"],
        "explanation": "<strong>Biochemical Oxygen Demand (BOD)</strong> is the amount of dissolved oxygen needed (i.e., demanded) by aerobic biological organisms (microorganisms) to break down organic material present in a given water sample.<br><br>High BOD indicates poor water quality (high organic pollution), whereas low BOD indicates good water quality."
      },
      "hi": {
        "question": "जलीय पारिस्थितिकी तंत्र में सूक्ष्मजीवों द्वारा कार्बनिक यौगिक के ऑक्सीकरण में खपत होने वाली ऑक्सीजन को __________ कहा जाता है।",
        "options": ["घुलित ऑक्सीजन (Dissolved oxygen)", "रासायनिक ऑक्सीजन मांग (Chemical oxygen demand)", "सैद्धांतिक ऑक्सीजन मांग (Theoretical oxygen demand)", "जैव रासायनिक ऑक्सीजन मांग (Biochemical oxygen demand)"],
        "explanation": "<strong>जैव रासायनिक ऑक्सीजन मांग (Biochemical Oxygen Demand - BOD)</strong> पानी के किसी दिए गए नमूने में मौजूद कार्बनिक पदार्थों को तोड़ने के लिए एरोबिक जैविक जीवों (सूक्ष्मजीवों) द्वारा आवश्यक घुलित ऑक्सीजन की मात्रा है।<br><br>उच्च BOD खराब पानी की गुणवत्ता (उच्च जैविक प्रदूषण) को दर्शाता है, जबकि कम BOD अच्छी पानी की गुणवत्ता को दर्शाता है।"
      }
    }
  },
  {
    "id": "p1-jan2026-q18",
    "difficulty": "easy",
    "correct": 2,
    "unitEN": "Unit 8: Information and Communication Technology (ICT)",
    "unitHI": "इकाई 8: सूचना और संचार प्रौद्योगिकी (ICT)",
    "topicEN": "ICT abbreviations",
    "topicHI": "ICT संक्षिप्ताक्षर",
    "content": {
      "en": {
        "question": "Which term is NOT related to computer hardware?",
        "options": ["Bus", "Switch", "Windows", "Mouse"],
        "explanation": "<strong>Windows</strong> is an Operating System, which falls under the category of System Software. <br><br>A Bus (internal connection), Switch (networking device), and Mouse (input device) are all physical, tangible components known as Computer Hardware."
      },
      "hi": {
        "question": "कौन सा शब्द कंप्यूटर हार्डवेयर से संबंधित नहीं है?",
        "options": ["बस (Bus)", "स्विच (Switch)", "विंडोज़ (Windows)", "माउस (Mouse)"],
        "explanation": "<strong>विंडोज़ (Windows)</strong> एक ऑपरेटिंग सिस्टम है, जो सिस्टम सॉफ्टवेयर की श्रेणी में आता है। <br><br>बस (आंतरिक कनेक्शन), स्विच (नेटवर्किंग डिवाइस), और माउस (इनपुट डिवाइस) सभी भौतिक, मूर्त घटक हैं जिन्हें कंप्यूटर हार्डवेयर के रूप में जाना जाता है।"
      }
    }
  },
  {
    "id": "p1-jan2026-q19",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "Unit 10: Higher Education System",
    "unitHI": "इकाई 10: उच्च शिक्षा प्रणाली",
    "topicEN": "Policies & governance",
    "topicHI": "नीतियां और शासन",
    "content": {
      "en": {
        "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).<br><br><strong>Assertion (A):</strong> National Education Policy, 2020 (NEP-2020) visualized 'Research-Intensive Universities'.<br><strong>Reason (R):</strong> NEP-2020 envisioned university as a place which lays equal emphasis on teaching and research.<br><br>In the light of the above statements, choose the most appropriate answer from the options given below:",
        "options": ["Both (A) and (R) are correct and (R) is the correct explanation of (A)", "Both (A) and (R) are correct but (R) is not the correct explanation of (A)", "(A) is correct but (R) is not correct", "(A) is not correct but (R) is correct"],
        "explanation": "• <strong>Assertion (A) is correct:</strong> NEP 2020 categorizes institutions into Research-intensive Universities, Teaching-intensive Universities, and Autonomous degree-granting colleges.<br>• <strong>Reason (R) is correct:</strong> NEP indeed envisions universities as places laying equal emphasis on high-quality teaching and research.<br><br>However, (R) is a general characteristic applicable to universities broadly, while (A) refers specifically to one specialized tier of the institutional classification. Thus, (R) does not causally explain (A)."
      },
      "hi": {
        "question": "नीचे दो कथन दिए गए हैं: एक को अभिकथन (A) और दूसरे को कारण (R) के रूप में लेबल किया गया है।<br><br><strong>अभिकथन (A):</strong> राष्ट्रीय शिक्षा नीति, 2020 (NEP-2020) ने 'अनुसंधान-गहन विश्वविद्यालयों' (Research-Intensive Universities) की परिकल्पना की।<br><strong>कारण (R):</strong> NEP-2020 ने विश्वविद्यालय को एक ऐसे स्थान के रूप में परिकल्पित किया है जो शिक्षण और अनुसंधान पर समान जोर देता है।<br><br>उपरोक्त कथनों के आलोक में, नीचे दिए गए विकल्पों में से सबसे उपयुक्त उत्तर चुनें:",
        "options": ["(A) और (R) दोनों सही हैं और (R), (A) की सही व्याख्या है", "(A) और (R) दोनों सही हैं लेकिन (R), (A) की सही व्याख्या नहीं है", "(A) सही है लेकिन (R) सही नहीं है", "(A) सही नहीं है लेकिन (R) सही है"],
        "explanation": "• <strong>अभिकथन (A) सही है:</strong> NEP 2020 संस्थानों को अनुसंधान-गहन विश्वविद्यालयों, शिक्षण-गहन विश्वविद्यालयों और स्वायत्त डिग्री-अनुदान देने वाले कॉलेजों में वर्गीकृत करता है।<br>• <strong>कारण (R) सही है:</strong> NEP वास्तव में विश्वविद्यालयों को उच्च गुणवत्ता वाले शिक्षण और अनुसंधान पर समान जोर देने वाले स्थानों के रूप में परिकल्पित करता है।<br><br>हालाँकि, (R) व्यापक रूप से विश्वविद्यालयों पर लागू होने वाली एक सामान्य विशेषता है, जबकि (A) विशेष रूप से संस्थागत वर्गीकरण के एक विशेष स्तर को संदर्भित करता है। इस प्रकार, (R) कारण के रूप में (A) की व्याख्या नहीं करता है।"
      }
    }
  },
  {
    "id": "p1-jan2026-q20",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "Unit 9: People, Development and Environment",
    "unitHI": "इकाई 9: लोग, विकास और पर्यावरण",
    "topicEN": "International agreements",
    "topicHI": "अंतर्राष्ट्रीय समझौते",
    "content": {
      "en": {
        "question": "The issue related to 'traditional knowledge societies and their livelihood' is addressed in the National Mission for __________.",
        "options": ["Enhanced Energy Efficiency", "Sustaining the Himalayan Eco-system", "Sustainable Habitat", "A Green India"],
        "explanation": "The <strong>National Mission for Sustaining the Himalayan Eco-system</strong> (one of the 8 missions under the National Action Plan on Climate Change - NAPCC) specifically focuses on safeguarding the Himalayan glaciers, mountain ecosystems, and critically, protecting the traditional knowledge societies and their livelihoods in the region."
      },
      "hi": {
        "question": "'पारंपरिक ज्ञान समाजों और उनकी आजीविका' से संबंधित मुद्दे को __________ के लिए राष्ट्रीय मिशन में संबोधित किया गया है।",
        "options": ["उन्नत ऊर्जा दक्षता (Enhanced Energy Efficiency)", "हिमालयी पारिस्थितिकी तंत्र को बनाए रखना (Sustaining the Himalayan Eco-system)", "सतत पर्यावास (Sustainable Habitat)", "हरित भारत (A Green India)"],
        "explanation": "<strong>हिमालयी पारिस्थितिकी तंत्र को बनाए रखने के लिए राष्ट्रीय मिशन</strong> (जलवायु परिवर्तन पर राष्ट्रीय कार्य योजना - NAPCC के तहत 8 मिशनों में से एक) विशेष रूप से हिमालयी ग्लेशियरों, पर्वतीय पारिस्थितिक तंत्रों की सुरक्षा करने और महत्वपूर्ण रूप से, क्षेत्र में पारंपरिक ज्ञान समाजों और उनकी आजीविका की रक्षा करने पर केंद्रित है।"
      }
    }
  },
  {
    "id": "p1-jan2026-q21",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "Unit 10: Higher Education System",
    "unitHI": "इकाई 10: उच्च शिक्षा प्रणाली",
    "topicEN": "Policies & governance",
    "topicHI": "नीतियां और शासन",
    "content": {
      "en": {
        "question": "As per the recommendations of National Education Policy, 2020, all stand alone teacher education institutions will be required to convert into multidisciplinary institutions by:",
        "options": ["2025", "2030", "2035", "2040"],
        "explanation": "According to the NEP 2020, to improve the quality of teacher training, all stand-alone Teacher Education Institutions (TEIs) will be required to convert into multidisciplinary institutions by the year <strong>2030</strong>. This ensures teachers are trained in a vibrant, multidisciplinary environment."
      },
      "hi": {
        "question": "राष्ट्रीय शिक्षा नीति, 2020 की सिफारिशों के अनुसार, सभी स्टैंड अलोन (एकल-विषय) शिक्षक शिक्षा संस्थानों को किस वर्ष तक बहु-विषयक (multidisciplinary) संस्थानों में बदलना आवश्यक होगा?",
        "options": ["2025", "2030", "2035", "2040"],
        "explanation": "NEP 2020 के अनुसार, शिक्षक प्रशिक्षण की गुणवत्ता में सुधार करने के लिए, सभी स्टैंड-अलोन शिक्षक शिक्षा संस्थानों (TEIs) को वर्ष <strong>2030</strong> तक बहु-विषयक संस्थानों में परिवर्तित होना आवश्यक होगा। यह सुनिश्चित करता है कि शिक्षकों को एक जीवंत, बहु-विषयक वातावरण में प्रशिक्षित किया जाए।"
      }
    }
  },
  {
    "id": "p1-jan2026-q22",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "Unit 2: Research Aptitude",
    "unitHI": "इकाई 2: शोध अभिवृत्ति",
    "topicEN": "Qualitative & quantitative methods",
    "topicHI": "गुणात्मक और मात्रात्मक विधियाँ",
    "content": {
      "en": {
        "question": "Measurement validity primarily relates to:",
        "options": ["Qualitative research", "Quantitative research", "Interpretivism", "Constructionism"],
        "explanation": "<strong>Measurement Validity</strong> refers to the extent to which a concept, conclusion, or measurement is well-founded and corresponds accurately to the real world (i.e., does the instrument measure what it claims to measure).<br><br>This statistical and standardized approach is a core component primarily associated with <strong>Quantitative research</strong>."
      },
      "hi": {
        "question": "मापन वैधता (Measurement validity) मुख्य रूप से किससे संबंधित है?",
        "options": ["गुणात्मक शोध (Qualitative research)", "मात्रात्मक शोध (Quantitative research)", "व्याख्यावाद (Interpretivism)", "रचनावाद (Constructionism)"],
        "explanation": "<strong>मापन वैधता</strong> इस बात को संदर्भित करती है कि कोई अवधारणा, निष्कर्ष या माप कितनी अच्छी तरह से स्थापित है और वास्तविक दुनिया से कितनी सटीकता से मेल खाता है (यानी, क्या उपकरण वही मापता है जिसका वह दावा करता है)।<br><br>यह सांख्यिकीय और मानकीकृत दृष्टिकोण मुख्य रूप से <strong>मात्रात्मक शोध (Quantitative research)</strong> से जुड़ा एक मुख्य घटक है।"
      }
    }
  },
  {
    "id": "p1-jan2026-q23",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "Unit 4: Communication",
    "unitHI": "इकाई 4: संप्रेषण",
    "topicEN": "Mass media & society",
    "topicHI": "जनसंचार माध्यम और समाज",
    "content": {
      "en": {
        "question": "Arrange the following in the ascending order of adoption in terms of Diffusion of Innovation among the masses:<br>A. Opinion Followers<br>B. Opinion Leaders<br>C. Early Adopters<br>D. Change Agents<br>E. Laggards<br><br>Choose the correct answer from the options given below:",
        "options": ["A, D, C, B, E", "D, C, B, A, E", "C, D, B, A, E", "A, B, C, D, E"],
        "explanation": "According to Everett Rogers' Diffusion of Innovation Theory, the timeline (ascending order) of how an innovation spreads is:<br>1. <strong>Change Agents (D)</strong>: They introduce and push the innovation.<br>2. <strong>Early Adopters (C)</strong>: The first group to willingly adopt the new idea.<br>3. <strong>Opinion Leaders (B)</strong>: Often part of the early adopters, they influence the rest.<br>4. <strong>Opinion Followers (A)</strong>: The general masses (early/late majority) who follow the leaders.<br>5. <strong>Laggards (E)</strong>: The absolute last group to adopt the innovation.<br><br>Correct sequence: D, C, B, A, E."
      },
      "hi": {
        "question": "जनता के बीच नवाचार के प्रसार (Diffusion of Innovation) के संदर्भ में अपनाने (adoption) के बढ़ते क्रम में निम्नलिखित को व्यवस्थित करें:<br>A. जनमत अनुयायी (Opinion Followers)<br>B. जनमत निर्माता (Opinion Leaders)<br>C. शीघ्र अपनाने वाले (Early Adopters)<br>D. परिवर्तन अभिकर्ता (Change Agents)<br>E. पिछड़ने वाले (Laggards)<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["A, D, C, B, E", "D, C, B, A, E", "C, D, B, A, E", "A, B, C, D, E"],
        "explanation": "एवरेट रोजर्स के 'नवाचार का प्रसार' सिद्धांत के अनुसार, नवाचार कैसे फैलता है, इसकी समयरेखा (बढ़ता क्रम) इस प्रकार है:<br>1. <strong>परिवर्तन अभिकर्ता (D)</strong>: वे नवाचार का परिचय देते हैं और उसे आगे बढ़ाते हैं।<br>2. <strong>शीघ्र अपनाने वाले (C)</strong>: स्वेच्छा से नए विचार को अपनाने वाला पहला समूह।<br>3. <strong>जनमत निर्माता (B)</strong>: अक्सर 'शीघ्र अपनाने वालों' का हिस्सा होते हैं, जो बाकी लोगों को प्रभावित करते हैं।<br>4. <strong>जनमत अनुयायी (A)</strong>: आम जनता (प्रारंभिक/देर से आने वाला बहुमत) जो नेताओं का अनुसरण करती है।<br>5. <strong>पिछड़ने वाले (E)</strong>: नवाचार को अपनाने वाला बिल्कुल अंतिम समूह।<br><br>सही क्रम: D, C, B, A, E."
      }
    }
  },
  {
    "id": "p1-jan2026-q24",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "Unit 6: Logical Reasoning",
    "unitHI": "इकाई 6: युक्तिसंगत तर्क",
    "topicEN": "Inductive reasoning",
    "topicHI": "आगमनात्मक तर्क",
    "content": {
      "en": {
        "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).<br><br><strong>Assertion (A):</strong> The terms validity and invalidity do not apply to inductive arguments.<br><strong>Reason (R):</strong> In an inductive argument, the conclusion does not have sufficient ground in the premises.<br><br>In the light of the above statements, choose the most appropriate answer from the options given below:",
        "options": ["Both (A) and (R) are correct and (R) is the correct explanation of (A)", "Both (A) and (R) are correct but (R) is not the correct explanation of (A)", "(A) is correct but (R) is not correct", "(A) is not correct but (R) is correct"],
        "explanation": "• <strong>Assertion (A) is correct:</strong> Inductive arguments are evaluated as 'strong' or 'weak', not 'valid' or 'invalid'. Validity strictly applies to deductive arguments.<br>• <strong>Reason (R) is correct:</strong> Inductive reasoning deals with probability. The premises provide likely support for the conclusion, not 100% conclusive/sufficient ground.<br><br>Because the premises don't guarantee the conclusion (R), we cannot label the argument as 'valid' or 'invalid' (A). Thus, (R) correctly explains (A)."
      },
      "hi": {
        "question": "नीचे दो कथन दिए गए हैं: एक को अभिकथन (A) और दूसरे को कारण (R) के रूप में लेबल किया गया है।<br><br><strong>अभिकथन (A):</strong> वैधता (validity) और अवैधता (invalidity) शब्द आगमनात्मक तर्कों (inductive arguments) पर लागू नहीं होते हैं।<br><strong>कारण (R):</strong> एक आगमनात्मक तर्क में, निष्कर्ष का आधारवाक्यों (premises) में पर्याप्त आधार नहीं होता है।<br><br>उपरोक्त कथनों के आलोक में, नीचे दिए गए विकल्पों में से सबसे उपयुक्त उत्तर चुनें:",
        "options": ["(A) और (R) दोनों सही हैं और (R), (A) की सही व्याख्या है", "(A) और (R) दोनों सही हैं लेकिन (R), (A) की सही व्याख्या नहीं है", "(A) सही है लेकिन (R) सही नहीं है", "(A) सही नहीं है लेकिन (R) सही है"],
        "explanation": "• <strong>अभिकथन (A) सही है:</strong> आगमनात्मक तर्कों का मूल्यांकन 'मजबूत' या 'कमजोर' के रूप में किया जाता है, 'वैध' या 'अवैध' के रूप में नहीं। वैधता सख्ती से निगमनात्मक तर्कों पर लागू होती है।<br>• <strong>कारण (R) सही है:</strong> आगमनात्मक तर्क संभावना से संबंधित है। आधारवाक्य निष्कर्ष के लिए संभावित समर्थन प्रदान करते हैं, 100% निर्णायक/पर्याप्त आधार नहीं।<br><br>चूंकि आधारवाक्य निष्कर्ष की गारंटी नहीं देते हैं (R), हम तर्क को 'वैध' या 'अवैध' (A) के रूप में लेबल नहीं कर सकते। इस प्रकार, (R), (A) की सही व्याख्या करता है।"
      }
    }
  },
  {
    "id": "p1-jan2026-q25",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "Unit 9: People, Development and Environment",
    "unitHI": "इकाई 9: लोग, विकास और पर्यावरण",
    "topicEN": "Energy resources",
    "topicHI": "ऊर्जा संसाधन",
    "content": {
      "en": {
        "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).<br><br><strong>Assertion (A):</strong> A wind mill will be more effective if it is placed at a higher elevation above the ground than a lower one.<br><strong>Reason (R):</strong> Generally, the wind speed increases with altitude above the earth's surface.<br><br>In the light of the above statements, choose the most appropriate answer from the options given below:",
        "options": ["Both (A) and (R) are correct and (R) is the correct explanation of (A)", "Both (A) and (R) are correct but (R) is not the correct explanation of (A)", "(A) is correct but (R) is not correct", "(A) is not correct but (R) is correct"],
        "explanation": "• <strong>Assertion (A) is correct:</strong> Wind turbines are highly effective when placed on tall towers or higher elevations.<br>• <strong>Reason (R) is correct:</strong> Wind speed generally increases with altitude because there is less friction and obstruction from surface features like trees, buildings, and hills.<br><br>This increase in wind speed directly explains why placing the windmill at a higher elevation makes it more effective. Hence, (R) is the correct explanation of (A)."
      },
      "hi": {
        "question": "नीचे दो कथन दिए गए हैं: एक को अभिकथन (A) और दूसरे को कारण (R) के रूप में लेबल किया गया है।<br><br><strong>अभिकथन (A):</strong> एक पवनचक्की (wind mill) अधिक प्रभावी होगी यदि इसे जमीन से कम ऊंचाई के बजाय अधिक ऊंचाई पर रखा जाए।<br><strong>कारण (R):</strong> आमतौर पर, पृथ्वी की सतह से ऊंचाई बढ़ने के साथ हवा की गति बढ़ जाती है।<br><br>उपरोक्त कथनों के आलोक में, नीचे दिए गए विकल्पों में से सबसे उपयुक्त उत्तर चुनें:",
        "options": ["(A) और (R) दोनों सही हैं और (R), (A) की सही व्याख्या है", "(A) और (R) दोनों सही हैं लेकिन (R), (A) की सही व्याख्या नहीं है", "(A) सही है लेकिन (R) सही नहीं है", "(A) सही नहीं है लेकिन (R) सही है"],
        "explanation": "• <strong>अभिकथन (A) सही है:</strong> जब पवन टर्बाइनों को ऊंचे टावरों या अधिक ऊंचाई पर रखा जाता है तो वे अत्यधिक प्रभावी होते हैं।<br>• <strong>कारण (R) सही है:</strong> हवा की गति आमतौर पर ऊंचाई के साथ बढ़ती है क्योंकि पेड़ों, इमारतों और पहाड़ियों जैसी सतह की विशेषताओं से घर्षण और रुकावट कम होती है।<br><br>हवा की गति में यह वृद्धि सीधे तौर पर स्पष्ट करती है कि पवनचक्की को अधिक ऊंचाई पर रखने से यह अधिक प्रभावी क्यों हो जाती है। इसलिए, (R), (A) की सही व्याख्या है।"
      }
    }
  },
  {
    "id": "p1-jan2026-q26",
    "difficulty": "medium",
    "correct": 3,
    "unitEN": "Unit 8: Information and Communication Technology (ICT)",
    "unitHI": "इकाई 8: सूचना और संचार प्रौद्योगिकी (ICT)",
    "topicEN": "ICT abbreviations",
    "topicHI": "ICT संक्षिप्ताक्षर",
    "content": {
      "en": {
        "question": "Which of the following are application software?<br>A. Spreadsheet<br>B. Word Processor<br>C. Operating system<br>D. Database<br>E. Compiler<br><br>Choose the correct answer from the options given below:",
        "options": ["A, C and D only", "B, C and E only", "A, D and E only", "A, B and D only"],
        "explanation": "<strong>Application Software</strong> is designed to perform specific tasks for the end-user. <br>• Spreadsheet (A), Word Processor (B), and Database (D) are application software.<br>• Operating System (C) is <em>System Software</em>.<br>• Compiler (E) is <em>Programming/System Software</em>.<br><br>Therefore, only A, B, and D are correct."
      },
      "hi": {
        "question": "निम्नलिखित में से कौन से एप्लीकेशन सॉफ्टवेयर हैं?<br>A. स्प्रेडशीट (Spreadsheet)<br>B. वर्ड प्रोसेसर (Word Processor)<br>C. ऑपरेटिंग सिस्टम (Operating system)<br>D. डेटाबेस (Database)<br>E. कंपाइलर (Compiler)<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["केवल A, C और D", "केवल B, C और E", "केवल A, D और E", "केवल A, B और D"],
        "explanation": "<strong>एप्लीकेशन सॉफ्टवेयर (Application Software)</strong> को अंतिम-उपयोगकर्ता (end-user) के लिए विशिष्ट कार्य करने के लिए डिज़ाइन किया गया है। <br>• स्प्रेडशीट (A), वर्ड प्रोसेसर (B), और डेटाबेस (D) एप्लीकेशन सॉफ्टवेयर हैं।<br>• ऑपरेटिंग सिस्टम (C) <em>सिस्टम सॉफ्टवेयर</em> है।<br>• कंपाइलर (E) <em>प्रोग्रामिंग/सिस्टम सॉफ्टवेयर</em> है।<br><br>इसलिए, केवल A, B, और D सही हैं।"
      }
    }
  },
  {
    "id": "p1-jan2026-q27",
    "difficulty": "hard",
    "correct": 1,
    "unitEN": "Unit 6: Logical Reasoning",
    "unitHI": "इकाई 6: युक्तिसंगत तर्क",
    "topicEN": "Hetvabhasas",
    "topicHI": "हेत्वाभास (Hetvabhasas)",
    "content": {
      "en": {
        "question": "Which of the following explains the fallacy (hetvābhāsa) of satpratipakṣa correctly?",
        "options": ["A fallacy where an inference is contradicted by perception or some other non-inferential prāmāṇa.", "A fallacy where one inference is contradicted by another inference.", "A fallacy that disproves the very proposition which it is meant to prove.", "A fallacy of the irregular middle"],
        "explanation": "In Indian Logic (Nyaya), <strong>Satpratipakṣa</strong> is the fallacy of the 'counter-balanced middle'. <br><br>It occurs when a valid inference (anumana) is contradicted by another equally strong inference establishing the exact opposite conclusion. For example: arguing \"Sound is eternal because it is audible\" versus \"Sound is non-eternal because it is produced.\""
      },
      "hi": {
        "question": "निम्नलिखित में से कौन सत्प्रतिपक्ष (satpratipakṣa) हेत्वाभास (fallacy) की सही व्याख्या करता है?",
        "options": ["एक हेत्वाभास जहां किसी अनुमान का प्रत्यक्ष या किसी अन्य गैर-अनुमानात्मक प्रमाण द्वारा खंडन किया जाता है।", "एक हेत्वाभास जहां एक अनुमान का खंडन किसी अन्य अनुमान द्वारा किया जाता है।", "एक हेत्वाभास जो उसी प्रस्ताव को गलत साबित करता है जिसे साबित करने का इसका इरादा है।", "अनियमित मध्य (irregular middle) का हेत्वाभास"],
        "explanation": "भारतीय तर्कशास्त्र (न्याय) में, <strong>सत्प्रतिपक्ष</strong> 'प्रति-संतुलित मध्य' (counter-balanced middle) का हेत्वाभास है। <br><br>यह तब होता है जब एक वैध अनुमान का खंडन एक अन्य समान रूप से मजबूत अनुमान द्वारा किया जाता है जो ठीक विपरीत निष्कर्ष स्थापित करता है। उदाहरण के लिए: यह तर्क देना कि \"ध्वनि शाश्वत है क्योंकि यह श्रव्य है\" बनाम \"ध्वनि अशाश्वत है क्योंकि यह उत्पन्न होती है।\""
      }
    }
  },
  {
    "id": "p1-jan2026-q28",
    "difficulty": "hard",
    "correct": 1,
    "unitEN": "Unit 2: Research Aptitude",
    "unitHI": "इकाई 2: शोध अभिवृत्ति",
    "topicEN": "Research methods (experimental, descriptive, historical)",
    "topicHI": "शोध विधियाँ (प्रायोगिक, वर्णनात्मक, ऐतिहासिक)",
    "content": {
      "en": {
        "question": `Match List I with List II.\n${matchTable("List I","List II",[["A","Independent variable in true experimental design","I","Outcome variable"],["B","Dependent variable","II","Control variable"],["C","Intervening variable","III","Spurious variable"],["D","Confounding variable","IV","Stands between independent variable and dependent variable"]])}Choose the correct answer from the options given below:`,
        "options": ["A-IV, B-III, C-II, D-I", "A-II, B-I, C-IV, D-III", "A-I, B-II, C-III, D-IV", "A-II, B-III, C-IV, D-I"],
        "explanation": "• <strong>Dependent variable (B)</strong> is the outcome variable that is being measured (I).<br>• <strong>Intervening variable (C)</strong> acts as a link or mechanism standing between the independent and dependent variables (IV).<br>• <strong>Confounding variable (D)</strong> causes a spurious (false) association between variables (III).<br>• By elimination, the <strong>Independent variable (A)</strong> in a strict experimental design acts as a highly manipulated control variable by the researcher (II).<br><br>Correct Match: A-II, B-I, C-IV, D-III."
      },
      "hi": {
        "question": `सूची I को सूची II के साथ सुमेलित करें।\n${matchTable("सूची I","सूची II",[["A","सच्चे प्रायोगिक डिजाइन में स्वतंत्र चर (Independent variable)","I","परिणाम चर (Outcome variable)"],["B","आश्रित चर (Dependent variable)","II","नियंत्रण चर (Control variable)"],["C","हस्तक्षेप करने वाला चर (Intervening variable)","III","मिथ्या चर (Spurious variable)"],["D","भ्रमित करने वाला चर (Confounding variable)","IV","स्वतंत्र चर और आश्रित चर के बीच खड़ा होता है"]])}नीचे दिए गए विकल्पों में से सही उत्तर चुनें:`,
        "options": ["A-IV, B-III, C-II, D-I", "A-II, B-I, C-IV, D-III", "A-I, B-II, C-III, D-IV", "A-II, B-III, C-IV, D-I"],
        "explanation": "• <strong>आश्रित चर (B)</strong> वह परिणाम चर है जिसे मापा जा रहा है (I)।<br>• <strong>हस्तक्षेप करने वाला चर (C)</strong> स्वतंत्र और आश्रित चरों के बीच खड़े एक लिंक या तंत्र के रूप में कार्य करता है (IV)।<br>• <strong>भ्रमित करने वाला चर (D)</strong> चरों के बीच एक मिथ्या (झूठा) संबंध बनाता है (III)।<br>• निष्कासन द्वारा, एक सख्त प्रायोगिक डिजाइन में <strong>स्वतंत्र चर (A)</strong> शोधकर्ता द्वारा अत्यधिक हेरफेर किए गए नियंत्रण चर के रूप में कार्य करता है (II)।<br><br>सही सुमेलन: A-II, B-I, C-IV, D-III।"
      }
    }
  },
  {
    "id": "p1-jan2026-q29",
    "difficulty": "medium",
    "correct": 3,
    "unitEN": "Unit 1: Teaching Aptitude",
    "unitHI": "इकाई 1: शिक्षण अभिवृत्ति",
    "topicEN": "Learner characteristics (adolescent & adult)",
    "topicHI": "शिक्षार्थी की विशेषताएं (किशोर और वयस्क)",
    "content": {
      "en": {
        "question": `Match List I with List II.\n${matchTable("List I (Type of Development)","List II (Related with)",[["A","Psycho-sexual Development","I","Identity vs. Role Confusion"],["B","Psycho-social Development","II","Anal Stage"],["C","Cognitive Development","III","Hypothetical-deductive reasoning"],["D","Moral Development","IV","Resolving ethical dilemma"]])}Choose the correct answer from the options given below:`,
        "options": ["A-II, B-III, C-I, D-IV", "A-III, B-I, C-IV, D-II", "A-I, B-IV, C-II, D-III", "A-II, B-I, C-III, D-IV"],
        "explanation": "Let's match the developmental theories with their concepts:<br>• <strong>Psycho-sexual Development (Freud) (A)</strong>: Includes oral, anal, phallic stages (II).<br>• <strong>Psycho-social Development (Erikson) (B)</strong>: Includes 8 stages like Identity vs. Role Confusion (I).<br>• <strong>Cognitive Development (Piaget) (C)</strong>: Involves hypothetical-deductive reasoning in the formal operational stage (III).<br>• <strong>Moral Development (Kohlberg) (D)</strong>: Focuses on how individuals resolve ethical dilemmas (IV).<br><br>Correct Match: A-II, B-I, C-III, D-IV."
      },
      "hi": {
        "question": `सूची I को सूची II के साथ सुमेलित करें।\n${matchTable("सूची I (विकास का प्रकार)","सूची II (से संबंधित)",[["A","मनो-यौन विकास (Psycho-sexual)","I","पहचान बनाम भूमिका भ्रम (Identity vs. Role Confusion)"],["B","मनो-सामाजिक विकास (Psycho-social)","II","गुदा अवस्था (Anal Stage)"],["C","संज्ञानात्मक विकास (Cognitive)","III","काल्पनिक-निगमनात्मक तर्क (Hypothetical-deductive reasoning)"],["D","नैतिक विकास (Moral)","IV","नैतिक दुविधा का समाधान"]])}नीचे दिए गए विकल्पों में से सही उत्तर चुनें:`,
        "options": ["A-II, B-III, C-I, D-IV", "A-III, B-I, C-IV, D-II", "A-I, B-IV, C-II, D-III", "A-II, B-I, C-III, D-IV"],
        "explanation": "आइए विकासात्मक सिद्धांतों का उनकी अवधारणाओं के साथ मिलान करें:<br>• <strong>मनो-यौन विकास (फ्रायड) (A)</strong>: इसमें मौखिक, गुदा और लिंग प्रधान अवस्थाएं शामिल हैं (II)।<br>• <strong>मनो-सामाजिक विकास (एरिकसन) (B)</strong>: इसमें पहचान बनाम भूमिका भ्रम जैसी 8 अवस्थाएं शामिल हैं (I)।<br>• <strong>संज्ञानात्मक विकास (पियाजे) (C)</strong>: औपचारिक संक्रियात्मक अवस्था में काल्पनिक-निगमनात्मक तर्क शामिल है (III)।<br>• <strong>नैतिक विकास (कोहलबर्ग) (D)</strong>: इस बात पर केंद्रित है कि व्यक्ति नैतिक दुविधाओं को कैसे हल करते हैं (IV)।<br><br>सही सुमेलन: A-II, B-I, C-III, D-IV।"
      }
    }
  },
  {
    "id": "p1-jan2026-q30",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "Unit 5: Mathematical Reasoning and Aptitude",
    "unitHI": "इकाई 5: गणितीय तर्क और अभिवृत्ति",
    "topicEN": "Fractions",
    "topicHI": "भिन्न (Fractions)",
    "content": {
      "en": {
        "question": "Arrange the following fractions in ascending order:<br>A. 2/3<br>B. 7/19<br>C. 9/11<br>D. 8/9<br>E. 7/9<br><br>Choose the correct answer from the options given below:",
        "options": ["B, A, E, C, D", "B, E, A, D, C", "A, B, C, D, E", "B, C, A, E, D"],
        "explanation": "To arrange fractions easily, convert them into approximate decimals:<br>• A. 2/3 = 0.666...<br>• B. 7/19 ≈ 0.368<br>• C. 9/11 ≈ 0.818<br>• D. 8/9 ≈ 0.888<br>• E. 7/9 ≈ 0.777<br><br>Arranging from lowest to highest (ascending order): 0.368 (B) < 0.666 (A) < 0.777 (E) < 0.818 (C) < 0.888 (D).<br><br>Therefore, the correct sequence is B, A, E, C, D."
      },
      "hi": {
        "question": "निम्नलिखित भिन्नों (fractions) को आरोही (बढ़ते) क्रम में व्यवस्थित करें:<br>A. 2/3<br>B. 7/19<br>C. 9/11<br>D. 8/9<br>E. 7/9<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["B, A, E, C, D", "B, E, A, D, C", "A, B, C, D, E", "B, C, A, E, D"],
        "explanation": "भिन्नों को आसानी से व्यवस्थित करने के लिए, उन्हें अनुमानित दशमलव में बदलें:<br>• A. 2/3 = 0.666...<br>• B. 7/19 ≈ 0.368<br>• C. 9/11 ≈ 0.818<br>• D. 8/9 ≈ 0.888<br>• E. 7/9 ≈ 0.777<br><br>सबसे छोटे से सबसे बड़े (आरोही क्रम) में व्यवस्थित करने पर: 0.368 (B) < 0.666 (A) < 0.777 (E) < 0.818 (C) < 0.888 (D)।<br><br>इसलिए, सही क्रम B, A, E, C, D है।"
      }
    }
  }, 
  {
    "id": "p1-jan2026-q31",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "Unit 6: Logical Reasoning",
    "unitHI": "इकाई 6: युक्तिसंगत तर्क",
    "topicEN": "Fallacies",
    "topicHI": "हेत्वाभास (भ्रांतियां)",
    "content": {
      "en": {
        "question": "Which of the following are not true?<br>A. In the argument from ignorance fallacy, something is accepted as true because it is not proven false.<br>B. In Hasty generalisation fallacy, a general truth is applied to a particular case ignoring its uniqueness.<br>C. In Begging the question fallacy, an event is wrongly accepted as the cause of some other event.<br>D. The fallacy of Amphiboly occurs in arguing from premises whose formulations are ambiguous because of their grammatical construction.<br><br>Choose the correct answer from the options given below:",
        "options": ["A, B and C only", "A, B and D only", "B and C only", "A and D only"],
        "explanation": "Let's analyze each statement:<br>• <strong>Statement A is True:</strong> Argument from ignorance (ad ignorantiam) asserts a claim is true simply because it hasn't been proven false.<br>• <strong>Statement B is False:</strong> Applying a general truth to a specific, unique case is the fallacy of <em>Accident</em>. Hasty generalization is the opposite (applying a specific case to a general rule).<br>• <strong>Statement C is False:</strong> Wrongly accepting an event as a cause is the <em>False Cause</em> fallacy. Begging the question (circular reasoning) is when the premise assumes the truth of the conclusion.<br>• <strong>Statement D is True:</strong> Amphiboly involves grammatical ambiguity.<br><br>Since the question asks what is <strong>not true</strong>, the correct answer is B and C only."
      },
      "hi": {
        "question": "निम्नलिखित में से कौन सा सत्य नहीं है?<br>A. अज्ञानता से तर्क (argument from ignorance) हेत्वाभास में, किसी चीज़ को सत्य मान लिया जाता है क्योंकि उसे गलत साबित नहीं किया गया है।<br>B. जल्दबाजी में सामान्यीकरण (Hasty generalisation) हेत्वाभास में, किसी विशेष मामले की विशिष्टता को अनदेखा करते हुए उस पर एक सामान्य सत्य लागू किया जाता है।<br>C. प्रश्न पूछने (Begging the question) के हेत्वाभास में, किसी घटना को गलत तरीके से किसी अन्य घटना का कारण मान लिया जाता है।<br>D. एम्फिबोली (Amphiboly) का हेत्वाभास उन आधारवाक्यों से तर्क करने में होता है जिनकी रचना उनके व्याकरणिक निर्माण के कारण अस्पष्ट होती है।<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["केवल A, B और C", "केवल A, B और D", "केवल B और C", "केवल A और D"],
        "explanation": "आइए प्रत्येक कथन का विश्लेषण करें:<br>• <strong>कथन A सत्य है:</strong> अज्ञानता से तर्क (ad ignorantiam) का दावा है कि कोई दावा केवल इसलिए सत्य है क्योंकि उसे गलत साबित नहीं किया गया है।<br>• <strong>कथन B असत्य है:</strong> किसी विशिष्ट, अद्वितीय मामले में सामान्य सत्य को लागू करना <em>दुर्घटना (Accident)</em> का हेत्वाभास है। जल्दबाजी में सामान्यीकरण इसके विपरीत है (सामान्य नियम पर विशिष्ट मामले को लागू करना)।<br>• <strong>कथन C असत्य है:</strong> किसी घटना को कारण के रूप में गलत तरीके से स्वीकार करना <em>झूठा कारण (False Cause)</em> हेत्वाभास है। 'प्रश्न पूछना' (परिपत्र तर्क) तब होता है जब आधारवाक्य निष्कर्ष की सच्चाई को मान लेता है।<br>• <strong>कथन D सत्य है:</strong> एम्फिबोली में व्याकरणिक अस्पष्टता शामिल है।<br><br>चूंकि प्रश्न पूछता है कि <strong>क्या सत्य नहीं है</strong>, इसलिए सही उत्तर केवल B और C है।"
      }
    }
  },
  {
    "id": "p1-jan2026-q32",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "Unit 10: Higher Education System",
    "unitHI": "इकाई 10: उच्च शिक्षा प्रणाली",
    "topicEN": "Policies & governance",
    "topicHI": "नीतियां और शासन",
    "content": {
      "en": {
        "question": "Arrange the following senior functionaries of a central university in the correct hierarchal order:<br>A. Visitor<br>B. Dean of the faculty<br>C. Chancellor<br>D. Head of Department<br>E. Vice-Chancellor<br><br>Choose the correct answer from the options given below:",
        "options": ["A, C, E, D, B", "C, A, E, D, B", "A, C, E, B, D", "B, D, E, C, A"],
        "explanation": "The correct hierarchical order of senior functionaries in an Indian Central University from highest to lowest is:<br>1. <strong>Visitor (A):</strong> The President of India is the Visitor of all Central Universities.<br>2. <strong>Chancellor (C):</strong> The titular head of the university.<br>3. <strong>Vice-Chancellor (E):</strong> The principal executive and academic officer.<br>4. <strong>Dean of the faculty (B):</strong> Head of a specific faculty/school.<br>5. <strong>Head of Department (D):</strong> Leads a specific academic department.<br><br>Correct sequence: A, C, E, B, D."
      },
      "hi": {
        "question": "एक केंद्रीय विश्वविद्यालय के निम्नलिखित वरिष्ठ पदाधिकारियों को सही पदानुक्रमित (hierarchical) क्रम में व्यवस्थित करें:<br>A. कुलाध्यक्ष (Visitor)<br>B. संकाय के डीन (Dean of the faculty)<br>C. कुलाधिपति (Chancellor)<br>D. विभागाध्यक्ष (Head of Department)<br>E. कुलपति (Vice-Chancellor)<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["A, C, E, D, B", "C, A, E, D, B", "A, C, E, B, D", "B, D, E, C, A"],
        "explanation": "भारतीय केंद्रीय विश्वविद्यालय में वरिष्ठ पदाधिकारियों का सही पदानुक्रमित क्रम उच्चतम से निम्नतम तक इस प्रकार है:<br>1. <strong>कुलाध्यक्ष (A):</strong> भारत के राष्ट्रपति सभी केंद्रीय विश्वविद्यालयों के कुलाध्यक्ष (Visitor) होते हैं।<br>2. <strong>कुलाधिपति (C):</strong> विश्वविद्यालय के नाममात्र प्रमुख।<br>3. <strong>कुलपति (E):</strong> प्रमुख कार्यकारी और शैक्षणिक अधिकारी।<br>4. <strong>संकाय के डीन (B):</strong> किसी विशिष्ट संकाय/स्कूल के प्रमुख।<br>5. <strong>विभागाध्यक्ष (D):</strong> एक विशिष्ट शैक्षणिक विभाग का नेतृत्व करते हैं।<br><br>सही क्रम: A, C, E, B, D."
      }
    }
  },
  {
    "id": "p1-jan2026-q33",
    "difficulty": "medium",
    "correct": 3,
    "unitEN": "Unit 2: Research Aptitude",
    "unitHI": "इकाई 2: शोध अभिवृत्ति",
    "topicEN": "Research ethics",
    "topicHI": "शोध नैतिकता",
    "content": {
      "en": {
        "question": "Journals that prioritize self-interest at the expense of scholarship and are characterized by false or misleading information, deviation from best editorial/publication practices, lack of transparency and/or use of aggressive and indiscriminate solicitation practices, are known as:",
        "options": ["Open access journals", "Proprietary journals", "Professional journals", "Predatory journals"],
        "explanation": "<strong>Predatory journals</strong> are exploitative academic publishing models. They charge publication fees (article processing charges) to authors without providing the rigorous peer-review and editorial services associated with legitimate academic journals. They often aggressively solicit scholars via email and publish almost anything submitted to them."
      },
      "hi": {
        "question": "वे पत्रिकाएँ जो विद्वता की कीमत पर स्वार्थ को प्राथमिकता देती हैं और झूठी या भ्रामक जानकारी, सर्वोत्तम संपादकीय/प्रकाशन प्रथाओं से विचलन, पारदर्शिता की कमी और/या आक्रामक व अंधाधुंध याचना प्रथाओं के उपयोग की विशेषता रखती हैं, उन्हें किस रूप में जाना जाता है?",
        "options": ["ओपन एक्सेस पत्रिकाएँ (Open access journals)", "मालिकाना पत्रिकाएँ (Proprietary journals)", "पेशेवर पत्रिकाएँ (Professional journals)", "परभक्षी पत्रिकाएँ (Predatory journals)"],
        "explanation": "<strong>परभक्षी पत्रिकाएँ (Predatory journals)</strong> शोषक अकादमिक प्रकाशन मॉडल हैं। वे वैध अकादमिक पत्रिकाओं से जुड़ी कठोर सहकर्मी-समीक्षा (peer-review) और संपादकीय सेवाएं प्रदान किए बिना लेखकों से प्रकाशन शुल्क (लेख प्रसंस्करण शुल्क) लेते हैं। वे अक्सर ईमेल के माध्यम से विद्वानों से आक्रामक रूप से आग्रह करते हैं और उन्हें प्रस्तुत की गई लगभग हर चीज प्रकाशित करते हैं।"
      }
    }
  },
  {
    "id": "p1-jan2026-q34",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "Unit 2: Research Aptitude",
    "unitHI": "इकाई 2: शोध अभिवृत्ति",
    "topicEN": "Steps of research",
    "topicHI": "शोध के चरण",
    "content": {
      "en": {
        "question": "Identify the advantages of closed ended questions in survey research:<br>A. It is easy to process answers.<br>B. Respondents can answer in their own terms.<br>C. They are easy for the respondents to complete.<br>D. They allow unusual responses to be derived.<br><br>Choose the correct answer from the options given below:",
        "options": ["A and B only", "A and C only", "A, B and C only", "B, C and D only"],
        "explanation": "Closed-ended questions provide predefined options (like MCQs).<br>• <strong>Advantages:</strong> They are quick and easy for respondents to complete (C), and because the data is highly structured, it is very easy for researchers to process and statistically analyze (A).<br>• Statements B (answering in own terms) and D (discovering unusual responses) are distinct advantages of <em>open-ended</em> questions.<br><br>Therefore, A and C only are the correct advantages."
      },
      "hi": {
        "question": "सर्वेक्षण अनुसंधान में बंद सिरे वाले प्रश्नों (closed ended questions) के लाभों को पहचानें:<br>A. उत्तरों को संसाधित (process) करना आसान है।<br>B. उत्तरदाता अपनी शर्तों (शब्दों) में उत्तर दे सकते हैं।<br>C. उत्तरदाताओं के लिए उन्हें पूरा करना आसान है।<br>D. वे असामान्य प्रतिक्रियाएँ प्राप्त करने की अनुमति देते हैं।<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["केवल A और B", "केवल A और C", "केवल A, B और C", "केवल B, C और D"],
        "explanation": "बंद सिरे वाले प्रश्न पूर्व-निर्धारित विकल्प (जैसे MCQ) प्रदान करते हैं।<br>• <strong>लाभ:</strong> वे उत्तरदाताओं के लिए जल्दी और आसानी से पूरे किए जा सकते हैं (C), और चूंकि डेटा अत्यधिक संरचित है, इसलिए शोधकर्ताओं के लिए इसका प्रसंस्करण और सांख्यिकीय विश्लेषण करना बहुत आसान है (A)।<br>• कथन B (अपने शब्दों में उत्तर देना) और D (असामान्य प्रतिक्रियाओं की खोज करना) <em>खुले सिरे वाले (open-ended)</em> प्रश्नों के विशिष्ट लाभ हैं।<br><br>इसलिए, केवल A और C सही लाभ हैं।"
      }
    }
  },
  {
    "id": "p1-jan2026-q35",
    "difficulty": "hard",
    "correct": 1,
    "unitEN": "Unit 5: Mathematical Reasoning and Aptitude",
    "unitHI": "इकाई 5: गणितीय तर्क और अभिवृत्ति",
    "topicEN": "Averages",
    "topicHI": "औसत (Averages)",
    "content": {
      "en": {
        "question": "Identify the correct mathematical statements:<br>A. The value of 1/4 + 1/(4×5) + 1/(4×5×6) is equal to 37/120.<br>B. 1 + 2 ÷ {1 + 2 ÷ (1 + 1/3)} is equal to 4/5.<br>C. If the average of 6 numbers is 7, the average of 3 numbers of them is 5, then the average of remaining numbers is 9.<br>D. If 75% of a number is added to 75, then the result is number itself. Then the number is 300.<br>E. Largest fraction from 9/31, 6/23, 3/17, 4/11 is 9/31.<br><br>Choose the correct answer from the options given below:",
        "options": ["A and B only", "A, C and D only", "C and D only", "C, E and D only"],
        "explanation": "Let's evaluate each statement:<br>• <strong>A is True:</strong> 1/4 + 1/20 + 1/120 = (30 + 6 + 1)/120 = 37/120.<br>• <strong>B is False:</strong> Solving the brackets: 1 + 2 ÷ {1 + 2 ÷ (4/3)} = 1 + 2 ÷ {1 + 1.5} = 1 + (2 / 2.5) = 1 + 0.8 = 1.8 (or 9/5), not 4/5.<br>• <strong>C is True:</strong> Total sum of 6 numbers = 42. Sum of 3 = 15. Remaining sum = 42 - 15 = 27. Average of remaining 3 = 27/3 = 9.<br>• <strong>D is True:</strong> Let number be x. 0.75x + 75 = x → 0.25x = 75 → x = 300.<br>• <strong>E is False:</strong> 4/11 (~0.36) is larger than 9/31 (~0.29).<br><br>Thus, only statements A, C, and D are correct."
      },
      "hi": {
        "question": "सही गणितीय कथनों की पहचान करें:<br>A. 1/4 + 1/(4×5) + 1/(4×5×6) का मान 37/120 के बराबर है।<br>B. 1 + 2 ÷ {1 + 2 ÷ (1 + 1/3)} 4/5 के बराबर है।<br>C. यदि 6 संख्याओं का औसत 7 है, उनमें से 3 संख्याओं का औसत 5 है, तो शेष संख्याओं का औसत 9 है।<br>D. यदि किसी संख्या का 75%, 75 में जोड़ा जाता है, तो परिणाम वह संख्या ही होती है। तो वह संख्या 300 है।<br>E. 9/31, 6/23, 3/17, 4/11 में से सबसे बड़ा भिन्न 9/31 है।<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["केवल A और B", "केवल A, C और D", "केवल C और D", "केवल C, E और D"],
        "explanation": "आइए प्रत्येक कथन का मूल्यांकन करें:<br>• <strong>A सत्य है:</strong> 1/4 + 1/20 + 1/120 = (30 + 6 + 1)/120 = 37/120.<br>• <strong>B असत्य है:</strong> कोष्ठक हल करने पर: 1 + 2 ÷ {1 + 2 ÷ (4/3)} = 1 + 2 ÷ {1 + 1.5} = 1 + (2 / 2.5) = 1 + 0.8 = 1.8 (या 9/5), 4/5 नहीं।<br>• <strong>C सत्य है:</strong> 6 संख्याओं का कुल योग = 42। 3 का योग = 15। शेष योग = 42 - 15 = 27। शेष 3 का औसत = 27/3 = 9।<br>• <strong>D सत्य है:</strong> माना संख्या x है। 0.75x + 75 = x → 0.25x = 75 → x = 300।<br>• <strong>E असत्य है:</strong> 4/11 (~0.36), 9/31 (~0.29) से बड़ा है।<br><br>इस प्रकार, केवल कथन A, C, और D सही हैं।"
      }
    }
  },
  {
    "id": "p1-jan2026-q36",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "Unit 5: Mathematical Reasoning and Aptitude",
    "unitHI": "इकाई 5: गणितीय तर्क और अभिवृत्ति",
    "topicEN": "Time & distance",
    "topicHI": "समय और दूरी",
    "content": {
      "en": {
        "question": "Two cyclists cover the same distance at 15 km/hr and 16 km/hr, respectively. If one cyclist takes 16 minutes longer than the other, then the distance travelled by each cyclist is:",
        "options": ["64 km", "16 km", "68 km", "12 km"],
        "explanation": "Let the distance be D km.<br>Time taken by slower cyclist = D/15 hours.<br>Time taken by faster cyclist = D/16 hours.<br>The difference in time is 16 minutes, which is 16/60 hours.<br><br>Equation: (D / 15) - (D / 16) = 16 / 60<br>Finding LCM (240): (16D - 15D) / 240 = 4 / 15<br>D / 240 = 4 / 15<br>D = (240 × 4) / 15 = 16 × 4 = 64 km."
      },
      "hi": {
        "question": "दो साइकिल चालक क्रमशः 15 किमी/घंटा और 16 किमी/घंटा की गति से समान दूरी तय करते हैं। यदि एक साइकिल चालक दूसरे की तुलना में 16 मिनट अधिक समय लेता है, तो प्रत्येक साइकिल चालक द्वारा तय की गई दूरी है:",
        "options": ["64 किमी", "16 किमी", "68 किमी", "12 किमी"],
        "explanation": "माना दूरी D किमी है।<br>धीमे साइकिल चालक द्वारा लिया गया समय = D/15 घंटे।<br>तेज़ साइकिल चालक द्वारा लिया गया समय = D/16 घंटे।<br>समय में अंतर 16 मिनट है, जो 16/60 घंटे है।<br><br>समीकरण: (D / 15) - (D / 16) = 16 / 60<br>LCM (240) ज्ञात करना: (16D - 15D) / 240 = 4 / 15<br>D / 240 = 4 / 15<br>D = (240 × 4) / 15 = 16 × 4 = 64 किमी।"
      }
    }
  },
  {
    "id": "p1-jan2026-q37",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "Unit 5: Mathematical Reasoning and Aptitude",
    "unitHI": "इकाई 5: गणितीय तर्क और अभिवृत्ति",
    "topicEN": "Ratio & proportion",
    "topicHI": "अनुपात और समानुपात",
    "content": {
      "en": {
        "question": "Arrange the following pairs of standard deviation (σ) and total number of samples (n) pertaining to different sampling distributions in the decreasing order of their standard error.<br>A. σ = 1.6, n = 16<br>B. σ = 1.5, n = 25<br>C. σ = 0.6, n = 36<br>D. σ = 1.4, n = 49<br><br>Choose the correct answer from the options given below:",
        "options": ["A, B, C, D", "A, B, D, C", "D, C, B, A", "C, B, D, A"],
        "explanation": "The formula for Standard Error (SE) is: <strong>SE = σ / √n</strong><br><br>• For A: SE = 1.6 / √16 = 1.6 / 4 = 0.40<br>• For B: SE = 1.5 / √25 = 1.5 / 5 = 0.30<br>• For C: SE = 0.6 / √36 = 0.6 / 6 = 0.10<br>• For D: SE = 1.4 / √49 = 1.4 / 7 = 0.20<br><br>Arranging from highest to lowest (decreasing order): A (0.40) > B (0.30) > D (0.20) > C (0.10). Correct sequence: A, B, D, C."
      },
      "hi": {
        "question": "विभिन्न नमूना वितरणों (sampling distributions) से संबंधित मानक विचलन (σ) और नमूनों की कुल संख्या (n) के निम्नलिखित जोड़े को उनकी मानक त्रुटि (standard error) के घटते क्रम में व्यवस्थित करें।<br>A. σ = 1.6, n = 16<br>B. σ = 1.5, n = 25<br>C. σ = 0.6, n = 36<br>D. σ = 1.4, n = 49<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["A, B, C, D", "A, B, D, C", "D, C, B, A", "C, B, D, A"],
        "explanation": "मानक त्रुटि (SE) का सूत्र है: <strong>SE = σ / √n</strong><br><br>• A के लिए: SE = 1.6 / √16 = 1.6 / 4 = 0.40<br>• B के लिए: SE = 1.5 / √25 = 1.5 / 5 = 0.30<br>• C के लिए: SE = 0.6 / √36 = 0.6 / 6 = 0.10<br>• D के लिए: SE = 1.4 / √49 = 1.4 / 7 = 0.20<br><br>उच्चतम से निम्नतम (घटते क्रम) में व्यवस्थित करने पर: A (0.40) > B (0.30) > D (0.20) > C (0.10)। सही क्रम: A, B, D, C।"
      }
    }
  },
  {
    "id": "p1-jan2026-q38",
    "difficulty": "hard",
    "correct": 0,
    "unitEN": "Unit 4: Communication",
    "unitHI": "इकाई 4: संप्रेषण",
    "topicEN": "Types of communication",
    "topicHI": "संप्रेषण के प्रकार",
    "content": {
      "en": {
        "question": `Match List I with List II.\n${matchTable("List I","List II",[["A","Rhetorical","I","Considering communication to be discursive reflection on hegemonic ideological forces"],["B","Semiotic","II","Considering communication to be the capacity of experiencing otherness through authentic dialogue"],["C","Phenomenological","III","Considering communication to be Practical Art"],["D","Critical","IV","Considering communication to be Intersubjective Mediation via Signs"]])}Choose the correct answer from the options given below:`,
        "options": ["A-III, B-IV, C-II, D-I", "A-II, B-IV, C-III, D-I", "A-I, B-IV, C-II, D-III", "A-III, B-II, C-IV, D-I"],
        "explanation": "According to Robert Craig's 7 traditions of communication theory:<br>• <strong>Rhetorical (A):</strong> Communication as the practical art of discourse (III).<br>• <strong>Semiotic (B):</strong> Communication as intersubjective mediation via signs/symbols (IV).<br>• <strong>Phenomenological (C):</strong> Communication as the experience of otherness through dialogue (II).<br>• <strong>Critical (D):</strong> Communication as reflection on ideological forces and power structures (I).<br><br>Correct match: A-III, B-IV, C-II, D-I."
      },
      "hi": {
        "question": `सूची I को सूची II के साथ सुमेलित करें।\n${matchTable("सूची I","सूची II",[["A","आलंकारिक (Rhetorical)","I","संचार को आधिपत्यवादी वैचारिक शक्तियों पर विवेचनात्मक प्रतिबिंब मानना"],["B","संकेतविज्ञान (Semiotic)","II","संचार को प्रामाणिक संवाद के माध्यम से 'अन्यपन' (otherness) का अनुभव करने की क्षमता मानना"],["C","घटना-क्रिया-विज्ञान (Phenomenological)","III","संचार को व्यावहारिक कला (Practical Art) मानना"],["D","आलोचनात्मक (Critical)","IV","संचार को संकेतों के माध्यम से अंतर-विषयक मध्यस्थता (Intersubjective Mediation) मानना"]])}नीचे दिए गए विकल्पों में से सही उत्तर चुनें:`,
        "options": ["A-III, B-IV, C-II, D-I", "A-II, B-IV, C-III, D-I", "A-I, B-IV, C-II, D-III", "A-III, B-II, C-IV, D-I"],
        "explanation": "रॉबर्ट क्रेग के संचार सिद्धांत की 7 परंपराओं के अनुसार:<br>• <strong>आलंकारिक (A):</strong> प्रवचन की व्यावहारिक कला के रूप में संचार (III)।<br>• <strong>संकेतविज्ञान (B):</strong> संकेतों/प्रतीकों के माध्यम से अंतर-विषयक मध्यस्थता के रूप में संचार (IV)।<br>• <strong>घटना-क्रिया-विज्ञान (C):</strong> संवाद के माध्यम से 'अन्यपन' के अनुभव के रूप में संचार (II)।<br>• <strong>आलोचनात्मक (D):</strong> वैचारिक शक्तियों और सत्ता संरचनाओं पर प्रतिबिंब के रूप में संचार (I)।<br><br>सही सुमेलन: A-III, B-IV, C-II, D-I।"
      }
    }
  },
  {
    "id": "p1-jan2026-q39",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "Unit 4: Communication",
    "unitHI": "इकाई 4: संप्रेषण",
    "topicEN": "Mass media & society",
    "topicHI": "जनसंचार माध्यम और समाज",
    "content": {
      "en": {
        "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).<br><br><strong>Assertion (A):</strong> People, who hold views contrary to those dominant in the media, keep those views to themselves.<br><strong>Reason (R):</strong> Such people fear isolation or separation from those around them.<br><br>In the light of the above statements, choose the most appropriate answer from the options given below:",
        "options": ["Both (A) and (R) are correct and (R) is the correct explanation of (A)", "Both (A) and (R) are correct but (R) is not the correct explanation of (A)", "(A) is correct but (R) is not correct", "(A) is not correct but (R) is correct"],
        "explanation": "These statements perfectly describe Elisabeth Noelle-Neumann's <strong>Spiral of Silence</strong> theory.<br>• <strong>Assertion (A):</strong> People often remain silent when they perceive their opinions are in the minority compared to the media's dominant narrative.<br>• <strong>Reason (R):</strong> The primary psychological driver for this silence is the deep-seated fear of social isolation, rejection, or ostracization by their peers.<br><br>Since the fear of isolation directly causes them to keep their views hidden, (R) is the correct and direct explanation of (A)."
      },
      "hi": {
        "question": "नीचे दो कथन दिए गए हैं: एक को अभिकथन (A) और दूसरे को कारण (R) के रूप में लेबल किया गया है।<br><br><strong>अभिकथन (A):</strong> जो लोग मीडिया में हावी विचारों के विपरीत विचार रखते हैं, वे उन विचारों को अपने तक ही सीमित रखते हैं।<br><strong>कारण (R):</strong> ऐसे लोगों को अपने आस-पास के लोगों से अलगाव या अलग होने का डर होता है।<br><br>उपरोक्त कथनों के आलोक में, नीचे दिए गए विकल्पों में से सबसे उपयुक्त उत्तर चुनें:",
        "options": ["(A) और (R) दोनों सही हैं और (R), (A) की सही व्याख्या है", "(A) और (R) दोनों सही हैं लेकिन (R), (A) की सही व्याख्या नहीं है", "(A) सही है लेकिन (R) सही नहीं है", "(A) सही नहीं है लेकिन (R) सही है"],
        "explanation": "ये कथन एलिज़ाबेथ नोएल-न्यूमैन के <strong>स्पाइरल ऑफ़ साइलेंस (Spiral of Silence)</strong> सिद्धांत का पूरी तरह से वर्णन करते हैं।<br>• <strong>अभिकथन (A):</strong> जब लोगों को लगता है कि मीडिया के प्रमुख आख्यान की तुलना में उनकी राय अल्पसंख्यक है, तो वे अक्सर चुप रहते हैं।<br>• <strong>कारण (R):</strong> इस मौन का प्राथमिक मनोवैज्ञानिक चालक साथियों द्वारा सामाजिक अलगाव, अस्वीकृति या बहिष्कार का गहरा डर है।<br><br>चूंकि अलगाव का डर सीधे तौर पर उन्हें अपने विचार छिपाने का कारण बनता है, (R), (A) की सही और प्रत्यक्ष व्याख्या है।"
      }
    }
  },
  {
    "id": "p1-jan2026-q40",
    "difficulty": "easy",
    "correct": 1,
    "unitEN": "Unit 1: Teaching Aptitude",
    "unitHI": "इकाई 1: शिक्षण अभिवृत्ति",
    "topicEN": "Learner characteristics (adolescent & adult)",
    "topicHI": "शिक्षार्थी की विशेषताएं (किशोर और वयस्क)",
    "content": {
      "en": {
        "question": "Which of the following is an example of biological motive?",
        "options": ["Achievement", "Hunger", "Power", "Affiliation"],
        "explanation": "Motives are broadly classified into two categories: Biological (Primary) and Psychosocial (Secondary).<br><br>• <strong>Hunger</strong> is a biological motive because it is innate, physiological, and essential for physical survival (along with thirst, sleep, and sex).<br>• Achievement, Power, and Affiliation are psychosocial motives, which are learned through social and cultural interactions."
      },
      "hi": {
        "question": "निम्नलिखित में से कौन सा जैविक उद्देश्य (biological motive) का उदाहरण है?",
        "options": ["उपलब्धि (Achievement)", "भूख (Hunger)", "शक्ति (Power)", "संबद्धता (Affiliation)"],
        "explanation": "उद्देश्यों (Motives) को मोटे तौर पर दो श्रेणियों में वर्गीकृत किया जाता है: जैविक (प्राथमिक) और मनोसामाजिक (द्वितीयक)।<br><br>• <strong>भूख</strong> एक जैविक उद्देश्य है क्योंकि यह जन्मजात, शारीरिक और शारीरिक अस्तित्व के लिए आवश्यक है (प्यास, नींद और सेक्स के साथ)।<br>• उपलब्धि, शक्ति और संबद्धता मनोसामाजिक उद्देश्य हैं, जो सामाजिक और सांस्कृतिक अंतःक्रियाओं के माध्यम से सीखे जाते हैं।"
      }
    }
  },
  {
    "id": "p1-jan2026-q41",
    "difficulty": "medium",
    "correct": 3,
    "unitEN": "Unit 1: Teaching Aptitude",
    "unitHI": "इकाई 1: शिक्षण अभिवृत्ति",
    "topicEN": "Teaching concept & objectives",
    "topicHI": "शिक्षण अवधारणा और उद्देश्य",
    "content": {
      "en": {
        "question": "Arrange the steps of creative thinking process in correct sequence:<br>A. Preparation<br>B. Evaluation<br>C. Illumination<br>D. Revision<br>E. Incubation<br><br>Choose the correct answer from the options given below:",
        "options": ["A, B, C, D, E", "E, D, C, B, A", "D, C, B, E, A", "A, E, C, B, D"],
        "explanation": "According to Graham Wallas's widely accepted model, the creative thinking process follows this sequence:<br>1. <strong>Preparation (A):</strong> Gathering data and defining the problem.<br>2. <strong>Incubation (E):</strong> Stepping away to let the subconscious mind work.<br>3. <strong>Illumination (C):</strong> The \"Aha!\" moment when the idea flashes into consciousness.<br>4. <strong>Evaluation (B):</strong> Analyzing the idea to see if it works.<br>5. <strong>Revision/Verification (D):</strong> Polishing and implementing the final idea.<br><br>Correct sequence: A, E, C, B, D."
      },
      "hi": {
        "question": "रचनात्मक सोच प्रक्रिया (creative thinking process) के चरणों को सही क्रम में व्यवस्थित करें:<br>A. तैयारी (Preparation)<br>B. मूल्यांकन (Evaluation)<br>C. प्रदीपन (Illumination)<br>D. संशोधन (Revision)<br>E. उद्भवन (Incubation)<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["A, B, C, D, E", "E, D, C, B, A", "D, C, B, E, A", "A, E, C, B, D"],
        "explanation": "ग्राहम वालस के व्यापक रूप से स्वीकृत मॉडल के अनुसार, रचनात्मक सोच प्रक्रिया इस क्रम का पालन करती है:<br>1. <strong>तैयारी (A):</strong> डेटा एकत्र करना और समस्या को परिभाषित करना।<br>2. <strong>उद्भवन (E):</strong> अवचेतन मन को काम करने देने के लिए समस्या से दूर हटना।<br>3. <strong>प्रदीपन (C):</strong> \"अहा!\" क्षण जब विचार चेतना में चमकता है।<br>4. <strong>मूल्यांकन (B):</strong> यह देखने के लिए विचार का विश्लेषण करना कि क्या यह काम करता है।<br>5. <strong>संशोधन/सत्यापन (D):</strong> अंतिम विचार को परिष्कृत करना और लागू करना।<br><br>सही क्रम: A, E, C, B, D."
      }
    }
  },
  {
    "id": "p1-jan2026-q42",
    "difficulty": "hard",
    "correct": 3,
    "unitEN": "Unit 6: Logical Reasoning",
    "unitHI": "इकाई 6: युक्तिसंगत तर्क",
    "topicEN": "Categorical propositions",
    "topicHI": "निरपेक्ष तर्कवाक्य (Categorical propositions)",
    "content": {
      "en": {
        "question": "Which of the following is/are true:<br>A. The conversion of an O proposition is valid.<br>B. The conversion of an A proposition is an A proposition.<br>C. The conversion of an E proposition is conversion by limitation.<br>D. The conversion of an I proposition is valid.<br><br>Choose the correct answer from the options given below:",
        "options": ["A and D only", "A and B only", "C only", "D only"],
        "explanation": "In classical syllogistic logic (Immediate Inference - Conversion):<br>• An <strong>'O' proposition</strong> (Some S are not P) cannot be validly converted.<br>• An <strong>'A' proposition</strong> (All S are P) converts <em>by limitation</em> into an 'I' proposition (Some P are S), not another 'A' proposition.<br>• An <strong>'E' proposition</strong> (No S are P) converts simply into another 'E' proposition (No P are S), not by limitation.<br>• An <strong>'I' proposition</strong> (Some S are P) converts validly into another 'I' proposition (Some P are S).<br><br>Therefore, only statement D is true."
      },
      "hi": {
        "question": "निम्नलिखित में से कौन सा/से सत्य है/हैं:<br>A. 'O' तर्कवाक्य का रूपांतरण (conversion) वैध है।<br>B. 'A' तर्कवाक्य का रूपांतरण एक 'A' तर्कवाक्य होता है।<br>C. 'E' तर्कवाक्य का रूपांतरण परिसीमन (limitation) द्वारा रूपांतरण है।<br>D. 'I' तर्कवाक्य का रूपांतरण वैध है।<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["केवल A और D", "केवल A और B", "केवल C", "केवल D"],
        "explanation": "शास्त्रीय न्यायवाक्य तर्क (तात्कालिक अनुमान - रूपांतरण) में:<br>• <strong>'O' तर्कवाक्य</strong> (कुछ S, P नहीं हैं) को वैध रूप से परिवर्तित नहीं किया जा सकता है।<br>• <strong>'A' तर्कवाक्य</strong> (सभी S, P हैं) <em>परिसीमन द्वारा</em> 'I' तर्कवाक्य (कुछ P, S हैं) में परिवर्तित होता है, न कि किसी अन्य 'A' तर्कवाक्य में।<br>• <strong>'E' तर्कवाक्य</strong> (कोई S, P नहीं है) बस एक अन्य 'E' तर्कवाक्य (कोई P, S नहीं है) में परिवर्तित होता है, परिसीमन द्वारा नहीं।<br>• <strong>'I' तर्कवाक्य</strong> (कुछ S, P हैं) वैध रूप से एक अन्य 'I' तर्कवाक्य (कुछ P, S हैं) में परिवर्तित होता है।<br><br>इसलिए, केवल कथन D सत्य है।"
      }
    }
  },
  {
    "id": "p1-jan2026-q43",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "Unit 4: Communication",
    "unitHI": "इकाई 4: संप्रेषण",
    "topicEN": "Mass media & society",
    "topicHI": "जनसंचार माध्यम और समाज",
    "content": {
      "en": {
        "question": "The theory that argues that media can have a strong influence in deciding the small number of public problems or issues that people will think about at any given point in time, is:",
        "options": ["Agenda-Setting Theory", "Knowledge-Gap Theory", "Limited Effects Theory", "Personal Influence Theory"],
        "explanation": "<strong>Agenda-Setting Theory</strong> (developed by Maxwell McCombs and Donald Shaw) famously asserts that while the media may not be successful in telling people <em>what to think</em>, it is stunningly successful in telling its readers <em>what to think about</em>. By focusing extensively on specific issues, the media shapes the public's perception of what the most important problems are."
      },
      "hi": {
        "question": "वह सिद्धांत जो यह तर्क देता है कि मीडिया सार्वजनिक समस्याओं या मुद्दों की छोटी संख्या तय करने में एक मजबूत प्रभाव डाल सकता है जिसके बारे में लोग किसी भी समय सोचेंगे, वह है:",
        "options": ["एजेंडा-सेटिंग थ्योरी (Agenda-Setting Theory)", "नॉलेज-गैप थ्योरी (Knowledge-Gap Theory)", "सीमित प्रभाव सिद्धांत (Limited Effects Theory)", "व्यक्तिगत प्रभाव सिद्धांत (Personal Influence Theory)"],
        "explanation": "<strong>एजेंडा-सेटिंग सिद्धांत</strong> (मैक्सवेल मैककॉम्ब्स और डोनाल्ड शॉ द्वारा विकसित) प्रसिद्ध रूप से जोर देता है कि यद्यपि मीडिया लोगों को यह बताने में सफल नहीं हो सकता है कि <em>क्या सोचना है</em>, लेकिन यह अपने पाठकों को यह बताने में आश्चर्यजनक रूप से सफल है कि <em>किस बारे में सोचना है</em>। विशिष्ट मुद्दों पर बड़े पैमाने पर ध्यान केंद्रित करके, मीडिया जनता की इस धारणा को आकार देता है कि सबसे महत्वपूर्ण समस्याएं क्या हैं।"
      }
    }
  },
  {
    "id": "p1-jan2026-q44",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "Unit 1: Teaching Aptitude",
    "unitHI": "इकाई 1: शिक्षण अभिवृत्ति",
    "topicEN": "Online vs offline teaching (SWAYAM, MOOCs etc.)",
    "topicHI": "ऑनलाइन बनाम ऑफलाइन शिक्षण",
    "content": {
      "en": {
        "question": "Which among the following is the most liberal Open Education Resource license?",
        "options": ["CC-BY", "CC-BY-SA", "CC-BY-ND", "CC-BY-NC"],
        "explanation": "In Creative Commons (CC) licensing, <strong>CC-BY</strong> (Attribution) is the most accommodating and liberal license offered. It lets others distribute, remix, adapt, and build upon the original work, even commercially, as long as they credit the original creator. <br><br>The other tags add restrictions: SA (ShareAlike), ND (NoDerivatives), and NC (NonCommercial)."
      },
      "hi": {
        "question": "निम्नलिखित में से कौन सा सबसे उदार मुक्त शिक्षा संसाधन (Open Education Resource) लाइसेंस है?",
        "options": ["CC-BY", "CC-BY-SA", "CC-BY-ND", "CC-BY-NC"],
        "explanation": "क्रिएटिव कॉमन्स (CC) लाइसेंसिंग में, <strong>CC-BY</strong> (Attribution) सबसे अधिक उदार लाइसेंस है। यह दूसरों को मूल कार्य को वितरित करने, रीमिक्स करने, अनुकूलित करने और उस पर निर्माण करने की सुविधा देता है, यहां तक कि व्यावसायिक रूप से भी, जब तक कि वे मूल निर्माता को श्रेय देते हैं। <br><br>अन्य टैग प्रतिबंध जोड़ते हैं: SA (ShareAlike - समान रूप से साझा करें), ND (NoDerivatives - कोई व्युत्पन्न नहीं), और NC (NonCommercial - गैर-व्यावसायिक)।"
      }
    }
  },
  {
    "id": "p1-jan2026-q45",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "Unit 8: Information and Communication Technology (ICT)",
    "unitHI": "इकाई 8: सूचना और संचार प्रौद्योगिकी (ICT)",
    "topicEN": "Internet basics",
    "topicHI": "इंटरनेट मूल बातें",
    "content": {
      "en": {
        "question": "Arrange the following in increasing order in terms of their coverage:<br>A. PAN<br>B. MAN<br>C. WAN<br>D. LAN<br><br>Choose the correct answer from the options given below:",
        "options": ["D, B, A, C", "A, B, D, C", "A, D, B, C", "B, A, D, C"],
        "explanation": "Networks are classified by their geographical coverage area. The correct increasing order is:<br>1. <strong>PAN (Personal Area Network) - A:</strong> Smallest, covers a few meters (e.g., Bluetooth).<br>2. <strong>LAN (Local Area Network) - D:</strong> Covers a room, building, or small campus.<br>3. <strong>MAN (Metropolitan Area Network) - B:</strong> Covers a city or large metropolitan area.<br>4. <strong>WAN (Wide Area Network) - C:</strong> Largest coverage, spanning states, countries, or the globe (like the Internet).<br><br>Therefore, the sequence is A, D, B, C."
      },
      "hi": {
        "question": "निम्नलिखित को उनके कवरेज (भौगोलिक क्षेत्र) के संदर्भ में बढ़ते क्रम में व्यवस्थित करें:<br>A. PAN<br>B. MAN<br>C. WAN<br>D. LAN<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": ["D, B, A, C", "A, B, D, C", "A, D, B, C", "B, A, D, C"],
        "explanation": "नेटवर्क को उनके भौगोलिक कवरेज क्षेत्र के आधार पर वर्गीकृत किया जाता है। सही बढ़ता क्रम है:<br>1. <strong>PAN (Personal Area Network) - A:</strong> सबसे छोटा, कुछ मीटर (जैसे, ब्लूटूथ) को कवर करता है।<br>2. <strong>LAN (Local Area Network) - D:</strong> एक कमरे, इमारत या छोटे परिसर को कवर करता है।<br>3. <strong>MAN (Metropolitan Area Network) - B:</strong> एक शहर या बड़े महानगरीय क्षेत्र को कवर करता है।<br>4. <strong>WAN (Wide Area Network) - C:</strong> सबसे बड़ा कवरेज, जो राज्यों, देशों या दुनिया (जैसे इंटरनेट) में फैला है।<br><br>इसलिए, अनुक्रम A, D, B, C है।"
      }
    }
  },
  {
    "id": "p1-jan2026-q46",
    "difficulty": "easy",
    "correct": 0,
    "unitEN": "Unit 3: Reading Comprehension",
    "unitHI": "इकाई 3: पठन बोध (Reading Comprehension)",
    "topicEN": "Answer extraction skills",
    "topicHI": "उत्तर निष्कर्षण कौशल",
    "content": {
      "en": {
        "question": passageHTML(PASSAGE_MANAGEMENT.en) + "<strong>Question:</strong><br>According to the passage, the role of a manager includes all of the following, except:",
        "options": ["Stacking stones for the pyramids", "Planning what is to be done", "Organising people for the pyramids site", "Directing the pyramid work force"],
        "explanation": "The passage explicitly defines management as activities involving \"planning, organizing, leading and controlling.\" <br><br>\"Stacking stones for the pyramids\" refers to the actual physical manual labor or execution of the task, not the managerial oversight role. Therefore, it is the exception."
      },
      "hi": {
        "question": passageHTML(PASSAGE_MANAGEMENT.hi) + "<strong>प्रश्न:</strong><br>गद्यांश के अनुसार, प्रबंधक की भूमिका में निम्नलिखित सभी शामिल हैं, सिवाय इसके:",
        "options": ["पिरामिडों के लिए पत्थर रखना (Stacking stones)", "योजना बनाना कि क्या किया जाना है", "पिरामिड साइट के लिए लोगों को व्यवस्थित करना", "पिरामिड कार्य बल का निर्देशन करना"],
        "explanation": "गद्यांश स्पष्ट रूप से प्रबंधन को \"योजना बनाने, व्यवस्थित करने, नेतृत्व करने और नियंत्रण करने\" वाली गतिविधियों के रूप में परिभाषित करता है। <br><br>\"पिरामिडों के लिए पत्थर रखना\" कार्य के वास्तविक भौतिक श्रम या निष्पादन को संदर्भित करता है, न कि प्रबंधकीय निरीक्षण भूमिका को। इसलिए, यह अपवाद है।"
      }
    }
  },
  {
    "id": "p1-jan2026-q47",
    "difficulty": "easy",
    "correct": 3,
    "unitEN": "Unit 3: Reading Comprehension",
    "unitHI": "इकाई 3: पठन बोध (Reading Comprehension)",
    "topicEN": "Answer extraction skills",
    "topicHI": "उत्तर निष्कर्षण कौशल",
    "content": {
      "en": {
        "question": passageHTML(PASSAGE_MANAGEMENT.en) + "<strong>Question:</strong><br>According to the passage, persons responsible for the control, organisation and planning have been directing organised endeavors:",
        "options": ["Since 1400's", "For 100,000 years", "For Twenty years", "For Thousands of years"],
        "explanation": "The very first sentence of the provided passage explicitly states: \"Organized endeavors directed by people responsible for planning, organizing, leading and controlling activities have existed for <strong>thousands of years</strong>.\""
      },
      "hi": {
        "question": passageHTML(PASSAGE_MANAGEMENT.hi) + "<strong>प्रश्न:</strong><br>गद्यांश के अनुसार, नियंत्रण, संगठन और नियोजन के लिए जिम्मेदार व्यक्ति संगठित प्रयासों का निर्देशन कर रहे हैं:",
        "options": ["1400 के दशक से", "100,000 वर्षों से", "बीस वर्षों से", "हजारों वर्षों से"],
        "explanation": "प्रदान किए गए गद्यांश का बिल्कुल पहला वाक्य स्पष्ट रूप से कहता है: \"योजना बनाने, व्यवस्थित करने, नेतृत्व करने और गतिविधियों को नियंत्रित करने के लिए जिम्मेदार लोगों द्वारा निर्देशित संगठित प्रयास <strong>हजारों वर्षों से</strong> मौजूद हैं।\""
      }
    }
  },
  {
    "id": "p1-jan2026-q48",
    "difficulty": "easy",
    "correct": 2,
    "unitEN": "Unit 3: Reading Comprehension",
    "unitHI": "इकाई 3: पठन बोध (Reading Comprehension)",
    "topicEN": "Passage interpretation",
    "topicHI": "गद्यांश की व्याख्या",
    "content": {
      "en": {
        "question": passageHTML(PASSAGE_MANAGEMENT.en) + "<strong>Question:</strong><br>According to the passage, the ancient equivalent of the assembly line was used in:",
        "options": ["Egypt", "China", "Venice", "Giza"],
        "explanation": "The passage directly compares the modern automobile assembly line to the historical process used in the arsenal of <strong>Venice</strong>, where warships were floated along canals and components were systematically added at each stop."
      },
      "hi": {
        "question": passageHTML(PASSAGE_MANAGEMENT.hi) + "<strong>प्रश्न:</strong><br>गद्यांश के अनुसार, असेंबली लाइन के प्राचीन समकक्ष का उपयोग कहाँ किया गया था?",
        "options": ["मिस्र (Egypt)", "चीन (China)", "वेनिस (Venice)", "गीज़ा (Giza)"],
        "explanation": "गद्यांश आधुनिक ऑटोमोबाइल असेंबली लाइन की तुलना <strong>वेनिस</strong> के शस्त्रागार में उपयोग की जाने वाली ऐतिहासिक प्रक्रिया से करता है, जहां युद्धपोतों को नहरों के किनारे तैराया जाता था और प्रत्येक पड़ाव पर व्यवस्थित रूप से घटक जोड़े जाते थे।"
      }
    }
  },
  {
    "id": "p1-jan2026-q49",
    "difficulty": "easy",
    "correct": 1,
    "unitEN": "Unit 3: Reading Comprehension",
    "unitHI": "इकाई 3: पठन बोध (Reading Comprehension)",
    "topicEN": "Answer extraction skills",
    "topicHI": "उत्तर निष्कर्षण कौशल",
    "content": {
      "en": {
        "question": passageHTML(PASSAGE_MANAGEMENT.en) + "<strong>Question:</strong><br>The passage documents that Egyptians involved in the construction of pyramids had:",
        "options": ["An inventary system to keep record of the stones.", "A plan for what was to be done.", "An accounting system to keep the record of money.", "A warehouse system to manage materials."],
        "explanation": "While the specific text about Egypt wasn't fully detailed in the snippet, standard reading comprehension logic based on the passage's definition of ancient management points to having \"a plan for what was to be done.\" <br><br>The other options (inventory systems, accounting systems, and warehouses) were explicitly mentioned in the passage in the context of the Venetians (Venice, Italy) during the 1400s, not the Egyptians."
      },
      "hi": {
        "question": passageHTML(PASSAGE_MANAGEMENT.hi) + "<strong>प्रश्न:</strong><br>गद्यांश प्रलेखित करता है कि पिरामिडों के निर्माण में शामिल मिस्रवासियों के पास था:",
        "options": ["पत्थरों का रिकॉर्ड रखने के लिए एक इन्वेंट्री सिस्टम।", "क्या किया जाना है, इसके लिए एक योजना।", "पैसे का रिकॉर्ड रखने के लिए एक लेखा प्रणाली।", "सामग्री के प्रबंधन के लिए एक गोदाम प्रणाली।"],
        "explanation": "यद्यपि मिस्र के बारे में विशिष्ट पाठ स्निपेट में पूरी तरह से विस्तृत नहीं था, लेकिन प्राचीन प्रबंधन की गद्यांश की परिभाषा के आधार पर मानक पठन बोध तर्क \"क्या किया जाना है, इसके लिए एक योजना\" होने की ओर इशारा करता है। <br><br>अन्य विकल्पों (इन्वेंट्री सिस्टम, लेखा प्रणाली और गोदामों) का स्पष्ट रूप से मिस्रवासियों के नहीं, बल्कि 1400 के दशक के दौरान विनीशियन (वेनिस, इटली) के संदर्भ में गद्यांश में उल्लेख किया गया था।"
      }
    }
  },
  {
    "id": "p1-jan2026-q50",
    "difficulty": "easy",
    "correct": 2,
    "unitEN": "Unit 3: Reading Comprehension",
    "unitHI": "इकाई 3: पठन बोध (Reading Comprehension)",
    "topicEN": "Passage interpretation",
    "topicHI": "गद्यांश की व्याख्या",
    "content": {
      "en": {
        "question": passageHTML(PASSAGE_MANAGEMENT.en) + "<strong>Question:</strong><br>The reader learns from the given passage that:",
        "options": ["Management is a recent creation.", "The title of manager is an ancient one.", "People directing organised endeavors can be seen down the ages.", "The assembly line system was prevalent in China, Egypt and Italy."],
        "explanation": "The core thesis of the entire passage is to demonstrate that while modern business practices might look new, the fundamental act of management—<strong>people directing organized endeavors</strong>—has existed throughout history (\"down the ages\"), spanning from the building of ancient monuments to the Venetian arsenals."
      },
      "hi": {
        "question": passageHTML(PASSAGE_MANAGEMENT.hi) + "<strong>प्रश्न:</strong><br>दिए गए गद्यांश से पाठक को पता चलता है कि:",
        "options": ["प्रबंधन एक हालिया रचना है।", "प्रबंधक की उपाधि एक प्राचीन उपाधि है।", "संगठित प्रयासों का निर्देशन करने वाले लोगों को युगों-युगों से देखा जा सकता है।", "असेंबली लाइन प्रणाली चीन, मिस्र और इटली में प्रचलित थी।"],
        "explanation": "संपूर्ण गद्यांश का मुख्य विषय यह प्रदर्शित करना है कि यद्यपि आधुनिक व्यावसायिक प्रथाएं नई लग सकती हैं, प्रबंधन का मूलभूत कार्य- <strong>संगठित प्रयासों का निर्देशन करने वाले लोग</strong>- पूरे इतिहास में (\"युगों-युगों से\") मौजूद रहा है, जो प्राचीन स्मारकों के निर्माण से लेकर विनीशियन शस्त्रागार तक फैला हुआ है।"
      }
    }
  }
];        