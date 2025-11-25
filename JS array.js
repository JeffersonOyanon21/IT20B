class array{

    constructor(initialData = []){
        this.data ={};
        this.length = 0;
         
        //Assigned element to index
        for (let i=0; i<initialData.length; i++){
            this.data[i] = iniatialData[i];
            this.length;

        }
    }

    traverse(){
        let output = "";

        for(let i=0; i<this.length; i++){
          output += this.data[i] + " ";

        }
         
        console.log(output);

    }

insert(index, element){
    //correcting statement
    if(index <0 || index > this.length){
        console.log("invalid Index");
        return;

    }
    //shifting condition
    for(let i=this.length; i>index; i--){
        this.data[i] = this.data[i-1];
   
    }

    }
}


















