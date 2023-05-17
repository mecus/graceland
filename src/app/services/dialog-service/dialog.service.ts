import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReadMoreComponent } from '../../components';



@Injectable({
  providedIn: 'root'
})
export class DialogService {
  readMoreDialogRef: any;
  constructor(
    public _dialog: MatDialog
  ) { }
  readMore(data: any){
    this.readMoreDialogRef = this._dialog.open(ReadMoreComponent, {
      data: data,
      // width: "600px",
      disableClose: false,
      // hasBackdrop: true
    });
    this.readMoreDialogRef.afterClosed().subscribe(res => {
      console.log(res)
    });

  }
  getOurTopServices(){
    return DATA;
  }
  getOurServices(){
    return DATASERVICE;
  }
}



const DATA = [
  {
    "title": "Immigration",
    "img": "assets/icons/immigration.png",
    "text": [
      "We offer specialist advice in a wide range of Immigration Services to individuals and families wish to enter the UK, extend their stay and wish to settle in the UK. Our extensive experience in the UK Immigration law means that we can tailor our advice to the needs of any client looking to visit and/ or settle in the UK. Our fees: we operate on an agreed fixed fee basis and always keep our costs reasonable. The cost can be between £750-£3,500 plus VAT.",
      "Who will carry out the work?",
      " Director assisted by solicitor; Solicitor/Director assisted by a paralegal; All work supervised overseen by Director",
      "Initial attendance, assessing documents, advising on the matter, obtaining further evidence, engaging with other parties, preparing case, attending court, providing update and advising on outcome.",
      "The costs quoted here do not include:",
      "Any disbursement: this may include Application fee, court fee, and disbursement may attract VAT like: medical / expert / barristers’ fee.",
      "Time scales: It is difficult to anticipate how long each individual case may take. We estimate that this kind of matter can take 2-12 months",
      // "We offer specialist advice in a wide range of Immigration Services to individuals and families wish to enter the UK, extend their stay and wish to settle in the UK. Our extensive experience in the UK Immigration law means that we can tailor our advice to the needs of any client looking to visit and or settle in the UK.",
      // "Our fees: we operate on an agreed fixed fee basis and always keep our costs reasonable. The cost can be between £750-£3,500"
    ]
  },
  {
    "title": "Family",
    "img": "assets/icons/family.png",
    "text": [
      "Graceland Solicitors has a broad range of experience and handles all aspects of family law. Key specialisms include: representing the parents in Care proceedings, the victims of domestic violence and assisting clients with securing a financial settlement following the breakdown of a marriage. The team also handles matters such as special guardianship order, Child/Children custody/ contact / arrangement order, and prohibited order. We have legal aid franchise in dealing with family matters. If you do not qualify for Legal Aid, our cost can be between £1,500 - £10,000 plus VAT.",
      "Who will carry out the work?",
      "Director assisted by solicitor; Solicitor/Director assisted by a paralegal; All work supervised overseen by either Supervisor of Family department or Director",
      "What services are included?",
      "Initial attendance, assessing documents, advising on the matter, obtaining further evidence, engaging with other parties, preparing case, attending court, providing update and advising on outcome.",
      "The costs quoted here do not include:",
      "Any disbursement: this may include Application fee, court fee, and disbursement may attract VAT like: medical / expert / barristers’ fee.",
      "Time scales: It is difficult to anticipate how long each individual case may take. We estimate that this kind of matter can take 2-12 months",

      // "Graceland Solicitors has a broad range of experience and handles all aspects of family law. Key specialisms include: representing the parents in Care proceedings, the victims of domestic violence and assisting clients with securing a financial settlement following the breakdown of a marriage.",
      // "The team also handles matters such as special guardianship order, Child/Children custody/ contact / arrangement order, and prohibited order. We have legal aid franchise in dealing with family matters. If you do not qualify for Legal Aid, our cost can be between £1,500 - £10,000 plus VAT."
    ]
  },
  {
    "title": "Crime",
    "img": "assets/icons/cuff.png",
    "text": [
      "Our crime team is available on an emergency basis for people 24 hours a day, 365 days a year. We represent our clients at Police station, Magistrate Court, Crown Court and appeal court. Our team has a sound knowledge of the criminal justice system and the ability to assemble first-rate evidence and documentation. We also secure the services of the highest quality experts. We aim to achieve the best possible outcome for you. We hold legal aid franchise in dealing with crime matters. If you do not qualify for Legal Aid, our cost can be between £500 - £5000 plus VAT.",
      "Who will carry out the work? ",
      "Director assisted by solicitor; Solicitor/Director assisted by a paralegal; All work supervised overseen by either Supervisor of Crime department or Director",
      "What services are included?",
      "Initial attendance, assessing documents, advising on the matter, obtaining further evidence, engaging with police, crown prosecution services & probation service, preparing case, attending court, providing update and advising on outcome.",
      "The costs quoted here do not include:",
      "Any disbursement: this may include Application fee, court fee, and disbursement may attract VAT like: medical / expert / barristers’ fee.",
      "Time scales: It is difficult to anticipate how long each individual case may take. We estimate that this kind of matter can take 2-12 months",

      // "Our crime team is available on an emergency basis for people 24 hours a day, 365 days a year. We represent our clients at Police station, Magistrate Court, Crown Court and appeal court. Our team has a sound knowledge of the criminal justice system and the ability to assemble first-rate evidence and documentation.",
      // "We also secure the services of the highest quality experts. We aim to achieve the best possible outcome for you. We hold legal aid franchise in dealing with crime matters."
    ]
  }
]
const DATASERVICE = [
  {
    "title": "Housing",
    "subtitle": " Residential property sale / Commercial Leases",
    "img": "assets/images/apartment.jpg",
    "text": [
      "Our housing department covers a wide range of housing matters, including unlawful eviction and possession claims, homelessness appeals, disrepair, neighbourhood disputes against local authority, Residential property sale, Commercial Lease, landlord & tenant matters and judicial reviews.",
      "We regularly represent clients in the courts ensuring our client receive the highest quality assistance throughout their case. We have legal aid franchise in dealing with housing matters. If you do not qualify for Legal Aid, our cost can be between £500 - £5000 plus VAT.",
      "Who will carry out the work? ",
      " Director assisted by solicitor; Solicitor/Director assisted by a paralegal; All work supervised overseen by either Supervisor of Housing department or Director",
      "What services are included?",
      "Initial attendance, assessing documents, advising on the matter, obtaining further evidence, engaging with other parties, preparing case, attending court,  providing update and advising on outcome.",
      "The costs quoted here do not include:",
      "Any disbursement: this may include Application fee, court fee, and disbursement may attract VAT like: medical / expert / barristers’ fee.",
      "Time scales: It is difficult to anticipate how long each individual case may take. We estimate that this kind of matter can take 2-12 months",

      // "Our housing department covers a wide range of housing matters, including unlawful eviction and possession claims, homelessness appeals, disrepair, neighbourhood disputes against local authority, landlord &amp; tenant matters and judicial reviews.",
      // "We regularly represent clients in the courts ensuring our client receive the highest quality assistance throughout their case. We have legal aid franchise in dealing with housing matters. If you do not qualify for Legal Aid, our cost can be between £500 - £5000 plus VAT."
    ]
  },
  {
    "title": "Employment",
    "img": "assets/images/employ-service.png",
    "text": [
      "Our employment department has considerable expertise in professional Disciplinary Proceedings, Discrimination and the equality Act 2010, Negotiating severance arrangements and settlement agreements, redundancy and unfair dismissal.",
      "We will provide you with a free initial telephone consultation to find out whether we can meet your needs and to discuss funding options available to you. The arrangements we offer are: fee agreement hourly rate retainer / Agreed fixed fee arrangement, the cost is normally between £500 - £10,000 plus VAT.",
      "Who will carry out the work?",
      " Director assisted by solicitor; Solicitor/Director assisted by a paralegal; All work supervised overseen by either Supervisor of Housing department or Director",
      "What services are included?",
      "Initial attendance, assessing documents, advising on the matter, obtaining further evidence, engaging with other parties, preparing case, attending court, providing update and advising on outcome.",
      "The costs quoted here do not include:",
      "Any disbursement: this may include Application fee, court fee, and disbursement may attract VAT like: medical / expert / barristers’ fee.",
      "Time scales: It is difficult to anticipate how long each individual case may take. We estimate that this kind of matter can take 2-12 months"

    ]
  },
  {
    "title": "Welfare",
    "img": "assets/images/job-center-service.png",
    "text": [
      "Our dedicated welfare solicitor’s team assist you with reviews, Appeals and dispute against incorrect decisions. We are also able to provide professional advice and representation if you have been accused of benefit Fraud & over payment. Our cost can be between £350 - £1000 plus VAT",
      "Who will carry out the work?",
      " Director assisted by solicitor; Solicitor/Director assisted by a paralegal; All work supervised overseen by Director",
      "What services are included?",
      "Initial attendance, assessing documents, advising on the matter, obtaining further evidence, engaging with other parties, preparing case, attending court, providing update and advising on outcome.",
      "The costs quoted here do not include:",
      "Any disbursement: this may include Application fee, court fee, and disbursement may attract VAT like: medical / expert / barristers’ fee.",
      "Time scales: It is difficult to anticipate how long each individual case may take. We estimate that this kind of matter can take 2-12 months"
    ]
  },
  {
    "title": "Traffic Offence",
    "img": "assets/images/driving-service.png",
    "text": [
      "We have highly experienced road traffic solicitors to defend motoring prosecutions.",
      "If you have been involved in a motoring offence or have been served a Notice of Intended Prosecution , then get help and legal advice from our team of specialists.",
      "We operate on an agreed fixed fee basis and always keep our costs reasonable, Our cost is £1200 - £2500 plus VAT. You may also be eligible for Public Fund.",

      "Who will carry out the work?",
      " Director assisted by solicitor; Solicitor/Director assisted by a paralegal; All work supervised overseen by Director",
      "What services are included?",
      "Initial attendance, assessing documents, advising on the matter, obtaining further evidence, engaging with other parties, preparing case, attending court, providing update and advising on outcome.",
      "The costs quoted here do not include:",
      "Any disbursement: this may include Application fee, court fee, and disbursement may attract VAT like: medical / expert / barristers’ fee.",
      "Time scales: It is difficult to anticipate how long each individual case may take. We estimate that this kind of matter can take 1-6 months"
    ]
  }
]
