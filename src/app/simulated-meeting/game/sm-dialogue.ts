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
        "statementKey":string,
        "speaker":number,
        "next":string,
        "text":string
      }];

    }
    ];
}
