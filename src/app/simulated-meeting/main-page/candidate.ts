export class Candidate {

  "candidate_id":number;
  "name":string;
  "short_desc":string;
  "image":string;
  "career_account":string[];
  "dossier":{
    "educational_background":string[],
    "publications":string[],
    "conference proceedings":string[],
    "presentations":string[],
    "research":string[],
    "funding":{
      "funding_resources":string[],
      "extra_funding":string
    }

    "graduate_student_advisement":{
      "opening_line":string,
      "advisement":string[]
    },
    "teaching":string[],
    "service":string[],
    "honors_and_awards":string[]
  };
  "committee_member_one":{
    "committee_id":number,
    "name":string,
    "image":string,
    "description":string
  };
  "committee_member_two":{
    "committee_id":number,
    "name":string,
    "image":string,
    "description":string,
  };
  "committee_member_three":{
    "committee_id":number,
    "name":string,
    "image":string,
    "description":string
  }

}

