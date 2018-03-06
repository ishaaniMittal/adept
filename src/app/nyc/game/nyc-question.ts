export class NYCQuestion {
  "name": string;
  "id": number;
  "questions": [
    {
      "id": number,
      "prompt": string,
      "maxPoints":{
        "health": number,
        "research": number,
        "allies": number,
        "service": number,
        "teaching": number
      },
      "options": [{
        "id":number,
        "option": string,
        "health": number,
        "research": number,
        "allies": number,
        "service": number,
        "teaching": number
      }],
      "response":string


    }
    ];
}
