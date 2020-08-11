import { Directive, Renderer2 , OnInit, ElementRef, HostBinding,HostListener} from "@angular/core";

@Directive({
  selector: '[customInput]'
})

export class CustomInputDirective implements OnInit {

  noOfDigits=4;
  maxValue=5000;

  constructor(private userValue: ElementRef) {

  }

    ngOnInit(){
       this.userValue.nativeElement.value=0

    }
    @HostListener('keyup') onInput(){

         // alternate code
      // this.userValue.nativeElement.value %= Math.pow(10,this.noOfDigits)
      //
      //
      // if (this.userValue.nativeElement.value > this.maxValue)
      // {
      //   this.userValue.nativeElement.value = this.maxValue;
      // }




      if (this.userValue.nativeElement.value.toString().length >= this.noOfDigits || this.userValue.nativeElement.value > this.maxValue)
      {
        this.userValue.nativeElement.value = this.maxValue;
      }

    }

}
