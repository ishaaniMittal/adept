import {SMDialogue} from "./sm-dialogue";

export const SMDIALOGUES:SMDialogue[] = [
  {
    "name": "Jamie Perez",
    "id": 1,
    "conversation": [
      {
        "statementKey": "A1",
        "speaker": 1,
        "next": "A2",
        "mood-phrase": "said",
        "mood": "talk",
        "statement": [{
          "id": 1,
          "statementKey": "A1",
          "speaker": 1,
          "next": "A2",
          "image": "../../../assets/perez/perez_panel_1.png",
          "speaker_image": "../../../assets/Al.png",
          "text": "Let's start with Perez. Remember, what we say is confidential.",
          "reference": [{
            "url": "",
            "desc": "Depending on the context and relationship of individuals involved, the word \"confidential\" could strike an intimidating tone."
          }, {
            "url": "http://www.apsanet.org/pubs/ethics.cfm",
            "desc": "American Political Science Association (APSA) website (3.2) indicates that departments should choose fair-minded reviewers."
          }
          ]

        }
        ]
      },
      {
        "statementKey": "A2",
        "speaker": 3,
        "next": "A3",
        "mood-phrase": "said",
        "mood": "talk",
        "statement": [{
          "id": 2,
          "statementKey": "A2",
          "speaker": 3,
          "next": "A3",
          "image": "../../../assets/perez/perez_panel_3.png",
          "speaker_image": "../../../assets/KK.png",
          "text": "This will be an interesting case.",
          "reference": [{
            "url": "",
            "desc": ""
          }
          ]
        }
        ]
      },
      {
        "statementKey": "A3",
        "speaker": 2,
        "next": "B1",
        "mood-phrase": "said",
        "mood": "talk",
        "statement": [{
          "id": 3,
          "statementKey": "A3",
          "speaker": 2,
          "next": "B1",
          "image": "../../../assets/perez/perez_panel_2.png",
          "speaker_image": "../../../assets/JD.png",
          "text": "Let's just go through this and see.",
          "reference": [{
            "url": "",
            "desc": ""
          }
          ]
        }
        ]
      },
      {
        "statementKey": "B1",
        "speaker": 1,
        "next": "B2",
        "mood-phrase": "said",
        "mood": "talk",
        "statement": [{
          "id": 4, "statementKey": "B1",
          "speaker": 1,
          "next": "B2",
          "image": "../../../assets/perez/perez_panel_1.png",
          "speaker_image": "../../../assets/Al.png",
          "text": "Let's start with scholarship. All his current grants are interdisciplinary.",
          "reference": [{
            "url": "",
            "desc": "Perceptions of interdisciplinary and multidisciplinary work vary."
          }, {
            "url": "http:\\www.gatech.edu",
            "desc": "The GATech faculty handbook (3.2.5) indicates creative work must be appropriate to the individual's discipline."

          }, {
            "url": "http:\\www.advance.gatech.edu/ptac",
            "desc": "The PTAC report (I.8) considers evaluation of research teaming and interdisciplinary collaboration."
          }
          ]

        }
        ]

      },
      {
        "statementKey": "B2",
        "speaker": 2,
        "next": "B3",
        "mood-phrase": "said",
        "mood": "talk",
        "statement": [{
          "id": 5, "statementKey": "B2",
          "speaker": 2,
          "next": "B3",
          "image": "../../../assets/perez/perez_panel_2.png",
          "speaker_image": "../../../assets/JD.png",
          "text": "My main concern about the grants is that he's spending most of the time in chemistry.",
          "reference": [{
            "url": "",
            "desc": ""
          }
          ]
        }
        ]
      },
      {
        "statementKey": "B3",
        "speaker": 1,
        "next": "B4",
        "mood-phrase": "said",
        "mood": "talk",
        "statement": [{
          "id": 6, "statementKey": "B3",
          "speaker": 1,
          "next": "B4",
          "image": "../../../assets/perez/perez_panel_1.png",

          "speaker_image": "../../../assets/Al.png",
          "text": "Perez hasn't a clue about our primary thrusts in materials. He's riding the coattails of chemistry with interdisciplinary NSF funding, which isn't hard to get, and he isn't project director on any grants on the c.v.",
          "reference": [{
            "url": "",
            "desc": "Perceptions of responsibility for success are affected by perceptions of past success."
          },
            {
              "url": "http://www.adept.gatech.edu/library.htm",
              "desc": "Singer's account testifies to the significance of subjective, unspecified grounds."
            },
            {
              "url": "http:\\www.advance.gatech.edu/ptac",
              "desc": "See PTAC report (I.8) on interdisciplinarity."
            },
            {
              "url": "http://www.adept.gatech.edu/library.htm",
              "desc": "Merton outlines \"the Matthew effect,\" whereby the accrual of greater recognition to scientific contributions goes to those with already considerable reputations."
            }
          ]
        }
        ]
      },
      {
        "statementKey": "B4",
        "speaker": 3,
        "next": "B5",
        "mood-phrase": "said emphatically",
        "mood": "emphatic",
        "statement": [{
          "id": 7, "statementKey": "B4",
          "speaker": 3,
          "next": "B5",
          "image": "../../../assets/perez/perez_panel_3.png",
          "speaker_image": "../../../assets/KK.png",
          "text": "Don't discount big grants because they are interdisciplinary. He's published in highly respected journals and has six graduate students, including four PhD students. There's technical 'meat' in his work.",
          "reference": [{
            "url": "",
            "desc": "Rankings of journals (determined by researchers in field) and unit expectations of external funding ought to be communicated to candidates and committee members."
          },
            {
              "url": "http:\\www.advance.gatech.edu/ptac",
              "desc": "The PTAC report (I.9) considers issues related to criteria in scholarship, including clarity, familiarity with publication venues, judgment across disciplines, uniformity and consistency of standards."
            }]
        }
        ]
      },
      {
        "statementKey": "B5",
        "speaker": 1,
        "next": "B6",
        "mood-phrase": "said emphatically",
        "mood": "emphatic",
        "statement": [{
          "id": 8, "statementKey": "B5",
          "speaker": 1,
          "next": "B6",
          "image": "../../../assets/perez/perez_panel_1.png",
          "speaker_image": "../../../assets/Al.png",
          "text": "He has raised funding, but not for our unit. This is important now because we're coming up for outside evaluation, and we need faculty to bring major funding to us.",
          "reference": [{
            "url": "",
            "desc": "Organizational standards might not be clearly communicated to candidates."
          },
            {
              "url": "http://www.adept.gatech.edu/library.htm",
              "desc": "Fox links organizational environment to productivity and performance."
            }]
        }
        ]
      },
      {
        "statementKey": "B6",
        "speaker": 0,
        "next": "",
        "mood-phrase": "",
        "mood": "",
        "statement": [
          {
            "id": 9,
            "statementKey": "B6a",
            "speaker": 0,
            "next": "B7a",
            "image": "../../../assets/perez/perez_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "He's been told several times to get grants in core areas. I see too little substance in materials science-oriented research.",
            "reference": [{
              "url": "",
              "desc": ""
            }]
          },
          {
            "id": 9,
            "statementKey": "B6b",
            "speaker": 0,
            "next": "B7b",
            "image": "../../../assets/perez/perez_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "I choose to remain silent at this point in the conversation.",
            "reference": [{
              "url": "",
              "desc": ""
            }]
          },
          {
            "id": 9,
            "statementKey": "B6c",
            "speaker": 0,
            "next": "B7c",
            "image": "../../../assets/perez/perez_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "Forming bridges to other disciplines is as important as bringing money in. The number of interdisciplinary grants confirms the value of his research.",
            "reference": [{
              "url": "",
              "desc": ""
            }]
          },
          {
            "id": 9,
            "statementKey": "B6d",
            "speaker": 0,
            "next": "B7d1",
            "image": "../../../assets/perez/perez_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "Are we discussing scholarship or funding?",
            "reference": [{
              "url": "",
              "desc": ""
            }]
          }
        ]
      },
      {
        "statementKey": "B7a",
        "speaker": 1,
        "next": "B7a2",
        "mood-phrase": "",
        "mood": "miffed",
        "statement": [{
          "id": 10, "statementKey": "B7a",
          "speaker": 1,
          "next": "B7a2",
          "image": "../../../assets/perez/perez_panel_1.png",
          "speaker_image": "../../../assets/Al.png",
          "text": "He's publishing in chemistry journals more than engineering journals. " +
          "I am the leading researcher in the same area of engineering he was in as a grad " +
          "student and post doc. But I won't collaborate with him now.",
          "reference": [{
            "url": "",
            "desc": "Credit and rewards for participating in interdisciplinary teams are not always well established."
          },
            {
              "url": "", "desc": "Russo describes the pitfalls of large interdisciplinary projects."
            }]
        }
        ]
      },
      {
        "statementKey": "B7a2",
        "speaker": 2,
        "next": "B7a3",
        "mood-phrase": ", smirking, said",
        "mood": "smirk",
        "statement": [{
          "id": 11, "statementKey": "B7a2",
          "speaker": 2,
          "next": "B7a3",
          "image": "../../../assets/perez/perez_panel_2.png",
          "speaker_image": "../../../assets/JD.png",
          "text": "Our school chair agrees that Perez should collaborate with us instead of chemistry faculty. Should we advise him to join chemistry?",
          "reference": [{
            "url": "",
            "desc": "Evaluation committees ought to conduct deliberations in a professional, equitable manner."
          }, {
            "url": "http:\\www.advance.gatech.edu",
            "desc": "The PTAC report (IV.7.B) states that unconfirmed information ought to be discounted as rumor."
          }]
        }
        ]
      },
      {
        "statementKey": "B7a3",
        "speaker": 1,
        "next": "C1",
        "mood-phrase": ", self-satisfied, said",
        "mood": "self-satisfied",
        "statement": [{
          "id": 12, "statementKey": "B7a3",
          "speaker": 1,
          "next": "C1",
          "image": "../../../assets/perez/perez_panel_1.png",
          "speaker_image": "../../../assets/Al.png",
          "text": "We should write this up to convey substandard research performance.",
          "reference": [{
            "url": "",
            "desc": "Criteria for decision should be based on clearly communicated standards."
          },
            {
              "url": "http://www.adept.gatech.edu/library.htm",
              "desc": "Lattica offers suggestions for individuals concerned with evaluation of interdisciplinary scholarship."
            }]
        }]

      },
      {
        "statementKey": "B7b",
        "speaker": 1,
        "next": "C1",
        "mood-phrase": "asserted",
        "mood": "assertively",
        "statement": [{
          "id": 13, "statementKey": "B7b",
          "speaker": 1,
          "next": "C1",
          "image": "../../../assets/perez/perez_panel_1.png",
          "speaker_image": "../../../assets/Al.png",
          "text": "He's in a niche area that might be attractive now, but a lot of us in materials don't care about it. " +
          "Our letter should say his record is not persuasive regarding his long-term funding potential. Agreed?",
          "reference": [{
            "url": "",
            "desc": "Candidates should understand that interdisciplinary scholarship is not always highly regarded by colleagues."
          }, {
            "url": "http://www.adept.gatech.edu/library.htm",
            "desc": "Bahls and Schachter consider how interdisciplinary research has recently become more prominent."
          }]
        }
        ]

      },
      {
        "statementKey": "B7c",
        "speaker": 2,
        "next": "C1",
        "mood-phrase": "thoughtfully said",
        "mood": "thoughtfully",
        "statement": [{
          "id": 14, "statementKey": "B7c",
          "speaker": 2,
          "next": "C1",
          "image": "../../../assets/perez/perez_panel_2.png",
          "speaker_image": "../../../assets/JD.png",
          "text": "I did notice new requests for proposals at NSF and DoD agencies that emphasize " +
          "interdisciplinary connections; I have been thinking about this myself.",
          "reference": [{
            "url": "",
            "desc": "Funding agencies and institutions are adapting to interdisciplinary paradigms of research."
          }, {
            "url": "http://www.adept.gatech.edu/library.htm",
            "desc": "Brainard describes Arizona State University's efforts to accommodate interdisciplinary research in science."
          }]
        }
        ]

      },
      {
        "statementKey": "B7d1",
        "speaker": 1,
        "next": "B7d2",
        "mood-phrase": ", perplexed, said",
        "mood": "perplexed",
        "statement": [{
          "id": 15, "statementKey": "B7d1",
          "speaker": 1,
          "next": "B7d2",
          "image": "../../../assets/perez/perez_panel_1.png",
          "speaker_image": "../../../assets/Al.png",
          "text": "It's just hard for me to see how to decouple scholarship and funding, " +
          "how can you be a scholar in materials engineering without funding?"
          , "reference": [{
            "url": "",
            "desc": "Measures of productivity regarding funding and publication ought to be communicated to all candidates in written guidelines and careful mentoring."
          }, {
            "url": "http:\\www.gatech.edu",
            "desc": "The GATech faculty handbook (3.2.3) mandates review of \"all dimensions of performance\". . . \"teaching, creativity, and service.\""
          }]
        }
        ]
      },
      {
        "statementKey": "B7d2",
        "speaker": 3,
        "next": "C1",
        "mood-phrase": "enthusiastically said",
        "mood": "enthusiastic",
        "statement": [{
          "id": 16, "statementKey": "B7d2",
          "speaker": 3,
          "next": "C1",
          "image": "../../../assets/perez/perez_panel_3.png",
          "speaker_image": "../../../assets/KK.png",
          "text": "Perez's NSF and industry funding are impressive." +
          " External collaboration in a hot area is good, with more opportunities and new monies " +
          "for materials engineering. He has incredible potential, and our letter should reward his effort.",
          "reference": [{
            "url": "",
            "desc": "Interdisciplinary teaming can attract funding and provide momentum for funding proposals and publications."
          }, {
            "url": "", "desc": "Burnett characterizes how collaboration increases problem-solving."
          }]
        }
        ]
      },
      {
        "statementKey": "C1",
        "speaker": 1,
        "next": "C2",
        "mood-phrase": "said",
        "mood": "talk",
        "statement": [{
          "id": 17, "statementKey": "C1",
          "speaker": 1,
          "next": "C2",
          "image": "../../../assets/perez/perez_panel_1.png",
          "speaker_image": "../../../assets/Al.png", "text": "Let's look at teaching now.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]

      },
      {
        "statementKey": "C2",
        "speaker": 3,
        "next": "C3",
        "mood-phrase": "said",
        "mood": "talk",
        "statement": [{
          "id": 18, "statementKey": "C2",
          "speaker": 3,
          "next": "C3",
          "image": "../../../assets/perez/perez_panel_3.png",

          "speaker_image": "../../../assets/KK.png",
          "text": "His teaching evaluations are better than most assistant professors in the intro course. " +
          "He team teaches a course on surface chemistry with other faculty, " +
          "so it's hard to judge the quality of his instruction.",
          "reference": [{
            "url": "",
            "desc": "Teaching scores are not always highly regarded by faculty evaluators."
          },
            {
              "url": "http://www.advance.gatech.edu/ptac/SUMMARY%20OF%20PTAC%20SURVEY.htm",
              "desc": "Linse describes female faculty concerns about evaluations. Respondents to the PTAC survey doubt effectiveness of certain teaching evaluation methods. See section III of PTAC report."
            }]
        }
        ]

      },
      {
        "statementKey": "C3",
        "speaker": 2,
        "next": "C4",
        "mood-phrase": "said mockingly",
        "mood": "talk",
        "statement": [{
          "id": 19, "statementKey": "C3",
          "speaker": 2,
          "next": "C4",
          "image": "../../../assets/perez/perez_panel_2.png",
          "speaker_image": "../../../assets/JD.png",
          "text": "Did those intro students really learn? Does Perez have high numbers because he is amusing? " +
          "I heard he shows unrelated clips from the web in class. Sometimes students mistake that for good teaching.",
          "reference": [{
            "url": "",
            "desc": "Various studies on student evaluations report how stereotypes, expectations, student resistance to course content, and interactions affect scores."
          }, {
            "url": "",
            "desc": "See \"Gender and Student Evaluations,\" an annotated bibliography developed at the University of Michigan, for studies on bias in teaching evaluations."
          }]
        }
        ]

      },
      {
        "statementKey": "C4",
        "speaker": 1,
        "next": "C5",
        "mood-phrase": "said seriously",
        "mood": "serious",
        "statement": [{
          "id": 20, "statementKey": "C4",
          "speaker": 1,
          "next": "C5",
          "image": "../../../assets/perez/perez_panel_1.png",
          "speaker_image": "../../../assets/Al.png",
          "text": "If he's concerned about teaching, he ought to use appropriate pedagogies. " +
          "I don't see evidence of his ability to retain students in materials. " +
          "As Jason says, what's really going on in the classroom?",
          "reference": [{
            "url": "",
            "desc": "Committee members should calibrate their differing expectations of what qualifies as good teaching."
          }, {
            "url": "http://www.adept.gatech.edu/library.htm",
            "desc": "See R. A. Arreola on developing a comprehensive faculty evaluation system."
          }]
        }
        ]
      },
      {
        "statementKey": "C5",
        "speaker": 3,
        "next": "C6",
        "mood-phrase": "asked",
        "mood": "question",
        "statement": [{
          "id": 21, "statementKey": "C5",
          "speaker": 3,
          "next": "C6",
          "image": "../../../assets/perez/perez_panel_3.png",
          "speaker_image": "../../../assets/KK.png",
          "text": "Well, are these teaching standards--retention of majors and appropriate pedagogies--that we will " +
          "invoke for everyone?",
          "reference": [{
            "url": "",
            "desc": "Standards ought to reflect institutional mission and be applied equitably."
          }, {
            "url": "www. advance.gatech.edu/ptac",
            "desc": "The 2003 ADVANCE research survey reports faculty perceptions of significant factors for promotion and salary."
          }]
        }
        ]

      },
      {
        "statementKey": "C6",
        "speaker": 1,
        "next": "C7",
        "mood-phrase": "exclaimed",
        "mood": "exclaim",
        "statement": [{
          "id": 22, "statementKey": "C6",
          "speaker": 1,
          "next": "C7",
          "image": "../../../assets/perez/perez_panel_1.png",
          "speaker_image": "../../../assets/Al.png",
          "text": "We should. Look at Jones' case: now there's someone who lays out a terrific teaching portfolio. " +
          "Why can't Perez get help so he can get results like Jones?",
          "reference": [{
            "url": "",
            "desc": "Stereotypes affect perceptions of another's competence."
          }, {
            "url": "",
            "desc": "Valian discusses perceptions of leadership, competence, and assertiveness."
          }]
        }
        ]

      },
      {
        "statementKey": "C7",
        "speaker": 0,
        "next": "",
        "mood-phrase": "",
        "mood": "",
        "statement": [
          {
            "id": 23,
            "statementKey": "C7a",
            "speaker": 0,
            "next": "C8a",
            "image": "../../../assets/perez/perez_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "But we shouldn't directly compare cases. Each case is unique and needs to be seen for its own merits, if we could just find some in Perez's.",
            "reference": [{
              "url": "",
              "desc": ""
            }]
          },
          {
            "id": 23,
            "statementKey": "C7b",
            "speaker": 0,
            "next": "C8b",
            "image": "../../../assets/perez/perez_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "Yes, Jones definitely deserves his teaching awards.",
            "reference": [{
              "url": "",
              "desc": ""
            }]
          },
          {
            "id": 23,
            "statementKey": "C7c",
            "speaker": 0,
            "next": "C8c",
            "image": "../../../assets/perez/perez_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "Al, you don't like that Perez argues for faculty team-teaching " +
            "intro courses instead of solo teaching. Based on the summaries of senior exit " +
            "interviews provided in the dossier, Perez appears to be a gifted teacher.",
            "reference": [{
              "url": "",
              "desc": ""
            }]
          },
          {
            "id": 23,
            "statementKey": "C7d",
            "speaker": 0,
            "next": "C8d",
            "image": "../../../assets/perez/perez_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "We shouldn't directly compare cases because each has its own merits. " +
            " Perez documents effective teaching by including exit interviews, " +
            "evaluation scores, and student letters supporting an external teaching award. ",
            "reference": [{
              "url": "",
              "desc": ""
            }]
          }
        ]
      },
      {
        "statementKey": "C8a",
        "speaker": 1,
        "next": "D1",
        "mood-phrase": "said seriously",
        "mood": "serious",
        "statement": [{
          "id": 24, "statementKey": "C8a",
          "speaker": 1,
          "next": "D1",
          "image": "../../../assets/perez/perez_panel_1.png",
          "speaker_image": "../../../assets/Al.png",
          "text": "I see three of us agree that Perez's teaching record is difficult to assess, and perhaps marginal.",
          "reference": [{
            "url": "",
            "desc": "Instructors should receive feedback on their teaching records before coming up for promotion and tenure."
          }, {
            "url": "http:\\www.advance.gatech.edu",
            "desc": "PTAC report (I.5) acknowledges the significance of mentoring, citing Stanley Fish's concerns with the problems and prospects of mentoring."
          }]
        }
        ]

      },
      {
        "statementKey": "C8b",
        "speaker": 1,
        "next": "D1",
        "mood-phrase": "said emphatically",
        "mood": "emphatic",
        "statement": [{
          "id": 25, "statementKey": "C8b",
          "speaker": 1,
          "next": "D1",
          "image": "../../../assets/perez/perez_panel_1.png",
          "speaker_image": "../../../assets/Al.png",
          "text": "Okay, so we'll give Jones great marks in the teaching department and barely pass Perez.",
          "reference": [{
            "url": "",
            "desc": "Evaluators ought to resist the temptation to compare candidates' records by taking data out of context."
          }, {
            "url": "",
            "desc": "Tierney acknowledges the need to develop appropriate rewards for teaching."
          }]
        }
        ]
      },
      {
        "statementKey": "C8c",
        "speaker": 1,
        "next": "D1",
        "mood-phrase": ", somewhat annoyed, said",
        "mood": "annoyed",
        "statement": [{
          "id": 26, "statementKey": "C8c",
          "speaker": 1,
          "next": "D1",
          "image": "../../../assets/perez/perez_panel_1.png",
          "speaker_image": "../../../assets/Al.png",
          "text": " Team-teaching is too cumbersome to work in the intro course. " +
          "But if you all agree that Perez deserves high marks for teaching, " +
          "I'll go along with noting his high teaching evaluation scores.",
          "reference": [{
            "url": "",
            "desc": "Evaluators ought to avoid injecting personal bias into deliberations."
          }, {
            "url": "http:\\www.advance.gatech.edu/ptac",
            "desc": "The PTAC report (IV.3) references the need to develop open and transparent evaluation processes."
          }]
        }
        ]

      },
      {
        "statementKey": "C8d",
        "speaker": 1,
        "next": "D1",
        "mood-phrase": ", acquiescing, said",
        "mood": "acquiescing",
        "statement": [{
          "id": 27, "statementKey": "C8d",
          "speaker": 1,
          "next": "D1",
          "image": "../../../assets/perez/perez_panel_1.png",
          "speaker_image": "../../../assets/Al.png",
          "text": "Okay, I guess that if we really look at the documentation provided and not bring our own bias regarding team teaching into play, Perez does a reasonable job of teaching",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "D1",
        "speaker": 2,
        "next": "D2",
        "mood-phrase": ", smirking, said",
        "mood": "smirk",
        "statement": [{
          "id": 28, "statementKey": "D1",
          "speaker": 2,
          "next": "D2",
          "image": "../../../assets/perez/perez_panel_2.png",
          "speaker_image": "../../../assets/JD.png",
          "text": "I feel kind of silly bringing this up, but Perez seems to be adhering to that old adage " +
          "'birds of a feather'-you know? Look at who's on his grant team: Lopez, Johnson, Rodriguez, Bahouali",
          "reference": [{
            "url": "",
            "desc": "Institutional values/biases ought to be carefully characterized and criticized in the evaluation process.Institutional values/biases ought to be carefully characterized and criticized in the evaluation process."
          },
            {
              "url": "http://www.adept.gatech.edu/library.htm",
              "desc": "Long and Fox report how particularism affects perceptions of success."
            },
            {
              "url": "http://www.adept.gatech.edu/library.htm",
              "desc": "Fox and Ferri examine how men and women differently attribute success."
            }]
        }
        ]

      },
      {
        "statementKey": "D2",
        "speaker": 1,
        "next": "D3",
        "mood-phrase": ", somewhat annoyed, said",
        "mood": "annoyed",
        "statement": [{
          "id": 29, "statementKey": "D2",
          "speaker": 1,
          "next": "D3",
          "image": "../../../assets/perez/perez_panel_1.png",
          "speaker_image": "../../../assets/Al.png",
          "text": "I see that too. Perez wrote about minority engineering education. " +
          "I don't see that he has tried to get funding along those lines.   " +
          "But that's probably fine. You can't do that at the expense of first rate research.",
          "reference": [{
            "url": "",
            "desc": "Evaluators should clarify the relative importance of funding and quantity and quality of publications."
          }, {
            "url": "http:\\www.advance.gatech.edu/ptac",
            "desc": "The PTAC report (I.2) references diversity in relation to recruitment, retention, and perceptions regarding faculty abilities and performance."
          }]
        }
        ]

      },
      {
        "statementKey": "D3",
        "speaker": 2,
        "next": "D4",
        "mood-phrase": "exclaimed",
        "mood": "exclaim",
        "statement": [{
          "id": 30, "statementKey": "D3",
          "speaker": 2,
          "next": "D4",
          "image": "../../../assets/perez/perez_panel_2.png",
          "speaker_image": "../../../assets/JD.png",
          "text": "Yeah, research is based on merit. To get respect, you need to bring in money, attract student attention." +
          " People should make technical contributions rather than write articles about lack of opportunities.",
          "reference": [{
            "url": "",
            "desc": "Standards reflect cultural norms of engineering schools."
          }, {
            "url": "http://www.adept.gatech.edu/library.htm",
            "desc": "\"Defining Culture\" identifies cultural norms observed in material culture and interactions in an engineering school."
          }]
        }
        ]

      },
      {
        "statementKey": "D4",
        "speaker": 3,
        "next": "D5",
        "mood-phrase": "angrily said",
        "mood": "angry",
        "statement": [{
          "id": 31, "statementKey": "D4",
          "speaker": 3,
          "next": "D5",
          "image": "../../../assets/perez/perez_panel_3.png",
          "speaker_image": "../../../assets/KK.png",
          "text": "I think there are some things being said here that are pushing the boundaries of appropriate conduct.",
          "reference": [{
            "url": "",
            "desc": "Evaluators should focus on reviewing the candidate's dossier and avoid making political pronouncements that could be interpreted as character slurs."
          }, {
            "url": "http://www.adept.gatech.edu/library.htm",
            "desc": "Getman explains on pages 109-129 how peer review may falter."
          }]
        }
        ]

      },
      {
        "statementKey": "D5",
        "speaker": 0,
        "next": "",
        "mood-phrase": "",
        "mood": "",
        "statement": [
          {
            "id": 32,
            "statementKey": "D5a",
            "speaker": 0,
            "next": "D6a1",
            "image": "../../../assets/perez/perez_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "In my view, the education piece should be irrelevant to our judgment of his engineering scholarship because it is an opinion and not research.",
            "reference": [{
              "url": "",
              "desc": ""
            }]
          },
          {
            "id": 32,
            "statementKey": "D5b",
            "speaker": 0,
            "next": "D6b1",
            "image": "../../../assets/perez/perez_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "I don't think anything is out of bounds in a P and T discussion, this is an entirely confidential matter.  What is said here stays inside these walls.",
            "reference": [{
              "url": "",
              "desc": ""
            }]
          },
          {
            "id": 32,
            "statementKey": "D5c",
            "speaker": 0,
            "next": "D6c1",
            "image": "../../../assets/perez/perez_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "I agree with Karen that consideration of ethnicity or minority issues has no place in this discussion. " +
            "We should thank him for caring about minority recruitment in engineering and excelling in everything he does.",
            "reference": [{
              "url": "",
              "desc": ""
            }]
          },
          {
            "id": 32,
            "statementKey": "D5d",
            "speaker": 0,
            "next": "D6d1",
            "image": "../../../assets/perez/perez_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "Karen is right. The engineering education essay is relevant as it concerns an innovative curriculum for ABET. " +
            " It appears in a reputable journal and provides some insight into the kind of balance in Perez's repertoire.",
            "reference": [{
              "url": "",
              "desc": ""
            }]
          }
        ]
      },
      {
        "statementKey": "D6a1",
        "speaker": 1,
        "next": "D6a2",
        "mood-phrase": "said confidently",
        "mood": "confident",
        "statement": [{
          "id": 33, "statementKey": "D6a1",
          "speaker": 1,
          "next": "D6a2",
          "image": "../../../assets/perez/perez_panel_1.png",
          "speaker_image": "../../../assets/Al.png",
          "text": "So we are all agreed that Perez hasn't established the right kind of profile in research, teaching, or service for our department and our university?",
          "reference": [{
            "url": "",
            "desc": "Senior faculty members should encourage other evaluators to express their own views rather than assuming agreement."
          }, {
            "url": "http://www.adept.gatech.edu/library.htm",
            "desc": "Nieva and Gutek consider bias toward white males in evaluation processes."
          }]
        }
        ]
      },
      {
        "statementKey": "D6a2",
        "speaker": 3,
        "next": "E1a",
        "mood-phrase": "said emphatically",
        "mood": "emphatic",
        "statement": [{
          "id": 34, "statementKey": "D6a2",
          "speaker": 3,
          "next": "E1a",
          "image": "../../../assets/perez/perez_panel_3.png",
          "speaker_image": "../../../assets/KK.png",
          "text": "I disagree and ask that everyone review the scholarship and external letters of support before our next meeting.",
          "reference": [{
            "url": "",
            "desc": "Integrity of evaluation process includes the solicitation and interpretation of external letters of recommendation/review.Integrity of evaluation process includes the solicitation and interpretation of external letters of recommendation/review."
          }, {
            "url": "http://www.adept.gatech.edu/library.htm",
            "desc": "Baron illustrates the value of external review letters for RPT committee members."
          }, {
            "url": "http://chronicle.com/prm/weekly/v48/i25/25b01401.htm",
            "desc": "Letters often remain confidential and not open to review by the candidate, but practices vary."
          }]
        }
        ]
      },
      {
        "statementKey": "D6b1",
        "speaker": 1,
        "next": "D6b2",
        "mood-phrase": "said passively",
        "mood": "passive",
        "statement": [{
          "id": 35, "statementKey": "D6b1",
          "speaker": 1,
          "next": "D6b2",
          "image": "../../../assets/perez/perez_panel_1.png",
          "speaker_image": "../../../assets/Al.png",
          "text": "Yes, being on the same page with our goals is an important element, " +
          "and maybe he just doesn't fit with us in terms of research, teaching, or service.",
          "reference": [{
            "url": "",
            "desc": "Yes, being on the same page with our goals is an important element, and maybe he just doesn't fit with us in terms of research, teaching, or service."
          }, {
            "url": "http://www.adept.gatech.edu/library.htm",
            "desc": "Allen claims social factors and environmental influences are ignored in evaluation processes."
          }]
        }
        ]

      },
      {
        "statementKey": "D6b2",
        "speaker": 3,
        "next": "E1a",
        "mood-phrase": "said emphatically",
        "mood": "emphatic",
        "statement": [{
          "id": 36, "statementKey": "D6b2",
          "speaker": 3,
          "next": "E1a",
          "image": "../../../assets/perez/perez_panel_3.png",
          "speaker_image": "../../../assets/KK.png",
          "text": "We should take into account that our discipline is becoming more interdisciplinary and that " +
          "Perez's work demonstrates that evolution.",
          "reference": [{
            "url": "",
            "desc": "Evaluators should keep in mind disciplinary, institutional, and professional standards."
          }, {
            "url": "http://www.adept.gatech.edu/library.htm",
            "desc": "Tierney acknowledges the need to develop appropriate recognition of a range of scholarship."
          }]
        }
        ]
      },
      {
        "statementKey": "D6c1",
        "speaker": 1,
        "next": "D6c2",
        "mood-phrase": ", somewhat annoyed, said",
        "mood": "annoyed",
        "statement": [{
          "id": 37, "statementKey": "D6c1",
          "speaker": 1,
          "next": "D6c2",
          "image": "../../../assets/perez/perez_panel_1.png",
          "speaker_image": "../../../assets/Al.png",
          "text": "All I'm saying is that stuff can't make up for other areas in which his contributions are lacking.",
          "reference": [{
            "url": "",
            "desc": "Standards of achievement should be clear and not established by individual predilections."
          }, {
            "url": "http://www.adept.gatech.edu/library.htm",
            "desc": "Fish considers subjective aspects of the promotion and tenure process."
          }]
        }
        ]

      },
      {
        "statementKey": "D6c2",
        "speaker": 3,
        "next": "E1b",
        "mood-phrase": "said confidently",
        "mood": "confident",
        "statement": [{
          "id": 38, "statementKey": "D6c2",
          "speaker": 3,
          "next": "E1b",
          "image": "../../../assets/perez/perez_panel_3.png",
          "speaker_image": "../../../assets/KK.png",
          "text": "Some of us think that his contributions in research and teaching are fine and that" +
          " his interest in minority education points to future contributions to departmental recruiting.",
          "reference": [{
            "url": "",
            "desc": "Standards of achievement should be clear and not established by individual predilections."
          }, {
            "url": "http:\\www.advance.gatech.edu/ptac",
            "desc": "PTAC Report (IV.3) outlines best practices of evaluation."
          }]
        }
        ]

      },
      {
        "statementKey": "D6d1",
        "speaker": 1,
        "next": "D6d2",
        "mood-phrase": ", confused, said",
        "mood": "confused",
        "statement": [{
          "id": 39, "statementKey": "D6d1",
          "speaker": 1,
          "next": "D6d2",
          "image": "../../../assets/perez/perez_panel_1.png",
          "speaker_image": "../../../assets/Al.png",
          "text": "I hadn't noticed it had anything to do with ABET.",
          "reference": [{
            "url": "",
            "desc": "Evaluators should carefully read documents in dossier."
          }, {
            "url": "http://www.advance.gatech.edu/ptac",
            "desc": "PTAC Report (IV.3) outlines best practices of evaluation."
          }]
        }
        ]

      },
      {
        "statementKey": "D6d2",
        "speaker": 2,
        "next": "E1c",
        "mood-phrase": ", smirking, said",
        "mood": "smirk",
        "statement": [{
          "id": 40,
          "statementKey": "D6d2",
          "speaker": 2,
          "next": "E1c",
          "image": "../../../assets/perez/perez_panel_2.png",
          "speaker_image": "../../../assets/JD.png",
          "text": "The end of Perez's essay notes a connection to ABET, and the essay was praised by " +
          "two external reviewers as a significant contribution to issues of underrepresentation.",
          "reference": [{
            "url": "",
            "desc": "Educational scholarship can be evaluated as an element of teaching portfolio."
          }, {
            "url": "http:\\www.advance.gatech.edu/ptac",
            "desc": "PTAC Report (IV.3) outlines best practices of evaluation."
          }]
        }
        ]
      },
      {
        "statementKey": "E1a",
        "speaker": 1,
        "next": "",
        "mood-phrase": "said arrogantly",
        "mood": "arrogant",
        "statement": [{
          "id": 43,
          "statementKey": "E1a",
          "speaker": 1,
          "next": "",
          "image": "../../../assets/perez/perez_panel_1.png",
          "speaker_image": "../../../assets/Al.png",
          "text": "Research is substandard.  Teaching is barely adequate. And there's no real service."
          , "reference": [{
            "url": "",
            "desc": "Standards of achievement should be clear and not established by individual predilections."
          }, {
            "url": "http:\\www.advance.gatech.edu/ptac",
            "desc": "PTAC Report (IV.3) outlines best practices of evaluation."
          }]
        }
        ]

      },
      {
        "statementKey": "E1b",
        "speaker": 1,
        "next": "",
        "mood-phrase": ", somewhat annoyed, said",
        "mood": "annoyed",
        "statement": [{
          "id": 43, "statementKey": "E1b",
          "speaker": 1,
          "next": "",
          "image": "../../../assets/perez/perez_panel_1.png",
          "speaker_image": "../../../assets/Al.png",
          "text": "Perez's research funding meets expectations, and his teaching is okay, " +
          "but he hasn't seemed to have found his niche yet in terms of service.  That's probably ok at his stage.",
          "reference": [{
            "url": "",
            "desc": "Departments should have clear, unambiguous expectations that are communicated in writing."
          }, {
            "url": "http:\\www.advance.gatech.edu/ptac",
            "desc": "PTAC Report (IV.3) outlines best practices of evaluation."
          }]
        }
        ]
      },
      {
        "statementKey": "E1c",
        "speaker": 3,
        "next": "",
        "mood-phrase": "said seriously",
        "mood": "serious",
        "statement": [{
          "id": 43, "statementKey": "E1c",
          "speaker": 3,
          "next": "",
          "image": "../../../assets/perez/perez_panel_3.png",
          "speaker_image": "../../../assets/KK.png",
          "text": "It seems to me that the majority of us agree that Perez is an outstanding " +
          "researcher and teacher who has contributed to service in his efforts to improve minority recruitment." +
          " Al, you seem to be the outlier.",
          "reference": [{
            "url": "",
            "desc": "Standards of achievement should be clear and not established by individual predilections."
          }, {
            "url": "http:\\www.advance.gatech.edu/ptac",
            "desc": "PTAC Report (IV.3) outlines best practices of evaluation."
          }]
        }
        ]

      }
    ]
  },
  {
    "name": "Samia Mansour",
    "id": 2,
    "conversation": [
      {
        "statementKey": "A1",
        "speaker": 1,
        "next": "A2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 1, "statementKey": "A1",
          "speaker": 1,
          "next": "A2",
          "image": "../../../assets/mansour/mansour_panel_1.png",
          "speaker_image": "../../../assets/KS.png",
          "text": "Let's now consider Mansour's case. Keep in mind this is an early promotion and tenure case.",
          "reference": [{
            "url": "",
            "desc": "Faculty in units ought to calibrate their standards regarding \"early\" and \"on-time\" cases."
          }]
        }
        ]
      },
      {
        "statementKey": "A2",
        "speaker": 3,
        "next": "A3",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 2, "statementKey": "A2",
          "speaker": 3,
          "next": "A3",
          "image": "../../../assets/mansour/mansour_panel_3.png",
          "speaker_image": "../../../assets/MS.png",
          "text": "Is her case different because of the time?",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]

      },
      {
        "statementKey": "A3",
        "speaker": 1,
        "next": "B1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 3, "statementKey": "A3",
          "speaker": 1,
          "next": "B1",
          "image": "../../../assets/mansour/mansour_panel_1.png",
          "speaker_image": "../../../assets/KS.png",
          "text": "Since I've been here, we've only had one early case. To be promoted early, the candidate has to be extraordinary in all criteria. Let's start with research.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "B1",
        "speaker": 2,
        "next": "B2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 4, "statementKey": "B1",
          "speaker": 2,
          "next": "B2",
          "image": "../../../assets/mansour/mansour_panel_2.png",
          "speaker_image": "../../../assets/JW.png",
          "text": "I agree that extraordinary levels are expected and Mansour's work qualifies.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]

      },
      {
        "statementKey": "B2",
        "speaker": 3,
        "next": "B3",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 5, "statementKey": "B2",
          "speaker": 3,
          "next": "B3",
          "image": "../../../assets/mansour/mansour_panel_3.png",
          "speaker_image": "../../../assets/MS.png",
          "text": "From my vantage point, Samia is a good scholar. Look at this award for her research.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]

      },
      {
        "statementKey": "B3",
        "speaker": 2,
        "next": "B4",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 6, "statementKey": "B3",
          "speaker": 2,
          "next": "B4",
          "image": "../../../assets/mansour/mansour_panel_2.png",
          "speaker_image": "../../../assets/JW.png",
          "text": "It's an impressive award, but let's look at the sum total of research.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "B4",
        "speaker": 1,
        "next": "B5",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 7, "statementKey": "B4",
          "speaker": 1,
          "next": "B5",
          "image": "../../../assets/mansour/mansour_panel_1.png",
          "speaker_image": "../../../assets/KS.png",
          "text": "She has more publications in top-ranked journals than any other untenured biochemistry faculty in our unit.",
          "reference": [{
            "url": "",
            "desc": "Rankings of journals are affected by perceptions of prestige and by submission and acceptance statistics."
          },
            {
              "url": "",
              "desc": "Miller's and Serzan's survey of journals across fields discovered wide variation in editorial and review practices that can influence evaluation decisions."
            }]

        }
        ]
      },
      {
        "statementKey": "B5",
        "speaker": 3,
        "next": "B6",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 8, "statementKey": "B5",
          "speaker": 3,
          "next": "B6",
          "image": "../../../assets/mansour/mansour_panel_3.png",
          "speaker_image": "../../../assets/MS.png",
          "text": "She has significant quantity, but we need to examine the quality. Does her best paper, the prizewinner, represent a significant contribution to the field?",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "B6",
        "speaker": 2,
        "next": "B7",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 9, "statementKey": "B6",
          "speaker": 2,
          "next": "B7",
          "image": "../../../assets/mansour/mansour_panel_2.png",
          "speaker_image": "../../../assets/JW.png",
          "text": "Are you suggesting that the paper isn't as good as most reviewers have noted?",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "B7",
        "speaker": 3,
        "next": "B8",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 10, "statementKey": "B7",
          "speaker": 3,
          "next": "B8",
          "image": "../../../assets/mansour/mansour_panel_3.png",
          "speaker_image": "../../../assets/MS.png",
          "text": "Let's look at the second reviewer's comments. He doesn't think it contributes much to the field.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "B8",
        "speaker": 1,
        "next": "B9",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 11, "statementKey": "B8",
          "speaker": 1,
          "next": "B9",
          "image": "../../../assets/mansour/mansour_panel_1.png",
          "speaker_image": "../../../assets/KS.png",
          "text": "All the other reviews are positive. I wonder if the negative reviewer is impartial, " +
          "given the tone of the letter and his focusing on that one paper. I heard this guy is known for " +
          "writing negative letters.",
          "reference": [{
            "url": "",
            "desc": "Each unit ought to have a standard request letter containing directions to reviewers."
          },
            {
              "url": "",
              "desc": "PTAC Report. Best Practices. Section 7D, notes chair's responsibilities."
            }]
        }
        ]
      },
      {
        "statementKey": "B9",
        "speaker": 3,
        "next": "B10",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 12, "statementKey": "B9",
          "speaker": 3,
          "next": "B10",
          "image": "../../../assets/mansour/mansour_panel_3.png",
          "speaker_image": "../../../assets/MS.png",
          "text": "His review does seem like it's a response to only one of Samia's papers, but the most" +
          " important consideration ought to concern the range of research products.",
          "reference": [{
            "url": "",
            "desc": "The 2003 PTAC survey asking GT faculty in different colleges to rank the value of research products revealed different preferences according to discipline."
          }]
        }
        ]
      },
      {
        "statementKey": "B10",
        "speaker": 2,
        "next": "B11",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 13, "statementKey": "B10",
          "speaker": 2,
          "next": "B11",
          "image": "../../../assets/mansour/mansour_panel_2.png",
          "speaker_image": "../../../assets/JW.png",
          "text": "All reviews have to be weighed carefully. " +
          "The most positive one considers Mansour's service to the profession rather than discussing her research. " +
          "Do we care that she works for that society?",
          "reference": [{
            "url": "",
            "desc": "Research on social support systems indicates that good relationships increase productivity."
          }, {
            "url": "",
            "desc": "Neumann and Finaly-Neumann note \"relative powers of support and work stress indicators in explaining research publication may vary across academic discipline.\""
          }]
        }
        ]
      },
      {
        "statementKey": "B11",
        "speaker": 1,
        "next": "B12",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 14, "statementKey": "B11",
          "speaker": 1,
          "next": "B12",
          "image": "../../../assets/mansour/mansour_panel_1.png",
          "speaker_image": "../../../assets/KS.png",
          "text": "Good service alone will not earn promotion and tenure. An early candidate has to " +
          "demonstrate a more remarkable profile in research.",
          "reference": [{
            "url": "",
            "desc": "Minority faculty may be asked to take on a variety of service roles in a majority institution."
          }, {
            "url": "",
            "desc": "Scott relates productivity to interpersonal contact."
          }]
        }
        ]
      },
      {
        "statementKey": "B12",
        "speaker": 2,
        "next": "B13",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 15, "statementKey": "B12",
          "speaker": 2,
          "next": "B13",
          "image": "../../../assets/mansour/mansour_panel_2.png",
          "speaker_image": "../../../assets/JW.png",
          "text": "The letters don't prove excellent research. One is from another former student of her mentor. " +
          "Others praise research without understanding it. The negative reviewer is the only one who knows the area.",
          "reference": [{
            "url": "",
            "desc": "External letters should be weighed carefully by committee members."
          }, {
            "url": "",
            "desc": "The PTAC Report. Best Practices. Section 7.E. Interpretation of Letters of Reference."
          }]
        }
        ]
      },
      {
        "statementKey": "B13",
        "speaker": 3,
        "next": "B14",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 16, "statementKey": "B13",
          "speaker": 3,
          "next": "B14",
          "image": "../../../assets/mansour/mansour_panel_3.png",
          "speaker_image": "../../../assets/MS.png",
          "text": "How do you know the positive reviewer has a personal connection?",
          "reference": [{
            "url": "",
            "desc": "Candidates can accrue ascriptive advantages related to academic sponsorship."
          }, {
            "url": "",
            "desc": "Reskin describes the cumulative advantages scientists gained from graduate school advisors."
          }]
        }
        ]
      },
      {
        "statementKey": "B14",
        "speaker": 2,
        "next": "B15",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 17, "statementKey": "B14",
          "speaker": 2,
          "next": "B15",
          "image": "../../../assets/mansour/mansour_panel_2.png",
          "speaker_image": "../../../assets/JW.png",
          "text": "I sat on an NSF panel with someone who knew Samia from graduate school. " +
          "I believe this letter is from her.",
          "reference": [{
            "url": "",
            "desc": "Reviewers should not have close personal ties to candidates. Relationships should be disclosed."
          }, {
            "url": "",
            "desc": "The PTAC Report. Best Practices. Section 7.B. Ethics."
          }]
        }
        ]
      },
      {
        "statementKey": "B15",
        "speaker": 0,
        "next": "",
        "mood-phrase": "",
        "mood": "",
        "statement": [
          {
            "id": 18,
            "statementKey": "B15a",
            "speaker": 0,
            "next": "B16a1",
            "image": "../../../assets/mansour/mansour_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "I agree that all letters count and that the negative one is salient.",
            "reference": [{
              "url": "",
              "desc": ""
            }]
          },
          {
            "id": 18,
            "statementKey": "B15b",
            "speaker": 0,
            "next": "B16b1",
            "image": "../../../assets/mansour/mansour_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "One reviewer is too negative about that one paper and ignores the prize given to it. " +
            "His argument is not persuasive since the other letters demonstrate genuine and significant achievement.",
            "reference": [{
              "url": "",
              "desc": ""
            }]
          },
          {
            "id": 18,
            "statementKey": "B15c",
            "speaker": 0,
            "next": "B16c1",
            "image": "../../../assets/mansour/mansour_panel_1.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "I think the positive one is too positive. It smacks of cronyism. The rest of the letters are more realistic and persuasive.",
            "reference": [{
              "url": "",
              "desc": ""
            }]
          },
          {
            "id": 18,
            "statementKey": "B15d",
            "speaker": 0,
            "next": "B16d1",
            "image": "../../../assets/mansour/mansour_panel_1.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "I don't care what the reviewers say; I'll judge Mansour's scholarship based on my reading of her papers, which are quite strong.",
            "reference": [{
              "url": "",
              "desc": ""
            }]
          }
        ]
      },
      {
        "statementKey": "B16a1",
        "speaker": 3,
        "next": "B16a2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 19, "statementKey": "B16a1",
          "speaker": 3,
          "next": "B16a2",
          "image": "../../../assets/mansour/mansour_panel_3.png",
          "speaker_image": "../../../assets/MS.png",
          "text": "OK, if you all see the negative letter as trumping the other letters, I'll go along with that.",
          "reference": [{
            "url": "",
            "desc": "Disciplinary paradigms affect subjective evaluation and research."
          }, {
            "url": "",
            "desc": "Toma considers the effects of disciplinary paradigms on decisions."
          }]
        }
        ]
      },
      {
        "statementKey": "B16a2",
        "speaker": 2,
        "next": "B16a3",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 20, "statementKey": "B16a2",
          "speaker": 2,
          "next": "B16a3",
          "image": "../../../assets/mansour/mansour_panel_2.png",
          "speaker_image": "../../../assets/JW.png",
          "text": "Well, it seems that Mansour's work has yet to prove it's value. I say let's wait to see more from her.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "B16a3",
        "speaker": 1,
        "next": "C1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 21, "statementKey": "B16a3",
          "speaker": 1,
          "next": "C1",
          "image": "../../../assets/mansour/mansour_panel_1.png",
          "speaker_image": "../../../assets/KS.png",
          "text": "Her work is good, but I agree that she needs time to mature. Let's consider teaching.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "B16b1",
        "speaker": 3,
        "next": "B16b2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 22, "statementKey": "B16b1",
          "speaker": 3,
          "next": "B16b2",
          "image": "../../../assets/mansour/mansour_panel_3.png",
          "speaker_image": "../../../assets/MS.png",
          "text": "I agree that the general impression of the six letters is that her work is very good.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "B16b2",
        "speaker": 2,
        "next": "B16b3",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 23, "statementKey": "B16b2",
          "speaker": 2,
          "next": "B16b3",
          "image": "../../../assets/mansour/mansour_panel_2.png",
          "speaker_image": "../../../assets/JW.png",
          "text": "Yes, Mansour's work has clearly been recognized as significant by some in her field, but what about that very negative letter?",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "B16b3",
        "speaker": 1,
        "next": "C1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 24, "statementKey": "B16b3",
          "speaker": 1,
          "next": "C1",
          "image": "../../../assets/mansour/mansour_panel_1.png",
          "speaker_image": "../../../assets/KS.png",
          "text": "Mohammed is right that the general context of all the letters should be important. " +
          "The quality of Mansour's work deserves recognition. Let's talk about teaching.",
          "reference": [{
            "url": "",
            "desc": "Approaching a field from a too narrow perspective could limit appreciation of other subfields, methods, etc."
          }, {
            "url": "",
            "desc": "Wilshire observes damage from such parochialism. "
          }]
        }
        ]
      },
      {
        "statementKey": "B16c1",
        "speaker": 3,
        "next": "B16c2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 25, "statementKey": "B16c1",
          "speaker": 3,
          "next": "B16c2",
          "image": "../../../assets/mansour/mansour_panel_3.png",
          "speaker_image": "../../../assets/MS.png",
          "text": "Yes, even though one person finds one paper to be somewhat controversial, " +
          "I think we should set aside such an extreme judgment and look at the bigger picture.",
          "reference": [{
            "url": "",
            "desc": "Intellectual conformity can inhibit the discovery of new knowledge and fair evaluation."
          }, {
            "url": "",
            "desc": "Skolnik notes that concerns about conformity are \"as old as organized intellectual activity itself.\" "
          }]
        }
        ]
      },
      {
        "statementKey": "B16c2",
        "speaker": 2,
        "next": "B16c3",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 26, "statementKey": "B16c2",
          "speaker": 2,
          "next": "B16c3",
          "image": "../../../assets/mansour/mansour_panel_2.png",
          "speaker_image": "../../../assets/JW.png",
          "text": "OK, but does that mean we discount the negative letter?",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "B16c3",
        "speaker": 1,
        "next": "B16c4",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 27, "statementKey": "B16c3",
          "speaker": 1,
          "next": "B16c4",
          "image": "../../../assets/mansour/mansour_panel_1.png",
          "speaker_image": "../../../assets/KS.png",
          "text": "We can if the reviewer seems to be biased. His basic complaint is that in the" +
          " celebrated paper Mansour was only re-doing work already done by her mentor, who really deserves credit for her ideas.",
          "reference": [{
            "url": "",
            "desc": "Proving bias held by reviewers can be difficult."
          }, {
            "url": "",
            "desc": "Merton describes \"the Matthew effect,\" the continuing accrual of recognition for those previously identified as successful."
          }]
        }
        ]
      },
      {
        "statementKey": "B16c4",
        "speaker": 3,
        "next": "B16c5",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 28, "statementKey": "B16c4",
          "speaker": 3,
          "next": "B16c5",
          "image": "../../../assets/mansour/mansour_panel_3.png",
          "speaker_image": "../../../assets/MS.png",
          "text": "I think this reviewer can't believe a young woman is capable of scientific insight.",
          "reference": [{
            "url": "",
            "desc": "Gender bias can be subtle."
          }, {
            "url": "",
            "desc": "Steinpreis how the same c.v. can be judged differently, depending upon whether it has a male or female name attached."
          }]
        }
        ]
      },
      {
        "statementKey": "B16c5",
        "speaker": 1,
        "next": "C1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 29, "statementKey": "B16c5",
          "speaker": 1,
          "next": "C1",
          "image": "../../../assets/mansour/mansour_panel_1.png",
          "speaker_image": "../../../assets/KS.png",
          "text": "Exactly. The excellence of Mansour's research ought to earn her promotion and tenure. Let's discuss her teaching.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "B16d1",
        "speaker": 3,
        "next": "B16d2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 30, "statementKey": "B16d1",
          "speaker": 3,
          "next": "B16d2",
          "image": "../../../assets/mansour/mansour_panel_3.png",
          "speaker_image": "../../../assets/MS.png",
          "text": "Yes, I agree that Samia's research is very visible. We need her to keep up momentum in that area. She really puts us on the map.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "B16d2",
        "speaker": 1,
        "next": "B16d3",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 31, "statementKey": "B16d2",
          "speaker": 1,
          "next": "B16d3",
          "image": "../../../assets/mansour/mansour_panel_1.png",
          "speaker_image": "../../../assets/KS.png",
          "text": "If she doesn't get tenure early here, some other department will hire her. " +
          "We have to cover her area, or we won't be able to offer the PhD in this area.",
          "reference": [{
            "url": "",
            "desc": "It is a mistake to assume that minority faculty are in high demand and subject to competitive bidding."
          }, {
            "url": "",
            "desc": "See references to Smith in PTAC Report. Report on Gender Bias."
          }]
        }
        ]
      },
      {
        "statementKey": "B16d3",
        "speaker": 2,
        "next": "C1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 32, "statementKey": "B16d3",
          "speaker": 2,
          "next": "C1",
          "image": "../../../assets/mansour/mansour_panel_2.png",
          "speaker_image": "../../../assets/JW.png",
          "text": "Alright, if you see this as a strong record, I won't object to a positive assessment of her research. Should we move on to teaching?",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "C1",
        "speaker": 3,
        "next": "C2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 33, "statementKey": "C1",
          "speaker": 3,
          "next": "C2",
          "image": "../../../assets/mansour/mansour_panel_3.png",
          "speaker_image": "../../../assets/MS.png",
          "text": "I can't believe that some students have the audacity to comment on her clothing. " +
          "Let's make sure we judge her teaching accordingly.",
          "reference": [{
            "url": "",
            "desc": "Comments from teaching evaluations require contextual explanation."
          }, {
            "url": "",
            "desc": "Derry explains how different student preferences can mean a teacher succeeds and fails at the same moment for the same reason. "
          }]
        }
        ]
      },
      {
        "statementKey": "C2",
        "speaker": 2,
        "next": "C3",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 34, "statementKey": "C2",
          "speaker": 2,
          "next": "C3",
          "image": "../../../assets/mansour/mansour_panel_2.png",
          "speaker_image": "../../../assets/JW.png",
          "text": "The students are right. She's in America, so she should dress like an American. I'm glad she's changed her wardrobe.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "C3",
        "speaker": 1,
        "next": "C4",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 35, "statementKey": "C3",
          "speaker": 1,
          "next": "C4",
          "image": "../../../assets/mansour/mansour_panel_1.png",
          "speaker_image": "../../../assets/KS.png",
          "text": "Mansour has a teaching award. She's been a good undergraduate teacher, and she is critical " +
          "to the graduate program. She attracts the best Ph.D. students.",
          "reference": [{
            "url": "",
            "desc": "Assessment of teaching ought to include a variety of measures."
          }, {
            "url": "",
            "desc": "Glasman calls for the leadership of administrators, who should determine the context of evaluations."
          }]
        }
        ]
      },
      {
        "statementKey": "C4",
        "speaker": 3,
        "next": "C5",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 36, "statementKey": "C4",
          "speaker": 3,
          "next": "C5",
          "image": "../../../assets/mansour/mansour_panel_3.png",
          "speaker_image": "../../../assets/MS.png",
          "text": "She's a good teacher for upper-division undergraduate and graduate students, even if first- and second-year students seem less comfortable with her.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "C5",
        "speaker": 2,
        "next": "C6",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 37, "statementKey": "C5",
          "speaker": 2,
          "next": "C6",
          "image": "../../../assets/mansour/mansour_panel_2.png",
          "speaker_image": "../../../assets/JW.png",
          "text": "Maybe it's her accent that bothers students. " +
          "I sat in on one intro course, and I had trouble understanding everything she said.",
          "reference": [{
            "url": "",
            "desc": "Ethnically biased comments, like gender-biased ones, ought not to enter evaluation discussions."
          }, {
            "url": "",
            "desc": "News accounts of unsuccessful cases at other institutions indicate that gender bias can be a significant factor. See Campi."
          }]
        }
        ]
      },
      {
        "statementKey": "C6",
        "speaker": 3,
        "next": "C7",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 38, "statementKey": "C6",
          "speaker": 3,
          "next": "C7",
          "image": "../../../assets/mansour/mansour_panel_3.png",
          "speaker_image": "../../../assets/MS.png",
          "text": "We need to calibrate her teaching effectiveness. Considering all course scores, " +
          "her teaching for the intro courses is average for our department. And, as Kathryn said, " +
          "in graduate courses she does very well.",
          "reference": [{
            "url": "",
            "desc": "Teaching evaluations should be considered for a range of courses and in the context of other measures reporting effectiveness."
          }, {
            "url": "",
            "desc": "O'Hanlon and Mortenson argue that teaching evaluations ought to contain useful information for instructors."
          }]
        }
        ]
      },
      {
        "statementKey": "C7",
        "speaker": 0,
        "next": "",
        "mood-phrase": "",
        "mood": "",
        "statement": [
          {
            "id": 39,
            "statementKey": "C7a",
            "speaker": 0,
            "next": "C8a",
            "image": "../../../assets/mansour/mansour_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "Low scores reflect only cultural differences and do not serve as the most reliable indicator of good teaching.",
            "reference": [{
              "url": "",
              "desc": ""
            }]
          },
          {
            "id": 39,
            "statementKey": "C7b",
            "speaker": 0,
            "next": "C8b1",
            "image": "../../../assets/mansour/mansour_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "Low scores are low scores and indicate poor teaching.",
            "reference": [{
              "url": "",
              "desc": ""
            }]
          },
          {
            "id": 39,
            "statementKey": "C7c",
            "speaker": 0,
            "next": "C8c1",
            "image": "../../../assets/mansour/mansour_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "Our procedures require looking at a broad set of assessment tools. Numbers are only one component of evaluating teaching.",
            "reference": [{
              "url": "",
              "desc": ""
            }]
          },
          {
            "id": 39,
            "statementKey": "C7d",
            "speaker": 0,
            "next": "D1",
            "image": "../../../assets/mansour/mansour_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "Accent and dress negatively affect her teaching of beginning students, who are a critical constituency for us.",
            "reference": [{
              "url": "",
              "desc": ""
            }]
          }
        ]
      },
      {
        "statementKey": "C8a",
        "speaker": 1,
        "next": "D1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 40, "statementKey": "C8a",
          "speaker": 1,
          "next": "D1",
          "image": "../../../assets/mansour/mansour_panel_1.png",
          "speaker_image": "../../../assets/KS.png",
          "text": "OK, we know she's not going to be the most effective teacher for first-year students, but we agree that in general she is a good teacher. Let's talk about service.",
          "reference": [{
            "url": "",
            "desc": "Positive characteristics of colleagues can depend on particular circumstances."
          }, {
            "url": "",
            "desc": "Goodwin and Stevens report on how gender influences university faculty members' perceptions of good teaching."
          }]
        }
        ]
      },
      {
        "statementKey": "C8b1",
        "speaker": 3,
        "next": "C8b2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 41, "statementKey": "C8b1",
          "speaker": 3,
          "next": "C8b2",
          "image": "../../../assets/mansour/mansour_panel_3.png",
          "speaker_image": "../../../assets/MS.png",
          "text": "Let's remember that her teaching scores have steadily improved over time and that other faculty also have low scores in those introductory courses.",
          "reference": [{
            "url": "",
            "desc": "Researchers disagree concerning the relation of research productivity and teaching."
          }, {
            "url": "",
            "desc": "See Linsky and Straus for a consideration of how they are inversely related."
          }]
        }
        ]
      },
      {
        "statementKey": "C8b2",
        "speaker": 2,
        "next": "D1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 42, "statementKey": "C8b2",
          "speaker": 2,
          "next": "D1",
          "image": "../../../assets/mansour/mansour_panel_2.png",
          "speaker_image": "../../../assets/JW.png",
          "text": "I'll concede that her teaching is currently acceptable, but I hope she improves even more. I guess we're moving on to service.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "C8c1",
        "speaker": 3,
        "next": "C8c2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 43, "statementKey": "C8c1",
          "speaker": 3,
          "next": "C8c2",
          "image": "../../../assets/mansour/mansour_panel_3.png",
          "speaker_image": "../../../assets/MS.png",
          "text": "Absolutely. Her students' written comments and the peer reviewers make it clear that Mansour has tried some innovative techniques in the classroom.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "C8c2",
        "speaker": 1,
        "next": "D1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 44, "statementKey": "C8c2",
          "speaker": 1,
          "next": "D1",
          "image": "../../../assets/mansour/mansour_panel_1.png",
          "speaker_image": "../../../assets/KS.png",
          "text": "We can note those details in our letter where we describe her general teaching record as good. Let's discuss her service.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "D1",
        "speaker": 3,
        "next": "D2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 45, "statementKey": "D1",
          "speaker": 3,
          "next": "D2",
          "image": "../../../assets/mansour/mansour_panel_3.png",
          "speaker_image": "../../../assets/MS.png",
          "text": "Clearly we don't need to say much about her service, which seems exemplary, both in the university and to the profession.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "D2",
        "speaker": 2,
        "next": "D3",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 46, "statementKey": "D2",
          "speaker": 2,
          "next": "D3",
          "image": "../../../assets/mansour/mansour_panel_2.png",
          "speaker_image": "../../../assets/JW.png",
          "text": "But has she really contributed in any substantial way to influential committees on campus " +
          "or among her disciplinary peers? All I see is her interest in women's issues.",
          "reference": [{
            "url": "",
            "desc": "Research is weighted more heavily than teaching during promotion and tenure discussions."
          }, {
            "url": "",
            "desc": "Menges and Exum consider weighting research more heavily as a factor becomes a barrier for female and minority faculty, who are more frequently invited and appointed to community service and perhaps more invested in teaching."
          }]
        }
        ]
      },
      {
        "statementKey": "D3",
        "speaker": 1,
        "next": "D4",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 47, "statementKey": "D3",
          "speaker": 1,
          "next": "D4",
          "image": "../../../assets/mansour/mansour_panel_1.png",
          "speaker_image": "../../../assets/KS.png",
          "text": "Given the underrepresentation of women in this field, women's issues are important. " +
          "It was the president who put her on many of these committees, invitations she could hardly refuse.",
          "reference": [{
            "url": "",
            "desc": "Contributing to enhancing the institution should not be held against the candidate, especially if administrators have requested such participation."
          }, {
            "url": "",
            "desc": "Olsen notes untenured faculty have a more difficult time disagreeing with colleagues and administrators. "
          }]
        }
        ]
      },
      {
        "statementKey": "D4",
        "speaker": 3,
        "next": "D5",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 48, "statementKey": "D4",
          "speaker": 3,
          "next": "D5",
          "image": "../../../assets/mansour/mansour_panel_3.png",
          "speaker_image": "../../../assets/MS.png",
          "text": "Her committee work has not been on the department's most important committees, but it's been useful for each committee to have a woman.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "D5",
        "speaker": 0,
        "next": "",
        "mood-phrase": "",
        "mood": "",
        "statement": [
          {
            "id": 49,
            "statementKey": "D5a",
            "speaker": 0,
            "next": "D6a1",
            "image": "../../../assets/mansour/mansour_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "She has been on about the same number of committees as others. " +
            "Her local and national service appear fine. Service seems like the lowest priority for all of us. " +
            "I guess hers is ok.",
            "reference": [{
              "url": "",
              "desc": ""
            }]
          },
          {
            "id": 49,
            "statementKey": "D5b",
            "speaker": 0,
            "next": "Db1",
            "image": "../../../assets/mansour/mansour_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "She is too focused on only one service issue. I question whether she has made any impact regarding the environment for women.",
            "reference": [{
              "url": "",
              "desc": ""
            }]
          },
          {
            "id": 49,
            "statementKey": "D5c",
            "speaker": 0,
            "next": "D6c",
            "image": "../../../assets/mansour/mansour_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "Her service record is excellent. Working on behalf of underrepresented groups is a significant contribution to the field.",
            "reference": [{
              "url": "",
              "desc": ""
            }]
          },
          {
            "id": 49,
            "statementKey": "D5d",
            "speaker": 0,
            "next": "D6d1",
            "image": "../../../assets/mansour/mansour_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "Service seems like the lowest priority for all of us. I guess hers is ok.",
            "reference": [{
              "url": "",
              "desc": ""
            }]
          }
        ]
      },
      {
        "statementKey": "D6a1",
        "speaker": 3,
        "next": "D6a2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 50, "statementKey": "D6a1",
          "speaker": 3,
          "next": "D6a2",
          "image": "../../../assets/mansour/mansour_panel_3.png",
          "speaker_image": "../../../assets/MS.png",
          "text": "Actually, I think she has been on more university-level committees than others who come up for tenure.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "D6a2",
        "speaker": 1,
        "next": "",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 51, "statementKey": "D6a2",
          "speaker": 1,
          "next": "",
          "image": "../../../assets/mansour/mansour_panel_1.png",
          "speaker_image": "../../../assets/KS.png",
          "text": "Yes, she has done a better job than most in service, and has generally good teaching scores, " +
          "and she has also made significant national impact in her research. Her record justifies promotion and tenure.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "D6b2",
        "speaker": 3,
        "next": "",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 52, "statementKey": "D6b2",
          "speaker": 3,
          "next": "",
          "image": "../../../assets/mansour/mansour_panel_3.png",
          "speaker_image": "../../../assets/MS.png",
          "text": "I'm not sure if I do agree, but I don't have time to talk about it now because I have to teach. Kathryn, I guess we have to meet again before we come to a decision.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "D6c",
        "speaker": 1,
        "next": "",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 53, "statementKey": "D6c",
          "speaker": 1,
          "next": "",
          "image": "../../../assets/mansour/mansour_panel_1.png",
          "speaker_image": "../../../assets/KS.png",
          "text": "I think her service is very valuable, like her research and teaching. I see that the majority of us agree that she should be promoted and tenured.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "D6d1",
        "speaker": 2,
        "next": "D6d2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 54, "statementKey": "D6d1",
          "speaker": 2,
          "next": "D6d2",
          "image": "../../../assets/mansour/mansour_panel_2.png",
          "speaker_image": "../../../assets/JW.png",
          "text": "Doesn't it seem like everything is marginal?: mixed teaching scores, ambiguous service, and a research that one of the biggest names in the field thinks is imitative and overblown?",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "D6d2",
        "speaker": 3,
        "next": "D6d3",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 55, "statementKey": "D6d2",
          "speaker": 3,
          "next": "D6d3",
          "image": "../../../assets/mansour/mansour_panel_3.png",
          "speaker_image": "../../../assets/MS.png",
          "text": "I disagree with that summary. Kathryn, I think our review should reflect that we are not in accord.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "D6d3",
        "speaker": 1,
        "next": "",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 56, "statementKey": "D6d3",
          "speaker": 1,
          "next": "",
          "image": "../../../assets/mansour/mansour_panel_1.png",
          "speaker_image": "../../../assets/KS.png",
          "text": "Three of the four of us see Mansour's record as appropriate for promotion and tenure. I think our letter should be more positive than negative, even though it will accompany a split vote.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "Db1",
        "speaker": 2,
        "next": "D6b2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 57, "statementKey": "Db1",
          "speaker": 2,
          "next": "D6b2",
          "image": "../../../assets/mansour/mansour_panel_2.png",
          "speaker_image": "../../../assets/JW.png",
          "text": "I agree that her service record is marginal, like her teaching. And considering the controversy about her research, don't you both agree that we must turn down her early bid for promotion and tenure?",
          "reference": [{
            "url": "",
            "desc": "Evaluation discussions ought to carefully represent the candidate's achievements."
          }, {
            "url": "",
            "desc": "Park argues that \"women's work\" (service, teaching) in institutions is often devalued in comparison with research, which ought to be valued according to its quality as much as its quantity."
          }]
        }
        ]
      }
    ]
  },
  {
    "name": "Patty Shen",
    "id": 3,
    "conversation": [
      {
        "statementKey": "A1",
        "speaker": 1,
        "next": "B1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 1, "statementKey": "A1",
          "speaker": 1,
          "next": "B1",
          "image": "../../../assets/patty/patty_panel_1.png",
          "speaker_image": "../../../assets/GG.png",
          "text": "Patty Shen's case is unusual. She is one of the first faculty members to receive a year's leave " +
          "under the university's active service modified duties program. " +
          "I suggested she delay because of low productivity.",
          "reference": [{
            "url": "",
            "desc": "The chair of the unit has an obligation to convey relevant information concerning particular information relevant to candidate."
          }, {
            "url": "",
            "desc": "The PTAC report indicates that chairs and committees can incorporate independently confirmed facts. See Best Practices. Section 7.B."
          }]
        }
        ]
      },
      {
        "statementKey": "B1",
        "speaker": 1,
        "next": "B2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 2, "statementKey": "B1",
          "speaker": 1,
          "next": "B2",
          "image": "../../../assets/patty/patty_panel_1.png",
          "speaker_image": "../../../assets/GG.png",
          "text": "We'll consider Patty Shen's case first. We'll talk about the three general areas--research, teaching, and service. Let's start by considering research first.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "B2",
        "speaker": 2,
        "next": "B3",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 3, "statementKey": "B2",
          "speaker": 2,
          "next": "B3",
          "image": "../../../assets/patty/patty_panel_2.png",
          "speaker_image": "../../../assets/CW.png",
          "text": "She has a number of reasonable publications in good journals over six years. I guess we don't count pregnancy year, but shouldn't we count the next year?",
          "reference": [{
            "url": "",
            "desc": "Committee members need to calibrate productivity during the period of time on the tenure clock as opposed to chronological time."
          }, {
            "url": "",
            "desc": "Lee describes how courts resist intervening in the application of standards, while considering whether institutions have performed fair evaluations. "
          }]
        }
        ]
      },
      {
        "statementKey": "B3",
        "speaker": 3,
        "next": "B4",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 4, "statementKey": "B3",
          "speaker": 3,
          "next": "B4",
          "image": "../../../assets/patty/patty_panel_3.png",
          "speaker_image": "../../../assets/ST.png",
          "text": "I would say that we wouldn't expect much productivity in the active service modified duties year of leave, " +
          "but there should be more publications in the following year. So I'm unclear about the one-year delay.",
          "reference": [{
            "url": "",
            "desc": "Erratic productivity is difficult to discern from publication schedule alone and ought not to be inferred based on temporary delays."
          }, {
            "url": "",
            "desc": "Lindsay mentions that colleagues and administrators sometimes mistakenly link family responsibilities to perceptions of a faculty member's productivity."
          }]
        }
        ]
      },
      {
        "statementKey": "B4",
        "speaker": 1,
        "next": "B5",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 5, "statementKey": "B4",
          "speaker": 1,
          "next": "B5",
          "image": "../../../assets/patty/patty_panel_1.png",
          "speaker_image": "../../../assets/GG.png",
          "text": "I agree with Caroline that Shen has published high quality papers in good journals. The extra year does raise some questions, but I think there were lingering health problems.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "B5",
        "speaker": 2,
        "next": "B6",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 6, "statementKey": "B5",
          "speaker": 2,
          "next": "B6",
          "image": "../../../assets/patty/patty_panel_2.png",
          "speaker_image": "../../../assets/CW.png",
          "text": "George, how do you know that?",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "B6",
        "speaker": 1,
        "next": "B7",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 7, "statementKey": "B6",
          "speaker": 1,
          "next": "B7",
          "image": "../../../assets/patty/patty_panel_1.png",
          "speaker_image": "../../../assets/GG.png",
          "text": "I called the reviewer who was candid about Patty's situation, because she alluded to " +
          "medical issues in her letter. These appear legitimate.",
          "reference": [{
            "url": "",
            "desc": "Rumors ought to be confirmed."
          }]
        }
        ]
      },
      {
        "statementKey": "B7",
        "speaker": 3,
        "next": "B8",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 8, "statementKey": "B7",
          "speaker": 3,
          "next": "B8",
          "image": "../../../assets/patty/patty_panel_3.png",
          "speaker_image": "../../../assets/ST.png",
          "text": "I can't believe we didn't know she had medical problems. I'm glad you can explain that.",
          "reference": [{
            "url": "",
            "desc": "Family and medical problems may or may not be known to colleagues, members of evaluation committees, or external reviewers."
          }, {
            "url": "",
            "desc": "Menges and Exum state that \"who communicates with whom is greatly influenced by the campus and the disciplinary norms that have been established by senior academics.\" "
          }]
        }
        ]
      },
      {
        "statementKey": "B8",
        "speaker": 2,
        "next": "B9",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 9, "statementKey": "B8",
          "speaker": 2,
          "next": "B9",
          "image": "../../../assets/patty/patty_panel_2.png",
          "speaker_image": "../../../assets/CW.png",
          "text": "If she really had severe medical problems, why didn't she ask for another leave?",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "B9",
        "speaker": 1,
        "next": "B10",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 10, "statementKey": "B9",
          "speaker": 1,
          "next": "B10",
          "image": "../../../assets/patty/patty_panel_1.png",
          "speaker_image": "../../../assets/GG.png",
          "text": "Initially, Patty thought it was a minor problem, but it turned out to be more severe. " +
          "The evidence is that she was lined up to do this prestigious talk and had to cancel at the last minute.",
          "reference": [{
            "url": "",
            "desc": "Invited presentations are considered by many to be a significant indicator of research success."
          }, {
            "url": "",
            "desc": "Park indicates that research productivity is the single most important factor for evaluators. "
          }]
        }
        ]
      },
      {
        "statementKey": "B10",
        "speaker": 0,
        "next": "",
        "mood-phrase": "",
        "mood": "",
        "statement": [
          {
            "id": 11,
            "statementKey": "B10a",
            "speaker": 0,
            "next": "B11a1",
            "image": "../../../assets/patty/patty_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "Yes, she had an active services modified duty leave releasing her from teaching. But the additional year off is not documented, and we must consider her lack of productivity.",
            "reference": [{
              "url": "",
              "desc": "Options for childcare affect research productivity.Women are often assumed to be the primary caregiver."
            },
              {
                "url": "",
                "desc": "Fox's survey of GT faculty notes that women faculty are more likely to report being affected by childcare options."
              }, {
                "url": "",
                "desc": "See PTAC Report. Bias Report on Gender, which notes significance of Valian's schemas concerning gender roles."
              }]
          },
          {
            "id": 11,
            "statementKey": "B10b",
            "speaker": 0,
            "next": "B11b1",
            "image": "../../../assets/patty/patty_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "It's hard to discern how productive she'll be in the future now that she's a mother with additional responsibilities. Maybe she has been active lately just to get past the tenure hurdle?",
            "reference": [{
              "url": "",
              "desc": "Options for childcare affect research productivity.Women are often assumed to be the primary caregiver."
            },
              {
                "url": "",
                "desc": "Fox's survey of GT faculty notes that women faculty are more likely to report being affected by childcare options."
              }, {
                "url": "",
                "desc": "See PTAC Report. Bias Report on Gender, which notes significance of Valian's schemas concerning gender roles."
              }]
          },
          {
            "id": 11,
            "statementKey": "B10c",
            "speaker": 0,
            "next": "B11c1",
            "image": "../../../assets/patty/patty_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "She was active and productive before pregnancy and illness. After that, she got back to a productive trajectory, writing journal articles and grant proposals.",
            "reference": [{
              "url": "",
              "desc": "Options for childcare affect research productivity.Women are often assumed to be the primary caregiver."
            },
              {
                "url": "",
                "desc": "Fox's survey of GT faculty notes that women faculty are more likely to report being affected by childcare options."
              }, {
                "url": "",
                "desc": "See PTAC Report. Bias Report on Gender, which notes significance of Valian's schemas concerning gender roles."
              }]
          },
          {
            "id": 11,
            "statementKey": "B10d",
            "speaker": 0,
            "next": "B11d1",
            "image": "../../../assets/patty/patty_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "Patty's papers and grant proposals are well-received, and she is on the way to getting even more funding. She is on the right track.",
            "reference": [{
              "url": "",
              "desc": "Options for childcare affect research productivity.Women are often assumed to be the primary caregiver."
            },
              {
                "url": "",
                "desc": "Fox's survey of GT faculty notes that women faculty are more likely to report being affected by childcare options."
              }, {
                "url": "",
                "desc": "See PTAC Report. Bias Report on Gender, which notes significance of Valian's schemas concerning gender roles."
              }]
          }
        ]
      },
      {
        "statementKey": "B11a1",
        "speaker": 2,
        "next": "B11a2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 12, "statementKey": "B11a1",
          "speaker": 1,
          "next": "B11a2",
          "image": "../../../assets/patty/patty_panel_2.png",
          "speaker_image": "../../../assets/CW.png",
          "text": "I agree that her record is erratic. We know she got a lot of time and didn't produce much.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "B11a2",
        "speaker": 3,
        "next": "B11a3",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 13, "statementKey": "B11a2",
          "speaker": 3,
          "next": "B11a3",
          "image": "../../../assets/patty/patty_panel_3.png",
          "speaker_image": "../../../assets/ST.png",
          "text": "Well, her overall number of publications and their general quality seem in the range of what others do.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "B11a3",
        "speaker": 1,
        "next": "C1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 14, "statementKey": "B11a3",
          "speaker": 1,
          "next": "C1",
          "image": "../../../assets/patty/patty_panel_1.png",
          "speaker_image": "../../../assets/GG.png",
          "text": "I agree, but if only two of the four of us think her research records has met the standards established " +
          "by the university, then we'll have to indicate this disagreement in our letter.",
          "reference": [{
            "url": "",
            "desc": "The scope of the evaluation committee's judgment ought to be represented in their joint letter."
          }]
        }
        ]
      },
      {
        "statementKey": "B11b1",
        "speaker": 3,
        "next": "B11b2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 15, "statementKey": "B11b1",
          "speaker": 3,
          "next": "B11b2",
          "image": "../../../assets/patty/patty_panel_3.png",
          "speaker_image": "../../../assets/ST.png",
          "text": "Not everyone can crank out the same number of publications every year, given the time delays of some journals. " +
          "And, as a mother, I think it is possible to work after childbirth.",
          "reference": [{
            "url": "",
            "desc": "Assuming a standardized pattern of productivity can be an indication of bias."
          }, {
            "url": "",
            "desc": "Neumann and Finaly-Neumann consider how components of support and stress affect faculty differentially depending on discipline."
          }]
        }
        ]
      },
      {
        "statementKey": "B11b2",
        "speaker": 2,
        "next": "B11b3",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 16, "statementKey": "B11b2",
          "speaker": 2,
          "next": "B11b3",
          "image": "../../../assets/patty/patty_panel_2.png",
          "speaker_image": "../../../assets/CW.png",
          "text": "Susan, I'm not sure Patty will be as productive as you.",
          "reference": [{
            "url": "",
            "desc": "While faculty recognize the interdependence of personal motivation, environment, and productivity, there is not a clear cut formula to predict research success."
          }, {
            "url": "",
            "desc": "Olsen questions whether autonomy and intellectual engagement counterbalance some observed negative aspects of academic work."
          }]
        }
        ]
      },
      {
        "statementKey": "B11b3",
        "speaker": 1,
        "next": "C1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 17, "statementKey": "B11b3",
          "speaker": 1,
          "next": "C1",
          "image": "../../../assets/patty/patty_panel_1.png",
          "speaker_image": "../../../assets/GG.png",
          "text": "We're digressing, so let's summarize her research record as being adequate, despite certain medical issues. " +
          "Let's move on to talk about teaching.",
          "reference": [{
            "url": "",
            "desc": "Committee members ought to calibrate their assumptions concerning quality and quantity of research."
          }, {
            "url": "",
            "desc": "Tien and Blackburn \"argue that the importance of promotion varies among individuals.\""
          }]


        }]
      },
      {
        "statementKey": "B11c1",
        "speaker": 3,
        "next": "B11c2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 18, "statementKey": "B11c1",
          "speaker": 3,
          "next": "B11c2",
          "image": "../../../assets/patty/patty_panel_3.png",
          "speaker_image": "../../../assets/ST.png",
          "text": "Patty's research has been good and does appear to be back on track.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "B11c2",
        "speaker": 1,
        "next": "C1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 19, "statementKey": "B11c2",
          "speaker": 1,
          "next": "C1",
          "image": "../../../assets/patty/patty_panel_1.png",
          "speaker_image": "../../../assets/GG.png",
          "text": "I agree that her research productivity seems good. Let's consider her teaching.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "B11d1",
        "speaker": 3,
        "next": "B11d2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 20, "statementKey": "B11d1",
          "speaker": 3,
          "next": "B11d2",
          "image": "../../../assets/patty/patty_panel_3.png",
          "speaker_image": "../../../assets/ST.png",
          "text": "Yes, it looks like she has good prospects for getting more funding this year. And she has managed to support graduate students.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "B11d2",
        "speaker": 1,
        "next": "C1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 21, "statementKey": "B11d2",
          "speaker": 1,
          "next": "C1",
          "image": "../../../assets/patty/patty_panel_1.png",
          "speaker_image": "../../../assets/GG.png",
          "text": "All in all, her research appears to be very good now and likely to make a big impact. Let's go on to teaching.",
          "reference": [{
            "url": "",
            "desc": "Committee members should separately evaluate research, teaching, and service."
          }, {
            "url": "",
            "desc": "Linsky and Straus argue there is a weak correlation between research and teaching."
          }]
        }
        ]
      },
      {
        "statementKey": "C1",
        "speaker": 3,
        "next": "C2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 22, "statementKey": "C1",
          "speaker": 3,
          "next": "C2",
          "image": "../../../assets/patty/patty_panel_3.png",
          "speaker_image": "../../../assets/ST.png",
          "text": "All indications are that Patty has been a fine teacher and has done excellent work in the classroom overall.",
          "reference": [{
            "url": "",
            "desc": "Unit-level committees should include peer review reports of teaching effectiveness to supplement the candidate's teaching portfolio and scores from standardized instruments."
          }, {
            "url": "",
            "desc": "O'Hanlon and Mortensen point out that teaching evaluations assist faculty in improving and provide information for evaluators."
          }]
        }
        ]
      },
      {
        "statementKey": "C2",
        "speaker": 2,
        "next": "C3",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 23, "statementKey": "C2",
          "speaker": 2,
          "next": "C3",
          "image": "../../../assets/patty/patty_panel_2.png",
          "speaker_image": "../../../assets/CW.png",
          "text": "It looks like once she had a child, her teaching scores dipped. During that period her research and her " +
          "teaching both suffered.",
          "reference": [{
            "url": "",
            "desc": "Committee members should not assume that problems on one career phase will carry over to successive phases."
          }, {
            "url": "",
            "desc": "Clark and Corcoran study accumulative disadvantage constraining female faculty."
          }]
        }
        ]
      },
      {
        "statementKey": "C3",
        "speaker": 0,
        "next": "",
        "mood-phrase": "",
        "mood": "",
        "statement": [
          {
            "id": 24,
            "statementKey": "C3a",
            "speaker": 0,
            "next": "C4a1",
            "image": "../../../assets/patty/patty_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "Comments from students suggest that she's a good teacher and will continue to be so.",
            "reference": [{
              "url": "",
              "desc": "Student comments should be taken into account in the peer review of teaching.Committee members should consider a broad range of measures of teaching effectiveness.Observations of students should be included only if confirming documented data."
            }, {
              "url": "",
              "desc": "Glasman calls for the leadership of academic administrators in promoting equity in evaluation and faculty acceptance of the process "
            }, {
              "url": "",
              "desc": "Derry considers how some data from teaching evaluations can be elevated over others."
            }, {
              "url": "",
              "desc": "Canada and Pringle suggest that there might be a \"lack of explicitness about what constitutes classroom interaction.\" "
            }]
          },
          {
            "id": 24,
            "statementKey": "C3b",
            "speaker": 0,
            "next": "C4b",
            "image": "../../../assets/patty/patty_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "Since there are low scores, I'd say evidence is not definitive regarding her future performance.",
            "reference": [{
              "url": "",
              "desc": "Student comments should be taken into account in the peer review of teaching.Committee members should consider a broad range of measures of teaching effectiveness.Observations of students should be included only if confirming documented data."
            }, {
              "url": "",
              "desc": "Glasman calls for the leadership of academic administrators in promoting equity in evaluation and faculty acceptance of the process "
            }, {
              "url": "",
              "desc": "Derry considers how some data from teaching evaluations can be elevated over others."
            }, {
              "url": "",
              "desc": "Canada and Pringle suggest that there might be a \"lack of explicitness about what constitutes classroom interaction.\" "
            }]
          },
          {
            "id": 24,
            "statementKey": "C3c",
            "speaker": 0,
            "next": "C4c1",
            "image": "../../../assets/patty/patty_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "Teaching scores improved after her illness, but that could be a temporary gain.",
            "reference": [{
              "url": "",
              "desc": "Student comments should be taken into account in the peer review of teaching.Committee members should consider a broad range of measures of teaching effectiveness.Observations of students should be included only if confirming documented data."
            }, {
              "url": "",
              "desc": "Glasman calls for the leadership of academic administrators in promoting equity in evaluation and faculty acceptance of the process "
            }, {
              "url": "",
              "desc": "Derry considers how some data from teaching evaluations can be elevated over others."
            }, {
              "url": "",
              "desc": "Canada and Pringle suggest that there might be a \"lack of explicitness about what constitutes classroom interaction.\" "
            }]
          },
          {
            "id": 24,
            "statementKey": "C3d",
            "speaker": 0,
            "next": "D1",
            "image": "../../../assets/patty/patty_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "Because our labs are close, I hear Patty's students. They seem very impressed with her attention.",
            "reference": [{
              "url": "",
              "desc": "Student comments should be taken into account in the peer review of teaching.Committee members should consider a broad range of measures of teaching effectiveness.Observations of students should be included only if confirming documented data."
            }, {
              "url": "",
              "desc": "Glasman calls for the leadership of academic administrators in promoting equity in evaluation and faculty acceptance of the process "
            }, {
              "url": "",
              "desc": "Derry considers how some data from teaching evaluations can be elevated over others."
            }, {
              "url": "",
              "desc": "Canada and Pringle suggest that there might be a \"lack of explicitness about what constitutes classroom interaction.\" "
            }]
          }
        ]
      },
      {
        "statementKey": "C4a1",
        "speaker": 3,
        "next": "C4a2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 25, "statementKey": "C4a1",
          "speaker": 3,
          "next": "C4a2",
          "image": "../../../assets/patty/patty_panel_3.png",
          "speaker_image": "../../../assets/ST.png",
          "text": "Her teaching scores are above the department average. As an observer, I praised her syllabus and class exercises. Excellent student commendations are included in the package for her teaching award.",
          "reference": [{
            "url": "",
            "desc": "Perceptions of good teaching might incorporate disciplinary, cultural, or personal bias."
          }, {
            "url": "",
            "desc": "Goodwin and Stevens investigate the similarities and differences of male and female faculty concerning \"good\" teaching."
          }]
        }
        ]
      },
      {
        "statementKey": "C4a2",
        "speaker": 1,
        "next": "D1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 26, "statementKey": "C4a2",
          "speaker": 1,
          "next": "D1",
          "image": "../../../assets/patty/patty_panel_1.png",
          "speaker_image": "../../../assets/GG.png",
          "text": "Her teaching should be noted as good. What do you think of her service?",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "C4b",
        "speaker": 1,
        "next": "D1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 27, "statementKey": "C4b",
          "speaker": 1,
          "next": "D1",
          "image": "../../../assets/patty/patty_panel_1.png",
          "speaker_image": "../../../assets/GG.png",
          "text": "We're forecasting. She has demonstrated good teaching in the past, and right now her evaluations are fine. My prediction is she will continue to be a solid teacher. It's time to talk about service.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "C4c1",
        "speaker": 3,
        "next": "C4c2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 28, "statementKey": "C4c1",
          "speaker": 3,
          "next": "C4c2",
          "image": "../../../assets/patty/patty_panel_3.png",
          "speaker_image": "../../../assets/ST.png",
          "text": "Since she was officially given a changed schedule because of pregnancy and illness, we should not assume she had a lot of extra time.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "C4c2",
        "speaker": 1,
        "next": "D1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 29, "statementKey": "C4c2",
          "speaker": 1,
          "next": "D1",
          "image": "../../../assets/patty/patty_panel_1.png",
          "speaker_image": "../../../assets/GG.png",
          "text": "Yes, we should not diminish the teaching portfolio she has presented, which is right in " +
          "line with our general standard. Let's consider service now.",
          "reference": [{
            "url": "",
            "desc": "A candidate's teaching record ought to be considered in relation to the unit's profile of good teaching."
          }, {
            "url": "",
            "desc": "Koon and Murray propose that \"measures of student motivation as well as student learning of subject matter, should be used to explain between-teacher variation\" in student ratings."
          }]
        }
        ]
      },
      {
        "statementKey": "D1",
        "speaker": 2,
        "next": "D2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 30, "statementKey": "D1",
          "speaker": 2,
          "next": "D2",
          "image": "../../../assets/patty/patty_panel_2.png",
          "speaker_image": "../../../assets/CW.png",
          "text": "Patty contributed good service earlier, although after her illness she has not continued because of family " +
          "and health issues. It might be understandable, but is it acceptable if others have to do more?",
          "reference": [{
            "url": "",
            "desc": "Perceptions of adequate service are influenced by unit, disciplinary, and institutional contexts."
          }, {
            "url": "",
            "desc": "Park notes that committee assignments and faculty workload on committees can vary significantly."
          }]
        }
        ]
      },
      {
        "statementKey": "D2",
        "speaker": 3,
        "next": "D3",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 31, "statementKey": "D2",
          "speaker": 3,
          "next": "D3",
          "image": "../../../assets/patty/patty_panel_3.png",
          "speaker_image": "../../../assets/ST.png",
          "text": "I think that each of us has different issues at different phases that affect choices of service. She's still working with the center she helped develop and that is useful service.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "D3",
        "speaker": 0,
        "next": "",
        "mood-phrase": "",
        "mood": "",
        "statement": [
          {
            "id": 32,
            "statementKey": "D3a",
            "speaker": 0,
            "next": "D4a",
            "image": "../../../assets/patty/patty_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "Just how important is service anyway? She's certainly made valued contributions.",
            "reference": [{
              "url": "",
              "desc": ""
            }]
          },
          {
            "id": 32,
            "statementKey": "D3b",
            "speaker": 0,
            "next": "D4b",
            "image": "../../../assets/patty/patty_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "I think everyone who is part of the community ought to do something significant. Her record could be better.",
            "reference": [{
              "url": "",
              "desc": ""
            }]
          },
          {
            "id": 32,
            "statementKey": "D3c",
            "speaker": 0,
            "next": "E1",
            "image": "../../../assets/patty/patty_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "Her reduction in service imposed costs on everyone else.",
            "reference": [{
              "url": "",
              "desc": ""
            }]
          },
          {
            "id": 32,
            "statementKey": "D3d",
            "speaker": 0,
            "next": "E1",
            "image": "../../../assets/patty/patty_panel.png",
            "speaker_image": "../../../assets/transcript-player-profile.png",
            "text": "Her service is acceptable, considering the period of leave and the illness.",
            "reference": [{
              "url": "",
              "desc": ""
            }]
          }
        ]
      },
      {
        "statementKey": "D4a",
        "speaker": 3,
        "next": "E1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 33, "statementKey": "D4a",
          "speaker": 3,
          "next": "E1",
          "image": "../../../assets/patty/patty_panel_3.png",
          "speaker_image": "../../../assets/ST.png",
          "text": "I agree that Patty's service is better than average.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "D4b",
        "speaker": 2,
        "next": "E1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 34, "statementKey": "D4b",
          "speaker": 2,
          "next": "E1",
          "image": "../../../assets/patty/patty_panel_2.png",
          "speaker_image": "../../../assets/CW.png",
          "text": "It's true that she could have done more.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "E1",
        "speaker": 1,
        "next": "E2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 35, "statementKey": "E1",
          "speaker": 1,
          "next": "E2",
          "image": "../../../assets/patty/patty_panel_1.png",
          "speaker_image": "../../../assets/GG.png",
          "text": "Let's move forward. Patty's research is reasonable, her teaching is acceptable, and her service is fine. But is this \"middle of the road\" profile enough for promotion? Do the external letters prove her impact?",
          "reference": [{
            "url": "",
            "desc": "External letters provide a significant frame of reference that should be incorporated by committee members into their deliberations."
          }, {
            "url": "",
            "desc": "Park argues that maintaining a too narrow filter based on research excellence can undermine attempts to build an institutional community."
          }]
        }
        ]
      },
      {
        "statementKey": "E2",
        "speaker": 2,
        "next": "E3",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 36, "statementKey": "E2",
          "speaker": 2,
          "next": "E3",
          "image": "../../../assets/patty/patty_panel_2.png",
          "speaker_image": "../../../assets/CW.png",
          "text": "The letters go along with that description of her work as average. All of them indicate that she is a solid researcher, but there's nothing earth-shattering noted.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "E3",
        "speaker": 3,
        "next": "E4",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 37, "statementKey": "E3",
          "speaker": 3,
          "next": "E4",
          "image": "../../../assets/patty/patty_panel_3.png",
          "speaker_image": "../../../assets/ST.png",
          "text": "Caroline, I think that you forgot to mention that one reviewer had nominated a paper of Patty's for a prize, and another letter praised the clarity and efficiency of her publications.",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      },
      {
        "statementKey": "E4",
        "speaker": 1,
        "next": "",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "id": 38, "statementKey": "E4",
          "speaker": 1,
          "next": "",
          "image": "../../../assets/patty/patty_panel_1.png",
          "speaker_image": "../../../assets/GG.png",
          "text": "Now that I'm looking at the letters again, I see that each reviewer does volunteer that Patty's achievements are worthy of promotion and tenure at his or her research university. I assume we agree?",
          "reference": [{
            "url": "",
            "desc": ""
          }]
        }
        ]
      }]


  }];
