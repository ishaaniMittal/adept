import {SMDialogue} from "./sm-dialogue";

export const SMDIALOGUES:SMDialogue[] = [
  {
    "name": "Jamie Perez",
    "id": 1,
    "conversation": [
      {
        "statementKey": "A1",
        "speaker":1,
        "next": "A2",
        "mood-phrase": "said",
        "mood": "talk",
        "statement": [{
          "statementKey": "1",
          "speaker":1,
          "next": "B2",
          "text": "Let's start with Perez. Remember, what we say is confidential."
        }
        ]
        },
      {
        "statementKey": "A2",
        "speaker":3,
        "next": "A3",
        "mood-phrase": "said",
        "mood": "talk",
        "statement": [{
          "statementKey": "A2",
          "speaker":3,
          "next": "A3",
          "text": "This will be an interesting case."
        }
        ]
        },
      {
        "statementKey": "A3",
        "speaker":2,
        "next": "B1",
        "mood-phrase": "said",
        "mood": "talk",
        "statement": [{
          "statementKey": "A3",
          "speaker":2,
          "next": "B1",
          "text": "Let's just go through this and see."
        }
        ]
        },
      {
        "statementKey": "B1",
        "speaker":1,
        "next": "B2",
        "mood-phrase": "said",
        "mood": "talk",
        "statement": [{
          "statementKey": "B1",
          "speaker":1,
          "next": "B2",
          "text": "Let's start with scholarship. All his current grants are interdisciplinary."
        }
        ]

      },
      {
        "statementKey": "B2",
        "speaker":2,
        "next": "B3",
        "mood-phrase": "said",
        "mood": "talk",
        "statement": [{
          "statementKey": "B2",
          "speaker":2,
          "next": "B3",
          "text": "My main concern about the grants is that he's spending most of the time in chemistry."
        }
        ]
      },
      {
        "statementKey": "B3",
        "speaker":1,
        "next": "B4",
        "mood-phrase": "said",
        "mood": "talk",
        "statement": [{
          "statementKey": "B3",
          "speaker":1,
          "next": "B4",
          "text": "Gentlemen, the real issue is that Perez hasn't a clue about what our primary thrusts in materials are. He's riding the coattails of chemistry with interdisciplinary funding from NSF and I'm not sure how hard that is to get. He isn't project director on any grants listed on the c.v."
        }
        ]
      },
      {
        "statementKey": "B4",
        "speaker":3,
        "next": "B5",
        "mood-phrase": "said emphatically",
        "mood": "emphatic",
        "statement": [{
          "statementKey": "B4",
          "speaker":3,
          "next": "B5",
          "text": "You shouldn't discount big grants because they are interdisciplinary. Look,he's published in highly respectable journals and has six graduate students, including four PhD students. There must be some technical 'meat' in his work."
        }
        ]
      },
      {
        "statementKey": "B5",
        "speaker":1,
        "next": "B6",
        "mood-phrase": "said emphatically",
        "mood": "emphatic",
        "statement": [{
          "statementKey": "B5",
          "speaker":1,
          "next": "B6",
          "text": "He has raised funding, but not for our unit. This is important now because we're coming up for outside evaluation, and we need faculty to bring major funding to us."
        }
        ]
      },
      {
        "statementKey": "B6",
        "speaker":0,
        "next": "",
        "mood-phrase": "",
        "mood": "",
        "statement": [
          {
            "statementKey": "B6a",
            "speaker":0,
            "next": "B7a",
            "text": "He's been told several times to get grants in core areas. I see too little substance in materials science-oriented research."
          },
          {
            "statementKey": "B6b",
            "speaker":0,
            "next": "B7b",
            "text": "I choose to remain silent at this point in the conversation."
          },
          {
            "statementKey": "B6c",
            "speaker":0,
            "next": "B7c",
            "text": "Forming bridges to other disciplines is as important as bringing money into our department. The number of interdisciplinary grants confirms the value of his research."
          },
          {
            "statementKey": "B6d",
            "speaker":0,
            "next": "B7d1",
            "text": "Are we discussing scholarship or funding?"
          }
        ]
      },
      {
        "statementKey": "B7a",
        "speaker":1,
        "next": "B7a2",
        "mood-phrase": "",
        "mood": "miffed",
        "statement": [{
          "statementKey": "B7a",
          "speaker":1,
          "next": "B7a2",
          "text": "He's publishing in chemistry journals more than engineering journals. I am the leading researcher in the same area of engineering he worked on in his graduate and post doc years. But I just don't see a prospect for collaborating with him now."
        }
        ]
      },
      {
        "statementKey": "B7a2",
        "speaker":2,
        "next": "B7a3",
        "mood-phrase": ", smirking, said",
        "mood": "smirk",
        "statement": [{
          "statementKey": "B7a2",
          "speaker":2,
          "next": "B7a3",
          "text": "Our school chair agrees that Perez should collaborate with us instead of chemistry faculty. Should we advise him to join chemistry?"
        }
        ]
      },
      {
        "statementKey": "B7a3",
        "speaker":1,
        "next": "C1",
        "mood-phrase": ", self-satisfied, said",
        "mood": "self-satisfied",
        "statement": [{
          "statementKey": "B7a3",
          "speaker":1,
          "next": "C1",
          "text": "We should write this up to convey substandard research performance."
        }
        ]

      },
      {
        "statementKey": "B7b",
        "speaker":1,
        "next": "C1",
        "mood-phrase": "asserted",
        "mood": "assertively",
        "statement": [{
          "statementKey": "B7b",
          "speaker":1,
          "next": "C1",
          "text": "Kulver, he's in a niche area that might be attractive right now, but it's not one that a lot of us in materials will soon care about. This part of our letter should say his " +
          "record is not persuasive regarding his long-term funding potential. Agreed?"
        }
        ]

      },
      {
        "statementKey": "B7c",
        "speaker":2,
        "next": "C1",
        "mood-phrase": "thoughtfully said",
        "mood": "thoughtfully",
        "statement": [{
          "statementKey": "B7c",
          "speaker":2,
          "next": "C1",
          "text": "I did notice new requests for proposals at NSF and DoD agencies that emphasize " +
          "interdisciplinary connections; I have been thinking about this myself."
        }
        ]

      },
      {
        "statementKey": "B7d1",
        "speaker":1,
        "next": "B7d2",
        "mood-phrase": ", perplexed, said",
        "mood": "perplexed",
        "statement": [{
          "statementKey": "B7d1",
          "speaker":1,
          "next": "B7d2",
          "text": "It's just hard for me to see how to decouple scholarship and funding, " +
          "how can you be a scholar in materials engineering without funding?"
        }
        ]
      },
      {
        "statementKey": "B7d2",
        "speaker":3,
        "next": "C1",
        "mood-phrase": "enthusiastically said",
        "mood": "enthusiastic",
        "statement": [{
          "statementKey": "B7d2",
          "speaker":3,
          "next": "C1",
          "text": "Perez's joint NSF grant and industry funding together are impressive, given that this is a hot new area. " +
          "The collaboration outside the school and college is good because it leads to increased opportunities and " +
          "leveraging of new monies to support materials engineering-related work. Perez is mining a vein that has " +
          "incredible potential, one that can pay off for many of us, and our letter should reward his effort."
        }
        ]
      },
      {
        "statementKey": "C1",
        "speaker":1,
        "next": "C2",
        "mood-phrase": "said",
        "mood": "talk",
        "statement": [{
          "statementKey": "C1",
          "speaker":1,
          "next": "C2",
          "text": "Let's look at teaching now."
        }
        ]

      },
      {
        "statementKey": "C2",
        "speaker":3,
        "next": "C3",
        "mood-phrase": "said",
        "mood": "talk",
        "statement": [{
          "statementKey": "C2",
          "speaker":3,
          "next": "C3",
          "text": "His teaching scores are pretty good. Look at these evaluations for that intro course. " +
          "He did as well as any other assistant professor and better than most.  " +
          "I notice that he team teaches a course on surface chemistry with several other faculty, " +
          "so it is very hard to judge the quality of his instruction."
        }
        ]

      },
      {
        "statementKey": "C3",
        "speaker":2,
        "next": "C4",
        "mood-phrase": "said mockingly",
        "mood": "talk",
        "statement": [{
          "statementKey": "C3",
          "speaker":2,
          "next": "C4",
          "text": "Who knows how effective he really was until we get those intro students in major courses? " +
          "Does Perez have high numbers because he caters to students'sense of humor?  " +
          "I've heard he shows clips from the web at the beginning of each lecture, " +
          "some of them not very related to his lecture material. Sometimes students mistake that for good teaching."
        }
        ]

      },
      {
        "statementKey": "C4",
        "speaker":1,
        "next": "C5",
        "mood-phrase": "said seriously",
        "mood": "serious",
        "statement": [{
          "statementKey": "C4",
          "speaker":1,
          "next": "C5",
          "text": "Yes, if he is concerned about teaching, he ought to encourage retention of majors and appropriate pedagogies." +
          " I don't see evidence supporting his ability to attract students in materials. Who knows, as Jason says, " +
          "what's really going on in the classroom."
        }
        ]
      },
      {
        "statementKey": "C5",
        "speaker":3,
        "next": "C6",
        "mood-phrase": "asked",
        "mood": "question",
        "statement": [{
          "statementKey": "C5",
          "speaker":3,
          "next": "C6",
          "text": "Well, are these teaching standards--retention of majors and appropriate pedagogies--that we will " +
          "invoke for everyone?"
        }
        ]

      },
      {
        "statementKey": "C6",
        "speaker":1,
        "next": "C7",
        "mood-phrase": "exclaimed",
        "mood": "exclaim",
        "statement": [{
          "statementKey": "C6",
          "speaker":1,
          "next": "C7",
          "text": "We should. Look at Jones' case: now there's someone who lays out a terrific teaching portfolio. " +
          "Why can't Perez get help so he can get results like Jones?"
        }
        ]

      },
      {
        "statementKey": "C7",
        "speaker":0,
        "next": "",
        "mood-phrase": "",
        "mood": "",
        "statement": [
          {
            "statementKey": "C7a",
            "speaker":0,
            "next": "C8a",
            "text": "But we shouldn't directly compare cases. Each case is unique and needs to be seen for its own merits, if we could just find some in Perez's."
          },
          {
            "statementKey": "C7b",
            "speaker":0,
            "next": "C8b",
            "text": "Yes, Jones definitely deserves his teaching awards."
          },
          {
            "statementKey": "C7c",
            "speaker":0,
            "next": "C8c",
            "text": "Al, you don't like Perez because he disagrees with you about team teaching. You think every man should take of himself about teaching, while he argues for the value of faculty team-teaching intro courses. Based on the summaries of senior exit interviews provided in the dossier, Perez appears to be a gifted teacher."
          },
          {
            "statementKey": "C7d",
            "speaker":0,
            "next": "C8d",
            "text": "But we shouldn't directly compare cases.  Each case is unique and with its own merits.  Perez has documented effective teaching by including the exit interviews, evaluation scores, and student letters supporting an external teaching award. [best practices document]"
          }
        ]
      },
      {
        "statementKey": "C8a",
        "speaker":1,
        "next": "D1",
        "mood-phrase": "said seriously",
        "mood": "serious",
        "statement": [{
          "statementKey": "C8a",
          "speaker":1,
          "next": "D1",
          "text": "I see three of us agree that Perez's teaching record is difficult to assess, and perhaps marginal."
        }
        ]

      },
      {
        "statementKey": "C8b",
        "speaker":1,
        "next": "D1",
        "mood-phrase": "said emphatically",
        "mood": "emphatic",
        "statement": [{
          "statementKey": "C8b",
          "speaker":1,
          "next": "D1",
          "text": "Okay, so we'll give Jones great marks in the teaching department and barely pass Perez."
        }
        ]
      },
      {
        "statementKey": "C8c",
        "speaker":1,
        "next": "D1",
        "mood-phrase": ", somewhat annoyed, said",
        "mood": "annoyed",
        "statement": [{
          "statementKey": "C8c",
          "speaker":1,
          "next": "D1",
          "text": "Team-teaching is too cumbersome to work in the intro course, " +
          "and I worry about superficial treatment at that stage. But if you all agree that Perez " +
          "deserves high marks for teaching. I'll go along with noting his high teaching evaluation scores."
        }
        ]

      },
      {
        "statementKey": "C8d",
        "speaker":1,
        "next": "D1",
        "mood-phrase": ", acquiescing, said",
        "mood": "acquiescing",
        "statement": [{
          "statementKey": "C8d",
          "speaker":1,
          "next": "D1",
          "text": "Okay, I guess that if we really look at the documentation provided and not bring our own bias regarding team teaching into play, Perez does a reasonable job of teaching"
        }
        ]
      },
      {
        "statementKey": "D1",
        "speaker":2,
        "next": "D2",
        "mood-phrase": ", smirking, said",
        "mood": "smirk",
        "statement": [{
          "statementKey": "D1",
          "speaker":2,
          "next": "D2",
          "text": "I feel kind of silly bringing this up, but Perez seems to be adhering to that old adage " +
          "'birds of a feather'-you know? Look at who's on his grant team: Lopez, Johnson, Rodriguez, Bahouali"
        }
        ]

      },
      {
        "statementKey": "D2",
        "speaker":1,
        "next": "D3",
        "mood-phrase": ", somewhat annoyed, said",
        "mood": "annoyed",
        "statement": [{
          "statementKey": "D2",
          "speaker":1,
          "next": "D3",
          "text": "I see that too. In fact, the engineering education piece Perez wrote focuses on education of minorities." +
          " I know there are a lot of programs coming out of Washington to support this kind of thing, " +
          "but I don't see much evidence that he has tried to attract funding along those lines.  " +
          " But that's probably fine, as you often can't do that at the expense of being a first rate researcher."
        }
        ]

      },
      {
        "statementKey": "D3",
        "speaker":2,
        "next": "D4",
        "mood-phrase": "exclaimed",
        "mood": "exclaim",
        "statement": [{
          "statementKey": "D3",
          "speaker":2,
          "next": "D4",
          "text": "Yeah, research is based purely on merit. You've got to deliver the goods before you get any " +
          "respect. Bring in the money, attract attention from students. We need more people who make technical " +
          "contributions rather than write scholarly articles about lack of opportunities."
        }
        ]

      },
      {
        "statementKey": "D4",
        "speaker":3,
        "next": "D5",
        "mood-phrase": "angrily said",
        "mood": "angry",
        "statement": [{
          "statementKey": "D4",
          "speaker":3,
          "next": "D5",
          "text": "I think there are some things being said here that are pushing the boundaries of appropriate conduct."
        }
        ]

      },
      {
        "statementKey": "D5",
        "speaker":0,
        "next": "",
        "mood-phrase": "",
        "mood": "",
        "statement": [
          {
            "statementKey": "D5a",
            "speaker":0,
            "next": "D6a1",
            "text": "In my view, the education piece should be irrelevant to our judgment of his engineering scholarship because it is an opinion and not research."
          },
          {
            "statementKey": "D5b",
            "speaker":0,
            "next": "D6b1",
            "text": "I don't think anything is out of bounds in a P and T discussion, this is an entirely confidential matter.  What is said here stays inside these walls."
          },
          {
            "statementKey": "D5c",
            "speaker":0,
            "next": "D6c1",
            "text": "I agree with Karen that consideration of ethnicity or minority issues has no place in this discussion or in our dealings with Perez. He ought be commended for taking on the service of minority recruitment into engineering and excelling in everything else he does."
          },
          {
            "statementKey": "D5d",
            "speaker":0,
            "next": "D6d1",
            "text": "Karen is right. The engineering education essay is a relevant piece of scholarship as it concerns an innovative curriculum in light of ABET 2000.  It appears in a reputable journal and provides some insight into the kind of balance in Perez's repertoire."
          }
        ]
      },
      {
        "statementKey": "D6a1",
        "speaker":1,
        "next": "D6a2",
        "mood-phrase": "said confidently",
        "mood": "confident",
        "statement": [{
          "statementKey": "D6a1",
          "speaker":1,
          "next": "D6a2",
          "text": "So we are all agreed that Perez hasn't established the right kind of profile in research, teaching, or service for our department and our university?"
        }
        ]
      },
      {
        "statementKey": "D6a2",
        "speaker":3,
        "next": "E1a",
        "mood-phrase": "said emphatically",
        "mood": "emphatic",
        "statement": [{
          "statementKey": "D6a2",
          "speaker":3,
          "next": "E1a",
          "text": "I disagree and ask that everyone review the scholarship and external letters of support before our next meeting."
        }
        ]
      },
      {
        "statementKey": "D6b1",
        "speaker":1,
        "next": "D6b2",
        "mood-phrase": "said passively",
        "mood": "passive",
        "statement": [{
          "statementKey": "D6b1",
          "speaker":1,
          "next": "D6b2",
          "text": "Yes, being on the same page with our goals is an important element, " +
          "and maybe he just doesn't fit with us in terms of research, teaching, or service."
        }
        ]

      },
      {
        "statementKey": "D6b2",
        "speaker":3,
        "next": "E1a",
        "mood-phrase": "said emphatically",
        "mood": "emphatic",
        "statement": [{
          "statementKey": "D6b2",
          "speaker":3,
          "next": "E1a",
          "text": "We should take into account that our discipline is becoming more interdisciplinary and that " +
          "Perez's work demonstrates that evolution."
        }
        ]
      },
      {
        "statementKey": "D6c1",
        "speaker":1,
        "next": "D6c2",
        "mood-phrase": ", somewhat annoyed, said",
        "mood": "annoyed",
        "statement": [{
          "statementKey": "D6c1",
          "speaker":1,
          "next": "D6c2",
          "text": "All I'm saying is that stuff can't make up for other areas in which his contributions are lacking."
        }
        ]

      },
      {
        "statementKey": "D6c2",
        "speaker":3,
        "next": "E1b",
        "mood-phrase": "said confidently",
        "mood": "confident",
        "statement": [{
          "statementKey": "D6c2",
          "speaker":3,
          "next": "E1b",
          "text": "Some of us think that his contributions in research and teaching are fine and that" +
          " his interest in minority education points to future contributions to departmental recruiting."
        }
        ]

      },
      {
        "statementKey": "D6d1",
        "speaker":1,
        "next": "D6d2",
        "mood-phrase": ", confused, said",
        "mood": "confused",
        "statement": [{
          "statementKey": "D6d1",
          "speaker":1,
          "next": "D6d2",
          "text": "I hadn't noticed it had anything to do with ABET2000."
        }
        ]

      },
      {
        "statementKey": "D6d2",
        "speaker":2,
        "next": "E1c",
        "mood-phrase": ", smirking, said",
        "mood": "smirk",
        "statement": [{
          "statementKey": "D6d2",
          "speaker":2,
          "next": "E1c",
          "text": "The end of Perez's essay notes a connection to ABET2000, and the essay was praised by " +
          "two external reviewers as a significant contribution to issues of underrepresentation."
        }
        ]
      },
      {
        "statementKey": "E1a",
        "speaker":1,
        "next": "",
        "mood-phrase": "said arrogantly",
        "mood": "arrogant",
        "statement": [{
          "statementKey": "E1a",
          "speaker":1,
          "next": "",
          "text": "Research is substandard.  Teaching is barely adequate. And there's no real service."
        }
        ]

      },
      {
        "statementKey": "E1b",
        "speaker":1,
        "next": "",
        "mood-phrase": ", somewhat annoyed, said",
        "mood": "annoyed",
        "statement": [{
          "statementKey": "E1b",
          "speaker":1,
          "next": "",
          "text": "Perez's research funding meets expectations, and his teaching is okay, " +
          "but he hasn't seemed to have found his niche yet in terms of service.  That's probably ok at his stage."
        }
        ]
      },
      {
        "statementKey": "E1c",
        "speaker":3,
        "next": "",
        "mood-phrase": "said seriously",
        "mood": "serious",
        "statement": [{
          "statementKey": "E1c",
          "speaker":3,
          "next": "",
          "text": "Well, it seems to me that the majority of us agree that Perez is an outstanding " +
          "researcher and teacher who has contributed to service in his efforts to improve minority recruitment." +
          " Al, you seem to be the outlier."
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
        "speaker":1,
        "next": "A2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "A1",
          "speaker":1,
          "next": "A2",
          "text": "Let's now consider Mansour's case. Keep in mind this is an early promotion and tenure case."
        }
        ]
      },
      {
        "statementKey": "A2",
        "speaker":3,
        "next": "A3",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "A2",
          "speaker":3,
          "next": "A3",
          "text": "Is her case different because of the time?"
        }
        ]

      },
      {
        "statementKey": "A3",
        "speaker":1,
        "next": "B1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "A3",
          "speaker":1,
          "next": "B1",
          "text": "Since I've been here, we've only had one early case. To be promoted early, the candidate has to be extraordinary in all criteria. Let's start with research."
        }
        ]
      },
      {
        "statementKey": "B1",
        "speaker":2,
        "next": "B2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B1",
          "speaker":2,
          "next": "B2",
          "text": "I agree that extraordinary levels are expected and Mansour's work qualifies."
        }
        ]

      },
      {
        "statementKey": "B2",
        "speaker":3,
        "next": "B3",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B2",
          "speaker":3,
          "next": "B3",
          "text": "From my vantage point, Samia is a good scholar. Look at this award for her research."
        }
        ]

      },
      {
        "statementKey": "B3",
        "speaker":2,
        "next": "B4",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B3",
          "speaker":2,
          "next": "B4",
          "text": "It's an impressive award, but let's look at the sum total of research."
        }
        ]
      },
      {
        "statementKey": "B4",
        "speaker":1,
        "next": "B5",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B4",
          "speaker":1,
          "next": "B5",
          "text": "She has more publications in top-ranked journals than any other untenured biochemistry faculty in our unit."

        }
        ]
      },
      {
        "statementKey": "B5",
        "speaker":3,
        "next": "B6",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B5",
          "speaker":3,
          "next": "B6",
          "text": "She has significant quantity, but we need to examine the quality. Does her best paper, the prizewinner, represent a significant contribution to the field?"
        }
        ]
      },
      {
        "statementKey": "B6",
        "speaker":2,
        "next": "B7",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B6",
          "speaker":2,
          "next": "B7",
          "text": "Are you suggesting that the paper isn't as good as most reviewers have noted?"
        }
        ]
      },
      {
        "statementKey": "B7",
        "speaker":3,
        "next": "B8",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B7",
          "speaker":3,
          "next": "B8",
          "text": "Let's look at the second reviewer's comments. He doesn't think it contributes much to the field."
        }
        ]
      },
      {
        "statementKey": "B8",
        "speaker":1,
        "next": "B9",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B8",
          "speaker":1,
          "next": "B9",
          "text": "All the other reviews are positive. I wonder if the negative reviewer is impartial, " +
          "given the tone of the letter and his focusing on that one paper. I heard this guy is known for " +
          "writing negative letters."
        }
        ]
      },
      {
        "statementKey": "B9",
        "speaker":3,
        "next": "B10",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B9",
          "speaker":3,
          "next": "B10",
          "text": "His review does seem like it's a response to only one of Samia's papers, but the most" +
          " important consideration ought to concern the range of research products."
        }
        ]
      },
      {
        "statementKey": "B10",
        "speaker":2,
        "next": "B11",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B10",
          "speaker":2,
          "next": "B11",
          "text": "I agree all reviews have to be weighed carefully. The most positive one spends more time " +
          "considering Mansour's service to the profession rather than discussing her research. " +
          "Do we really care that she does so much work for that disciplinary organization?"
        }
        ]
      },
      {
        "statementKey": "B11",
        "speaker":1,
        "next": "B12",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B11",
          "speaker":1,
          "next": "B12",
          "text": "Good service alone will not earn promotion and tenure. An early candidate has to " +
          "demonstrate a more remarkable profile in research."
        }
        ]
      },
      {
        "statementKey": "B12",
        "speaker":2,
        "next": "B13",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B12",
          "speaker":2,
          "next": "B13",
          "text": "The letters don't demonstrate that profile of excellent research. " +
          "The most positive one is from another former student of her mentor. " +
          "Other letters praise the research without understanding it. The negative reviewer " +
          "is the only one who seems to know the area."
        }
        ]
      },
      {
        "statementKey": "B13",
        "speaker":3,
        "next": "B14",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B13",
          "speaker":3,
          "next": "B14",
          "text": "How do you know the positive reviewer has a personal connection?"
        }
        ]
      },
      {
        "statementKey": "B14",
        "speaker":2,
        "next": "B15",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B14",
          "speaker":2,
          "next": "B15",
          "text": "I sat on an NSF panel with someone who knew Samia from graduate school. " +
          "I believe this letter is from her."
        }
        ]
      },
      {
        "statementKey": "B15",
        "speaker":0,
        "next": "",
        "mood-phrase": "",
        "mood": "",
        "statement": [
          {
            "statementKey": "B15a",
            "speaker":0,
            "next": "B16a1",
            "text": "I agree that all letters count and that the negative one is salient."
          },
          {
            "statementKey": "B15b",
            "speaker":0,
            "next": "B16b1",
            "text": "I think the negative reviewer is too negative about that one paper and ignores the value of the prize given to it. I don't see his argument as ultimately persuasive since the other letters demonstrate genuine and significant achievement."
          },
          {
            "statementKey": "B15c",
            "speaker":0,
            "next": "B16c1",
            "text": "I think the positive one is too positive. It smacks of cronyism. The rest of the letters are more realistic and persuasive."
          },
          {
            "statementKey": "B15d",
            "speaker":0,
            "next": "B16d1",
            "text": "I don't care what the reviewers say; I'll judge Mansour's scholarship based on my reading of her papers, which are quite strong."
          }
        ]
      },
      {
        "statementKey": "B16a1",
        "speaker":3,
        "next": "B16a2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B16a1",
          "speaker":3,
          "next": "B16a2",
          "text": "OK, if you all see the negative letter as trumping the other letters, I'll go along with that."
        }
        ]
      },
      {
        "statementKey": "B16a2",
        "speaker":2,
        "next": "B16a3",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B16a2",
          "speaker":2,
          "next": "B16a3",
          "text": "Well, it seems that Mansour's work has yet to prove it's value. I say let's wait to see more from her."
        }
        ]
      },
      {
        "statementKey": "B16a3",
        "speaker":1,
        "next": "C1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B16a3",
          "speaker":1,
          "next": "C1",
          "text": "Her work is good, but I agree that she needs time to mature. Let's consider teaching."
        }
        ]
      },
      {
        "statementKey": "B16b1",
        "speaker":3,
        "next": "B16b2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B16b1",
          "speaker":3,
          "next": "B16b2",
          "text": "I agree that the general impression of the six letters is that her work is very good."
        }
        ]
      },
      {
        "statementKey": "B16b2",
        "speaker":2,
        "next": "B16b3",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B16b2",
          "speaker":2,
          "next": "B16b3",
          "text": "Yes, Mansour's work has clearly been recognized as significant by some in her field, but what about that very negative letter?"
        }
        ]
      },
      {
        "statementKey": "B16b3",
        "speaker":1,
        "next": "C1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B16b3",
          "speaker":1,
          "next": "C1",
          "text": "Mohammed is right that the general context of all the letters should be important. " +
          "The quality of Mansour's work deserves recognition. Let's talk about teaching."
        }
        ]
      },
      {
        "statementKey": "B16c1",
        "speaker":3,
        "next": "B16c2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B16c1",
          "speaker":3,
          "next": "B16c2",
          "text": "Yes, even though one person finds one paper to be somewhat controversial, " +
          "I think we should set aside such an extreme judgment and look at the bigger picture."
        }
        ]
      },
      {
        "statementKey": "B16c2",
        "speaker":2,
        "next": "B16c3",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B16c2",
          "speaker":2,
          "next": "B16c3",
          "text": "OK, but does that mean we discount the negative letter?"
        }
        ]
      },
      {
        "statementKey": "B16c3",
        "speaker":1,
        "next": "B16c4",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B16c3",
          "speaker":1,
          "next": "B16c4",
          "text": "We can if the reviewer seems to be biased. His basic complaint is that in the" +
          " celebrated paper Mansour was only re-doing work already done by her mentor, who really deserves credit for her ideas."
        }
        ]
      },
      {
        "statementKey": "B16c4",
        "speaker":3,
        "next": "B16c5",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B16c4",
          "speaker":3,
          "next": "B16c5",
          "text": "I think this reviewer can't believe a young woman is capable of scientific insight."
        }
        ]
      },
      {
        "statementKey": "B16c5",
        "speaker":1,
        "next": "C1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B16c5",
          "speaker":1,
          "next": "C1",
          "text": "Exactly. The excellence of Mansour's research ought to earn her promotion and tenure. Let's discuss her teaching."
        }
        ]
      },
      {
        "statementKey": "B16d1",
        "speaker":3,
        "next": "B16d2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B16d1",
          "speaker":3,
          "next": "B16d2",
          "text": "Yes, I agree that Samia's research is very visible. We need her to keep up momentum in that area. She really puts us on the map."
        }
        ]
      },
      {
        "statementKey": "B16d2",
        "speaker":1,
        "next": "B16d3",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B16d2",
          "speaker":1,
          "next": "B16d3",
          "text": "If she doesn't get tenure early here, some other department will hire her. " +
          "We have to cover her area, or we won't be able to offer the PhD in this area."
        }
        ]
      },
      {
        "statementKey": "B16d3",
        "speaker":2,
        "next": "C1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B16d3",
          "speaker":2,
          "next": "C1",
          "text": "Alright, if you see this as a strong record, I won't object to a positive assessment of her research. Should we move on to teaching?"
        }
        ]
      },
      {
        "statementKey": "C1",
        "speaker":3,
        "next": "C2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "C1",
          "speaker":3,
          "next": "C2",
          "text": "I can't believe that some students have the audacity to comment on her clothing. " +
          "Let's make sure we judge her teaching accordingly."
        }
        ]
      },
      {
        "statementKey": "C2",
        "speaker":2,
        "next": "C3",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "C2",
          "speaker":2,
          "next": "C3",
          "text": "The students are right. She's in America, so she should dress like an American. I'm glad she's changed her wardrobe."
        }
        ]
      },
      {
        "statementKey": "C3",
        "speaker":1,
        "next": "C4",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "C3",
          "speaker":1,
          "next": "C4",
          "text": "Mansour has a teaching award. She's been a good undergraduate teacher, and she is critical " +
          "to the graduate program. She attracts the best Ph.D. students."
        }
        ]
      },
      {
        "statementKey": "C4",
        "speaker":3,
        "next": "C5",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "C4",
          "speaker":3,
          "next": "C5",
          "text": "She's a good teacher for upper-division undergraduate and graduate students, even if first- and second-year students seem less comfortable with her."
        }
        ]
      },
      {
        "statementKey": "C5",
        "speaker":2,
        "next": "C6",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "C5",
          "speaker":2,
          "next": "C6",
          "text": "Maybe it's her accent that bothers students. " +
          "I sat in on one intro course, and I had trouble understanding everything she said."
        }
        ]
      },
      {
        "statementKey": "C6",
        "speaker":3,
        "next": "C7",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "C6",
          "speaker":3,
          "next": "C7",
          "text": "We need to calibrate her teaching effectiveness. Considering all course scores, " +
          "her teaching for the intro courses is average for our department. And, as Kathryn said, " +
          "in graduate courses she does very well."
        }
        ]
      },
      {
        "statementKey": "C7",
        "speaker":0,
        "next": "",
        "mood-phrase": "",
        "mood": "",
        "statement": [
          {
            "statementKey": "C7a",
            "speaker":0,
            "next": "C8a",
            "text": "Low scores reflect only cultural differences and do not serve as the most reliable indicator of good teaching."
          },
          {
            "statementKey": "C7b",
            "speaker":0,
            "next": "C8b1",
            "text": "Low scores are low scores and indicate poor teaching."
          },
          {
            "statementKey": "C7c",
            "speaker":0,
            "next": "C8c1",
            "text": "Our procedures require looking at a broad set of assessment tools. Numbers are only one component of evaluating teaching."
          },
          {
            "statementKey": "C7d",
            "speaker":0,
            "next": "D1",
            "text": "Accent and dress negatively affect her teaching of beginning students, who are a critical constituency for us."
          }
        ]
      },
      {
        "statementKey": "C8a",
        "speaker":1,
        "next": "D1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "C8a",
          "speaker":1,
          "next": "D1",
          "text": "OK, we know she's not going to be the most effective teacher for first-year students, but we agree that in general she is a good teacher. Let's talk about service."
        }
        ]
      },
      {
        "statementKey": "C8b1",
        "speaker":3,
        "next": "C8b2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "C8b1",
          "speaker":3,
          "next": "C8b2",
          "text": "Let's remember that her teaching scores have steadily improved over time and that other faculty also have low scores in those introductory courses."
        }
        ]
      },
      {
        "statementKey": "C8b2",
        "speaker":2,
        "next": "D1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "C8b2",
          "speaker":2,
          "next": "D1",
          "text": "I'll concede that her teaching is currently acceptable, but I hope she improves even more. I guess we're moving on to service."
        }
        ]
      },
      {
        "statementKey": "C8c1",
        "speaker":3,
        "next": "C8c2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "C8c1",
          "speaker":3,
          "next": "C8c2",
          "text": "Absolutely. Her students' written comments and the peer reviewers make it clear that Mansour has tried some innovative techniques in the classroom."
        }
        ]
      },
      {
        "statementKey": "C8c2",
        "speaker":1,
        "next": "D1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "C8c2",
          "speaker":1,
          "next": "D1",
          "text": "We can note those details in our letter where we describe her general teaching record as good. Let's discuss her service."
        }
        ]
      },
      {
        "statementKey": "D1",
        "speaker":3,
        "next": "D2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "D1",
          "speaker":3,
          "next": "D2",
          "text": "Clearly we don't need to say much about her service, which seems exemplary, both in the university and to the profession."
        }
        ]
      },
      {
        "statementKey": "D2",
        "speaker":2,
        "next": "D3",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "D2",
          "speaker":2,
          "next": "D3",
          "text": "But has she really contributed in any substantial way to influential committees on campus " +
          "or among her disciplinary peers? All I see is her interest in women's issues."
        }
        ]
      },
      {
        "statementKey": "D3",
        "speaker":1,
        "next": "D4",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "D3",
          "speaker":1,
          "next": "D4",
          "text": "Given the underrepresentation of women in this field, women's issues are important. " +
          "It was the president who put her on many of these committees, invitations she could hardly refuse."
        }
        ]
      },
      {
        "statementKey": "D4",
        "speaker":3,
        "next": "D5",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "D4",
          "speaker":3,
          "next": "D5",
          "text": "Her committee work has not been on the department's most important committees, but it's been useful for each committee to have a woman."
        }
        ]
      },
      {
        "statementKey": "D5",
        "speaker":0,
        "next": "",
        "mood-phrase": "",
        "mood": "",
        "statement": [
          {
            "statementKey": "D5a",
            "speaker":0,
            "next": "D6a1",
            "text": "She has been on about the same number of committees as others. Her local and national service appear fine.She is too focused on only one service issue. I question whether she has made any impact regarding the environment for women.Her service record is excellent. Working on behalf of underrepresented groups is a significant contribution to the field.Service seems like the lowest priority for all of us. I guess hers is ok."
          },
          {
            "statementKey": "D5b",
            "speaker":0,
            "next": "Db1",
            "text": "She is too focused on only one service issue. I question whether she has made any impact regarding the environment for women."
          },
          {
            "statementKey": "D5c",
            "speaker":0,
            "next": "D6c",
            "text": "Her service record is excellent. Working on behalf of underrepresented groups is a significant contribution to the field."
          },
          {
            "statementKey": "D5d",
            "speaker":0,
            "next": "D6d1",
            "text": "Service seems like the lowest priority for all of us. I guess hers is ok."
          }
        ]
      },
      {
        "statementKey": "D6a1",
        "speaker":3,
        "next": "D6a2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "D6a1",
          "speaker":3,
          "next": "D6a2",
          "text": "Actually, I think she has been on more university-level committees than others who come up for tenure."
        }
        ]
      },
      {
        "statementKey": "D6a2",
        "speaker":1,
        "next": "",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "D6a2",
          "speaker":1,
          "next": "",
          "text": "Yes, she has done a better job than most in service and has a mix of average and very good scores in teaching, while she has also made significant national impact in terms of her research. It's clear that her record justifies promotion and tenure."
        }
        ]
      },
      {
        "statementKey": "D6b2",
        "speaker":3,
        "next": "",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "D6b2",
          "speaker":3,
          "next": "",
          "text": "I'm not sure if I do agree, but I don't have time to talk about it now because I have to teach. Kathryn, I guess we have to meet again before we come to a decision."
        }
        ]
      },
      {
        "statementKey": "D6c",
        "speaker":1,
        "next": "",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "D6c",
          "speaker":1,
          "next": "",
          "text": "I think her service is very valuable, like her research and teaching. I see that the majority of us agree that she should be promoted and tenured."
        }
        ]
      },
      {
        "statementKey": "D6d1",
        "speaker":2,
        "next": "D6d2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "D6d1",
          "speaker":2,
          "next": "D6d2",
          "text": "Doesn't it seem like everything is marginal?: mixed teaching scores, ambiguous service, and a research that one of the biggest names in the field thinks is imitative and overblown?"
        }
        ]
      },
      {
        "statementKey": "D6d2",
        "speaker":3,
        "next": "D6d3",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "D6d2",
          "speaker":3,
          "next": "D6d3",
          "text": "I disagree with that summary. Kathryn, I think our review should reflect that we are not in accord."
        }
        ]
      },
      {
        "statementKey": "D6d3",
        "speaker":1,
        "next": "",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "D6d3",
          "speaker":1,
          "next": "",
          "text": "You and I are more enthusiastic, but three of the four of us see Mansour's record as appropriate for promotion and tenure. I think our letter should be more positive than negative, even though it will accompany a split vote."
        }
        ]
      },
      {
        "statementKey": "Db1",
        "speaker":2,
        "next": "D6b2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "Db1",
          "speaker":2,
          "next": "D6b2",
          "text": "I agree that her service record is marginal, like her teaching. And considering the controversy about her research, don't you both agree that we must turn down her early bid for promotion and tenure?"
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
        "speaker": 1, //TODO: need to ask about this. it was previously "chair of unit"
        "next": "B1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "A1",
          "speaker":1,  //TODO: need to ask about this. it was previously "chair of unit"
          "next": "B1",
          "text": "Thanks for agreeing to serve on this year's committee. Among the cases you will consider is Patty Shen's, " +
          "which is unusual in that she is one of the first faculty members to receive a year's leave under the university's " +
          "active service modified duties program. Another reason she is coming up now is because I suggested to Patty," +
          " and she agreed, that she ought to come up this year and not last because of productivity issues."
        }
        ]
      },
      {
        "statementKey": "B1",
        "speaker":1,
        "next": "B2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B1",
          "speaker":1,
          "next": "B2",
          "text": "We'll consider Patty Shen's case first. We'll talk about the three general areas--research, teaching, and service. Let's start by considering research first."
        }
        ]
      },
      {
        "statementKey": "B2",
        "speaker":2,
        "next": "B3",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B2",
          "speaker":2,
          "next": "B3",
          "text": "She has a reasonable but not overwhelming number of publications in good journals for a six-year record. " +
          "Are we supposed to take into account all the time she's had to accumulate that record? I guess we don't count " +
          "pregnancy year, but shouldn't we count the next year?"
        }
        ]
      },
      {
        "statementKey": "B3",
        "speaker":3,
        "next": "B4",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B3",
          "speaker":3,
          "next": "B4",
          "text": "I would say that we wouldn't expect much productivity in the active service modified duties year of leave, " +
          "but there should be more publications in the following year. So I'm unclear about the one-year delay."
        }
        ]
      },
      {
        "statementKey": "B4",
        "speaker":1,
        "next": "B5",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B4",
          "speaker":1,
          "next": "B5",
          "text": "I agree with Caroline that Shen has published high quality papers in good journals. The average level of productivity compared with peers and the extra year does raise some questions, but I think there were lingering health problems."
        }
        ]
      },
      {
        "statementKey": "B5",
        "speaker":2,
        "next": "B6",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B5",
          "speaker":2,
          "next": "B6",
          "text": "George, how do you know that?"
        }
        ]
      },
      {
        "statementKey": "B6",
        "speaker":1,
        "next": "B7",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B6",
          "speaker":1,
          "next": "B7",
          "text": "I called the reviewer who was candid about Patty's situation, because she alluded to " +
          "medical issues in her letter. These appear legitimate."
        }
        ]
      },
      {
        "statementKey": "B7",
        "speaker":3,
        "next": "B8",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B7",
          "speaker":3,
          "next": "B8",
          "text": "I can't believe we didn't know she had medical problems. I'm glad you can explain that."
        }
        ]
      },
      {
        "statementKey": "B8",
        "speaker":2,
        "next": "B9",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B8",
          "speaker":2,
          "next": "B9",
          "text": "If she really had severe medical problems, why didn't she ask for another leave?"
        }
        ]
      },
      {
        "statementKey": "B9",
        "speaker":1,
        "next": "B10",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B9",
          "speaker":1,
          "next": "B10",
          "text": "Initially, Patty thought it was a minor problem, but it turned out to be more severe. " +
          "The evidence is that she was lined up to do this prestigious talk and had to cancel at the last minute.",
        }
        ]
      },
      {
        "statementKey": "B10",
        "speaker":0,
        "next": "",
        "mood-phrase": "",
        "mood": "",
        "statement": [
          {
            "statementKey": "B10a",
            "speaker":0,
            "next": "B11a1",
            "text": "Yes, she had an active services modified duty leave, which provided release from teaching. As the second year off for health problems is not documented, it counts, and we must consider her lack of productivity."
          },
          {
            "statementKey": "B10b",
            "speaker":0,
            "next": "B11b1",
            "text": "It's hard to discern how productive she'll be in the future now that she's a mother with additional responsibilities. Maybe she has been active lately just to get past the tenure hurdle?"
          },
          {
            "statementKey": "B10c",
            "speaker":0,
            "next": "B11c1",
            "text": "She was active and productive before pregnancy and illness. After that, she got back to a productive trajectory, writing journal articles and grant proposals."
          },
          {
            "statementKey": "B10d",
            "speaker":0,
            "next": "B11d1",
            "text": "Patty's papers and grant proposals are well-received, and she is on the way to getting even more funding. She is on the right track."
          }
        ]
      },
      {
        "statementKey": "B11a1",
        "speaker":2,
        "next": "B11a2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B11a1",
          "speaker":1,
          "next": "B11a2",
          "text": "I agree that her record is erratic. We know she got a lot of time and didn't produce much."
        }
        ]
      },
      {
        "statementKey": "B11a2",
        "speaker":3,
        "next": "B11a3",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B11a2",
          "speaker":3,
          "next": "B11a3",
          "text": "Well, her overall number of publications and their general quality seem in the range of what others do."
        }
        ]
      },
      {
        "statementKey": "B11a3",
        "speaker":1,
        "next": "C1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B11a3",
          "speaker":1,
          "next": "C1",
          "text": "I agree, but if only two of the four of us think her research records has met the standards established " +
          "by the university, then we'll have to indicate this disagreement in our letter."
        }
        ]
      },
      {
        "statementKey": "B11b1",
        "speaker":3,
        "next": "B11b2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B11b1",
          "speaker":3,
          "next": "B11b2",
          "text": "Not everyone can crank out the same number of publications every year, given the time delays of some journals. " +
          "And, as a mother, I think it is possible to work after childbirth."
        }
        ]
      },
      {
        "statementKey": "B11b2",
        "speaker":2,
        "next": "B11b3",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B11b2",
          "speaker":2,
          "next": "B11b3",
          "text": "Susan, I'm not sure Patty will be as productive as you."
        }
        ]
      },
      {
        "statementKey": "B11b3",
        "speaker":1,
        "next": "C1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B11b3",
          "speaker":1,
          "next": "C1",
          "text": "We're digressing, so let's summarize her research record as being adequate, despite certain medical issues. " +
          "Let's move on to talk about teaching."
        }
        ]
      },
      {
        "statementKey": "B11c1",
        "speaker":3,
        "next": "B11c2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B11c1",
          "speaker":3,
          "next": "B11c2",
          "text": "Patty's research has been good and does appear to be back on track."
        }
        ]
      },
      {
        "statementKey": "B11c2",
        "speaker":1,
        "next": "C1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B11c2",
          "speaker":1,
          "next": "C1",
          "text": "I agree that her research productivity seems good. Let's consider her teaching."
        }
        ]
      },
      {
        "statementKey": "B11d1",
        "speaker":3,
        "next": "B11d2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B11d1",
          "speaker":3,
          "next": "B11d2",
          "text": "Yes, it looks like she has good prospects for getting more funding this year. And she has managed to support graduate students."
        }
        ]
      },
      {
        "statementKey": "B11d2",
        "speaker":1,
        "next": "C1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "B11d2",
          "speaker":1,
          "next": "C1",
          "text": "All in all, her research appears to be very good now and likely to make a big impact. Let's go on to teaching."
        }
        ]
      },
      {
        "statementKey": "C1",
        "speaker":3,
        "next": "C2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "C1",
          "speaker":3,
          "next": "C2",
          "text": "All indications are that Patty has been a fine teacher and has done excellent work in the classroom overall."
        }
        ]
      },
      {
        "statementKey": "C2",
        "speaker":2,
        "next": "C3",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "C2",
          "speaker":2,
          "next": "C3",
          "text": "It looks like once she had a child, her teaching scores dipped. During that period her research and her " +
          "teaching both suffered."
        }
        ]
      },
      {
        "statementKey": "C3",
        "speaker":0,
        "next": "",
        "mood-phrase": "",
        "mood": "",
        "statement": [
          {
            "statementKey": "C3a",
            "speaker":0,
            "next": "C4a1",
            "text": "Comments from students suggest that she's a good teacher and will continue to be so."
          },
          {
            "statementKey": "C3b",
            "speaker":0,
            "next": "C4b",
            "text": "Since there are low scores, I'd say evidence is not definitive regarding her future performance."
          },
          {
            "statementKey": "C3c",
            "speaker":0,
            "next": "C4c1",
            "text": "Teaching scores improved after her illness, but that could be a temporary gain."
          },
          {
            "statementKey": "C3d",
            "speaker":0,
            "next": "D1",
            "text": "Because our labs are close, I get to hear what Patty's students say as they are coming and going from seeing her. They seem very impressed with her attention."
          }
        ]
      },
      {
        "statementKey": "C4a1",
        "speaker":3,
        "next": "C4a2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "C4a1",
          "speaker":3,
          "next": "C4a2",
          "text": "Her teaching scores are at the departmental average above. " +
          "I liked the syllabus and some of the class exercises when I observed her class. " +
          "Commendation from students included in the package for her teaching award are excellent."
        }
        ]
      },
      {
        "statementKey": "C4a2",
        "speaker":1,
        "next": "D1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "C4a2",
          "speaker":1,
          "next": "D1",
          "text": "Her teaching should be noted as good. What do you think of her service?"
        }
        ]
      },
      {
        "statementKey": "C4b",
        "speaker":1,
        "next": "D1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "C4b",
          "speaker":1,
          "next": "D1",
          "text": "We're trying to forecast over time. She has demonstrated good teaching in the past, and right now her evaluations are fine. My prediction is she will continue to be a solid teacher. OK, it's time to talk about service."
        }
        ]
      },
      {
        "statementKey": "C4c1",
        "speaker":3,
        "next": "C4c2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "C4c1",
          "speaker":3,
          "next": "C4c2",
          "text": "Since she was officially given a changed schedule because of pregnancy and illness, we should not assume she had a lot of extra time."
        }
        ]
      },
      {
        "statementKey": "C4c2",
        "speaker":1,
        "next": "D1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "C4c2",
          "speaker":1,
          "next": "D1",
          "text": "Yes, we should not diminish the teaching portfolio she has presented, which is right in " +
          "line with our general standard. Let's consider service now."
        }
        ]
      },
      {
        "statementKey": "D1",
        "speaker":2,
        "next": "D2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "D1",
          "speaker":2,
          "next": "D2",
          "text": "Patty contributed good service earlier, although after her illness she has not continued because of family " +
          "and health issues. It might be understandable, but is it acceptable if others have to do more?"
        }
        ]
      },
      {
        "statementKey": "D2",
        "speaker":3,
        "next": "D3",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "D2",
          "speaker":3,
          "next": "D3",
          "text": "I think that each of us has different issues at different phases that affect choices of service. She's still working with the center she helped develop and that is useful service."
        }
        ]
      },
      {
        "statementKey": "D3",
        "speaker":0,
        "next": "",
        "mood-phrase": "",
        "mood": "",
        "statement": [
          {
            "statementKey": "D3a",
            "speaker":0,
            "next": "D4a",
            "text": "Just how important is service anyway? She's certainly made valued contributions."
          },
          {
            "statementKey": "D3b",
            "speaker":0,
            "next": "D4b",
            "text": "I think everyone who is part of the community ought to do something significant. Her record could be better."
          },
          {
            "statementKey": "D3c",
            "speaker":0,
            "next": "E1",
            "text": "Her reduction in service imposed costs on everyone else."
          },
          {
            "statementKey": "D3d",
            "speaker":0,
            "next": "E1",
            "text": "Her service is acceptable, considering the period of leave and the illness."
          }
        ]
      },
      {
        "statementKey": "D4a",
        "speaker":3,
        "next": "E1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "D4a",
          "speaker":3,
          "next": "E1",
          "text": "I agree that Patty's service is better than average."
        }
        ]
      },
      {
        "statementKey": "D4b",
        "speaker":2,
        "next": "E1",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "D4b",
          "speaker":2,
          "next": "E1",
          "text": "It's true that she could have done more."
        }
        ]
      },
      {
        "statementKey": "E1",
        "speaker":1,
        "next": "E2",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "E1",
          "speaker":1,
          "next": "E2",
          "text": "OK, we need to conclude soon, so we can discuss other cases. Patty's research is reasonable, " +
          "her teaching is acceptable or better, and her service meets the minimum expectation. " +
          "The question before us is whether this \"middle of the road\" profile is at the level required for promotion to tenure. " +
          "We need to turn to external letters in this case to see if they can provide further clarification on the merits of " +
          "this case."
        }
        ]
      },
      {
        "statementKey": "E2",
        "speaker":2,
        "next": "E3",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "E2",
          "speaker":2,
          "next": "E3",
          "text": "The letters go along with that description of her work as average. All of them indicate that she is a solid researcher, but there's nothing earth-shattering noted."
        }
        ]
      },
      {
        "statementKey": "E3",
        "speaker":3,
        "next": "E4",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "E3",
          "speaker":3,
          "next": "E4",
          "text": "Caroline, I think that you forgot to mention that one reviewer had nominated a paper of Patty's for a prize, and another letter praised the clarity and efficiency of her publications."
        }
        ]
      },
      {
        "statementKey": "E4",
        "speaker":1,
        "next": "",
        "mood-phrase": "",
        "mood": "",
        "statement": [{
          "statementKey": "E4",
          "speaker":1,
          "next": "",
          "text": "Now that I'm looking at the letters again, I see that each reviewer does volunteer that Patty's achievements are worthy of promotion and tenure at his or her research university. I assume we agree?"
        }
        ]
      }
    ]
  }
];
