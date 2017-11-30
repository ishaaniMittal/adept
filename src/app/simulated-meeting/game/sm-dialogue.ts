export class SMDialogue {
  "name":string;
  "id":number;
  "conversation":[
    {
      "statementKey":string,
      "speaker":number,
      "next":string,
      "mood-phrase":string,
      "mood":string,
      "statement":[{
        "id":number;
        "statementKey":string,
        "speaker":number,
        "next":string,
        "image":string,
        "speaker_image":string,
        "text":string,
        "reference":[{
          "url":string,
          "desc":string
        }]
      }];

    }
    ];
}
