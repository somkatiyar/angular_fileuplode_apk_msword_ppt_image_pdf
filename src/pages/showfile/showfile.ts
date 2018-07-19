import { Component, OnInit, ElementRef, Inject} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../service/service';


import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'showfile',
  templateUrl: './showfile.html',
  styleUrls: ['./showfile.css'],

})
export class ShowFile implements OnInit {



    showFileData :any =[];

      apk=[];
      image=[];
      ppt=[];
      msword=[];
      pdf=[];
      fileload: string;
      downLodeFile :any;



  constructor(private myservice : DataService, private element: ElementRef, @Inject('file_load') private file_load: string) {this.fileload=file_load }

  ngOnInit() {
    this.showFile();

}




showFile(){

this.myservice.showFile().subscribe((data) => {

  if ( data["status"] ) {
    this.showFileData = data["data"];


    console.log(this.showFileData);
 for (var i=0; i<this.showFileData.length; i++) {
    if(this.showFileData[i]['fileType']=="application/vnd.android.package-archive") {

        this.apk.push(this.showFileData[i]);

    }

    if(this.showFileData[i]['fileType']=="application/pdf") {

        this.pdf.push(this.showFileData[i]);

    }

    if(this.showFileData[i]['fileType']=="application/vnd.ms-powerpoint") {

        this.ppt.push(this.showFileData[i]);


    }

    if(this.showFileData[i]['fileType']=="image/png") {

        this.image.push(this.showFileData[i]);

    }

    if(this.showFileData[i]['fileType']=="application/vnd.openxmlformats-officedocument.wordprocessingml.document") {

        this.msword.push(this.showFileData[i]);

    }

}

  }
});

}

//delete file function

delete(id,fileType){



  var txt;
  var r = confirm("R U Sure..! Do U Wana Delete This File.?");
  if (r == true) {


  var passValue = {"_id":id};
  console.log(passValue);

  this.myservice.removeFile(passValue).subscribe((data) => {


      if (data["status"] ) {
        console.log("file delete",data);

      }


    });

if(fileType=="application/vnd.android.package-archive"){


  for (var i =0; i < this.apk.length; i++) {
    if ( this.apk[i]["_id"]==id ) {
      this.apk.splice(i,1);
    }
  }

}

if(fileType=="application/vnd.ms-powerpoint"){

  for (var i =0; i < this.ppt.length; i++) {
    if ( this.ppt[i]["_id"]==id ) {
      this.ppt.splice(i,1);
    }
  }

}


if(fileType=="png/image"){

  for (var i =0; i < this.image.length; i++) {
    if ( this.image[i]["_id"]==id ) {
      this.image.splice(i,1);
    }
  }

}




if(fileType=="application/pdf"){
confirm("R U sure...! Do U wana Delete This File..?");
  for (var i =0; i < this.pdf.length; i++) {
    if ( this.pdf[i]["_id"]==id ) {
      this.pdf.splice(i,1);
    }
  }

}


if(fileType=="application/vnd.openxmlformats-officedocument.wordprocessingml.document"){

  for (var i =0; i < this.msword.length; i++) {
    if ( this.msword[i]["_id"]==id ) {
      this.msword.splice(i,1);
    }
  }

}

}else {
  return 0;
}


}


// downlode function for downlode any file

downlode(fileName) {
  console.log(fileName);
var x=  fileName.split('.').pop();
console.log(x);

if(x=="png" || x=="jpeg"){
    this.downLodeFile=this.fileload+"image"+"/"+fileName;
}

if(x=="ppt"){
    this.downLodeFile=this.fileload+"ppt"+"/"+fileName;
}

if(x=="pdf"){
    this.downLodeFile=this.fileload+"pdf"+"/"+fileName;
}
if(x=="apk"){
    this.downLodeFile=this.fileload+"apk"+"/"+fileName;
}
if(x=="docx" || x=="doc"){
    this.downLodeFile=this.fileload+"msword"+"/"+fileName;
}





}








}
