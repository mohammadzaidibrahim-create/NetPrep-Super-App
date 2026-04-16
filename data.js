
/* ══════════════════════════════════════════════════════════════════════
   MOCK TEST: PASSAGE CONSTANTS
══════════════════════════════════════════════════════════════════════ */
const PASSAGE_BLOOD = `The discovery of the AB0 blood group system in 1900 and the proof that these blood types are inherited was an outstanding example of Mendelian inheritance applied to a human character. In 1908, a mathematician and physician set out the fundamental theorem of population genetics, which explains why a dominant gene does not increase in frequency from generation to generation. Scientists demonstrated that A, B, and 0 blood group characters are due to multiple alleles at one locus. Years later, the combined efforts of researchers led to discovery of the Rh factor and established that hemolytic disease of the newborn owes its origin to immunological maternal–fetal incompatibility. Blood group characters are due to multiple alleles at one locus, as demonstrated by Bernstein in 1924.`;

const PASSAGE_NOMOTHETIC = `Nomothetic research aims to identify laws about human behavior – the Greek word 'nomos' means 'law'. It assumes that it is possible to discover regularities of influence or behavior, allowing experts to predict the likely outcomes of possible actions or innovations. So it looks for general principles, not specific cases. Idiographic research, by contrast, is all about exploring individuality or uniqueness. Idiographic research tends to focus on a single example, which might be a person, an event, a phenomenon, or an organization, and to analyse that example in depth. As a result, idiographic methods are often used in case studies, and are characteristic of ethnographic research. Idiographic studies are likely to adopt an inductive rather than deductive approach, working on the idea that we may discover general principles through a deeper understanding of one or two instances.`;

const PASSAGE_MANAGEMENT = `Organized endeavors directed by people responsible for planning, organizing, leading and controlling activities have existed for thousands of years. The Egyptian pyramids and the Great Wall of China, for instance, are tangible evidence that projects of tremendous scope, employing tens of thousands of people, were undertaken well before modern times. The pyramids are a particularly interesting example. The construction of a single pyramid occupied more than 100,000 workers for 20 years. Who told each worker what to do? Who ensured that there would be enough stones at the site to keep workers busy? The answer to such questions is managers. Regardless of what managers were called at the time, someone had to plan what was to be done, organize people and materials to do it, lead and direct the workers, and impose some controls to ensure that everything was done as planned.

Another example of early management can be seen during the 1400s in the city of Venice, Italy, a major economic and trade center. The Venetians developed an early form of business enterprise and engaged in many activities common to today's organizations. For instance, at the arsenal of Venice, warships were floated along the canals, and at each stop materials and riggings were added to the ship. Doesn't that sound a lot like a car "floating" along an automobile assembly line while components are added to it? In addition to this assembly line, the Venetians also used warehouse and inventory systems to keep track of materials, human resource management systems to manage the labor force, and an accounting system to keep track of revenues and costs.`;

function passageHTML(text){return`<div class="comprehension-box">${text}</div>`;}

function matchTable(listILabel,listIILabel,rows){
  let html=`<table class="match-table"><thead><tr><th>${listILabel}</th><th>${listIILabel}</th></tr></thead><tbody>`;
  rows.forEach(r=>{html+=`<tr><td><span class="match-label">${r[0]}.</span>${r[1]}</td><td><span class="match-label">${r[2]}.</span>${r[3]}</td></tr>`;});
  html+=`</tbody></table>`;return html;
}

/* ══════════════════════════════════════════════════════════════════════
   QUESTION BANK — TEST DATA
══════════════════════════════════════════════════════════════════════ */
const TEST_JAN_2026_P1 = [
  {
    "id": "p1-jan2026-q1",
    "unit": "Unit 7: Data Interpretation",
    "topic": "Data interpretation",
    "difficulty": "medium",
    "correct": 3,
    "content": {
      "en": {
        "question": "<strong>Comprehension:</strong><br>Study carefully the table given below and answer the question. A college has four programs B.A., B.Sc., B.Com. and B.B.A. The results of the mid-semester and end-semester tests are shown in the table given below.<br><br><table border='1' style='border-collapse:collapse; width:100%; text-align:center; background:rgba(255,255,255,0.05);'><tr><th style='padding:8px;'>Results</th><th style='padding:8px;'>B.A.</th><th style='padding:8px;'>B.Sc.</th><th style='padding:8px;'>B.Com.</th><th style='padding:8px;'>B.B.A.</th></tr><tr><td style='padding:8px;'>Failed in both tests</td><td>28</td><td>23</td><td>17</td><td>27</td></tr><tr><td style='padding:8px;'>Failed in mid-semester but passed in end-semester</td><td>14</td><td>12</td><td>8</td><td>13</td></tr><tr><td style='padding:8px;'>Passed in mid-semester but failed in end-semester</td><td>6</td><td>17</td><td>9</td><td>15</td></tr><tr><td style='padding:8px;'>Passed in both tests</td><td>64</td><td>55</td><td>46</td><td>76</td></tr></table><br><br><strong>Question:</strong><br>If the number of students passing a test be considered a criterion for comparison of difficulty level of two tests, then mid-semester test of which of the following programs was the least difficult?",
        "options": ["B.A.", "B.Sc.", "B.Com.", "B.B.A."],
        "explanation": "To find the least difficult test, we need to find the program with the HIGHEST passing percentage in the mid-semester test.<br>Total students in each program:<br>B.A. = 28+14+6+64 = 112<br>B.Sc. = 23+12+17+55 = 107<br>B.Com. = 17+8+9+46 = 80<br>B.B.A. = 27+13+15+76 = 131<br><br>Students who passed mid-semester = (Passed mid but failed end) + (Passed both).<br>B.A. = 6 + 64 = 70 (70/112 = 62.5%)<br>B.Sc. = 17 + 55 = 72 (72/107 = 67.2%)<br>B.Com. = 9 + 46 = 55 (55/80 = 68.75%)<br>B.B.A. = 15 + 76 = 91 (91/131 = 69.46%)<br><br>B.B.A. has the highest passing percentage (69.46%), making its mid-semester test the least difficult."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q2",
    "unit": "Unit 7: Data Interpretation",
    "topic": "Data interpretation",
    "difficulty": "medium",
    "correct": 1,
    "content": {
      "en": {
        "question": "<strong>Comprehension:</strong><br><em>(Refer to the data table provided in Question 1)</em><br><br><strong>Question:</strong><br>Which program has the lowest passing percentage in end-semester test?",
        "options": ["B.A.", "B.Sc.", "B.Com.", "B.B.A."],
        "explanation": "To find the lowest passing percentage in the end-semester test, calculate the passed students for end-semester: (Failed mid but passed end) + (Passed both).<br><br>B.A.: 14 + 64 = 78 (78/112 = 69.6%)<br>B.Sc.: 12 + 55 = 67 (67/107 = 62.6%)<br>B.Com.: 8 + 46 = 54 (54/80 = 67.5%)<br>B.B.A.: 13 + 76 = 89 (89/131 = 67.9%)<br><br>B.Sc. has the lowest passing percentage in the end-semester test at 62.6%."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q3",
    "unit": "Unit 7: Data Interpretation",
    "topic": "Data interpretation",
    "difficulty": "medium",
    "correct": 0,
    "content": {
      "en": {
        "question": "<strong>Comprehension:</strong><br><em>(Refer to the data table provided in Question 1)</em><br><br><strong>Question:</strong><br>Which program has the highest failure rate in the mid-semester test?",
        "options": ["B.A.", "B.Sc.", "B.Com.", "B.B.A."],
        "explanation": "Highest failure rate is the inverse of the passing percentage. We calculated the passing percentages for the mid-semester test in Question 1:<br><br>B.A. Pass % = 62.5% (Failure = 37.5%)<br>B.Sc. Pass % = 67.2% (Failure = 32.8%)<br>B.Com. Pass % = 68.75% (Failure = 31.25%)<br>B.B.A. Pass % = 69.46% (Failure = 30.54%)<br><br>Since B.A. had the lowest passing percentage, it naturally has the highest failure rate."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q4",
    "unit": "Unit 7: Data Interpretation",
    "topic": "Quantitative data",
    "difficulty": "easy",
    "correct": 1,
    "content": {
      "en": {
        "question": "<strong>Comprehension:</strong><br><em>(Refer to the data table provided in Question 1)</em><br><br><strong>Question:</strong><br>How many students are there in the four programs?",
        "options": ["420", "430", "320", "330"],
        "explanation": "To find the total number of students across all four programs, we simply sum the totals of each column:<br><br>Total B.A. students = 112<br>Total B.Sc. students = 107<br>Total B.Com. students = 80<br>Total B.B.A. students = 131<br><br>Total = 112 + 107 + 80 + 131 = 430 students."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q5",
    "unit": "Unit 7: Data Interpretation",
    "topic": "Data interpretation",
    "difficulty": "easy",
    "correct": 2,
    "content": {
      "en": {
        "question": "<strong>Comprehension:</strong><br><em>(Refer to the data table provided in Question 1)</em><br><br><strong>Question:</strong><br>What is the ratio of number of students in B.Sc. program to the number of students in B.Com. program?",
        "options": ["80:107", "107:131", "107:80", "80:131"],
        "explanation": "From the calculations in previous questions, we know the total number of students in each specific program:<br><br>Total B.Sc. students = 23 + 12 + 17 + 55 = 107<br>Total B.Com. students = 17 + 8 + 9 + 46 = 80<br><br>The ratio of B.Sc. to B.Com. students is directly 107:80."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q6",
    "unit": "Unit 9: People, Development and Environment",
    "topic": "Climate change",
    "difficulty": "hard",
    "correct": 0,
    "content": {
      "en": {
        "question": "Arrange the following greenhouse gases in the increasing order of their life time in the earth's atmosphere:<br><br>A. SF6<br>B. N2O<br>C. H2O vapor<br>D. CH4<br><br>Choose the correct answer from the options given below:",
        "options": ["C, D, B, A", "C, D, A, B", "A, B, C, D", "B, A, D, C"],
        "explanation": "The atmospheric lifetime determines how long a greenhouse gas remains active in the atmosphere:<br>1. <strong>H2O (Water Vapor):</strong> Very short lifetime (a few days).<br>2. <strong>CH4 (Methane):</strong> Approximately 12 years.<br>3. <strong>N2O (Nitrous Oxide):</strong> Approximately 114 years.<br>4. <strong>SF6 (Sulfur Hexafluoride):</strong> Extremely long lifetime, approximately 3,200 years.<br><br>Therefore, the correct increasing order is Water Vapor (C) < Methane (D) < Nitrous Oxide (B) < SF6 (A)."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q7",
    "unit": "Unit 10: Higher Education System",
    "topic": "Ancient Indian education",
    "difficulty": "hard",
    "correct": 2,
    "content": {
      "en": {
        "question": `Match List I with List II.\n${matchTable("List I (Department of Ashram)","List II (Subject)",[["A","Vishnu Sthana","I","Politics"],["B","Vivasta Sthana","II","Jyotish"],["C","Garun Sthana","III","Travel and Transport"],["D","Mahendra Sthana","IV","Military Education"]])}Choose the correct answer from the options given below:`,
        "options": ["A-II, B-IV, C-III, D-I", "A-I, B-III, C-II, D-IV", "A-III, B-II, C-IV, D-I", "A-I, B-II, C-III, D-IV"],
        "explanation": "In ancient Indian educational philosophy regarding Ashrams:<br>• <strong>Vishnu Sthana (A)</strong> corresponds to the study of Politics / Rajneeti (III).<br>• <strong>Vivasta Sthana (B)</strong> is related to the study of Jyotish or Astronomy (II).<br>• <strong>Garun Sthana (C)</strong> corresponds to the study of Travel and Transport (IV).<br>• <strong>Mahendra Sthana (D)</strong> is related to Military Education or Warfare (I).<br><br>Thus, the correct match is A-III, B-II, C-IV, D-I."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q8",
    "unit": "Unit 8: Information and Communication Technology (ICT)",
    "topic": "Internet basics",
    "difficulty": "medium",
    "correct": 2,
    "content": {
      "en": {
        "question": `Match List I with List II.\n${matchTable("List I","List II",[["A","Phishing","I","Act of gaining unauthorized access"],["B","Hacking","II","Unsolicited email sent over the internet to a recipient on a mailing list"],["C","Spam","III","Small file or code stored on user's computer"],["D","Cookies","IV","The creator sends out legitimate-looking emails to target users"]])}Choose the correct answer from the options given below:`,
        "options": ["A-II, B-III, C-IV, D-I", "A-IV, B-I, C-III, D-II", "A-IV, B-I, C-II, D-III", "A-I, B-IV, C-II, D-III"],
        "explanation": "• <strong>Phishing (A):</strong> A social engineering attack where legitimate-looking emails are sent to trick users into revealing sensitive data (IV).<br>• <strong>Hacking (B):</strong> The act of gaining unauthorized access to data in a system or computer (I).<br>• <strong>Spam (C):</strong> Irrelevant or unsolicited emails sent over the internet (II).<br>• <strong>Cookies (D):</strong> Small blocks of data created by a web server while a user is browsing a website and placed on the user's computer (III).<br><br>Correct Match: A-IV, B-I, C-II, D-III."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q9",
    "unit": "Unit 6: Logical Reasoning",
    "topic": "Categorical propositions",
    "difficulty": "medium",
    "correct": 1,
    "content": {
      "en": {
        "question": `Match List I with List II.\n${matchTable("List I (Types of Categorical Propositions)","List II (Explanation)",[["A","A proposition","I","Distributes both subject and predicate terms"],["B","E proposition","II","Distributes only predicate term"],["C","I proposition","III","Distributes only subject term"],["D","O proposition","IV","Distributes neither subject nor predicate term"]])}Choose the correct answer from the options given below:`,
        "options": ["A-I, B-II, C-IV, D-III", "A-III, B-I, C-IV, D-II", "A-I, B-II, C-III, D-IV", "A-IV, B-III, C-II, D-I"],
        "explanation": "In Aristotelian logic, distribution refers to whether a proposition asserts something about every member of the class represented by the term:<br>• <strong>A Proposition (Universal Affirmative - 'All S is P'):</strong> Distributes the Subject only (III).<br>• <strong>E Proposition (Universal Negative - 'No S is P'):</strong> Distributes both the Subject and the Predicate (I).<br>• <strong>I Proposition (Particular Affirmative - 'Some S is P'):</strong> Distributes neither Subject nor Predicate (IV).<br>• <strong>O Proposition (Particular Negative - 'Some S is not P'):</strong> Distributes the Predicate only (II).<br><br>Therefore, the correct match is A-III, B-I, C-IV, D-II."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q10",
    "unit": "Unit 8: Information and Communication Technology (ICT)",
    "topic": "ICT abbreviations",
    "difficulty": "easy",
    "correct": 3,
    "content": {
      "en": {
        "question": "The smallest unit of information, a computer can understand and process is known as:",
        "options": ["Digit", "Byte", "Nibble", "Bit"],
        "explanation": "A <strong>Bit</strong> (binary digit) is the most basic and smallest unit of information in computing and digital communications. It can have only one of two values: 0 or 1. <br><br>A Nibble is 4 bits, and a Byte is 8 bits. Therefore, 'Bit' is the foundational and smallest unit."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q11",
    "unit": "Unit 9: People, Development and Environment",
    "topic": "Pollution types",
    "difficulty": "medium",
    "correct": 1,
    "content": {
      "en": {
        "question": `Match List I with List II.\n${matchTable("List I","List II",[["A","Primary Air Pollutant","I","Peroxyacyl nitrate"],["B","Secondary Air Pollutant","II","Carbon monoxide"],["C","Ozone Depleting Substance","III","Aerosols"],["D","Cloud Condensation Nuclei","IV","Chlorofluorocarbons"]])}Choose the correct answer from the options given below:`,
        "options": ["A-I, B-II, C-III, D-IV", "A-II, B-I, C-IV, D-III", "A-I, B-II, C-IV, D-III", "A-II, B-I, C-III, D-IV"],
        "explanation": "Let's match the pollutants with their correct examples:<br>• <strong>Primary Air Pollutant (A)</strong>: Emitted directly from a source into the atmosphere. Example: Carbon monoxide (II).<br>• <strong>Secondary Air Pollutant (B)</strong>: Not emitted directly, but forms when primary pollutants react in the atmosphere. Example: Peroxyacyl nitrate (PAN) (I).<br>• <strong>Ozone Depleting Substance (C)</strong>: Chemicals that destroy the earth's protective ozone layer. Example: Chlorofluorocarbons (CFCs) (IV).<br>• <strong>Cloud Condensation Nuclei (D)</strong>: Small particles on which water vapor condenses. Example: Aerosols (III).<br><br>Correct match: A-II, B-I, C-IV, D-III."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q12",
    "unit": "Unit 4: Communication",
    "topic": "Mass media & society",
    "difficulty": "medium",
    "correct": 0,
    "content": {
      "en": {
        "question": "Active Audience Theories focus on assessing what __________.",
        "options": ["people do with media", "media does with people", "administration does with media", "regulations impact media"],
        "explanation": "<strong>Active Audience Theory</strong> argues that media audiences do not just receive information passively but are actively involved, making sense of the message within their personal and social contexts. <br><br>Therefore, it focuses on <strong>\"what people do with media\"</strong> rather than \"what media does to people\" (which is the focus of older, passive theories like the Hypodermic Needle Theory)."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q13",
    "unit": "Unit 1: Teaching Aptitude",
    "topic": "Learner characteristics (adolescent & adult)",
    "difficulty": "medium",
    "correct": 1,
    "content": {
      "en": {
        "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).<br><br><strong>Assertion (A):</strong> The projective techniques offer an approach to the measurement of the personality, which is different from the self-descriptive inventories.<br><strong>Reason (R):</strong> Self-descriptive inventories require the subject to describe himself/herself while assessing personality.<br><br>In the light of the above statements, choose the most appropriate answer from the options given below:",
        "options": ["Both (A) and (R) are correct and (R) is the correct explanation of (A)", "Both (A) and (R) are correct but (R) is not the correct explanation of (A)", "(A) is correct but (R) is not correct", "(A) is not correct but (R) is correct"],
        "explanation": "• <strong>Assertion (A) is correct:</strong> Projective techniques (like Rorschach inkblots) use ambiguous stimuli to uncover subconscious traits, which is completely different from self-descriptive inventories.<br>• <strong>Reason (R) is correct:</strong> Self-descriptive inventories (like MMPI) rely on direct self-reporting where the subject consciously describes themselves.<br><br>While both statements are factually correct, (R) merely defines what self-descriptive inventories are; it does not explain <em>why</em> projective techniques are structurally different (which is because they bypass conscious defenses). Hence, (R) is not the correct explanation of (A)."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q14",
    "unit": "Unit 5: Mathematical Reasoning and Aptitude",
    "topic": "Letter series",
    "difficulty": "medium",
    "correct": 2,
    "content": {
      "en": {
        "question": "Complete the following series:<br>N7V, K9T, H12R, _?_, B21N",
        "options": ["E14R", "E13Q", "E16P", "F16R"],
        "explanation": "Let's break the series down into three separate components: First Letter, Number, and Last Letter.<br><br>1. <strong>First Letter (Pattern -3):</strong> N (-3) → K (-3) → H (-3) → <strong>E</strong> (-3) → B<br>2. <strong>Number (Pattern +2, +3, +4, +5):</strong> 7 (+2) → 9 (+3) → 12 (+4) → <strong>16</strong> (+5) → 21<br>3. <strong>Last Letter (Pattern -2):</strong> V (-2) → T (-2) → R (-2) → <strong>P</strong> (-2) → N<br><br>Combining them, the missing term is <strong>E16P</strong>."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q15",
    "unit": "Unit 2: Research Aptitude",
    "topic": "Qualitative & quantitative methods",
    "difficulty": "medium",
    "correct": 3,
    "content": {
      "en": {
        "question": "Which of the following represents the ontological orientation of qualitative research strategies?",
        "options": ["Deductive", "Positivism", "Objectivism", "Constructionism"],
        "explanation": "In research philosophy, <strong>Ontology</strong> refers to the nature of reality.<br><br>The ontological orientation of Qualitative research is <strong>Constructionism</strong> (or Constructivism), which asserts that social phenomena and their meanings are continually being created by social actors. In contrast, Objectivism and Positivism are typically associated with Quantitative research."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q16",
    "unit": "Unit 5: Mathematical Reasoning and Aptitude",
    "topic": "Percentage",
    "difficulty": "medium",
    "correct": 2,
    "content": {
      "en": {
        "question": `Match List I with List II.\n${matchTable("List I (Successive Discounts)","List II (Equivalent Discount)",[["A","10% and 15%","I","28%"],["B","20% and 30%","II","32.5%"],["C","10% and 20%","III","23.5%"],["D","10% and 25%","IV","44%"]])}Choose the correct answer from the options given below:`,
        "options": ["A-I, B-II, C-IV, D-III", "A-II, B-III, C-I, D-IV", "A-III, B-IV, C-I, D-II", "A-IV, B-I, C-II, D-III"],
        "explanation": "The formula for equivalent successive discounts of a% and b% is: <strong>(a + b - ab/100)%</strong><br><br>• <strong>A. 10% & 15%:</strong> (10 + 15) - (150/100) = 25 - 1.5 = 23.5% (III)<br>• <strong>B. 20% & 30%:</strong> (20 + 30) - (600/100) = 50 - 6 = 44% (IV)<br>• <strong>C. 10% & 20%:</strong> (10 + 20) - (200/100) = 30 - 2 = 28% (I)<br>• <strong>D. 10% & 25%:</strong> (10 + 25) - (250/100) = 35 - 2.5 = 32.5% (II)<br><br>Correct match: A-III, B-IV, C-I, D-II."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q17",
    "unit": "Unit 9: People, Development and Environment",
    "topic": "Environmental issues",
    "difficulty": "easy",
    "correct": 3,
    "content": {
      "en": {
        "question": "The oxygen consumed in the oxidation of an organic compound by microorganisms in the aquatic ecosystem is called __________.",
        "options": ["Dissolved oxygen", "Chemical oxygen demand", "Theoretical oxygen demand", "Biochemical oxygen demand"],
        "explanation": "<strong>Biochemical Oxygen Demand (BOD)</strong> is the amount of dissolved oxygen needed (i.e., demanded) by aerobic biological organisms (microorganisms) to break down organic material present in a given water sample.<br><br>High BOD indicates poor water quality (high organic pollution), whereas low BOD indicates good water quality."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q18",
    "unit": "Unit 8: Information and Communication Technology (ICT)",
    "topic": "ICT abbreviations",
    "difficulty": "easy",
    "correct": 2,
    "content": {
      "en": {
        "question": "Which term is NOT related to computer hardware?",
        "options": ["Bus", "Switch", "Windows", "Mouse"],
        "explanation": "<strong>Windows</strong> is an Operating System, which falls under the category of System Software. <br><br>A Bus (internal connection), Switch (networking device), and Mouse (input device) are all physical, tangible components known as Computer Hardware."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q19",
    "unit": "Unit 10: Higher Education System",
    "topic": "Policies & governance",
    "difficulty": "medium",
    "correct": 1,
    "content": {
      "en": {
        "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).<br><br><strong>Assertion (A):</strong> National Education Policy, 2020 (NEP-2020) visualized 'Research-Intensive Universities'.<br><strong>Reason (R):</strong> NEP-2020 envisioned university as a place which lays equal emphasis on teaching and research.<br><br>In the light of the above statements, choose the most appropriate answer from the options given below:",
        "options": ["Both (A) and (R) are correct and (R) is the correct explanation of (A)", "Both (A) and (R) are correct but (R) is not the correct explanation of (A)", "(A) is correct but (R) is not correct", "(A) is not correct but (R) is correct"],
        "explanation": "• <strong>Assertion (A) is correct:</strong> NEP 2020 categorizes institutions into Research-intensive Universities, Teaching-intensive Universities, and Autonomous degree-granting colleges.<br>• <strong>Reason (R) is correct:</strong> NEP indeed envisions universities as places laying equal emphasis on high-quality teaching and research.<br><br>However, (R) is a general characteristic applicable to universities broadly, while (A) refers specifically to one specialized tier of the institutional classification. Thus, (R) does not causally explain (A)."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q20",
    "unit": "Unit 9: People, Development and Environment",
    "topic": "International agreements",
    "difficulty": "medium",
    "correct": 1,
    "content": {
      "en": {
        "question": "The issue related to 'traditional knowledge societies and their livelihood' is addressed in the National Mission for __________.",
        "options": ["Enhanced Energy Efficiency", "Sustaining the Himalayan Eco-system", "Sustainable Habitat", "A Green India"],
        "explanation": "The <strong>National Mission for Sustaining the Himalayan Eco-system</strong> (one of the 8 missions under the National Action Plan on Climate Change - NAPCC) specifically focuses on safeguarding the Himalayan glaciers, mountain ecosystems, and critically, protecting the traditional knowledge societies and their livelihoods in the region."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q21",
    "unit": "Unit 10: Higher Education System",
    "topic": "Policies & governance",
    "difficulty": "medium",
    "correct": 1,
    "content": {
      "en": {
        "question": "As per the recommendations of National Education Policy, 2020, all stand alone teacher education institutions will be required to convert into multidisciplinary institutions by:",
        "options": ["2025", "2030", "2035", "2040"],
        "explanation": "According to the NEP 2020, to improve the quality of teacher training, all stand-alone Teacher Education Institutions (TEIs) will be required to convert into multidisciplinary institutions by the year <strong>2030</strong>. This ensures teachers are trained in a vibrant, multidisciplinary environment."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q22",
    "unit": "Unit 2: Research Aptitude",
    "topic": "Qualitative & quantitative methods",
    "difficulty": "medium",
    "correct": 1,
    "content": {
      "en": {
        "question": "Measurement validity primarily relates to:",
        "options": ["Qualitative research", "Quantitative research", "Interpretivism", "Constructionism"],
        "explanation": "<strong>Measurement Validity</strong> refers to the extent to which a concept, conclusion, or measurement is well-founded and corresponds accurately to the real world (i.e., does the instrument measure what it claims to measure).<br><br>This statistical and standardized approach is a core component primarily associated with <strong>Quantitative research</strong>."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q23",
    "unit": "Unit 4: Communication",
    "topic": "Mass media & society",
    "difficulty": "medium",
    "correct": 1,
    "content": {
      "en": {
        "question": "Arrange the following in the ascending order of adoption in terms of Diffusion of Innovation among the masses:<br>A. Opinion Followers<br>B. Opinion Leaders<br>C. Early Adopters<br>D. Change Agents<br>E. Laggards<br><br>Choose the correct answer from the options given below:",
        "options": ["A, D, C, B, E", "D, C, B, A, E", "C, D, B, A, E", "A, B, C, D, E"],
        "explanation": "According to Everett Rogers' Diffusion of Innovation Theory, the timeline (ascending order) of how an innovation spreads is:<br>1. <strong>Change Agents (D)</strong>: They introduce and push the innovation.<br>2. <strong>Early Adopters (C)</strong>: The first group to willingly adopt the new idea.<br>3. <strong>Opinion Leaders (B)</strong>: Often part of the early adopters, they influence the rest.<br>4. <strong>Opinion Followers (A)</strong>: The general masses (early/late majority) who follow the leaders.<br>5. <strong>Laggards (E)</strong>: The absolute last group to adopt the innovation.<br><br>Correct sequence: D, C, B, A, E."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q24",
    "unit": "Unit 6: Logical Reasoning",
    "topic": "Inductive reasoning",
    "difficulty": "medium",
    "correct": 0,
    "content": {
      "en": {
        "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).<br><br><strong>Assertion (A):</strong> The terms validity and invalidity do not apply to inductive arguments.<br><strong>Reason (R):</strong> In an inductive argument, the conclusion does not have sufficient ground in the premises.<br><br>In the light of the above statements, choose the most appropriate answer from the options given below:",
        "options": ["Both (A) and (R) are correct and (R) is the correct explanation of (A)", "Both (A) and (R) are correct but (R) is not the correct explanation of (A)", "(A) is correct but (R) is not correct", "(A) is not correct but (R) is correct"],
        "explanation": "• <strong>Assertion (A) is correct:</strong> Inductive arguments are evaluated as 'strong' or 'weak', not 'valid' or 'invalid'. Validity strictly applies to deductive arguments.<br>• <strong>Reason (R) is correct:</strong> Inductive reasoning deals with probability. The premises provide likely support for the conclusion, not 100% conclusive/sufficient ground.<br><br>Because the premises don't guarantee the conclusion (R), we cannot label the argument as 'valid' or 'invalid' (A). Thus, (R) correctly explains (A)."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q25",
    "unit": "Unit 9: People, Development and Environment",
    "topic": "Energy resources",
    "difficulty": "medium",
    "correct": 0,
    "content": {
      "en": {
        "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).<br><br><strong>Assertion (A):</strong> A wind mill will be more effective if it is placed at a higher elevation above the ground than a lower one.<br><strong>Reason (R):</strong> Generally, the wind speed increases with altitude above the earth's surface.<br><br>In the light of the above statements, choose the most appropriate answer from the options given below:",
        "options": ["Both (A) and (R) are correct and (R) is the correct explanation of (A)", "Both (A) and (R) are correct but (R) is not the correct explanation of (A)", "(A) is correct but (R) is not correct", "(A) is not correct but (R) is correct"],
        "explanation": "• <strong>Assertion (A) is correct:</strong> Wind turbines are highly effective when placed on tall towers or higher elevations.<br>• <strong>Reason (R) is correct:</strong> Wind speed generally increases with altitude because there is less friction and obstruction from surface features like trees, buildings, and hills.<br><br>This increase in wind speed directly explains why placing the windmill at a higher elevation makes it more effective. Hence, (R) is the correct explanation of (A)."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q26",
    "unit": "Unit 8: Information and Communication Technology (ICT)",
    "topic": "ICT abbreviations",
    "difficulty": "medium",
    "correct": 3,
    "content": {
      "en": {
        "question": "Which of the following are application software?<br>A. Spreadsheet<br>B. Word Processor<br>C. Operating system<br>D. Database<br>E. Compiler<br><br>Choose the correct answer from the options given below:",
        "options": ["A, C and D only", "B, C and E only", "A, D and E only", "A, B and D only"],
        "explanation": "<strong>Application Software</strong> is designed to perform specific tasks for the end-user. <br>• Spreadsheet (A), Word Processor (B), and Database (D) are application software.<br>• Operating System (C) is <em>System Software</em>.<br>• Compiler (E) is <em>Programming/System Software</em>.<br><br>Therefore, only A, B, and D are correct."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q27",
    "unit": "Unit 6: Logical Reasoning",
    "topic": "Hetvabhasas",
    "difficulty": "hard",
    "correct": 1,
    "content": {
      "en": {
        "question": "Which of the following explains the fallacy (hetvābhāsa) of satpratipakṣa correctly?",
        "options": ["A fallacy where an inference is contradicted by perception or some other non-inferential prāmāṇa.", "A fallacy where one inference is contradicted by another inference.", "A fallacy that disproves the very proposition which it is meant to prove.", "A fallacy of the irregular middle"],
        "explanation": "In Indian Logic (Nyaya), <strong>Satpratipakṣa</strong> is the fallacy of the 'counter-balanced middle'. <br><br>It occurs when a valid inference (anumana) is contradicted by another equally strong inference establishing the exact opposite conclusion. For example: arguing \"Sound is eternal because it is audible\" versus \"Sound is non-eternal because it is produced.\""
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q28",
    "unit": "Unit 2: Research Aptitude",
    "topic": "Research methods (experimental, descriptive, historical)",
    "difficulty": "hard",
    "correct": 1,
    "content": {
      "en": {
        "question": `Match List I with List II.\n${matchTable("List I","List II",[["A","Independent variable in true experimental design","I","Outcome variable"],["B","Dependent variable","II","Control variable"],["C","Intervening variable","III","Spurious variable"],["D","Confounding variable","IV","Stands between independent variable and dependent variable"]])}Choose the correct answer from the options given below:`,
        "options": ["A-IV, B-III, C-II, D-I", "A-II, B-I, C-IV, D-III", "A-I, B-II, C-III, D-IV", "A-II, B-III, C-IV, D-I"],
        "explanation": "• <strong>Dependent variable (B)</strong> is the outcome variable that is being measured (I).<br>• <strong>Intervening variable (C)</strong> acts as a link or mechanism standing between the independent and dependent variables (IV).<br>• <strong>Confounding variable (D)</strong> causes a spurious (false) association between variables (III).<br>• By elimination, the <strong>Independent variable (A)</strong> in a strict experimental design acts as a highly manipulated control variable by the researcher (II).<br><br>Correct Match: A-II, B-I, C-IV, D-III."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q29",
    "unit": "Unit 1: Teaching Aptitude",
    "topic": "Learner characteristics (adolescent & adult)",
    "difficulty": "medium",
    "correct": 3,
    "content": {
      "en": {
        "question": `Match List I with List II.\n${matchTable("List I (Type of Development)","List II (Related with)",[["A","Psycho-sexual Development","I","Identity vs. Role Confusion"],["B","Psycho-social Development","II","Anal Stage"],["C","Cognitive Development","III","Hypothetical-deductive reasoning"],["D","Moral Development","IV","Resolving ethical dilemma"]])}Choose the correct answer from the options given below:`,
        "options": ["A-II, B-III, C-I, D-IV", "A-III, B-I, C-IV, D-II", "A-I, B-IV, C-II, D-III", "A-II, B-I, C-III, D-IV"],
        "explanation": "Let's match the developmental theories with their concepts:<br>• <strong>Psycho-sexual Development (Freud) (A)</strong>: Includes oral, anal, phallic stages (II).<br>• <strong>Psycho-social Development (Erikson) (B)</strong>: Includes 8 stages like Identity vs. Role Confusion (I).<br>• <strong>Cognitive Development (Piaget) (C)</strong>: Involves hypothetical-deductive reasoning in the formal operational stage (III).<br>• <strong>Moral Development (Kohlberg) (D)</strong>: Focuses on how individuals resolve ethical dilemmas (IV).<br><br>Correct Match: A-II, B-I, C-III, D-IV."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q30",
    "unit": "Unit 5: Mathematical Reasoning and Aptitude",
    "topic": "Fractions",
    "difficulty": "medium",
    "correct": 0,
    "content": {
      "en": {
        "question": "Arrange the following fractions in ascending order:<br>A. 2/3<br>B. 7/19<br>C. 9/11<br>D. 8/9<br>E. 7/9<br><br>Choose the correct answer from the options given below:",
        "options": ["B, A, E, C, D", "B, E, A, D, C", "A, B, C, D, E", "B, C, A, E, D"],
        "explanation": "To arrange fractions easily, convert them into approximate decimals:<br>• A. 2/3 = 0.666...<br>• B. 7/19 ≈ 0.368<br>• C. 9/11 ≈ 0.818<br>• D. 8/9 ≈ 0.888<br>• E. 7/9 ≈ 0.777<br><br>Arranging from lowest to highest (ascending order): 0.368 (B) < 0.666 (A) < 0.777 (E) < 0.818 (C) < 0.888 (D).<br><br>Therefore, the correct sequence is B, A, E, C, D."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q31",
    "unit": "Unit 6: Logical Reasoning",
    "topic": "Fallacies",
    "difficulty": "medium",
    "correct": 2,
    "content": {
      "en": {
        "question": "Which of the following are not true?<br>A. In the argument from ignorance fallacy, something is accepted as true because it is not proven false.<br>B. In Hasty generalisation fallacy, a general truth is applied to a particular case ignoring its uniqueness.<br>C. In Begging the question fallacy, an event is wrongly accepted as the cause of some other event.<br>D. The fallacy of Amphiboly occurs in arguing from premises whose formulations are ambiguous because of their grammatical construction.<br><br>Choose the correct answer from the options given below:",
        "options": ["A, B and C only", "A, B and D only", "B and C only", "A and D only"],
        "explanation": "Let's analyze each statement:<br>• <strong>Statement A is True:</strong> Argument from ignorance (ad ignorantiam) asserts a claim is true simply because it hasn't been proven false.<br>• <strong>Statement B is False:</strong> Applying a general truth to a specific, unique case is the fallacy of <em>Accident</em>. Hasty generalization is the opposite (applying a specific case to a general rule).<br>• <strong>Statement C is False:</strong> Wrongly accepting an event as a cause is the <em>False Cause</em> fallacy. Begging the question (circular reasoning) is when the premise assumes the truth of the conclusion.<br>• <strong>Statement D is True:</strong> Amphiboly involves grammatical ambiguity.<br><br>Since the question asks what is <strong>not true</strong>, the correct answer is B and C only."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q32",
    "unit": "Unit 10: Higher Education System",
    "topic": "Policies & governance",
    "difficulty": "medium",
    "correct": 2,
    "content": {
      "en": {
        "question": "Arrange the following senior functionaries of a central university in the correct hierarchal order:<br>A. Visitor<br>B. Dean of the faculty<br>C. Chancellor<br>D. Head of Department<br>E. Vice-Chancellor<br><br>Choose the correct answer from the options given below:",
        "options": ["A, C, E, D, B", "C, A, E, D, B", "A, C, E, B, D", "B, D, E, C, A"],
        "explanation": "The correct hierarchical order of senior functionaries in an Indian Central University from highest to lowest is:<br>1. <strong>Visitor (A):</strong> The President of India is the Visitor of all Central Universities.<br>2. <strong>Chancellor (C):</strong> The titular head of the university.<br>3. <strong>Vice-Chancellor (E):</strong> The principal executive and academic officer.<br>4. <strong>Dean of the faculty (B):</strong> Head of a specific faculty/school.<br>5. <strong>Head of Department (D):</strong> Leads a specific academic department.<br><br>Correct sequence: A, C, E, B, D."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q33",
    "unit": "Unit 2: Research Aptitude",
    "topic": "Research ethics",
    "difficulty": "medium",
    "correct": 3,
    "content": {
      "en": {
        "question": "Journals that prioritize self-interest at the expense of scholarship and are characterized by false or misleading information, deviation from best editorial/publication practices, lack of transparency and/or use of aggressive and indiscriminate solicitation practices, are known as:",
        "options": ["Open access journals", "Proprietary journals", "Professional journals", "Predatory journals"],
        "explanation": "<strong>Predatory journals</strong> are exploitative academic publishing models. They charge publication fees (article processing charges) to authors without providing the rigorous peer-review and editorial services associated with legitimate academic journals. They often aggressively solicit scholars via email and publish almost anything submitted to them."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q34",
    "unit": "Unit 2: Research Aptitude",
    "topic": "Steps of research",
    "difficulty": "medium",
    "correct": 1,
    "content": {
      "en": {
        "question": "Identify the advantages of closed ended questions in survey research:<br>A. It is easy to process answers.<br>B. Respondents can answer in their own terms.<br>C. They are easy for the respondents to complete.<br>D. They allow unusual responses to be derived.<br><br>Choose the correct answer from the options given below:",
        "options": ["A and B only", "A and C only", "A, B and C only", "B, C and D only"],
        "explanation": "Closed-ended questions provide predefined options (like MCQs).<br>• <strong>Advantages:</strong> They are quick and easy for respondents to complete (C), and because the data is highly structured, it is very easy for researchers to process and statistically analyze (A).<br>• Statements B (answering in own terms) and D (discovering unusual responses) are distinct advantages of <em>open-ended</em> questions.<br><br>Therefore, A and C only are the correct advantages."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q35",
    "unit": "Unit 5: Mathematical Reasoning and Aptitude",
    "topic": "Averages",
    "difficulty": "hard",
    "correct": 1,
    "content": {
      "en": {
        "question": "Identify the correct mathematical statements:<br>A. The value of 1/4 + 1/(4×5) + 1/(4×5×6) is equal to 37/120.<br>B. 1 + 2 ÷ {1 + 2 ÷ (1 + 1/3)} is equal to 4/5.<br>C. If the average of 6 numbers is 7, the average of 3 numbers of them is 5, then the average of remaining numbers is 9.<br>D. If 75% of a number is added to 75, then the result is number itself. Then the number is 300.<br>E. Largest fraction from 9/31, 6/23, 3/17, 4/11 is 9/31.<br><br>Choose the correct answer from the options given below:",
        "options": ["A and B only", "A, C and D only", "C and D only", "C, E and D only"],
        "explanation": "Let's evaluate each statement:<br>• <strong>A is True:</strong> 1/4 + 1/20 + 1/120 = (30 + 6 + 1)/120 = 37/120.<br>• <strong>B is False:</strong> Solving the brackets: 1 + 2 ÷ {1 + 2 ÷ (4/3)} = 1 + 2 ÷ {1 + 1.5} = 1 + (2 / 2.5) = 1 + 0.8 = 1.8 (or 9/5), not 4/5.<br>• <strong>C is True:</strong> Total sum of 6 numbers = 42. Sum of 3 = 15. Remaining sum = 42 - 15 = 27. Average of remaining 3 = 27/3 = 9.<br>• <strong>D is True:</strong> Let number be x. 0.75x + 75 = x → 0.25x = 75 → x = 300.<br>• <strong>E is False:</strong> 4/11 (~0.36) is larger than 9/31 (~0.29).<br><br>Thus, only statements A, C, and D are correct."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q36",
    "unit": "Unit 5: Mathematical Reasoning and Aptitude",
    "topic": "Time & distance",
    "difficulty": "medium",
    "correct": 0,
    "content": {
      "en": {
        "question": "Two cyclists cover the same distance at 15 km/hr and 16 km/hr, respectively. If one cyclist takes 16 minutes longer than the other, then the distance travelled by each cyclist is:",
        "options": ["64 km", "16 km", "68 km", "12 km"],
        "explanation": "Let the distance be D km.<br>Time taken by slower cyclist = D/15 hours.<br>Time taken by faster cyclist = D/16 hours.<br>The difference in time is 16 minutes, which is 16/60 hours.<br><br>Equation: (D / 15) - (D / 16) = 16 / 60<br>Finding LCM (240): (16D - 15D) / 240 = 4 / 15<br>D / 240 = 4 / 15<br>D = (240 × 4) / 15 = 16 × 4 = 64 km."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q37",
    "unit": "Unit 5: Mathematical Reasoning and Aptitude",
    "topic": "Ratio & proportion",
    "difficulty": "medium",
    "correct": 1,
    "content": {
      "en": {
        "question": "Arrange the following pairs of standard deviation (σ) and total number of samples (n) pertaining to different sampling distributions in the decreasing order of their standard error.<br>A. σ = 1.6, n = 16<br>B. σ = 1.5, n = 25<br>C. σ = 0.6, n = 36<br>D. σ = 1.4, n = 49<br><br>Choose the correct answer from the options given below:",
        "options": ["A, B, C, D", "A, B, D, C", "D, C, B, A", "C, B, D, A"],
        "explanation": "The formula for Standard Error (SE) is: <strong>SE = σ / √n</strong><br><br>• For A: SE = 1.6 / √16 = 1.6 / 4 = 0.40<br>• For B: SE = 1.5 / √25 = 1.5 / 5 = 0.30<br>• For C: SE = 0.6 / √36 = 0.6 / 6 = 0.10<br>• For D: SE = 1.4 / √49 = 1.4 / 7 = 0.20<br><br>Arranging from highest to lowest (decreasing order): A (0.40) > B (0.30) > D (0.20) > C (0.10). Correct sequence: A, B, D, C."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q38",
    "unit": "Unit 4: Communication",
    "topic": "Types of communication",
    "difficulty": "hard",
    "correct": 0,
    "content": {
      "en": {
        "question": `Match List I with List II.\n${matchTable("List I","List II",[["A","Rhetorical","I","Considering communication to be discursive reflection on hegemonic ideological forces"],["B","Semiotic","II","Considering communication to be the capacity of experiencing otherness through authentic dialogue"],["C","Phenomenological","III","Considering communication to be Practical Art"],["D","Critical","IV","Considering communication to be Intersubjective Mediation via Signs"]])}Choose the correct answer from the options given below:`,
        "options": ["A-III, B-IV, C-II, D-I", "A-II, B-IV, C-III, D-I", "A-I, B-IV, C-II, D-III", "A-III, B-II, C-IV, D-I"],
        "explanation": "According to Robert Craig's 7 traditions of communication theory:<br>• <strong>Rhetorical (A):</strong> Communication as the practical art of discourse (III).<br>• <strong>Semiotic (B):</strong> Communication as intersubjective mediation via signs/symbols (IV).<br>• <strong>Phenomenological (C):</strong> Communication as the experience of otherness through dialogue (II).<br>• <strong>Critical (D):</strong> Communication as reflection on ideological forces and power structures (I).<br><br>Correct match: A-III, B-IV, C-II, D-I."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q39",
    "unit": "Unit 4: Communication",
    "topic": "Mass media & society",
    "difficulty": "medium",
    "correct": 0,
    "content": {
      "en": {
        "question": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).<br><br><strong>Assertion (A):</strong> People, who hold views contrary to those dominant in the media, keep those views to themselves.<br><strong>Reason (R):</strong> Such people fear isolation or separation from those around them.<br><br>In the light of the above statements, choose the most appropriate answer from the options given below:",
        "options": ["Both (A) and (R) are correct and (R) is the correct explanation of (A)", "Both (A) and (R) are correct but (R) is not the correct explanation of (A)", "(A) is correct but (R) is not correct", "(A) is not correct but (R) is correct"],
        "explanation": "These statements perfectly describe Elisabeth Noelle-Neumann's <strong>Spiral of Silence</strong> theory.<br>• <strong>Assertion (A):</strong> People often remain silent when they perceive their opinions are in the minority compared to the media's dominant narrative.<br>• <strong>Reason (R):</strong> The primary psychological driver for this silence is the deep-seated fear of social isolation, rejection, or ostracization by their peers.<br><br>Since the fear of isolation directly causes them to keep their views hidden, (R) is the correct and direct explanation of (A)."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q40",
    "unit": "Unit 1: Teaching Aptitude",
    "topic": "Learner characteristics (adolescent & adult)",
    "difficulty": "easy",
    "correct": 1,
    "content": {
      "en": {
        "question": "Which of the following is an example of biological motive?",
        "options": ["Achievement", "Hunger", "Power", "Affiliation"],
        "explanation": "Motives are broadly classified into two categories: Biological (Primary) and Psychosocial (Secondary).<br><br>• <strong>Hunger</strong> is a biological motive because it is innate, physiological, and essential for physical survival (along with thirst, sleep, and sex).<br>• Achievement, Power, and Affiliation are psychosocial motives, which are learned through social and cultural interactions."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q41",
    "unit": "Unit 1: Teaching Aptitude",
    "topic": "Teaching concept & objectives",
    "difficulty": "medium",
    "correct": 3,
    "content": {
      "en": {
        "question": "Arrange the steps of creative thinking process in correct sequence:<br>A. Preparation<br>B. Evaluation<br>C. Illumination<br>D. Revision<br>E. Incubation<br><br>Choose the correct answer from the options given below:",
        "options": ["A, B, C, D, E", "E, D, C, B, A", "D, C, B, E, A", "A, E, C, B, D"],
        "explanation": "According to Graham Wallas's widely accepted model, the creative thinking process follows this sequence:<br>1. <strong>Preparation (A):</strong> Gathering data and defining the problem.<br>2. <strong>Incubation (E):</strong> Stepping away to let the subconscious mind work.<br>3. <strong>Illumination (C):</strong> The \"Aha!\" moment when the idea flashes into consciousness.<br>4. <strong>Evaluation (B):</strong> Analyzing the idea to see if it works.<br>5. <strong>Revision/Verification (D):</strong> Polishing and implementing the final idea.<br><br>Correct sequence: A, E, C, B, D."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q42",
    "unit": "Unit 6: Logical Reasoning",
    "topic": "Categorical propositions",
    "difficulty": "hard",
    "correct": 3,
    "content": {
      "en": {
        "question": "Which of the following is/are true:<br>A. The conversion of an O proposition is valid.<br>B. The conversion of an A proposition is an A proposition.<br>C. The conversion of an E proposition is conversion by limitation.<br>D. The conversion of an I proposition is valid.<br><br>Choose the correct answer from the options given below:",
        "options": ["A and D only", "A and B only", "C only", "D only"],
        "explanation": "In classical syllogistic logic (Immediate Inference - Conversion):<br>• An <strong>'O' proposition</strong> (Some S are not P) cannot be validly converted.<br>• An <strong>'A' proposition</strong> (All S are P) converts <em>by limitation</em> into an 'I' proposition (Some P are S), not another 'A' proposition.<br>• An <strong>'E' proposition</strong> (No S are P) converts simply into another 'E' proposition (No P are S), not by limitation.<br>• An <strong>'I' proposition</strong> (Some S are P) converts validly into another 'I' proposition (Some P are S).<br><br>Therefore, only statement D is true."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q43",
    "unit": "Unit 4: Communication",
    "topic": "Mass media & society",
    "difficulty": "medium",
    "correct": 0,
    "content": {
      "en": {
        "question": "The theory that argues that media can have a strong influence in deciding the small number of public problems or issues that people will think about at any given point in time, is:",
        "options": ["Agenda-Setting Theory", "Knowledge-Gap Theory", "Limited Effects Theory", "Personal Influence Theory"],
        "explanation": "<strong>Agenda-Setting Theory</strong> (developed by Maxwell McCombs and Donald Shaw) famously asserts that while the media may not be successful in telling people <em>what to think</em>, it is stunningly successful in telling its readers <em>what to think about</em>. By focusing extensively on specific issues, the media shapes the public's perception of what the most important problems are."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q44",
    "unit": "Unit 1: Teaching Aptitude",
    "topic": "Online vs offline teaching (SWAYAM, MOOCs etc.)",
    "difficulty": "medium",
    "correct": 0,
    "content": {
      "en": {
        "question": "Which among the following is the most liberal Open Education Resource license?",
        "options": ["CC-BY", "CC-BY-SA", "CC-BY-ND", "CC-BY-NC"],
        "explanation": "In Creative Commons (CC) licensing, <strong>CC-BY</strong> (Attribution) is the most accommodating and liberal license offered. It lets others distribute, remix, adapt, and build upon the original work, even commercially, as long as they credit the original creator. <br><br>The other tags add restrictions: SA (ShareAlike), ND (NoDerivatives), and NC (NonCommercial)."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q45",
    "unit": "Unit 8: Information and Communication Technology (ICT)",
    "topic": "Internet basics",
    "difficulty": "medium",
    "correct": 2,
    "content": {
      "en": {
        "question": "Arrange the following in increasing order in terms of their coverage:<br>A. PAN<br>B. MAN<br>C. WAN<br>D. LAN<br><br>Choose the correct answer from the options given below:",
        "options": ["D, B, A, C", "A, B, D, C", "A, D, B, C", "B, A, D, C"],
        "explanation": "Networks are classified by their geographical coverage area. The correct increasing order is:<br>1. <strong>PAN (Personal Area Network) - A:</strong> Smallest, covers a few meters (e.g., Bluetooth).<br>2. <strong>LAN (Local Area Network) - D:</strong> Covers a room, building, or small campus.<br>3. <strong>MAN (Metropolitan Area Network) - B:</strong> Covers a city or large metropolitan area.<br>4. <strong>WAN (Wide Area Network) - C:</strong> Largest coverage, spanning states, countries, or the globe (like the Internet).<br><br>Therefore, the sequence is A, D, B, C."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q46",
    "unit": "Unit 3: Reading Comprehension",
    "topic": "Answer extraction skills",
    "difficulty": "easy",
    "correct": 0,
    "content": {
      "en": {
        "question": `${passageHTML(PASSAGE_MANAGEMENT)}<strong>Question:</strong><br>According to the passage, the role of a manager includes all of the following, except:`,
        "options": ["Stacking stones for the pyramids", "Planning what is to be done", "Organising people for the pyramids site", "Directing the pyramid work force"],
        "explanation": "The passage explicitly defines management as activities involving \"planning, organizing, leading and controlling.\" <br><br>\"Stacking stones for the pyramids\" refers to the actual physical manual labor or execution of the task, not the managerial oversight role. Therefore, it is the exception."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q47",
    "unit": "Unit 3: Reading Comprehension",
    "topic": "Answer extraction skills",
    "difficulty": "easy",
    "correct": 3,
    "content": {
      "en": {
        "question": `${passageHTML(PASSAGE_MANAGEMENT)}<strong>Question:</strong><br>According to the passage, persons responsible for the control, organisation and planning have been directing organised endeavors:`,
        "options": ["Since 1400's", "For 100,000 years", "For Twenty years", "For Thousands of years"],
        "explanation": "The very first sentence of the provided passage explicitly states: \"Organized endeavors directed by people responsible for planning, organizing, leading and controlling activities have existed for <strong>thousands of years</strong>.\""
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q48",
    "unit": "Unit 3: Reading Comprehension",
    "topic": "Passage interpretation",
    "difficulty": "easy",
    "correct": 2,
    "content": {
      "en": {
        "question": `${passageHTML(PASSAGE_MANAGEMENT)}<strong>Question:</strong><br>According to the passage, the ancient equivalent of the assembly line was used in:`,
        "options": ["Egypt", "China", "Venice", "Giza"],
        "explanation": "The passage directly compares the modern automobile assembly line to the historical process used in the arsenal of <strong>Venice</strong>, where warships were floated along canals and components were systematically added at each stop."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q49",
    "unit": "Unit 3: Reading Comprehension",
    "topic": "Answer extraction skills",
    "difficulty": "easy",
    "correct": 1,
    "content": {
      "en": {
        "question": `${passageHTML(PASSAGE_MANAGEMENT)}<strong>Question:</strong><br>The passage documents that Egyptians involved in the construction of pyramids had:`,
        "options": ["An inventary system to keep record of the stones.", "A plan for what was to be done.", "An accounting system to keep the record of money.", "A warehouse system to manage materials."],
        "explanation": "While the specific text about Egypt wasn't fully detailed in the snippet, standard reading comprehension logic based on the passage's definition of ancient management points to having \"a plan for what was to be done.\" <br><br>The other options (inventory systems, accounting systems, and warehouses) were explicitly mentioned in the passage in the context of the Venetians (Venice, Italy) during the 1400s, not the Egyptians."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  },
  {
    "id": "p1-jan2026-q50",
    "unit": "Unit 3: Reading Comprehension",
    "topic": "Passage interpretation",
    "difficulty": "easy",
    "correct": 2,
    "content": {
      "en": {
        "question": `${passageHTML(PASSAGE_MANAGEMENT)}<strong>Question:</strong><br>The reader learns from the given passage that:`,
        "options": ["Management is a recent creation.", "The title of manager is an ancient one.", "People directing organised endeavors can be seen down the ages.", "The assembly line system was prevalent in China, Egypt and Italy."],
        "explanation": "The core thesis of the entire passage is to demonstrate that while modern business practices might look new, the fundamental act of management—<strong>people directing organized endeavors</strong>—has existed throughout history (\"down the ages\"), spanning from the building of ancient monuments to the Venetian arsenals."
      },
      "hi": { "question": "", "options": [], "explanation": "" }
    }
  }
];

const TEST_JUNE_2025 = [
  {
    "id": "JUNE2025_Q01",
    "difficulty": "medium",
    "question": "Which of the following cervical vertebra is characterized by the presence of \"dens\" (odontoid process)?",
    "options": ["First Cervical", "Second Cervical", "Seventh Cervical", "Third Cervical"],
    "correct": 1,
    "unit": "UNIT 2: Biological Evolution & Primatology",
    "topic": "Human vs apes comparison",
    "explanation": "The second cervical vertebra, also known as the axis, possesses a unique upward projection called the dens (or odontoid process). This structure acts as a pivot, allowing the head to rotate from side to side."
  },
  {
    "id": "JUNE2025_Q02",
    "difficulty": "easy",
    "question": "The name of the journal published by the Association for Feminist Anthropology is:",
    "options": ["Voices", "Feminist Anthropology", "Gender and Society", "Gender Matters"],
    "correct": 0,
    "unit": "UNIT 8: Anthropological Theories",
    "topic": "Gender anthropology",
    "explanation": "The Association for Feminist Anthropology publishes the journal 'Voices' (and also recognizes 'Feminist Anthropology'). These publications highlight feminist anthropological research, methodologies, and perspectives."
  },
  {
    "id": "JUNE2025_Q03",
    "difficulty": "hard",
    "question": `Match the LIST-I with LIST-II\n${matchTable("LIST-I (Names of Blood Groups)","LIST-II (Gene Name)",[["A","H","I","GYPA"],["B","MNS","II","DARC"],["C","Duffy","III","RHD"],["D","Rh","IV","FUT1"]])}Choose the correct answer from the options given below:`,
    "options": ["A-IV, B-I, C-II, D-III", "A-III, B-IV, C-I, D-II", "A-I, B-II, C-III, D-IV", "A-II, B-III, C-IV, D-I"],
    "correct": 0,
    "unit": "UNIT 3: Human Genetics",
    "topic": "Molecular genetics",
    "explanation": "The H blood group antigen is encoded by the FUT1 gene. The MNS blood group system is associated with the GYPA gene, Duffy with DARC, and Rh with the RHD gene."
  },
  {
    "id": "JUNE2025_Q04",
    "difficulty": "medium",
    "question": "The Dilution Method for measuring PTC tasting sensitivity was given by:",
    "options": ["Malthus and Landsteiner", "Harris and Kalmus", "Farr and Henderson", "Duffy and Lewis"],
    "correct": 1,
    "unit": "UNIT 3: Human Genetics",
    "topic": "Genetic polymorphism",
    "explanation": "Harris and Kalmus developed the serial dilution method in 1949 to accurately measure the threshold of sensitivity for tasting Phenylthiocarbamide (PTC), which became a standard genetic marker test."
  },
  {
    "id": "JUNE2025_Q05",
    "difficulty": "medium",
    "question": "Protohistoric bar bits of Iron and diadems in urn burial are discovered at:",
    "options": ["Attirampakkam", "Burzahom", "Adichanallur", "Bagor"],
    "correct": 2,
    "unit": "UNIT 6: Indian Prehistory",
    "topic": "Iron age",
    "explanation": "Adichanallur in Tamil Nadu is an important Iron Age urn-burial site. Excavations here have yielded iron implements, weapons, and distinctive gold diadems, highlighting advanced early metallurgical skills."
  },
  {
    "id": "JUNE2025_Q06",
    "difficulty": "easy",
    "question": "The concept of Normal distribution was given by:",
    "options": ["F. Galton", "R. A. Fischer", "K. F. Gauss", "S. D. Poisson"],
    "correct": 2,
    "unit": "UNIT 1: Research Methodology & Basics",
    "topic": "Statistics (variables, sampling)",
    "explanation": "The normal distribution is a fundamental concept in statistics, often referred to as the Gaussian distribution. It is named after Carl Friedrich Gauss, who discovered it while analyzing astronomical data."
  },
  {
    "id": "JUNE2025_Q07",
    "difficulty": "hard",
    "question": "Essentaialism is characterised through:\nA. Modernist Ontology\nB. Reification\nC. Cultural relativism\nD. Biologism\nChoose the correct answer from the options given below:",
    "options": ["A and C Only", "B and C Only", "B and D Only", "A and D Only"],
    "correct": 2,
    "unit": "UNIT 8: Anthropological Theories",
    "topic": "Postmodernism",
    "explanation": "Essentialism often relies on 'Reification' (treating an abstract concept as concrete) and 'Biologism' (reducing complex social phenomena to biological determinism). It opposes the fluidity suggested by cultural relativism."
  },
  {
    "id": "JUNE2025_Q08",
    "difficulty": "hard",
    "question": "Arrange the following works in the chronological order of their first publication from the earliest to latest:\nA. Golden Bough, by James Frazer\nB. Ancient Law, by Henry Maine\nC. Ancient Society, by L.H. Morgan\nD. Primitive Culture, by E.B. Tylor\nChoose the correct answer from the options given below:",
    "options": ["A, C, D, B", "D, C, B, A", "A, D, C, B", "B, D, C, A"],
    "correct": 3,
    "unit": "UNIT 11: Miscellaneous & High-Yield Facts",
    "topic": "Books, Authors & Years",
    "explanation": "The correct chronological order is: Ancient Law by Maine (1861), Primitive Culture by Tylor (1871), Ancient Society by Morgan (1877), and The Golden Bough by Frazer (1890)."
  },
  {
    "id": "JUNE2025_Q09",
    "difficulty": "medium",
    "question": "Eskimo terminology, in Murdock's classification is one in which:",
    "options": ["Siblings are distinguished from cousins and no distinction is made between parallel and cross-cousins", "Siblings are merged with parallel cousins and distinguished from cross cousins.", "Siblings, cross and parallel cousins all are bifurcated and distinguished", "Siblings, cross and parallel cousins all are merged and no distinction is made"],
    "correct": 0,
    "unit": "UNIT 7: Social Anthropology Concepts",
    "topic": "Kinship systems",
    "explanation": "In the Eskimo kinship terminology system, emphasis is placed on the nuclear family. Siblings are distinguished from cousins, but no distinction is made between cross-cousins and parallel cousins."
  },
  {
    "id": "JUNE2025_Q10",
    "difficulty": "medium",
    "question": "Speech Act in which utterance is equal to an action is called as:",
    "options": ["Elocutionary", "Perlocutionary", "Illocutionary", "Locutionary"],
    "correct": 2,
    "unit": "UNIT 11: Miscellaneous & High-Yield Facts",
    "topic": "Important Terms & Concepts",
    "explanation": "An illocutionary act is a speech act where the utterance itself performs an intended action (e.g., promising, warning, or declaring), a concept famously proposed by philosopher J.L. Austin."
  },
  {
    "id": "JUNE2025_Q11",
    "difficulty": "hard",
    "question": "Sequence following steps in the FISH technique in the correct order:\nA. Denaturation of DNA\nB. Hybridization of probe to target DNA\nC. Fixation of cells on a slide\nD. Detection of signal using a fluorescence microscope\nChoose the correct answer from the options given below:",
    "options": ["D, C, B, A", "A, B, C, D", "C, A, B, D", "B, C, A, D"],
    "correct": 2,
    "unit": "UNIT 3: Human Genetics",
    "topic": "Cytogenetics",
    "explanation": "The FISH (Fluorescence In Situ Hybridization) technique involves fixing cells on a slide, denaturing the DNA, hybridizing the fluorescent probe to the target DNA, and finally detecting the signal with a microscope."
  },
  {
    "id": "JUNE2025_BONUS_1",
    "difficulty": "easy",
    "question": "The concept of 'Thick Description' in Cultural Anthropology was introduced by:",
    "options": ["Claude Lévi-Strauss", "Clifford Geertz", "Bronisław Malinowski", "Victor Turner"],
    "correct": 1,
    "unit": "UNIT 8: Anthropological Theories",
    "topic": "Interpretive anthropology",
    "explanation": "Thick description is a concept introduced by Clifford Geertz. It involves explaining not just a behavior, but its context, making the behavior meaningful to an outsider."
  },
  {
    "id": "JUNE2025_Q13",
    "difficulty": "hard",
    "question": `Match the LIST-I with LIST-II\n${matchTable("LIST-I (Place)","LIST-II (Fossil)",[["A","Trinil","I","Neanderthal skeleton"],["B","Taung","II","Sinanthropus pekinensis"],["C","Lachapelle-aux-Saints","III","Australopithecus africanus"],["D","Zhoukoudian","IV","Pithecanthropus erectus"]])}Choose the correct answer from the options given below:`,
    "options": ["A-IV, B-III, C-I, D-II", "A-III, B-I, C-IV, D-II", "A-I, B-IV, C-II, D-III", "A-III, B-I, C-II, D-IV"],
    "correct": 1,
    "unit": "UNIT 2: Biological Evolution & Primatology",
    "topic": "Homo erectus",
    "explanation": "Trinil is associated with Pithecanthropus erectus (Java Man). Taung yielded Australopithecus africanus. La Chapelle-aux-Saints is famous for a Neanderthal skeleton, and Zhoukoudian for Sinanthropus pekinensis (Peking Man)."
  },
  {
    "id": "JUNE2025_Q14",
    "difficulty": "hard",
    "question": "Arrange the following genome projects in chronological order from earliest to latest:\nA. 1000 Genome Project\nB. HapMap Project\nC. Human Genome Project\nD. GenomeIndia Project\nChoose the correct answer from the options given below:",
    "options": ["C, D, B, A", "B, D, C, A", "B, C, D, A", "C, B, A, D"],
    "correct": 3,
    "unit": "UNIT 11: Miscellaneous & High-Yield Facts",
    "topic": "Chronology & Sequences",
    "explanation": "The Human Genome Project began in 1990 (C), followed by the HapMap Project in 2002 (B), the 1000 Genomes Project in 2008 (A), and the GenomeIndia Project recently (D)."
  },
  {
    "id": "JUNE2025_Q15",
    "difficulty": "medium",
    "question": "Focus Group method grew out of:\nA. Key Informant Interview\nB. Therapeutic Research\nC. Case Study Method\nD. Marketing Research\nChoose the correct answer from the options given below:",
    "options": ["A, B and D Only", "B, C and D Only", "B and D Only", "A and C Only"],
    "correct": 2,
    "unit": "UNIT 1: Research Methodology & Basics",
    "topic": "Focus group, PRA, RRA",
    "explanation": "Focus groups originated in sociology and marketing research (D) and were also heavily influenced by therapeutic research (B) involving group therapy dynamics."
  },
  {
    "id": "JUNE2025_Q16",
    "difficulty": "medium",
    "question": "An Acheulean living floor was exposed at Gulbarga in Karnataka was found by:",
    "options": ["H.D. Sankalia", "V.N. Misra", "R.V. Joshi", "K. Paddaiah"],
    "correct": 3,
    "unit": "UNIT 6: Indian Prehistory",
    "topic": "Lower palaeolithic India",
    "explanation": "K. Paddayya conducted extensive archaeological excavations in the Hunsgi and Baichbal valleys of Gulbarga, Karnataka, unearthing significant Acheulean living floors."
  },
  {
    "id": "JUNE2025_Q17",
    "difficulty": "hard",
    "question": "Which of the following is true for models of human origin?\nA. Multiregional and Candelabra models are identical to each other\nB. Replacement and Candelabra models are identical to each other\nC. In multiregional model, the evolution also includes gene flow between populations\nD. In multiregional model, the main lines of ancestry are not within each major region of the Old World\nChoose the correct answer from the options given below:",
    "options": ["A and D Only", "B Only", "C Only", "B and D Only"],
    "correct": 2,
    "unit": "UNIT 2: Biological Evolution & Primatology",
    "topic": "Multiregional hypothesis",
    "explanation": "The Multiregional model proposes that human evolution occurred simultaneously across different regions of the world, facilitated by continuous gene flow between these geographically separated populations."
  },
  {
    "id": "JUNE2025_Q18",
    "difficulty": "medium",
    "question": "Which species of malaria parasite uses the Duffy antigen as a receptor to invade red blood cells?",
    "options": ["Plasmodium ovale", "Plasmodium vivax", "Plasmodium malariae", "Plasmodium falciparum"],
    "correct": 1,
    "unit": "UNIT 3: Human Genetics",
    "topic": "Genetic polymorphism",
    "explanation": "Plasmodium vivax uniquely relies on the Duffy blood group antigen as a receptor to enter human red blood cells. Populations lacking this antigen are naturally resistant to this malaria strain."
  },
  {
    "id": "JUNE2025_Q19",
    "difficulty": "hard",
    "question": "Which of the following statements are true with respect to westernization?\nA. Westernization promotes materilism\nB. Westernization promotes caste consciousness\nC. Westernization promotes national consciousness\nD. Westernization retards sanskritization\nChoose the correct answer from the options given below:",
    "options": ["A and C Only", "B and D Only", "C and D Only", "A and B Only"],
    "correct": 0,
    "unit": "UNIT 9: Indian Anthropology",
    "topic": "Westernization",
    "explanation": "M.N. Srinivas noted that Westernization introduces new values like materialism and rationalism, while also promoting national consciousness by establishing a broader modern identity beyond caste."
  },
  {
    "id": "JUNE2025_Q20",
    "difficulty": "easy",
    "question": "The distinction between Unilinear, Multilinear and Universal evolution was first proposed by:",
    "options": ["Julian Steward", "Leslie White", "Elman Service", "Gordon Childe"],
    "correct": 0,
    "unit": "UNIT 8: Anthropological Theories",
    "topic": "Cultural ecology",
    "explanation": "Julian Steward introduced the concept of 'multilinear evolution', effectively distinguishing it from the 19th-century unilinear models and Leslie White's universal evolutionary approach."
  },
  {
    "id": "JUNE2025_Q21",
    "difficulty": "medium",
    "question": "Involution in ecological anthropology is characterize by a situation of:",
    "options": ["Cultural stagnation accompanied by economic stagnation", "Socio-economic stagnation accompanied by cultural elaboration", "Economic growth accompanied by bureaucratic control", "Economic stagnation accompanied by demographic implosion"],
    "correct": 1,
    "unit": "UNIT 8: Anthropological Theories",
    "topic": "Cultural ecology",
    "explanation": "The human vertebral column from top (cranial) to bottom (caudal) is arranged as: Cervical (neck), Thoracic (chest), Lumbar (lower back), and Sacrum (pelvic region)."
  },
  {
    "id": "JUNE2025_Q22",
    "difficulty": "medium",
    "question": "Arrange the following regions of vertebral column from cranial to caudal postion:\nA. Lumber\nB. Sacrum\nC. Cervical\nD. Thoracic\nChoose the correct answer from the options given below:",
    "options": ["D, B, A, C", "C, D, A, B", "A, C, B, D", "C, A, D, B"],
    "correct": 0,
    "unit": "UNIT 2: Biological Evolution & Primatology",
    "topic": "Human vs apes comparison",
    "explanation": "Radiocarbon (C-14) has a half-life of 5568±30 years (Libby's value). Potassium-40 is 1.3 billion years, Thorium-232 is 14.05 billion years, and Uranium-238 is 4.5 billion years."
  },
  {
    "id": "JUNE2025_Q23",
    "difficulty": "hard",
    "question": `Match the LIST-I with LIST-II\n${matchTable("LIST-I","LIST-II",[["A","Half Life Period of Carbon 14","I","14.05 billion Years"],["B","Half Life Period of Potassium","II","1.3 billion ± 40 million years"],["C","Half Life Period of Thorium","III","4.5 billion years"],["D","Half-Life Period of Uranium","IV","5568 ± 30 years"]])}Choose the correct answer from the options given below:`,
    "options": ["A-IV, B-II, C-I, D-III", "A-II, B-I, C-IV, D-III", "A-IV, B-III, C-I, D-II", "A-IV, B-I, C-III, D-II"],
    "correct": 0,
    "unit": "UNIT 5: Prehistoric Archaeology",
    "topic": "Dating methods",
    "explanation": "The 'Big Man' is a highly influential individual in a tribal society (especially in Melanesia) who achieves leadership through personal charisma, generosity, and wealth accumulation, rather than inherited status."
  },
  {
    "id": "JUNE2025_Q24",
    "difficulty": "easy",
    "question": "Anthropologically speaking, the Melanesian Big Man would be characterized as a:",
    "options": ["Tribal Leader", "Band Leader", "State Leader", "Chiefdom Leader"],
    "correct": 3,
    "unit": "UNIT 7: Social Anthropology Concepts",
    "topic": "Political organization",
    "explanation": "Richard Lee's studies on the !Kung San challenged the 'brutish' view of hunter-gatherers, revealing they worked fewer hours and had a more nutritious, stable diet than neighboring agriculturalists."
  },
  {
    "id": "JUNE2025_Q25",
    "difficulty": "medium",
    "question": "According to Lee and DeVore, The San of Kalahari when compared to their farmer and horticultural neighbours, were:\nA. Working for more hours\nB. Working for less hours\nC. Better nourished\nD. Malnourished\nChoose the correct answer from the options given below:",
    "options": ["A and C Only", "C and D Only", "B and D Only", "B and C Only"],
    "correct": 3,
    "unit": "UNIT 7: Social Anthropology Concepts",
    "topic": "Economic anthropology",
    "explanation": "Geographically from North to South: Raji (Uttarakhand), Sahariya (Madhya Pradesh/Rajasthan), Jenu Kuruba (Karnataka), and Kadar (Kerala)."
  },
  {
    "id": "JUNE2025_Q26",
    "difficulty": "hard",
    "question": "Arrange the PVTG's in term of their geographical location from North to South:\nA. Sahariya\nB. Jenu Kuruba\nC. Rajjis\nD. Kadar\nChoose the correct answer from the options given below:",
    "options": ["A, D, C, B", "A, C, D, B", "C, A, D, B", "C, A, B, D"],
    "correct": 1,
    "unit": "UNIT 9: Indian Anthropology",
    "topic": "Tribal studies",
    "explanation": "Raymond T. Smith conceptualized the matrifocal family in the Caribbean, and Carol Stack documented matrifocal networks in urban African-American communities in her famous book 'All Our Kin'."
  },
  {
    "id": "JUNE2025_Q27",
    "difficulty": "medium",
    "question": "Who among the Following are known for their work on Matrifocal Family?\nA. R. Smith\nB. M. Fortes\nC. J. Goody\nD. C. Stack\nChoose the correct answer from the options given below:",
    "options": ["A and C Only", "A and D Only", "B and D Only", "B and C Only"],
    "correct": 0,
    "unit": "UNIT 7: Social Anthropology Concepts",
    "topic": "Family types",
    "explanation": "The Kula ring involves the exchange of both ceremonial valuables and utilitarian goods. Mwali (shell armbands) circulate counter-clockwise, while Bagi/Soulava (shell necklaces) circulate clockwise across the Trobriand Islands."
  },
  {
    "id": "JUNE2025_Q28",
    "difficulty": "hard",
    "question": "Kula involves:\nA. Exchange of ceremonial valuables only\nB. Exchange of both Ceremonial valuables and Utilitarian Goods\nC. Counterclockwise movement of mwals and Clockwise circulation of bagi\nD. Clockwise movement of mwals and Counterclockwise circulation of bagi\nChoose the correct answer from the options given below:",
    "options": ["A and C Only", "B and C Only", "B and D Only", "A and D Only"],
    "correct": 0,
    "unit": "UNIT 7: Social Anthropology Concepts",
    "topic": "Economic anthropology",
    "explanation": "James Neel proposed the 'Thrifty Genotype' hypothesis in 1962, suggesting that hunter-gatherers evolved genes highly efficient at storing fat to survive famines, which now leads to diabetes in modern sedentary lifestyles."
  },
  {
    "id": "JUNE2025_Q29",
    "difficulty": "medium",
    "question": "Choose the correct combination from the following statements with respect to thrifty genotype:\nA. It is identical to thrifty phenotype\nB. It is very efficient at storing food in the body in the form of fat\nC. It was introduced by James Neel\nD. It is not related to obesity and diabetes\nChoose the correct answer from the options given below:",
    "options": ["B, C Only", "A, B Only", "A, C Only", "B, D Only"],
    "correct": 1,
    "unit": "UNIT 4: Growth, Adaptation & Demography",
    "topic": "Human adaptation rules",
    "explanation": "An astrologer interprets celestial positions to gain insight into human affairs, which falls under the anthropological category of a diviner—a practitioner who uncovers hidden knowledge or predicts the future."
  },
  {
    "id": "JUNE2025_Q30",
    "difficulty": "easy",
    "question": "An astrologer would most likely be performing the function of a:",
    "options": ["Shaman", "Diviner", "Priest", "Sorcerer"],
    "correct": 3,
    "unit": "UNIT 7: Social Anthropology Concepts",
    "topic": "Magic & ritual",
    "explanation": "Verrier Elwin wrote 'The Agaria', S.C. Roy authored 'The Hill Bhuiyas of Orissa', and D.N. Majumdar wrote 'A Tribe in Transition'."
  },
  {
    "id": "JUNE2025_Q31",
    "difficulty": "hard",
    "question": `Match the LIST-I with LIST-II\n${matchTable("LIST-I (Indian Anthropologist)","LIST-II (Title of the Book)",[["A","V. Elwin","I","Family in India"],["B","S. C. Roy","II","A Tribe in Transition"],["C","Iravati Karve","III","The Agaria"],["D","D. N. Majumdar","IV","The Hill Bhuiyas of Orissa"]])}Choose the correct answer from the options given below:`,
    "options": ["A-II, B-I, C-III, D-IV", "A-IV, B-II, C-III, D-I", "A-I, B-III, C-IV, D-II", "A-III, B-IV, C-I, D-II"],
    "correct": 3,
    "unit": "UNIT 11: Miscellaneous & High-Yield Facts",
    "topic": "Books, Authors & Years",
    "explanation": "In prophase, the nuclear envelope first starts breaking down (B) and then completely disappears (C). Meanwhile, chromatin condenses into visible chromosomes (D), and finally spindle fibers establish polar orientation for division (A)."
  },
  {
    "id": "JUNE2025_Q32",
    "difficulty": "hard",
    "question": "Choose the correct sequence of steps in the prophase stage of mitosis cell division:\nA. The polar orientation of the cell for the division into two daughter cells established\nB. The nuclear envelop breaks down\nC. The nuclear envelop disappears\nD. The diffuse chromatin fibers condense and begins to form dense chromosome\nChoose the correct answer from the options given below:",
    "options": ["B, C, D, A", "A, D, C, A", "C, A, B, D", "B, C, A, D"],
    "correct": 2,
    "unit": "UNIT 3: Human Genetics",
    "topic": "Cytogenetics",
    "explanation": "The Mousterian culture, associated with Middle Paleolithic Neanderthals, is characterized by flake tools like denticulates and side scrapers, and the extensive occupation of rock shelters. Cave art emerged later in the Upper Paleolithic."
  },
  {
    "id": "JUNE2025_Q33",
    "difficulty": "medium",
    "question": "The Mousterian culture is characterised by:\nA. Denticulate tools\nB. Great use of Rock-shelters and Caves\nC. Hand stencils on Cave walls\nD. Three dimensional sculptural Art\nChoose the correct answer from the options given below:",
    "options": ["A and D Only", "B and D Only", "A, B and C Only", "B, C and D Only"],
    "correct": 0,
    "unit": "UNIT 5: Prehistoric Archaeology",
    "topic": "Middle palaeolithic tools",
    "explanation": "Mary Douglas developed the 'Group and Grid' theory. Victor Turner is famous for 'Communitas'. Benedict Anderson coined 'Imagined Communities', and Anthony Cohen worked on the 'Symbolic Construction of Community'."
  },
  {
    "id": "JUNE2025_Q34",
    "difficulty": "hard",
    "question": `Match the LIST-I with LIST-II\n${matchTable("LIST-I","LIST-II",[["A","Group and Grid","I","Victor Turner"],["B","Communitas","II","Anthony Cohen"],["C","Imagined Community","III","Mary Douglas"],["D","Symbolic Community","IV","Benedict Anderson"]])}Choose the correct answer from the options given below:`,
    "options": ["A-III, B-I, C-IV, D-II", "A-III, B-I, C-II, D-IV", "A-I, B-III, C-II, D-IV", "A-II, B-I, C-IV, D-III"],
    "correct": 2,
    "unit": "UNIT 11: Miscellaneous & High-Yield Facts",
    "topic": "Important Terms & Concepts",
    "explanation": "Dholavira, excavated by R.S. Bisht in Gujarat, is a major Harappan city. Its strategic coastal location and recovered artifacts suggest significant maritime trade contacts with regions like Oman and Yemen."
  },
  {
    "id": "JUNE2025_Q35",
    "difficulty": "medium",
    "question": "A Harappan site of 3rd millennium BCE excavated by Bisht is expected to have contacts with Oman and Yemen is:",
    "options": ["Surkotada", "Desalpur", "Dholavira", "Rangpur"],
    "correct": 3,
    "unit": "UNIT 6: Indian Prehistory",
    "topic": "Indus civilization",
    "explanation": "Genetic drift refers to the random fluctuations in allele frequencies within a small population from one generation to the next, entirely due to chance events rather than natural selection."
  },
  {
    "id": "JUNE2025_Q36",
    "difficulty": "easy",
    "question": "Random Fluctuation in gene frequencies are due to:",
    "options": ["Genetic recombination", "Mutation", "Natural Selection", "Genetic Drift"],
    "correct": 0,
    "unit": "UNIT 3: Human Genetics",
    "topic": "Genetic drift",
    "explanation": "From head to toe (cranial to caudal): Glenoid cavity is on the scapula (shoulder), Olecranon fossa is on the humerus (elbow), Acetabulum is on the pelvis (hip), and Linea aspera is on the posterior femur (thigh)."
  },
  {
    "id": "JUNE2025_Q37",
    "difficulty": "hard",
    "question": "Arrange the following osteological points on the human skeleton from cranial to caudal postion:\nA. Linea aspera\nB. Acetabulum\nC. Glenoid Cavity\nD. Olecrenon Fossa\nChoose the correct answer from the options given below:",
    "options": ["C, D, B, A", "D, B, A, C", "A, C, B, D", "C, A, D, B"],
    "correct": 2,
    "unit": "UNIT 2: Biological Evolution & Primatology",
    "topic": "Human vs apes comparison",
    "explanation": "The clavicle (collarbone) has two distinct ends: the sternal end, which articulates with the sternum (breastbone), and the acromial end, which articulates with the acromion process of the scapula."
  },
  {
    "id": "JUNE2025_Q38",
    "difficulty": "medium",
    "question": "Acromial end and Sternal end are present on:",
    "options": ["Scapula", "Sternum", "Clavicle", "Os innominate"],
    "correct": 2,
    "unit": "UNIT 2: Biological Evolution & Primatology",
    "topic": "Human vs apes comparison",
    "explanation": "Asking if a person currently has a disease at this exact moment measures 'Point Prevalence', which is the proportion of a population that has the condition at a specific single point in time."
  },
  {
    "id": "JUNE2025_Q39",
    "difficulty": "medium",
    "question": "If a researcher asked the question: \"Do you currently have asthma?\", he intends to measure:",
    "options": ["Period Prevalence", "Cumulative incidence", "Point Prevalence", "Incidence Rate"],
    "correct": 2,
    "unit": "UNIT 10: Applied Anthropology",
    "topic": "Medical anthropology",
    "explanation": "In Claude Lévi-Strauss's structural anthropology, a 'mechanical model' is one where the elements of the model are on the exact same scale as the actual social phenomena they represent (e.g., prescriptive marriage rules)."
  },
  {
    "id": "JUNE2025_Q40",
    "difficulty": "hard",
    "question": "The models of same scale to represent a phenomenon or event as used in Structural anthropology is called as:",
    "options": ["Organic Model", "Statistical Model", "Mechanical Model", "Analogical Model"],
    "correct": 1,
    "unit": "UNIT 8: Anthropological Theories",
    "topic": "Structuralism",
    "explanation": "The Tatrot and Pinjaur formations are part of the Upper Siwaliks. Pinjaur is generally assigned to the Lower Pleistocene, marking the Plio-Pleistocene boundary which is rich in hominoid and mammalian fossils."
  },
  {
    "id": "JUNE2025_Q41",
    "difficulty": "medium",
    "question": "The Himalayan lacustrine units of Tatrot and Pinjaur belong to:",
    "options": ["Holocene", "Pleistocene", "Pliocene", "Miocene"],
    "correct": 1,
    "unit": "UNIT 5: Prehistoric Archaeology",
    "topic": "Geological stages",
    "explanation": "Eidos refers to the cognitive pattern of a culture — the shared ways of thinking, reasoning, and perceiving reality. It contrasts with ethos, which relates to emotional tone. Hence, Eidos represents the intellectual or mental framework of a society."
  },
  {
    "id": "JUNE2025_Q42",
    "difficulty": "hard",
    "question": "Eidos, according Gregory Bateson refers to a distinctive:",
    "options": ["Emotional pattern in a culture", "Cognitive pattern in a culture", "Relationship pattern in a culture", "Integration pattern in a culture"],
    "correct": 2,
    "unit": "UNIT 11: Miscellaneous & High-Yield Facts",
    "topic": "Important Terms & Concepts",
    "explanation": "The phrase \"survival of the fittest\" was actually coined by the philosopher Herbert Spencer in his 'Principles of Biology' (1864) after reading Charles Darwin's work. Darwin later adopted the phrase in the 5th edition of 'On the Origin of Species'."
  },
  {
    "id": "JUNE2025_Q43",
    "difficulty": "medium",
    "question": "The time-honored definition of natural selection as \"survival of the fittest,\" was a phrase coined by social theorist:",
    "options": ["AR Wallace", "C Darwin", "Herbert Spencer", "Thomas Malthus"],
    "correct": 3,
    "unit": "UNIT 11: Miscellaneous & High-Yield Facts",
    "topic": "Important Terms & Concepts",
    "explanation": "A. africanus lived around 3.5-2.0 MYA. A. sediba is dated specifically to ~1.97-1.78 MYA. A. aethiopicus is older (2.7-2.5 MYA) while the robust A. boisei survived much later (2.3-1.2 MYA)."
  },
  {
    "id": "JUNE2025_Q44",
    "difficulty": "hard",
    "question": `Match the LIST-I with LIST-II\n${matchTable("LIST-I (Fossils)","LIST-II (Time Period)",[["A","Australopithecus africanus","I","2.3-1.2 MYA"],["B","Australopithecus sediba","II","2.7-2.5 MYA"],["C","Australopithecus aethiopicus","III","1.97-1.78 MYA"],["D","Australopithecus boisei","IV","3.5-2.0 MYA"]])}Choose the correct answer from the options given below:`,
    "options": ["A-I, B-II, C-III, D-IV", "A-II, B-III, C-IV, D-I", "A-III, B-II, C-I, D-IV", "A-IV, B-III, C-II, D-I"],
    "correct": 3,
    "unit": "UNIT 2: Biological Evolution & Primatology",
    "topic": "Australopithecus species",
    "explanation": "Next-Generation Sequencing (NGS) is widely referred to as 'Massively Parallel Sequencing' because it sequences millions of fragments simultaneously. Many NGS platforms (like Illumina) use the 'sequencing by synthesis' method. Sanger sequencing is the older, first-generation method."
  },
  {
    "id": "JUNE2025_Q45",
    "difficulty": "medium",
    "question": "Next Generation Sequencing is also known as:\nA. Infinite Sequencing\nB. Parallel Sequencing\nC. Sanger Sequencing\nD. Sequencing by Synthesis\nChoose the correct answer from the options given below:",
    "options": ["A and C Only", "A and B Only", "B and C Only", "B and D Only"],
    "correct": 2,
    "unit": "UNIT 3: Human Genetics",
    "topic": "Molecular genetics",
    "explanation": "Article 371C of the Indian Constitution makes special provisions for the state of Manipur, specifically mandating the creation of a Hill Areas Committee to protect tribal interests. (Note: 371A is for Nagaland)."
  },
  {
    "id": "JUNE2025_Q46",
    "difficulty": "easy",
    "question": "The Article 371-C of the Constitution of India refers to the scheduled tribes belonging to the state of:",
    "options": ["Meghalaya", "Nagaland", "Manipur", "Mizoram"],
    "correct": 3,
    "unit": "UNIT 9: Indian Anthropology",
    "topic": "Constitutional safeguards",
    "explanation": "In Claude Lévi-Strauss's kinship theory, symmetric exchange (restricted exchange) involves direct sister exchange between two groups. He argued this creates less overall social cohesion compared to generalized (asymmetric) exchange, which integrates multiple groups into a vast network."
  },
  {
    "id": "JUNE2025_Q47",
    "difficulty": "hard",
    "question": "Symmetric exchange include:\nA. Generalised Exchange\nB. Patrilateral Cross-Cousin marriages\nC. Restricted Exchange\nD. More social cohesion according to Levi Strauss\nE. Less social cohesion according to Levi Strauss\nChoose the correct answer from the options given below:",
    "options": ["A, B and D Only", "B, C and E Only", "C and D Only", "C and E Only"],
    "correct": 2,
    "unit": "UNIT 7: Social Anthropology Concepts",
    "topic": "Kinship systems",
    "explanation": "The fluted core technique is specifically used to strike off thin, slender, and elongated parallel-sided blades from a prepared cylindrical or conical core, a hallmark of Upper Palaeolithic, Mesolithic, and Harappan tool making."
  },
  {
    "id": "JUNE2025_Q48",
    "difficulty": "medium",
    "question": "The thin, slender and elongated blades are produced by employing:",
    "options": ["Levalloisian Technique", "Tortoise Core Technique", "Fluted Core Technique", "Block-on-block Technique"],
    "correct": 0,
    "unit": "UNIT 5: Prehistoric Archaeology",
    "topic": "Upper palaeolithic tools",
    "explanation": "Kuru is a fatal prion disease discovered among the Fore people of Papua New Guinea. It was transmitted through the cultural practice of endocannibalism (consuming deceased relatives) during funerary rituals, predominantly affecting women and children."
  },
  {
    "id": "JUNE2025_Q49",
    "difficulty": "easy",
    "question": "A fascinating example of the influence of cultural practices on the spread of an infectious disease involves a condition known as Kuru is mostly caused due to:",
    "options": ["Ritual cannibalism directed by women", "Ritual sacrifice of animal and its blood contamination", "Polygamy and Inbreeding", "Ritual sacrifice of birds and communal eating"],
    "correct": 1,
    "unit": "UNIT 10: Applied Anthropology",
    "topic": "Medical anthropology",
    "explanation": "Prakash is an important ancient archaeological site located in the Dhule district of Maharashtra in the Tapti river valley. Excavations revealed a cultural sequence from the Chalcolithic period right through the Iron Age."
  },
  {
    "id": "JUNE2025_Q50",
    "difficulty": "medium",
    "question": "The Prakash, an Iron Age site is located in the valley of which river:",
    "options": ["Krishna", "Tapti", "Narmada", "Sarasvati"],
    "correct": 2,
    "unit": "UNIT 6: Indian Prehistory",
    "topic": "Iron age",
    "explanation": "Chronologically: Sir Henry Maine is a 19th-century pioneer ('Ancient Law', 1861). Bronisław Malinowski published 'Crime and Custom' in 1926. Karl Llewellyn co-authored 'The Cheyenne Way' in 1941. Max Gluckman's major legal work on the Barotse was published in 1955."
  },
  {
    "id": "JUNE2025_Q51",
    "difficulty": "hard",
    "question": "Arrange the following legal anthropologists in ascending order from early to later:\nA. Karl Llewellen\nB. Max Gluckman\nC. Henry Maine\nD. B. Malinowski\nChoose the correct answer from the options given below:",
    "options": ["B, A, D, C", "A, C, B, D", "C, D, A, B", "D, B, C, A"],
    "correct": 2,
    "unit": "UNIT 11: Miscellaneous & High-Yield Facts",
    "topic": "Chronology & Sequences",
    "explanation": "Bhimbetka is renowned for its continuous stratigraphic record from Lower Palaeolithic to Mesolithic (A), its rich rock art (B), and evidence of fire (D). It lacks Homo erectus fossils (which were found at nearby Hathnora) and deliberate burials with domesticates."
  },
  {
    "id": "JUNE2025_Q52",
    "difficulty": "hard",
    "question": "The Bhimbetka site is characterised by the evidences of:\nA. All phases of Palaeolithic and Mesolithic cultures\nB. Several Rock paints on the walls of caves and rock-shelters\nC. Deliberate burials of humans along with domesticates\nD. Ash, charcoal and charred bones indicate use of fire\nE. Osteological remains of Homo erectus\nChoose the correct answer from the options given below:",
    "options": ["A, D and E Only", "B, C and D Only", "A, B and D Only", "C, D and E Only"],
    "correct": 0,
    "unit": "UNIT 6: Indian Prehistory",
    "topic": "Middle palaeolithic India",
    "explanation": "The South Indian Neolithic is characterized by a strong pastoral economy (ashmounds indicating cattle), distinct grey/buff ware pottery, and wattle-and-daub huts. It lacks 'antennae swords' (Copper Hoard culture) and separate burial grounds."
  },
  {
    "id": "JUNE2025_Q53",
    "difficulty": "hard",
    "question": "The characteristic features of South Indian Neolithic cultures:\nA. Economy was largely depended on cattle raising next to goat and sheep\nB. The square and rectangular huts are predominant\nC. Pottery is of grey and buff ware\nD. Presence of copper or bronze antennae swords\nE. Separate Burial grounds\nChoose the correct answer from the options given below:",
    "options": ["A, B and C Only", "B, C and D Only", "A, C and D Only", "A, B, C and E Only"],
    "correct": 2,
    "unit": "UNIT 6: Indian Prehistory",
    "topic": "Neolithic India",
    "explanation": "H.D. Sankalia wrote 'Prehistory and Protohistory of India and Pakistan'. The Allchins authored 'The Rise of Civilization in India and Pakistan'. B. Subbarao wrote 'The Personality of India', and D.P. Agrawal wrote 'The Archaeology of India'."
  },
  {
    "id": "JUNE2025_Q54",
    "difficulty": "hard",
    "question": `Match the LIST-I with LIST-II\n${matchTable("LIST-I","LIST-II",[["A","H.D. Sankalia","I","The Archaeology of India"],["B","Raymond and Bridget Allchin","II","Personality of India"],["C","B. Subba Rao","III","Prehistory and Protohistory of India and Pakistan"],["D","D.P. Agarwal","IV","Rise of Civilization in India and Pakistan"]])}Choose the correct answer from the options given below:`,
    "options": ["A-II, B-III, C-I, D-IV", "A-II, B-I, C-IV, D-III", "A-III, B-IV, C-II, D-I", "A-IV, B-III, C-I, D-II"],
    "correct": 0,
    "unit": "UNIT 11: Miscellaneous & High-Yield Facts",
    "topic": "Books, Authors & Years",
    "explanation": "F.G. Bailey's major works in chronological order: 'Caste and the Economic Frontier' (1957), 'Tribe, Caste, and Nation' (1960), 'Politics and Social Change: Orissa in 1959' (1963), and much later 'The Witch-Hunt' (1994)."
  },
  {
    "id": "JUNE2025_Q55",
    "difficulty": "hard",
    "question": "Arrange the following works of F.G. Bailey in the chronological order of their publication from oldest to more recent:\nA. Tribe Caste and Nation\nB. Politics and Social Change in Orrisa\nC. Caste and Economic Frontier\nD. The Witch-hunt\nChoose the correct answer from the options given below:",
    "options": ["C, A, B, D", "D, A, C, B", "D, C, A, B", "A, C, B, D"],
    "correct": 0,
    "unit": "UNIT 11: Miscellaneous & High-Yield Facts",
    "topic": "Books, Authors & Years",
    "explanation": "The Copper Hoard culture of the Ganga-Yamuna doab is strongly associated stratigraphically and geographically with Ochre Coloured Pottery (OCP), dating roughly to the early 2nd millennium BCE."
  },
  {
    "id": "JUNE2025_Q56",
    "difficulty": "medium",
    "question": "The Copper Hoard culture is associated with",
    "options": ["Ocher Colored Pottery (OCP)", "Painted Grey Ware (PGW)", "Black and Red Ware (B&RW)", "Northern Black Polished (NBP) Ware"],
    "correct": 3,
    "unit": "UNIT 6: Indian Prehistory",
    "topic": "Bronze age",
    "explanation": "Based on the Hardy-Weinberg principle, if q² = 1/10,000 (0.0001), then q (recessive allele) is 0.01. Therefore, p (dominant allele) is 0.99. The heterozygote frequency is 2pq = 2 * 0.99 * 0.01 = 0.0198, which is approximately 0.02 (or 2%)."
  },
  {
    "id": "JUNE2025_Q57",
    "difficulty": "hard",
    "question": "Albinism, a recessive trait occurs about 1 in 10,000 persons in a population. The frequency of heterozygotes in the population is approximately",
    "options": ["0.01", "0.05", "0.99", "0.02"],
    "correct": 0,
    "unit": "UNIT 3: Human Genetics",
    "topic": "Hardy Weinberg equilibrium",
    "explanation": "Lewis Binford wrote 'Bones: Ancient Men and Modern Myths'. John Coles is a pioneer of 'Experimental Archaeology'. David Clarke wrote 'Analytical Archaeology', and Colin Renfrew authored 'Approaches to Social Archaeology'."
  },
  {
    "id": "JUNE2025_Q58",
    "difficulty": "hard",
    "question": `Match the LIST-I with LIST-II\n${matchTable("LIST-I (Archaeologist)","LIST-II (Book)",[["A","Binford, L. R","I","Analytical Archaeology"],["B","Coles, J.M","II","Approaches to Social Archaeology"],["C","Clark, D.L","III","Bones: Ancient Men and Modern Myth"],["D","Renfrew, C","IV","Experimental Archaeology"]])}Choose the correct answer from the options given below:`,
    "options": ["A-III, B-IV, C-I, D-II", "A-II, B-I, C-IV, D-III", "A-IV, B-II, C-I, D-III", "A-I, B-III, C-IV, D-II"],
    "correct": 1,
    "unit": "UNIT 11: Miscellaneous & High-Yield Facts",
    "topic": "Books, Authors & Years",
    "explanation": "Community Development Project (1952) → Special Multi-purpose Tribal Blocks (1956) → Renamed and expanded as Tribal Development Blocks in 1961 (3rd Five Year Plan) → Tribal Development Agencies were launched later in the early 1970s."
  },
  {
    "id": "JUNE2025_Q59",
    "difficulty": "hard",
    "question": "Arrange the following tribal development programs/approaches in the chronological order of their inception, starting from the earliest to the latest:\nA. Tribal Development Agency\nB. Special Multi-purpose Tribal Block\nC. Community Development Approach\nD. Tribal Development Block\nChoose the correct answer from the options given below:",
    "options": ["C, A, D, B", "C, B, D, A", "B, C, A, D", "C, B, A, D"],
    "correct": 1,
    "unit": "UNIT 11: Miscellaneous & High-Yield Facts",
    "topic": "Chronology & Sequences",
    "explanation": "B.S. Guha's 1931 classification included the 'Proto-Australoid' group. Sir H.H. Risley's 1901 classification famously included the 'Scytho-Dravidian' and 'Turko-Iranian' types, but did not use the term 'Nordic'. Thus, B and D are the correct matches."
  },
  {
    "id": "JUNE2025_Q60",
    "difficulty": "hard",
    "question": "Which of the following statements about ethnic classification of Indian population are correct?\nA. Risley's classification: Nordics\nB. Guha's classification: Proto-Australoids\nC. Guha's classification: Turko-Iranian Type\nD. Risley Classification: Scytho-Dravidian Type\nChoose the correct answer from the options given below:",
    "options": ["A and B Only", "B and D Only", "B and C Only", "C and D Only"],
    "correct": 0,
    "unit": "UNIT 3: Human Genetics",
    "topic": "Racial classifications",
    "explanation": "'Structure and Function in Primitive Society' is a seminal collection of essays published in 1952 by A.R. Radcliffe-Brown, laying the foundations for structural-functionalism in British social anthropology."
  },
  {
    "id": "JUNE2025_BONUS_2",
    "difficulty": "easy",
    "question": "Who among the following authored the book 'Structure and Function in Primitive Society'?",
    "options": ["A. R. Radcliffe-Brown", "Bronisław Malinowski", "E. E. Evans-Pritchard", "Claude Lévi-Strauss"],
    "correct": 0,
    "unit": "UNIT 11: Miscellaneous & High-Yield Facts",
    "topic": "Books, Authors & Years",
    "explanation": "Female philopatry means females remain in their natal group while males emigrate (making A correct). When a male enters a new group, he must compete for dominance (making C correct). Statement D is false because females can be dominant in several primate species, such as lemurs."
  },
  {
    "id": "JUNE2025_Q62",
    "difficulty": "medium",
    "question": "Which of the following statements about primate social behavior is/are correct?\nA. Female philopatry is a primate social system in which females remain and breed in the group of their birth, whereas males emigrate\nB. Female philopatry is a primate social system in which males remain in the group of their birth, whereas females emigrate\nC. Dominance is once a male enters a new group, a male must compete directly with the resident males over the group's females\nD. Males are the only dominant sex in all primate species\nChoose the correct answer from the options given below:",
    "options": ["A and C Only", "C and D Only", "B and D Only", "B and C Only"],
    "correct": 0,
    "unit": "UNIT 2: Biological Evolution & Primatology",
    "topic": "Primate social behaviour",
    "explanation": "Prior to the acceptance of the germ theory of disease, the Miasma theory postulated that diseases like cholera and the plague were caused by 'miasma' or 'bad air' emanating from decaying organic matter."
  },
  {
    "id": "JUNE2025_Q63",
    "difficulty": "easy",
    "question": "Miasma Theory says that the disease was transmitted by a",
    "options": ["Bad air or cloud, that clung low on the surface of the earth", "Bad Touch of other persons in the neighborhood", "Contaminated water", "Poor quality of unhygienic food consumed unknowingly"],
    "correct": 2,
    "unit": "UNIT 10: Applied Anthropology",
    "topic": "Medical anthropology",
    "explanation": "James Clifford wrote 'On Ethnographic Authority'. Vincent Crapanzano authored 'Tuhami: Portrait of a Moroccan'. Paul Rabinow wrote 'Reflections on Fieldwork in Morocco', and Jeanne Favret-Saada wrote 'Deadly Words'."
  },
  {
    "id": "JUNE2025_Q64",
    "difficulty": "hard",
    "question": `Match the LIST-I with LIST-II\n${matchTable("LIST-I (Author)","LIST-II (Reflexive Ethnographic Work)",[["A","James Clifford","I","Deadly Words: Witchcraft in the Bocage"],["B","Vincent Crapanzano","II","On Ethnographic Authority"],["C","Paul Rabinow","III","Tuhami: Portrait of a Moroccan"],["D","Jeanne Fevret-Saada","IV","Fieldwork and Friendship in Morocco"]])}Choose the correct answer from the options given below:`,
    "options": ["A-IV, B-II, C-I, D-III", "A-I, B-IV, C-III, D-II", "A-II, B-III, C-IV, D-I", "A-I, B-II, C-II, D-IV"],
    "correct": 2,
    "unit": "UNIT 11: Miscellaneous & High-Yield Facts",
    "topic": "Books, Authors & Years",
    "explanation": "Chronic Obstructive Pulmonary Disease (COPD) is typically diagnosed using spirometry, which primarily measures Forced Vital Capacity (FVC) and Forced Expiratory Volume in the first second (FEV1) to detect airflow obstruction."
  },
  {
    "id": "JUNE2025_Q65",
    "difficulty": "medium",
    "question": "Which of the following standard lung function tests are required for the diagnosis of COPD?\nA. Forced Vital capacity or Vital Capacity\nB. Residual capacity\nC. Total Lung Capacity\nD. Forced expiratory volume in 1st second\nChoose the correct answer from the options given below:",
    "options": ["B and D Only", "A and C Only", "A and D Only", "B and C Only"],
    "correct": 0,
    "unit": "UNIT 10: Applied Anthropology",
    "topic": "Medical anthropology",
    "explanation": "Thomas Kuhn introduced 'Paradigm shifts'. Karl Popper is famous for the principle of 'Falsification'. J.A. Barnes pioneered 'Network Analysis' in social anthropology, and R.K. Merton developed 'Middle Range Theory'."
  },
  {
    "id": "JUNE2025_Q66",
    "difficulty": "hard",
    "question": `Match the LIST-I with LIST-II\n${matchTable("LIST-I (Concept)","LIST-II (Scholar)",[["A","Paradigm","I","R.K. Merton"],["B","Falsification","II","J. A. Barnes"],["C","Network Analysis","III","T. Kuhn"],["D","Middle Range Theory","IV","Karl Popper"]])}Choose the correct answer from the options given below:`,
    "options": ["A-III, B-IV, C-II, D-I", "A-III, B-II, C-IV, D-I", "A-IV, B-III, C-I, D-II", "A-I, B-III, C-II, D-IV"],
    "correct": 3,
    "unit": "UNIT 11: Miscellaneous & High-Yield Facts",
    "topic": "Important Terms & Concepts",
    "explanation": "The immune response sequence begins with identifying a foreign substance (B), followed by synthesizing antibodies (A). These antibodies are specifically designed to bind to the antigens (C) so they can eventually be destroyed (D)."
  },
  {
    "id": "JUNE2025_Q67",
    "difficulty": "medium",
    "question": "Choose the correct sequence of response of immune system:\nA. Synthesizes antibodies which comprises immunoglobulins\nB. Immune system identifies foreign substances in the body\nC. Immunoglobulins specifically designed to bind the antigens\nD. Destroy the antigens\nChoose the correct answer from the options given below:",
    "options": ["B, C, D, A", "A, D, C, A", "C, A, B, D", "B, A, C, D"],
    "correct": 0,
    "unit": "UNIT 4: Growth, Adaptation & Demography",
    "topic": "Human adaptation rules",
    "explanation": "Experimental archaeology involves replicating ancient technologies and processes (like flintknapping or building ancient structures) to test hypotheses, thereby refining theories and exposing incorrect assumptions about past human behaviors."
  },
  {
    "id": "JUNE2025_Q68",
    "difficulty": "easy",
    "question": "The branch of archaeology that refines theories and methods by demonstrating incorrect assumptions and inaccuracies is:",
    "options": ["Experimental Archaeology", "Environmental Archaeology", "Ethnoarchaeology", "Ecological Archaeology"],
    "correct": 1,
    "unit": "UNIT 5: Prehistoric Archaeology",
    "topic": "Experimental archaeology",
    "explanation": "The concept of 'filiation'—the culturally recognized, bilateral tie between a parent and child—was famously conceptualized and distinguished from 'descent' by the British structural-functionalist Meyer Fortes."
  },
  {
    "id": "JUNE2025_Q69",
    "difficulty": "medium",
    "question": "The term filiation is coined by:",
    "options": ["Radcliffe-Brown", "Meyer Fortes", "Jack Goody", "Max Gluckman"],
    "correct": 1,
    "unit": "UNIT 11: Miscellaneous & High-Yield Facts",
    "topic": "Important Terms & Concepts",
    "explanation": "Cemetery H culture (a Late Harappan phase) is characterized by fractional/urn burials containing disarticulated bones, and a distinct reddish pottery painted with black motifs like peacocks, stars, and rosettes."
  },
  {
    "id": "JUNE2025_Q70",
    "difficulty": "medium",
    "question": "The Cemetery H Culture characteristic features:\nA. Elaborate town planning on grid pattern\nB. Motives of peacock, stars and rosette on pottery\nC. Urn burials with disarticulated bones and other grave goods\nD. Stone tablets indicating overseas trade\nChoose the correct answer from the options given below:",
    "options": ["A and B Only", "B and C Only", "C and D Only", "A and D Only"],
    "correct": 1,
    "unit": "UNIT 6: Indian Prehistory",
    "topic": "Indus civilization",
    "explanation": "Cemetery H culture (a Late Harappan phase) is characterized by fractional/urn burials containing disarticulated bones, and a distinct reddish pottery painted with black motifs like peacocks, stars, and rosettes."
  },
  {
    "id": "JUNE2025_Q71",
    "difficulty": "hard",
    "question": "The chronological order of Inter-glacial episodes of the Pleistocene period from the earliest to the latest:\nA. Cromerian\nB. Eemian\nC. Hoxanian\nD. Villafranchian\nChoose the correct answer from the options given below:",
    "options": ["A, C, D, B", "D, A, C, B", "D, B, A, C", "C, A, B, D"],
    "correct": 3,
    "unit": "UNIT 11: Miscellaneous & High-Yield Facts",
    "topic": "Chronology & Sequences",
    "explanation": "Marvin Harris's Cultural Materialism is based on the principle of 'Infrastructural Determinism', which theorizes that a society's mode of production and reproduction (infrastructure) shapes its social structure and ideological superstructure."
  },
  {
    "id": "JUNE2025_Q72",
    "difficulty": "easy",
    "question": "The basic tenet of Cultural Materialism is:",
    "options": ["Superstructural Determinism", "Structural Determinism", "Materialistic Determinism", "Infrastructural Determinism"],
    "correct": 1,
    "unit": "UNIT 8: Anthropological Theories",
    "topic": "Cultural materialism",
    "explanation": "Phenetics (also known as numerical taxonomy) is an approach that classifies organisms based purely on overall morphological similarity, regardless of their evolutionary relationships or common ancestry (which is the focus of Cladistics)."
  },
  {
    "id": "JUNE2025_Q73",
    "difficulty": "medium",
    "question": "An approach in systematics where it relies solely on numerically describing degrees of similarity and difference between organisms, without biases created by knowing some groups are more closely related than others is known as",
    "options": ["Cladistics", "Phenetics", "Cladogram", "Taxonomy"],
    "correct": 2,
    "unit": "UNIT 2: Biological Evolution & Primatology",
    "topic": "Primate classification",
    "explanation": "The Mitochondrial Eve hypothesis was proposed in a groundbreaking 1987 Nature paper authored by Rebecca Cann, Mark Stoneking, and Allan Wilson. Svante Pääbo is renowned for sequencing the Neanderthal genome, not this specific hypothesis."
  },
  {
    "id": "JUNE2025_Q74",
    "difficulty": "medium",
    "question": "Who among the following has not proposed the Mitochondrial Eve Hypothesis?",
    "options": ["Alan Wilson", "Rebecca Cann", "Svante Paabo", "Mark Stoneking"],
    "correct": 3,
    "unit": "UNIT 3: Human Genetics",
    "topic": "Mitochondrial DNA",
    "explanation": "Underground pit dwellings, pointed butt stone celts, bone tools, and a lack of early pottery are defining characteristics of the Northern Zone Neolithic culture in India, most prominently discovered at Burzahom in Kashmir."
  },
  {
    "id": "JUNE2025_Q75",
    "difficulty": "easy",
    "question": "Pit dwellings and pointed butt celts are characteristic of",
    "options": ["South Zone Neolithic", "Eastern Zone Neolithic", "Central and Western Zone Neolithic", "North Zone Neolithic"],
    "correct": 3,
    "unit": "UNIT 6: Indian Prehistory",
    "topic": "Neolithic India",
    "explanation": "Penetrance refers to the proportion of individuals carrying a particular variant of a gene (allele) that actually express the associated trait or phenotype. If some carriers do not show the trait, it is called 'incomplete penetrance'."
  },
  {
    "id": "JUNE2025_Q76",
    "difficulty": "medium",
    "question": "Fraction of cases carrying a given gene that manifests a specified phenotype is known as",
    "options": ["Late age of onset", "Anticipation", "Variable expressivity", "Penetrance"],
    "correct": 1,
    "unit": "UNIT 3: Human Genetics",
    "topic": "Modes of inheritance",
    "explanation": "Ernst Mayr formulated the Biological Species Concept. G.G. Simpson proposed the Evolutionary Species Concept. Leigh Van Valen developed the Ecological concept, and H.E.H. Paterson developed the Recognition concept."
  },
  {
    "id": "JUNE2025_Q77",
    "difficulty": "hard",
    "question": `Match the LIST-I with LIST-II\n${matchTable("LIST-I (Species concept)","LIST-II (Scholars associated with)",[["A","Biological species concept","I","Leigh Van Valen"],["B","Evolutionary species concept","II","H. E. H Paterson"],["C","Ecological species concept","III","Ernst Mayr"],["D","Recognition species concept","IV","George Gaylord Simpson"]])}Choose the correct answer from the options given below:`,
    "options": ["A-II, B-III, C-IV, D-I", "A-III, B-IV, C-I, D-II", "A-I, B-II, C-III, D-IV", "A-IV, B-I, C-II, D-III"],
    "correct": 1,
    "unit": "UNIT 11: Miscellaneous & High-Yield Facts",
    "topic": "Important Terms & Concepts",
    "explanation": "In her classic 1974 essay 'Is Female to Male as Nature Is to Culture?', Sherry Ortner argued that women's reproductive functions socially align them closer to 'nature', causing them to be universally devalued relative to men ('culture')."
  },
  {
    "id": "JUNE2025_Q78",
    "difficulty": "easy",
    "question": "Who among the following forcefully argued that women are universally devalued because of their reproductive capacities which places them on the side of nature, domestic and public, and thus the irrelevant?",
    "options": ["C. MacCormack", "S. Ortner", "L. Jordanova", "M. Strathern"],
    "correct": 1,
    "unit": "UNIT 8: Anthropological Theories",
    "topic": "Gender anthropology",
    "explanation": "Chronological order of publication: 'Writing Culture' by Clifford & Marcus (1986), 'The Unspeakable' by Stephen Tyler (1987), 'The Condition of Postmodernity' by David Harvey (1989), and 'Postmodernism' by Fredric Jameson (1991)."
  },
  {
    "id": "JUNE2025_Q79",
    "difficulty": "hard",
    "question": "Arrange the following Postmodernist works in ascending order from early to later:\nA. F. Jameson - Postmodernism\nB. Stephen A. Tyler - The Unspeakable\nC. Clifford and Marcus - Writing Culture\nD. David Harvey - The Condition of Postmodernity\nChoose the correct answer from the options given below:",
    "options": ["B, A, C, D", "C, B, D, A", "D, C, A, B", "A, D, B, C"],
    "correct": 3,
    "unit": "UNIT 11: Miscellaneous & High-Yield Facts",
    "topic": "Books, Authors & Years",
    "explanation": "Maurice Bloch and Maurice Godelier are prominent figures in Marxist Anthropology. They are known for integrating Marxist economic analysis (like modes of production) with anthropological studies of kinship and social organization."
  },
  {
    "id": "JUNE2025_Q80",
    "difficulty": "medium",
    "question": "Marxism is associated with the work of:\nA. Alfred Gel\nB. P. Hocking\nC. M. Bloch\nD. M. Godelier\nChoose the correct answer from the options given below:",
    "options": ["A and B Only", "B and C Only", "A and C Only", "C and D Only"],
    "correct": 0,
    "unit": "UNIT 8: Anthropological Theories",
    "topic": "Cultural materialism",
    "explanation": "William H. Durham supported the Inbreeding Theory from a coevolutionary perspective, arguing that the universal incest taboo evolved culturally to prevent the severe biological costs (inbreeding depression) associated with close-kin mating."
  },
  {
    "id": "JUNE2025_Q81",
    "difficulty": "medium",
    "question": "Who among the following supported Inbreeding Theory for universal Incest Taboo?",
    "options": ["W. H. Durham", "C. Levi-Strauss", "B. Malinowski", "E. Westermarck"],
    "correct": 2,
    "unit": "UNIT 7: Social Anthropology Concepts",
    "topic": "Marriage types",
    "explanation": "The hierarchy of archaeological classification from simplest to most complex is: Attribute (smallest feature like color/shape) → Artefact (individual object) → Assemblage (group of artefacts found together) → Culture (group of assemblages representing a society)."
  },
  {
    "id": "JUNE2025_Q82",
    "difficulty": "easy",
    "question": "The archaeological units of analysis from simple to complex:\nA. Assemblage\nB. Attribute\nC. Culture\nD. Artefact\nChoose the correct answer from the options given below:",
    "options": ["B, A, C, D", "D, A, C, B", "B, D, A, C", "C, A, D, B"],
    "correct": 0,
    "unit": "UNIT 5: Prehistoric Archaeology",
    "topic": "Ethno archaeology",
    "explanation": "Ancient DNA is highly degraded, resulting in very small fragment sizes (A). Because it is so delicate, the biggest challenge is modern human contamination, forcing researchers to wear full protective 'space suits' (cleanroom gear) in the lab (D)."
  },
  {
    "id": "JUNE2025_Q83",
    "difficulty": "medium",
    "question": "Which of the following are the limitations/challenges of Ancient DNA research?\nA. Small fragment size of DNA\nB. Usually large fragment size of DNA which are highly difficult to sequence\nC. Presence of bacterial/fungal DNA is not considered as contamination\nD. People who work in the ancient DNA laboratory typically wear 'space suits' to minimize any DNA coming from them\nChoose the correct answer from the options given below:",
    "options": ["A and D Only", "B and C Only", "C and D Only", "A and B Only"],
    "correct": 2,
    "unit": "UNIT 3: Human Genetics",
    "topic": "Molecular genetics",
    "explanation": "From West to East: Chanhudaro is in Sindh, Pakistan (furthest west). Lothal is in Gujarat. Atranjikhera is in Uttar Pradesh. Chirand is in Bihar (furthest east)."
  },
  {
    "id": "JUNE2025_Q84",
    "difficulty": "hard",
    "question": "The geographical location of important Indian Archaeological sites from west to east:\nA. Lothal\nB. Chirand\nC. Atranjikhera\nD. Chanu-daro\nChoose the correct answer from the options given below:",
    "options": ["A, C, D, B", "D, B, A, C", "D, A, C, B", "C, B, A, D"],
    "correct": 1,
    "unit": "UNIT 6: Indian Prehistory",
    "topic": "Indus civilization",
    "explanation": "Lemurs/tarsiers are vertical clingers and leapers. Chimps/gorillas are modified brachiators (knuckle-walkers). Howlers/langurs use semi-brachiation. Gibbons/orangutans are true suspensory brachiators."
  },
  {
    "id": "JUNE2025_Q85",
    "difficulty": "hard",
    "question": `Match the LIST-I with LIST-II\n${matchTable("LIST-I (Primate Locomotion)","LIST-II (Primates)",[["A","Leaping","I","Howler monkey and Langur"],["B","Modified brachiators","II","Chimpanzee and gorilla"],["C","Semi-brachiators","III","Gibbon and Orangutan"],["D","Suspension","IV","Lemurs and tarsiers"]])}Choose the correct answer from the options given below:`,
    "options": ["A-IV, B-III, C-II, D-I", "A-IV, B-II, C-I, D-III", "A-IV, B-I, C-II, D-III", "A-I, B-II, C-III, D-IV"],
    "correct": 3,
    "unit": "UNIT 2: Biological Evolution & Primatology",
    "topic": "Primate locomotion",
    "explanation": "Lévi-Strauss viewed totemism as an intellectual tool ('good to think with'). Freud linked it to the Oedipus complex and incest taboos. Tylor saw it as tied to animism and ancestral spirits. Durkheim analyzed it as the most elementary form of religious life."
  },
  {
    "id": "JUNE2025_Q86",
    "difficulty": "hard",
    "question": `Match the LIST-I with LIST-II\n${matchTable("LIST-I (Statement)","LIST-II (Anthropologist)",[["A","Totemism as a way of thinking about nature and culture","I","E.B. Tylor"],["B","Totemism as sacrifice and Incest regulation","II","Emile Durkheim"],["C","Totemism as an ancestral worship","III","Levi Strauss"],["D","Totemism as an elementary religion","IV","Sigmund Freud"]])}Choose the correct answer from the options given below:`,
    "options": ["A-II, B-III, C-I, D-IV", "A-II, B-I, C-IV, D-III", "A-IV, B-III, C-I, D-II", "A-III, B-IV, C-I, D-II"],
    "correct": 2,
    "unit": "UNIT 11: Miscellaneous & High-Yield Facts",
    "topic": "Important Terms & Concepts",
    "explanation": "In his seminal 1976 book 'The Moral Economy of the Peasant', James C. Scott introduced the concept of the 'moral economy', explaining how peasant societies prioritize a 'safety-first' subsistence strategy and mutual support networks over capitalist profit maximization."
  },
  {
    "id": "JUNE2025_Q87",
    "difficulty": "medium",
    "question": "The term use by James Scott for the study of Peasant economy where mutual institutions are designed to insure against risk rather than on the principle of individual maximization is called as:",
    "options": ["Substantivism", "Informal Economy", "Moral Economy", "Ethical Economy"],
    "correct": 3,
    "unit": "UNIT 11: Miscellaneous & High-Yield Facts",
    "topic": "Important Terms & Concepts",
    "explanation": "Robert Bruce Foote, a British geologist, is considered the 'Father of Indian Prehistory'. He discovered the first Palaeolithic tool (a handaxe) in India at Pallavaram near Chennai in 1863 (often misprinted as 1883 in exams)."
  },
  {
    "id": "JUNE2025_Q88",
    "difficulty": "easy",
    "question": "The first discovery of hand axes at Pallavaram in 1883 were discovered by:",
    "options": ["Daniel Wilson", "Valentine Ball", "A.C. Carlleyle", "Robert Bruce Foote"],
    "correct": 3,
    "unit": "UNIT 6: Indian Prehistory",
    "topic": "Lower palaeolithic India",
    "explanation": "A distance curve tracks total growth achieved over time (III). A velocity curve plots the rate/speed of growth per unit of time (IV). The adolescent spurt is the specific rapid height increase (II), while puberty is the broader event including sexual maturation (I)."
  },
  {
    "id": "JUNE2025_Q89",
    "difficulty": "hard",
    "question": `Match the LIST-I with LIST-II\n${matchTable("LIST-I","LIST-II",[["A","Distance curve","I","An event in the life cycle that includes rapid increase in stature, development of sex organs, and development of secondary sexual characteristics"],["B","Velocity curve","II","A rapid increase in stature and other dimensions of the body that occurs during puberty"],["C","Adolescent growth spurt","III","A graph that shows the total height (or other measurement) of an individual on a series of dates"],["D","Puberty","IV","A curve that illustrates the rate of growth over time by plotting the degree of growth per unit of time"]])}Choose the correct answer from the options given below:`,
    "options": ["A-IV, B-I, C-III, D-II", "A-II, B-IV, C-I, D-III", "A-I, B-III, C-IV, D-II", "A-III, B-IV, C-II, D-I"],
    "correct": 2,
    "unit": "UNIT 4: Growth, Adaptation & Demography",
    "topic": "Growth curves",
    "explanation": "Chronological sequence: Ernst Kretschmer (1921) → William Sheldon's modern somatotype (1940s) → R.W. Parnell's objective modification (1958) → Barbara Heath and J.E.L. Carter's refined method (1967)."
  },
  {
    "id": "JUNE2025_Q90",
    "difficulty": "hard",
    "question": "Arrange the following classifications of human physique or methods of somatotyping from earliest to latest:\nA. Kretschmer's classification\nB. Heath and Carter's Method of Somatotyping\nC. Sheldon's classification\nD. Parnell's Method of somatotyping\nChoose the correct answer from the options given below:",
    "options": ["A, D, B, C", "A, D, C, B", "A, C, D, B", "D, B, A, C"],
    "correct": 0,
    "unit": "UNIT 11: Miscellaneous & High-Yield Facts",
    "topic": "Chronology & Sequences",
    "explanation": "G.H. Hardy and Wilhelm Weinberg independently discovered the Hardy-Weinberg principle in 1908, which acts as the foundational theorem of population genetics, establishing the baseline for allele frequencies in a non-evolving population."
  },
  {
    "id": "JUNE2025_Q91",
    "difficulty": "medium",
    "question": `${passageHTML(PASSAGE_BLOOD)}<strong>Q.90: Who were the discoverers of the fundamental theorem of population genetics?</strong>`,
    "options": ["Hardy and Weinberg", "Haldane and Penrose", "Harris and Watkins", "Pauling and Nei"],
    "correct": 3,
    "unit": "UNIT 3: Human Genetics",
    "topic": "Hardy Weinberg equilibrium",
    "explanation": "The ABO blood group system was discovered in 1900 by the Austrian physician and immunologist Karl Landsteiner, a breakthrough that earned him the Nobel Prize."
  },
  {
    "id": "JUNE2025_Q92",
    "difficulty": "easy",
    "question": `${passageHTML(PASSAGE_BLOOD)}<strong>Q.91: Blood groups were discovered by</strong>`,
    "options": ["Hirschfeld", "Levine", "Davenport", "Landsteiner"],
    "correct": 1,
    "unit": "UNIT 3: Human Genetics",
    "topic": "Molecular genetics",
    "explanation": "In 1910, Emil von Dungern and Ludwik Hirszfeld proved through family studies that ABO blood types are inherited from parents to offspring following Mendelian laws of genetics."
  },
  {
    "id": "JUNE2025_Q93",
    "difficulty": "medium",
    "question": `${passageHTML(PASSAGE_BLOOD)}<strong>Q.92: The proof that blood types are inherited was discovered by</strong>`,
    "options": ["Penrose and Fisher", "von Dungern and Hirschfeld", "Wiener and Levine", "Arbor and Bernstein"],
    "correct": 2,
    "unit": "UNIT 3: Human Genetics",
    "topic": "Modes of inheritance",
    "explanation": "The Rhesus (Rh) blood group system was discovered in 1940 by Karl Landsteiner and Alexander S. Wiener, building directly upon the crucial clinical observations of Philip Levine and Rufus Stetson."
  },
  {
    "id": "JUNE2025_Q94",
    "difficulty": "medium",
    "question": `${passageHTML(PASSAGE_BLOOD)}<strong>Q.93: The combined efforts of which of the following researchers led to the discovery of Rh factor?</strong>`,
    "options": ["Bodmer, Sforza and Nei", "Garrod, Bateson and Kemp", "Wiener, Levine, and Landsteiner", "Davenport, McKusick and Neel"],
    "correct": 0,
    "unit": "UNIT 3: Human Genetics",
    "topic": "Molecular genetics",
    "explanation": "In 1924, the German mathematician Felix Bernstein correctly proved that the inheritance of the ABO blood groups is controlled by three multiple alleles (A, B, and O) at a single genetic locus."
  },
  {
    "id": "JUNE2025_Q95",
    "difficulty": "medium",
    "question": `${passageHTML(PASSAGE_BLOOD)}<strong>Q.94: Blood group characters are due to multiple alleles at one locus was proposed by</strong>`,
    "options": ["Bernstein in 1924", "Galton in 1928", "Fisher in 1935", "Haldane in 1948"],
    "correct": 1,
    "unit": "UNIT 3: Human Genetics",
    "topic": "Modes of inheritance",
    "explanation": "Inductive reasoning is a 'bottom-up' approach. A researcher observes specific, particular instances (e.g., in a tribe) and then builds up to broader, general theories or laws."
  },
  {
    "id": "JUNE2025_Q96",
    "difficulty": "easy",
    "question": `${passageHTML(PASSAGE_NOMOTHETIC)}<strong>Q.95: Inductive approach implies moving from:</strong>`,
    "options": ["Synchronic to Diachronic", "Particular to General", "General to Particular", "Diachronic to Synchronic"],
    "correct": 1,
    "unit": "UNIT 1: Research Methodology & Basics",
    "topic": "Types of research",
    "explanation": "Nomothetic research is quantitative and deductive. It seeks to establish universal laws (nomos) and principles across large populations, making strict hypothesis testing its core feature."
  },
  {
    "id": "JUNE2025_Q97",
    "difficulty": "medium",
    "question": `${passageHTML(PASSAGE_NOMOTHETIC)}<strong>Q.96: Hypothesis testing would most likely be a feature of:</strong>`,
    "options": ["Ideographic Research", "Nomothetic Research", "Participatory Research", "Ethnographic Research"],
    "correct": 3,
    "unit": "UNIT 1: Research Methodology & Basics",
    "topic": "Types of research",
    "explanation": "A case study is a detailed, intensive, and in-depth idiographic investigation of a single specific unit—whether it be an individual, an event, an institution, or a single community."
  },
  {
    "id": "JUNE2025_Q98",
    "difficulty": "easy",
    "question": `${passageHTML(PASSAGE_NOMOTHETIC)}<strong>Q.97: When a single example like an event and organization is studied in depth, it is called:</strong>`,
    "options": ["Critical Ethnography", "Grounded Theory", "FGD", "Case Study"],
    "correct": 2,
    "unit": "UNIT 1: Research Methodology & Basics",
    "topic": "Case study & life history",
    "explanation": "Émile Durkheim, a founding figure of sociology, used a strict nomothetic (statistical/comparative) method in works like 'Suicide' to uncover general, universal laws of social behavior."
  },
  {
    "id": "JUNE2025_Q99",
    "difficulty": "medium",
    "question": `${passageHTML(PASSAGE_NOMOTHETIC)}<strong>Q.98: Who among the following predominantly used nomothetic method in his work?</strong>`,
    "options": ["B. Malinowski", "C. Geertz", "E. Durkheim", "E. E. Evans-Pritchard"],
    "correct": 0,
    "unit": "UNIT 1: Research Methodology & Basics",
    "topic": "Types of research",
    "explanation": "Developed by Glaser and Strauss, Grounded Theory is an inductive methodology where theories are not pre-conceived but are strictly 'grounded' in and emerge directly from the gathered data."
  },
  {
    "id": "JUNE2025_Q100",
    "difficulty": "medium",
    "question": `${passageHTML(PASSAGE_NOMOTHETIC)}<strong>Q.99: Grounded Theory is a kind of:</strong>`,
    "options": ["Inductive Method", "Deductive Method", "Participatory Method", "Dialectic Method"],
    "correct": 1,
    "unit": "UNIT 1: Research Methodology & Basics",
    "topic": "Grounded theory",
    "explanation": "Pioneered by Bronisław Malinowski, participant observation is the absolute cornerstone of ethnographic fieldwork, requiring the anthropologist to immerse themselves in the daily life of the culture being studied over a long period."
  }
];
/* ══════════════════════════════════════════════════════════════════════
   MASTER FIX SCRIPT: ANSWERS + EXPLANATIONS SHIFT (JUNE 2025)
══════════════════════════════════════════════════════════════════════ */
(function fixJune2025AnswersAndExplanations() {
  if (typeof TEST_JUNE_2025 === 'undefined' || TEST_JUNE_2025.length < 100) return;

  // 1. Shift Explanations (Q21 to Q100)
  if (TEST_JUNE_2025[20].explanation.toLowerCase().includes("vertebral")) {
    for (let i = 99; i > 20; i--) {
      TEST_JUNE_2025[i].explanation = TEST_JUNE_2025[i-1].explanation;
    }
    TEST_JUNE_2025[20].explanation = "The concept of 'agricultural involution' was introduced by Clifford Geertz. It describes a process where an agricultural system absorbs extra labor, leading to socio-economic stagnation accompanied by cultural elaboration, without genuine economic growth.";
  }

  // 2. Overwrite Correct Answers with NTA-Verified Manual Key
  // Array of 1-based option answers (1, 2, 3, or 4) provided by Akhi
  const verifiedAnswers = [
    2, 1, 1, 2, 3, 3, 3, 4, 1, 3, 
    3, 2, 1, 4, 3, 4, 3, 2, 1, 1, 
    2, 2, 1, 1, 4, 4, 2, 2, 1, 2, 
    4, 1, 3, 2, 3, 4, 1, 3, 3, 3, 
    2, 2, 3, 4, 4, 3, 4, 3, 1, 2, 
    3, 3, 3, 3, 1, 1, 4, 1, 2, 2, 
    1, 1, 1, 3, 3, 1, 4, 1, 2, 2, 
    2, 4, 2, 3, 4, 4, 2, 2, 2, 4, 
    1, 3, 1, 3, 2, 4, 3, 4, 4, 3, 
    1, 4, 2, 3, 1, 2, 2, 4, 3, 1
  ];

  for (let i = 0; i < 100; i++) {
    // JS arrays are 0-indexed, so we subtract 1 from the manual answer
    TEST_JUNE_2025[i].correct = verifiedAnswers[i] - 1;
  }
})();

/* ══════════════════════════════════════════════════════════════════════
   ALL_TESTS REGISTRY — Add new tests here. Nothing else changes.
══════════════════════════════════════════════════════════════════════ */
const ALL_TESTS = [
  {
    id: "june2025",
    category: "p2",
    name: "UGC NET June 2025 (PYQ)",
    label: "PYQ · June 2025",
    subject: "Anthropology Paper 2",
    totalQs: 100,
    marks: 200,
    minutes: 120,
    difficulty: "Hard",
    live: true,
    data: TEST_JUNE_2025
  }, 
  {
  id: "jan2026-p1",
  category: "p1",
  name: "UGC NET January 2026 (PYQ)",
  label: "PYQ · Jan 2026",
  subject: "General Paper 1",
  totalQs: 50,
  marks: 100,
  minutes: 60,
  difficulty: "Medium",
  live: true,
  data: TEST_JAN_2026_P1
}
];

/* ══════════════════════════════════════════════════════════════════════
   WORKSPACE: SYLLABUS DATA
══════════════════════════════════════════════════════════════════════ */
const LS_P1='np_paper1_data_v1';
const LS_P2='np_paper2_data_v1';

const defaultPaper1=[
{title:"Teaching Aptitude",topics:["Teaching concept & objectives","Levels of teaching","Characteristics of teaching","Learner characteristics","Individual differences","Factors affecting teaching","Teaching methods","Online vs offline teaching","Teaching support system","Evaluation systems","CBCS evaluation","CBT","Innovations in evaluation"]},
{title:"Research Aptitude",topics:["Meaning of research","Types of research","Characteristics of research","Positivism & post-positivism","Research methods","Qualitative & quantitative","Steps of research","Thesis writing","Article writing","Referencing styles","ICT in research","Research ethics"]},
{title:"Comprehension",topics:["Reading comprehension practice","Passage interpretation","Answer extraction skills"]},
{title:"Communication",topics:["Meaning of communication","Types","Characteristics","Verbal","Non-verbal","Inter-cultural","Group","Classroom","Barriers","Mass media & society"]},
{title:"Mathematical Reasoning",topics:["Types of reasoning","Number series","Letter series","Coding & decoding","Relationships","Fractions","Time & distance","Ratio & proportion","Percentage","Profit & loss","Interest","Averages"]},
{title:"Logical Reasoning",topics:["Structure of arguments","Categorical propositions","Mood & figure","Fallacies","Deductive","Inductive","Analogies","Venn diagrams","Indian logic","Pramanas","Types of Anumana","Hetvabhasas"]},
{title:"Data Interpretation",topics:["Data sources","Data classification","Quantitative","Qualitative","Bar charts","Histograms","Pie charts","Tables","Line charts","Data interpretation","Data & governance"]},
{title:"ICT",topics:["ICT abbreviations","Internet basics","Intranet","Email","Audio conferencing","Video conferencing","Digital initiatives","ICT governance"]},
{title:"People & Environment",topics:["SDGs","Human-environment interaction","Environmental issues","Pollution types","Climate change","Impact on health","Energy resources","Natural hazards","Environmental protection act","International agreements"]},
{title:"Higher Education",topics:["Ancient Indian education","Post-independence education","Learning programmes","Technical education","Skill based education","Value education","Environmental education","Policies & governance"]},
];

const defaultPaper2=[
{title:"Introduction to Anthropology",topics:["History of Anthropology","Aim & scope","Branches of Anthropology","Epistemology & theoretical perspectives","Types of research","Research design","Fieldwork tradition","Ethnography & observation","Case study & PRA","Genealogical method","Schedule & questionnaire","Grounded theory & GIS","Statistics (variables & sampling)","Central tendency","Parametric & Non-parametric tests","Regression","Content & Discourse analysis"]},
{title:"Biological Evolution & Primatology",topics:["Lamarckism & Darwinism","Synthetic & Neutral theory","Cladogenesis & anagenesis","Primate classification & characteristics","Primate locomotion & behaviour","Prosimii & Anthropoidea","Oligocene-Miocene fossils","Australopithecus species","Homo habilis & erectus","Neanderthal & Archaic sapiens","Modern Homo sapiens","Out of Africa hypothesis"]},
{title:"Human Genetics & Variation",topics:["Human variation models","Racial & Indian classifications","Mendelian & Cytogenetics","Twin & Population genetics","Chromosomal abnormalities","Modes of inheritance","Dermatoglyphics","Hardy Weinberg equilibrium","Genetic drift & polymorphism","DNA & RNA","Mitochondrial DNA"]},
{title:"Human Growth & Demography",topics:["Human growth concepts & phases","Growth curves","Aging & senescence","Factors affecting growth","Secular trends","Body composition","Human adaptation rules","Heat/cold/altitude adaptation","Somatotyping","Demography basics","Fertility & Mortality"]},
{title:"Prehistoric Archaeology",topics:["Ethno & Experimental archaeology","Settlement archaeology","Dating methods","Geological stages & Pleistocene climate","Site formation","Lower/Middle/Upper palaeolithic tools","Mesolithic & Neolithic tools","European lithic cultures","Near East farming cultures"]},
{title:"Indian Prehistory",topics:["Lower palaeolithic India","Acheulian culture","Middle & Upper palaeolithic India","Mesolithic India","Neolithic India","Cave art India","Indus civilization","Pottery traditions","Bronze & Iron age","Megaliths"]},
{title:"Social & Cultural Anthropology",topics:["Culture & Society concepts","Family types","Marriage types","Kinship systems","Economic anthropology","Political organization","Religion concepts","Magic & ritual","Social change"]},
{title:"Anthropological Theory",topics:["Evolutionism & Diffusionism","Historical particularism","Functionalism & Structuralism","Culture & personality","Cultural ecology","Cultural materialism","Symbolic & Cognitive anthropology","Interpretive anthropology","Gender anthropology","Postmodernism"]},
{title:"Indian Anthropology",topics:["Indian anthropology development","Social stratification","Tribal studies","Village studies","Constitutional safeguards","Panchayati raj","Sanskritization & Westernization","Indian anthropologists"]},
{title:"Applied Anthropology",topics:["Applied & Action anthropology","Development & Medical anthropology","Forensic anthropology","Ergonomics & Business anthropology","Community development","NGOs role","Women empowerment"]},
];




