/* ══════════════════════════════════════════════════════════════════════
   MOCK TEST: PASSAGE CONSTANTS (BILINGUAL)
══════════════════════════════════════════════════════════════════════ */

const PASSAGE_MANAGEMENT = {
  en: `Organized endeavors directed by people responsible for planning, organizing, leading and controlling activities have existed for thousands of years. The Egyptian pyramids and the Great Wall of China, for instance, are tangible evidence that projects of tremendous scope, employing tens of thousands of people, were undertaken well before modern times. The pyramids are a particularly interesting example. The construction of a single pyramid occupied more than 100,000 workers for 20 years. Who told each worker what to do? Who ensured that there would be enough stones at the site to keep workers busy? The answer to such questions is managers. Regardless of what managers were called at the time, someone had to plan what was to be done, organize people and materials to do it, lead and direct the workers, and impose some controls to ensure that everything was done as planned.\n\nAnother example of early management can be seen during the 1400s in the city of Venice, Italy, a major economic and trade center. The Venetians developed an early form of business enterprise and engaged in many activities common to today's organizations. For instance, at the arsenal of Venice, warships were floated along the canals, and at each stop materials and riggings were added to the ship. Doesn't that sound a lot like a car "floating" along an automobile assembly line while components are added to it? In addition to this assembly line, the Venetians also used warehouse and inventory systems to keep track of materials, human resource management systems to manage the labor force, and an accounting system to keep track of revenues and costs.`,
  hi: `योजना बनाने, आयोजन करने, नेतृत्व करने और गतिविधियों को नियंत्रित करने के लिए जिम्मेदार लोगों द्वारा निर्देशित संगठित प्रयास हजारों वर्षों से मौजूद हैं। उदाहरण के लिए, मिस्र के पिरामिड और चीन की महान दीवार इस बात के ठोस प्रमाण हैं कि आधुनिक समय से बहुत पहले हजारों लोगों को रोजगार देने वाली विशाल पैमाने की परियोजनाएं शुरू की गई थीं। पिरामिड विशेष रूप से दिलचस्प उदाहरण हैं। एक ही पिरामिड के निर्माण में 20 वर्षों तक 100,000 से अधिक श्रमिकों को लगाया गया था। प्रत्येक कार्यकर्ता को किसने बताया कि क्या करना है? किसने सुनिश्चित किया कि श्रमिकों को व्यस्त रखने के लिए साइट पर पर्याप्त पत्थर होंगे? ऐसे सवालों का जवाब 'प्रबंधक' (managers) है। उस समय प्रबंधकों को चाहे जो भी कहा जाता हो, किसी को यह योजना बनानी थी कि क्या किया जाना है, इसे करने के लिए लोगों और सामग्रियों को व्यवस्थित करना था, श्रमिकों का नेतृत्व और निर्देशन करना था, और यह सुनिश्चित करने के लिए कुछ नियंत्रण लागू करने थे कि सब कुछ योजना के अनुसार किया गया।\n\nप्रारंभिक प्रबंधन का एक अन्य उदाहरण 1400 के दशक के दौरान इटली के वेनिस शहर में देखा जा सकता है, जो एक प्रमुख आर्थिक और व्यापारिक केंद्र था। विनीशियन लोगों ने व्यावसायिक उद्यम का एक प्रारंभिक रूप विकसित किया और आज के संगठनों में आम कई गतिविधियों में संलग्न हुए। उदाहरण के लिए, वेनिस के शस्त्रागार में, युद्धपोतों को नहरों के किनारे तैराया जाता था, और प्रत्येक पड़ाव पर जहाज में सामग्री और रिगिंग जोड़ी जाती थी। क्या यह एक ऑटोमोबाइल असेंबली लाइन के साथ "तैरती" एक कार की तरह नहीं लगता है जबकि इसमें घटक जोड़े जाते हैं? इस असेंबली लाइन के अलावा, विनीशियन लोगों ने सामग्री पर नज़र रखने के लिए गोदाम और इन्वेंट्री सिस्टम, श्रम बल का प्रबंधन करने के लिए मानव संसाधन प्रबंधन प्रणाली, और राजस्व व लागत पर नज़र रखने के लिए एक लेखा प्रणाली (accounting system) का भी उपयोग किया।`
};

// 1. DI Table Constant (Q1-Q5 share this Data Interpretation table)
const TABLE_JUNE2025_P1 = {
  en: `<p><strong>The following table shows the marks scored by six students (A-F) in six different subjects S1 to S6 having 160, 160, 120, 120, 200 and 240 as maximum marks respectively. Based on the data in the table, answer the questions that follow.</strong></p>
<table border="1" style="border-collapse:collapse; width:100%; text-align:center;">
  <tr>
    <th rowspan="2" style="padding:8px;">Students</th>
    <th colspan="6" style="padding:8px;">Marks Scored in Subject</th>
  </tr>
  <tr>
    <th style="padding:6px;">S1 (Out of 160)</th>
    <th style="padding:6px;">S2 (Out of 160)</th>
    <th style="padding:6px;">S3 (Out of 120)</th>
    <th style="padding:6px;">S4 (Out of 120)</th>
    <th style="padding:6px;">S5 (Out of 200)</th>
    <th style="padding:6px;">S6 (Out of 240)</th>
  </tr>
  <tr><td style="padding:6px;">A</td><td>76</td><td>84</td><td>66</td><td>56</td><td>154</td><td>144</td></tr>
  <tr><td style="padding:6px;">B</td><td>120</td><td>100</td><td>84</td><td>76</td><td>136</td><td>132</td></tr>
  <tr><td style="padding:6px;">C</td><td>128</td><td>72</td><td>64</td><td>70</td><td>144</td><td>160</td></tr>
  <tr><td style="padding:6px;">D</td><td>84</td><td>130</td><td>96</td><td>84</td><td>104</td><td>168</td></tr>
  <tr><td style="padding:6px;">E</td><td>64</td><td>128</td><td>90</td><td>92</td><td>174</td><td>70</td></tr>
  <tr><td style="padding:6px;">F</td><td>70</td><td>96</td><td>60</td><td>56</td><td>164</td><td>96</td></tr>
</table>`,
  hi: `<p><strong>निम्नलिखित तालिका छह छात्रों (A-F) द्वारा छह अलग-अलग विषयों S1 से S6 में प्राप्त अंकों को दर्शाती है, जिनके अधिकतम अंक क्रमशः 160, 160, 120, 120, 200 और 240 हैं। तालिका में दिए गए डेटा के आधार पर, निम्नलिखित प्रश्नों के उत्तर दें।</strong></p>
<table border="1" style="border-collapse:collapse; width:100%; text-align:center;">
  <tr>
    <th rowspan="2" style="padding:8px;">छात्र</th>
    <th colspan="6" style="padding:8px;">विषय में प्राप्त अंक</th>
  </tr>
  <tr>
    <th style="padding:6px;">S1 (160 में से)</th>
    <th style="padding:6px;">S2 (160 में से)</th>
    <th style="padding:6px;">S3 (120 में से)</th>
    <th style="padding:6px;">S4 (120 में से)</th>
    <th style="padding:6px;">S5 (200 में से)</th>
    <th style="padding:6px;">S6 (240 में से)</th>
  </tr>
  <tr><td style="padding:6px;">A</td><td>76</td><td>84</td><td>66</td><td>56</td><td>154</td><td>144</td></tr>
  <tr><td style="padding:6px;">B</td><td>120</td><td>100</td><td>84</td><td>76</td><td>136</td><td>132</td></tr>
  <tr><td style="padding:6px;">C</td><td>128</td><td>72</td><td>64</td><td>70</td><td>144</td><td>160</td></tr>
  <tr><td style="padding:6px;">D</td><td>84</td><td>130</td><td>96</td><td>84</td><td>104</td><td>168</td></tr>
  <tr><td style="padding:6px;">E</td><td>64</td><td>128</td><td>90</td><td>92</td><td>174</td><td>70</td></tr>
  <tr><td style="padding:6px;">F</td><td>70</td><td>96</td><td>60</td><td>56</td><td>164</td><td>96</td></tr>
</table>`
};

// 1. DI Table Constant (MINIFIED - SINGLE LINE)
const TABLE_JAN25_27_S2_P1 = {
  en: `<p style="margin-bottom:10px;"><strong>Directions:</strong> The following table shows the number of registered voters for an election held in five different villages (A-E), along with the percentage of votes cast and the percentage of valid votes cast. Based on the data in the table, answer the questions that follow.</p><p style="margin-bottom:8px;"><strong>Village-wise Details of Election</strong></p><table border="1" style="border-collapse:collapse; width:100%; text-align:center;"><tr><th>Village</th><th>Number of Registered Voters</th><th>Percentage (%) of Votes Cast</th><th>Valid Votes (%) out of Votes Cast</th></tr><tr><td>A</td><td>18000</td><td>75%</td><td>90%</td></tr><tr><td>B</td><td>22500</td><td>80%</td><td>75%</td></tr><tr><td>C</td><td>20000</td><td>50%</td><td>100%</td></tr><tr><td>D</td><td>25000</td><td>80%</td><td>60%</td></tr><tr><td>E</td><td>12500</td><td>60%</td><td>80%</td></tr></table>`,
  hi: `<p style="margin-bottom:10px;"><strong>निर्देश:</strong> नीचे दी गई तालिका में पाँच अलग-अलग गाँवों (A-E) में हुए चुनाव के लिए पंजीकृत मतदाताओं की संख्या, डाले गए मतों का प्रतिशत और डाले गए वैध मतों का प्रतिशत दर्शाया गया है। तालिका में दिए गए डेटा के आधार पर, नीचे दिए गए प्रश्नों के उत्तर दीजिए।</p><p style="margin-bottom:8px;"><strong>चुनाव का ग्रामवार विवरण</strong></p><table border="1" style="border-collapse:collapse; width:100%; text-align:center;"><tr><th>गाँव</th><th>पंजीकृत मतदाताओं की संख्या</th><th>डाले गए मतों का प्रतिशत (%)</th><th>डाले गए मतों में से वैध मत (%)</th></tr><tr><td>A</td><td>18000</td><td>75%</td><td>90%</td></tr><tr><td>B</td><td>22500</td><td>80%</td><td>75%</td></tr><tr><td>C</td><td>20000</td><td>50%</td><td>100%</td></tr><tr><td>D</td><td>25000</td><td>80%</td><td>60%</td></tr><tr><td>E</td><td>12500</td><td>60%</td><td>80%</td></tr></table>`
};

// 1. Passage Constant for Q46-50
const PASSAGE_JUNE25_S1_P1 = {
  en: `Does more education lead to greater democracy? Or are more democratic countries better at educating their citizens? A recent NBER paper compared a group of Kenyan girls in 69 primary schools whose students were randomly selected to receive a scholarship with similar students in schools which received no such financial aid. Previous studies had shown that the scholarship programme led to higher test scores and increased the likelihood that girls enrolled in secondary school.<br><br>Overall, it significantly increased the amount of education obtained. For the new study the authors tried to see how the extra schooling had affected the political and social attitudes of the women in question. Findings suggested that education may make people more interested in improving their own lives but they may not necessarily see democracy as the way to do it.<br><br>Even in established democracies, more education does not always mean either more active political participation or greater faith in democracy. Poorer and less educated people often vote in larger numbers than their more educated compatriots, who often express disdain for the messiness of democracy yearning for the kind of government that would deal strongly with the corrupt and build highways, railway lines and bridges at a dizzying pace of authoritarian China.`,
  hi: `क्या अधिक शिक्षा से अधिक लोकतंत्र आता है? या अधिक लोकतांत्रिक देश अपने नागरिकों को शिक्षित करने में बेहतर हैं? एक हालिया NBER पेपर ने 69 प्राथमिक स्कूलों में केन्याई लड़कियों के एक समूह की तुलना की, जिनके छात्रों को छात्रवृत्ति प्राप्त करने के लिए यादृच्छिक (randomly) रूप से चुना गया था, उन स्कूलों के समान छात्रों के साथ जिन्हें ऐसी कोई वित्तीय सहायता नहीं मिली थी। पिछले अध्ययनों से पता चला था कि छात्रवृत्ति कार्यक्रम के कारण परीक्षण स्कोर उच्च हुए और लड़कियों के माध्यमिक विद्यालय में दाखिला लेने की संभावना बढ़ गई।<br><br>कुल मिलाकर, इसने प्राप्त शिक्षा की मात्रा में उल्लेखनीय वृद्धि की। नए अध्ययन के लिए लेखकों ने यह देखने की कोशिश की कि अतिरिक्त स्कूली शिक्षा ने विचाराधीन महिलाओं के राजनीतिक और सामाजिक दृष्टिकोण को कैसे प्रभावित किया था। निष्कर्षों ने सुझाव दिया कि शिक्षा लोगों को अपने जीवन को बेहतर बनाने में अधिक रूचि लेने वाला बना सकती है, लेकिन जरूरी नहीं कि वे लोकतंत्र को ऐसा करने के तरीके के रूप में देखें।<br><br>यहां तक कि स्थापित लोकतंत्रों में भी, अधिक शिक्षा का अर्थ हमेशा अधिक सक्रिय राजनीतिक भागीदारी या लोकतंत्र में अधिक विश्वास नहीं होता है। गरीब और कम शिक्षित लोग अक्सर अपने अधिक शिक्षित हमवतन लोगों की तुलना में बड़ी संख्या में मतदान करते हैं, जो अक्सर लोकतंत्र की अव्यवस्था (messiness of democracy) के प्रति तिरस्कार व्यक्त करते हैं और उस प्रकार की सरकार की लालसा रखते हैं जो भ्रष्टाचारियों से सख्ती से निपटे और सत्तावादी चीन की तरह तेज गति से राजमार्गों, रेलवे लाइनों और पुलों का निर्माण करे।`
};

// 1. Passage Constant (SINGLE LINE with <br><br> for paragraph breaks)
const PASSAGE_JAN25_27_S2_P1 = {
  en: `What do you think is scary? A Halloween spook house? A haunted corn maze? A slasher movie? Certainly, these kinds of things can give you a shiver, but—really—don't we all know they are just make-believe, acknowledged fictions? In real life, what is more likely to be really scary are things like finding your keys locked in the car, or discovering termites in the foundation of your home, or hearing the telephone ringing in the middle of the night.<br><br>Urban legends (ULs) are scary when they combine horror fiction with the details of real life. In typical ULs you encounter shocks such as lurking criminals, threatening maniacs, vague unknown dangers, faulty products, and isolated victims, all set in the context of everyday life. Such stories are told by a friend as something that happened to his or her close acquaintance (a friend of a friend, or a FOAF). Urban legends are packed with local details and related with an air of conviction. While these stories are not literally true, any more than a horror film is, when hearing them we realize that they could be true!`,
  hi: `आपको क्या लगता है कि डरावना क्या है? हैलोवीन का डरावना घर? भुतहा मकई की भूलभुलैया? स्लेशर मूवी? निश्चित रूप से, इस तरह की चीजें आपको सिहरन पैदा कर सकती हैं, लेकिन - वास्तव में - क्या हम सभी नहीं जानते कि वे सिर्फ काल्पनिक, स्वीकृत कल्पनाएँ हैं? वास्तविक जीवन में, जो चीजें वास्तव में डरावनी होने की अधिक संभावना है, वे हैं अपनी कार में बंद चाबियाँ पाना, या अपने घर की नींव में दीमक की खोज करना, या आधी रात में टेलीफोन की घंटी सुनना।<br><br>शहरी किंवदंतियाँ (ULs) तब डरावनी लगती हैं जब वे डरावनी कहानियों को वास्तविक जीवन के विवरणों के साथ जोड़ती हैं। आम तौर पर ULs में आपको छिपे हुए अपराधियों, धमकी देने वाले पागलों, अस्पष्ट अज्ञात खतरों, दोषपूर्ण उत्पादों और अलग-थलग पीड़ितों जैसे झटके का सामना करना पड़ता है, जो सभी रोज़मर्रा की ज़िंदगी के संदर्भ में होते हैं। ऐसी कहानियाँ किसी मित्र द्वारा उसके करीबी परिचित (किसी मित्र का मित्र या FOAF) के साथ घटी किसी घटना के रूप में सुनाई जाती हैं। शहरी किंवदंतियाँ स्थानीय विवरणों से भरी होती हैं और दृढ़ विश्वास के साथ जुड़ी होती हैं। हालाँकि ये कहानियाँ सचमुच सच नहीं हैं, किसी हॉरर फिल्म की तरह नहीं, लेकिन जब हम उन्हें सुनते हैं तो हमें एहसास होता है कि वे सच हो सकती हैं!`
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

  const TEST_JUNE25_S1_P1 = [
  {
    "id": "june25-s1-p1-q01",
    "difficulty": "medium",
    "correct": 3,
    "unitEN": "Unit 7: Data Interpretation",
    "unitHI": "इकाई 7: आंकड़ों की व्याख्या",
    "topicEN": "Table Chart",
    "topicHI": "तालिका चार्ट",
    "content": {
      "en": {
       "question": TABLE_JUNE2025_P1.en + "<br><br><strong>Question:</strong><br>What is the average marks scored in the subject S5 by all the students together?",
        "options": ["142", "144", "146", "148"],
        "explanation": "<strong>Step-by-step Calculation:</strong><br>1. Marks scored in subject S5 by all students (A to F) are: 154, 136, 144, 104, 174, and 164.<br>2. Total marks = 154 + 136 + 144 + 104 + 174 + 164 = 876<br>3. Total number of students = 6<br>4. Average = Total Marks / Number of Students = 876 / 6 = 146.<br>Therefore, the average marks scored in S5 is 146."
      },
      "hi": {
        "question": TABLE_JUNE2025_P1.hi + "<br><br><strong>प्रश्न:</strong><br>सभी छात्रों द्वारा मिलाकर विषय S5 में प्राप्त औसत अंक क्या हैं?",
        "options": ["142", "144", "146", "148"],
        "explanation": "<strong>चरण-दर-चरण गणना:</strong><br>1. सभी छात्रों (A से F) द्वारा विषय S5 में प्राप्त अंक हैं: 154, 136, 144, 104, 174, और 164।<br>2. कुल अंक = 154 + 136 + 144 + 104 + 174 + 164 = 876<br>3. छात्रों की कुल संख्या = 6<br>4. औसत = कुल अंक / छात्रों की संख्या = 876 / 6 = 146।<br>अतः विषय S5 में प्राप्त औसत अंक 146 है।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q02",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "Unit 7: Data Interpretation",
    "unitHI": "इकाई 7: आंकड़ों की व्याख्या",
    "topicEN": "Table Chart",
    "topicHI": "तालिका चार्ट",
    "content": {
      "en": {
        "question": TABLE_JUNE2025_P1.en + "<br><br><strong>Question:</strong><br>What is the ratio of the total marks scored by student B to the total marks scored by student D?",
        "options": ["26 : 27", "36 : 37", "16 : 17", "46 : 47"],
        "explanation": "<strong>Step-by-step Calculation:</strong><br>1. Total marks of Student B = 120 + 100 + 84 + 76 + 136 + 132 = 648<br>2. Total marks of Student D = 84 + 130 + 96 + 84 + 104 + 168 = 666<br>3. Ratio (B : D) = 648 : 666<br>4. Simplifying the ratio by dividing both sides by 18:<br>   648 / 18 = 36<br>   666 / 18 = 37<br>Ratio = 36 : 37."
      },
      "hi": {
        "question": TABLE_JUNE2025_P1.hi + "<br><br><strong>प्रश्न:</strong><br>छात्र B द्वारा प्राप्त कुल अंकों का छात्र D द्वारा प्राप्त कुल अंकों से अनुपात क्या है?",
        "options": ["26 : 27", "36 : 37", "16 : 17", "46 : 47"],
        "explanation": "<strong>चरण-दर-चरण गणना:</strong><br>1. छात्र B के कुल अंक = 120 + 100 + 84 + 76 + 136 + 132 = 648<br>2. छात्र D के कुल अंक = 84 + 130 + 96 + 84 + 104 + 168 = 666<br>3. अनुपात (B : D) = 648 : 666<br>4. दोनों पक्षों को 18 से विभाजित करके सरल करने पर:<br>   648 / 18 = 36<br>   666 / 18 = 37<br>अनुपात = 36 : 37।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q03",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "Unit 7: Data Interpretation",
    "unitHI": "इकाई 7: आंकड़ों की व्याख्या",
    "topicEN": "Table Chart",
    "topicHI": "तालिका चार्ट",
    "content": {
      "en": {
        "question": TABLE_JUNE2025_P1.en + "<br><br><strong>Question:</strong><br>The marks scored by student B and student C together in subject S1 is ______ % more than the marks scored by student A and student D together in the same subject.",
        "options": ["55", "45", "120", "155"],
        "explanation": "<strong>Step-by-step Calculation:</strong><br>1. Marks of B and C in S1 = 120 + 128 = 248<br>2. Marks of A and D in S1 = 76 + 84 = 160<br>3. Difference = 248 - 160 = 88<br>4. Percentage more = (Difference / Reference Value) × 100<br>   = (88 / 160) × 100<br>   = 0.55 × 100 = 55%."
      },
      "hi": {
        "question": TABLE_JUNE2025_P1.hi + "<br><br><strong>प्रश्न:</strong><br>विषय S1 में छात्र B और छात्र C द्वारा मिलाकर प्राप्त अंक, उसी विषय में छात्र A और छात्र D द्वारा मिलाकर प्राप्त अंकों से ______ % अधिक हैं।",
        "options": ["55", "45", "120", "155"],
        "explanation": "<strong>चरण-दर-चरण गणना:</strong><br>1. विषय S1 में B और C के अंक = 120 + 128 = 248<br>2. विषय S1 में A और D के अंक = 76 + 84 = 160<br>3. अंतर = 248 - 160 = 88<br>4. अधिक प्रतिशत = (अंतर / संदर्भ मूल्य) × 100<br>   = (88 / 160) × 100<br>   = 0.55 × 100 = 55%।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q04",
    "difficulty": "hard",
    "correct": 4,
    "unitEN": "Unit 7: Data Interpretation",
    "unitHI": "इकाई 7: आंकड़ों की व्याख्या",
    "topicEN": "Table Chart",
    "topicHI": "तालिका चार्ट",
    "content": {
      "en": {
       "question": TABLE_JUNE2025_P1.en + "<br><br><strong>Question:</strong><br>If for getting first division, a student needs to score minimum 60% marks in aggregate, then the number of students getting first division is:",
        "options": ["5", "3", "2", "4"],
        "explanation": "<strong>Step-by-step Calculation:</strong><br>1. Total maximum marks = 160 + 160 + 120 + 120 + 200 + 240 = 1000.<br>2. 60% of aggregate marks = 60% of 1000 = 600. (A student needs 600 or more to get first division).<br>3. Let's calculate total marks of each student:<br>   A = 76+84+66+56+154+144 = 580 (Failed to get 1st div)<br>   B = 120+100+84+76+136+132 = 648 (1st Div)<br>   C = 128+72+64+70+144+160 = 638 (1st Div)<br>   D = 84+130+96+84+104+168 = 666 (1st Div)<br>   E = 64+128+90+92+174+70 = 618 (1st Div)<br>   F = 70+96+60+56+164+96 = 542 (Failed to get 1st div)<br>4. Students scoring 600 or above are B, C, D, and E (Total 4 students)."
      },
      "hi": {
        "question": TABLE_JUNE2025_P1.hi + "<br><br><strong>प्रश्न:</strong><br>यदि प्रथम श्रेणी प्राप्त करने के लिए, एक छात्र को कुल मिलाकर न्यूनतम 60% अंक प्राप्त करने की आवश्यकता है, तो प्रथम श्रेणी प्राप्त करने वाले छात्रों की संख्या कितनी है?",
        "options": ["5", "3", "2", "4"],
        "explanation": "<strong>चरण-दर-चरण गणना:</strong><br>1. कुल अधिकतम अंक = 160 + 160 + 120 + 120 + 200 + 240 = 1000.<br>2. कुल अंकों का 60% = 1000 का 60% = 600. (प्रथम श्रेणी के लिए छात्र को 600 या उससे अधिक अंकों की आवश्यकता है)।<br>3. आइए प्रत्येक छात्र के कुल अंकों की गणना करें:<br>   A = 76+84+66+56+154+144 = 580 (प्रथम श्रेणी नहीं)<br>   B = 120+100+84+76+136+132 = 648 (प्रथम श्रेणी)<br>   C = 128+72+64+70+144+160 = 638 (प्रथम श्रेणी)<br>   D = 84+130+96+84+104+168 = 666 (प्रथम श्रेणी)<br>   E = 64+128+90+92+174+70 = 618 (प्रथम श्रेणी)<br>   F = 70+96+60+56+164+96 = 542 (प्रथम श्रेणी नहीं)<br>4. 600 या उससे अधिक अंक प्राप्त करने वाले छात्र B, C, D और E (कुल 4 छात्र) हैं।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q05",
    "difficulty": "medium",
    "correct": 4,
    "unitEN": "Unit 7: Data Interpretation",
    "unitHI": "इकाई 7: आंकड़ों की व्याख्या",
    "topicEN": "Table Chart",
    "topicHI": "तालिका चार्ट",
    "content": {
      "en": {
       "question": TABLE_JUNE2025_P1.en + "<br><br><strong>Question:</strong><br>What is overall percentage of marks scored by student A in all the subjects together?",
        "options": ["55%", "56%", "57%", "58%"],
        "explanation": "<strong>Step-by-step Calculation:</strong><br>1. Total maximum marks = 160 + 160 + 120 + 120 + 200 + 240 = 1000.<br>2. Total marks scored by Student A = 76 + 84 + 66 + 56 + 154 + 144 = 580.<br>3. Overall percentage = (Marks Obtained / Maximum Marks) × 100<br>   = (580 / 1000) × 100 = 58%."
      },
      "hi": {
        "question": TABLE_JUNE2025_P1.hi + "<br><br><strong>प्रश्न:</strong><br>सभी विषयों में मिलाकर छात्र A द्वारा प्राप्त अंकों का समग्र प्रतिशत क्या है?",
        "options": ["55%", "56%", "57%", "58%"],
        "explanation": "<strong>चरण-दर-चरण गणना:</strong><br>1. कुल अधिकतम अंक = 160 + 160 + 120 + 120 + 200 + 240 = 1000.<br>2. छात्र A द्वारा प्राप्त कुल अंक = 76 + 84 + 66 + 56 + 154 + 144 = 580.<br>3. समग्र प्रतिशत = (प्राप्त अंक / अधिकतम अंक) × 100<br>   = (580 / 1000) × 100 = 58%।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q06",
    "difficulty": "easy",
    "correct": 1,
    "unitEN": "Unit 10: Higher Education System",
    "unitHI": "इकाई 10: उच्च शिक्षा प्रणाली",
    "topicEN": "Policies, Governance, and Administration",
    "topicHI": "नीतियाँ, शासन और प्रशासन",
    "content": {
      "en": {
        "question": "IRAHE stands for ________.",
        "options": [
          "Independent Regulatory Authority for Higher Education",
          "International Regulatory Authority for Higher Education",
          "Instant Regulatory Authority for Higher Education",
          "Inter-University Regulatory Authority for Higher Education"
        ],
        "explanation": "<strong>Independent Regulatory Authority for Higher Education (IRAHE)</strong> was recommended by the National Knowledge Commission (NKC) under Sam Pitroda in 2005. Its primary purpose was to separate the regulatory functions (like granting affiliations and standards) from the funding functions of the UGC, aiming to streamline and bring transparency to the higher education regulatory framework in India."
      },
      "hi": {
        "question": "IRAHE (आईआरएएचई) का पूर्ण रूप ________ है।",
        "options": [
          "Independent Regulatory Authority for Higher Education (उच्च शिक्षा के लिए स्वतंत्र नियामक प्राधिकरण)",
          "International Regulatory Authority for Higher Education (उच्च शिक्षा के लिए अंतर्राष्ट्रीय नियामक प्राधिकरण)",
          "Instant Regulatory Authority for Higher Education (उच्च शिक्षा के लिए त्वरित नियामक प्राधिकरण)",
          "Inter-University Regulatory Authority for Higher Education (उच्च शिक्षा के लिए अंतर-विश्वविद्यालय नियामक प्राधिकरण)"
        ],
        "explanation": "<strong>इंडिपेंडेंट रेगुलेटरी अथॉरिटी फॉर हायर एजुकेशन (IRAHE)</strong> की सिफारिश 2005 में सैम पित्रोदा के नेतृत्व वाले राष्ट्रीय ज्ञान आयोग (NKC) द्वारा की गई थी। इसका मुख्य उद्देश्य यूजीसी (UGC) के वित्त पोषण कार्यों से नियामक कार्यों (जैसे संबद्धता और मानक प्रदान करना) को अलग करना था, जिसका लक्ष्य भारत में उच्च शिक्षा के नियामक ढांचे को सुव्यवस्थित और पारदर्शी बनाना था।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q07",
    "difficulty": "hard",
    "correct": 1,
    "unitEN": "Unit 5: Mathematical Reasoning and Aptitude",
    "unitHI": "इकाई 5: गणितीय तर्क और अभिरुचि",
    "topicEN": "Ratio and Proportion",
    "topicHI": "अनुपात और समानुपात",
    "content": {
      "en": {
        "question": "<p>Match the <strong>LIST-I</strong> with <strong>LIST-II</strong>:</p><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><tr><th style='padding:8px;'>LIST-I (Question)</th><th style='padding:8px;'>LIST-II (Answer)</th></tr><tr><td style='padding:6px;'>A. If x/5 = y/8, then (x+5) : (y+8) = ?</td><td style='padding:6px;'>I. 2 : 1</td></tr><tr><td style='padding:6px;'>B. If (x : y) = 2 : 1, then (x² − y²) : (x² + y²) = ?</td><td style='padding:6px;'>II. 2 : 3</td></tr><tr><td style='padding:6px;'>C. If (x² + 4y²) = 4xy, then x : y = ?</td><td style='padding:6px;'>III. 3 : 5</td></tr><tr><td style='padding:6px;'>D. If A : B = 3 : 4 and B : C = 8 : 9, then A : C = ?</td><td style='padding:6px;'>IV. 5 : 8</td></tr></table><br>Choose the <strong>correct</strong> answer from the options given below:",
        "options": [
          "A-IV, B-III, C-I, D-II",
          "A-I, B-II, C-III, D-IV",
          "A-II, B-III, C-I, D-IV",
          "A-III, B-IV, C-I, D-II"
        ],
        "explanation": "<strong>Step-by-step Verification:</strong><br><br><strong>A.</strong> Given x/5 = y/8. Let it equal k. Then x = 5k, y = 8k.<br>(x+5) : (y+8) = (5k+5) : (8k+8) = 5(k+1) : 8(k+1) = <strong>5 : 8</strong> (Matches IV)<br><br><strong>B.</strong> Given x : y = 2 : 1. Let x = 2, y = 1.<br>(x² − y²) : (x² + y²) = (4 − 1) : (4 + 1) = <strong>3 : 5</strong> (Matches III)<br><br><strong>C.</strong> Given x² + 4y² = 4xy. Rearranging: x² - 4xy + 4y² = 0.<br>This is the expansion of (x - 2y)² = 0. Therefore, x = 2y, which means x : y = <strong>2 : 1</strong> (Matches I)<br><br><strong>D.</strong> Given A/B = 3/4 and B/C = 8/9.<br>To find A/C, multiply the two ratios: (A/B) × (B/C) = (3/4) × (8/9) = 24/36 = <strong>2 : 3</strong> (Matches II)<br><br>Correct Matching: A-IV, B-III, C-I, D-II."
      },
      "hi": {
        "question": "<p><strong>सूची-I</strong> का <strong>सूची-II</strong> के साथ मिलान करें:</p><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><tr><th style='padding:8px;'>सूची-I (प्रश्न)</th><th style='padding:8px;'>सूची-II (उत्तर)</th></tr><tr><td style='padding:6px;'>A. यदि x/5 = y/8, तो (x+5) : (y+8) = ?</td><td style='padding:6px;'>I. 2 : 1</td></tr><tr><td style='padding:6px;'>B. यदि (x : y) = 2 : 1, तो (x² − y²) : (x² + y²) = ?</td><td style='padding:6px;'>II. 2 : 3</td></tr><tr><td style='padding:6px;'>C. यदि (x² + 4y²) = 4xy, तो x : y = ?</td><td style='padding:6px;'>III. 3 : 5</td></tr><tr><td style='padding:6px;'>D. यदि A : B = 3 : 4 और B : C = 8 : 9, तो A : C = ?</td><td style='padding:6px;'>IV. 5 : 8</td></tr></table><br>नीचे दिए गए विकल्पों में से <strong>सही</strong> उत्तर चुनें:",
        "options": [
          "A-IV, B-III, C-I, D-II",
          "A-I, B-II, C-III, D-IV",
          "A-II, B-III, C-I, D-IV",
          "A-III, B-IV, C-I, D-II"
        ],
        "explanation": "<strong>चरण-दर-चरण सत्यापन:</strong><br><br><strong>A.</strong> दिया गया है x/5 = y/8 = k (मान लें)। अतः x = 5k, y = 8k.<br>(x+5) : (y+8) = (5k+5) : (8k+8) = 5(k+1) : 8(k+1) = <strong>5 : 8</strong> (IV के साथ मेल खाता है)<br><br><strong>B.</strong> दिया गया है x : y = 2 : 1. मान लें x = 2, y = 1.<br>(x² − y²) : (x² + y²) = (4 − 1) : (4 + 1) = <strong>3 : 5</strong> (III के साथ मेल खाता है)<br><br><strong>C.</strong> दिया गया है x² + 4y² = 4xy. पुनर्व्यवस्थित करने पर: x² - 4xy + 4y² = 0.<br>यह (x - 2y)² = 0 का विस्तार है। इसलिए, x = 2y, जिसका अर्थ है x : y = <strong>2 : 1</strong> (I के साथ मेल खाता है)<br><br><strong>D.</strong> दिया गया है A/B = 3/4 और B/C = 8/9.<br>A/C ज्ञात करने के लिए, दोनों अनुपातों को गुणा करें: (A/B) × (B/C) = (3/4) × (8/9) = 24/36 = <strong>2 : 3</strong> (II के साथ मेल खाता है)<br><br>सही मिलान: A-IV, B-III, C-I, D-II."
      }
    }
  },
  {
    "id": "june25-s1-p1-q08",
    "difficulty": "easy",
    "correct": 3,
    "unitEN": "Unit 2: Research Aptitude",
    "unitHI": "इकाई 2: शोध अभिरुचि",
    "topicEN": "Methods of Research",
    "topicHI": "शोध की विधियाँ",
    "content": {
      "en": {
        "question": "What is Historical Research method?",
        "options": [
          "It collects facts by understanding the present situation. Sources of information include interviews of experts, surveys etc.",
          "It collects facts by predicting the future. Sources of information include questionnaire, telephonic interviews etc.",
          "It collects facts by going in the past in different periods. Sources of information include written records, newspapers, diaries, letters, traveler's accounts, documents, etc.",
          "It collects facts by using common sense and also tries to solve practical problems. Sources of information include surveys and interviews."
        ],
        "explanation": "<strong>Historical Research</strong> is a qualitative technique used to examine past events to draw conclusions and make predictions about the future. It relies heavily on primarily primary sources (like diaries, original letters, contemporary documents, relics, and traveler's accounts) and secondary sources (like textbooks and newspapers). Option 1 refers to Descriptive/Survey Research, Option 2 relates to Predictive Research, and Option 4 hints at Applied/Action Research."
      },
      "hi": {
        "question": "ऐतिहासिक शोध विधि क्या है?",
        "options": [
          "यह वर्तमान स्थिति को समझकर तथ्य एकत्र करता है। जानकारी के स्रोतों में विशेषज्ञों के साक्षात्कार, सर्वेक्षण आदि शामिल हैं।",
          "यह भविष्य की भविष्यवाणी करके तथ्य एकत्र करता है। जानकारी के स्रोतों में प्रश्नावली, टेलीफोनिक साक्षात्कार आदि शामिल हैं।",
          "यह विभिन्न अवधियों में अतीत में जाकर तथ्य एकत्र करता है। सूचना के स्रोतों में लिखित रिकॉर्ड, समाचार पत्र, डायरी, पत्र, यात्री के वृत्तांत, दस्तावेज आदि शामिल हैं।",
          "यह सामान्य ज्ञान का उपयोग करके तथ्य एकत्र करता है और व्यावहारिक समस्याओं को हल करने का भी प्रयास करता है। जानकारी के स्रोतों में सर्वेक्षण और साक्षात्कार शामिल हैं।"
        ],
        "explanation": "<strong>ऐतिहासिक शोध (Historical Research)</strong> एक गुणात्मक तकनीक है जिसका उपयोग अतीत की घटनाओं की जांच करने, निष्कर्ष निकालने और भविष्य के बारे में भविष्यवाणी करने के लिए किया जाता है। यह मुख्य रूप से प्राथमिक स्रोतों (जैसे डायरी, मूल पत्र, समकालीन दस्तावेज, अवशेष, और यात्रियों के वृत्तांत) और द्वितीयक स्रोतों (जैसे पाठ्यपुस्तकों और समाचार पत्रों) पर बहुत अधिक निर्भर करता है। विकल्प 1 वर्णनात्मक/सर्वेक्षण अनुसंधान (Descriptive Research) को संदर्भित करता है, विकल्प 2 भविष्य कहनेवाला अनुसंधान (Predictive) से संबंधित है, और विकल्प 4 एप्लाइड/एक्शन रिसर्च का संकेत देता है।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q09",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "Unit 8: Information and Communication Technology (ICT)",
    "unitHI": "इकाई 8: सूचना और संचार प्रौद्योगिकी (ICT)",
    "topicEN": "Basics of Internet and ICT Terminology",
    "topicHI": "इंटरनेट और ICT शब्दावली की मूल बातें",
    "content": {
      "en": {
        "question": "<p>Match the <strong>LIST-I</strong> with <strong>LIST-II</strong>:</p><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><tr><th style='padding:8px;'>LIST-I (Scientist)</th><th style='padding:8px;'>LIST-II (Invention)</th></tr><tr><td style='padding:6px;'>A. Tim Berners Lee</td><td style='padding:6px;'>I. Computer Architecture</td></tr><tr><td style='padding:6px;'>B. Fred Cohen</td><td style='padding:6px;'>II. Father of modern computer</td></tr><tr><td style='padding:6px;'>C. Charles Babbage</td><td style='padding:6px;'>III. Virus</td></tr><tr><td style='padding:6px;'>D. John Von Neumann</td><td style='padding:6px;'>IV. World Wide Web</td></tr></table><br>Choose the <strong>correct</strong> answer from the options given below:",
        "options": [
          "A-IV, B-III, C-II, D-I",
          "A-III, B-IV, C-I, D-II",
          "A-IV, B-III, C-I, D-II",
          "A-III, B-IV, C-II, D-I"
        ],
        "explanation": "<strong>Key Matches:</strong><br>• <strong>Tim Berners Lee (A-IV):</strong> Invented the World Wide Web (WWW) in 1989.<br>• <strong>Fred Cohen (B-III):</strong> Best known as the inventor of computer virus defense techniques and coined the term 'Computer Virus' in 1983.<br>• <strong>Charles Babbage (C-II):</strong> Known as the 'Father of the Computer' for inventing the first mechanical computer (Analytical Engine).<br>• <strong>John Von Neumann (D-I):</strong> Developed the 'Von Neumann Architecture' which is the foundation of almost all modern computer design (Stored-program concept)."
      },
      "hi": {
        "question": "<p><strong>सूची-I</strong> का <strong>सूची-II</strong> के साथ मिलान करें:</p><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><tr><th style='padding:8px;'>सूची-I (वैज्ञानिक)</th><th style='padding:8px;'>सूची-II (आविष्कार)</th></tr><tr><td style='padding:6px;'>A. टिम बर्नर्स ली (Tim Berners Lee)</td><td style='padding:6px;'>I. कंप्यूटर आर्किटेक्चर</td></tr><tr><td style='padding:6px;'>B. फ्रेड कोहेन (Fred Cohen)</td><td style='padding:6px;'>II. आधुनिक कंप्यूटर के जनक</td></tr><tr><td style='padding:6px;'>C. चार्ल्स बैबेज (Charles Babbage)</td><td style='padding:6px;'>III. वायरस (Virus)</td></tr><tr><td style='padding:6px;'>D. जॉन वॉन न्यूमैन (John Von Neumann)</td><td style='padding:6px;'>IV. वर्ल्ड वाइड वेब (WWW)</td></tr></table><br>नीचे दिए गए विकल्पों में से <strong>सही</strong> उत्तर चुनें:",
        "options": [
          "A-IV, B-III, C-II, D-I",
          "A-III, B-IV, C-I, D-II",
          "A-IV, B-III, C-I, D-II",
          "A-III, B-IV, C-II, D-I"
        ],
        "explanation": "<strong>प्रमुख मिलान:</strong><br>• <strong>टिम बर्नर्स ली (A-IV):</strong> 1989 में वर्ल्ड वाइड वेब (WWW) का आविष्कार किया।<br>• <strong>फ्रेड कोहेन (B-III):</strong> कंप्यूटर वायरस रक्षा तकनीकों के आविष्कारक के रूप में जाने जाते हैं और 1983 में 'कंप्यूटर वायरस' शब्द गढ़ा था।<br>• <strong>चार्ल्स बैबेज (C-II):</strong> पहले मैकेनिकल कंप्यूटर (एनालिटिकल इंजन) का आविष्कार करने के लिए 'कंप्यूटर के जनक' के रूप में जाने जाते हैं।<br>• <strong>जॉन वॉन न्यूमैन (D-I):</strong> 'वॉन न्यूमैन आर्किटेक्चर' विकसित किया जो लगभग सभी आधुनिक कंप्यूटर डिजाइन (संग्रहीत-प्रोग्राम अवधारणा) की नींव है।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q10",
    "difficulty": "easy",
    "correct": 2,
    "unitEN": "Unit 8: Information and Communication Technology (ICT)",
    "unitHI": "इकाई 8: सूचना और संचार प्रौद्योगिकी (ICT)",
    "topicEN": "Basics of Internet and ICT Terminology",
    "topicHI": "इंटरनेट और ICT शब्दावली की मूल बातें",
    "content": {
      "en": {
        "question": "What among the following is not a communication technology?",
        "options": ["Smartphone", "News-reader", "Email", "Whatsapp"],
        "explanation": "A <strong>News-reader</strong> is a person who reads the news on television or radio broadcasts; it is a human profession, not a 'technology' or digital tool. In contrast, Smartphone, Email, and WhatsApp are all hardware or software tools explicitly designed to facilitate digital communication between people."
      },
      "hi": {
        "question": "निम्नलिखित में से कौन सी संचार प्रौद्योगिकी नहीं है?",
        "options": ["स्मार्टफोन (Smartphone)", "न्यूज़-रीडर (News-reader)", "ईमेल (Email)", "व्हाट्सएप (Whatsapp)"],
        "explanation": "एक <strong>न्यूज़-रीडर (News-reader)</strong> वह व्यक्ति होता है जो टेलीविजन या रेडियो प्रसारण पर समाचार पढ़ता है; यह एक मानवीय पेशा है, कोई 'प्रौद्योगिकी' (technology) या डिजिटल उपकरण नहीं। इसके विपरीत, स्मार्टफोन, ईमेल और व्हाट्सएप सभी हार्डवेयर या सॉफ्टवेयर टूल हैं जिन्हें स्पष्ट रूप से लोगों के बीच डिजिटल संचार की सुविधा के लिए डिज़ाइन किया गया है।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q11",
    "difficulty": "hard",
    "correct": 4,
    "unitEN": "Unit 6: Logical Reasoning",
    "unitHI": "इकाई 6: तार्किक विचार",
    "topicEN": "Indian Logic and Hetvabhasas (Fallacies of Inference)",
    "topicHI": "भारतीय तर्क और हेत्वाभास (अनुमान की त्रुटियाँ)",
    "content": {
      "en": {
        "question": "Which of the following arguments is fallacious according to Classical Indian School of Logic (Nyāya) because it is based on conditional (sopādhika) concomitance (vyāpti)?",
        "options": [
          "Sound is eternal because it is audible.",
          "Fire is cold because it is a substance.",
          "All things are non-eternal because they are knowable.",
          "Wherever there is fire there is smoke."
        ],
        "explanation": "In Nyāya philosophy, a valid Vyapti (invariable concomitance) must be <em>Nirupadhika</em> (unconditional). The argument <strong>'Wherever there is fire, there is smoke'</strong> is fallacious because it is <em>Sopadhika</em> (conditional). Fire produces smoke ONLY when there is a condition (Upadhi) present, which is 'wet fuel' (ardrendhana). E.g., A red-hot iron ball has fire but no smoke. Thus, the relationship between fire and smoke is conditional, making it a fallacious inference if stated unconditionally."
      },
      "hi": {
        "question": "शास्त्रीय भारतीय तर्कशास्त्र (न्याय) के अनुसार निम्नलिखित में से कौन सा तर्क भ्रामक (fallacious) है क्योंकि यह सोपाधिक (सशर्त) व्याप्ति पर आधारित है?",
        "options": [
          "ध्वनि शाश्वत है क्योंकि यह श्रव्य है।",
          "आग ठंडी है क्योंकि यह एक पदार्थ है।",
          "सभी चीजें अशाश्वत हैं क्योंकि वे जानने योग्य हैं।",
          "जहाँ भी आग होती है वहाँ धुआँ होता है।"
        ],
        "explanation": "न्याय दर्शन में, एक वैध व्याप्ति (invariable concomitance) को <em>निरुपाधिक</em> (बिना किसी शर्त के) होना चाहिए। तर्क <strong>'जहां भी आग है, वहां धुआं है'</strong> भ्रामक है क्योंकि यह <em>सोपाधिक</em> (सशर्त) है। आग केवल तभी धुआं पैदा करती है जब कोई शर्त (उपाधि) मौजूद हो, जो कि 'गीला ईंधन' (आर्द्र ईंधन) है। उदाहरण के लिए, एक लाल-गर्म लोहे की गेंद में आग होती है लेकिन धुआं नहीं होता। इस प्रकार, आग और धुएं के बीच संबंध सशर्त है।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q12",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "Unit 9: People, Development and Environment",
    "unitHI": "इकाई 9: लोग, विकास और पर्यावरण",
    "topicEN": "Environmental Issues and Climate Change",
    "topicHI": "पर्यावरणीय मुद्दे और जलवायु परिवर्तन",
    "content": {
      "en": {
        "question": "As temperature increases, due to Global Warming, the release of methane from wetlands will increase, is an example of",
        "options": [
          "Positive feedback",
          "Negative feedback",
          "Both positive and negative feedback",
          "Neither positive nor negative feedback"
        ],
        "explanation": "This is a classic <strong>Positive Feedback Loop</strong> in the climate system. A positive feedback amplifies or accelerates a change. Here: Global warming increases temperature → Warmer temperatures cause wetlands and permafrost to thaw and release trapped Methane (a potent greenhouse gas) → More methane in the atmosphere traps more heat → Temperature increases further. It creates a vicious cycle."
      },
      "hi": {
        "question": "जैसे-जैसे ग्लोबल वार्मिंग के कारण तापमान बढ़ता है, आर्द्रभूमि (wetlands) से मीथेन का उत्सर्जन बढ़ेगा, यह किसका एक उदाहरण है?",
        "options": [
          "सकारात्मक फीडबैक (Positive feedback)",
          "नकारात्मक फीडबैक (Negative feedback)",
          "सकारात्मक और नकारात्मक फीडबैक दोनों",
          "न तो सकारात्मक और न ही नकारात्मक फीडबैक"
        ],
        "explanation": "यह जलवायु प्रणाली में एक क्लासिक <strong>सकारात्मक फीडबैक लूप (Positive Feedback Loop)</strong> है। एक सकारात्मक फीडबैक किसी परिवर्तन को बढ़ाता या तेज करता है। यहाँ: ग्लोबल वार्मिंग से तापमान बढ़ता है → गर्म तापमान के कारण आर्द्रभूमि और पर्माफ्रॉस्ट पिघलते हैं और फंसी हुई मीथेन (एक शक्तिशाली ग्रीनहाउस गैस) छोड़ते हैं → वातावरण में अधिक मीथेन अधिक गर्मी को रोकती है → तापमान और बढ़ जाता है। यह एक दुष्चक्र बनाता है।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q13",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "Unit 1: Teaching Aptitude",
    "unitHI": "इकाई 1: शिक्षण अभिरुचि",
    "topicEN": "Levels of Teaching and Bloom's Taxonomy",
    "topicHI": "शिक्षण के स्तर और ब्लूम का वर्गीकरण",
    "content": {
      "en": {
        "question": "In the light of cognitive domain, arrange the following classroom questions (A-E) in the correct ascending order:<br><br>A. Understanding<br>B. Evaluating<br>C. Analyzing<br>D. Applying<br>E. Remembering<br><br>Choose the correct answer from the options given below:",
        "options": [
          "E, A, D, C, B",
          "A, B, C, D, E",
          "B, C, A, E, D",
          "C, E, B, A, D"
        ],
        "explanation": "According to the Revised <strong>Bloom's Taxonomy</strong> for the Cognitive Domain (Anderson and Krathwohl, 2001), the levels of learning from lowest (simplest) to highest (most complex) ascending order are:<br>1. <strong>Remembering (E):</strong> Recalling facts.<br>2. <strong>Understanding (A):</strong> Explaining ideas or concepts.<br>3. <strong>Applying (D):</strong> Using information in new situations.<br>4. <strong>Analyzing (C):</strong> Drawing connections among ideas.<br>5. <strong>Evaluating (B):</strong> Justifying a stand or decision.<br>(6. Creating is the highest, but not given here).<br>Correct Order: E -> A -> D -> C -> B."
      },
      "hi": {
        "question": "संज्ञानात्मक डोमेन (cognitive domain) के आलोक में, निम्नलिखित कक्षा प्रश्नों (A-E) को सही आरोही क्रम (ascending order) में व्यवस्थित करें:<br><br>A. समझना (Understanding)<br>B. मूल्यांकन करना (Evaluating)<br>C. विश्लेषण करना (Analyzing)<br>D. लागू करना (Applying)<br>E. याद रखना (Remembering)<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "E, A, D, C, B",
          "A, B, C, D, E",
          "B, C, A, E, D",
          "C, E, B, A, D"
        ],
        "explanation": "संज्ञानात्मक डोमेन के लिए संशोधित <strong>ब्लूम के वर्गीकरण (Bloom's Taxonomy)</strong> के अनुसार, न्यूनतम (सबसे सरल) से उच्चतम (सबसे जटिल) आरोही क्रम में सीखने के स्तर इस प्रकार हैं:<br>1. <strong>याद रखना / Remembering (E):</strong> तथ्यों को याद करना।<br>2. <strong>समझना / Understanding (A):</strong> विचारों या अवधारणाओं को समझाना।<br>3. <strong>लागू करना / Applying (D):</strong> नई स्थितियों में सूचना का उपयोग करना।<br>4. <strong>विश्लेषण करना / Analyzing (C):</strong> विचारों के बीच संबंध स्थापित करना।<br>5. <strong>मूल्यांकन करना / Evaluating (B):</strong> किसी निर्णय को उचित ठहराना।<br>सही क्रम: E -> A -> D -> C -> B."
      }
    }
  },
  {
    "id": "june25-s1-p1-q14",
    "difficulty": "medium",
    "correct": 3,
    "unitEN": "Unit 6: Logical Reasoning",
    "unitHI": "इकाई 6: तार्किक विचार",
    "topicEN": "Formal and Informal Fallacies",
    "topicHI": "औपचारिक और अनौपचारिक तर्कदोष",
    "content": {
      "en": {
        "question": "\"Everyone of us is mortal, therefore it is obvious that some day the human race will disappear from earth.\" Identify the logical fallacy committed in the above statement.",
        "options": [
          "Fallacy of accident",
          "Straw man",
          "Fallacy of Composition",
          "Fallacy of Division"
        ],
        "explanation": "The <strong>Fallacy of Composition</strong> occurs when one infers that something is true of the <em>whole</em> based on the fact that it is true of some <em>part</em> of the whole. Here, the argument wrongly assumes that because individual human beings die (the parts), the entire human species (the whole) must eventually die out all at once. The human race continues through reproduction even though individuals are mortal."
      },
      "hi": {
        "question": "\"हममें से हर कोई नश्वर (mortal) है, इसलिए यह स्पष्ट है कि किसी दिन मानव जाति पृथ्वी से गायब हो जाएगी।\" उपरोक्त कथन में किए गए तार्किक तर्कदोष (fallacy) को पहचानें।",
        "options": [
          "दुर्घटना का तर्कदोष (Fallacy of accident)",
          "स्ट्रॉ मैन (Straw man)",
          "संयोजन का तर्कदोष (Fallacy of Composition)",
          "विभाजन का तर्कदोष (Fallacy of Division)"
        ],
        "explanation": "<strong>संयोजन का तर्कदोष (Fallacy of Composition)</strong> तब होता है जब कोई व्यक्ति यह अनुमान लगाता है कि कोई चीज़ <em>संपूर्ण (whole)</em> के लिए सत्य है, केवल इस आधार पर कि वह उस संपूर्ण के <em>एक हिस्से (part)</em> के लिए सत्य है। यहाँ, तर्क गलत रूप से यह मान लेता है कि चूंकि अलग-अलग इंसान मरते हैं (हिस्से), इसलिए पूरी मानव प्रजाति (संपूर्ण) अंततः एक ही दिन खत्म हो जाएगी। हालाँकि व्यक्ति नश्वर हैं, लेकिन प्रजनन के माध्यम से मानव जाति जारी रहती है।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q15",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "Unit 5: Mathematical Reasoning and Aptitude",
    "unitHI": "इकाई 5: गणितीय तर्क और अभिरुचि",
    "topicEN": "Codes and Relationships",
    "topicHI": "कूट और संबंध",
    "content": {
      "en": {
        "question": "If in a certain code language 'DREAM' is coded as '71692' and 'CHILD' is coded as '85437', then how will LEADER be coded in that language?",
        "options": ["369761", "619736", "637963", "367961"],
        "explanation": "<strong>Step-by-step Decoding:</strong><br>This is a Direct Letter Coding question where specific numbers are assigned to specific letters.<br>From DREAM = 71692, we get:<br>D=7, R=1, E=6, A=9, M=2.<br>From CHILD = 85437, we get:<br>C=8, H=5, I=4, L=3, D=7.<br><br>Now, substitute the codes for L-E-A-D-E-R:<br>L = 3<br>E = 6<br>A = 9<br>D = 7<br>E = 6<br>R = 1<br>Therefore, LEADER = 369761."
      },
      "hi": {
        "question": "यदि एक निश्चित कूट भाषा में 'DREAM' को '71692' और 'CHILD' को '85437' के रूप में कूटबद्ध (code) किया जाता है, तो उस भाषा में LEADER को कैसे कूटबद्ध किया जाएगा?",
        "options": ["369761", "619736", "637963", "367961"],
        "explanation": "<strong>चरण-दर-चरण डिकोडिंग:</strong><br>यह एक डायरेक्ट लेटर कोडिंग प्रश्न है जहां विशिष्ट अक्षरों को विशिष्ट नंबर दिए गए हैं।<br>DREAM = 71692 से, हमें मिलता है:<br>D=7, R=1, E=6, A=9, M=2.<br>CHILD = 85437 से, हमें मिलता है:<br>C=8, H=5, I=4, L=3, D=7.<br><br>अब, L-E-A-D-E-R के लिए कोड प्रतिस्थापित करें:<br>L = 3<br>E = 6<br>A = 9<br>D = 7<br>E = 6<br>R = 1<br>इसलिए, LEADER = 369761."
      }
    }
  },
  {
    "id": "june25-s1-p1-q16",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "Unit 9: People, Development and Environment",
    "unitHI": "इकाई 9: लोग, विकास और पर्यावरण",
    "topicEN": "Natural Hazards and Disasters",
    "topicHI": "प्राकृतिक आपदाएँ और आपदाएँ",
    "content": {
      "en": {
        "question": "Which of the following are body waves generated during an earthquake?<br><br>A. P-wave<br>B. S-wave<br>C. Love wave<br>D. Raleigh wave<br><br>Choose the correct answer from the options given below:",
        "options": [
          "A and B Only",
          "A, B and C Only",
          "B, C and D Only",
          "C and D Only"
        ],
        "explanation": "Earthquake seismic waves are broadly divided into two categories:<br>1. <strong>Body Waves:</strong> These travel through the Earth's inner layers (interior). They are <strong>Primary (P-waves)</strong> and <strong>Secondary (S-waves)</strong>. (A and B)<br>2. <strong>Surface Waves:</strong> These travel only along the surface of the Earth and are the most destructive. They include <strong>Love waves</strong> and <strong>Rayleigh waves</strong>. (C and D)"
      },
      "hi": {
        "question": "भूकंप के दौरान उत्पन्न होने वाली बॉडी वेव्स (body waves) निम्नलिखित में से कौन सी हैं?<br><br>A. पी-वेव (P-wave)<br>B. एस-वेव (S-wave)<br>C. लव वेव (Love wave)<br>D. रेले वेव (Raleigh wave)<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "केवल A और B",
          "केवल A, B और C",
          "केवल B, C और D",
          "केवल C और D"
        ],
        "explanation": "भूकंपीय तरंगों को मोटे तौर पर दो श्रेणियों में बांटा गया है:<br>1. <strong>बॉडी वेव्स (Body Waves):</strong> ये पृथ्वी की आंतरिक परतों (भीतर) से होकर यात्रा करती हैं। ये <strong>प्राथमिक (P-तरंगें)</strong> और <strong>द्वितीयक (S-तरंगें)</strong> हैं। (A और B)<br>2. <strong>सर्फेस वेव्स (Surface Waves):</strong> ये केवल पृथ्वी की सतह पर यात्रा करती हैं और सबसे विनाशकारी होती हैं। इनमें <strong>लव तरंगें (Love waves)</strong> और <strong>रेले तरंगें (Rayleigh waves)</strong> शामिल हैं। (C और D)"
      }
    }
  },
  {
    "id": "june25-s1-p1-q17",
    "difficulty": "medium",
    "correct": 4,
    "unitEN": "Unit 8: Information and Communication Technology (ICT)",
    "unitHI": "इकाई 8: सूचना और संचार प्रौद्योगिकी (ICT)",
    "topicEN": "ICT General Abbreviations and Terminology",
    "topicHI": "ICT सामान्य संक्षिप्तियाँ और शब्दावली",
    "content": {
      "en": {
        "question": "Which of the following statements are correct?<br><br>A. Adobe Acrobat is an example of proprietary product<br>B. Microsoft Office is an example of commercial operating system<br>C. Linux is open source software<br>D. Ubuntu is an example of an operating system<br>E. Firmware is an example of a mobile operating system<br><br>Choose the correct answer from the options given below:",
        "options": [
          "D and E Only",
          "C and D Only",
          "A, C and E Only",
          "A, C and D Only"
        ],
        "explanation": "Let's evaluate each statement:<br>• <strong>A is True:</strong> Adobe Acrobat is a closed-source, proprietary software owned by Adobe.<br>• <strong>B is False:</strong> Microsoft Office is Application Software, NOT an Operating System (Windows is the OS).<br>• <strong>C is True:</strong> Linux is the most famous example of free and Open Source Software (OSS).<br>• <strong>D is True:</strong> Ubuntu is a popular Linux-based Operating System.<br>• <strong>E is False:</strong> Firmware is a specific class of computer software that provides the low-level control for a device's specific hardware; it is NOT a mobile OS (like Android or iOS).<br>Therefore, only A, C, and D are correct."
      },
      "hi": {
        "question": "निम्नलिखित में से कौन से कथन सही हैं?<br><br>A. एडोब एक्रोबैट (Adobe Acrobat) मालिकाना (proprietary) उत्पाद का एक उदाहरण है<br>B. माइक्रोसॉफ्ट ऑफिस (Microsoft Office) व्यावसायिक ऑपरेटिंग सिस्टम का एक उदाहरण है<br>C. लिनक्स (Linux) ओपन सोर्स सॉफ्टवेयर है<br>D. उबंटू (Ubuntu) एक ऑपरेटिंग सिस्टम का एक उदाहरण है<br>E. फर्मवेयर (Firmware) एक मोबाइल ऑपरेटिंग सिस्टम का एक उदाहरण है<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "केवल D और E",
          "केवल C और D",
          "केवल A, C और E",
          "केवल A, C और D"
        ],
        "explanation": "आइए प्रत्येक कथन का मूल्यांकन करें:<br>• <strong>A सत्य है:</strong> एडोब एक्रोबैट एक बंद-स्रोत (closed-source), मालिकाना सॉफ्टवेयर है जिसका स्वामित्व एडोब के पास है।<br>• <strong>B असत्य है:</strong> माइक्रोसॉफ्ट ऑफिस एक एप्लीकेशन सॉफ्टवेयर है, यह ऑपरेटिंग सिस्टम नहीं है (विंडोज OS है)।<br>• <strong>C सत्य है:</strong> लिनक्स मुफ्त और ओपन सोर्स सॉफ्टवेयर (OSS) का सबसे प्रसिद्ध उदाहरण है।<br>• <strong>D सत्य है:</strong> उबंटू एक लोकप्रिय लिनक्स-आधारित ऑपरेटिंग सिस्टम है।<br>• <strong>E असत्य है:</strong> फर्मवेयर कंप्यूटर सॉफ्टवेयर का एक विशिष्ट वर्ग है जो किसी डिवाइस के हार्डवेयर के लिए निम्न-स्तरीय नियंत्रण प्रदान करता है; यह मोबाइल OS (जैसे Android या iOS) नहीं है।<br>इसलिए, केवल A, C और D सही हैं।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q18",
    "difficulty": "medium",
    "correct": 4,
    "unitEN": "Unit 4: Communication",
    "unitHI": "इकाई 4: संचार",
    "topicEN": "Mass Media and Society",
    "topicHI": "जन माध्यम और समाज",
    "content": {
      "en": {
        "question": "What is the correct chronology of release of the following films? (From earliest to the latest)<br><br>A. Alam Ara<br>B. Do Bigha Zameen<br>C. Raja Harish Chandra<br>D. Garam Hawa<br>E. Sholay<br><br>Choose the correct answer from the options given below:",
        "options": [
          "B, A, C, E, D",
          "A, B, C, D, E",
          "D, A, C, B, E",
          "C, A, B, D, E"
        ],
        "explanation": "<strong>Chronology of Indian Cinema milestones:</strong><br>1. <strong>C. Raja Harish Chandra (1913):</strong> India's first full-length feature film (silent).<br>2. <strong>A. Alam Ara (1931):</strong> India's first sound film (talkie).<br>3. <strong>B. Do Bigha Zameen (1953):</strong> A trend-setting film directed by Bimal Roy.<br>4. <strong>D. Garam Hawa (1973):</strong> A critically acclaimed film based on the partition.<br>5. <strong>E. Sholay (1975):</strong> The iconic blockbuster.<br>Therefore, the correct chronological order is C -> A -> B -> D -> E."
      },
      "hi": {
        "question": "निम्नलिखित फिल्मों के रिलीज़ होने का सही कालक्रम क्या है? (सबसे पहले से नवीनतम तक)<br><br>A. आलम आरा<br>B. दो बीघा ज़मीन<br>C. राजा हरिश्चंद्र<br>D. गरम हवा<br>E. शोले<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "B, A, C, E, D",
          "A, B, C, D, E",
          "D, A, C, B, E",
          "C, A, B, D, E"
        ],
        "explanation": "<strong>भारतीय सिनेमा के मील के पत्थरों का कालक्रम:</strong><br>1. <strong>C. राजा हरिश्चंद्र (1913):</strong> भारत की पहली फुल-लेंथ फीचर फिल्म (मूक फिल्म)।<br>2. <strong>A. आलम आरा (1931):</strong> भारत की पहली बोलती फिल्म (Sound film)।<br>3. <strong>B. दो बीघा ज़मीन (1953):</strong> बिमल रॉय द्वारा निर्देशित एक ट्रेंड-सेटिंग फिल्म।<br>4. <strong>D. गरम हवा (1973):</strong> विभाजन पर आधारित एक समीक्षकों द्वारा प्रशंसित फिल्म।<br>5. <strong>E. शोले (1975):</strong> भारतीय इतिहास की सबसे प्रतिष्ठित ब्लॉकबस्टर।<br>इसलिए, सही कालानुक्रमिक क्रम C -> A -> B -> D -> E है।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q19",
    "difficulty": "easy",
    "correct": 1,
    "unitEN": "Unit 8: Information and Communication Technology (ICT)",
    "unitHI": "इकाई 8: सूचना और संचार प्रौद्योगिकी (ICT)",
    "topicEN": "Basics of Internet and Network Security",
    "topicHI": "इंटरनेट और नेटवर्क सुरक्षा की मूल बातें",
    "content": {
      "en": {
        "question": "Which of the following is related to network security?",
        "options": ["Firewall", "Worms", "Keyloggers", "Trojan"],
        "explanation": "A <strong>Firewall</strong> is a network security device (either hardware or software) that monitors and filters incoming and outgoing network traffic based on an organization's previously established security policies. It acts as a protective barrier. On the other hand, Worms, Keyloggers, and Trojans are types of malicious software (Malware) that pose a <em>threat</em> to network security."
      },
      "hi": {
        "question": "निम्नलिखित में से कौन नेटवर्क सुरक्षा से संबंधित है?",
        "options": ["फ़ायरवॉल (Firewall)", "वर्म्स (Worms)", "कीलॉगर्स (Keyloggers)", "ट्रोजन (Trojan)"],
        "explanation": "<strong>फ़ायरवॉल (Firewall)</strong> एक नेटवर्क सुरक्षा उपकरण (हार्डवेयर या सॉफ्टवेयर) है जो सुरक्षा नीतियों के आधार पर आने वाले और जाने वाले नेटवर्क ट्रैफ़िक की निगरानी और फ़िल्टर करता है। यह एक सुरक्षात्मक दीवार के रूप में कार्य करता है। दूसरी ओर, वर्म्स, कीलॉगर्स और ट्रोजन दुर्भावनापूर्ण सॉफ़्टवेयर (मैलवेयर) के प्रकार हैं जो नेटवर्क सुरक्षा के लिए <em>खतरा (threat)</em> हैं।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q20",
    "difficulty": "medium",
    "correct": 4,
    "unitEN": "Unit 1: Teaching Aptitude",
    "unitHI": "इकाई 1: शिक्षण अभिरुचि",
    "topicEN": "Value Education",
    "topicHI": "मूल्य शिक्षा",
    "content": {
      "en": {
        "question": "<p>Match the <strong>LIST-I</strong> with <strong>LIST-II</strong>:</p><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><tr><th style='padding:8px;'>LIST-I (Value Education)</th><th style='padding:8px;'>LIST-II (Description)</th></tr><tr><td style='padding:6px;'>A. Social Value Education</td><td style='padding:6px;'>I. Aware of the diversity, deals and norms of the society</td></tr><tr><td style='padding:6px;'>B. Spiritual Value Education</td><td style='padding:6px;'>II. People should know common values applicable to mankind</td></tr><tr><td style='padding:6px;'>C. Cultural Value Education</td><td style='padding:6px;'>III. Make people better and more responsible citizens</td></tr><tr><td style='padding:6px;'>D. Universal Value Education</td><td style='padding:6px;'>IV. To keep mind calm and awakened</td></tr></table><br>Choose the <strong>correct</strong> answer from the options given below:",
        "options": [
          "A-I, B-II, C-III, D-IV",
          "A-II, B-I, C-IV, D-III",
          "A-IV, B-III, C-II, D-I",
          "A-III, B-IV, C-I, D-II"
        ],
        "explanation": "<strong>Matching Concept:</strong><br>• <strong>Social Value Education (A-III):</strong> Its goal is to integrate individuals into society, making them better and more responsible citizens.<br>• <strong>Spiritual Value Education (B-IV):</strong> Focuses on inner peace, mindfulness, and keeping the mind calm and awakened.<br>• <strong>Cultural Value Education (C-I):</strong> Involves passing down traditions and making people aware of the diversity, ideals, and norms of their specific culture.<br>• <strong>Universal Value Education (D-II):</strong> Relates to fundamental human values (like truth, non-violence, peace) that are common and applicable to all mankind globally."
      },
      "hi": {
        "question": "<p><strong>सूची-I</strong> का <strong>सूची-II</strong> के साथ मिलान करें:</p><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><tr><th style='padding:8px;'>सूची-I (मूल्य शिक्षा)</th><th style='padding:8px;'>सूची-II (विवरण)</th></tr><tr><td style='padding:6px;'>A. सामाजिक मूल्य शिक्षा</td><td style='padding:6px;'>I. समाज की विविधता, आदर्शों और मानदंडों के प्रति जागरूक</td></tr><tr><td style='padding:6px;'>B. आध्यात्मिक मूल्य शिक्षा</td><td style='padding:6px;'>II. लोगों को मानव जाति पर लागू होने वाले सामान्य मूल्यों को जानना चाहिए</td></tr><tr><td style='padding:6px;'>C. सांस्कृतिक मूल्य शिक्षा</td><td style='padding:6px;'>III. लोगों को बेहतर और अधिक जिम्मेदार नागरिक बनाना</td></tr><tr><td style='padding:6px;'>D. सार्वभौमिक मूल्य शिक्षा</td><td style='padding:6px;'>IV. मन को शांत और जाग्रत रखना</td></tr></table><br>नीचे दिए गए विकल्पों में से <strong>सही</strong> उत्तर चुनें:",
        "options": [
          "A-I, B-II, C-III, D-IV",
          "A-II, B-I, C-IV, D-III",
          "A-IV, B-III, C-II, D-I",
          "A-III, B-IV, C-I, D-II"
        ],
        "explanation": "<strong>वैचारिक मिलान:</strong><br>• <strong>सामाजिक मूल्य शिक्षा (A-III):</strong> इसका लक्ष्य व्यक्तियों को समाज में एकीकृत करना, उन्हें बेहतर और अधिक जिम्मेदार नागरिक बनाना है।<br>• <strong>आध्यात्मिक मूल्य शिक्षा (B-IV):</strong> आंतरिक शांति, दिमागीपन और मन को शांत और जाग्रत रखने पर केंद्रित है।<br>• <strong>सांस्कृतिक मूल्य शिक्षा (C-I):</strong> इसमें परंपराओं को आगे बढ़ाना और लोगों को उनकी विशिष्ट संस्कृति की विविधता, आदर्शों और मानदंडों से अवगत कराना शामिल है।<br>• <strong>सार्वभौमिक मूल्य शिक्षा (D-II):</strong> मौलिक मानवीय मूल्यों (जैसे सत्य, अहिंसा, शांति) से संबंधित है जो विश्व स्तर पर सभी मानव जाति के लिए आम और लागू हैं।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q21",
    "difficulty": "easy",
    "correct": 2,
    "unitEN": "Unit 9: People, Development and Environment",
    "unitHI": "इकाई 9: लोग, विकास और पर्यावरण",
    "topicEN": "Sustainable Development Goals",
    "topicHI": "सतत विकास लक्ष्य",
    "content": {
      "en": {
        "question": "The Sustainable Development Goal which covers lifelong learning is ________.",
        "options": [
          "Good Health and Well-Being",
          "Quality of Education",
          "Gender Equality",
          "Zero Hunger"
        ],
        "explanation": "<strong>SDG 4: Quality Education</strong> aims to \"ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.\" <br>Context of other options:<br>SDG 2: Zero Hunger<br>SDG 3: Good Health and Well-being<br>SDG 5: Gender Equality."
      },
      "hi": {
        "question": "सतत विकास लक्ष्य जो आजीवन सीखने (lifelong learning) को कवर करता है, वह ________ है।",
        "options": [
          "अच्छा स्वास्थ्य और कल्याण (Good Health and Well-Being)",
          "गुणवत्तापूर्ण शिक्षा (Quality of Education)",
          "लैंगिक समानता (Gender Equality)",
          "शून्य भुखमरी (Zero Hunger)"
        ],
        "explanation": "<strong>SDG 4: गुणवत्तापूर्ण शिक्षा (Quality Education)</strong> का लक्ष्य \"सभी के लिए समावेशी और समान गुणवत्ता वाली शिक्षा सुनिश्चित करना और आजीवन सीखने के अवसरों को बढ़ावा देना\" है।<br>अन्य विकल्पों का संदर्भ:<br>SDG 2: शून्य भुखमरी<br>SDG 3: अच्छा स्वास्थ्य और कल्याण<br>SDG 5: लैंगिक समानता।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q22",
    "difficulty": "hard",
    "correct": 3,
    "unitEN": "Unit 5: Mathematical Reasoning and Aptitude",
    "unitHI": "इकाई 5: गणितीय तर्क और अभिरुचि",
    "topicEN": "Mathematical Aptitude (Speed, Percentage, Ratio)",
    "topicHI": "गणितीय अभिरुचि (गति, प्रतिशत, अनुपात)",
    "content": {
      "en": {
        "question": "Which of the following statement(s) is/are true?<br><br>A. If an athlete runs 200 metres in 24 seconds, then his speed is 30 Km/hr.<br>B. Sixty five percent of a number is 21 less than 4/5 of that number. The number is 150.<br>C. A car is running at a speed of 108 Km/hr. The distance covered by car in 15 seconds is 450 metres.<br>D. Difference between 2 numbers A and B is 1660. If 7.5% of A is 12.5% of B, the value of A & B is 4150 and 2200.<br><br>Choose the correct answer from the options given below:",
        "options": [
          "A, B and C Only",
          "B, C and D Only",
          "A and C Only",
          "B and D Only"
        ],
        "explanation": "<strong>Statement Analysis:</strong><br><br><strong>A (True):</strong> Speed = Distance/Time = 200/24 m/s. To convert to km/hr, multiply by 18/5. -> (200/24) × (18/5) = 30 km/hr.<br><strong>B (False):</strong> Let number be x. 65% of x = (4/5)x - 21. <br>0.65x = 0.8x - 21 -> 0.15x = 21 -> x = 21 / 0.15 = 140. (Statement says 150).<br><strong>C (True):</strong> Speed = 108 km/hr. In m/s = 108 × (5/18) = 30 m/s. Distance in 15s = 30 × 15 = 450 metres.<br><strong>D (False):</strong> 7.5% of A = 12.5% of B -> 7.5A = 12.5B -> 3A = 5B -> A = (5/3)B.<br>Given A - B = 1660 -> (5/3)B - B = 1660 -> (2/3)B = 1660 -> B = 2490. A = 4150. (Statement says B is 2200).<br>Only A and C are mathematically true."
      },
      "hi": {
        "question": "निम्नलिखित में से कौन सा/से कथन सत्य है/हैं?<br><br>A. यदि कोई एथलीट 24 सेकंड में 200 मीटर दौड़ता है, तो उसकी गति 30 किमी/घंटा है।<br>B. किसी संख्या का 65 प्रतिशत उस संख्या के 4/5 से 21 कम है। वह संख्या 150 है।<br>C. एक कार 108 किमी/घंटा की गति से चल रही है। 15 सेकंड में कार द्वारा तय की गई दूरी 450 मीटर है।<br>D. 2 संख्याओं A और B के बीच का अंतर 1660 है। यदि A का 7.5% B का 12.5% है, तो A और B का मान 4150 और 2200 है。<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "केवल A, B और C",
          "केवल B, C और D",
          "केवल A और C",
          "केवल B और D"
        ],
        "explanation": "<strong>कथन विश्लेषण:</strong><br><br><strong>A (सत्य):</strong> गति = दूरी/समय = 200/24 मीटर/सेकंड। किमी/घंटा में बदलने के लिए, 18/5 से गुणा करें। -> (200/24) × (18/5) = 30 किमी/घंटा।<br><strong>B (असत्य):</strong> माना संख्या x है। x का 65% = (4/5)x - 21.<br>0.65x = 0.8x - 21 -> 0.15x = 21 -> x = 21 / 0.15 = 140. (कथन कहता है कि संख्या 150 है)।<br><strong>C (सत्य):</strong> गति = 108 किमी/घंटा। मीटर/सेकंड में = 108 × (5/18) = 30 मीटर/सेकंड। 15 सेकंड में दूरी = 30 × 15 = 450 मीटर।<br><strong>D (असत्य):</strong> A का 7.5% = B का 12.5% -> 7.5A = 12.5B -> 3A = 5B -> A = (5/3)B.<br>दिया गया है A - B = 1660 -> (5/3)B - B = 1660 -> (2/3)B = 1660 -> B = 2490. और A = 4150. (कथन कहता है कि B 2200 है)।<br>केवल A और C गणितीय रूप से सत्य हैं।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q23",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "Unit 4: Communication",
    "unitHI": "इकाई 4: संचार",
    "topicEN": "Mass Media and Society",
    "topicHI": "जन माध्यम और समाज",
    "content": {
      "en": {
        "question": "What among the following are the essential requirements of a film script-writing?<br><br>A. Shooting<br>B. Confrontation-Middle<br>C. Beginning-Set-up<br>D. Editing<br>E. Resolution-End<br><br>Choose the correct answer from the options given below:",
        "options": [
          "B, C and E Only",
          "A and D Only",
          "A, D and E Only",
          "A, C and D Only"
        ],
        "explanation": "According to the classic <strong>Three-Act Structure</strong> in film script-writing (popularized by Syd Field), a standard screenplay requires three essential narrative acts:<br>Act I: <strong>Beginning - Set-up</strong> (C)<br>Act II: <strong>Confrontation - Middle</strong> (B)<br>Act III: <strong>Resolution - End</strong> (E)<br><br>Shooting (A) and Editing (D) are parts of film production and post-production respectively, NOT script-writing requirements."
      },
      "hi": {
        "question": "फिल्म पटकथा लेखन (script-writing) की आवश्यक आवश्यकताएँ निम्नलिखित में से क्या हैं?<br><br>A. शूटिंग (Shooting)<br>B. टकराव-मध्य (Confrontation-Middle)<br>C. शुरुआत-सेट-अप (Beginning-Set-up)<br>D. संपादन (Editing)<br>E. संकल्प-अंत (Resolution-End)<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "केवल B, C और E",
          "केवल A और D",
          "केवल A, D और E",
          "केवल A, C और D"
        ],
        "explanation": "फिल्म पटकथा लेखन (सिड फील्ड द्वारा लोकप्रिय) में क्लासिक <strong>थ्री-एक्ट स्ट्रक्चर (Three-Act Structure)</strong> के अनुसार, एक मानक पटकथा के लिए तीन आवश्यक कथा कृत्यों की आवश्यकता होती है:<br>अंक I: <strong>शुरुआत - सेट-अप</strong> (C)<br>अंक II: <strong>टकराव - मध्य</strong> (B)<br>अंक III: <strong>संकल्प - अंत</strong> (E)<br><br>शूटिंग (A) और संपादन (Editing - D) क्रमशः फिल्म उत्पादन और पोस्ट-प्रोडक्शन के भाग हैं, पटकथा लेखन की आवश्यकताएं नहीं।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q24",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "Unit 10: Higher Education System",
    "unitHI": "इकाई 10: उच्च शिक्षा प्रणाली",
    "topicEN": "Evolution of Higher Learning and Research in Post-Independence India",
    "topicHI": "स्वतंत्रता के बाद भारत में उच्च शिक्षा और शोध का विकास",
    "content": {
      "en": {
        "question": "Arrange the following Commissions and organisations chronologically according to their year of establishment:<br><br>A. University Grants Commission<br>B. University Education Commission<br>C. All India Council of Technical Education<br>D. Education Commission<br><br>Choose the correct answer from the options given below:",
        "options": [
          "A, B, C, D",
          "C, B, A and D",
          "B, C, A and D",
          "D, A, B and C"
        ],
        "explanation": "<strong>Chronology of Educational Commissions/Bodies in India:</strong><br>1. <strong>C. All India Council of Technical Education (AICTE):</strong> Established in <strong>1945</strong> as an advisory body.<br>2. <strong>B. University Education Commission:</strong> Known as the Radhakrishnan Commission, appointed in <strong>1948</strong>.<br>3. <strong>A. University Grants Commission (UGC):</strong> Inaugurated in <strong>1953</strong> (and became a statutory body in 1956).<br>4. <strong>D. Education Commission:</strong> Known as the Kothari Commission, appointed in <strong>1964</strong>.<br>The correct sequence is C, B, A, D."
      },
      "hi": {
        "question": "निम्नलिखित आयोगों और संगठनों को उनकी स्थापना के वर्ष के अनुसार कालानुक्रमिक रूप से व्यवस्थित करें:<br><br>A. विश्वविद्यालय अनुदान आयोग (UGC)<br>B. विश्वविद्यालय शिक्षा आयोग<br>C. अखिल भारतीय तकनीकी शिक्षा परिषद (AICTE)<br>D. शिक्षा आयोग<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "A, B, C, D",
          "C, B, A और D",
          "B, C, A और D",
          "D, A, B और C"
        ],
        "explanation": "<strong>भारत में शैक्षिक आयोगों/निकायों का कालक्रम:</strong><br>1. <strong>C. अखिल भारतीय तकनीकी शिक्षा परिषद (AICTE):</strong> <strong>1945</strong> में एक सलाहकार निकाय के रूप में स्थापित।<br>2. <strong>B. विश्वविद्यालय शिक्षा आयोग:</strong> राधाकृष्णन आयोग के रूप में जाना जाता है, जिसे <strong>1948</strong> में नियुक्त किया गया था।<br>3. <strong>A. विश्वविद्यालय अनुदान आयोग (UGC):</strong> <strong>1953</strong> में उद्घाटन किया गया (और 1956 में एक वैधानिक निकाय बन गया)।<br>4. <strong>D. शिक्षा आयोग:</strong> जिसे कोठारी आयोग के रूप में जाना जाता है, <strong>1964</strong> में नियुक्त किया गया था।<br>सही क्रम C, B, A, D है।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q25",
    "difficulty": "medium",
    "correct": 4,
    "unitEN": "Unit 1: Teaching Aptitude",
    "unitHI": "इकाई 1: शिक्षण अभिरुचि",
    "topicEN": "Evaluation Systems",
    "topicHI": "मूल्यांकन प्रणालियाँ",
    "content": {
      "en": {
        "question": "Which of the following assessment types would require to carry out an activity or produce a product in order to demonstrate learning?",
        "options": [
          "Formative Assessment",
          "Portfolio Assessment",
          "Summative Assessment",
          "Performance Assessment"
        ],
        "explanation": "<strong>Performance Assessment</strong>, also known as alternative or authentic assessment, requires students to perform a task or generate their own response to demonstrate their knowledge and skills (e.g., conducting a science experiment, playing a musical instrument, or building a model). <br>• Formative is for ongoing feedback.<br>• Summative is for final evaluation at the end.<br>• Portfolio is a collection of a student's work over time."
      },
      "hi": {
        "question": "निम्नलिखित में से किस प्रकार के मूल्यांकन (assessment) में सीखने को प्रदर्शित करने के लिए किसी गतिविधि को अंजाम देने या किसी उत्पाद का निर्माण करने की आवश्यकता होगी?",
        "options": [
          "रचनात्मक मूल्यांकन (Formative Assessment)",
          "पोर्टफोलियो मूल्यांकन (Portfolio Assessment)",
          "योगात्मक मूल्यांकन (Summative Assessment)",
          "प्रदर्शन मूल्यांकन (Performance Assessment)"
        ],
        "explanation": "<strong>प्रदर्शन मूल्यांकन (Performance Assessment)</strong>, जिसे वैकल्पिक या प्रामाणिक मूल्यांकन के रूप में भी जाना जाता है, में छात्रों को अपने ज्ञान और कौशल को प्रदर्शित करने के लिए कोई कार्य करने या अपनी प्रतिक्रिया उत्पन्न करने की आवश्यकता होती है (जैसे विज्ञान का प्रयोग करना, कोई वाद्य यंत्र बजाना, या कोई मॉडल बनाना)।<br>• रचनात्मक (Formative) मूल्यांकन निरंतर फीडबैक के लिए है।<br>• योगात्मक (Summative) मूल्यांकन अंत में अंतिम ग्रेड के लिए है।<br>• पोर्टफोलियो समय के साथ छात्र के काम का एक संग्रह है।"
      }
    }
  }, 
  {
    "id": "june25-s1-p1-q26",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "Unit 2: Research Aptitude",
    "unitHI": "इकाई 2: शोध अभिरुचि",
    "topicEN": "Research Ethics",
    "topicHI": "शोध नैतिकता",
    "content": {
      "en": {
        "question": "Which of the following statements (A-D) most appropriately explains 'Research Ethics'?<br><br>A. It states how to write a research report flawlessly.<br>B. It gives the methodology of researching within social norms.<br>C. It provides a common set of dos and don'ts of conducting an ethical research.<br>D. It protects the rights and welfare of research participants.<br><br>Choose the correct answer from the options given below:",
        "options": [
          "C and D Only",
          "A and B Only",
          "A and C Only",
          "B and D Only"
        ],
        "explanation": "<strong>Research Ethics</strong> involves the application of fundamental ethical principles to a variety of topics involving research. <br>• Statement C is correct because ethics provides clear guidelines (dos and don'ts) against fabrication, falsification, and plagiarism.<br>• Statement D is the core of ethics—ensuring the safety, dignity, and rights of human/animal participants (e.g., informed consent, confidentiality).<br>Statement A is about report writing skills, and B is too vague about 'social norms' rather than scientific ethical principles."
      },
      "hi": {
        "question": "निम्नलिखित में से कौन सा कथन (A-D) 'शोध नैतिकता' (Research Ethics) की सबसे उचित व्याख्या करता है?<br><br>A. यह बताता है कि बिना किसी त्रुटि के शोध रिपोर्ट कैसे लिखी जाए।<br>B. यह सामाजिक मानदंडों के भीतर शोध करने की कार्यप्रणाली देता है।<br>C. यह एक नैतिक शोध करने के लिए क्या करें और क्या न करें (dos and don'ts) का एक सामान्य सेट प्रदान करता है।<br>D. यह शोध प्रतिभागियों के अधिकारों और कल्याण की रक्षा करता है।<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "केवल C और D",
          "केवल A और B",
          "केवल A और C",
          "केवल B और D"
        ],
        "explanation": "<strong>शोध नैतिकता (Research Ethics)</strong> में शोध से जुड़े विभिन्न विषयों पर मौलिक नैतिक सिद्धांतों का अनुप्रयोग शामिल है।<br>• कथन C सही है क्योंकि नैतिकता जालसाजी, हेरफेर और साहित्यिक चोरी के खिलाफ स्पष्ट दिशानिर्देश (क्या करें और क्या न करें) प्रदान करती है।<br>• कथन D नैतिकता का मूल है—मानव/पशु प्रतिभागियों की सुरक्षा, गरिमा और अधिकारों को सुनिश्चित करना (जैसे, सूचित सहमति, गोपनीयता)।<br>कथन A रिपोर्ट लेखन कौशल के बारे में है, और B वैज्ञानिक नैतिक सिद्धांतों के बजाय 'सामाजिक मानदंडों' के बारे में बहुत अस्पष्ट है।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q27",
    "difficulty": "medium",
    "correct": 4,
    "unitEN": "Unit 6: Logical Reasoning",
    "unitHI": "इकाई 6: तार्किक विचार",
    "topicEN": "Connotations and Denotations of Terms",
    "topicHI": "पदों के अर्थ और अभिव्यक्ति",
    "content": {
      "en": {
        "question": "Arrange the following in order of decreasing denotation.<br><br>A. Carbonated drinks<br>B. Beverages<br>C. Cola Fizz<br>D. Liquid<br><br>Choose the correct answer from the options given below:",
        "options": [
          "C, A, B, D",
          "D, A, B, C",
          "A, C, B, D",
          "D, B, A, C"
        ],
        "explanation": "<strong>Decreasing Denotation</strong> means moving from the most general category (largest class of objects) to the most specific category (smallest class).<br>1. <strong>Liquid (D):</strong> The widest category (includes water, oil, milk, etc.).<br>2. <strong>Beverages (B):</strong> A subset of liquids specifically meant for drinking.<br>3. <strong>Carbonated drinks (A):</strong> A specific subset of beverages that contain dissolved carbon dioxide.<br>4. <strong>Cola Fizz (C):</strong> A specific brand or highly specific type of carbonated drink.<br>Correct Order: D -> B -> A -> C."
      },
      "hi": {
        "question": "निम्नलिखित को घटते हुए अर्थ (decreasing denotation) के क्रम में व्यवस्थित करें।<br><br>A. कार्बोनेटेड पेय (Carbonated drinks)<br>B. पेय पदार्थ (Beverages)<br>C. कोला फ़िज़ (Cola Fizz)<br>D. तरल (Liquid)<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "C, A, B, D",
          "D, A, B, C",
          "A, C, B, D",
          "D, B, A, C"
        ],
        "explanation": "<strong>घटता हुआ अर्थ (Decreasing Denotation)</strong> का मतलब है सबसे सामान्य श्रेणी (वस्तुओं का सबसे बड़ा वर्ग) से सबसे विशिष्ट श्रेणी (सबसे छोटा वर्ग) की ओर बढ़ना।<br>1. <strong>तरल / Liquid (D):</strong> सबसे व्यापक श्रेणी (इसमें पानी, तेल, दूध आदि शामिल हैं)।<br>2. <strong>पेय पदार्थ / Beverages (B):</strong> तरल पदार्थों का एक उपसमूह जो विशेष रूप से पीने के लिए होता है।<br>3. <strong>कार्बोनेटेड पेय (A):</strong> पेय पदार्थों का एक विशिष्ट उपसमूह जिसमें कार्बन डाइऑक्साइड घुली होती है।<br>4. <strong>कोला फ़िज़ (C):</strong> एक विशिष्ट ब्रांड या अत्यधिक विशिष्ट प्रकार का कार्बोनेटेड पेय।<br>सही क्रम: D -> B -> A -> C."
      }
    }
  },
  {
    "id": "june25-s1-p1-q28",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "Unit 9: People, Development and Environment",
    "unitHI": "इकाई 9: लोग, विकास और पर्यावरण",
    "topicEN": "Natural and Energy Resources",
    "topicHI": "प्राकृतिक और ऊर्जा संसाधन",
    "content": {
      "en": {
        "question": "Which of the following components of Electromagnetic Radiation reach earth as a part of solar radiation?<br><br>A. Gama-Rays<br>B. X-Rays<br>C. Ultraviolet Radiation<br>D. Visible Rays<br>E. Infrared Radiation<br><br>Choose the correct answer from the options given below:",
        "options": [
          "A, B and C Only",
          "C, D and E Only",
          "A, B, D and E Only",
          "A, B, C, D and E"
        ],
        "explanation": "The sun emits electromagnetic radiation across the spectrum. However, not all of it reaches the Earth's surface. <br>• Earth's atmosphere (specifically the ozone layer and upper atmosphere) largely blocks deadly high-energy radiation like <strong>Gamma-Rays (A)</strong> and <strong>X-Rays (B)</strong>.<br>• The radiation that successfully reaches the Earth's surface and biosphere primarily consists of <strong>Ultraviolet (UV) Radiation (C)</strong>, <strong>Visible Light (D)</strong>, and <strong>Infrared Radiation (E)</strong>.<br>Therefore, C, D, and E is the correct answer."
      },
      "hi": {
        "question": "विद्युत चुम्बकीय विकिरण (Electromagnetic Radiation) के निम्नलिखित में से कौन से घटक सौर विकिरण के रूप में पृथ्वी पर पहुँचते हैं?<br><br>A. गामा-किरणें (Gama-Rays)<br>B. एक्स-रे (X-Rays)<br>C. पराबैंगनी विकिरण (Ultraviolet Radiation)<br>D. दृश्य किरणें (Visible Rays)<br>E. अवरक्त विकिरण (Infrared Radiation)<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "केवल A, B और C",
          "केवल C, D और E",
          "केवल A, B, D और E",
          "A, B, C, D और E"
        ],
        "explanation": "सूर्य पूरे स्पेक्ट्रम में विद्युत चुम्बकीय विकिरण उत्सर्जित करता है। हालाँकि, यह सब पृथ्वी की सतह तक नहीं पहुँचता है।<br>• पृथ्वी का वायुमंडल (विशेष रूप से ओजोन परत और ऊपरी वायुमंडल) काफी हद तक <strong>गामा-किरणों (A)</strong> और <strong>एक्स-रे (B)</strong> जैसे घातक उच्च-ऊर्जा विकिरण को रोकता है।<br>• जो विकिरण सफलतापूर्वक पृथ्वी की सतह और जीवमंडल तक पहुँचता है, उसमें मुख्य रूप से <strong>पराबैंगनी (UV) विकिरण (C)</strong>, <strong>दृश्य प्रकाश (D)</strong>, और <strong>अवरक्त (Infrared) विकिरण (E)</strong> शामिल हैं।<br>इसलिए, C, D और E सही उत्तर है।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q29",
    "difficulty": "hard",
    "correct": 4,
    "unitEN": "Unit 5: Mathematical Reasoning and Aptitude",
    "unitHI": "इकाई 5: गणितीय तर्क और अभिरुचि",
    "topicEN": "Profit and Loss",
    "topicHI": "लाभ और हानि",
    "content": {
      "en": {
        "question": "Rohan buys an article at discount of 25%. At what percentage above the cost price should he sell it to make a profit of 25% over the original price?",
        "options": [
          "68.5",
          "67.5",
          "65.5",
          "66.67"
        ],
        "explanation": "<strong>Step-by-step Solution:</strong><br>1. Let the Original Price (OP) of the article be 100.<br>2. Rohan bought it at a 25% discount, so his Cost Price (CP) = 100 - 25 = 75.<br>3. He wants to make a 25% profit <em>over the Original Price (100)</em>. So, his required Selling Price (SP) = 100 + 25 = 125.<br>4. His actual profit amount = SP - CP = 125 - 75 = 50.<br>5. We need to find this profit as a percentage of his Cost Price (75):<br>   Percentage = (Profit / CP) × 100<br>   = (50 / 75) × 100<br>   = (2/3) × 100 = 66.666...%<br>Hence, he should sell it at <strong>66.67%</strong> above his cost price."
      },
      "hi": {
        "question": "रोहन एक वस्तु को 25% की छूट पर खरीदता है। मूल कीमत पर 25% का लाभ कमाने के लिए उसे इसे क्रय मूल्य (cost price) से कितने प्रतिशत अधिक पर बेचना चाहिए?",
        "options": [
          "68.5",
          "67.5",
          "65.5",
          "66.67"
        ],
        "explanation": "<strong>चरण-दर-चरण समाधान:</strong><br>1. मान लीजिए कि वस्तु की मूल कीमत (Original Price) 100 है।<br>2. रोहन ने इसे 25% की छूट पर खरीदा, इसलिए उसका क्रय मूल्य (Cost Price) = 100 - 25 = 75।<br>3. वह <em>मूल कीमत (100)</em> पर 25% का लाभ कमाना चाहता है। इसलिए, उसका आवश्यक विक्रय मूल्य (Selling Price) = 100 + 25 = 125।<br>4. उसका वास्तविक लाभ = विक्रय मूल्य - क्रय मूल्य = 125 - 75 = 50।<br>5. हमें इस लाभ को उसके क्रय मूल्य (75) के प्रतिशत के रूप में खोजना होगा:<br>   प्रतिशत = (लाभ / क्रय मूल्य) × 100<br>   = (50 / 75) × 100<br>   = (2/3) × 100 = 66.666...%<br>अतः, उसे इसे अपने क्रय मूल्य से <strong>66.67%</strong> ऊपर बेचना चाहिए।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q30",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "Unit 9: People, Development and Environment",
    "unitHI": "इकाई 9: लोग, विकास और पर्यावरण",
    "topicEN": "International Environmental Agreements and Protocols",
    "topicHI": "अंतर्राष्ट्रीय पर्यावरण समझौते और प्रोटोकॉल",
    "content": {
      "en": {
        "question": "<p>Match the <strong>LIST-I</strong> with <strong>LIST-II</strong></p><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><tr><th style='padding:8px;'>LIST-I (Environmental Protocols/Conventions)</th><th style='padding:8px;'>LIST-II (Year of action/adoption)</th></tr><tr><td style='padding:6px;'>A. International Solar Alliance</td><td style='padding:6px;'>I. 1997</td></tr><tr><td style='padding:6px;'>B. Convention on Biodiversity</td><td style='padding:6px;'>II. 2015</td></tr><tr><td style='padding:6px;'>C. National Action Plan on Climate Change</td><td style='padding:6px;'>III. 1992</td></tr><tr><td style='padding:6px;'>D. Kyoto Protocol</td><td style='padding:6px;'>IV. 2008</td></tr></table><br>Choose the <strong>correct</strong> answer from the options given below:",
        "options": [
          "A-III, B-II, C-IV, D-I",
          "A-II, B-III, C-IV, D-I",
          "A-II, B-III, C-I, D-IV",
          "A-III, B-I, C-II, D-IV"
        ],
        "explanation": "<strong>Key Matches:</strong><br>• <strong>International Solar Alliance (A-II):</strong> Initiated by India and France, it was launched during COP21 in Paris in <strong>2015</strong>.<br>• <strong>Convention on Biological Diversity (B-III):</strong> Opened for signature at the Earth Summit in Rio de Janeiro in <strong>1992</strong>.<br>• <strong>National Action Plan on Climate Change (C-IV):</strong> Launched by the Government of India in <strong>2008</strong> outlining 8 National Missions.<br>• <strong>Kyoto Protocol (D-I):</strong> An international treaty that commits state parties to reduce greenhouse gas emissions, adopted in <strong>1997</strong> in Kyoto, Japan."
      },
      "hi": {
        "question": "<p><strong>सूची-I</strong> का <strong>सूची-II</strong> के साथ मिलान करें</p><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><tr><th style='padding:8px;'>सूची-I (पर्यावरण प्रोटोकॉल/सम्मेलन)</th><th style='padding:8px;'>सूची-II (कार्रवाई/अपनाने का वर्ष)</th></tr><tr><td style='padding:6px;'>A. अंतर्राष्ट्रीय सौर गठबंधन (ISA)</td><td style='padding:6px;'>I. 1997</td></tr><tr><td style='padding:6px;'>B. जैव विविधता पर कन्वेंशन</td><td style='padding:6px;'>II. 2015</td></tr><tr><td style='padding:6px;'>C. जलवायु परिवर्तन पर राष्ट्रीय कार्य योजना (NAPCC)</td><td style='padding:6px;'>III. 1992</td></tr><tr><td style='padding:6px;'>D. क्योटो प्रोटोकॉल</td><td style='padding:6px;'>IV. 2008</td></tr></table><br>नीचे दिए गए विकल्पों में से <strong>सही</strong> उत्तर चुनें:",
        "options": [
          "A-III, B-II, C-IV, D-I",
          "A-II, B-III, C-IV, D-I",
          "A-II, B-III, C-I, D-IV",
          "A-III, B-I, C-II, D-IV"
        ],
        "explanation": "<strong>प्रमुख मिलान:</strong><br>• <strong>अंतर्राष्ट्रीय सौर गठबंधन (A-II):</strong> भारत और फ्रांस द्वारा शुरू किया गया, इसे <strong>2015</strong> में पेरिस में COP21 के दौरान लॉन्च किया गया था।<br>• <strong>जैव विविधता पर कन्वेंशन (B-III):</strong> <strong>1992</strong> में रियो डी जनेरियो में पृथ्वी शिखर सम्मेलन (Earth Summit) में हस्ताक्षर के लिए खोला गया।<br>• <strong>जलवायु परिवर्तन पर राष्ट्रीय कार्य योजना (C-IV):</strong> <strong>2008</strong> में भारत सरकार द्वारा 8 राष्ट्रीय मिशनों की रूपरेखा के साथ शुरू किया गया।<br>• <strong>क्योटो प्रोटोकॉल (D-I):</strong> एक अंतरराष्ट्रीय संधि जो <strong>1997</strong> में क्योटो, जापान में अपनाई गई, जो राज्य के दलों को ग्रीनहाउस गैस उत्सर्जन को कम करने के लिए प्रतिबद्ध करती है।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q31",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "Unit 1: Teaching Aptitude",
    "unitHI": "इकाई 1: शिक्षण अभिरुचि",
    "topicEN": "Evaluation Systems",
    "topicHI": "मूल्यांकन प्रणाली",
    "content": {
      "en": {
        "question": "<p>Match the <strong>LIST-I</strong> with <strong>LIST-II</strong></p><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><tr><th style='padding:8px;'>LIST-I (Cognitive domain level)</th><th style='padding:8px;'>LIST-II (Suggested word)</th></tr><tr><td style='padding:6px;'>A. Evaluation</td><td style='padding:6px;'>I. Define</td></tr><tr><td style='padding:6px;'>B. Knowledge</td><td style='padding:6px;'>II. Appraise</td></tr><tr><td style='padding:6px;'>C. Analysis</td><td style='padding:6px;'>III. Distinguish</td></tr><tr><td style='padding:6px;'>D. Application</td><td style='padding:6px;'>IV. Demonstrate</td></tr></table><br>Choose the <strong>correct</strong> answer from the options given below:",
        "options": [
          "A-II, B-I, C-III, D-IV",
          "A-I, B-II, C-III, D-IV",
          "A-II, B-I, C-IV, D-III",
          "A-I, B-II, C-IV, D-III"
        ],
        "explanation": "These action verbs represent levels in Bloom's Taxonomy of the Cognitive Domain:<br>• <strong>Knowledge (B-I):</strong> The lowest level, involves recalling facts. Action verb: <em>Define</em>, List, State.<br>• <strong>Application (D-IV):</strong> Using acquired knowledge in new situations. Action verb: <em>Demonstrate</em>, Apply, Solve.<br>• <strong>Analysis (C-III):</strong> Breaking information into parts. Action verb: <em>Distinguish</em>, Analyze, Compare.<br>• <strong>Evaluation (A-II):</strong> Making judgments about the value of ideas. Action verb: <em>Appraise</em>, Judge, Evaluate."
      },
      "hi": {
        "question": "<p><strong>सूची-I</strong> का <strong>सूची-II</strong> के साथ मिलान करें</p><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><tr><th style='padding:8px;'>सूची-I (संज्ञानात्मक डोमेन स्तर)</th><th style='padding:8px;'>सूची-II (सुझाया गया शब्द)</th></tr><tr><td style='padding:6px;'>A. मूल्यांकन (Evaluation)</td><td style='padding:6px;'>I. परिभाषित करना (Define)</td></tr><tr><td style='padding:6px;'>B. ज्ञान (Knowledge)</td><td style='padding:6px;'>II. आंकना (Appraise)</td></tr><tr><td style='padding:6px;'>C. विश्लेषण (Analysis)</td><td style='padding:6px;'>III. अंतर करना (Distinguish)</td></tr><tr><td style='padding:6px;'>D. अनुप्रयोग (Application)</td><td style='padding:6px;'>IV. प्रदर्शन करना (Demonstrate)</td></tr></table><br>नीचे दिए गए विकल्पों में से <strong>सही</strong> उत्तर चुनें:",
        "options": [
          "A-II, B-I, C-III, D-IV",
          "A-I, B-II, C-III, D-IV",
          "A-II, B-I, C-IV, D-III",
          "A-I, B-II, C-IV, D-III"
        ],
        "explanation": "ये क्रिया शब्द (action verbs) संज्ञानात्मक डोमेन के ब्लूम के वर्गीकरण (Bloom's Taxonomy) में स्तरों का प्रतिनिधित्व करते हैं:<br>• <strong>ज्ञान / Knowledge (B-I):</strong> सबसे निचला स्तर, जिसमें तथ्यों को याद करना शामिल है। क्रिया शब्द: <em>परिभाषित करना</em>, सूचीबद्ध करना।<br>• <strong>अनुप्रयोग / Application (D-IV):</strong> नई स्थितियों में प्राप्त ज्ञान का उपयोग करना। क्रिया शब्द: <em>प्रदर्शन करना</em>, लागू करना।<br>• <strong>विश्लेषण / Analysis (C-III):</strong> जानकारी को भागों में तोड़ना। क्रिया शब्द: <em>अंतर करना</em>, तुलना करना।<br>• <strong>मूल्यांकन / Evaluation (A-II):</strong> विचारों के मूल्य के बारे में निर्णय लेना। क्रिया शब्द: <em>आंकना (Appraise)</em>, न्याय करना, मूल्यांकन करना।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q32",
    "difficulty": "hard",
    "correct": 2,
    "unitEN": "Unit 6: Logical Reasoning",
    "unitHI": "इकाई 6: तार्किक विचार",
    "topicEN": "Structure of Categorical Propositions and Classical Square of Opposition",
    "topicHI": "श्रेणीबद्ध प्रस्तावों की संरचना और विरोध का शास्त्रीय वर्ग",
    "content": {
      "en": {
        "question": "Which of the following is logically equivalent to the statement- \"Some felines are not lions.\"?",
        "options": [
          "Some felines are lions.",
          "Some non-lions are not non-felines.",
          "Some lions are not felines.",
          "No-felines are lions."
        ],
        "explanation": "The given statement \"Some felines are not lions\" is an <strong>'O' type proposition</strong> (Some S is not P).<br>To find its logical equivalent, we apply the rule of <strong>Contraposition</strong>. <br>The contrapositive of an 'O' proposition (Some S is not P) is valid and takes the form: <strong>Some non-P are not non-S</strong>.<br>Here, S = felines, P = lions.<br>Applying the rule: \"Some non-lions are not non-felines.\" Therefore, Option 2 is logically equivalent."
      },
      "hi": {
        "question": "निम्नलिखित में से कौन सा तार्किक रूप से इस कथन के समतुल्य (logically equivalent) है- \"कुछ विडाल (felines) शेर नहीं हैं।\"?",
        "options": [
          "कुछ विडाल शेर हैं।",
          "कुछ गैर-शेर (non-lions) गैर-विडाल (non-felines) नहीं हैं।",
          "कुछ शेर विडाल नहीं हैं।",
          "कोई-विडाल शेर नहीं हैं।"
        ],
        "explanation": "दिया गया कथन \"कुछ विडाल शेर नहीं हैं\" एक <strong>'O' प्रकार का प्रस्ताव</strong> (कुछ S, P नहीं है) है।<br>इसके तार्किक समतुल्य को खोजने के लिए, हम <strong>प्रतिपरिवर्तन (Contraposition)</strong> का नियम लागू करते हैं।<br>एक 'O' प्रस्ताव का प्रतिपरिवर्तन (कुछ S, P नहीं है) वैध है और यह रूप लेता है: <strong>कुछ गैर-P गैर-S नहीं हैं</strong>।<br>यहाँ, S = विडाल (felines), P = शेर (lions)।<br>नियम लागू करने पर: \"कुछ गैर-शेर गैर-विडाल नहीं हैं।\" इसलिए, विकल्प 2 तार्किक रूप से समतुल्य है।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q33",
    "difficulty": "medium",
    "correct": 3,
    "unitEN": "Unit 6: Logical Reasoning",
    "unitHI": "इकाई 6: तार्किक विचार",
    "topicEN": "Classical Square of Opposition",
    "topicHI": "विरोध का शास्त्रीय वर्ग",
    "content": {
      "en": {
        "question": "Which of the following propositions are so related that if one of them is true, the other must be false, although they can both be false?<br><br>A. All novels are books.<br>B. Some novels are not books.<br>C. No novels are books.<br>D. Some novels are books.<br><br>Choose the correct answer from the options given below:",
        "options": [
          "B and D Only",
          "C and D Only",
          "A and C Only",
          "A and B Only"
        ],
        "explanation": "The rule \"If one is true, the other must be false, although they can both be false\" perfectly describes a <strong>Contrary relationship</strong> in the Classical Square of Opposition.<br>Contrary relations exist ONLY between Universal Affirmative (<strong>A</strong> type) and Universal Negative (<strong>E</strong> type) propositions.<br>Let's identify the types:<br>A (Type A): All novels are books.<br>C (Type E): No novels are books.<br>Therefore, statements A and C are contraries."
      },
      "hi": {
        "question": "निम्नलिखित में से कौन से प्रस्ताव इस प्रकार संबंधित हैं कि यदि उनमें से एक सत्य है, तो दूसरा असत्य होना चाहिए, हालांकि वे दोनों असत्य हो सकते हैं?<br><br>A. सभी उपन्यास किताबें हैं।<br>B. कुछ उपन्यास किताबें नहीं हैं।<br>C. कोई उपन्यास किताबें नहीं हैं।<br>D. कुछ उपन्यास किताबें हैं।<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "केवल B और D",
          "केवल C और D",
          "केवल A और C",
          "केवल A और B"
        ],
        "explanation": "नियम \"यदि एक सत्य है, तो दूसरा असत्य होना चाहिए, हालांकि वे दोनों असत्य हो सकते हैं\" विरोध के शास्त्रीय वर्ग (Classical Square of Opposition) में <strong>विपरीत संबंध (Contrary relationship)</strong> का पूरी तरह से वर्णन करता है।<br>विपरीत संबंध केवल सार्वभौमिक सकारात्मक (<strong>A</strong> प्रकार) और सार्वभौमिक नकारात्मक (<strong>E</strong> प्रकार) प्रस्तावों के बीच मौजूद होता है।<br>आइए प्रकारों की पहचान करें:<br>A (प्रकार A): सभी उपन्यास किताबें हैं।<br>C (प्रकार E): कोई उपन्यास किताबें नहीं हैं।<br>इसलिए, कथन A और C विपरीत (contraries) हैं।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q34",
    "difficulty": "hard",
    "correct": 4,
    "unitEN": "Unit 5: Mathematical Reasoning and Aptitude",
    "unitHI": "इकाई 5: गणितीय तर्क और अभिरुचि",
    "topicEN": "Number Series",
    "topicHI": "संख्या श्रृंखला",
    "content": {
      "en": {
        "question": "In the series given below if every digit is changed with the next number as per the number series and 9 will change to 0, then how many 9 are there in the new series?<br><br>4568793020010013478 4998",
        "options": [
          "2",
          "4",
          "1",
          "3"
        ],
        "explanation": "<strong>Step-by-step logic:</strong><br>The question states every digit is replaced by the next consecutive digit (e.g., 1 becomes 2, 4 becomes 5) and 9 becomes 0. <br>We need to find how many '9's will be in the <em>new</em> series.<br>A '9' in the new series will only come from an '8' in the original series (since 8 + 1 = 9).<br>So, we just need to count the number of '8's in the original series:<br>456<strong>8</strong>79302001001347<strong>8</strong> 499<strong>8</strong><br>As we can see, there are exactly three '8's. Thus, the new series will have three '9's."
      },
      "hi": {
        "question": "नीचे दी गई श्रृंखला में यदि प्रत्येक अंक को संख्या श्रृंखला के अनुसार अगले अंक से बदल दिया जाए और 9 को 0 में बदल दिया जाए, तो नई श्रृंखला में कितने 9 होंगे?<br><br>4568793020010013478 4998",
        "options": [
          "2",
          "4",
          "1",
          "3"
        ],
        "explanation": "<strong>चरण-दर-चरण तर्क:</strong><br>प्रश्न कहता है कि प्रत्येक अंक को अगले क्रमिक अंक से बदल दिया जाता है (जैसे, 1 बन जाता है 2, 4 बन जाता है 5) और 9 बन जाता है 0।<br>हमें यह पता लगाना है कि <em>नई</em> श्रृंखला में कितने '9' होंगे।<br>नई श्रृंखला में '9' केवल मूल श्रृंखला के '8' से आएगा (क्योंकि 8 + 1 = 9)।<br>इसलिए, हमें केवल मूल श्रृंखला में '8' की संख्या गिनने की आवश्यकता है:<br>456<strong>8</strong>79302001001347<strong>8</strong> 499<strong>8</strong><br>जैसा कि हम देख सकते हैं, यहाँ ठीक तीन '8' हैं। इस प्रकार, नई श्रृंखला में तीन '9' होंगे।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q35",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "Unit 7: Data Interpretation",
    "unitHI": "इकाई 7: डेटा व्याख्या",
    "topicEN": "Data Interpretation",
    "topicHI": "डेटा व्याख्या",
    "content": {
      "en": {
        "question": "<p>Match the <strong>LIST-I</strong> with <strong>LIST-II</strong></p><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><tr><th style='padding:8px;'>LIST-I (n= number of Trials; p= probability of Success)</th><th style='padding:8px;'>LIST-II (Mean of Binomial Distribution)</th></tr><tr><td style='padding:6px;'>A. n = 16, p = 0.8</td><td style='padding:6px;'>I. 9.1</td></tr><tr><td style='padding:6px;'>B. n = 21, p = 0.6</td><td style='padding:6px;'>II. 9.2</td></tr><tr><td style='padding:6px;'>C. n = 13, p = 0.7</td><td style='padding:6px;'>III. 12.8</td></tr><tr><td style='padding:6px;'>D. n = 23, p = 0.4</td><td style='padding:6px;'>IV. 12.6</td></tr></table><br>Choose the <strong>correct</strong> answer from the options given below:",
        "options": [
          "A-II, B-IV, C-I, D-III",
          "A-III, B-IV, C-I, D-II",
          "A-I, B-III, C-II, D-IV",
          "A-III, B-I, C-IV, D-II"
        ],
        "explanation": "The formula for the <strong>Mean of a Binomial Distribution</strong> is simply <strong>Mean = n × p</strong>.<br>Let's calculate for each option:<br>• A. n = 16, p = 0.8 => 16 × 0.8 = <strong>12.8</strong> (Matches III)<br>• B. n = 21, p = 0.6 => 21 × 0.6 = <strong>12.6</strong> (Matches IV)<br>• C. n = 13, p = 0.7 => 13 × 0.7 = <strong>9.1</strong> (Matches I)<br>• D. n = 23, p = 0.4 => 23 × 0.4 = <strong>9.2</strong> (Matches II)<br>Hence, A-III, B-IV, C-I, D-II is the correct matching."
      },
      "hi": {
        "question": "<p><strong>सूची-I</strong> का <strong>सूची-II</strong> के साथ मिलान करें</p><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><tr><th style='padding:8px;'>सूची-I (n= परीक्षणों की संख्या; p= सफलता की संभावना)</th><th style='padding:8px;'>सूची-II (द्विपद बंटन का माध्य / Mean of Binomial Distribution)</th></tr><tr><td style='padding:6px;'>A. n = 16, p = 0.8</td><td style='padding:6px;'>I. 9.1</td></tr><tr><td style='padding:6px;'>B. n = 21, p = 0.6</td><td style='padding:6px;'>II. 9.2</td></tr><tr><td style='padding:6px;'>C. n = 13, p = 0.7</td><td style='padding:6px;'>III. 12.8</td></tr><tr><td style='padding:6px;'>D. n = 23, p = 0.4</td><td style='padding:6px;'>IV. 12.6</td></tr></table><br>नीचे दिए गए विकल्पों में से <strong>सही</strong> उत्तर चुनें:",
        "options": [
          "A-II, B-IV, C-I, D-III",
          "A-III, B-IV, C-I, D-II",
          "A-I, B-III, C-II, D-IV",
          "A-III, B-I, C-IV, D-II"
        ],
        "explanation": "<strong>द्विपद बंटन के माध्य (Mean of a Binomial Distribution)</strong> का सूत्र केवल <strong>माध्य = n × p</strong> है।<br>आइए प्रत्येक विकल्प के लिए गणना करें:<br>• A. n = 16, p = 0.8 => 16 × 0.8 = <strong>12.8</strong> (III से मेल खाता है)<br>• B. n = 21, p = 0.6 => 21 × 0.6 = <strong>12.6</strong> (IV से मेल खाता है)<br>• C. n = 13, p = 0.7 => 13 × 0.7 = <strong>9.1</strong> (I से मेल खाता है)<br>• D. n = 23, p = 0.4 => 23 × 0.4 = <strong>9.2</strong> (II से मेल खाता है)<br>अतः, A-III, B-IV, C-I, D-II सही मिलान है।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q36",
    "difficulty": "medium",
    "correct": 3,
    "unitEN": "Unit 11: Miscellaneous",
    "unitHI": "इकाई 11: विविध",
    "topicEN": "Indian Cultural and Media Institutions",
    "topicHI": "भारतीय सांस्कृतिक और मीडिया संस्थान",
    "content": {
      "en": {
        "question": "<p>Match the <strong>LIST-I</strong> with <strong>LIST-II</strong></p><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><tr><th style='padding:8px;'>LIST-I (Cities)</th><th style='padding:8px;'>LIST-II (Institutes)</th></tr><tr><td style='padding:6px;'>A. New Delhi</td><td style='padding:6px;'>I. Bhartendu Natya Akademy</td></tr><tr><td style='padding:6px;'>B. Pune</td><td style='padding:6px;'>II. Asian Academy of Films &amp; T.V.</td></tr><tr><td style='padding:6px;'>C. Noida</td><td style='padding:6px;'>III. National Film Archive of India</td></tr><tr><td style='padding:6px;'>D. Lucknow</td><td style='padding:6px;'>IV. National School of Drama</td></tr></table><br>Choose the <strong>correct</strong> answer from the options given below:",
        "options": [
          "A-I, B-II, C-III, D-IV",
          "A-II, B-IV, C-I, D-III",
          "A-IV, B-III, C-II, D-I",
          "A-III, B-II, C-IV, D-I"
        ],
        "explanation": "<strong>Matching Media Institutes with Cities:</strong><br>• <strong>National School of Drama (NSD):</strong> One of the foremost theatre training institutions in the world, located in <strong>New Delhi (A-IV)</strong>.<br>• <strong>National Film Archive of India (NFAI):</strong> A premier film preservation body situated in <strong>Pune (B-III)</strong>.<br>• <strong>Asian Academy of Films & T.V. (AAFT):</strong> Located in Film City, <strong>Noida (C-II)</strong>.<br>• <strong>Bhartendu Natya Akademy (BNA):</strong> A prestigious theatre training institute established by the Department of Culture, UP, located in <strong>Lucknow (D-I)</strong>."
      },
      "hi": {
        "question": "<p><strong>सूची-I</strong> का <strong>सूची-II</strong> के साथ मिलान करें</p><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><tr><th style='padding:8px;'>सूची-I (शहर)</th><th style='padding:8px;'>सूची-II (संस्थान)</th></tr><tr><td style='padding:6px;'>A. नई दिल्ली</td><td style='padding:6px;'>I. भारतेंदु नाट्य अकादमी</td></tr><tr><td style='padding:6px;'>B. पुणे</td><td style='padding:6px;'>II. एशियन एकेडमी ऑफ फिल्म्स एंड टी.वी.</td></tr><tr><td style='padding:6px;'>C. नोएडा</td><td style='padding:6px;'>III. भारतीय राष्ट्रीय फिल्म अभिलेखागार (NFAI)</td></tr><tr><td style='padding:6px;'>D. लखनऊ</td><td style='padding:6px;'>IV. राष्ट्रीय नाट्य विद्यालय (NSD)</td></tr></table><br>नीचे दिए गए विकल्पों में से <strong>सही</strong> उत्तर चुनें:",
        "options": [
          "A-I, B-II, C-III, D-IV",
          "A-II, B-IV, C-I, D-III",
          "A-IV, B-III, C-II, D-I",
          "A-III, B-II, C-IV, D-I"
        ],
        "explanation": "<strong>मीडिया संस्थानों का शहरों के साथ मिलान:</strong><br>• <strong>राष्ट्रीय नाट्य विद्यालय (NSD):</strong> दुनिया के प्रमुख थिएटर प्रशिक्षण संस्थानों में से एक, <strong>नई दिल्ली (A-IV)</strong> में स्थित है।<br>• <strong>भारतीय राष्ट्रीय फिल्म अभिलेखागार (NFAI):</strong> <strong>पुणे (B-III)</strong> में स्थित एक प्रमुख फिल्म संरक्षण निकाय।<br>• <strong>एशियन एकेडमी ऑफ फिल्म्स एंड टी.वी. (AAFT):</strong> फिल्म सिटी, <strong>नोएडा (C-II)</strong> में स्थित है।<br>• <strong>भारतेंदु नाट्य अकादमी (BNA):</strong> संस्कृति विभाग, यूपी द्वारा स्थापित एक प्रतिष्ठित थिएटर प्रशिक्षण संस्थान, जो <strong>लखनऊ (D-I)</strong> में स्थित है।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q37",
    "difficulty": "easy",
    "correct": 2,
    "unitEN": "Unit 2: Research Aptitude",
    "unitHI": "इकाई 2: शोध अभिरुचि",
    "topicEN": "Methods of Research",
    "topicHI": "शोध की विधियाँ",
    "content": {
      "en": {
        "question": "What is a questionnaire?",
        "options": [
          "It is data analysis instrument.",
          "It is a data collection instrument.",
          "It is data comparing instrument.",
          "It is the analysis and result finding instrument."
        ],
        "explanation": "A <strong>Questionnaire</strong> is a primary <strong>data collection instrument</strong> consisting of a series of questions and other prompts for the purpose of gathering information from respondents. It is used in the data-gathering phase of research, NOT in the data analysis or result-finding phase (which involves statistical tools and software)."
      },
      "hi": {
        "question": "प्रश्नावली (questionnaire) क्या है?",
        "options": [
          "यह डेटा विश्लेषण उपकरण है।",
          "यह एक डेटा संग्रह उपकरण (data collection instrument) है।",
          "यह डेटा तुलना उपकरण है।",
          "यह विश्लेषण और परिणाम खोजने वाला उपकरण है।"
        ],
        "explanation": "<strong>प्रश्नावली (Questionnaire)</strong> एक प्राथमिक <strong>डेटा संग्रह उपकरण</strong> है जिसमें उत्तरदाताओं से जानकारी एकत्र करने के उद्देश्य से प्रश्नों और अन्य संकेतों की एक श्रृंखला होती है। इसका उपयोग शोध के डेटा-एकत्रीकरण चरण में किया जाता है, डेटा विश्लेषण या परिणाम-खोज चरण में नहीं (जिसमें सांख्यिकीय उपकरण और सॉफ़्टवेयर शामिल होते हैं)।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q38",
    "difficulty": "easy",
    "correct": 1,
    "unitEN": "Unit 1: Teaching Aptitude",
    "unitHI": "इकाई 1: शिक्षण अभिरुचि",
    "topicEN": "Learner's Characteristics",
    "topicHI": "शिक्षार्थी की विशेषताएँ",
    "content": {
      "en": {
        "question": "Which of the following is true regarding extrinsic motivation?",
        "options": [
          "It is based on factors not related to the activity itself.",
          "It is the natural tendency to seek out personal interests.",
          "It is the natural tendency to conquer challenges.",
          "It motivates to do something when we don't need to do."
        ],
        "explanation": "<strong>Extrinsic motivation</strong> refers to behavior that is driven by external rewards such as money, fame, grades, or praise. Thus, it is based on factors <em>outside</em> or <em>not related</em> to the activity itself. In contrast, <em>Intrinsic motivation</em> refers to doing an activity for its inherent satisfaction (e.g., natural tendency to seek personal interests or conquer challenges)."
      },
      "hi": {
        "question": "बाह्य अभिप्रेरणा (extrinsic motivation) के संबंध में निम्नलिखित में से कौन सा सत्य है?",
        "options": [
          "यह उन कारकों पर आधारित है जो गतिविधि से संबंधित नहीं हैं।",
          "यह व्यक्तिगत हितों की तलाश करने की स्वाभाविक प्रवृत्ति है।",
          "यह चुनौतियों पर विजय प्राप्त करने की स्वाभाविक प्रवृत्ति है।",
          "यह कुछ ऐसा करने के लिए प्रेरित करता है जिसकी हमें आवश्यकता नहीं है।"
        ],
        "explanation": "<strong>बाह्य अभिप्रेरणा (Extrinsic motivation)</strong> उस व्यवहार को संदर्भित करता है जो बाहरी पुरस्कारों जैसे पैसा, प्रसिद्धि, ग्रेड या प्रशंसा से प्रेरित होता है। इस प्रकार, यह गतिविधि के <em>बाहरी</em> या उससे <em>संबंधित नहीं</em> कारकों पर आधारित है। इसके विपरीत, <em>आंतरिक अभिप्रेरणा (Intrinsic motivation)</em> किसी गतिविधि को उसकी अंतर्निहित संतुष्टि के लिए करने को संदर्भित करता है (जैसे, व्यक्तिगत हितों की तलाश करने या चुनौतियों को जीतने की स्वाभाविक प्रवृत्ति)।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q39",
    "difficulty": "easy",
    "correct": 4,
    "unitEN": "Unit 8: Information and Communication Technology (ICT)",
    "unitHI": "इकाई 8: सूचना और संचार प्रौद्योगिकी (ICT)",
    "topicEN": "ICT General Terminology and Concepts",
    "topicHI": "ICT सामान्य शब्दावली और अवधारणाएँ",
    "content": {
      "en": {
        "question": "Which of the following is not an emerging technology?",
        "options": [
          "Artificial Intelligence",
          "Quantum cryptography",
          "3-D holographic imaging",
          "Computer based on vaccum tubes"
        ],
        "explanation": "An <strong>emerging technology</strong> is a new technology that is currently being developed, or will be developed over the next five to ten years (e.g., AI, Quantum computing, 3D holography). A <strong>computer based on vacuum tubes</strong> belongs to the First Generation of computers (1940s-1950s) and is completely obsolete today, hence it is NOT an emerging technology."
      },
      "hi": {
        "question": "निम्नलिखित में से कौन सी उभरती हुई तकनीक (emerging technology) नहीं है?",
        "options": [
          "आर्टिफिशियल इंटेलिजेंस (AI)",
          "क्वांटम क्रिप्टोग्राफी",
          "3-D होलोग्राफिक इमेजिंग",
          "वैक्यूम ट्यूब पर आधारित कंप्यूटर"
        ],
        "explanation": "एक <strong>उभरती हुई तकनीक (emerging technology)</strong> एक नई तकनीक है जो वर्तमान में विकसित की जा रही है, या अगले पांच से दस वर्षों में विकसित की जाएगी (जैसे, एआई, क्वांटम कंप्यूटिंग, 3डी होलोग्राफी)। एक <strong>वैक्यूम ट्यूब पर आधारित कंप्यूटर</strong> कंप्यूटर की पहली पीढ़ी (1940-1950 के दशक) से संबंधित है और आज पूरी तरह से अप्रचलित (obsolete) है, इसलिए यह एक उभरती हुई तकनीक नहीं है।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q40",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "Unit 9: People, Development and Environment",
    "unitHI": "इकाई 9: लोग, विकास और पर्यावरण",
    "topicEN": "Natural and Energy Resources",
    "topicHI": "प्राकृतिक और ऊर्जा संसाधन",
    "content": {
      "en": {
        "question": "Which of the following is correct increasing order of frequency of electromagnetic waves?<br><br>A. Light waves<br>B. Microwaves<br>C. Infrared waves<br>D. Radio waves<br><br>Choose the correct answer from the options given below:",
        "options": [
          "D, B, C, A",
          "A, B, C, D",
          "B, C, D, A",
          "D, A, B, C"
        ],
        "explanation": "The electromagnetic spectrum ordered by <strong>increasing frequency</strong> (and therefore decreasing wavelength) is:<br>1. <strong>Radio waves (D):</strong> Lowest frequency.<br>2. <strong>Microwaves (B):</strong> Higher frequency than radio.<br>3. <strong>Infrared waves (C):</strong> Just below visible light.<br>4. <strong>Visible Light waves (A):</strong> Higher frequency than infrared.<br>(Followed by UV, X-rays, and Gamma rays).<br>Therefore, the correct increasing order is D -> B -> C -> A."
      },
      "hi": {
        "question": "निम्नलिखित में से कौन सा विद्युत चुम्बकीय तरंगों (electromagnetic waves) की आवृत्ति (frequency) का सही बढ़ता हुआ क्रम है?<br><br>A. प्रकाश तरंगें (Light waves)<br>B. सूक्ष्म तरंगें (Microwaves)<br>C. अवरक्त तरंगें (Infrared waves)<br>D. रेडियो तरंगें (Radio waves)<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "D, B, C, A",
          "A, B, C, D",
          "B, C, D, A",
          "D, A, B, C"
        ],
        "explanation": "<strong>बढ़ती आवृत्ति</strong> (और इसलिए घटती तरंग दैर्ध्य) के आधार पर विद्युत चुम्बकीय स्पेक्ट्रम का क्रम है:<br>1. <strong>रेडियो तरंगें (D):</strong> सबसे कम आवृत्ति।<br>2. <strong>सूक्ष्म तरंगें / Microwaves (B):</strong> रेडियो से अधिक आवृत्ति।<br>3. <strong>अवरक्त तरंगें / Infrared (C):</strong> दृश्य प्रकाश से ठीक नीचे।<br>4. <strong>दृश्य प्रकाश तरंगें / Light waves (A):</strong> अवरक्त से अधिक आवृत्ति।<br>(इसके बाद UV, X-रे और गामा किरणें आती हैं)।<br>इसलिए, सही बढ़ता हुआ क्रम D -> B -> C -> A है।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q41",
    "difficulty": "easy",
    "correct": 4,
    "unitEN": "Unit 4: Communication",
    "unitHI": "इकाई 4: संचार",
    "topicEN": "Meaning, Types and Characteristics of Communication",
    "topicHI": "संचार का अर्थ, प्रकार और विशेषताएँ",
    "content": {
      "en": {
        "question": "What among the following is not a communication professional?",
        "options": [
          "Journalist",
          "Advertiser",
          "News-reader",
          "Smartphone"
        ],
        "explanation": "A <strong>Communication Professional</strong> is a human being who makes a career in fields involving the transfer of information to the public (e.g., Journalist, Advertiser, News-reader, PR officer). A <strong>Smartphone</strong> is a device/tool of communication, NOT a professional (person)."
      },
      "hi": {
        "question": "निम्नलिखित में से कौन एक संचार पेशेवर (communication professional) नहीं है?",
        "options": [
          "पत्रकार (Journalist)",
          "विज्ञापनदाता (Advertiser)",
          "न्यूज़-रीडर (News-reader)",
          "स्मार्टफोन (Smartphone)"
        ],
        "explanation": "एक <strong>संचार पेशेवर (Communication Professional)</strong> एक इंसान है जो जनता को सूचना हस्तांतरित करने से जुड़े क्षेत्रों में अपना करियर बनाता है (जैसे, पत्रकार, विज्ञापनदाता, न्यूज़-रीडर, पीआर अधिकारी)। <strong>स्मार्टफोन</strong> संचार का एक उपकरण (device/tool) है, कोई पेशेवर (व्यक्ति) नहीं।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q42",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "Unit 2: Research Aptitude",
    "unitHI": "इकाई 2: शोध अभिरुचि",
    "topicEN": "Steps of Research",
    "topicHI": "शोध के चरण",
    "content": {
      "en": {
        "question": "What is modeling approach of research design?",
        "options": [
          "The research problem is represented by a mathematical model. Solutions and conclusions are derived from that model.",
          "There is no research problem in this approach. Solutions and conclusions are derived from the objectives.",
          "The research problem is represented in the subjective manner. Solutions and conclusions are derived from the research questions.",
          "The research problem is represented in the objective manner. Solutions and conclusions are derived from the research methodology."
        ],
        "explanation": "In research methodology, the <strong>Modeling approach</strong> refers to simplifying and abstracting a real-world research problem into a formal <strong>mathematical or conceptual model</strong>. The researcher then manipulates this model, derives solutions mathematically or computationally, and draws conclusions about the real world based on how the model behaves."
      },
      "hi": {
        "question": "अनुसंधान डिजाइन (research design) का मॉडलिंग दृष्टिकोण (modeling approach) क्या है?",
        "options": [
          "शोध समस्या को गणितीय मॉडल द्वारा दर्शाया जाता है। समाधान और निष्कर्ष उस मॉडल से प्राप्त किए जाते हैं।",
          "इस दृष्टिकोण में कोई शोध समस्या नहीं है। समाधान और निष्कर्ष उद्देश्यों से प्राप्त किए जाते हैं।",
          "शोध समस्या को व्यक्तिपरक तरीके से दर्शाया जाता है। समाधान और निष्कर्ष शोध प्रश्नों से प्राप्त किए जाते हैं।",
          "शोध समस्या को वस्तुनिष्ठ तरीके से दर्शाया जाता है। समाधान और निष्कर्ष शोध पद्धति से प्राप्त किए जाते हैं।"
        ],
        "explanation": "अनुसंधान पद्धति में, <strong>मॉडलिंग दृष्टिकोण (Modeling approach)</strong> एक वास्तविक दुनिया की शोध समस्या को एक औपचारिक <strong>गणितीय या वैचारिक मॉडल</strong> में सरल बनाने और अमूर्त करने को संदर्भित करता है। फिर शोधकर्ता इस मॉडल में हेरफेर करता है, गणितीय या कम्प्यूटेशनल रूप से समाधान प्राप्त करता है, और मॉडल के व्यवहार के आधार पर वास्तविक दुनिया के बारे में निष्कर्ष निकालता है।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q43",
    "difficulty": "medium",
    "correct": 3,
    "unitEN": "Unit 1: Teaching Aptitude",
    "unitHI": "इकाई 1: शिक्षण अभिरुचि",
    "topicEN": "Evaluation Systems",
    "topicHI": "मूल्यांकन प्रणाली",
    "content": {
      "en": {
        "question": "Which of the following are the basic objectives of Affective Domain?<br><br>A. Showing some new behaviour as a result of experience.<br>B. Acting consistently with the new value.<br>C. Attending to something in the environment.<br>D. Showing some definite involvement or commitment.<br><br>Choose the correct answer from the options given below:",
        "options": [
          "A and B Only",
          "C and D Only",
          "A, B, C and D",
          "B and C Only"
        ],
        "explanation": "The <strong>Affective Domain</strong> (proposed by Krathwohl) deals with emotions, feelings, values, and attitudes. Its five levels are:<br>1. <strong>Receiving:</strong> Attending to something in the environment (Statement C).<br>2. <strong>Responding:</strong> Showing new behavior as a result of experience/active participation (Statement A).<br>3. <strong>Valuing:</strong> Showing definite involvement or commitment to a value (Statement D).<br>4. <strong>Organization:</strong> Comparing and organizing values.<br>5. <strong>Characterization:</strong> Acting consistently with the new internalized value (Statement B).<br>Thus, all statements A, B, C, and D are basic objectives of the Affective Domain."
      },
      "hi": {
        "question": "भावात्मक डोमेन (Affective Domain) के मूल उद्देश्य निम्नलिखित में से कौन से हैं?<br><br>A. अनुभव के परिणामस्वरूप कुछ नया व्यवहार दिखाना।<br>B. नए मूल्य के साथ लगातार कार्य करना।<br>C. पर्यावरण में किसी चीज़ पर ध्यान देना (Attending)।<br>D. कुछ निश्चित भागीदारी या प्रतिबद्धता दिखाना।<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "केवल A और B",
          "केवल C और D",
          "A, B, C और D",
          "केवल B और C"
        ],
        "explanation": "<strong>भावात्मक डोमेन (Affective Domain)</strong> (क्रैथवोहल द्वारा प्रस्तावित) भावनाओं, मूल्यों और दृष्टिकोण (attitudes) से संबंधित है। इसके पांच स्तर हैं:<br>1. <strong>प्राप्त करना (Receiving):</strong> पर्यावरण में किसी चीज़ पर ध्यान देना (कथन C)।<br>2. <strong>प्रतिक्रिया देना (Responding):</strong> अनुभव/सक्रिय भागीदारी के परिणामस्वरूप नया व्यवहार दिखाना (कथन A)।<br>3. <strong>मूल्यांकन (Valuing):</strong> किसी मूल्य के प्रति निश्चित भागीदारी या प्रतिबद्धता दिखाना (कथन D)।<br>4. <strong>संगठन (Organization):</strong> मूल्यों की तुलना और आयोजन करना।<br>5. <strong>चरित्रीकरण (Characterization):</strong> नए आंतरिक मूल्य के साथ लगातार कार्य करना (कथन B)।<br>इस प्रकार, सभी कथन A, B, C और D भावात्मक डोमेन के मूल उद्देश्य हैं।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q44",
    "difficulty": "medium",
    "correct": 3,
    "unitEN": "Unit 10: Higher Education System",
    "unitHI": "इकाई 10: उच्च शिक्षा प्रणाली",
    "topicEN": "Policies, Governance and Administration",
    "topicHI": "नीतियाँ, शासन और प्रशासन",
    "content": {
      "en": {
        "question": "In higher education, regulators perform the following functions:-<br><br>A. Permission to grant degrees<br>B. Selection of teaching faculty<br>C. Disbursement of public funds<br>D. Quality benchmarking<br><br>Choose the correct answer from the options given below:",
        "options": [
          "A, B and C Only",
          "D Only",
          "A, C and D Only",
          "A, B, C and D"
        ],
        "explanation": "In the Indian Higher Education System, Apex Regulatory bodies (like UGC, AICTE) perform macros-level administrative functions such as:<br>• Determining and maintaining standards/<strong>Quality benchmarking</strong> (D).<br>• Giving <strong>Permission to grant degrees</strong> / affiliation (A).<br>• Allocation and <strong>Disbursement of public funds</strong> / grants to universities (C).<br>However, the <strong>Selection of teaching faculty (B)</strong> is an internal micro-level management function performed by individual universities/colleges themselves, not directly by the regulators."
      },
      "hi": {
        "question": "उच्च शिक्षा में, नियामक (regulators) निम्नलिखित कार्य करते हैं:-<br><br>A. डिग्री प्रदान करने की अनुमति<br>B. शिक्षण संकाय (faculty) का चयन<br>C. सार्वजनिक धन का संवितरण (Disbursement)<br>D. गुणवत्ता बेंचमार्किंग<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "केवल A, B और C",
          "केवल D",
          "केवल A, C और D",
          "A, B, C और D"
        ],
        "explanation": "भारतीय उच्च शिक्षा प्रणाली में, शीर्ष नियामक निकाय (जैसे UGC, AICTE) मैक्रो-स्तरीय प्रशासनिक कार्य करते हैं जैसे:<br>• मानकों का निर्धारण और रखरखाव / <strong>गुणवत्ता बेंचमार्किंग</strong> (D)।<br>• मान्यता / <strong>डिग्री प्रदान करने की अनुमति</strong> देना (A)।<br>• विश्वविद्यालयों को <strong>सार्वजनिक धन / अनुदान का आवंटन और संवितरण</strong> (C)।<br>हालाँकि, <strong>शिक्षण संकाय (faculty) का चयन (B)</strong> एक आंतरिक सूक्ष्म-स्तरीय प्रबंधन कार्य है जो स्वयं व्यक्तिगत विश्वविद्यालयों/कॉलेजों द्वारा किया जाता है, न कि सीधे नियामकों द्वारा।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q45",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "Unit 9: People, Development and Environment",
    "unitHI": "इकाई 9: लोग, विकास और पर्यावरण",
    "topicEN": "Impacts of Pollutants on Human Health",
    "topicHI": "प्रदूषकों का मानव स्वास्थ्य पर प्रभाव",
    "content": {
      "en": {
        "question": "<p>Match the <strong>LIST-I</strong> with <strong>LIST-II</strong></p><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><tr><th style='padding:8px;'>LIST-I (Health related terms)</th><th style='padding:8px;'>LIST-II (Explanation)</th></tr><tr><td style='padding:6px;'>A. Toxicology</td><td style='padding:6px;'>I. Action taken to prevent environmental health hazard</td></tr><tr><td style='padding:6px;'>B. Exposure Assessment</td><td style='padding:6px;'>II. Evaluation of public risk of a hazard</td></tr><tr><td style='padding:6px;'>C. Risk Assessment</td><td style='padding:6px;'>III. Science of effect of toxic substances</td></tr><tr><td style='padding:6px;'>D. Risk Management</td><td style='padding:6px;'>IV. Estimation of impacts of environmental contaminants on humans</td></tr></table><br>Choose the <strong>correct</strong> answer from the options given below:",
        "options": [
          "A-III, B-IV, C-II, D-I",
          "A-III, B-IV, C-I, D-II",
          "A-I, B-II, C-III, D-IV",
          "A-II, B-III, C-IV, D-I"
        ],
        "explanation": "<strong>Matching Environmental Health terms:</strong><br>• <strong>Toxicology (A-III):</strong> The scientific study of adverse effects that occur in living organisms due to toxic substances (chemicals).<br>• <strong>Exposure Assessment (B-IV):</strong> The process of estimating or measuring the magnitude, frequency, and duration of exposure to environmental contaminants on human populations.<br>• <strong>Risk Assessment (C-II):</strong> The systematic evaluation of the potential public risk posed by a hazard.<br>• <strong>Risk Management (D-I):</strong> The physical actions/policies taken to control, mitigate, or prevent the identified environmental health hazard."
      },
      "hi": {
        "question": "<p><strong>सूची-I</strong> का <strong>सूची-II</strong> के साथ मिलान करें</p><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><tr><th style='padding:8px;'>सूची-I (स्वास्थ्य संबंधी शर्तें)</th><th style='padding:8px;'>सूची-II (स्पष्टीकरण)</th></tr><tr><td style='padding:6px;'>A. विषविज्ञान (Toxicology)</td><td style='padding:6px;'>I. पर्यावरणीय स्वास्थ्य जोखिम को रोकने के लिए की गई कार्रवाई</td></tr><tr><td style='padding:6px;'>B. एक्सपोजर मूल्यांकन</td><td style='padding:6px;'>II. किसी खतरे के सार्वजनिक जोखिम का मूल्यांकन</td></tr><tr><td style='padding:6px;'>C. जोखिम मूल्यांकन</td><td style='padding:6px;'>III. विषाक्त पदार्थों के प्रभाव का विज्ञान</td></tr><tr><td style='padding:6px;'>D. जोखिम प्रबंधन</td><td style='padding:6px;'>IV. मनुष्यों पर पर्यावरणीय प्रदूषकों के प्रभाव का अनुमान</td></tr></table><br>नीचे दिए गए विकल्पों में से <strong>सही</strong> उत्तर चुनें:",
        "options": [
          "A-III, B-IV, C-II, D-I",
          "A-III, B-IV, C-I, D-II",
          "A-I, B-II, C-III, D-IV",
          "A-II, B-III, C-IV, D-I"
        ],
        "explanation": "<strong>पर्यावरणीय स्वास्थ्य शर्तों का मिलान:</strong><br>• <strong>विषविज्ञान (Toxicology) (A-III):</strong> विषाक्त पदार्थों (रसायनों) के कारण जीवों में होने वाले प्रतिकूल प्रभावों का वैज्ञानिक अध्ययन।<br>• <strong>एक्सपोजर मूल्यांकन (B-IV):</strong> मानव आबादी पर पर्यावरणीय प्रदूषकों के संपर्क के परिमाण, आवृत्ति और अवधि का अनुमान लगाने या मापने की प्रक्रिया।<br>• <strong>जोखिम मूल्यांकन (Risk Assessment) (C-II):</strong> किसी खतरे द्वारा उत्पन्न संभावित सार्वजनिक जोखिम का व्यवस्थित मूल्यांकन।<br>• <strong>जोखिम प्रबंधन (Risk Management) (D-I):</strong> पहचाने गए पर्यावरणीय स्वास्थ्य जोखिम को नियंत्रित करने, कम करने या रोकने के लिए की गई भौतिक कार्रवाई/नीतियां।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q46",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "Unit 3: Comprehension",
    "unitHI": "इकाई 3: बोध",
    "topicEN": "Reading Comprehension",
    "topicHI": "पठन बोध",
    "content": {
      "en": {
        "question": passageHTML(PASSAGE_JUNE25_S1_P1.en) + "<br><br><strong>Question:</strong><br> The findings of the new study suggested that education may make people more interested in ________.",
        "options": [
          "taking active part in politics",
          "improving their own lives",
          "changing their social attitudes",
          "getting socialised"
        ],
        "explanation": "This is a direct factual question from the passage. In the second paragraph, the author clearly states: <em>\"Findings suggested that education may make people more interested in <strong>improving their own lives</strong> but they may not necessarily see democracy as the way to do it.\"</em>"
      },
      "hi": {
        "question": passageHTML(PASSAGE_JUNE25_S1_P1.hi) + "<br><br><strong>प्रश्न:</strong><br> नए अध्ययन के निष्कर्षों ने सुझाव दिया कि शिक्षा लोगों को ________ में अधिक रूचि लेने वाला बना सकती है।",
        "options": [
          "राजनीति में सक्रिय भाग लेने",
          "अपने जीवन को बेहतर बनाने",
          "अपने सामाजिक दृष्टिकोण को बदलने",
          "सामाजिक होने"
        ],
        "explanation": "यह गद्यांश से एक प्रत्यक्ष तथ्यात्मक प्रश्न है। दूसरे पैराग्राफ में, लेखक स्पष्ट रूप से कहता है: <em>\"निष्कर्षों ने सुझाव दिया कि शिक्षा लोगों को <strong>अपने जीवन को बेहतर बनाने</strong> में अधिक रूचि लेने वाला बना सकती है, लेकिन जरूरी नहीं कि वे लोकतंत्र को ऐसा करने के तरीके के रूप में देखें।\"</em>"
      }
    }
  },
  {
    "id": "june25-s1-p1-q47",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "Unit 3: Comprehension",
    "unitHI": "इकाई 3: बोध",
    "topicEN": "Reading Comprehension",
    "topicHI": "पठन बोध",
    "content": {
      "en": {
        "question": passageHTML(PASSAGE_JUNE25_S1_P1.en) + "<br><br><strong>Question:</strong><br> Which of the following is true about China in the context of the passage?",
        "options": [
          "China's citizens want a more representative form of government",
          "China has made huge strides in infrastructure development",
          "China passes through a great political transformation",
          "Based on the progress it has made, China will not entertain any kind of political reform"
        ],
        "explanation": "In the final paragraph, the author mentions China as an example of an authoritarian regime that builds infrastructure rapidly: <em>\"...deal strongly with the corrupt and build highways, railway lines and bridges at a dizzying pace of authoritarian China.\"</em> This implies that China has made huge strides in infrastructure development (building highways, railways, bridges rapidly)."
      },
      "hi": {
        "question": passageHTML(PASSAGE_JUNE25_S1_P1.hi) + "<br><br><strong>प्रश्न:</strong><br> गद्यांश के संदर्भ में चीन के बारे में निम्नलिखित में से कौन सा सत्य है?",
        "options": [
          "चीन के नागरिक सरकार का अधिक प्रतिनिधि रूप चाहते हैं",
          "चीन ने बुनियादी ढांचे के विकास में काफी प्रगति की है",
          "चीन एक महान राजनीतिक परिवर्तन से गुजरता है",
          "इसने जो प्रगति की है, उसके आधार पर चीन किसी भी तरह के राजनीतिक सुधार पर विचार नहीं करेगा"
        ],
        "explanation": "अंतिम पैराग्राफ में, लेखक चीन का उल्लेख एक सत्तावादी शासन के उदाहरण के रूप में करता है जो बुनियादी ढांचे का तेजी से निर्माण करता है: <em>\"...भ्रष्टाचारियों से सख्ती से निपटे और सत्तावादी चीन की तरह तेज गति से राजमार्गों, रेलवे लाइनों और पुलों का निर्माण करे।\"</em> इसका तात्पर्य यह है कि चीन ने बुनियादी ढांचे के विकास (राजमार्गों, रेलवे, पुलों का तेजी से निर्माण) में काफी प्रगति की है।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q48",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "Unit 3: Comprehension",
    "unitHI": "इकाई 3: बोध",
    "topicEN": "Reading Comprehension",
    "topicHI": "पठन बोध",
    "content": {
      "en": {
        "question": passageHTML(PASSAGE_JUNE25_S1_P1.en) + "<br><br><strong>Question:</strong><br> The phrase 'messiness of democracy' used in the passage is referred to ______.",
        "options": [
          "Educated electorates participate less in casting their votes leading to poor representation of right people in the government.",
          "Democratic countries witness violent revolt among their citizens.",
          "The gulf between poor and educated is increasing.",
          "Corrupt politicians are more interested in dividing the people for retaining the power."
        ],
        "explanation": "The passage contrasts the voting behavior of the poor/less educated with the educated class. It states: <em>\"Poorer and less educated people often vote in larger numbers than their more educated compatriots, who often express disdain for the messiness of democracy...\"</em> This context directly implies that educated electorates disdain the system and thus participate less in voting (casting their votes), which is why poorer people vote in relatively larger numbers."
      },
      "hi": {
        "question": passageHTML(PASSAGE_JUNE25_S1_P1.hi) + "<br><br><strong>प्रश्न:</strong><br> गद्यांश में प्रयुक्त 'लोकतंत्र की अव्यवस्था (messiness of democracy)' वाक्यांश किसको संदर्भित करता है?",
        "options": [
          "शिक्षित मतदाता अपना वोट डालने में कम भाग लेते हैं जिससे सरकार में सही लोगों का प्रतिनिधित्व कम होता है।",
          "लोकतांत्रिक देश अपने नागरिकों के बीच हिंसक विद्रोह देखते हैं।",
          "गरीब और शिक्षित के बीच की खाई बढ़ रही है।",
          "भ्रष्ट राजनेता सत्ता बनाए रखने के लिए लोगों को विभाजित करने में अधिक रुचि रखते हैं।"
        ],
        "explanation": "गद्यांश गरीब/कम शिक्षित लोगों के मतदान व्यवहार की तुलना शिक्षित वर्ग से करता है। इसमें कहा गया है: <em>\"गरीब और कम शिक्षित लोग अक्सर अपने अधिक शिक्षित हमवतन लोगों की तुलना में बड़ी संख्या में मतदान करते हैं, जो अक्सर लोकतंत्र की अव्यवस्था के प्रति तिरस्कार व्यक्त करते हैं...\"</em> यह संदर्भ सीधे तौर पर दर्शाता है कि शिक्षित मतदाता व्यवस्था का तिरस्कार करते हैं और इस प्रकार मतदान (वोट डालने) में कम भाग लेते हैं, यही कारण है कि गरीब लोग अपेक्षाकृत बड़ी संख्या में मतदान करते हैं।"
      }
    }
  },
  {
    "id": "june25-s1-p1-q49",
    "difficulty": "medium",
    "correct": 3,
    "unitEN": "Unit 3: Comprehension",
    "unitHI": "इकाई 3: बोध",
    "topicEN": "Reading Comprehension",
    "topicHI": "पठन बोध",
    "content": {
      "en": {
        "question": passageHTML(PASSAGE_JUNE25_S1_P1.en) + "<br><br><strong>Question:</strong><br> According to previous study, what led to higher test scores among girl students?",
        "options": [
          "Remedial classes",
          "Personalised attention",
          "Scholarship programme",
          "Counselling session"
        ],
        "explanation": "This is a direct factual question from the first paragraph. The author writes: <em>\"Previous studies had shown that the <strong>scholarship programme</strong> led to higher test scores and increased the likelihood that girls enrolled in secondary school.\"</em>"
      },
      "hi": {
        "question": passageHTML(PASSAGE_JUNE25_S1_P1.hi) + "<br><br><strong>प्रश्न:</strong><br> पिछले अध्ययन के अनुसार, छात्राओं के बीच उच्च परीक्षण स्कोर (test scores) का कारण क्या था?",
        "options": [
          "उपचारात्मक कक्षाएं (Remedial classes)",
          "व्यक्तिगत ध्यान",
          "छात्रवृत्ति कार्यक्रम (Scholarship programme)",
          "परामर्श सत्र (Counselling session)"
        ],
        "explanation": "यह पहले पैराग्राफ से एक प्रत्यक्ष तथ्यात्मक प्रश्न है। लेखक लिखता है: <em>\"पिछले अध्ययनों से पता चला था कि <strong>छात्रवृत्ति कार्यक्रम</strong> के कारण परीक्षण स्कोर उच्च हुए और लड़कियों के माध्यमिक विद्यालय में दाखिला लेने की संभावना बढ़ गई।\"</em>"
      }
    }
  },
  {
    "id": "june25-s1-p1-q50",
    "difficulty": "medium",
    "correct": 4,
    "unitEN": "Unit 3: Comprehension",
    "unitHI": "इकाई 3: बोध",
    "topicEN": "Reading Comprehension",
    "topicHI": "पठन बोध",
    "content": {
      "en": {
        "question": passageHTML(PASSAGE_JUNE25_S1_P1.en) + "<br><br><strong>Question:</strong><br> The NBER paper selected girl-students as sample through ________ sampling technique.",
        "options": [
          "Purposive",
          "Snowball",
          "Quota",
          "Random"
        ],
        "explanation": "In the first paragraph, the passage mentions the methodology used in the study: <em>\"...compared a group of Kenyan girls in 69 primary schools whose students were <strong>randomly selected</strong> to receive a scholarship...\"</em> This clearly indicates the use of the Random sampling technique."
      },
      "hi": {
        "question": passageHTML(PASSAGE_JUNE25_S1_P1.hi) + "<br><br><strong>प्रश्न:</strong><br> NBER पेपर ने ________ नमूनाकरण (sampling) तकनीक के माध्यम से छात्राओं को नमूने (sample) के रूप में चुना।",
        "options": [
          "सउद्देश्य (Purposive)",
          "स्नोबॉल (Snowball)",
          "कोटा (Quota)",
          "यादृच्छिक (Random)"
        ],
        "explanation": "पहले पैराग्राफ में, गद्यांश अध्ययन में प्रयुक्त पद्धति का उल्लेख करता है: <em>\"...69 प्राथमिक स्कूलों में केन्याई लड़कियों के एक समूह की तुलना की, जिनके छात्रों को छात्रवृत्ति प्राप्त करने के लिए <strong>यादृच्छिक (randomly)</strong> रूप से चुना गया था...\"</em> यह स्पष्ट रूप से यादृच्छिक (Random) नमूनाकरण तकनीक के उपयोग को इंगित करता है।"
      }
    }
  }
];

/* ══════════════════════════════════════════════════════════════════════
   🚀 MASTER REPAIR PATCH: JUNE 2025 (OPTIONS FIX + DI SPACING FIX)
══════════════════════════════════════════════════════════════════════ */
if (typeof TEST_JUNE25_S1_P1 !== 'undefined') {
  TEST_JUNE25_S1_P1.forEach(q => {
    
    // 1. OPTIONS FIX: 1-based indexing ko 0-based indexing me badalna
    // (Taaki Option 4 wale undefined na ho)
    if (q.correct === 1 || q.correct === 2 || q.correct === 3 || q.correct === 4) {
      q.correct = q.correct - 1;
    }
    
    // 2. DI SPACING FIX: Q1 se Q5 me chhuphe hue 'Enter' (\n) ko mitana
    // (Taaki index.html unhe <br> banakar faaltu gap na de)
    const qNum = parseInt(q.id.split('-q')[1]);
    if (qNum <= 5) {
      if (q.content.en && q.content.en.question) {
        q.content.en.question = q.content.en.question.replace(/\n/g, '');
      }
      if (q.content.hi && q.content.hi.question) {
        q.content.hi.question = q.content.hi.question.replace(/\n/g, '');
      }
    }
   
  });
}

const TEST_JAN25_27_S2_P1 = [
  {
    "id": "jan25-27-s2-p1-q01",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "Unit 7: Data Interpretation",
    "unitHI": "इकाई 7: आंकड़ों की व्याख्या",
    "topicEN": "Table Chart",
    "topicHI": "तालिका चार्ट",
    "content": {
      "en": {
        "question": TABLE_JAN25_27_S2_P1.en + "<br><br><strong>Question:</strong><br> Number of votes cast in villages A and B together is _______% of the number of valid votes cast in village D.",
        "options": ["262.5", "225", "137.5", "175"],
        "explanation": "<strong>Step-by-step Calculation:</strong><br>1. <strong>Votes cast in A:</strong> 75% of 18,000 = (75/100) × 18,000 = 13,500.<br>2. <strong>Votes cast in B:</strong> 80% of 22,500 = (80/100) × 22,500 = 18,000.<br>3. <strong>Total votes cast in A and B together:</strong> 13,500 + 18,000 = 31,500.<br>4. <strong>Votes cast in D:</strong> 80% of 25,000 = 20,000. Now, Valid votes in D = 60% of 20,000 = 12,000.<br>5. <strong>Percentage required:</strong> (31,500 / 12,000) × 100 = 2.625 × 100 = <strong>262.5%</strong>."
      },
      "hi": {
        "question": TABLE_JAN25_27_S2_P1.hi + "<br><br><strong>प्रश्न:</strong><br> गाँव A और B में डाले गए वोटों की संख्या गाँव D में डाले गए वैध वोटों की संख्या का _______% है।",
        "options": ["262.5", "225", "137.5", "175"],
        "explanation": "<strong>चरण-दर-चरण गणना:</strong><br>1. <strong>A में डाले गए मत:</strong> 18,000 का 75% = (75/100) × 18,000 = 13,500।<br>2. <strong>B में डाले गए मत:</strong> 22,500 का 80% = (80/100) × 22,500 = 18,000।<br>3. <strong>A और B में कुल डाले गए मत:</strong> 13,500 + 18,000 = 31,500।<br>4. <strong>D में डाले गए मत:</strong> 25,000 का 80% = 20,000। अब, D में वैध मत = 20,000 का 60% = 12,000।<br>5. <strong>आवश्यक प्रतिशत:</strong> (31,500 / 12,000) × 100 = 2.625 × 100 = <strong>262.5%</strong>।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q02",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "Unit 7: Data Interpretation",
    "unitHI": "इकाई 7: आंकड़ों की व्याख्या",
    "topicEN": "Table Chart",
    "topicHI": "तालिका चार्ट",
    "content": {
      "en": {
        "question": TABLE_JAN25_27_S2_P1.en + "<br><br><strong>Question:</strong><br> Total number of invalid votes cast in villages D and E together is _______ less than the number of votes cast in village C.",
        "options": ["750", "1500", "500", "1250"],
        "explanation": "<strong>Step-by-step Calculation:</strong><br>1. <strong>Village D:</strong> Votes cast = 80% of 25,000 = 20,000. Valid votes = 60% of 20,000 = 12,000. Therefore, Invalid votes = 20,000 - 12,000 = <strong>8,000</strong>.<br>2. <strong>Village E:</strong> Votes cast = 60% of 12,500 = 7,500. Valid votes = 80% of 7,500 = 6,000. Therefore, Invalid votes = 7,500 - 6,000 = <strong>1,500</strong>.<br>3. Total invalid votes in D and E = 8,000 + 1,500 = <strong>9,500</strong>.<br>4. <strong>Village C:</strong> Votes cast = 50% of 20,000 = <strong>10,000</strong>.<br>5. <strong>Difference:</strong> 10,000 - 9,500 = <strong>500</strong>."
      },
      "hi": {
        "question": TABLE_JAN25_27_S2_P1.hi + "<br><br><strong>प्रश्न:</strong><br> गाँव D और E में डाले गए अवैध मतों की कुल संख्या गाँव C में डाले गए मतों की संख्या से _______ कम है।",
        "options": ["750", "1500", "500", "1250"],
        "explanation": "<strong>चरण-दर-चरण गणना:</strong><br>1. <strong>गाँव D:</strong> डाले गए मत = 25,000 का 80% = 20,000। वैध मत = 20,000 का 60% = 12,000। इसलिए, अवैध मत = 20,000 - 12,000 = <strong>8,000</strong>।<br>2. <strong>गाँव E:</strong> डाले गए मत = 12,500 का 60% = 7,500। वैध मत = 7,500 का 80% = 6,000। इसलिए, अवैध मत = 7,500 - 6,000 = <strong>1,500</strong>।<br>3. D और E में कुल अवैध मत = 8,000 + 1,500 = <strong>9,500</strong>।<br>4. <strong>गाँव C:</strong> डाले गए मत = 20,000 का 50% = <strong>10,000</strong>।<br>5. <strong>अंतर:</strong> 10,000 - 9,500 = <strong>500</strong>।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q03",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "Unit 7: Data Interpretation",
    "unitHI": "इकाई 7: आंकड़ों की व्याख्या",
    "topicEN": "Table Chart",
    "topicHI": "तालिका चार्ट",
    "content": {
      "en": {
        "question": TABLE_JAN25_27_S2_P1.en + "<br><br><strong>Question:</strong><br> What is the number of invalid votes of villages A and D together?",
        "options": ["7700", "9350", "7000", "7600"],
        "explanation": "<strong>Step-by-step Calculation:</strong><br>1. <strong>Village A:</strong> Votes cast = 75% of 18,000 = 13,500. Valid votes = 90% of 13,500 = 12,150. Invalid votes = 13,500 - 12,150 = <strong>1,350</strong>.<br>2. <strong>Village D:</strong> Votes cast = 80% of 25,000 = 20,000. Valid votes = 60% of 20,000 = 12,000. Invalid votes = 20,000 - 12,000 = <strong>8,000</strong>.<br>3. <strong>Total Invalid Votes (A + D):</strong> 1,350 + 8,000 = <strong>9,350</strong>."
      },
      "hi": {
        "question": TABLE_JAN25_27_S2_P1.hi + "<br><br><strong>प्रश्न:</strong><br> गाँव A और D को मिलाकर अवैध वोटों की संख्या कितनी है?",
        "options": ["7700", "9350", "7000", "7600"],
        "explanation": "<strong>चरण-दर-चरण गणना:</strong><br>1. <strong>गाँव A:</strong> डाले गए मत = 18,000 का 75% = 13,500। वैध मत = 13,500 का 90% = 12,150। अवैध मत = 13,500 - 12,150 = <strong>1,350</strong>।<br>2. <strong>गाँव D:</strong> डाले गए मत = 25,000 का 80% = 20,000। वैध मत = 20,000 का 60% = 12,000। अवैध मत = 20,000 - 12,000 = <strong>8,000</strong>।<br>3. <strong>कुल अवैध मत (A + D):</strong> 1,350 + 8,000 = <strong>9,350</strong>।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q04",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "Unit 7: Data Interpretation",
    "unitHI": "इकाई 7: आंकड़ों की व्याख्या",
    "topicEN": "Table Chart",
    "topicHI": "तालिका चार्ट",
    "content": {
      "en": {
        "question": TABLE_JAN25_27_S2_P1.en + "<br><br><strong>Question:</strong><br> Number of valid votes cast in villages A and C together is approximately _______ % less than the number of votes cast in villages D and E together.",
        "options": ["45.7", "36.6", "19.5", "28.5"],
        "explanation": "<strong>Step-by-step Calculation:</strong><br>1. <strong>Valid votes in A:</strong> 13,500 (cast) × 90% = 12,150.<br>2. <strong>Valid votes in C:</strong> 50% of 20,000 = 10,000 (cast). Valid = 100% of 10,000 = 10,000.<br>3. Total valid (A + C) = 12,150 + 10,000 = <strong>22,150</strong>.<br><br>4. <strong>Votes cast in D:</strong> 80% of 25,000 = 20,000.<br>5. <strong>Votes cast in E:</strong> 60% of 12,500 = 7,500.<br>6. Total cast (D + E) = 20,000 + 7,500 = <strong>27,500</strong>.<br><br>7. <strong>Difference:</strong> 27,500 - 22,150 = 5,350.<br>8. <strong>Percentage Less:</strong> (5,350 / 27,500) × 100 = 19.45% ≈ <strong>19.5%</strong>."
      },
      "hi": {
        "question": TABLE_JAN25_27_S2_P1.hi + "<br><br><strong>प्रश्न:</strong><br> गाँव A और C में मिलाकर डाले गए वैध मतों की संख्या गाँव D और E में मिलाकर डाले गए मतों की संख्या से लगभग _______% कम है।",
        "options": ["45.7", "36.6", "19.5", "28.5"],
        "explanation": "<strong>चरण-दर-चरण गणना:</strong><br>1. <strong>A में वैध मत:</strong> 13,500 (डाले गए) × 90% = 12,150।<br>2. <strong>C में वैध मत:</strong> 20,000 का 50% = 10,000 (डाले गए)। वैध = 10,000 का 100% = 10,000।<br>3. कुल वैध (A + C) = 12,150 + 10,000 = <strong>22,150</strong>।<br><br>4. <strong>D में डाले गए मत:</strong> 25,000 का 80% = 20,000।<br>5. <strong>E में डाले गए मत:</strong> 12,500 का 60% = 7,500।<br>6. कुल डाले गए मत (D + E) = 20,000 + 7,500 = <strong>27,500</strong>।<br><br>7. <strong>अंतर:</strong> 27,500 - 22,150 = 5,350।<br>8. <strong>कम प्रतिशत:</strong> (5,350 / 27,500) × 100 = 19.45% ≈ <strong>19.5%</strong>।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q05",
    "difficulty": "medium",
    "correct": 3,
    "unitEN": "Unit 7: Data Interpretation",
    "unitHI": "इकाई 7: आंकड़ों की व्याख्या",
    "topicEN": "Table Chart",
    "topicHI": "तालिका चार्ट",
    "content": {
      "en": {
        "question": TABLE_JAN25_27_S2_P1.en + "<br><br><strong>Question:</strong><br> What is the average of the number of valid votes cast in village B, D, and E together?",
        "options": ["7500", "9000", "8000", "10500"],
        "explanation": "<strong>Step-by-step Calculation:</strong><br>1. <strong>Valid votes in B:</strong> 22,500 × 80% = 18,000 (cast). Valid = 18,000 × 75% = <strong>13,500</strong>.<br>2. <strong>Valid votes in D:</strong> 25,000 × 80% = 20,000 (cast). Valid = 20,000 × 60% = <strong>12,000</strong>.<br>3. <strong>Valid votes in E:</strong> 12,500 × 60% = 7,500 (cast). Valid = 7,500 × 80% = <strong>6,000</strong>.<br>4. <strong>Total Valid (B + D + E):</strong> 13,500 + 12,000 + 6,000 = <strong>31,500</strong>.<br>5. <strong>Average:</strong> 31,500 / 3 = <strong>10,500</strong>."
      },
      "hi": {
        "question": TABLE_JAN25_27_S2_P1.hi + "<br><br><strong>प्रश्न:</strong><br> गाँव B, D और E में डाले गए वैध मतों की संख्या का औसत क्या है?",
        "options": ["7500", "9000", "8000", "10500"],
        "explanation": "<strong>चरण-दर-चरण गणना:</strong><br>1. <strong>B में वैध मत:</strong> 22,500 × 80% = 18,000 (डाले गए)। वैध = 18,000 × 75% = <strong>13,500</strong>।<br>2. <strong>D में वैध मत:</strong> 25,000 × 80% = 20,000 (डाले गए)। वैध = 20,000 × 60% = <strong>12,000</strong>।<br>3. <strong>E में वैध मत:</strong> 12,500 × 60% = 7,500 (डाले गए)। वैध = 7,500 × 80% = <strong>6,000</strong>।<br>4. <strong>कुल वैध (B + D + E):</strong> 13,500 + 12,000 + 6,000 = <strong>31,500</strong>।<br>5. <strong>औसत:</strong> 31,500 / 3 = <strong>10,500</strong>।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q06",
    "difficulty": "medium",
    "correct": 3,
    "unitEN": "Unit 10: Higher Education System",
    "unitHI": "इकाई 10: उच्च शिक्षा प्रणाली",
    "topicEN": "Evolution of Higher Learning in Post-Independence India",
    "topicHI": "स्वतंत्रता के बाद भारत में उच्च शिक्षा का विकास",
    "content": {
      "en": {
        "question": "Arrange the following chronologically:<br><br>(A) National Commission on Teachers<br>(B) Acharya Ramamurti Committee<br>(C) Yashpal Committee - Learning without Burden<br>(D) Committee on Differentiation of Curricula for Boys and Girls<br>(E) National Policy on Education<br><br>Choose the correct answer from the options given below:",
        "options": [
          "(B), (C), (D), (A), (E)",
          "(E), (C), (B), (D), (A)",
          "(C), (D), (A), (E), (B)",
          "(D), (A), (E), (B), (C)"
        ],
        "explanation": "<strong>Chronological Sequence of Education Committees:</strong><br>• <strong>(D) Committee on Differentiation of Curricula for Boys and Girls (Hansa Mehta Committee):</strong> Established in <strong>1962</strong>.<br>• <strong>(A) National Commission on Teachers (Chattopadhyaya Commission):</strong> Set up in <strong>1983</strong>.<br>• <strong>(E) National Policy on Education (NPE):</strong> Formulated primarily in <strong>1986</strong>.<br>• <strong>(B) Acharya Ramamurti Committee:</strong> Appointed to review NPE 1986 in <strong>1990</strong>.<br>• <strong>(C) Yashpal Committee (Learning without Burden):</strong> Submitted its report in <strong>1993</strong>.<br>Correct Order: D -> A -> E -> B -> C."
      },
      "hi": {
        "question": "निम्नलिखित को कालानुक्रमिक रूप से व्यवस्थित करें:<br><br>(A) राष्ट्रीय शिक्षक आयोग<br>(B) आचार्य रामूर्ति समिति<br>(C) यशपाल समिति - बिना बोझ के सीखना<br>(D) लड़के और लड़कियों के लिए पाठ्यक्रम में विभेदीकरण पर समिति<br>(E) राष्ट्रीय शिक्षा नीति<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "(B), (C), (D), (A), (E)",
          "(E), (C), (B), (D), (A)",
          "(C), (D), (A), (E), (B)",
          "(D), (A), (E), (B), (C)"
        ],
        "explanation": "<strong>शिक्षा समितियों का कालानुक्रमिक क्रम:</strong><br>• <strong>(D) लड़के और लड़कियों के लिए पाठ्यक्रम में विभेदीकरण पर समिति (हंसा मेहता समिति):</strong> <strong>1962</strong> में स्थापित।<br>• <strong>(A) राष्ट्रीय शिक्षक आयोग (चट्टोपाध्याय आयोग):</strong> <strong>1983</strong> में स्थापित।<br>• <strong>(E) राष्ट्रीय शिक्षा नीति (NPE):</strong> मुख्य रूप से <strong>1986</strong> में तैयार की गई।<br>• <strong>(B) आचार्य राममूर्ति समिति:</strong> <strong>1990</strong> में NPE 1986 की समीक्षा के लिए नियुक्त की गई।<br>• <strong>(C) यशपाल समिति (बिना बोझ के सीखना):</strong> अपनी रिपोर्ट <strong>1993</strong> में प्रस्तुत की।<br>सही क्रम: D -> A -> E -> B -> C."
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q07",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "Unit 2: Research Aptitude",
    "unitHI": "इकाई 2: शोध अभिरुचि",
    "topicEN": "Steps of Research",
    "topicHI": "शोध के चरण",
    "content": {
      "en": {
        "question": "Arrange the steps of research process in correct sequence:<br><br>(A) Collecting data<br>(B) Reviewing the literature<br>(C) Designing the methodology<br>(D) Formulating a research process<br>(E) Analysis and Interpretation<br><br>Choose the correct answer from the options given below:",
        "options": [
          "(D), (B), (A), (C), and (E)",
          "(D), (B), (C), (A), and (E)",
          "(D), (C), (B), (A), and (E)",
          "(A), (C), (B), (E), and (D)"
        ],
        "explanation": "<strong>Correct Sequence of Research Process:</strong><br>1. <strong>Formulating a research problem/process (D):</strong> Defining what exactly is to be researched.<br>2. <strong>Reviewing the literature (B):</strong> Checking previous work related to the problem.<br>3. <strong>Designing the methodology (C):</strong> Deciding the research design, sample, and tools.<br>4. <strong>Collecting data (A):</strong> Executing the plan and gathering information.<br>5. <strong>Analysis and Interpretation (E):</strong> Processing the collected data to draw conclusions.<br>Correct Order: D -> B -> C -> A -> E."
      },
      "hi": {
        "question": "अनुसंधान प्रक्रिया के चरणों को सही क्रम में व्यवस्थित करें:<br><br>(A) डेटा एकत्र करना<br>(B) साहित्य की समीक्षा करना<br>(C) कार्यप्रणाली तैयार करना<br>(D) शोध प्रक्रिया तैयार करना<br>(E) विश्लेषण और व्याख्या<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "(D), (B), (A), (C), और (E)",
          "(D), (B), (C), (A), और (E)",
          "(D), (C), (B), (A), और (E)",
          "(A), (C), (B), (E), और (D)"
        ],
        "explanation": "<strong>अनुसंधान प्रक्रिया का सही क्रम:</strong><br>1. <strong>शोध समस्या/प्रक्रिया तैयार करना (D):</strong> यह परिभाषित करना कि वास्तव में क्या शोध किया जाना है।<br>2. <strong>साहित्य की समीक्षा करना (B):</strong> समस्या से संबंधित पिछले कार्यों की जांच करना।<br>3. <strong>कार्यप्रणाली तैयार करना (C):</strong> अनुसंधान डिजाइन, नमूना और उपकरण तय करना।<br>4. <strong>डेटा एकत्र करना (A):</strong> योजना को क्रियान्वित करना और जानकारी एकत्र करना।<br>5. <strong>विश्लेषण और व्याख्या (E):</strong> निष्कर्ष निकालने के लिए एकत्र किए गए डेटा को संसाधित करना।<br>सही क्रम: D -> B -> C -> A -> E."
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q08",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "Unit 4: Communication",
    "unitHI": "इकाई 4: संचार",
    "topicEN": "Mass Media and Society",
    "topicHI": "जनसंचार माध्यम और समाज",
    "content": {
      "en": {
        "question": "<p>Match the following:</p><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><tr><th style='padding:8px;'>List-I (Investigative Reporting)</th><th style='padding:8px;'>List-II (Persons)</th></tr><tr><td style='padding:6px;'>A. Tehalka Case</td><td style='padding:6px;'>I. Bob Woodward and Carl Bernstein</td></tr><tr><td style='padding:6px;'>B. Watergate Scandal</td><td style='padding:6px;'>II. Julian Assange</td></tr><tr><td style='padding:6px;'>C. Bofors Scandal</td><td style='padding:6px;'>III. Tarun Tej Pal</td></tr><tr><td style='padding:6px;'>D. Wikileaks</td><td style='padding:6px;'>IV. Chitra Subramaniam</td></tr></table><br>Choose the correct answer from the options given below:",
        "options": [
          "A-III, B-I, C-IV, D-II",
          "A-I, B-III, C-IV, D-II",
          "A-III, B-II, C-IV, D-I",
          "A-I, B-II, C-III, D-IV"
        ],
        "explanation": "<strong>Matching Investigative Reporting Milestones:</strong><br>• <strong>Tehelka Case (A-III):</strong> The sting operation 'Operation West End' was led by Tarun Tejpal, founder of Tehelka magazine.<br>• <strong>Watergate Scandal (B-I):</strong> Exposed by journalists Bob Woodward and Carl Bernstein from The Washington Post.<br>• <strong>Bofors Scandal (C-IV):</strong> Prominent investigative journalism on this arms-deal scandal was done by Chitra Subramaniam.<br>• <strong>Wikileaks (D-II):</strong> The famous whistleblowing website was founded by Julian Assange."
      },
      "hi": {
        "question": "<p>निम्नलिखित का मिलान करें:</p><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><tr><th style='padding:8px;'>सूची-I (खोजी रिपोर्टिंग)</th><th style='padding:8px;'>सूची-II (व्यक्ति)</th></tr><tr><td style='padding:6px;'>A. तहलका मामला</td><td style='padding:6px;'>I. बॉब वुडवर्ड और कार्ल बर्नस्टीन</td></tr><tr><td style='padding:6px;'>B. वाटरगेट कांड</td><td style='padding:6px;'>II. जूलियन असांजे</td></tr><tr><td style='padding:6px;'>C. बोफोर्स घोटाला</td><td style='padding:6px;'>III. तरुण तेज पाल</td></tr><tr><td style='padding:6px;'>D. विकिलीक्स</td><td style='padding:6px;'>IV. चित्रा सुब्रमण्यम</td></tr></table><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "A-III, B-I, C-IV, D-II",
          "A-I, B-III, C-IV, D-II",
          "A-III, B-II, C-IV, D-I",
          "A-I, B-II, C-III, D-IV"
        ],
        "explanation": "<strong>खोजी रिपोर्टिंग के मील के पत्थरों का मिलान:</strong><br>• <strong>तहलका मामला (A-III):</strong> स्टिंग ऑपरेशन 'ऑपरेशन वेस्ट एंड' का नेतृत्व तहलका पत्रिका के संस्थापक तरुण तेजपाल ने किया था।<br>• <strong>वाटरगेट कांड (B-I):</strong> द वाशिंगटन पोस्ट के पत्रकार बॉब वुडवर्ड और कार्ल बर्नस्टीन द्वारा उजागर किया गया।<br>• <strong>बोफोर्स घोटाला (C-IV):</strong> इस हथियार-सौदा घोटाले पर प्रमुख खोजी पत्रकारिता चित्रा सुब्रमण्यम द्वारा की गई थी।<br>• <strong>विकिलीक्स (D-II):</strong> प्रसिद्ध व्हिसिलब्लोइंग (whistleblowing) वेबसाइट की स्थापना जूलियन असांजे ने की थी।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q09",
    "difficulty": "medium",
    "correct": 3,
    "unitEN": "Unit 2: Research Aptitude",
    "unitHI": "इकाई 2: शोध अभिरुचि",
    "topicEN": "Types of Research",
    "topicHI": "शोध के प्रकार",
    "content": {
      "en": {
        "question": "<p>Match the following:</p><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><tr><th style='padding:8px;'>List-I (Research types)</th><th style='padding:8px;'>List-II (Meaning)</th></tr><tr><td style='padding:6px;'>A. Basic Research</td><td style='padding:6px;'>I. Assessing programs or interventions</td></tr><tr><td style='padding:6px;'>B. Applied Research</td><td style='padding:6px;'>II. Solving practical problems</td></tr><tr><td style='padding:6px;'>C. Action Research</td><td style='padding:6px;'>III. Improving practices in special settings</td></tr><tr><td style='padding:6px;'>D. Evaluation Research</td><td style='padding:6px;'>IV. Expanding knowledge without immediate application</td></tr></table><br>Choose the correct answer from the options given below:",
        "options": [
          "A-II, B-I, C-III, D-IV",
          "A-I, B-II, C-IV, D-III",
          "A-II, B-I, C-IV, D-III",
          "A-IV, B-II, C-III, D-I"
        ],
        "explanation": "<strong>Definitions of Research Types:</strong><br>• <strong>Basic (Fundamental) Research (A-IV):</strong> Conducted purely for the enhancement of knowledge without the aim of immediate practical application.<br>• <strong>Applied Research (B-II):</strong> Aimed at finding a solution for an immediate, practical problem facing a society or organization.<br>• <strong>Action Research (C-III):</strong> A specific type of applied research focused on improving local practices and solving problems in specific settings (like a classroom).<br>• <strong>Evaluation Research (D-I):</strong> Used to determine the impact or effectiveness of a specific program, policy, or intervention."
      },
      "hi": {
        "question": "<p>निम्नलिखित का मिलान करें:</p><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><tr><th style='padding:8px;'>सूची-I (अनुसंधान के प्रकार)</th><th style='padding:8px;'>सूची-II (अर्थ)</th></tr><tr><td style='padding:6px;'>A. बेसिक रिसर्च</td><td style='padding:6px;'>I. कार्यक्रमों या हस्तक्षेपों का मूल्यांकन</td></tr><tr><td style='padding:6px;'>B. अनुप्रयुक्त अनुसंधान</td><td style='padding:6px;'>II. व्यावहारिक समस्याओं का समाधान</td></tr><tr><td style='padding:6px;'>C. एक्शन रिसर्च</td><td style='padding:6px;'>III. विशेष परिस्थितियों में प्रथाओं में सुधार</td></tr><tr><td style='padding:6px;'>D. मूल्यांकन अनुसंधान</td><td style='padding:6px;'>IV. तत्काल अनुप्रयोग के बिना ज्ञान का विस्तार करना</td></tr></table><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "A-II, B-I, C-III, D-IV",
          "A-I, B-II, C-IV, D-III",
          "A-II, B-I, C-IV, D-III",
          "A-IV, B-II, C-III, D-I"
        ],
        "explanation": "<strong>अनुसंधान प्रकारों की परिभाषाएँ:</strong><br>• <strong>बेसिक (मौलिक) रिसर्च (A-IV):</strong> तत्काल व्यावहारिक अनुप्रयोग के उद्देश्य के बिना विशुद्ध रूप से ज्ञान को बढ़ाने के लिए किया जाता है।<br>• <strong>अनुप्रयुक्त (Applied) अनुसंधान (B-II):</strong> किसी समाज या संगठन के सामने आने वाली तत्काल, व्यावहारिक समस्या का समाधान खोजने के उद्देश्य से।<br>• <strong>एक्शन रिसर्च (C-III):</strong> एक विशिष्ट प्रकार का अनुप्रयुक्त अनुसंधान जो स्थानीय प्रथाओं में सुधार करने और विशिष्ट सेटिंग्स (जैसे कक्षा) में समस्याओं को हल करने पर केंद्रित है।<br>• <strong>मूल्यांकन अनुसंधान (D-I):</strong> किसी विशिष्ट कार्यक्रम, नीति या हस्तक्षेप के प्रभाव या प्रभावशीलता को निर्धारित करने के लिए उपयोग किया जाता है।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q10",
    "difficulty": "hard",
    "correct": 1,
    "unitEN": "Unit 6: Logical Reasoning",
    "unitHI": "इकाई 6: तार्किक विचार",
    "topicEN": "Indian Logic: Hetvabhasas (Fallacies of Inference)",
    "topicHI": "भारतीय तर्क: हेत्वाभास (अनुमान की भ्रांतियाँ)",
    "content": {
      "en": {
        "question": "Satpratipaksa Hetvabhasa is also known as:",
        "options": [
          "Asiddha",
          "Prakaranasama",
          "Viruddha",
          "Asādhārana"
        ],
        "explanation": "In Nyāya logic, <strong>Satpratipaksa</strong> is a fallacy where the middle term (hetu) is opposed by another equally strong middle term, leaving the conclusion suspended. This balancing of contradictory arguments leads to a situation where the truth cannot be established. Because both sides appear equally strong, it is also known as <strong>Prakaranasama</strong> (where the issue remains exactly where it started)."
      },
      "hi": {
        "question": "सत्प्रतिपक्ष हेत्वाभास को इस नाम से भी जाना जाता है:",
        "options": [
          "असिद्ध",
          "प्रकारणासमा (Prakaranasama)",
          "विरुद्ध",
          "असाधारण"
        ],
        "explanation": "न्याय तर्कशास्त्र में, <strong>सत्प्रतिपक्ष</strong> एक ऐसा हेत्वाभास (तर्कदोष) है जहाँ मध्य पद (हेतु) का समान रूप से मजबूत एक और मध्य पद द्वारा विरोध किया जाता है, जिससे निष्कर्ष अधर में लटक जाता है। विरोधाभासी तर्कों के इस संतुलन से ऐसी स्थिति पैदा होती है जहाँ सत्य स्थापित नहीं किया जा सकता है। चूँकि दोनों पक्ष समान रूप से मजबूत दिखाई देते हैं, इसलिए इसे <strong>प्रकारणासमा (Prakaranasama)</strong> के रूप में भी जाना जाता है (जहाँ मुद्दा वहीं रहता है जहाँ से शुरू हुआ था)।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q11",
    "difficulty": "hard",
    "correct": 2,
    "unitEN": "Unit 6: Logical Reasoning",
    "unitHI": "इकाई 6: तार्किक विचार",
    "topicEN": "Indian Logic: Means of Knowledge (Pramanas)",
    "topicHI": "भारतीय तर्क: ज्ञान के साधन (प्रमाण)",
    "content": {
      "en": {
        "question": "According to Advaitins, the non-existence of the effect in its material cause previous to its coming into existence is known as:",
        "options": [
          "Anyonyabhāva",
          "Atyantābhāva",
          "Prāgabhāva",
          "Pradhvamsabhāva"
        ],
        "explanation": "In Indian philosophy (specifically regarding Abhava or Non-existence), <strong>Prāgabhāva</strong> (Antecedent non-existence) refers to the non-existence of an effect *before* its production. For example, before a clay pot is created, the pot is non-existent in the clay. It has a beginningless past but an end (it ends the moment the object is created).<br>• <em>Pradhvamsabhāva:</em> Non-existence after destruction.<br>• <em>Atyantābhāva:</em> Absolute non-existence (like a rabbit's horn).<br>• <em>Anyonyabhāva:</em> Mutual non-existence (A is not B)."
      },
      "hi": {
        "question": "अद्वैतवादियों के अनुसार, अस्तित्व में आने से पहले भौतिक कारण में प्रभाव का अस्तित्व न होना इस रूप में जाना जाता है:",
        "options": [
          "अन्योन्याभाव (Anyonyabhāva)",
          "अत्यन्तभाव (Atyantābhāva)",
          "प्रागभाव (Prāgabhāva)",
          "प्रध्वंसभाव (Pradhvamsabhāva)"
        ],
        "explanation": "भारतीय दर्शन में (विशेष रूप से अभाव या गैर-अस्तित्व के संबंध में), <strong>प्रागभाव (Prāgabhāva)</strong> या पूर्ववर्ती गैर-अस्तित्व, किसी प्रभाव के उत्पादन से <em>पहले</em> उसके अस्तित्व न होने को संदर्भित करता है। उदाहरण के लिए, मिट्टी का बर्तन बनने से पहले, मिट्टी में बर्तन का अस्तित्व नहीं होता है। इसका कोई आदि नहीं है लेकिन अंत है (वस्तु के बनते ही यह समाप्त हो जाता है)।<br>• <em>प्रध्वंसभाव:</em> विनाश के बाद का गैर-अस्तित्व।<br>• <em>अत्यन्तभाव:</em> पूर्ण गैर-अस्तित्व (जैसे खरगोश का सींग)।<br>• <em>अन्योन्याभाव:</em> पारस्परिक गैर-अस्तित्व (A, B नहीं है)।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q12",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "Unit 5: Mathematical Reasoning and Aptitude",
    "unitHI": "इकाई 5: गणितीय तर्क और अभिरुचि",
    "topicEN": "Time and Work",
    "topicHI": "समय और कार्य",
    "content": {
      "en": {
        "question": "It takes 12 hrs to fill a swimming pool using two pipes. If the pipe of the larger diameter is used for 4 hrs and the pipe of smaller diameter for 9 hrs, only half the pool can be filled. How long would it take for the pipe with larger diameter to fill the pool?",
        "options": [
          "20 hrs",
          "30 hrs",
          "15 hrs",
          "25 hrs"
        ],
        "explanation": "<strong>Step-by-step Solution:</strong><br>Let the larger pipe take $x$ hours and smaller pipe take $y$ hours to fill the pool alone.<br>In 1 hour, larger fills $1/x$ and smaller fills $1/y$.<br>Equation 1 (Together): $1/x + 1/y = 1/12$ => Multiply by 12 => $12/x + 12/y = 1$<br>Equation 2 (Partial): $4/x + 9/y = 1/2$<br>To eliminate $y$, multiply Eq 2 by $(12/9) = 4/3$:<br>$(4/x) * (4/3) + (9/y) * (4/3) = (1/2) * (4/3)$<br>$16/3x + 12/y = 2/3$<br>Now, subtract this from Eq 1:<br>$(12/x - 16/3x) + (12/y - 12/y) = 1 - 2/3$<br>$(36 - 16)/3x = 1/3$<br>$20/3x = 1/3$ => $20/x = 1$ => <strong>$x = 20$ hours</strong>.<br>The larger pipe takes 20 hours to fill the pool alone."
      },
      "hi": {
        "question": "दो पाइपों का उपयोग करके एक स्विमिंग पूल को भरने में 12 घंटे लगते हैं। यदि बड़े व्यास वाले पाइप का उपयोग 4 घंटे और छोटे व्यास वाले पाइप का उपयोग 9 घंटे के लिए किया जाता है, तो केवल आधा पूल ही भर सकता है। बड़े व्यास वाले पाइप को पूल भरने में कितना समय लगेगा?",
        "options": [
          "20 घंटे",
          "30 घंटे",
          "15 घंटे",
          "25 घंटे"
        ],
        "explanation": "<strong>चरण-दर-चरण समाधान:</strong><br>मान लें कि बड़े पाइप को $x$ घंटे लगते हैं और छोटे पाइप को पूल को अकेले भरने में $y$ घंटे लगते हैं।<br>1 घंटे में, बड़ा पाइप $1/x$ भरता है और छोटा पाइप $1/y$ भरता है।<br>समीकरण 1 (एक साथ): $1/x + 1/y = 1/12$ => 12 से गुणा करें => $12/x + 12/y = 1$<br>समीकरण 2 (आंशिक): $4/x + 9/y = 1/2$<br>$y$ को हटाने के लिए, समीकरण 2 को $(12/9) = 4/3$ से गुणा करें:<br>$(4/x) * (4/3) + (9/y) * (4/3) = (1/2) * (4/3)$<br>$16/3x + 12/y = 2/3$<br>अब, इसे समीकरण 1 से घटाएं:<br>$(12/x - 16/3x) + (12/y - 12/y) = 1 - 2/3$<br>$(36 - 16)/3x = 1/3$<br>$20/3x = 1/3$ => $20/x = 1$ => <strong>$x = 20$ घंटे</strong>।<br>बड़े पाइप को अकेले पूल भरने में 20 घंटे का समय लगता है।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q13",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "Unit 9: People, Development and Environment",
    "unitHI": "इकाई 9: लोग, विकास और पर्यावरण",
    "topicEN": "Millennium Development and Sustainable Development Goals",
    "topicHI": "सहस्राब्दि विकास और सतत विकास लक्ष्य",
    "content": {
      "en": {
        "question": "<p>Match the following:</p><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><tr><th style='padding:8px;'>List-I (Specific SDG)</th><th style='padding:8px;'>List-II (Its Goal)</th></tr><tr><td style='padding:6px;'>A. SDG 12</td><td style='padding:6px;'>I. Life below water</td></tr><tr><td style='padding:6px;'>B. SDG 13</td><td style='padding:6px;'>II. Life on land</td></tr><tr><td style='padding:6px;'>C. SDG 14</td><td style='padding:6px;'>III. Responsible production and consumption</td></tr><tr><td style='padding:6px;'>D. SDG 15</td><td style='padding:6px;'>IV. Climate Action</td></tr></table><br>Choose the correct answer from the options given below:",
        "options": [
          "A-III, B-IV, C-I, D-II",
          "A-III, B-IV, C-II, D-I",
          "A-I, B-II, C-III, D-IV",
          "A-I, B-II, C-IV, D-III"
        ],
        "explanation": "<strong>Matching the Sustainable Development Goals (SDGs):</strong><br>• <strong>SDG 12 (A-III):</strong> Ensure sustainable consumption and production patterns (Responsible production and consumption).<br>• <strong>SDG 13 (B-IV):</strong> Take urgent action to combat climate change and its impacts (Climate Action).<br>• <strong>SDG 14 (C-I):</strong> Conserve and sustainably use the oceans, seas and marine resources (Life below water).<br>• <strong>SDG 15 (D-II):</strong> Protect, restore and promote sustainable use of terrestrial ecosystems (Life on land)."
      },
      "hi": {
        "question": "<p>निम्नलिखित का मिलान करें:</p><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><tr><th style='padding:8px;'>सूची-I (विशिष्ट SDG)</th><th style='padding:8px;'>सूची-II (इसका लक्ष्य)</th></tr><tr><td style='padding:6px;'>A. SDG 12</td><td style='padding:6px;'>I. पानी के नीचे जीवन</td></tr><tr><td style='padding:6px;'>B. SDG 13</td><td style='padding:6px;'>II. भूमि पर जीवन</td></tr><tr><td style='padding:6px;'>C. SDG 14</td><td style='padding:6px;'>III. जिम्मेदार उत्पादन और उपभोग</td></tr><tr><td style='padding:6px;'>D. SDG 15</td><td style='padding:6px;'>IV. जलवायु कार्रवाई</td></tr></table><br>नी नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "A-III, B-IV, C-I, D-II",
          "A-III, B-IV, C-II, D-I",
          "A-I, B-II, C-III, D-IV",
          "A-I, B-II, C-IV, D-III"
        ],
        "explanation": "<strong>सतत विकास लक्ष्यों (SDGs) का मिलान:</strong><br>• <strong>SDG 12 (A-III):</strong> सतत उपभोग और उत्पादन पैटर्न सुनिश्चित करना (जिम्मेदार उत्पादन और उपभोग)।<br>• <strong>SDG 13 (B-IV):</strong> जलवायु परिवर्तन और उसके प्रभावों से निपटने के लिए तत्काल कार्रवाई करना (जलवायु कार्रवाई)।<br>• <strong>SDG 14 (C-I):</strong> महासागरों, समुद्रों और समुद्री संसाधनों का संरक्षण और सतत उपयोग (पानी के नीचे का जीवन)।<br>• <strong>SDG 15 (D-II):</strong> स्थलीय पारिस्थितिक तंत्र के सतत उपयोग को संरक्षित, पुनर्स्थापित और बढ़ावा देना (भूमि पर जीवन)।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q14",
    "difficulty": "hard",
    "correct": 3,
    "unitEN": "Unit 6: Logical Reasoning",
    "unitHI": "इकाई 6: तार्किक विचार",
    "topicEN": "Classical Square of Opposition",
    "topicHI": "विरोध का शास्त्रीय वर्ग",
    "content": {
      "en": {
        "question": "<p>Match the following:</p><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><tr><th style='padding:8px;'>List-I (In a square of opposition)</th><th style='padding:8px;'>List-II (Result)</th></tr><tr><td style='padding:6px;'>A. If 'E' is False</td><td style='padding:6px;'>I. 'O' is Undetermined</td></tr><tr><td style='padding:6px;'>B. If 'O' is True</td><td style='padding:6px;'>II. 'E' is True</td></tr><tr><td style='padding:6px;'>C. If 'I' is False</td><td style='padding:6px;'>III. 'E' is False</td></tr><tr><td style='padding:6px;'>D. If 'A' is True</td><td style='padding:6px;'>IV. 'E' is Undetermined</td></tr></table><br>Choose the correct answer from the options given below:",
        "options": [
          "A-II, B-I, C-IV, D-III",
          "A-IV, B-III, C-I, D-II",
          "A-IV, B-II, C-III, D-I",
          "A-I, B-IV, C-II, D-III"
        ],
        "explanation": "<strong>Applying rules of the Classical Square of Opposition:</strong><br>• <strong>A (If 'E' is False):</strong> 'I' must be True, but 'A' and 'O' are undetermined. So, <strong>'O' is Undetermined (I)</strong>.<br>• <strong>B (If 'O' is True):</strong> 'A' is False, but 'E' and 'I' are undetermined. So, <strong>'E' is Undetermined (IV)</strong>.<br>• <strong>C (If 'I' is False):</strong> 'A' is False, 'E' is True, and 'O' is True. So, <strong>'E' is True (II)</strong>.<br>• <strong>D (If 'A' is True):</strong> 'O' is False, 'I' is True, and 'E' is False. So, <strong>'E' is False (III)</strong>.<br>Matching is A-I, B-IV, C-II, D-III."
      },
      "hi": {
        "question": "<p>निम्नलिखित का मिलान करें:</p><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><tr><th style='padding:8px;'>सूची-I (विपक्ष के एक वर्ग में)</th><th style='padding:8px;'>सूची-II (परिणाम)</th></tr><tr><td style='padding:6px;'>A. यदि 'E' असत्य है</td><td style='padding:6px;'>I. 'O' अनिर्धारित है</td></tr><tr><td style='padding:6px;'>B. यदि 'O' सत्य है</td><td style='padding:6px;'>II. 'E' सत्य है</td></tr><tr><td style='padding:6px;'>C. यदि 'I' असत्य है</td><td style='padding:6px;'>III. 'E' असत्य है</td></tr><tr><td style='padding:6px;'>D. यदि 'A' सत्य है</td><td style='padding:6px;'>IV. 'E' अनिर्धारित है</td></tr></table><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "A-II, B-I, C-IV, D-III",
          "A-IV, B-III, C-I, D-II",
          "A-IV, B-II, C-III, D-I",
          "A-I, B-IV, C-II, D-III"
        ],
        "explanation": "<strong>विरोध के शास्त्रीय वर्ग (Square of Opposition) के नियम लागू करने पर:</strong><br>• <strong>A (यदि 'E' असत्य है):</strong> 'I' सत्य होना चाहिए, लेकिन 'A' और 'O' अनिर्धारित हैं। अतः, <strong>'O' अनिर्धारित है (I)</strong>।<br>• <strong>B (यदि 'O' सत्य है):</strong> 'A' असत्य है, लेकिन 'E' और 'I' अनिर्धारित हैं। अतः, <strong>'E' अनिर्धारित है (IV)</strong>।<br>• <strong>C (यदि 'I' असत्य है):</strong> 'A' असत्य है, 'E' सत्य है, और 'O' सत्य है। अतः, <strong>'E' सत्य है (II)</strong>।<br>• <strong>D (यदि 'A' सत्य है):</strong> 'O' असत्य है, 'I' सत्य है, और 'E' असत्य है। अतः, <strong>'E' असत्य है (III)</strong>।<br>सही मिलान A-I, B-IV, C-II, D-III है।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q15",
    "difficulty": "medium",
    "correct": 3,
    "unitEN": "Unit 5: Mathematical Reasoning and Aptitude",
    "unitHI": "इकाई 5: गणितीय तर्क और अभिरुचि",
    "topicEN": "Fraction and Percentage",
    "topicHI": "भिन्न और प्रतिशत",
    "content": {
      "en": {
        "question": "Two-fifth of the students of a school go to school by bus, one-fourth by car, and the remaining walk down to school. One-third of those who walk to school are not accompanied by any one; the rest are escorted by their parents. If 224 students walk to school on their own, what is the total number of students in the school?",
        "options": [
          "640",
          "970",
          "1290",
          "1920"
        ],
        "explanation": "<strong>Step-by-step Solution:</strong><br>1. Let total students be $x$.<br>2. Fraction using bus = $2/5$. Fraction using car = $1/4$.<br>3. Total using transport = $2/5 + 1/4 = (8 + 5) / 20 = 13/20$.<br>4. Remaining fraction (who walk) = $1 - 13/20 = 7/20$. So, walking students = $(7/20)x$.<br>5. We are told $1/3$ of these walking students walk ALONE (not accompanied).<br>6. So, students walking alone = $(1/3) * (7/20)x = (7/60)x$.<br>7. It's given that 224 students walk on their own. Therefore:<br>   $(7/60)x = 224$<br>   $x = (224 × 60) / 7$<br>   $x = 32 × 60 = 1920$.<br>The total number of students is <strong>1920</strong>."
      },
      "hi": {
        "question": "एक स्कूल के दो-पांचवें छात्र बस से स्कूल जाते हैं, एक-चौथाई कार से और बाकी पैदल स्कूल जाते हैं। पैदल स्कूल जाने वाले एक-तिहाई छात्रों के साथ कोई नहीं होता; बाकी छात्रों को उनके माता-पिता साथ लेकर जाते हैं। यदि 224 छात्र अकेले स्कूल जाते हैं, तो स्कूल में छात्रों की कुल संख्या कितनी है?",
        "options": [
          "640",
          "970",
          "1290",
          "1920"
        ],
        "explanation": "<strong>चरण-दर-चरण समाधान:</strong><br>1. मान लें कि कुल छात्र $x$ हैं।<br>2. बस का उपयोग करने वाला भिन्न = $2/5$। कार का उपयोग करने वाला भिन्न = $1/4$।<br>3. परिवहन का उपयोग करने वाले कुल छात्र = $2/5 + 1/4 = (8 + 5) / 20 = 13/20$।<br>4. शेष भिन्न (जो पैदल चलते हैं) = $1 - 13/20 = 7/20$। अतः, पैदल चलने वाले छात्र = $(7/20)x$।<br>5. बताया गया है कि इन पैदल चलने वाले छात्रों में से $1/3$ अकेले चलते हैं (उनके साथ कोई नहीं होता)।<br>6. अतः, अकेले चलने वाले छात्र = $(1/3) * (7/20)x = (7/60)x$।<br>7. यह दिया गया है कि 224 छात्र अकेले स्कूल जाते हैं। इसलिए:<br>   $(7/60)x = 224$<br>   $x = (224 × 60) / 7$<br>   $x = 32 × 60 = 1920$।<br>स्कूल में छात्रों की कुल संख्या <strong>1920</strong> है।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q16",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "Unit 10: Higher Education System",
    "unitHI": "इकाई 10: उच्च शिक्षा प्रणाली",
    "topicEN": "Institutions of Higher Learning",
    "topicHI": "उच्च शिक्षा के संस्थान",
    "content": {
      "en": {
        "question": "Which of the following is not an institution of higher education?",
        "options": [
          "Ferguson College",
          "National Institute of Technology",
          "Rashtriya Indian Military College",
          "Indian School of Mines"
        ],
        "explanation": "The <strong>Rashtriya Indian Military College (RIMC)</strong>, located in Dehradun, is a premier military training institution, but it is technically a <strong>feeder school</strong> (for classes VIII to XII) for the National Defence Academy (NDA) and Naval Academy. It provides secondary school education, NOT higher education (University/College level degrees). The other three grant higher education degrees."
      },
      "hi": {
        "question": "निम्नलिखित में से कौन उच्च शिक्षा का संस्थान नहीं है?",
        "options": [
          "फर्गुसन कॉलेज (Ferguson College)",
          "राष्ट्रीय प्रौद्योगिकी संस्थान (NIT)",
          "राष्ट्रीय भारतीय सैन्य कॉलेज (RIMC)",
          "इंडियन स्कूल ऑफ माइन्स (ISM)"
        ],
        "explanation": "<strong>राष्ट्रीय भारतीय सैन्य कॉलेज (RIMC)</strong>, जो देहरादून में स्थित है, एक प्रमुख सैन्य प्रशिक्षण संस्थान है, लेकिन तकनीकी रूप से यह राष्ट्रीय रक्षा अकादमी (NDA) और नौसेना अकादमी के लिए एक <strong>फीडर स्कूल</strong> (कक्षा VIII से XII तक) है। यह माध्यमिक विद्यालय स्तर की शिक्षा प्रदान करता है, उच्च शिक्षा (विश्वविद्यालय/कॉलेज स्तर की डिग्री) नहीं। अन्य तीन उच्च शिक्षा की डिग्री प्रदान करते हैं।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q17",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "Unit 1: Teaching Aptitude",
    "unitHI": "इकाई 1: शिक्षण अभिरुचि",
    "topicEN": "Evaluation Systems",
    "topicHI": "मूल्यांकन प्रणाली",
    "content": {
      "en": {
        "question": "Which of the following are the key elements of portfolios?<br><br>(A) Structuring and Sign posting<br>(B) Evidence<br>(C) Single piece of work<br>(D) Labelling of the evidence<br>(E) Critical Reflection<br><br>Choose the correct answer from the options given below:",
        "options": [
          "(A), (B), (D) and (E) Only",
          "(B) and (C) Only",
          "(B), (D) and (E) Only",
          "(A), (C), (D) and (E) Only"
        ],
        "explanation": "A <strong>Portfolio</strong> is a systematic, organized collection of a student's work that exhibits their efforts, progress, and achievements over time. <br>• Therefore, it is NEVER a <em>Single piece of work</em> (Statement C is false).<br>• It involves Structuring (A), compiling Evidence of learning (B), properly Labelling that evidence (D), and adding Critical Reflection/self-evaluation (E).<br>Hence, A, B, D, and E are the correct key elements."
      },
      "hi": {
        "question": "निम्नलिखित में से कौन पोर्टफोलियो के प्रमुख तत्व हैं?<br><br>(A) संरचना और साइन पोस्टिंग<br>(B) साक्ष्य<br>(C) एकल कार्य<br>(D) साक्ष्य का लेबलिंग<br>(E) आलोचनात्मक प्रतिबिंब<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "(A), (B), (D) और (E) केवल",
          "(B) और (C) केवल",
          "(B), (D) और (E) केवल",
          "(A), (C), (D) और (E) केवल"
        ],
        "explanation": "<strong>पोर्टफोलियो</strong> समय के साथ किसी छात्र के काम का एक व्यवस्थित, संगठित संग्रह है जो उसके प्रयासों, प्रगति और उपलब्धियों को प्रदर्शित करता है।<br>• इसलिए, यह कभी भी एक <em>एकल कार्य (Single piece of work)</em> नहीं होता है (कथन C असत्य है)।<br>• इसमें संरचना (A), सीखने के साक्ष्य संकलित करना (B), उस साक्ष्य को उचित रूप से लेबल करना (D), और आलोचनात्मक प्रतिबिंब/आत्म-मूल्यांकन (E) जोड़ना शामिल है।<br>अतः, A, B, D, और E सही प्रमुख तत्व हैं।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q18",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "Unit 1: Teaching Aptitude",
    "unitHI": "इकाई 1: शिक्षण अभिरुचि",
    "topicEN": "Factors Affecting Teaching",
    "topicHI": "शिक्षण को प्रभावित करने वाले कारक",
    "content": {
      "en": {
        "question": "<p>Match the following:</p><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><tr><th style='padding:8px;'>List-I (Term)</th><th style='padding:8px;'>List-II (Feature)</th></tr><tr><td style='padding:6px;'>A. Learner diversity</td><td style='padding:6px;'>I. Hinders utilization of instructional facilities for teachers</td></tr><tr><td style='padding:6px;'>B. Poor classroom ventilation</td><td style='padding:6px;'>II. Worsens the digital divide</td></tr><tr><td style='padding:6px;'>C. Digital inequality</td><td style='padding:6px;'>III. Requires culturally responsive teaching strategies</td></tr><tr><td style='padding:6px;'>D. Teacher's reluctance to innovate</td><td style='padding:6px;'>IV. Negatively affects concentration levels of students</td></tr></table><br>Choose the correct answer from the options given below:",
        "options": [
          "A-II, B-IV, C-III, D-I",
          "A-I, B-II, C-III, D-IV",
          "A-III, B-IV, C-II, D-I",
          "A-IV, B-III, C-I, D-II"
        ],
        "explanation": "<strong>Matching Factors Affecting Teaching & Learning:</strong><br>• <strong>Learner diversity (A-III):</strong> When students come from different backgrounds, it requires culturally responsive teaching strategies.<br>• <strong>Poor classroom ventilation (B-IV):</strong> A bad physical environment negatively affects the concentration levels of students.<br>• <strong>Digital inequality (C-II):</strong> The gap in access to tech worsens the 'digital divide' among students.<br>• <strong>Teacher's reluctance to innovate (D-I):</strong> A negative attitude in a teacher hinders the proper utilization of new instructional facilities/tools."
      },
      "hi": {
        "question": "<p>निम्नलिखित का मिलान करें:</p><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><tr><th style='padding:8px;'>सूची-I (अवधि)</th><th style='padding:8px;'>सूची-II (विशेषता)</th></tr><tr><td style='padding:6px;'>A. शिक्षार्थी विविधता</td><td style='padding:6px;'>I. शिक्षकों के लिए शिक्षण सुविधाओं के उपयोग में बाधा डालता है</td></tr><tr><td style='padding:6px;'>B. कक्षा में खराब वेंटिलेशन</td><td style='padding:6px;'>II. डिजिटल विभाजन को और बिगाड़ता है</td></tr><tr><td style='padding:6px;'>C. डिजिटल असमानता</td><td style='padding:6px;'>III. सांस्कृतिक रूप से उत्तरदायी शिक्षण रणनीतियों की आवश्यकता है</td></tr><tr><td style='padding:6px;'>D. शिक्षकों की नवाचार के प्रति अनिच्छा</td><td style='padding:6px;'>IV. छात्रों के एकाग्रता स्तर पर नकारात्मक प्रभाव पड़ता है</td></tr></table><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "A-II, B-IV, C-III, D-I",
          "A-I, B-II, C-III, D-IV",
          "A-III, B-IV, C-II, D-I",
          "A-IV, B-III, C-I, D-II"
        ],
        "explanation": "<strong>शिक्षण और सीखने को प्रभावित करने वाले कारकों का मिलान:</strong><br>• <strong>शिक्षार्थी विविधता (A-III):</strong> जब छात्र अलग-अलग पृष्ठभूमि से आते हैं, तो इसके लिए सांस्कृतिक रूप से उत्तरदायी शिक्षण रणनीतियों की आवश्यकता होती है।<br>• <strong>कक्षा में खराब वेंटिलेशन (B-IV):</strong> खराब भौतिक वातावरण छात्रों के एकाग्रता स्तर पर नकारात्मक प्रभाव डालता है।<br>• <strong>डिजिटल असमानता (C-II):</strong> तकनीक तक पहुंच में अंतर छात्रों के बीच 'डिजिटल विभाजन (digital divide)' को और खराब करता है।<br>• <strong>नवाचार के प्रति शिक्षक की अनिच्छा (D-I):</strong> एक शिक्षक का नकारात्मक रवैया नई शिक्षण सुविधाओं/उपकरणों के उचित उपयोग में बाधा डालता है।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q19",
    "difficulty": "medium",
    "correct": 3,
    "unitEN": "Unit 9: People, Development and Environment",
    "unitHI": "इकाई 9: लोग, विकास और पर्यावरण",
    "topicEN": "Impacts of Pollutants on Human Health",
    "topicHI": "प्रदूषकों का मानव स्वास्थ्य पर प्रभाव",
    "content": {
      "en": {
        "question": "Threshold dose is the:",
        "options": [
          "Dose which is lethal to half of the exposed population",
          "Highest dose at which toxic effect occurs",
          "Lowest dose at which no toxic effect occurs",
          "Highest dose at which no toxic effect occurs"
        ],
        "explanation": "In toxicology, a <strong>Threshold dose</strong> (often synonymous with NOAEL - No Observed Adverse Effect Level) is defined as the <strong>highest dose at which no toxic effect occurs</strong>. It is the boundary line; any dose below this threshold produces no observable adverse effects, and any dose above it begins to produce toxic effects.<br>*(Note: Option 1 refers to LD50 or Lethal Dose 50).*."
      },
      "hi": {
        "question": "थ्रेशोल्ड खुराक (Threshold dose) है:",
        "options": [
          "खुराक जो आधी आबादी के लिए घातक है",
          "उच्चतम खुराक जिस पर विषाक्त प्रभाव होता है",
          "न्यूनतम खुराक जिस पर कोई विषाक्त प्रभाव नहीं होता",
          "उच्चतम खुराक जिस पर कोई विषाक्त प्रभाव नहीं होता"
        ],
        "explanation": "विष विज्ञान (toxicology) में, <strong>थ्रेशोल्ड खुराक (Threshold dose)</strong> (अक्सर NOAEL - नो ऑब्ज़र्व्ड एडवर्स इफ़ेक्ट लेवल के पर्याय के रूप में) को उस <strong>उच्चतम खुराक के रूप में परिभाषित किया जाता है जिस पर कोई विषाक्त प्रभाव नहीं होता है</strong>। यह एक सीमा रेखा है; इस सीमा से नीचे की कोई भी खुराक कोई देखने योग्य प्रतिकूल प्रभाव पैदा नहीं करती है, और इसके ऊपर की कोई भी खुराक विषाक्त प्रभाव पैदा करना शुरू कर देती है।<br>*(नोट: विकल्प 1 LD50 या प्राणघातक खुराक 50 को संदर्भित करता है)।*"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q20",
    "difficulty": "hard",
    "correct": 1,
    "unitEN": "Unit 5: Mathematical Reasoning and Aptitude",
    "unitHI": "इकाई 5: गणितीय तर्क और अभिरुचि",
    "topicEN": "Mathematical Aptitude - Averages",
    "topicHI": "गणितीय अभिरुचि - औसत",
    "content": {
      "en": {
        "question": "If X̄ is the mean of x₁, x₂, x₃, ……xₙ, then for a ≠ 0, the mean of (ax₁, ax₂, ax₃, ………axₙ, x₁/a, x₂/a, x₃/a, ….xₙ/a) is:",
        "options": [
          "(a + 1/a) x̄",
          "(1/2)(a + 1/a) x̄",
          "(a + 1/a)(n) x̄",
          "(a + 1/a)(2n) x̄"
        ],
        "explanation": "<strong>Step-by-step Solution:</strong><br>1. The original mean is $\\bar{x}$. This means the sum of $x_1 + x_2 + ... + x_n = n\\bar{x}$.<br>2. We have a new combined series with $2n$ terms: first half is multiplied by $a$, second half is divided by $a$.<br>3. Sum of the new series = $(ax_1 + ax_2 + ... + ax_n) + (x_1/a + x_2/a + ... + x_n/a)$.<br>4. Factoring out $a$ and $1/a$:<br>   Sum = $a(x_1 + ... + x_n) + \\frac{1}{a}(x_1 + ... + x_n)$<br>   Sum = $a(n\\bar{x}) + \\frac{1}{a}(n\\bar{x}) = n\\bar{x}(a + \\frac{1}{a})$.<br>5. New Mean = (Total Sum) / (Total number of terms). Since there are $2n$ terms:<br>   New Mean = $\\frac{n\\bar{x}(a + 1/a)}{2n} = \\frac{1}{2}(a + \\frac{1}{a})\\bar{x}$."
      },
      "hi": {
        "question": "यदि X̄, x₁, x₂, x₃, ……xₙ का माध्य है, तो a ≠ 0 के लिए, (ax₁, ax₂, ax₃, ………axₙ, x₁/a, x₂/a, x₃/a, ….xₙ/a) का माध्य क्या होगा?",
        "options": [
          "(a + 1/a) x̄",
          "(1/2)(a + 1/a) x̄",
          "(a + 1/a)(n) x̄",
          "(a + 1/a)(2n) x̄"
        ],
        "explanation": "<strong>चरण-दर-चरण समाधान:</strong><br>1. मूल माध्य $\\bar{x}$ है। इसका अर्थ है कि $x_1 + x_2 + ... + x_n$ का योग $= n\\bar{x}$ है।<br>2. हमारे पास $2n$ पदों के साथ एक नई संयुक्त श्रृंखला है: पहले आधे को $a$ से गुणा किया गया है, दूसरे आधे को $a$ से विभाजित किया गया है।<br>3. नई श्रृंखला का योग = $(ax_1 + ax_2 + ... + ax_n) + (x_1/a + x_2/a + ... + x_n/a)$।<br>4. $a$ और $1/a$ को फैक्टर करने पर:<br>   योग = $a(x_1 + ... + x_n) + \\frac{1}{a}(x_1 + ... + x_n)$<br>   योग = $a(n\\bar{x}) + \\frac{1}{a}(n\\bar{x}) = n\\bar{x}(a + \\frac{1}{a})$।<br>5. नया माध्य = (कुल योग) / (पदों की कुल संख्या)। चूँकि $2n$ पद हैं:<br>   नया माध्य = $\\frac{n\\bar{x}(a + 1/a)}{2n} = \\frac{1}{2}(a + \\frac{1}{a})\\bar{x}$।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q21",
    "difficulty": "medium",
    "correct": 3,
    "unitEN": "Unit 6: Logical Reasoning",
    "unitHI": "इकाई 6: तार्किक विचार",
    "topicEN": "Formal and Informal Fallacies",
    "topicHI": "औपचारिक और अनौपचारिक तर्कदोष",
    "content": {
      "en": {
        "question": "Which among the following statements are negatively relevant in the context of fallacies of Relevance?<br><br>(A) Dogs are cats, cats are felines so dogs are felines.<br>(B) Althea is a two years old. So, Althea probably goes to college.<br>(C) Chris is a woman. Therefore, Chris enjoys knitting.<br>(D) Marty is a high-school senior. So, Marty likely has a Ph.D.<br>(E) All dogs have five legs. Rover is a dog. So Rover has five legs.<br><br>Choose the correct answer from the options given below:",
        "options": [
          "(A) and (C) Only",
          "(C) and (E) Only",
          "(A) and (E) Only",
          "(B) and (D) Only"
        ],
        "explanation": "In logic, a premise is <strong>negatively relevant</strong> to a conclusion if it provides evidence *against* the conclusion rather than just being unrelated. <br>• Statement (B): Being a two-year-old is strong evidence *against* the probability of going to college.<br>• Statement (D): Being a high-school senior is strong evidence *against* having a Ph.D.<br>Both B and D contain premises that actively contradict or make their respective conclusions highly improbable, exhibiting negative relevance."
      },
      "hi": {
        "question": "प्रासंगिकता के भ्रम के संदर्भ में निम्नलिखित में से कौन सा कथन नकारात्मक रूप से प्रासंगिक है?<br><br>(A) कुत्ते बिल्लियाँ हैं, बिल्लियाँ बिल्लियाँ हैं इसलिए कुत्ते बिल्लियाँ हैं।<br>(B) अल्थिया दो साल की है। इसलिए, अल्थिया शायद कॉलेज जाती है।<br>(C) क्रिस एक महिला है। इसलिए, क्रिस को बुनाई पसंद है।<br>(D) मार्टी एक हाई-स्कूल सीनियर है। इसलिए, मार्टी के पास संभवतः पीएच.डी. है।<br>(E) सभी कुत्तों के पाँच पैर होते हैं। रोवर एक कुत्ता है। इसलिए रोवर के पाँच पैर हैं।<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "(A) और (C) केवल",
          "(C) और (E) केवल",
          "(A) और (E) केवल",
          "(B) और (D) केवल"
        ],
        "explanation": "तर्कशास्त्र में, एक आधार (premise) निष्कर्ष के लिए <strong>नकारात्मक रूप से प्रासंगिक (negatively relevant)</strong> होता है यदि यह केवल असंबंधित होने के बजाय निष्कर्ष के <em>खिलाफ</em> साक्ष्य प्रदान करता है।<br>• कथन (B): दो साल का होना कॉलेज जाने की संभावना के <em>खिलाफ</em> मजबूत सबूत है।<br>• कथन (D): हाई-स्कूल सीनियर होना पीएच.डी. होने के <em>खिलाफ</em> मजबूत सबूत है।<br>B और D दोनों में ऐसे आधार हैं जो सक्रिय रूप से उनके संबंधित निष्कर्षों का खंडन करते हैं या उन्हें अत्यधिक असंभव बनाते हैं, जो नकारात्मक प्रासंगिकता प्रदर्शित करते हैं।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q22",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "Unit 10: Higher Education System",
    "unitHI": "इकाई 10: उच्च शिक्षा प्रणाली",
    "topicEN": "Institutions of Higher Learning and Policies",
    "topicHI": "उच्च शिक्षा के संस्थान और नीतियाँ",
    "content": {
      "en": {
        "question": "Choose the correct statements.<br><br>(A) Lal Bahadur Shastri National Academy of Administration trains future IASs.<br>(B) Polytechnics are mandated to award MBBS degree.<br>(C) Sardar Vallabh Bhai Patel Academy trains future IPSs.<br>(D) Jawahar Lal Nehru University, New Delhi has 89 affiliated colleges.<br>(E) IIMC, New Delhi is a premier institution of management counselling.<br><br>Choose the correct answer from the options given below:",
        "options": [
          "(A) and (C) Only",
          "(B), (D) and (E) Only",
          "(A), (B) and (D) Only",
          "(C) and (E) Only"
        ],
        "explanation": "Let's evaluate the statements:<br>• <strong>(A) True:</strong> LBSNAA (Mussoorie) is the premier training institute for civil services, especially IAS.<br>• <strong>(B) False:</strong> Polytechnics award diplomas in engineering and technical fields, not medical degrees like MBBS.<br>• <strong>(C) True:</strong> SVPNPA (Hyderabad) trains the officers of the Indian Police Service (IPS).<br>• <strong>(D) False:</strong> JNU is primarily a unitary, research-oriented postgraduate university and does not have 89 affiliated undergraduate colleges (unlike DU).<br>• <strong>(E) False:</strong> IIMC (Indian Institute of Mass Communication) is a premier institution for Journalism and Mass Media, not management counselling.<br>Hence, only A and C are correct."
      },
      "hi": {
        "question": "सही कथन चुनें।<br><br>(A) लाल बहादुर शास्त्री राष्ट्रीय प्रशासन अकादमी भावी आईएएस को प्रशिक्षित करती है।<br>(B) पॉलिटेक्निक को MBBS की डिग्री प्रदान करना अनिवार्य है।<br>(C) सरदार वल्लभ भाई पटेल अकादमी भावी आईपीएस को प्रशिक्षित करती है।<br>(D) जवाहर लाल नेहरू विश्वविद्यालय, नई दिल्ली से 89 संबद्ध कॉलेज हैं।<br>(E) IIMC, नई दिल्ली प्रबंधन परामर्श का एक प्रमुख संस्थान है।<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "(A) और (C) केवल",
          "(B), (D) और (E) केवल",
          "(A), (B) और (D) केवल",
          "(C) और (E) केवल"
        ],
        "explanation": "आइए कथनों का मूल्यांकन करें:<br>• <strong>(A) सत्य है:</strong> LBSNAA (मसूरी) सिविल सेवाओं, विशेषकर IAS के लिए प्रमुख प्रशिक्षण संस्थान है।<br>• <strong>(B) असत्य है:</strong> पॉलिटेक्निक इंजीनियरिंग और तकनीकी क्षेत्रों में डिप्लोमा प्रदान करते हैं, न कि MBBS जैसी मेडिकल डिग्री।<br>• <strong>(C) सत्य है:</strong> SVPNPA (हैदराबाद) भारतीय पुलिस सेवा (IPS) के अधिकारियों को प्रशिक्षित करता है।<br>• <strong>(D) असत्य है:</strong> JNU मुख्य रूप से एक एकात्मक, अनुसंधान-उन्मुख स्नातकोत्तर विश्वविद्यालय है और इसमें 89 संबद्ध स्नातक कॉलेज नहीं हैं (DU के विपरीत)।<br>• <strong>(E) असत्य है:</strong> IIMC (भारतीय जनसंचार संस्थान) पत्रकारिता और मास मीडिया के लिए एक प्रमुख संस्थान है, प्रबंधन परामर्श (management counselling) के लिए नहीं।<br>अतः केवल A और C सही हैं।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q23",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "Unit 8: Information and Communication Technology (ICT)",
    "unitHI": "इकाई 8: सूचना और संचार प्रौद्योगिकी (ICT)",
    "topicEN": "ICT General Abbreviations and Terminology",
    "topicHI": "ICT सामान्य संक्षिप्ताक्षर और शब्दावली",
    "content": {
      "en": {
        "question": "Renu uses WAV format instead of MP3 format when recording music performance. What are the benefits of doing this?<br><br>(A) The size of audio file is larger<br>(B) The audio quality is better<br>(C) There are no cross-platform issues<br>(D) Audio file is uncompressed and lossless<br><br>Choose the correct answer from the options given below:",
        "options": [
          "(A) and (C) Only",
          "(B) and (D) Only",
          "(C) and (D) Only",
          "(A), (B) and (D) Only"
        ],
        "explanation": "<strong>WAV vs. MP3 Format:</strong><br>• WAV is an <strong>uncompressed and lossless</strong> audio format (D). This means it retains all the original audio data.<br>• Because no data is lost to compression, the <strong>audio quality is much better</strong> (B) than a compressed format like MP3.<br>• While it is true that WAV files are larger (A), a larger file size is a <em>drawback</em>, not a 'benefit' as asked in the question. Both formats generally don't have cross-platform issues.<br>Therefore, the benefits are B and D."
      },
      "hi": {
        "question": "रेनू संगीत प्रदर्शन रिकॉर्ड करते समय MP3 प्रारूप के बजाय WAV प्रारूप का उपयोग करता है। ऐसा करने के क्या लाभ हैं?<br><br>(A) ऑडियो फाइल का आकार बड़ा है<br>(B) ऑडियो गुणवत्ता बेहतर है<br>(C) कोई क्रॉस-प्लेटफॉर्म समस्याएँ नहीं हैं<br>(D) ऑडियो फाइल असम्पीडित (uncompressed) और दोषरहित (lossless) है<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "(A) और (C) केवल",
          "(B) और (D) केवल",
          "(C) और (D) केवल",
          "(A), (B) और (D) केवल"
        ],
        "explanation": "<strong>WAV बनाम MP3 प्रारूप:</strong><br>• WAV एक <strong>असम्पीडित (uncompressed) और दोषरहित (lossless)</strong> ऑडियो प्रारूप (D) है। इसका मतलब है कि यह सभी मूल ऑडियो डेटा को बरकरार रखता है।<br>• चूँकि संपीड़न (compression) में कोई डेटा नहीं खोता है, इसलिए <strong>ऑडियो गुणवत्ता MP3 जैसे संपीड़ित प्रारूप की तुलना में बहुत बेहतर है</strong> (B)।<br>• हालांकि यह सच है कि WAV फाइलें बड़ी होती हैं (A), लेकिन बड़ा फ़ाइल आकार एक <em>कमी</em> है, न कि 'लाभ' जैसा कि प्रश्न में पूछा गया है। दोनों स्वरूपों में आम तौर पर क्रॉस-प्लेटफ़ॉर्म समस्याएँ नहीं होती हैं।<br>इसलिए, लाभ B और D हैं।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q24",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "Unit 10: Higher Education System",
    "unitHI": "इकाई 10: उच्च शिक्षा प्रणाली",
    "topicEN": "Institutions of Higher Learning and Education in Ancient India",
    "topicHI": "प्राचीन भारत में उच्च शिक्षा के संस्थान और शिक्षा",
    "content": {
      "en": {
        "question": "The three ratna (triratna) of Jain education Philosophy which lead to moksha are:",
        "options": [
          "Samyak Darshan, Samyak Gyan, Samyak Charitra",
          "Samyak Drishti, Samyak Vak, Samyak Sheel",
          "Samyak Bodh, Samyak Anubhav, Samyak Tark",
          "Samyak Yam, Samyak Niyam, Samyak Asan"
        ],
        "explanation": "In Jainism, the path to liberation (Moksha) is guided by the <strong>Triratna (Three Jewels)</strong>:<br>1. <strong>Samyak Darshan</strong> (Right Faith / Right Perception).<br>2. <strong>Samyak Gyan</strong> (Right Knowledge).<br>3. <strong>Samyak Charitra</strong> (Right Conduct).<br>Practicing these three simultaneously helps a soul break free from the karmic cycle."
      },
      "hi": {
        "question": "जैन शिक्षा दर्शन के तीन रत्न (त्रिरत्न) जो मोक्ष की ओर ले जाते हैं:",
        "options": [
          "सम्यक दर्शन, सम्यक ज्ञान, सम्यक चरित्र",
          "सम्यक दृष्टि, सम्यक वाक, सम्यक शील",
          "सम्यक बोध, सम्यक अनुभव, सम्यक तर्क",
          "सम्यक यम, सम्यक नियम, सम्यक आसन"
        ],
        "explanation": "जैन धर्म में, मुक्ति (मोक्ष) का मार्ग <strong>त्रिरत्न (तीन रत्नों)</strong> द्वारा निर्देशित है:<br>1. <strong>सम्यक दर्शन</strong> (सही विश्वास / सही धारणा)।<br>2. <strong>सम्यक ज्ञान</strong> (सही ज्ञान)।<br>3. <strong>सम्यक चरित्र</strong> (सही आचरण)।<br>इन तीनों का एक साथ अभ्यास करने से आत्मा को कर्म चक्र से मुक्त होने में मदद मिलती है।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q25",
    "difficulty": "medium",
    "correct": 3,
    "unitEN": "Unit 8: Information and Communication Technology (ICT)",
    "unitHI": "इकाई 8: सूचना और संचार प्रौद्योगिकी (ICT)",
    "topicEN": "Basics of Internet and Networking",
    "topicHI": "इंटरनेट और नेटवर्किंग की मूल बातें",
    "content": {
      "en": {
        "question": "Identify the correct order in which the following actions A-D take place in an interaction between a web browser and a web server when you plan to visit Amazon website to purchase a Solid State Drive (SSD).<br><br>(A) The web browser requests a webpage using HTTP<br>(B) The web browser establishes a TCP connection with the Amazon's web server<br>(C) The web server sends the requested webpage using HTTP<br>(D) The web browser finds the IP address of Amazon's website using DNS<br><br>Choose the correct answer from the options given below:",
        "options": [
          "(A), (B), (D), (C)",
          "(B), (A), (C), (D)",
          "(C), (D), (B), (A)",
          "(D), (B), (A), (C)"
        ],
        "explanation": "<strong>Correct Sequence of Web Browsing (Browser-Server Interaction):</strong><br>1. <strong>(D) DNS Resolution:</strong> The browser first queries the Domain Name System (DNS) to convert 'amazon.com' into a machine-readable IP address.<br>2. <strong>(B) TCP Connection:</strong> Once the IP is known, the browser establishes a secure TCP/IP connection with Amazon's server (usually via a 3-way handshake).<br>3. <strong>(A) HTTP Request:</strong> Over this connection, the browser sends an HTTP/HTTPS request for the specific webpage.<br>4. <strong>(C) HTTP Response:</strong> The web server processes the request and sends the requested webpage back using HTTP.<br>Correct Order: D -> B -> A -> C."
      },
      "hi": {
        "question": "जब आप सॉलिड स्टेट ड्राइव (SSD) खरीदने के लिए अमेज़न वेबसाइट पर जाने की योजना बनाते हैं, तो वेब ब्राउज़र और वेब सर्वर के बीच बातचीत में निम्नलिखित क्रियाएँ किस क्रम में होती हैं, उसे पहचानिए।<br><br>(A) वेब ब्राउज़र HTTP का उपयोग करके वेबपेज का अनुरोध करता है<br>(B) वेब ब्राउज़र अमेज़न के वेब सर्वर के साथ एक TCP कनेक्शन स्थापित करता है<br>(C) वेब सर्वर HTTP का उपयोग करके अनुरोधित वेबपेज भेजता है<br>(D) वेब ब्राउज़र DNS का उपयोग करके अमेज़न की वेबसाइट का IP पता ढूंढता है<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "(A), (B), (D), (C)",
          "(B), (A), (C), (D)",
          "(C), (D), (B), (A)",
          "(D), (B), (A), (C)"
        ],
        "explanation": "<strong>वेब ब्राउज़िंग का सही क्रम (ब्राउज़र-सर्वर इंटरेक्शन):</strong><br>1. <strong>(D) DNS रिज़ॉल्यूशन:</strong> 'amazon.com' को मशीन-पठनीय IP पते में बदलने के लिए ब्राउज़र पहले डोमेन नेम सिस्टम (DNS) से पूछताछ करता है।<br>2. <strong>(B) TCP कनेक्शन:</strong> एक बार IP ज्ञात हो जाने के बाद, ब्राउज़र अमेज़ॅन के सर्वर (आमतौर पर 3-वे हैंडशेक के माध्यम से) के साथ एक सुरक्षित TCP/IP कनेक्शन स्थापित करता है।<br>3. <strong>(A) HTTP अनुरोध:</strong> इस कनेक्शन पर, ब्राउज़र विशिष्ट वेबपेज के लिए HTTP/HTTPS अनुरोध भेजता है।<br>4. <strong>(C) HTTP प्रतिक्रिया:</strong> वेब सर्वर अनुरोध को संसाधित करता है और HTTP का उपयोग करके अनुरोधित वेबपेज वापस भेजता है।<br>सही क्रम: D -> B -> A -> C।"
      }
    }
  }, 
  {
    "id": "jan25-27-s2-p1-q26",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "Unit 5: Mathematical Reasoning and Aptitude",
    "unitHI": "इकाई 5: गणितीय तर्क और अभिरुचि",
    "topicEN": "Letter Series and Codes",
    "topicHI": "अक्षर श्रृंखला और कूट",
    "content": {
      "en": {
        "question": "Choose the next term of the series A4C, E36G, I100K, _______.",
        "options": ["L169M", "N225O", "M196O", "M169O"],
        "explanation": "<strong>Step-by-step Pattern Breakdown:</strong><br>1. <strong>First Letter:</strong> A(1), E(5), I(9)... The difference is +4. Next letter = 9 + 4 = 13, which is <strong>M</strong>.<br>2. <strong>Number in middle:</strong> 4 ($2^2$), 36 ($6^2$), 100 ($10^2$). The base numbers are 2, 6, 10 (increasing by +4). The next base is 14. So, $14^2 = $ <strong>196</strong>.<br>3. <strong>Last Letter:</strong> C(3), G(7), K(11)... The difference is +4. Next letter = 11 + 4 = 15, which is <strong>O</strong>.<br>Combining them all: <strong>M196O</strong>."
      },
      "hi": {
        "question": "श्रृंखला का अगला पद A4C, E36G, I100K, _______ चुनें।",
        "options": ["L169M", "N225O", "M196O", "M169O"],
        "explanation": "<strong>चरण-दर-चरण पैटर्न विश्लेषण:</strong><br>1. <strong>पहला अक्षर:</strong> A(1), E(5), I(9)... अंतर +4 का है। अगला अक्षर = 9 + 4 = 13, जो <strong>M</strong> है।<br>2. <strong>बीच की संख्या:</strong> 4 ($2^2$), 36 ($6^2$), 100 ($10^2$)। आधार संख्या 2, 6, 10 हैं (+4 बढ़ रही हैं)। अगला आधार 14 है। इसलिए, $14^2 = $ <strong>196</strong>।<br>3. <strong>अंतिम अक्षर:</strong> C(3), G(7), K(11)... अंतर +4 का है। अगला अक्षर = 11 + 4 = 15, जो <strong>O</strong> है।<br>सभी को मिलाने पर: <strong>M196O</strong>।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q27",
    "difficulty": "hard",
    "correct": 3,
    "unitEN": "Unit 11: Miscellaneous",
    "unitHI": "इकाई 11: विविध",
    "topicEN": "Indian Film Awards and Cultural Recognition",
    "topicHI": "भारतीय फिल्म पुरस्कार और सांस्कृतिक मान्यता",
    "content": {
      "en": {
        "question": "Among the following who are not the recipients of Dada Saheb Phalke Award?<br><br>(A) L. V. Prasad<br>(B) Shammi Kapoor<br>(C) B. N. Reddy<br>(D) Rajesh Khanna<br>(E) Dharmendra<br><br>Choose the correct answer from the options given below:",
        "options": [
          "(A) and (C) Only",
          "(C) and (E) Only",
          "(A), (D) and (E) Only",
          "(B), (D) and (E) Only"
        ],
        "explanation": "The <strong>Dadasaheb Phalke Award</strong> is India's highest award in the field of cinema.<br>• <strong>B. N. Reddy (C)</strong> received it in 1974.<br>• <strong>L. V. Prasad (A)</strong> received it in 1982.<br>However, <strong>Shammi Kapoor (B), Rajesh Khanna (D), and Dharmendra (E)</strong> have NOT been awarded the Dadasaheb Phalke Award. Therefore, B, D, and E are the non-recipients."
      },
      "hi": {
        "question": "निम्नलिखित में से कौन दादा साहब फाल्के पुरस्कार के प्राप्तकर्ता नहीं हैं?<br><br>(A) एलवी प्रसाद<br>(B) शम्मी कपूर<br>(C) बीएन रेड्डी<br>(D) राजेश खन्ना<br>(E) धर्मेंद्र<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "(A) और (C) केवल",
          "(C) और (E) केवल",
          "(A), (D) और (E) केवल",
          "(B), (D) और (E) केवल"
        ],
        "explanation": "<strong>दादा साहब फाल्के पुरस्कार</strong> सिनेमा के क्षेत्र में भारत का सर्वोच्च पुरस्कार है।<br>• <strong>बी. एन. रेड्डी (C)</strong> को यह 1974 में मिला था।<br>• <strong>एल. वी. प्रसाद (A)</strong> को यह 1982 में मिला था।<br>हालाँकि, <strong>शम्मी कपूर (B), राजेश खन्ना (D), और धर्मेंद्र (E)</strong> को दादा साहब फाल्के पुरस्कार से सम्मानित नहीं किया गया है। इसलिए, B, D और E गैर-प्राप्तकर्ता हैं।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q28",
    "difficulty": "hard",
    "correct": 0,
    "unitEN": "Unit 6: Logical Reasoning",
    "unitHI": "इकाई 6: तार्किक विचार",
    "topicEN": "Indian Logic: Means of Knowledge (Pramanas)",
    "topicHI": "भारतीय तर्क: ज्ञान के साधन (प्रमाण)",
    "content": {
      "en": {
        "question": "According to Nyāya, \"Knowledge that is not derived through the instrumentality of other knowledge\" is called:",
        "options": ["Pratyakṣa", "Anumāna", "Śabda", "Anupalabdhi"],
        "explanation": "According to the Nyaya school of Indian logic, <strong>Pratyakṣa (Perception)</strong> is the direct and immediate knowledge obtained through the contact of the senses with the object. It does NOT depend on any previous or other knowledge. In contrast, <em>Anumāna (inference)</em>, <em>Upamana (comparison)</em>, and <em>Śabda (verbal testimony)</em> are mediate knowledge, as they rely on the instrumentality of some prior knowledge."
      },
      "hi": {
        "question": "न्याय के अनुसार, \"वह ज्ञान जो अन्य ज्ञान के माध्यम से प्राप्त नहीं होता है\" कहलाता है:",
        "options": ["प्रत्यक्ष (Pratyakṣa)", "अनुमान (Anumāna)", "शब्द (Śabda)", "अनुपलब्धि (Anupalabdhi)"],
        "explanation": "भारतीय तर्कशास्त्र के न्याय दर्शन के अनुसार, <strong>प्रत्यक्ष (Perception)</strong> वस्तु के साथ इंद्रियों के संपर्क के माध्यम से प्राप्त प्रत्यक्ष और तत्काल ज्ञान है। यह किसी भी पिछले या अन्य ज्ञान पर निर्भर नहीं करता है। इसके विपरीत, <em>अनुमान</em>, <em>उपमान (तुलना)</em>, और <em>शब्द</em> मध्यस्थ ज्ञान हैं, क्योंकि वे किसी पूर्व ज्ञान के माध्यम पर निर्भर करते हैं।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q29",
    "difficulty": "hard",
    "correct": 1,
    "unitEN": "Unit 5: Mathematical Reasoning and Aptitude",
    "unitHI": "इकाई 5: गणितीय तर्क और अभिरुचि",
    "topicEN": "Number Series",
    "topicHI": "संख्या श्रृंखला",
    "content": {
      "en": {
        "question": "Which of the statements (A)-(D) are true in the context of number series I and II given below:<br><br>Series I: 6, 24, x, 720, 5040<br>Series II: 432, 250, 128, y, 16<br><br>(A) The sum of x and y is 164<br>(B) x exceeds the double of y by 12<br>(C) Both x and y are exactly divisible by 6<br>(D) Either x or y is a perfect square<br><br>Choose the correct answer from the options given below:",
        "options": [
          "(A) and (B) Only",
          "(B) and (C) Only",
          "(A) and (D) Only",
          "(A), (B) and (C) Only"
        ],
        "explanation": "<strong>Finding x and y:</strong><br>• <strong>Series I:</strong> Multiples logic -> 6×4=24; 24×5=120; 120×6=720; 720×7=5040. So, <strong>x = 120</strong>.<br>• <strong>Series II:</strong> Pattern is $2 \\times n^3$ in decreasing order -> $2\\times6^3 = 432$; $2\\times5^3 = 250$; $2\\times4^3 = 128$; $2\\times3^3 = 54$; $2\\times2^3 = 16$. So, <strong>y = 54</strong>.<br><br><strong>Evaluating Statements:</strong><br>A. Sum = 120 + 54 = 174 (Not 164, so False).<br>B. Double of y is 108. x (120) exceeds 108 by 12. (True).<br>C. Both 120 and 54 are divisible by 6. (True).<br>D. Neither 120 nor 54 is a perfect square. (False).<br>Thus, only B and C are true."
      },
      "hi": {
        "question": "नीचे दी गई संख्या श्रृंखला I और II के संदर्भ में कौन से कथन (A)-(D) सत्य हैं:<br><br>श्रृंखला I: 6, 24, x, 720, 5040<br>श्रृंखला II: 432, 250, 128, y, 16<br><br>(A) x और y का योग 164 है<br>(B) x, y के दुगुने से 12 अधिक है<br>(C) x और y दोनों 6 से पूर्णतः विभाज्य हैं<br>(D) या तो x या y पूर्ण वर्ग है<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "(A) और (B) केवल",
          "(B) और (C) केवल",
          "(A) और (D) केवल",
          "(A), (B) और (C) केवल"
        ],
        "explanation": "<strong>x और y खोजना:</strong><br>• <strong>श्रृंखला I:</strong> गुणकों का तर्क -> 6×4=24; 24×5=120; 120×6=720; 720×7=5040. तो, <strong>x = 120</strong>।<br>• <strong>श्रृंखला II:</strong> घटते क्रम में पैटर्न $2 \\times n^3$ है -> $2\\times6^3 = 432$; $2\\times5^3 = 250$; $2\\times4^3 = 128$; $2\\times3^3 = 54$; $2\\times2^3 = 16$. तो, <strong>y = 54</strong>।<br><br><strong>कथनों का मूल्यांकन:</strong><br>A. योग = 120 + 54 = 174 (164 नहीं, तो असत्य)।<br>B. y का दुगुना 108 है। x (120), 108 से 12 अधिक है। (सत्य)।<br>C. 120 और 54 दोनों 6 से विभाज्य हैं। (सत्य)।<br>D. न तो 120 और न ही 54 पूर्ण वर्ग है। (असत्य)।<br>अतः, केवल B और C सत्य हैं।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q30",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "Unit 8: Information and Communication Technology (ICT)",
    "unitHI": "इकाई 8: सूचना और संचार प्रौद्योगिकी (ICT)",
    "topicEN": "Digital Initiatives in Higher Education",
    "topicHI": "उच्च शिक्षा में डिजिटल पहल",
    "content": {
      "en": {
        "question": "For creating mind maps to brainstorm ideas during a class, which of the following are the most suitable tools used for this purpose?<br><br>(A) Mindmeister<br>(B) Mindomo<br>(C) Coggle<br>(D) Miro<br>(E) Popplet<br><br>Choose the correct answer from the options given below:",
        "options": [
          "(C) and (E) Only",
          "(B), (C) and (D) Only",
          "(A), (B), (C), (D) and (E)",
          "(A), (C) and (E) Only"
        ],
        "explanation": "All the listed platforms are highly popular digital tools specifically designed for collaborative brainstorming and creating <strong>Mind Maps</strong> or concept maps.<br>• MindMeister & Mindomo are dedicated mind mapping softwares.<br>• Coggle is a freeware mind-mapping web app.<br>• Miro is an online collaborative whiteboarding platform ideal for mind mapping.<br>• Popplet is a tool used to visually organize ideas. <br>Hence, all (A, B, C, D, E) are suitable tools for this purpose."
      },
      "hi": {
        "question": "कक्षा के दौरान विचारों पर मंथन करने के लिए माइंड मैप (mind maps) बनाने हेतु निम्नलिखित में से कौन से उपकरण सबसे उपयुक्त हैं?<br><br>(A) माइंडमिस्टर (Mindmeister)<br>(B) मिन्दोमो (Mindomo)<br>(C) कॉगल (Coggle)<br>(D) मिरो (Miro)<br>(E) पॉप्लेट (Popplet)<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "(C) और (E) केवल",
          "(B), (C) और (D) केवल",
          "(A), (B), (C), (D) और (E)",
          "(A), (C) और (E) केवल"
        ],
        "explanation": "सूचीबद्ध सभी प्लेटफ़ॉर्म विशेष रूप से सहयोगात्मक विचार-मंथन (brainstorming) और <strong>माइंड मैप (Mind Maps)</strong> या अवधारणा मानचित्र बनाने के लिए डिज़ाइन किए गए अत्यधिक लोकप्रिय डिजिटल उपकरण हैं।<br>• माइंडमिस्टर और मिन्दोमो समर्पित माइंड मैपिंग सॉफ्टवेयर हैं।<br>• कॉगल एक फ्रीवेयर माइंड-मैपिंग वेब ऐप है।<br>• मिरो एक ऑनलाइन सहयोगात्मक व्हाइटबोर्डिंग प्लेटफॉर्म है जो माइंड मैपिंग के लिए आदर्श है।<br>• पॉप्लेट एक ऐसा उपकरण है जिसका उपयोग विचारों को स्पष्ट रूप से व्यवस्थित करने के लिए किया जाता है।<br>अतः इस उद्देश्य के लिए सभी (A, B, C, D, E) उपयुक्त उपकरण हैं।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q31",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "Unit 10: Higher Education System",
    "unitHI": "इकाई 10: उच्च शिक्षा प्रणाली",
    "topicEN": "Policies, Governance and Administration",
    "topicHI": "नीतियाँ, शासन और प्रशासन",
    "content": {
      "en": {
        "question": "<p>Match the following:</p><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><tr><th style='padding:8px;'>List-I (Courses)</th><th style='padding:8px;'>List-II (Regulating Bodies)</th></tr><tr><td style='padding:6px;'>A. B.Ed - M.Ed</td><td style='padding:6px;'>I. MCI</td></tr><tr><td style='padding:6px;'>B. Special Education</td><td style='padding:6px;'>II. AICTE</td></tr><tr><td style='padding:6px;'>C. B.Tech - Engineering</td><td style='padding:6px;'>III. RCI</td></tr><tr><td style='padding:6px;'>D. MBBS</td><td style='padding:6px;'>IV. NCTE</td></tr></table><br>Choose the correct answer from the options given below:",
        "options": [
          "A-I, B-II, C-III, D-IV",
          "A-IV, B-III, C-II, D-I",
          "A-III, B-I, C-II, D-IV",
          "A-II, B-IV, C-I, D-III"
        ],
        "explanation": "<strong>Matching Educational Courses with their Regulators:</strong><br>• <strong>B.Ed - M.Ed (A-IV):</strong> Teachers' education is regulated by the National Council for Teacher Education (<strong>NCTE</strong>).<br>• <strong>Special Education (B-III):</strong> Education and training for specially-abled individuals is regulated by the Rehabilitation Council of India (<strong>RCI</strong>).<br>• <strong>B.Tech - Engineering (C-II):</strong> Technical and engineering courses are governed by the All India Council for Technical Education (<strong>AICTE</strong>).<br>• <strong>MBBS (D-I):</strong> Medical education is regulated by the Medical Council of India (<strong>MCI</strong>) - now replaced by NMC."
      },
      "hi": {
        "question": "<p>निम्नलिखित का मिलान करें:</p><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><tr><th style='padding:8px;'>सूची-I (पाठ्यक्रम)</th><th style='padding:8px;'>सूची-II (विनियामक निकाय)</th></tr><tr><td style='padding:6px;'>A. B.Ed - M.Ed</td><td style='padding:6px;'>I. MCI</td></tr><tr><td style='padding:6px;'>B. विशेष शिक्षा</td><td style='padding:6px;'>II. AICTE</td></tr><tr><td style='padding:6px;'>C. B.Tech - इंजीनियरिंग</td><td style='padding:6px;'>III. RCI</td></tr><tr><td style='padding:6px;'>D. MBBS</td><td style='padding:6px;'>IV. NCTE</td></tr></table><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "A-I, B-II, C-III, D-IV",
          "A-IV, B-III, C-II, D-I",
          "A-III, B-I, C-II, D-IV",
          "A-II, B-IV, C-I, D-III"
        ],
        "explanation": "<strong>शैक्षिक पाठ्यक्रमों का उनके नियामकों के साथ मिलान:</strong><br>• <strong>B.Ed - M.Ed (A-IV):</strong> शिक्षक शिक्षा को राष्ट्रीय शिक्षक शिक्षा परिषद (<strong>NCTE</strong>) द्वारा विनियमित किया जाता है।<br>• <strong>विशेष शिक्षा (B-III):</strong> विशेष रूप से विकलांग व्यक्तियों के लिए शिक्षा और प्रशिक्षण भारतीय पुनर्वास परिषद (<strong>RCI</strong>) द्वारा विनियमित किया जाता है।<br>• <strong>B.Tech - इंजीनियरिंग (C-II):</strong> तकनीकी और इंजीनियरिंग पाठ्यक्रम अखिल भारतीय तकनीकी शिक्षा परिषद (<strong>AICTE</strong>) द्वारा शासित होते हैं।<br>• <strong>MBBS (D-I):</strong> चिकित्सा शिक्षा को भारतीय चिकित्सा परिषद (<strong>MCI</strong>) द्वारा विनियमित किया जाता है - जिसे अब NMC द्वारा बदल दिया गया है।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q32",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "Unit 8: Information and Communication Technology (ICT)",
    "unitHI": "इकाई 8: सूचना और संचार प्रौद्योगिकी (ICT)",
    "topicEN": "ICT General Terminology and Concepts",
    "topicHI": "ICT सामान्य शब्दावली और अवधारणाएँ",
    "content": {
      "en": {
        "question": "Arrange the following social media platforms in correct chronological order (from the earliest to latest).<br><br>(A) Instagram<br>(B) WhatsApp<br>(C) Twitter (now X)<br>(D) Facebook<br><br>Choose the correct answer from the options given below:",
        "options": [
          "(D), (C), (B), (A)",
          "(D), (B), (C), (A)",
          "(D), (C), (A), (B)",
          "(D), (B), (A), (C)"
        ],
        "explanation": "<strong>Launch years of Social Media platforms:</strong><br>1. <strong>Facebook (D):</strong> Founded in February <strong>2004</strong> by Mark Zuckerberg.<br>2. <strong>Twitter / X (C):</strong> Founded in March <strong>2006</strong> by Jack Dorsey and others.<br>3. <strong>WhatsApp (B):</strong> Founded in February <strong>2009</strong> by Jan Koum and Brian Acton.<br>4. <strong>Instagram (A):</strong> Launched in October <strong>2010</strong> by Kevin Systrom and Mike Krieger.<br>The correct chronological sequence is D -> C -> B -> A."
      },
      "hi": {
        "question": "निम्नलिखित सोशल मीडिया प्लेटफॉर्म्स को सही कालानुक्रमिक क्रम में व्यवस्थित करें (प्रारंभिक से नवीनतम तक)।<br><br>(A) इंस्टाग्राम<br>(B) व्हाट्सएप<br>(C) ट्विटर (अब X)<br>(D) फेसबुक<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "(D), (C), (B), (A)",
          "(D), (B), (C), (A)",
          "(D), (C), (A), (B)",
          "(D), (B), (A), (C)"
        ],
        "explanation": "<strong>सोशल मीडिया प्लेटफॉर्म के लॉन्च वर्ष:</strong><br>1. <strong>फेसबुक (D):</strong> फरवरी <strong>2004</strong> में मार्क जुकरबर्ग द्वारा स्थापित।<br>2. <strong>ट्विटर / X (C):</strong> मार्च <strong>2006</strong> में जैक डोरसी और अन्य द्वारा स्थापित।<br>3. <strong>व्हाट्सएप (B):</strong> फरवरी <strong>2009</strong> में जान कौम और ब्रायन एक्टन द्वारा स्थापित।<br>4. <strong>इंस्टाग्राम (A):</strong> अक्टूबर <strong>2010</strong> में केविन सिस्ट्रॉम और माइक क्राइगर द्वारा लॉन्च किया गया।<br>सही कालानुक्रमिक क्रम D -> C -> B -> A है।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q33",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "Unit 2: Research Aptitude",
    "unitHI": "इकाई 2: शोध अभिरुचि",
    "topicEN": "Research: Meaning, Types and Characteristics",
    "topicHI": "शोध: अर्थ, प्रकार और विशेषताएँ",
    "content": {
      "en": {
        "question": "______ issues concern the question of what is or should be regarded as acceptable knowledge in a discipline.",
        "options": ["Epistemological", "Ontological", "Positivist", "Realism"],
        "explanation": "<strong>Epistemology</strong> is the branch of philosophy concerned with the theory of knowledge. It studies the nature, origin, and scope of knowledge. Therefore, 'epistemological issues' deal precisely with the question of what constitutes acceptable, valid, and legitimate knowledge in any given discipline. In contrast, <em>Ontology</em> deals with the nature of existence or reality."
      },
      "hi": {
        "question": "______ मुद्दे इस प्रश्न से संबंधित हैं कि किसी विषय में क्या स्वीकार्य ज्ञान माना जाना चाहिए।",
        "options": ["ज्ञानमीमांसीय (Epistemological)", "सत्तामूलक (Ontological)", "प्रत्यक्षवादी (Positivist)", "यथार्थवाद (Realism)"],
        "explanation": "<strong>ज्ञानमीमांसा (Epistemology)</strong> ज्ञान के सिद्धांत से संबंधित दर्शन की शाखा है। यह ज्ञान की प्रकृति, उत्पत्ति और दायरे का अध्ययन करती है। इसलिए, 'ज्ञानमीमांसीय मुद्दे' ठीक उसी प्रश्न से निपटते हैं कि किसी भी दिए गए अनुशासन में स्वीकार्य, वैध और प्रामाणिक ज्ञान क्या है। इसके विपरीत, <em>सत्तामीमांसा (Ontology)</em> अस्तित्व या वास्तविकता की प्रकृति से संबंधित है।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q34",
    "difficulty": "medium",
    "correct": 3,
    "unitEN": "Unit 2: Research Aptitude",
    "unitHI": "इकाई 2: शोध अभिरुचि",
    "topicEN": "Research: Meaning, Types and Characteristics",
    "topicHI": "शोध: अर्थ, प्रकार और विशेषताएँ",
    "content": {
      "en": {
        "question": "A variable which can take up only integer values and not any fractional value is called as __________.",
        "options": [
          "Continuous variable",
          "Complex variable",
          "Temporal variable",
          "Discrete variable"
        ],
        "explanation": "In statistics, a <strong>Discrete variable</strong> is a type of variable that can only take specific, distinct values (usually whole numbers or integers), such as the number of students in a class or cars in a parking lot. It cannot have fractional or decimal values. A <strong>Continuous variable</strong>, on the other hand, can take any value within a range (including fractions/decimals), like height or weight."
      },
      "hi": {
        "question": "एक चर जो केवल पूर्णांक (integer) मान ले सकता है और कोई भिन्नात्मक मान नहीं ले सकता, उसे __________ कहा जाता है।",
        "options": [
          "सतत चर (Continuous variable)",
          "जटिल चर (Complex variable)",
          "लौकिक चर (Temporal variable)",
          "असतत चर (Discrete variable)"
        ],
        "explanation": "सांख्यिकी में, एक <strong>असतत चर (Discrete variable)</strong> एक प्रकार का चर है जो केवल विशिष्ट, अलग-अलग मान (आमतौर पर पूर्ण संख्या या पूर्णांक) ले सकता है, जैसे कक्षा में छात्रों की संख्या या पार्किंग में कारों की संख्या। इसका भिन्नात्मक या दशमलव मान नहीं हो सकता है। दूसरी ओर, <strong>सतत चर (Continuous variable)</strong> ऊंचाई या वजन की तरह एक सीमा के भीतर (भिन्न / दशमलव सहित) कोई भी मान ले सकता है।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q35",
    "difficulty": "easy",
    "correct": 3,
    "unitEN": "Unit 4: Communication",
    "unitHI": "इकाई 4: संचार",
    "topicEN": "Mass Media and Society",
    "topicHI": "जनसंचार माध्यम और समाज",
    "content": {
      "en": {
        "question": "What does the acronym 'TRP' mean?",
        "options": [
          "Television Recording Parameter",
          "Telephone Recording Points",
          "Television Rating Parameter",
          "Television Rating Points"
        ],
        "explanation": "The acronym TRP stands for <strong>Television Rating Points</strong>. It is a metric used in marketing and advertising to evaluate the viewership and popularity of a particular television program. A higher TRP indicates that a large number of people are watching the show."
      },
      "hi": {
        "question": "संक्षिप्त शब्द 'TRP' का क्या अर्थ है?",
        "options": [
          "टेलीविजन रिकॉर्डिंग पैरामीटर",
          "टेलीफोन रिकॉर्डिंग पॉइंट",
          "टेलीविज़न रेटिंग पैरामीटर",
          "टेलीविज़न रेटिंग पॉइंट"
        ],
        "explanation": "TRP का पूर्ण रूप <strong>टेलीविज़न रेटिंग पॉइंट (Television Rating Points)</strong> है। यह विपणन और विज्ञापन में किसी विशेष टेलीविजन कार्यक्रम की दर्शकों की संख्या और लोकप्रियता का मूल्यांकन करने के लिए उपयोग किया जाने वाला एक मीट्रिक है। एक उच्च टीआरपी इंगित करती है कि बड़ी संख्या में लोग उस शो को देख रहे हैं।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q36",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "Unit 9: People, Development and Environment",
    "unitHI": "इकाई 9: लोग, विकास और पर्यावरण",
    "topicEN": "Environmental Issues: Climate Change",
    "topicHI": "पर्यावरणीय मुद्दे: जलवायु परिवर्तन",
    "content": {
      "en": {
        "question": "When troposphere becomes cloudier, it causes more reflection of solar flux. In the context of Global Warming, this is an example of:",
        "options": [
          "Positive feedback",
          "Negative feedback",
          "Neither positive nor negative feedback",
          "Both positive and negative feedbacks"
        ],
        "explanation": "This is an example of a <strong>Negative feedback</strong> loop. Global warming causes more water evaporation, which forms more clouds in the troposphere. These thick clouds reflect more incoming solar radiation (sunlight) back into space before it hits the ground. This reflection causes a cooling effect, thereby <em>counteracting</em> or slowing down the initial warming. Negative feedback stabilizes a system."
      },
      "hi": {
        "question": "जब क्षोभमंडल (troposphere) बादल बन जाता है, तो इससे सौर प्रवाह (solar flux) का अधिक परावर्तन होता है। ग्लोबल वार्मिंग के संदर्भ में, यह इसका एक उदाहरण है:",
        "options": [
          "सकारात्मक प्रतिक्रिया (Positive feedback)",
          "नकारात्मक प्रतिक्रिया (Negative feedback)",
          "न तो सकारात्मक और न ही नकारात्मक प्रतिक्रिया",
          "सकारात्मक और नकारात्मक दोनों प्रतिक्रियाएँ"
        ],
        "explanation": "यह <strong>नकारात्मक प्रतिक्रिया (Negative feedback)</strong> लूप का एक उदाहरण है। ग्लोबल वार्मिंग से पानी का वाष्पीकरण अधिक होता है, जिससे क्षोभमंडल में अधिक बादल बनते हैं। ये घने बादल जमीन पर टकराने से पहले अधिक आने वाले सौर विकिरण (सूर्य के प्रकाश) को अंतरिक्ष में वापस परावर्तित कर देते हैं। यह प्रतिबिंब एक शीतलन प्रभाव पैदा करता है, जिससे प्रारंभिक वार्मिंग का <em>मुकाबला</em> होता है या धीमा हो जाता है। नकारात्मक प्रतिक्रिया प्रणाली को स्थिर करती है।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q37",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "Unit 2: Research Aptitude",
    "unitHI": "इकाई 2: शोध अभिरुचि",
    "topicEN": "Steps of Research",
    "topicHI": "शोध के चरण",
    "content": {
      "en": {
        "question": "Identify the correct statements about hypothesis testing.<br><br>(A) A null hypothesis assumes that no relationship between variables or different groups exists.<br>(B) An alternative hypothesis assumes that no relationship between variable or different group exists.<br>(C) A hypothesis must be acceptable or falsifiable.<br>(D) The null hypothesis is always true.<br><br>Choose the correct answer from the options given below:",
        "options": [
          "(A) and (C) Only",
          "(A), (B) and (C) Only",
          "(B) and (C) Only",
          "(A) and (D) Only"
        ],
        "explanation": "Evaluating the statements:<br>• <strong>(A) True:</strong> The Null Hypothesis (H0) always predicts that there is no effect, no relationship, or no difference.<br>• <strong>(B) False:</strong> The Alternative Hypothesis (H1) assumes that a relationship DOES exist between variables.<br>• <strong>(C) True:</strong> A core principle of scientific research (Karl Popper's theory) is that a hypothesis must be falsifiable (capable of being proven false by evidence).<br>• <strong>(D) False:</strong> The null hypothesis is not \"always true\"; the whole point of testing is to see if we can reject it.<br>Therefore, only A and C are correct."
      },
      "hi": {
        "question": "परिकल्पना परीक्षण (hypothesis testing) के बारे में सही कथनों की पहचान करें।<br><br>(A) शून्य परिकल्पना (null hypothesis) मानती है कि चर या विभिन्न समूहों के बीच कोई संबंध मौजूद नहीं है।<br>(B) वैकल्पिक परिकल्पना मानती है कि चर या विभिन्न समूहों के बीच कोई संबंध मौजूद नहीं है।<br>(C) परिकल्पना स्वीकार्य या मिथ्या साबित करने योग्य (falsifiable) होनी चाहिए।<br>(D) शून्य परिकल्पना हमेशा सत्य होती है।<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "(A) और (C) केवल",
          "(A), (B) और (C) केवल",
          "(B) और (C) केवल",
          "(A) और (D) केवल"
        ],
        "explanation": "कथनों का मूल्यांकन:<br>• <strong>(A) सत्य:</strong> शून्य परिकल्पना (H0) हमेशा भविष्यवाणी करती है कि कोई प्रभाव, कोई संबंध या कोई अंतर नहीं है।<br>• <strong>(B) असत्य:</strong> वैकल्पिक परिकल्पना (H1) मानती है कि चर के बीच एक संबंध मौजूद है।<br>• <strong>(C) सत्य:</strong> वैज्ञानिक अनुसंधान (कार्ल पॉपर का सिद्धांत) का एक मूल सिद्धांत यह है कि एक परिकल्पना को गलत साबित करने योग्य (falsifiable) होना चाहिए।<br>• <strong>(D) असत्य:</strong> शून्य परिकल्पना \"हमेशा सत्य\" नहीं होती है; परीक्षण का पूरा उद्देश्य यह देखना है कि क्या हम इसे अस्वीकार (reject) कर सकते हैं।<br>अतः केवल A और C सही हैं।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q38",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "Unit 1: Teaching Aptitude",
    "unitHI": "इकाई 1: शिक्षण अभिरुचि",
    "topicEN": "Evaluation Systems",
    "topicHI": "मूल्यांकन प्रणाली",
    "content": {
      "en": {
        "question": "Which of the following statements are true for criterion referenced Evaluation?<br><br>(A) It supports formative and diagnostic evaluation<br>(B) To know individual performance in a well-defined learning task<br>(C) Typically focuses on a more specific domain of examinee behaviours<br>(D) To know the relative position/rank of the students in a well-defined known population<br>(E) To ascertain an individual's status with respect to a defined achievement domain<br><br>Choose the correct answer from the options given below:",
        "options": [
          "(A), (B), (C) and (E) Only",
          "(C), (D) and (E) Only",
          "(A), (B) and (D) Only",
          "(B), (C) and (D) Only"
        ],
        "explanation": "<strong>Criterion-Referenced Evaluation</strong> compares a student's knowledge and skills against a predetermined standard, cut score, or criterion (NOT against other students).<br>• It helps in finding specific strengths/weaknesses (diagnostic) and supports formative assessment (A).<br>• It evaluates performance in specific learning tasks (B) and specific domains of behavior (C & E).<br>• Statement (D) is FALSE because finding a relative position/rank among a population is the definition of <strong>Norm-Referenced Evaluation</strong> (like percentiles in CAT/NET).<br>So, A, B, C, and E are true."
      },
      "hi": {
        "question": "मानदंड संदर्भित मूल्यांकन (criterion referenced Evaluation) के लिए निम्नलिखित में से कौन से कथन सत्य हैं?<br><br>(A) यह रचनात्मक और निदानात्मक मूल्यांकन का समर्थन करता है<br>(B) एक सुपरिभाषित शिक्षण कार्य में व्यक्तिगत प्रदर्शन जानने के लिए<br>(C) आमतौर पर परीक्षार्थी व्यवहार के अधिक विशिष्ट डोमेन पर ध्यान केंद्रित करता है<br>(D) एक सुपरिभाषित ज्ञात जनसंख्या में छात्रों की सापेक्ष स्थिति/रैंक जानने के लिए<br>(E) एक परिभाषित उपलब्धि डोमेन के संबंध में किसी व्यक्ति की स्थिति का पता लगाने के लिए<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "(A), (B), (C) और (E) केवल",
          "(C), (D) और (E) केवल",
          "(A), (B) और (D) केवल",
          "(B), (C) और (D) केवल"
        ],
        "explanation": "<strong>मानदंड-संदर्भित मूल्यांकन</strong> एक पूर्व निर्धारित मानक या मानदंड के खिलाफ छात्र के ज्ञान और कौशल की तुलना करता है (अन्य छात्रों के खिलाफ नहीं)।<br>• यह विशिष्ट ताकत/कमजोरियों को खोजने (निदान) में मदद करता है और रचनात्मक मूल्यांकन का समर्थन करता है (A)।<br>• यह विशिष्ट शिक्षण कार्यों (B) और व्यवहार के विशिष्ट डोमेन (C & E) में प्रदर्शन का मूल्यांकन करता है।<br>• कथन (D) असत्य है क्योंकि किसी जनसंख्या के बीच सापेक्ष स्थिति/रैंक खोजना <strong>मानक-संदर्भित मूल्यांकन (Norm-Referenced)</strong> की परिभाषा है (जैसे CAT/NET में पर्सेंटाइल)।<br>इसलिए, A, B, C और E सत्य हैं।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q39",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "Unit 8: Information and Communication Technology (ICT)",
    "unitHI": "इकाई 8: सूचना और संचार प्रौद्योगिकी (ICT)",
    "topicEN": "Basics of Internet, Intranet and Cyber Security",
    "topicHI": "इंटरनेट, इंट्रानेट और साइबर सुरक्षा की मूल बातें",
    "content": {
      "en": {
        "question": "<p>Match the following:</p><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><tr><th style='padding:8px;'>List-I (Computer attack/cyber crime)</th><th style='padding:8px;'>List-II (Definition)</th></tr><tr><td style='padding:6px;'>A. Worm</td><td style='padding:6px;'>I. Misdirecting users to a fraudulent website without their knowledge or consent</td></tr><tr><td style='padding:6px;'>B. Bot</td><td style='padding:6px;'>II. A malware that replicates itself in order to spread to other computers across the network</td></tr><tr><td style='padding:6px;'>C. Denial-of-Service</td><td style='padding:6px;'>III. Flooding sites with useless traffic to overwhelm a network</td></tr><tr><td style='padding:6px;'>D. Pharming</td><td style='padding:6px;'>IV. A malware that responds to external commands sent by an attacker</td></tr></table><br>Choose the correct answer from the options given below:",
        "options": [
          "A-II, B-IV, C-III, D-I",
          "A-I, B-III, C-IV, D-II",
          "A-III, B-II, C-I, D-IV",
          "A-IV, B-I, C-II, D-III"
        ],
        "explanation": "<strong>Matching Cyber Threats:</strong><br>• <strong>Worm (A-II):</strong> A standalone malware that independently replicates itself to spread to other computers over a network.<br>• <strong>Bot (B-IV):</strong> Short for robot; it's a malware that allows an attacker to remotely take control of an infected computer (making it part of a botnet) by sending external commands.<br>• <strong>Denial-of-Service or DoS (C-III):</strong> A cyber attack where the perpetrator seeks to make a machine or network unavailable to its intended users by temporarily disrupting services of a host connected to the internet (flooding it with useless traffic).<br>• <strong>Pharming (D-I):</strong> A cyber attack intended to redirect a website's traffic to another, fake site without the user's consent."
      },
      "hi": {
        "question": "<p>निम्नलिखित का मिलान करें:</p><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><tr><th style='padding:8px;'>सूची-I (कम्प्यूटर हमला/साइबर अपराध)</th><th style='padding:8px;'>सूची-II (परिभाषा)</th></tr><tr><td style='padding:6px;'>A. कीड़ा (Worm)</td><td style='padding:6px;'>I. उपयोगकर्ताओं को उनकी जानकारी या सहमति के बिना धोखाधड़ी वाली वेबसाइट पर ले जाना</td></tr><tr><td style='padding:6px;'>B. बॉट</td><td style='padding:6px;'>II. एक मैलवेयर जो नेटवर्क पर अन्य कंप्यूटरों में फैलने के लिए खुद की प्रतिकृति बनाता है</td></tr><tr><td style='padding:6px;'>C. सेवा से इनकार (DoS)</td><td style='padding:6px;'>III. नेटवर्क को प्रभावित करने के लिए साइटों पर बेकार ट्रैफिक की बाढ़ लाना</td></tr><tr><td style='padding:6px;'>D. फार्मिंग</td><td style='padding:6px;'>IV. एक मैलवेयर जो हमलावर द्वारा भेजे गए बाहरी आदेशों का जवाब देता है</td></tr></table><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "A-II, B-IV, C-III, D-I",
          "A-I, B-III, C-IV, D-II",
          "A-III, B-II, C-I, D-IV",
          "A-IV, B-I, C-II, D-III"
        ],
        "explanation": "<strong>साइबर खतरों का मिलान:</strong><br>• <strong>वर्म (A-II):</strong> एक स्टैंडअलोन मैलवेयर जो नेटवर्क पर अन्य कंप्यूटरों में फैलने के लिए स्वतंत्र रूप से खुद की प्रतिकृति (replicates) बनाता है।<br>• <strong>बॉट (B-IV):</strong> यह एक मैलवेयर है जो हमलावर को बाहरी आदेश भेजकर दूरस्थ रूप से संक्रमित कंप्यूटर का नियंत्रण लेने की अनुमति देता है।<br>• <strong>सेवा से इनकार / DoS (C-III):</strong> एक साइबर हमला जहां अपराधी इंटरनेट से जुड़े होस्ट की सेवाओं को अस्थायी रूप से बाधित करके (बेकार ट्रैफ़िक की बाढ़ ला कर) एक मशीन या नेटवर्क को उसके इच्छित उपयोगकर्ताओं के लिए अनुपलब्ध बनाना चाहता है।<br>• <strong>फार्मिंग (D-I):</strong> एक साइबर हमला जिसका उद्देश्य उपयोगकर्ता की सहमति के बिना वेबसाइट के ट्रैफ़िक को किसी अन्य नकली साइट पर पुनर्निर्देशित करना है।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q40",
    "difficulty": "medium",
    "correct": 2,
    "unitEN": "Unit 5: Mathematical Reasoning and Aptitude",
    "unitHI": "इकाई 5: गणितीय तर्क और अभिरुचि",
    "topicEN": "Mathematical Aptitude - Calculation and Units",
    "topicHI": "गणितीय अभिरुचि - गणना और इकाइयाँ",
    "content": {
      "en": {
        "question": "Aman installs a web camera in the waiting area of a clinic for security purposes and finds that a 1-minute video takes up approximately 10 MB. Which of the following is the required storage capacity of a daily backup in GB (correct to three significant figures)?",
        "options": ["12.3 GB", "15.6 GB", "14.1 GB", "13.4 GB"],
        "explanation": "<strong>Step-by-step Calculation:</strong><br>1. Video size per minute = 10 MB.<br>2. Total minutes in a day (daily backup) = 24 hours × 60 minutes = 1440 minutes.<br>3. Total size in MB for one day = 1440 × 10 = 14,400 MB.<br>4. To convert MB to GB, we divide by 1024 (since 1 GB = 1024 MB).<br>   14,400 / 1024 = 14.0625 GB.<br>5. The question asks to round it to three significant figures. <br>   14.0625 rounded to 3 sig figures is <strong>14.1 GB</strong>."
      },
      "hi": {
        "question": "अमन सुरक्षा उद्देश्यों के लिए एक क्लिनिक के प्रतीक्षा क्षेत्र में एक वेब कैमरा स्थापित करता है और पाता है कि 1 मिनट का वीडियो लगभग 10 एमबी लेता है। निम्नलिखित में से कौन सी जीबी में दैनिक बैकअप की आवश्यक भंडारण क्षमता है (तीन सार्थक आंकड़ों तक सही)?",
        "options": ["12.3 GB", "15.6 GB", "14.1 GB", "13.4 GB"],
        "explanation": "<strong>चरण-दर-चरण गणना:</strong><br>1. प्रति मिनट वीडियो का आकार = 10 एमबी (MB)।<br>2. एक दिन में कुल मिनट (दैनिक बैकअप) = 24 घंटे × 60 मिनट = 1440 मिनट।<br>3. एक दिन के लिए MB में कुल आकार = 1440 × 10 = 14,400 MB।<br>4. MB को GB में बदलने के लिए, हम 1024 से विभाजित करते हैं (चूंकि 1 GB = 1024 MB)।<br>   14,400 / 1024 = 14.0625 GB।<br>5. प्रश्न इसे तीन महत्वपूर्ण आंकड़ों (significant figures) तक गोल (round) करने के लिए कहता है।<br>   14.0625 को 3 महत्वपूर्ण आंकड़ों तक गोल करने पर <strong>14.1 GB</strong> आता है।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q41",
    "difficulty": "easy",
    "correct": 0,
    "unitEN": "Unit 8: Information and Communication Technology (ICT)",
    "unitHI": "इकाई 8: सूचना और संचार प्रौद्योगिकी (ICT)",
    "topicEN": "ICT General Abbreviations and Terminology",
    "topicHI": "ICT सामान्य संक्षिप्ताक्षर और शब्दावली",
    "content": {
      "en": {
        "question": "Ubiquitous Computing means:",
        "options": [
          "Capability of computing everywhere",
          "Creating creative computing ideas",
          "Designing layouts for interactive computing",
          "Planning and designing computational products"
        ],
        "explanation": "The word \"Ubiquitous\" literally means 'present, appearing, or found everywhere'. In technology, <strong>Ubiquitous Computing</strong> (sometimes called Pervasive Computing) refers to the concept in software engineering and computer science where computing is made to appear <strong>everywhere and anywhere</strong>. It means microprocessors are embedded into everyday objects (like smart watches, fridges, cars), allowing them to communicate and compute seamlessly."
      },
      "hi": {
        "question": "सर्वव्यापी कंप्यूटिंग (Ubiquitous Computing) का अर्थ है:",
        "options": [
          "हर जगह कंप्यूटिंग की क्षमता",
          "रचनात्मक कंप्यूटिंग विचारों का निर्माण",
          "इंटरैक्टिव कंप्यूटिंग के लिए लेआउट डिजाइन करना",
          "कम्प्यूटेशनल उत्पादों की योजना बनाना और डिजाइन करना"
        ],
        "explanation": "\"Ubiquitous\" (सर्वव्यापी) शब्द का शाब्दिक अर्थ है 'हर जगह मौजूद, दिखाई देने वाला या पाया जाने वाला'। प्रौद्योगिकी में, <strong>सर्वव्यापी कंप्यूटिंग (Ubiquitous Computing)</strong> (जिसे कभी-कभी Pervasive Computing कहा जाता है) सॉफ्टवेयर इंजीनियरिंग और कंप्यूटर विज्ञान में उस अवधारणा को संदर्भित करता है जहां कंप्यूटिंग को <strong>हर जगह और कहीं भी</strong> प्रदर्शित करने के लिए बनाया जाता है। इसका मतलब है कि माइक्रोप्रोसेसरों को रोजमर्रा की वस्तुओं (जैसे स्मार्ट घड़ियां, फ्रिज, कार) में एम्बेड किया जाता है, जिससे वे मूल रूप से संवाद और गणना कर सकते हैं।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q42",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "Unit 9: People, Development and Environment",
    "unitHI": "इकाई 9: लोग, विकास और पर्यावरण",
    "topicEN": "Environmental Issues: Water Pollution and Treatment",
    "topicHI": "पर्यावरणीय मुद्दे: जल प्रदूषण और उपचार",
    "content": {
      "en": {
        "question": "What is the correct order of treating hard groundwater, from initial step to final step in a typical treatment plant?<br><br>(A) Disinfection<br>(B) Softening<br>(C) Aeration<br>(D) Filtration<br><br>Choose the correct answer from the options given below:",
        "options": [
          "(C), (B), (D), (A)",
          "(C), (B), (A), (D)",
          "(D), (B), (C), (A)",
          "(D), (B), (A), (C)"
        ],
        "explanation": "<strong>Correct order of Groundwater Treatment:</strong><br>1. <strong>(C) Aeration:</strong> The first step is to aerate the water to remove dissolved harmful gases (like hydrogen sulfide or volatile organic compounds) and to oxidize iron and manganese.<br>2. <strong>(B) Softening:</strong> The hard water is then treated with chemicals (like lime and soda ash) to remove calcium and magnesium ions that cause hardness.<br>3. <strong>(D) Filtration:</strong> The water is passed through filters (sand/gravel) to remove the solid precipitates formed during softening and other suspended impurities.<br>4. <strong>(A) Disinfection:</strong> The final step is adding chlorine or using UV light to kill remaining pathogenic microorganisms before supplying it for use."
      },
      "hi": {
        "question": "एक विशिष्ट उपचार संयंत्र में प्रारंभिक चरण से अंतिम चरण तक कठोर भूजल के उपचार का सही क्रम क्या है?<br><br>(A) कीटाणुशोधन<br>(B) मृदुकरण<br>(C) वातन<br>(D) निस्पंदन<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "(C), (B), (D), (A)",
          "(C), (B), (A), (D)",
          "(D), (B), (C), (A)",
          "(D), (B), (A), (C)"
        ],
        "explanation": "<strong>भूजल उपचार का सही क्रम:</strong><br>1. <strong>(C) वातन (Aeration):</strong> पहला कदम पानी को वातित करना है ताकि घुली हुई हानिकारक गैसों (जैसे हाइड्रोजन सल्फाइड) को हटाया जा सके और लोहा और मैंगनीज को ऑक्सीकरण किया जा सके।<br>2. <strong>(B) मृदुकरण (Softening):</strong> फिर कठोर पानी को रसायनों (जैसे चूना और सोडा ऐश) के साथ कठोरता पैदा करने वाले कैल्शियम और मैग्नीशियम आयनों को हटाने के लिए उपचारित किया जाता है।<br>3. <strong>(D) निस्पंदन (Filtration):</strong> मृदुकरण के दौरान बनने वाले ठोस अवक्षेप और अन्य निलंबित अशुद्धियों को हटाने के लिए पानी को फिल्टर (रेत/बजरी) से गुजारा जाता है।<br>4. <strong>(A) कीटाणुशोधन (Disinfection):</strong> अंतिम चरण उपयोग के लिए आपूर्ति करने से पहले शेष रोगजनक सूक्ष्मजीवों को मारने के लिए क्लोरीन मिलाना या यूवी प्रकाश का उपयोग करना है।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q43",
    "difficulty": "medium",
    "correct": 0,
    "unitEN": "Unit 4: Communication",
    "unitHI": "इकाई 4: संचार",
    "topicEN": "Mass Media and Society",
    "topicHI": "जनसंचार माध्यम और समाज",
    "content": {
      "en": {
        "question": "Who propounded the theory of Public Opinion formation?",
        "options": [
          "Walter Lippman",
          "Lasswell Harold",
          "Wilbur Schramm",
          "Dewey Jacob"
        ],
        "explanation": "The theory of Public Opinion formation is primarily associated with <strong>Walter Lippmann</strong>, an influential American writer, reporter, and political commentator. In his seminal 1922 book titled <em>\"Public Opinion\"</em>, he discussed how mass media shapes public perception and coined the concept of \"pictures in our heads,\" laying the foundation for modern media studies and agenda-setting theory."
      },
      "hi": {
        "question": "जनमत निर्माण (Public Opinion formation) का सिद्धांत किसने प्रतिपादित किया?",
        "options": [
          "वाल्टर लिपमैन (Walter Lippman)",
          "लासवेल हेरोल्ड",
          "विल्बर श्राम",
          "डेवी जैकब"
        ],
        "explanation": "जनमत निर्माण का सिद्धांत मुख्य रूप से एक प्रभावशाली अमेरिकी लेखक, रिपोर्टर और राजनीतिक टिप्पणीकार <strong>वाल्टर लिपमैन (Walter Lippmann)</strong> से जुड़ा है। 1922 की अपनी प्रसिद्ध पुस्तक <em>\"पब्लिक ओपिनियन\"</em> में, उन्होंने चर्चा की कि कैसे जनसंचार माध्यम जनधारणा को आकार देते हैं और \"हमारे दिमाग में चित्र (pictures in our heads)\" की अवधारणा गढ़ी, जिसने आधुनिक मीडिया अध्ययन और एजेंडा-सेटिंग सिद्धांत की नींव रखी।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q44",
    "difficulty": "medium",
    "correct": 3,
    "unitEN": "Unit 9: People, Development and Environment",
    "unitHI": "इकाई 9: लोग, विकास और पर्यावरण",
    "topicEN": "Environmental Issues: Air Pollution",
    "topicHI": "पर्यावरणीय मुद्दे: वायु प्रदूषण",
    "content": {
      "en": {
        "question": "Which of the following are essential components of industrial smog?<br><br>(A) Sulphur Dioxide (SO₂)<br>(B) Particulate matters<br>(C) Fly ash<br>(D) Soot<br><br>Choose the correct answer from the options given below:",
        "options": [
          "(A) and (B) Only",
          "(A), (B) and (C) Only",
          "(C) and (D) Only",
          "(A), (B), (C) and (D)"
        ],
        "explanation": "<strong>Industrial Smog</strong> (also known as London-type smog or classical smog) typically exists in urban areas where large quantities of coal are burned. Its primary components include:<br>• <strong>Sulphur Dioxide (SO2):</strong> Released from burning sulfur-rich coal.<br>• <strong>Particulate Matter, Soot, and Fly Ash:</strong> The unburnt carbon particles and ash from factories and industries.<br>Since all of these (A, B, C, D) are direct byproducts of industrial coal combustion, they are all essential components of industrial smog."
      },
      "hi": {
        "question": "निम्नलिखित में से कौन औद्योगिक धुंध (industrial smog) के आवश्यक घटक हैं?<br><br>(A) सल्फर डाइऑक्साइड (SO₂)<br>(B) कणिका तत्व (Particulate matters)<br>(C) फ्लाई ऐश<br>(D) कालिख (Soot)<br><br>नीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
        "options": [
          "(A) और (B) केवल",
          "(A), (B) और (C) केवल",
          "(C) और (D) केवल",
          "(A), (B), (C) और (D)"
        ],
        "explanation": "<strong>औद्योगिक स्मॉग</strong> (जिसे लंदन-प्रकार का स्मॉग या क्लासिकल स्मॉग भी कहा जाता है) आमतौर पर उन शहरी क्षेत्रों में मौजूद होता है जहां बड़ी मात्रा में कोयला जलाया जाता है। इसके प्राथमिक घटकों में शामिल हैं:<br>• <strong>सल्फर डाइऑक्साइड (SO2):</strong> सल्फर युक्त कोयले को जलाने से निकलता है।<br>• <strong>पार्टिकुलेट मैटर, कालिख, और फ्लाई ऐश:</strong> कारखानों और उद्योगों से बिना जले कार्बन कण और राख।<br>चूंकि ये सभी (A, B, C, D) औद्योगिक कोयला दहन के प्रत्यक्ष उपोत्पाद हैं, वे सभी औद्योगिक स्मॉग के आवश्यक घटक हैं।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q45",
    "difficulty": "medium",
    "correct": 1,
    "unitEN": "Unit 1: Teaching Aptitude",
    "unitHI": "इकाई 1: शिक्षण अभिरुचि",
    "topicEN": "Learner's Characteristics",
    "topicHI": "शिक्षार्थी की विशेषताएँ",
    "content": {
      "en": {
        "question": "Which type of interference refers to the difficulty in retrieving material due to the interference of previous material?",
        "options": ["Decay", "Proactive", "Disfunction", "Retroactive"],
        "explanation": "In psychology, interference theory explains why we forget things.<br>• <strong>Proactive Interference:</strong> Occurs when old/previous memories interfere with the retrieval of newly learned information. (e.g., Calling your new boyfriend by your ex-boyfriend's name). This exactly matches the question's definition.<br>• <strong>Retroactive Interference:</strong> Occurs when newly learned information interferes with the recall of previously learned information. (e.g., Forgetting your old phone number because you just memorized your new one)."
      },
      "hi": {
        "question": "किस प्रकार का हस्तक्षेप (interference) पिछले पदार्थ के हस्तक्षेप के कारण पदार्थ को पुनः प्राप्त करने में कठिनाई को संदर्भित करता है?",
        "options": ["क्षय (Decay)", "सक्रिय (Proactive)", "विकार (Disfunction)", "पूर्वव्यापी (Retroactive)"],
        "explanation": "मनोविज्ञान में, हस्तक्षेप सिद्धांत बताता है कि हम चीजों को क्यों भूल जाते हैं।<br>• <strong>सक्रिय हस्तक्षेप (Proactive Interference):</strong> तब होता है जब पुरानी/पिछली यादें नई सीखी गई जानकारी की पुनर्प्राप्ति में हस्तक्षेप करती हैं। (उदा: अपने नए बॉयफ्रेंड को अपने पूर्व बॉयफ्रेंड के नाम से पुकारना)। यह बिल्कुल प्रश्न की परिभाषा से मेल खाता है।<br>• <strong>पूर्वव्यापी हस्तक्षेप (Retroactive Interference):</strong> तब होता है जब नई सीखी गई जानकारी पहले सीखी गई जानकारी को याद करने में हस्तक्षेप करती है। (उदा: अपना पुराना फ़ोन नंबर भूल जाना क्योंकि आपने अभी-अभी अपना नया नंबर याद किया है)।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q46",
    "difficulty": "easy",
    "correct": 1,
    "unitEN": "Unit 3: Comprehension",
    "unitHI": "इकाई 3: बोध",
    "topicEN": "Reading Comprehension",
    "topicHI": "पठन बोध",
    "content": {
      "en": {
        "question": passageHTML(PASSAGE_JAN25_27_S2_P1.en) + "<br><br><strong>Question:</strong><br> What is the typical theme found in urban legends?",
        "options": [
          "Extra-terrestrial beings",
          "Isolated victims in everyday settings",
          "Magical powers",
          "Heroic rescues"
        ],
        "explanation": "According to the second paragraph of the passage: <em>\"In typical ULs you encounter shocks such as lurking criminals, threatening maniacs, vague unknown dangers, faulty products, and <strong>isolated victims, all set in the context of everyday life</strong>.\"</em> This makes Option 2 the direct and correct answer."
      },
      "hi": {
        "question": passageHTML(PASSAGE_JAN25_27_S2_P1.hi) + "<br><br><strong>प्रश्न:</strong><br> शहरी किंवदंतियों में पाया जाने वाला विशिष्ट विषय क्या है?",
        "options": [
          "अलौकिक प्राणी",
          "रोजमर्रा की परिस्थितियों में अलग-थलग पड़े पीड़ित",
          "जादुई शक्तियाँ",
          "वीरतापूर्ण बचाव"
        ],
        "explanation": "गद्यांश के दूसरे पैराग्राफ के अनुसार: <em>\"आम तौर पर ULs में आपको छिपे हुए अपराधियों, धमकी देने वाले पागलों, अस्पष्ट अज्ञात खतरों, दोषपूर्ण उत्पादों और <strong>अलग-थलग पीड़ितों जैसे झटके का सामना करना पड़ता है, जो सभी रोज़मर्रा की ज़िंदगी के संदर्भ में होते हैं</strong>।\"</em> यह विकल्प 2 को प्रत्यक्ष और सही उत्तर बनाता है।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q47",
    "difficulty": "easy",
    "correct": 2,
    "unitEN": "Unit 3: Comprehension",
    "unitHI": "इकाई 3: बोध",
    "topicEN": "Reading Comprehension",
    "topicHI": "पठन बोध",
    "content": {
      "en": {
        "question": passageHTML(PASSAGE_JAN25_27_S2_P1.en) + "<br><br><strong>Question:</strong><br> According to the passage, urban legends (ULs) are described as:",
        "options": [
          "Fictional horror stories set in fantasy world",
          "Narration of horror incidents",
          "Stories that combine horror fiction with real-life details",
          "Stories involving supernatural elements"
        ],
        "explanation": "The very first sentence of the second paragraph explicitly states: <em>\"Urban legends (ULs) are scary when they <strong>combine horror fiction with the details of real life</strong>.\"</em> This perfectly aligns with Option 3."
      },
      "hi": {
        "question": passageHTML(PASSAGE_JAN25_27_S2_P1.hi) + "<br><br><strong>प्रश्न:</strong><br> गद्यांश के अनुसार, शहरी किंवदंतियों (UL) का वर्णन इस प्रकार किया गया है:",
        "options": [
          "काल्पनिक दुनिया में स्थापित काल्पनिक भयावनी कहानियाँ",
          "भयावनी घटनाओं का वर्णन",
          "ऐसी कहानियाँ जो भयावनी कल्पना को वास्तविक जीवन के विवरणों के साथ जोड़ती हैं",
          "अलौकिक तत्वों से जुड़ी कहानियाँ"
        ],
        "explanation": "दूसरे पैराग्राफ का पहला ही वाक्य स्पष्ट रूप से कहता है: <em>\"शहरी किंवदंतियाँ (ULs) तब डरावनी लगती हैं जब वे <strong>डरावनी कहानियों को वास्तविक जीवन के विवरणों के साथ जोड़ती हैं</strong>।\"</em> यह विकल्प 3 के साथ पूरी तरह से मेल खाता है।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q48",
    "difficulty": "easy",
    "correct": 1,
    "unitEN": "Unit 3: Comprehension",
    "unitHI": "इकाई 3: बोध",
    "topicEN": "Reading Comprehension",
    "topicHI": "पठन बोध",
    "content": {
      "en": {
        "question": passageHTML(PASSAGE_JAN25_27_S2_P1.en) + "<br><br><strong>Question:</strong><br> What is \"FOAF\" in the context of urban legends?",
        "options": [
          "Fictional occurrence and facts",
          "Friend of a friend",
          "Fear of all friends",
          "Fictional over actual facts"
        ],
        "explanation": "The passage clearly defines the acronym FOAF in the second paragraph: <em>\"Such stories are told by a friend as something that happened to his or her close acquaintance (a <strong>friend of a friend, or a FOAF</strong>).\"</em>"
      },
      "hi": {
        "question": passageHTML(PASSAGE_JAN25_27_S2_P1.hi) + "<br><br><strong>प्रश्न:</strong><br> शहरी किंवदंतियों के संदर्भ में \"FOAF\" क्या है?",
        "options": [
          "काल्पनिक घटना और तथ्य",
          "दोस्त का दोस्त (Friend of a friend)",
          "सभी दोस्तों का डर",
          "वास्तविक तथ्यों की तुलना में काल्पनिक"
        ],
        "explanation": "गद्यांश दूसरे पैराग्राफ में स्पष्ट रूप से FOAF शब्द को परिभाषित करता है: <em>\"ऐसी कहानियाँ किसी मित्र द्वारा उसके करीबी परिचित (किसी <strong>मित्र का मित्र या FOAF</strong>) के साथ घटी किसी घटना के रूप में सुनाई जाती हैं।\"</em>"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q49",
    "difficulty": "easy",
    "correct": 1,
    "unitEN": "Unit 3: Comprehension",
    "unitHI": "इकाई 3: बोध",
    "topicEN": "Reading Comprehension",
    "topicHI": "पठन बोध",
    "content": {
      "en": {
        "question": passageHTML(PASSAGE_JAN25_27_S2_P1.en) + "<br><br><strong>Question:</strong><br> According to the passage, what makes certain fictional stories less frightening?",
        "options": [
          "They are based on true events",
          "They are make-believe",
          "They involve many unknown places",
          "They involve real dangers"
        ],
        "explanation": "In the first paragraph, the author asks about Halloween spook houses and slasher movies, stating: <em>\"...don't we all know they are <strong>just make-believe</strong>, acknowledged fictions?\"</em> The knowledge that they are make-believe (not real) makes them less truly frightening compared to real-life horrors like discovering termites."
      },
      "hi": {
        "question": passageHTML(PASSAGE_JAN25_27_S2_P1.hi) + "<br><br><strong>प्रश्न:</strong><br> गद्यांश के अनुसार, कुछ काल्पनिक कहानियाँ कम डरावनी क्यों होती हैं?",
        "options": [
          "वे सच्ची घटनाओं पर आधारित हैं",
          "वे काल्पनिक (make-believe) हैं",
          "इनमें कई अज्ञात स्थान शामिल हैं",
          "इनमें वास्तविक खतरे शामिल हैं"
        ],
        "explanation": "पहले पैराग्राफ में, लेखक हैलोवीन और स्लेशर फिल्मों के बारे में पूछता है, और कहता है: <em>\"...क्या हम सभी नहीं जानते कि <strong>वे सिर्फ काल्पनिक (make-believe)</strong>, स्वीकृत कल्पनाएँ हैं?\"</em> यह ज्ञान कि वे काल्पनिक हैं (वास्तविक नहीं) उन्हें वास्तविक जीवन की भयावहता (जैसे दीमक खोजना) की तुलना में कम डरावना बनाता है।"
      }
    }
  },
  {
    "id": "jan25-27-s2-p1-q50",
    "difficulty": "easy",
    "correct": 1,
    "unitEN": "Unit 3: Comprehension",
    "unitHI": "इकाई 3: बोध",
    "topicEN": "Reading Comprehension",
    "topicHI": "पठन बोध",
    "content": {
      "en": {
        "question": passageHTML(PASSAGE_JAN25_27_S2_P1.en) + "<br><br><strong>Question:</strong><br> Why are urban legends often scary to people?",
        "options": [
          "They usually involve supernatural elements",
          "They mix horror fiction with relatable, everyday scenarios",
          "They are always set in remote, unknown locations",
          "They are told only during Halloween"
        ],
        "explanation": "The core thesis of the second paragraph is that urban legends derive their fear factor from being relatable. The passage states: <em>\"Urban legends (ULs) are scary when they <strong>combine horror fiction with the details of real life</strong>... all set in the context of everyday life.\"</em> Therefore, mixing horror with relatable everyday scenarios is the correct answer."
      },
      "hi": {
        "question": passageHTML(PASSAGE_JAN25_27_S2_P1.hi) + "<br><br><strong>प्रश्न:</strong><br> शहरी किंवदंतियाँ अक्सर लोगों को डराती क्यों हैं?",
        "options": [
          "इनमें आमतौर पर अलौकिक तत्व शामिल होते हैं",
          "इनमें डरावनी कहानियों को रोज़मर्रा की घटनाओं के साथ मिलाया जाता है",
          "इन्हें हमेशा दूर-दराज के, अज्ञात स्थानों पर सेट किया जाता है",
          "इन्हें सिर्फ हैलोवीन पर सुनाया जाता है"
        ],
        "explanation": "दूसरे पैराग्राफ का मुख्य विषय यह है कि शहरी किंवदंतियों का डर इस बात से उत्पन्न होता है कि लोग उनसे खुद को जोड़ पाते हैं। गद्यांश कहता है: <em>\"शहरी किंवदंतियाँ (ULs) तब डरावनी लगती हैं जब वे <strong>डरावनी कहानियों को वास्तविक जीवन के विवरणों के साथ जोड़ती हैं</strong>... जो सभी रोज़मर्रा की ज़िंदगी के संदर्भ में होते हैं।\"</em> इसलिए, भयावनी कल्पना को रोज़मर्रा के परिदृश्यों के साथ मिलाना सही उत्तर है।"
      }
    }
  }
];



