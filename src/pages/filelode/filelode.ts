import { Component, OnInit, ElementRef, Inject} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../service/service';


import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'filelode',
  templateUrl: './filelode.html',
  styleUrls: ['./filelode.css'],

})
export class FileLode implements OnInit {


   file: File;
    details : any= {  "fileName": "" };
    fileData :any={};
    showFileData =[];

      apk=[];
      image=[];
      ppt=[];
      msword=[];
      pdf=[];
      today:number =Date.now();




  constructor(private myservice : DataService, private element: ElementRef, @Inject('file_load') private file_load: string) { }

  ngOnInit() {
    this.showFile();

}




showFile(){

this.myservice.showFile().subscribe((data) => {

  if ( data["status"] ) {
    this.showFileData = data["data"];

    // console.log(this.showFileData);
 for (var i=0; i<this.showFileData.length; i++) {
    if(this.showFileData[i]['fileType']=="apk") {

        this.apk.push(this.showFileData[i]);

    }

    if(this.showFileData[i]['fileType']=="pdf") {

        this.pdf.push(this.showFileData[i]);

    }

    if(this.showFileData[i]['fileType']=="ppt") {

        this.ppt.push(this.showFileData[i]);

    }

    if(this.showFileData[i]['fileType']=="image") {

        this.image.push(this.showFileData[i]);

    }

    if(this.showFileData[i]['fileType']=="msword") {

        this.msword.push(this.showFileData[i]);

    }

}

  }
});

}



















  changeListner(event) {
    var reader = new FileReader();
    this.file = event.target.files[0];
    reader.readAsDataURL(event.target.files[0]);
  }



  create() {
  // console.log(this.file);
    var formData = new FormData();
    formData.append("file", this.file);
    this.myservice.uplodeFileDocs(formData).subscribe((data) => {
     console.log(data);

     if ( data["status"] ) {
       if (data.status == 1) {
         var newEntry = { "fileName":data.contents,"fileType":data.fileType,"projectName" :this.fileData.projectName ,"dateCreated":this.today };
         // console.log(newEntry);
         this.details = newEntry;
         this.myservice.insertFile(this.details).subscribe((data) => {
           console.log(data);
         });
       }

     }

    });

  }



}











 // "fileName": data.contents,

// "fileType": this.fileData.fileType,"dateCreated": this.fileData.dateCreated,"dateUpdated": this.fileData.dateUpdated
