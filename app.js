var person = {
    firstname: "Kagabu",
    lastname: "Isa",
    getFullName: function(){
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
    }

}

var logName = function(lang1,lang2){
    console.log('Logged '+ this.getFullName());
    console.log('Arguments ' + lang1 + " " + lang2)
    console.log("----------------")
}

var logPersonName = logName.bind(person);

logPersonName();

logName.call(person,"en","es");
logName.apply(person,["en","es"]);

(function(lang1,lang2){
  console.log('Logged '+ this.getFullName());
  console.log('Arguments ' + lang1 + " " + lang2)
  console.log("----------------")
}).apply(person,['en','es']);