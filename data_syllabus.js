/* ══════════════════════════════════════════════════════════════════════
   WORKSPACE: SYLLABUS DATA (BILINGUAL / द्विभाषी)
══════════════════════════════════════════════════════════════════════ */
const LS_P1='np_paper1_data_v1';
const LS_P2='np_paper2_data_v1';

const defaultPaper1 = [
  {
    titleEN: "Teaching Aptitude", titleHI: "शिक्षण अभिक्षमता",
    topicsEN: ["Teaching concept & objectives","Levels of teaching","Characteristics of teaching","Learner characteristics","Individual differences","Factors affecting teaching","Teaching methods","Online vs offline teaching","Teaching support system","Evaluation systems","CBCS evaluation","CBT","Innovations in evaluation"],
    topicsHI: ["शिक्षण अवधारणा और उद्देश्य","शिक्षण के स्तर","शिक्षण की विशेषताएं","शिक्षार्थी की विशेषताएं","व्यक्तिगत भिन्नताएं","शिक्षण को प्रभावित करने वाले कारक","शिक्षण विधियां","ऑनलाइन बनाम ऑफलाइन शिक्षण","शिक्षण सहायक प्रणाली","मूल्यांकन प्रणालियां","सीबीसीएस (CBCS) मूल्यांकन","कंप्यूटर आधारित परीक्षण (CBT)","मूल्यांकन में नवाचार"]
  },
  {
    titleEN: "Research Aptitude", titleHI: "शोध अभिक्षमता",
    topicsEN: ["Meaning of research","Types of research","Characteristics of research","Positivism & post-positivism","Research methods","Qualitative & quantitative","Steps of research","Thesis writing","Article writing","Referencing styles","ICT in research","Research ethics"],
    topicsHI: ["शोध का अर्थ","शोध के प्रकार","शोध की विशेषताएं","प्रत्यक्षवाद और उत्तर-प्रत्यक्षवाद","शोध विधियां","गुणात्मक और मात्रात्मक शोध","शोध के चरण","थीसिस लेखन","लेख लेखन","संदर्भ शैलियां (Referencing)","शोध में आईसीटी (ICT)","शोध नैतिकता"]
  },
  {
    titleEN: "Comprehension", titleHI: "बोध (गद्यांश)",
    topicsEN: ["Reading comprehension practice","Passage interpretation","Answer extraction skills"],
    topicsHI: ["पठन बोध का अभ्यास","गद्यांश की व्याख्या","उत्तर निकालने का कौशल"]
  },
  {
    titleEN: "Communication", titleHI: "संप्रेषण",
    topicsEN: ["Meaning of communication","Types","Characteristics","Verbal","Non-verbal","Inter-cultural","Group","Classroom","Barriers","Mass media & society"],
    topicsHI: ["संप्रेषण का अर्थ","प्रकार","विशेषताएं","शाब्दिक संप्रेषण","अशाब्दिक संप्रेषण","अंतर-सांस्कृतिक संप्रेषण","समूह संप्रेषण","कक्षा संप्रेषण","संप्रेषण की बाधाएं","जनसंचार (मास मीडिया) और समाज"]
  },
  {
    titleEN: "Mathematical Reasoning", titleHI: "गणितीय तर्क और अभिवृत्ति",
    topicsEN: ["Types of reasoning","Number series","Letter series","Coding & decoding","Relationships","Fractions","Time & distance","Ratio & proportion","Percentage","Profit & loss","Interest","Averages"],
    topicsHI: ["तर्क के प्रकार","संख्या श्रृंखला","अक्षर श्रृंखला","कोडिंग और डिकोडिंग","रक्त संबंध","भिन्न (Fractions)","समय और दूरी","अनुपात और समानुपात","प्रतिशत","लाभ और हानि","ब्याज","औसत"]
  },
  {
    titleEN: "Logical Reasoning", titleHI: "युक्तिसंगत तर्क (Logical Reasoning)",
    topicsEN: ["Structure of arguments","Categorical propositions","Mood & figure","Fallacies","Deductive","Inductive","Analogies","Venn diagrams","Indian logic","Pramanas","Types of Anumana","Hetvabhasas"],
    topicsHI: ["तर्कों की संरचना","निरपेक्ष तर्कवाक्य (Categorical propositions)","अवस्था और आकृति (Mood & Figure)","हेत्वाभास / भ्रांतियां (Fallacies)","निगमनात्मक तर्क","आगमनात्मक तर्क","अनुरूपता (Analogies)","वेन आरेख","भारतीय तर्कशास्त्र","प्रमाण","अनुमान के प्रकार","हेत्वाभास (Hetvabhasas)"]
  },
  {
    titleEN: "Data Interpretation", titleHI: "आंकड़ों की व्याख्या (D.I.)",
    topicsEN: ["Data sources","Data classification","Quantitative","Qualitative","Bar charts","Histograms","Pie charts","Tables","Line charts","Data interpretation","Data & governance"],
    topicsHI: ["आंकड़ों के स्रोत","आंकड़ों का वर्गीकरण","मात्रात्मक आंकड़े","गुणात्मक आंकड़े","बार चार्ट","हिस्टोग्राम","पाई चार्ट","तालिका (Tables)","लाइन चार्ट","आंकड़ों की व्याख्या","आंकड़े और सुशासन"]
  },
  {
    titleEN: "ICT", titleHI: "सूचना और संचार प्रौद्योगिकी (ICT)",
    topicsEN: ["ICT abbreviations","Internet basics","Intranet","Email","Audio conferencing","Video conferencing","Digital initiatives","ICT governance"],
    topicsHI: ["आईसीटी संक्षिप्ताक्षर (Abbreviations)","इंटरनेट के मूल तत्व","इंट्रानेट","ई-मेल","ऑडियो कॉन्फ्रेंसिंग","वीडियो कॉन्फ्रेंसिंग","डिजिटल पहल","आईसीटी और सुशासन"]
  },
  {
    titleEN: "People & Environment", titleHI: "लोग, विकास और पर्यावरण",
    topicsEN: ["SDGs","Human-environment interaction","Environmental issues","Pollution types","Climate change","Impact on health","Energy resources","Natural hazards","Environmental protection act","International agreements"],
    topicsHI: ["सतत विकास लक्ष्य (SDGs)","मानव-पर्यावरण अंतःक्रिया","पर्यावरणीय मुद्दे","प्रदूषण के प्रकार","जलवायु परिवर्तन","स्वास्थ्य पर प्रभाव","ऊर्जा संसाधन","प्राकृतिक खतरे और आपदाएं","पर्यावरण संरक्षण अधिनियम","अंतर्राष्ट्रीय समझौते"]
  },
  {
    titleEN: "Higher Education", titleHI: "उच्च शिक्षा प्रणाली",
    topicsEN: ["Ancient Indian education","Post-independence education","Learning programmes","Technical education","Skill based education","Value education","Environmental education","Policies & governance"],
    topicsHI: ["प्राचीन भारतीय शिक्षा","स्वतंत्रता के बाद शिक्षा","शिक्षण कार्यक्रम","तकनीकी शिक्षा","कौशल आधारित शिक्षा","मूल्य शिक्षा","पर्यावरण शिक्षा","नीतियां और प्रशासन"]
  }
];

const defaultPaper2 = [
  {
    titleEN: "Introduction to Anthropology", titleHI: "मानव विज्ञान का परिचय",
    topicsEN: ["History of Anthropology","Aim & scope","Branches of Anthropology","Epistemology & theoretical perspectives","Types of research","Research design","Fieldwork tradition","Ethnography & observation","Case study & PRA","Genealogical method","Schedule & questionnaire","Grounded theory & GIS","Statistics (variables & sampling)","Central tendency","Parametric & Non-parametric tests","Regression","Content & Discourse analysis"],
    topicsHI: ["मानव विज्ञान का इतिहास","उद्देश्य और कार्यक्षेत्र","मानव विज्ञान की शाखाएं","ज्ञानमीमांसा और सैद्धांतिक परिप्रेक्ष्य","शोध के प्रकार","शोध अभिकल्प (Research Design)","क्षेत्रकार्य परंपरा (Fieldwork)","नृवंशविज्ञान और अवलोकन","केस स्टडी और पी.आर.ए (PRA)","वंशावली विधि","अनुसूची और प्रश्नावली","ग्राउंडेड थ्योरी और जीआईएस (GIS)","सांख्यिकी (चर और प्रतिचयन)","केंद्रीय प्रवृत्ति","पैरामीट्रिक और नॉन-पैरामीट्रिक परीक्षण","प्रतिगमन (Regression)","सामग्री और प्रवचन विश्लेषण"]
  },
  {
    titleEN: "Biological Evolution & Primatology", titleHI: "जैविक विकास और प्राइमेटोलॉजी",
    topicsEN: ["Lamarckism & Darwinism","Synthetic & Neutral theory","Cladogenesis & anagenesis","Primate classification & characteristics","Primate locomotion & behaviour","Prosimii & Anthropoidea","Oligocene-Miocene fossils","Australopithecus species","Homo habilis & erectus","Neanderthal & Archaic sapiens","Modern Homo sapiens","Out of Africa hypothesis"],
    topicsHI: ["लैमार्कवाद और डार्विनवाद","संश्लेषणात्मक और तटस्थ सिद्धांत","क्लैडोजेनेसिस और एनाजेनेसिस","प्राइमेट वर्गीकरण और विशेषताएं","प्राइमेट लोकोमोशन और व्यवहार","प्रोसिमी और एंथ्रोपोइडिया","ओलिगोसीन-मायोसीन जीवाश्म","ऑस्ट्रेलोपिथेकस प्रजातियां","होमो हैबिलिस और इरेक्टस","नियंडरथल और आदिम सेपियन्स","आधुनिक होमो सेपियन्स","आउट ऑफ अफ्रीका परिकल्पना"]
  },
  {
    titleEN: "Human Genetics & Variation", titleHI: "मानव आनुवंशिकी और भिन्नता",
    topicsEN: ["Human variation models","Racial & Indian classifications","Mendelian & Cytogenetics","Twin & Population genetics","Chromosomal abnormalities","Modes of inheritance","Dermatoglyphics","Hardy Weinberg equilibrium","Genetic drift & polymorphism","DNA & RNA","Mitochondrial DNA"],
    topicsHI: ["मानव भिन्नता मॉडल","प्रजातीय और भारतीय वर्गीकरण","मेंडेलियन और साइटोजेनेटिक्स","जुड़वां और जनसंख्या आनुवंशिकी","गुणसूत्रीय असामान्यताएं","विरासत के तरीके (Modes of inheritance)","डर्माटोग्लिफिक्स (Dermatoglyphics)","हार्डी-वेनबर्ग संतुलन","जेनेटिक ड्रिफ्ट और बहुरूपता (Polymorphism)","डीएनए और आरएनए","माइटोकॉन्ड्रियल डीएनए"]
  },
  {
    titleEN: "Human Growth & Demography", titleHI: "मानव विकास और जनसांख्यिकी",
    topicsEN: ["Human growth concepts & phases","Growth curves","Aging & senescence","Factors affecting growth","Secular trends","Body composition","Human adaptation rules","Heat/cold/altitude adaptation","Somatotyping","Demography basics","Fertility & Mortality"],
    topicsHI: ["मानव विकास की अवधारणाएं और चरण","विकास वक्र (Growth Curves)","उम्र बढ़ना और जीर्णता (Senescence)","विकास को प्रभावित करने वाले कारक","धर्मनिरपेक्ष प्रवृत्तियां (Secular trends)","शरीर रचना (Body composition)","मानव अनुकूलन नियम","गर्मी/सर्दी/ऊंचाई अनुकूलन","सोमाटोटाइपिंग","जनसांख्यिकी के मूल तत्व","प्रजनन क्षमता और मृत्यु दर"]
  },
  {
    titleEN: "Prehistoric Archaeology", titleHI: "प्रागैतिहासिक पुरातत्व",
    topicsEN: ["Ethno & Experimental archaeology","Settlement archaeology","Dating methods","Geological stages & Pleistocene climate","Site formation","Lower/Middle/Upper palaeolithic tools","Mesolithic & Neolithic tools","European lithic cultures","Near East farming cultures"],
    topicsHI: ["नृजातीय और प्रायोगिक पुरातत्व","बस्ती पुरातत्व (Settlement archaeology)","काल-निर्धारण (Dating) विधियां","भूवैज्ञानिक चरण और प्लीस्टोसीन जलवायु","स्थल निर्माण (Site formation)","निम्न/मध्य/उच्च पुरापाषाण उपकरण","मध्यपाषाण और नवपाषाण उपकरण","यूरोपीय पाषाण संस्कृतियां","निकट पूर्व कृषि संस्कृतियां"]
  },
  {
    titleEN: "Indian Prehistory", titleHI: "भारतीय प्रागैतिहास",
    topicsEN: ["Lower palaeolithic India","Acheulian culture","Middle & Upper palaeolithic India","Mesolithic India","Neolithic India","Cave art India","Indus civilization","Pottery traditions","Bronze & Iron age","Megaliths"],
    topicsHI: ["भारत में निम्न पुरापाषाण काल","एश्यूलियन संस्कृति","मध्य और उच्च पुरापाषाण भारत","मध्यपाषाण भारत","नवपाषाण भारत","भारत में गुफा कला","सिंधु घाटी सभ्यता","मिट्टी के बर्तन (Pottery) परंपराएं","कांस्य और लौह युग","महापाषाण काल (Megaliths)"]
  },
  {
    titleEN: "Social & Cultural Anthropology", titleHI: "सामाजिक और सांस्कृतिक मानव विज्ञान",
    topicsEN: ["Culture & Society concepts","Family types","Marriage types","Kinship systems","Economic anthropology","Political organization","Religion concepts","Magic & ritual","Social change"],
    topicsHI: ["संस्कृति और समाज की अवधारणाएं","परिवार के प्रकार","विवाह के प्रकार","नातेदारी (Kinship) प्रणालियां","आर्थिक मानव विज्ञान","राजनीतिक संगठन","धर्म की अवधारणाएं","जादू और कर्मकांड (Rituals)","सामाजिक परिवर्तन"]
  },
  {
    titleEN: "Anthropological Theory", titleHI: "मानव वैज्ञानिक सिद्धांत",
    topicsEN: ["Evolutionism & Diffusionism","Historical particularism","Functionalism & Structuralism","Culture & personality","Cultural ecology","Cultural materialism","Symbolic & Cognitive anthropology","Interpretive anthropology","Gender anthropology","Postmodernism"],
    topicsHI: ["विकासवाद और प्रसारवाद","ऐतिहासिक विशिष्टतावाद","प्रकार्यवाद और संरचनावाद","संस्कृति और व्यक्तित्व","सांस्कृतिक पारिस्थितिकी","सांस्कृतिक भौतिकवाद","प्रतीकात्मक और संज्ञानात्मक मानव विज्ञान","व्याख्यात्मक (Interpretive) मानव विज्ञान","लिंग (Gender) मानव विज्ञान","उत्तर-आधुनिकतावाद"]
  },
  {
    titleEN: "Indian Anthropology", titleHI: "भारतीय मानव विज्ञान",
    topicsEN: ["Indian anthropology development","Social stratification","Tribal studies","Village studies","Constitutional safeguards","Panchayati raj","Sanskritization & Westernization","Indian anthropologists"],
    topicsHI: ["भारतीय मानव विज्ञान का विकास","सामाजिक स्तरीकरण","जनजातीय अध्ययन","ग्राम अध्ययन","संवैधानिक सुरक्षा उपाय","पंचायती राज","संस्कृतिकरण और पश्चिमीकरण","भारतीय मानवविज्ञानी"]
  },
  {
    titleEN: "Applied Anthropology", titleHI: "व्यावहारिक (Applied) मानव विज्ञान",
    topicsEN: ["Applied & Action anthropology","Development & Medical anthropology","Forensic anthropology","Ergonomics & Business anthropology","Community development","NGOs role","Women empowerment"],
    topicsHI: ["व्यावहारिक और क्रियात्मक मानव विज्ञान","विकास और चिकित्सा मानव विज्ञान","फोरेंसिक मानव विज्ञान","एर्गोनॉमिक्स और व्यापार मानव विज्ञान","सामुदायिक विकास","गैर सरकारी संगठनों (NGOs) की भूमिका","महिला सशक्तिकरण"]
  }
];