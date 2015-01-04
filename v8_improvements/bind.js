function something(){
    console.log(this.Binded);

}

var somethingBinded = something.bind({Binded:"Binded text"});

somethingBinded();
