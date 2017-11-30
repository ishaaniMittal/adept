export class SMDialog {
  currentDialogContent:string;
  currentDialogSpeaker:number;
  currentDialogStatementKey:string;
  nextDialogStatementKey:string;
  panelImage:string;
  speaker_image:string;
  currentId:number;
  reference:[{
    url:string;
    desc:string
  }];
  clicked:boolean
}
