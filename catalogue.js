class School {
    constructor(name, level, noOfStudents){
        this._name = name;
        this._level= level;
        this._noOfStudents = noOfStudents;
    }
    get name(){
        return this._name;
    }
    get level(){
        return this._level;
    }
    get noOfStudents(){
        return this._noOfStudents;
    }

    set noOfStudents(noOfStudents){
        if(typeof noOfStudents == 'number'){
            this._noOfStudents = newNoOfStudents
        } else{
            console.log('invalid input, it must be a number!');
        }
    }

     quickFacts(){
       console.log(` ${this._name} school educates ${this._noOfStudents} at ${this._level}`);
    }
    static pickSubstituteTeacher(substituteTeachers){
        let randomTeacher = Math.floor (substituteTeachers.length * Math.random());
        console.log (substituteTeachers[randomTeacher]);
       }
    }

    class PrimarySchool extends School{
        constructor(name,noOfStudents,pickupPolicy){
            super(name,'primary',noOfStudents);
            this._pickupPolicy = pickupPolicy;
        }
        get pickupPolicy(){
            return this.pickupPolicy;
        }
    }
    class MiddleSchool extends School{
        constructor(name,noOfStudents){
            super(name,'middle', noOfStudents);
        }
    }

    class HighSchool extends School{
            constructor(name,noOfStudents,sportsTeams){
                super(name,'high',noOfStudents);
                this._sportsTeams = sportsTeams;
            }
            get sportsTeams(){
                return this.sportsTeams;
            }
    }


    const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

console.log(lorraineHansbury.quickFacts());

console.log(lorraineHansbury.noOfStudents);
//console.log(lorraineHansbury.pickupPolicy);

School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'] );

console.log(alSmith._sportsTeams);